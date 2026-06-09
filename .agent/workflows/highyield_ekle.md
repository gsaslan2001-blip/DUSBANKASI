# 🔄 İş Akışı: /highyield-ekle (DUSBANKASI High-Yield İthalat)

Bu iş akışı, kullanıcının "highyield ekle" komutuyla başlattığı, çok değerli (high-yield) soruların Supabase veritabanına doğrudan eklenmesi için kullanılır.
Eklenen sorular doğrudan `quality_flag = 'high_yield'` bayrağıyla işaretlenir ve Ölüm Maçı'ndan (smart_audit_pipeline) muaf tutulur.

## 📥 Giriş
Kullanıcı bir veya birden fazla high-yield soruyu metin veya dosya formatında iletir ve ders/ünite bilgisini belirtir.

## 🛠️ İşlem Adımları

### Adım 1: JSON Dönüşümü
Gelen metin veya sorular, standart formata dönüştürülür:
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
*Gerekirse bu adımı bir geçici `.json` veya `.md` dosyasına yazarak gerçekleştirin.*

### Adım 2: 🛑 Kalite Kontrol Listesi (Checklist)
Tıpkı standart soru ekleme akışında olduğu gibi asgari kurallara uyulup uyulmadığı (`add_questions.py` içerisindeki kalite kapısı tarafından) kontrol edilecektir.

### Adım 3: 🚀 İçe Aktarma (High-Yield Flag ile)
Hazırlanan dosya `add_questions.py` scripti kullanılarak, `--high-yield` bayrağıyla sisteme yüklenir.
**DİKKAT:** Kesinlikle `--audit` bayrağı KULLANILMAMALIDIR!

Örnek Komut:
```bash
python scripts/add_questions.py <dosya_yolu> --lesson "<Ders>" --unit "<Ünite>" --high-yield
```

Bu işlem:
1. Soruları OpenAI ile vektörler (embedding).
2. Supabase `questions` tablosuna `quality_flag = 'high_yield'` olarak yazar.
3. Ölüm maçını tetiklemez; sorular havuza doğrudan en değerli statüde eklenir.

## 📝 Kurallar
- Bu akışla eklenen sorular en değerli sorular olduğu için Ölüm Maçı'na (death match) sokulmazlar.
- Eğer komutta `--audit` kullanılırsa akışın amacı dışına çıkılır, sadece `--high-yield` kullanılmalıdır.
- Soru formati eksikse (örn: 5 şık yoksa, açıklama kısaysa) `add_questions.py` standart kalite kapısından geçemeyebilir, kullanıcının soruları eksiksiz iletmesi sağlanmalıdır.
