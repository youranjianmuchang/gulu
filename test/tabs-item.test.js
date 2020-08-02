const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsItem from "../src/tabs-item";
import TabsBody from "../src/tabs-body";
import TabsHead from "../src/tabs-head";
import TabsPane from "../src/tabs-pane";

Vue.component('g-tabs', Tabs);
Vue.component('g-tabs-head', TabsHead);
Vue.component('g-tabs-item', TabsItem);
Vue.component('g-tabs-body', TabsBody);
Vue.component('g-tabs-pane', TabsPane);

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsItem', () => {
    it('存在.', () => {
        expect(TabsItem).to.exist;
    })

    it('接收 name 属性', () => {
        let Constructor = Vue.extend(TabsItem);
        const vm = new Constructor({
            propsData:{
                name:'xxx'
            }
        }).$mount();
        expect(vm.$el.getAttribute('data-item')).to.eq('xxx')
        vm.$destroy();
    })
    it('接收 disabled 属性', () => {
        let Constructor = Vue.extend(TabsItem);
        const vm = new Constructor({
            propsData:{
                disabled:true
            }
        }).$mount();
        expect(vm.$el.classList.contains('disabled')).to.be.true;
        const callback = sinon.fake();
        vm.$on('click',callback);
        vm.$el.click();
        expect(callback).to.have.not.been.called;
        vm.$destroy();
    })
})