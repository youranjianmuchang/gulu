<template>
    <div>
        <h2>预览</h2>
        <h3>第一种</h3>
        <g-layout class="layout">
            <g-header class="header">header</g-header>
            <g-content class="content">content</g-content>
            <g-footer class="footer">footer</g-footer>
        </g-layout>
        <h3>代码</h3>
        <pre><code>&nbsp;{{content1}}</code></pre>
        <h3 style="margin-top: 100px">第二种</h3>
        <g-layout>
            <g-header class="header">header</g-header>
            <g-layout>
                <g-sider class="sider">sider</g-sider>
                <g-content class="content">content</g-content>
            </g-layout>
            <g-footer class="footer">footer</g-footer>
        </g-layout>
        <h3>代码</h3>
        <pre><code>&nbsp;{{content2}}</code></pre>
        <h3 style="margin-top: 100px">第三种</h3>
        <g-layout>
            <g-sider class="sider">sider</g-sider>
            <g-layout>
                <g-header class="header">header</g-header>
                <g-content class="content">content</g-content>
                <g-footer class="footer">footer</g-footer>
            </g-layout>
        </g-layout>
        <h3>代码</h3>
        <pre><code>&nbsp;{{content3}}</code></pre>
    </div>
</template>

<script>
    import Sider from '../../../src/sider'
    import Layout from '../../../src/layout'
    import Content from "../../../src/content";
    import Footer from "../../../src/footer";
    import Header from "../../../src/header";
    export default {
        name: "button-demo.vue",
        components:{
            'g-layout':Layout,
            'g-footer': Footer,
            'g-content': Content,
            'g-sider': Sider,
            'g-header': Header
        },
        data(){
            return {
                content1:`
                    <g-layout>
                        &nbsp;<g-header class="header">header</g-header>
                        &nbsp;<g-content class="content">content</g-content>
                        &nbsp;<g-footer class="footer">footer</g-footer>
                    </g-layout>
                `.replace(/\t+| +/g,' ').replace(/&nbsp;+/g,'    ').trim(),
                content2:`
                    <g-layout>
                        &nbsp;<g-header class="header">header</g-header>
                        &nbsp;<g-layout>
                            &nbsp;&nbsp;<g-sider class="sider">sider</g-sider>
                            &nbsp;&nbsp;<g-content class="content">content</g-content>
                        &nbsp;</g-layout>
                        &nbsp;<g-footer class="footer">footer</g-footer>
                    </g-layout>
                `.replace(/\t+| +/g,' ').replace(/&nbsp;+/g,'    ').trim(),
                content3:`
                    <g-layout>
                        &nbsp;<g-sider class="sider">sider</g-sider>
                        &nbsp;<g-layout>
                            &nbsp;<g-header class="header">header</g-header>
                            &nbsp;<g-content class="content">content</g-content>
                            &nbsp;<g-footer class="footer">footer</g-footer>
                        &nbsp;</g-layout>
                    </g-layout>
                `.replace(/\t+| +/g,' ').replace(/&nbsp;+/g,'    ').trim(),
            }
        }
    }
</script>
<style scoped>
    .layout{
        color: #fff;
    }
    .header{
        background-color: red;
        height: 50px;
    }
    .content{
        background-color: yellow;
        height: 50px;
    }
    .footer{
        background-color: green;
        height: 50px;
    }
    .sider{
        background-color: grey;
        width: 100px;
    }
</style>