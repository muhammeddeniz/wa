webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/components/card-1/card1.tsx":
/*!*****************************************!*\
  !*** ./src/components/card-1/card1.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _card1_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card1.scss */ \"./src/components/card-1/card1.scss\");\n/* harmony import */ var _card1_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_card1_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/home/muhammed/Desktop/react/working-area/src/components/card-1/card1.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\nconst Card1 = (_ref) => {\n  let {\n    title,\n    text\n  } = _ref,\n      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, [\"title\", \"text\"]);\n\n  return __jsx(\"div\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    className: \"card1\"\n  }, rest, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  }), __jsx(\"div\", {\n    className: \"card1-delete\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: \"card1-image\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }, \"\\xC7al\\u0131\\u015Fmaya Ba\\u015Fla\"), __jsx(\"img\", {\n    className: \"bottom-arrow\",\n    src: \"/bottom.svg\",\n    alt: \"\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: \"card1-description\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }, __jsx(\"h5\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, \" \", title ? title : \"default\", \" \"), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, text ? text : \"fdsljkaf fsjda lkjfasldk lkjfasldklk jfasldklk jfasldklkjfasldk jlaf jlasdjlksafjl\")));\n};\n\n_c = Card1;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card1);\n\nvar _c;\n\n$RefreshReg$(_c, \"Card1\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJkLTEvY2FyZDEudHN4P2QyNjAiXSwibmFtZXMiOlsiQ2FyZDEiLCJ0aXRsZSIsInRleHQiLCJyZXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBRUE7O0FBT0EsTUFBTUEsS0FBc0IsR0FBRyxVQUE4QjtBQUFBLE1BQTdCO0FBQUVDLFNBQUY7QUFBU0M7QUFBVCxHQUE2QjtBQUFBLE1BQVhDLElBQVc7O0FBQzNELFNBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUEyQkEsSUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUNFO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5Q0FERixFQUVFO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBOEIsT0FBRyxFQUFDLGFBQWxDO0FBQWdELE9BQUcsRUFBQyxFQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FGRixFQU1FO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQU1GLEtBQUssR0FBR0EsS0FBSCxHQUFXLFNBQXRCLE1BREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLElBQUksR0FDREEsSUFEQyxHQUVELG9GQUhOLENBRkYsQ0FORixDQURGO0FBaUJELENBbEJEOztLQUFNRixLO0FBb0JTQSxvRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2NhcmQtMS9jYXJkMS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBcIi4vY2FyZDEuc2Nzc1wiO1xuXG50eXBlIFByb3BzID0gSlNYLkludHJpbnNpY0VsZW1lbnRzW1wiZGl2XCJdICYge1xuICB0aXRsZT86IHN0cmluZztcbiAgdGV4dD86IHN0cmluZztcbn07XG5cbmNvbnN0IENhcmQxOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyB0aXRsZSwgdGV4dCwgLi4ucmVzdCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkMVwiIHsuLi5yZXN0fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZDEtZGVsZXRlXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQxLWltYWdlXCI+XG4gICAgICAgIDxoMT7Dh2FsxLHFn21heWEgQmHFn2xhPC9oMT5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJib3R0b20tYXJyb3dcIiBzcmM9XCIvYm90dG9tLnN2Z1wiIGFsdD1cIlwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZDEtZGVzY3JpcHRpb25cIj5cbiAgICAgICAgPGg1PiB7dGl0bGUgPyB0aXRsZSA6IFwiZGVmYXVsdFwifSA8L2g1PlxuICAgICAgICA8cD5cbiAgICAgICAgICB7dGV4dFxuICAgICAgICAgICAgPyB0ZXh0XG4gICAgICAgICAgICA6IFwiZmRzbGprYWYgZnNqZGEgbGtqZmFzbGRrIGxramZhc2xka2xrIGpmYXNsZGtsayBqZmFzbGRrbGtqZmFzbGRrIGpsYWYgamxhc2RqbGtzYWZqbFwifVxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQxO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/card-1/card1.tsx\n");

/***/ })

})