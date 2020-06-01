webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/card-2/card2.tsx":
/*!*****************************************!*\
  !*** ./src/components/card-2/card2.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _card2_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card2.scss */ \"./src/components/card-2/card2.scss\");\n/* harmony import */ var _card2_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_card2_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ \"./src/components/index.ts\");\n\n\nvar _jsxFileName = \"/home/muhammed/Desktop/react/working-area/src/components/card-2/card2.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nconst Card2 = (_ref) => {\n  _s();\n\n  let {\n    title,\n    timerStart,\n    desc\n  } = _ref,\n      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, [\"title\", \"timerStart\", \"desc\"]);\n\n  const {\n    0: timer,\n    1: setTimer\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0);\n  const {\n    0: sa,\n    1: setSa\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0);\n  const {\n    0: dk,\n    1: setDk\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0);\n  const {\n    0: sny,\n    1: setSny\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    timerStart ? setTimeout(() => {\n      setTimer(timer + 1);\n    }, 1000) : console.log(\"nothing\");\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    if (timer >= 100) {\n      setTimer(0);\n      setDk(dk + 1);\n    } else {\n      setSny(timer);\n    }\n\n    if (dk == 60) {\n      setDk(0);\n      setSa(sa + 1);\n    }\n  }, [timer]);\n  return __jsx(\"div\", {\n    className: \"card2\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"card2-leftside\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    className: \"card2-leftside-title\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }\n  }, title ? title : \"default\"), __jsx(\"p\", {\n    className: \"card2-leftside-text\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }\n  }, desc ? desc : \"default\")), __jsx(\"p\", {\n    className: \"card2-count\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }, sa ? sa : \"0\", \" \", __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 48\n    }\n  }), \" .\", dk ? dk : \"0\", \". \", __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 68\n    }\n  }), \" \", sny, \" dk\"), __jsx(\"div\", {\n    className: \"card2-buttons\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }\n  }, __jsx(_index__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    blue: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 13\n    }\n  }, \"Durdur\"), __jsx(_index__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    green: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 13\n    }\n  }, \"Devam\"), __jsx(_index__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    red: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 13\n    }\n  }, \"Bitir\")));\n};\n\n_s(Card2, \"0T/5zva7WthdyWV77Scm3vLfGHQ=\");\n\n_c = Card2;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card2);\n\nvar _c;\n\n$RefreshReg$(_c, \"Card2\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJkLTIvY2FyZDIudHN4P2U2NGUiXSwibmFtZXMiOlsiQ2FyZDIiLCJ0aXRsZSIsInRpbWVyU3RhcnQiLCJkZXNjIiwicmVzdCIsInRpbWVyIiwic2V0VGltZXIiLCJ1c2VTdGF0ZSIsInNhIiwic2V0U2EiLCJkayIsInNldERrIiwic255Iiwic2V0U255IiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7O0FBUUEsTUFBTUEsS0FBc0IsR0FBRyxVQUE0QztBQUFBOztBQUFBLE1BQTNDO0FBQUVDLFNBQUY7QUFBU0MsY0FBVDtBQUFzQkM7QUFBdEIsR0FBMkM7QUFBQSxNQUFYQyxJQUFXOztBQUV6RSxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLHNEQUFRLENBQUMsQ0FBRCxDQUFsQztBQUdBLFFBQU07QUFBQSxPQUFDQyxFQUFEO0FBQUEsT0FBS0M7QUFBTCxNQUFjRixzREFBUSxDQUFDLENBQUQsQ0FBNUI7QUFDQSxRQUFNO0FBQUEsT0FBQ0csRUFBRDtBQUFBLE9BQUtDO0FBQUwsTUFBY0osc0RBQVEsQ0FBQyxDQUFELENBQTVCO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLEdBQUQ7QUFBQSxPQUFNQztBQUFOLE1BQWdCTixzREFBUSxDQUFDLENBQUQsQ0FBOUI7QUFFQU8seURBQVMsQ0FBQyxNQUFNO0FBRWJaLGNBQUQsR0FDQWEsVUFBVSxDQUFDLE1BQU07QUFDZlQsY0FBUSxDQUFDRCxLQUFLLEdBQUcsQ0FBVCxDQUFSO0FBQ0QsS0FGUyxFQUVSLElBRlEsQ0FEVixHQUlBVyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLENBSkE7QUFLQyxHQVBNLENBQVQ7QUFVRUgseURBQVMsQ0FBQyxNQUFNO0FBRWQsUUFBR1QsS0FBSyxJQUFFLEdBQVYsRUFBYztBQUNaQyxjQUFRLENBQUMsQ0FBRCxDQUFSO0FBQ0FLLFdBQUssQ0FBQ0QsRUFBRSxHQUFDLENBQUosQ0FBTDtBQUNELEtBSEQsTUFHSztBQUNIRyxZQUFNLENBQUNSLEtBQUQsQ0FBTjtBQUNEOztBQUNELFFBQUdLLEVBQUUsSUFBRSxFQUFQLEVBQVU7QUFDUkMsV0FBSyxDQUFDLENBQUQsQ0FBTDtBQUNBRixXQUFLLENBQUNELEVBQUUsR0FBQyxDQUFKLENBQUw7QUFDRDtBQUVGLEdBYlEsRUFhTixDQUFDSCxLQUFELENBYk0sQ0FBVDtBQWdCRixTQUNFO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxzQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXFDSixLQUFLLEdBQUdBLEtBQUgsR0FBVyxTQUFyRCxDQURGLEVBRUU7QUFBRyxhQUFTLEVBQUMscUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFvQ0UsSUFBSSxHQUFHQSxJQUFILEdBQVUsU0FBbEQsQ0FGRixDQURGLEVBTUk7QUFBRyxhQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTRCSyxFQUFFLEdBQUNBLEVBQUQsR0FBSSxHQUFsQyxPQUF1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQXZDLFFBQStDRSxFQUFFLEdBQUNBLEVBQUQsR0FBSSxHQUFyRCxRQUEyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQTNELE9BQWtFRSxHQUFsRSxRQU5KLEVBUUk7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw2Q0FBRDtBQUFRLFFBQUksTUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosRUFFSSxNQUFDLDZDQUFEO0FBQVEsU0FBSyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixFQUdJLE1BQUMsNkNBQUQ7QUFBUSxPQUFHLE1BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhKLENBUkosQ0FERjtBQWdCRCxDQW5ERDs7R0FBTVosSzs7S0FBQUEsSztBQXFEU0Esb0VBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jYXJkLTIvY2FyZDIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IFwiLi9jYXJkMi5zY3NzXCI7XG5cbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2luZGV4JztcblxudHlwZSBQcm9wcyA9IEpTWC5JbnRyaW5zaWNFbGVtZW50c1tcImRpdlwiXSAmIHtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGRlc2M/OiBzdHJpbmc7XG4gIHRpbWVyU3RhcnQ/OiBib29sZWFuO1xufTtcblxuY29uc3QgQ2FyZDI6IFJlYWN0LkZDPFByb3BzPiA9ICh7IHRpdGxlLCB0aW1lclN0YXJ0LCAgZGVzYywgIC4uLnJlc3QgfSkgPT4ge1xuXG4gIGNvbnN0IFt0aW1lciwgc2V0VGltZXJdID0gdXNlU3RhdGUoMCk7XG5cblxuICBjb25zdCBbc2EsIHNldFNhXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbZGssIHNldERrXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc255LCBzZXRTbnldID0gdXNlU3RhdGUoMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgICh0aW1lclN0YXJ0KT9cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldFRpbWVyKHRpbWVyICsgMSk7XG4gICAgfSwxMDAwKTpcbiAgICBjb25zb2xlLmxvZyhcIm5vdGhpbmdcIik7IFxuICAgIH0pXG4gICAgXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgXG4gICAgICBpZih0aW1lcj49MTAwKXtcbiAgICAgICAgc2V0VGltZXIoMCk7XG4gICAgICAgIHNldERrKGRrKzEpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHNldFNueSh0aW1lcik7XG4gICAgICB9XG4gICAgICBpZihkaz09NjApe1xuICAgICAgICBzZXREaygwKTtcbiAgICAgICAgc2V0U2Eoc2ErMSk7XG4gICAgICB9XG5cbiAgICB9LCBbdGltZXJdKVxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQyLWxlZnRzaWRlXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQyLWxlZnRzaWRlLXRpdGxlXCI+e3RpdGxlID8gdGl0bGUgOiBcImRlZmF1bHRcIn08L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQyLWxlZnRzaWRlLXRleHRcIj57ZGVzYyA/IGRlc2MgOiBcImRlZmF1bHRcIn08L3A+XG4gICAgICA8L2Rpdj5cblxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkMi1jb3VudFwiPntzYT9zYTpcIjBcIn0gPGJyLz4gLntkaz9kazpcIjBcIn0uIDxici8+IHtzbnl9IGRrPC9wPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZDItYnV0dG9uc1wiPlxuICAgICAgICAgICAgPEJ1dHRvbiBibHVlPkR1cmR1cjwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvbiBncmVlbj5EZXZhbTwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvbiByZWQ+Qml0aXI8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkMjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/card-2/card2.tsx\n");

/***/ })

})