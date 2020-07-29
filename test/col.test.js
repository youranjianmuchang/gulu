const expect = chai.expect;
import Vue from 'vue'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
    it('存在.', () => {
        expect(Col).to.exist;
    })

    it('接收 span 属性', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Col);
        const vm = new Constructor({
            propsData: {
                span: 2
            }
        }).$mount(div);
        expect( vm.$el.classList.contains('col-2')).to.eq(true);
        vm.$destroy();
    })
})