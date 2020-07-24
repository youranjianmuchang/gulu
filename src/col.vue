<template>
    <div class="col" :class="[`col-${span}`]"><slot></slot></div>
</template>
<script>
    export default {
        name:'GCol',
        props:{
            span:{
                type:[Number,String]
            }
        }
    }
</script>
<style scoped  lang="less">
    .col{
        width: 50%;
        border: 1px solid red;
        background-color: #666666;
        min-height: 100px;
    }
    .cont(@count) when (@count < 25){
        .cont(@count+1);
        .col-@{count}{
            width: (@count/24)*100%;
        }
    }
    .cont(1);
</style>