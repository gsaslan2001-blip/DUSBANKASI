import os
import glob
import re
import sys
import json
from test_cerrahi_parser import parse_markdown_file, SOURCE_DIR

if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

CANONICAL_CERRAHI_UNITS = [
    "1 CERRAHİYE GİRİŞ",
    "2 ANESTEZİ",
    "3 DİŞ ÇEKİMİ",
    "4 GÖMÜLÜ DİŞLER",
    "5 PERİAPİKAL CERRAHİ",
    "6 KİST ve TÜMÖR CERRAHİSİ",
    "7 ENFEKSİYON",
    "8 YARA İYİLEŞMESİ",
    "9 OROANTRAL İLİŞKİ ve OROANTRAL FİSTÜL",
    "10 PREPROTETİK CERRAHİ",
    "11 İMPLANT CERRAHİSİ",
    "12 MAKSİLLOFASİAL TRAVMA",
    "13 ORTOGNATİK CERRAHİ",
    "14 KRANİOFASİAL DEFORMİTE ve SENDROMLAR",
    "15 DUDAK - DAMAK YARIĞI",
    "16 LAZER",
    "17 OROFASİYAL AĞRI TEMPOROMANDİBULER EKLEM"
]

def classify_question(q):
    """
    Soruyu (soru kökü, şıklar ve açıklama) Cerrahi kanonik ünitelerinden birine atar.
    Soruların soru numarası aralığı da güçlü bir bağlamsal ipucudur, ancak soru metnindeki
    klinik/teorik anahtar kelimeler birincil belirleyicidir.
    """
    text = (q["question"] + " " + " ".join(q["options"].values()) + " " + q["explanation"]).lower()
    stem = q["question"].lower()
    q_num = q["q_num"]

    # 15 DUDAK - DAMAK YARIĞI
    if any(k in text for k in ["dudak-damak", "dudak damak", "damak yarığı", "dudak yarığı", "alveoler yarık", "yarık dudak", "yarık damak", "primer damak", "sekonder damak", "millard", "tennison", "vomer flebi", "10'lar kuralı", "kural 10", "palatoplasti", "keiloplasti"]):
        return "15 DUDAK - DAMAK YARIĞI"

    # 13 ORTOGNATİK CERRAHİ & DİSTRAKSİYON
    if any(k in text for k in ["ortognatik", "bsso", "sagital split", "le fort i osteotomi", "ramus osteotomi", "genioplasti", "distraksiyon osteogenezisi", "latens periyodu", "konsolidasyon periyodu", "aktivasyon periyodu", "mandibula osteotomisi"]):
        # Eğer Le Fort kırık travması değilse
        if not any(k in stem for k in ["travma", "kaza", "kırık", "fraktür"]):
            return "13 ORTOGNATİK CERRAHİ"

    # 11 İMPLANT CERRAHİSİ
    if any(k in text for k in ["dental implant", "implant", "osteotomi", "primer stabilite", "sekonder stabilite", "osseointegrasyon", "implantın", "implantasyon", "isq"]):
        # İstisna: ortognatik veya kist değilse
        if "ortognatik" not in stem and "kırık" not in stem:
            return "11 İMPLANT CERRAHİSİ"

    # 9 OROANTRAL İLİŞKİ ve OROANTRAL FİSTÜL
    if any(k in text for k in ["oroantral", "oro-antral", "maksiller sinüs", "caldwell-luc", "sinüs perforasyonu", "antral", "bichat"]):
        if not any(k in stem for k in ["implant", "sinüs lift", "le fort"]):
            return "9 OROANTRAL İLİŞKİ ve OROANTRAL FİSTÜL"

    # 12 MAKSİLLOFASİAL TRAVMA
    if any(k in text for k in ["kırık", "fraktür", "travma", "le fort i,", "le fort ii", "le fort iii", "zigoma", "orbital", "blow-out", "blowout", "subkondiler kırık", "kondil kırığı", "angulus kırığı", "panfasiyal", "mini plak", "tel osteosentez", "fiksasyon", "intermaksiller"]):
        if not any(k in stem for k in ["tme", "artroskopi", "artrosentez", "ankiloz"]):
            return "12 MAKSİLLOFASİAL TRAVMA"

    # 17 OROFASİYAL AĞRI TEMPOROMANDİBULER EKLEM
    if any(k in text for k in [
        "temporomandibuler", "temporomandibular", "tme", "artrosentez", "artroskopi", "kondil başı",
        "anterior disk deplasmanı", "disk deplasmanı", "redüksiyonlu", "redüksiyonsuz", "artrit",
        "trigeminal nevralji", "karbamazepin", "yanan ağız", "burning mouth", "miyofasiyal",
        "çiğneme kas", "masseter spazm", "bruksizm", "holmlund-hellsing", "ankiloz", "dislokasyon",
        "sublüksasyon", "retrodiskal", "bilaminar zon", "artiküler eminens", "kavite yıkama", "kondilektomi"
    ]):
        return "17 OROFASİYAL AĞRI TEMPOROMANDİBULER EKLEM"

    # 4 GÖMÜLÜ DİŞLER
    if any(k in text for k in ["gömülü", "impakte", "pell-gregory", "pell gregory", "winter sınıflaması", "3. molar dişin çekimi", "gömük"]):
        if not any(k in stem for k in ["kist", "ameloblastom"]):
            return "4 GÖMÜLÜ DİŞLER"

    # 3 DİŞ ÇEKİMİ
    if any(k in text for k in ["diş çekimi", "çekim prensipleri", "davye", "elevatör", "dişin çekimi", "çekim sırası", "kök kırılması", "çekim hareketi"]):
        if not any(k in stem for k in ["gömülü", "alveolit", "kist"]):
            return "3 DİŞ ÇEKİMİ"

    # 5 PERİAPİKAL CERRAHİ
    if any(k in text for k in ["periapikal cerrahi", "apikoektomi", "retrograd", "rezeksiyon", "kök ucu rezeksiyonu", "hemiseksiyon", "premolarizasyon"]):
        return "5 PERİAPİKAL CERRAHİ"

    # 8 YARA İYİLEŞMESİ
    if any(k in text for k in ["yara iyileşmesi", "alveolit", "dry socket", "fibrinolitik alveolit", "primer iyileşme", "sekonder iyileşme", "greft biyolojisi"]):
        return "8 YARA İYİLEŞMESİ"

    # 10 PREPROTETİK CERRAHİ
    if any(k in text for k in ["preprotetik", "vestibuloplasti", "torus", "alveoloplasti", "frenektomi", "frenulum", "z plasti", "z-plasti", "epulis fissuratum", "papiller hiperplazi", "kazanjian", "clark tekniği"]):
        return "10 PREPROTETİK CERRAHİ"

    # 2 ANESTEZİ
    if any(k in text for k in [
        "lokal anestezi", "anestezik", "lidokain", "artikain", "prilokain", "bupivakain", "mepivakain",
        "vazokonstriktör", "adrenalin", "epinefrin", "mandibular blok", "inferior alveolar",
        "akinosi", "gow-gates", "infraorbital sinir bloğu", "palatin sinir", "genel anestezi",
        "malign hipertermi", "süksinilkolin", "sedasyon", "methemoglobinemi", "toksisite", "vazovagal", "parestezi"
    ]):
        return "2 ANESTEZİ"

    # 7 ENFEKSİYON
    if any(k in text for k in [
        "ludwig anjini", "selülit", "apse", "fasial loj", "boşluk", "submandibular loj",
        "sublingual loj", "flegmon", "osteomiyelit", "osteoradyonekroz", "mronj", "bisfosfonat",
        "denosumab", "noma", "aktinomikoz", "trismus", "operkülit", "perikoronitis", "perikoronit", "fasiyal selülit"
    ]):
        return "7 ENFEKSİYON"

    # 14 KRANİOFASİAL DEFORMİTE ve SENDROMLAR
    if any(k in text for k in [
        "sendrom", "crouzon", "apert", "treacher collins", "pierre robin", "kleidokraniyal",
        "gorlin-goltz", "eagle sendromu", "osteogenezis imperfekta", "fibröz displazi", "cherubism",
        "cherubizm", "mccune-albright", "paget", "gardner sendromu", "mavi sklera", "marfan"
    ]):
        return "14 KRANİOFASİAL DEFORMİTE ve SENDROMLAR"

    # 16 LAZER
    if any(k in text for k in ["lazer", "er:yag", "nd:yag", "co2 lazer", "diyot lazer"]):
        return "16 LAZER"

    # 6 KİST ve TÜMÖR CERRAHİSİ
    if any(k in text for k in [
        "kist", "tümör", "ameloblastom", "keratokist", "odontom", "dentigeröz", "karsinom",
        "adenom", "enükleasyon", "marsupyalizasyon", "carnoy", "kriyocerrahi", "ranula",
        "mukosel", "sialolitiazis", "tükürük bezi", "parotis", "wharton", "stenon", "siyalolit",
        "pleomorfik", "karsinoma", "malign", "benign", "lezyon", "biyopsi", "displazi",
        "stafne", "semento-osseöz", "epulis", "granülom", "dev hücreli", "melanom", "eritroplazi", "lökoplazi"
    ]):
        return "6 KİST ve TÜMÖR CERRAHİSİ"

    # 1 CERRAHİYE GİRİŞ (Genel cerrahi aletleri, piezocerrahi, sütur, kanama vs.)
    if any(k in text for k in ["piezocerrahi", "sütur", "iğne", "insizyon", "flep", "hemostaz", "koagülasyon", "kanama", "sterilizasyon", "dezenfeksiyon", "biyopsi"]):
        return "1 CERRAHİYE GİRİŞ"

    # Varsayılan soru numarası blokları kontrolü
    if q_num <= 20:
        return "1 CERRAHİYE GİRİŞ"
    elif q_num <= 30:
        return "3 DİŞ ÇEKİMİ"
    elif q_num <= 40:
        return "4 GÖMÜLÜ DİŞLER"
    elif q_num <= 45:
        return "5 PERİAPİKAL CERRAHİ"
    elif q_num <= 70:
        return "6 KİST ve TÜMÖR CERRAHİSİ"
    elif q_num <= 80:
        return "11 İMPLANT CERRAHİSİ"
    elif q_num <= 90:
        return "13 ORTOGNATİK CERRAHİ"
    elif q_num <= 100:
        return "10 PREPROTETİK CERRAHİ"
    elif q_num <= 165:
        return "12 MAKSİLLOFASİAL TRAVMA"
    elif q_num <= 210:
        return "7 ENFEKSİYON"
    elif q_num <= 220:
        return "9 OROANTRAL İLİŞKİ ve OROANTRAL FİSTÜL"
    elif q_num <= 280:
        return "17 OROFASİYAL AĞRI TEMPOROMANDİBULER EKLEM"
    elif q_num <= 300:
        return "14 KRANİOFASİAL DEFORMİTE ve SENDROMLAR"
    elif q_num <= 320:
        return "15 DUDAK - DAMAK YARIĞI"
    elif q_num <= 340:
        return "13 ORTOGNATİK CERRAHİ"
    elif q_num <= 380:
        return "2 ANESTEZİ"
    elif q_num <= 390:
        return "1 CERRAHİYE GİRİŞ"
    else:
        return "6 KİST ve TÜMÖR CERRAHİSİ"

def main():
    files = sorted(glob.glob(os.path.join(SOURCE_DIR, "*.md")))
    all_q = []
    for f in files:
        qs, _ = parse_markdown_file(f)
        all_q.extend(qs)

    all_q.sort(key=lambda x: x["q_num"])

    unit_counts = {u: 0 for u in CANONICAL_CERRAHI_UNITS}
    unclassified = 0

    for q in all_q:
        u = classify_question(q)
        if u in unit_counts:
            unit_counts[u] += 1
        else:
            print(f"⚠️ Bilinmeyen ünite: {u} (Soru {q['q_num']})")
            unclassified += 1

    print("\n--- CERRAHİ KANONİK ÜNİTE DAĞILIMI (573 Soru) ---")
    for u in CANONICAL_CERRAHI_UNITS:
        print(f"{u:45s}: {unit_counts[u]:3d} soru")

    print(f"\nToplam Sınıflandırılan: {sum(unit_counts.values())} / {len(all_q)}")

if __name__ == "__main__":
    main()
