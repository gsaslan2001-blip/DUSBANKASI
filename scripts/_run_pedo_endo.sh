#!/usr/bin/env bash
# Ortodonti bitti — Pedodonti ve Endodonti'yi sırayla çalıştır.
set -u
cd "C:/Users/FURKAN/Desktop/Projeler/DUSBANKASI" || exit 1
export PYTHONUTF8=1

run_lesson () {
    local lesson="$1"; local dir="$2"
    local ts; ts=$(date +%Y%m%d_%H%M%S)
    local safe; safe=$(echo "$lesson" | tr -d ' .')
    local log="scripts/logs/exhaust_${safe}_${ts}.log"
    echo "[CHAIN] >>> $lesson basliyor -> $log"
    python -u scripts/notebooklm_mcp_exhaust.py --lesson "$lesson" --input "$dir" > "$log" 2>&1
    echo "[CHAIN] <<< $lesson bitti (exit=$?) -> $log"
}

run_lesson "5. Sınıf Pedodonti" "C:/Users/FURKAN/Desktop/final/Pedodonti"
run_lesson "5. Sınıf Endodonti" "C:/Users/FURKAN/Desktop/final/Endodonti"

echo "[CHAIN] TUM ZINCIR TAMAMLANDI."
