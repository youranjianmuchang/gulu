<template>
    <div class="wrapper" :class="toastClasses">
        <div class="toast" ref="toast">
            <div class="message">
                <slot v-if="!enableHtml"></slot>
                <div v-else v-html="$slots.default[0]"></div>
            </div>
            <div v-if="!autoClose" class="line" ref="line"></div>
            <span class="close" v-if="!autoClose" @click="onClickClose">{{closeButton.text}}</span>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'GToast',
        props: {
            autoClose: {
                type: [Boolean,Number],
                default: false,
                validator(value){
                    return value === false || typeof value ==='number';
                }
            },
            closeButton: {
                type: Object,
                //在属性值是对象类型时，需要使用函数返回对象，原因和data一样
                default() {
                    return {
                        text: '关闭',
                        callback: () => {
                            this.close();
                        }
                    }
                }
            },
            enableHtml: {
                type: Boolean,
                default: false
            },
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'bottom', 'middle'].indexOf(value) >= 0
                }
            }
        },
        computed: {
            toastClasses() {
                return {
                    [`position-${this.position}`]: true
                }
            }
        },
        mounted() {
            this.execAutoClose();
            this.updateStyle();
        },
        methods: {
            execAutoClose() {
                if (this.autoClose) {
                    setTimeout(() => {
                        this.close();
                    }, (this.autoClose * 1000));
                }
            },
            updateStyle() {
                this.$nextTick(() => {
                    if(this && this.$refs && this.$refs.line){
                        this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
                    }
                })
            },
            close() {
                this.$el.remove();
                this.$emit('close');
                this.$destroy();
            },
            onClickClose() {
                this.close();
                this.closeButton && typeof this.closeButton.callback === 'function' && this.closeButton.callback();
            }
        }
    }
</script>
<style lang="less" scoped>
    @font-size: 14px;
    @toast-min-height: 40px;
    @toast-bg: rgba(0, 0, 0, 0.75);
    @keyframes slide-up { 0% {opacity: 0;transform: translateY(-100%)} 100% {opacity: 1;transform: translateY(0%)}}
    @keyframes slide-down { 0% {opacity: 0;transform: translateY(100%)} 100% {opacity: 1;transform: translateY(0%)}}
    @keyframes fade-in { 0% {opacity: 0;} 100% {opacity: 1;}}
    .wrapper{
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        z-index: 30;
        &.position-top {
            top: 0;
            .toast{
                border-top-left-radius: 0;
                border-top-right-radius: 0;
                animation: slide-up 1s;
            }
        }

        &.position-bottom {
            bottom: 0;
            .toast{
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
                animation: slide-down 1s;
            }
        }

        &.position-middle {
            top: 50%;
            transform: translate(-50%, -50%);
            .toast{
                animation: fade-in 1s;
            }
        }
    }
    .toast {
        font-size: @font-size;
        min-height: @toast-min-height;
        line-height: 1.8;
        display: flex;
        color: #fff;
        align-items: center;
        background-color: @toast-bg;
        border-radius: 4px;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, .5);
        padding: 0 16px;

        .message {
            padding: 8px 0;
        }

        .close {
            padding-left: 16px;
            flex-shrink: 0;
        }

        .line {
            background-color: #666;
            height: 100%;
            width: 1px;
            margin-left: 16px;
        }
    }
</style>