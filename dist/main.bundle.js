"use strict";
(self["webpackChunkdecembercountdown"] = self["webpackChunkdecembercountdown"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./photos/xmastree.jpg */ "./src/photos/xmastree.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! photos/xmasdeco.jpg */ "./src/photos/xmasdeco.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.background {\r\n  background-size: cover;\r\n  background-blend-mode: soft-light;\r\n  background-position: center top;\r\n  height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0;\r\n  overflow: hidden;\r\n}\r\n.december {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  display: none;\r\n}\r\n.links {\r\n  position: absolute;\r\n  margin: 0;\r\n  right: 5%;\r\n  top: 3%;\r\n  color: white;\r\n  text-decoration: none;\r\n}\r\n.link-dec {\r\n  background-color: blueviolet;\r\n}\r\n.header {\r\n  color: #f2e8cf;\r\n  font-weight: bolder;\r\n  text-shadow: 5px 5px 4px #101010;\r\n  font-size: 65px;\r\n  margin: -170px 0 40px;\r\n}\r\n.countdown {\r\n  display: flex;\r\n  transform: scale(2);\r\n}\r\n\r\n.time {\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  justify-content: center;\r\n  margin: 15px;\r\n}\r\n.time h2 {\r\n  font-weight: bold;\r\n  font-size: 38px;\r\n  margin: 0 0 0px 0;\r\n  color: #6a994e;\r\n  text-shadow: 0px 0.2px 0px #3b6225, 0px 0.5px 0px #3b6225, 0px 1px 0px #3b6225,\r\n    0px 1.2px 0px #3b6225, 0px 1.5px 0px #3b6225, 0px 2px 0px #3b6225,\r\n    0px 2.2px 0px #3b6225, 0px 2.5px 0px #3b6225, 0px 3px 0px #3b6225,\r\n    0px 3.2px 0px #3b6225, 0px 3.5px 0px #3b6225, 0px 4px 0px #3b6225,\r\n    0px 4.2px 0px #3b6225, 0px 4.5px 0px #3b6225, 0px 5px 0px #3b6225,\r\n    0px 5.2px 5px #183408;\r\n}\r\n.time p {\r\n  color: #f2e8cf;\r\n  margin: 0;\r\n  font-size: 25px;\r\n  text-shadow: 3px 3px 3px black, 4px 4px 4px black, 8px 8px 5px black;\r\n}\r\n.snow-container {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 99;\r\n}\r\n\r\n/* Snowflake animation */\r\n.snowflake {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  display: block;\r\n  width: 15px;\r\n  height: 15px;\r\n  background: #fff;\r\n  border-radius: 50%;\r\n  opacity: 0.6;\r\n  animation: snow 3s linear infinite;\r\n}\r\n\r\n@keyframes snow {\r\n  0% {\r\n    transform: translateY(-2vh);\r\n    opacity: 0.79;\r\n  }\r\n  100% {\r\n    transform: translateY(100vh);\r\n    opacity: 0.5;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 1024px) {\r\n  .header {\r\n    font-size: 45px;\r\n    margin: -180px 0 40px;\r\n  }\r\n  .time h2 {\r\n    font-size: 25px;\r\n    text-shadow: 0px 0.2px 0px #3b6225, 0px 0.6px 0px #3b6225,\r\n      0px 1px 0px #3b6225, 0px 1.2px 0px #3b6225, 0px 1.6px 0px #3b6225,\r\n      0px 2px 0px #3b6225, 0px 2.2px 0px #3b6225, 0px 2.6px 0px #3b6225,\r\n      0px 3px 0px #3b6225, 0px 3.2px 0px #3b6225, 0px 3.6px 0px #3b6225,\r\n      0px 4px 0px #3b6225, 0px 4.2px 0px #3b6225, 0px 4.6px 0px #3b6225,\r\n      0px 4.7px 6px #1f5401;\r\n  }\r\n  .time p {\r\n    margin: 0;\r\n    font-size: 12px;\r\n    text-shadow: 2px 2px 2px black, 3px 3px 3px black, 4px 4px 4px black,\r\n      8px 8px 5px black;\r\n  }\r\n  .countdown {\r\n    margin-top: 35px;\r\n    display: block;\r\n  }\r\n  .time {\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: center;\r\n    justify-content: center;\r\n    margin: 15px;\r\n  }\r\n  .link-dec {\r\n    top: 5px;\r\n    width: 30%;\r\n    background-color: #3b6225;\r\n    border-radius: 10px;\r\n  }\r\n}\r\n/* xmas  */\r\n\r\n.xmas {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n \r\n}\r\n\r\n.link-xmas {\r\n  background-color: #d90429;\r\n  border-radius: 6px;\r\n}\r\n\r\n/* .snow-container {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: -1;\r\n} */\r\n\r\n/* Snowflake animation */\r\n/* .snowflake {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  display: block;\r\n  width: 15px;\r\n  height: 15px;\r\n  background: #fff;\r\n  border-radius: 50%;\r\n  opacity: 0.6;\r\n  animation: snow 3s linear infinite;\r\n}\r\n\r\n@keyframes snow {\r\n  0% {\r\n    transform: translateY(-2vh);\r\n    opacity: 0.79;\r\n  }\r\n  100% {\r\n    transform: translateY(100vh);\r\n    opacity: 0.5;\r\n  }\r\n} */\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;EACtB,iCAAiC;EACjC,+BAA+B;EAC/B,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,gBAAgB;AAClB;AACA;EACE,yDAA8C;EAC9C,aAAa;AACf;AACA;EACE,kBAAkB;EAClB,SAAS;EACT,SAAS;EACT,OAAO;EACP,YAAY;EACZ,qBAAqB;AACvB;AACA;EACE,4BAA4B;AAC9B;AACA;EACE,cAAc;EACd,mBAAmB;EACnB,gCAAgC;EAChC,eAAe;EACf,qBAAqB;AACvB;AACA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,uBAAuB;EACvB,YAAY;AACd;AACA;EACE,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,cAAc;EACd;;;;;yBAKuB;AACzB;AACA;EACE,cAAc;EACd,SAAS;EACT,eAAe;EACf,oEAAoE;AACtE;AACA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,WAAW;AACb;;AAEA,wBAAwB;AACxB;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,cAAc;EACd,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;EACZ,kCAAkC;AACpC;;AAEA;EACE;IACE,2BAA2B;IAC3B,aAAa;EACf;EACA;IACE,4BAA4B;IAC5B,YAAY;EACd;AACF;;AAEA;EACE;IACE,eAAe;IACf,qBAAqB;EACvB;EACA;IACE,eAAe;IACf;;;;;2BAKuB;EACzB;EACA;IACE,SAAS;IACT,eAAe;IACf;uBACmB;EACrB;EACA;IACE,gBAAgB;IAChB,cAAc;EAChB;EACA;IACE,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,uBAAuB;IACvB,YAAY;EACd;EACA;IACE,QAAQ;IACR,UAAU;IACV,yBAAyB;IACzB,mBAAmB;EACrB;AACF;AACA,UAAU;;AAEV;EACE,yDAA4C;;AAE9C;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;;;;;;;GAOG;;AAEH,wBAAwB;AACxB;;;;;;;;;;;;;;;;;;;;;;GAsBG","sourcesContent":["* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.background {\r\n  background-size: cover;\r\n  background-blend-mode: soft-light;\r\n  background-position: center top;\r\n  height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0;\r\n  overflow: hidden;\r\n}\r\n.december {\r\n  background-image: url(\"./photos/xmastree.jpg\");\r\n  display: none;\r\n}\r\n.links {\r\n  position: absolute;\r\n  margin: 0;\r\n  right: 5%;\r\n  top: 3%;\r\n  color: white;\r\n  text-decoration: none;\r\n}\r\n.link-dec {\r\n  background-color: blueviolet;\r\n}\r\n.header {\r\n  color: #f2e8cf;\r\n  font-weight: bolder;\r\n  text-shadow: 5px 5px 4px #101010;\r\n  font-size: 65px;\r\n  margin: -170px 0 40px;\r\n}\r\n.countdown {\r\n  display: flex;\r\n  transform: scale(2);\r\n}\r\n\r\n.time {\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  justify-content: center;\r\n  margin: 15px;\r\n}\r\n.time h2 {\r\n  font-weight: bold;\r\n  font-size: 38px;\r\n  margin: 0 0 0px 0;\r\n  color: #6a994e;\r\n  text-shadow: 0px 0.2px 0px #3b6225, 0px 0.5px 0px #3b6225, 0px 1px 0px #3b6225,\r\n    0px 1.2px 0px #3b6225, 0px 1.5px 0px #3b6225, 0px 2px 0px #3b6225,\r\n    0px 2.2px 0px #3b6225, 0px 2.5px 0px #3b6225, 0px 3px 0px #3b6225,\r\n    0px 3.2px 0px #3b6225, 0px 3.5px 0px #3b6225, 0px 4px 0px #3b6225,\r\n    0px 4.2px 0px #3b6225, 0px 4.5px 0px #3b6225, 0px 5px 0px #3b6225,\r\n    0px 5.2px 5px #183408;\r\n}\r\n.time p {\r\n  color: #f2e8cf;\r\n  margin: 0;\r\n  font-size: 25px;\r\n  text-shadow: 3px 3px 3px black, 4px 4px 4px black, 8px 8px 5px black;\r\n}\r\n.snow-container {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 99;\r\n}\r\n\r\n/* Snowflake animation */\r\n.snowflake {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  display: block;\r\n  width: 15px;\r\n  height: 15px;\r\n  background: #fff;\r\n  border-radius: 50%;\r\n  opacity: 0.6;\r\n  animation: snow 3s linear infinite;\r\n}\r\n\r\n@keyframes snow {\r\n  0% {\r\n    transform: translateY(-2vh);\r\n    opacity: 0.79;\r\n  }\r\n  100% {\r\n    transform: translateY(100vh);\r\n    opacity: 0.5;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 1024px) {\r\n  .header {\r\n    font-size: 45px;\r\n    margin: -180px 0 40px;\r\n  }\r\n  .time h2 {\r\n    font-size: 25px;\r\n    text-shadow: 0px 0.2px 0px #3b6225, 0px 0.6px 0px #3b6225,\r\n      0px 1px 0px #3b6225, 0px 1.2px 0px #3b6225, 0px 1.6px 0px #3b6225,\r\n      0px 2px 0px #3b6225, 0px 2.2px 0px #3b6225, 0px 2.6px 0px #3b6225,\r\n      0px 3px 0px #3b6225, 0px 3.2px 0px #3b6225, 0px 3.6px 0px #3b6225,\r\n      0px 4px 0px #3b6225, 0px 4.2px 0px #3b6225, 0px 4.6px 0px #3b6225,\r\n      0px 4.7px 6px #1f5401;\r\n  }\r\n  .time p {\r\n    margin: 0;\r\n    font-size: 12px;\r\n    text-shadow: 2px 2px 2px black, 3px 3px 3px black, 4px 4px 4px black,\r\n      8px 8px 5px black;\r\n  }\r\n  .countdown {\r\n    margin-top: 35px;\r\n    display: block;\r\n  }\r\n  .time {\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: center;\r\n    justify-content: center;\r\n    margin: 15px;\r\n  }\r\n  .link-dec {\r\n    top: 5px;\r\n    width: 30%;\r\n    background-color: #3b6225;\r\n    border-radius: 10px;\r\n  }\r\n}\r\n/* xmas  */\r\n\r\n.xmas {\r\n  background-image: url(\"photos/xmasdeco.jpg\");\r\n \r\n}\r\n\r\n.link-xmas {\r\n  background-color: #d90429;\r\n  border-radius: 6px;\r\n}\r\n\r\n/* .snow-container {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: -1;\r\n} */\r\n\r\n/* Snowflake animation */\r\n/* .snowflake {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  display: block;\r\n  width: 15px;\r\n  height: 15px;\r\n  background: #fff;\r\n  border-radius: 50%;\r\n  opacity: 0.6;\r\n  animation: snow 3s linear infinite;\r\n}\r\n\r\n@keyframes snow {\r\n  0% {\r\n    transform: translateY(-2vh);\r\n    opacity: 0.79;\r\n  }\r\n  100% {\r\n    transform: translateY(100vh);\r\n    opacity: 0.5;\r\n  }\r\n} */\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dec.js":
/*!********************!*\
  !*** ./src/dec.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const december = new Date("December 1 2023 00:00:00");

let countdown = () => {
  const current = new Date();
  const left = december - current;
  let day = document.querySelector("#day");
  let hour = document.querySelector("#hour");
  let min = document.querySelector("#min");
  let sec = document.querySelector("#sec");
  const d = Math.floor(left / 1000 / 60 / 60 / 24);
  const h = Math.floor((left / 1000 / 60 / 60) % 24);
  const m = Math.floor((left / 1000 / 60) % 60);
  const s = Math.floor((left / 1000) % 60);
  day.innerText = d;
  hour.innerText = h < 10 ? "0" + h : h;
  min.innerText = m < 10 ? "0" + m : m;
  sec.innerText = s < 10 ? "0" + s : s;
}
setInterval(countdown, 1000);

const playSound = () => {
  const audio = new Audio("audios/xmassong.wav");
  audio.play();
};

const decLink = document.querySelector('.link-dec');

decLink.addEventListener('click', playSound);

const createSnowflake = () => {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.style.left = Math.random() * window.innerWidth + 'px';
  snowflake.style.animationDuration = Math.random() * 5 + 5 + 's';
  document.querySelector('.snow-container').appendChild(snowflake);
  setTimeout(() => {
    snowflake.remove();
  }, 9000);
}
setInterval(createSnowflake, 600);



const xmas = new Date("December 24 2023 00:00:00");

let xmasCountdown = () => {
  const sitting = new Date();
  const remaining = xmas - sitting;
  let day = document.querySelector("#xday");
  let hour = document.querySelector("#xhour");
  let min = document.querySelector("#xmin");
  let sec = document.querySelector("#xsec");
  const d = Math.floor(remaining / 1000 / 60 / 60 / 24);
  const h = Math.floor((remaining / 1000 / 60 / 60) % 24);
  const m = Math.floor((remaining / 1000 / 60) % 60);
  const s = Math.floor((remaining / 1000) % 60);
  day.innerHTML = d;
  hour.innerHTML = h < 10 ? "0" + h : h;
  min.innerHTML = m < 10 ? "0" + m : m;
  sec.innerHTML = s < 10 ? "0" + s : s;
}
setInterval(xmasCountdown, 1000);

let playSound2 = () => {
  let audio2 = new Audio("audios/sleighbells.wav");
  audio2.play();
};

const linkXmas = document.querySelector('.link-xmas');
linkXmas.addEventListener('click', playSound2);





/***/ }),

/***/ "./src/photos/xmasdeco.jpg":
/*!*********************************!*\
  !*** ./src/photos/xmasdeco.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "18b069e80b50c26b4ac0.jpg";

/***/ }),

/***/ "./src/photos/xmastree.jpg":
/*!*********************************!*\
  !*** ./src/photos/xmastree.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0c8f8c8cb33b271a143d.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/dec.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZWNlbWJlcmNvdW50ZG93bi8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZGVjZW1iZXJjb3VudGRvd24vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2RlY2VtYmVyY291bnRkb3duLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9kZWNlbWJlcmNvdW50ZG93bi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2RlY2VtYmVyY291bnRkb3duLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2RlY2VtYmVyY291bnRkb3duLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2RlY2VtYmVyY291bnRkb3duLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9kZWNlbWJlcmNvdW50ZG93bi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9kZWNlbWJlcmNvdW50ZG93bi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9kZWNlbWJlcmNvdW50ZG93bi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2RlY2VtYmVyY291bnRkb3duLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZGVjZW1iZXJjb3VudGRvd24vLi9zcmMvZGVjLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL3Bob3Rvcy94bWFzdHJlZS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJwaG90b3MveG1hc2RlY28uanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2tncm91bmQge1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogc29mdC1saWdodDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG4uZGVjZW1iZXIge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi5saW5rcyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICByaWdodDogNSU7XFxyXFxuICB0b3A6IDMlO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG4ubGluay1kZWMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcXHJcXG59XFxyXFxuLmhlYWRlciB7XFxyXFxuICBjb2xvcjogI2YyZThjZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICB0ZXh0LXNoYWRvdzogNXB4IDVweCA0cHggIzEwMTAxMDtcXHJcXG4gIGZvbnQtc2l6ZTogNjVweDtcXHJcXG4gIG1hcmdpbjogLTE3MHB4IDAgNDBweDtcXHJcXG59XFxyXFxuLmNvdW50ZG93biB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbWUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMTVweDtcXHJcXG59XFxyXFxuLnRpbWUgaDIge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDM4cHg7XFxyXFxuICBtYXJnaW46IDAgMCAwcHggMDtcXHJcXG4gIGNvbG9yOiAjNmE5OTRlO1xcclxcbiAgdGV4dC1zaGFkb3c6IDBweCAwLjJweCAwcHggIzNiNjIyNSwgMHB4IDAuNXB4IDBweCAjM2I2MjI1LCAwcHggMXB4IDBweCAjM2I2MjI1LFxcclxcbiAgICAwcHggMS4ycHggMHB4ICMzYjYyMjUsIDBweCAxLjVweCAwcHggIzNiNjIyNSwgMHB4IDJweCAwcHggIzNiNjIyNSxcXHJcXG4gICAgMHB4IDIuMnB4IDBweCAjM2I2MjI1LCAwcHggMi41cHggMHB4ICMzYjYyMjUsIDBweCAzcHggMHB4ICMzYjYyMjUsXFxyXFxuICAgIDBweCAzLjJweCAwcHggIzNiNjIyNSwgMHB4IDMuNXB4IDBweCAjM2I2MjI1LCAwcHggNHB4IDBweCAjM2I2MjI1LFxcclxcbiAgICAwcHggNC4ycHggMHB4ICMzYjYyMjUsIDBweCA0LjVweCAwcHggIzNiNjIyNSwgMHB4IDVweCAwcHggIzNiNjIyNSxcXHJcXG4gICAgMHB4IDUuMnB4IDVweCAjMTgzNDA4O1xcclxcbn1cXHJcXG4udGltZSBwIHtcXHJcXG4gIGNvbG9yOiAjZjJlOGNmO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggM3B4IGJsYWNrLCA0cHggNHB4IDRweCBibGFjaywgOHB4IDhweCA1cHggYmxhY2s7XFxyXFxufVxcclxcbi5zbm93LWNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB6LWluZGV4OiA5OTtcXHJcXG59XFxyXFxuXFxyXFxuLyogU25vd2ZsYWtlIGFuaW1hdGlvbiAqL1xcclxcbi5zbm93Zmxha2Uge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgd2lkdGg6IDE1cHg7XFxyXFxuICBoZWlnaHQ6IDE1cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgb3BhY2l0eTogMC42O1xcclxcbiAgYW5pbWF0aW9uOiBzbm93IDNzIGxpbmVhciBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzbm93IHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ydmgpO1xcclxcbiAgICBvcGFjaXR5OiAwLjc5O1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDB2aCk7XFxyXFxuICAgIG9wYWNpdHk6IDAuNTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXHJcXG4gIC5oZWFkZXIge1xcclxcbiAgICBmb250LXNpemU6IDQ1cHg7XFxyXFxuICAgIG1hcmdpbjogLTE4MHB4IDAgNDBweDtcXHJcXG4gIH1cXHJcXG4gIC50aW1lIGgyIHtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDAuMnB4IDBweCAjM2I2MjI1LCAwcHggMC42cHggMHB4ICMzYjYyMjUsXFxyXFxuICAgICAgMHB4IDFweCAwcHggIzNiNjIyNSwgMHB4IDEuMnB4IDBweCAjM2I2MjI1LCAwcHggMS42cHggMHB4ICMzYjYyMjUsXFxyXFxuICAgICAgMHB4IDJweCAwcHggIzNiNjIyNSwgMHB4IDIuMnB4IDBweCAjM2I2MjI1LCAwcHggMi42cHggMHB4ICMzYjYyMjUsXFxyXFxuICAgICAgMHB4IDNweCAwcHggIzNiNjIyNSwgMHB4IDMuMnB4IDBweCAjM2I2MjI1LCAwcHggMy42cHggMHB4ICMzYjYyMjUsXFxyXFxuICAgICAgMHB4IDRweCAwcHggIzNiNjIyNSwgMHB4IDQuMnB4IDBweCAjM2I2MjI1LCAwcHggNC42cHggMHB4ICMzYjYyMjUsXFxyXFxuICAgICAgMHB4IDQuN3B4IDZweCAjMWY1NDAxO1xcclxcbiAgfVxcclxcbiAgLnRpbWUgcCB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2ssIDNweCAzcHggM3B4IGJsYWNrLCA0cHggNHB4IDRweCBibGFjayxcXHJcXG4gICAgICA4cHggOHB4IDVweCBibGFjaztcXHJcXG4gIH1cXHJcXG4gIC5jb3VudGRvd24ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIH1cXHJcXG4gIC50aW1lIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAxNXB4O1xcclxcbiAgfVxcclxcbiAgLmxpbmstZGVjIHtcXHJcXG4gICAgdG9wOiA1cHg7XFxyXFxuICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjYyMjU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcbi8qIHhtYXMgICovXFxyXFxuXFxyXFxuLnhtYXMge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXHJcXG4gXFxyXFxufVxcclxcblxcclxcbi5saW5rLXhtYXMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5MDQyOTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogLnNub3ctY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHotaW5kZXg6IC0xO1xcclxcbn0gKi9cXHJcXG5cXHJcXG4vKiBTbm93Zmxha2UgYW5pbWF0aW9uICovXFxyXFxuLyogLnNub3dmbGFrZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogMTVweDtcXHJcXG4gIGhlaWdodDogMTVweDtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBvcGFjaXR5OiAwLjY7XFxyXFxuICBhbmltYXRpb246IHNub3cgM3MgbGluZWFyIGluZmluaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNub3cge1xcclxcbiAgMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJ2aCk7XFxyXFxuICAgIG9wYWNpdHk6IDAuNzk7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHZoKTtcXHJcXG4gICAgb3BhY2l0eTogMC41O1xcclxcbiAgfVxcclxcbn0gKi9cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGlDQUFpQztFQUNqQywrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UseURBQThDO0VBQzlDLGFBQWE7QUFDZjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxTQUFTO0VBQ1QsT0FBTztFQUNQLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMsZUFBZTtFQUNmLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZDs7Ozs7eUJBS3VCO0FBQ3pCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsU0FBUztFQUNULGVBQWU7RUFDZixvRUFBb0U7QUFDdEU7QUFDQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBLHdCQUF3QjtBQUN4QjtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFO0lBQ0UsMkJBQTJCO0lBQzNCLGFBQWE7RUFDZjtFQUNBO0lBQ0UsNEJBQTRCO0lBQzVCLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxlQUFlO0lBQ2Y7Ozs7OzJCQUt1QjtFQUN6QjtFQUNBO0lBQ0UsU0FBUztJQUNULGVBQWU7SUFDZjt1QkFDbUI7RUFDckI7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsWUFBWTtFQUNkO0VBQ0E7SUFDRSxRQUFRO0lBQ1IsVUFBVTtJQUNWLHlCQUF5QjtJQUN6QixtQkFBbUI7RUFDckI7QUFDRjtBQUNBLFVBQVU7O0FBRVY7RUFDRSx5REFBNEM7O0FBRTlDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQTs7Ozs7OztHQU9HOztBQUVILHdCQUF3QjtBQUN4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNCR1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi5iYWNrZ3JvdW5kIHtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IHNvZnQtbGlnaHQ7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuLmRlY2VtYmVyIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9waG90b3MveG1hc3RyZWUuanBnXFxcIik7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG4ubGlua3Mge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcmlnaHQ6IDUlO1xcclxcbiAgdG9wOiAzJTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuLmxpbmstZGVjIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XFxyXFxufVxcclxcbi5oZWFkZXIge1xcclxcbiAgY29sb3I6ICNmMmU4Y2Y7XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgdGV4dC1zaGFkb3c6IDVweCA1cHggNHB4ICMxMDEwMTA7XFxyXFxuICBmb250LXNpemU6IDY1cHg7XFxyXFxuICBtYXJnaW46IC0xNzBweCAwIDQwcHg7XFxyXFxufVxcclxcbi5jb3VudGRvd24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMik7XFxyXFxufVxcclxcblxcclxcbi50aW1lIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDE1cHg7XFxyXFxufVxcclxcbi50aW1lIGgyIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiAzOHB4O1xcclxcbiAgbWFyZ2luOiAwIDAgMHB4IDA7XFxyXFxuICBjb2xvcjogIzZhOTk0ZTtcXHJcXG4gIHRleHQtc2hhZG93OiAwcHggMC4ycHggMHB4ICMzYjYyMjUsIDBweCAwLjVweCAwcHggIzNiNjIyNSwgMHB4IDFweCAwcHggIzNiNjIyNSxcXHJcXG4gICAgMHB4IDEuMnB4IDBweCAjM2I2MjI1LCAwcHggMS41cHggMHB4ICMzYjYyMjUsIDBweCAycHggMHB4ICMzYjYyMjUsXFxyXFxuICAgIDBweCAyLjJweCAwcHggIzNiNjIyNSwgMHB4IDIuNXB4IDBweCAjM2I2MjI1LCAwcHggM3B4IDBweCAjM2I2MjI1LFxcclxcbiAgICAwcHggMy4ycHggMHB4ICMzYjYyMjUsIDBweCAzLjVweCAwcHggIzNiNjIyNSwgMHB4IDRweCAwcHggIzNiNjIyNSxcXHJcXG4gICAgMHB4IDQuMnB4IDBweCAjM2I2MjI1LCAwcHggNC41cHggMHB4ICMzYjYyMjUsIDBweCA1cHggMHB4ICMzYjYyMjUsXFxyXFxuICAgIDBweCA1LjJweCA1cHggIzE4MzQwODtcXHJcXG59XFxyXFxuLnRpbWUgcCB7XFxyXFxuICBjb2xvcjogI2YyZThjZjtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDNweCBibGFjaywgNHB4IDRweCA0cHggYmxhY2ssIDhweCA4cHggNXB4IGJsYWNrO1xcclxcbn1cXHJcXG4uc25vdy1jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgei1pbmRleDogOTk7XFxyXFxufVxcclxcblxcclxcbi8qIFNub3dmbGFrZSBhbmltYXRpb24gKi9cXHJcXG4uc25vd2ZsYWtlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiAxNXB4O1xcclxcbiAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIG9wYWNpdHk6IDAuNjtcXHJcXG4gIGFuaW1hdGlvbjogc25vdyAzcyBsaW5lYXIgaW5maW5pdGU7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc25vdyB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnZoKTtcXHJcXG4gICAgb3BhY2l0eTogMC43OTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwdmgpO1xcclxcbiAgICBvcGFjaXR5OiAwLjU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxyXFxuICAuaGVhZGVyIHtcXHJcXG4gICAgZm9udC1zaXplOiA0NXB4O1xcclxcbiAgICBtYXJnaW46IC0xODBweCAwIDQwcHg7XFxyXFxuICB9XFxyXFxuICAudGltZSBoMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwLjJweCAwcHggIzNiNjIyNSwgMHB4IDAuNnB4IDBweCAjM2I2MjI1LFxcclxcbiAgICAgIDBweCAxcHggMHB4ICMzYjYyMjUsIDBweCAxLjJweCAwcHggIzNiNjIyNSwgMHB4IDEuNnB4IDBweCAjM2I2MjI1LFxcclxcbiAgICAgIDBweCAycHggMHB4ICMzYjYyMjUsIDBweCAyLjJweCAwcHggIzNiNjIyNSwgMHB4IDIuNnB4IDBweCAjM2I2MjI1LFxcclxcbiAgICAgIDBweCAzcHggMHB4ICMzYjYyMjUsIDBweCAzLjJweCAwcHggIzNiNjIyNSwgMHB4IDMuNnB4IDBweCAjM2I2MjI1LFxcclxcbiAgICAgIDBweCA0cHggMHB4ICMzYjYyMjUsIDBweCA0LjJweCAwcHggIzNiNjIyNSwgMHB4IDQuNnB4IDBweCAjM2I2MjI1LFxcclxcbiAgICAgIDBweCA0LjdweCA2cHggIzFmNTQwMTtcXHJcXG4gIH1cXHJcXG4gIC50aW1lIHAge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4IGJsYWNrLCAzcHggM3B4IDNweCBibGFjaywgNHB4IDRweCA0cHggYmxhY2ssXFxyXFxuICAgICAgOHB4IDhweCA1cHggYmxhY2s7XFxyXFxuICB9XFxyXFxuICAuY291bnRkb3duIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMzVweDtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB9XFxyXFxuICAudGltZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMTVweDtcXHJcXG4gIH1cXHJcXG4gIC5saW5rLWRlYyB7XFxyXFxuICAgIHRvcDogNXB4O1xcclxcbiAgICB3aWR0aDogMzAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I2MjI1O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG4vKiB4bWFzICAqL1xcclxcblxcclxcbi54bWFzIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwicGhvdG9zL3htYXNkZWNvLmpwZ1xcXCIpO1xcclxcbiBcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmsteG1hcyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDkwNDI5O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiAuc25vdy1jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgei1pbmRleDogLTE7XFxyXFxufSAqL1xcclxcblxcclxcbi8qIFNub3dmbGFrZSBhbmltYXRpb24gKi9cXHJcXG4vKiAuc25vd2ZsYWtlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiAxNXB4O1xcclxcbiAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIG9wYWNpdHk6IDAuNjtcXHJcXG4gIGFuaW1hdGlvbjogc25vdyAzcyBsaW5lYXIgaW5maW5pdGU7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc25vdyB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnZoKTtcXHJcXG4gICAgb3BhY2l0eTogMC43OTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwdmgpO1xcclxcbiAgICBvcGFjaXR5OiAwLjU7XFxyXFxuICB9XFxyXFxufSAqL1xcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBkZWNlbWJlciA9IG5ldyBEYXRlKFwiRGVjZW1iZXIgMSAyMDIzIDAwOjAwOjAwXCIpO1xyXG5cclxubGV0IGNvdW50ZG93biA9ICgpID0+IHtcclxuICBjb25zdCBjdXJyZW50ID0gbmV3IERhdGUoKTtcclxuICBjb25zdCBsZWZ0ID0gZGVjZW1iZXIgLSBjdXJyZW50O1xyXG4gIGxldCBkYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RheVwiKTtcclxuICBsZXQgaG91ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaG91clwiKTtcclxuICBsZXQgbWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtaW5cIik7XHJcbiAgbGV0IHNlYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VjXCIpO1xyXG4gIGNvbnN0IGQgPSBNYXRoLmZsb29yKGxlZnQgLyAxMDAwIC8gNjAgLyA2MCAvIDI0KTtcclxuICBjb25zdCBoID0gTWF0aC5mbG9vcigobGVmdCAvIDEwMDAgLyA2MCAvIDYwKSAlIDI0KTtcclxuICBjb25zdCBtID0gTWF0aC5mbG9vcigobGVmdCAvIDEwMDAgLyA2MCkgJSA2MCk7XHJcbiAgY29uc3QgcyA9IE1hdGguZmxvb3IoKGxlZnQgLyAxMDAwKSAlIDYwKTtcclxuICBkYXkuaW5uZXJUZXh0ID0gZDtcclxuICBob3VyLmlubmVyVGV4dCA9IGggPCAxMCA/IFwiMFwiICsgaCA6IGg7XHJcbiAgbWluLmlubmVyVGV4dCA9IG0gPCAxMCA/IFwiMFwiICsgbSA6IG07XHJcbiAgc2VjLmlubmVyVGV4dCA9IHMgPCAxMCA/IFwiMFwiICsgcyA6IHM7XHJcbn1cclxuc2V0SW50ZXJ2YWwoY291bnRkb3duLCAxMDAwKTtcclxuXHJcbmNvbnN0IHBsYXlTb3VuZCA9ICgpID0+IHtcclxuICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbyhcImF1ZGlvcy94bWFzc29uZy53YXZcIik7XHJcbiAgYXVkaW8ucGxheSgpO1xyXG59O1xyXG5cclxuY29uc3QgZGVjTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saW5rLWRlYycpO1xyXG5cclxuZGVjTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYXlTb3VuZCk7XHJcblxyXG5jb25zdCBjcmVhdGVTbm93Zmxha2UgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc25vd2ZsYWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgc25vd2ZsYWtlLmNsYXNzTGlzdC5hZGQoJ3Nub3dmbGFrZScpO1xyXG4gIHNub3dmbGFrZS5zdHlsZS5sZWZ0ID0gTWF0aC5yYW5kb20oKSAqIHdpbmRvdy5pbm5lcldpZHRoICsgJ3B4JztcclxuICBzbm93Zmxha2Uuc3R5bGUuYW5pbWF0aW9uRHVyYXRpb24gPSBNYXRoLnJhbmRvbSgpICogNSArIDUgKyAncyc7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNub3ctY29udGFpbmVyJykuYXBwZW5kQ2hpbGQoc25vd2ZsYWtlKTtcclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIHNub3dmbGFrZS5yZW1vdmUoKTtcclxuICB9LCA5MDAwKTtcclxufVxyXG5zZXRJbnRlcnZhbChjcmVhdGVTbm93Zmxha2UsIDYwMCk7XHJcblxyXG5cclxuXHJcbmNvbnN0IHhtYXMgPSBuZXcgRGF0ZShcIkRlY2VtYmVyIDI0IDIwMjMgMDA6MDA6MDBcIik7XHJcblxyXG5sZXQgeG1hc0NvdW50ZG93biA9ICgpID0+IHtcclxuICBjb25zdCBzaXR0aW5nID0gbmV3IERhdGUoKTtcclxuICBjb25zdCByZW1haW5pbmcgPSB4bWFzIC0gc2l0dGluZztcclxuICBsZXQgZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN4ZGF5XCIpO1xyXG4gIGxldCBob3VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN4aG91clwiKTtcclxuICBsZXQgbWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN4bWluXCIpO1xyXG4gIGxldCBzZWMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3hzZWNcIik7XHJcbiAgY29uc3QgZCA9IE1hdGguZmxvb3IocmVtYWluaW5nIC8gMTAwMCAvIDYwIC8gNjAgLyAyNCk7XHJcbiAgY29uc3QgaCA9IE1hdGguZmxvb3IoKHJlbWFpbmluZyAvIDEwMDAgLyA2MCAvIDYwKSAlIDI0KTtcclxuICBjb25zdCBtID0gTWF0aC5mbG9vcigocmVtYWluaW5nIC8gMTAwMCAvIDYwKSAlIDYwKTtcclxuICBjb25zdCBzID0gTWF0aC5mbG9vcigocmVtYWluaW5nIC8gMTAwMCkgJSA2MCk7XHJcbiAgZGF5LmlubmVySFRNTCA9IGQ7XHJcbiAgaG91ci5pbm5lckhUTUwgPSBoIDwgMTAgPyBcIjBcIiArIGggOiBoO1xyXG4gIG1pbi5pbm5lckhUTUwgPSBtIDwgMTAgPyBcIjBcIiArIG0gOiBtO1xyXG4gIHNlYy5pbm5lckhUTUwgPSBzIDwgMTAgPyBcIjBcIiArIHMgOiBzO1xyXG59XHJcbnNldEludGVydmFsKHhtYXNDb3VudGRvd24sIDEwMDApO1xyXG5cclxubGV0IHBsYXlTb3VuZDIgPSAoKSA9PiB7XHJcbiAgbGV0IGF1ZGlvMiA9IG5ldyBBdWRpbyhcImF1ZGlvcy9zbGVpZ2hiZWxscy53YXZcIik7XHJcbiAgYXVkaW8yLnBsYXkoKTtcclxufTtcclxuXHJcbmNvbnN0IGxpbmtYbWFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpbmsteG1hcycpO1xyXG5saW5rWG1hcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYXlTb3VuZDIpO1xyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=