import path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
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
  },
  plugins: [
    dts({
      outputDir: 'dist/types',
      beforeWriteFile: (filePath, content) => ({
        filePath: filePath.replace('packages/ncform-common/src/', ''),
        content
      })
    })
  ]
})
