<template>
    <div class="popover" ref="popover" @click.stop="showOrHide">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible">
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
        methods: {
            positionPopover() {
                document.body.appendChild(this.$refs.contentWrapper);
                let {top, left} = this.$refs.trigger.getBoundingClientRect();
                this.$refs.contentWrapper.style.top = top + window.scrollY + 'px';
                this.$refs.contentWrapper.style.left = left + window.scrollX + 'px';
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
        transform: translateY(-100%);
        filter: drop-shadow(0 1px 1px rgba(0, 0, 0, .5));
        background-color: #fff;
        margin-top: -10px;
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
            left: 10px;
        }

        &::before {
            border-top-color: black;
            top: calc(100%);
        }

        &::after {
            border-top-color: white;
            top: calc(100% - 1px);
        }
    }
</style>