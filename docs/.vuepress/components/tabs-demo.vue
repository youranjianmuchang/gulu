<template>
    <div>
        <h2>预览</h2>
        <g-tabs selected="1">
            <g-tabs-head>
                <g-tabs-item name="1">1</g-tabs-item>
                <g-tabs-item name="2">2</g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
                <g-tabs-pane name="1">内容1</g-tabs-pane>
                <g-tabs-pane name="2">内容2</g-tabs-pane>
            </g-tabs-body>
        </g-tabs>
        <h2>代码</h2>
        <pre><code>&nbsp;{{content}}</code></pre>
    </div>
</template>

<script>
    import Tabs from '../../../src/tabs'
    import TabsItem from '../../../src/tabs-item'
    import TabsHead from '../../../src/tabs-head'
    import TabsBody from '../../../src/tabs-body'
    import TabsPane from '../../../src/tabs-pane'

    export default {
        name: "button-demo.vue",
        components: {
            'g-tabs': Tabs,
            'g-tabs-item': TabsItem,
            'g-tabs-head': TabsHead,
            'g-tabs-body': TabsBody,
            'g-tabs-pane': TabsPane,
        },
        data() {
            return {
                content: `
                    <g-tabs selected="1">
                        &nbsp;<g-tabs-head>
                            &nbsp;&nbsp;<g-tabs-item name="1">美女</g-tabs-item>
                            &nbsp;&nbsp;<g-tabs-item name="2">财经</g-tabs-item>
                        &nbsp;</g-tabs-head>
                        &nbsp;<g-tabs-body>
                            &nbsp;&nbsp;<g-tabs-pane name="1">内容1</g-tabs-pane>
                            &nbsp;&nbsp;<g-tabs-pane name="2">内容2</g-tabs-pane>
                        &nbsp;</g-tabs-body>
                    </g-tabs>
                `.replace(/\t+| +/g, ' ').replace(/&nbsp;+/g,'    ').trim()
            }
        }
    }
</script>
