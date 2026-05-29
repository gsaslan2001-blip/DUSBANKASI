@echo off
setlocal enabledelayedexpansion
chcp 65001 >nul
echo ============================================
echo  NotterbookLM Profil Login Kontrol
echo ============================================
echo.

set NLM="C:\Users\FURKAN\AppData\Roaming\uv\tools\notebooklm-mcp-cli\Scripts\nlm.exe"

echo Mevcut profiller:
%NLM% login profile list 2>&1
echo.
echo --------------------------------------------
echo.

for %%p in (default fresh full hesap2) do (
    echo [%%p] kontrol ediliyor...
    %NLM% login --check --profile %%p 2>&1
    if !errorlevel! equ 0 (
        echo   ^> SONUC: Gecerli
    ) else (
        echo   ^> SONUC: GECERSIZ
    )
    echo.
)

echo ============================================
echo  Kontrol tamamlandi.
echo ============================================
pause
