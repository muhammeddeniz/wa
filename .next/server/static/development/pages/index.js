module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/button/button.scss":
/*!*******************************************!*\
  !*** ./src/components/button/button.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/button/button.tsx":
/*!******************************************!*\
  !*** ./src/components/button/button.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button.scss */ "./src/components/button/button.scss");
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_button_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\muham\\Desktop\\working-area\\src\\components\\button\\button.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Button = (_ref) => {
  let {
    red,
    green,
    blue,
    children,
    input
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["red", "green", "blue", "children", "input"]);

  const btnClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()("btn", {
    "btn-red": red,
    "btn-green": green,
    "btn-blue": blue,
    "btn-input": input
  });
  return __jsx("button", _extends({
    className: btnClass
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/components/button/index.ts":
/*!****************************************!*\
  !*** ./src/components/button/index.ts ***!
  \****************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ "./src/components/button/button.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _button__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/card-1/card1.scss":
/*!******************************************!*\
  !*** ./src/components/card-1/card1.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/card-1/card1.tsx":
/*!*****************************************!*\
  !*** ./src/components/card-1/card1.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _card1_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card1.scss */ "./src/components/card-1/card1.scss");
/* harmony import */ var _card1_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_card1_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\muham\\Desktop\\working-area\\src\\components\\card-1\\card1.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Card1 = (_ref) => {
  let {
    title,
    text
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["title", "text"]);

  return __jsx("div", _extends({
    className: "card1"
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: "card1-image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, "\xC7al\u0131\u015Fmaya Ba\u015Fla"), __jsx("img", {
    className: "bottom-arrow",
    src: "/bottom.svg",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "card1-description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, " ", title ? title : "default", " "), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, text ? text : " ")));
};

/* harmony default export */ __webpack_exports__["default"] = (Card1);

/***/ }),

/***/ "./src/components/card-1/index.ts":
/*!****************************************!*\
  !*** ./src/components/card-1/index.ts ***!
  \****************************************/
/*! exports provided: Card1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _card1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card1 */ "./src/components/card-1/card1.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Card1", function() { return _card1__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/card-2/card2.scss":
/*!******************************************!*\
  !*** ./src/components/card-2/card2.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/card-2/card2.tsx":
/*!*****************************************!*\
  !*** ./src/components/card-2/card2.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _card2_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card2.scss */ "./src/components/card-2/card2.scss");
/* harmony import */ var _card2_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_card2_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index */ "./src/components/index.ts");
var _jsxFileName = "C:\\Users\\muham\\Desktop\\working-area\\src\\components\\card-2\\card2.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Card2 = (_ref) => {
  let {
    title,
    timerStart,
    desc
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["title", "timerStart", "desc"]);

  const {
    0: timer,
    1: setTimer
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: sa,
    1: setSa
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: dk,
    1: setDk
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: stopCount,
    1: setStopCount
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  stopCount ? setTimeout(() => {
    if (timer >= 60) {
      setTimer(0);
      setDk(dk + 1);
    } else {
      setTimer(timer + 1);
    }

    if (dk >= 60) {
      setDk(0);
      setSa(sa + 1);
    }
  }, 1000) : console.log("nothing");
  return __jsx("div", {
    className: "card2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "card2-leftside",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: "card2-leftside-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, title ? title : "default"), __jsx("p", {
    className: "card2-leftside-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, desc ? desc : "default")), __jsx("p", {
    className: "card2-count",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, sa ? sa : "0", ".", dk ? dk : "0", ".", timer, " dk"), __jsx("div", {
    className: "card2-buttons",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx(_index__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    blue: true,
    onClick: () => setStopCount(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, "Durdur"), __jsx(_index__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    green: true,
    onClick: () => setStopCount(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, "Devam"), __jsx(_index__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    red: true,
    onClick: () => {
      setStopCount(false);
      clearTimeout();
      setTimer(0);
      setDk(0);
      setSa(0);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, "S\u0131f\u0131rla")));
};

/* harmony default export */ __webpack_exports__["default"] = (Card2);

/***/ }),

/***/ "./src/components/card-2/index.ts":
/*!****************************************!*\
  !*** ./src/components/card-2/index.ts ***!
  \****************************************/
/*! exports provided: Card2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _card2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card2 */ "./src/components/card-2/card2.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Card2", function() { return _card2__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/footer/footer.scss":
/*!*******************************************!*\
  !*** ./src/components/footer/footer.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/footer/footer.tsx":
/*!******************************************!*\
  !*** ./src/components/footer/footer.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.scss */ "./src/components/footer/footer.scss");
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_footer_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\muham\\Desktop\\working-area\\src\\components\\footer\\footer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Footer = ({
  store
}) => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, "Footer"));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/footer/index.ts":
/*!****************************************!*\
  !*** ./src/components/footer/index.ts ***!
  \****************************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer */ "./src/components/footer/footer.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return _footer__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/header/header.scss":
/*!*******************************************!*\
  !*** ./src/components/header/header.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/header/header.tsx":
/*!******************************************!*\
  !*** ./src/components/header/header.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.scss */ "./src/components/header/header.scss");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\muham\\Desktop\\working-area\\src\\components\\header\\header.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Header = ({
  store
}) => {
  return __jsx("div", {
    className: "header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "header-logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, "working", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 27
    }
  }, "-area"))), __jsx("nav", {
    className: "header-nav",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, "ana sayfa"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, "en \xE7ok \xE7al\u0131\u015F\u0131lanlar")));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/header/index.ts":
/*!****************************************!*\
  !*** ./src/components/header/index.ts ***!
  \****************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/components/header/header.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _header__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/index.ts":
/*!*********************************!*\
  !*** ./src/components/index.ts ***!
  \*********************************/
/*! exports provided: Button, Header, Footer, Input, Card1, Card2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button/index */ "./src/components/button/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _button_index__WEBPACK_IMPORTED_MODULE_0__["Button"]; });

/* harmony import */ var _header_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/index */ "./src/components/header/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _header_index__WEBPACK_IMPORTED_MODULE_1__["Header"]; });

/* harmony import */ var _footer_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/index */ "./src/components/footer/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return _footer_index__WEBPACK_IMPORTED_MODULE_2__["Footer"]; });

/* harmony import */ var _input_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input/index */ "./src/components/input/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _input_index__WEBPACK_IMPORTED_MODULE_3__["Input"]; });

/* harmony import */ var _card_1_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card-1/index */ "./src/components/card-1/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Card1", function() { return _card_1_index__WEBPACK_IMPORTED_MODULE_4__["Card1"]; });

/* harmony import */ var _card_2_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card-2/index */ "./src/components/card-2/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Card2", function() { return _card_2_index__WEBPACK_IMPORTED_MODULE_5__["Card2"]; });








/***/ }),

/***/ "./src/components/input/index.ts":
/*!***************************************!*\
  !*** ./src/components/input/index.ts ***!
  \***************************************/
/*! exports provided: Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ "./src/components/input/input.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _input__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/input/input.scss":
/*!*****************************************!*\
  !*** ./src/components/input/input.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/input/input.tsx":
/*!****************************************!*\
  !*** ./src/components/input/input.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _input_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input.scss */ "./src/components/input/input.scss");
/* harmony import */ var _input_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_input_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\muham\\Desktop\\working-area\\src\\components\\input\\input.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Button = (_ref) => {
  let {
    title,
    width
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["title", "width"]);

  return __jsx("div", {
    className: "input-area",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "input-area-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, title ? title : "default"), __jsx("input", _extends({}, rest, {
    style: {
      width: width
    },
    className: "input-component",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/index */ "./src/components/index.ts");
var _jsxFileName = "C:\\Users\\muham\\Desktop\\working-area\\src\\pages\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Home = ({
  myStore
}) => {
  var _myStore$working;

  const {
    0: inTitle,
    1: setinTitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: inText,
    1: setinText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: storeSize,
    1: setStoreSize
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  return __jsx("div", {
    className: "home",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "home-new",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "home-new-input",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx(_components_index__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    onChange: e => setinTitle(e.target.value),
    title: "Yap\u0131lacak i\u015F ismi",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "home-new-input-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, __jsx(_components_index__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    onChange: e => setinText(e.target.value),
    width: 400,
    title: "Neler yap\u0131lacak",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  })), __jsx(_components_index__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: () => {
      storeSize <= 9 ? myStore.ekle({
        title: inTitle,
        text: inText
      }) : alert("Yeterince İş Eklendi.");
      setStoreSize(storeSize + 1);
    },
    input: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, "EKLE")), __jsx("div", {
    className: "home-new-cards",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, myStore.cards.map((index, key) => {
    return __jsx("div", {
      key: key,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 15
      }
    }, __jsx(_components_index__WEBPACK_IMPORTED_MODULE_2__["Card1"], {
      data: index,
      store: myStore,
      onClick: e => {
        let control;
        myStore.working.forEach(element => {
          element.title === index.title && element.text === index.text ? control = true : control = false;
        });
        control ? alert("Bu iş şu anda zaten çalışılıyor") : myStore.addWorking({
          title: index.title,
          text: index.text,
          timerStart: true
        });
      },
      title: index.title,
      text: index.text,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 19
      }
    }));
  }))), __jsx("div", {
    className: "home-working",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "home-working-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }, "\u015Eu an \xE7al\u0131\u015F\u0131l\u0131yor"), __jsx("div", {
    className: "home-working-title-underline",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  })), (_myStore$working = myStore.working) === null || _myStore$working === void 0 ? void 0 : _myStore$working.map((index, key) => {
    return __jsx("div", {
      key: key,
      className: "home-working-new",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 13
      }
    }, __jsx(_components_index__WEBPACK_IMPORTED_MODULE_2__["Card2"], {
      title: index.title,
      desc: index.text,
      timerStart: index.timerStart,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 15
      }
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["observer"])(Home));

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** multi ./src/pages/index.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\muham\Desktop\working-area\src\pages\index.tsx */"./src/pages/index.tsx");


/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "mobx-react":
/*!*****************************!*\
  !*** external "mobx-react" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcmQtMS9jYXJkMS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FyZC0xL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcmQtMi9jYXJkMi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FyZC0yL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5wdXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vYngtcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIkJ1dHRvbiIsInJlZCIsImdyZWVuIiwiYmx1ZSIsImNoaWxkcmVuIiwiaW5wdXQiLCJyZXN0IiwiYnRuQ2xhc3MiLCJjeCIsIkNhcmQxIiwidGl0bGUiLCJ0ZXh0IiwiQ2FyZDIiLCJ0aW1lclN0YXJ0IiwiZGVzYyIsInRpbWVyIiwic2V0VGltZXIiLCJ1c2VTdGF0ZSIsInNhIiwic2V0U2EiLCJkayIsInNldERrIiwic3RvcENvdW50Iiwic2V0U3RvcENvdW50Iiwic2V0VGltZW91dCIsImNvbnNvbGUiLCJsb2ciLCJjbGVhclRpbWVvdXQiLCJGb290ZXIiLCJzdG9yZSIsIkhlYWRlciIsIndpZHRoIiwiSG9tZSIsIm15U3RvcmUiLCJpblRpdGxlIiwic2V0aW5UaXRsZSIsImluVGV4dCIsInNldGluVGV4dCIsInN0b3JlU2l6ZSIsInNldFN0b3JlU2l6ZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImVrbGUiLCJhbGVydCIsImNhcmRzIiwibWFwIiwiaW5kZXgiLCJrZXkiLCJjb250cm9sIiwid29ya2luZyIsImZvckVhY2giLCJlbGVtZW50IiwiYWRkV29ya2luZyIsIm9ic2VydmVyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFFQTs7QUFTQSxNQUFNQSxNQUF3QixHQUFHLFVBTzNCO0FBQUEsTUFQNEI7QUFDOUJDLE9BRDhCO0FBRTlCQyxTQUY4QjtBQUc5QkMsUUFIOEI7QUFJOUJDLFlBSjhCO0FBSzlCQztBQUw4QixHQU81QjtBQUFBLE1BRENDLElBQ0Q7O0FBRUYsUUFBTUMsUUFBUSxHQUFHQyxpREFBRSxDQUNmLEtBRGUsRUFFZjtBQUNJLGVBQVlQLEdBRGhCO0FBRUksaUJBQWFDLEtBRmpCO0FBR0ksZ0JBQVlDLElBSGhCO0FBSUksaUJBQWFFO0FBSmpCLEdBRmUsQ0FBbkI7QUFVQSxTQUNJO0FBQVEsYUFBUyxFQUFFRTtBQUFuQixLQUFpQ0QsSUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUNLRixRQURMLENBREo7QUFLSCxDQXhCRDs7QUEwQmVKLHFFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUVBOztBQU9BLE1BQU1TLEtBQXNCLEdBQUcsVUFBOEI7QUFBQSxNQUE3QjtBQUFFQyxTQUFGO0FBQVNDO0FBQVQsR0FBNkI7QUFBQSxNQUFYTCxJQUFXOztBQUMzRCxTQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FBMkJBLElBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFDRTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlDQURGLEVBRUU7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUE4QixPQUFHLEVBQUMsYUFBbEM7QUFBZ0QsT0FBRyxFQUFDLEVBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLEVBS0U7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBTUksS0FBSyxHQUFHQSxLQUFILEdBQVcsU0FBdEIsTUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSUMsSUFBSSxHQUFHQSxJQUFILEdBQVUsR0FBbEIsQ0FGRixDQUxGLENBREY7QUFZRCxDQWJEOztBQWVlRixvRUFBZixFOzs7Ozs7Ozs7Ozs7QUN4QkE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUVBO0FBRUE7O0FBUUEsTUFBTUcsS0FBc0IsR0FBRyxVQUEwQztBQUFBLE1BQXpDO0FBQUVGLFNBQUY7QUFBU0csY0FBVDtBQUFxQkM7QUFBckIsR0FBeUM7QUFBQSxNQUFYUixJQUFXOztBQUN2RSxRQUFNO0FBQUEsT0FBQ1MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLHNEQUFRLENBQUMsQ0FBRCxDQUFsQztBQUVBLFFBQU07QUFBQSxPQUFDQyxFQUFEO0FBQUEsT0FBS0M7QUFBTCxNQUFjRixzREFBUSxDQUFDLENBQUQsQ0FBNUI7QUFDQSxRQUFNO0FBQUEsT0FBQ0csRUFBRDtBQUFBLE9BQUtDO0FBQUwsTUFBY0osc0RBQVEsQ0FBQyxDQUFELENBQTVCO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCTixzREFBUSxDQUFDLElBQUQsQ0FBMUM7QUFFQUssV0FBUyxHQUNMRSxVQUFVLENBQUMsTUFBTTtBQUNmLFFBQUlULEtBQUssSUFBSSxFQUFiLEVBQWlCO0FBQ2ZDLGNBQVEsQ0FBQyxDQUFELENBQVI7QUFDQUssV0FBSyxDQUFDRCxFQUFFLEdBQUcsQ0FBTixDQUFMO0FBQ0QsS0FIRCxNQUdPO0FBQ0xKLGNBQVEsQ0FBQ0QsS0FBSyxHQUFHLENBQVQsQ0FBUjtBQUNEOztBQUNELFFBQUlLLEVBQUUsSUFBSSxFQUFWLEVBQWM7QUFDWkMsV0FBSyxDQUFDLENBQUQsQ0FBTDtBQUNBRixXQUFLLENBQUNELEVBQUUsR0FBRyxDQUFOLENBQUw7QUFDRDtBQUNGLEdBWFMsRUFXUCxJQVhPLENBREwsR0FhTE8sT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWixDQWJKO0FBZUEsU0FDRTtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsc0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFxQ2hCLEtBQUssR0FBR0EsS0FBSCxHQUFXLFNBQXJELENBREYsRUFFRTtBQUFHLGFBQVMsRUFBQyxxQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW9DSSxJQUFJLEdBQUdBLElBQUgsR0FBVSxTQUFsRCxDQUZGLENBREYsRUFNRTtBQUFHLGFBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0ksRUFBRSxHQUFHQSxFQUFILEdBQVEsR0FEYixPQUNtQkUsRUFBRSxHQUFHQSxFQUFILEdBQVEsR0FEN0IsT0FDbUNMLEtBRG5DLFFBTkYsRUFVRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZDQUFEO0FBQVEsUUFBSSxNQUFaO0FBQWEsV0FBTyxFQUFFLE1BQU1RLFlBQVksQ0FBQyxLQUFELENBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUlFLE1BQUMsNkNBQUQ7QUFBUSxTQUFLLE1BQWI7QUFBYyxXQUFPLEVBQUUsTUFBTUEsWUFBWSxDQUFDLElBQUQsQ0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGLEVBT0UsTUFBQyw2Q0FBRDtBQUNFLE9BQUcsTUFETDtBQUVFLFdBQU8sRUFBRSxNQUFNO0FBQ2JBLGtCQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0FJLGtCQUFZO0FBQ1pYLGNBQVEsQ0FBQyxDQUFELENBQVI7QUFDQUssV0FBSyxDQUFDLENBQUQsQ0FBTDtBQUNBRixXQUFLLENBQUMsQ0FBRCxDQUFMO0FBQ0QsS0FSSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVBGLENBVkYsQ0FERjtBQWlDRCxDQXZERDs7QUF5RGVQLG9FQUFmLEU7Ozs7Ozs7Ozs7OztBQ3JFQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBRUE7O0FBTUEsTUFBTWdCLE1BQXdCLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBYTtBQUMxQyxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosQ0FESjtBQUtILENBTkQ7O0FBUWVELHFFQUFmLEU7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBRUE7O0FBTUEsTUFBTUUsTUFBd0IsR0FBRyxDQUFDO0FBQUNEO0FBQUQsQ0FBRCxLQUFhO0FBQzFDLFNBQ0k7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVYsQ0FESixDQURKLEVBSUk7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0RBRkosQ0FKSixDQURKO0FBV0gsQ0FaRDs7QUFjZUMscUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFFQTs7QUFPQSxNQUFNOUIsTUFBd0IsR0FBRyxVQUkzQjtBQUFBLE1BSjRCO0FBQzlCVSxTQUQ4QjtBQUU5QnFCO0FBRjhCLEdBSTVCO0FBQUEsTUFEQ3pCLElBQ0Q7O0FBQ0YsU0FDSTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLGFBQVMsRUFBQyxrQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWlDSSxLQUFLLEdBQUdBLEtBQUgsR0FBVyxTQUFqRCxDQURKLEVBRUksNEJBQVdKLElBQVg7QUFBaUIsU0FBSyxFQUFFO0FBQUN5QixXQUFLLEVBQUVBO0FBQVIsS0FBeEI7QUFBd0MsYUFBUyxFQUFDLGlCQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRkosQ0FESjtBQU1ILENBWEQ7O0FBYWUvQixxRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7O0FBTUEsTUFBTWdDLElBQW1CLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBaUI7QUFBQTs7QUFDM0MsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCbEIsc0RBQVEsQ0FBQyxFQUFELENBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUNtQixNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQnBCLHNEQUFRLENBQUMsRUFBRCxDQUFwQztBQUNBLFFBQU07QUFBQSxPQUFDcUIsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJ0QixzREFBUSxDQUFDLENBQUQsQ0FBMUM7QUFFQSxTQUNFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHVEQUFEO0FBQ0UsWUFBUSxFQUFHdUIsQ0FBRCxJQUFPTCxVQUFVLENBQUNLLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBRDdCO0FBRUUsU0FBSyxFQUFDLDZCQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUtFO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHVEQUFEO0FBQ0UsWUFBUSxFQUFHRixDQUFELElBQU9ILFNBQVMsQ0FBQ0csQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FENUI7QUFFRSxTQUFLLEVBQUUsR0FGVDtBQUdFLFNBQUssRUFBQyxzQkFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FMRixFQVlFLE1BQUMsd0RBQUQ7QUFDRSxXQUFPLEVBQUUsTUFBTTtBQUNiSixlQUFTLElBQUksQ0FBYixHQUNJTCxPQUFPLENBQUNVLElBQVIsQ0FBYTtBQUFFakMsYUFBSyxFQUFFd0IsT0FBVDtBQUFrQnZCLFlBQUksRUFBRXlCO0FBQXhCLE9BQWIsQ0FESixHQUVJUSxLQUFLLENBQUMsdUJBQUQsQ0FGVDtBQUdBTCxrQkFBWSxDQUFDRCxTQUFTLEdBQUcsQ0FBYixDQUFaO0FBQ0QsS0FOSDtBQU9FLFNBQUssTUFQUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWkYsQ0FERixFQXlCRTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dMLE9BQU8sQ0FBQ1ksS0FBUixDQUFjQyxHQUFkLENBQWtCLENBQUNDLEtBQUQsRUFBUUMsR0FBUixLQUFnQjtBQUNqQyxXQUNFO0FBQUssU0FBRyxFQUFFQSxHQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FFSSxNQUFDLHVEQUFEO0FBQ0UsVUFBSSxFQUFFRCxLQURSO0FBRUUsV0FBSyxFQUFFZCxPQUZUO0FBR0UsYUFBTyxFQUFHTyxDQUFELElBQVk7QUFDbkIsWUFBSVMsT0FBSjtBQUNBaEIsZUFBTyxDQUFDaUIsT0FBUixDQUFnQkMsT0FBaEIsQ0FBeUJDLE9BQUQsSUFBYTtBQUNuQ0EsaUJBQU8sQ0FBQzFDLEtBQVIsS0FBa0JxQyxLQUFLLENBQUNyQyxLQUF4QixJQUNBMEMsT0FBTyxDQUFDekMsSUFBUixLQUFpQm9DLEtBQUssQ0FBQ3BDLElBRHZCLEdBRUtzQyxPQUFPLEdBQUcsSUFGZixHQUdLQSxPQUFPLEdBQUcsS0FIZjtBQUlELFNBTEQ7QUFPQUEsZUFBTyxHQUNITCxLQUFLLENBQUMsaUNBQUQsQ0FERixHQUVIWCxPQUFPLENBQUNvQixVQUFSLENBQW1CO0FBQ2pCM0MsZUFBSyxFQUFFcUMsS0FBSyxDQUFDckMsS0FESTtBQUVqQkMsY0FBSSxFQUFFb0MsS0FBSyxDQUFDcEMsSUFGSztBQUdqQkUsb0JBQVUsRUFBRTtBQUhLLFNBQW5CLENBRko7QUFPRCxPQW5CSDtBQW9CRSxXQUFLLEVBQUVrQyxLQUFLLENBQUNyQyxLQXBCZjtBQXFCRSxVQUFJLEVBQUVxQyxLQUFLLENBQUNwQyxJQXJCZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkosQ0FERjtBQTZCRCxHQTlCQSxDQURILENBekJGLENBREYsRUE2REU7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsb0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscURBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyw4QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixzQkFLR3NCLE9BQU8sQ0FBQ2lCLE9BTFgscURBS0csaUJBQWlCSixHQUFqQixDQUFxQixDQUFDQyxLQUFELEVBQVFDLEdBQVIsS0FBZ0I7QUFDcEMsV0FDRTtBQUFLLFNBQUcsRUFBRUEsR0FBVjtBQUFlLGVBQVMsRUFBQyxrQkFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsdURBQUQ7QUFDRSxXQUFLLEVBQUVELEtBQUssQ0FBQ3JDLEtBRGY7QUFFRSxVQUFJLEVBQUVxQyxLQUFLLENBQUNwQyxJQUZkO0FBR0UsZ0JBQVUsRUFBRW9DLEtBQUssQ0FBQ2xDLFVBSHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURGO0FBU0QsR0FWQSxDQUxILENBN0RGLENBREY7QUFpRkQsQ0F0RkQ7O0FBd0ZleUMsMEhBQVEsQ0FBQ3RCLElBQUQsQ0FBdkIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoR0EsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwiaW1wb3J0IFJlYWN0ICBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcclxuXHJcbmltcG9ydCAnLi9idXR0b24uc2Nzcyc7XHJcblxyXG50eXBlIFByb3BzID0gSlNYLkludHJpbnNpY0VsZW1lbnRzWydidXR0b24nXSAmIHtcclxuICAgIHJlZD86IGJvb2xlYW47XHJcbiAgICBncmVlbj86IGJvb2xlYW47XHJcbiAgICBibHVlPzogYm9vbGVhbjsgXHJcbiAgICBpbnB1dD86IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IEJ1dHRvbiA6IFJlYWN0LkZDPFByb3BzPiA9ICh7XHJcbiAgICByZWQsXHJcbiAgICBncmVlbixcclxuICAgIGJsdWUsXHJcbiAgICBjaGlsZHJlbixcclxuICAgIGlucHV0LFxyXG4gICAgLi4ucmVzdFxyXG59KSA9PiB7XHJcblxyXG4gICAgY29uc3QgYnRuQ2xhc3MgPSBjeChcclxuICAgICAgICBcImJ0blwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJidG4tcmVkXCI6ICByZWQsXHJcbiAgICAgICAgICAgIFwiYnRuLWdyZWVuXCI6IGdyZWVuLFxyXG4gICAgICAgICAgICBcImJ0bi1ibHVlXCI6IGJsdWUsXHJcbiAgICAgICAgICAgIFwiYnRuLWlucHV0XCI6IGlucHV0XHJcbiAgICAgICAgfSBcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtidG5DbGFzc30gey4uLnJlc3R9PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b247IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBCdXR0b24gfSBmcm9tICcuL2J1dHRvbic7ICIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBcIi4vY2FyZDEuc2Nzc1wiO1xyXG5cclxudHlwZSBQcm9wcyA9IEpTWC5JbnRyaW5zaWNFbGVtZW50c1tcImRpdlwiXSAmIHtcclxuICB0aXRsZT86IHN0cmluZztcclxuICB0ZXh0Pzogc3RyaW5nO1xyXG59O1xyXG5cclxuY29uc3QgQ2FyZDE6IFJlYWN0LkZDPFByb3BzPiA9ICh7IHRpdGxlLCB0ZXh0LCAuLi5yZXN0IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkMVwiIHsuLi5yZXN0fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkMS1pbWFnZVwiPlxyXG4gICAgICAgIDxoMT7Dh2FsxLHFn21heWEgQmHFn2xhPC9oMT5cclxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImJvdHRvbS1hcnJvd1wiIHNyYz1cIi9ib3R0b20uc3ZnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZDEtZGVzY3JpcHRpb25cIj5cclxuICAgICAgICA8aDU+IHt0aXRsZSA/IHRpdGxlIDogXCJkZWZhdWx0XCJ9IDwvaDU+XHJcbiAgICAgICAgPHA+e3RleHQgPyB0ZXh0IDogXCIgXCJ9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkMTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBDYXJkMSB9IGZyb20gJy4vY2FyZDEnOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgXCIuL2NhcmQyLnNjc3NcIjtcclxuXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuLi9pbmRleFwiO1xyXG5cclxudHlwZSBQcm9wcyA9IEpTWC5JbnRyaW5zaWNFbGVtZW50c1tcImRpdlwiXSAmIHtcclxuICB0aXRsZT86IHN0cmluZztcclxuICBkZXNjPzogc3RyaW5nO1xyXG4gIHRpbWVyU3RhcnQ/OiBib29sZWFuO1xyXG59O1xyXG5cclxuY29uc3QgQ2FyZDI6IFJlYWN0LkZDPFByb3BzPiA9ICh7IHRpdGxlLCB0aW1lclN0YXJ0LCBkZXNjLCAuLi5yZXN0IH0pID0+IHtcclxuICBjb25zdCBbdGltZXIsIHNldFRpbWVyXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBbc2EsIHNldFNhXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtkaywgc2V0RGtdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3N0b3BDb3VudCwgc2V0U3RvcENvdW50XSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBzdG9wQ291bnRcclxuICAgID8gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRpbWVyID49IDYwKSB7XHJcbiAgICAgICAgICBzZXRUaW1lcigwKTtcclxuICAgICAgICAgIHNldERrKGRrICsgMSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNldFRpbWVyKHRpbWVyICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkayA+PSA2MCkge1xyXG4gICAgICAgICAgc2V0RGsoMCk7XHJcbiAgICAgICAgICBzZXRTYShzYSArIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgMTAwMClcclxuICAgIDogY29uc29sZS5sb2coXCJub3RoaW5nXCIpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkMlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQyLWxlZnRzaWRlXCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZDItbGVmdHNpZGUtdGl0bGVcIj57dGl0bGUgPyB0aXRsZSA6IFwiZGVmYXVsdFwifTwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkMi1sZWZ0c2lkZS10ZXh0XCI+e2Rlc2MgPyBkZXNjIDogXCJkZWZhdWx0XCJ9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQyLWNvdW50XCI+XHJcbiAgICAgICAge3NhID8gc2EgOiBcIjBcIn0ue2RrID8gZGsgOiBcIjBcIn0ue3RpbWVyfSBka1xyXG4gICAgICA8L3A+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQyLWJ1dHRvbnNcIj5cclxuICAgICAgICA8QnV0dG9uIGJsdWUgb25DbGljaz17KCkgPT4gc2V0U3RvcENvdW50KGZhbHNlKX0+XHJcbiAgICAgICAgICBEdXJkdXJcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIGdyZWVuIG9uQ2xpY2s9eygpID0+IHNldFN0b3BDb3VudCh0cnVlKX0+XHJcbiAgICAgICAgICBEZXZhbVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHJlZFxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRTdG9wQ291bnQoZmFsc2UpO1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoKTtcclxuICAgICAgICAgICAgc2V0VGltZXIoMCk7XHJcbiAgICAgICAgICAgIHNldERrKDApO1xyXG4gICAgICAgICAgICBzZXRTYSgwKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgU8SxZsSxcmxhXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmQyO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIENhcmQyIH0gZnJvbSAnLi9jYXJkMic7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCAnLi9mb290ZXIuc2Nzcyc7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHtcclxuICAgIHN0b3JlPzogYW55O1xyXG59XHJcblxyXG5jb25zdCBGb290ZXI6IFJlYWN0LkZDPElQcm9wcz4gPSAoe3N0b3JlfSkgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT5Gb290ZXI8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgRm9vdGVyIH0gZnJvbSAnLi9mb290ZXInOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgJy4vaGVhZGVyLnNjc3MnO1xyXG5cclxuaW50ZXJmYWNlIElQcm9wcyB7XHJcbiAgICBzdG9yZT86IGFueTtcclxufVxyXG5cclxuY29uc3QgSGVhZGVyOiBSZWFjdC5GQzxJUHJvcHM+ID0gKHtzdG9yZX0pID0+IHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPiBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbG9nb1wiPlxyXG4gICAgICAgICAgICAgICAgPHA+d29ya2luZzxzcGFuPi1hcmVhPC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiaGVhZGVyLW5hdlwiPlxyXG4gICAgICAgICAgICAgICAgPHA+YW5hIHNheWZhPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+ZW4gw6dvayDDp2FsxLHFn8SxbGFubGFyPC9wPlxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIEhlYWRlciB9IGZyb20gJy4vaGVhZGVyJzsiLCJleHBvcnQgeyBCdXR0b24gfSBmcm9tICcuL2J1dHRvbi9pbmRleCc7XHJcbmV4cG9ydCB7IEhlYWRlciB9IGZyb20gJy4vaGVhZGVyL2luZGV4JztcclxuZXhwb3J0IHsgRm9vdGVyIH0gZnJvbSAnLi9mb290ZXIvaW5kZXgnO1xyXG5leHBvcnQgeyBJbnB1dCB9IGZyb20gJy4vaW5wdXQvaW5kZXgnO1xyXG5leHBvcnQgeyBDYXJkMSB9IGZyb20gJy4vY2FyZC0xL2luZGV4JztcclxuZXhwb3J0IHsgQ2FyZDIgfSBmcm9tICcuL2NhcmQtMi9pbmRleCc7IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBJbnB1dCB9IGZyb20gJy4vaW5wdXQnOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgJy4vaW5wdXQuc2Nzcyc7XHJcblxyXG50eXBlIFByb3BzID0gSlNYLkludHJpbnNpY0VsZW1lbnRzWydpbnB1dCddICYge1xyXG4gICAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgICB3aWR0aD86IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgQnV0dG9uIDogUmVhY3QuRkM8UHJvcHM+ID0gKHtcclxuICAgIHRpdGxlLFxyXG4gICAgd2lkdGgsXHJcbiAgICAuLi5yZXN0XHJcbn0pID0+IHsgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1hcmVhXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlucHV0LWFyZWEtdGl0bGVcIj57dGl0bGUgPyB0aXRsZSA6IFwiZGVmYXVsdFwifTwvcD5cclxuICAgICAgICAgICAgPGlucHV0IHsuLi5yZXN0fSBzdHlsZT17e3dpZHRoOiB3aWR0aH19IGNsYXNzTmFtZT1cImlucHV0LWNvbXBvbmVudFwiLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tIFwibW9ieC1yZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIElucHV0LCBDYXJkMSwgQ2FyZDIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9pbmRleFwiO1xyXG5cclxuaW50ZXJmYWNlIElQcm9wcyB7XHJcbiAgbXlTdG9yZTogYW55O1xyXG59XHJcblxyXG5jb25zdCBIb21lOiBSZWFjdC5GQzxhbnk+ID0gKHsgbXlTdG9yZSB9KSA9PiB7XHJcbiAgY29uc3QgW2luVGl0bGUsIHNldGluVGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2luVGV4dCwgc2V0aW5UZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzdG9yZVNpemUsIHNldFN0b3JlU2l6ZV0gPSB1c2VTdGF0ZSgxKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtbmV3XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLW5ldy1pbnB1dFwiPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0aW5UaXRsZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIHRpdGxlPVwiWWFwxLFsYWNhayBpxZ8gaXNtaVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLW5ldy1pbnB1dC0yXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0aW5UZXh0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICB3aWR0aD17NDAwfVxyXG4gICAgICAgICAgICAgIHRpdGxlPVwiTmVsZXIgeWFwxLFsYWNha1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHN0b3JlU2l6ZSA8PSA5XHJcbiAgICAgICAgICAgICAgICA/IG15U3RvcmUuZWtsZSh7IHRpdGxlOiBpblRpdGxlLCB0ZXh0OiBpblRleHQgfSlcclxuICAgICAgICAgICAgICAgIDogYWxlcnQoXCJZZXRlcmluY2UgxLDFnyBFa2xlbmRpLlwiKTtcclxuICAgICAgICAgICAgICBzZXRTdG9yZVNpemUoc3RvcmVTaXplICsgMSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGlucHV0XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEVLTEVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1uZXctY2FyZHNcIj5cclxuICAgICAgICAgIHtteVN0b3JlLmNhcmRzLm1hcCgoaW5kZXgsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtrZXl9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICA8Q2FyZDFcclxuICAgICAgICAgICAgICAgICAgICBkYXRhPXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICBzdG9yZT17bXlTdG9yZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgY29udHJvbDtcclxuICAgICAgICAgICAgICAgICAgICAgIG15U3RvcmUud29ya2luZy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQudGl0bGUgPT09IGluZGV4LnRpdGxlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQudGV4dCA9PT0gaW5kZXgudGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gKGNvbnRyb2wgPSB0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogKGNvbnRyb2wgPSBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYWxlcnQoXCJCdSBpxZ8gxZ91IGFuZGEgemF0ZW4gw6dhbMSxxZ/EsWzEsXlvclwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG15U3RvcmUuYWRkV29ya2luZyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogaW5kZXgudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBpbmRleC50ZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZXJTdGFydDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpbmRleC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICB0ZXh0PXtpbmRleC50ZXh0fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLXdvcmtpbmdcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtd29ya2luZy10aXRsZVwiPlxyXG4gICAgICAgICAgPGgyPsWedSBhbiDDp2FsxLHFn8SxbMSxeW9yPC9oMj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS13b3JraW5nLXRpdGxlLXVuZGVybGluZVwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtteVN0b3JlLndvcmtpbmc/Lm1hcCgoaW5kZXgsIGtleSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2tleX0gY2xhc3NOYW1lPVwiaG9tZS13b3JraW5nLW5ld1wiPlxyXG4gICAgICAgICAgICAgIDxDYXJkMlxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e2luZGV4LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgZGVzYz17aW5kZXgudGV4dH1cclxuICAgICAgICAgICAgICAgIHRpbWVyU3RhcnQ9e2luZGV4LnRpbWVyU3RhcnR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBvYnNlcnZlcihIb21lKTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb2J4LXJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=