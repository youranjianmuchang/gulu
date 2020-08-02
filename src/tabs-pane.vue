<template>
    <div class="tabs-pane" :class="classes" v-if="active"><slot></slot></div>
</template>
<script>
    export default {
        name:'GTabsPane',
        inject:['eventBus'],
        created() {
            this.eventBus.$on('update:selected',(name)=>{
                this.active = this.name === name;
            })
        },
        data(){
            return {
                active:false
            }
        },
        computed:{
            classes(){
                return {
                    active:this.active
                }
            }
        },
        props:{
            name:{
                type:[Number,String],
                required:true
            }
        },
    }
</script>
<style lang="less" scoped>
    .tabs-pane{
        &.active{
            padding: 1em;
        }
    }
</style>