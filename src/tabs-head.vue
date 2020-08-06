<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'GTabsHeader',
        inject: ['eventBus'],
        mounted() {
            this.eventBus.$on('update:selected', (name, vm) => {
                let {left: headerLst} = this.$el.getBoundingClientRect();
                let {width, left} = vm.$el.getBoundingClientRect();
                this.$refs.line.style.width = `${width}px`;
                this.$refs.line.style.left = `${left - headerLst}px`;
            })
        }
    }
</script>
<style lang="less" scoped>
    @tab-height: 40px;
    @yellow: #ff9400;
    @border-color: #ddd;
    .tabs-head {
        display: flex;
        height: @tab-height;
        justify-content: flex-start;
        position: relative;
        align-items: center;
        border-bottom: 1px solid @border-color;

        > .line {
            position: absolute;
            bottom: 0;
            border-bottom: 1px solid @yellow;
            transition: all 250ms;
        }

        .actions-wrapper {
            margin-left: auto;
        }
    }
</style>