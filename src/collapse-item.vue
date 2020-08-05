<template>
    <div class="collapseItem">
        <div class="title" @click="toggle">{{title}}</div>
        <div class="content" v-if="open">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'GCollapseItem',
        inject: ['eventBus'],
        props: {
            title: {
                type: String,
                required: true
            },
            name:{
                type:String,
                required:true
            }
        },
        mounted() {
            this.eventBus && this.eventBus.$on('update:selected', vm => {
                if (this.name !== vm) {
                    this.close();
                }else{
                    this.show();
                }
            });
        },
        data() {
            return {
                open: false
            }
        },
        methods: {
            toggle() {
                if (this.open) {
                    this.open = false;
                } else {
                    this.eventBus && this.eventBus.$emit('update:selected', this.name);
                }
            },
            show() {
                this.open = true;
            },
            close() {
                this.open = false;
            }
        }
    }
</script>
<style scoped lang="less">
    @grey: #ddd;
    @border-radius: 4px;
    .collapseItem {
        > .title {
            border: 1px solid @grey;
            margin: -1px -1px 0 -1px;
            min-height: 32px;
            display: flex;
            align-items: center;
            padding: 0 8px;
        }

        &:first-child {
            > .title {
                border-top-left-radius: @border-radius;
                border-top-right-radius: @border-radius;
            }
        }

        &:last-child {
            > .title {
                border-bottom-left-radius: @border-radius;
                border-bottom-right-radius: @border-radius;
            }
        }

        .content {
            padding: 8px;
        }
    }
</style>