(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["schoolofficials"],{"6dd9":function(t,s,e){t.exports=e.p+"img/return-transparent.9ba0fa62.gif"},"9dde":function(t,s,e){},b2ec:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"grid-container"},[t._m(0),e("main",{staticClass:"grid-item main"},[e("div",{ref:"horizontal",staticClass:"items",on:{mousedown:t.onMouseDown,mousemove:t.onMouseMove,mouseup:t.onMouseUp}},t._l(t.schoolofficials,(function(s,i){return e("div",{key:i,staticClass:"item officialcard",attrs:{id:"introcard"}},[e("div",{staticClass:"d-flex justify-content-end"},[e("p",{staticClass:"mt-3 me-4"},[t._v(t._s(t.currentNumber(i)))])]),e("div",{staticClass:"d-flex justify-content-center mt-4"},[s.image?e("b-avatar",{attrs:{size:"130",src:s.image?s.image:"",variant:"primary"}}):e("b-avatar",{attrs:{variant:"primary",size:"130"}})],1),e("div",{staticClass:"introcard-description"},[e("h6",{staticClass:"text-uppercase text-center"},[t._v(t._s(s.title)+" "+t._s(s.first_name)+" "+t._s(s.last_name))]),e("h6",{staticClass:"fw-light text-subheading text-center"},[e("small",[t._v(t._s(s.role))])]),e("h6",{staticClass:"fw-light text-subheading text-center"},[e("small",[t._v(t._s(s.email))])])])])})),0)])]),e("return-gesture")],1)},a=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"title"},[e("h2",{staticClass:"text-center "},[t._v("SCHOOL OFFICIALS")]),e("p",{staticClass:"text-subheading"},[t._v("Pinch and drag to scroll left or right")])])}],n=e("5530"),r=e("2f62"),o=e("d8ea"),c={components:{ReturnGesture:o["a"]},data:function(){return{}},methods:{currentNumber:function(t){return t+1<10?"0".concat(t+1):t+1},onMouseDown:function(t){this.isDown=!0,this.startX=t.pageX-this.$refs.horizontal.offsetLeft,this.scrollLeft=this.$refs.horizontal.scrollLeft},onMouseUp:function(){this.isDown=!1},onMouseMove:function(t){if(this.isDown){t.preventDefault();var s=t.pageX-this.$refs.horizontal.offsetLeft,e=1.4*(s-this.startX);this.$refs.horizontal.scrollLeft=this.scrollLeft-e}}},computed:Object(n["a"])({},Object(r["b"])("info",["schoolofficials"]))},l=c,u=e("2877"),f=Object(u["a"])(l,i,a,!1,null,null,null);s["default"]=f.exports},d8ea:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("div",{staticClass:"return-container"},[i("div",{staticClass:"d-flex"},[i("img",{staticClass:"img-fluid",attrs:{src:e("6dd9"),alt:""}}),i("div",{staticClass:"d-flex align-items-center"},[i("span",{staticClass:"return-text"},[t._v("Return to "),i("br"),t._v(" previous route")])])])])])}],n={},r=n,o=(e("fac7"),e("2877")),c=Object(o["a"])(r,i,a,!1,null,null,null);s["a"]=c.exports},fac7:function(t,s,e){"use strict";e("9dde")}}]);
//# sourceMappingURL=schoolofficials.8b6cb60c.js.map