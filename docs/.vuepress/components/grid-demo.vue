<template>
    <div>
        <h2>预览</h2>
        <h3>24格网格</h3>
        <g-row class="demoRow">
            <g-col span="8"><div class="content">8</div></g-col>
            <g-col span="8"><div class="content">8</div></g-col>
            <g-col span="8"><div class="content">8</div></g-col>
        </g-row>
        <g-row class="demoRow">
            <g-col span="6"><div class="content">6</div></g-col>
            <g-col span="6"><div class="content">6</div></g-col>
            <g-col span="6"><div class="content">6</div></g-col>
            <g-col span="6"><div class="content">6</div></g-col>
        </g-row>
        <g-row class="demoRow">
            <g-col span="4"><div class="content">4</div></g-col>
            <g-col span="4"><div class="content">4</div></g-col>
            <g-col span="4"><div class="content">4</div></g-col>
            <g-col span="4"><div class="content">4</div></g-col>
            <g-col span="4"><div class="content">4</div></g-col>
            <g-col span="4"><div class="content">4</div></g-col>
        </g-row>
        <g-row class="demoRow">
            <g-col span="2"><div class="content">2</div></g-col>
            <g-col span="2"><div class="content">2</div></g-col>
            <g-col span="2"><div class="content">2</div></g-col>
            <g-col span="2"><div class="content">2</div></g-col>
            <g-col span="2"><div class="content">2</div></g-col>
            <g-col span="2"><div class="content">2</div></g-col>
            <g-col span="2"><div class="content">2</div></g-col>
            <g-col span="2"><div class="content">2</div></g-col>
            <g-col span="2"><div class="content">2</div></g-col>
            <g-col span="2"><div class="content">2</div></g-col>
            <g-col span="2"><div class="content">2</div></g-col>
            <g-col span="2"><div class="content">2</div></g-col>
        </g-row>
        <h3>代码</h3>
        <pre><code>&nbsp;{{content1}}</code></pre>
        <h3 style="margin-top: 100px">设置平均间隔</h3>
        <g-row class="demoRow" gutter="10">
            <g-col span="8"><div class="content">8</div></g-col>
            <g-col span="8"><div class="content">8</div></g-col>
            <g-col span="8"><div class="content">8</div></g-col>
        </g-row>
        <g-row class="demoRow" gutter="10">
            <g-col span="6"><div class="content">6</div></g-col>
            <g-col span="6"><div class="content">6</div></g-col>
            <g-col span="6"><div class="content">6</div></g-col>
            <g-col span="6"><div class="content">6</div></g-col>
        </g-row>
        <h3>代码</h3>
        <pre><code>&nbsp;{{content2}}</code></pre>
        <h3 style="margin-top: 100px">设置自定义间隔</h3>
        <g-row class="demoRow">
            <g-col span="8"><div class="content">8</div></g-col>
            <g-col span="8" offset="1"><div class="content">8</div></g-col>
            <g-col span="8" offset="3"><div class="content">8</div></g-col>
        </g-row>
        <g-row class="demoRow">
            <g-col span="6"><div class="content">6</div></g-col>
            <g-col span="6" offset="5"><div class="content">6</div></g-col>
            <g-col span="6" offset="2"><div class="content">6</div></g-col>
        </g-row>
        <g-row class="demoRow">
            <g-col span="6"><div class="content">4</div></g-col>
            <g-col span="6" offset="2"><div class="content">4</div></g-col>
            <g-col span="6" offset="3"><div class="content">4</div></g-col>
            <g-col span="6" offset="5"><div class="content">4</div></g-col>
        </g-row>
        <h3>代码</h3>
        <pre><code>&nbsp;{{content3}}</code></pre>
        <h3 style="margin-top: 100px">根据不同分辨率显示不同的宽度</h3>
        <g-row>
            <g-col class="col" span="8" :phone="{span:10}"  :ipad="{span:8}" :narrow="{span:6}" >
                <div class="content">内容1</div>
            </g-col>
            <g-col class="col" span="8" :phone="{span:6}" :ipad="{span:10}" :narrow="{span:18}">
                <div class="content">内容2</div>
            </g-col>
            <g-col class="col" span="8" :phone="{span:6}" :ipad="{span:6}" :narrow="{span:18}">
                <div class="content">内容3</div>
            </g-col>
        </g-row>
        <h3>代码</h3>
        <pre><code>&nbsp;{{content4}}</code></pre>
    </div>
</template>

<script>
    import Row from '../../../src/Row'
    import Col from '../../../src/Col'
    export default {
        name: "button-demo.vue",
        components:{
            'g-col':Col,
            'g-row':Row
        },
        data(){
            return {
                content1:`
                    <g-row class="demoRow">
                        &nbsp;<g-col span="8"><div class="content">8</div></g-col>
                        &nbsp;<g-col span="8"><div class="content">8</div></g-col>
                        &nbsp;<g-col span="8"><div class="content">8</div></g-col>
                    </g-row>
                    <g-row class="demoRow">
                        &nbsp;<g-col span="6"><div class="content">6</div></g-col>
                        &nbsp;<g-col span="6"><div class="content">6</div></g-col>
                        &nbsp;<g-col span="6"><div class="content">6</div></g-col>
                        &nbsp;<g-col span="6"><div class="content">6</div></g-col>
                    </g-row>
                    <g-row class="demoRow">
                        &nbsp;<g-col span="4"><div class="content">4</div></g-col>
                        &nbsp;<g-col span="4"><div class="content">4</div></g-col>
                        &nbsp;<g-col span="4"><div class="content">4</div></g-col>
                        &nbsp;<g-col span="4"><div class="content">4</div></g-col>
                        &nbsp;<g-col span="4"><div class="content">4</div></g-col>
                        &nbsp;<g-col span="4"><div class="content">4</div></g-col>
                    </g-row>
                    <g-row class="demoRow">
                        &nbsp;<g-col span="2"><div class="content">2</div></g-col>
                        &nbsp;<g-col span="2"><div class="content">2</div></g-col>
                        &nbsp;<g-col span="2"><div class="content">2</div></g-col>
                        &nbsp;<g-col span="2"><div class="content">2</div></g-col>
                        &nbsp;<g-col span="2"><div class="content">2</div></g-col>
                        &nbsp;<g-col span="2"><div class="content">2</div></g-col>
                        &nbsp;<g-col span="2"><div class="content">2</div></g-col>
                        &nbsp;<g-col span="2"><div class="content">2</div></g-col>
                        &nbsp;<g-col span="2"><div class="content">2</div></g-col>
                        &nbsp;<g-col span="2"><div class="content">2</div></g-col>
                        &nbsp;<g-col span="2"><div class="content">2</div></g-col>
                        &nbsp;<g-col span="2"><div class="content">2</div></g-col>
                    </g-row>
                `.replace(/\t+| +/g,' ').replace(/&nbsp;+/g,'    ').trim(),
                content2:`
                    <g-row class="demoRow" gutter="10">
                        &nbsp;<g-col span="8"><div class="content">8</div></g-col>
                        &nbsp;<g-col span="8"><div class="content">8</div></g-col>
                        &nbsp;<g-col span="8"><div class="content">8</div></g-col>
                    </g-row>
                    <g-row class="demoRow" gutter="10">
                        &nbsp;<g-col span="6"><div class="content">6</div></g-col>
                        &nbsp;<g-col span="6"><div class="content">6</div></g-col>
                        &nbsp;<g-col span="6"><div class="content">6</div></g-col>
                        &nbsp;<g-col span="6"><div class="content">6</div></g-col>
                    </g-row>
                `.replace(/\t+| +/g,' ').replace(/&nbsp;+/g,'    ').trim(),
                content3:`
                    <g-row class="demoRow">
                        &nbsp;<g-col span="8"><div class="content">8</div></g-col>
                        &nbsp;<g-col span="8" offset="1"><div class="content">8</div></g-col>
                        &nbsp;<g-col span="8" offset="3"><div class="content">8</div></g-col>
                    </g-row>
                    <g-row class="demoRow">
                        &nbsp;<g-col span="6"><div class="content">6</div></g-col>
                        &nbsp;<g-col span="6" offset="5"><div class="content">6</div></g-col>
                        &nbsp;<g-col span="6" offset="2"><div class="content">6</div></g-col>
                    </g-row>
                    <g-row class="demoRow">
                        &nbsp;<g-col span="6"><div class="content">4</div></g-col>
                        &nbsp;<g-col span="6" offset="2"><div class="content">4</div></g-col>
                        &nbsp;<g-col span="6" offset="3"><div class="content">4</div></g-col>
                        &nbsp;<g-col span="6" offset="5"><div class="content">4</div></g-col>
                    </g-row>
                `.replace(/\t+| +/g,' ').replace(/&nbsp;+/g,'    ').trim(),
                content4:`
                    <g-row>
                        &nbsp;<g-col class="col" span="8" :phone="{span:10}"  :ipad="{span:8}" :narrow="{span:6}" >
                            &nbsp;&nbsp;<div class="content">内容1</div>
                        &nbsp;</g-col>
                        &nbsp;<g-col class="col" span="8" :phone="{span:6}" :ipad="{span:10}" :narrow="{span:18}">
                            &nbsp;&nbsp;<div class="content">内容2</div>
                        &nbsp;</g-col>
                        &nbsp;<g-col class="col" span="8" :phone="{span:6}" :ipad="{span:6}" :narrow="{span:18}">
                            &nbsp;&nbsp;<div class="content">内容3</div>
                        &nbsp;</g-col>
                    </g-row>
                `.replace(/\t+| +/g,' ').replace(/&nbsp;+/g,'    ').trim(),
            }
        }
    }
</script>
<style>
    .demoRow{
        margin: 10px 0;
    }
    .content{
        background-color: #eee;
        border: 1px solid #ddd;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
</style>