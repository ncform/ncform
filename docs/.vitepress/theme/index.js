import DefaultTheme from 'vitepress/theme'
import vueNcform from '@ncform/ncform'
import ncformStdComps from '@ncform/ncform-theme-elementui'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(ElementPlus)
    app.use(vueNcform, { extComponents: ncformStdComps })
  }
}
