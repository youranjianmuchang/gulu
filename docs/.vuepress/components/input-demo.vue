<template>
    <div>
        <h2>预览</h2>
        <div>
            <g-input value="张三" readonly></g-input>
            <g-input value="李四" disabled></g-input>
        </div>
        <div>
            <g-input value="王" error="姓名不能少于两个字"></g-input>
        </div>
        <h2>代码</h2>
        <pre><code>&nbsp;{{content}}</code></pre>
    </div>
</template>

<script>
    import Input from '../../../src/input'
    export default {
        name: "button-demo.vue",
        components:{
            'g-input':Input
        },
        data(){
            return {
                content:`
                    <g-input value="张三" readonly></g-input>

                    <g-input value="李四" disabled></g-input>

                    <g-input value="王" error="姓名不能少于两个字"></g-input>
                `.replace(/\t+| +/g,' ').trim()
            }
        }
    }
</script>
