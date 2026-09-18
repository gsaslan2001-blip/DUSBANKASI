"""Read-only health check for the local NotebookLM MCP HTTP bridge."""

import argparse
import json
import os
import sys
import urllib.request


def mcp_call(url: str, request_id: int, method: str, params: dict | None = None) -> dict:
    payload = {"jsonrpc": "2.0", "id": request_id, "method": method}
    if params is not None:
        payload["params"] = params
    request = urllib.request.Request(
        url,
        data=json.dumps(payload).encode("utf-8"),
        headers={
            "Content-Type": "application/json",
            "Accept": "application/json, text/event-stream",
        },
    )
    with urllib.request.urlopen(request, timeout=30) as response:
        raw = response.read().decode("utf-8")
    for line in raw.splitlines():
        if line.startswith("data:"):
            return json.loads(line[5:].strip())
    return json.loads(raw) if raw.strip() else {}


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--url", default=os.getenv("MCP_URL", "http://127.0.0.1:8000/mcp"))
    parser.add_argument("--json", action="store_true", dest="as_json")
    args = parser.parse_args()

    try:
        initialized = mcp_call(
            args.url,
            1,
            "initialize",
            {
                "protocolVersion": "2024-11-05",
                "capabilities": {},
                "clientInfo": {"name": "dusbankasi-health", "version": "1.0"},
            },
        )
        info = mcp_call(
            args.url,
            2,
            "tools/call",
            {"name": "server_info", "arguments": {}},
        )
        notebooks = mcp_call(
            args.url,
            3,
            "tools/call",
            {"name": "notebook_list", "arguments": {}},
        )
        result = {
            "ok": "result" in initialized and "result" in info and "result" in notebooks,
            "url": args.url,
            "server": initialized.get("result", {}).get("serverInfo", {}),
            "server_info": info.get("result", {}).get("structuredContent", {}),
            "notebook_count": notebooks.get("result", {}).get("structuredContent", {}).get("count"),
        }
        print(json.dumps(result, ensure_ascii=False) if args.as_json else (
            f"OK: {result['server'].get('name')} MCP, "
            f"auth={result['server_info'].get('auth_status')}, "
            f"notebooks={result['notebook_count']}"
        ))
        return 0 if result["ok"] else 1
    except Exception as exc:
        print(json.dumps({"ok": False, "url": args.url, "error": str(exc)}, ensure_ascii=False)
              if args.as_json else f"ERROR: {exc}")
        return 1


if __name__ == "__main__":
    sys.exit(main())
