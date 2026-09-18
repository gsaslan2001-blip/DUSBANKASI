"""
DUS Bankası — Protez Yıldızlı Olmayan Soruları Temizleme Scripti

Hedef:
- Protez dersindeki toplam 1.119 sorudan:
    - is_favorite = True (yıldızlı) olan 22 soru KORUNACAK.
    - is_favorite != True olan 1.097 soru SİLİNECEK.
- Silinmeden önce tüm silinecek sorular exports/ dizinine yedeklenecektir.
- Bekleyen daily_exams listelerinden silinen ID'ler arındırılacaktır.
"""

import sys
import os
import json
import argparse
import urllib.request
import urllib.parse
from datetime import datetime
from pathlib import Path

REPO_ROOT = Path(__file__).parent.parent.parent
sys.path.insert(0, str(REPO_ROOT / "scripts"))

from config import SUPABASE_URL, SUPABASE_KEY

HEADERS = {
    "apikey": SUPABASE_KEY,
    "Authorization": f"Bearer {SUPABASE_KEY}",
    "Content-Type": "application/json",
    "Prefer": "return=minimal"
}

GET_HEADERS = {
    "apikey": SUPABASE_KEY,
    "Authorization": f"Bearer {SUPABASE_KEY}",
    "Content-Type": "application/json",
}

def fetch_all(url_base):
    rows = []
    limit = 1000
    offset = 0
    while True:
        sep = "&" if "?" in url_base else "?"
        url = f"{url_base}{sep}limit={limit}&offset={offset}"
        req = urllib.request.Request(url, headers=GET_HEADERS)
        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            rows.extend(data)
            if len(data) < limit:
                break
            offset += limit
    return rows

def delete_chunk(ids):
    in_clause = ",".join(ids)
    url = f"{SUPABASE_URL}/rest/v1/questions?id=in.({in_clause})"
    req = urllib.request.Request(url, headers=HEADERS, method="DELETE")
    with urllib.request.urlopen(req) as resp:
        return resp.status

def update_daily_exam_qids(exam_id, new_qids):
    url = f"{SUPABASE_URL}/rest/v1/daily_exams?id=eq.{exam_id}"
    data = json.dumps({"question_ids": new_qids}).encode("utf-8")
    req = urllib.request.Request(url, headers=HEADERS, data=data, method="PATCH")
    with urllib.request.urlopen(req) as resp:
        return resp.status

def main():
    parser = argparse.ArgumentParser(description="Protez dersinde yıldızlı olmayan tüm soruları sil.")
    parser.add_argument("--dry-run", action="store_true", help="Gerçek silme yapmaz, sadece simüle eder.")
    parser.add_argument("--confirm-delete", action="store_true", help="Gerçek silme işlemini onaylar.")
    args = parser.parse_args()

    if not args.dry_run and not args.confirm_delete:
        print("HATA: Lütfen ya --dry-run ya da --confirm-delete bayrağını belirtin.")
        sys.exit(1)

    print("=== DUSBANKASI PROTEZ YILDIZSIZ SORULARI TEMİZLEME OPERASYONU ===")
    print(f"Mod: {'[DRY RUN - SİMÜLASYON]' if args.dry_run else '[GERÇEK SİLME]'}")

    # 1. Tüm Protez sorularını çek
    fields = "id,lesson,unit,question,option_a,option_b,option_c,option_d,option_e,correct_answer,explanation,flagged,flag_reason,quality_flag,is_favorite,created_at"
    protez_qs = fetch_all(f"{SUPABASE_URL}/rest/v1/questions?select={fields}&lesson=eq.Protez")
    print(f"\n1. Toplam Protez soru sayısı: {len(protez_qs)}")

    # 2. Yıldızlı vs Yıldızsız ayır
    fav_qs = [q for q in protez_qs if q.get("is_favorite") is True]
    non_fav_qs = [q for q in protez_qs if not q.get("is_favorite")]
    delete_qids_set = {q["id"] for q in non_fav_qs}

    print(f"   - Yıldızlı sorular (KORUNACAK): {len(fav_qs)}")
    print(f"   - Yıldızsız sorular (SİLİNECEK): {len(non_fav_qs)}")
    print(f"   - Kalan soru sayısı: {len(fav_qs)}")

    # 3. Yedekleme
    backup_dir = REPO_ROOT / "exports"
    backup_dir.mkdir(parents=True, exist_ok=True)
    timestamp_str = datetime.now().strftime("%Y%m%d_%H%M%S")
    backup_path = backup_dir / f"backup_protez_non_favorite_{timestamp_str}.json"

    print(f"\n2. Yedekleme:")
    print(f"   Hedef dosya: {backup_path}")
    with open(backup_path, "w", encoding="utf-8") as f:
        json.dump({
            "generated_at": datetime.now().isoformat(),
            "lesson": "Protez",
            "total_questions_in_lesson": len(protez_qs),
            "starred_questions_count": len(fav_qs),
            "deleted_questions_count": len(non_fav_qs),
            "deleted_questions": non_fav_qs
        }, f, ensure_ascii=False, indent=2)
    print(f"   [OK] Silinecek {len(non_fav_qs)} sorunun tam verisi başarıyla yedeklendi.")

    # 4. Daily exams kontrolü
    daily_exams = fetch_all(f"{SUPABASE_URL}/rest/v1/daily_exams?select=id,name,status,question_ids")
    affected_exams = []
    for de in daily_exams:
        qids = de.get("question_ids") or []
        intersect = set(qids) & delete_qids_set
        if intersect:
            affected_exams.append((de, len(intersect)))

    print(f"\n3. Daily Exams Etkilenme Durumu:")
    print(f"   Etkilenen günlük sınav sayısı: {len(affected_exams)}")
    for de, cnt in affected_exams:
        print(f"   - ID: {de['id']} | {de.get('name')} | Durum: {de.get('status')} | Silinecek soru sayısı: {cnt}")

    if args.dry_run:
        print("\n[DRY RUN BİTTİ] Veritabanında hiçbir değişiklik yapılmadı. Gerçek silme için --confirm-delete kullanın.")
        return

    # 5. Gerçek Silme
    print(f"\n4. GERÇEK SİLME BAŞLATILIYOR ({len(non_fav_qs)} soru)...")
    delete_ids = [q["id"] for q in non_fav_qs]
    chunk_size = 50
    total = len(delete_ids)

    for i in range(0, total, chunk_size):
        chunk = delete_ids[i:i + chunk_size]
        delete_chunk(chunk)
        print(f"   İlerleme: {min(i + chunk_size, total)} / {total} soru silindi.")

    # 6. Pending Daily Exams temizliği
    print("\n5. Pending Daily Exams güncelleniyor...")
    for de, cnt in affected_exams:
        if de.get("status") == "pending":
            original_qids = de.get("question_ids") or []
            filtered_qids = [qid for qid in original_qids if qid not in delete_qids_set]
            update_daily_exam_qids(de["id"], filtered_qids)
            print(f"   - {de['id']} güncellendi: {len(original_qids)} -> {len(filtered_qids)} soru.")

    # 7. Doğrulama
    print("\n6. CANLI DOĞRULAMA YAPILIYOR...")
    remaining_qs = fetch_all(f"{SUPABASE_URL}/rest/v1/questions?select=id,lesson,is_favorite&lesson=eq.Protez")
    print(f"   Kalan Protez soru sayısı: {len(remaining_qs)} (Beklenen: {len(fav_qs)})")
    assert len(remaining_qs) == len(fav_qs), f"HATA: Kalan soru sayısı ({len(remaining_qs)}) beklenenle ({len(fav_qs)}) eşleşmiyor!"
    assert all(q.get("is_favorite") for q in remaining_qs), "HATA: Kalan sorular arasında yıldızsız soru var!"
    print("   [BAŞARILI] Protez dersinde yalnızca yıldızlı sorular kaldı.")

if __name__ == "__main__":
    main()
