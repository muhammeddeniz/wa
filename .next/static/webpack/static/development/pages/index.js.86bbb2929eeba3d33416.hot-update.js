webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/index */ \"./src/components/index.ts\");\nvar _jsxFileName = \"/home/muhammed/Desktop/react/working-area/src/pages/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Home = ({\n  myStore\n}) => {\n  _s();\n\n  const {\n    0: inTitle,\n    1: setinTitle\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  const {\n    0: inText,\n    1: setinText\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  return __jsx(\"div\", {\n    className: \"home\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"home-new\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"home-new-input\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 17\n    }\n  }, __jsx(_components_index__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n    onChange: e => setinTitle(e.target.value),\n    title: \"Yap\\u0131lacak i\\u015F ismi\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 21\n    }\n  }), __jsx(\"div\", {\n    className: \"home-new-input-2\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 21\n    }\n  }, __jsx(_components_index__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n    onChange: e => setinText(e.target.value),\n    width: 400,\n    title: \"Neler yap\\u0131lacak\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 21\n    }\n  })), __jsx(_components_index__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: () => {\n      myStore.ekle({\n        title: inTitle,\n        text: inText\n      });\n      console.log(\"denem\");\n    },\n    input: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 21\n    }\n  }, \"EKLE\")), __jsx(\"div\", {\n    className: \"home-new-cards\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 17\n    }\n  }, myStore.cards.map(index => {\n    return __jsx(\"div\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 33\n      }\n    }, __jsx(_components_index__WEBPACK_IMPORTED_MODULE_1__[\"Card1\"], {\n      onClick: () => {\n        console.log(index.title);\n      },\n      title: index.title,\n      text: index.text,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 41\n      }\n    }));\n  }))), __jsx(\"div\", {\n    className: \"home-working\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"home-working-title\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 17\n    }\n  }, __jsx(\"h2\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 21\n    }\n  }, \"\\u015Eu an \\xE7al\\u0131\\u015F\\u0131l\\u0131yor\"), __jsx(\"div\", {\n    className: \"home-working-title-underline\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 21\n    }\n  })), __jsx(_components_index__WEBPACK_IMPORTED_MODULE_1__[\"Card2\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 21\n    }\n  })));\n};\n\n_s(Home, \"EiFA6KTpMnbnVMx+qlE4fnTpSQk=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4PzQxZTAiXSwibmFtZXMiOlsiSG9tZSIsIm15U3RvcmUiLCJpblRpdGxlIiwic2V0aW5UaXRsZSIsInVzZVN0YXRlIiwiaW5UZXh0Iiwic2V0aW5UZXh0IiwiZSIsInRhcmdldCIsInZhbHVlIiwiZWtsZSIsInRpdGxlIiwidGV4dCIsImNvbnNvbGUiLCJsb2ciLCJjYXJkcyIsIm1hcCIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRUE7O0FBT0EsTUFBTUEsSUFBbUIsR0FBRyxDQUFDO0FBQUNDO0FBQUQsQ0FBRCxLQUFlO0FBQUE7O0FBRXZDLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkMsc0RBQVEsQ0FBQyxFQUFELENBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCRixzREFBUSxDQUFDLEVBQUQsQ0FBcEM7QUFFQSxTQUNJO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHVEQUFEO0FBQ0EsWUFBUSxFQUFHRyxDQUFELElBQU9KLFVBQVUsQ0FBQ0ksQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FEM0I7QUFFQSxTQUFLLEVBQUMsNkJBRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBSUk7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsdURBQUQ7QUFDSSxZQUFRLEVBQUdGLENBQUQsSUFBT0QsU0FBUyxDQUFDQyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUQ5QjtBQUVBLFNBQUssRUFBRSxHQUZQO0FBRVksU0FBSyxFQUFDLHNCQUZsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREEsQ0FKSixFQVNJLE1BQUMsd0RBQUQ7QUFDQSxXQUFPLEVBQUUsTUFBTTtBQUNYUixhQUFPLENBQUNTLElBQVIsQ0FBYTtBQUFDQyxhQUFLLEVBQUVULE9BQVI7QUFBaUJVLFlBQUksRUFBRVA7QUFBdkIsT0FBYjtBQUNBUSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBQ0gsS0FKRDtBQUtBLFNBQUssTUFMTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEosQ0FGSixFQWtCSTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRVFiLE9BQU8sQ0FBQ2MsS0FBUixDQUFjQyxHQUFkLENBQWtCQyxLQUFLLElBQUk7QUFDdkIsV0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRVEsTUFBQyx1REFBRDtBQUNBLGFBQU8sRUFBRSxNQUFNO0FBQ1hKLGVBQU8sQ0FBQ0MsR0FBUixDQUFZRyxLQUFLLENBQUNOLEtBQWxCO0FBRUgsT0FKRDtBQUtBLFdBQUssRUFBRU0sS0FBSyxDQUFDTixLQUxiO0FBS29CLFVBQUksRUFBRU0sS0FBSyxDQUFDTCxJQUxoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRlIsQ0FESjtBQVlILEdBYkQsQ0FGUixDQWxCSixDQURKLEVBdUNJO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLG9CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFEQURKLEVBRUk7QUFBSyxhQUFTLEVBQUMsOEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBREosRUFLUSxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMUixDQXZDSixDQURKO0FBaURILENBdEREOztHQUFNWixJOztLQUFBQSxJO0FBd0RTQSxtRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEJ1dHRvbiwgSW5wdXQsIENhcmQxLCBDYXJkMiB9IGZyb20gJy4uL2NvbXBvbmVudHMvaW5kZXgnO1xuIFxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICBteVN0b3JlOiBhbnk7XG59XG5cbmNvbnN0IEhvbWU6IFJlYWN0LkZDPGFueT4gPSAoe215U3RvcmV9KSA9PiB7XG5cbiAgICBjb25zdCBbaW5UaXRsZSwgc2V0aW5UaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbaW5UZXh0LCBzZXRpblRleHRdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1uZXdcIj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtbmV3LWlucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldGluVGl0bGUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIllhcMSxbGFjYWsgacWfIGlzbWlcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1uZXctaW5wdXQtMlwiPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0aW5UZXh0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezQwMH0gdGl0bGU9XCJOZWxlciB5YXDEsWxhY2FrXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBteVN0b3JlLmVrbGUoe3RpdGxlOiBpblRpdGxlLCB0ZXh0OiBpblRleHR9KVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkZW5lbVwiKTsgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGlucHV0PkVLTEU8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLW5ldy1jYXJkc1wiPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBteVN0b3JlLmNhcmRzLm1hcChpbmRleCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkMSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4LnRpdGxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17aW5kZXgudGl0bGV9IHRleHQ9e2luZGV4LnRleHR9IC8+ICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS13b3JraW5nXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLXdvcmtpbmctdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPsWedSBhbiDDp2FsxLHFn8SxbMSxeW9yPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLXdvcmtpbmctdGl0bGUtdW5kZXJsaW5lXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkMiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})