import DefaultTheme from 'vitepress/theme'
import vueNcform from '@ncform-plus/ncform'
import ncformStdComps from '@ncform-plus/ncform-theme-elementui'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'

if (import.meta.env.PROD) {
  import('@ncform-plus/ncform/dist/style.css')
  import('@ncform-plus/ncform-theme-elementui/dist/style.css')
}

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(ElementPlus)
    if (!import.meta.env.SSR) {
      app.use(vueNcform, { extComponents: ncformStdComps })
    }
  }
}
