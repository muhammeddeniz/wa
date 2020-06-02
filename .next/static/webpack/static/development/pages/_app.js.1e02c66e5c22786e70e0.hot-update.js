webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/components/card-2/card2.tsx":
/*!*****************************************!*\
  !*** ./src/components/card-2/card2.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _card2_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card2.scss */ \"./src/components/card-2/card2.scss\");\n/* harmony import */ var _card2_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_card2_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ \"./src/components/index.ts\");\n\n\nvar _jsxFileName = \"/home/muhammed/Desktop/react/working-area/src/components/card-2/card2.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nconst Card2 = (_ref) => {\n  _s();\n\n  let {\n    title,\n    timerStart,\n    desc\n  } = _ref,\n      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, [\"title\", \"timerStart\", \"desc\"]);\n\n  const {\n    0: timer,\n    1: setTimer\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(57);\n  const {\n    0: sa,\n    1: setSa\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0);\n  const {\n    0: dk,\n    1: setDk\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0);\n  const {\n    0: stopCount,\n    1: setStopCount\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true);\n  stopCount ? setTimeout(() => {\n    if (timer === 60) {\n      setTimer(0);\n      setDk(dk + 1);\n    } else {\n      setTimer(timer + 1);\n    }\n\n    if (dk === 60) {\n      setDk(0);\n      setSa(sa + 1);\n    }\n  }, 1000) : console.log(\"nothing\");\n  return __jsx(\"div\", {\n    className: \"card2\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"card2-leftside\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    className: \"card2-leftside-title\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, title ? title : \"default\"), __jsx(\"p\", {\n    className: \"card2-leftside-text\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }, desc ? desc : \"default\")), __jsx(\"p\", {\n    className: \"card2-count\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  }, sa ? sa : \"0\", \".\", dk ? dk : \"0\", \".\", timer, \" dk\"), __jsx(\"div\", {\n    className: \"card2-buttons\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }, __jsx(_index__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    blue: true,\n    onClick: () => setStopCount(true),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  }, \"Durdur\"), __jsx(_index__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    green: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  }, \"Devam\"), __jsx(_index__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    red: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }\n  }, \"Bitir\")));\n};\n\n_s(Card2, \"4yrbAgEgiU1OPwbXI4JjGUvjR2U=\");\n\n_c = Card2;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card2);\n\nvar _c;\n\n$RefreshReg$(_c, \"Card2\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJkLTIvY2FyZDIudHN4P2U2NGUiXSwibmFtZXMiOlsiQ2FyZDIiLCJ0aXRsZSIsInRpbWVyU3RhcnQiLCJkZXNjIiwicmVzdCIsInRpbWVyIiwic2V0VGltZXIiLCJ1c2VTdGF0ZSIsInNhIiwic2V0U2EiLCJkayIsInNldERrIiwic3RvcENvdW50Iiwic2V0U3RvcENvdW50Iiwic2V0VGltZW91dCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7O0FBUUEsTUFBTUEsS0FBc0IsR0FBRyxVQUEwQztBQUFBOztBQUFBLE1BQXpDO0FBQUVDLFNBQUY7QUFBU0MsY0FBVDtBQUFxQkM7QUFBckIsR0FBeUM7QUFBQSxNQUFYQyxJQUFXOztBQUN2RSxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLHNEQUFRLENBQUMsRUFBRCxDQUFsQztBQUVBLFFBQU07QUFBQSxPQUFDQyxFQUFEO0FBQUEsT0FBS0M7QUFBTCxNQUFjRixzREFBUSxDQUFDLENBQUQsQ0FBNUI7QUFDQSxRQUFNO0FBQUEsT0FBQ0csRUFBRDtBQUFBLE9BQUtDO0FBQUwsTUFBY0osc0RBQVEsQ0FBQyxDQUFELENBQTVCO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCTixzREFBUSxDQUFDLElBQUQsQ0FBMUM7QUFFQUssV0FBUyxHQUNMRSxVQUFVLENBQUMsTUFBTTtBQUNmLFFBQUlULEtBQUssS0FBSyxFQUFkLEVBQWtCO0FBQ2hCQyxjQUFRLENBQUMsQ0FBRCxDQUFSO0FBQ0FLLFdBQUssQ0FBQ0QsRUFBRSxHQUFHLENBQU4sQ0FBTDtBQUNELEtBSEQsTUFHTztBQUNMSixjQUFRLENBQUNELEtBQUssR0FBRyxDQUFULENBQVI7QUFDRDs7QUFDRCxRQUFJSyxFQUFFLEtBQUssRUFBWCxFQUFlO0FBQ2JDLFdBQUssQ0FBQyxDQUFELENBQUw7QUFDQUYsV0FBSyxDQUFDRCxFQUFFLEdBQUcsQ0FBTixDQUFMO0FBQ0Q7QUFDRixHQVhTLEVBV1AsSUFYTyxDQURMLEdBYUxPLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosQ0FiSjtBQWVBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLHNCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBcUNmLEtBQUssR0FBR0EsS0FBSCxHQUFXLFNBQXJELENBREYsRUFFRTtBQUFHLGFBQVMsRUFBQyxxQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW9DRSxJQUFJLEdBQUdBLElBQUgsR0FBVSxTQUFsRCxDQUZGLENBREYsRUFNRTtBQUFHLGFBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0ssRUFBRSxHQUFHQSxFQUFILEdBQVEsR0FEYixPQUNtQkUsRUFBRSxHQUFHQSxFQUFILEdBQVEsR0FEN0IsT0FDbUNMLEtBRG5DLFFBTkYsRUFVRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZDQUFEO0FBQVEsUUFBSSxNQUFaO0FBQ0EsV0FBTyxFQUFFLE1BQU1RLFlBQVksQ0FBQyxJQUFELENBRDNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUlFLE1BQUMsNkNBQUQ7QUFBUSxTQUFLLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGLEVBS0UsTUFBQyw2Q0FBRDtBQUFRLE9BQUcsTUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEYsQ0FWRixDQURGO0FBb0JELENBMUNEOztHQUFNYixLOztLQUFBQSxLO0FBNENTQSxvRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2NhcmQtMi9jYXJkMi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgXCIuL2NhcmQyLnNjc3NcIjtcblxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4uL2luZGV4XCI7XG5cbnR5cGUgUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbXCJkaXZcIl0gJiB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBkZXNjPzogc3RyaW5nO1xuICB0aW1lclN0YXJ0PzogYm9vbGVhbjtcbn07XG5cbmNvbnN0IENhcmQyOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyB0aXRsZSwgdGltZXJTdGFydCwgZGVzYywgLi4ucmVzdCB9KSA9PiB7XG4gIGNvbnN0IFt0aW1lciwgc2V0VGltZXJdID0gdXNlU3RhdGUoNTcpO1xuXG4gIGNvbnN0IFtzYSwgc2V0U2FdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtkaywgc2V0RGtdID0gdXNlU3RhdGUoMCk7IFxuICBjb25zdCBbc3RvcENvdW50LCBzZXRTdG9wQ291bnRdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIFxuICBzdG9wQ291bnRcbiAgICA/IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAodGltZXIgPT09IDYwKSB7XG4gICAgICAgICAgc2V0VGltZXIoMCk7XG4gICAgICAgICAgc2V0RGsoZGsgKyAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRUaW1lcih0aW1lciArIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkayA9PT0gNjApIHtcbiAgICAgICAgICBzZXREaygwKTtcbiAgICAgICAgICBzZXRTYShzYSArIDEpO1xuICAgICAgICB9XG4gICAgICB9LCAxMDAwKVxuICAgIDogY29uc29sZS5sb2coXCJub3RoaW5nXCIpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkMlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkMi1sZWZ0c2lkZVwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkMi1sZWZ0c2lkZS10aXRsZVwiPnt0aXRsZSA/IHRpdGxlIDogXCJkZWZhdWx0XCJ9PC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkMi1sZWZ0c2lkZS10ZXh0XCI+e2Rlc2MgPyBkZXNjIDogXCJkZWZhdWx0XCJ9PC9wPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQyLWNvdW50XCI+XG4gICAgICAgIHtzYSA/IHNhIDogXCIwXCJ9LntkayA/IGRrIDogXCIwXCJ9Lnt0aW1lcn0gZGtcbiAgICAgIDwvcD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkMi1idXR0b25zXCI+XG4gICAgICAgIDxCdXR0b24gYmx1ZVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTdG9wQ291bnQodHJ1ZSl9XG4gICAgICAgID5EdXJkdXI8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbiBncmVlbj5EZXZhbTwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uIHJlZD5CaXRpcjwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkMjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/card-2/card2.tsx\n");

/***/ })

})