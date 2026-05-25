---
name: deneme-analysis
description: Deneme sınavı hatalarını analiz eder, RAG (Pinecone) ile konu takviyesi yapar ve Anki kartları oluşturur.
---

# Deneme Analizi & RAG Entegrasyonu

Bu skill, kullanıcının yaptığı deneme sınavı hatalarını Supabase'den çekip, bu hataları derinlemesine analiz ederek RAG üzerinden bilgi takviyesi sağlamak için tasarlanmıştır.

## Kullanım Senaryoları
- Kullanıcı "Deneme bitti" dediğinde.
- "Hatalarımı analiz et" komutu verildiğinde.
- Belirli bir günün performansını incelemek istendiğinde.

## İş Akışı Adımları

### 1. Veri Çekme (Supabase)
- `c:/Users/FURKAN/Desktop/Projeler/DUSBANKASI/scripts/analyze_deneme_followup.py` scriptini çalıştır.
- JSON çıktısını oku. `total_mistakes` ve `topics` listesini al.

### 2. Önceliklendirme
- En çok hata yapılan (count yüksek olan) konuları en başa al.
- Eğer hata sayısı eşitse; Patoloji, Fizyoloji ve Farmakoloji gibi "Kritik" derslere öncelik ver.

### 3. Bilgi Geri Çağırma (Pinecone)
- Her konu için `pinecone-mcp-server:search_records` aracını kullan.
- Index: `myppdfs`
- Namespace: (Varsa ders adı, yoksa boş)
- Query: "[Lesson] [Unit] mekanizma, önemli tablo, patognomonik"

### 4. Raporlama
- `c:/Users/FURKAN/Desktop/Projeler/DUSMERKEZİ/DUS/GUNLUK/YYYY-MM-DD_Followup.md` dosyasını oluştur.
- İçeriği `DUS/REFERENCE/SORU_CEVAP.md` formatına uygun, mekanistik ve tablo odaklı hazırla.

### 5. Anki Entegrasyonu
- Rapordaki en kritik bilgileri `anki-mcp:addNotes` ile `DUS::Hatalarım` destesine ekle.

## Önemli Kurallar
- **Asla Motivasyonel Laf Yapma:** Sadece veri ve mekanizma konuş.
- **Mekanizma Öncelikli Ol:** "X hastasınında Y görülür" yerine "A mekanizması bozulduğu için B artar, bu da Y sonucunu doğurur" şeklinde yaz.
- **Hata Yönetimi:** Eğer Supabase'de veri yoksa, kullanıcıya "Bugün henüz kaydedilmiş hata bulunamadı" bildirimi yap.
