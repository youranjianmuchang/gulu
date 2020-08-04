const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
    it('存在.', () => {
        expect(Popover).to.exist;
    })

    describe('测试 props',()=>{
        it('接收 position 属性', (done) => {
            Vue.component('g-popover', Popover);
            const div = document.createElement('div');
            document.body.appendChild(div);
            div.innerHTML=`
                <g-popover position="bottom" ref="testPopover">
                    <template slot="content">top</template>
                    <template><button>上方弹出</button></template>
                </g-popover>
            `
            let vm = new Vue({
                el:div
            })
            vm.$el.querySelector('button').click();
            vm.$nextTick(()=>{
                expect(vm.$refs.testPopover.$refs.contentWrapper.classList.contains('position-bottom')).to.be.true;
                done();
            })
        })

    })
})