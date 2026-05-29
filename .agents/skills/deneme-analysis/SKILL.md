---
name: deneme-analysis
description: Deneme sınavı bittikten sonra kullanıcının yanlışlarını Supabase'den çekip, her biri için Pinecone (myppdfs) RAG bağlamıyla S5 v9.0 protokolünde akademik tekrar raporu üretir.
---

# Deneme Analizi & RAG Tekrar Raporları

Bu skill, kullanıcı bir deneme sınavını bitirdiğinde tetiklenir. Birincil yol **deterministik bir asenkron Python pipeline'ıdır** — bu skill o pipeline'ı çalıştırır, MCP araçlarıyla manuel arama yapmaz.

> **Tam oyun kitabı:** `WORKFLOW_DENEME_ANALIZI_RAG.md` · **Orkestratör:** `scripts/generate_deneme_rag_reports.py`

## Kullanım Senaryoları (Tetikleyiciler)
- "Deneme bitti" / "denemeyi tamamladım"
- "Hatalarımı analiz et" / "tekrar raporu üret"
- "Bugünkü yanlışlarım için çalışma kâğıdı hazırla"

## İş Akışı (Birincil — Pipeline)

Çalışma dizini daima `DUSBANKASI/` kök dizinidir.

```powershell
# 1) Önce dry-run ile bugünkü yanlışları listele (API kredisi harcamadan doğrula)
python scripts/generate_deneme_rag_reports.py --dry-run

# 2) Test: yalnızca ilk 3 yanlış için rapor üret
python scripts/generate_deneme_rag_reports.py --limit 3

# 3) Tam çalıştırma: bugünkü tüm yanlışlar
python scripts/generate_deneme_rag_reports.py
```

Pipeline şunları otomatik yapar (manuel adım gerekmez):
1. **Veri çekme:** `analyze_deneme_followup.get_today_mistakes()` — Supabase `question_stats`'tan bugünün yanlışları (UTC-aware, null-guard, `question_id` dedup).
2. **RAG bağlamı:** `lib/pinecone_client.get_rag_context()` — index `myppdfs`, namespace `lesson.lower()`, `top_k=15` → `bge-reranker-v2-m3` `top_n=5`; namespace boşsa global fallback.
3. **Rapor üretimi:** `lib/openai_client.generate_completion()` — `gpt-4o`, `temperature=0.3`, retry 3× (backoff 1s→2s→4s, 429→60s). Prompt: `scripts/templates/s5_prompt.jinja2` (S5 v9.0).
4. **Yazma:** `.md` → `C:\Users\FURKAN\Desktop\DUS\Deneme Analizi\Tekrar Hataları\YYYY-MM-DD\[Ders]_[Unite]_[QID_ilk8].md`
5. **İlerleme:** `lib/progress_sync.update_progress()` → `C:\Users\FURKAN\.claude\DUS\PROGRESS.md` "Tamamlanan Deneme Analizleri".

Her hata izole `try/except` içindedir — biri başarısız olsa diğerleri devam eder.

## Rapor İçeriği (S5 v9.0)
1. **High-Yield 20/80 Özü** — patognomonik + ayırt edici bilgiler, mekanistik numaralı liste.
2. **Kapsamlı Konu Anlatımı** — 8 alt başlık (Tanım, Etyoloji, Patogenez [3+ basamaklı mekanizma], Klinik, Radyoloji/Lab, Tedavi, Karşılaştırma Tablosu, DUS Tuzakları).
3. **5 Klasik DUS Sorusu** — 5 şıklı, doğru cevap + mekanizma + her yanlış şıkkın eliminasyonu.

## Önemli Kurallar
- **Motivasyonel laf yok:** Sadece veri ve mekanizma. ("A bozulduğu için B artar, bu da Y'yi doğurur.")
- **Belirsizlik yok:** "vb./gibi" yerine tüm elemanları açıkça yaz; "yüksek oranda" yerine kesin sayı.
- **Veri yoksa:** Supabase'de bugün yanlış yoksa kullanıcıya "Bugün kaydedilmiş yanlış bulunamadı" bildir; rapor üretme.
- **Çevre değişkenleri:** `.env.local`'da `PINECONE_API_KEY`, `MYPPDFS_HOST`, `OPENAI_API_KEY`, `VITE_SUPABASE_*` tanımlı olmalı.
