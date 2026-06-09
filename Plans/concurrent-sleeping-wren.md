# enhance-prompt Skill — DUSBANKASI Entegrasyon Planı

## Context

Mevcut bir `enhance-prompt` skill'i var: `C:\Users\FURKAN\Desktop\Projeler\DUSMERKEZİ\skills\antigravity-awesome-skills-main\enhance-prompt\SKILL.md` — ancak bu **Stitch UI prompt iyileştirme** için yazılmış. YAML frontmatter + 4 adımlı enhancement pipeline + örnekler içeriyor.

**Hedef:** Bu skill'in DUSBANKASI versiyonunu oluştur. "UI prompt enhancement" yerine "AI system prompt cerrahi müdahalesi" yapacak. `api/_lib/prompt.ts`'teki `SYSTEM_PROMPT` ve `buildUserPrompt()` hedef alınacak.

**Temel felsefe:** Yapay zekaya "ne söyleyeceğini" değil, bir profesör gibi "nasıl söyleyeceğini" öğretmek. Tıbbi Türkçe terminoloji keskinliği, Markdown format riayeti, pedagojik üslup standardizasyonu.

## Yapılacaklar (3 Adım)

### Adım 1: `api/_lib/prompt.ts` — Böl ve Yönet

108 satırlık tek `SYSTEM_PROMPT` string'ini 6 bölüme ayır:

```
PROMPT_SECTIONS = {
  ROL,          // "Sen kıdemli akademisyensin..." — kimlik
  BAGLAM,       // Pinecone RAG bağlam açıklaması
  SORU_TIPI,    // İçsel pozitif/negatif + tip tespiti
  GOREV,        // 7 aşamalı çıktı bölümleri (Doğru Cevap → DUS Spot)
  KISITLAMALAR, // 10 kural (dil, format, uzunluk, yasaklar)
  FORMAT,       // Markdown şablonu
}

export function assembleSystemPrompt(overrides?) → string
export const SYSTEM_PROMPT = assembleSystemPrompt() // geriye uyumlu
```

`buildUserPrompt()` aynen korunur.

### Adım 2: `.agents/skills/enhance-prompt/SKILL.md` — DUS Versiyonu

Orijinal skill'in yapısı korunur (YAML frontmatter + pipeline), içerik DUS'a uyarlanır:

- **Ad:** `enhance-prompt`
- **Açıklama:** `prompt.ts` içindeki system prompt bölümlerine cerrahi müdahale. Terminoloji, format ve pedagojik üslup standardizasyonu.
- **3 Müdahale Modu:**
  1. **Terminoloji Standardizasyonu** — Tıbbi Türkçe + Latin terminoloji tutarlılığı
  2. **Format Rejimi** — 7 bölümlü Markdown çıktı formatının kusursuzluğu
  3. **Pedagojik Üslup** — Profesör tonu, mekanizma zinciri, "motivasyonel laf yasağı"
- **İş Akışı:** Hedef bölümü tespit et → `prompt.ts`'deki ilgili section'ı oku → değiştir → `assembleSystemPrompt()` ile birleştir → doğrula
- **`allowed-tools`:** Read, Write, Edit
- **`risk:`** medium (canlı API prompt'unu değiştirir)

### Adım 3: `api/_lib/prompt-validate.ts` — Validasyon

```ts
export function validateSections(...): ValidationResult[]
// Her bölüm için: emoji-başlık formatı, zorunlu alan varlığı, TR karakter tutarlılığı
export function validateOutputFormat(text: string): FormatCompliance
// AI çıktısının prompt formatına uygunluğunu denetler
```

## Etkilenen Dosyalar

| Dosya | İşlem |
|---|---|
| `api/_lib/prompt.ts` | Refaktör (monolitik → modüler) |
| `api/_lib/prompt-validate.ts` | **Yeni** |
| `.agents/skills/enhance-prompt/SKILL.md` | **Yeni** (DUS uyarlaması) |
| `api/explain.ts` | Değişiklik yok (geriye uyumlu) |

## Doğrulama

1. `npx tsc --noEmit` — hatasız
2. `npx vitest run` — mevcut testler kırılmamalı
3. `SYSTEM_PROMPT` string'i refaktör öncesiyle birebir aynı (diff kontrolü)
4. `assembleSystemPrompt({ ROL: 'test' })` override'ı doğru çalışıyor
