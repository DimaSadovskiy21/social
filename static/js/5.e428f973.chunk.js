(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[5],{288:function(e,s,a){"use strict";a.d(s,"a",(function(){return b}));var t=a(5),n=a(51),i=a(52),c=a(54),d=a(53),r=a(0),o=a.n(r),u=a(19),j=a(11),l=a(2),b=function(e){var s=function(s){Object(c.a)(r,s);var a=Object(d.a)(r);function r(){return Object(n.a)(this,r),a.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){return this.props.isAuth?Object(l.jsx)(e,Object(t.a)({},this.props)):Object(l.jsx)(j.a,{to:"/login"})}}]),r}(o.a.Component);return Object(u.b)(g)(s)},g=function(e){return{isAuth:e.auth.isAuth}}},289:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__1Qshe",dialog:"Dialogs_dialog__FAAT6",item:"Dialogs_item__ktACb",message:"Dialogs_message__2NOSR"}},300:function(e,s,a){"use strict";a.r(s);var t=a(19),n=a(288),i=a(123),c=a(125),d=a(126),r=a(43),o=a(65),u=a(289),j=a.n(u),l=a(22),b=a(2),g=function(e){return Object(b.jsx)("div",{className:j.a.item,children:Object(b.jsx)(l.b,{to:"/dialogs/"+e.id,children:e.name})})},m=function(e){return Object(b.jsx)("div",{className:j.a.message,children:e.message})},O=Object(o.a)(50),h=Object(d.a)({form:"message"})((function(e){return Object(b.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(b.jsx)("div",{children:Object(b.jsx)(c.a,{component:r.b,name:"addMessageText",placeholder:"send your message",validate:[o.b,O]})}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{children:"send"})})]})})),p=function(e){var s=e.dialogs.map((function(e){return Object(b.jsx)(g,{id:e.id,name:e.name},e.id)})),a=e.messages.map((function(e){return Object(b.jsx)(m,{id:e.id,message:e.message},e.id)}));return Object(b.jsxs)("div",{className:j.a.dialogs,children:[Object(b.jsx)("div",{className:j.a.dialog,children:s}),Object(b.jsx)("div",{className:j.a.messages,children:a}),Object(b.jsx)(h,{onSubmit:function(s){e.addMessage(s.addMessageText)}})]})},f=a(10);s.default=Object(f.d)(Object(t.b)((function(e){return{dialogs:e.dialogsPage.dialogs,messages:e.dialogsPage.messages}}),{addMessage:i.a}),n.a)(p)}}]);
//# sourceMappingURL=5.e428f973.chunk.js.map