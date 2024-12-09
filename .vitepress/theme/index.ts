// .vitepress/theme/index.ts
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
//Theojs/lumen
import '@theojs/lumen/theme'
import { 
    Announcement,
    HomeFooter,
    HomeUnderline,
    DocVideoLink,
    DocBox,
    DocLinks,
    DocBoxCube,
    trackPageview,
    baiduAnalytics,
    DocAsideLogo
} from '@theojs/lumen'
import { Footer_Data } from '../data/FooterData'
import { Aside_Data } from '../data/AsideData'
//ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//自定义CSS
import './style.css'
import './picture.css'
import './custom.css'
import './fonts.css'


export default {
  extends: DefaultTheme,
  enhanceApp: ({ app }) => {    
    app.component('Home', HomeUnderline)
    app.component('Vid', DocVideoLink)
    app.component('Box', DocBox)
    app.component('Links', DocLinks)
    app.component('BoxCube', DocBoxCube)
  },
  Layout() { 
    return h(DefaultTheme.Layout, null, { 
      'home-hero-info-before': () => h(Announcement),
      'layout-bottom': () => h(HomeFooter, { Footer_Data }),
      'aside-ads-before': () => h(DocAsideLogo, { Aside_Data }) 

    }) 
  } 
}