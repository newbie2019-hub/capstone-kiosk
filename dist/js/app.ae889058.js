(function(t){function e(e){for(var r,a,o=e[0],c=e[1],u=e[2],l=0,d=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);m&&m(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,a=1;a<n.length;a++){var o=n[a];0!==i[o]&&(r=!1)}r&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},i={app:0},s=[];function o(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-0756cdf4":"5556e429","chunk-0d32a178":"af8b1795","chunk-1b137dd0":"91c758b7","chunk-1d1476ec":"4ab45ddc","chunk-2d2165b7":"a8b87a59","chunk-37611104":"9b1e3161","chunk-425987a6":"c46b1906","chunk-4e9397ab":"21539b47","chunk-762a17da":"b27b3e28","chunk-f1132b60":"1359c2d4"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-0756cdf4":1,"chunk-1d1476ec":1,"chunk-425987a6":1,"chunk-4e9397ab":1,"chunk-f1132b60":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-0756cdf4":"18c19680","chunk-0d32a178":"31d6cfe0","chunk-1b137dd0":"31d6cfe0","chunk-1d1476ec":"8c39511d","chunk-2d2165b7":"31d6cfe0","chunk-37611104":"31d6cfe0","chunk-425987a6":"94dd4d35","chunk-4e9397ab":"33e320a1","chunk-762a17da":"31d6cfe0","chunk-f1132b60":"b7c0c6d9"}[t]+".css",i=c.p+r,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var u=s[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===i))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],l=u.getAttribute("data-href");if(l===r||l===i)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var r=e&&e.target&&e.target.src||i,s=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete a[t],m.parentNode.removeChild(m),n(s)},m.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){a[t]=0})));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise((function(e,n){r=i[t]=[e,n]}));e.push(r[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(m);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}i[t]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var m=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},1896:function(t,e,n){t.exports=n.p+"img/university.c414bf60.jpg"},"256a":function(t,e,n){"use strict";n("79d6")},"4ba6":function(t,e,n){t.exports=n.p+"img/feedback.10d8b373.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.isTutorial?n("tutorial"):n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)},i=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"container mt-5"},[r("div",{staticClass:"grid-container-home"},[t._m(0),r("main",{staticClass:"grid-item main mt-1"},[r("div",{ref:"horizontal",staticClass:"items",on:{mousedown:t.onMouseDown,mousemove:t.onMouseMove,mouseup:t.onMouseUp}},[t._m(1),t._m(2),t._m(3),r("div",{staticClass:"item-tutorial"},[r("div",{staticClass:"item-tutorial-card",attrs:{id:"tutorialcard"},on:{click:t.setTutorialState}},[t._m(4),r("img",{attrs:{src:n("6fd4"),width:"",alt:""}}),r("div",{staticClass:"position-absolute ms-4 mb-3 pe-3 bottom-0 text-wrap lh-0 fw-light ",class:t.clickCount>0?"mb-4":""},[t._v(" "+t._s(0==t.clickCount?"To click an element, simply hover to an element and pinch and unpinch your fingers to click.":t.clickCount>=2?"Click this card "+(3-t.clickCount)+" more time to proceed to main menu":"Click this card "+(3-t.clickCount)+" more times to proceed to main menu")+" ")])])])])])])]),t._m(5)])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title-home"},[n("h2",{staticClass:"text-center"},[t._v("WELCOME, USER!")]),n("p",{staticClass:"text-center text-subheading"},[t._v("Please read and follow the instructions carefully")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"item-tutorial"},[r("div",{staticClass:"item-tutorial-card",attrs:{id:"tutorialcard"}},[r("div",{staticClass:"d-flex w-100"},[r("p",{staticClass:"mt-4 ms-4 fw-light"},[t._v("• 01")]),r("div",{staticClass:"d-flex w-100 justify-content-end"},[r("p",{staticClass:"mt-4 me-4 fw-light"},[t._v("SCROLL GESTURE")])])]),r("img",{attrs:{src:n("8984"),width:"",alt:""}}),r("div",{staticClass:"position-absolute ms-4 mb-3 bottom-0 text-wrap lh-0 fw-light "},[t._v(" To scroll, simply pinch your fingers and drag from left to right or vice-versa to scroll horizontally. ")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"item-tutorial"},[r("div",{staticClass:"item-tutorial-card",attrs:{id:"tutorialcard"}},[r("div",{staticClass:"d-flex w-100"},[r("p",{staticClass:"mt-4 ms-4 fw-light"},[t._v("• 02")]),r("div",{staticClass:"d-flex w-100 justify-content-end"},[r("p",{staticClass:"mt-4 me-4 fw-light"},[t._v("VERTICAL SCROLL")])])]),r("img",{attrs:{src:n("b864"),width:"",alt:""}}),r("div",{staticClass:"position-absolute ms-4 mb-3 pe-3 bottom-0 text-wrap lh-0 fw-light "},[t._v(" To scroll vertically, simply pinch your fingers and drag from top to bottom or vice-versa to scroll. ")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"item-tutorial"},[r("div",{staticClass:"item-tutorial-card",attrs:{id:"tutorialcard"}},[r("div",{staticClass:"d-flex w-100"},[r("p",{staticClass:"mt-4 ms-4 fw-light"},[t._v("• 03")]),r("div",{staticClass:"d-flex w-100 justify-content-end"},[r("p",{staticClass:"mt-4 me-4 fw-light"},[t._v("RETURN GESTURE")])])]),r("img",{attrs:{src:n("f72d"),width:"",alt:""}}),r("div",{staticClass:"position-absolute ms-4 mb-3 pe-3 bottom-0 text-wrap lh-0 fw-light "},[t._v(" To return, simply turn your hands to face your palm towards your face and wait for the countdown to reach zero ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex w-100"},[n("p",{staticClass:"mt-4 ms-4 fw-light"},[t._v("• 04")]),n("div",{staticClass:"d-flex w-100 justify-content-end"},[n("p",{staticClass:"mt-4 me-4 fw-light"},[t._v("CLICK GESTURE")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tutorial-note"},[n("p",[t._v("Please use slow hand movements")])])}],c={data:function(){return{clickCount:0}},methods:{setTutorialState:function(){this.clickCount>=2?this.$store.commit("info/SET_TUTORIAL_STATE",!1):this.clickCount++},onMouseDown:function(t){this.isDown=!0,this.startX=t.pageX-this.$refs.horizontal.offsetLeft,this.scrollLeft=this.$refs.horizontal.scrollLeft},onMouseUp:function(){this.isDown=!1},onMouseMove:function(t){if(this.isDown){t.preventDefault();var e=t.pageX-this.$refs.horizontal.offsetLeft,n=1.2*(e-this.startX);this.$refs.horizontal.scrollLeft=this.scrollLeft-n}}}},u=c,l=(n("256a"),n("2877")),d=Object(l["a"])(u,s,o,!1,null,null,null),m=d.exports,f={components:{Tutorial:m},computed:{isTutorial:function(){return this.$store.getters["info/GET_TUTORIAL"]}}},h=f,p=(n("034f"),Object(l["a"])(h,a,i,!1,null,null,null)),v=p.exports,_=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(35),t._m(36),t._m(37)])},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("hr",{staticClass:"mb-5 mt-2 bg-white zindex-999"})},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h5",[t._v("University")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("A leading university of education and diverse disciplines attuned to local and global development needs")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card"},[r("img",{attrs:{src:n("1896"),alt:""}}),r("div",{staticClass:"card-content"},[t._m(1),t._m(2)]),r("div",{staticClass:"card-border card-border-university"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{staticClass:"text-decoration-none",attrs:{to:"/university"}},[t._m(3)])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("img",{attrs:{src:n("4ba6"),alt:""}})},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h5",[t._v("Feedback")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("To help us improve our system please leave a some review.")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-content"},[t._m(6),t._m(7)])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-border card-border-feedback "})},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("div",{staticClass:"card-small"},[t._m(5),t._m(8)]),t._m(9)])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{staticClass:"text-decoration-none",attrs:{to:"/feedback"}},[t._m(10)])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-6 col-lg-3"},[t._m(11)],1)},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("img",{attrs:{src:n("751c"),alt:""}})},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h5",[t._v("COLLEGES")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("See what programs are offered by the university.")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-content"},[t._m(14),t._m(15)])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-border card-border-university "})},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[t._m(13),t._m(16),t._m(17)])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{staticClass:"text-decoration-none",attrs:{to:"/programs"}},[t._m(18)])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-6 col-lg-3"},[t._m(19)],1)},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-md-6 col-lg-6"},[t._m(4)],1),t._m(12),t._m(20)])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("img",{attrs:{src:n("a941"),alt:""}})},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-border card-border-announcement"})},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{staticClass:"text-decoration-none",attrs:{to:"/announcement"}},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-small"},[t._m(22),n("div",{staticClass:"card-content"},[n("h5",[t._v("Announcement")]),n("p",[t._v("Stay updated with the University’s current events, announcements and news.")])])]),t._m(23)])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-6 col-lg-6"},[t._m(24)],1)},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("img",{attrs:{src:n("bc57"),alt:""}})},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h5",[t._v("Entertainment")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("Have some fun and learn other possibilities with touchless technology.")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-content"},[t._m(27),t._m(28)])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-border card-border-entertainment"})},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("div",{staticClass:"card-small"},[t._m(26),t._m(29)]),t._m(30)])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{staticClass:"text-decoration-none",attrs:{to:"/entertainment"}},[t._m(31)])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-6 col-lg-6"},[t._m(32)],1)},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row justify-content-center mt-2"},[t._m(25),t._m(33)])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container mb-5 pt-5"},[n("h2",{staticClass:"text-white mt-5"},[t._v("MAIN MENU")]),n("p",{staticClass:"text-muted"},[t._v("Show both of your hands to scroll")]),t._m(0),t._m(21),t._m(34)])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container mb-2 pt-5"},[n("core-value")],1)},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container mb-4 pt-5"},[n("mission-vision")],1)}],w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"grid-container-home"},[n("div",{staticClass:"title-home"},[n("h2",{},[t._v("CORE VALUES")]),n("p",{staticClass:"text-muted"},[t._v("Pinch and drag to scroll left or right")]),t._m(0)]),n("main",{staticClass:"grid-item main"},[n("div",{ref:"horizontal",staticClass:"items",on:{mousedown:t.onMouseDown,mousemove:t.onMouseMove,mouseup:t.onMouseUp}},t._l(t.core_values,(function(e,r){return n("div",{key:r,staticClass:"item-corevalues",attrs:{id:"introcard"}},[n("div",{staticClass:"text-wrap"},[n("blockquote",[n("h2",{staticClass:"font-title"},[t._v(t._s(e.core_value))]),n("h5",{staticClass:"font-description mt-4"},[t._v(t._s(e.description))])])])])})),0)])])])},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("hr",{staticClass:"mt-2 bg-white zindex-999"})}],E=n("5530"),y=n("2f62"),x={data:function(){return{}},computed:Object(E["a"])({},Object(y["b"])("info",["core_values"])),methods:{currentNumber:function(t){return t+1<10?"0".concat(t+1):t+1},onMouseDown:function(t){this.isDown=!0,this.startX=t.pageX-this.$refs.horizontal.offsetLeft,this.scrollLeft=this.$refs.horizontal.scrollLeft},onMouseUp:function(){this.isDown=!1},onMouseMove:function(t){if(this.isDown){t.preventDefault();var e=t.pageX-this.$refs.horizontal.offsetLeft,n=1.3*(e-this.startX);this.$refs.horizontal.scrollLeft=this.scrollLeft-n}}}},k=x,T=(n("bf77"),Object(l["a"])(k,w,C,!1,null,null,null)),S=T.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"grid-container-home"},[n("div",{staticClass:"title-home"},[n("h2",{},[t._v("MISSION AND VISION")]),n("p",{staticClass:"text-muted"},[t._v("Pinch and drag to scroll left or right")]),t._m(0)]),n("main",{staticClass:"grid-item main"},[n("div",{ref:"horizontalmv",staticClass:"items",on:{mousedown:t.onMouseDown,mousemove:t.onMouseMove,mouseup:t.onMouseUp}},[n("div",{staticClass:"item-corevalues",attrs:{id:"introcard"}},[n("div",{staticClass:"text-wrap"},[n("blockquote",[n("h2",{staticClass:"font-title text-uppercase"},[t._v("Mission")]),n("h2",{staticClass:"mt-5"},[t._v(t._s(t.missionvision[0].lnu_mission))])])])]),n("div",{staticClass:"item-corevalues",attrs:{id:"introcard"}},[n("div",{staticClass:"text-wrap"},[n("blockquote",[n("h2",{staticClass:"font-title"},[t._v("Vision")]),n("h2",{staticClass:"mt-5"},[t._v(t._s(t.missionvision[0].lnu_vision))])])])])])])])])},L=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("hr",{staticClass:"mt-2 bg-white zindex-999"})}],$={computed:Object(E["a"])({},Object(y["b"])("info",["missionvision"])),methods:{currentNumber:function(t){return t+1<10?"0".concat(t+1):t+1},onMouseDown:function(t){this.isDown=!0,this.startX=t.pageX-this.$refs.horizontalmv.offsetLeft,this.scrollLeft=this.$refs.horizontalmv.scrollLeft},onMouseUp:function(){this.isDown=!1},onMouseMove:function(t){if(this.isDown){t.preventDefault();var e=t.pageX-this.$refs.horizontalmv.offsetLeft,n=1.3*(e-this.startX);this.$refs.horizontalmv.scrollLeft=this.scrollLeft-n}}}},R=$,M=(n("e3fe"),Object(l["a"])(R,O,L,!1,null,null,null)),N=M.exports,j={name:"Home",mounted:function(){document.title="Touchless Information Kiosk - Main Menu"},components:{CoreValue:S,MissionVision:N}},A=j,I=Object(l["a"])(A,g,b,!1,null,null,null),D=I.exports,z=function(){return n.e("chunk-1d1476ec").then(n.bind(null,"6e7a"))},H=function(){return n.e("chunk-1b137dd0").then(n.bind(null,"9ec7"))},U=function(){return n.e("chunk-425987a6").then(n.bind(null,"e075"))},P=function(){return n.e("chunk-f1132b60").then(n.bind(null,"4683"))},X=function(){return n.e("chunk-2d2165b7").then(n.bind(null,"c1b5"))},B=function(){return n.e("chunk-4e9397ab").then(n.bind(null,"877f"))},F=function(){return n.e("chunk-762a17da").then(n.bind(null,"2441"))},V=function(){return n.e("chunk-0d32a178").then(n.bind(null,"c562"))},Y=function(){return n.e("chunk-37611104").then(n.bind(null,"b2ec"))},G=function(){return n.e("chunk-0756cdf4").then(n.bind(null,"0cc5"))};r["a"].use(_["a"]);var q=[{path:"/",name:"Home",component:D},{path:"/feedback",name:"Feedback",component:z},{path:"/university",name:"University",component:H},{path:"/university/teldirectory",name:"TelDirectory",component:U},{path:"/university/organization",name:"organization",component:F},{path:"/university/departments",name:"departments",component:V},{path:"/university/schoolofficials",name:"schoolofficials",component:Y},{path:"/announcement",name:"Announcement",component:P},{path:"/hymn",name:"Hymn",component:B},{path:"/programs",name:"Programs",component:G},{path:"/entertainment",name:"Entertainment",component:X}],W=new _["a"]({mode:"history",base:"/",routes:q}),Q=W,K=n("1da1"),J=(n("96cf"),n("bc3a")),Z=n.n(J),tt=Z.a.create({baseURL:"https://be.lnukiosk.live/api"}),et=tt,nt={namespaced:!0,state:{missionvision:[{lnu_mission:"",lnu_vision:""}],core_values:[],departments:[],organizations:[],schoolofficials:[],teldirectories:[],colleges:[],faqs:[],posts:[],isTutorial:!0},getters:{GET_TUTORIAL:function(t){return t.isTutorial}},mutations:{SET_TUTORIAL_STATE:function(t,e){t.isTutorial=e},SET_COURSES:function(t,e){t.colleges=e},SET_FAQS:function(t,e){t.faqs=e},SET_POSTS:function(t,e){t.posts=e},SET_TEL_DIRECTORIES:function(t,e){t.teldirectories=e},SET_MISSION_VISION:function(t,e){t.missionvision=e},SET_CORE_VALUES:function(t,e){t.core_values=e},SET_DEPARTMENTS:function(t,e){t.departments=e},SET_ORGANIZATIONS:function(t,e){t.organizations=e},SET_SCHOOL_OFFICIALS:function(t,e){t.schoolofficials=e}},actions:{getPosts:function(t){return Object(K["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,et.get("/posts").then((function(t){return n("SET_POSTS",t.data),t})).catch((function(t){return t.response}));case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))()},getFAQs:function(t){return Object(K["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,et.get("/faqs").then((function(t){return n("SET_FAQS",t.data),t})).catch((function(t){return t.response}));case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))()},getTelDirectories:function(t){return Object(K["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,et.get("/teldirectories").then((function(t){return n("SET_TEL_DIRECTORIES",t.data),t})).catch((function(t){return t.response}));case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))()},getMissionVision:function(t){return Object(K["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,et.get("/missionvision").then((function(t){return n("SET_MISSION_VISION",t.data),t})).catch((function(t){return t.response}));case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))()},getCoreValues:function(t){return Object(K["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,et.get("/corevalues").then((function(t){return n("SET_CORE_VALUES",t.data),t})).catch((function(t){return t.response}));case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))()},getDepartments:function(t){return Object(K["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,et.get("/departments").then((function(t){return n("SET_DEPARTMENTS",t.data),t})).catch((function(t){return t.response}));case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))()},getOrganizations:function(t){return Object(K["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,et.get("/organizations").then((function(t){return n("SET_ORGANIZATIONS",t.data),t})).catch((function(t){return t.response}));case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))()},getSchoolOfficials:function(t){return Object(K["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,et.get("/schoolofficials").then((function(t){return n("SET_SCHOOL_OFFICIALS",t.data),t})).catch((function(t){return t.response}));case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))()},getCourses:function(t){return Object(K["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,et.get("/courses").then((function(t){return n("SET_COURSES",t.data),t})).catch((function(t){return t.response}));case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))()},sendReview:function(t,e){return Object(K["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.commit,n.next=3,et.post("/review",e).then((function(t){return t})).catch((function(t){return t.response}));case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))()}}};r["a"].use(y["a"]);var rt=new y["a"].Store({modules:{info:nt}}),at=n("63e9"),it=(n("8561"),n("b85c")),st=(n("4057"),n("caad"),n("2532"),n("99af"),n("234b")),ot=n("68e4"),ct=n("141c"),ut=n("cffa");window.onload=function(){var t=document.getElementsByClassName("pointer")[0],e=document.getElementsByClassName("timer")[0],n=document.getElementsByClassName("input_video")[0],r=document.getElementsByClassName("output_canvas")[0],a=r.getContext("2d"),i=document.getElementsByClassName("pointer")[0],s=document.getElementsByClassName("notif")[0],o=document.getElementsByClassName("notif-title")[0],c=document.getElementsByClassName("notif-message")[0];r.setAttribute("height",screen.height),r.setAttribute("width",screen.width);var u=!1,l=!1;function d(t){if(l||(setTimeout((function(){document.getElementsByClassName("loader")[0].remove(),console.clear(),console.log("%cThis is still an experimental feature and may not be stable as you think.","color: orange; font-size: 1.2rem;"),console.log("%cThis was made possible by MediaPipe Hands Model.","color: blue; font-size: 1rem;")}),1500),l=!0),H(t.multiHandedness),M(t),a.save(),a.clearRect(0,0,r.width,r.height),a.drawImage(t.image,0,0,r.width,r.height),0!=t.multiHandLandmarks.length&&t.multiHandedness){C(t);for(var e=0;e<t.multiHandLandmarks.length;e++){var n=t.multiHandedness[e];n.label;if(t.multiHandLandmarks){var s,o=Object(it["a"])(t.multiHandLandmarks);try{for(o.s();!(s=o.n()).done;){var c=s.value,u=c[4].x,d=c[4].y;u*=window.outerWidth-30,d*=window.outerHeight-100,i.style.left="".concat(u,"px"),i.style.top="".concat(d,"px"),p(u,d);var f=[c[4],c[8]];L(m(f[0],f[1]),u,d),Object(ot["drawConnectors"])(a,c,st["HAND_CONNECTIONS"],{color:"#2d90a8",lineWidth:5}),Object(ot["drawLandmarks"])(a,c,{color:"#48f1f7",lineWidth:3})}}catch(h){o.e(h)}finally{o.f()}}}}a.restore()}function m(t,e){var n=Math.hypot(e.x-t.x,e.y-t.y);return n}var f,h="";function p(t,e){if(f=document.elementFromPoint(t,e),f){var n=f.parentElement;if(!n)return;v(n.className)&&(n.classList.add("border-hover"),""==h?h=n:h!==n&&(h.classList.remove("border-hover"),h=n))}}function v(t){if("string"==typeof t)return(t.includes("card")||t.includes("card-small"))&&!t.includes("card-content")}var _=null,g=null,b=3,w=!1;function C(t){if("/"!=window.location.pathname)for(var e=t.multiHandLandmarks,n=t.multiHandedness,r=0;r<e.length;r++){var a=n[r],i="Right"===a.label;i?e[r][4].x>e[r][17].x?(E(),w=!0):y():e[r][4].x<e[r][17].x?(E(),w=!0):y()}else y()}function E(){w||(b=3,_=window.setInterval((function(){e.innerHTML="".concat(b),b--,b<0&&y(),R(3e3)}),1e3),g=window.setTimeout((function(){history.back()}),3400))}function y(){3==b&&0==w||(clearInterval(_),b=3,e.innerHTML="•",clearTimeout(g),w=!1)}var x=0,k=0,T="none",S=!1,O=null;function L(t,e,n){return $.apply(this,arguments)}function $(){return $=Object(K["a"])(regeneratorRuntime.mark((function t(e,n,r){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=document.elementFromPoint(n+22,r+22),e<.06?x++:(0!=x&&(k=x),x=0,"held"==T&&(T="released",S=!0)),I(T,n,r),O=D(a),"released"==T&&0==x?T="none":x>0&&x<=1?T="start":x>2&&(T="held"),!(k>15)){t.next=7;break}return t.abrupt("return");case 7:S&&0==x&&(U(),a&&(a.dispatchEvent(new MouseEvent("mousedown",{bubbles:!0,cancelable:!0,clientX:n+22,clientY:r+22,pageX:n+22,pageY:r+22})),a.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,clientX:n,clientY:r,pageX:n,pageY:r})),a.dispatchEvent(new MouseEvent("mouseup",{bubbles:!0,view:window,cancelable:!0,clientX:n+22,clientY:r+22,pageX:n+22,pageY:r+22})),["INPUT","TEXTAREA","BUTTON","A"].includes(a.nodeName)&&a.focus()),S=!1);case 8:case"end":return t.stop()}}),t)}))),$.apply(this,arguments)}function R(t){return new Promise((function(e){return setTimeout(e,t)}))}function M(e){t.style.display="flex",0==e.multiHandLandmarks.length?(u||ut["a"].to(".pointer",.5,{css:{opacity:0,scale:0}}),u=!0):(u&&ut["a"].to(".pointer",.5,{css:{scale:1,opacity:1}}),u=!1)}var N="none",j=0,A={y:0};function I(e,n,r){var a=document.elementFromPoint(n+22,r+22);"start"==e&&"start"!=N&&(N="start",0==j&&(j=r),a.dispatchEvent(new MouseEvent("mousedown",{bubbles:!0,cancelable:!0,clientX:n+22,clientY:r+22,pageX:n+22,pageY:r+22})),A.y=O.scrollY||O.scrollTop||0,ut["a"].killTweensOf(A)),"held"==e&&("held"!=N&&(N="held",t.classList.add("pointer-interaction")),ut["a"].to(A,{y:A.y+1.2*(j-r),duration:1,overwrite:!0,immediateRender:!0,ease:"linear.easeNone"}),O.scrollTo(0,A.y),a.dispatchEvent(new MouseEvent("mousemove",{bubbles:!0,cancelable:!0,clientX:n+22,clientY:r+22,pageX:n+22,pageY:r+22}))),"released"==e&&"released"!=N&&(N="released",t.classList.remove("pointer-interaction"),a.dispatchEvent(new MouseEvent("mouseup",{bubbles:!0,cancelable:!0,clientX:n+22,clientY:r+22,pageX:n+22,pageY:r+22})),j=0)}function D(t){var e=t&&t.getBoundingClientRect?getComputedStyle(t):{};return t&&t.scrollHeight>t.clientHeight&&("auto"===e.overflow||"auto scroll"===e.overflow||"auto"===e.overflowY||"auto scroll"===e.overflowY)?t:t&&t.parentElement?D(t.parentElement):window}var z=!0;function H(t){if(z=0==t.length,z){if(z&&"block"==s.style.display)return;s.style.display="block",o.innerText="No Hands Detected",c.innerText="Please show your hands to the camera"}else s.style.display="none"}function U(){var t=document.querySelector(".ripple"),e=t.cloneNode(!0);e.classList.add("animate"),t.parentNode.replaceChild(e,t)}function P(){var t=new st["Hands"]({locateFile:function(t){return"".concat(window.location.origin,"/mediapipe/").concat(t)}});t.setOptions({maxNumHands:1,minDetectionConfidence:.75,minTrackingConfidence:.7,modelComplexity:0,selfieMode:!0}),t.onResults(d);var e=new ct["Camera"](n,{onFrame:function(){var e=Object(K["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.send({image:n});case 2:case"end":return e.stop()}}),e)})));function r(){return e.apply(this,arguments)}return r}(),width:window.Width,height:window.Height});e.start()}function X(){return B.apply(this,arguments)}function B(){return B=Object(K["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,rt.dispatch("info/getMissionVision");case 2:return t.next=4,rt.dispatch("info/getCoreValues");case 4:return t.next=6,rt.dispatch("info/getOrganizations");case 6:return t.next=8,rt.dispatch("info/getSchoolOfficials");case 8:return t.next=10,rt.dispatch("info/getDepartments");case 10:return t.next=12,rt.dispatch("info/getTelDirectories");case 12:return t.next=14,rt.dispatch("info/getCourses");case 14:return t.next=16,rt.dispatch("info/getFAQs");case 16:return t.next=18,rt.dispatch("info/getPosts");case 18:case"end":return t.stop()}}),t)}))),B.apply(this,arguments)}var F=navigator.deviceMemory,V=navigator.hardwareConcurrency;console.log(V),F<8&&confirm("It appears that you only have ".concat(F,"GB RAM. Unfortunately, to run this system smoothly you need atleast 8GB RAM, i7 8th Gen processor and a ( NVIDIA Graphics Card - Optional). ")),X(),P()};n("6672"),n("f9e3"),n("2dd8"),n("15f5"),n("7051");r["a"].config.productionTip=!1,r["a"].use(at["a"]),window.addEventListener("load",(function(){setTimeout((function(){new r["a"]({router:Q,store:rt,render:function(t){return t(v)}}).$mount("#app")}),2500)}))},"5ea3":function(t,e,n){},6672:function(t,e,n){},"6fd4":function(t,e,n){t.exports=n.p+"img/click.33cf0e8f.gif"},"751c":function(t,e,n){t.exports=n.p+"img/university-logo.eda27af4.png"},"79d6":function(t,e,n){},8561:function(t,e){function n(){var t=document.createElement("div");t.classList.add("notif");var e=document.createElement("p");e.classList.add("notif-title"),e.innerText="Title goes here.",t.appendChild(e);var n=document.createElement("p");n.classList.add("notif-message"),n.innerText="Notification message goes here.",t.appendChild(n),document.body.appendChild(t)}function r(){n();var t=document.createElement("div");t.classList.add("loader");var e=document.createElement("span");e.classList.add("dot"),t.appendChild(e);var r=document.createElement("div");r.classList.add("dots"),t.appendChild(r);for(var a=1;a<=3;a++){var i=document.createElement("span");r.appendChild(i)}var s=document.createElement("p");s.innerText="\nLoading resources . .\n\n Setting up the model and data \n Loading the model for the first time might take a while \n but it will be cached by your browser after then.",s.classList.add("mt-1"),t.appendChild(s),document.body.appendChild(t);var o=document.createElement("canvas");o.classList.add("output_canvas"),document.body.appendChild(o);var c=document.createElement("video");c.classList.add("input_video"),document.body.appendChild(c);var u=document.createElement("div");u.classList.add("pointer"),document.body.appendChild(u);var l=document.createElement("p");l.classList.add("timer"),l.innerHTML="•",u.appendChild(l);var d=document.createElement("div");d.classList.add("ripple"),u.appendChild(d)}r()},"85ec":function(t,e,n){},8984:function(t,e,n){t.exports=n.p+"img/horizontal.cf1a5553.gif"},a15b:function(t,e,n){},a941:function(t,e,n){t.exports=n.p+"img/announcement.06e982e6.jpg"},b864:function(t,e,n){t.exports=n.p+"img/vertical.4409007c.gif"},bc57:function(t,e,n){t.exports=n.p+"img/entertainment.3f931cdc.jpg"},bf77:function(t,e,n){"use strict";n("5ea3")},e3fe:function(t,e,n){"use strict";n("a15b")},f72d:function(t,e,n){t.exports=n.p+"img/return.720a9197.gif"}});
//# sourceMappingURL=app.ae889058.js.map