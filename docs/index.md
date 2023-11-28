---
layout: home
title: '钢铁夜灵'

hero:
  name: 钢铁夜灵
  text: Steel Path Eidolon
  tagline: spe.zichou.eu.org
  image:
    src: logo.png
    alt: 图片
  actions:
    - theme: brand
      text: 开始
      link: /start/jianjie
    - theme: alt
      text: test
      link: 

features:
  - icon: 🛠
    title: 未完工
    details: 只是写了个框架, 没有实质内容
  # - icon: ⚡️
  #   title: aaa
  #   details: aaa
  # - icon: 🖖
  #   title: bbb
  #   details: bbb
  # - icon: 🛠️
  #   title: ccc
  #   details: ccc
---
<script setup>
import { VPTeamMembers } from 'vitepress/theme'
import bili from '.vitepress/svg/bili'

const members = [
  {
    avatar: 'https://cravatar.cn/avatar/5b31ea74de0da0c0f1f8849d31420091',
    name: 'zichou',
    title: '',
    links: [
      { icon: 'github', link: 'https://github.com/zichouu' },
      {
        icon: {
          svg: bili
        },
        link: 'https://space.bilibili.com/11786852'
      }
    ]
  },
]
</script>

<div style="margin-top: 16px">
  <VPTeamMembers size="small" :members="members" />
</div>
