(function(e){function t(t){for(var a,r,s=t[0],c=t[1],u=t[2],l=0,d=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);m&&m(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var s=n[r];0!==i[s]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},i={app:0},o=[];function s(e){return c.p+"js/"+({announcement:"announcement",corevalues:"corevalues",departments:"departments",draw:"draw",entertainment:"entertainment",faqs:"faqs",feedback:"feedback",history:"history",hymn:"hymn",imgannouncement:"imgannouncement",menu:"menu",mivision:"mivision",organization:"organization",programs:"programs",qualitypolicy:"qualitypolicy",schoolofficials:"schoolofficials",squidgame:"squidgame",teldirectory:"teldirectory",tutorial:"tutorial",university:"university"}[e]||e)+"."+{announcement:"d0c934be",corevalues:"509e5c07",departments:"d6fc722e",draw:"b77ce726",entertainment:"b8768aaa",faqs:"48cd5373",feedback:"80f6cbbe",history:"fa25dd6e",hymn:"cc6e642c",imgannouncement:"2a086505",menu:"2ade67e4",mivision:"45259b69",organization:"c4e06332",programs:"21aa4d34",qualitypolicy:"f2f95264",schoolofficials:"ab5a3abe",squidgame:"27dcb5a7",teldirectory:"37a3004e",tutorial:"452cba66",university:"5e84f5bb"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={announcement:1,corevalues:1,departments:1,draw:1,entertainment:1,faqs:1,feedback:1,history:1,hymn:1,imgannouncement:1,menu:1,mivision:1,organization:1,programs:1,qualitypolicy:1,schoolofficials:1,squidgame:1,teldirectory:1,tutorial:1,university:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({announcement:"announcement",corevalues:"corevalues",departments:"departments",draw:"draw",entertainment:"entertainment",faqs:"faqs",feedback:"feedback",history:"history",hymn:"hymn",imgannouncement:"imgannouncement",menu:"menu",mivision:"mivision",organization:"organization",programs:"programs",qualitypolicy:"qualitypolicy",schoolofficials:"schoolofficials",squidgame:"squidgame",teldirectory:"teldirectory",tutorial:"tutorial",university:"university"}[e]||e)+"."+{announcement:"c68b13ab",corevalues:"945a12ac",departments:"93ed6d4d",draw:"940741a5",entertainment:"1014667f",faqs:"1014667f",feedback:"921a63ae",history:"fddb3b80",hymn:"ecfd3094",imgannouncement:"6ff093a9",menu:"bc4208d5",mivision:"49f15fea",organization:"7545ef04",programs:"627a4b4b",qualitypolicy:"fddb3b80",schoolofficials:"29aaceb2",squidgame:"f0718a69",teldirectory:"e9187e32",tutorial:"afd67610",university:"1014667f"}[e]+".css",i=c.p+a,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var u=o[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===i))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===a||l===i)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var a=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],m.parentNode.removeChild(m),n(o)},m.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){r[e]=0})));var a=i[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=i[e]=[t,n]}));t.push(a[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(m);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}i[e]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var m=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("keep-alive",[n("router-view")],1)],1)],1)},i=[],o=n("1da1"),s=(n("96cf"),{created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return document.title="Touchless Information Kiosk - Leyte Normal University",t.next=3,e.$store.dispatch("info/getMissionVision");case 3:return t.next=5,e.$store.dispatch("info/getCoreValues");case 5:return t.next=7,e.$store.dispatch("info/getOrganizations");case 7:return t.next=9,e.$store.dispatch("info/getSchoolOfficials");case 9:return t.next=11,e.$store.dispatch("info/getDepartments");case 11:return t.next=13,e.$store.dispatch("info/getTelDirectories");case 13:return t.next=15,e.$store.dispatch("info/getCourses");case 15:return t.next=17,e.$store.dispatch("info/getFAQs");case 17:return t.next=19,e.$store.dispatch("info/getPosts");case 19:return t.next=21,e.$store.dispatch("info/getImagePosts");case 21:case"end":return t.stop()}}),t)})))()}}),c=s,u=(n("034f"),n("2877")),l=Object(u["a"])(c,r,i,!1,null,null,null),d=l.exports,m=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"container vh-100"},[n("div",{staticClass:"d-flex flex-column h-100 g-0 justify-content-center text-white"},[e._m(0),n("div",{staticClass:"col-12 mt-5"},[n("div",{staticClass:"row gx-4"},[n("div",{staticClass:"col-4"},[n("router-link",{staticClass:"text-decoration-none text-white",attrs:{to:"/menu"}},[n("div",{staticClass:"card cursor-pointer"},[n("i",{staticClass:"fas fa-home card--icon"}),n("div",{staticClass:"position-absolute end-0 top-0"},[n("p",{staticClass:"mt-3 me-4 text-light fw-light"},[e._v("01")])]),n("div",{staticClass:"card-small"},[n("div",{staticClass:"card-content"},[n("h5",[e._v("Main Menu")])])])])])],1),n("div",{staticClass:"col-4"},[n("router-link",{staticClass:"text-decoration-none text-white",attrs:{to:"/announcement"}},[n("div",{staticClass:"card cursor-pointer"},[n("i",{staticClass:"fas fa-bullhorn card--icon"}),n("div",{staticClass:"position-absolute end-0 top-0"},[n("p",{staticClass:"mt-3 me-4 text-light fw-light"},[e._v("02")])]),n("div",{staticClass:"card-small"},[n("div",{staticClass:"card-content"},[n("h5",{},[e._v("Announcements")])])])])])],1),n("div",{staticClass:"col-4"},[n("router-link",{staticClass:"text-decoration-none text-white",attrs:{to:"/tutorial"}},[n("div",{staticClass:"card cursor-pointer"},[n("i",{staticClass:"fas fa-hand-paper card--icon"}),n("div",{staticClass:"position-absolute end-0 top-0"},[n("p",{staticClass:"mt-3 me-4 text-light fw-light"},[e._v("03")])]),n("div",{staticClass:"card-small"},[n("div",{staticClass:"card-content"},[n("h5",{},[e._v("Gesture Tutorial")])])])])])],1),e._m(1)])])]),e._m(2)])])},f=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"col-12"},[n("div",{staticClass:"row"},[n("h1",[e._v("Welcome")]),n("h5",{staticClass:"fw-light"},[e._v("Please select an option to begin.")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"mt-3 text-muted"},[e._v("This was made possible by "),n("a",{staticClass:"text-decoration-none",attrs:{href:"https://google.github.io/mediapipe/solutions/hands",target:"_"}},[e._v("MediaPipe Hands Model")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"official-lnu-text"},[e._v("LNU Official Website: "),n("a",{staticClass:"text-decoration-none",attrs:{href:"https://lnu.edu.ph",target:"_"}},[e._v("Click Here")])])}],h={name:"Home",data:function(){return{time:""}},mounted:function(){},methods:{}},v=h,g=(n("cccb"),Object(u["a"])(v,p,f,!1,null,null,null)),w=g.exports,b=function(){return n.e("feedback").then(n.bind(null,"6e7a"))},y=function(){return n.e("mivision").then(n.bind(null,"486a"))},E=function(){return n.e("corevalues").then(n.bind(null,"ba04"))},T=function(){return n.e("university").then(n.bind(null,"9ec7"))},C=function(){return n.e("teldirectory").then(n.bind(null,"e075"))},_=function(){return n.e("menu").then(n.bind(null,"ffd3"))},x=function(){return n.e("announcement").then(n.bind(null,"4683"))},S=function(){return n.e("imgannouncement").then(n.bind(null,"889f"))},O=function(){return n.e("entertainment").then(n.bind(null,"c1b5"))},R=function(){return n.e("draw").then(n.bind(null,"be15"))},k=function(){return n.e("squidgame").then(n.bind(null,"ebf5"))},L=function(){return n.e("hymn").then(n.bind(null,"877f"))},P=function(){return n.e("tutorial").then(n.bind(null,"818d"))},N=function(){return n.e("organization").then(n.bind(null,"2441"))},A=function(){return n.e("qualitypolicy").then(n.bind(null,"1b8c"))},I=function(){return n.e("history").then(n.bind(null,"b2e6"))},q=function(){return n.e("faqs").then(n.bind(null,"05ea"))},j=function(){return n.e("departments").then(n.bind(null,"c562"))},M=function(){return n.e("schoolofficials").then(n.bind(null,"b2ec"))},D=function(){return n.e("programs").then(n.bind(null,"0cc5"))};a["a"].use(m["a"]);var H=[{path:"/",name:"Home",component:w},{path:"/feedback",name:"Feedback",component:b},{path:"/menu",name:"Menu",component:_},{path:"/university",name:"University",component:T},{path:"/tutorial",name:"Tutorial",component:P},{path:"/university/teldirectory",name:"TelDirectory",component:C},{path:"/university/qualitypolicy",name:"QualityPolicy",component:A},{path:"/university/history",name:"History",component:I},{path:"/university/mission-vision",name:"MissionVision",component:y},{path:"/university/corevalues",name:"CoreValues",component:E},{path:"/university/faqs",name:"FAQs",component:q},{path:"/university/organization",name:"organization",component:N},{path:"/university/departments",name:"departments",component:j},{path:"/university/schoolofficials",name:"schoolofficials",component:M},{path:"/announcement",name:"Announcement",component:x},{path:"/announcement/highlights",name:"ImageAnnouncement",component:S},{path:"/hymn",name:"Hymn",component:L},{path:"/programs",name:"Programs",component:D},{path:"/entertainment",name:"Entertainment",component:O},{path:"/entertainment/draw",name:"Draw",component:R},{path:"/entertainment/squidgame",name:"SquidGame",component:k}],z=new m["a"]({mode:"history",base:"/",routes:H}),B=z,F=n("2f62"),$=n("bc3a"),U=n.n($),G=U.a.create({baseURL:"https://be.lnukiosk.live/api"}),V=G,Y={namespaced:!0,state:{missionvision:[{lnu_mission:"",lnu_vision:""}],core_values:[],departments:[],organizations:[],schoolofficials:[],teldirectories:[],colleges:[],faqs:[],posts:[],selectedOrgPost:[],selectedDepPost:[],imgposts:[]},getters:{GET_TUTORIAL:function(e){return e.isTutorial}},mutations:{SET_SELECTED_ORG_POST:function(e,t){e.selectedOrgPost=t},SET_SELECTED_DEP_POST:function(e,t){e.selectedDepPost=t},SET_TUTORIAL_STATE:function(e,t){e.isTutorial=t},SET_COURSES:function(e,t){e.colleges=t},SET_FAQS:function(e,t){e.faqs=t},SET_POSTS:function(e,t){e.posts=t},SET_IMAGE_POSTS:function(e,t){e.imgposts=t},SET_TEL_DIRECTORIES:function(e,t){e.teldirectories=t},SET_MISSION_VISION:function(e,t){e.missionvision=t},SET_CORE_VALUES:function(e,t){e.core_values=t},SET_DEPARTMENTS:function(e,t){e.departments=t},SET_ORGANIZATIONS:function(e,t){e.organizations=t},SET_SCHOOL_OFFICIALS:function(e,t){e.schoolofficials=t}},actions:{getSelectedDepPost:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,V.post("requestDepPost",t).then((function(e){return a("SET_SELECTED_DEP_POST",e.data),e})).catch((function(e){return e.response}));case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))()},getSelectedOrgPost:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,V.post("requestOrgPost",t).then((function(e){return a("SET_SELECTED_ORG_POST",e.data),e})).catch((function(e){return e.response}));case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))()},getImagePosts:function(e){return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,V.get("posts/images").then((function(e){return n("SET_IMAGE_POSTS",e.data),e})).catch((function(e){return e.response}));case 3:return a=t.sent,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})))()},getPosts:function(e){return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,V.get("/posts").then((function(e){return n("SET_POSTS",e.data),e})).catch((function(e){return e.response}));case 3:return a=t.sent,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})))()},getFAQs:function(e){return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,V.get("/faqs").then((function(e){return n("SET_FAQS",e.data),e})).catch((function(e){return e.response}));case 3:return a=t.sent,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})))()},getTelDirectories:function(e){return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,V.get("/teldirectories").then((function(e){return n("SET_TEL_DIRECTORIES",e.data),e})).catch((function(e){return e.response}));case 3:return a=t.sent,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})))()},getMissionVision:function(e){return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,V.get("/missionvision").then((function(e){return n("SET_MISSION_VISION",e.data),e})).catch((function(e){return e.response}));case 3:return a=t.sent,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})))()},getCoreValues:function(e){return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,V.get("/corevalues").then((function(e){return n("SET_CORE_VALUES",e.data),e})).catch((function(e){return e.response}));case 3:return a=t.sent,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})))()},getDepartments:function(e){return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,V.get("/departments").then((function(e){return n("SET_DEPARTMENTS",e.data),e})).catch((function(e){return e.response}));case 3:return a=t.sent,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})))()},getOrganizations:function(e){return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,V.get("/organizations").then((function(e){return n("SET_ORGANIZATIONS",e.data),e})).catch((function(e){return e.response}));case 3:return a=t.sent,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})))()},getSchoolOfficials:function(e){return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,V.get("/schoolofficials").then((function(e){return n("SET_SCHOOL_OFFICIALS",e.data),e})).catch((function(e){return e.response}));case 3:return a=t.sent,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})))()},getCourses:function(e){return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,V.get("/courses").then((function(e){return n("SET_COURSES",e.data),e})).catch((function(e){return e.response}));case 3:return a=t.sent,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})))()},sendReview:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,n.next=3,V.post("/review",t).then((function(e){return e})).catch((function(e){return e.response}));case 3:return a=n.sent,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})))()}}};a["a"].use(F["a"]);var X=new F["a"].Store({modules:{info:Y}}),Q=n("63e9"),W=n("d7b1"),J=(n("8561"),n("b85c")),K=(n("4057"),n("caad"),n("2532"),n("99af"),n("234b")),Z=n("68e4"),ee=n("cffa"),te=n("141c");window.onload=function(){var e=document.getElementsByClassName("pointer")[0],t=document.getElementsByClassName("timer")[0],n=document.getElementsByClassName("input_video")[0],a=document.getElementsByClassName("output_canvas")[0],r=a.getContext("2d"),i=document.getElementsByClassName("pointer")[0],s=document.getElementsByClassName("notif")[0],c=document.getElementsByClassName("notif-title")[0],u=document.getElementsByClassName("notif-message")[0];a.setAttribute("height",screen.height),a.setAttribute("width",screen.width);var l=!1,d=!1,m=!1;function p(e){if(d||(setTimeout((function(){document.getElementsByClassName("loader")[0].remove(),console.log("%cThis is still an experimental feature and may not be stable as you think.","color: orange; font-size: 1.2rem;"),console.log("%cThis was made possible by MediaPipe Hands Model.","color: blue; font-size: 1rem;")}),1200),d=!0),D(e.multiHandedness),P(e),0==e.multiHandLandmarks.length&&T&&x(),r.save(),r.clearRect(0,0,a.width,a.height),r.drawImage(e.image,0,0,a.width,a.height),0!=e.multiHandLandmarks.length&&e.multiHandedness){if("/tutorial"==window.location.pathname){var t=new CustomEvent("hands-shown");document.dispatchEvent(t)}for(var n=0;n<e.multiHandLandmarks.length;n++){var o=e.multiHandedness[n];if(m="Right"===o.label,e.multiHandLandmarks){var s,c=Object(J["a"])(e.multiHandLandmarks);try{for(c.s();!(s=c.n()).done;){var u=s.value;"/"!=window.location.pathname&&C(u,m);var l=u[4].x,p=u[4].y;l*=window.outerWidth-30,p*=window.innerHeight-20,i.style.left="".concat(l,"px"),i.style.top="".concat(p,"px"),"/entertainment/draw"!=window.location.pathname&&g(l,p);var h=[u[4],u[8]];k(f(h[0],h[1]),l,p),Object(Z["drawConnectors"])(r,u,K["HAND_CONNECTIONS"],{color:"#2d90a8",lineWidth:5}),Object(Z["drawLandmarks"])(r,u,{color:"#48f1f7",lineWidth:3})}}catch(v){c.e(v)}finally{c.f()}}}}r.restore()}function f(e,t){var n=Math.hypot(t.x-e.x,t.y-e.y);return n}var h,v="";function g(e,t){if(h=document.elementFromPoint(e,t),h){var n=h.parentElement;if(!n)return;w(n.className)&&(n.classList.add("border-hover"),""==v?v=n:v!==n&&(v.classList.remove("border-hover"),v=n))}}function w(e){if("string"==typeof e)return(e.includes("card")||e.includes("card-small")||e.includes("cardhover"))&&!e.includes("card-content")}var b=null,y=null,E=3,T=!1;function C(e,t){t?e[4].x>e[17].x?(_(),T=!0):x():e[4].x<e[17].x?(_(),T=!0):x()}function _(){T||(E=3,b=window.setInterval((function(){t.innerText="".concat(E),E--,E<0&&x()}),700),y=window.setTimeout((function(){history.back()}),2600))}function x(){3==E&&0==T||(clearInterval(b),E=3,t.innerText="•",clearTimeout(y),T=!1)}var S=0,O="none",R=null;function k(e,t,n){return L.apply(this,arguments)}function L(){return L=Object(o["a"])(regeneratorRuntime.mark((function e(t,n,a){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=document.elementFromPoint(n+22,a+22),t<.065?S++:("held"==O&&(O="released"),S>2&&S<7&&(H(),r&&(r.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,clientX:n+50,clientY:a,pageX:n+50,pageY:a})),["INPUT","TEXTAREA","BUTTON","A"].includes(r.nodeName)&&r.focus())),S=0),"/"==window.location.pathname&&"/menu"==window.location.pathname&&"/university"==window.location.pathname||(R=j(r),q(O,n,a)),"released"==O&&0==S?O="none":S>0&&S<=1?O="start":S>2&&(O="held");case 4:case"end":return e.stop()}}),e)}))),L.apply(this,arguments)}function P(t){e.style.display="flex",0==t.multiHandLandmarks.length?l||(ee["a"].to(".pointer",.5,{css:{scale:0,opacity:0}}),l=!0):l&&(ee["a"].to(".pointer",.5,{css:{scale:1,opacity:1}}),l=!1)}var N="none",A=0,I={y:0};function q(t,n,a){var r=document.elementFromPoint(n,a);"start"==t&&"start"!=N&&(N="start",0==A&&(A=a),r&&r.dispatchEvent(new MouseEvent("mousedown",{bubbles:!0,cancelable:!0,clientX:n+22,clientY:a+22,pageX:n+22,pageY:a+22})),"/university/history"!=window.location.pathname&&"/hymn"!=window.location.pathname&&"/announcement"!=window.location.pathname&&"/university/organization"!=window.location.pathname&&"/university/departments"!=window.location.pathname||(console.log(R),I.y=R.scrollY||0,console.log("------------------"),ee["a"].killTweensOf(I))),"held"==t&&(S>6&&"held"!=N&&(N="held","/entertainment/draw"==window.location.pathname?e.classList.add("pointer-interaction-draw"):e.classList.add("pointer-interaction")),"/university/history"!=window.location.pathname&&"/hymn"!=window.location.pathname&&"/announcement"!=window.location.pathname&&"/university/organization"!=window.location.pathname&&"/university/departments"!=window.location.pathname||setTimeout((function(){ee["a"].to(I,{y:I.y+1.5*(A-a),duration:1,overwrite:!0,immediateRender:!0,ease:"linear.easeNone"}),R.scrollTo(0,I.y),console.log(I.y)})),r&&r.dispatchEvent(new MouseEvent("mousemove",{bubbles:!0,cancelable:!0,clientX:n+22,clientY:a+22,pageX:n+22,pageY:a+22}))),"released"==t&&"released"!=N&&(N="released","/entertainment/draw"==window.location.pathname?e.classList.remove("pointer-interaction-draw"):e.classList.remove("pointer-interaction"),r&&r.dispatchEvent(new MouseEvent("mouseup",{bubbles:!0,cancelable:!0,clientX:n+22,clientY:a+22,pageX:n+22,pageY:a+22})),A=0)}function j(e){var t=e&&e.getBoundingClientRect?getComputedStyle(e):{};return e&&e.scrollHeight>e.clientHeight&&("auto"===t.overflow||"auto scroll"===t.overflow||"auto"===t.overflowY||"auto scroll"===t.overflowY)?e:e&&e.parentElement?j(e.parentElement):window}var M=!0;function D(e){if(M=0==e.length,M){if(M&&"block"==s.style.display)return;s.style.display="block",c.innerText="No Hands Detected",u.innerText="Please show your hands to the camera"}else s.style.display="none"}function H(){var e=document.querySelector(".ripple"),t=e.cloneNode(!0);t.classList.add("animate"),e.parentNode.replaceChild(t,e)}var z=Math.round(640/1.3),B=480;function F(){var e=new K["Hands"]({locateFile:function(e){return"".concat(window.location.origin,"/mediapipe/").concat(e)}});e.setOptions({maxNumHands:1,minDetectionConfidence:.8,minTrackingConfidence:.5,selfieMode:!0}),e.onResults(p);var t=new te["Camera"](n,{onFrame:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.send({image:n});case 2:case"end":return t.stop()}}),t)})));function a(){return t.apply(this,arguments)}return a}(),width:z,height:B});t.start()}var $=navigator.deviceMemory;$<8&&confirm("It appears that you only have ".concat($,"GB RAM. Unfortunately, to run this system smoothly you need atleast 8GB RAM, i7 8th Gen processor and a ( NVIDIA Graphics Card - Optional). ")),F()};n("6672"),n("f9e3"),n("2dd8"),n("15f5"),n("7051");a["a"].config.productionTip=!1,a["a"].use(Q["a"]),a["a"].use(W["a"]),window.addEventListener("load",(function(){setTimeout((function(){new a["a"]({router:B,store:X,render:function(e){return e(d)}}).$mount("#app")}),2e3)}))},"5ced":function(e,t,n){},6672:function(e,t,n){},8561:function(e,t){function n(){var e=document.createElement("div");e.classList.add("notif");var t=document.createElement("p");t.classList.add("notif-title"),t.innerText="Title goes here.",e.appendChild(t);var n=document.createElement("p");n.classList.add("notif-message"),n.innerText="Notification message goes here.",e.appendChild(n),document.body.appendChild(e)}function a(){n();var e=document.createElement("div");e.classList.add("loader");var t=document.createElement("span");t.classList.add("dot"),e.appendChild(t);var a=document.createElement("div");a.classList.add("dots"),e.appendChild(a);for(var r=1;r<=3;r++){var i=document.createElement("span");a.appendChild(i)}var o=document.createElement("h3");o.innerText="Loading Resources . .",o.classList.add("mt-3"),o.classList.add("fw-bold"),e.appendChild(o);var s=document.createElement("h5");s.innerText="Loading the machine learning model for the first time might take \n a while but it will be cached by your browser after then.",s.classList.add("mt-4"),s.classList.add("fw-light"),e.appendChild(s);var c=document.createElement("p");c.innerText="NOTE: Please make sure your area is well lit and \n use slow hand movements as possible",c.classList.add("mt-4"),c.classList.add("fw-light"),e.appendChild(c),document.body.appendChild(e);var u=document.createElement("canvas");u.classList.add("output_canvas"),document.body.appendChild(u);var l=document.createElement("video");l.classList.add("input_video"),document.body.appendChild(l);var d=document.createElement("div");d.classList.add("pointer"),document.body.appendChild(d);var m=document.createElement("p");m.classList.add("timer"),m.innerText="•",d.appendChild(m);var p=document.createElement("div");p.classList.add("ripple"),d.appendChild(p)}a()},"85ec":function(e,t,n){},cccb:function(e,t,n){"use strict";n("5ced")}});
//# sourceMappingURL=app.9d66dba0.js.map