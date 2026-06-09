# Karar Verici Motor Güçlendirme Planı

## Context

Ölüm Maçı raporu incelendi. 43 şüpheli çiftten sadece 7'si elenmiş, 36'sı `keep_both`. Karar verici motor (deepseek-v4-pro) pasif — `stem_jaccard` düşük diye gerçek kopyaları elenmiyor.

**Kritik örnekler (elenmesi gereken ama keep_both alan):**
- `#2`: "Patolojik Q dalgası [...] gösterir" vs "MI'ın en kalıcı EKG işareti [...]" — aynı gerçek, ters yönelim, cevap=soru çakışması var
- `#3`: "Kapillerden dışarı sıvı hareketini sağlayan temel kuvvet [...]" vs "[...] sıvıyı damar dışına iten ana filtrasyon gücüdür" — aynı bilgi, farklı kelimeler

**Kök neden:** Sistem prompt'unda bu örnek birebir olmasına rağmen LLM tutarsız. Kod seviyesinde `cross_citation` tespiti var ama sadece uyarı olarak prompt'a ekleniyor, kararı etkilemiyor.

## Değişiklikler

### 1. `funnel.py` — `guard_keep_both` öncesi yeni sert kapı: `cross_citation_guard`

**Ne:** `cross_citation=True` VE `answer_jaccard >= 0.50` olan çiftleri LLM'e göndermeden `keep_1`/`keep_2` olarak eleyen yeni bir guard.

**Neden:** Bir kartın cevabı diğerinin sorusunda geçiyorsa VE cevaplar da yüksek benzerlik gösteriyorsa, bu kesin kopyadır. LLM'e sormaya gerek yok.

**Nasıl:** `_compute_pair_metrics` sonucunda `cross_citation=True && answer_jaccard >= 0.50` ise guard tetiklenir. İlerleme-koruma ile hangi kartın kalacağına karar verilir.

### 2. `funnel.py` — Cevap-metin yumuşak eşleştirme (Türkçe aglütinasyon)

**Ne:** `_answer_text_similarity()` — cevapların "aynı kavram" olup olmadığını token set kesişimi ÖTESİNDE kontrol eden yardımcı.

**Neden:** "kapiller hidrostatik basınçtır" vs "kapiller hidrostatik basınç" — `answer_jaccard` 0.0 çıkıyor çünkü "basınçtır" ≠ "basınç". Oysa aynı cevap.

**Nasıl:**
- Cevap metinlerinden ekleri temizle (basit Türkçe suffix stripping: -tır, -dir, -dır, -dur, -tür, -dIr vb. kalıplar)
- `answer_jaccard` hesaplaması bu normalize edilmiş metin üzerinden yapılır
- Eşik: normalize edilmiş cevap token Jaccard ≥ 0.60 → yüksek cevap benzerliği

### 3. `funnel.py` — `_compute_pair_metrics`'e `answer_text_similarity` ekle

**Ne:** Mevcut `answer_jaccard`'a ek olarak `answer_text_sim` (boolean) metriği ekle. Cevap metinleri normalize edildikten sonra yüksek örtüşme varsa `True`.

### 4. `funnel.py` — `guard_keep_both`'a `answer_match_guard` ekle

**Ne:** Cevaplar aynı kavram (`answer_text_sim=True`) VE soru kökleri farklı ama aynı bilgiyi hedefliyorsa (cross_citation veya sim >= 0.82), çifti LLM'e göndermeden ele.

**Neden:** `#3` gibi durumlar: "kapillerden dışarı sıvı hareketini sağlayan temel kuvvet" ve "sıvıyı damar dışına iten ana filtrasyon gücüdür" — farklı kelimeler ama aynı cevap (kapiller hidrostatik basınç). Bu kartların cevapları aynıysa, farklı soru kökü aynı bilgiyi test ediyordur.

### 5. Sistem prompt güncellemesi

**Ne:** Prompt'a daha agresif eleme talimatı ekle: "Kartların cevapları aynı kavramı işaret ediyorsa, soru kökü farklı olsa bile KOPYADIR. stem_jaccard düşüklüğü seni asla keep_both'a yönlendirmesin."

## Etkilenen Dosyalar

| Dosya | Değişiklik |
|---|---|
| `funnel.py` | Yeni guard fonksiyonları, `_compute_pair_metrics` güncellemesi, `guard_keep_both` güncellemesi, sistem prompt güncellemesi |

## Doğrulama

1. Mevcut rapor dosyasındaki `#2` ve `#3` numaralı çiftleri al, yeni guard'lardan geçir
2. `cross_citation_guard`'ın `#2` için tetiklendiğini doğrula
3. `answer_match_guard`'ın `#3` için tetiklendiğini doğrula
4. `_selftest.py` çalıştırarak mevcut testlerin kırılmadığını kontrol et
5. Kuru çalıştırma (dry-run) ile aynı Fizyoloji-Kardiyovasküler destesinde kaç yeni eleme tespit edildiğini karşılaştır
