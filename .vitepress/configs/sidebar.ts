export const sidebar =
{
'/docs/'
    : [
                {
          text:'Git知识大全',
          collapsed: true,
          items: [
            { text: 'Git是什么', link: '/docs/487568528'
},
            { text: 'Git的安装', link: '/docs/867576428'
},
            { text: '初次运行Git前的配置', link: '/docs/477586182'
}
          ]
        },
                {
text: 'Docker使用教程',
          collapsed: true,
          items: [
{
text: 'Docker是什么', link: '/docs/what-docker'
},
            {text: 'Docker的安装', link: '/docs/docker-install'
},
            {text: 'Docker-Compose安装', link: '/docs/docker-compose-install'
},
{ text: 'Docker镜像列表', link: '/docs/dockermirrorlist'}
          ]
        },
      ],

      // 当用户位于 `config` 目录时，会显示此侧边栏
'/blog/': [
{
text: '博客专属打开',
          collapsed: false,
          items: [
            { text: 'Index', link: '/config/'
},
            {text: 'Three', link: '/config/three'
},
            {text: 'Four', link: '/config/four'
}
          ]
        },
                {
text: '博客专属关闭',
          collapsed: true,
          items: [
{
text: 'Index', link: '/docs/'
},
            {text: 'One', link: '/docs/one'
},
            {text: 'Two', link: '/docs/two'
}
          ]
        }
    ],

text: 'Examples',
items: [
{
text: 'Markdown Examples', link: '/markdown-examples'
},
{
text: 'Runtime API Examples', link: '/api-examples'
}
    ] 
    
}
