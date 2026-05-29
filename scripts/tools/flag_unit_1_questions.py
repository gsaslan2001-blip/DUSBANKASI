import sys
import os
import asyncio
import aiohttp
import re

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "lib")))

from lib.db_layer import batch_flag

async def flag_questions_from_md():
    md_path = r"C:\Users\FURKAN\Desktop\Projeler\DUSBANKASI\raporlar\özel akış\Radyoloji\Ünite_1_-_flag.md"
    log_path = r"C:\Users\FURKAN\Desktop\Projeler\DUSBANKASI\scripts\logs\unit_1_flagged_questions.jsonl"
    
    if not os.path.exists(md_path):
        print(f"Hata: {md_path} bulunamadı.")
        return
        
    print(f"Rapor dosyası okunuyor: {md_path}")
    with open(md_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    # Her bir elenen ID satırını bulalım: 'Elenen ID: <uuid>' veya 'Elenen ID:  <uuid>'
    # Ayrıca 'Çift X:' kısmından çift numarasını ve gerekçesini de yakalayabiliriz.
    pattern = r"Çift\s+(\d+):\s+(keep_\d+|keep_both|remove_both)(?:\s*\|\s*Elenen\s+ID:\s*([a-f0-9\-]+))?"
    matches = re.findall(pattern, content, re.IGNORECASE)
    
    flag_items = []
    
    # Ayrıca satır satır tarayarak çiftlerin gerekçelerini bulalım
    lines = content.splitlines()
    reasons = {}
    current_pair = None
    for line in lines:
        pair_match = re.match(r"^Çift\s+(\d+):", line, re.IGNORECASE)
        if pair_match:
            current_pair = int(pair_match.group(1))
        elif line.strip().startswith("Gerekçe:") and current_pair is not None:
            reasons[current_pair] = line.strip().replace("Gerekçe:", "").strip()
            current_pair = None

    for m in matches:
        pair_num = int(m[0])
        decision = m[1]
        eliminated_id = m[2] if len(m) > 2 else ""
        
        if eliminated_id and eliminated_id.strip() and eliminated_id.strip().lower() != "yok":
            reason = reasons.get(pair_num, f"Çift {pair_num} elendi ({decision})")
            flag_items.append({
                "id": eliminated_id.strip(),
                "flag_type": "kavramsal_kopya",
                "reason": reason,
                "text": f"Unit 1 Radyoloji duplicate from Pair {pair_num}",
                "explanation": "",
                "winner_id": ""
            })

    print(f"Toplam {len(flag_items)} adet elenecek soru ID'si tespit edildi.")
    if not flag_items:
        print("İşaretlenecek soru bulunamadı.")
        return
        
    print("Supabase'e bayrak ekleme işlemi başlatılıyor...")
    ok, errors = await batch_flag("Radyoloji", flag_items, log_path)
    print(f"İşlem Tamamlandı: Başarılı={ok}, Hatalı={errors}")
    print(f"Detaylı log: {log_path}")

if __name__ == "__main__":
    asyncio.run(flag_questions_from_md())
