$ErrorActionPreference = "Continue"
$LogFile = "$PSScriptRoot\logs\run_all_$(Get-Date -Format 'yyyyMMdd_HHmmss').log"
New-Item -ItemType Directory -Force -Path "$PSScriptRoot\logs" | Out-Null

function Write-Log {
    param([string]$Msg)
    $line = "$(Get-Date -Format 'HH:mm:ss') $Msg"
    Write-Host $line
    Add-Content -Path $LogFile -Value $line -Encoding UTF8
}

Write-Log "=== DUS TOPLU URETIM BASLADI ==="
Write-Log "Log: $LogFile"

$ProjDir = Split-Path $PSScriptRoot -Parent
$Script  = "$PSScriptRoot\notebooklm_mcp_exhaust.py"

$Lessons = @(
    @{ Name="Endodonti"; Dir="C:\Users\FURKAN\Desktop\DUS\Endodonti\Endodonti Unite Pdf" },
    @{ Name="Histoloji"; Dir="C:\Users\FURKAN\Desktop\DUS\Histoloji\histo unite pdf" },
    @{ Name="Protez";    Dir="C:\Users\FURKAN\Desktop\DUS\protez\Yeni klasor\Parcalanmis" }
)

# Gerçek yolları resolve et (Türkçe karakter içerebilir)
$RealDirs = @(
    "C:\Users\FURKAN\Desktop\DUS\Endodonti\Endodonti Ünite Pdf",
    "C:\Users\FURKAN\Desktop\DUS\Histoloji\histo ünite pdf",
    "C:\Users\FURKAN\Desktop\DUS\protez\Yeni klasör\Parcalanmis"
)
$LessonNames = @("Endodonti","Histoloji","Protez")

for ($i = 0; $i -lt $LessonNames.Count; $i++) {
    $lesson = $LessonNames[$i]
    $dir    = $RealDirs[$i]

    Write-Log ""
    Write-Log "=========================================="
    Write-Log "[$($i+1)/3] $lesson BASLIYOR"
    Write-Log "Klasor: $dir"
    Write-Log "=========================================="

    if (-not (Test-Path $dir)) {
        Write-Log "HATA: Klasor bulunamadi, atlaniyor: $dir"
        continue
    }

    $proc = Start-Process -FilePath "python" `
        -ArgumentList "`"$Script`" --input `"$dir`" --lesson `"$lesson`"" `
        -WorkingDirectory $ProjDir `
        -RedirectStandardOutput "$PSScriptRoot\logs\${lesson}_stdout.log" `
        -RedirectStandardError  "$PSScriptRoot\logs\${lesson}_stderr.log" `
        -NoNewWindow -PassThru -Wait

    Write-Log "$lesson bitti. ExitCode: $($proc.ExitCode)"
    Write-Log "  stdout: $PSScriptRoot\logs\${lesson}_stdout.log"
}

Write-Log ""
Write-Log "=== TUM DERSLER TAMAMLANDI ==="
