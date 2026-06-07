import { defineConfig, configDefaults } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    // Bayat agent worktree'leri (.claude/worktrees/*) eski test+kaynak kopyaları
    // içerir; vitest gizli dizinleri varsayılan olarak taradığı için bunları da
    // toplar ve yanlış kırmızı verir. Yalnızca gerçek src/ test edilir.
    // e2e/ Playwright spec'leri kendi runner'ıyla (playwright.config.ts) çalışır;
    // vitest bunları toplamamalı (@playwright/test ile çakışır, yanlış kırmızı verir).
    exclude: [...configDefaults.exclude, '**/.claude/**', '**/e2e/**'],
  },
});
