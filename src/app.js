import Vue from 'vue';
import Button from './button'
Vue.component('g-button',Button);
new Vue({
    el:"#app",
    data(){
        return {
            message:'h1'
        }
    }
})