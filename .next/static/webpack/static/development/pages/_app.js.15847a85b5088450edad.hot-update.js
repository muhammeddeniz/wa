webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/components/card-2/card2.tsx":
/*!*****************************************!*\
  !*** ./src/components/card-2/card2.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _card2_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card2.scss */ \"./src/components/card-2/card2.scss\");\n/* harmony import */ var _card2_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_card2_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ \"./src/components/index.ts\");\n\n\nvar _jsxFileName = \"/home/muhammed/Desktop/react/working-area/src/components/card-2/card2.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nconst Card2 = (_ref) => {\n  _s();\n\n  let {\n    title,\n    timerStart,\n    desc\n  } = _ref,\n      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, [\"title\", \"timerStart\", \"desc\"]);\n\n  const {\n    0: timer,\n    1: setTimer\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(57);\n  const {\n    0: sa,\n    1: setSa\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0);\n  const {\n    0: dk,\n    1: setDk\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0);\n  const {\n    0: sny,\n    1: setSny\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    timerStart ? setTimeout(() => {\n      setTimer(timer + 1);\n    }, 1000) : console.log(\"nothing\");\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    if (timer === 60) {\n      setTimer(0);\n      setDk(1 + dk);\n    } else {\n      setSny(timer);\n    }\n\n    if (dk == 60) {\n      setDk(0);\n      setSa(sa + 1);\n    }\n  }, [timer]);\n  return __jsx(\"div\", {\n    className: \"card2\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"card2-leftside\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    className: \"card2-leftside-title\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }\n  }, title ? title : \"default\"), __jsx(\"p\", {\n    className: \"card2-leftside-text\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }\n  }, desc ? desc : \"default\")), __jsx(\"p\", {\n    className: \"card2-count\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }, sa ? sa : \"0\", \" \", __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 48\n    }\n  }), \" .\", dk ? dk : \"0\", \". \", __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 68\n    }\n  }), \" \", sny, \" dk\"), __jsx(\"div\", {\n    className: \"card2-buttons\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }\n  }, __jsx(_index__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    blue: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 13\n    }\n  }, \"Durdur\"), __jsx(_index__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    green: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 13\n    }\n  }, \"Devam\"), __jsx(_index__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    red: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 13\n    }\n  }, \"Bitir\")));\n};\n\n_s(Card2, \"nVIBAlO8xN7extnOvlcDTbPrQoo=\");\n\n_c = Card2;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card2);\n\nvar _c;\n\n$RefreshReg$(_c, \"Card2\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJkLTIvY2FyZDIudHN4P2U2NGUiXSwibmFtZXMiOlsiQ2FyZDIiLCJ0aXRsZSIsInRpbWVyU3RhcnQiLCJkZXNjIiwicmVzdCIsInRpbWVyIiwic2V0VGltZXIiLCJ1c2VTdGF0ZSIsInNhIiwic2V0U2EiLCJkayIsInNldERrIiwic255Iiwic2V0U255IiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7O0FBUUEsTUFBTUEsS0FBc0IsR0FBRyxVQUE0QztBQUFBOztBQUFBLE1BQTNDO0FBQUVDLFNBQUY7QUFBU0MsY0FBVDtBQUFzQkM7QUFBdEIsR0FBMkM7QUFBQSxNQUFYQyxJQUFXOztBQUV6RSxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLHNEQUFRLENBQUMsRUFBRCxDQUFsQztBQUdBLFFBQU07QUFBQSxPQUFDQyxFQUFEO0FBQUEsT0FBS0M7QUFBTCxNQUFjRixzREFBUSxDQUFDLENBQUQsQ0FBNUI7QUFDQSxRQUFNO0FBQUEsT0FBQ0csRUFBRDtBQUFBLE9BQUtDO0FBQUwsTUFBY0osc0RBQVEsQ0FBQyxDQUFELENBQTVCO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLEdBQUQ7QUFBQSxPQUFNQztBQUFOLE1BQWdCTixzREFBUSxDQUFDLENBQUQsQ0FBOUI7QUFFQU8seURBQVMsQ0FBQyxNQUFNO0FBRWJaLGNBQUQsR0FDQWEsVUFBVSxDQUFDLE1BQU07QUFDZlQsY0FBUSxDQUFDRCxLQUFLLEdBQUcsQ0FBVCxDQUFSO0FBQ0QsS0FGUyxFQUVSLElBRlEsQ0FEVixHQUlBVyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLENBSkE7QUFLQyxHQVBNLENBQVQ7QUFVRUgseURBQVMsQ0FBQyxNQUFNO0FBRWQsUUFBR1QsS0FBSyxLQUFHLEVBQVgsRUFBYztBQUNaQyxjQUFRLENBQUMsQ0FBRCxDQUFSO0FBQ0FLLFdBQUssQ0FBQyxJQUFFRCxFQUFILENBQUw7QUFDRCxLQUhELE1BR0s7QUFDSEcsWUFBTSxDQUFDUixLQUFELENBQU47QUFDRDs7QUFDRCxRQUFHSyxFQUFFLElBQUUsRUFBUCxFQUFVO0FBQ1JDLFdBQUssQ0FBQyxDQUFELENBQUw7QUFDQUYsV0FBSyxDQUFDRCxFQUFFLEdBQUMsQ0FBSixDQUFMO0FBQ0Q7QUFFRixHQWJRLEVBYU4sQ0FBQ0gsS0FBRCxDQWJNLENBQVQ7QUFnQkYsU0FDRTtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsc0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFxQ0osS0FBSyxHQUFHQSxLQUFILEdBQVcsU0FBckQsQ0FERixFQUVFO0FBQUcsYUFBUyxFQUFDLHFCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBb0NFLElBQUksR0FBR0EsSUFBSCxHQUFVLFNBQWxELENBRkYsQ0FERixFQU1JO0FBQUcsYUFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE0QkssRUFBRSxHQUFDQSxFQUFELEdBQUksR0FBbEMsT0FBdUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUF2QyxRQUErQ0UsRUFBRSxHQUFDQSxFQUFELEdBQUksR0FBckQsUUFBMkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUEzRCxPQUFrRUUsR0FBbEUsUUFOSixFQVFJO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsNkNBQUQ7QUFBUSxRQUFJLE1BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLEVBRUksTUFBQyw2Q0FBRDtBQUFRLFNBQUssTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosRUFHSSxNQUFDLDZDQUFEO0FBQVEsT0FBRyxNQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISixDQVJKLENBREY7QUFnQkQsQ0FuREQ7O0dBQU1aLEs7O0tBQUFBLEs7QUFxRFNBLG9FQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvY2FyZC0yL2NhcmQyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBcIi4vY2FyZDIuc2Nzc1wiO1xuXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi9pbmRleCc7XG5cbnR5cGUgUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbXCJkaXZcIl0gJiB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBkZXNjPzogc3RyaW5nO1xuICB0aW1lclN0YXJ0PzogYm9vbGVhbjtcbn07XG5cbmNvbnN0IENhcmQyOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyB0aXRsZSwgdGltZXJTdGFydCwgIGRlc2MsICAuLi5yZXN0IH0pID0+IHtcblxuICBjb25zdCBbdGltZXIsIHNldFRpbWVyXSA9IHVzZVN0YXRlKDU3KTtcblxuXG4gIGNvbnN0IFtzYSwgc2V0U2FdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtkaywgc2V0RGtdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzbnksIHNldFNueV0gPSB1c2VTdGF0ZSgwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgKHRpbWVyU3RhcnQpP1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0VGltZXIodGltZXIgKyAxKTtcbiAgICB9LDEwMDApOlxuICAgIGNvbnNvbGUubG9nKFwibm90aGluZ1wiKTsgXG4gICAgfSlcbiAgICBcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBcbiAgICAgIGlmKHRpbWVyPT09NjApe1xuICAgICAgICBzZXRUaW1lcigwKTtcbiAgICAgICAgc2V0RGsoMStkayk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgc2V0U255KHRpbWVyKTtcbiAgICAgIH1cbiAgICAgIGlmKGRrPT02MCl7XG4gICAgICAgIHNldERrKDApO1xuICAgICAgICBzZXRTYShzYSsxKTtcbiAgICAgIH1cblxuICAgIH0sIFt0aW1lcl0pXG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZDJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZDItbGVmdHNpZGVcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZDItbGVmdHNpZGUtdGl0bGVcIj57dGl0bGUgPyB0aXRsZSA6IFwiZGVmYXVsdFwifTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZDItbGVmdHNpZGUtdGV4dFwiPntkZXNjID8gZGVzYyA6IFwiZGVmYXVsdFwifTwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQyLWNvdW50XCI+e3NhP3NhOlwiMFwifSA8YnIvPiAue2RrP2RrOlwiMFwifS4gPGJyLz4ge3NueX0gZGs8L3A+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkMi1idXR0b25zXCI+XG4gICAgICAgICAgICA8QnV0dG9uIGJsdWU+RHVyZHVyPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIGdyZWVuPkRldmFtPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIHJlZD5CaXRpcjwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/card-2/card2.tsx\n");

/***/ })

})