<template>
    <div>
        <h2>预览</h2>
        <h3>click</h3>
        <g-popover position="top">
            <template slot="content" slot-scope="{close}">top<g-button @click="close">关闭</g-button> </template>
            <template><g-button>上方弹出</g-button></template>
        </g-popover>
        <g-popover position="bottom" trigger="click">
            <template slot="content">bottom</template>
            <template><g-button>下方弹出</g-button></template>
        </g-popover>
        <g-popover position="left" trigger="click">
            <template slot="content">left</template>
            <template><g-button>左边弹出</g-button></template>
        </g-popover>
        <g-popover position="right" trigger="click">
            <template slot="content">right</template>
            <template><g-button>右边弹出</g-button></template>
        </g-popover>
        <h4>代码</h4>
        <pre><code>&nbsp;{{content1}}</code></pre>

        <h3>hover</h3>
        <g-popover position="top" trigger="hover">
            <template slot="content">top</template>
            <template><g-button>上方弹出</g-button></template>
        </g-popover>
        <g-popover position="bottom" trigger="hover">
            <template slot="content">bottom</template>
            <template><g-button>下方弹出</g-button></template>
        </g-popover>
        <g-popover position="left" trigger="hover">
            <template slot="content">left</template>
            <template><g-button>左边弹出</g-button></template>
        </g-popover>
        <g-popover position="right" trigger="hover">
            <template slot="content">right</template>
            <template><g-button>右边弹出</g-button></template>
        </g-popover>
        <h4>代码</h4>
        <pre><code>&nbsp;{{content2}}</code></pre>
    </div>
</template>

<script>
    import Popover from '../../../src/popover'
    import Button from '../../../src/button'
    export default {
        name: "button-demo.vue",
        components:{
            'g-popover':Popover,
            'g-button':Button
        },
        data(){
            return {
                content1:`
                    <g-popover position="top">
                        <template slot="content" slot-scope="{close}">top<g-button @click="close">关闭</g-button> </template>
                        <template><g-button>上方弹出</g-button></template>
                    </g-popover>
                    <g-popover position="bottom" trigger="click">
                        <template slot="content">bottom</template>
                        <template><g-button>下方弹出</g-button></template>
                    </g-popover>
                    <g-popover position="left" trigger="click">
                        <template slot="content">left</template>
                        <template><g-button>左边弹出</g-button></template>
                    </g-popover>
                    <g-popover position="right" trigger="click">
                        <template slot="content">right</template>
                        <template><g-button>右边弹出</g-button></template>
                    </g-popover>
                `.replace(/\t+| +/g,' ').trim(),
                content2:`
                    <g-popover position="top" trigger="hover">
                        <template slot="content">top</template>
                        <template><g-button>上方弹出</g-button></template>
                    </g-popover>
                    <g-popover position="bottom" trigger="hover">
                        <template slot="content">bottom</template>
                        <template><g-button>下方弹出</g-button></template>
                    </g-popover>
                    <g-popover position="left" trigger="hover">
                        <template slot="content">left</template>
                        <template><g-button>左边弹出</g-button></template>
                    </g-popover>
                    <g-popover position="right" trigger="hover">
                        <template slot="content">right</template>
                        <template><g-button>右边弹出</g-button></template>
                    </g-popover>
                `.replace(/\t+| +/g,' ').trim()
            }
        }
    }
</script>
