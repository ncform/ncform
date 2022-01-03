import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'ncformCommon',
      fileName: (format) => `ncformCommon.${format}.js`
    },
    rollupOptions: {
      external: [
        'axios'
      ],
      output: {
        exports: 'named',
        globals: {
          axios: 'axios'
        }
      }
    }
  }
})
