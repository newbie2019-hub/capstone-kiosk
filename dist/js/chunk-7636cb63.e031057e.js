(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7636cb63"],{"1b9e":function(t,s,e){},4683:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{},[t.viewPost?i("div",{staticClass:"post-selected"},[i("div",{staticClass:"close-section",on:{click:function(s){s.preventDefault(),t.viewPost=!1}}},[i("p",[t._v("X")])]),i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-6"},[i("div",{staticClass:"d-flex align-items-center"},[t._m(0),t._m(1),t._m(2)]),i("div",{staticClass:"text-white mt-5",domProps:{innerHTML:t._s(t.selectedPost.postcontent.content)}})])])]):t._e(),i("div",{staticClass:"grid-container"},[t._m(3),i("main",{staticClass:"grid-item main"},[i("div",{ref:"horizontalpost",staticClass:"items",on:{mousedown:t.onMouseDown,mousemove:t.onMouseMove,mouseup:t.onMouseUp}},t._l(t.posts,(function(s,n){return i("div",{key:n,staticClass:"item item-post",attrs:{id:"introcard"},on:{click:function(e){return e.preventDefault(),t.setViewPost(s)}}},[i("img",{staticClass:"card-img",attrs:{src:e("bc57"),alt:"..."}}),i("div",{staticClass:"card-img-overlay text-wrap p-4"},[i("h5",{staticClass:"card-title"},[t._v(t._s(s.postcontent.title))]),i("p",{staticClass:"card-text fw-light mt-3 ql-align-justify"},[t._v(t._s(s.postcontent.post_excerpt))])]),i("div",{staticClass:"added-by"},[i("p",[t._v("Added by: "+t._s(s.useraccount.userinfo.first_name))])])])})),0)])])])},n=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("img",{staticClass:"rounded-pill",attrs:{src:e("9d64"),alt:"",height:"70",width:"70",loading:"lazy"}})},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"d-flex flex-column ms-4 lh-0 mx-auto text-white",staticStyle:{"line-height":"1.2rem"}},[e("h5",[t._v("Genreve Fernandez")]),e("h6",[t._v("DIGITS, President")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"me-4"},[e("p",{staticClass:"mb-4 text-white"},[t._v("September 23, 2021")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"title"},[e("h2",{staticClass:"text-center fw-light"},[t._v("DEPARTMENTS")]),e("p",{staticClass:"text-muted"},[t._v("Pinch and drag to scroll left or right")])])}],o=e("5530"),c=e("2f62"),a={data:function(){return{selectedPost:{postcontent:{content:""}},viewPost:!1}},computed:Object(o["a"])({},Object(c["b"])("info",["posts"])),mounted:function(){document.title="Post Section - Touchless Information Kiosk"},methods:{currentNumber:function(t){return t+1<10?"0".concat(t+1):t+1},onMouseDown:function(t){this.isDown=!0,this.startX=t.pageX-this.$refs.horizontalpost.offsetLeft,this.scrollLeft=this.$refs.horizontalpost.scrollLeft},onMouseUp:function(){this.isDown=!1},onMouseMove:function(t){if(this.isDown){t.preventDefault();var s=t.pageX-this.$refs.horizontalpost.offsetLeft,e=1.1*(s-this.startX);this.$refs.horizontalpost.scrollLeft=this.scrollLeft-e}},setViewPost:function(t){this.selectedPost=t,this.viewPost=!0}}},r=a,l=(e("5c3a"),e("2877")),u=Object(l["a"])(r,i,n,!1,null,null,null);s["default"]=u.exports},"5c3a":function(t,s,e){"use strict";e("1b9e")},"9d64":function(t,s,e){t.exports=e.p+"img/logo.f0462c8e.png"}}]);
//# sourceMappingURL=chunk-7636cb63.e031057e.js.map