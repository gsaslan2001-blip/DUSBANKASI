# Detached launcher with diagnostics
$env:NO_PROXY = "127.0.0.1,localhost"
$env:MCP_URL = "http://127.0.0.1:8000/mcp"
$env:PYTHONUTF8 = "1"
$env:PYTHONUNBUFFERED = "1"

$py  = "C:\Users\FURKAN\AppData\Local\Programs\Python\Python312\python.exe"
$scr = "C:\Users\FURKAN\Desktop\Projeler\DUSBANKASI\scripts\notebooklm_mcp_exhaust.py"
$logd = "C:\Users\FURKAN\Desktop\Projeler\DUSBANKASI\scripts\logs"
$diag = "$logd\detached_diag.log"

# TANILAMA
"=== DETACHED DIAG @ $(Get-Date) ===" | Out-File $diag -Encoding utf8
"USER: $env:USERNAME / $env:USERDOMAIN" | Out-File $diag -Append -Encoding utf8
"SESSION: $env:SESSIONNAME" | Out-File $diag -Append -Encoding utf8
"=== Test-NetConnection 127.0.0.1:8000 ===" | Out-File $diag -Append -Encoding utf8
$tnc = Test-NetConnection -ComputerName 127.0.0.1 -Port 8000 -WarningAction SilentlyContinue
"TcpTestSucceeded=$($tnc.TcpTestSucceeded)" | Out-File $diag -Append -Encoding utf8
"=== Test 127.0.0.1 ===" | Out-File $diag -Append -Encoding utf8
try {
    $r = Invoke-WebRequest -Uri "http://127.0.0.1:8000/mcp" -Method POST -Headers @{"Content-Type"="application/json";"Accept"="application/json, text/event-stream"} -Body '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2024-11-05","capabilities":{},"clientInfo":{"name":"diag","version":"1"}}}' -TimeoutSec 10 -UseBasicParsing
    "IWR_127_OK status=$($r.StatusCode)" | Out-File $diag -Append -Encoding utf8
} catch {
    "IWR_127_FAIL: $($_.Exception.Message)" | Out-File $diag -Append -Encoding utf8
}
"=== Test localhost ===" | Out-File $diag -Append -Encoding utf8
try {
    $r = Invoke-WebRequest -Uri "http://localhost:8000/mcp" -Method POST -Headers @{"Content-Type"="application/json";"Accept"="application/json, text/event-stream"} -Body '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2024-11-05","capabilities":{},"clientInfo":{"name":"diag","version":"1"}}}' -TimeoutSec 10 -UseBasicParsing
    "IWR_LH_OK status=$($r.StatusCode)" | Out-File $diag -Append -Encoding utf8
} catch {
    "IWR_LH_FAIL: $($_.Exception.Message)" | Out-File $diag -Append -Encoding utf8
}
"=== bağlantı testi bitti, üretim başlıyor ===" | Out-File $diag -Append -Encoding utf8

Remove-Item "$logd\run_endodonti.log","$logd\run_histoloji.log","$logd\run_protez.log" -Force -ErrorAction SilentlyContinue

& $py -u $scr --input "C:\Users\FURKAN\Desktop\DUS\Endodonti\Endodonti Ünite Pdf" --lesson Endodonti *> "$logd\run_endodonti.log"
& $py -u $scr --input "C:\Users\FURKAN\Desktop\DUS\Histoloji\histo ünite pdf"     --lesson Histoloji *> "$logd\run_histoloji.log"
& $py -u $scr --input "C:\Users\FURKAN\Desktop\DUS\protez\Yeni klasör\Parcalanmis" --lesson Protez    *> "$logd\run_protez.log"
