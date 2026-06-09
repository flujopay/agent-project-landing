import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: 'tests/e2e',
  timeout: 30_000,
  reporter: 'line',
  use: {
    baseURL: 'https://opera.somossena.com',
    headless: true,
  },
})
