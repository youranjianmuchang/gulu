<template>
    <div class="tabs-item" @click="onClick" :class="classes"><slot></slot></div>
</template>
<script>
    export default {
        name:'GTabsItem',
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
            },
            disabled:{
                type:Boolean,
                default:false
            }
        },
        methods:{
            onClick(){
                this.eventBus.$emit('update:selected',this.name)
            }
        }
    }
</script>
<style lang="less" scoped>
    .tabs-item{
        flex-shrink: 0;
        padding: 0 2em;
        &.active{
            background-color: #ff9400;
            color: #fff;
        }
    }
</style>