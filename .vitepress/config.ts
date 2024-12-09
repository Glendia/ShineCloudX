import {
  defineConfig
} from 'vitepress'
// 导入外部 JS 文件
import {
  vite,
  markdown,
  head,
  nav,
  sidebar,
  socialLinks,
} from './configs'

export default defineConfig({

      lang: 'zh-Hans',

      base: '/',

      title: '同道空',

      titleTemplate: ':title - 码道无涯',

      description: '码道无涯的博客以及资源网站',

      head,

      cleanUrls: true,

      srcExclude: ['**/README.md', '**/TODO.md'],

      srcDir: 'content',

      outDir: './.vitepress/dist',

      assetsDir: 'assets',

      cacheDir: './.vitepress/cache',

      ignoreDeadLinks: true,

      metaChunk: true,

      mpa: false,

      markdown,
      
      vite,
      
      themeConfig: {

        logo: '/logo.svg',

        siteTitle: '同道空',

        nav,

        sidebar,

        aside: true,

        outline: {

          label: "本页目录",

          level: 'deep',

        },

        socialLinks,

        //footer: footer,

        editLink: false,

        //lastUpdated: false,

        // 上次更新

        lastUpdated: {

          text: '最后更新于',

          formatOptions: {

            dateStyle: 'full',

            timeStyle: 'full',

            vhourCycle: 'h24'

          }

        },

        docFooter: {

          prev: '上一页',

          next: '下一页'

        },

        langMenuLabel: '多语言',

        returnToTopLabel: '返回顶部.',

        sidebarMenuLabel: '文章',

        darkModeSwitchLabel: '主题切换',

        lightModeSwitchTitle: '切换到浅色模式',

        darkModeSwitchTitle: '切换到深色模式',

        skipToContentLabel: '跳转到内容',

        externalLinkIcon: true,

        appearance: 'dark',

        search: {
          provider: 'local'
        },
    
        notFound: {

          title: '找不到页面',

          quote: '页面不见了，也许它去找寻新的冒险了！',

          linkLabel: '返回首页重新探索',

          linkText: '返回首页',

          code: '404'
        },
            
        }
})
