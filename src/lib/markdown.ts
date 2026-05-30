/* --- MARKDOWN RENDERER (AI paneli için) --- */
/**
 * Gemini'nin döndürdüğü Markdown çıktısını güvenli HTML'e çevirir.
 * Desteklenen yapılar: **bold**, - bullet listeler, ## başlıklar, paragraflar.
 * dangerouslySetInnerHTML ile kullanılır; AI çıktısı dışında kullanılmamalı.
 *
 * GÜVENLİK: Metin içeriği yapısal HTML üretilmeden ÖNCE escape edilir. Bu hem
 * derinlemesine savunma sağlar (tüketici DOMPurify ile ikinci kez sanitize eder)
 * hem de AI yanıtındaki gerçek `<`, `>`, `&` karakterlerinin (ör. "pH < 7.4")
 * etiket sanılıp kaybolmasını engeller.
 */
const escapeHtml = (s: string): string =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function renderMarkdown(text: string): string {
  const lines = text.split('\n');
  let html = '';
  let inList = false;

  // `**bold**` → <strong>. escapeHtml'den SONRA çalışır; `*` escape edilmez.
  const processBold = (raw: string): string =>
    escapeHtml(raw).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  for (const line of lines) {
    if (line.startsWith('- ')) {
      if (!inList) { html += '<ul class="space-y-2 my-3 ml-1 list-none">'; inList = true; }
      html += `<li class="leading-relaxed flex gap-2"><span class="text-[#0a84ff] shrink-0">▸</span><span>${processBold(line.slice(2))}</span></li>`;
    } else if (/^#{1,3} /.test(line)) {
      if (inList) { html += '</ul>'; inList = false; }
      html += `<p class="font-black mt-5 mb-2 text-sm opacity-70 tracking-widest uppercase">${processBold(line.replace(/^#{1,3} /, ''))}</p>`;
    } else if (line.trim() === '') {
      if (inList) { html += '</ul>'; inList = false; }
      html += '<div class="h-2"></div>';
    } else {
      if (inList) { html += '</ul>'; inList = false; }
      html += `<p class="leading-relaxed my-1">${processBold(line)}</p>`;
    }
  }
  if (inList) html += '</ul>';
  return html;
}
