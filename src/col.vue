<template>
    <div class="col" :class="classStr" :style="styleStr">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'GCol',
        props: {
            span: {
                type: [Number, String]
            },
            offset: {
                type: [Number, String]
            }
        },
        data() {
            return {
                gutter: 0,
            }
        },
        computed: {
            classStr() {
                let {span, offset} = this;
                return [span && `col-${span}`, offset && `offset-${offset}`]
            },
            styleStr() {
                let {gutter} = this;
                return {paddingLeft: gutter / 2 + 'px', paddingRight: gutter / 2 + 'px'};
            }
        }
    }
</script>
<style scoped lang="less">
    .col {
        width: 50%;
        min-height: 100px;
    }

    .setWidth(@count) when (@count < 25) {
        .setWidth(@count+1);
        .col-@{count} {
            width: (@count/24)*100%;
        }
    }

    .setWidth(1);

    .setOffset(@num) when (@num < 25) {
        .setOffset(@num+1);
        .offset-@{num} {
            margin-left: (@num/24)*100%;
        }
    }

    .setOffset(1);
</style>