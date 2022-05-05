import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'ncformStdComps',
      fileName: (format) => `ncformStdComps.${format}.js`
    },
    rollupOptions: {
      external: [
        'vue',
        '@ncform-plus/ncform-common',
        'sortablejs'
      ],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
          '@ncform-plus/ncform-common': 'ncformCommon',
          sortablejs: 'Sortable'
        }
      }
    }
  }
})
