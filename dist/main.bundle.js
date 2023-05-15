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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! photos/xmasdeco.jpg */ "./src/photos/xmasdeco.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.background {\r\n  background-size: cover;\r\n  background-blend-mode: soft-light;\r\n  background-position: center top;\r\n  height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0;\r\n  overflow: hidden;\r\n}\r\n/* .december {\r\n} */\r\n.links {\r\n  position: absolute;\r\n  z-index: 100;\r\n  margin: 0;\r\n  right: 5%;\r\n  top: 3%;\r\n  color: white;\r\n  text-decoration: none;\r\n}\r\n.link-dec {\r\n  background-color: blueviolet;\r\n}\r\n.header {\r\n  color: #f2e8cf;\r\n  font-weight: bolder;\r\n  text-shadow: 5px 5px 4px #101010;\r\n  font-size: 65px;\r\n  margin: -170px 0 40px;\r\n}\r\n.countdown {\r\n  display: flex;\r\n  transform: scale(2);\r\n}\r\n\r\n.time {\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  justify-content: center;\r\n  margin: 15px;\r\n}\r\n.time h2 {\r\n  font-weight: bold;\r\n  font-size: 38px;\r\n  margin: 0 0 0px 0;\r\n  color: #6a994e;\r\n  text-shadow: 0px 0.2px 0px #3b6225, 0px 0.5px 0px #3b6225, 0px 1px 0px #3b6225,\r\n    0px 1.2px 0px #3b6225, 0px 1.5px 0px #3b6225, 0px 2px 0px #3b6225,\r\n    0px 2.2px 0px #3b6225, 0px 2.5px 0px #3b6225, 0px 3px 0px #3b6225,\r\n    0px 3.2px 0px #3b6225, 0px 3.5px 0px #3b6225, 0px 4px 0px #3b6225,\r\n    0px 4.2px 0px #3b6225, 0px 4.5px 0px #3b6225, 0px 5px 0px #3b6225,\r\n    0px 5.2px 5px #183408;\r\n}\r\n.time p {\r\n  color: #f2e8cf;\r\n  margin: 0;\r\n  font-size: 25px;\r\n  text-shadow: 3px 3px 3px black, 4px 4px 4px black, 8px 8px 5px black;\r\n}\r\n.snow-container {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 99;\r\n}\r\n\r\n/* Snowflake animation */\r\n.snowflake {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  display: block;\r\n  width: 15px;\r\n  height: 15px;\r\n  background: #fff;\r\n  border-radius: 50%;\r\n  opacity: 0.6;\r\n  animation: snow 3s linear infinite;\r\n}\r\n\r\n@keyframes snow {\r\n  0% {\r\n    transform: translateY(-2vh);\r\n    opacity: 0.79;\r\n  }\r\n  100% {\r\n    transform: translateY(100vh);\r\n    opacity: 0.5;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 1024px) {\r\n  .header {\r\n    font-size: 45px;\r\n    margin: -180px 0 40px;\r\n  }\r\n  .time h2 {\r\n    font-size: 25px;\r\n    text-shadow: 0px 0.2px 0px #3b6225, 0px 0.6px 0px #3b6225,\r\n      0px 1px 0px #3b6225, 0px 1.2px 0px #3b6225, 0px 1.6px 0px #3b6225,\r\n      0px 2px 0px #3b6225, 0px 2.2px 0px #3b6225, 0px 2.6px 0px #3b6225,\r\n      0px 3px 0px #3b6225, 0px 3.2px 0px #3b6225, 0px 3.6px 0px #3b6225,\r\n      0px 4px 0px #3b6225, 0px 4.2px 0px #3b6225, 0px 4.6px 0px #3b6225,\r\n      0px 4.7px 6px #1f5401;\r\n  }\r\n  .time p {\r\n    margin: 0;\r\n    font-size: 12px;\r\n    text-shadow: 2px 2px 2px black, 3px 3px 3px black, 4px 4px 4px black,\r\n      8px 8px 5px black;\r\n  }\r\n  .countdown {\r\n    margin-top: 35px;\r\n    display: block;\r\n  }\r\n  .time {\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: center;\r\n    justify-content: center;\r\n    margin: 15px;\r\n  }\r\n  .link-dec {\r\n    top: 5px;\r\n    width: 30%;\r\n    background-color: #3b6225;\r\n    border-radius: 10px;\r\n  }\r\n}\r\n/* xmas  */\r\n\r\n.xmas {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n\r\n.link-xmas {\r\n  background-color: #d90429;\r\n  border-radius: 6px;\r\n}\r\n\r\n/* hide */\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;EACtB,iCAAiC;EACjC,+BAA+B;EAC/B,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,gBAAgB;AAClB;AACA;GACG;AACH;EACE,kBAAkB;EAClB,YAAY;EACZ,SAAS;EACT,SAAS;EACT,OAAO;EACP,YAAY;EACZ,qBAAqB;AACvB;AACA;EACE,4BAA4B;AAC9B;AACA;EACE,cAAc;EACd,mBAAmB;EACnB,gCAAgC;EAChC,eAAe;EACf,qBAAqB;AACvB;AACA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,uBAAuB;EACvB,YAAY;AACd;AACA;EACE,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,cAAc;EACd;;;;;yBAKuB;AACzB;AACA;EACE,cAAc;EACd,SAAS;EACT,eAAe;EACf,oEAAoE;AACtE;AACA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,WAAW;AACb;;AAEA,wBAAwB;AACxB;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,cAAc;EACd,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;EACZ,kCAAkC;AACpC;;AAEA;EACE;IACE,2BAA2B;IAC3B,aAAa;EACf;EACA;IACE,4BAA4B;IAC5B,YAAY;EACd;AACF;;AAEA;EACE;IACE,eAAe;IACf,qBAAqB;EACvB;EACA;IACE,eAAe;IACf;;;;;2BAKuB;EACzB;EACA;IACE,SAAS;IACT,eAAe;IACf;uBACmB;EACrB;EACA;IACE,gBAAgB;IAChB,cAAc;EAChB;EACA;IACE,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,uBAAuB;IACvB,YAAY;EACd;EACA;IACE,QAAQ;IACR,UAAU;IACV,yBAAyB;IACzB,mBAAmB;EACrB;AACF;AACA,UAAU;;AAEV;EACE,yDAA4C;AAC9C;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA,SAAS;;AAET;EACE,aAAa;AACf","sourcesContent":["* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.background {\r\n  background-size: cover;\r\n  background-blend-mode: soft-light;\r\n  background-position: center top;\r\n  height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0;\r\n  overflow: hidden;\r\n}\r\n/* .december {\r\n} */\r\n.links {\r\n  position: absolute;\r\n  z-index: 100;\r\n  margin: 0;\r\n  right: 5%;\r\n  top: 3%;\r\n  color: white;\r\n  text-decoration: none;\r\n}\r\n.link-dec {\r\n  background-color: blueviolet;\r\n}\r\n.header {\r\n  color: #f2e8cf;\r\n  font-weight: bolder;\r\n  text-shadow: 5px 5px 4px #101010;\r\n  font-size: 65px;\r\n  margin: -170px 0 40px;\r\n}\r\n.countdown {\r\n  display: flex;\r\n  transform: scale(2);\r\n}\r\n\r\n.time {\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  justify-content: center;\r\n  margin: 15px;\r\n}\r\n.time h2 {\r\n  font-weight: bold;\r\n  font-size: 38px;\r\n  margin: 0 0 0px 0;\r\n  color: #6a994e;\r\n  text-shadow: 0px 0.2px 0px #3b6225, 0px 0.5px 0px #3b6225, 0px 1px 0px #3b6225,\r\n    0px 1.2px 0px #3b6225, 0px 1.5px 0px #3b6225, 0px 2px 0px #3b6225,\r\n    0px 2.2px 0px #3b6225, 0px 2.5px 0px #3b6225, 0px 3px 0px #3b6225,\r\n    0px 3.2px 0px #3b6225, 0px 3.5px 0px #3b6225, 0px 4px 0px #3b6225,\r\n    0px 4.2px 0px #3b6225, 0px 4.5px 0px #3b6225, 0px 5px 0px #3b6225,\r\n    0px 5.2px 5px #183408;\r\n}\r\n.time p {\r\n  color: #f2e8cf;\r\n  margin: 0;\r\n  font-size: 25px;\r\n  text-shadow: 3px 3px 3px black, 4px 4px 4px black, 8px 8px 5px black;\r\n}\r\n.snow-container {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 99;\r\n}\r\n\r\n/* Snowflake animation */\r\n.snowflake {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  display: block;\r\n  width: 15px;\r\n  height: 15px;\r\n  background: #fff;\r\n  border-radius: 50%;\r\n  opacity: 0.6;\r\n  animation: snow 3s linear infinite;\r\n}\r\n\r\n@keyframes snow {\r\n  0% {\r\n    transform: translateY(-2vh);\r\n    opacity: 0.79;\r\n  }\r\n  100% {\r\n    transform: translateY(100vh);\r\n    opacity: 0.5;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 1024px) {\r\n  .header {\r\n    font-size: 45px;\r\n    margin: -180px 0 40px;\r\n  }\r\n  .time h2 {\r\n    font-size: 25px;\r\n    text-shadow: 0px 0.2px 0px #3b6225, 0px 0.6px 0px #3b6225,\r\n      0px 1px 0px #3b6225, 0px 1.2px 0px #3b6225, 0px 1.6px 0px #3b6225,\r\n      0px 2px 0px #3b6225, 0px 2.2px 0px #3b6225, 0px 2.6px 0px #3b6225,\r\n      0px 3px 0px #3b6225, 0px 3.2px 0px #3b6225, 0px 3.6px 0px #3b6225,\r\n      0px 4px 0px #3b6225, 0px 4.2px 0px #3b6225, 0px 4.6px 0px #3b6225,\r\n      0px 4.7px 6px #1f5401;\r\n  }\r\n  .time p {\r\n    margin: 0;\r\n    font-size: 12px;\r\n    text-shadow: 2px 2px 2px black, 3px 3px 3px black, 4px 4px 4px black,\r\n      8px 8px 5px black;\r\n  }\r\n  .countdown {\r\n    margin-top: 35px;\r\n    display: block;\r\n  }\r\n  .time {\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: center;\r\n    justify-content: center;\r\n    margin: 15px;\r\n  }\r\n  .link-dec {\r\n    top: 5px;\r\n    width: 30%;\r\n    background-color: #3b6225;\r\n    border-radius: 10px;\r\n  }\r\n}\r\n/* xmas  */\r\n\r\n.xmas {\r\n  background-image: url(\"photos/xmasdeco.jpg\");\r\n}\r\n\r\n.link-xmas {\r\n  background-color: #d90429;\r\n  border-radius: 6px;\r\n}\r\n\r\n/* hide */\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/audios/sleighbells.wav":
/*!************************************!*\
  !*** ./src/audios/sleighbells.wav ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audios/sleighbells.wav");

/***/ }),

/***/ "./src/audios/xmassong.wav":
/*!*********************************!*\
  !*** ./src/audios/xmassong.wav ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audios/xmassong.wav");

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
/* harmony import */ var _photos_xmastree_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photos/xmastree.jpg */ "./src/photos/xmastree.jpg");
/* harmony import */ var _modules_countdown_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/countdown.js */ "./src/modules/countdown.js");
/* harmony import */ var _modules_snowflakes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/snowflakes */ "./src/modules/snowflakes.js");
/* harmony import */ var _audios_sleighbells_wav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./audios/sleighbells.wav */ "./src/audios/sleighbells.wav");
/* harmony import */ var _audios_xmassong_wav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./audios/xmassong.wav */ "./src/audios/xmassong.wav");







const playSound2 = () => {
  const audio2 = new Audio(_audios_sleighbells_wav__WEBPACK_IMPORTED_MODULE_4__["default"]);
  audio2.play();
};
const playSound = () => {
  const audio = new Audio(_audios_xmassong_wav__WEBPACK_IMPORTED_MODULE_5__["default"]);
  audio.play();
};

const decBackgr = document.querySelector('.december');

decBackgr.style.backgroundImage = `url('${_photos_xmastree_jpg__WEBPACK_IMPORTED_MODULE_1__}')`;

setInterval(_modules_countdown_js__WEBPACK_IMPORTED_MODULE_2__.countdown, 1000);
setInterval(_modules_countdown_js__WEBPACK_IMPORTED_MODULE_2__.xmasCountdown, 1000);
setInterval(_modules_snowflakes__WEBPACK_IMPORTED_MODULE_3__["default"], 600);

const decLink = document.querySelector('.link-dec');

const xmasContainer = document.querySelector('.xmas');
const decContainer = document.querySelector('.december');

decLink.addEventListener('click', () => {
  playSound();
  xmasContainer.classList.remove('hide');
  decContainer.classList.add('hide');
});


const linkXmas = document.querySelector('.link-xmas');
linkXmas.addEventListener('click', () => {
  playSound2();
  xmasContainer.classList.add('hide');
  decContainer.classList.remove('hide');
});







/***/ }),

/***/ "./src/modules/countdown.js":
/*!**********************************!*\
  !*** ./src/modules/countdown.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "countdown": () => (/* binding */ countdown),
/* harmony export */   "xmasCountdown": () => (/* binding */ xmasCountdown)
/* harmony export */ });
const december = new Date("December 1 2023 00:00:00");
const countdown = () => {
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

const xmas = new Date("December 24 2023 00:00:00");

const xmasCountdown = () => {
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


/***/ }),

/***/ "./src/modules/snowflakes.js":
/*!***********************************!*\
  !*** ./src/modules/snowflakes.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createSnowflake);

/***/ }),

/***/ "./src/photos/xmasdeco.jpg":
/*!*********************************!*\
  !*** ./src/photos/xmasdeco.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/xmasdeco.jpg";

/***/ }),

/***/ "./src/photos/xmastree.jpg":
/*!*********************************!*\
  !*** ./src/photos/xmastree.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/xmastree.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/dec.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsaUVBQWUsZUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL2RlY2VtYmVyY291bnRkb3duLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9kZWNlbWJlcmNvdW50ZG93bi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZGVjZW1iZXJjb3VudGRvd24vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2RlY2VtYmVyY291bnRkb3duLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZGVjZW1iZXJjb3VudGRvd24vLi9zcmMvYXVkaW9zL3NsZWlnaGJlbGxzLndhdiIsIndlYnBhY2s6Ly9kZWNlbWJlcmNvdW50ZG93bi8uL3NyYy9hdWRpb3MveG1hc3Nvbmcud2F2Iiwid2VicGFjazovL2RlY2VtYmVyY291bnRkb3duLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2RlY2VtYmVyY291bnRkb3duLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2RlY2VtYmVyY291bnRkb3duLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9kZWNlbWJlcmNvdW50ZG93bi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9kZWNlbWJlcmNvdW50ZG93bi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9kZWNlbWJlcmNvdW50ZG93bi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2RlY2VtYmVyY291bnRkb3duLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZGVjZW1iZXJjb3VudGRvd24vLi9zcmMvZGVjLmpzIiwid2VicGFjazovL2RlY2VtYmVyY291bnRkb3duLy4vc3JjL21vZHVsZXMvY291bnRkb3duLmpzIiwid2VicGFjazovL2RlY2VtYmVyY291bnRkb3duLy4vc3JjL21vZHVsZXMvc25vd2ZsYWtlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwicGhvdG9zL3htYXNkZWNvLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2tncm91bmQge1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogc29mdC1saWdodDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG4vKiAuZGVjZW1iZXIge1xcclxcbn0gKi9cXHJcXG4ubGlua3Mge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgei1pbmRleDogMTAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcmlnaHQ6IDUlO1xcclxcbiAgdG9wOiAzJTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuLmxpbmstZGVjIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XFxyXFxufVxcclxcbi5oZWFkZXIge1xcclxcbiAgY29sb3I6ICNmMmU4Y2Y7XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgdGV4dC1zaGFkb3c6IDVweCA1cHggNHB4ICMxMDEwMTA7XFxyXFxuICBmb250LXNpemU6IDY1cHg7XFxyXFxuICBtYXJnaW46IC0xNzBweCAwIDQwcHg7XFxyXFxufVxcclxcbi5jb3VudGRvd24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMik7XFxyXFxufVxcclxcblxcclxcbi50aW1lIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDE1cHg7XFxyXFxufVxcclxcbi50aW1lIGgyIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiAzOHB4O1xcclxcbiAgbWFyZ2luOiAwIDAgMHB4IDA7XFxyXFxuICBjb2xvcjogIzZhOTk0ZTtcXHJcXG4gIHRleHQtc2hhZG93OiAwcHggMC4ycHggMHB4ICMzYjYyMjUsIDBweCAwLjVweCAwcHggIzNiNjIyNSwgMHB4IDFweCAwcHggIzNiNjIyNSxcXHJcXG4gICAgMHB4IDEuMnB4IDBweCAjM2I2MjI1LCAwcHggMS41cHggMHB4ICMzYjYyMjUsIDBweCAycHggMHB4ICMzYjYyMjUsXFxyXFxuICAgIDBweCAyLjJweCAwcHggIzNiNjIyNSwgMHB4IDIuNXB4IDBweCAjM2I2MjI1LCAwcHggM3B4IDBweCAjM2I2MjI1LFxcclxcbiAgICAwcHggMy4ycHggMHB4ICMzYjYyMjUsIDBweCAzLjVweCAwcHggIzNiNjIyNSwgMHB4IDRweCAwcHggIzNiNjIyNSxcXHJcXG4gICAgMHB4IDQuMnB4IDBweCAjM2I2MjI1LCAwcHggNC41cHggMHB4ICMzYjYyMjUsIDBweCA1cHggMHB4ICMzYjYyMjUsXFxyXFxuICAgIDBweCA1LjJweCA1cHggIzE4MzQwODtcXHJcXG59XFxyXFxuLnRpbWUgcCB7XFxyXFxuICBjb2xvcjogI2YyZThjZjtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDNweCBibGFjaywgNHB4IDRweCA0cHggYmxhY2ssIDhweCA4cHggNXB4IGJsYWNrO1xcclxcbn1cXHJcXG4uc25vdy1jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgei1pbmRleDogOTk7XFxyXFxufVxcclxcblxcclxcbi8qIFNub3dmbGFrZSBhbmltYXRpb24gKi9cXHJcXG4uc25vd2ZsYWtlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiAxNXB4O1xcclxcbiAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIG9wYWNpdHk6IDAuNjtcXHJcXG4gIGFuaW1hdGlvbjogc25vdyAzcyBsaW5lYXIgaW5maW5pdGU7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc25vdyB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnZoKTtcXHJcXG4gICAgb3BhY2l0eTogMC43OTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwdmgpO1xcclxcbiAgICBvcGFjaXR5OiAwLjU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxyXFxuICAuaGVhZGVyIHtcXHJcXG4gICAgZm9udC1zaXplOiA0NXB4O1xcclxcbiAgICBtYXJnaW46IC0xODBweCAwIDQwcHg7XFxyXFxuICB9XFxyXFxuICAudGltZSBoMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwLjJweCAwcHggIzNiNjIyNSwgMHB4IDAuNnB4IDBweCAjM2I2MjI1LFxcclxcbiAgICAgIDBweCAxcHggMHB4ICMzYjYyMjUsIDBweCAxLjJweCAwcHggIzNiNjIyNSwgMHB4IDEuNnB4IDBweCAjM2I2MjI1LFxcclxcbiAgICAgIDBweCAycHggMHB4ICMzYjYyMjUsIDBweCAyLjJweCAwcHggIzNiNjIyNSwgMHB4IDIuNnB4IDBweCAjM2I2MjI1LFxcclxcbiAgICAgIDBweCAzcHggMHB4ICMzYjYyMjUsIDBweCAzLjJweCAwcHggIzNiNjIyNSwgMHB4IDMuNnB4IDBweCAjM2I2MjI1LFxcclxcbiAgICAgIDBweCA0cHggMHB4ICMzYjYyMjUsIDBweCA0LjJweCAwcHggIzNiNjIyNSwgMHB4IDQuNnB4IDBweCAjM2I2MjI1LFxcclxcbiAgICAgIDBweCA0LjdweCA2cHggIzFmNTQwMTtcXHJcXG4gIH1cXHJcXG4gIC50aW1lIHAge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4IGJsYWNrLCAzcHggM3B4IDNweCBibGFjaywgNHB4IDRweCA0cHggYmxhY2ssXFxyXFxuICAgICAgOHB4IDhweCA1cHggYmxhY2s7XFxyXFxuICB9XFxyXFxuICAuY291bnRkb3duIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMzVweDtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB9XFxyXFxuICAudGltZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMTVweDtcXHJcXG4gIH1cXHJcXG4gIC5saW5rLWRlYyB7XFxyXFxuICAgIHRvcDogNXB4O1xcclxcbiAgICB3aWR0aDogMzAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I2MjI1O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG4vKiB4bWFzICAqL1xcclxcblxcclxcbi54bWFzIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxufVxcclxcblxcclxcbi5saW5rLXhtYXMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5MDQyOTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogaGlkZSAqL1xcclxcblxcclxcbi5oaWRlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsaUNBQWlDO0VBQ2pDLCtCQUErQjtFQUMvQixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCO0FBQ0E7R0FDRztBQUNIO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixTQUFTO0VBQ1QsU0FBUztFQUNULE9BQU87RUFDUCxZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Q7Ozs7O3lCQUt1QjtBQUN6QjtBQUNBO0VBQ0UsY0FBYztFQUNkLFNBQVM7RUFDVCxlQUFlO0VBQ2Ysb0VBQW9FO0FBQ3RFO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQSx3QkFBd0I7QUFDeEI7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRTtJQUNFLDJCQUEyQjtJQUMzQixhQUFhO0VBQ2Y7RUFDQTtJQUNFLDRCQUE0QjtJQUM1QixZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtJQUNmLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsZUFBZTtJQUNmOzs7OzsyQkFLdUI7RUFDekI7RUFDQTtJQUNFLFNBQVM7SUFDVCxlQUFlO0lBQ2Y7dUJBQ21CO0VBQ3JCO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLFlBQVk7RUFDZDtFQUNBO0lBQ0UsUUFBUTtJQUNSLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsbUJBQW1CO0VBQ3JCO0FBQ0Y7QUFDQSxVQUFVOztBQUVWO0VBQ0UseURBQTRDO0FBQzlDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQSxTQUFTOztBQUVUO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2tncm91bmQge1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogc29mdC1saWdodDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG4vKiAuZGVjZW1iZXIge1xcclxcbn0gKi9cXHJcXG4ubGlua3Mge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgei1pbmRleDogMTAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcmlnaHQ6IDUlO1xcclxcbiAgdG9wOiAzJTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuLmxpbmstZGVjIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XFxyXFxufVxcclxcbi5oZWFkZXIge1xcclxcbiAgY29sb3I6ICNmMmU4Y2Y7XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgdGV4dC1zaGFkb3c6IDVweCA1cHggNHB4ICMxMDEwMTA7XFxyXFxuICBmb250LXNpemU6IDY1cHg7XFxyXFxuICBtYXJnaW46IC0xNzBweCAwIDQwcHg7XFxyXFxufVxcclxcbi5jb3VudGRvd24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMik7XFxyXFxufVxcclxcblxcclxcbi50aW1lIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDE1cHg7XFxyXFxufVxcclxcbi50aW1lIGgyIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiAzOHB4O1xcclxcbiAgbWFyZ2luOiAwIDAgMHB4IDA7XFxyXFxuICBjb2xvcjogIzZhOTk0ZTtcXHJcXG4gIHRleHQtc2hhZG93OiAwcHggMC4ycHggMHB4ICMzYjYyMjUsIDBweCAwLjVweCAwcHggIzNiNjIyNSwgMHB4IDFweCAwcHggIzNiNjIyNSxcXHJcXG4gICAgMHB4IDEuMnB4IDBweCAjM2I2MjI1LCAwcHggMS41cHggMHB4ICMzYjYyMjUsIDBweCAycHggMHB4ICMzYjYyMjUsXFxyXFxuICAgIDBweCAyLjJweCAwcHggIzNiNjIyNSwgMHB4IDIuNXB4IDBweCAjM2I2MjI1LCAwcHggM3B4IDBweCAjM2I2MjI1LFxcclxcbiAgICAwcHggMy4ycHggMHB4ICMzYjYyMjUsIDBweCAzLjVweCAwcHggIzNiNjIyNSwgMHB4IDRweCAwcHggIzNiNjIyNSxcXHJcXG4gICAgMHB4IDQuMnB4IDBweCAjM2I2MjI1LCAwcHggNC41cHggMHB4ICMzYjYyMjUsIDBweCA1cHggMHB4ICMzYjYyMjUsXFxyXFxuICAgIDBweCA1LjJweCA1cHggIzE4MzQwODtcXHJcXG59XFxyXFxuLnRpbWUgcCB7XFxyXFxuICBjb2xvcjogI2YyZThjZjtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDNweCBibGFjaywgNHB4IDRweCA0cHggYmxhY2ssIDhweCA4cHggNXB4IGJsYWNrO1xcclxcbn1cXHJcXG4uc25vdy1jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgei1pbmRleDogOTk7XFxyXFxufVxcclxcblxcclxcbi8qIFNub3dmbGFrZSBhbmltYXRpb24gKi9cXHJcXG4uc25vd2ZsYWtlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiAxNXB4O1xcclxcbiAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIG9wYWNpdHk6IDAuNjtcXHJcXG4gIGFuaW1hdGlvbjogc25vdyAzcyBsaW5lYXIgaW5maW5pdGU7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc25vdyB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnZoKTtcXHJcXG4gICAgb3BhY2l0eTogMC43OTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwdmgpO1xcclxcbiAgICBvcGFjaXR5OiAwLjU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxyXFxuICAuaGVhZGVyIHtcXHJcXG4gICAgZm9udC1zaXplOiA0NXB4O1xcclxcbiAgICBtYXJnaW46IC0xODBweCAwIDQwcHg7XFxyXFxuICB9XFxyXFxuICAudGltZSBoMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwLjJweCAwcHggIzNiNjIyNSwgMHB4IDAuNnB4IDBweCAjM2I2MjI1LFxcclxcbiAgICAgIDBweCAxcHggMHB4ICMzYjYyMjUsIDBweCAxLjJweCAwcHggIzNiNjIyNSwgMHB4IDEuNnB4IDBweCAjM2I2MjI1LFxcclxcbiAgICAgIDBweCAycHggMHB4ICMzYjYyMjUsIDBweCAyLjJweCAwcHggIzNiNjIyNSwgMHB4IDIuNnB4IDBweCAjM2I2MjI1LFxcclxcbiAgICAgIDBweCAzcHggMHB4ICMzYjYyMjUsIDBweCAzLjJweCAwcHggIzNiNjIyNSwgMHB4IDMuNnB4IDBweCAjM2I2MjI1LFxcclxcbiAgICAgIDBweCA0cHggMHB4ICMzYjYyMjUsIDBweCA0LjJweCAwcHggIzNiNjIyNSwgMHB4IDQuNnB4IDBweCAjM2I2MjI1LFxcclxcbiAgICAgIDBweCA0LjdweCA2cHggIzFmNTQwMTtcXHJcXG4gIH1cXHJcXG4gIC50aW1lIHAge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4IGJsYWNrLCAzcHggM3B4IDNweCBibGFjaywgNHB4IDRweCA0cHggYmxhY2ssXFxyXFxuICAgICAgOHB4IDhweCA1cHggYmxhY2s7XFxyXFxuICB9XFxyXFxuICAuY291bnRkb3duIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMzVweDtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB9XFxyXFxuICAudGltZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMTVweDtcXHJcXG4gIH1cXHJcXG4gIC5saW5rLWRlYyB7XFxyXFxuICAgIHRvcDogNXB4O1xcclxcbiAgICB3aWR0aDogMzAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I2MjI1O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG4vKiB4bWFzICAqL1xcclxcblxcclxcbi54bWFzIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwicGhvdG9zL3htYXNkZWNvLmpwZ1xcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGluay14bWFzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOTA0Mjk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxufVxcclxcblxcclxcbi8qIGhpZGUgKi9cXHJcXG5cXHJcXG4uaGlkZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXVkaW9zL3NsZWlnaGJlbGxzLndhdlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhdWRpb3MveG1hc3Nvbmcud2F2XCI7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHhtYXNUcmVlIGZyb20gJy4vcGhvdG9zL3htYXN0cmVlLmpwZydcclxuaW1wb3J0IHsgeG1hc0NvdW50ZG93biwgY291bnRkb3duIH0gZnJvbSAnLi9tb2R1bGVzL2NvdW50ZG93bi5qcyc7XHJcbmltcG9ydCBjcmVhdGVTbm93Zmxha2UgZnJvbSAnLi9tb2R1bGVzL3Nub3dmbGFrZXMnO1xyXG5pbXBvcnQgc291bmQxIGZyb20gJy4vYXVkaW9zL3NsZWlnaGJlbGxzLndhdic7XHJcbmltcG9ydCBzb3VuZDIgZnJvbSAnLi9hdWRpb3MveG1hc3Nvbmcud2F2JztcclxuXHJcbmNvbnN0IHBsYXlTb3VuZDIgPSAoKSA9PiB7XHJcbiAgY29uc3QgYXVkaW8yID0gbmV3IEF1ZGlvKHNvdW5kMSk7XHJcbiAgYXVkaW8yLnBsYXkoKTtcclxufTtcclxuY29uc3QgcGxheVNvdW5kID0gKCkgPT4ge1xyXG4gIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKHNvdW5kMik7XHJcbiAgYXVkaW8ucGxheSgpO1xyXG59O1xyXG5cclxuY29uc3QgZGVjQmFja2dyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlY2VtYmVyJyk7XHJcblxyXG5kZWNCYWNrZ3Iuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHt4bWFzVHJlZX0nKWA7XHJcblxyXG5zZXRJbnRlcnZhbChjb3VudGRvd24sIDEwMDApO1xyXG5zZXRJbnRlcnZhbCh4bWFzQ291bnRkb3duLCAxMDAwKTtcclxuc2V0SW50ZXJ2YWwoY3JlYXRlU25vd2ZsYWtlLCA2MDApO1xyXG5cclxuY29uc3QgZGVjTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saW5rLWRlYycpO1xyXG5cclxuY29uc3QgeG1hc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy54bWFzJyk7XHJcbmNvbnN0IGRlY0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWNlbWJlcicpO1xyXG5cclxuZGVjTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBwbGF5U291bmQoKTtcclxuICB4bWFzQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICBkZWNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG59KTtcclxuXHJcblxyXG5jb25zdCBsaW5rWG1hcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saW5rLXhtYXMnKTtcclxubGlua1htYXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgcGxheVNvdW5kMigpO1xyXG4gIHhtYXNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gIGRlY0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsImNvbnN0IGRlY2VtYmVyID0gbmV3IERhdGUoXCJEZWNlbWJlciAxIDIwMjMgMDA6MDA6MDBcIik7XHJcbmNvbnN0IGNvdW50ZG93biA9ICgpID0+IHtcclxuICAgIGNvbnN0IGN1cnJlbnQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc3QgbGVmdCA9IGRlY2VtYmVyIC0gY3VycmVudDtcclxuICAgIGxldCBkYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RheVwiKTtcclxuICAgIGxldCBob3VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNob3VyXCIpO1xyXG4gICAgbGV0IG1pbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWluXCIpO1xyXG4gICAgbGV0IHNlYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VjXCIpO1xyXG4gICAgY29uc3QgZCA9IE1hdGguZmxvb3IobGVmdCAvIDEwMDAgLyA2MCAvIDYwIC8gMjQpO1xyXG4gICAgY29uc3QgaCA9IE1hdGguZmxvb3IoKGxlZnQgLyAxMDAwIC8gNjAgLyA2MCkgJSAyNCk7XHJcbiAgICBjb25zdCBtID0gTWF0aC5mbG9vcigobGVmdCAvIDEwMDAgLyA2MCkgJSA2MCk7XHJcbiAgICBjb25zdCBzID0gTWF0aC5mbG9vcigobGVmdCAvIDEwMDApICUgNjApO1xyXG4gICAgZGF5LmlubmVyVGV4dCA9IGQ7XHJcbiAgICBob3VyLmlubmVyVGV4dCA9IGggPCAxMCA/IFwiMFwiICsgaCA6IGg7XHJcbiAgICBtaW4uaW5uZXJUZXh0ID0gbSA8IDEwID8gXCIwXCIgKyBtIDogbTtcclxuICAgIHNlYy5pbm5lclRleHQgPSBzIDwgMTAgPyBcIjBcIiArIHMgOiBzO1xyXG59XHJcblxyXG5jb25zdCB4bWFzID0gbmV3IERhdGUoXCJEZWNlbWJlciAyNCAyMDIzIDAwOjAwOjAwXCIpO1xyXG5cclxuY29uc3QgeG1hc0NvdW50ZG93biA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNpdHRpbmcgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc3QgcmVtYWluaW5nID0geG1hcyAtIHNpdHRpbmc7XHJcbiAgICBsZXQgZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN4ZGF5XCIpO1xyXG4gICAgbGV0IGhvdXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3hob3VyXCIpO1xyXG4gICAgbGV0IG1pbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjeG1pblwiKTtcclxuICAgIGxldCBzZWMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3hzZWNcIik7XHJcbiAgICBjb25zdCBkID0gTWF0aC5mbG9vcihyZW1haW5pbmcgLyAxMDAwIC8gNjAgLyA2MCAvIDI0KTtcclxuICAgIGNvbnN0IGggPSBNYXRoLmZsb29yKChyZW1haW5pbmcgLyAxMDAwIC8gNjAgLyA2MCkgJSAyNCk7XHJcbiAgICBjb25zdCBtID0gTWF0aC5mbG9vcigocmVtYWluaW5nIC8gMTAwMCAvIDYwKSAlIDYwKTtcclxuICAgIGNvbnN0IHMgPSBNYXRoLmZsb29yKChyZW1haW5pbmcgLyAxMDAwKSAlIDYwKTtcclxuICAgIGRheS5pbm5lckhUTUwgPSBkO1xyXG4gICAgaG91ci5pbm5lckhUTUwgPSBoIDwgMTAgPyBcIjBcIiArIGggOiBoO1xyXG4gICAgbWluLmlubmVySFRNTCA9IG0gPCAxMCA/IFwiMFwiICsgbSA6IG07XHJcbiAgICBzZWMuaW5uZXJIVE1MID0gcyA8IDEwID8gXCIwXCIgKyBzIDogcztcclxufVxyXG5leHBvcnQgeyBjb3VudGRvd24sIHhtYXNDb3VudGRvd24gfTsiLCJjb25zdCBjcmVhdGVTbm93Zmxha2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzbm93Zmxha2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHNub3dmbGFrZS5jbGFzc0xpc3QuYWRkKCdzbm93Zmxha2UnKTtcclxuICAgIHNub3dmbGFrZS5zdHlsZS5sZWZ0ID0gTWF0aC5yYW5kb20oKSAqIHdpbmRvdy5pbm5lcldpZHRoICsgJ3B4JztcclxuICAgIHNub3dmbGFrZS5zdHlsZS5hbmltYXRpb25EdXJhdGlvbiA9IE1hdGgucmFuZG9tKCkgKiA1ICsgNSArICdzJztcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbm93LWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKHNub3dmbGFrZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBzbm93Zmxha2UucmVtb3ZlKCk7XHJcbiAgICB9LCA5MDAwKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTbm93Zmxha2U7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9