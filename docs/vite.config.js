import path from 'path'

const isProd = process.env.NODE_ENV === 'production'

export default {
  resolve: {
    alias: isProd ? {} : {
      '@ncform-plus/ncform': path.resolve(__dirname, '../packages/ncform/src/components/vue-ncform/index.js'),
      '@ncform-plus/ncform-common': path.resolve(__dirname, '../packages/ncform-common/src/index.ts'),
      '@ncform-plus/ncform-theme-elementui': path.resolve(__dirname, '../packages/ncform-theme-elementui/src/index.js'),
    },
  }
}
