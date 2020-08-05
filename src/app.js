import Vue from 'vue';
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row';
import Col from './col';
import Content from './content';
import Footer from './footer';
import Layout from './layout';
import Sider from './sider';
import Header from './header';
import Toast from './Toast';
import Plugin from './plugin'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsItem from './tabs-item'
import TabsBody from './tabs-body'
import TabsPane from './tabs-pane'
import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-input', Input);
Vue.component('g-row', Row);
Vue.component('g-col', Col);
Vue.component('g-content', Content);
Vue.component('g-footer', Footer);
Vue.component('g-layout', Layout);
Vue.component('g-sider', Sider);
Vue.component('g-header', Header);
Vue.component('g-toast', Toast);
Vue.use(Plugin);
Vue.component('g-tabs', Tabs);
Vue.component('g-tabs-head', TabsHead);
Vue.component('g-tabs-item', TabsItem);
Vue.component('g-tabs-body', TabsBody);
Vue.component('g-tabs-pane', TabsPane);
Vue.component('g-popover', Popover);
Vue.component('g-collapse', Collapse);
Vue.component('g-collapse-item', CollapseItem);
new Vue({
    el: "#app",
    data() {
        return {
            loading1: false,
            loading2: false,
            loading3: false,
            message: 'hi',
            selected:'sports',
            selectedCollapse:['1','2']
        }
    },
    methods: {
        inputChange(e) {
            console.log(e);
        },
        showToast1(){
            this.showToast('top');
        },
        showToast2(){
            this.showToast('middle');
        },
        showToast3(){
            this.showToast('bottom');
        },
        showToast(position) {
            this.$toast(`智商下降${parseInt(Math.random() * 100)}`, {
                closeButton: {
                    text: '知道了',
                    callback() {
                        console.log('用户知道了');
                    }
                },
                position
            })
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