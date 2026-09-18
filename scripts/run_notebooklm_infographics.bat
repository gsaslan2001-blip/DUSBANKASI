@echo off
setlocal

set "PYTHON_EXE=%USERPROFILE%\AppData\Roaming\uv\tools\notebooklm-mcp-cli\Scripts\python.exe"
if not exist "%PYTHON_EXE%" set "PYTHON_EXE=python"

"%PYTHON_EXE%" "%~dp0notebooklm_infographic_queue.py" %*
exit /b %ERRORLEVEL%
