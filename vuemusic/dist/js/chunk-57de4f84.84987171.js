(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57de4f84"],{"8a8f":function(t,s,e){},ac12:function(t,s,e){"use strict";var n=e("8a8f"),i=e.n(n);i.a},c93d:function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"person"},[e("div",{staticClass:"person_server"},[e("div",{staticClass:"person_sign"},[e("li",[t._v("\n        账号:\n        "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.ZH,expression:"ZH"}],attrs:{type:"text",placeholder:"请输入账号"},domProps:{value:t.ZH},on:{input:function(s){s.target.composing||(t.ZH=s.target.value)}}})]),e("li",[t._v("\n        密码:\n        "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.MM,expression:"MM"}],attrs:{type:"text",placeholder:"请输入密码"},domProps:{value:t.MM},on:{input:function(s){s.target.composing||(t.MM=s.target.value)}}})])]),e("div",{staticClass:"person_in"},[e("span",{staticClass:"zhuce",on:{click:t.turnlogon}},[t._v("注册")]),e("span",{staticClass:"denglu",on:{click:function(s){return t.getinfo(t.ZH)}}},[t._v("登录")])])]),e("transition",{attrs:{name:"shademove"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isshow,expression:"isshow"}],staticClass:"shade"},[e("p",[t._v("账号或密码错误")]),e("span",{staticClass:"left",on:{click:t.sure}},[t._v("确认")]),e("span",{staticClass:"right",on:{click:t.sure}},[t._v("取消")])])])],1)},i=[],o={name:"person",data:function(){return{ZH:"",MM:"",info:!0,isshow:!1}},beforeRouteEnter:function(t,s,e){e(function(t){!0===t.$store.state.isSign&&t.$router.push({path:"/person/sign"})})},methods:{turnlogon:function(){this.$router.push({path:"/person/logon"})},getinfo:function(t){for(var s=this.$store.state.personinfo,e=0;e<s.length;e++)s[e].zhanghao==this.ZH&&s[e].mima==this.MM&&(this.info=!1,this.$store.commit("updataUserinfo",t),this.$store.commit("updataSignTrue",!0),this.$router.push({path:"/person/sign"}));1==this.info&&(this.isshow=!0)},sure:function(){this.isshow=!1}}},a=o,r=(e("ac12"),e("2877")),c=Object(r["a"])(a,n,i,!1,null,"7e31431c",null);s["default"]=c.exports}}]);
//# sourceMappingURL=chunk-57de4f84.84987171.js.map