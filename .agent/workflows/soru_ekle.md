# 🔄 İş Akışı: /soru-ekle (DUSBANKASI Manuel İthalat)

Bu iş akışı, kullanıcının ilettiği ham soruları yapılandırılmış JSON formatına dönüştürmek, kalite kontrollerinden geçirmek ve Supabase veritabanına aktarmak için kullanılır.

## 📥 Giriş
Kullanıcı bir veya birden fazla soruyu metin veya dosya formatında iletir.

## 🛠️ İşlem Adımları

### Adım 1: JSON Dönüşümü
Gelen metin aşağıdaki şemaya uygun bir listeye çevrilir:
```json
[
  {
    "question": "Soru kökü",
    "options": {
      "A": "Şık A",
      "B": "Şık B",
      "C": "Şık C",
      "D": "Şık D",
      "E": "Şık E"
    },
    "correctAnswer": "A",
    "explanation": "Detaylı açıklama",
    "lesson": "DERS ADI",
    "unit": "Ünite adı"
  }
]
```

### Adım 2: 🛑 Kalite Kontrol Listesi (Checklist)
Her soru için aşağıdaki kontroller zorunludur. Bu kontroller `shared._validate_single_question`
tarafından otomatik uygulanır — geçemeyen sorular `recovery/rejected/`'a loglanır ve DB'ye **yazılmaz**:
1.  **Soru metni tam mı?** (Eksik cümle/kesilmiş metin olmamalı; en az `MIN_STEM_WORDS` kelime)
2.  **5 Şık mevcut ve anlamlı mı?** (A-E arası tüm şıklar string ve dolu olmalı)
3.  **Doğru cevap belirlenmiş mi?** (A, B, C, D veya E değeri atanmış olmalı)
4.  **Cevap açıklaması yeterli mi?** (Boş veya `MIN_EXPL_WORDS`'ten kısa açıklamalar reddedilir)
5.  **Bilgi sızıntısı yok mu?** (Doğru şık metninin >%60'ı soru kökünde geçiyorsa reddedilir)
6.  **Açıklama totolojik değil mi?** (Açıklamanın >%60'ı soru kökünü tekrarlıyorsa reddedilir)
7.  **AI dolgu cümlesi yok mu?** ("Tebrikler!", "Unutmayın" vb. → `ai_dolgu_cumlesi` ile reddedilir)
8.  **Bozuk karakter (mojibake) yok mu?** (`Ã`, `ÅŸ` vb. → `bozuk_karakter` ile reddedilir; "periodontal" gibi geçerli terimler etkilenmez)
9.  **Ünite ve Ders ismi var mı?** (Kategori bilgisi zorunludur)

### Adım 3: 🚀 İçe Aktarma (Import)
Kontrol listesini geçen sorular, projedeki `shared.deploy_to_supabase` fonksiyonu kullanılarak
sisteme eklenir (OpenAI 1536-dim embedding + 10'arlık chunked write).

### Adım 4: ⚔️ Ölüm Maçı (Post-Production, OTOMATİK)
Bir ünite için soru ekleme/üretim talebi geldiğinde akış şudur: **üretim hattı çalışır →
sorular eklenir → o ünitedeki ESKİ + YENİ tüm sorular otomatik denetime alınır.** Üretim hattında
(`notebooklm-exhaust.py`) denetim artık **varsayılan açıktır**; kapatmak için `--no-audit` ver.
Denetim ünite-kapsamlıdır: `fetch_all_questions` o ünitenin tüm sorularını (sadece yeni eklenenleri
değil) çeker ve LSH + anlamsal + soru-kökü Jaccard radarından geçirip DeepSeek Ölüm Maçı'na sokar.

> 🔐 **Login dayanıklılığı:** Üretim sırasında NotebookLM oturumu düşerse `ensure_auth` önce sessiz
> headless cookie tazeler; oturum tamamen ölmüşse DUSBANKASI terminalinde **görünür `notebooklm login`**
> açılır (tarayıcı + ENTER), giriş yapılınca üretim **kaldığı yerden** sürer.

Manuel/izole denetim gerektiğinde **"X ünitedeki soruları kalite kontrol yap"** istendiğinde
`--unit` ile yalnızca o üniteyi tara (hızlı, izole):
```bash
# Tek ünite (önerilen — hızlı):
python scripts/tools/smart_audit_pipeline.py --lesson "<DERS>" --unit "<ÜNİTE>" --dry-run  # önizle
python scripts/tools/smart_audit_pipeline.py --lesson "<DERS>" --unit "<ÜNİTE>"            # flag uygula

# Ders geneli (--unit'siz):
python scripts/tools/smart_audit_pipeline.py --lesson "<DERS>" --dry-run
python scripts/tools/smart_audit_pipeline.py --lesson "<DERS>"
```
**Hız:** Ölüm maçları artık **paralel** çalışır (`--concurrency`, varsayılan 8). Benzer çiftler
ucuz koruma kapılarından (tip/evre/zıtlık/soru-kökü farkı) geçtikten sonra DeepSeek'e eş zamanlı gönderilir.

Karar verici **DeepSeek-v4-pro**'dur; benzer çiftleri yalnızca **soru kökü + doğru şık + açıklama**
üçlüsü üzerinden (çeldirici şıklar hariç) kıyaslar: `keep_1` / `keep_2` (zayıfı eler) · `keep_both` (farklı kavram/doğru şık → ikisi de kalır) · `remove_both` (ikisi de düşük kalite → ikisi de elenir).

**Rapor:** `raporlar/curation_summary.md` — her çift için hangi soru hangiyle kıyaslandı, benzerlik
skoru, karar + gerekçe ve **iki sorunun da tam metni** (kök + 5 şık + doğru cevap + açıklama).

## 📝 Kurallar
- Kalite kontrolünü geçemeyen sorular için kullanıcıya hata raporu sunulur ve düzeltme istenir.
- Her import işlemi sonrası veritabanındaki toplam soru sayısı doğrulanır.
- `lesson` ve `unit` isimleri projedeki standart isimlendirmeye (gemini.md §0 "Aktif dersler") uygun olmalıdır.
