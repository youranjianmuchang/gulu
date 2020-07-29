<template>
    <div class="col" :class="classStr" :style="styleStr">
        <slot></slot>
    </div>
</template>
<script>
    let validator = value => {
        let keys = Object.keys(value);
        let valid = true;
        keys.forEach(key => {
            if (!['span', 'offset'].includes(key)) {
                valid = false;
            }
        })
        return valid;
    }
    export default {
        name: 'GCol',
        props: {
            span: {
                type: [Number, String]
            },
            offset: {
                type: [Number, String]
            },
            phone: {type: Object, validator,},
            ipad: {type: Object, validator,},
            narrow: {type: Object, validator,},
            pc: {type: Object, validator,},
            widePc: {type: Object, validator,}
        },
        data() {
            return {
                gutter: 0,
            }
        },
        methods: {
            setClass(obj, str = '') {
                if (!obj) return [];
                let array = [];
                obj.span && array.push(`col-${str}${obj.span}`);
                obj.offset && array.push(`offset-${str}${obj.offset}`);
                return array;
            }
        },
        computed: {
            classStr() {
                let {span, offset, phone, ipad, narrow, pc, widePc} = this;
                let {setClass} = this;
                return [
                    ...(setClass({span, offset})),
                    ...(setClass(phone, 'phone-')),
                    ...(setClass(ipad, 'ipad-')),
                    ...(setClass(narrow, 'narrow-')),
                    ...(setClass(pc, 'pc-')),
                    ...(setClass(widePc, 'widePc-')),
                ]
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
    @media (max-width: 576px) {
        .setPhoneWidth(@count) when (@count < 25) {
            .setPhoneWidth(@count+1);
            .col-phone-@{count} {
                width: (@count/24)*100%;
            }
        }
        .setPhoneWidth(1);
        .setPhoneOffset(@num) when (@num < 25) {
            .setPhoneOffset(@num+1);
            .offset-phone-@{num} {
                margin-left: (@num/24)*100%;
            }
        }
        .setPhoneOffset(1);
    }

    @media (min-width: 577px) {
        .setIpadWidth(@count) when (@count < 25) {
            .setIpadWidth(@count+1);
            .col-ipad-@{count} {
                width: (@count/24)*100%;
            }
        }
        .setIpadWidth(1);
        .setIpadOffset(@num) when (@num < 25) {
            .setIpadOffset(@num+1);
            .offset-ipad-@{num} {
                margin-left: (@num/24)*100%;
            }
        }
        .setIpadOffset(1);
    }

    @media (min-width: 767px) {
        .setNarrowWidth(@count) when (@count < 25) {
            .setNarrowWidth(@count+1);
            .col-narrow-@{count} {
                width: (@count/24)*100%;
            }
        }
        .setNarrowWidth(1);
        .setNarrowOffset(@num) when (@num < 25) {
            .setNarrowOffset(@num+1);
            .offset-narrow-@{num} {
                margin-left: (@num/24)*100%;
            }
        }
        .setNarrowOffset(1);
    }

    @media (min-width: 993px) {
        .setPCWidth(@count) when (@count < 25) {
            .setPCWidth(@count+1);
            .col-pc-@{count} {
                width: (@count/24)*100%;
            }
        }
        .setPCWidth(1);
        .setPCOffset(@num) when (@num < 25) {
            .setPCOffset(@num+1);
            .offset-pc-@{num} {
                margin-left: (@num/24)*100%;
            }
        }
        .setPCOffset(1);
    }

    @media (min-width: 1201px) {
        .setWidePCWidth(@count) when (@count < 25) {
            .setWidePCWidth(@count+1);
            .col-wide-pc-@{count} {
                width: (@count/24)*100%;
            }
        }
        .setWidePCWidth(1);
        .setWidePCOffset(@num) when (@num < 25) {
            .setWidePCOffset(@num+1);
            .offset-wide-pc-@{num} {
                margin-left: (@num/24)*100%;
            }
        }
        .setWidePCOffset(1);
    }
</style>