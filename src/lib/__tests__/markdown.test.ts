import { describe, it, expect } from 'vitest';
import { renderMarkdown } from '../markdown';

describe('renderMarkdown — yapı', () => {
  it('**bold** → <strong>', () => {
    expect(renderMarkdown('merhaba **dünya**')).toContain('<strong>dünya</strong>');
  });

  it('- madde → <ul><li>', () => {
    const html = renderMarkdown('- birinci\n- ikinci');
    expect(html).toContain('<ul');
    expect((html.match(/<li/g) ?? []).length).toBe(2);
    expect(html).toContain('</ul>');
  });

  it('## başlık → uppercase paragraf', () => {
    expect(renderMarkdown('## Özet')).toContain('Özet');
    expect(renderMarkdown('## Özet')).toContain('uppercase');
  });

  it('boş satır boşluk div üretir', () => {
    expect(renderMarkdown('a\n\nb')).toContain('<div class="h-2">');
  });
});

describe('renderMarkdown — güvenlik / escape (derinlemesine savunma)', () => {
  it('script etiketi çalıştırılabilir HTML olarak geçmez', () => {
    const html = renderMarkdown('<script>alert(1)</script>');
    expect(html).not.toContain('<script>');
    expect(html).toContain('&lt;script&gt;');
  });

  it('img onerror enjeksiyonu nötralize edilir', () => {
    const html = renderMarkdown('<img src=x onerror=alert(1)>');
    expect(html).not.toContain('<img');
    expect(html).toContain('&lt;img');
  });

  it('& karakteri escape edilir', () => {
    expect(renderMarkdown('Tom & Jerry')).toContain('Tom &amp; Jerry');
  });

  it('gerçek karşılaştırma metni kaybolmaz (pH < 7.4)', () => {
    const html = renderMarkdown('kan pH < 7.4 ve > 7.0');
    expect(html).toContain('pH &lt; 7.4');
    expect(html).toContain('&gt; 7.0');
  });

  it('escape sonrası bold hâlâ çalışır', () => {
    const html = renderMarkdown('**<b>** güçlü');
    expect(html).toContain('<strong>&lt;b&gt;</strong>');
  });
});
