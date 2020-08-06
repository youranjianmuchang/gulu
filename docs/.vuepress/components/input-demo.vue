<template>
    <div>
        <div>
            <g-input value="张三" readonly></g-input>
            <g-input value="李四" disabled></g-input>
        </div>
        <div>
            <g-input value="王" error="姓名不能少于两个字"></g-input>
        </div>
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
                `.replace(/\t+| +/g,'').trim()
            }
        }
    }
</script>
