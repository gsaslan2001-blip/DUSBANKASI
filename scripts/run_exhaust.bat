@echo off
setlocal enabledelayedexpansion
chcp 65001 > nul
title DUS Exhaust Runner

:: ─── Argüman kontrolü ──────────────────────────────────────────────────────
:: Kullanım: run_exhaust.bat --lesson <Ders> --input <pdf1> [pdf2] ...
::       ya: run_exhaust.bat --lesson <Ders> --dir <klasor>
::
:: Örnek (klasör):
::   run_exhaust.bat --lesson Radyoloji --dir "C:\DUS\Radyoloji\soru üretilecek"
::
:: Örnek (tek dosya):
::   run_exhaust.bat --lesson Radyoloji --input "C:\DUS\Radyoloji\Unite46.pdf"
:: ─────────────────────────────────────────────────────────────────────────────

set SCRIPT_DIR=%~dp0
set PROJECT_DIR=%SCRIPT_DIR%..
set LOG_DIR=%SCRIPT_DIR%logs
set TIMESTAMP=%DATE:~6,4%%DATE:~3,2%%DATE:~0,2%_%TIME:~0,2%%TIME:~3,2%%TIME:~6,2%
set TIMESTAMP=%TIMESTAMP: =0%

:: Argümanları doğrudan python'a ilet
set LESSON=
set ARGS=

:parse
if "%~1"=="" goto run
if /i "%~1"=="--lesson" (
    set LESSON=%~2
    shift & shift
    goto parse
)
set ARGS=%ARGS% %1
shift
goto parse

:run
if "%LESSON%"=="" (
    echo HATA: --lesson belirtilmedi.
    echo Kullanim: run_exhaust.bat --lesson ^<Ders^> --input ^<pdf...^>
    echo          run_exhaust.bat --lesson ^<Ders^> --dir ^<klasor^>
    pause
    exit /b 1
)

set LOGFILE=%LOG_DIR%\exhaust_%LESSON%_%TIMESTAMP%.log

echo ==================================================
echo DUS EXHAUST — %LESSON%
echo Log: %LOGFILE%
echo Basliyor...
echo ==================================================

set PYTHONUTF8=1
python -u "%SCRIPT_DIR%notebooklm_mcp_exhaust.py" --lesson "%LESSON%" %ARGS% > "%LOGFILE%" 2>&1

echo.
echo ==================================================
echo TAMAMLANDI. Log: %LOGFILE%
echo ==================================================
pause
