(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d6c5fa4"],{"1cf5":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"dialog-wrap"},[n("Modal",{attrs:{"class-name":"valut-modal",transfer:!0,"footer-hide":!0,closable:!1},model:{value:t.isOpen,callback:function(a){t.isOpen=a},expression:"isOpen"}},[n("div",{staticClass:"modal-content"},[1===t.step?n("div",{staticClass:"flex"},[n("div",{staticClass:"tab-warpper"},[n("button",{staticClass:"tab tab-disabled",on:{click:t.onMintClick}},[t._v(" "+t._s(t.$t("build-buildr"))+" ")])]),n("div",{staticClass:"tab-warpper"},[n("button",{staticClass:"tab"},[t._v(" "+t._s(t.$t("build-payback"))+" ")])])]):t._e(),n("div",{staticClass:"padding-warpper"},[1===t.step?n("div",{staticClass:"step-one"},[n("div",{staticClass:"grid-2"},[n("h2",[t._v(t._s(t.$t("build-Amount")))]),n("p",[n("span",[t._v(t._s(t.$t("build-balance"))+"：")]),t._v(" "+t._s(t._f("formatNormalValue")(t.LAIBalance))+" "+t._s(t.poolData.stableName))])]),n("div",{staticClass:"input-warpper"},[n("ScInput",{attrs:{unit:t.poolData.stableName,"on-change":t.onChangeValue,"is-error":t.checkValue}}),n("img",{attrs:{src:t.getTokenImg(t.poolData.stableName)}})],1),t.checkValue?n("div",{staticClass:"notice-warpper"},[n("div",{staticClass:"notice-content"},[n("img",{attrs:{src:e("fb2e")}}),n("p",[t._v(t._s(t.checkValue))])])]):t._e(),t.checkValue?t._e():n("div",{staticClass:"notice"},[n("span",[t._v(t._s(t.$t("build-payback-scUSD")))]),n("img",{attrs:{src:e("5d6d"),alt:"?"}})])]):t._e(),2===t.step?n("div",{staticClass:"step-two"},[n("div",{staticClass:"title-warpper"},[n("img",{attrs:{src:e("f3a0"),alt:"arrow"},on:{click:t.changeStep}}),n("h2",[t._v(t._s(t.$t("build-confirm")))])]),n("div",{staticClass:"confirm-content flex flex-col items-center"},[n("img",{attrs:{src:t.getTokenImg(t.poolData.stableName)}}),n("h2",[t._v(t._s(t.coinAmount))]),n("p",[t._v(t._s(t.poolData.stableName))]),n("span",[t._v(t._s(t.$t("build-will-payback")))])])]):t._e(),n("div",{staticClass:"items-content"},[n("ul",[n("li",{staticClass:"title"},[t._v(" "+t._s(t.$t("build-debt"))+"： ")]),n("li",[n("span",[t._v(t._s(t._f("formatNormalValue")(t.poolData.debtAmount)))]),t._v(" "+t._s(t.$t("build-to"))+" "),n("span",{class:{"f-green":t.newDebt>t.poolData.debtAmount,"f-danger":t.newDebt<t.poolData.debtAmount}},[t._v(t._s(t._f("formatNormalValue")(t.newDebt))+" "+t._s(t.poolData.stableName))])])]),n("ul",[n("li",{staticClass:"title flex"},[n("span",[t._v(t._s(t.$t("build-coll-ratio"))+":")])]),t.poolData.collateralRatio?n("li",[n("span",{class:{"f-green":t.poolData.collateralRatio>=1.5,"f-warning":t.poolData.collateralRatio<1.5&&t.poolData.collateralRatio>=1.2,"f-danger":t.poolData.collateralRatio<1.2}},[t._v(t._s(t.BigNumber(t.poolData.collateralRatio).times(100).toFixed(2))+"%")]),t._v(" "+t._s(t.$t("build-to"))+" "),n("span",{class:{"f-green":t.newCollateralRatio>=1.5,"f-warning":t.newCollateralRatio<1.5&&t.newCollateralRatio>=1.2,"f-danger":t.newCollateralRatio<1.2}},[t._v(t._s(t.BigNumber(t.newCollateralRatio).times(100).toFixed(2))+"%")])]):n("li",[n("span",[t._v("0% "+t._s(t.$t("build-to"))+" 0%")])])])]),n("div",{staticClass:"button-warpper"},[1!==t.step||t.checkValue?t._e():n("button",{staticClass:"btn",on:{click:t.onNextClick}},[t._v(" "+t._s(t.$t("build-next"))+" ")]),1===t.step&&t.checkValue?n("button",{staticClass:"btn btn-disabled"},[t._v(" "+t._s(t.$t("build-next"))+" ")]):t._e(),2!==t.step||t.btnLoading?t._e():n("button",{staticClass:"btn",on:{click:t.onBurnClick}},[t._v(" "+t._s(t.$t("build-confirm"))+" ")]),2===t.step&&t.btnLoading?n("button",{staticClass:"btn"},[t._v(" Loading... ")]):t._e()]),1===t.step?n("div",{staticClass:"close-warpper"},[n("img",{attrs:{src:e("2c29"),alt:"closeBtn"},on:{click:t.closeDialog}})]):t._e()])])])],1)},i=[],s=e("1da1"),o=e("5530"),l=(e("96cf"),e("2f62")),c=e("6853"),r=e("97a5"),u=e("901e"),p=e.n(u),d=e("12cb"),b=e("1062"),h={inject:["reload"],data:function(){return{step:1,isOpen:!1,coinAmount:0,poolData:{},BigNumber:p.a,LAIBalance:0,btnLoading:!1}},components:{ScInput:c["a"]},computed:Object(o["a"])(Object(o["a"])({},Object(l["c"])(["web3","ethersprovider","ethChainID","ethAddress"])),{},{newDebt:function(){return p()(this.poolData.debtAmount).minus(this.coinAmount).toNumber()},newCollateralRatio:function(){var t=this.poolData.depositAmount,a=this.checkValue?{collateralRatio:0}:this.$parent.getTroveIndicators(t,this.newDebt),e=a.collateralRatio;return e},checkValue:function(){return p()(this.coinAmount).isLessThan(0)?d["a"].t("notice.swapNotice.n2"):isNaN(this.coinAmount)?d["a"].t("notice.buidrNotice.n1"):this.$parent.validate(this.poolData.depositAmount,this.newDebt)}}),methods:{getTokenImg:function(t){return this.$parent.getTokenImg(t)},open:function(t){this.poolData=t,this.isOpen=!0,this.step=1,this.coinAmount=0,this.getLAIBalance()},getLAIBalance:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e={tokenName:"LAI",chainID:t.ethChainID,library:t.ethersprovider,account:t.ethAddress,web3:t.web3},a.next=3,Object(b["b"])(e);case 3:t.LAIBalance=a.sent;case 4:case"end":return a.stop()}}),a)})))()},closeDialog:function(){this.isOpen=!1,this.coinAmount=0},changeStep:function(){this.step=1,this.coinAmount=0},onMintClick:function(){this.isOpen=!1,this.coinAmount=0,this.$parent.openMintDialog(this.poolData)},onChangeValue:function(t){this.coinAmount=t},onNextClick:function(){this.step=2},onBurnClick:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var e,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e={type:"repay",liquityState:t.poolData.liquityState,tokenName:t.poolData.tokenName,chainID:t.ethChainID,library:t.ethersprovider,account:t.ethAddress,web3:t.web3,coinAmount:t.coinAmount,unit:t.poolData.stableName},t.btnLoading=!0,a.prev=2,a.next=5,Object(r["d"])(e);case 5:n=a.sent,t.$parent.sendtx(n),t.isOpen=!1,a.next=13;break;case 10:a.prev=10,a.t0=a["catch"](2),t.btnLoading=!1;case 13:case"end":return a.stop()}}),a,null,[[2,10]])})))()}}},f=h,m=(e("5087"),e("2877")),v=Object(m["a"])(f,n,i,!1,null,"542519df",null);a["default"]=v.exports},"2c29":function(t,a,e){t.exports=e.p+"img/closeBtn.9647d73b.svg"},5087:function(t,a,e){"use strict";e("f127")},"5d6d":function(t,a,e){t.exports=e.p+"img/wenhao.ae15efd2.svg"},6853:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{class:{"input-group":!0,"input-focus":t.focus,"input-error":t.isError}},[t.title?e("div",{staticClass:"input-prepend"},[t._v(" "+t._s(t.title)+" ")]):t._e(),e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputVal,expression:"inputVal"}],class:{"input-inner":!0,"no-title":!t.title},attrs:{type:"input",name:"repay",autoComplete:"off",placeholder:t.placetext,disabled:t.disabled},domProps:{value:t.inputVal},on:{focus:t.onInputFocus,blur:t.onInputBlur,input:function(a){a.target.composing||(t.inputVal=a.target.value)}}}),e("div",{staticClass:"input-append"},[t._v(" "+t._s(t.unit)+" ")])])},i=[],s={name:"ScInput",props:["title","unit","placetext","disabled","onChange","defaultValue","isError"],data:function(){return{inputVal:"",focus:!1}},methods:{onInputFocus:function(){this.focus=!0},onInputBlur:function(){this.focus=!1},onChangeValue:function(t){var a=t||0;this.onChange&&this.onChange(a)}},watch:{inputVal:function(t){this.onChangeValue(t)},defaultValue:function(t){this.inputVal=t}},created:function(){this.onChangeValue(this.inputVal)}},o=s,l=(e("7b49"),e("2877")),c=Object(l["a"])(o,n,i,!1,null,"1c42f5ce",null);a["a"]=c.exports},"7b49":function(t,a,e){"use strict";e("e652")},e652:function(t,a,e){},f127:function(t,a,e){},f3a0:function(t,a,e){t.exports=e.p+"img/arrow-left.e1aaf66f.svg"},fb2e:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAqklEQVQoU2NkgIL/oQxsDC8Y0hn+M0QzMDBoQYWvMTAyLGWQYJjJuJrhF0iMEUT8t2SQZmBm2MLAwGAAMwCNvsDwl8GH8TjDU0awyc8ZTqIoNnSAqD9/AFnfBQZJBnPG/7YMuQz/GSahmJjYAOHOh9IwSUaGPMb/NgwnGBgYzInSwMBwEqThEwMDAy+RGj6TpQHTSdg9DXLESeyexqUB7GlSg5XkiCM1aQAAzyZIc7QaxZMAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=chunk-1d6c5fa4.fd50d58f.js.map