# TRİAJ düzeltme planı

## Bulgular

- Yeni ünite planlama doğrudan T0_SAMPLING test görevi yaratıyor. İlk tekrarın tamamlanması ayrı bir adım olarak modellenmemiş.
- Ana ekrandaki eski Günün Planı, TRİAJ takviminden bağımsız soru istatistiklerine göre öneriler üretiyor.
- Takvimde tarih ve ünite ekleme formu mevcut; gerçek hesapla kayıt, yeniden açma ve tarih değiştirme uçtan uca doğrulanmalı.
- DeepSeek durum uç noktası sunucudaki anahtar ve izin verilen URL ayarını kontrol ediyor. Vercel'de değişken isimlerinin bulunması dağıtılan sürümde geçerli değerleri veya sağlayıcı erişimini kanıtlamaz.
- TickTick odak uç noktasındaki ortam token'ına düşme davranışı hesaplar arasında veri sızdırabiliyordu. Hesaba bağlı OAuth kaydı kullanılmalı.
- Koyu temada tersine çevrilen slate metin rengi, açık sarı giriş alanlarıyla düşük kontrast oluşturuyor.

## Uygulama sırası

1. Gerçek kullanıcı oturumuyla tarih ekleme, düzenleme ve yeniden yükleme akışlarını test et; kayıt hatalarını ve katalog eşleşmelerini düzelt.
2. İlk tekrarı testten ayrı, tamamlanabilir ve tarihlenebilir görev olarak modelle. Mevcut kayıtların uyumluluğunu koru; tamamlanınca T+0 örneklemesini ve sonrasındaki T+3/kova akışını başlat.
3. Ana sayfa önerilerini TRİAJ'ın planlı ve vadesi gelen görevlerine bağla; yeterli veri yoksa uydurma öneri üretme.
4. Aylık takvimi görev adları, tarih seçimi ve mobil/klavye erişimiyle tamamla; tema kontrastını gerçek tarayıcıda doğrula.
5. Deploy ve TickTick ayarlarını çalışan kaynak uygulamayla karşılaştır; hesap bazlı güvenli bağlantıyı kur ve gerçek sağlayıcılarla test et. Eski kaynak anahtarlarının yenilendiğini doğrula.
6. Birim, API, tarayıcı ve tam derleme testlerini çalıştır; iki cihazda kayıt ve geri yüklemeyi doğrula. Sonrasında commit, üretim dağıtımı ve canlı kontrol yap.
