# NotebookLM DUS Tek-Hastalık İnfografik Akışı

Bu akış `Görsel` NotebookLM defterindeki beş temel DUS PDF’sini kullanarak, her hastalık/konu için ayrı bir ayrıntılı infografik üretir. Aynı konu tek çalıştırmada veya yeniden başlatma sonrasında otomatik olarak ikinci kez gönderilmez.

## Sabit hedef

- Notebook: `Görsel`
- Notebook ID: `4189682e-7904-434d-ac1f-899ce172af80`
- Tür: `infographic`
- Ayrıntı: `detailed` (NotebookLM’in en yüksek seçeneği)
- Yön: `landscape`
- Dil: `tr`
- Kaynak seçimi: Beş PDF’nin canlı `notebook_get` ile dönen kaynak kimlikleri
- Prompt: `scripts/prompts/dus_gorsel_hafiza_ayirici_tani_v2.txt`

## Çalıştırma

Önce HTTP MCP köprüsünü başlatın:

```powershell
scripts\start_notebooklm_mcp.bat
```

Başka bir terminalde kuyruğu çalıştırın:

```powershell
scripts\run_notebooklm_infographics.bat
```

Salt-okunur ön kontrol:

```powershell
scripts\run_notebooklm_infographics.bat --dry-run
```

Tek bir yeni konu ile güvenli canlı test:

```powershell
scripts\run_notebooklm_infographics.bat --max-new 1
```

## Devam ve kota davranışı

Kontrol noktası `scripts/recovery/notebooklm_infographics/4189682e-7904-434d-ac1f-899ce172af80.json` altında tutulur ve `.gitignore` nedeniyle repoya girmez.

- `pending`: Henüz gönderilmedi; sıradaki çalıştırmada ele alınır.
- `inflight`: Çağrı başladı ama kesin sonuç kaydedilemedi. Çift üretimi önlemek için otomatik tekrar gönderilmez.
- `submitted`: Studio çağrısı kabul edildi; sonraki çalıştırma artefakt durumunu uzlaştırır.
- `completed`: Hazır ve yeniden gönderilmez.
- `failed`: Studio kesin hata verdi; varsayılan olarak yeniden gönderilmez.

Google `Rate limited`, `quota`, `resource exhausted` veya `code 8` döndürürse mevcut konu `pending` bırakılır ve akış başarılı biçimde durur. Kota açıldığında aynı komut kaldığı yerden devam eder.

Belirsiz `inflight` kaydı ancak NotebookLM Studio elle kontrol edildikten sonra açıkça yeniden denenmelidir:

```powershell
scripts\run_notebooklm_infographics.bat --retry-inflight
```

Bu seçenek çift üretim riski taşıdığı için normal devam komutunda kullanılmaz. Kesin olarak başarısız işlerin elle yeniden denenmesi için `--retry-failed` kullanılabilir.

## Kaynak güvenliği

Akış aşağıdaki beş başlığı tam ve tekil olarak doğrular; eksikse yerel dosyadan yükler, aynı başlık birden fazlaysa durur:

1. `2026 Patoloji.pdf`
2. `2026_Radyoloji .pdf`
3. `Mikrobiyoloji Konu Anlatımı.pdf`
4. `periodontoloji.pdf`
5. `Yavuz Şahin Farmakoloji 8. Baskı.pdf`

Kimlik bilgileri, çerezler veya NotebookLM profil verileri projeye yazılmaz.
