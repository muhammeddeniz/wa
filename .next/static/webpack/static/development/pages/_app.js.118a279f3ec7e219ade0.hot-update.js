webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/components/card-2/card2.tsx":
/*!*****************************************!*\
  !*** ./src/components/card-2/card2.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _card2_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card2.scss */ \"./src/components/card-2/card2.scss\");\n/* harmony import */ var _card2_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_card2_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ \"./src/components/index.ts\");\n\n\nvar _jsxFileName = \"/home/muhammed/Desktop/react/working-area/src/components/card-2/card2.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nconst Card2 = (_ref) => {\n  _s();\n\n  let {\n    title,\n    timerStart,\n    desc\n  } = _ref,\n      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, [\"title\", \"timerStart\", \"desc\"]);\n\n  const {\n    0: timer,\n    1: setTimer\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(57);\n  const {\n    0: sa,\n    1: setSa\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0);\n  const {\n    0: dk,\n    1: setDk\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0);\n  const {\n    0: sny,\n    1: setSny\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0);\n  timerStart ? setTimeout(() => {\n    if (timer == 60) {\n      setTimer(0);\n      setDk(dk + 1);\n    } else {\n      setTimer(timer + 1);\n    }\n\n    if (dk == 60) {\n      setDk(0);\n      setSa(sa + 1);\n    }\n  }, 1000) : console.log(\"nothing\");\n  return __jsx(\"div\", {\n    className: \"card2\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"card2-leftside\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    className: \"card2-leftside-title\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  }, title ? title : \"default\"), __jsx(\"p\", {\n    className: \"card2-leftside-text\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  }, desc ? desc : \"default\")), __jsx(\"p\", {\n    className: \"card2-count\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }\n  }, sa ? sa : \"0\", \".\", dk ? dk : \"0\", \".\", timer, \" dk\"), __jsx(\"div\", {\n    className: \"card2-buttons\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }, __jsx(_index__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    blue: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 13\n    }\n  }, \"Durdur\"), __jsx(_index__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    green: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }\n  }, \"Devam\"), __jsx(_index__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    red: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 13\n    }\n  }, \"Bitir\")));\n};\n\n_s(Card2, \"8XgYYdtZnOEnavC8juD5FBczuxc=\");\n\n_c = Card2;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card2);\n\nvar _c;\n\n$RefreshReg$(_c, \"Card2\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJkLTIvY2FyZDIudHN4P2U2NGUiXSwibmFtZXMiOlsiQ2FyZDIiLCJ0aXRsZSIsInRpbWVyU3RhcnQiLCJkZXNjIiwicmVzdCIsInRpbWVyIiwic2V0VGltZXIiLCJ1c2VTdGF0ZSIsInNhIiwic2V0U2EiLCJkayIsInNldERrIiwic255Iiwic2V0U255Iiwic2V0VGltZW91dCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7O0FBUUEsTUFBTUEsS0FBc0IsR0FBRyxVQUE0QztBQUFBOztBQUFBLE1BQTNDO0FBQUVDLFNBQUY7QUFBU0MsY0FBVDtBQUFzQkM7QUFBdEIsR0FBMkM7QUFBQSxNQUFYQyxJQUFXOztBQUV6RSxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLHNEQUFRLENBQUMsRUFBRCxDQUFsQztBQUdBLFFBQU07QUFBQSxPQUFDQyxFQUFEO0FBQUEsT0FBS0M7QUFBTCxNQUFjRixzREFBUSxDQUFDLENBQUQsQ0FBNUI7QUFDQSxRQUFNO0FBQUEsT0FBQ0csRUFBRDtBQUFBLE9BQUtDO0FBQUwsTUFBY0osc0RBQVEsQ0FBQyxDQUFELENBQTVCO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLEdBQUQ7QUFBQSxPQUFNQztBQUFOLE1BQWdCTixzREFBUSxDQUFDLENBQUQsQ0FBOUI7QUFJR0wsWUFBRCxHQUNBWSxVQUFVLENBQUMsTUFBTTtBQUNmLFFBQUdULEtBQUssSUFBSSxFQUFaLEVBQWU7QUFDYkMsY0FBUSxDQUFDLENBQUQsQ0FBUjtBQUNBSyxXQUFLLENBQUNELEVBQUUsR0FBRyxDQUFOLENBQUw7QUFFRCxLQUpELE1BSUs7QUFDSEosY0FBUSxDQUFDRCxLQUFLLEdBQUcsQ0FBVCxDQUFSO0FBQ0Q7O0FBQ0QsUUFBR0ssRUFBRSxJQUFFLEVBQVAsRUFBVTtBQUNSQyxXQUFLLENBQUMsQ0FBRCxDQUFMO0FBQ0FGLFdBQUssQ0FBQ0QsRUFBRSxHQUFDLENBQUosQ0FBTDtBQUNEO0FBRUYsR0FiUyxFQWFSLElBYlEsQ0FEVixHQWVBTyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLENBZkE7QUFvQkYsU0FDRTtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsc0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFxQ2YsS0FBSyxHQUFHQSxLQUFILEdBQVcsU0FBckQsQ0FERixFQUVFO0FBQUcsYUFBUyxFQUFDLHFCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBb0NFLElBQUksR0FBR0EsSUFBSCxHQUFVLFNBQWxELENBRkYsQ0FERixFQU1JO0FBQUcsYUFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE0QkssRUFBRSxHQUFDQSxFQUFELEdBQUksR0FBbEMsT0FBd0NFLEVBQUUsR0FBQ0EsRUFBRCxHQUFJLEdBQTlDLE9BQW9ETCxLQUFwRCxRQU5KLEVBUUk7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw2Q0FBRDtBQUFRLFFBQUksTUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosRUFFSSxNQUFDLDZDQUFEO0FBQVEsU0FBSyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixFQUdJLE1BQUMsNkNBQUQ7QUFBUSxPQUFHLE1BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhKLENBUkosQ0FERjtBQWdCRCxDQS9DRDs7R0FBTUwsSzs7S0FBQUEsSztBQWlEU0Esb0VBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jYXJkLTIvY2FyZDIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IFwiLi9jYXJkMi5zY3NzXCI7XG5cbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2luZGV4JztcblxudHlwZSBQcm9wcyA9IEpTWC5JbnRyaW5zaWNFbGVtZW50c1tcImRpdlwiXSAmIHtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGRlc2M/OiBzdHJpbmc7XG4gIHRpbWVyU3RhcnQ/OiBib29sZWFuO1xufTtcblxuY29uc3QgQ2FyZDI6IFJlYWN0LkZDPFByb3BzPiA9ICh7IHRpdGxlLCB0aW1lclN0YXJ0LCAgZGVzYywgIC4uLnJlc3QgfSkgPT4ge1xuXG4gIGNvbnN0IFt0aW1lciwgc2V0VGltZXJdID0gdXNlU3RhdGUoNTcpO1xuXG5cbiAgY29uc3QgW3NhLCBzZXRTYV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2RrLCBzZXREa10gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3NueSwgc2V0U255XSA9IHVzZVN0YXRlKDApO1xuXG4gXG5cbiAgICAodGltZXJTdGFydCk/XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZih0aW1lciA9PSA2MCl7XG4gICAgICAgIHNldFRpbWVyKDApO1xuICAgICAgICBzZXREayhkayArIDEpO1xuICAgICAgICBcbiAgICAgIH1lbHNle1xuICAgICAgICBzZXRUaW1lcih0aW1lciArIDEpO1xuICAgICAgfVxuICAgICAgaWYoZGs9PTYwKXtcbiAgICAgICAgc2V0RGsoMCk7XG4gICAgICAgIHNldFNhKHNhKzEpO1xuICAgICAgfVxuICAgICBcbiAgICB9LDEwMDApOlxuICAgIGNvbnNvbGUubG9nKFwibm90aGluZ1wiKTsgXG4gICBcbiAgICBcbiBcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZDJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZDItbGVmdHNpZGVcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZDItbGVmdHNpZGUtdGl0bGVcIj57dGl0bGUgPyB0aXRsZSA6IFwiZGVmYXVsdFwifTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZDItbGVmdHNpZGUtdGV4dFwiPntkZXNjID8gZGVzYyA6IFwiZGVmYXVsdFwifTwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQyLWNvdW50XCI+e3NhP3NhOlwiMFwifS57ZGs/ZGs6XCIwXCJ9Lnt0aW1lcn0gZGs8L3A+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkMi1idXR0b25zXCI+XG4gICAgICAgICAgICA8QnV0dG9uIGJsdWU+RHVyZHVyPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIGdyZWVuPkRldmFtPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIHJlZD5CaXRpcjwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/card-2/card2.tsx\n");

/***/ })

})