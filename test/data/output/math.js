/**
 * math@1.0.0
 * built on: Fri, 23 Jun 2017 08:09:21 GMT
 * repository: https://somewhere.com/math
 * maintainer: @ndaidong
 * License: MIT
**/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.xMath = global.xMath || {})));
}(this, (function (exports) { 'use strict';
  var add = function add(a, b) {
    return a + b;
  };
  var sub = function sub(a, b) {
    return a - b;
  };
  exports.add = add;
  exports.sub = sub;
  Object.defineProperty(exports, '__esModule', { value: true });
})));
