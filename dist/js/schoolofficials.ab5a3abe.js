(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["schoolofficials"],{"159b":function(t,e,s){var i=s("da84"),a=s("fdbc"),r=s("785a"),c=s("17c2"),n=s("9112"),o=function(t){if(t&&t.forEach!==c)try{n(t,"forEach",c)}catch(e){t.forEach=c}};for(var l in a)o(i[l]&&i[l].prototype);o(r)},"17c2":function(t,e,s){"use strict";var i=s("b727").forEach,a=s("a640"),r=a("forEach");t.exports=r?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},4196:function(t,e,s){"use strict";s("b352")},"4de4":function(t,e,s){"use strict";var i=s("23e7"),a=s("b727").filter,r=s("1dde"),c=r("filter");i({target:"Array",proto:!0,forced:!c},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));s("b64b"),s("a4d3"),s("4de4"),s("e439"),s("159b"),s("dbb4");function i(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function a(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function r(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?a(Object(s),!0).forEach((function(e){i(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}},"6dd9":function(t,e,s){t.exports=s.p+"img/return-transparent.9ba0fa62.gif"},"9dde":function(t,e,s){},a640:function(t,e,s){"use strict";var i=s("d039");t.exports=function(t,e){var s=[][t];return!!s&&i((function(){s.call(null,e||function(){throw 1},1)}))}},b2ec:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"backdrop",class:t.cardClicked?"":"hidden",on:{click:function(e){e.preventDefault(),t.cardClicked=!1}}},[s("div",{staticClass:"item-schoolofficial"},[s("h5",{staticClass:"text-uppercase"},[t._v("University Official")]),t.selectedOfficial.image?s("b-avatar",{staticClass:"mt-3 mb-3",attrs:{size:"150",src:"http://127.0.0.1:8000/uploads/"+t.selectedOfficial.image}}):s("b-avatar",{attrs:{src:"@/assets/images/logo.png",size:"170"}}),s("h5",{staticClass:"text-center"},[t._v(" "+t._s(t.selectedOfficial.title)+" "+t._s(t.selectedOfficial.first_name)+" "+t._s(t.selectedOfficial.last_name)+" ")]),s("h6",{staticClass:"fw-light text-center"},[t._v("Role: "+t._s(t.selectedOfficial.role))]),s("h6",{staticClass:"fw-light mt-3 text-center"},[t._v("Email: "+t._s(t.selectedOfficial.email?t.selectedOfficial.email:"N/A"))]),s("h6",{staticClass:"fw-light mt-1"},[t._v("Tel: "+t._s(t.selectedOfficial.telephone?t.selectedOfficial.telephone:"N/A"))]),s("h5",{staticClass:"text-center"})],1),s("p",{staticClass:"official-close-text"},[t._v("Click anywhere to close")])]),s("div",{staticClass:"container vh-100"},[s("div",{staticClass:"d-flex flex-column h-100 g-0 justify-content-center text-white"},[t._m(0),s("div",{staticClass:"grid-container"},[s("main",{staticClass:"grid-item main"},[s("div",{ref:"horizontal",staticClass:"items",on:{mousedown:t.onMouseDown,mousemove:t.onMouseMove,mouseup:t.onMouseUp}},t._l(t.schoolofficials,(function(e,i){return s("div",{key:i,staticClass:"item item-post cardhover",attrs:{id:"introcard"},on:{click:function(s){s.preventDefault(),t.cardClicked=!0,t.selectedOfficial=e}}},[s("div",{staticClass:"d-flex justify-content-end"},[s("p",{staticClass:"mt-3 me-4 fw-light"},[t._v(t._s(t.currentNumber(i)))])]),s("div",{staticClass:"d-flex justify-content-center mt-1"},[e.image?s("b-avatar",{attrs:{size:"137",src:"http://127.0.0.1:8000/uploads/"+e.image}}):s("b-avatar",{attrs:{variant:"secondary",size:"170"}})],1),s("div",{staticClass:"card-content"},[s("h6",{staticClass:"text-uppercase text-center"},[t._v(" "+t._s(e.title)+" "+t._s(e.first_name)+" "+t._s(e.last_name)+" ")]),s("h6",{staticClass:"fw-light text-subheading text-center text-ellipse"},[s("small",[t._v(t._s(e.role))])]),s("h6",{staticClass:"fw-light text-subheading text-center"},[s("small",[t._v(t._s(e.email?e.email:"Email is not available"))])])])])})),0)])])])]),s("return-gesture")],1)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-12"},[s("h1",{staticClass:"text-uppercase fw-bold"},[t._v("UNIVERSITY OFFICIALS")]),s("h5",{staticClass:"fw-light mt-2 mb-4"},[t._v("Scroll to the left by pinch and drag to see more content")])])}],r=s("5530"),c=s("2f62"),n=s("d8ea"),o={components:{ReturnGesture:n["a"]},data:function(){return{cardClicked:!1,selectedOfficial:{image:null,first_name:"John",last_name:"Doe",gender:"Male",title:"Dr",email:"sampleemail@gmail.com",telephone:"",role:"University President"}}},methods:{currentNumber:function(t){return t+1<10?"0".concat(t+1):t+1},onMouseDown:function(t){this.isDown=!0,this.startX=t.pageX-this.$refs.horizontal.offsetLeft,this.scrollLeft=this.$refs.horizontal.scrollLeft},onMouseUp:function(){this.isDown=!1},onMouseMove:function(t){if(this.isDown){t.preventDefault();var e=t.pageX-this.$refs.horizontal.offsetLeft,s=1.6*(e-this.startX);this.$refs.horizontal.scrollLeft=this.scrollLeft-s}}},computed:Object(r["a"])({},Object(c["b"])("info",["schoolofficials"]))},l=o,f=(s("4196"),s("2877")),u=Object(f["a"])(l,i,a,!1,null,null,null);e["default"]=u.exports},b352:function(t,e,s){},b64b:function(t,e,s){var i=s("23e7"),a=s("7b0b"),r=s("df75"),c=s("d039"),n=c((function(){r(1)}));i({target:"Object",stat:!0,forced:n},{keys:function(t){return r(a(t))}})},d8ea:function(t,e,s){"use strict";var i=function(t,e){e._c;return e._m(0)},a=[function(t,e){var i=e._c;return i("div",[i("div",{staticClass:"return-container"},[i("div",{staticClass:"d-flex"},[i("img",{staticClass:"img-fluid",attrs:{src:s("6dd9"),alt:""}}),i("div",{staticClass:"d-flex align-items-center"},[i("span",{staticClass:"return-text"},[e._v("Return to "),i("br"),e._v(" previous route")])])])])])}],r={},c=r,n=(s("fac7"),s("2877")),o=Object(n["a"])(c,i,a,!0,null,null,null);e["a"]=o.exports},dbb4:function(t,e,s){var i=s("23e7"),a=s("83ab"),r=s("56ef"),c=s("fc6a"),n=s("06cf"),o=s("8418");i({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(t){var e,s,i=c(t),a=n.f,l=r(i),f={},u=0;while(l.length>u)s=a(i,e=l[u++]),void 0!==s&&o(f,e,s);return f}})},e439:function(t,e,s){var i=s("23e7"),a=s("d039"),r=s("fc6a"),c=s("06cf").f,n=s("83ab"),o=a((function(){c(1)})),l=!n||o;i({target:"Object",stat:!0,forced:l,sham:!n},{getOwnPropertyDescriptor:function(t,e){return c(r(t),e)}})},fac7:function(t,e,s){"use strict";s("9dde")}}]);
//# sourceMappingURL=schoolofficials.ab5a3abe.js.map