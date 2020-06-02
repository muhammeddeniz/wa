webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/card-2/card2.tsx":
/*!*****************************************!*\
  !*** ./src/components/card-2/card2.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _card2_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card2.scss */ \"./src/components/card-2/card2.scss\");\n/* harmony import */ var _card2_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_card2_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ \"./src/components/index.ts\");\n\n\nvar _jsxFileName = \"/home/muhammed/Desktop/react/working-area/src/components/card-2/card2.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nconst Card2 = (_ref) => {\n  _s();\n\n  let {\n    title,\n    timerStart,\n    desc\n  } = _ref,\n      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, [\"title\", \"timerStart\", \"desc\"]);\n\n  const {\n    0: timer,\n    1: setTimer\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(57);\n  const {\n    0: sa,\n    1: setSa\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0);\n  const {\n    0: dk,\n    1: setDk\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0);\n  const {\n    0: stopCount,\n    1: setStopCount\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true);\n  stopCount ? setTimeout(() => {\n    if (timer === 60) {\n      setTimer(0);\n      setDk(dk + 1);\n    } else {\n      setTimer(timer + 1);\n    }\n\n    if (dk === 60) {\n      setDk(0);\n      setSa(sa + 1);\n    }\n  }, 1000) : console.log(\"nothing\");\n  return __jsx(\"div\", {\n    className: \"card2\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"card2-leftside\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    className: \"card2-leftside-title\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }, title ? title : \"default\"), __jsx(\"p\", {\n    className: \"card2-leftside-text\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }, desc ? desc : \"default\")), __jsx(\"p\", {\n    className: \"card2-count\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }\n  }, sa ? sa : \"0\", \".\", dk ? dk : \"0\", \".\", timer, \" dk\"), __jsx(\"div\", {\n    className: \"card2-buttons\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }\n  }, __jsx(_index__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    blue: true,\n    onClick: () => setStopCount(false),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }\n  }, \"Durdur\"), __jsx(_index__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    green: true,\n    onClick: () => setStopCount(true),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }\n  }, \"Devam\"), __jsx(_index__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    red: true,\n    onClick: () => {\n      setDk(0);\n      setSa(0);\n      setTimer(0);\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }, \"Bitir\")));\n};\n\n_s(Card2, \"4yrbAgEgiU1OPwbXI4JjGUvjR2U=\");\n\n_c = Card2;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card2);\n\nvar _c;\n\n$RefreshReg$(_c, \"Card2\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJkLTIvY2FyZDIudHN4P2U2NGUiXSwibmFtZXMiOlsiQ2FyZDIiLCJ0aXRsZSIsInRpbWVyU3RhcnQiLCJkZXNjIiwicmVzdCIsInRpbWVyIiwic2V0VGltZXIiLCJ1c2VTdGF0ZSIsInNhIiwic2V0U2EiLCJkayIsInNldERrIiwic3RvcENvdW50Iiwic2V0U3RvcENvdW50Iiwic2V0VGltZW91dCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7O0FBUUEsTUFBTUEsS0FBc0IsR0FBRyxVQUEwQztBQUFBOztBQUFBLE1BQXpDO0FBQUVDLFNBQUY7QUFBU0MsY0FBVDtBQUFxQkM7QUFBckIsR0FBeUM7QUFBQSxNQUFYQyxJQUFXOztBQUN2RSxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLHNEQUFRLENBQUMsRUFBRCxDQUFsQztBQUVBLFFBQU07QUFBQSxPQUFDQyxFQUFEO0FBQUEsT0FBS0M7QUFBTCxNQUFjRixzREFBUSxDQUFDLENBQUQsQ0FBNUI7QUFDQSxRQUFNO0FBQUEsT0FBQ0csRUFBRDtBQUFBLE9BQUtDO0FBQUwsTUFBY0osc0RBQVEsQ0FBQyxDQUFELENBQTVCO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCTixzREFBUSxDQUFDLElBQUQsQ0FBMUM7QUFHQUssV0FBUyxHQUNQRSxVQUFVLENBQUMsTUFBTTtBQUNmLFFBQUlULEtBQUssS0FBSyxFQUFkLEVBQWtCO0FBQ2hCQyxjQUFRLENBQUMsQ0FBRCxDQUFSO0FBQ0FLLFdBQUssQ0FBQ0QsRUFBRSxHQUFHLENBQU4sQ0FBTDtBQUNELEtBSEQsTUFHTztBQUNMSixjQUFRLENBQUNELEtBQUssR0FBRyxDQUFULENBQVI7QUFDRDs7QUFDRCxRQUFJSyxFQUFFLEtBQUssRUFBWCxFQUFlO0FBQ2JDLFdBQUssQ0FBQyxDQUFELENBQUw7QUFDQUYsV0FBSyxDQUFDRCxFQUFFLEdBQUcsQ0FBTixDQUFMO0FBQ0Q7QUFDRixHQVhTLEVBV1AsSUFYTyxDQURILEdBYVBPLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosQ0FiRjtBQWdCQSxTQUNFO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxzQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXFDZixLQUFLLEdBQUdBLEtBQUgsR0FBVyxTQUFyRCxDQURGLEVBRUU7QUFBRyxhQUFTLEVBQUMscUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFvQ0UsSUFBSSxHQUFHQSxJQUFILEdBQVUsU0FBbEQsQ0FGRixDQURGLEVBTUU7QUFBRyxhQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dLLEVBQUUsR0FBR0EsRUFBSCxHQUFRLEdBRGIsT0FDbUJFLEVBQUUsR0FBR0EsRUFBSCxHQUFRLEdBRDdCLE9BQ21DTCxLQURuQyxRQU5GLEVBVUU7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2Q0FBRDtBQUFRLFFBQUksTUFBWjtBQUNBLFdBQU8sRUFBRSxNQUFNUSxZQUFZLENBQUMsS0FBRCxDQUQzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFJRSxNQUFDLDZDQUFEO0FBQVEsU0FBSyxNQUFiO0FBQ0EsV0FBTyxFQUFFLE1BQU1BLFlBQVksQ0FBQyxJQUFELENBRDNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRixFQU9FLE1BQUMsNkNBQUQ7QUFBUSxPQUFHLE1BQVg7QUFDQSxXQUFPLEVBQUUsTUFBTTtBQUNiRixXQUFLLENBQUMsQ0FBRCxDQUFMO0FBQ0FGLFdBQUssQ0FBQyxDQUFELENBQUw7QUFDQUgsY0FBUSxDQUFDLENBQUQsQ0FBUjtBQUNELEtBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGLENBVkYsQ0FERjtBQTRCRCxDQXBERDs7R0FBTU4sSzs7S0FBQUEsSztBQXNEU0Esb0VBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jYXJkLTIvY2FyZDIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IFwiLi9jYXJkMi5zY3NzXCI7XG5cbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuLi9pbmRleFwiO1xuXG50eXBlIFByb3BzID0gSlNYLkludHJpbnNpY0VsZW1lbnRzW1wiZGl2XCJdICYge1xuICB0aXRsZT86IHN0cmluZztcbiAgZGVzYz86IHN0cmluZztcbiAgdGltZXJTdGFydD86IGJvb2xlYW47XG59O1xuXG5jb25zdCBDYXJkMjogUmVhY3QuRkM8UHJvcHM+ID0gKHsgdGl0bGUsIHRpbWVyU3RhcnQsIGRlc2MsIC4uLnJlc3QgfSkgPT4ge1xuICBjb25zdCBbdGltZXIsIHNldFRpbWVyXSA9IHVzZVN0YXRlKDU3KTtcblxuICBjb25zdCBbc2EsIHNldFNhXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbZGssIHNldERrXSA9IHVzZVN0YXRlKDApOyBcbiAgY29uc3QgW3N0b3BDb3VudCwgc2V0U3RvcENvdW50XSA9IHVzZVN0YXRlKHRydWUpO1xuICBcbiBcbiAgc3RvcENvdW50XG4gID8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGltZXIgPT09IDYwKSB7XG4gICAgICAgIHNldFRpbWVyKDApO1xuICAgICAgICBzZXREayhkayArIDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VGltZXIodGltZXIgKyAxKTtcbiAgICAgIH1cbiAgICAgIGlmIChkayA9PT0gNjApIHtcbiAgICAgICAgc2V0RGsoMCk7XG4gICAgICAgIHNldFNhKHNhICsgMSk7XG4gICAgICB9XG4gICAgfSwgMTAwMClcbiAgOiBjb25zb2xlLmxvZyhcIm5vdGhpbmdcIik7XG4gXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQyLWxlZnRzaWRlXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQyLWxlZnRzaWRlLXRpdGxlXCI+e3RpdGxlID8gdGl0bGUgOiBcImRlZmF1bHRcIn08L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQyLWxlZnRzaWRlLXRleHRcIj57ZGVzYyA/IGRlc2MgOiBcImRlZmF1bHRcIn08L3A+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZDItY291bnRcIj5cbiAgICAgICAge3NhID8gc2EgOiBcIjBcIn0ue2RrID8gZGsgOiBcIjBcIn0ue3RpbWVyfSBka1xuICAgICAgPC9wPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQyLWJ1dHRvbnNcIj5cbiAgICAgICAgPEJ1dHRvbiBibHVlXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFN0b3BDb3VudChmYWxzZSl9XG4gICAgICAgID5EdXJkdXI8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbiBncmVlblxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTdG9wQ291bnQodHJ1ZSl9XG4gICAgICAgID5EZXZhbTwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uIHJlZFxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgc2V0RGsoMCk7XG4gICAgICAgICAgc2V0U2EoMCk7XG4gICAgICAgICAgc2V0VGltZXIoMCk7XG4gICAgICAgIH19XG4gICAgICAgID5CaXRpcjwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkMjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/card-2/card2.tsx\n");

/***/ })

})