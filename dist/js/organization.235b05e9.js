(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["organization"],{"159b":function(t,e,s){var n=s("da84"),i=s("fdbc"),o=s("785a"),a=s("17c2"),r=s("9112"),c=function(t){if(t&&t.forEach!==a)try{r(t,"forEach",a)}catch(e){t.forEach=a}};for(var l in i)c(n[l]&&n[l].prototype);c(o)},"17c2":function(t,e,s){"use strict";var n=s("b727").forEach,i=s("a640"),o=i("forEach");t.exports=o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},2441:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.viewPost?n("div",{staticClass:"post-selected",on:{click:function(e){e.preventDefault(),t.viewPost=!1}}},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-8 col-lg-7"},[n("div",{staticClass:"d-flex align-items-center"},[t._m(0),n("div",{staticClass:"d-flex flex-column ms-4 lh-0 mx-auto text-white",staticStyle:{"line-height":"1.2rem"}},[n("h5",[t._v(t._s(t.selectedPost.useraccount.userinfo.first_name)+" "+t._s(t.selectedPost.useraccount.userinfo.last_name))]),n("h6",[t._v(" "+t._s(t.selectedPost.useraccount.userinfo.organization.abbreviation?t.selectedPost.useraccount.userinfo.organization.abbreviation:t.selectedPost.useraccount.userinfo.organization.name)+" - "+t._s(t.selectedPost.useraccount.userinfo.role.role)+" ")])]),n("div",{staticClass:"me-4"},[n("p",{staticClass:"mb-4 text-white"},[t._v(t._s(t.formatDate(t.selectedPost.created_at)))])])]),n("div",{staticClass:"text-white mt-5 announcement-text",domProps:{innerHTML:t._s(t.selectedPost.postcontent.content)}})])]),n("p",{staticClass:"close-text"},[t._v("Click anywhere to close")])]):t._e(),n("div",{staticClass:"container vh-100",class:t.viewAnnouncement?"":"hidden"},[n("div",{staticClass:"d-flex flex-column h-100 g-0 justify-content-center text-white"},[n("div",{staticClass:"col-12"},[n("h1",{staticClass:"text-uppercase fw-bold"},[t._v(t._s(t.orgSelected.abbreviation?t.orgSelected.abbreviation:t.orgSelected.name)+" Announcements")]),n("h5",{staticClass:"fw-light mt-4 mb-3"},[t._v("Select a card to view its content")]),n("button",{staticClass:"btn btn-primary btn-lg text-uppercase mb-3",on:{click:function(e){e.preventDefault(),t.viewAnnouncement=!1}}},[t._v("Return")]),n("h5",{directives:[{name:"show",rawName:"v-show",value:0==t.selectedOrgPost.length&&!t.isLoading,expression:"selectedOrgPost.length == 0 && !isLoading"}],staticClass:"fw-light mt-5"},[t._v("No Announcements available. Please try again later")])]),t.isLoading?n("div",{staticClass:"loading"},[t._m(1)]):n("div",{staticClass:"grid-container"},[n("main",{staticClass:"grid-item main"},[n("div",{ref:"popuppost",staticClass:"items",on:{mousedown:t.onMouseDownAnnouncement,mousemove:t.onMouseMoveAnnouncement,mouseup:t.onMouseUpAnnouncement}},t._l(t.selectedOrgPost,(function(e,s){return n("div",{key:s,staticClass:"item item-post",attrs:{id:"introcard"},on:{click:function(s){return s.preventDefault(),t.setViewPost(e)}}},[e.postcontent.image?n("img",{staticClass:"card-img item-img",attrs:{src:"https://be.lnukiosk.live/uploads/"+e.postcontent.image,alt:"..."}}):n("img",{staticClass:"card-img",attrs:{src:"https://be.lnukiosk.live/defaults/university-logo.png",alt:"..."}}),n("div",{staticClass:"card-img-overlay text-wrap p-4"},[n("h5",{staticClass:"card-title"},[t._v(t._s(e.postcontent.title))]),n("p",{staticClass:"card-text fw-light mt-3 ql-align-justify"},[t._v(t._s(e.postcontent.post_excerpt))])]),n("div",{staticClass:"added-by"},[n("p",[t._v(t._s(e.useraccount.userinfo.first_name)+" "+t._s(e.useraccount.userinfo.last_name))]),n("p",[t._v(t._s(e.useraccount.userinfo.role.role))])])])})),0)])])])]),n("div",{staticClass:"container vh-100",class:t.viewAnnouncement?"hidden":""},[n("div",{staticClass:"d-flex flex-column h-100 g-0 justify-content-center text-white"},[t._m(2),n("div",{staticClass:"grid-container"},[n("main",{staticClass:"grid-item main"},[n("div",{ref:"horizontal",staticClass:"items",on:{mousedown:t.onMouseDown,mousemove:t.onMouseMove,mouseup:t.onMouseUp}},t._l(t.organizations,(function(e,i){return n("div",{key:i,staticClass:"item item-post",attrs:{id:"introcard"},on:{click:function(s){t.orgSelected=e,t.requestOrgPost(e.name)}}},[n("div",{staticClass:"d-flex justify-content-end"},[n("p",{staticClass:"mt-3 me-4 fw-light"},[t._v(t._s(t.currentNumber(i)))])]),e.image?n("img",{staticClass:"item-img",attrs:{id:"introcard",src:"https://be.lnukiosk.live/uploads/"+e.image,alt:""}}):n("img",{staticClass:"item-img",attrs:{id:"introcard",src:s("9d64"),alt:""}}),n("div",{staticClass:"card-h100-content text-wrap text-uppercase"},[n("h5",[t._v(t._s(e.name))])])])})),0)])])])]),n("return-gesture")],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("img",{staticClass:"rounded-pill",attrs:{src:s("9d64"),alt:"",height:"70",width:"70",loading:"lazy"}})},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"spinner-border text-light ",staticStyle:{width:"3rem",height:"3rem"},attrs:{role:"status"}},[s("span",{staticClass:"visually-hidden"},[t._v("Loading...")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-12"},[s("h1",{staticClass:"text-uppercase fw-bold"},[t._v("Organizations")]),s("h5",{staticClass:"fw-light"},[t._v("Scroll to the left by pinch and drag to see more options")]),s("h5",{staticClass:"fw-light mt-5 mb-3"},[t._v("Select an organization to view its announcements")])])}],o=s("5530"),a=s("1da1"),r=(s("96cf"),s("fb6a"),s("2f62")),c=s("d8ea"),l={components:{ReturnGesture:c["a"]},data:function(){return{orgSelected:"",selectedPost:{postcontent:{content:""},useraccount:{userinfo:{organization:{abbreviation:"",name:""},department:{abbreviation:"",name:""}}}},viewAnnouncement:!1,viewPost:!1,numClicks:0,isLoading:!1}},methods:{detectClick:function(){if(this.numClicks++,1===this.numClicks){var t=this;setTimeout((function(){switch(t.numClicks){case 1:break;default:t.viewAnnouncement=!1}t.numClicks=0}),1450)}},formatDate:function(t){var e=new Date(t);return("0"+e.getDate()).slice(-2)+"-"+("0"+(e.getMonth()+1)).slice(-2)+"-"+e.getFullYear()+" "+("0"+e.getHours()).slice(-2)+":"+("0"+e.getMinutes()).slice(-2)},setViewPost:function(t){this.selectedPost=t,this.viewPost=!0,this.numClicks=0},requestOrgPost:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function s(){var n;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return e.isLoading=!0,e.viewAnnouncement=!0,n={name:t},s.next=5,e.$store.dispatch("info/getSelectedOrgPost",n);case 5:e.isLoading=!1;case 6:case"end":return s.stop()}}),s)})))()},currentNumber:function(t){return t+1<10?"0".concat(t+1):t+1},onMouseDown:function(t){this.isDown=!0,this.startX=t.pageX-this.$refs.horizontal.offsetLeft,this.scrollLeft=this.$refs.horizontal.scrollLeft},onMouseUp:function(){this.isDown=!1},onMouseMove:function(t){if(this.isDown){t.preventDefault();var e=t.pageX-this.$refs.horizontal.offsetLeft,s=1.4*(e-this.startX);this.$refs.horizontal.scrollLeft=this.scrollLeft-s}},onMouseDownAnnouncement:function(t){this.isDown=!0,this.startX=t.pageX-this.$refs.popuppost.offsetLeft,this.scrollLeft=this.$refs.popuppost.scrollLeft},onMouseUpAnnouncement:function(){this.isDown=!1},onMouseMoveAnnouncement:function(t){if(this.isDown){t.preventDefault();var e=t.pageX-this.$refs.popuppost.offsetLeft,s=1.6*(e-this.startX);this.$refs.popuppost.scrollLeft=this.scrollLeft-s}}},computed:Object(o["a"])({},Object(r["b"])("info",["organizations","selectedOrgPost"]))},u=l,f=(s("7cfb"),s("2877")),d=Object(f["a"])(u,n,i,!1,null,null,null);e["default"]=d.exports},"4de4":function(t,e,s){"use strict";var n=s("23e7"),i=s("b727").filter,o=s("1dde"),a=o("filter");n({target:"Array",proto:!0,forced:!a},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,s){"use strict";s.d(e,"a",(function(){return o}));s("b64b"),s("a4d3"),s("4de4"),s("e439"),s("159b"),s("dbb4");function n(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function i(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function o(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?i(Object(s),!0).forEach((function(e){n(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}},"5a41":function(t,e,s){},"6dd9":function(t,e,s){t.exports=s.p+"img/return-transparent.9ba0fa62.gif"},"7cfb":function(t,e,s){"use strict";s("5a41")},"9d64":function(t,e,s){t.exports=s.p+"img/logo.f0462c8e.png"},"9dde":function(t,e,s){},a640:function(t,e,s){"use strict";var n=s("d039");t.exports=function(t,e){var s=[][t];return!!s&&n((function(){s.call(null,e||function(){throw 1},1)}))}},b64b:function(t,e,s){var n=s("23e7"),i=s("7b0b"),o=s("df75"),a=s("d039"),r=a((function(){o(1)}));n({target:"Object",stat:!0,forced:r},{keys:function(t){return o(i(t))}})},d8ea:function(t,e,s){"use strict";var n=function(t,e){e._c;return e._m(0)},i=[function(t,e){var n=e._c;return n("div",[n("div",{staticClass:"return-container"},[n("div",{staticClass:"d-flex"},[n("img",{staticClass:"img-fluid",attrs:{src:s("6dd9"),alt:""}}),n("div",{staticClass:"d-flex align-items-center"},[n("span",{staticClass:"return-text"},[e._v("Return to "),n("br"),e._v(" previous route")])])])])])}],o={},a=o,r=(s("fac7"),s("2877")),c=Object(r["a"])(a,n,i,!0,null,null,null);e["a"]=c.exports},dbb4:function(t,e,s){var n=s("23e7"),i=s("83ab"),o=s("56ef"),a=s("fc6a"),r=s("06cf"),c=s("8418");n({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,s,n=a(t),i=r.f,l=o(n),u={},f=0;while(l.length>f)s=i(n,e=l[f++]),void 0!==s&&c(u,e,s);return u}})},e439:function(t,e,s){var n=s("23e7"),i=s("d039"),o=s("fc6a"),a=s("06cf").f,r=s("83ab"),c=i((function(){a(1)})),l=!r||c;n({target:"Object",stat:!0,forced:l,sham:!r},{getOwnPropertyDescriptor:function(t,e){return a(o(t),e)}})},fac7:function(t,e,s){"use strict";s("9dde")}}]);
//# sourceMappingURL=organization.235b05e9.js.map