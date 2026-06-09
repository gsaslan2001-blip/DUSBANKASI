$dir = "C:\Users\FURKAN\Desktop\DUS\Ortodonti\Ortodonti Ünite PDF"
$files = @(
    "Ünite 3 - ORTODONTİK TEDAVİNİN BİYOLOJİSİ.pdf",
    "Ünite 4 - ANKRAJ.pdf",
    "Ünite 5 - ORTODONTİK TEŞHİS.pdf",
    "Ünite 6 - MATURASYON ANALİZİ.pdf",
    "Ünite 7 - DENTAL MALOKLÜZYONLAR.pdf",
    "Ünite 8 - ORTODONTİK TEDAVİLER.pdf",
    "Ünite 9 - SÜRME REHBERLİĞİ (GUIDANCE ERUPTION).pdf",
    "Ünite 10 - ORTODONTİK TEDAVİ APAREYLERİ.pdf",
    "Ünite 11 - EKSTRAORAL APAREYLER.pdf",
    "Ünite 12 - ORTODONTİK TEDAVİ PLANLAMASI.pdf",
    "Ünite 13 - GÖMÜLÜ DİŞLERİN ORTODONTİK TEDAVİSİ.pdf",
    "Ünite 14 - YETİŞKİN HASTALARDA ORTODONTİK TEDAVİ.pdf",
    "Ünite 15 - SENDROMLAR.pdf",
    "Ünite 16 - DUDAK VE DAMAK YARIKLARI.pdf",
    "Ünite 17 - ORTOGNATİK CERRAHİ ILE ORTODONTİK TEDAVİ.pdf",
    "Ünite 18 - ORTODONTİK TEDAVİ KOMPLİKASYONLARI.pdf",
    "Ünite 19 - ORTODONTİK MATERYALLER.pdf",
    "Ünite 20 - RETANSİYON – RELAPS.pdf",
    "Ünite 21 - EK BİLGİLER.pdf"
)

$env:PYTHONUTF8="1"

foreach ($f in $files) {
    $fullPath = Join-Path $dir $f
    if (Test-Path $fullPath) {
        Write-Host "`n============================================================"
        Write-Host ">>> Başlıyor: $f"
        Write-Host "============================================================`n"
        python -u scripts/notebooklm_mcp_cloze.py --file $fullPath --lesson "Ortodonti"
    } else {
        Write-Host "Dosya bulunamadı: $fullPath"
    }
}
Write-Host "Tüm üniteler (3-21) tamamlandı!"
