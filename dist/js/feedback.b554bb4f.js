(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["feedback"],{"46cf":function(t,e,s){},"498a":function(t,e,s){"use strict";var a=s("23e7"),n=s("58a8").trim,i=s("c8d2");a({target:"String",proto:!0,forced:i("trim")},{trim:function(){return n(this)}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,s){var a=s("1d80"),n=s("577e"),i=s("5899"),r="["+i+"]",c=RegExp("^"+r+r+"*"),o=RegExp(r+r+"*$"),u=function(t){return function(e){var s=n(a(e));return 1&t&&(s=s.replace(c,"")),2&t&&(s=s.replace(o,"")),s}};t.exports={start:u(1),end:u(2),trim:u(3)}},"6dd9":function(t,e,s){t.exports=s.p+"img/return-transparent.9ba0fa62.gif"},"6e7a":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),t.isFeedBack?s("div",{staticClass:"feedback"},[s("div",{staticClass:"feedback-input"},[s("h2",{staticClass:"text-uppercase"},[t._v("Enter your feedback")]),s("p",{staticClass:"mb-5 text-subheading"},[t._v("Please type your feedback with your keyboard")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.data.suggestion,expression:"data.suggestion"}],staticClass:"pt-3 feedback-control text-center",attrs:{type:"text",required:""},domProps:{value:t.data.suggestion},on:{input:function(e){e.target.composing||t.$set(t.data,"suggestion",e.target.value)}}}),t.hasError?s("p",{staticClass:"mt-2 text-danger"},[t._v("Please fill in this field")]):s("p",{staticClass:"mt-2 text-subheading"},[t._v("We currently dont have an on-screen keyboard")]),s("button",{staticClass:"btn btn-lg mt-5 btn-primary me-3",on:{click:function(e){e.preventDefault(),t.isFeedBack=!1}}},[t._v("Cancel")]),s("button",{staticClass:"btn btn-lg mt-5 btn-primary",on:{click:function(e){return e.preventDefault(),t.submitFeedback.apply(null,arguments)}}},[t._v("Submit")])])]):t._e(),s("div",{staticClass:"grid-container"},[t._m(1),s("main",{staticClass:"grid-item main"},[s("div",{ref:"horizontal",staticClass:"items",on:{mousedown:t.onMouseDown,mousemove:t.onMouseMove,mouseup:t.onMouseUp}},t._l(t.emoji,(function(e,a){return s("div",{key:a,staticClass:"item feedbackcard",attrs:{id:"introcard"}},[s("div",{staticClass:"d-flex justify-content-end"},[s("p",{staticClass:"mt-3 me-4 fw-light"},[t._v(t._s(t.currentNumber(a)))])]),s("div",{staticClass:"feedback-container",on:{click:function(s){return s.preventDefault(),t.showFeedBack(e)}}},[s("i",{class:e.class})]),s("div",{staticClass:"introcard-description"},[s("h6",{staticClass:"mt-5 text-uppercase text-center"},[t._v(t._s(e.name))])])])})),0)])]),s("return-gesture")],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"rate-success"},[s("i",{staticClass:"fas fa-check feedback-emoji"}),s("h5",{staticClass:"rate-feedback-text mt-3"},[t._v("Thank you for your feedback!")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title"},[s("h2",{staticClass:"text-center fw-light"},[t._v("FEEDBACK")]),s("p",{staticClass:"text-muted"},[t._v("Pinch and drag to scroll left or right")])])}],i=s("5530"),r=s("1da1"),c=(s("96cf"),s("498a"),s("b0c0"),s("2f62")),o=s("cffa"),u=s("d8ea"),f={components:{ReturnGesture:u["a"]},data:function(){return{isFeedBack:!1,data:{suggestion:"",emoji:""},hasError:!1,emoji:[{name:"Satisfied",class:"far fa-thumbs-up feedback-emoji"},{name:"Needs Improvement",class:"far fa-thumbs-down feedback-emoji"},{name:"Lovely",class:"far fa-grin-hearts feedback-emoji"},{name:"Surprised",class:"far fa-surprise feedback-emoji"},{name:"Awesome",class:"fas fa-fire feedback-emoji"}]}},mounted:function(){document.title="Feedback Section"},methods:{submitFeedback:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""==t.data.suggestion.trim()?t.hasError=!0:t.hasError=!1,t.hasError){e.next=7;break}return e.next=4,t.$store.dispatch("info/sendReview",t.data);case 4:s=e.sent,a=s.status,200==a&&(t.data={emoji:"",suggestion:""},t.showSuccess());case 7:case"end":return e.stop()}}),e)})))()},showFeedBack:function(t){this.isFeedBack=!0,this.data.emoji=t.name},currentNumber:function(t){return t+1<10?"0".concat(t+1):t+1},onMouseDown:function(t){this.isDown=!0,this.startX=t.pageX-this.$refs.horizontal.offsetLeft,this.scrollLeft=this.$refs.horizontal.scrollLeft},onMouseUp:function(){this.isDown=!1},onMouseMove:function(t){if(this.isDown){t.preventDefault();var e=t.pageX-this.$refs.horizontal.offsetLeft,s=1.4*(e-this.startX);this.$refs.horizontal.scrollLeft=this.scrollLeft-s}},showSuccess:function(){o["a"].from(".rate-success",1.4,{display:"flex"}),o["a"].from(".feedback-emoji",.45,{x:-20,opacity:0}),o["a"].from(".rate-feedback-text",.45,{x:-20,opacity:0,delay:.45}),this.isFeedBack=!1}},computed:Object(i["a"])({},Object(c["b"])("info",["departments"]))},l=f,d=(s("8ae5"),s("2877")),m=Object(d["a"])(l,a,n,!1,null,null,null);e["default"]=m.exports},"8ae5":function(t,e,s){"use strict";s("46cf")},"9dde":function(t,e,s){},c8d2:function(t,e,s){var a=s("d039"),n=s("5899"),i="​᠎";t.exports=function(t){return a((function(){return!!n[t]()||i[t]()!=i||n[t].name!==t}))}},d8ea:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"return-container"},[a("div",{staticClass:"d-flex"},[a("img",{staticClass:"img-fluid",attrs:{src:s("6dd9"),alt:""}}),a("div",{staticClass:"d-flex align-items-center"},[a("span",{staticClass:"return-text"},[t._v("Return to "),a("br"),t._v(" previous route")])])])])])}],i={},r=i,c=(s("fac7"),s("2877")),o=Object(c["a"])(r,a,n,!1,null,null,null);e["a"]=o.exports},fac7:function(t,e,s){"use strict";s("9dde")}}]);
//# sourceMappingURL=feedback.b554bb4f.js.map