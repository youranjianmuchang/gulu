(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{374:function(t,s){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},375:function(t,s,n){var c=n(27),a="["+n(374)+"]",o=RegExp("^"+a+a+"*"),e=RegExp(a+a+"*$"),i=function(t){return function(s){var n=String(c(s));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(e,"")),n}};t.exports={start:i(1),end:i(2),trim:i(3)}},376:function(t,s,n){"use strict";var c=n(1),a=n(375).trim;c({target:"String",proto:!0,forced:n(377)("trim")},{trim:function(){return a(this)}})},377:function(t,s,n){var c=n(2),a=n(374);t.exports=function(t){return c((function(){return!!a[t]()||"​᠎"!="​᠎"[t]()||a[t].name!==t}))}},382:function(t,s,n){var c=n(6),a=n(115);t.exports=function(t,s,n){var o,e;return a&&"function"==typeof(o=s.constructor)&&o!==n&&c(e=o.prototype)&&e!==n.prototype&&a(t,e),t}},385:function(t,s,n){"use strict";var c=n(8),a=n(5),o=n(208),e=n(23),i=n(7),l=n(35),r=n(382),v=n(56),p=n(2),g=n(36),d=n(81).f,_=n(34).f,f=n(9).f,u=n(375).trim,b=a.Number,w=b.prototype,C="Number"==l(g(w)),h=function(t){var s,n,c,a,o,e,i,l,r=v(t,!1);if("string"==typeof r&&r.length>2)if(43===(s=(r=u(r)).charCodeAt(0))||45===s){if(88===(n=r.charCodeAt(2))||120===n)return NaN}else if(48===s){switch(r.charCodeAt(1)){case 66:case 98:c=2,a=49;break;case 79:case 111:c=8,a=55;break;default:return+r}for(e=(o=r.slice(2)).length,i=0;i<e;i++)if((l=o.charCodeAt(i))<48||l>a)return NaN;return parseInt(o,c)}return+r};if(o("Number",!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var m,N=function(t){var s=arguments.length<1?0:t,n=this;return n instanceof N&&(C?p((function(){w.valueOf.call(n)})):"Number"!=l(n))?r(new b(h(s)),n,N):h(s)},y=c?d(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),R=0;y.length>R;R++)i(b,m=y[R])&&!i(N,m)&&f(N,m,_(b,m));N.prototype=w,w.constructor=N,e(a,"Number",N)}},406:function(t,s,n){},407:function(t,s,n){},408:function(t,s,n){},456:function(t,s,n){"use strict";var c=n(406);n.n(c).a},457:function(t,s,n){"use strict";var c=n(407);n.n(c).a},458:function(t,s,n){"use strict";var c=n(408);n.n(c).a},477:function(t,s,n){"use strict";n.r(s);n(55),n(79),n(376),n(113),n(206),n(385),n(114);var c={name:"GRow",props:{gutter:{type:[Number,String]},align:{type:String,validator:function(t){return["left","right","center"].indexOf(t)>=0}}},mounted:function(){var t=this;this.$children.forEach((function(s){s.gutter=t.gutter}))},computed:{rowStyle:function(){var t=this.gutter;return{marginLeft:-t/2+"px",marginRight:-t/2+"px"}},rowClass:function(){var t=this.align;return[t&&"align-".concat(t)]}}},a=(n(456),n(54)),o=Object(a.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"row",class:this.rowClass,style:this.rowStyle},[this._t("default")],2)}),[],!1,null,"a9ba7d4e",null).exports,e=(n(215),n(211),n(116),n(52)),i=function(t){var s=Object.keys(t),n=!0;return s.forEach((function(t){["span","offset"].includes(t)||(n=!1)})),n},l={name:"GCol",props:{span:{type:[Number,String]},offset:{type:[Number,String]},phone:{type:Object,validator:i},ipad:{type:Object,validator:i},narrow:{type:Object,validator:i},pc:{type:Object,validator:i},widePc:{type:Object,validator:i}},data:function(){return{gutter:0}},methods:{setClass:function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!t)return[];var n=[];return t.span&&n.push("col-".concat(s).concat(t.span)),t.offset&&n.push("offset-".concat(s).concat(t.offset)),n}},computed:{classStr:function(){var t=this.span,s=this.offset,n=this.phone,c=this.ipad,a=this.narrow,o=this.pc,i=this.widePc,l=this.setClass;return[].concat(Object(e.a)(l({span:t,offset:s})),Object(e.a)(l(n,"phone-")),Object(e.a)(l(c,"ipad-")),Object(e.a)(l(a,"narrow-")),Object(e.a)(l(o,"pc-")),Object(e.a)(l(i,"widePc-")))},styleStr:function(){var t=this.gutter;return{paddingLeft:t/2+"px",paddingRight:t/2+"px"}}}},r=(n(457),{name:"button-demo.vue",components:{"g-col":Object(a.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"col",class:this.classStr,style:this.styleStr},[this._t("default")],2)}),[],!1,null,"678443d2",null).exports,"g-row":o},data:function(){return{content1:'\n                <g-row class="demoRow">\n                    &nbsp;<g-col span="8"><div class="content">8</div></g-col>\n                    &nbsp;<g-col span="8"><div class="content">8</div></g-col>\n                    &nbsp;<g-col span="8"><div class="content">8</div></g-col>\n                </g-row>\n                <g-row class="demoRow">\n                    &nbsp;<g-col span="6"><div class="content">6</div></g-col>\n                    &nbsp;<g-col span="6"><div class="content">6</div></g-col>\n                    &nbsp;<g-col span="6"><div class="content">6</div></g-col>\n                    &nbsp;<g-col span="6"><div class="content">6</div></g-col>\n                </g-row>\n                <g-row class="demoRow">\n                    &nbsp;<g-col span="4"><div class="content">4</div></g-col>\n                    &nbsp;<g-col span="4"><div class="content">4</div></g-col>\n                    &nbsp;<g-col span="4"><div class="content">4</div></g-col>\n                    &nbsp;<g-col span="4"><div class="content">4</div></g-col>\n                    &nbsp;<g-col span="4"><div class="content">4</div></g-col>\n                    &nbsp;<g-col span="4"><div class="content">4</div></g-col>\n                </g-row>\n                <g-row class="demoRow">\n                    &nbsp;<g-col span="2"><div class="content">2</div></g-col>\n                    &nbsp;<g-col span="2"><div class="content">2</div></g-col>\n                    &nbsp;<g-col span="2"><div class="content">2</div></g-col>\n                    &nbsp;<g-col span="2"><div class="content">2</div></g-col>\n                    &nbsp;<g-col span="2"><div class="content">2</div></g-col>\n                    &nbsp;<g-col span="2"><div class="content">2</div></g-col>\n                    &nbsp;<g-col span="2"><div class="content">2</div></g-col>\n                    &nbsp;<g-col span="2"><div class="content">2</div></g-col>\n                    &nbsp;<g-col span="2"><div class="content">2</div></g-col>\n                    &nbsp;<g-col span="2"><div class="content">2</div></g-col>\n                    &nbsp;<g-col span="2"><div class="content">2</div></g-col>\n                    &nbsp;<g-col span="2"><div class="content">2</div></g-col>\n                </g-row>\n            '.replace(/\t+| +/g," ").replace(/&nbsp;+/g,"    ").trim(),content2:'\n                <g-row class="demoRow" gutter="10">\n                    &nbsp;<g-col span="8"><div class="content">8</div></g-col>\n                    &nbsp;<g-col span="8"><div class="content">8</div></g-col>\n                    &nbsp;<g-col span="8"><div class="content">8</div></g-col>\n                </g-row>\n                <g-row class="demoRow" gutter="10">\n                    &nbsp;<g-col span="6"><div class="content">6</div></g-col>\n                    &nbsp;<g-col span="6"><div class="content">6</div></g-col>\n                    &nbsp;<g-col span="6"><div class="content">6</div></g-col>\n                    &nbsp;<g-col span="6"><div class="content">6</div></g-col>\n                </g-row>\n            '.replace(/\t+| +/g," ").replace(/&nbsp;+/g,"    ").trim(),content3:'\n                <g-row class="demoRow">\n                    &nbsp;<g-col span="8"><div class="content">8</div></g-col>\n                    &nbsp;<g-col span="8" offset="1"><div class="content">8</div></g-col>\n                    &nbsp;<g-col span="8" offset="3"><div class="content">8</div></g-col>\n                </g-row>\n                <g-row class="demoRow">\n                    &nbsp;<g-col span="6"><div class="content">6</div></g-col>\n                    &nbsp;<g-col span="6" offset="5"><div class="content">6</div></g-col>\n                    &nbsp;<g-col span="6" offset="2"><div class="content">6</div></g-col>\n                </g-row>\n                <g-row class="demoRow">\n                    &nbsp;<g-col span="6"><div class="content">4</div></g-col>\n                    &nbsp;<g-col span="6" offset="2"><div class="content">4</div></g-col>\n                    &nbsp;<g-col span="6" offset="3"><div class="content">4</div></g-col>\n                    &nbsp;<g-col span="6" offset="5"><div class="content">4</div></g-col>\n                </g-row>\n            '.replace(/\t+| +/g," ").replace(/&nbsp;+/g,"    ").trim(),content4:'\n                <g-row>\n                    &nbsp;<g-col class="col" span="8" :phone="{span:10}"  :ipad="{span:8}" :narrow="{span:6}" >\n                        &nbsp;&nbsp;<div class="content">内容1</div>\n                    &nbsp;</g-col>\n                    &nbsp;<g-col class="col" span="8" :phone="{span:6}" :ipad="{span:10}" :narrow="{span:18}">\n                        &nbsp;&nbsp;<div class="content">内容2</div>\n                    &nbsp;</g-col>\n                    &nbsp;<g-col class="col" span="8" :phone="{span:6}" :ipad="{span:6}" :narrow="{span:18}">\n                        &nbsp;&nbsp;<div class="content">内容3</div>\n                    &nbsp;</g-col>\n                </g-row>\n            '.replace(/\t+| +/g," ").replace(/&nbsp;+/g,"    ").trim()}}}),v=(n(458),Object(a.a)(r,(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",[n("h2",[t._v("预览")]),t._v(" "),n("h3",[t._v("24格网格")]),t._v(" "),n("g-row",{staticClass:"demoRow"},[n("g-col",{attrs:{span:"8"}},[n("div",{staticClass:"content"},[t._v("8")])]),t._v(" "),n("g-col",{attrs:{span:"8"}},[n("div",{staticClass:"content"},[t._v("8")])]),t._v(" "),n("g-col",{attrs:{span:"8"}},[n("div",{staticClass:"content"},[t._v("8")])])],1),t._v(" "),n("g-row",{staticClass:"demoRow"},[n("g-col",{attrs:{span:"6"}},[n("div",{staticClass:"content"},[t._v("6")])]),t._v(" "),n("g-col",{attrs:{span:"6"}},[n("div",{staticClass:"content"},[t._v("6")])]),t._v(" "),n("g-col",{attrs:{span:"6"}},[n("div",{staticClass:"content"},[t._v("6")])]),t._v(" "),n("g-col",{attrs:{span:"6"}},[n("div",{staticClass:"content"},[t._v("6")])])],1),t._v(" "),n("g-row",{staticClass:"demoRow"},[n("g-col",{attrs:{span:"4"}},[n("div",{staticClass:"content"},[t._v("4")])]),t._v(" "),n("g-col",{attrs:{span:"4"}},[n("div",{staticClass:"content"},[t._v("4")])]),t._v(" "),n("g-col",{attrs:{span:"4"}},[n("div",{staticClass:"content"},[t._v("4")])]),t._v(" "),n("g-col",{attrs:{span:"4"}},[n("div",{staticClass:"content"},[t._v("4")])]),t._v(" "),n("g-col",{attrs:{span:"4"}},[n("div",{staticClass:"content"},[t._v("4")])]),t._v(" "),n("g-col",{attrs:{span:"4"}},[n("div",{staticClass:"content"},[t._v("4")])])],1),t._v(" "),n("g-row",{staticClass:"demoRow"},[n("g-col",{attrs:{span:"2"}},[n("div",{staticClass:"content"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2"}},[n("div",{staticClass:"content"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2"}},[n("div",{staticClass:"content"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2"}},[n("div",{staticClass:"content"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2"}},[n("div",{staticClass:"content"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2"}},[n("div",{staticClass:"content"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2"}},[n("div",{staticClass:"content"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2"}},[n("div",{staticClass:"content"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2"}},[n("div",{staticClass:"content"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2"}},[n("div",{staticClass:"content"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2"}},[n("div",{staticClass:"content"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2"}},[n("div",{staticClass:"content"},[t._v("2")])])],1),t._v(" "),n("h3",[t._v("代码")]),t._v(" "),n("pre",[n("code",[t._v(" "+t._s(t.content1))])]),t._v(" "),n("h3",{staticStyle:{"margin-top":"100px"}},[t._v("设置平均间隔")]),t._v(" "),n("g-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[n("g-col",{attrs:{span:"8"}},[n("div",{staticClass:"content"},[t._v("8")])]),t._v(" "),n("g-col",{attrs:{span:"8"}},[n("div",{staticClass:"content"},[t._v("8")])]),t._v(" "),n("g-col",{attrs:{span:"8"}},[n("div",{staticClass:"content"},[t._v("8")])])],1),t._v(" "),n("g-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[n("g-col",{attrs:{span:"6"}},[n("div",{staticClass:"content"},[t._v("6")])]),t._v(" "),n("g-col",{attrs:{span:"6"}},[n("div",{staticClass:"content"},[t._v("6")])]),t._v(" "),n("g-col",{attrs:{span:"6"}},[n("div",{staticClass:"content"},[t._v("6")])]),t._v(" "),n("g-col",{attrs:{span:"6"}},[n("div",{staticClass:"content"},[t._v("6")])])],1),t._v(" "),n("h3",[t._v("代码")]),t._v(" "),n("pre",[n("code",[t._v(" "+t._s(t.content2))])]),t._v(" "),n("h3",{staticStyle:{"margin-top":"100px"}},[t._v("设置自定义间隔")]),t._v(" "),n("g-row",{staticClass:"demoRow"},[n("g-col",{attrs:{span:"8"}},[n("div",{staticClass:"content"},[t._v("8")])]),t._v(" "),n("g-col",{attrs:{span:"8",offset:"1"}},[n("div",{staticClass:"content"},[t._v("8")])]),t._v(" "),n("g-col",{attrs:{span:"8",offset:"3"}},[n("div",{staticClass:"content"},[t._v("8")])])],1),t._v(" "),n("g-row",{staticClass:"demoRow"},[n("g-col",{attrs:{span:"6"}},[n("div",{staticClass:"content"},[t._v("6")])]),t._v(" "),n("g-col",{attrs:{span:"6",offset:"5"}},[n("div",{staticClass:"content"},[t._v("6")])]),t._v(" "),n("g-col",{attrs:{span:"6",offset:"2"}},[n("div",{staticClass:"content"},[t._v("6")])])],1),t._v(" "),n("g-row",{staticClass:"demoRow"},[n("g-col",{attrs:{span:"6"}},[n("div",{staticClass:"content"},[t._v("4")])]),t._v(" "),n("g-col",{attrs:{span:"6",offset:"2"}},[n("div",{staticClass:"content"},[t._v("4")])]),t._v(" "),n("g-col",{attrs:{span:"6",offset:"3"}},[n("div",{staticClass:"content"},[t._v("4")])]),t._v(" "),n("g-col",{attrs:{span:"6",offset:"5"}},[n("div",{staticClass:"content"},[t._v("4")])])],1),t._v(" "),n("h3",[t._v("代码")]),t._v(" "),n("pre",[n("code",[t._v(" "+t._s(t.content3))])]),t._v(" "),n("h3",{staticStyle:{"margin-top":"100px"}},[t._v("根据不同分辨率显示不同的宽度")]),t._v(" "),n("g-row",[n("g-col",{staticClass:"col",attrs:{span:"8",phone:{span:10},ipad:{span:8},narrow:{span:6}}},[n("div",{staticClass:"content"},[t._v("内容1")])]),t._v(" "),n("g-col",{staticClass:"col",attrs:{span:"8",phone:{span:6},ipad:{span:10},narrow:{span:18}}},[n("div",{staticClass:"content"},[t._v("内容2")])]),t._v(" "),n("g-col",{staticClass:"col",attrs:{span:"8",phone:{span:6},ipad:{span:6},narrow:{span:18}}},[n("div",{staticClass:"content"},[t._v("内容3")])])],1),t._v(" "),n("h3",[t._v("代码")]),t._v(" "),n("pre",[n("code",[t._v(" "+t._s(t.content4))])])],1)}),[],!1,null,"30a3032d",null));s.default=v.exports}}]);