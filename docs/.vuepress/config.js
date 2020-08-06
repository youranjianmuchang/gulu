module.exports = {
    base:'/gulu/',
    title: '轱辘UI',
    description: '一个UI框架',
    themeConfig: {
        sidebar: [
            {
                title: '入门',
                children: [
                    '/install/',
                    '/get-started/'
                ]
            },
            {
                title: '组件',
                children: [
                    '/components/button',
                    '/components/input',
                    '/components/tabs',
                    '/components/popover',
                    '/components/toast',
                    '/components/grid',
                    '/components/layout',
                    '/components/collapse'
                ]
            },
            // ['/page-b', 'Explicit link text']
        ]
    }
}