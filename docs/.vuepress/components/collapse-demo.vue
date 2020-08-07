<template>
    <div>
        <h2>预览</h2>
        <h3>只显示单个内容</h3>
        <g-collapse single :selectedCollapse1.sync="selectedCollapse1">
            <g-collapse-item title="点击标题显示或隐藏内容1" name="1">内容1</g-collapse-item>
            <g-collapse-item title="点击标题显示或隐藏内容2" name="2">内容2</g-collapse-item>
            <g-collapse-item title="点击标题显示或隐藏内容3" name="3">内容3</g-collapse-item>
        </g-collapse>
        <h3>代码</h3>
        <h4>HTML</h4>
        <pre><code>&nbsp;{{content1}}</code></pre>
        <h4>JS</h4>
        <pre><code>&nbsp;{{jsStr1}}</code></pre>
        <h3 style="margin-top: 100px">同时显示多个内容</h3>
        <g-collapse  :selected.sync="selectedCollapse2">
            <g-collapse-item title="点击标题显示或隐藏内容1" name="1">内容1</g-collapse-item>
            <g-collapse-item title="点击标题显示或隐藏内容2" name="2">内容2</g-collapse-item>
            <g-collapse-item title="点击标题显示或隐藏内容3" name="3">内容3</g-collapse-item>
        </g-collapse>
        <h3>代码</h3>
        <h4>HTML</h4>
        <pre><code>&nbsp;{{content2}}</code></pre>
        <h4>JS</h4>
        <pre><code>&nbsp;{{jsStr2}}</code></pre>
    </div>
</template>

<script>
    import Collapse from '../../../src/collapse'
    import CollapseItem from '../../../src/collapse-item'

    export default {
        name: "button-demo.vue",
        components: {
            'g-collapse': Collapse,
            'g-collapse-item':CollapseItem
        },
        data() {
            return {
                selectedCollapse1 : '1',
                selectedCollapse2 : ['1','2','3'],
                content1: `
                    <g-collapse single :selectedCollapse1.sync="selectedCollapse1">
                        &nbsp;<g-collapse-item title="点击标题显示或隐藏内容1" name="1">内容1</g-collapse-item>
                        &nbsp;<g-collapse-item title="点击标题显示或隐藏内容2" name="2">内容2</g-collapse-item>
                        &nbsp;<g-collapse-item title="点击标题显示或隐藏内容3" name="3">内容3</g-collapse-item>
                    </g-collapse>
                `.replace(/\t+| +/g, ' ').replace(/&nbsp;+/g,'    ').trim(),
                content2: `
                    <g-collapse  :selected.sync="selectedCollapse2">
                        &nbsp;<g-collapse-item title="点击标题显示或隐藏内容1" name="1">内容1</g-collapse-item>
                        &nbsp;<g-collapse-item title="点击标题显示或隐藏内容2" name="2">内容2</g-collapse-item>
                        &nbsp;<g-collapse-item title="点击标题显示或隐藏内容3" name="3">内容3</g-collapse-item>
                    </g-collapse>
                `.replace(/\t+| +/g, ' ').replace(/&nbsp;+/g,'    ').trim(),
                jsStr1:`
                    selectedCollapse1 : '1'
                `.replace(/\t+| +/g, ' '),
                jsStr2:`
                    selectedCollapse2 : ['1','2','3']
                `.replace(/\t+| +/g, ' '),
            }
        }
    }
</script>
