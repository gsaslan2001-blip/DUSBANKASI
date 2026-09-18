"""DUS hastalık infografiklerini NotebookLM Studio'da tek tek üretir.

Akış kasıtlı olarak at-most-once davranır: bir konu gönderilmeden hemen önce
``inflight`` olarak kaydedilir. Ağ bağlantısı belirsiz biçimde koparsa sonraki
çalıştırma aynı konuyu otomatik olarak yeniden göndermez.
"""

from __future__ import annotations

import argparse
import json
import os
import re
import sys
import time
import unicodedata
import urllib.error
import urllib.request
from datetime import datetime, timezone
from pathlib import Path
from typing import Any


PROJECT_ROOT = Path(__file__).resolve().parent.parent
DEFAULT_MCP_URL = os.environ.get("MCP_URL", "http://127.0.0.1:8000/mcp")
DEFAULT_NOTEBOOK_ID = "4189682e-7904-434d-ac1f-899ce172af80"
EXPECTED_NOTEBOOK_TITLE = "Görsel"
PROMPT_PATH = PROJECT_ROOT / "scripts" / "prompts" / "dus_gorsel_hafiza_ayirici_tani_v2.txt"
DEFAULT_STATE_PATH = (
    PROJECT_ROOT
    / "scripts"
    / "recovery"
    / "notebooklm_infographics"
    / f"{DEFAULT_NOTEBOOK_ID}.json"
)

SOURCE_PATHS = (
    Path(r"C:\Users\FURKAN\Desktop\DUS\patoloji\2026 Patoloji.pdf"),
    Path(r"C:\Users\FURKAN\Desktop\DUS\Radyoloji\2026_Radyoloji .pdf"),
    Path(r"C:\Users\FURKAN\Desktop\DUS\Mikrobiyoloji\Mikrobiyoloji Konu Anlatımı.pdf"),
    Path(r"C:\Users\FURKAN\Desktop\DUS\Periodontoloji\periodontoloji.pdf"),
    Path(r"C:\Users\FURKAN\Desktop\DUS\Farmakoloji\Yavuz Şahin Farmakoloji 8. Baskı.pdf"),
)

# Her girdi tek studio_create çağrısıdır. Birleşik satırlar yalnız kullanıcının
# verdiği aynı klinik başlığın parçalarıysa birlikte tutulur; Tip I/II ve
# nodozum/induratum ayrı hastalık oldukları için ayrılmıştır.
TOPICS = (
    "Melanosit İlişkili Lezyonlar (Nevüsler, Malign Melanom Tipleri, Pigmentasyon Patolojileri)",
    "Benign Epitelyal Tümörler",
    "Deri Eklerinin Tümörleri (Adneksiyal Tümörler)",
    "Aktinik Keratoz (Solar Keratoz)",
    "Skuamöz Hücreli Kanser (SCC)",
    "Keratoakantoma",
    "Bazal Hücreli Karsinom (BCC)",
    "Mastositoz",
    "İktiyozis (Balık Pulu Hastalığı)",
    "Ürtiker",
    "Akut Egzamatöz Dermatit",
    "Eritema Multiforme",
    "Psöriyazis (Sedef Hastalığı)",
    "Seboreik Dermatit",
    "Liken Simpleks Kronikus",
    "Liken Planus",
    "Büllöz Hastalıklar (Genel Sınıflandırma)",
    "Pemfigus Grubu",
    "Büllöz Pemfigoid",
    "Mukozal Membran Pemfigoidi (Skatrisyel Pemfigoid)",
    "Dermatitis Herpetiformis",
    "Porfiriya",
    "Epidermolizis Bülloza",
    "Pannikülit (Subkutan Yağ Dokusu İnflamasyonları)",
    "Eritema Nodozum",
    "Eritema İnduratum",
    "Nevoid Bazal Hücreli Karsinom Sendromu (Gorlin Sendromu)",
    "Cowden Sendromu",
    "Nörofibromatozis Tip I",
    "Nörofibromatozis Tip II",
    "Kseroderma Pigmentozum",
)

TERMINAL_STATES = {"submitted", "completed", "failed"}
QUOTA_MARKERS = (
    "rate limited",
    "rate limit",
    "quota",
    "resource exhausted",
    "code 8",
)


def utc_now() -> str:
    return datetime.now(timezone.utc).isoformat()


def topic_key(topic: str) -> str:
    folded = unicodedata.normalize("NFKD", topic).encode("ascii", "ignore").decode("ascii")
    return re.sub(r"[^a-z0-9]+", "-", folded.casefold()).strip("-")


def render_prompt(template: str, topic: str) -> str:
    marker = "__ODAK_KONU__"
    if template.count(marker) != 1:
        raise ValueError(f"Prompt şablonunda tam bir {marker} bulunmalı")
    return template.replace(marker, topic)


def is_quota_error(message: str) -> bool:
    normalized = message.casefold()
    return any(marker in normalized for marker in QUOTA_MARKERS)


def atomic_write_json(path: Path, value: dict[str, Any]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    temp_path = path.with_suffix(path.suffix + ".tmp")
    temp_path.write_text(json.dumps(value, ensure_ascii=False, indent=2), encoding="utf-8")
    os.replace(temp_path, path)


def load_state(path: Path, notebook_id: str) -> dict[str, Any]:
    if path.exists():
        state = json.loads(path.read_text(encoding="utf-8"))
        if state.get("notebook_id") != notebook_id:
            raise RuntimeError("Checkpoint başka bir NotebookLM defterine ait")
    else:
        state = {
            "schema_version": 1,
            "notebook_id": notebook_id,
            "created_at": utc_now(),
            "topics": {},
        }

    topics = state.setdefault("topics", {})
    for position, topic in enumerate(TOPICS, start=1):
        key = topic_key(topic)
        topics.setdefault(
            key,
            {
                "position": position,
                "topic": topic,
                "status": "pending",
                "attempts": 0,
            },
        )
    state["updated_at"] = utc_now()
    return state


def pending_entries(state: dict[str, Any], retry_failed: bool = False) -> list[dict[str, Any]]:
    allowed = {"pending"}
    if retry_failed:
        allowed.add("failed")
    entries = [entry for entry in state["topics"].values() if entry.get("status") in allowed]
    return sorted(entries, key=lambda entry: int(entry["position"]))


class MCPToolError(RuntimeError):
    def __init__(self, message: str, structured: dict[str, Any] | None = None):
        super().__init__(message)
        self.structured = structured or {}


class NotebookLMMCP:
    def __init__(self, url: str, timeout: float = 1800.0):
        self.url = url
        self.timeout = timeout
        self.session_id: str | None = None
        self.request_id = 0

    def _post(self, payload: dict[str, Any]) -> tuple[dict[str, Any], str | None]:
        headers = {
            "Content-Type": "application/json",
            "Accept": "application/json, text/event-stream",
        }
        if self.session_id:
            headers["Mcp-Session-Id"] = self.session_id
        request = urllib.request.Request(
            self.url,
            data=json.dumps(payload).encode("utf-8"),
            headers=headers,
        )
        with urllib.request.urlopen(request, timeout=self.timeout) as response:
            raw = response.read().decode("utf-8")
            response_session = response.headers.get("Mcp-Session-Id")

        if "text/event-stream" in response.headers.get("Content-Type", ""):
            messages = []
            for line in raw.splitlines():
                if line.startswith("data:"):
                    messages.append(json.loads(line[5:].strip()))
            return (messages[-1] if messages else {}), response_session
        return (json.loads(raw) if raw.strip() else {}), response_session

    def connect(self) -> None:
        response, self.session_id = self._post(
            {
                "jsonrpc": "2.0",
                "id": 1,
                "method": "initialize",
                "params": {
                    "protocolVersion": "2024-11-05",
                    "capabilities": {},
                    "clientInfo": {"name": "dus-infographic-queue", "version": "1.0"},
                },
            }
        )
        if "result" not in response:
            raise MCPToolError(f"MCP initialize başarısız: {response}")
        self._post({"jsonrpc": "2.0", "method": "notifications/initialized"})

    def call(self, name: str, arguments: dict[str, Any]) -> dict[str, Any]:
        self.request_id += 1
        response, response_session = self._post(
            {
                "jsonrpc": "2.0",
                "id": 1000 + self.request_id,
                "method": "tools/call",
                "params": {"name": name, "arguments": arguments},
            }
        )
        if response_session:
            self.session_id = response_session
        if response.get("error"):
            raise MCPToolError(str(response["error"]), response["error"])

        result = response.get("result", {}) or {}
        structured = result.get("structuredContent") or {}
        if not structured:
            for item in result.get("content", []):
                if item.get("type") == "text":
                    try:
                        structured = json.loads(item.get("text", ""))
                    except json.JSONDecodeError:
                        continue
                    break
        if structured.get("status") == "error" or result.get("isError"):
            message = structured.get("error") or structured.get("message") or str(structured or result)
            raise MCPToolError(str(message), structured)
        return structured


def source_ids_for_run(client: NotebookLMMCP, notebook_id: str, upload_missing: bool) -> list[str]:
    details = client.call("notebook_get", {"notebook_id": notebook_id})
    notebook = details.get("notebook", {})
    if notebook.get("id") != notebook_id:
        raise RuntimeError("Canlı notebook_get beklenen defteri döndürmedi")
    if notebook.get("title") != EXPECTED_NOTEBOOK_TITLE:
        raise RuntimeError(
            f"Defter başlığı beklenmiyor: {notebook.get('title')!r} (beklenen {EXPECTED_NOTEBOOK_TITLE!r})"
        )

    expected = {path.name.casefold(): path for path in SOURCE_PATHS}
    by_title: dict[str, list[dict[str, Any]]] = {}
    for source in details.get("sources", []):
        by_title.setdefault(str(source.get("title", "")).casefold(), []).append(source)

    for title, path in expected.items():
        matches = by_title.get(title, [])
        if len(matches) > 1:
            raise RuntimeError(f"Aynı başlıkta birden fazla kaynak var: {path.name}")
        if matches:
            continue
        if not upload_missing:
            raise RuntimeError(f"Kaynak eksik: {path.name}")
        if not path.is_file():
            raise FileNotFoundError(path)
        print(f"[SOURCE] Yükleniyor: {path.name}", flush=True)
        client.call(
            "source_add",
            {
                "notebook_id": notebook_id,
                "source_type": "file",
                "file_path": str(path),
                "wait": True,
                "wait_timeout": 1500.0,
            },
        )

    verified = client.call("notebook_get", {"notebook_id": notebook_id})
    refreshed: dict[str, list[dict[str, Any]]] = {}
    for source in verified.get("sources", []):
        refreshed.setdefault(str(source.get("title", "")).casefold(), []).append(source)

    selected: list[str] = []
    for path in SOURCE_PATHS:
        matches = refreshed.get(path.name.casefold(), [])
        if len(matches) != 1 or not matches[0].get("id"):
            raise RuntimeError(f"Kaynak tekil ve hazır doğrulanamadı: {path.name}")
        selected.append(str(matches[0]["id"]))
    print(f"[SOURCE] {len(selected)}/{len(SOURCE_PATHS)} kaynak doğrulandı.", flush=True)
    return selected


def artifact_identity(value: dict[str, Any]) -> str | None:
    for key in ("artifact_id", "id", "generation_id"):
        if value.get(key):
            return str(value[key])
    artifact = value.get("artifact")
    if isinstance(artifact, dict):
        return artifact_identity(artifact)
    return None


def artifact_status(value: dict[str, Any]) -> str:
    return str(value.get("status") or value.get("state") or "").casefold()


def wait_for_artifact(
    client: NotebookLMMCP,
    notebook_id: str,
    artifact_id: str | None,
    timeout_seconds: int,
    poll_seconds: int,
) -> tuple[str, dict[str, Any] | None]:
    if not artifact_id:
        return "submitted", None
    deadline = time.monotonic() + timeout_seconds
    while time.monotonic() < deadline:
        studio = client.call("studio_status", {"notebook_id": notebook_id, "action": "status"})
        for artifact in studio.get("artifacts", []):
            if artifact_identity(artifact) != artifact_id:
                continue
            status = artifact_status(artifact)
            if status in {"completed", "complete", "ready", "success", "succeeded"}:
                return "completed", artifact
            if status in {"failed", "error", "cancelled", "canceled"}:
                return "failed", artifact
        time.sleep(poll_seconds)
    return "submitted", None


def reconcile_checkpoint(client: NotebookLMMCP, state: dict[str, Any], notebook_id: str) -> None:
    studio = client.call("studio_status", {"notebook_id": notebook_id, "action": "status"})
    artifacts = {
        artifact_identity(artifact): artifact
        for artifact in studio.get("artifacts", [])
        if artifact_identity(artifact)
    }
    for entry in state["topics"].values():
        artifact_id = entry.get("artifact_id")
        if not artifact_id or artifact_id not in artifacts:
            continue
        status = artifact_status(artifacts[artifact_id])
        if status in {"completed", "complete", "ready", "success", "succeeded"}:
            entry["status"] = "completed"
            entry["completed_at"] = entry.get("completed_at") or utc_now()
        elif status in {"failed", "error", "cancelled", "canceled"}:
            entry["status"] = "failed"
            entry["failed_at"] = entry.get("failed_at") or utc_now()


def print_summary(state: dict[str, Any]) -> None:
    counts: dict[str, int] = {}
    for entry in state["topics"].values():
        status = str(entry.get("status", "unknown"))
        counts[status] = counts.get(status, 0) + 1
    rendered = ", ".join(f"{key}={value}" for key, value in sorted(counts.items()))
    print(f"[SUMMARY] total={len(TOPICS)}, {rendered}", flush=True)


def run(args: argparse.Namespace) -> int:
    state_path = Path(args.state_file).resolve()
    state = load_state(state_path, args.notebook_id)
    template = PROMPT_PATH.read_text(encoding="utf-8")
    if len(render_prompt(template, TOPICS[0])) > 9500:
        raise RuntimeError("Üretilen prompt NotebookLM için güvenli 9500 karakter sınırını aşıyor")

    if args.dry_run:
        print(f"[DRY-RUN] notebook={args.notebook_id}")
        print(f"[DRY-RUN] sources={len(SOURCE_PATHS)}, topics={len(TOPICS)}")
        print(f"[DRY-RUN] state={state_path}")
        print_summary(state)
        return 0

    client = NotebookLMMCP(args.mcp_url, timeout=float(args.http_timeout))
    try:
        client.connect()
    except (OSError, urllib.error.URLError) as exc:
        raise RuntimeError(
            "NotebookLM MCP bağlantısı kurulamadı. Önce scripts\\start_notebooklm_mcp.bat çalıştırın."
        ) from exc

    source_ids = source_ids_for_run(client, args.notebook_id, upload_missing=not args.no_upload_missing)
    reconcile_checkpoint(client, state, args.notebook_id)
    atomic_write_json(state_path, state)

    inflight = [entry for entry in state["topics"].values() if entry.get("status") == "inflight"]
    if inflight and not args.retry_inflight:
        names = "; ".join(entry["topic"] for entry in inflight)
        raise RuntimeError(
            "Belirsiz sonuçlu inflight konu var; çift üretimi önlemek için duruldu: " + names
        )
    if args.retry_inflight:
        for entry in inflight:
            entry["status"] = "pending"
            entry["manual_retry_at"] = utc_now()
        atomic_write_json(state_path, state)

    queue = pending_entries(state, retry_failed=args.retry_failed)
    if args.max_new is not None:
        queue = queue[: args.max_new]

    if not queue:
        print("[DONE] Gönderilecek yeni konu yok.")
        print_summary(state)
        return 0

    created_this_run = 0
    for entry in queue:
        topic = str(entry["topic"])
        print(f"[CREATE] {entry['position']:02d}/{len(TOPICS)} {topic}", flush=True)
        entry["status"] = "inflight"
        entry["attempts"] = int(entry.get("attempts", 0)) + 1
        entry["last_attempt_at"] = utc_now()
        entry.pop("last_error", None)
        atomic_write_json(state_path, state)

        try:
            result = client.call(
                "studio_create",
                {
                    "notebook_id": args.notebook_id,
                    "artifact_type": "infographic",
                    "source_ids": source_ids,
                    "confirm": True,
                    "orientation": "landscape",
                    "detail_level": "detailed",
                    "infographic_style": "auto_select",
                    "language": "tr",
                    "focus_prompt": render_prompt(template, topic),
                },
            )
        except MCPToolError as exc:
            entry["last_error"] = str(exc)
            if is_quota_error(str(exc)):
                entry["status"] = "pending"
                entry["quota_stopped_at"] = utc_now()
                state["last_stop_reason"] = "quota_or_rate_limit"
                atomic_write_json(state_path, state)
                print(f"[QUOTA] {topic}: {exc}", flush=True)
                print_summary(state)
                return 0
            entry["status"] = "failed"
            entry["failed_at"] = utc_now()
            atomic_write_json(state_path, state)
            print(f"[FAILED] {topic}: {exc}", flush=True)
            continue
        except (OSError, urllib.error.URLError, TimeoutError) as exc:
            entry["last_error"] = str(exc)
            entry["uncertain_at"] = utc_now()
            atomic_write_json(state_path, state)
            raise RuntimeError(
                f"Sonucu belirsiz ağ hatası; konu inflight bırakıldı ve yeniden gönderilmedi: {topic}"
            ) from exc

        artifact_id = artifact_identity(result)
        entry["artifact_id"] = artifact_id
        entry["status"] = "submitted"
        entry["submitted_at"] = utc_now()
        entry["create_result"] = result
        atomic_write_json(state_path, state)
        created_this_run += 1

        status, artifact = wait_for_artifact(
            client,
            args.notebook_id,
            artifact_id,
            timeout_seconds=args.artifact_timeout,
            poll_seconds=args.poll_seconds,
        )
        entry["status"] = status
        if artifact is not None:
            entry["artifact"] = artifact
        if status == "completed":
            entry["completed_at"] = utc_now()
            print(f"[READY] {topic} ({artifact_id})", flush=True)
        elif status == "failed":
            entry["failed_at"] = utc_now()
            print(f"[FAILED] Studio üretimi başarısız: {topic}", flush=True)
        else:
            print(f"[SUBMITTED] Durum beklemede: {topic} ({artifact_id})", flush=True)
        atomic_write_json(state_path, state)

        if status == "submitted":
            print("[STOP] Önce mevcut üretimin sonuçlanması beklenecek; yeni konu gönderilmedi.")
            break
        if args.max_new is None or created_this_run < args.max_new:
            time.sleep(args.cooldown_seconds)

    print_summary(state)
    return 0


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="NotebookLM DUS infografiklerini hastalık başına tek çağrıyla, kota dolana kadar üretir."
    )
    parser.add_argument("--mcp-url", default=DEFAULT_MCP_URL)
    parser.add_argument("--notebook-id", default=DEFAULT_NOTEBOOK_ID)
    parser.add_argument("--state-file", default=str(DEFAULT_STATE_PATH))
    parser.add_argument("--max-new", type=int, default=None, help="Bu çalıştırmada en çok kaç yeni konu gönderilsin")
    parser.add_argument("--cooldown-seconds", type=int, default=30)
    parser.add_argument("--poll-seconds", type=int, default=30)
    parser.add_argument("--artifact-timeout", type=int, default=1800)
    parser.add_argument("--http-timeout", type=int, default=1800)
    parser.add_argument("--no-upload-missing", action="store_true")
    parser.add_argument("--retry-failed", action="store_true")
    parser.add_argument(
        "--retry-inflight",
        action="store_true",
        help="Belirsiz inflight konuyu elle yeniden gönder (çift üretim riski vardır)",
    )
    parser.add_argument("--dry-run", action="store_true")
    return parser


def main() -> int:
    if sys.platform == "win32":
        try:
            sys.stdout.reconfigure(encoding="utf-8")
            sys.stderr.reconfigure(encoding="utf-8")
        except Exception:
            pass
    try:
        return run(build_parser().parse_args())
    except Exception as exc:
        print(f"[ERROR] {exc}", file=sys.stderr, flush=True)
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
