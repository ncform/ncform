import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/vue-ncform/index.js'),
      name: 'vueNcform',
      fileName: (format) => `vueNcform.${format}.js`
    },
    rollupOptions: {
      external: [
        'vue',
        '@ncform-plus/ncform-common',
        'vue-scrollto'
      ],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
          '@ncform-plus/ncform-common': 'ncformCommon',
          'vue-scrollto': 'VueScrollTo'
        }
      }
    }
  }
})
