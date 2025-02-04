import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/My-Blog/',
  title: "我的第一个个人博客",
  description: "A VitePress Site",
  themeConfig: {
    outlineTitle: "目录",
    outline: [2, 6],
    logo: "/icon.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '稀土掘金', link: '/markdown-examples' },
      { text: 'JavaScript高级学习笔记', items: [
        { text: '迭代器', link: "/JavaScript高级笔记/迭代器" },
        { text: '生成器', link: "/JavaScript高级笔记/生成器" },
        { text: 'Promise', link: "/JavaScript高级笔记/Promise" },
        { text: 'async/await', link: "/JavaScript高级笔记/async-await" },
        { text: 'Proxy', link: "/JavaScript高级笔记/Proxy" },
        { text: '对象', link: "/JavaScript高级笔记/对象" },
        { text: '混合对象类', link: "/JavaScript高级笔记/混合对象类" },
        { text: '解决回调地狱的多种方法', link: "/JavaScript高级笔记/解决回调地狱的多种方法" },
        { text: '类型', link: "/JavaScript高级笔记/类型" },
        { text: '强制类型转换', link: "/JavaScript高级笔记/强制类型转换" },
        { text: '原生函数', link: "/JavaScript高级笔记/原生函数" },
        { text: '原型', link: "/JavaScript高级笔记/原型" },
        { text: '值', link: "/JavaScript高级笔记/值" },
      ] },
    ],

    // sidebar: [
    //   {
    //     text: 'JavaScript高级学习笔记',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    sidebar: false,
    aside: 'left',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lyzhihs' }
    ],
    footer: {
      copyright: "Copyright © 2021-present CoderLi"
    },
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            }
          }
        }
      }
    }
  },


})
