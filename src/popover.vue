<template>
    <div class="popover" ref="popover" @click.stop="showOrHide">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible">
            <slot name="content"></slot>
        </div>
        <span ref="trigger">
            <slot></slot>
        <span>
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
                this.close();
            },
            open(){
              this.visible = true;
                this.$nextTick(() => {
                    this.positionPopover();
                    document.addEventListener('click', this.onClickDocument)
                })
            },
            close(){
                this.visible = false;
                document.removeEventListener('click', this.onClickDocument);
            },
            showOrHide(event) {
                if (this.$refs.trigger.contains(event.target)) {
                    if (this.visible === true) {
                        this.close();
                    }else{
                        this.open();
                    }
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .popover {
        display: inline-block;
        vertical-align: top;
        position: relative;
    }

    .content-wrapper {
        position: absolute;
        border: 1px solid red;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
        transform: translateY(-100%);
    }
</style>