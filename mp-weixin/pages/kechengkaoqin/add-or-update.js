(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/kechengkaoqin/add-or-update"],{2746:function(e,n,t){"use strict";t.r(n);var r=t("e701"),a=t.n(r);for(var i in r)"default"!==i&&function(e){t.d(n,e,(function(){return r[e]}))}(i);n["default"]=a.a},"396c":function(e,n,t){"use strict";var r=t("4a07"),a=t.n(r);a.a},"4a07":function(e,n,t){},"8a22":function(e,n,t){"use strict";t.r(n);var r=t("8f5a"),a=t("2746");for(var i in a)"default"!==i&&function(e){t.d(n,e,(function(){return a[e]}))}(i);t("396c");var o,c=t("f0c5"),u=Object(c["a"])(a["default"],r["b"],r["c"],!1,null,"589f3104",null,!1,r["a"],o);n["default"]=u.exports},"8f5a":function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return r}));var r={wPicker:function(){return Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"b7aa"))}},a=function(){var e=this,n=e.$createElement;e._self._c},i=[]},"9a5b":function(e,n,t){"use strict";(function(e){t("48e8");r(t("66fd"));var n=r(t("8a22"));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t("543d")["createPage"])},e701:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,n,t,r,a,i,o){try{var c=e[i](o),u=c.value}catch(s){return void t(s)}c.done?n(u):Promise.resolve(u).then(r,a)}function o(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var o=e.apply(n,t);function c(e){i(o,r,a,c,u,"next",e)}function u(e){i(o,r,a,c,u,"throw",e)}c(void 0)}))}}var c=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("b7aa"))}.bind(null,t)).catch(t.oe)},u={data:function(){return{cross:"",ro:{kechengId:!1,yonghuId:!1,kechengkaoqinTypes:!1,insertTime:!1,updateTime:!1,createTime:!1},ruleForm:{kechengId:"",yonghuId:"",kechengkaoqinTypes:"",kechengkaoqinValue:"",insertTime:"",updateTime:"",createTime:""},user:{},kechengkaoqinTypesOptions:[],kechengkaoqinTypesIndex:0}},components:{wPicker:c},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(e){var n=this;return o(r.default.mark((function t(){var a,i,o;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={page:1,limit:100,dicCode:"kechengkaoqin_types"},t.next=3,n.$api.page("dictionary",a);case 3:if(i=t.sent,n.kechengkaoqinTypesOptions=i.data.list,!e.id){t.next=11;break}return n.ruleForm.id=e.id,t.next=9,n.$api.info("kechengkaoqin",n.ruleForm.id);case 9:o=t.sent,n.ruleForm=o.data;case 11:e.kechengkaoqinId&&(n.ruleForm.kechengkaoqinId=e.kechengkaoqinId);case 12:case"end":return t.stop()}}),t)})))()},methods:{kechengkaoqinTypesChange:function(e){this.kechengkaoqinTypesIndex=e.target.value,this.ruleForm.kechengkaoqinValue=this.kechengkaoqinTypesOptions[this.kechengkaoqinTypesIndex].indexName,this.ruleForm.kechengkaoqinTypes=this.kechengkaoqinTypesOptions[this.kechengkaoqinTypesIndex].codeIndex},insertTimeConfirm:function(e){console.log(e),this.ruleForm.insertTime=e.result,this.$forceUpdate()},updateTimeConfirm:function(e){console.log(e),this.ruleForm.updateTime=e.result,this.$forceUpdate()},createTimeConfirm:function(e){console.log(e),this.ruleForm.createTime=e.result,this.$forceUpdate()},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return o(r.default.mark((function t(){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n.ruleForm.id){t.next=5;break}return t.next=3,n.$api.update("kechengkaoqin",n.ruleForm);case 3:t.next=7;break;case 5:return t.next=7,n.$api.save("kechengkaoqin",n.ruleForm);case 7:e.setStorageSync("pingluenStateState",!0),n.$utils.msgBack("提交成功");case 9:case"end":return t.stop()}}),t)})))()},getDate:function(e){var n=new Date,t=n.getFullYear(),r=n.getMonth()+1,a=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),r=r>9?r:"0"+r,a=a>9?a:"0"+a,"".concat(t,"-").concat(r,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};n.default=u}).call(this,t("543d")["default"])}},[["9a5b","common/runtime","common/vendor"]]]);