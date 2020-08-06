<template>
    <div>
        <h2>预览</h2>
        <h3>3秒后自动消失</h3>
        <g-button @click="showAutoCloseToast('top')">top</g-button>
        <g-button @click="showAutoCloseToast('middle')">middle</g-button>
        <g-button @click="showAutoCloseToast('bottom')">button</g-button>
        <h2>代码</h2>
        <h3>HTML</h3>
        <pre><code>&nbsp;{{content1}}</code></pre>
        <h3>JS</h3>
        <pre><code>&nbsp;{{jsStr1}}</code></pre>

        <h3>点击按钮关闭</h3>
        <g-button @click="showToast('top')">top</g-button>
        <g-button @click="showToast('middle')">middle</g-button>
        <g-button @click="showToast('bottom')">button</g-button>
        <h2>代码</h2>
        <h3>JS</h3>
        <pre><code>&nbsp;{{jsStr2}}</code></pre>
    </div>
</template>

<script>
    import Toast from "../../../src/toast";
    import Button from '../../../src/button'
    import Vue from 'vue';

    export default {
        name: "button-demo.vue",
        components:{
          'g-button':Button
        },
        mounted() {
            Vue.prototype.$toast = function (message, toastOptions) {
                if (this.currentToast) {
                    this.currentToast.close();
                }
                this.currentToast = this.createToast(
                    {
                        Vue,
                        message,
                        propsData: toastOptions,
                        onClose: () => {
                            this.currentToast = null;
                        }
                    }
                )
            }
        },
        methods:{
            showAutoCloseToast(position) {
                this.$toast(`3秒后自动消失`, {
                    position,
                    autoClose:3
                })
            },
            showToast(position) {
                this.$toast(`你知道我在等你吗`, {
                    closeButton: {
                        text: '知道了',
                        callback() {
                            console.log('用户知道了');
                        }
                    },
                    position
                })
            },
            createToast({Vue, message, propsData, onClose}) {
                let Constructor = Vue.extend(Toast);
                let toast = new Constructor({propsData});
                toast.$slots.default = [message];
                toast.$on('close', onClose);
                toast.$mount();
                document.body.appendChild(toast.$el);
                return toast;
            }
        },
        data(){
            return {
                currentToast:null,
                content1:`
                    <button @click="showToast('top')">top</button>

                    <button @click="showToast('middle')">middle</button>

                    <button @click="showToast('bottom')">button</button>
                `.replace(/\t+| +/g,' ').trim(),
                jsStr1:`
                    showToast(position) {
                        &nbsp;this.$toast(\`3秒后自动消失\`, {
                            &nbsp;&nbsp;position,
                            &nbsp;&nbsp;autoClose:3
                        &nbsp;})
                    }
                `.replace(/\t+| +/g,' ').replace(/&nbsp;+/g,'    ').trim(),
                jsStr2:`
                    showToast(position) {
                        &nbsp;this.$toast(\`你知道我在等你吗\`, {
                            &nbsp;&nbsp;closeButton: {
                                &nbsp;&nbsp;&nbsp;text: '知道了',
                                &nbsp;&nbsp;&nbsp;callback() {
                                    &nbsp;&nbsp;&nbsp;&nbsp;console.log('用户知道了');
                                &nbsp;&nbsp;&nbsp;}
                            &nbsp;&nbsp;},
                            &nbsp;&nbsp;position
                        &nbsp;})
                    }
                `.replace(/\t+| +/g,' ').replace(/&nbsp;+/g,'    ').trim(),
            }
        }
    }
</script>
