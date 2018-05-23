webpackJsonp([1],{"+69Q":function(t,e){},"1Pxw":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={};n.d(s,"login",function(){return K}),n.d(s,"logout",function(){return X}),n.d(s,"resetSession",function(){return Q}),n.d(s,"fetchUser",function(){return Y}),n.d(s,"fetchJWToken",function(){return tt}),n.d(s,"setJWTToken",function(){return et}),n.d(s,"fetchLastEmails",function(){return nt}),n.d(s,"fetchNextEvent",function(){return st}),n.d(s,"setSidebar",function(){return rt}),n.d(s,"sendBotMessage",function(){return it});var r={};n.d(r,"getEmailBaseUrl",function(){return ot}),n.d(r,"getUserAvatarUrl",function(){return lt}),n.d(r,"getUserName",function(){return ct});var i=n("7+uW"),a=n("3EgV"),o=n.n(a),l=n("Rf8U"),c=n.n(l),u=n("mtWM"),v=n.n(u),h=n("Dd8w"),d=n.n(h),f=n("NYxO"),p={computed:d()({username:function(){return this.$store.state.session.user&&this.$store.state.session.user.firstname+" "+this.$store.state.session.user.lastname},sidebar:{get:function(){return this.$store.state.sidebar},set:function(t){this.$store.dispatch("setSidebar",t)}}},Object(f.b)(["getUserAvatarUrl"]))},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{attrs:{fixed:"",clipped:"",app:""},model:{value:t.sidebar,callback:function(e){t.sidebar=e},expression:"sidebar"}},[n("v-toolbar",{staticClass:"transparent",attrs:{flat:""}},[n("v-list",{staticClass:"pa-0"},[n("v-list-tile",{attrs:{avatar:""}},[n("v-list-tile-avatar",[n("img",{attrs:{src:t.getUserAvatarUrl}})]),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(t.username))])],1)],1)],1)],1),t._v(" "),n("v-list",{staticClass:"pt-0"},[n("v-divider")],1)],1)},staticRenderFns:[]},g={name:"App",computed:{sidebar:{get:function(){return this.$store.state.sidebar},set:function(t){this.$store.dispatch("setSidebar",t)}}},created:function(){var t=this;this.$auth.ready(function(){t.$store.dispatch("fetchUser")})},methods:{login:function(){this.$router.push({name:"Login"})},logout:function(){var t=this;this.$store.dispatch("logout").then(function(){t.$router.push({name:"Login"})})}},components:{Sidebar:n("VU/8")(p,m,!1,null,null,null).exports}},_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"app",dark:""}},[t.$auth.ready()?n("div",[t.$auth.check()?n("sidebar"):t._e(),t._v(" "),t.$auth.check()?n("v-toolbar",{attrs:{dark:"",fixed:"","clipped-left":"",app:""}},[n("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.sidebar=!t.sidebar}}}),t._v(" "),n("v-toolbar-title",[t._v("OctoPus")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-menu",{attrs:{bottom:"",left:""}},[n("v-btn",{attrs:{slot:"activator",icon:"",dark:""},slot:"activator"},[n("v-icon",[t._v("more_vert")])],1),t._v(" "),n("v-list",[t.$auth.check()?n("v-list-tile",{on:{click:function(e){e.preventDefault(),t.logout(e)}}},[n("v-list-tile-title",[t._v("Logout")])],1):t._e(),t._v(" "),n("v-list-tile",{attrs:{href:"https://github.com/chamerling/octopus",target:"_blank"}},[n("v-list-tile-title",[t._v("\n              About\n            ")])],1)],1)],1)],1):t._e(),t._v(" "),n("main",[n("v-content",[n("v-container",{attrs:{fluid:"","fill-height":""}},[n("v-layout",{attrs:{"justify-center":"","align-center":""}},[n("router-view")],1)],1)],1)],1)],1):t._e(),t._v(" "),t.$auth.ready()?t._e():n("div",[n("v-progress-circular",{attrs:{indeterminate:"",size:50,color:"primary"}})],1)])},staticRenderFns:[]};var b=n("VU/8")(g,_,!1,function(t){n("WTZX")},null,null).exports,E=n("/ocq"),y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-content",[n("v-container",{attrs:{fluid:"","fill-height":""}},[n("v-layout",{attrs:{"align-center":"","justify-center":""}},[n("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[n("v-card",{staticClass:"elevation-12"},[n("v-toolbar",[n("v-toolbar-title",[t._v("OpenPaaS Login")])],1),t._v(" "),n("v-card-text",[n("v-form",[n("v-text-field",{attrs:{"prepend-icon":"person",name:"login",label:"Login",type:"text"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),n("v-text-field",{attrs:{"prepend-icon":"lock",name:"password",label:"Password",id:"password",type:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{on:{click:t.login}},[t._v("Login")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},T=n("VU/8")({data:function(){return{email:null,password:null}},methods:{login:function(){var t=this;this.$auth.login({url:"api/jwt/generate",auth:{username:this.email,password:this.password},rememberMe:!1,redirect:{name:"Home"}}).then(function(e){return t.$store.dispatch("setJWTToken",e.data),t.$store.dispatch("fetchUser"),e.data},function(t){})}}},y,!1,null,null,null).exports,x={name:"ChatBot",data:function(){return{message:""}},computed:d()({messages:function(){return this.$store.state.bot.messages.list.slice().reverse()},progress:function(){return Math.min(100,10*this.message.length)},color:function(){return["error","warning","success"][Math.floor(this.progress/40)]}},Object(f.b)(["getUserAvatarUrl"])),methods:{sendMessage:function(){this.$store.dispatch("sendBotMessage",{content:this.message,createdAt:new Date,type:"user"}),this.message=""}},created:function(){var t=this;this.$bot.listen(/beer/,{description:"We can have beers 🍻"},function(t){t.replyText("Cheers 🍺")}),this.$bot.listen(/who/,{},function(e){e.replyText("You are "+t.$store.getters.getUserName)})}},k={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-form",{ref:"form",on:{submit:function(e){e.preventDefault(),t.sendMessage(e)}}},[n("v-text-field",{attrs:{color:"cyan darken",placeholder:"Ask the bot...",loading:""},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}},[n("v-progress-linear",{attrs:{slot:"progress",value:t.progress,height:"7",color:t.color},slot:"progress"})],1)],1),t._v(" "),n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-card",[n("v-list",[t._l(t.messages,function(e,s){return[n("v-list-tile",{key:e.title,attrs:{avatar:""}},["user"===e.type?n("v-list-tile-avatar",[n("img",{attrs:{src:t.getUserAvatarUrl}})]):t._e(),t._v(" "),"bot"===e.type?n("v-list-tile-avatar",[n("v-avatar",{attrs:{size:50}},[n("span",{staticClass:"botavatar"},[t._v("🐙")])])],1):t._e(),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",{domProps:{innerHTML:t._s(e.content)}})],1)],1),t._v(" "),e.component?n(e.component,t._b({key:e.title,tag:"component"},"component",e.data,!1)):t._e()]})],2)],1)],1)],1)],1)},staticRenderFns:[]};var w={name:"Home",components:{"chat-bot":n("VU/8")(x,k,!1,function(t){n("jcSu")},"data-v-b19a8b60",null).exports}},U={render:function(){var t=this.$createElement;return(this._self._c||t)("chat-bot")},staticRenderFns:[]},A=n("VU/8")(w,U,!1,null,null,null).exports,$={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{shrink:""}},[n("v-list",{attrs:{"three-line":""}},[t._l(t.emails,function(e,s){return[n("v-list-tile",{key:e.id,staticClass:"email",attrs:{avatar:""}},[n("v-list-tile-avatar",[n("v-avatar",{staticClass:"red",attrs:{size:40}},[n("span",{staticClass:"white--text headline"},[t._v(t._s(e.from.email[0].toUpperCase()))])])],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",{class:{unread:e.isUnread},domProps:{innerHTML:t._s(e.subject)}}),t._v(" "),n("v-list-tile-sub-title",{staticClass:"text--primary"},[t._v(t._s(e.from.email)+" - "+t._s(e.date))]),t._v(" "),n("v-list-tile-sub-title",{domProps:{innerHTML:t._s(e.preview)}})],1)],1),t._v(" "),s+1<t.emails.length?n("v-divider",{key:s}):t._e()]})],2)],1)],1)},staticRenderFns:[]};var S=n("VU/8")({name:"Emails",computed:{emails:function(){return this.$store.state.emails.list.slice().reverse()}},mounted:function(){this.$store.dispatch("fetchLastEmails")}},$,!1,function(t){n("+69Q")},"data-v-640dd25b",null).exports,C={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{shrink:""}},[n("v-list",{attrs:{"two-line":""}},[[n("v-list-tile",{staticClass:"event",attrs:{avatar:""}},[n("v-list-tile-avatar",[n("v-avatar",{staticClass:"red",attrs:{size:40}},[n("span",{staticClass:"white--text headline"},[t._v(t._s(t.event.organizer.cn[0].toUpperCase()))])])],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",{staticClass:"summary",domProps:{innerHTML:t._s(t.event.summary)}}),t._v(" "),n("v-list-tile-sub-title",{staticClass:"text--primary"},[t._v(t._s(t.event.start)+" - "+t._s(t.event.end))])],1)],1)]],2)],1)],1)},staticRenderFns:[]};var M=n("VU/8")({name:"Event",computed:{event:function(){return this.$store.state.events.next||{}}},mounted:function(){this.$store.dispatch("fetchNextEvent")}},C,!1,function(t){n("1Pxw")},"data-v-74489c56",null).exports;i.a.use(E.a);var H,L=new E.a({routes:[{path:"/",name:"Home",component:A,meta:{auth:!0}},{path:"/login",name:"Login",component:T,meta:{auth:!1}},{path:"/emails",name:"Emails",component:S,meta:{auth:!0}},{path:"/event",name:"Event",component:M,meta:{auth:!0}}]}),I=n("//Fk"),N=n.n(I),D=n("Zrlr"),j=n.n(D),F=n("wxAW"),P=n.n(F),R=n("+6sC"),B=n("Zx67"),O=n.n(B),W=n("zwoO"),V=n.n(W),z=n("Pf15"),J=n.n(z),G=function(t){function e(t){j()(this,e);var n=V()(this,(e.__proto__||O()(e)).call(this));return n.promiseProvider=t,n}return J()(e,t),P()(e,[{key:"post",value:function(t,e,n,s){return this.promiseProvider.newPromise(function(r,i){u({url:t,headers:e,method:"post",data:n,json:!s}).then(function(t){return r(t.data)}).catch(function(t){return i(t)})})}}]),e}(R.Transport),Z=["id","blobId","threadId","headers","subject","from","to","cc","bcc","replyTo","preview","date","isUnread","isFlagged","isDraft","hasAttachment","mailboxIds"],q=function(){function t(e){var n=e.url,s=e.token;j()(this,t),this.url=n,this.token="Bearer "+s,this.client=new R.Client(new G).withAPIUrl(this.url).withAuthenticationToken(this.token)}return P()(t,[{key:"getMailboxes",value:function(t){return this.client.getMailboxes().then(function(e){return e.filter(function(e){return e.role&&e.role.value===t})})}},{key:"getEmails",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"inbox",e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:["date desc"];return this.getMailboxes(t).then(function(t){return e.client.getMessageList({filter:{inMailboxes:t.map(function(t){return t.id})},collapseThreads:!1,fetchMessages:!1,limit:n,sort:s}).then(function(t){return t.getMessages({properties:Z})})})}}]),t}(),K=function(t){var e=t.commit;e("AUTHENTICATING",!0),e("AUTHENTICATED",!0)},X=function(t){var e=t.dispatch;return new N.a(function(t){i.a.auth.logout(),e("resetSession"),t()})},Q=function(t){var e=t.commit,n=t.dispatch;e("FETCH_USER",{}),n("setJWTToken",null)},Y=function(t){var e=t.commit;i.a.axios.get("api/user").then(function(t){e("FETCH_USER",t.data)})},tt=function(){return i.a.axios.post("api/jwt/generate").then(function(t){return t.data})},et=function(t,e){(0,t.commit)("SET_JWT_TOKEN",e)},nt=function(t){var e=t.commit,n=t.state,s=t.getters;new q({token:n.session.jwtToken,url:s.getEmailBaseUrl}).getEmails().then(function(t){return e("FETCH_LAST_EMAILS",t)})},st=function(t){var e=t.commit;i.a.axios.get("calendar/api/events/next").then(function(t){e("FETCH_NEXT_EVENT",t.data)})},rt=function(t,e){(0,t.commit)("SET_SIDERBAR",e)},it=function(t,e){(0,t.commit)("SEND_BOT_MESSAGE",e)},at=n("M4fF"),ot=function(t){var e=t.baseUrl+"/jmap";if(t.session.user){var n=at.find(t.session.user.configurations.modules,{name:"linagora.esn.unifiedinbox"});return at.find(n.configurations,{name:"api"}).value||e}return e},lt=function(t){return t.baseUrl+"/api/user/profile/avatar"},ct=function(t){return t.session.user&&t.session.user.firstname+" "+t.session.user.lastname},ut={sidebar:!0,baseUrl:"https://openpaas.linagora.com",bot:{messages:{list:[]}},emails:{list:[],jmapClient:null},events:{next:{}},session:{jwtToken:localStorage.getItem("default_auth_token"),user:null}},vt=(n("sax8"),[]),ht=n("bOdI"),dt=n.n(ht),ft=(H={},dt()(H,"AUTHENTICATED",function(t,e){t.session.authenticated=e}),dt()(H,"AUTHENTICATING",function(t,e){t.session.authenticating=e}),dt()(H,"FETCH_USER",function(t,e){t.session.user=e}),dt()(H,"FETCH_LAST_EMAILS",function(t,e){t.emails.list=e}),dt()(H,"FETCH_NEXT_EVENT",function(t,e){t.events.next=e}),dt()(H,"SET_JWT_TOKEN",function(t,e){t.session.jwtToken=e}),dt()(H,"SET_SIDERBAR",function(t,e){t.sidebar=e}),dt()(H,"SEND_BOT_MESSAGE",function(t,e){t.bot.messages.list.push(e)}),H);i.a.use(f.a);var pt=new f.a.Store({state:ut,actions:s,getters:r,mutations:ft,plugins:vt,strict:!1}),mt=function(){function t(e,n,s,r){j()(this,t),this.bot=e,this.message=n,this.match=s,this.options=r}return P()(t,[{key:"replyText",value:function(t){this.bot.send({content:t})}},{key:"reply",value:function(t){this.bot.send(t)}}]),t}(),gt=function(){function t(e,n,s,r){j()(this,t),this.bot=e,this.pattern=n,this.options=s,this.handler=r}return P()(t,[{key:"receive",value:function(t){var e=t.content,n=void 0;(n="function"==typeof this.pattern?this.pattern.match(e,this.bot):e.match(this.pattern))?this.handler(new mt(this.bot,t,n,this.options)):console.log("Text does not match pattern")}}]),t}(),_t=function(){function t(e){j()(this,t),this.options=e,this.store=e.store,this.listeners=[]}return P()(t,[{key:"configure",value:function(t){var e=this;t.forEach(function(t){return e.listen(t.pattern,t.options||{},t.handler||function(){})}),this.listen(/help/,{},function(t){var n=e.listeners.map(function(t){return t.options.description}).filter(function(t){return!!t})||[];n.length?n.forEach(function(e,n,s){return t.replyText(s.length-n+". "+e)}):t.replyText("I can do nothing, please check my API")})}},{key:"listen",value:function(t,e,n){this.listeners.push(new gt(this,t,e,n))}},{key:"start",value:function(){var t=this;this.store.subscribe(function(e){if("SEND_BOT_MESSAGE"===e.type){var n=e.payload;"user"===n.type&&t.listeners.forEach(function(t){return t.receive(n)})}}),this.send({content:'👋🏼 Hello! What can I do? (type "help" if you are lost)'})}},{key:"send",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.type=t.type||"bot",t.createdAt=t.createdAt||new Date,t.content=t.content||"I can not say anything...",this.store.commit("SEND_BOT_MESSAGE",t)}}]),t}(),bt={install:function(t,e){console.log("Installing VueBot...",e);var n=new _t(e);e.listeners&&e.listeners.length&&n.configure(e.listeners),n.start(),t.prototype.$bot=n}},Et={listeners:[{pattern:/last emails/i,options:{description:'I can display your last emails when you ask for "last emails"'},handler:function(t){t.reply({content:"Here are your last emails:",component:S})}},{pattern:/next event/i,options:{description:'I can display your next event when you ask for "next event"'},handler:function(t){t.reply({content:"Here is your next event:",component:M})}}]};n("tLzU");i.a.use(bt,{store:pt,listeners:Et.listeners}),i.a.use(o.a),i.a.use(c.a,v.a),i.a.router=L,v.a.defaults.baseURL=pt.state.baseUrl,i.a.config.productionTip=!1,i.a.use(n("MLZB"),{auth:n("aDKg"),http:n("E/+Z"),router:n("LFDJ"),refreshData:{enabled:!1},fetchData:{url:"api/user",method:"GET",enabled:!0}}),new i.a({el:"#app",router:L,store:pt,components:{App:b},template:"<App/>"})},WTZX:function(t,e){},aDKg:function(t,e){t.exports={request:function(t,e){this.options.http._setHeaders.call(this,t,{Authorization:"Bearer  "+e})},response:function(t){if(t.request.responseURL.endsWith("jwt/generate"))return t.data}}},jcSu:function(t,e){},tLzU:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.ed2a76814187e73641b0.js.map