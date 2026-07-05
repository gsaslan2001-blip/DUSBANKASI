# -*- coding: utf-8 -*-
"""
Prompt kalite testi: üretilen örnek soruları GERÇEK kalite gate'inden geçirir.
- extract_json + _validate_single_question (shared.py) ile yapısal doğrulama
- YENİ kaynak-sızıntı regex filtresi (prompt v1 ile getirilen kural)
- Açıklamada her-şıkkı-çürütme (Çeldiriciler bloğu) varlığı
- Anti-şişme: sahte önsöz cümlesi tespiti
"""
import sys, os, re, json
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "scripts"))
sys.stdout.reconfigure(encoding="utf-8")

from shared import _validate_single_question, extract_json  # gerçek gate

# YENİ kural: kaynak sızıntısı (soru kökü/şık/açıklama bağımsız olmalı)
LEAK_RE = re.compile(
    r"(?i)(kaynak\s*metn|metne göre|metne gore|metinde\b|metinden\b|verilen bilgi|"
    r"bu kaynak|yukarıdaki metin|tabloda belirtil|şekilde belirtil|paragrafa göre)"
)
# Anti-şişme: kavramı tanıtan sahte akademik önsöz imzaları
BLOAT_RE = re.compile(
    r"(?i)(incelendiğinde|bilinmektedir|göz önüne alınd|göz önünde bulundur|"
    r"kabul gören teori|değerlendirildiğinde,)"
)

def leak_check(q):
    blob = q["question"] + " " + " ".join(q["options"].values()) + " " + q.get("explanation","")
    m = LEAK_RE.search(blob)
    return (m.group(0) if m else None)

def bloat_check(q):
    m = BLOAT_RE.search(q["question"])
    return (m.group(0) if m else None)

def _is_combined(q):
    """Kombine (I/II/III) formatı mı? Şıkların çoğu Roma rakamı/'Yalnız' içeriyorsa."""
    opts = list(q["options"].values())
    return sum(1 for o in opts if re.search(r"\b(IV|I{1,3})\b", o) or "Yalnız" in o) >= 3

def refute_check(q):
    """Açıklama her seçeneği çürütüyor mu?
    - Düz soru: kalan 4 şık harfini (X)) tek tek ele almalı.
    - Kombine soru: öncülleri (I/II/III/IV) tek tek gerekçelendirmeli."""
    e = q.get("explanation","")
    if _is_combined(q):
        prem = len(set(re.findall(r"\b(IV|I{1,3})\b", e)))
        return prem >= 3, prem
    ca = q["correctAnswer"]
    others = [l for l in "ABCDE" if l != ca]
    mentioned = sum(1 for l in others if re.search(rf"\b{l}\)", e))
    return mentioned >= 3, mentioned

def run(title, arr_json):
    print("\n" + "="*70)
    print(f"  {title}")
    print("="*70)
    qs = extract_json(arr_json)
    if not qs:
        print("  ❌ extract_json parse edemedi!")
        return
    print(f"  Parse edilen soru: {len(qs)}")
    ok = 0
    for i, q in enumerate(qs, 1):
        valid, reason = _validate_single_question(q)
        leak = leak_check(q)
        bloat = bloat_check(q)
        refuted, nmention = refute_check(q)
        stem_len = len(q["question"])
        flags = []
        if not valid: flags.append(f"GATE_FAIL:{reason}")
        if leak: flags.append(f"SIZINTI:'{leak}'")
        if bloat: flags.append(f"SISME:'{bloat}'")
        if not refuted: flags.append(f"AZ_CURUTME:{nmention}/4_sik")
        status = "✅ TEMİZ" if not flags else "⚠️  " + " | ".join(flags)
        if not flags: ok += 1
        print(f"  Q{i:>2} [{q['correctAnswer']}] kök={stem_len}krk çürütme={nmention}/4  {status}")
    print(f"\n  SONUÇ: {ok}/{len(qs)} soru tüm kontrollerden TEMİZ geçti.")

# ───────────────────────────────────────────────────────────────────
# A) ESKİ ÜRETİM (Supabase'den gerçek örnekler) — sorunları göstermek için
# ───────────────────────────────────────────────────────────────────
OLD_BAD = r'''[
  {"lesson":"Ortodonti","unit":"Ek Bilgiler","question":"Hekim gecikmiş diş sürmesinin etiyolojisini lokal ve sistemik olarak ayırmalıdır. Kaynak metne göre, aşağıdakilerden hangisi gecikmiş sürmenin lokal nedenlerinden biri DEĞİLDİR?","options":{"A":"Süpernümere diş","B":"Yarık dudak ve damak","C":"Dilaserasyon","D":"Dişlerde çapraşıklık","E":"Konjenital diş eksikliği"},"correctAnswer":"B","explanation":"Dilaserasyon, konjenital eksiklik ve süpernümere diş lokalize engellerdir. Kaynak metne göre 'Yarık dudak ve damak' Sistemik Nedenler tablosunda yer aldığından lokal neden değildir."},
  {"lesson":"Ortodonti","unit":"Dental Maloklüzyonlar","question":"İskeletsel Sınıf 3 maloklüzyonun maksiller retrüzyon veya mandibular protrüzyon kaynaklı olması sefalometrik değerlerde farklılıklara yol açar. Sadece maksiller retrüzyon kaynaklı bir gerçek Sınıf 3 maloklüzyonda aşağıdaki bulgulardan hangisinin görülmesi beklenmez?","options":{"A":"Azalmış SNA açısı","B":"Artmış SNB açısı","C":"Negatif ANB açısı","D":"Normal saddle açısı","E":"Normal mandibular korpus uzunluğu"},"correctAnswer":"E","explanation":"Neden E:** Toplumda en sık izlenen maloklüzyon tipi %60-70 oranıyla Sınıf 1'dir. Bunu %20-25 oranıyla Sınıf 2 takip eder. En nadir varyant ise %5-10 bandıyla Sınıf 3'tür. Verilen tüm öncüller doğrudur."}
]'''

# ───────────────────────────────────────────────────────────────────
# B) YENİ PROMPT v1 ile üretilen TEST SETİ A (Ortodonti — karışık format)
# ───────────────────────────────────────────────────────────────────
NEW_A = r'''[
  {"lesson":"Ortodonti","unit":"Ortodontik Teşhis","question":"Sassouni sefalometrik analizinde ideal arklar çizilirken bir noktada (O) kesişmesi beklenen düzlemler değerlendirilir. Aşağıdakilerden hangisi bu temel düzlemlerden biri **değildir**?","options":{"A":"Anterior kafa kaidesi düzlemi","B":"Palatal düzlem","C":"Oklüzal düzlem","D":"Mandibular düzlem","E":"Frankfort horizontal düzlemi"},"correctAnswer":"E","explanation":"**Doğru (E):** Sassouni analizinde anterior kafa kaidesi, palatal, oklüzal ve mandibular düzlemler arksal yapı içinde bir noktada (O) kesişir; Frankfort horizontal düzlemi bu dört yapısal düzlemden biri değildir. **Çeldiriciler:** A) Anterior kafa kaidesi düzlemi dört temel düzlemden biridir. B) Palatal düzlem (ANS-PNS) kullanılır. C) Oklüzal düzlem kullanılır. D) Mandibular düzlem kullanılır. **Ayırt edici:** Frankfort, Downs ve Tweed analizlerinin temel yatay referansıdır; Sassouni'nin O noktasında kesişen arksal düzlem setine girmez."},
  {"lesson":"Ortodonti","unit":"Ankraj","question":"Ortodontik mini-vidaların (geçici ankraj aygıtı) yerleştirildiği anda elde edilen primer stabilitesine aşağıdakilerden hangisi **katkıda bulunmaz**?","options":{"A":"Vidanın çapı","B":"Vidanın boyu","C":"Kortikal kemik kalınlığı","D":"Vidanın yiv (form) tasarımı","E":"Osseointegrasyon derecesi"},"correctAnswer":"E","explanation":"**Doğru (E):** Osseointegrasyon, yerleştirmeden haftalar sonra gelişen biyolojik (sekonder) stabilite mekanizmasıdır; yerleştirme anındaki primer/mekanik stabiliteye katkı vermez. **Çeldiriciler:** A) Çap arttıkça kemikle mekanik kenetlenme artar, primer stabiliteyi yükseltir. B) Boy arttıkça temas yüzeyi ve tutunma artar. C) Kortikal kemik ne kadar kalınsa primer kavrama o kadar güçlüdür. D) Yiv tasarımı (vida formu) mekanik kilitlenmeyi belirler. **Ayırt edici:** Primer stabilite = mekanik (çap/boy/form/kortikal kemik); sekonder stabilite = biyolojik (osseointegrasyon)."},
  {"lesson":"Ortodonti","unit":"Büyüme Modifikasyonu","question":"On yaşındaki erkek çocuk alt çenesinin önde olması şikâyetiyle başvuruyor. Muayenede konkav profil ve anterior çapraz kapanış saptanıyor; sefalometride SNA 76°, SNB 80° ölçülüyor. Büyüme modifikasyonu için en uygun aparey aşağıdakilerden hangisidir?","options":{"A":"Yüz maskesi (maksiller protraksiyon)","B":"Twin-block","C":"Aktivatör","D":"Bionatör","E":"Servikal headgear"},"correctAnswer":"A","explanation":"**Doğru (A):** Düşük SNA (76°) maksiller retrognatiyi gösterir; bu iskeletsel Sınıf III'te tedavi maksillayı öne çekmektir, bunun aygıtı yüz maskesidir. **Çeldiriciler:** B) Twin-block Sınıf II'de mandibulayı öne konumlandırır, Sınıf III'te ters etkilidir. C) Aktivatör Sınıf II fonksiyonel aygıtıdır. D) Bionatör de Sınıf II için mandibulayı öne alır. E) Servikal headgear maksiller büyümeyi geriye/aşağı yönlendirir; retrognatik maksillada kontrendikedir. **Ayırt edici:** Düşük SNA = maksiller protraksiyon (yüz maskesi); yüksek SNB/mandibular fazlalık = chincup."},
  {"lesson":"Ortodonti","unit":"Yer Tutucular","question":"Süt ikinci molar, daimî birinci molar sürmeden önce kaybedilen bir olguda, sürecek birinci molara rehberlik etmesi amacıyla seçilen sabit yer tutucu aşağıdakilerden hangisidir?","options":{"A":"Band-loop","B":"Distal shoe","C":"Nance apareyi","D":"Lingual ark","E":"Kron-loop"},"correctAnswer":"B","explanation":"**Doğru (B):** Distal shoe, intra-alveoler uzantısıyla henüz sürmemiş daimî birinci moların meziyaline rehberlik eden tek yer tutucudur. **Çeldiriciler:** A) Band-loop, distal komşu diş SÜRMÜŞKEN kullanılır; sürmemiş molara rehberlik edemez. C) Nance apareyi bilateral üst molar ankrajı sağlar, rehberlik amaçlı değildir. D) Lingual ark alt çenede bilateral boşluk korur, sürmemiş dişe rehberlik etmez. E) Kron-loop, çürük/restore dayanak dişlerde band-loop yerine kullanılır; yine sürmüş distal diş gerektirir. **Ayırt edici:** Daimî 1. molar SÜRMEDEN kayıp = distal shoe; SÜRDÜKTEN sonra kayıp = band-loop."},
  {"lesson":"Ortodonti","unit":"Fonksiyonel Apareyler","question":"Twin-block apareyi ile ilgili:\nI. İskeletsel Sınıf II, mandibular retrognatili büyüyen hastalarda endikedir.\nII. Üst ve alt plakların eğimli ısırma blokları mandibulayı öne konumlandırır.\nIII. En etkili sonucu pubertal büyüme atılımı döneminde verir.\nYukarıdaki ifadelerden hangileri doğrudur?","options":{"A":"Yalnız I","B":"I ve II","C":"II ve III","D":"I ve III","E":"I, II ve III"},"correctAnswer":"E","explanation":"**Doğru (E):** Üç öncül de doğrudur: Twin-block, mandibular retrognatili Sınıf II'de (I) eğimli bloklarla mandibulayı öne alır (II) ve etkisi aktif büyüme döneminde maksimumdur (III). **Çeldiriciler:** A) yalnız I, II ve III'ü dışlar; oysa ikisi de doğru. B) I ve II doğru ama III'ü atlar. C) II ve III doğru ama I'i atlar. D) I ve III doğru ama mekanizma öncülü II'yi atlar. **Ayırt edici:** Fonksiyonel aygıtların ortak şartı aktif büyüme dönemidir; büyümesi biten hastada iskeletsel etki beklenmez."},
  {"lesson":"Ortodonti","unit":"Retansiyon ve Relaps","question":"Ortodontik tedavi sonrası relaps ve retansiyon ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?","options":{"A":"Rotasyone dişlerin nüksünde supraalveolar (interseptal) liflerin gerginliği rol oynar.","B":"Sirkumferensiyal suprakrestal fiberotomi rotasyon nüksünü azaltmak için uygulanır.","C":"Alt keser geç dönem çapraşıklığı geç mandibular büyümeyle ilişkilidir.","D":"Hawley apareyi, bonded sabit retainer'a göre rotasyon nüksünü daha iyi engeller.","E":"Diastema kapatılan olgularda kalıcı bonded retainer tercih edilir."},"correctAnswer":"D","explanation":"**Doğru (D):** İfade yanlıştır; bonded (sabit) retainer dişleri sürekli sabitlediği için rotasyon nüksünü hareketli Hawley apareyinden daha iyi engeller. **Çeldiriciler:** A) Doğru: gergin supraalveolar lifler rotasyonu geri çeker. B) Doğru: fiberotomi bu lifleri keserek nüksü azaltır. C) Doğru: geç alt keser çapraşıklığı geç büyümeyle ilişkilidir. E) Doğru: kapatılan diastema yüksek nüks eğilimlidir, kalıcı bonded retainer gerekir. **Ayırt edici:** Rotasyon ve diastema nüksü yüksektir → sabit retainer; basit hizalama → hareketli retainer yeterli olabilir."},
  {"lesson":"Ortodonti","unit":"Fonksiyonel Apareyler","question":"Pubertal dönemde, Sınıf II Bölüm 1 maloklüzyonlu ve dik yön (yüksek FMA) büyüme paterni gösteren bir hastada fonksiyonel aparey uygulanıyor. Bu hastada istenmeyen etki olarak en olası sonuç aşağıdakilerden hangisidir?","options":{"A":"Alt ön yüz yüksekliğinde artış ve mandibulada posterior rotasyon","B":"Mandibular keserlerde retrüzyon","C":"Overjette azalma","D":"Molar ilişkide Sınıf I'e doğru düzelme","E":"Maksiller büyümenin yatay yönde sınırlanması"},"correctAnswer":"A","explanation":"**Doğru (A):** Yüksek açılı (dik yön) hastada fonksiyonel aygıt posterior dişlerde ekstrüzyona yol açarak mandibulayı geri-aşağı döndürür; alt ön yüz yüksekliği artar — dik yüzlerde istenmeyen etkidir. **Çeldiriciler:** B) Mandibular keser retrüzyonu değil genelde protrüzyon görülür ve bu istenmeyen olsa da soru kökünün vertikal riskine göre daha az olasıdır. C) Overjette azalma tedavinin İSTENEN hedefidir. D) Molar Sınıf I'e düzelme istenen sonuçtur. E) Maksiller yatay büyüme sınırlaması Sınıf II'de istenen etkidir. **Ayırt edici:** Dik yön büyüme paterni = vertikal kontrol kaygısı; fonksiyonel aygıtın posterior ekstrüzyonu bu hastada en kritik istenmeyen etkidir."},
  {"lesson":"Ortodonti","unit":"Tedavi Sonu İşlemler","question":"Sabit tedavi bitiminde braketler söküldükten sonra mine yüzeyinde kalan artık adezivin uzaklaştırılmasında mineye en az zarar verdiği için en sık tercih edilen alet aşağıdakilerden hangisidir?","options":{"A":"Yüksek devirli elmas frez","B":"Düşük devirli tungsten karbid frez","C":"Grenli (zımpara) disk","D":"Ekskavatör","E":"Arkansas (beyaz) taş"},"correctAnswer":"B","explanation":"**Doğru (B):** Düşük devirli tungsten karbid frez, adezivi mineyi aşındırmadan kontrollü biçimde kaldırır ve klinikte standart yöntemdir. **Çeldiriciler:** A) Elmas frez mineyi geri dönüşümsüz aşındırır, çiziklere yol açar. C) Grenli disk düz olmayan yüzeylerde aşırı mine kaybı ve oluk riski taşır. D) Ekskavatör adezivi etkin kaldıramaz, mineyi çentikler. E) Arkansas taşı cilalama içindir, sertleşmiş adezivi kaldırmada yetersiz ve yavaştır. **Ayırt edici:** Adeziv kaldırma = düşük devir tungsten karbid; final cila = lastik/keçe; elmas frez = mine için en zararlı seçenek."}
]'''

# ───────────────────────────────────────────────────────────────────
# C) YENİ PROMPT v2 ile TEST SETİ B (kombine + tanı/tedavi + eski iki sorunun düzeltilmiş hâli)
# ───────────────────────────────────────────────────────────────────
NEW_B = r'''[
  {"lesson":"Ortodonti","unit":"Sürme ve Gelişim","question":"Aşağıdakilerden hangisi gecikmiş diş sürmesinin **sistemik** nedenlerinden biridir?","options":{"A":"Süpernümere diş","B":"Dilaserasyon","C":"Ankiloz","D":"Hipotiroidizm","E":"Dişeti fibromatozisi"},"correctAnswer":"D","explanation":"**Doğru (D):** Hipotiroidizm tüm dentisyonu etkileyen hormonal bir bozukluktur; jeneralize sürme gecikmesine yol açan sistemik bir nedendir. **Çeldiriciler:** A) Süpernümere diş yalnızca ilgili bölgedeki dişi engelleyen lokal-mekanik bir nedendir. B) Dilaserasyon kök eğriliği olup tek dişi ilgilendiren lokal nedendir. C) Ankiloz dişin alveol kemiğine kaynamasıdır, lokalize sürme engelidir. E) Dişeti fibromatozisi yumuşak doku bariyeri oluşturan lokal nedendir. **Ayırt edici:** Tek dişi/bölgeyi tutan = lokal; tüm dentisyonu etkileyen endokrin/sendromik tablo = sistemik."},
  {"lesson":"Ortodonti","unit":"Maloklüzyonlar","question":"Yalnızca maksiller retrüzyona bağlı iskeletsel Sınıf III maloklüzyonu olan bir hastada aşağıdaki sefalometrik bulgulardan hangisi **beklenmez**?","options":{"A":"Azalmış SNA açısı","B":"Negatif ANB açısı","C":"Normal SNB açısı","D":"Konkav yumuşak doku profili","E":"Artmış mandibular korpus uzunluğu"},"correctAnswer":"E","explanation":"**Doğru (E):** Sorun maksillada olduğundan mandibula boyutu normaldir; artmış korpus uzunluğu mandibular protrüzyon (alt çene fazlalığı) kaynaklı Sınıf III'ün bulgusudur, bu hastada beklenmez. **Çeldiriciler:** A) Maksilla geride olduğundan SNA azalır, beklenir. B) Maksilla geride olunca ANB negatifleşir, beklenir. C) Mandibula normal olduğundan SNB normaldir, beklenir. D) Geride maksilla konkav profile yol açar, beklenir. **Ayırt edici:** SNA azalır + SNB normal = maksiller retrüzyon; SNB artar + korpus uzar = mandibular protrüzyon."},
  {"lesson":"Ortodonti","unit":"Erken Tedavi","question":"Sekiz yaşındaki kız çocukta tek üst keser lingual konumda olup alt keserle anterior çapraz kapanış yapıyor; ilgili dişte yeterli overbite var ve iskeletsel ilişki normal. En olası tanı ve en uygun tedavi aşağıdakilerin hangisinde birlikte verilmiştir?","options":{"A":"İskeletsel Sınıf III – yüz maskesi","B":"Dental anterior çapraz kapanış – maksiller Z-yayı ile keser proklinasyonu","C":"Fonksiyonel Sınıf III – chincup","D":"Posterior çapraz kapanış – hızlı maksiller genişletme","E":"Dental derin kapanış – ön ısırma plağı"},"correctAnswer":"B","explanation":"**Doğru (B):** İskeletsel ilişki normal, tek diş lingualde ve yeterli overbite var; bu dental anterior çapraz kapanıştır ve hareketli aygıttaki Z-yayı ile keseri öne proklinleyip düzeltilir. **Çeldiriciler:** A) İskeletsel ilişki normal olduğundan iskeletsel Sınıf III ve yüz maskesi gereksizdir. C) Fonksiyonel/iskeletsel kayma yoktur; chincup mandibular fazlalık içindir. D) Çapraz kapanış anteriordadır, posterior değil; RME endikasyonu yoktur. E) Sorun derin kapanış değil ters keser ilişkisidir. **Ayırt edici:** Tek diş + normal iskelet + yeterli overbite = dental çapraz kapanış (Z-yayı/eğik düzlem); çok diş + iskeletsel kayma = ortopedik tedavi."},
  {"lesson":"Ortodonti","unit":"Tedavinin Biyolojisi","question":"Ortodontik diş hareketi sırasında basınç (pressure) tarafında görülen olaylarla ilgili:\nI. Osteoklastik aktivite ile kemik rezorpsiyonu\nII. Aşırı kuvvette periodontal ligamentte hyalinizasyon\nIII. Sharpey liflerinde gerilim ve osteoblastik kemik apozisyonu\nIV. Kan damarlarında kompresyon\nYukarıdakilerden hangileri basınç tarafına aittir?","options":{"A":"I ve IV","B":"I, II ve IV","C":"II ve III","D":"I, III ve IV","E":"I, II, III ve IV"},"correctAnswer":"B","explanation":"**Doğru (B):** I, II ve IV basınç tarafına aittir. I) Basınç tarafında osteoklastlar kemiği rezorbe eder — doğru. II) Kuvvet aşırıysa damar kompresyonuyla hyalinizasyon basınç tarafında gelişir — doğru. IV) Kan damarları basınç tarafında sıkışır — doğru. III) Sharpey liflerinde gerilim ve osteoblastik apozisyon GERİLİM (tension) tarafının özelliğidir, basınç tarafının değil — bu yüzden III dışlanır. Doğru kombinasyon I+II+IV olduğundan A (II'yi atlar), C (yanlış III'ü alır), D (yanlış III'ü alır, II'yi atlar) ve E (yanlış III'ü ekler) elenir. **Ayırt edici:** Basınç = osteoklast/rezorpsiyon/hyalinizasyon; gerilim = osteoblast/apozisyon."},
  {"lesson":"Ortodonti","unit":"Ortodontik Materyaller","question":"Ortodontik ark tellerinden nikel-titanyum (NiTi) ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?","options":{"A":"Şekil hafızası ve süper-elastiklik gösterir.","B":"Düşük ve geniş aralıkta nispeten sabit kuvvet verir.","C":"Başlangıç hizalama (leveling) aşamasında tercih edilir.","D":"Paslanmaz çelikten daha yüksek elastik modülüne sahiptir.","E":"Büküm ve lehim yapılması zordur."},"correctAnswer":"D","explanation":"**Doğru (D):** İfade yanlıştır; NiTi'nin elastik modülü paslanmaz çelikten DÜŞÜKTÜR — zaten bu düşük modül sayesinde hafif ve sürekli kuvvet verir. **Çeldiriciler:** A) Doğru: NiTi şekil hafızası ve süper-elastiklik sergiler. B) Doğru: geniş deaktivasyon aralığında düşük-sabit kuvvet verir. C) Doğru: esnekliği nedeniyle başlangıç hizalamada idealdir. E) Doğru: NiTi büküm/lehim kabul etmez. **Ayırt edici:** Düşük modül = NiTi (hafif sürekli kuvvet, hizalama); yüksek modül = paslanmaz çelik (rijidite, bitirme/ankraj)."},
  {"lesson":"Ortodonti","unit":"Ortodontik Materyaller","question":"Aşağıdaki ortodontik ark tellerinden hangisi en yüksek rijiditeye (en yüksek elastik modülüne) sahiptir?","options":{"A":"Nikel-titanyum (NiTi)","B":"Beta-titanyum (TMA)","C":"Paslanmaz çelik","D":"Çok telli (multistrand) çelik","E":"Süper-elastik NiTi"},"correctAnswer":"C","explanation":"**Doğru (C):** Paslanmaz çelik, bu teller arasında en yüksek elastik modüle (rijiditeye) sahiptir; bitirme ve ankraj aşamalarında bu yüzden tercih edilir. **Çeldiriciler:** A) NiTi en düşük modüllü tellerdendir, rijit değildir. B) Beta-titanyum (TMA) çelik ile NiTi arasında orta düzey modüle sahiptir. D) Çok telli çelik, tek parça çeliğe göre çok daha esnektir (düşük rijidite). E) Süper-elastik NiTi en esnek gruptandır. **Ayırt edici:** Modül sırası (yüksek→düşük): paslanmaz çelik > TMA > NiTi > multistrand."}
]'''

if __name__ == "__main__":
    run("ESKİ ÜRETİM (gerçek Supabase örnekleri) — sorunlar", OLD_BAD)
    run("YENİ PROMPT v1 — TEST SETİ A (Ortodonti)", NEW_A)
    run("YENİ PROMPT v2 — TEST SETİ B (kombine + tanı/tedavi + düzeltilmiş eskiler)", NEW_B)
