!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VuePasswordbar=t():e.VuePasswordbar=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t,r){r(3);var n=r(4)(r(1),r(5),"data-v-0257d9de",null);n.options.__file="/Users/mengff/Downloads/workspace/github/vue-passwordbar/src/passwordbar.vue",n.esModule&&Object.keys(n.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] passwordbar.vue: functional components are not supported with templates, they should use render functions."),e.exports=n.exports},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"c-passowrdbar",props:{len:{type:Number,default:6},pwd:{type:String,required:!0,default:""}},computed:{password:function(){return this.pwd.slice(0,this.len)}},methods:{}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.passwordbar=void 0;var n=r(0),o=function(e){return e&&e.__esModule?e:{default:e}}(n);t.passwordbar=o.default},function(e,t){},function(e,t){e.exports=function(e,t,r,n){var o,s=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(o=e,s=e.default);var i="function"==typeof s?s.options:s;if(t&&(i.render=t.render,i.staticRenderFns=t.staticRenderFns),r&&(i._scopeId=r),n){var a=Object.create(i.computed||null);Object.keys(n).forEach(function(e){var t=n[e];a[e]=function(){return t}}),i.computed=a}return{esModule:o,exports:s,options:i}}},function(e,t,r){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",{staticClass:"pwd-list"},e._l(e.len,function(t){return r("li",{key:"pwd"+t,staticClass:"pwd-item",class:{active:t<=e.password.length}})}))},staticRenderFns:[]},e.exports.render._withStripped=!0}])});