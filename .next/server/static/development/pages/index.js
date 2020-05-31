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

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/button/button.scss\n");

/***/ }),

/***/ "./src/components/button/button.tsx":
/*!******************************************!*\
  !*** ./src/components/button/button.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"classnames\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button.scss */ \"./src/components/button/button.scss\");\n/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_button_scss__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/muhammed/Desktop/react/working-area/src/components/button/button.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\n\nconst Button = (_ref) => {\n  let {\n    red,\n    green,\n    blue,\n    children,\n    input\n  } = _ref,\n      rest = _objectWithoutProperties(_ref, [\"red\", \"green\", \"blue\", \"children\", \"input\"]);\n\n  const btnClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()(\"btn\", {\n    \"btn-red\": red,\n    \"btn-green\": green,\n    \"btn-blue\": blue,\n    \"btn-input\": input\n  });\n  return __jsx(\"button\", _extends({\n    className: btnClass\n  }, rest, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }), children);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLnRzeD8wN2FmIl0sIm5hbWVzIjpbIkJ1dHRvbiIsInJlZCIsImdyZWVuIiwiYmx1ZSIsImNoaWxkcmVuIiwiaW5wdXQiLCJyZXN0IiwiYnRuQ2xhc3MiLCJjeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFTQSxNQUFNQSxNQUF3QixHQUFHLFVBTzNCO0FBQUEsTUFQNEI7QUFDOUJDLE9BRDhCO0FBRTlCQyxTQUY4QjtBQUc5QkMsUUFIOEI7QUFJOUJDLFlBSjhCO0FBSzlCQztBQUw4QixHQU81QjtBQUFBLE1BRENDLElBQ0Q7O0FBRUYsUUFBTUMsUUFBUSxHQUFHQyxpREFBRSxDQUNmLEtBRGUsRUFFZjtBQUNJLGVBQVlQLEdBRGhCO0FBRUksaUJBQWFDLEtBRmpCO0FBR0ksZ0JBQVlDLElBSGhCO0FBSUksaUJBQWFFO0FBSmpCLEdBRmUsQ0FBbkI7QUFVQSxTQUNJO0FBQVEsYUFBUyxFQUFFRTtBQUFuQixLQUFpQ0QsSUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUNLRixRQURMLENBREo7QUFLSCxDQXhCRDs7QUEwQmVKLHFFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgIGZyb20gJ3JlYWN0JztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0ICcuL2J1dHRvbi5zY3NzJztcblxudHlwZSBQcm9wcyA9IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snYnV0dG9uJ10gJiB7XG4gICAgcmVkPzogYm9vbGVhbjtcbiAgICBncmVlbj86IGJvb2xlYW47XG4gICAgYmx1ZT86IGJvb2xlYW47IFxuICAgIGlucHV0PzogYm9vbGVhbjtcbn1cblxuY29uc3QgQnV0dG9uIDogUmVhY3QuRkM8UHJvcHM+ID0gKHtcbiAgICByZWQsXG4gICAgZ3JlZW4sXG4gICAgYmx1ZSxcbiAgICBjaGlsZHJlbixcbiAgICBpbnB1dCxcbiAgICAuLi5yZXN0XG59KSA9PiB7XG5cbiAgICBjb25zdCBidG5DbGFzcyA9IGN4KFxuICAgICAgICBcImJ0blwiLFxuICAgICAgICB7XG4gICAgICAgICAgICBcImJ0bi1yZWRcIjogIHJlZCxcbiAgICAgICAgICAgIFwiYnRuLWdyZWVuXCI6IGdyZWVuLFxuICAgICAgICAgICAgXCJidG4tYmx1ZVwiOiBibHVlLFxuICAgICAgICAgICAgXCJidG4taW5wdXRcIjogaW5wdXRcbiAgICAgICAgfSBcbiAgICApO1xuXG4gICAgcmV0dXJuKFxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YnRuQ2xhc3N9IHsuLi5yZXN0fT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9idXR0b24+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/button/button.tsx\n");

/***/ }),

/***/ "./src/components/button/index.ts":
/*!****************************************!*\
  !*** ./src/components/button/index.ts ***!
  \****************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ \"./src/components/button/button.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9idXR0b24vaW5kZXgudHM/Yjk1YiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2J1dHRvbi9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IGRlZmF1bHQgYXMgQnV0dG9uIH0gZnJvbSAnLi9idXR0b24nOyAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/button/index.ts\n");

/***/ }),

/***/ "./src/components/card-1/card1.scss":
/*!******************************************!*\
  !*** ./src/components/card-1/card1.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2NhcmQtMS9jYXJkMS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/card-1/card1.scss\n");

/***/ }),

/***/ "./src/components/card-1/card1.tsx":
/*!*****************************************!*\
  !*** ./src/components/card-1/card1.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _card1_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card1.scss */ \"./src/components/card-1/card1.scss\");\n/* harmony import */ var _card1_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_card1_scss__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/muhammed/Desktop/react/working-area/src/components/card-1/card1.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\nconst Card1 = (_ref) => {\n  let {\n    title,\n    text\n  } = _ref,\n      rest = _objectWithoutProperties(_ref, [\"title\", \"text\"]);\n\n  return __jsx(\"div\", {\n    className: \"card1\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"card1-image\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, \"\\xC7al\\u0131\\u015Fmaya Ba\\u015Fla\"), __jsx(\"img\", {\n    className: \"bottom-arrow\",\n    src: \"/bottom.svg\",\n    alt: \"\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: \"card1-description\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }, __jsx(\"h5\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }, \" \", title ? title : \"default\", \" \"), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, text ? text : \"fdsljkaf fsjda lkjfasldk lkjfasldklk jfasldklk jfasldklkjfasldk jlaf jlasdjlksafjl\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card1);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJkLTEvY2FyZDEudHN4P2QyNjAiXSwibmFtZXMiOlsiQ2FyZDEiLCJ0aXRsZSIsInRleHQiLCJyZXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUVBOztBQU9BLE1BQU1BLEtBQXNCLEdBQUcsVUFBOEI7QUFBQSxNQUE3QjtBQUFFQyxTQUFGO0FBQVNDO0FBQVQsR0FBNkI7QUFBQSxNQUFYQyxJQUFXOztBQUMzRCxTQUNFO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUNBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQThCLE9BQUcsRUFBQyxhQUFsQztBQUFnRCxPQUFHLEVBQUMsRUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsRUFLRTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFNRixLQUFLLEdBQUdBLEtBQUgsR0FBVyxTQUF0QixNQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQyxJQUFJLEdBQ0RBLElBREMsR0FFRCxvRkFITixDQUZGLENBTEYsQ0FERjtBQWdCRCxDQWpCRDs7QUFtQmVGLG9FQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvY2FyZC0xL2NhcmQxLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IFwiLi9jYXJkMS5zY3NzXCI7XG5cbnR5cGUgUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbXCJkaXZcIl0gJiB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICB0ZXh0Pzogc3RyaW5nO1xufTtcblxuY29uc3QgQ2FyZDE6IFJlYWN0LkZDPFByb3BzPiA9ICh7IHRpdGxlLCB0ZXh0LCAuLi5yZXN0IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQxXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQxLWltYWdlXCI+XG4gICAgICAgIDxoMT7Dh2FsxLHFn21heWEgQmHFn2xhPC9oMT5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJib3R0b20tYXJyb3dcIiBzcmM9XCIvYm90dG9tLnN2Z1wiIGFsdD1cIlwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZDEtZGVzY3JpcHRpb25cIj5cbiAgICAgICAgPGg1PiB7dGl0bGUgPyB0aXRsZSA6IFwiZGVmYXVsdFwifSA8L2g1PlxuICAgICAgICA8cD5cbiAgICAgICAgICB7dGV4dFxuICAgICAgICAgICAgPyB0ZXh0XG4gICAgICAgICAgICA6IFwiZmRzbGprYWYgZnNqZGEgbGtqZmFzbGRrIGxramZhc2xka2xrIGpmYXNsZGtsayBqZmFzbGRrbGtqZmFzbGRrIGpsYWYgamxhc2RqbGtzYWZqbFwifVxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQxO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/card-1/card1.tsx\n");

/***/ }),

/***/ "./src/components/card-1/index.ts":
/*!****************************************!*\
  !*** ./src/components/card-1/index.ts ***!
  \****************************************/
/*! exports provided: Card1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _card1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card1 */ \"./src/components/card-1/card1.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Card1\", function() { return _card1__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJkLTEvaW5kZXgudHM/NjQ1MSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2NhcmQtMS9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IGRlZmF1bHQgYXMgQ2FyZDEgfSBmcm9tICcuL2NhcmQxJzsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/card-1/index.ts\n");

/***/ }),

/***/ "./src/components/card-2/card2.scss":
/*!******************************************!*\
  !*** ./src/components/card-2/card2.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2NhcmQtMi9jYXJkMi5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/card-2/card2.scss\n");

/***/ }),

/***/ "./src/components/card-2/card2.tsx":
/*!*****************************************!*\
  !*** ./src/components/card-2/card2.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _card2_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card2.scss */ \"./src/components/card-2/card2.scss\");\n/* harmony import */ var _card2_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_card2_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index */ \"./src/components/index.ts\");\nvar _jsxFileName = \"/home/muhammed/Desktop/react/working-area/src/components/card-2/card2.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\n\nconst Card2 = (_ref) => {\n  let {\n    title,\n    desc,\n    count\n  } = _ref,\n      rest = _objectWithoutProperties(_ref, [\"title\", \"desc\", \"count\"]);\n\n  return __jsx(\"div\", {\n    className: \"card2\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"card2-leftside\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    className: \"card2-leftside-title\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }, title ? title : \"default\"), __jsx(\"p\", {\n    className: \"card2-leftside-text\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }, desc ? desc : \"default\")), __jsx(\"p\", {\n    className: \"card2-count\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, count ? count : \"12.45\", \" dk\"), __jsx(\"div\", {\n    className: \"card2-buttons\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, __jsx(_index__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    blue: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }\n  }, \"Durdur\"), __jsx(_index__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    green: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }\n  }, \"Devam\"), __jsx(_index__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    red: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }\n  }, \"Bitir\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card2);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJkLTIvY2FyZDIudHN4P2U2NGUiXSwibmFtZXMiOlsiQ2FyZDIiLCJ0aXRsZSIsImRlc2MiLCJjb3VudCIsInJlc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7O0FBUUEsTUFBTUEsS0FBc0IsR0FBRyxVQUFzQztBQUFBLE1BQXJDO0FBQUVDLFNBQUY7QUFBVUMsUUFBVjtBQUFnQkM7QUFBaEIsR0FBcUM7QUFBQSxNQUFYQyxJQUFXOztBQUNuRSxTQUNFO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxzQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXFDSCxLQUFLLEdBQUdBLEtBQUgsR0FBVyxTQUFyRCxDQURGLEVBRUU7QUFBRyxhQUFTLEVBQUMscUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFvQ0MsSUFBSSxHQUFHQSxJQUFILEdBQVUsU0FBbEQsQ0FGRixDQURGLEVBTUk7QUFBRyxhQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTRCQyxLQUFLLEdBQUdBLEtBQUgsR0FBVSxPQUEzQyxRQU5KLEVBUUk7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw2Q0FBRDtBQUFRLFFBQUksTUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosRUFFSSxNQUFDLDZDQUFEO0FBQVEsU0FBSyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixFQUdJLE1BQUMsNkNBQUQ7QUFBUSxPQUFHLE1BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhKLENBUkosQ0FERjtBQWdCRCxDQWpCRDs7QUFtQmVILG9FQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvY2FyZC0yL2NhcmQyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IFwiLi9jYXJkMi5zY3NzXCI7XG5cbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2luZGV4JztcblxudHlwZSBQcm9wcyA9IEpTWC5JbnRyaW5zaWNFbGVtZW50c1tcImRpdlwiXSAmIHtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGRlc2M/OiBzdHJpbmc7XG4gIGNvdW50PzogbnVtYmVyO1xufTtcblxuY29uc3QgQ2FyZDI6IFJlYWN0LkZDPFByb3BzPiA9ICh7IHRpdGxlLCAgZGVzYywgY291bnQsIC4uLnJlc3QgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZDJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZDItbGVmdHNpZGVcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZDItbGVmdHNpZGUtdGl0bGVcIj57dGl0bGUgPyB0aXRsZSA6IFwiZGVmYXVsdFwifTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZDItbGVmdHNpZGUtdGV4dFwiPntkZXNjID8gZGVzYyA6IFwiZGVmYXVsdFwifTwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQyLWNvdW50XCI+e2NvdW50ID8gY291bnQ6IFwiMTIuNDVcIn0gZGs8L3A+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkMi1idXR0b25zXCI+XG4gICAgICAgICAgICA8QnV0dG9uIGJsdWU+RHVyZHVyPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIGdyZWVuPkRldmFtPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIHJlZD5CaXRpcjwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/card-2/card2.tsx\n");

/***/ }),

/***/ "./src/components/card-2/index.ts":
/*!****************************************!*\
  !*** ./src/components/card-2/index.ts ***!
  \****************************************/
/*! exports provided: Card2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _card2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card2 */ \"./src/components/card-2/card2.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Card2\", function() { return _card2__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJkLTIvaW5kZXgudHM/MzQ4ZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2NhcmQtMi9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IGRlZmF1bHQgYXMgQ2FyZDIgfSBmcm9tICcuL2NhcmQyJzsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/card-2/index.ts\n");

/***/ }),

/***/ "./src/components/footer/footer.scss":
/*!*******************************************!*\
  !*** ./src/components/footer/footer.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/footer/footer.scss\n");

/***/ }),

/***/ "./src/components/footer/footer.tsx":
/*!******************************************!*\
  !*** ./src/components/footer/footer.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.scss */ \"./src/components/footer/footer.scss\");\n/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_footer_scss__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/muhammed/Desktop/react/working-area/src/components/footer/footer.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Footer = ({\n  store\n}) => {\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }\n  }, \"Footer\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLnRzeD80ZDVjIl0sIm5hbWVzIjpbIkZvb3RlciIsInN0b3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFFQTs7QUFNQSxNQUFNQSxNQUF3QixHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWE7QUFDMUMsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLENBREo7QUFLSCxDQU5EOztBQVFlRCxxRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0ICcuL2Zvb3Rlci5zY3NzJztcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgc3RvcmU/OiBhbnk7XG59XG5cbmNvbnN0IEZvb3RlcjogUmVhY3QuRkM8SVByb3BzPiA9ICh7c3RvcmV9KSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPkZvb3RlcjwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/footer/footer.tsx\n");

/***/ }),

/***/ "./src/components/footer/index.ts":
/*!****************************************!*\
  !*** ./src/components/footer/index.ts ***!
  \****************************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer */ \"./src/components/footer/footer.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Footer\", function() { return _footer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb290ZXIvaW5kZXgudHM/NjBmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IGRlZmF1bHQgYXMgRm9vdGVyIH0gZnJvbSAnLi9mb290ZXInOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/footer/index.ts\n");

/***/ }),

/***/ "./src/components/header/header.scss":
/*!*******************************************!*\
  !*** ./src/components/header/header.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/header/header.scss\n");

/***/ }),

/***/ "./src/components/header/header.tsx":
/*!******************************************!*\
  !*** ./src/components/header/header.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.scss */ \"./src/components/header/header.scss\");\n/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_scss__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/muhammed/Desktop/react/working-area/src/components/header/header.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Header = ({\n  store\n}) => {\n  return __jsx(\"div\", {\n    className: \"header\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"header-logo\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }\n  }, __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 17\n    }\n  }, \"working\", __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 27\n    }\n  }, \"-area\"))), __jsx(\"nav\", {\n    className: \"header-nav\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }\n  }, __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 17\n    }\n  }, \"ana sayfa\"), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 17\n    }\n  }, \"en \\xE7ok \\xE7al\\u0131\\u015F\\u0131lanlar\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLnRzeD82MDgyIl0sIm5hbWVzIjpbIkhlYWRlciIsInN0b3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFFQTs7QUFNQSxNQUFNQSxNQUF3QixHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWE7QUFDMUMsU0FDSTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBVixDQURKLENBREosRUFJSTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnREFGSixDQUpKLENBREo7QUFXSCxDQVpEOztBQWNlRCxxRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0ICcuL2hlYWRlci5zY3NzJztcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgc3RvcmU/OiBhbnk7XG59XG5cbmNvbnN0IEhlYWRlcjogUmVhY3QuRkM8SVByb3BzPiA9ICh7c3RvcmV9KSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPiBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWxvZ29cIj5cbiAgICAgICAgICAgICAgICA8cD53b3JraW5nPHNwYW4+LWFyZWE8L3NwYW4+PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImhlYWRlci1uYXZcIj5cbiAgICAgICAgICAgICAgICA8cD5hbmEgc2F5ZmE8L3A+XG4gICAgICAgICAgICAgICAgPHA+ZW4gw6dvayDDp2FsxLHFn8SxbGFubGFyPC9wPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/header/header.tsx\n");

/***/ }),

/***/ "./src/components/header/index.ts":
/*!****************************************!*\
  !*** ./src/components/header/index.ts ***!
  \****************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/components/header/header.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return _header__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaW5kZXgudHM/NzQ3YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2hlYWRlci9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IGRlZmF1bHQgYXMgSGVhZGVyIH0gZnJvbSAnLi9oZWFkZXInOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/header/index.ts\n");

/***/ }),

/***/ "./src/components/index.ts":
/*!*********************************!*\
  !*** ./src/components/index.ts ***!
  \*********************************/
/*! exports provided: Button, Header, Footer, Input, Card1, Card2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _button_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button/index */ \"./src/components/button/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return _button_index__WEBPACK_IMPORTED_MODULE_0__[\"Button\"]; });\n\n/* harmony import */ var _header_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/index */ \"./src/components/header/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return _header_index__WEBPACK_IMPORTED_MODULE_1__[\"Header\"]; });\n\n/* harmony import */ var _footer_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/index */ \"./src/components/footer/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Footer\", function() { return _footer_index__WEBPACK_IMPORTED_MODULE_2__[\"Footer\"]; });\n\n/* harmony import */ var _input_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input/index */ \"./src/components/input/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Input\", function() { return _input_index__WEBPACK_IMPORTED_MODULE_3__[\"Input\"]; });\n\n/* harmony import */ var _card_1_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card-1/index */ \"./src/components/card-1/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Card1\", function() { return _card_1_index__WEBPACK_IMPORTED_MODULE_4__[\"Card1\"]; });\n\n/* harmony import */ var _card_2_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card-2/index */ \"./src/components/card-2/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Card2\", function() { return _card_2_index__WEBPACK_IMPORTED_MODULE_5__[\"Card2\"]; });\n\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbmRleC50cz8zNjE3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2luZGV4LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi9idXR0b24vaW5kZXgnO1xuZXhwb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi9oZWFkZXIvaW5kZXgnO1xuZXhwb3J0IHsgRm9vdGVyIH0gZnJvbSAnLi9mb290ZXIvaW5kZXgnO1xuZXhwb3J0IHsgSW5wdXQgfSBmcm9tICcuL2lucHV0L2luZGV4JztcbmV4cG9ydCB7IENhcmQxIH0gZnJvbSAnLi9jYXJkLTEvaW5kZXgnO1xuZXhwb3J0IHsgQ2FyZDIgfSBmcm9tICcuL2NhcmQtMi9pbmRleCc7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/index.ts\n");

/***/ }),

/***/ "./src/components/input/index.ts":
/*!***************************************!*\
  !*** ./src/components/input/index.ts ***!
  \***************************************/
/*! exports provided: Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ \"./src/components/input/input.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Input\", function() { return _input__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbnB1dC9pbmRleC50cz9kOTQ2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvaW5wdXQvaW5kZXgudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBkZWZhdWx0IGFzIElucHV0IH0gZnJvbSAnLi9pbnB1dCc7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/input/index.ts\n");

/***/ }),

/***/ "./src/components/input/input.scss":
/*!*****************************************!*\
  !*** ./src/components/input/input.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2lucHV0L2lucHV0LnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/input/input.scss\n");

/***/ }),

/***/ "./src/components/input/input.tsx":
/*!****************************************!*\
  !*** ./src/components/input/input.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _input_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input.scss */ \"./src/components/input/input.scss\");\n/* harmony import */ var _input_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_input_scss__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/muhammed/Desktop/react/working-area/src/components/input/input.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\nconst Button = (_ref) => {\n  let {\n    title,\n    width\n  } = _ref,\n      rest = _objectWithoutProperties(_ref, [\"title\", \"width\"]);\n\n  return __jsx(\"div\", {\n    className: \"input-area\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }, __jsx(\"p\", {\n    className: \"input-area-title\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }\n  }, title ? title : \"default\"), __jsx(\"input\", _extends({}, rest, {\n    style: {\n      width: width\n    },\n    className: \"input-component\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbnB1dC9pbnB1dC50c3g/YWJkYyJdLCJuYW1lcyI6WyJCdXR0b24iLCJ0aXRsZSIsIndpZHRoIiwicmVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBOztBQU9BLE1BQU1BLE1BQXdCLEdBQUcsVUFJM0I7QUFBQSxNQUo0QjtBQUM5QkMsU0FEOEI7QUFFOUJDO0FBRjhCLEdBSTVCO0FBQUEsTUFEQ0MsSUFDRDs7QUFDRixTQUNJO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFDLGtCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBaUNGLEtBQUssR0FBR0EsS0FBSCxHQUFXLFNBQWpELENBREosRUFFSSw0QkFBV0UsSUFBWDtBQUFpQixTQUFLLEVBQUU7QUFBQ0QsV0FBSyxFQUFFQTtBQUFSLEtBQXhCO0FBQXdDLGFBQVMsRUFBQyxpQkFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUZKLENBREo7QUFNSCxDQVhEOztBQWFlRixxRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2lucHV0L2lucHV0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCAnLi9pbnB1dC5zY3NzJztcblxudHlwZSBQcm9wcyA9IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snaW5wdXQnXSAmIHtcbiAgICB0aXRsZT86IHN0cmluZztcbiAgICB3aWR0aD86IG51bWJlcjtcbn1cblxuY29uc3QgQnV0dG9uIDogUmVhY3QuRkM8UHJvcHM+ID0gKHtcbiAgICB0aXRsZSxcbiAgICB3aWR0aCxcbiAgICAuLi5yZXN0XG59KSA9PiB7IFxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1hcmVhXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbnB1dC1hcmVhLXRpdGxlXCI+e3RpdGxlID8gdGl0bGUgOiBcImRlZmF1bHRcIn08L3A+XG4gICAgICAgICAgICA8aW5wdXQgey4uLnJlc3R9IHN0eWxlPXt7d2lkdGg6IHdpZHRofX0gY2xhc3NOYW1lPVwiaW5wdXQtY29tcG9uZW50XCIvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/input/input.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/index */ \"./src/components/index.ts\");\nvar _jsxFileName = \"/home/muhammed/Desktop/react/working-area/src/pages/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Home = props => {\n  return __jsx(\"div\", {\n    className: \"home\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"home-new\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"home-new-input\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 17\n    }\n  }, __jsx(_components_index__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n    title: \"Yap\\u0131lacak i\\u015F ismi\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 21\n    }\n  }), __jsx(\"div\", {\n    className: \"home-new-input-2\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 21\n    }\n  }, __jsx(_components_index__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n    width: 400,\n    title: \"Neler yap\\u0131lacak\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 21\n    }\n  })), __jsx(_components_index__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    input: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 21\n    }\n  }, \"EKLE\")), __jsx(\"div\", {\n    className: \"home-new-cards\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 17\n    }\n  }, __jsx(_components_index__WEBPACK_IMPORTED_MODULE_1__[\"Card1\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 21\n    }\n  }), __jsx(_components_index__WEBPACK_IMPORTED_MODULE_1__[\"Card1\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 21\n    }\n  }), __jsx(_components_index__WEBPACK_IMPORTED_MODULE_1__[\"Card1\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 21\n    }\n  }), __jsx(_components_index__WEBPACK_IMPORTED_MODULE_1__[\"Card1\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 21\n    }\n  }), __jsx(_components_index__WEBPACK_IMPORTED_MODULE_1__[\"Card1\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 21\n    }\n  }), __jsx(_components_index__WEBPACK_IMPORTED_MODULE_1__[\"Card1\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 21\n    }\n  }), __jsx(_components_index__WEBPACK_IMPORTED_MODULE_1__[\"Card1\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 21\n    }\n  }), __jsx(_components_index__WEBPACK_IMPORTED_MODULE_1__[\"Card1\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 21\n    }\n  }))), __jsx(\"div\", {\n    className: \"home-working\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"home-working-title\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 17\n    }\n  }, __jsx(\"h2\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 21\n    }\n  }, \"\\u015Eu an \\xE7al\\u0131\\u015F\\u0131l\\u0131yor\"), __jsx(\"div\", {\n    className: \"home-working-title-underline\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 21\n    }\n  })), __jsx(_components_index__WEBPACK_IMPORTED_MODULE_1__[\"Card2\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 21\n    }\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4PzQxZTAiXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBOztBQUVBLE1BQU1BLElBQW1CLEdBQUlDLEtBQUQsSUFBVztBQUNuQyxTQUNJO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHVEQUFEO0FBQU8sU0FBSyxFQUFDLDZCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLHVEQUFEO0FBQU8sU0FBSyxFQUFFLEdBQWQ7QUFBbUIsU0FBSyxFQUFDLHNCQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREEsQ0FGSixFQUtJLE1BQUMsd0RBQUQ7QUFBUSxTQUFLLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKLENBRkosRUFVSTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSSxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdJLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLEVBSUksTUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosRUFLSSxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMSixFQU1JLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5KLEVBT0ksTUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEosRUFRSSxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSSixDQVZKLENBREosRUF3Qkk7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsb0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscURBREosRUFFSTtBQUFLLGFBQVMsRUFBQyw4QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FESixFQUtRLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxSLENBeEJKLENBREo7QUFrQ0gsQ0FuQ0Q7O0FBcUNlRCxtRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBCdXR0b24sIElucHV0LCBDYXJkMSwgQ2FyZDIgfSBmcm9tICcuLi9jb21wb25lbnRzL2luZGV4JztcblxuY29uc3QgSG9tZTogUmVhY3QuRkM8YW55PiA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtbmV3XCI+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLW5ldy1pbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdGl0bGU9XCJZYXDEsWxhY2FrIGnFnyBpc21pXCIvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtbmV3LWlucHV0LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0IHdpZHRoPXs0MDB9IHRpdGxlPVwiTmVsZXIgeWFwxLFsYWNha1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaW5wdXQ+RUtMRTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLW5ldy1jYXJkc1wiPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZDEgLz5cbiAgICAgICAgICAgICAgICAgICAgPENhcmQxIC8+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkMSAvPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZDEgLz5cbiAgICAgICAgICAgICAgICAgICAgPENhcmQxIC8+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkMSAvPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZDEgLz5cbiAgICAgICAgICAgICAgICAgICAgPENhcmQxIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtd29ya2luZ1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS13b3JraW5nLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj7FnnUgYW4gw6dhbMSxxZ/EsWzEsXlvcjwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS13b3JraW5nLXRpdGxlLXVuZGVybGluZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZDIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** multi ./src/pages/index.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/muhammed/Desktop/react/working-area/src/pages/index.tsx */"./src/pages/index.tsx");


/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCI/YWFhYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJjbGFzc25hbWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///classnames\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });