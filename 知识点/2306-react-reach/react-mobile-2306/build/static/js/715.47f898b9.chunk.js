"use strict";(self.webpackChunkreact_mobile_2306=self.webpackChunkreact_mobile_2306||[]).push([[715],{9179:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(2791),o=n(6045);var i=function(e){return r.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e,{style:Object.assign({verticalAlign:"-0.125em"},e.style),className:["antd-mobile-icon",e.className].filter(Boolean).join(" ")}),r.createElement("g",{id:"MoreOutline-MoreOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.createElement("g",{id:"MoreOutline-\u7f16\u7ec4"},r.createElement("rect",{id:"MoreOutline-\u77e9\u5f62",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),r.createElement("path",{d:"M12,21 C13.6568542,21 15,22.3431458 15,24 C15,25.6568542 13.6568542,27 12,27 C10.3431458,27 9,25.6568542 9,24 C9,22.3431458 10.3431458,21 12,21 Z M24,21 C25.6568542,21 27,22.3431458 27,24 C27,25.6568542 25.6568542,27 24,27 C22.3431458,27 21,25.6568542 21,24 C21,22.3431458 22.3431458,21 24,21 Z M36,21 C37.6568542,21 39,22.3431458 39,24 C39,25.6568542 37.6568542,27 36,27 C34.3431458,27 33,25.6568542 33,24 C33,22.3431458 34.3431458,21 36,21 Z",id:"MoreOutline-\u5f62\u72b6\u7ed3\u5408",fill:"currentColor",fillRule:"nonzero"}))))},l=n(4880),s=n(9434),a=n(184);function c(e){var t=(0,s.I0)(),n=(0,l.k6)(),r=e.isshowloginout?(0,a.jsx)("div",{onClick:function(){localStorage.removeItem("token"),t({type:"updateuser",payload:""}),n.push("/login")},children:"\u9000\u51fa"}):(0,a.jsx)("div",{style:{fontSize:24},children:(0,a.jsx)(o.T,{style:{"--gap":"16px"},children:(0,a.jsx)(i,{})})});return(0,a.jsx)(o.l2,{right:e.isshowright?r:null,onBack:function(){n.go(-1)},children:e.children})}},8845:function(e,t,n){var r=n(1243),o="";console.log("process.env.NODE_ENV","production"),o="http://47.94.148.165:3001";var i=r.Z.create({baseURL:o,timeout:5e3,headers:{"Content-Type":"application/json"}});i.interceptors.request.use((function(e){var t=localStorage.getItem("token");return t&&(e.headers.token=t),e}),(function(e){return Promise.reject(e)})),i.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),t.Z=i},7715:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});n(2791);var r=n(9179),o=n(6045),i=n(8845);var l=n(4880),s=n(9434),a=n(184);function c(){(0,s.v9)((function(e){return e.userid}));var e=(0,s.I0)(),t=(0,l.k6)();return(0,a.jsx)("div",{className:"loginbox",children:(0,a.jsxs)(o.l0,{layout:"horizontal",onFinish:function(n){var r;(r=n,(0,i.Z)({url:"/api/user/login",method:"post",data:r})).then((function(n){o.FN.show({content:n.data.message,duration:1e3,afterClose:function(){200==n.data.code&&(localStorage.setItem("token",n.data.data.token),e({type:"updateuser",payload:n.data.data.userid}),t.push("/home"))}})}))},footer:(0,a.jsx)(o.zx,{block:!0,type:"submit",color:"primary",size:"large",children:"\u63d0\u4ea4"}),children:[(0,a.jsx)(o.l0.Item,{name:"loginname",label:"\u767b\u5f55\u540d",rules:[{validator:function(e,t){return/^1[3-9]\d{9}$/.test(t)?Promise.resolve():Promise.reject(new Error("\u624b\u673a\u53f7\u8f93\u5165\u6709\u8bef!"))}}],children:(0,a.jsx)(o.II,{placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"})}),(0,a.jsx)(o.l0.Item,{name:"password",label:"\u5bc6\u7801",rules:[{validator:function(e,t){return/^\w{6}$/.test(t)?Promise.resolve():Promise.reject(new Error("\u5bc6\u7801\u8f93\u5165\u6709\u8bef!"))}}],children:(0,a.jsx)(o.II,{placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801"})})]})})}var u=n(4305);function d(){var e=(0,l.k6)();return(0,a.jsxs)("div",{style:{background:"#f6f6f6",width:"100%",height:"100%"},children:[(0,a.jsx)(r.Z,{isshowright:!1,children:"\u4eac\u4e1c\u767b\u5f55"}),(0,a.jsx)(c,{}),(0,a.jsx)(o.Zb,{title:(0,a.jsx)("div",{style:{fontWeight:"normal"},children:"\u5feb\u901f\u6ce8\u518c"}),extra:(0,a.jsx)(u.Z,{}),onHeaderClick:function(){console.log("onHeaderClick"),e.push("/regist/step1")},style:{borderRadius:"16px"}})]})}}}]);
//# sourceMappingURL=715.47f898b9.chunk.js.map