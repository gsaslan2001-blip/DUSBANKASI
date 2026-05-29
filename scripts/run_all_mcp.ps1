$ErrorActionPreference = "Stop"
$env:PYTHONUTF8 = "1"

Write-Host "Starting Endodonti..."
python scripts/notebooklm_mcp_exhaust.py --input "C:\Users\FURKAN\Desktop\DUS\Endodonti\Endodonti Ünite Pdf" --lesson "Endodonti" --audit
Write-Host "Endodonti finished."

Write-Host "Starting Histoloji..."
python scripts/notebooklm_mcp_exhaust.py --input "C:\Users\FURKAN\Desktop\DUS\Histoloji\histo ünite pdf" --lesson "Histoloji" --audit
Write-Host "Histoloji finished."

Write-Host "Starting Protez..."
python scripts/notebooklm_mcp_exhaust.py --input "C:\Users\FURKAN\Desktop\DUS\protez\Yeni klasör\Parcalanmis" --lesson "Protez" --audit
Write-Host "Protez finished."

Write-Host "All processing complete."
