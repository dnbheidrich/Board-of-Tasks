(function(t){function e(e){for(var a,o,n=e[0],c=e[1],l=e[2],u=0,m=[];u<n.length;u++)o=n[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&m.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(m.length)m.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,n=1;n<s.length;n++){var c=s[n];0!==i[c]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=s[0]))}return t}var a={},i={app:0},r=[];function o(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=a,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(s,a,function(e){return t[e]}.bind(null,a));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var d=c;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"2d3c":function(t,e,s){},"2ede":function(t,e,s){"use strict";var a=s("eb4f"),i=s.n(a);i.a},"33cb":function(t,e,s){"use strict";var a=s("c0b9"),i=s.n(a);i.a},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("navbar"),s("router-view")],1)},r=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"navbar navbar-expand-lg navBg  text-white"},[s("router-link",{staticClass:"navbar-brand text-white",attrs:{to:{name:"home"}}},[t._v("Infinite")]),t._m(0),s("div",{staticClass:"collapse navbar-collapse text-white",attrs:{id:"navbarText"}},[s("ul",{staticClass:"navbar-nav mr-auto"},[s("li",{staticClass:"nav-item text-white",class:{active:"home"==t.$route.name}},[s("router-link",{staticClass:"nav-link text-white",attrs:{to:{name:"home"}}},[t._v("Home")])],1),t.$auth.isAuthenticated?s("li",{staticClass:"nav-item",class:{active:"boards"==t.$route.name}},[s("router-link",{staticClass:"nav-link text-white",attrs:{to:{name:"boards"}}},[t._v("My-Starboard")])],1):t._e()]),s("span",{staticClass:"navbar-text"},[t.$auth.isAuthenticated?s("button",{staticClass:"btn btn-danger",on:{click:t.logout}},[t._v("logout")]):s("button",{staticClass:"btn btn-success",on:{click:t.login}},[t._v("Login")])])])],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"bg-light navbar-toggler-icon"})])}],c=s("bc3a"),l=s.n(c);l.a.create({baseURL:"https://localhost:3000",withCredentials:!0});var d={name:"Navbar",methods:{async login(){await this.$auth.loginWithPopup(),this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile"),console.log("this.$auth.user: "),console.log(this.$auth.user)},async logout(){await this.$auth.logout({returnTo:"/"}),this.$store.dispatch("resetBearer"),this.$router.push({name:"home"})}}},u=d,m=(s("df89"),s("2877")),h=Object(m["a"])(u,o,n,!1,null,"69a662ab",null),p=h.exports,v=s("335d"),b={name:"App",async beforeCreate(){try{await Object(v["c"])(),this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile")}catch(t){this.$router.push({name:"home"})}},components:{Navbar:p}},f=b,g=(s("5c0b"),Object(m["a"])(f,i,r,!1,null,null,null)),C=g.exports,y=s("8c4f"),w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.$auth.isAuthenticated?s("div",{staticClass:"home containerfluid my-bg"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-12"},[s("h1",{staticClass:"text-primary"},[t._v("Welcome to Manage Infinite")]),t.$auth.isAuthenticated?s("h3",{staticClass:"text-primary"},[t._v("Welcome manage your starboard!")]):s("h3",{staticClass:"text-primary"},[t._v("Log-in to acess starboard ")])])])]):s("div",{staticClass:"home containerfluid my-bg2"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-12"},[s("h1",{staticClass:"text-primary"},[t._v("Welcome to Manage Infinite")]),t.$auth.isAuthenticated?s("h3",{staticClass:"text-primary"},[t._v("Welcome manage your starboard!")]):s("h3",{staticClass:"text-primary"},[t._v("Log-in to acess starboard ")])])])])},_=[],k={name:"home",data(){return{}},computed:{},methods:{},components:{}},$=k,B=(s("a937"),Object(m["a"])($,w,_,!1,null,"49ae1507",null)),x=B.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"boards my-bg container-fluid"},[t._m(0),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"m-4"},[a("form",{staticClass:"row justify-content-center",on:{submit:function(e){return e.preventDefault(),t.addBoard(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.title,expression:"newBoard.title"}],staticClass:"col-5",attrs:{type:"text",placeholder:"title",required:""},domProps:{value:t.newBoard.title},on:{input:function(e){e.target.composing||t.$set(t.newBoard,"title",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.description,expression:"newBoard.description"}],staticClass:"col-5",attrs:{type:"text",placeholder:"description"},domProps:{value:t.newBoard.description},on:{input:function(e){e.target.composing||t.$set(t.newBoard,"description",e.target.value)}}}),t._m(1)])])])]),t._l(t.boards,(function(e,i){return a("div",{key:e._id},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-10 offset-1"},[a("div",{staticClass:"bg-op row justify-content-around"},[a("h2",[a("router-link",{staticClass:"text-info col-6 align-middle",attrs:{to:{name:"board",params:{boardId:e._id}}}},[t._v(t._s(e.title))])],1),a("span",{staticClass:"col-2"}),a("img",{staticClass:"delete-icon col-2 img-fluid",attrs:{src:s("e692"),alt:""},on:{click:function(e){return t.deleteBoard(i)}}})])]),t._m(2,!0)])])}))],2)},T=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("h1",{staticClass:"text-light col-12 p-5"},[t._v("WELCOME TO THE BOARDS!!!")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"btn btn-secondary col-1",attrs:{type:"submit"}},[s("b",[t._v("+")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-12"},[s("br")])}],L={name:"boards",props:["boardData"],mounted(){this.$store.dispatch("getBoards")},data(){return{newBoard:{title:"",description:""}}},computed:{boards(){return this.$store.state.boards}},methods:{addBoard(){this.$store.dispatch("addBoard",this.newBoard),this.newBoard={title:"",description:""}},deleteBoard(t){let e=this.boards[t].id;this.$store.dispatch("deleteBoardById",e)}}},D=L,j=(s("8099"),Object(m["a"])(D,I,T,!1,null,"0b3d25b0",null)),E=j.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"board my-bg container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 text-right "},[a("img",{staticClass:"delete-icon img-fluid",attrs:{src:s("e692"),alt:""},on:{click:function(e){return t.deleteThisBoard()}}})])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 p-4 text-light"},[t.board.title?a("h1",[a("b",[t._v(t._s(t.board.title))]),t._v(" : "+t._s(t.board.description)+" ")]):a("h1",[t._v("Loading...Why?!")]),a("p",[t._v(t._s(t.board.creatorEmail))])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("form",{staticClass:"row justify-content-center",on:{submit:function(e){return e.preventDefault(),t.addList(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newList.title,expression:"newList.title"}],staticClass:"col-8",attrs:{type:"text",placeholder:"title",required:""},domProps:{value:t.newList.title},on:{input:function(e){e.target.composing||t.$set(t.newList,"title",e.target.value)}}}),t._m(0)])]),t._m(1)]),a("div",{staticClass:"row",attrs:{id:"list-section"}},[a("div",{staticClass:"col-12"},t._l(t.lists,(function(t,e){return a("list",{key:t._id,attrs:{listData:t}})})),1)])])},P=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"col-2 btn btn-secondary",attrs:{type:"submit"}},[s("b",[t._v("+")]),t._v(" List")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-12"},[s("br")])}],A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"list row text-center"},[a("div",{staticClass:"col-12 text-right bg-op"},[a("img",{staticClass:"delete-icon img-fluid",attrs:{src:s("e692"),alt:""},on:{click:function(e){return t.deleteThisList()}}}),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 text-info p-3 text-left"},[a("h2",{},[t._v(t._s(t.listData.title))]),a("form",{staticClass:"row",on:{submit:function(e){return e.preventDefault(),t.addTask(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newTask.title,expression:"newTask.title"}],staticClass:"col-8 offset-1",attrs:{type:"text",placeholder:"add task",required:""},domProps:{value:t.newTask.title},on:{input:function(e){e.target.composing||t.$set(t.newTask,"title",e.target.value)}}}),t._m(0)])]),a("div",{staticClass:"col-8 offset-2"},t._l(t.tasks,(function(t){return a("task",{key:t._id,attrs:{taskData:t}})})),1),t._m(1)])]),t._m(2)])},M=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"col-2 btn btn-secondary",attrs:{type:"submit"}},[s("b",[t._v("+")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-12"},[s("br")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-12 no-bg"},[s("br")])}],S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"task row my-bg bg-info justify-content-around"},[a("div",{staticClass:"col-11 offset-0 text-left text-light p-2"},[a("div",{staticClass:"row justify-content-between bg-dark p-2"},[a("div",{staticClass:"col-2"},[a("div",{staticClass:"btn-group"},[a("button",{staticClass:"btn btn-primary dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}}),a("div",{staticClass:"dropdown-menu"},t._l(t.lists,(function(e,s){return e.id!=t.taskData.listId?a("a",{key:e._id,staticClass:"dropdown-item",on:{click:function(e){return t.moveTask(s)}}},[a("p",[t._v(t._s(e.title))])]):t._e()})),0)])]),a("div",{staticClass:"col-8 p-1"},[a("h5",[a("b",[t._v(t._s(t.taskData.title))])])]),a("div",{staticClass:"col-2"},[a("img",{staticClass:"delete-icon",attrs:{src:s("e692"),alt:""},on:{click:function(e){return t.deleteThisTask()}}})])])]),a("div",{staticClass:"col-10 offset-1 text-right p-3"},[a("div",{},[a("form",{staticClass:"row my-color",on:{submit:function(e){return e.preventDefault(),t.addComment(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newComment.title,expression:"newComment.title"}],staticClass:"col-10",attrs:{type:"text",placeholder:"comment",required:""},domProps:{value:t.newComment.title},on:{input:function(e){e.target.composing||t.$set(t.newComment,"title",e.target.value)}}}),t._m(0)])])]),a("div",{},[a("div",{staticClass:"col-8 offset-2 text-right p-2"},t._l(t.comments,(function(t){return a("comment",{key:t._id,attrs:{commentData:t}})})),1)])]),t._m(1)])},W=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"col-2 btn bg-secondary",attrs:{type:"submit"}},[s("b",[t._v("+")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("br")])])}],N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"comment text-left row justify-content-between"},[a("div",{staticClass:"col-8 text-secondary"},[t._v(" "+t._s(t.commentData.title)+" ")]),a("div",{staticClass:"col-2"},[a("img",{staticClass:"delete-icon",attrs:{src:s("e692"),alt:""},on:{click:function(e){return t.deleteThisComment()}}})])])},U=[],R={name:"comment",props:["commentData"],data(){return{}},computed:{},methods:{deleteThisComment(){let t=this.commentData.id,e=this.commentData.taskId;this.$store.dispatch("deleteCommentById",{id:t,taskId:e})}},components:{tasks(){return this.$store.state.tasks},comments(){return this.$store.state.comments}}},q=R,z=(s("2ede"),Object(m["a"])(q,N,U,!1,null,"e8294a1a",null)),G=z.exports,H={name:"task",props:["taskData"],mounted(){this.$store.dispatch("getCommentsbyTaskId",this.taskData.id)},data(){return{newComment:{title:"",taskId:this.taskData.id}}},computed:{tasks(){return this.$store.state.tasks},lists(){return this.$store.state.lists},comments(){return this.$store.state.comments[this.taskData.id]}},methods:{deleteThisTask(){let t=this.taskData.id,e=this.taskData.listId;this.$store.dispatch("deleteTaskById",{id:t,listId:e})},moveTask(t){let e=this.taskData.id,s=this.lists[t].id,a=this.taskData.listId;this.$store.dispatch("moveTaskToList",{id:e,listId:s,oldListId:a})},addComment(){this.$store.dispatch("addComment",this.newComment)}},components:{List:X,Comment:G}},J=H,K=(s("71d0"),Object(m["a"])(J,S,W,!1,null,"5390e673",null)),Y=K.exports,F={name:"list",props:["listData"],mounted(){this.$store.dispatch("getTasksbyListId",this.listData.id)},data(){return{newTask:{title:"",boardId:this.listData.boardId,listId:this.listData.id}}},computed:{list(){return this.$store.state.lists},tasks(){return this.$store.state.tasks[this.listData.id]}},methods:{addTask(){this.$store.dispatch("addTask",this.newTask)},deleteThisList(){let t=this.listData.id,e=this.listData.boardId;this.$store.dispatch("deleteListById",{id:t,boardId:e})}},components:{Task:Y}},Q=F,V=(s("e834"),Object(m["a"])(Q,A,M,!1,null,"2a120dce",null)),X=V.exports,Z={name:"board",props:[""],mounted(){this.$store.dispatch("getBoardById",this.$route.params.boardId),this.$store.dispatch("getListsByBoardId",this.$route.params.boardId)},data(){return{newList:{title:"",boardId:this.$route.params.boardId}}},computed:{board(){return this.$store.state.activeBoard},lists(){return this.$store.state.lists}},methods:{deleteThisBoard(){let t=this.$route.params.boardId;this.$store.dispatch("deleteThisBoard2",t)},addList(){this.$store.dispatch("addList",this.newList)}},components:{List:X}},tt=Z,et=(s("33cb"),Object(m["a"])(tt,O,P,!1,null,"6a99ce1f",null)),st=et.exports;a["a"].use(y["a"]);var at=new y["a"]({routes:[{path:"/",name:"home",component:x},{path:"/boards",name:"boards",component:E,beforeEnter:v["b"]},{path:"/boards/:boardId",name:"board",component:st,beforeEnter:v["b"]},{path:"*",redirect:"/"}]}),it=s("2f62");a["a"].use(it["a"]);let rt=window.location.host.includes("localhost")?"//localhost:3000/":"/",ot=l.a.create({baseURL:rt+"api/",timeout:3e3,withCredentials:!0});var nt=new it["a"].Store({state:{user:{},boards:[],lists:[],tasks:{},comments:{},activeBoard:{}},mutations:{setUser(t,e){t.user=e},setBoards(t,e){t.boards=e},setActiveBoard(t,e){t.activeBoard=e},setLists(t,e){t.lists=e},addList(t,e){t.lists.push(e)},setTasks(t,e){a["a"].set(t.tasks,e.listId,e.data)},addTask(t,e){t.tasks[e.listId].push(e)},setComments(t,e){a["a"].set(t.comments,e.taskId,e.data)},addComment(t,e){t.comments[e.taskId].push(e)}},actions:{setBearer({},t){ot.defaults.headers.authorization=t},resetBearer(){ot.defaults.headers.authorization=""},async getProfile({commit:t}){try{let e=await ot.get("/profile");t("setUser",e.data)}catch(e){console.error(e)}},getBoards({commit:t,dispatch:e}){ot.get("boards").then(e=>{t("setBoards",e.data)})},addBoard({commit:t,dispatch:e},s){ot.post("boards",s).then(t=>{e("getBoards")})},deleteBoardById({commit:t,dispatch:e},s){ot.delete("boards/"+s).then(t=>{e("getBoards")})},deleteThisBoard2({commit:t,dispatch:e},s){ot.delete("boards/"+s),at.push({name:"boards"})},async getBoardById({commit:t,dispatch:e},s){try{let e=await ot.get("boards/"+s);t("setActiveBoard",e.data)}catch(a){console.error(a)}},async getListsByBoardId({commit:t,dispatch:e},s){try{let e=await ot.get("boards/"+s+"/lists");t("setLists",e.data)}catch(a){console.error(a)}},async addList({commit:t,dispatch:e},s){try{let e=await ot.post("lists",s);t("addList",e.data)}catch(a){console.error(a)}},async deleteListById({commit:t,dispatch:e},{id:s,boardId:a}){try{await ot.delete("lists/"+s);e("getListsByBoardId",a)}catch(i){console.error(i)}},async getTasksbyListId({commit:t,dispatch:e},s){try{let e=await ot.get("lists/"+s+"/tasks");t("setTasks",{listId:s,data:e.data})}catch(a){console.error(a)}},async addTask({commit:t,dispatch:e},s){try{let e=await ot.post("tasks",s);t("addTask",e.data)}catch(a){console.error(a)}},async deleteTaskById({commit:t,dispatch:e},{id:s,listId:a}){try{await ot.delete("tasks/"+s);e("getTasksbyListId",a)}catch(i){console.error(i)}},async moveTaskToList({commit:t,dispatch:e},{id:s,listId:a,oldListId:i}){try{await ot.put("tasks/"+s,{listId:a});e("getTasksbyListId",a),e("getTasksbyListId",i)}catch(r){console.error(r)}},async getCommentsbyTaskId({commit:t,dispatch:e},s){try{let e=await ot.get("tasks/"+s+"/comments");t("setComments",{taskId:s,data:e.data})}catch(a){console.error(a)}},async addComment({commit:t,dispatch:e},s){try{let e=await ot.post("comments",s);t("addComment",e.data)}catch(a){console.error(a)}},async deleteCommentById({commit:t,dispatch:e},{id:s,taskId:a}){try{await ot.delete("comments/"+s);e("getCommentsbyTaskId",a)}catch(i){console.error(i)}}}});const ct="dev-sky.auth0.com",lt="https://demo-app-server.com",dt="TGmKGTo1D9TcKAeRmLmWlUfzjwwzE1lY";a["a"].use(v["a"],{domain:ct,clientId:dt,audience:lt,onRedirectCallback:t=>{at.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),new a["a"]({router:at,store:nt,render:function(t){return t(C)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var a=s("9c0c"),i=s.n(a);i.a},"71d0":function(t,e,s){"use strict";var a=s("b766"),i=s.n(a);i.a},8099:function(t,e,s){"use strict";var a=s("c729"),i=s.n(a);i.a},8502:function(t,e,s){},"9c0c":function(t,e,s){},a937:function(t,e,s){"use strict";var a=s("2d3c"),i=s.n(a);i.a},b766:function(t,e,s){},c0b9:function(t,e,s){},c729:function(t,e,s){},c99c:function(t,e,s){},df89:function(t,e,s){"use strict";var a=s("c99c"),i=s.n(a);i.a},e692:function(t,e,s){t.exports=s.p+"img/pop.f21ef304.png"},e834:function(t,e,s){"use strict";var a=s("8502"),i=s.n(a);i.a},eb4f:function(t,e,s){}});