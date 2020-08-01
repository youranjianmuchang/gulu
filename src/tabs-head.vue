<template>
    <div class="tabs-header"><slot></slot><slot name="actions"></slot></div>
</template>
<script>
    export default {
        name:'GTabsHeader'
    }
</script>
<style lang="less" scoped>
    .tabs-header{}
</style>