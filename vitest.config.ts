import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    testTimeout: 20000,
    isolate: false,
  },
  esbuild: {
    target: 'node20',
  },
  publicDir: false,
})
