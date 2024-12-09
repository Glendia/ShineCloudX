---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'
const members = [
    {
    avatar: '/person9.webp',
    name: 'Lily',
    title: 'Front-end',
    org: 'Google',
    orgLink: 'https://open.google.com',
    sponsor: '/',
    actionText: '请我喝一杯咖啡吧',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' },
      { icon: 'discord', link: 'https://twitter.com/youyuxi' }
    ]
  },
    {
    avatar: '/person10.webp',
    name: 'Evan',
    title: 'back-end',
    org: 'Microsoft',
    orgLink: 'https://open.Microsoft.com',
    sponsor: '/',
    actionText: '请我喝一杯咖啡吧',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' },
      { icon: 'discord', link: 'https://twitter.com/youyuxi' }
    ]
  },
]

</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
     我们的团队
    </template>
    <template #lead>
      这里有开发者的所有信息和社交链接以及打赏方式，我们踊跃欢迎您的加入！
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="members" />
</VPTeamPage>