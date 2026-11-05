"""
DUS Bankası — Radyoloji Çıkmış Soruları Kanonik Ünite Eşleme Modülü
"""
import sys
import os
import re

CANONICAL_RADYOLOJI_UNITS = [
    "Ünite 1 - Diş Hekimliğinde Radyoloji",
    "Ünite 2 - Radyolojide Projeksiyon Kuralları",
    "Ünite 3 - Radyobiyoloji",
    "Ünite 4 - Dijital Görüntüleme",
    "Ünite 5 - Film İle Görüntüleme",
    "Ünite 6 - Radyografi ve Banyo Tekniği",
    "Ünite 7 - Radyografik Artefaktlar",
    "Ünite 8 - Dişhekimliğinde Radyografi Teknikleri",
    "Ünite 9 - Konik Işınılı Bilgisayarlı Tomografi",
    "Ünite 10 - Diş Hekimliğinde Diğer Görüntüleme Teknikleri",
    "Ünite 11 - Anatomik Landmarklar",
    "Ünite 12 - Diş Çürükleri ve Çürük Radyolojisi",
    "Ünite 13 - Diş Anomalileri",
    "Ünite 14 - Periodontal Radyoloji",
    "Ünite 15 - Radyografik Yorumlama İlkeleri",
    "Ünite 16 - Çeneler Ve Yüzün İltihabi Hastalıkları",
    "Ünite 17 - Kistler",
    "Ünite 18 - Benign Tümörler",
    "Ünite 19 - Diğer Kemik Hastalıkları",
    "Ünite 20 - Karsinomlar",
    "Ünite 21 - Sistemik Hastalıkların Çene Bulguları",
    "Ünite 22 - Paranazal Sinüsler",
    "Ünite 23 - Temporomandibular Eklem (Tme) Diagnostik Görüntüleme",
    "Ünite 24 - Yumuşak Doku Kalsifikasyonları",
    "Ünite 25 - Tükürük Bezi Hastalıkları",
    "Ünite 26 - Diş Hekimliğinde İmplant Planlaması",
    "Ünite 27 - Travma",
    "Ünite 28 - Kraniofasiyal Anomaliler",
    "Ünite 29 - Muayene Teknikleri",
    "Ünite 30 - Diş Hekimliğinde Sistemik Hastalıklar ve Diş Hekimli Yaklaşımı",
    "Ünite 31 - Solunum Sistemi Hastalıkları",
    "Ünite 32 - Gastrointestinal Sistem Hastalıkları",
    "Ünite 33 - Böbrek ve Üriner Sistem Hastalıkları",
    "Ünite 34 - Sinir Sistemi Hastalıkları",
    "Ünite 35 - Metabolik Kemik Hastalıkları",
    "Ünite 36 - Vaskülitler",
    "Ünite 37 - Hematolojik Sistem Hastalıkları",
    "Ünite 38 - Endokrin Sistem Hastalıkları",
    "Ünite 39 - Pankreatik Bozukluklar",
    "Ünite 40 - Bağ Dokusu Hastalıkları",
    "Ünite 41 - Cinsel Yolla Bulaşan Hastalılar",
    "Ünite 42 - Ağrı ve Duyu Değişiklikleri",
    "Ünite 43 - Intraoral Bulgular Anatomik Lokasyonlarına Göre Dudak Şişlikleri (Makroşelitis)",
    "Ünite 44 - Intraoral Bulgular Renk Değişikliklerine Göre Beyaz Lezyonlar",
    "Ünite 45 - Kırmızı Lezyonlar",
    "Ünite 46 - Pigmente Lezyonlar",
    "Ünite 47 - İntraoral Bulgular Yüzey Değişikliklerine Göre Vezikülobüllöz Lezyonlar",
    "Ünite 48 - Premalign (Prekanseröz) Lezyonlar"
]

def get_canonical_unit(q):
    n = q["q_num"]
    text = (q["question"] + " " + " ".join(q["options"].values()) + " " + q["explanation"]).lower()
    stem = q["question"].lower()

    # --- 1. X-Işını Fiziği ve Tüp Yapısı (Soru 1 - 25) ---
    if 1 <= n <= 25:
        return "Ünite 1 - Diş Hekimliğinde Radyoloji"

    # --- 2. Radyasyon Biyolojisi (Soru 26 - 45) ---
    if 26 <= n <= 45:
        return "Ünite 3 - Radyobiyoloji"

    # --- 3. Projeksiyon Kuralları ve Korunma (Soru 46 - 75) ---
    if 46 <= n <= 75:
        return "Ünite 2 - Radyolojide Projeksiyon Kuralları"

    # --- 4. Anatomik Landmarklar (Soru 76 - 100) ---
    if 76 <= n <= 100:
        return "Ünite 11 - Anatomik Landmarklar"

    # --- 5. Banyo ve Artefaktlar (Soru 101 - 120) ---
    if 101 <= n <= 120:
        if any(k in text for k in ["banyo", "geliştirici", "tespit", "fiksatör", "hidrokinon", "elon", "karanlık oda"]):
            return "Ünite 6 - Radyografi ve Banyo Tekniği"
        if any(k in text for k in ["kontrast", "dansite", "gri ton"]):
            return "Ünite 15 - Radyografik Yorumlama İlkeleri"
        return "Ünite 6 - Radyografi ve Banyo Tekniği"

    # --- 6. İntraoral Radyografi Teknikleri (Soru 121 - 135) ---
    if 121 <= n <= 135:
        if any(k in text for k in ["açıortay", "paralel", "ısırma", "bite-wing", "film tutucu"]):
            return "Ünite 8 - Dişhekimliğinde Radyografi Teknikleri"
        return "Ünite 8 - Dişhekimliğinde Radyografi Teknikleri"

    # --- 7. Film ve Ekranlar / Dijital (Soru 136 - 150) ---
    if 136 <= n <= 150:
        if any(k in text for k in ["fosfor", "ccd", "cmos", "dijital", "piksel"]):
            return "Ünite 4 - Dijital Görüntüleme"
        return "Ünite 5 - Film İle Görüntüleme"

    # --- 8. Ekstraoral Teknikler ve Panoramik (Soru 151 - 190) ---
    if 151 <= n <= 190:
        if any(k in text for k in ["artefakt", "focal trough", "imaj tabakası", "hayalet görüntü", "pozisyon hatası"]):
            return "Ünite 7 - Radyografik Artefaktlar"
        return "Ünite 8 - Dişhekimliğinde Radyografi Teknikleri"

    # --- 9. KIBT ve İleri Görüntüleme (Soru 191 - 245) ---
    if 191 <= n <= 245:
        if any(k in text for k in ["konik ışınlı", "kibt", "cbct", "voksel", "fov"]):
            return "Ünite 9 - Konik Işınılı Bilgisayarlı Tomografi"
        if "tme" in text and ("artrografi" in text or "mrg" in text or "disk" in text):
            return "Ünite 23 - Temporomandibular Eklem (Tme) Diagnostik Görüntüleme"
        return "Ünite 10 - Diş Hekimliğinde Diğer Görüntüleme Teknikleri"

    # --- 10. Radyografik Yorumlama ve İltihabi Hastalıklar (Soru 246 - 275) ---
    if 246 <= n <= 275:
        if any(k in text for k in ["osteomyelit", "osteomiyelit", "garre", "periostit", "iltihab"]):
            return "Ünite 16 - Çeneler Ve Yüzün İltihabi Hastalıkları"
        if any(k in text for k in ["osteopetrozis", "kemik hastalığı", "paget", "fibröz displazi", "cherubism"]):
            return "Ünite 19 - Diğer Kemik Hastalıkları"
        return "Ünite 15 - Radyografik Yorumlama İlkeleri"

    # --- 11. Kistler (Soru 276 - 305) ---
    if 276 <= n <= 305:
        if any(k in text for k in ["cherubism", "caffey", "brown"]):
            return "Ünite 19 - Diğer Kemik Hastalıkları"
        if any(k in text for k in ["kist", "keratokist", "dentigeröz", "radiküler", "globulomaksiller", "nazolabial"]):
            return "Ünite 17 - Kistler"
        if any(k in text for k in ["tümör", "ameloblastom", "fibroma", "odontoma", "sementoblastoma"]):
            return "Ünite 18 - Benign Tümörler"
        return "Ünite 17 - Kistler"

    # --- 12. Benign Tümörler (Soru 306 - 325) ---
    if 306 <= n <= 325:
        if any(k in text for k in ["dejeneratif eklem", "tme", "kondil", "artrit"]):
            return "Ünite 23 - Temporomandibular Eklem (Tme) Diagnostik Görüntüleme"
        if any(k in text for k in ["ameloblastom", "odontom", "miksoma", "fibroma", "adenomatoid", "pindborg"]):
            return "Ünite 18 - Benign Tümörler"
        return "Ünite 18 - Benign Tümörler"

    # --- 13. Karsinomlar ve Malign Lezyonlar (Soru 326 - 340) ---
    if 326 <= n <= 340:
        return "Ünite 20 - Karsinomlar"

    # --- 14. Diğer Kemik Hastalıkları & Sistemik Çene Bulguları (Soru 341 - 355) ---
    if 341 <= n <= 355:
        if any(k in text for k in ["sistemik hastalık", "osteogenezis imperfekta", "hiperparatiroidizm", "orokraniodigital"]):
            return "Ünite 21 - Sistemik Hastalıkların Çene Bulguları"
        return "Ünite 19 - Diğer Kemik Hastalıkları"

    # --- 15. Çürük ve Periodontal Radyoloji (Soru 356 - 370) ---
    if 356 <= n <= 370:
        if any(k in text for k in ["çürük", "sekonder çürük", "resiprokal", "okluzal çürük"]):
            return "Ünite 12 - Diş Çürükleri ve Çürük Radyolojisi"
        if any(k in text for k in ["periodontal", "kemik kaybı", "furkasyon", "lamina dura"]):
            return "Ünite 14 - Periodontal Radyoloji"
        return "Ünite 12 - Diş Çürükleri ve Çürük Radyolojisi"

    # --- 16. Diş Anomalileri (Soru 371 - 390) ---
    if 371 <= n <= 390:
        return "Ünite 13 - Diş Anomalileri"

    # --- 17. Filmler / Fizik Ekleri (Soru 391 - 400) ---
    if 391 <= n <= 400:
        return "Ünite 5 - Film İle Görüntüleme"

    # --- 18. Mukokutanöz ve Otoimmün Hastalıklar (Soru 401 - 435) ---
    if 401 <= n <= 435:
        if any(k in text for k in ["liken planus", "pemfigus", "pemfigoid", "eritema multiforme", "bül", "nikolsky"]):
            return "Ünite 47 - İntraoral Bulgular Yüzey Değişikliklerine Göre Vezikülobüllöz Lezyonlar"
        if "sjögren" in text:
            return "Ünite 25 - Tükürük Bezi Hastalıkları"
        return "Ünite 47 - İntraoral Bulgular Yüzey Değişikliklerine Göre Vezikülobüllöz Lezyonlar"

    # --- 19. İnfeksiyöz, Beyaz, Kırmızı, Pigmente Lezyonlar (Soru 436 - 465) ---
    if 436 <= n <= 465:
        if any(k in text for k in ["aids", "hiv", "hpv", "siğil", "kondilom", "sifiliz"]):
            return "Ünite 41 - Cinsel Yolla Bulaşan Hastalılar"
        if any(k in text for k in ["lökoplaki", "eritroplaki", "karsinoma in situ", "aktinik", "displazi"]):
            return "Ünite 48 - Premalign (Prekanseröz) Lezyonlar"
        if any(k in text for k in ["diaskopi", "hemanjiyom", "eritroplaki", "kırmızı"]):
            return "Ünite 45 - Kırmızı Lezyonlar"
        if any(k in text for k in ["kandidiyazis", "beyaz"]):
            return "Ünite 44 - Intraoral Bulgular Renk Değişikliklerine Göre Beyaz Lezyonlar"
        return "Ünite 44 - Intraoral Bulgular Renk Değişikliklerine Göre Beyaz Lezyonlar"

    # --- 20. Tükürük Bezi Hastalıkları (Soru 466 - 500) ---
    if 466 <= n <= 500:
        return "Ünite 25 - Tükürük Bezi Hastalıkları"

    # --- 21. Paranazal Sinüsler (Soru 501 - 510) ---
    if 501 <= n <= 510:
        return "Ünite 22 - Paranazal Sinüsler"

    # --- 22. Sinir Sistemi ve Sistemik Bulgular (Soru 511 - 530) ---
    if 511 <= n <= 530:
        if any(k in text for k in ["ramsey-hunt", "bell", "nevralji", "fasial sinir", "parestezi", "paralizi"]):
            return "Ünite 34 - Sinir Sistemi Hastalıkları"
        if any(k in text for k in ["dudak", "makroşelit", "melkersson"]):
            return "Ünite 43 - Intraoral Bulgular Anatomik Lokasyonlarına Göre Dudak Şişlikleri (Makroşelitis)"
        if any(k in text for k in ["kelebek", "sle", "lupus", "bağ dokusu"]):
            return "Ünite 40 - Bağ Dokusu Hastalıkları"
        return "Ünite 21 - Sistemik Hastalıkların Çene Bulguları"

    # --- 23. Pigmente Lezyonlar (Soru 531 - 540) ---
    if 531 <= n <= 540:
        return "Ünite 46 - Pigmente Lezyonlar"

    # --- 24. Yumuşak Doku Kalsifikasyonları (Soru 541 - 571) ---
    if 541 <= n <= 571:
        if any(k in text for k in ["sinüs", "rhinolit", "pseudokist", "mukozal kalınlaşma"]):
            return "Ünite 22 - Paranazal Sinüsler"
        return "Ünite 24 - Yumuşak Doku Kalsifikasyonları"

    return "Ünite 1 - Diş Hekimliğinde Radyoloji"
