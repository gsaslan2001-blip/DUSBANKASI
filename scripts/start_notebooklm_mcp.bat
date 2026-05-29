@echo off
title NotebookLM MCP Server (jacob-bd CLI / HTTP / port 8000)
echo ==================================================
echo NotebookLM MCP Sunucusu HTTP Modunda Baslatiliyor...
echo Sunucu : jacob-bd/notebooklm-mcp-cli (Patchright stealth)
echo Profil : default (settings.json)
echo Adres  : http://127.0.0.1:8000/mcp
echo Transport: streamable-http (stateless)
echo ==================================================
echo.
echo NOT: Bu sunucu calisirken Antigravity'nin notebooklm girisi
echo ayni Chrome profilini paylasamaz. Antigravity'de notebooklm'i
echo kullanacaksan once bu pencereyi kapat.
echo.
echo NOT: Auth stale/expired ise once asagidaki komutu calistirip
echo Google'a giris yap, sonra bu .bat'i baslat:
echo   uvx --from git+https://github.com/jacob-bd/notebooklm-mcp-cli.git nlm login
echo.
uvx --from git+https://github.com/jacob-bd/notebooklm-mcp-cli.git notebooklm-mcp --transport http --host 127.0.0.1 --port 8000 --path /mcp
pause
