#!/usr/bin/env bash
# 5. Sınıf zincir koşusu: Ortodonti bitince Pedodonti, sonra Endodonti.
# Ortodonti zaten arka planda çalışıyor; bu script onun bitmesini bekler.
set -u
cd "C:/Users/FURKAN/Desktop/Projeler/DUSBANKASI" || exit 1
export PYTHONUTF8=1

ORTO_LOG="$1"   # çalışan ortodonti log dosyası

echo "[CHAIN] Ortodonti bitişi bekleniyor: $ORTO_LOG"
# Maks ~10 saat bekle (600 * 60s)
for i in $(seq 1 600); do
    if grep -q "🎉 TAMAMLANDI!" "$ORTO_LOG" 2>/dev/null; then
        echo "[CHAIN] Ortodonti TAMAMLANDI tespit edildi (i=$i)."
        break
    fi
    if grep -q "🚫 FATAL" "$ORTO_LOG" 2>/dev/null; then
        echo "[CHAIN] Ortodonti FATAL ile bitti — zincir yine de devam ediyor."
        break
    fi
    sleep 60
done

run_lesson () {
    local lesson="$1"; local dir="$2"
    local ts; ts=$(date +%Y%m%d_%H%M%S)
    local safe; safe=$(echo "$lesson" | tr -d ' .')
    local log="scripts/logs/exhaust_${safe}_${ts}.log"
    echo "[CHAIN] >>> $lesson başlıyor → $log"
    python -u scripts/notebooklm_mcp_exhaust.py --lesson "$lesson" --input "$dir" > "$log" 2>&1
    echo "[CHAIN] <<< $lesson bitti (exit=$?) → $log"
}

run_lesson "5. Sınıf Pedodonti" "C:/Users/FURKAN/Desktop/final/Pedodonti"
run_lesson "5. Sınıf Endodonti" "C:/Users/FURKAN/Desktop/final/Endodonti"

echo "[CHAIN] 🎉 TÜM ZİNCİR TAMAMLANDI."
