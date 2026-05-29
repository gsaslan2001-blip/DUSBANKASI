import sys
import os
import asyncio
import aiohttp
import json
import re

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "lib")))
from lib.db_layer import fetch_all_questions
from lib.audit_logic import supabase_post
import json, math, urllib.request

# Load Supabase credentials
import sys as _sys
_sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))
from config import SUPABASE_URL, SUPABASE_KEY

def _supa_get(path: str):
    """Supabase REST GET helper."""
    url = f"{SUPABASE_URL}/rest/v1/{path}"
    headers = {"apikey": SUPABASE_KEY, "Authorization": f"Bearer {SUPABASE_KEY}"}
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req, timeout=30) as resp:
        return json.loads(resp.read())

SYSTEM_PROMPT = """Sen DUSBANKASI'nın baş klinik denetmeni ve medikal yapay zeka KARAR VERİCİSİSİN (Ölüm Maçı hakemi).
Diş Hekimliği Uzmanlık Sınavı (DUS) standartlarına hakim, titiz bir akademisyensin. Kararların bir soru bankasından KALICI SİLME ile sonuçlanır; bu yüzden son derece dikkatli ve gerekçeli ol.

GÖREV: Birbirine benzeyen iki DUS sorusunu kıyasla ve veritabanında HANGİSİNİN KALACAĞINA karar ver.
AMAÇ: Aynı bilgiyi neredeyse aynı SORU KÖKÜYLE tekrar sorgulayan kopyaları temizlemek; ama aynı konuyu FARKLI bir açıdan/zorlukta sorgulayan değerli varyasyonları KORUMAK.

Sana yalnızca DEĞERLENDİRİLECEK üçlü verilir: SORU KÖKÜ + DOĞRU ŞIK + AÇIKLAMA. Çeldirici (yanlış) şıklar bilinçli olarak verilmez; aynı çeldiricinin başka soruda olması bilgi tekrarı değildir, kararını yalnızca bu üçlüye dayandır.

═══ KOPYA TANIMI (en kritik kural) ═══
İki soru ancak şu durumda KOPYADIR: SORU KÖKÜ aynı bilgi parçasını, aynı yönelimle soruyor VE doğru şık aynı kavramı işaret ediyor.
  • Soru kökleri farklı kelimelerle yazılmış olsa bile AYNI tek gerçeği soruyorsa → KOPYA.
  • Soru kökleri benzer kelimeler içerse bile FARKLI bir alt-kavramı/yönelimi sorguluyorsa → KOPYA DEĞİL (keep_both).
Yani 'kavram benzerliği' tek başına kopya yapmaz; belirleyici olan AYNI SORUNUN tekrar sorulup sorulmadığıdır.

═══ DEĞERLENDİRME RUBRİĞİ (öncelik sırasıyla) ═══
1. AYNI SORU MU: İki soru kökü + doğru şık birlikte AYNI gerçeği mi test ediyor? (Yukarıdaki kopya tanımını uygula.)
2. KLİNİK DERİNLİK: Yaş/cinsiyet/anamnez/bulgu/radyoloji/laboratuvar içeren gerçek klinik vaka kurgusu en değerli soru tipidir; düz ezber/tanım sorusunu yener.
3. AÇIKLAMA ÖĞRETİCİLİĞİ: Açıklama doğru cevabın mekanizmasını gerçekten öğretiyor mu? Soru kökünü tekrarlayan totolojik açıklama zayıftır.
4. DİL SAĞLIĞI: Türkçe medikal terminoloji doğru, bozuk karakter (mojibake) yok, akıcı.
5. MUTLAK ELEME: Açıklamasında 'Tebrikler!', 'Bu önemli!', 'Unutmayın' gibi AI motivasyon/dolgu cümleleri olan soru bu boyutta kaybeder.

═══ KARAR SEÇENEKLERİ ═══
- keep_1  : İkisi AYNI soruyu soruyor → 1. soru daha güçlü, 2. elenir.
- keep_2  : İkisi AYNI soruyu soruyor → 2. soru daha güçlü, 1. elenir.
- keep_both: Sorular FARKLI alt-kavram/tip/evre/zıt durum ya da FARKLI bir AÇIDAN/YÖNELİMDEN test ediyor → ikisi de değerli, ikisi de kalır. Örnekler: Tip 1 vs Tip 2, maksiller vs mandibular, akut vs kronik, etyoloji vs tedavi, VE ÖZELLİKLE negatif kök vs pozitif kök ('… değildir?' ile '… nedir?' aynı kavramı sorsa ve aynı doğru cevaba sahip olsa bile FARKLI soru tipidir → keep_both).
- remove_both: İkisi de tıbben hatalı, bozuk veya öğretici değil → ikisi de elenir.

ÖNEMLİ: Emin değilsen ele ALMA. Şüphede kalırsan keep_both seç; yanlış silme, yanlış tutmadan daha pahalıdır.

Aşağıdaki çiftleri sırayla değerlendir ve elenecek soru kodlarını (ID) sebepleri ile birlikte bana ver.
"""


PRE_FILTER_T = 0.69  # Eşik — guard yok, ham aday çiftler doğrudan rapora gider

def find_candidates_no_guards(questions: list, lesson: str, unit: str) -> list:
    """Guard'sız ham aday çift tarayıcı.
    Supabase RPC dener, başarısız olursa In-Memory O(N²). 
    Hiçbir lexical/numeric/stem guard uygulamaz — karar LLM'e bırakılır.
    """
    q_map = {q["id"]: q for q in questions}
    id_list = list(q_map.keys())

    # 1. Supabase RPC dene
    payload = {"p_lesson": lesson, "p_threshold": PRE_FILTER_T, "p_unit": unit}
    candidate_pairs = supabase_post("rpc/find_candidate_pairs", payload)

    if candidate_pairs is None:
        print(f"  Supabase RPC basarisiz, In-Memory taramaya geciliyor... ({len(questions)} soru)")
        use_inmemory = True
    elif not candidate_pairs:
        print("  Supabase pgvector: Hic aday cift yok.")
        return []
    else:
        print(f"  Supabase pgvector: {len(candidate_pairs)} aday cift.")
        use_inmemory = False

    # 2. Embedding'leri cek ve pre-parse et
    embeddings_map = {}
    for chunk_start in range(0, len(id_list), 100):
        chunk = id_list[chunk_start:chunk_start+100]
        ids_str = ",".join(chunk)
        try:
            res = _supa_get(f"questions?select=id,stem_embedding,explanation_embedding&id=in.({ids_str})")
            for row in res:
                stem = row.get("stem_embedding")
                exp  = row.get("explanation_embedding")
                if isinstance(stem, str): stem = json.loads(stem)
                if isinstance(exp,  str): exp  = json.loads(exp)
                stem = [float(x) for x in stem] if stem else None
                exp  = [float(x) for x in exp]  if exp  else None
                sm = math.sqrt(sum(x*x for x in stem)) if stem else 0.0
                em = math.sqrt(sum(x*x for x in exp))  if exp  else 0.0
                embeddings_map[row["id"]] = {"stem": stem, "sm": sm, "exp": exp, "em": em}
        except Exception as e:
            print(f"  Embedding hatasi: {e}")

    # 3. In-Memory fallback
    if use_inmemory:
        candidate_pairs = []
        for i in range(len(id_list)):
            e1 = embeddings_map.get(id_list[i])
            if not e1 or not e1["stem"] or not e1["exp"]: continue
            for j in range(i+1, len(id_list)):
                e2 = embeddings_map.get(id_list[j])
                if not e2 or not e2["stem"] or not e2["exp"]: continue
                sim_s = sum(x*y for x,y in zip(e1["stem"], e2["stem"])) / (e1["sm"]*e2["sm"]) if e1["sm"] and e2["sm"] else 0.0
                sim_e = sum(x*y for x,y in zip(e1["exp"],  e2["exp"]))  / (e1["em"]*e2["em"])  if e1["em"] and e2["em"] else 0.0
                sim   = 0.7 * sim_s + 0.3 * sim_e
                if sim >= PRE_FILTER_T:
                    candidate_pairs.append({"q1_id": id_list[i], "q2_id": id_list[j]})
        print(f"  In-Memory: {len(candidate_pairs)} aday cift.")

    # 4. Her cift icin skor hesapla, deduplicate et
    seen = set()
    results = []
    for pair in candidate_pairs:
        q1_id = pair.get("q1_id"); q2_id = pair.get("q2_id")
        if not q1_id or not q2_id or q1_id not in q_map or q2_id not in q_map: continue
        key = tuple(sorted((q1_id, q2_id)))
        if key in seen: continue
        seen.add(key)

        e1 = embeddings_map.get(q1_id); e2 = embeddings_map.get(q2_id)
        if not e1 or not e2 or not e1["stem"] or not e2["stem"]: continue
        sim_s = sum(x*y for x,y in zip(e1["stem"], e2["stem"])) / (e1["sm"]*e2["sm"]) if e1["sm"] and e2["sm"] else 0.0
        sim_e = sum(x*y for x,y in zip(e1["exp"],  e2["exp"]))  / (e1["em"]*e2["em"])  if e1["em"] and e2["em"] else 0.0 if e1["exp"] and e2["exp"] else 0.0
        sim   = 0.7 * sim_s + 0.3 * sim_e
        if sim < PRE_FILTER_T: continue

        results.append({
            "overlap_ratio": sim,
            "q1_raw": q_map[q1_id],
            "q2_raw": q_map[q2_id],
        })

    results.sort(key=lambda x: x["overlap_ratio"], reverse=True)
    print(f"  Rapor edilecek benzersiz cift: {len(results)}")
    return results

def format_question(q: dict, num: int) -> str:
    ca = q.get("correct_answer") or q.get("correctAnswer") or "?"
    opts = q.get("options") if isinstance(q.get("options"), dict) else {}
    correct_text = (opts.get(ca) or q.get(f"option_{str(ca).lower()}") or "").strip()

    return (
        f"**Soru {num} (ID: {q.get('id', '?')})**\n"
        f"Soru Kökü: {q.get('question', '').strip()}\n"
        f"Doğru Şık ({ca}): {correct_text}\n"
        f"Açıklama: {q.get('explanation', '').strip()}\n"
    )

async def main():
    if len(sys.argv) < 2:
        print("Kullanım: python gemini_audit_export.py <Ders1> <Ders2> ...")
        return
        
    lessons = sys.argv[1:]
    
    async with aiohttp.ClientSession() as session:
        for lesson in lessons:
            output_dir = rf"C:\Users\FURKAN\Desktop\Projeler\DUSBANKASI\raporlar\özel akış\{lesson}"
            os.makedirs(output_dir, exist_ok=True)
            
            print(f"\n==============================")
            print(f"DERS BAŞLIYOR: {lesson}")
            print(f"==============================")
            
            questions = await fetch_all_questions(lesson, session)
            
            # Group by unit
            units = set(q.get("unit") for q in questions if q.get("unit"))
            units = sorted(list(units))
            
            print(f"Toplam {len(questions)} soru ve {len(units)} ünite bulundu.")
            
            for unit in units:
                print(f"\n--- {unit} işleniyor ---")
                unit_qs = [q for q in questions if q.get("unit") == unit]
                if len(unit_qs) < 2:
                    print(f"{unit} için yeterli soru yok ({len(unit_qs)} soru). Atlanıyor.")
                    continue

                results = find_candidates_no_guards(unit_qs, lesson, unit)
                if not results:
                    print(f"{unit} için şüpheli çift bulunamadı.")
                    continue
                    
                # Clean unit name for filename
                safe_unit = re.sub(r'[^\w\s-]', '_', unit).replace(" ", "_")
                safe_unit = re.sub(r'_+', '_', safe_unit).strip('_')
                filepath = os.path.join(output_dir, f"{safe_unit}.md")
                
                with open(filepath, "w", encoding="utf-8") as f:
                    f.write(SYSTEM_PROMPT + "\n\n---\n\n")
                    
                    for i, r in enumerate(results, 1):
                        q1 = r.get("q1_raw", {})
                        q2 = r.get("q2_raw", {})
                        
                        f.write(f"### ÇİFT {i} (Benzerlik: {r.get('overlap_ratio', 0):.2f})\n\n")
                        f.write(format_question(q1, 1) + "\n")
                        f.write(format_question(q2, 2) + "\n")
                        f.write("---\n\n")
                        
                print(f"✅ {unit} raporu kaydedildi -> {filepath}")
        
if __name__ == "__main__":
    asyncio.run(main())
