(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{123:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(36),a=n(5),c="my-app/dialogsReducer/ADD-MESSAGE",i={dialogs:[{id:1,name:"Dima"},{id:2,name:"Gosha"},{id:3,name:"Petr"},{id:4,name:"Vanya"},{id:5,name:"Olga"},{id:6,name:"Dima"}],messages:[{id:1,message:"Hi"},{id:2,message:"How are you?"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},s=function(e){return{type:c,addMessageText:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var n={id:6,message:t.addMessageText};return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[n]),newTextMessage:""});default:return e}}},124:function(e,t,n){"use strict";n.d(t,"c",(function(){return y})),n.d(t,"b",(function(){return S})),n.d(t,"d",(function(){return _}));var r=n(11),a=n.n(r),c=n(19),i=n(36),s=n(5),u=n(16),o="my-app/usersReducer/FOLLOW",l="my-app/usersReducer/UNFOLLOW",d="my-app/usersReducer/SET-USERS",p="my-app/usersReducer/SET-CURRENT-PAGE",f="my-app/usersReducer/SET-PAGE",j="my-app/usersReducer/TOGGLE-IS-FETCHING",b="my-app/usersReducer/TOGGLE-IS-FOLOWING",O={users:[],count:100,page:0,currentPage:1,isFetching:!1,isFollowing:[]},h=function(e){return{type:o,userId:e}},m=function(e){return{type:l,userId:e}},g=function(e){return{type:p,currentPage:e}},v=function(e){return{type:j,isFetching:e}},x=function(e,t){return{type:b,isFollowing:e,userId:t}},y=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(g(e)),r(v(!0)),n.next=4,u.c.getUsers(e,t);case 4:c=n.sent,r(v(!1)),r((i=c.items,{type:d,users:i})),r((a=c.totalCount,{type:f,page:a}));case 8:case"end":return n.stop()}var a,i}),n)})));return function(e){return n.apply(this,arguments)}}()},w=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r,c){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(x(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(c(n)),t(x(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),S=function(e){return function(t){w(t,e,u.c.follow,h)}},_=function(e){return function(t){w(t,e,u.c.unfollow,m)}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(s.a)(Object(s.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(s.a)(Object(s.a)({},e),{},{followed:!0}):e}))});case l:return Object(s.a)(Object(s.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(s.a)(Object(s.a)({},e),{},{followed:!1}):e}))});case d:return Object(s.a)(Object(s.a)({},e),{},{users:t.users});case p:return Object(s.a)(Object(s.a)({},e),{},{currentPage:t.currentPage});case f:return Object(s.a)(Object(s.a)({},e),{},{page:t.page});case j:return Object(s.a)(Object(s.a)({},e),{},{isFetching:t.isFetching});case b:return Object(s.a)(Object(s.a)({},e),{},{isFollowing:t.isFollowing?[].concat(Object(i.a)(e.isFollowing),[t.userId]):e.isFollowing.filter((function(e){return e!=t.userId}))});default:return e}}},130:function(e,t,n){e.exports={loading:"Loading_loading__BLSAi"}},16:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s}));var r=n(128),a=r.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"afacc5e8-05db-46cf-8293-890c5a850969"}}),c={getUsers:function(e,t){return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))}},i={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status/",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})}},s={getAuth:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login/",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},161:function(e,t,n){},25:function(e,t,n){e.exports={nav:"Navbar_nav__LGXfu",item:"Navbar_item__14cGv",activeLink:"Navbar_activeLink__1tCF2"}},285:function(e,t,n){"use strict";n.r(t);var r=n(63),a=n.n(r),c=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,297)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))},i=n(50),s=n(51),u=n(61),o=n(60),l=n(0),d=n.n(l),p=(n(161),n(22)),f=n(25),j=n.n(f),b=n(2),O=function(){return Object(b.jsxs)("nav",{className:j.a.nav,children:[Object(b.jsx)("div",{className:j.a.item,children:Object(b.jsx)(p.b,{to:"/profile",activeClassName:j.a.activeLink,children:"Profile"})}),Object(b.jsx)("div",{className:j.a.item,children:Object(b.jsx)(p.b,{to:"/dialogs",activeClassName:j.a.activeLink,children:"Message"})}),Object(b.jsx)("div",{className:j.a.item,children:Object(b.jsx)(p.b,{to:"/users",activeClassName:j.a.activeLink,children:"Users"})}),Object(b.jsx)("div",{className:j.a.item,children:Object(b.jsx)("a",{children:"Music"})}),Object(b.jsx)("div",{className:j.a.item,children:Object(b.jsx)("a",{children:"Settings"})})]})},h=n(10),m=n(5),g=n(18),v=n(11),x=n.n(v),y=n(19),w=n(40),S=n(16),_="my-app/authReducer/SET-AUTH-USER-DATA",E={id:null,email:null,login:null,isAuth:!1},C=function(e,t,n,r){return{type:_,payload:{id:e,email:t,login:n,isAuth:r}}},T=function(){return function(){var e=Object(y.a)(x.a.mark((function e(t){var n,r,a,c,i;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.getAuth();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,c=r.email,i=r.login,r.isAuth,t(C(a,c,i,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(m.a)(Object(m.a)({},e),t.payload);default:return e}},L=n(66),N=n.n(L),P=function(e){return Object(b.jsxs)("header",{children:[Object(b.jsx)("img",{src:"https://w7.pngwing.com/pngs/720/947/png-transparent-logo-dvd-region-code-encapsulated-postscript-world-wide-web-blue-cdr-text.png"}),Object(b.jsx)("div",{className:N.a.loginBlock,children:e.isAuth?Object(b.jsxs)("div",{children:[e.login," - ",Object(b.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(b.jsx)(p.b,{to:"/login",children:"Login"})})]})},A=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:N.a.header,children:Object(b.jsx)(P,Object(m.a)({},this.props))})}}]),n}(d.a.Component),F=Object(g.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(y.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.logout();case 2:0===e.sent.data.resultCode&&t(C(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(A),I=n(125),R=n(126),U=n(64),D=n(71),M=n(33),G=n.n(M),z=Object(R.a)({form:"Login"})((function(e){return Object(b.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(b.jsx)("div",{children:Object(b.jsx)(I.a,{name:"email",component:U.a,placeholder:"login",validate:[D.b]})}),Object(b.jsx)("div",{children:Object(b.jsx)(I.a,{name:"password",component:U.a,placeholder:"password",validate:[D.b],type:"password"})}),Object(b.jsxs)("div",{children:[Object(b.jsx)(I.a,{name:"rememberMe",component:U.a,type:"checkbox"})," remember Me"]}),e.error&&Object(b.jsx)("div",{className:G.a.formSummuryError,children:e.error}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{children:"Login"})})]})})),H=Object(g.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(y.a)(x.a.mark((function r(a){var c,i;return x.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,S.a.login(e,t,n);case 2:0===(c=r.sent).data.resultCode?a(T()):(i=c.data.messages.length>0?c.data.messages[0]:"Some error",a(Object(w.a)("Login",{_error:i})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(b.jsx)(h.a,{to:"/profile"}):Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Login"}),Object(b.jsx)(z,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),B=n(9),Y="my-app/appReducer/INISIALIZED-SUCCESS",J={inisialized:!1},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y:return Object(m.a)(Object(m.a)({},e),{},{inisialized:!0});default:return e}},W=n(62),X=n(123),q=n(92),K=n(124),Z=n(131),Q=n(127),$=Object(B.c)({profilePage:q.b,dialogsPage:X.b,usersPage:K.a,auth:k,form:Q.a,app:V}),ee=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||B.d,te=Object(B.e)($,ee(Object(B.a)(Z.a))),ne=function(e){return function(t){return Object(b.jsx)(d.a.Suspense,{fallback:Object(b.jsx)(W.a,{}),children:Object(b.jsx)(e,Object(m.a)({},t))})}},re=d.a.lazy((function(){return n.e(3).then(n.bind(null,298))})),ae=d.a.lazy((function(){return n.e(4).then(n.bind(null,299))})),ce=d.a.lazy((function(){return n.e(5).then(n.bind(null,300))})),ie=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.inisializedApp()}},{key:"render",value:function(){return this.props.inisialized?Object(b.jsxs)("div",{className:"app-wrapper",children:[Object(b.jsx)(F,{}),Object(b.jsx)(O,{}),Object(b.jsxs)("div",{className:"app-wrapper__content",children:[Object(b.jsx)(h.b,{path:"/profile/:userId?",render:ne(re)}),Object(b.jsx)(h.b,{path:"/dialogs",render:ne(ce)}),Object(b.jsx)(h.b,{path:"/users",render:ne(ae)}),Object(b.jsx)(h.b,{path:"/login",render:function(){return Object(b.jsx)(H,{})}})]})]}):Object(b.jsx)(W.a,{})}}]),n}(d.a.Component),se=Object(B.d)(h.f,Object(g.b)((function(e){return{inisialized:e.app.inisialized}}),{inisializedApp:function(){return function(e){e(T()).then((function(){e({type:Y})}))}}}))(ie),ue=function(e){return Object(b.jsx)(d.a.StrictMode,{children:Object(b.jsx)(p.a,{children:Object(b.jsx)(g.a,{store:te,children:Object(b.jsx)(se,{})})})})};a.a.render(Object(b.jsx)(ue,{}),document.getElementById("root")),c()},33:function(e,t,n){e.exports={formControls:"FormControls_formControls__2yJOT",error:"FormControls_error__3Bt6b",formSummuryError:"FormControls_formSummuryError__UPUTO"}},62:function(e,t,n){"use strict";var r=n.p+"static/media/loading.4fe2dccd.svg",a=n(130),c=n.n(a),i=n(2);t.a=function(e){return Object(i.jsx)("img",{className:c.a.loading,src:r})}},64:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d}));var r=n(5),a=n(86),c=n(33),i=n.n(c),s=n(2),u=["input","meta"],o=["input","meta"],l=function(e){var t=e.input,n=e.meta,c=Object(a.a)(e,u),o=n.error&&n.touched;return Object(s.jsxs)("div",{className:i.a.formControls+" "+(o?i.a.error:""),children:[Object(s.jsx)("textarea",Object(r.a)(Object(r.a)({},t),c)),Object(s.jsx)("div",{children:o&&Object(s.jsx)("span",{children:n.error})})]})},d=function(e){var t=e.input,n=e.meta,c=Object(a.a)(e,o),u=n.error&&n.touched;return Object(s.jsxs)("div",{className:i.a.formControls+" "+(u?i.a.error:""),children:[Object(s.jsx)("input",Object(r.a)(Object(r.a)({},t),c)),Object(s.jsx)("div",{children:u&&Object(s.jsx)("span",{children:n.error})})]})}},66:function(e,t,n){e.exports={header:"Header_header__b6jCz",loginBlock:"Header_loginBlock__TsHl-"}},71:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"d",(function(){return h})),n.d(t,"f",(function(){return m})),n.d(t,"e",(function(){return g})),n.d(t,"c",(function(){return v}));var r=n(11),a=n.n(r),c=n(19),i=n(36),s=n(5),u=n(16),o="my-app/profileReducer/ADD-POST",l="my-app/profileReducer/SET_USER_PROFILE",d="my-app/profileReducer/SET-STATUS",p="my-app/profileReducer/DELETE-POST",f="my-app/profileReducer/SAVE_PHOTO_SUCCESS",j={posts:[{id:1,message:"I'm react developer",like:"777"},{id:2,message:"Hi, how are you?",like:"1277"},{id:3,message:"Hi, I'm Dima",like:"2121"}],profile:null,status:""},b=function(e){return{type:o,addPostText:e}},O=function(e){return{type:d,status:e}},h=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getStatus(e);case 2:r=t.sent,n(O(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(O(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n((a=r.data.data.photos,{type:f,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:l,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:var n={id:4,message:t.addPostText,like:777};return Object(s.a)(Object(s.a)({},e),{},{posts:[].concat(Object(i.a)(e.posts),[n]),newPostText:""});case l:return Object(s.a)(Object(s.a)({},e),{},{profile:t.profile});case d:return Object(s.a)(Object(s.a)({},e),{},{status:t.status});case p:return Object(s.a)(Object(s.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.id}))});case f:return Object(s.a)(Object(s.a)({},e),{},{profile:Object(s.a)(Object(s.a)({},e.profile),{},{photos:t.photos})});default:return e}}}},[[285,1,2]]]);
//# sourceMappingURL=main.8c7f8ebb.chunk.js.map