(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6abaf02f"],{"1b9e":function(t,e,s){},4683:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[t.viewPost?n("div",{staticClass:"post-selected",on:{click:function(e){e.preventDefault(),t.viewPost=!1}}},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-6"},[n("div",{staticClass:"d-flex align-items-center"},[t._m(0),n("div",{staticClass:"d-flex flex-column ms-4 lh-0 mx-auto text-white",staticStyle:{"line-height":"1.2rem"}},[n("h5",[t._v(t._s(t.selectedPost.useraccount.userinfo.first_name)+" "+t._s(t.selectedPost.useraccount.userinfo.last_name))]),t.selectedPost.useraccount.userinfo.organization?n("h6",[t._v(t._s(t.selectedPost.useraccount.userinfo.organization.abbreviation?t.selectedPost.useraccount.userinfo.organization.abbreviation:t.selectedPost.useraccount.userinfo.organization.name)+" - "+t._s(t.selectedPost.useraccount.userinfo.role.role)+" ")]):n("h6",[t._v(t._s(t.selectedPost.useraccount.userinfo.department.abbreviation?t.selectedPost.useraccount.userinfo.department.abbreviation:t.selectedPost.useraccount.userinfo.department.name)+" - "+t._s(t.selectedPost.useraccount.userinfo.role.role)+" ")])]),t._m(1)]),n("div",{staticClass:"text-white mt-5",domProps:{innerHTML:t._s(t.selectedPost.postcontent.content)}})])]),n("p",{staticClass:"close-text"},[t._v("Click anywhere to close")])]):t._e(),n("div",{staticClass:"grid-container"},[t._m(2),n("main",{staticClass:"grid-item main"},[n("div",{ref:"horizontalpost",staticClass:"items",on:{mousedown:t.onMouseDown,mousemove:t.onMouseMove,mouseup:t.onMouseUp}},t._l(t.posts,(function(e,i){return n("div",{key:i,staticClass:"item item-post",attrs:{id:"introcard"},on:{click:function(s){return s.preventDefault(),t.setViewPost(e)}}},[e.postcontent.image?n("img",{staticClass:"card-img",attrs:{src:"https://be.lnukiosk.live/uploads/"+e.postcontent.image,alt:"..."}}):n("img",{staticClass:"card-img",attrs:{src:s("98cb"),alt:"..."}}),n("div",{staticClass:"card-img-overlay text-wrap p-4"},[n("h5",{staticClass:"card-title"},[t._v(t._s(e.postcontent.title))]),n("p",{staticClass:"card-text fw-light mt-3 ql-align-justify"},[t._v(t._s(e.postcontent.post_excerpt))])]),n("div",{staticClass:"added-by"},[n("p",[t._v(t._s(e.useraccount.userinfo.first_name)+" "+t._s(e.useraccount.userinfo.last_name))]),n("p",[t._v(t._s(e.useraccount.userinfo.role.role))])])])})),0)])]),n("return-gesture")],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("img",{staticClass:"rounded-pill",attrs:{src:s("9d64"),alt:"",height:"70",width:"70",loading:"lazy"}})},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"me-4"},[s("p",{staticClass:"mb-4 text-white"},[t._v("September 23, 2021")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title"},[s("h2",{staticClass:"text-center fw-light"},[t._v("ANNOUNCEMENTS")]),s("p",{staticClass:"text-subheading"},[t._v("Pinch and drag to scroll left or right")])])}],o=s("5530"),a=s("2f62"),c=s("d8ea"),r={components:{ReturnGesture:c["a"]},data:function(){return{selectedPost:{postcontent:{content:""},useraccount:{userinfo:{organization:{abbreviation:"",name:""},department:{abbreviation:"",name:""}}}},viewPost:!1}},computed:Object(o["a"])({},Object(a["b"])("info",["posts"])),mounted:function(){document.title="Post Section - Touchless Information Kiosk"},methods:{currentNumber:function(t){return t+1<10?"0".concat(t+1):t+1},onMouseDown:function(t){this.isDown=!0,this.startX=t.pageX-this.$refs.horizontalpost.offsetLeft,this.scrollLeft=this.$refs.horizontalpost.scrollLeft},onMouseUp:function(){this.isDown=!1},onMouseMove:function(t){if(this.isDown){t.preventDefault();var e=t.pageX-this.$refs.horizontalpost.offsetLeft,s=1.1*(e-this.startX);this.$refs.horizontalpost.scrollLeft=this.scrollLeft-s}},setViewPost:function(t){this.selectedPost=t,this.viewPost=!0}}},l=r,u=(s("5c3a"),s("2877")),f=Object(u["a"])(l,n,i,!1,null,null,null);e["default"]=f.exports},"5c3a":function(t,e,s){"use strict";s("1b9e")},"6dd9":function(t,e,s){t.exports=s.p+"img/return-transparent.9ba0fa62.gif"},"98cb":function(t,e,s){t.exports=s.p+"img/lnubldg1.0c9fd663.jpg"},"9d64":function(t,e,s){t.exports=s.p+"img/logo.f0462c8e.png"},"9dde":function(t,e,s){},d8ea:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"return-container"},[n("div",{staticClass:"d-flex"},[n("img",{staticClass:"img-fluid",attrs:{src:s("6dd9"),alt:""}}),n("div",{staticClass:"d-flex align-items-center"},[n("span",{staticClass:"return-text"},[t._v("Return to "),n("br"),t._v(" previous route")])])])])])}],o={},a=o,c=(s("fac7"),s("2877")),r=Object(c["a"])(a,n,i,!1,null,null,null);e["a"]=r.exports},fac7:function(t,e,s){"use strict";s("9dde")}}]);
//# sourceMappingURL=chunk-6abaf02f.841ce6ef.js.map