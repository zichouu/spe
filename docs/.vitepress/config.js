import bili from './svg/bili'
module.exports = {
    lang: 'zh',
    title: 'Steel Path Eidolon',
    description: '钢铁三傻,钢铁夜灵',
    lastUpdated: false,
    cleanUrls: true,
    themeConfig: {
        logo: 'logo.png',
        outline: 'deep',
        docFooter: {
            prev: '上一篇',
            next: '下一篇',
        },
        darkModeSwitchLabel: '外观',
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '返回顶部',
        outlineTitle: '本页内容',
        nav: [
            {text: '首页', link: '/'},
            {text: '开始', link: '/start/jianjie'},
            {text: '结算速度优化',link: '/d/wfhosts'},
            {text: '链接',items: [
                    {
                        text: '我的网站', items: [
                            {text: 'zichou.eu.org', link: 'https://zichou.eu.org/wftime'},
                            {text: 'docs.zichou.eu.org', link: 'https://docs.zichou.eu.org'},
                        ]
                    },
                    {
                        text: '开发', items: [
                            {text: 'Markdown 演示', link: '/md/'},
                            {text: 'VitePress 文档', link: 'https://vitepress.dev/reference/site-config'},
                            {text: 'Visual Studio Code', link: 'https://code.visualstudio.com/'},
                            {text: 'Node.js', link: 'https://nodejs.org/zh-cn/'},
                        ],
                    },
                ],
            },
        ],
        sidebar: [
            {
                text: '开始',
                items: [ 
                    {text: '简介', link: '/start/jianjie'},
                    {text: '区别', link: '/start/qubie'},
                    {text: '我适合玩钢铁夜灵吗?', link: '/start/shihe'},
                ],
            },
            {
                text: 'MOD配置',
                items: [ 
                    {text: '通用-配置', link: '/mod/tymod'},
                    {text: '关节位-配置', link: '/mod/gjmod'},
                    {text: '破盾位-配置', link: '/mod/pdmod'},
                    {text: '气球位-配置', link: '/mod/qqmod'},
                ],
            },
            {
                text: '玩法',
                items: [ 
                    {text: '如何进图?', link: '/play/jintu'},
                    {text: '小黑机制', link: '/play/xiaohei'},
                    {text: '关节位-玩法', link: '/play/gj'},
                    {text: '破盾位-玩法', link: '/play/pd'},
                    {text: '气球位-玩法', link: '/play/qq'},
                ],
            },
            {
                text: '推荐文章',
                items: [ 
                    {text: '三傻注意事项', link: '/d/warning'},
                    {text: '结算速度优化', link: '/d/wfhosts'},
                ],
            },
        ],
        editLink: {
            pattern: 'https://github.com/zichouu/spe/edit/main/docs/:path',
            text: '在 GitHub 上编辑此页面'
        },
        search: {
            provider: 'local',
            options: {
                translations: {
                    button: {
                        buttonText: '搜索文档',
                        buttonAriaLabel: '搜索文档',
                    },
                    modal: {
                        noResultsText: '无法找到相关结果',
                        resetButtonTitle: '清除查询条件',
                        displayDetails: '显示细节',
                        footer: {
                            selectText: '选择',
                            navigateText: '切换',
                            closeText: '关闭',
                        }
                    }
                }
            }
        },
        // algolia: {
        //     appId: '',
        //     apiKey: '',
        //     indexName: '',
        //     placeholder: '请输入关键词',
        //     translations: {
        //         button: {
        //             buttonText: '搜索文档',
        //             buttonAriaLabel: '搜索文档',
        //         },
        //         modal: {
        //             searchBox: {
        //                 resetButtonTitle: '清除查询条件',
        //                 resetButtonAriaLabel: '清除查询条件',
        //                 cancelButtonText: '取消',
        //                 cancelButtonAriaLabel: '取消',
        //             },
        //             startScreen: {
        //                 recentSearchesTitle: '搜索历史',
        //                 noRecentSearchesText: '没有搜索历史',
        //                 saveRecentSearchButtonTitle: '保存至搜索历史',
        //                 removeRecentSearchButtonTitle: '从搜索历史中移除',
        //                 favoriteSearchesTitle: '收藏',
        //                 removeFavoriteSearchButtonTitle: '从收藏中移除',
        //             },
        //             errorScreen: {
        //                 titleText: '无法获取结果',
        //                 helpText: '你可能需要检查你的网络连接',
        //             },
        //             footer: {
        //                 selectText: '选择',
        //                 navigateText: '切换',
        //                 closeText: '关闭',
        //                 searchByText: '搜索提供者',
        //             },
        //             noResultsScreen: {
        //                 noResultsText: '无法找到相关结果',
        //                 suggestedQueryText: '你可以尝试查询',
        //                 reportMissingResultsText: '你认为该查询应该有结果？',
        //                 reportMissingResultsLinkText: '点击反馈',
        //             },
        //         },
        //     }
        // },
        socialLinks: [
            {
                icon: {
                    svg: bili
                },
                link: 'https://space.bilibili.com/11786852' 
            }
        ],
    },
    head: [
        ['link',{rel: 'icon', href: 'logo.png'}]
    ],
    plugins: [
    ],
}