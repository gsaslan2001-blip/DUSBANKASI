/**
 * DUS Bankası — Öğrenme Algoritması Konfigürasyonu
 * Adaptive Engine ağırlıkları buradan yönetilir.
 *
 * NOT: Uygulama tamamen istatistik bazlıdır — vade/scheduling YOKTUR. Bu ağırlıklar
 * yalnızca "Günlük Plan" zayıf-konu önceliklendirmesini ve soru havuzu seçimini besler.
 */

export type AdaptiveWeights = {
  weakness: number;
  newExploration: number;
};

export const DEFAULT_ADAPTIVE_WEIGHTS: AdaptiveWeights = {
  weakness: 0.70,
  newExploration: 0.30,
};

// AUDIT: ağırlıkların toplamı 1.0 olmalı; modül yüklendiğinde kontrol edilir
function validateWeights(weights: AdaptiveWeights): void {
  const total = weights.weakness + weights.newExploration;
  if (Math.abs(total - 1.0) > 0.001) {
    throw new Error(
      `AdaptiveWeights toplam 1.0 olmalı, mevcut: ${total.toFixed(3)} (weakness=${weights.weakness}, newExploration=${weights.newExploration})`
    );
  }
}

validateWeights(DEFAULT_ADAPTIVE_WEIGHTS);
