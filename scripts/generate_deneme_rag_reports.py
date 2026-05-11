"""
DUS Deneme Analizi RAG Pipeline — async-first orkestratör.

Kullanım:
  python scripts/generate_deneme_rag_reports.py              # Tüm bugünkü yanlışlar
  python scripts/generate_deneme_rag_reports.py --limit 3    # İlk 3 (test)
  python scripts/generate_deneme_rag_reports.py --dry-run    # Sadece listele
"""
import asyncio
import logging
import sys
from datetime import datetime, timezone
from pathlib import Path
from typing import Dict, Any

# Absolute env yüklemesi — config modülü üzerinden
sys.path.insert(0, str(Path(__file__).parent))
import config  # noqa: F401 — yan etki: load_dotenv tetiklenir

# Lib katmanı
from lib import pinecone_client, openai_client
from lib.progress_sync import update_progress

# Veri katmanı
import analyze_deneme_followup

# ─── Logging ─────────────────────────────────────────────────────────
_LOG_FILE = config.LOG_DIR / "rag_generation.log"

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[
        logging.FileHandler(_LOG_FILE, encoding="utf-8"),
        logging.StreamHandler(sys.stdout),
    ],
)
logger = logging.getLogger(__name__)

# ─── Türkçe karakter korumalı dosya adı sanitizer ─────────────────────
_TR_MAP = str.maketrans("şğüçıöŞĞÜÇİÖ", "sgucioSGUCIO")
_SAFE_CHARS = frozenset("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 _-")


def sanitize_filename(name: str) -> str:
    transliterated = name.translate(_TR_MAP)
    return "".join(c for c in transliterated if c in _SAFE_CHARS).strip().replace(" ", "_")


# ─── Jinja2 prompt yükleyici ──────────────────────────────────────────
def _load_prompt_template() -> str:
    template_path = Path(__file__).parent / "templates" / "s5_prompt.jinja2"
    return template_path.read_text(encoding="utf-8")


def _render_prompt(template: str, context: str, mistake: Dict[str, Any]) -> str:
    return (
        template
        .replace("{{ context }}", context)
        .replace("{{ question_text }}", mistake["question_text"])
        .replace("{{ lesson }}", mistake["lesson"])
        .replace("{{ unit }}", mistake["unit"])
    )


# ─── Tek hata işleme ─────────────────────────────────────────────────
async def process_mistake(
    mistake: Dict[str, Any],
    output_dir: Path,
    template: str,
    sem: asyncio.Semaphore,
) -> bool:
    """
    Bir yanlış için RAG bağlamı çeker, LLM raporu üretir, dosyaya yazar.
    Her hata izole try/except içinde — bir hata diğerlerini durdurmaz.
    """
    qid = mistake["question_id"]
    lesson = mistake["lesson"]
    unit = mistake["unit"]

    async with sem:
        logger.info(f"İşleniyor: {lesson} — {unit} (QID: {qid})")

        try:
            # C3 fix: await ile doğrudan çağır, asyncio.run() YOK
            context = await pinecone_client.get_rag_context(
                lesson=lesson,
                unit=unit,
                question_text=mistake["question_text"],
                host=config.MYPPDFS_HOST,
            )

            user_prompt = _render_prompt(template, context, mistake)
            system_prompt = "Sen bir DUS akademik uzmanısın. S5 v9.0 protokolüne uy."

            # C1 fix: async openai_client ile await
            content = await openai_client.generate_completion(
                system_prompt=system_prompt,
                user_prompt=user_prompt,
                max_retries=config.RAG_MAX_RETRIES,
                backoff_base=config.RAG_BACKOFF_BASE,
                rate_limit_wait=config.RAG_RATE_LIMIT_WAIT,
            )

            if content is None:
                logger.error(f"[SKIP] Rapor üretilemedi: {qid}")
                return False

            filename = f"{sanitize_filename(lesson)}_{sanitize_filename(unit)}_{qid}.md"
            filepath = output_dir / filename

            filepath.write_text(content, encoding="utf-8")
            logger.info(f"Kaydedildi: {filename}")
            return True

        except Exception as e:
            # C2 fix: beklenmeyen hataları yakala, pipeline devam etsin
            logger.error(f"[SKIP] {qid} işlenirken beklenmeyen hata: {e}", exc_info=True)
            return False


# ─── Ana orkestratör ─────────────────────────────────────────────────
async def main():
    import argparse

    parser = argparse.ArgumentParser(description="DUS Deneme RAG Rapor Üreticisi")
    parser.add_argument("--limit", type=int, help="İşlenecek maksimum yanlış sayısı")
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Sadece yanlışları listele, rapor üretme",
    )
    args = parser.parse_args()

    # 1. Bugünün yanlışlarını al (UTC-aware)
    mistakes = analyze_deneme_followup.get_today_mistakes(detailed=True)
    if not mistakes:
        logger.info("Bugün hiç yanlış yapılmamış. Harika!")
        return

    if args.limit:
        mistakes = mistakes[: args.limit]

    logger.info(f"Toplam {len(mistakes)} yanlış tespit edildi.")

    if args.dry_run:
        for m in mistakes:
            print(f"  • {m['lesson']} | {m['unit']} | QID: {m['question_id']}")
        return

    # 2. Çıktı dizinini oluştur
    today_str = datetime.now(timezone.utc).strftime("%Y-%m-%d")
    target_dir = config.OUTPUT_BASE_DIR / today_str
    target_dir.mkdir(parents=True, exist_ok=True)

    # 3. Prompt template'i yükle
    template = _load_prompt_template()

    # 4. Paralel işleme — Semaphore ile rate limit koruması
    sem = asyncio.Semaphore(config.RAG_CONCURRENCY)
    tasks = [process_mistake(m, target_dir, template, sem) for m in mistakes]
    results = await asyncio.gather(*tasks)

    succeeded = sum(1 for r in results if r)
    failed = len(results) - succeeded

    logger.info(
        f"\n{'='*50}\n"
        f"Tamamlandı: {succeeded} başarılı, {failed} atlandı\n"
        f"Çıktı dizini: {target_dir}\n"
        f"{'='*50}"
    )

    # 5. DUS/PROGRESS.md güncelle
    if succeeded > 0:
        processed = [m for m, ok in zip(mistakes, results) if ok]
        update_progress(processed, today_str, str(target_dir))


if __name__ == "__main__":
    asyncio.run(main())
