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
/* harmony import */ var _modules_playSounds__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/playSounds */ "./src/modules/playSounds.js");
/* harmony import */ var _modules_displaySections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/displaySections */ "./src/modules/displaySections.js");






const decBackgr = document.querySelector('.december');

decBackgr.style.backgroundImage = `url('${_photos_xmastree_jpg__WEBPACK_IMPORTED_MODULE_1__}')`;

setInterval(_modules_countdown_js__WEBPACK_IMPORTED_MODULE_2__.countdown, 1000);
setInterval(_modules_countdown_js__WEBPACK_IMPORTED_MODULE_2__.xmasCountdown, 1000);
setInterval(_modules_snowflakes__WEBPACK_IMPORTED_MODULE_3__["default"], 600);

const decLink = document.querySelector('.link-dec');
decLink.addEventListener('click', () => {
  (0,_modules_playSounds__WEBPACK_IMPORTED_MODULE_4__.playSound)();
  (0,_modules_displaySections__WEBPACK_IMPORTED_MODULE_5__.showXmas)();
});

const linkXmas = document.querySelector('.link-xmas');
linkXmas.addEventListener('click', () => {
  (0,_modules_playSounds__WEBPACK_IMPORTED_MODULE_4__.playSound2)();
  (0,_modules_displaySections__WEBPACK_IMPORTED_MODULE_5__.showDec)();
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

/***/ "./src/modules/displaySections.js":
/*!****************************************!*\
  !*** ./src/modules/displaySections.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showDec": () => (/* binding */ showDec),
/* harmony export */   "showXmas": () => (/* binding */ showXmas)
/* harmony export */ });
const xmasContainer = document.querySelector('.xmas');
const decContainer = document.querySelector('.december');
const showDec = () => {
    xmasContainer.classList.add('hide');
    decContainer.classList.remove('hide');
}

const showXmas = () => {
    xmasContainer.classList.remove('hide');
    decContainer.classList.add('hide');
}


/***/ }),

/***/ "./src/modules/playSounds.js":
/*!***********************************!*\
  !*** ./src/modules/playSounds.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "playSound": () => (/* binding */ playSound),
/* harmony export */   "playSound2": () => (/* binding */ playSound2)
/* harmony export */ });
/* harmony import */ var _audios_sleighbells_wav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../audios/sleighbells.wav */ "./src/audios/sleighbells.wav");
/* harmony import */ var _audios_xmassong_wav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../audios/xmassong.wav */ "./src/audios/xmassong.wav");



const playSound2 = () => {
    const audio2 = new Audio(_audios_sleighbells_wav__WEBPACK_IMPORTED_MODULE_0__["default"]);
    audio2.play();
};
const playSound = () => {
    const audio = new Audio(_audios_xmassong_wav__WEBPACK_IMPORTED_MODULE_1__["default"]);
    audio.play();
};



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVitDO0FBQ0g7QUFDNUM7QUFDQTtBQUNBLDZCQUE2QiwrREFBTTtBQUNuQztBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNERBQU07QUFDbEM7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsaUVBQWUsZUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL2RlY2VtYmVyY291bnRkb3duLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9kZWNlbWJlcmNvdW50ZG93bi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZGVjZW1iZXJjb3VudGRvd24vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2RlY2VtYmVyY291bnRkb3duLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZGVjZW1iZXJjb3VudGRvd24vLi9zcmMvYXVkaW9zL3NsZWlnaGJlbGxzLndhdiIsIndlYnBhY2s6Ly9kZWNlbWJlcmNvdW50ZG93bi8uL3NyYy9hdWRpb3MveG1hc3Nvbmcud2F2Iiwid2VicGFjazovL2RlY2VtYmVyY291bnRkb3duLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2RlY2VtYmVyY291bnRkb3duLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2RlY2VtYmVyY291bnRkb3duLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9kZWNlbWJlcmNvdW50ZG93bi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9kZWNlbWJlcmNvdW50ZG93bi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9kZWNlbWJlcmNvdW50ZG93bi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2RlY2VtYmVyY291bnRkb3duLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZGVjZW1iZXJjb3VudGRvd24vLi9zcmMvZGVjLmpzIiwid2VicGFjazovL2RlY2VtYmVyY291bnRkb3duLy4vc3JjL21vZHVsZXMvY291bnRkb3duLmpzIiwid2VicGFjazovL2RlY2VtYmVyY291bnRkb3duLy4vc3JjL21vZHVsZXMvZGlzcGxheVNlY3Rpb25zLmpzIiwid2VicGFjazovL2RlY2VtYmVyY291bnRkb3duLy4vc3JjL21vZHVsZXMvcGxheVNvdW5kcy5qcyIsIndlYnBhY2s6Ly9kZWNlbWJlcmNvdW50ZG93bi8uL3NyYy9tb2R1bGVzL3Nub3dmbGFrZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcInBob3Rvcy94bWFzZGVjby5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi5iYWNrZ3JvdW5kIHtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IHNvZnQtbGlnaHQ7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuLyogLmRlY2VtYmVyIHtcXHJcXG59ICovXFxyXFxuLmxpbmtzIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHotaW5kZXg6IDEwMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHJpZ2h0OiA1JTtcXHJcXG4gIHRvcDogMyU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcbi5saW5rLWRlYyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xcclxcbn1cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGNvbG9yOiAjZjJlOGNmO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gIHRleHQtc2hhZG93OiA1cHggNXB4IDRweCAjMTAxMDEwO1xcclxcbiAgZm9udC1zaXplOiA2NXB4O1xcclxcbiAgbWFyZ2luOiAtMTcwcHggMCA0MHB4O1xcclxcbn1cXHJcXG4uY291bnRkb3duIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xcclxcbn1cXHJcXG5cXHJcXG4udGltZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAxNXB4O1xcclxcbn1cXHJcXG4udGltZSBoMiB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMzhweDtcXHJcXG4gIG1hcmdpbjogMCAwIDBweCAwO1xcclxcbiAgY29sb3I6ICM2YTk5NGU7XFxyXFxuICB0ZXh0LXNoYWRvdzogMHB4IDAuMnB4IDBweCAjM2I2MjI1LCAwcHggMC41cHggMHB4ICMzYjYyMjUsIDBweCAxcHggMHB4ICMzYjYyMjUsXFxyXFxuICAgIDBweCAxLjJweCAwcHggIzNiNjIyNSwgMHB4IDEuNXB4IDBweCAjM2I2MjI1LCAwcHggMnB4IDBweCAjM2I2MjI1LFxcclxcbiAgICAwcHggMi4ycHggMHB4ICMzYjYyMjUsIDBweCAyLjVweCAwcHggIzNiNjIyNSwgMHB4IDNweCAwcHggIzNiNjIyNSxcXHJcXG4gICAgMHB4IDMuMnB4IDBweCAjM2I2MjI1LCAwcHggMy41cHggMHB4ICMzYjYyMjUsIDBweCA0cHggMHB4ICMzYjYyMjUsXFxyXFxuICAgIDBweCA0LjJweCAwcHggIzNiNjIyNSwgMHB4IDQuNXB4IDBweCAjM2I2MjI1LCAwcHggNXB4IDBweCAjM2I2MjI1LFxcclxcbiAgICAwcHggNS4ycHggNXB4ICMxODM0MDg7XFxyXFxufVxcclxcbi50aW1lIHAge1xcclxcbiAgY29sb3I6ICNmMmU4Y2Y7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LXNpemU6IDI1cHg7XFxyXFxuICB0ZXh0LXNoYWRvdzogM3B4IDNweCAzcHggYmxhY2ssIDRweCA0cHggNHB4IGJsYWNrLCA4cHggOHB4IDVweCBibGFjaztcXHJcXG59XFxyXFxuLnNub3ctY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHotaW5kZXg6IDk5O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTbm93Zmxha2UgYW5pbWF0aW9uICovXFxyXFxuLnNub3dmbGFrZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogMTVweDtcXHJcXG4gIGhlaWdodDogMTVweDtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBvcGFjaXR5OiAwLjY7XFxyXFxuICBhbmltYXRpb246IHNub3cgM3MgbGluZWFyIGluZmluaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNub3cge1xcclxcbiAgMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJ2aCk7XFxyXFxuICAgIG9wYWNpdHk6IDAuNzk7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHZoKTtcXHJcXG4gICAgb3BhY2l0eTogMC41O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xcclxcbiAgLmhlYWRlciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDVweDtcXHJcXG4gICAgbWFyZ2luOiAtMTgwcHggMCA0MHB4O1xcclxcbiAgfVxcclxcbiAgLnRpbWUgaDIge1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICAgIHRleHQtc2hhZG93OiAwcHggMC4ycHggMHB4ICMzYjYyMjUsIDBweCAwLjZweCAwcHggIzNiNjIyNSxcXHJcXG4gICAgICAwcHggMXB4IDBweCAjM2I2MjI1LCAwcHggMS4ycHggMHB4ICMzYjYyMjUsIDBweCAxLjZweCAwcHggIzNiNjIyNSxcXHJcXG4gICAgICAwcHggMnB4IDBweCAjM2I2MjI1LCAwcHggMi4ycHggMHB4ICMzYjYyMjUsIDBweCAyLjZweCAwcHggIzNiNjIyNSxcXHJcXG4gICAgICAwcHggM3B4IDBweCAjM2I2MjI1LCAwcHggMy4ycHggMHB4ICMzYjYyMjUsIDBweCAzLjZweCAwcHggIzNiNjIyNSxcXHJcXG4gICAgICAwcHggNHB4IDBweCAjM2I2MjI1LCAwcHggNC4ycHggMHB4ICMzYjYyMjUsIDBweCA0LjZweCAwcHggIzNiNjIyNSxcXHJcXG4gICAgICAwcHggNC43cHggNnB4ICMxZjU0MDE7XFxyXFxuICB9XFxyXFxuICAudGltZSBwIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDJweCBibGFjaywgM3B4IDNweCAzcHggYmxhY2ssIDRweCA0cHggNHB4IGJsYWNrLFxcclxcbiAgICAgIDhweCA4cHggNXB4IGJsYWNrO1xcclxcbiAgfVxcclxcbiAgLmNvdW50ZG93biB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDM1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgfVxcclxcbiAgLnRpbWUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDE1cHg7XFxyXFxuICB9XFxyXFxuICAubGluay1kZWMge1xcclxcbiAgICB0b3A6IDVweDtcXHJcXG4gICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiNjIyNTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLyogeG1hcyAgKi9cXHJcXG5cXHJcXG4ueG1hcyB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGluay14bWFzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOTA0Mjk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxufVxcclxcblxcclxcbi8qIGhpZGUgKi9cXHJcXG5cXHJcXG4uaGlkZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGlDQUFpQztFQUNqQywrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGdCQUFnQjtBQUNsQjtBQUNBO0dBQ0c7QUFDSDtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osU0FBUztFQUNULFNBQVM7RUFDVCxPQUFPO0VBQ1AsWUFBWTtFQUNaLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGdDQUFnQztFQUNoQyxlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztFQUNkOzs7Ozt5QkFLdUI7QUFDekI7QUFDQTtFQUNFLGNBQWM7RUFDZCxTQUFTO0VBQ1QsZUFBZTtFQUNmLG9FQUFvRTtBQUN0RTtBQUNBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUEsd0JBQXdCO0FBQ3hCO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0U7SUFDRSwyQkFBMkI7SUFDM0IsYUFBYTtFQUNmO0VBQ0E7SUFDRSw0QkFBNEI7SUFDNUIsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGVBQWU7SUFDZixxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLGVBQWU7SUFDZjs7Ozs7MkJBS3VCO0VBQ3pCO0VBQ0E7SUFDRSxTQUFTO0lBQ1QsZUFBZTtJQUNmO3VCQUNtQjtFQUNyQjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixZQUFZO0VBQ2Q7RUFDQTtJQUNFLFFBQVE7SUFDUixVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLG1CQUFtQjtFQUNyQjtBQUNGO0FBQ0EsVUFBVTs7QUFFVjtFQUNFLHlEQUE0QztBQUM5Qzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUEsU0FBUzs7QUFFVDtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi5iYWNrZ3JvdW5kIHtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IHNvZnQtbGlnaHQ7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuLyogLmRlY2VtYmVyIHtcXHJcXG59ICovXFxyXFxuLmxpbmtzIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHotaW5kZXg6IDEwMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHJpZ2h0OiA1JTtcXHJcXG4gIHRvcDogMyU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcbi5saW5rLWRlYyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xcclxcbn1cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGNvbG9yOiAjZjJlOGNmO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gIHRleHQtc2hhZG93OiA1cHggNXB4IDRweCAjMTAxMDEwO1xcclxcbiAgZm9udC1zaXplOiA2NXB4O1xcclxcbiAgbWFyZ2luOiAtMTcwcHggMCA0MHB4O1xcclxcbn1cXHJcXG4uY291bnRkb3duIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xcclxcbn1cXHJcXG5cXHJcXG4udGltZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAxNXB4O1xcclxcbn1cXHJcXG4udGltZSBoMiB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMzhweDtcXHJcXG4gIG1hcmdpbjogMCAwIDBweCAwO1xcclxcbiAgY29sb3I6ICM2YTk5NGU7XFxyXFxuICB0ZXh0LXNoYWRvdzogMHB4IDAuMnB4IDBweCAjM2I2MjI1LCAwcHggMC41cHggMHB4ICMzYjYyMjUsIDBweCAxcHggMHB4ICMzYjYyMjUsXFxyXFxuICAgIDBweCAxLjJweCAwcHggIzNiNjIyNSwgMHB4IDEuNXB4IDBweCAjM2I2MjI1LCAwcHggMnB4IDBweCAjM2I2MjI1LFxcclxcbiAgICAwcHggMi4ycHggMHB4ICMzYjYyMjUsIDBweCAyLjVweCAwcHggIzNiNjIyNSwgMHB4IDNweCAwcHggIzNiNjIyNSxcXHJcXG4gICAgMHB4IDMuMnB4IDBweCAjM2I2MjI1LCAwcHggMy41cHggMHB4ICMzYjYyMjUsIDBweCA0cHggMHB4ICMzYjYyMjUsXFxyXFxuICAgIDBweCA0LjJweCAwcHggIzNiNjIyNSwgMHB4IDQuNXB4IDBweCAjM2I2MjI1LCAwcHggNXB4IDBweCAjM2I2MjI1LFxcclxcbiAgICAwcHggNS4ycHggNXB4ICMxODM0MDg7XFxyXFxufVxcclxcbi50aW1lIHAge1xcclxcbiAgY29sb3I6ICNmMmU4Y2Y7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LXNpemU6IDI1cHg7XFxyXFxuICB0ZXh0LXNoYWRvdzogM3B4IDNweCAzcHggYmxhY2ssIDRweCA0cHggNHB4IGJsYWNrLCA4cHggOHB4IDVweCBibGFjaztcXHJcXG59XFxyXFxuLnNub3ctY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHotaW5kZXg6IDk5O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTbm93Zmxha2UgYW5pbWF0aW9uICovXFxyXFxuLnNub3dmbGFrZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogMTVweDtcXHJcXG4gIGhlaWdodDogMTVweDtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBvcGFjaXR5OiAwLjY7XFxyXFxuICBhbmltYXRpb246IHNub3cgM3MgbGluZWFyIGluZmluaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNub3cge1xcclxcbiAgMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJ2aCk7XFxyXFxuICAgIG9wYWNpdHk6IDAuNzk7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHZoKTtcXHJcXG4gICAgb3BhY2l0eTogMC41O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xcclxcbiAgLmhlYWRlciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDVweDtcXHJcXG4gICAgbWFyZ2luOiAtMTgwcHggMCA0MHB4O1xcclxcbiAgfVxcclxcbiAgLnRpbWUgaDIge1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICAgIHRleHQtc2hhZG93OiAwcHggMC4ycHggMHB4ICMzYjYyMjUsIDBweCAwLjZweCAwcHggIzNiNjIyNSxcXHJcXG4gICAgICAwcHggMXB4IDBweCAjM2I2MjI1LCAwcHggMS4ycHggMHB4ICMzYjYyMjUsIDBweCAxLjZweCAwcHggIzNiNjIyNSxcXHJcXG4gICAgICAwcHggMnB4IDBweCAjM2I2MjI1LCAwcHggMi4ycHggMHB4ICMzYjYyMjUsIDBweCAyLjZweCAwcHggIzNiNjIyNSxcXHJcXG4gICAgICAwcHggM3B4IDBweCAjM2I2MjI1LCAwcHggMy4ycHggMHB4ICMzYjYyMjUsIDBweCAzLjZweCAwcHggIzNiNjIyNSxcXHJcXG4gICAgICAwcHggNHB4IDBweCAjM2I2MjI1LCAwcHggNC4ycHggMHB4ICMzYjYyMjUsIDBweCA0LjZweCAwcHggIzNiNjIyNSxcXHJcXG4gICAgICAwcHggNC43cHggNnB4ICMxZjU0MDE7XFxyXFxuICB9XFxyXFxuICAudGltZSBwIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDJweCBibGFjaywgM3B4IDNweCAzcHggYmxhY2ssIDRweCA0cHggNHB4IGJsYWNrLFxcclxcbiAgICAgIDhweCA4cHggNXB4IGJsYWNrO1xcclxcbiAgfVxcclxcbiAgLmNvdW50ZG93biB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDM1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgfVxcclxcbiAgLnRpbWUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDE1cHg7XFxyXFxuICB9XFxyXFxuICAubGluay1kZWMge1xcclxcbiAgICB0b3A6IDVweDtcXHJcXG4gICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiNjIyNTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLyogeG1hcyAgKi9cXHJcXG5cXHJcXG4ueG1hcyB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcInBob3Rvcy94bWFzZGVjby5qcGdcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmsteG1hcyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDkwNDI5O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBoaWRlICovXFxyXFxuXFxyXFxuLmhpZGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImF1ZGlvcy9zbGVpZ2hiZWxscy53YXZcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXVkaW9zL3htYXNzb25nLndhdlwiOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB4bWFzVHJlZSBmcm9tICcuL3Bob3Rvcy94bWFzdHJlZS5qcGcnXHJcbmltcG9ydCB7IHhtYXNDb3VudGRvd24sIGNvdW50ZG93biB9IGZyb20gJy4vbW9kdWxlcy9jb3VudGRvd24uanMnO1xyXG5pbXBvcnQgY3JlYXRlU25vd2ZsYWtlIGZyb20gJy4vbW9kdWxlcy9zbm93Zmxha2VzJztcclxuaW1wb3J0IHsgcGxheVNvdW5kLCBwbGF5U291bmQyIH0gZnJvbSAnLi9tb2R1bGVzL3BsYXlTb3VuZHMnO1xyXG5pbXBvcnQgeyBzaG93WG1hcywgc2hvd0RlYyB9IGZyb20gJy4vbW9kdWxlcy9kaXNwbGF5U2VjdGlvbnMnO1xyXG5jb25zdCBkZWNCYWNrZ3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVjZW1iZXInKTtcclxuXHJcbmRlY0JhY2tnci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke3htYXNUcmVlfScpYDtcclxuXHJcbnNldEludGVydmFsKGNvdW50ZG93biwgMTAwMCk7XHJcbnNldEludGVydmFsKHhtYXNDb3VudGRvd24sIDEwMDApO1xyXG5zZXRJbnRlcnZhbChjcmVhdGVTbm93Zmxha2UsIDYwMCk7XHJcblxyXG5jb25zdCBkZWNMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpbmstZGVjJyk7XHJcbmRlY0xpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgcGxheVNvdW5kKCk7XHJcbiAgc2hvd1htYXMoKTtcclxufSk7XHJcblxyXG5jb25zdCBsaW5rWG1hcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saW5rLXhtYXMnKTtcclxubGlua1htYXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgcGxheVNvdW5kMigpO1xyXG4gIHNob3dEZWMoKTtcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiY29uc3QgZGVjZW1iZXIgPSBuZXcgRGF0ZShcIkRlY2VtYmVyIDEgMjAyMyAwMDowMDowMFwiKTtcclxuY29uc3QgY291bnRkb3duID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY3VycmVudCA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCBsZWZ0ID0gZGVjZW1iZXIgLSBjdXJyZW50O1xyXG4gICAgbGV0IGRheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF5XCIpO1xyXG4gICAgbGV0IGhvdXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hvdXJcIik7XHJcbiAgICBsZXQgbWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtaW5cIik7XHJcbiAgICBsZXQgc2VjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWNcIik7XHJcbiAgICBjb25zdCBkID0gTWF0aC5mbG9vcihsZWZ0IC8gMTAwMCAvIDYwIC8gNjAgLyAyNCk7XHJcbiAgICBjb25zdCBoID0gTWF0aC5mbG9vcigobGVmdCAvIDEwMDAgLyA2MCAvIDYwKSAlIDI0KTtcclxuICAgIGNvbnN0IG0gPSBNYXRoLmZsb29yKChsZWZ0IC8gMTAwMCAvIDYwKSAlIDYwKTtcclxuICAgIGNvbnN0IHMgPSBNYXRoLmZsb29yKChsZWZ0IC8gMTAwMCkgJSA2MCk7XHJcbiAgICBkYXkuaW5uZXJUZXh0ID0gZDtcclxuICAgIGhvdXIuaW5uZXJUZXh0ID0gaCA8IDEwID8gXCIwXCIgKyBoIDogaDtcclxuICAgIG1pbi5pbm5lclRleHQgPSBtIDwgMTAgPyBcIjBcIiArIG0gOiBtO1xyXG4gICAgc2VjLmlubmVyVGV4dCA9IHMgPCAxMCA/IFwiMFwiICsgcyA6IHM7XHJcbn1cclxuXHJcbmNvbnN0IHhtYXMgPSBuZXcgRGF0ZShcIkRlY2VtYmVyIDI0IDIwMjMgMDA6MDA6MDBcIik7XHJcblxyXG5jb25zdCB4bWFzQ291bnRkb3duID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2l0dGluZyA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCByZW1haW5pbmcgPSB4bWFzIC0gc2l0dGluZztcclxuICAgIGxldCBkYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3hkYXlcIik7XHJcbiAgICBsZXQgaG91ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjeGhvdXJcIik7XHJcbiAgICBsZXQgbWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN4bWluXCIpO1xyXG4gICAgbGV0IHNlYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjeHNlY1wiKTtcclxuICAgIGNvbnN0IGQgPSBNYXRoLmZsb29yKHJlbWFpbmluZyAvIDEwMDAgLyA2MCAvIDYwIC8gMjQpO1xyXG4gICAgY29uc3QgaCA9IE1hdGguZmxvb3IoKHJlbWFpbmluZyAvIDEwMDAgLyA2MCAvIDYwKSAlIDI0KTtcclxuICAgIGNvbnN0IG0gPSBNYXRoLmZsb29yKChyZW1haW5pbmcgLyAxMDAwIC8gNjApICUgNjApO1xyXG4gICAgY29uc3QgcyA9IE1hdGguZmxvb3IoKHJlbWFpbmluZyAvIDEwMDApICUgNjApO1xyXG4gICAgZGF5LmlubmVySFRNTCA9IGQ7XHJcbiAgICBob3VyLmlubmVySFRNTCA9IGggPCAxMCA/IFwiMFwiICsgaCA6IGg7XHJcbiAgICBtaW4uaW5uZXJIVE1MID0gbSA8IDEwID8gXCIwXCIgKyBtIDogbTtcclxuICAgIHNlYy5pbm5lckhUTUwgPSBzIDwgMTAgPyBcIjBcIiArIHMgOiBzO1xyXG59XHJcbmV4cG9ydCB7IGNvdW50ZG93biwgeG1hc0NvdW50ZG93biB9OyIsImNvbnN0IHhtYXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcueG1hcycpO1xyXG5jb25zdCBkZWNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVjZW1iZXInKTtcclxuY29uc3Qgc2hvd0RlYyA9ICgpID0+IHtcclxuICAgIHhtYXNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgZGVjQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxufVxyXG5cclxuY29uc3Qgc2hvd1htYXMgPSAoKSA9PiB7XHJcbiAgICB4bWFzQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgIGRlY0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbn1cclxuZXhwb3J0IHsgc2hvd1htYXMsIHNob3dEZWMgfTsiLCJpbXBvcnQgc291bmQxIGZyb20gJy4uL2F1ZGlvcy9zbGVpZ2hiZWxscy53YXYnO1xyXG5pbXBvcnQgc291bmQyIGZyb20gJy4uL2F1ZGlvcy94bWFzc29uZy53YXYnO1xyXG5cclxuY29uc3QgcGxheVNvdW5kMiA9ICgpID0+IHtcclxuICAgIGNvbnN0IGF1ZGlvMiA9IG5ldyBBdWRpbyhzb3VuZDEpO1xyXG4gICAgYXVkaW8yLnBsYXkoKTtcclxufTtcclxuY29uc3QgcGxheVNvdW5kID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8oc291bmQyKTtcclxuICAgIGF1ZGlvLnBsYXkoKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IHBsYXlTb3VuZCwgcGxheVNvdW5kMiB9OyIsImNvbnN0IGNyZWF0ZVNub3dmbGFrZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNub3dmbGFrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc25vd2ZsYWtlLmNsYXNzTGlzdC5hZGQoJ3Nub3dmbGFrZScpO1xyXG4gICAgc25vd2ZsYWtlLnN0eWxlLmxlZnQgPSBNYXRoLnJhbmRvbSgpICogd2luZG93LmlubmVyV2lkdGggKyAncHgnO1xyXG4gICAgc25vd2ZsYWtlLnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uID0gTWF0aC5yYW5kb20oKSAqIDUgKyA1ICsgJ3MnO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNub3ctY29udGFpbmVyJykuYXBwZW5kQ2hpbGQoc25vd2ZsYWtlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHNub3dmbGFrZS5yZW1vdmUoKTtcclxuICAgIH0sIDkwMDApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNub3dmbGFrZTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=