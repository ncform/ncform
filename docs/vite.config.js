import path from 'path'

export default {
  resolve: {
    alias: {
      '@ncform/ncform': path.resolve(__dirname, '../packages/ncform/src/components/vue-ncform/index.js'),
      '@ncform/ncform-common': path.resolve(__dirname, '../packages/ncform-common/src/index.js'),
      '@ncform/ncform-theme-elementui': path.resolve(__dirname, '../packages/ncform-theme-elementui/src/index.js'),
    },
  },
  optimizeDeps: {
    include: ['element-plus']
  }
}
