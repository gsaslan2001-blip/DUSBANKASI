@echo off
setlocal
title NotebookLM MCP Server (HTTP / port 8000)
echo ==================================================
echo NotebookLM MCP Sunucusu HTTP Modunda Baslatiliyor...
echo Sunucu : kurulu notebooklm-mcp CLI (yerel executable)
echo Profil : nlm config ile secilen varsayilan profil
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
echo   nlm login
echo.

set "NLM_MCP_EXE=%USERPROFILE%\.local\bin\notebooklm-mcp.exe"
if not exist "%NLM_MCP_EXE%" set "NLM_MCP_EXE=%USERPROFILE%\AppData\Roaming\uv\tools\notebooklm-mcp-cli\Scripts\notebooklm-mcp.exe"
if not exist "%NLM_MCP_EXE%" (
  echo HATA: notebooklm-mcp.exe bulunamadi.
  echo Once NotebookLM MCP CLI kurulumunu tamamlayin.
  pause
  exit /b 1
)

echo Executable: %NLM_MCP_EXE%
"%NLM_MCP_EXE%" --transport http --host 127.0.0.1 --port 8000 --path /mcp
pause
