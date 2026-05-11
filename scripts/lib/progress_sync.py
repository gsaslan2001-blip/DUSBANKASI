"""
DUS/PROGRESS.md otomatik güncelleyici.

Her başarılı rapor üretiminden sonra çağrılır; "Tamamlanan Deneme Analizleri"
bölümüne bugünün özetini ekler. Bölüm yoksa dosyanın sonuna oluşturur.
"""
import logging
from pathlib import Path
from typing import List, Dict, Any

logger = logging.getLogger(__name__)

_SECTION_HEADER = "## Tamamlanan Deneme Analizleri"


def update_progress(
    processed_mistakes: List[Dict[str, Any]],
    today_str: str,
    output_dir: str,
) -> None:
    """
    PROGRESS.md'ye bugünün analiz özetini ekle.

    processed_mistakes: başarıyla işlenen hataların listesi (lesson, unit, question_id).
    today_str: "YYYY-MM-DD" formatında tarih.
    output_dir: raporların kaydedildiği dizin yolu (bilgi amaçlı).
    """
    try:
        _do_update(processed_mistakes, today_str, output_dir)
    except Exception as e:
        # PROGRESS.md güncellemesi kritik değil — pipeline'ı durdurma
        logger.warning(f"PROGRESS.md güncellenemedi (kritik değil): {e}")


def _do_update(
    processed_mistakes: List[Dict[str, Any]],
    today_str: str,
    output_dir: str,
) -> None:
    from pathlib import Path as _Path

    # config'den progress dosya yolunu al
    try:
        import sys
        sys.path.insert(0, str(_Path(__file__).parent.parent))
        import config
        progress_path: Path = config.PROGRESS_MD_PATH
    except (ImportError, AttributeError):
        progress_path = Path(r"C:\Users\FURKAN\.claude\DUS\PROGRESS.md")

    if not progress_path.exists():
        logger.warning(f"PROGRESS.md bulunamadı: {progress_path} — güncelleme atlandı.")
        return

    # Mevcut içeriği oku
    content = progress_path.read_text(encoding="utf-8")

    # Bugüne ait özet girdi oluştur
    lesson_counts: Dict[str, int] = {}
    for m in processed_mistakes:
        lesson = m.get("lesson", "Bilinmeyen")
        lesson_counts[lesson] = lesson_counts.get(lesson, 0) + 1

    lesson_summary = ", ".join(
        f"{lesson} ({count} soru)" for lesson, count in sorted(lesson_counts.items())
    )

    new_entry = (
        f"\n### {today_str} — Deneme Analizi\n"
        f"- **Toplam rapor:** {len(processed_mistakes)}\n"
        f"- **Dersler:** {lesson_summary}\n"
        f"- **Çıktı dizini:** `{output_dir}`\n"
    )

    # Bölüm varsa altına ekle, yoksa dosyanın sonuna bölümü oluştur
    if _SECTION_HEADER in content:
        insert_pos = content.index(_SECTION_HEADER) + len(_SECTION_HEADER)
        updated = content[:insert_pos] + new_entry + content[insert_pos:]
    else:
        updated = content.rstrip() + f"\n\n{_SECTION_HEADER}\n" + new_entry

    progress_path.write_text(updated, encoding="utf-8")
    logger.info(f"PROGRESS.md güncellendi: {len(processed_mistakes)} rapor eklendi.")
