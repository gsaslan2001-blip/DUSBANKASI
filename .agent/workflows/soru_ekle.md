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
Her soru için aşağıdaki kontroller zorunludur:
1.  **Soru metni tam mı?** (Eksik cümle veya kesilmiş metin olmamalı)
2.  **5 Şık mevcut ve anlamlı mı?** (A-E arası tüm şıklar dolu olmalı)
3.  **Doğru cevap belirlenmiş mi?** (A, B, C, D veya E değeri atanmış olmalı)
4.  **Cevap açıklaması var mı?** (Boş açıklamalı sorular reddedilir)
5.  **Ünite ve Ders ismi var mı?** (Kategori bilgisi zorunludur)

### Adım 3: 🚀 İçe Aktarma (Import)
Kontrol listesini geçen sorular, projedeki `shared.deploy_to_supabase` fonksiyonu kullanılarak sisteme eklenir.

## 📝 Kurallar
- Kalite kontrolünü geçemeyen sorular için kullanıcıya hata raporu sunulur ve düzeltme istenir.
- Her import işlemi sonrası veritabanındaki toplam soru sayısı doğrulanır.
- `lesson` ve `unit` isimleri projedeki standart isimlendirmeye (AGENTS.md § 4) uygun olmalıdır.
