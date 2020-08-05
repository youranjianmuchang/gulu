<template>
    <div class="collapseItem">
        <div class="title" @click="show">{{title}}</div>
        <div class="content" v-if="open">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name:'GCollapseItem',
        inject:['eventBus'],
        props:{
            title:{
                type:String,
                required:true
            }
        },
        mounted(){
            this.eventBus && this.eventBus.$on('update:selected',vm =>{
                if(this !== vm){
                    this.close();
                }
            });
        },
        data(){
            return {
                open:false
            }
        },
        methods:{
            show(){
                if(this.open){
                    this.open = false;
                }else{
                    this.open = true;
                    this.eventBus && this.eventBus.$emit('update:selected',this);
                }
            },
            close(){
                this.open = false;
            }
        }
    }
</script>
<style scoped lang="less">
    @grey:#ddd;
    @border-radius:4px;
    .collapseItem{
        > .title{
            border:1px solid @grey;
            margin: -1px -1px 0 -1px;
            min-height: 32px;
            display: flex;
            align-items: center;
            padding: 0 8px;
        }
        &:first-child{
            > .title{
                border-top-left-radius: @border-radius;
                border-top-right-radius: @border-radius;
            }
        }
        &:last-child{
            > .title{
                border-bottom-left-radius: @border-radius;
                border-bottom-right-radius: @border-radius;
            }
        }
        .content{
            padding: 8px;
        }
    }
</style>