<template>
    <div class="popover" ref="popover">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible"
             :class="{[`position-${position}`]:true}">
            <slot name="content"></slot>
        </div>
        <span ref="trigger" style="display: inline-block">
            <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: "GPopover",
        data() {
            return {
                visible: false
            }
        },
        mounted() {
            let {popover} =  this.$refs;
            if(this.trigger === 'click'){
               popover.addEventListener('click',this.showOrHide);
            }else{
                popover.addEventListener('mouseenter',this.open);
                popover.addEventListener('mouseleave',this.close);
            }
        },
        destroyed(){
            let {popover} =  this.$refs;
            if(this.trigger === 'click'){
                popover.removeEventListener('click',this.showOrHide);
            }else{
                popover.removeEventListener('mouseenter',this.open);
                popover.removeEventListener('mouseleave',this.close);
            }
        },
        props: {
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0;
                }
            },
            trigger:{
               type:String,
               default:'click',
               validator(value){
                   return ['click','hover'].indexOf(value) >=0;
               }
            }
        },
        methods: {
            positionPopover() {
                let {contentWrapper, trigger} = this.$refs;
                document.body.appendChild(contentWrapper);
                let {top, left, height, width} = trigger.getBoundingClientRect();
                let {height: height2} = contentWrapper.getBoundingClientRect();
                let positions = {
                    top: {
                        left: left + window.scrollX,
                        top: top + window.scrollY
                    },
                    bottom: {
                        left: left + window.scrollX,
                        top: top + height + window.scrollY
                    },
                    left: {
                        left: left + window.scrollX,
                        top: top + window.scrollY + (height - height2) / 2
                    },
                    right: {
                        left: left + window.scrollX + width,
                        top: top + window.scrollY + (height - height2) / 2
                    }
                }
                contentWrapper.style.top = positions[this.position].top + 'px';
                contentWrapper.style.left = positions[this.position].left + 'px';

            },
            onClickDocument(e) {
                if (this.$refs.popover &&
                    (this.$refs.popover.contains(e.target) || this.$refs.popover === e.target)) {
                    return
                }
                if (this.$refs.contentWrapper &&
                    (this.$refs.contentWrapper.contains(e.target) || this.$refs.contentWrapper === e.target)) {
                    return
                }
                this.close();
            },
            open() {
                this.visible = true;
                this.$nextTick(() => {
                    this.positionPopover();
                    document.addEventListener('click', this.onClickDocument)
                })
            },
            close() {
                this.visible = false;
                document.removeEventListener('click', this.onClickDocument);
            },
            showOrHide(event) {
                if (this.$refs.trigger.contains(event.target)) {
                    if (this.visible === true) {
                        this.close();
                    } else {
                        this.open();
                    }
                }
            }
        }
    }
</script>

<style scoped lang="less">
    @border-color: #333;
    @border-radius: 4px;
    .popover {
        display: inline-block;
        vertical-align: top;
        position: relative;
    }

    .content-wrapper {
        position: absolute;
        border: 1px solid @border-color;
        border-radius: @border-radius;
        filter: drop-shadow(0 1px 1px rgba(0, 0, 0, .5));
        background-color: #fff;
        padding: .5em 1em;
        max-width: 20em;
        word-break: break-all;

        &::before, &::after {
            content: '';
            display: block;
            border: 10px solid transparent;
            width: 0;
            height: 0;
            position: absolute;
        }

        &.position-top {
            transform: translateY(-100%);
            margin-top: -10px;

            &::before, &::after {
                left: 10px;
            }

            &::before {
                border-top-color: black;
                border-bottom: 0;
                top: 100%;
            }

            &::after {
                border-top-color: white;
                border-bottom: 0;
                top: calc(100% - 1px);
            }
        }

        &.position-bottom {
            margin-top: 10px;

            &::before, &::after {
                left: 10px;
            }

            &::before {
                border-bottom-color: black;
                border-top: 0;
                bottom: 100%;
            }

            &::after {
                border-bottom-color: white;
                border-top: 0;
                bottom: calc(100% - 1px);
            }
        }

        &.position-left {
            transform: translateX(-100%);
            margin-left: -10px;

            &::before, &::after {
                transform: translateY(-50%);
                top: 50%;
            }

            &::before {
                border-left-color: black;
                border-right: 0;
                left: 100%;
            }

            &::after {
                border-left-color: white;
                border-right: 0;
                left: calc(100% - 1px);
            }
        }

        &.position-right {
            margin-left: 10px;

            &::before, &::after {
                transform: translateY(-50%);
                top: 50%;
            }

            &::before {
                border-right-color: black;
                border-left: 0;
                right: 100%;
            }

            &::after {
                border-right-color: white;
                border-left: 0;
                right: calc(100% - 1px);
            }
        }
    }
</style>