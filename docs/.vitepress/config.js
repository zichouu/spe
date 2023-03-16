
module.exports = {
    lang: 'zh',
    title: 'Steel Path Eidolon',
    description: '',
    lastUpdated: false,
    cleanUrls: true,
    themeConfig: {
        logo: 'logo.png',
        nav: [
            {
                text: '首页',
                link: '/',
            },
            {
                text: '开始',
                link: '/start/jianjie',
            },
            {
                text: '结算速度优化',
                link: '/wfhosts/',
            },
            {
                text: '链接',
                items: [
                    {
                        text: '我的网站',
                        items: [
                            {
                                text: 'zichou.pages.dev',
                                link: 'https://zichou.pages.dev',
                            },
                        ]
                    },
                    {
                        text: '开发',
                        items: [
                            {
                                text: 'Markdown 演示',
                                link: '/md/'
                            },
                            {
                                text: 'VitePress 文档',
                                link: 'https://vitepress.vuejs.org/'
                            },
                            {
                                text: 'Visual Studio Code',
                                link: 'https://code.visualstudio.com/'
                            },
                            {
                                text: 'Node.js',
                                link: 'https://nodejs.org/zh-cn/'
                            },
                        ],
                    },
                ],
            },
        ],
        sidebar: [
            {
                text: '开始',
                items: [ 
                    {
                        text: '简介',
                        link: '/start/jianjie'
                    },
                    {
                        text: '区别',
                        link: '/start/qubie'
                    },
                    {
                        text: '我适合玩钢铁夜灵吗?',
                        link: '/start/shihe'
                    },
                ],
            },
            {
                text: 'MOD配置',
                items: [ 
                    {
                        text: '通用-配置',
                        link: '/mod/pmod'
                    },
                    {
                        text: '关节位-配置',
                        link: '/mod/gjmod'
                    },
                    {
                        text: '破盾位-配置',
                        link: '/mod/pdmod'
                    },
                    {
                        text: '气球位-配置',
                        link: '/mod/qqmod'
                    },
                ],
            },
            {
                text: '玩法',
                items: [ 
                    {
                        text: '如何进图?',
                        link: '/play/jintu'
                    },
                    {
                        text: '小黑机制',
                        link: '/play/xiaohei'
                    },
                    {
                        text: '关节位-玩法',
                        link: '/play/gj'
                    },
                    {
                        text: '破盾位-玩法',
                        link: '/play/pd'
                    },
                    {
                        text: '气球位-玩法',
                        link: '/play/qq'
                    },
                ],
            },
            {
                text: '推荐文章',
                items: [ 
                    {
                        text: '结算速度优化',
                        link: '/wfhosts/'
                    },
                ],
            },
        ]
        // editLink: {
        //     pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
        //     text: 'Edit this page on GitHub'
        // },
        // socialLinks: [
        // { icon: 'web', link: 'https://github.com/vuejs/vitepress' }
        // ],
    },
    plugins: [
    ],
}