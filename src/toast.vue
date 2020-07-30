<template>
    <div class="toast"><slot></slot></div>
</template>
<script>
    export default {
        name:'GToast'
    }
</script>
<style lang="less" scoped>
    @font-size:14px;
    @toast-height:40px;
    @toast-bg:rgba(0,0,0,0.75);
    .toast{
        font-style: @font-size;height: @toast-height;line-height: 1.8;position: fixed;top: 0;left: 50%;
        transform: translateX(-50%);display: flex;color: #fff;align-items:center;background-color: @toast-bg;
        border-radius: 4px;box-shadow: 0 0 3px 0 rgba(0,0,0,.5);padding: 0 16px;
    }
</style>