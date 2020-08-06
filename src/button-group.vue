<template>
    <div class="g-button-group">
        <slot/>
    </div>
</template>
<script>
    export default {
        name:'GButtonGroup',
        mounted() {
            for(let node of this.$el.children){
                let name = node.nodeName.toLowerCase();
                if(name !=='button'){
                    console.warn(`g-button-group的子元素应该是g-button，你使用的是${name}`);
                }
            }
        }
    }
</script>
<style lang="less">
    @border-radius:4px;
    .g-button-group{
        display: inline-flex;
        vertical-align: middle;
        button{
            border-radius: 0;
            margin-left: -1px;
            &:first-of-type{
                border-radius: @border-radius 0 0 @border-radius;
            }
            &:last-of-type{
                border-radius: 0 @border-radius @border-radius 0;
            }
            &:hover{
                position: relative;
                z-index: 1;
            }
        }
    }
</style>