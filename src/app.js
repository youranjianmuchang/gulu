import Vue from 'vue';
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
Vue.component('g-button',Button);
Vue.component('g-icon',Icon);
Vue.component('g-button-group',ButtonGroup);
Vue.component('g-input',Input);
new Vue({
    el:"#app",
    data(){
        return {
            loading1:false,
            loading2:false,
            loading3:false,
            message:'hi'
        }
    },
    methods:{
        inputChange(e){
            console.log(e);
        }
    }
})

// import chai from 'chai'
// import spies from 'chai-spies'
// chai.use(spies);
// const {expect} = chai;
// let Constructor = Vue.extend(Button);
// {
//     let button = new Constructor({
//         propsData:{
//             icon:'setting'
//         }
//     })
//     button.$mount();
//     let href = button.$el.querySelector('use').getAttribute('xlink:href');
//     expect(href).to.eq('#i-setting');
//     button.$el.remove();
//     button.$destroy();
// }
// {
//     let button = new Constructor({
//         propsData:{
//             icon:'setting',
//             loading:true
//         }
//     })
//     button.$mount();
//     let href = button.$el.querySelector('use').getAttribute('xlink:href');
//     expect(href).to.eq('#i-loading');
//     button.$el.remove();
//     button.$destroy();
// }
// {
//     const div = document.createElement('div');
//     document.body.appendChild(div);
//     let button = new Constructor({
//         propsData:{
//             icon:'setting',
//             iconPosition:'left'
//         }
//     })
//     button.$mount(div);
//     let svg = button.$el.querySelector('svg');
//     let {order} = window.getComputedStyle(svg);
//     expect(order).to.eq('1');
//     button.$el.remove();
//     button.$destroy();
// }
// {
//     const div = document.createElement('div');
//     document.body.appendChild(div);
//     let button = new Constructor({
//         propsData:{
//             icon:'setting',
//             iconPosition:'right'
//         }
//     })
//     button.$mount(div);
//     let svg = button.$el.querySelector('svg');
//     let {order} = window.getComputedStyle(svg);
//     expect(order).to.eq('2');
//     button.$el.remove();
//     button.$destroy();
// }
// {
//     let button = new Constructor({
//         propsData:{
//             icon:'setting'
//         }
//     })
//     button.$mount();
//     const spy = chai.spy(function(){
//         console.log(1)
//     });
//     button.$on('click',spy);
//     button.$el.click();
//     expect(spy).to.have.been.called();
// }