@echo off
setlocal
set "NLM=%USERPROFILE%\.local\bin\nlm.exe"
if not exist "%NLM%" set "NLM=%USERPROFILE%\AppData\Roaming\uv\tools\notebooklm-mcp-cli\Scripts\nlm.exe"
if not exist "%NLM%" (
  echo HATA: nlm.exe bulunamadi.
  exit /b 1
)

if /i "%~1"=="list" (
  "%NLM%" login profile list
  exit /b %errorlevel%
)
if /i "%~1"=="login" if not "%~2"=="" (
  "%NLM%" login --profile "%~2" --force
  exit /b %errorlevel%
)
if /i "%~1"=="switch" if not "%~2"=="" (
  "%NLM%" login switch "%~2"
  exit /b %errorlevel%
)
if /i "%~1"=="check" if not "%~2"=="" (
  "%NLM%" login --check --profile "%~2"
  exit /b %errorlevel%
)

echo Kullanim:
echo   notebooklm_profiles.bat list
echo   notebooklm_profiles.bat login hesap3
echo   notebooklm_profiles.bat switch hesap3
echo   notebooklm_profiles.bat check hesap3
exit /b 2
