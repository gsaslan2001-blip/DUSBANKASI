import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist', 'src_backup', 'scratch', 'exports', 'node_modules', 'supabase/functions', '.claude']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      // `_` önekli parametre/değişkenler bilinçli kullanılmayanlardır (D3 callback
      // pozisyonel imzaları: (_event, d) gibi). Standart konvansiyon.
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' },
      ],
      // React Compiler (eslint-plugin-react-hooks v7) opt-in kuralları. Proje
      // React Compiler kullanmıyor (vite'da babel-plugin yok); bu pattern'ler
      // çalışan kod — runtime hatası değil. Bilgi amaçlı `warn`.
      'react-hooks/set-state-in-effect': 'warn',
      'react-hooks/refs': 'warn',
      'react-hooks/purity': 'warn',
      // d3 selection/datum tipleri için `any` pratik gereklilik (grafik katmanı).
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
  {
    // Test mock'ları dinamik tiplidir (Supabase chain stub'ları); `any` burada meşru.
    files: ['**/*.test.{ts,tsx}', '**/__tests__/**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
])
