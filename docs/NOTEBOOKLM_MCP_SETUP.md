# NotebookLM MCP bağlantısı

DUSBANKASI iki kullanım biçimini destekler:

- `.mcp.json` içindeki `notebooklm` kaydı, MCP istemcisinin doğrudan stdio ile bağlanması içindir.
- `scripts/start_notebooklm_mcp.bat`, Python pipeline'larının kullandığı `http://127.0.0.1:8000/mcp` köprüsünü başlatır.

Kimlik bilgileri repoda tutulmaz. `nlm` bunları yerel profil deposunda saklar.

## İlk kurulum ve kontrol

```powershell
nlm login --check
py scripts/notebooklm_mcp_health.py
```

HTTP pipeline kullanılacaksa `scripts/start_notebooklm_mcp.bat` çalıştırılır. Sağlık kontrolü gerçek bir `notebook_list` çağrısı yaptığı için yalnızca portun açık olduğunu değil, NotebookLM erişimini de doğrular.

## Ek Google hesabı

Yeni hesap için ayrı profil açılır; mevcut profilin üzerine yazmamak için profil adı verilir:

```powershell
scripts\notebooklm_profiles.bat login hesap3
scripts\notebooklm_profiles.bat switch hesap3
scripts\notebooklm_profiles.bat check hesap3
```

Hesap değiştirildikten sonra çalışan MCP süreci yeniden başlatılmalıdır; böylece yeni varsayılan profil kesin olarak yüklenir. Eski hesaba dönüş: `scripts\notebooklm_profiles.bat switch default`.
