<template>
    <div>
        <h2>预览</h2>
        <g-button>默认样式</g-button>
        <g-button loading>加载中</g-button>
        <g-button icon="setting">带图标</g-button>
        <g-button icon="setting" icon-position="right">右边图标</g-button>
        <g-button disabled>禁用</g-button>
        <h2>代码</h2>
        <pre><code>&nbsp;{{content}}</code></pre>
    </div>
</template>

<script>
    import Button from '../../../src/button'
    export default {
        name: "button-demo.vue",
        components:{
            'g-button':Button
        },
        data(){
            return {
                content:`
                     <g-button>默认样式</g-button>
                    <g-button loading>加载中</g-button>
                    <g-button icon="setting">带图标</g-button>
                    <g-button icon="setting" icon-position="right">右边图标</g-button>
                    <g-button disabled>禁用</g-button>
                `.replace(/\t+| +/g,' ').trim()
            }
        }
    }
</script>
