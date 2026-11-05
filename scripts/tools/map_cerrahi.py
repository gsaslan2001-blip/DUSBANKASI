import os
import glob
import sys
import json
try:
    from tools.test_cerrahi_parser import parse_markdown_file, SOURCE_DIR
except ImportError:
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

def get_canonical_unit(q):
    n = q["q_num"]
    stem = q["question"].lower()
    text = (q["question"] + " " + " ".join(q["options"].values()) + " " + q["explanation"]).lower()

    # Özel soru bazlı net yönlendirmeler
    # Dudak-Damak Yarığı bloğu
    if 301 <= n <= 315:
        return "15 DUDAK - DAMAK YARIĞI"

    # Ortognatik Cerrahi ve Distraksiyon
    if 79 <= n <= 84:
        return "13 ORTOGNATİK CERRAHİ"
    if 316 <= n <= 333:
        return "13 ORTOGNATİK CERRAHİ"

    # Preprotetik Cerrahi
    if 76 <= n <= 78:
        return "10 PREPROTETİK CERRAHİ"
    if 91 <= n <= 99:
        return "10 PREPROTETİK CERRAHİ"

    # İmplant Cerrahisi (Kemik dansitesi, implant tipleri, sinüs ogmentasyonu)
    if 67 <= n <= 75:
        return "11 İMPLANT CERRAHİSİ"
    if 85 <= n <= 90:
        return "11 İMPLANT CERRAHİSİ"

    # Maksillofasiyal Travma
    if 102 <= n <= 156:
        return "12 MAKSİLLOFASİAL TRAVMA"

    # Enfeksiyon (Fasial lojlar, Ludwig anjini, osteomiyelit, osteoradyonekroz, MRONJ)
    if 157 <= n <= 201:
        return "7 ENFEKSİYON"
    if n == 501: # Noma
        return "7 ENFEKSİYON"
    if 514 <= n <= 516: # HIV oral bulguları ve oral tüylü lökoplaki
        return "7 ENFEKSİYON"
    if 538 <= n <= 541: # Oral kandidiyazis, protez stomatiti
        return "7 ENFEKSİYON"

    # Oroantral İlişki ve Oroantral Fistül
    if 205 <= n <= 218:
        return "9 OROANTRAL İLİŞKİ ve OROANTRAL FİSTÜL"

    # Orofasiyal Ağrı ve TME
    if 219 <= n <= 279:
        return "17 OROFASİYAL AĞRI TEMPOROMANDİBULER EKLEM"

    # Kraniofasial Deformite ve Sendromlar
    if 280 <= n <= 300:
        return "14 KRANİOFASİAL DEFORMİTE ve SENDROMLAR"
    if n in [407, 408, 451, 452, 453]: # Mavi sklera / osteogenezis imperfekta
        return "14 KRANİOFASİAL DEFORMİTE ve SENDROMLAR"
    if 529 <= n <= 531: # Kleidokraniyal, Gorlin-Goltz sendromu
        return "14 KRANİOFASİAL DEFORMİTE ve SENDROMLAR"

    # Anestezi (ASA, Genel anestezi, Lokal anestezikler, vazokonstriktörler, bloklar)
    if 334 <= n <= 380:
        return "2 ANESTEZİ"

    # Cerrahiye Giriş (Aletler, piezocerrahi, flep, biyopsi, sütur, hemostaz, aciller, profilaksi)
    if 1 <= n <= 18:
        return "1 CERRAHİYE GİRİŞ"
    if 64 <= n <= 66: # flepler
        return "1 CERRAHİYE GİRİŞ"
    if 100 <= n <= 101: # debridman, çapraz enfeksiyon sterilizasyon
        return "1 CERRAHİYE GİRİŞ"
    if 381 <= n <= 390: # MI, enfektif endokardit profilaksisi, aciller, gebelik ilaçları, eritema multiforme
        return "1 CERRAHİYE GİRİŞ"
    if n in [446, 542, 543, 553, 554, 565, 566, 567]: # Aftöz stomatit, iğne batması protokolü, Addison vb.
        return "1 CERRAHİYE GİRİŞ"

    # Diş Çekimi
    if 19 <= n <= 24:
        return "3 DİŞ ÇEKİMİ"

    # Yara İyileşmesi
    if 25 <= n <= 27:
        return "8 YARA İYİLEŞMESİ"
    if 34 <= n <= 36: # Dry socket / alveolit
        return "8 YARA İYİLEŞMESİ"

    # Gömülü Dişler
    if 28 <= n <= 33:
        return "4 GÖMÜLÜ DİŞLER"
    if 37 <= n <= 39:
        return "4 GÖMÜLÜ DİŞLER"

    # Periapikal Cerrahi
    if 40 <= n <= 42:
        return "5 PERİAPİKAL CERRAHİ"

    # Kist ve Tümör Cerrahisi (Kistler, odontojenik tümörler, oral karsinom, tükürük bezleri, premalign lezyonlar)
    if 43 <= n <= 63:
        return "6 KİST ve TÜMÖR CERRAHİSİ"
    if 202 <= n <= 204: # Kserostomi / Botoks
        return "6 KİST ve TÜMÖR CERRAHİSİ"
    if 391 <= n <= 406:
        return "6 KİST ve TÜMÖR CERRAHİSİ"
    if 409 <= n <= 450:
        return "6 KİST ve TÜMÖR CERRAHİSİ"
    if 454 <= n <= 500:
        return "6 KİST ve TÜMÖR CERRAHİSİ"
    if 502 <= n <= 513:
        return "6 KİST ve TÜMÖR CERRAHİSİ"
    if 517 <= n <= 528:
        return "6 KİST ve TÜMÖR CERRAHİSİ"
    if 532 <= n <= 537:
        return "6 KİST ve TÜMÖR CERRAHİSİ"
    if 544 <= n <= 552:
        return "6 KİST ve TÜMÖR CERRAHİSİ"
    if 555 <= n <= 564:
        return "6 KİST ve TÜMÖR CERRAHİSİ"
    if 568 <= n <= 573:
        return "6 KİST ve TÜMÖR CERRAHİSİ"

    # Kalan tek tük sorular olursa
    return "6 KİST ve TÜMÖR CERRAHİSİ"

def main():
    files = sorted(glob.glob(os.path.join(SOURCE_DIR, "*.md")))
    all_q = []
    for f in files:
        qs, _ = parse_markdown_file(f)
        all_q.extend(qs)
    all_q.sort(key=lambda x: x["q_num"])

    unit_counts = {u: 0 for u in CANONICAL_CERRAHI_UNITS}
    unit_questions = {u: [] for u in CANONICAL_CERRAHI_UNITS}

    for q in all_q:
        u = get_canonical_unit(q)
        unit_counts[u] += 1
        unit_questions[u].append(q)

    print("=================================================================")
    print("CERRAHİ ÇIKMIŞ SORULARI KANONİK ÜNİTE DAĞILIMI (TOPLAM: 573 SORU)")
    print("=================================================================")
    for u in CANONICAL_CERRAHI_UNITS:
        count = unit_counts[u]
        sample = unit_questions[u][0]["question"][:50].replace("\n", " ") if count > 0 else "---"
        print(f"{u:45s}: {count:3d} soru | Örnek: {sample}...")

    print("-----------------------------------------------------------------")
    print(f"Toplam Soru: {sum(unit_counts.values())} / 573")
    print("=================================================================")

if __name__ == "__main__":
    main()
