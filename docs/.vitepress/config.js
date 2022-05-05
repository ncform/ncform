import { defineConfig } from 'vitepress'

export default  defineConfig({
  title: 'Ncform',
  description: 'ncform, a very nice configuration generation way to develop form ( vue, json-schema, form, generator )',
  lang: 'zh-CN',
  base: '/ncform-plus/',
  themeConfig: {
		nav: [
      { text: '文档', link: '/pages/docs/index' },
      { text: '配置', link: '/pages/config/index' },
      { text: 'Playground', link: '/pages/playground/index' },
      { text: 'Github', link: 'https://github.com/F-loat/ncform-plus', target: '_blank' }
    ]
  }
})
