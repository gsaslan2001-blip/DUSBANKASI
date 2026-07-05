#!/usr/bin/env bash
set -u
cd "C:/Users/FURKAN/Desktop/Projeler/DUSBANKASI" || exit 1
export PYTHONUTF8=1
run () {
  local f="$1"; local ts; ts=$(date +%Y%m%d_%H%M%S)
  local log="scripts/logs/endo_rerun_$(date +%H%M%S).log"
  echo "[RERUN] >>> $f -> $log"
  python -u scripts/notebooklm_mcp_exhaust.py --lesson "5. Sınıf Endodonti" --file "$f" >> "$log" 2>&1
  echo "[RERUN] <<< $f exit=$?"
}
run "C:/Users/FURKAN/Desktop/final/Endodonti/4- Kök Kanalı Doldurma Yöntemleri.pdf"
run "C:/Users/FURKAN/Desktop/final/Endodonti/5- Endodontik Tedavide Başarı ve Başarısızlık.pdf"
echo "[RERUN] BITTI"
