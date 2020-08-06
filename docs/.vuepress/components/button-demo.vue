<template>
    <div>
        <h2>预览</h2>
        <g-button :loading="loading1" @click="loading1 = !loading1">默认样式</g-button>
        <g-button :loading="loading2" @click="loading2 = !loading2">加载中</g-button>
        <g-button :loading="loading3" @click="loading3 = !loading3" icon="setting">带图标</g-button>
        <g-button :loading="loading4" @click="loading4 = !loading4" icon="setting" icon-position="right">右边图标</g-button>
        <g-button disabled>禁用</g-button>
        <div style="margin-top: 10px">
            <g-button-group>
                <g-button icon="left">
                    上一页
                </g-button>
                <g-button>
                    更多
                </g-button>
                <g-button icon="right" icon-position="right">
                    下一页
                </g-button>
            </g-button-group>
        </div>
        <h2>代码</h2>
        <pre><code>&nbsp;{{content}}</code></pre>
    </div>
</template>

<script>
    import Button from '../../../src/button'
    import ButtonGroup from '../../../src/button-group'

    export default {
        name: "button-demo.vue",
        components: {
            'g-button': Button,
            'g-button-group': ButtonGroup
        },
        data() {
            return {
                content: `
                    <g-button>默认样式</g-button>

                    <g-button loading>加载中</g-button>

                    <g-button icon="setting">带图标</g-button>

                    <g-button icon="setting" icon-position="right">右边图标</g-button>

                    <g-button disabled>禁用</g-button>

                    <g-button-group>
                     &nbsp;<g-button icon="left">上一页</g-button>
                     &nbsp;<g-button>更多</g-button>
                     &nbsp;<g-button icon="right" icon-position="right">下一页</g-button>
                    </g-button-group>
                `.replace(/\t+| +/g, ' ').replace(/&nbsp;+/g,'    ').trim(),
                loading1: false,
                loading2: true,
                loading3: false,
                loading4: false,
                loading5: false,
            }
        }
    }
</script>
