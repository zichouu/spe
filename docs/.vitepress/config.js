
module.exports = {
    lang: 'zh',
    title: 'Steel Path Eidolon',
    description: '',
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
            {text: '结算速度优化',link: '/wfhosts/'},
            {text: '链接',items: [
                    {
                        text: '我的网站', items: [
                            {text: 'zichou.pages.dev', link: 'https://zichou.pages.dev/wftime'},
                            {text: 'zdocs.pages.dev', link: 'https://zdocs.pages.dev'},
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
                    {text: '通用-配置', link: '/mod/pmod'},
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
                    {text: '结算速度优化', link: '/wfhosts/'},
                ],
            },
        ],
        editLink: {
            // pattern: 'https://github.com/user/project/edit/main/docs/:path',
            text: '在 GitHub 上编辑此页面'
        },
        algolia: {
            appId: '',
            apiKey: '',
            indexName: '',
            placeholder: '请输入关键词',
            translations: {
                button: {
                    buttonText: '搜索文档',
                    buttonAriaLabel: '搜索文档',
                },
                modal: {
                    searchBox: {
                        resetButtonTitle: '清除查询条件',
                        resetButtonAriaLabel: '清除查询条件',
                        cancelButtonText: '取消',
                        cancelButtonAriaLabel: '取消',
                    },
                    startScreen: {
                        recentSearchesTitle: '搜索历史',
                        noRecentSearchesText: '没有搜索历史',
                        saveRecentSearchButtonTitle: '保存至搜索历史',
                        removeRecentSearchButtonTitle: '从搜索历史中移除',
                        favoriteSearchesTitle: '收藏',
                        removeFavoriteSearchButtonTitle: '从收藏中移除',
                    },
                    errorScreen: {
                        titleText: '无法获取结果',
                        helpText: '你可能需要检查你的网络连接',
                    },
                    footer: {
                        selectText: '选择',
                        navigateText: '切换',
                        closeText: '关闭',
                        searchByText: '搜索提供者',
                    },
                    noResultsScreen: {
                        noResultsText: '无法找到相关结果',
                        suggestedQueryText: '你可以尝试查询',
                        reportMissingResultsText: '你认为该查询应该有结果？',
                        reportMissingResultsLinkText: '点击反馈',
                    },
                },
            }
        },
        socialLinks: [
            {
                icon: {
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="20" height="20"  viewBox="0 0 512 512" >
                        <path fill="currentColor" d="M488.6 104.1c16.7 18.1 24.4 39.7 23.3 65.7v202.4c-.4 26.4-9.2 48.1-26.5 65.1c-17.2 17-39.1 25.9-65.5 26.7H92.02c-26.45-.8-48.21-9.8-65.28-27.2C9.682 419.4.767 396.5 0 368.2V169.8c.767-26 9.682-47.6 26.74-65.7C43.81 87.75 65.57 78.77 92.02 78h29.38L96.05 52.19c-5.75-5.73-8.63-13-8.63-21.79c0-8.8 2.88-16.06 8.63-21.797C101.8 2.868 109.1 0 117.9 0s16.1 2.868 21.9 8.603L213.1 78h88l74.5-69.397C381.7 2.868 389.2 0 398 0c8.8 0 16.1 2.868 21.9 8.603c5.7 5.737 8.6 12.997 8.6 21.797c0 8.79-2.9 16.06-8.6 21.79L394.6 78h29.3c26.4.77 48 9.75 64.7 26.1zm-38.8 69.7c-.4-9.6-3.7-17.4-10.7-23.5c-5.2-6.1-14-9.4-22.7-9.8H96.05c-9.59.4-17.45 3.7-23.58 9.8c-6.14 6.1-9.4 13.9-9.78 23.5v194.4c0 9.2 3.26 17 9.78 23.5s14.38 9.8 23.58 9.8H416.4c9.2 0 17-3.3 23.3-9.8c6.3-6.5 9.7-14.3 10.1-23.5V173.8zm-264.3 42.7c6.3 6.3 9.7 14.1 10.1 23.2V273c-.4 9.2-3.7 16.9-9.8 23.2c-6.2 6.3-14 9.5-23.6 9.5c-9.6 0-17.5-3.2-23.6-9.5c-6.1-6.3-9.4-14-9.8-23.2v-33.3c.4-9.1 3.8-16.9 10.1-23.2c6.3-6.3 13.2-9.6 23.3-10c9.2.4 17 3.7 23.3 10zm191.5 0c6.3 6.3 9.7 14.1 10.1 23.2V273c-.4 9.2-3.7 16.9-9.8 23.2c-6.1 6.3-14 9.5-23.6 9.5c-9.6 0-17.4-3.2-23.6-9.5c-7-6.3-9.4-14-9.7-23.2v-33.3c.3-9.1 3.7-16.9 10-23.2c6.3-6.3 14.1-9.6 23.3-10c9.2.4 17 3.7 23.3 10z"></path>
                        </svg>`
                },
                link: 'https://space.bilibili.com/11786852' 
            }
        ],
    },
    plugins: [
    ],
}