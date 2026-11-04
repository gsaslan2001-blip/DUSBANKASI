# AI Açıklama

Akış: tarayıcı → /api/explain → Gemini generateContent → tamamlanmış çözüm.

- İstek yalnızca soru kökü ve A–E şıklarını taşır. Doğru cevap, mevcut açıklama, ders, ünite ve kaynak pasajları gönderilmez.
- Master prompt: api/_lib/prompt.ts. Çıktı: sorunun ne istediği, beş şıkkın açıklaması ve bağımsız sonuç.
- Sabit sıra: gemini-3.8-flash → gemini-3.7-flash → gemini-3.6-flash → gemini-3.5-flash → gemini-3.5-flash-lite → gemini-3.1-flash-lite → gemini-3-flash-preview.
- Her modelde bütün benzersiz anahtarlar birlikte denenir. İlk tamamlanmış yanıt kazanır; diğer çağrılar iptal edilir. O modelin bütün anahtarları hata/boş/kesik yanıt verdiğinde veya model süresi dolduğunda alt modele geçilir. Farklı modeller aynı anda çağrılmaz. İptal edilen istek yeni deneme başlatmaz.
- Yanıt yalnızca STOP ile tamamlandığında gösterilir; farklı denemelerin kısmi metinleri birleştirilmez.
- Pinecone, embedding, dosya araması, araç çağrısı veya başka sağlayıcı kullanılmaz.

## Sunucu yapılandırması

SMARTDEDUP_GEMINI_KEYS: Smart Dedup eklentisindeki anahtarların virgülle ayrılmış listesi.
Boş ve tekrarlanan değerler ayıklanır. Bu değişken tanımlıysa eski GEMINI_API_KEY ve GEMINI_API_KEY_N havuzu kullanılmaz.
Model sırası kodda sabittir; eski GEMINI_MODELS_AI değişkeni sıralamayı değiştirmez.

Yerelde .env.local kullanılır; Git tarafından yok sayılır. Yayına alınırken aynı sunucu değişkeni Vercel ortamına eklenmelidir. VITE_ öneki kullanılmamalıdır.
Anki eklentisinin dosyaları değiştirilmez; anahtarlar yenilenirse sunucu ortamı da güncellenmelidir.

Vercel Node.js Web Handler kullanılır; üst süre 300 saniye, uygulama iptali 290 saniyedir. 3.8/3.7/3.6 modellerinin her birine 5 saniye, kalan modellerin her birine 20 saniye ayrılır; toplam model bekleme bütçesi 95 saniyedir. Üst modeller bu kısa sürede tam yanıt vermezse alt modele geçilir; yüksek model önceliği artık uzun bekleme anlamına gelmez. Eşzamanlı anahtar denemeleri birden fazla sağlayıcı isteği tüketebilir; ilk tam yanıtla kalanlar iptal edilir.

## Doğrulama

- npm test -- --run src/lib/__tests__/aiAssistantContract.test.ts
- npm run build
- npx tsx scripts/test-explain-prompt.mjs

Son komut gerçek Gemini kotasını kullanır. Üretim handler'ına örnek bir sorunun yalnızca kökü ve şıklarını yollar; HTTP/model bilgilerini sırları göstermeden kaydeder. Son yanıt scratch/ai-explanation-smoke.md dosyasına yazılır.
