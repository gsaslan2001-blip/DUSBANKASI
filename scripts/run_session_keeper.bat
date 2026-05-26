@echo off
REM DUS otomasyonu - NotebookLM oturum tazeleyici (Task Scheduler tarafindan cagrilir)
REM Her calismada session_keeper.py --once ile cookie'yi tazeler, logs\session_keeper.log'a yazar.
set "PY=C:\Users\FURKAN\AppData\Local\Programs\Python\Python312\python.exe"
set "SCRIPT=C:\Users\FURKAN\Desktop\Projeler\DUSBANKASI\scripts\session_keeper.py"
set "LOGDIR=C:\Users\FURKAN\Desktop\Projeler\DUSBANKASI\scripts\logs"
if not exist "%LOGDIR%" mkdir "%LOGDIR%"
echo. >> "%LOGDIR%\session_keeper.log"
echo ==== %DATE% %TIME% ==== >> "%LOGDIR%\session_keeper.log"
"%PY%" "%SCRIPT%" --once >> "%LOGDIR%\session_keeper.log" 2>&1
