(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{123:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(37),a=n(5),c="my-app/dialogsReducer/ADD-MESSAGE",i={dialogs:[{id:1,name:"Dima"},{id:2,name:"Gosha"},{id:3,name:"Petr"},{id:4,name:"Vanya"},{id:5,name:"Olga"},{id:6,name:"Dima"}],messages:[{id:1,message:"Hi"},{id:2,message:"How are you?"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},s=function(e){return{type:c,addMessageText:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var n={id:6,message:t.addMessageText};return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[n]),newTextMessage:""});default:return e}}},124:function(e,t,n){"use strict";n.d(t,"c",(function(){return y})),n.d(t,"b",(function(){return S})),n.d(t,"d",(function(){return _}));var r=n(9),a=n.n(r),c=n(15),i=n(37),s=n(5),u=n(13),o="my-app/usersReducer/FOLLOW",d="my-app/usersReducer/UNFOLLOW",l="my-app/usersReducer/SET-USERS",p="my-app/usersReducer/SET-CURRENT-PAGE",f="my-app/usersReducer/SET-PAGE",j="my-app/usersReducer/TOGGLE-IS-FETCHING",b="my-app/usersReducer/TOGGLE-IS-FOLOWING",h={users:[],count:100,page:0,currentPage:1,isFetching:!1,isFollowing:[]},O=function(e){return{type:o,userId:e}},m=function(e){return{type:d,userId:e}},g=function(e){return{type:p,currentPage:e}},v=function(e){return{type:j,isFetching:e}},x=function(e,t){return{type:b,isFollowing:e,userId:t}},y=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(g(e)),r(v(!0)),n.next=4,u.d.getUsers(e,t);case 4:c=n.sent,r(v(!1)),r((i=c.items,{type:l,users:i})),r((a=c.totalCount,{type:f,page:a}));case 8:case"end":return n.stop()}var a,i}),n)})));return function(e){return n.apply(this,arguments)}}()},w=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r,c){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(x(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(c(n)),t(x(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),S=function(e){return function(t){w(t,e,u.d.follow,O)}},_=function(e){return function(t){w(t,e,u.d.unfollow,m)}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(s.a)(Object(s.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(s.a)(Object(s.a)({},e),{},{followed:!0}):e}))});case d:return Object(s.a)(Object(s.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(s.a)(Object(s.a)({},e),{},{followed:!1}):e}))});case l:return Object(s.a)(Object(s.a)({},e),{},{users:t.users});case p:return Object(s.a)(Object(s.a)({},e),{},{currentPage:t.currentPage});case f:return Object(s.a)(Object(s.a)({},e),{},{page:t.page});case j:return Object(s.a)(Object(s.a)({},e),{},{isFetching:t.isFetching});case b:return Object(s.a)(Object(s.a)({},e),{},{isFollowing:t.isFollowing?[].concat(Object(i.a)(e.isFollowing),[t.userId]):e.isFollowing.filter((function(e){return e!=t.userId}))});default:return e}}},13:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return u}));var r=n(128),a=r.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"afacc5e8-05db-46cf-8293-890c5a850969"}}),c={getUsers:function(e,t){return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))}},i={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status/",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile",e)}},s={getAuth:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return a.post("auth/login/",{email:e,password:t,rememberMe:n,captcha:r})},logout:function(){return a.delete("auth/login")}},u={getCaptcha:function(){return a.get("security/get-captcha-url")}}},130:function(e,t,n){e.exports={loading:"Loading_loading__3FByg"}},161:function(e,t,n){},25:function(e,t,n){e.exports={nav:"Navbar_nav__260DX",item:"Navbar_item__17OWw",activeLink:"Navbar_activeLink__AAmeG"}},285:function(e,t,n){"use strict";n.r(t);var r=n(64),a=n.n(r),c=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,297)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))},i=n(51),s=n(52),u=n(54),o=n(53),d=n(0),l=n.n(d),p=(n(161),n(22)),f=n(25),j=n.n(f),b=n(2),h=function(){return Object(b.jsxs)("nav",{className:j.a.nav,children:[Object(b.jsx)("div",{className:j.a.item,children:Object(b.jsx)(p.b,{to:"/profile",activeClassName:j.a.activeLink,children:"Profile"})}),Object(b.jsx)("div",{className:j.a.item,children:Object(b.jsx)(p.b,{to:"/dialogs",activeClassName:j.a.activeLink,children:"Message"})}),Object(b.jsx)("div",{className:j.a.item,children:Object(b.jsx)(p.b,{to:"/users",activeClassName:j.a.activeLink,children:"Users"})}),Object(b.jsx)("div",{className:j.a.item,children:Object(b.jsx)("a",{children:"Music"})}),Object(b.jsx)("div",{className:j.a.item,children:Object(b.jsx)("a",{children:"Settings"})})]})},O=n(11),m=n(5),g=n(19),v=n(9),x=n.n(v),y=n(15),w=n(30),S=n(13),_="my-app/authReducer/SET-AUTH-USER-DATA",E="my-app/authReducer/SET-AUTH-USER-DATA",k={id:null,email:null,login:null,isAuth:!1,captchaURL:null},C=function(e,t,n,r){return{type:_,payload:{id:e,email:t,login:n,isAuth:r}}},L=function(){return function(){var e=Object(y.a)(x.a.mark((function e(t){var n,r,a,c,i;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.getAuth();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,c=r.email,i=r.login,r.isAuth,t(C(a,c,i,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},R=function(){return function(){var e=Object(y.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.c.getCaptcha();case 2:n=e.sent,t((r=n.data.url,{type:E,payload:{captchaURL:r}}));case 4:case"end":return e.stop()}var r}),e)})));return function(t){return e.apply(this,arguments)}}()},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:case E:return Object(m.a)(Object(m.a)({},e),t.payload);default:return e}},A=n(67),P=n.n(A),N=function(e){return Object(b.jsxs)("header",{children:[Object(b.jsx)("img",{src:"https://w7.pngwing.com/pngs/720/947/png-transparent-logo-dvd-region-code-encapsulated-postscript-world-wide-web-blue-cdr-text.png"}),Object(b.jsx)("div",{className:P.a.loginBlock,children:e.isAuth?Object(b.jsxs)("div",{children:[e.login," - ",Object(b.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(b.jsx)(p.b,{to:"/login",children:"Login"})})]})},F=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:P.a.header,children:Object(b.jsx)(N,Object(m.a)({},this.props))})}}]),n}(l.a.Component),U=Object(g.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(y.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.logout();case 2:0===e.sent.data.resultCode&&t(C(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(F),I=n(125),D=n(126),M=n(43),G=n(65),z=n(34),H=n.n(z),B=Object(D.a)({form:"Login"})((function(e){return Object(b.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(b.jsx)("div",{children:Object(b.jsx)(I.a,{name:"email",component:M.a,placeholder:"login",validate:[G.b]})}),Object(b.jsx)("div",{children:Object(b.jsx)(I.a,{name:"password",component:M.a,placeholder:"password",validate:[G.b],type:"password"})}),Object(b.jsxs)("div",{children:[Object(b.jsx)(I.a,{name:"rememberMe",component:M.a,type:"checkbox"})," remember Me"]}),e.captchaURL&&Object(b.jsx)("img",{src:e.captchaURL}),e.captchaURL&&Object(b.jsx)(I.a,{name:"captcha",component:M.a,placeholder:"symbols from image",validate:[G.b]}),e.error&&Object(b.jsx)("div",{className:H.a.formSummuryError,children:e.error}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{children:"Login"})})]})})),W=Object(g.b)((function(e){return{captchaURL:e.auth.captchaURL,isAuth:e.auth.isAuth}}),{login:function(e,t,n,r){return function(){var a=Object(y.a)(x.a.mark((function a(c){var i,s;return x.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,S.a.login(e,t,n,r);case 2:0===(i=a.sent).data.resultCode?c(L()):(10===i.data.resultCode&&c(R()),s=i.data.messages.length>0?i.data.messages[0]:"Some error",c(Object(w.a)("Login",{_error:s})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(b.jsx)(O.a,{to:"/profile"}):Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Login"}),Object(b.jsx)(B,{captchaURL:e.captchaURL,onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)}})]})})),Y=n(10),J="my-app/appReducer/INISIALIZED-SUCCESS",V={inisialized:!1},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J:return Object(m.a)(Object(m.a)({},e),{},{inisialized:!0});default:return e}},Z=n(63),q=n(123),K=n(92),Q=n(124),$=n(131),ee=n(127),te=Object(Y.c)({profilePage:K.b,dialogsPage:q.b,usersPage:Q.a,auth:T,form:ee.a,app:X}),ne=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Y.d,re=Object(Y.e)(te,ne(Object(Y.a)($.a)));window.store=re;var ae=re,ce=function(e){return function(t){return Object(b.jsx)(l.a.Suspense,{fallback:Object(b.jsx)(Z.a,{}),children:Object(b.jsx)(e,Object(m.a)({},t))})}},ie=l.a.lazy((function(){return n.e(3).then(n.bind(null,298))})),se=l.a.lazy((function(){return n.e(4).then(n.bind(null,299))})),ue=l.a.lazy((function(){return n.e(5).then(n.bind(null,300))})),oe=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.inisializedApp()}},{key:"render",value:function(){return this.props.inisialized?Object(b.jsxs)("div",{className:"app-wrapper",children:[Object(b.jsx)(U,{}),Object(b.jsx)(h,{}),Object(b.jsxs)("div",{className:"app-wrapper__content",children:[Object(b.jsx)(O.b,{path:"/profile/:userId?",render:ce(ie)}),Object(b.jsx)(O.b,{path:"/dialogs",render:ce(ue)}),Object(b.jsx)(O.b,{path:"/users",render:ce(se)}),Object(b.jsx)(O.b,{path:"/login",render:function(){return Object(b.jsx)(W,{})}})]})]}):Object(b.jsx)(Z.a,{})}}]),n}(l.a.Component),de=Object(Y.d)(O.f,Object(g.b)((function(e){return{inisialized:e.app.inisialized}}),{inisializedApp:function(){return function(e){e(L()).then((function(){e({type:J})}))}}}))(oe),le=function(e){return Object(b.jsx)(l.a.StrictMode,{children:Object(b.jsx)(p.a,{children:Object(b.jsx)(g.a,{store:ae,children:Object(b.jsx)(de,{})})})})};a.a.render(Object(b.jsx)(le,{}),document.getElementById("root")),c()},34:function(e,t,n){e.exports={formControls:"FormControls_formControls__blJxk",error:"FormControls_error__1EooD",formSummuryError:"FormControls_formSummuryError__10ZPT"}},43:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return l}));var r=n(5),a=n(86),c=n(34),i=n.n(c),s=n(2),u=["input","meta"],o=["input","meta"],d=function(e){var t=e.input,n=e.meta,c=Object(a.a)(e,u),o=n.error&&n.touched;return Object(s.jsxs)("div",{className:i.a.formControls+" "+(o?i.a.error:""),children:[Object(s.jsx)("textarea",Object(r.a)(Object(r.a)({},t),c)),Object(s.jsx)("div",{children:o&&Object(s.jsx)("span",{children:n.error})})]})},l=function(e){var t=e.input,n=e.meta,c=Object(a.a)(e,o),u=n.error&&n.touched;return Object(s.jsxs)("div",{className:i.a.formControls+" "+(u?i.a.error:""),children:[Object(s.jsx)("input",Object(r.a)(Object(r.a)({},t),c)),Object(s.jsx)("div",{children:u&&Object(s.jsx)("span",{children:n.error})})]})}},63:function(e,t,n){"use strict";var r=n.p+"static/media/loading.4fe2dccd.svg",a=n(130),c=n.n(a),i=n(2);t.a=function(e){return Object(i.jsx)("img",{className:c.a.loading,src:r})}},65:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},67:function(e,t,n){e.exports={header:"Header_header__1yfDu",loginBlock:"Header_loginBlock__2gwkD"}},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"d",(function(){return m})),n.d(t,"g",(function(){return g})),n.d(t,"e",(function(){return v})),n.d(t,"c",(function(){return x})),n.d(t,"f",(function(){return y}));var r=n(9),a=n.n(r),c=n(15),i=n(37),s=n(5),u=n(30),o=n(13),d="my-app/profileReducer/ADD-POST",l="my-app/profileReducer/SET_USER_PROFILE",p="my-app/profileReducer/SET-STATUS",f="my-app/profileReducer/DELETE-POST",j="my-app/profileReducer/SAVE_PHOTO_SUCCESS",b={posts:[{id:1,message:"I'm react developer",like:"777"},{id:2,message:"Hi, how are you?",like:"1277"},{id:3,message:"Hi, I'm Dima",like:"2121"}],profile:null,status:""},h=function(e){return{type:d,addPostText:e}},O=function(e){return{type:p,status:e}},m=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(O(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(O(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n((a=r.data.data.photos,{type:j,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:l,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},y=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n,r){var c,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.saveProfile(e);case 2:if(c=t.sent,i=r().auth.id,0!==c.data.resultCode){t.next=8;break}n(x(i)),t.next=10;break;case 8:return n(Object(u.a)("edit-profile",{_error:c.data.messages[0]})),t.abrupt("return",Promise.reject(c.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:var n={id:4,message:t.addPostText,like:777};return Object(s.a)(Object(s.a)({},e),{},{posts:[].concat(Object(i.a)(e.posts),[n]),newPostText:""});case l:return Object(s.a)(Object(s.a)({},e),{},{profile:t.profile});case p:return Object(s.a)(Object(s.a)({},e),{},{status:t.status});case f:return Object(s.a)(Object(s.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.id}))});case j:return Object(s.a)(Object(s.a)({},e),{},{profile:Object(s.a)(Object(s.a)({},e.profile),{},{photos:t.photos})});default:return e}}}},[[285,1,2]]]);
//# sourceMappingURL=main.90cba54f.chunk.js.map