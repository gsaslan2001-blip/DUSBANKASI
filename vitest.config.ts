import { defineConfig, configDefaults } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    // Bayat agent worktree'leri (.claude/worktrees/*) eski test+kaynak kopyaları
    // içerir; vitest gizli dizinleri varsayılan olarak taradığı için bunları da
    // toplar ve yanlış kırmızı verir. Yalnızca gerçek src/ test edilir.
    exclude: [...configDefaults.exclude, '**/.claude/**'],
  },
});
