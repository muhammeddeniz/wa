webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/index */ "./src/components/index.ts");
var _jsxFileName = "C:\\Users\\muham\\Desktop\\working-area\\src\\pages\\index.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Home = ({
  myStore
}) => {
  _s();

  var _myStore$working;

  const {
    0: inTitle,
    1: setinTitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: inText,
    1: setinText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  return __jsx("div", {
    className: "home",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "home-new",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "home-new-input",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx(_components_index__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    onChange: e => setinTitle(e.target.value),
    title: "Yap\u0131lacak i\u015F ismi",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "home-new-input-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, __jsx(_components_index__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    onChange: e => setinText(e.target.value),
    width: 400,
    title: "Neler yap\u0131lacak",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  })), __jsx(_components_index__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: () => {
      myStore.ekle({
        title: inTitle,
        text: inText
      });
    },
    input: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, "EKLE")), __jsx("div", {
    className: "home-new-cards",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, myStore.cards.map((index, key) => {
    return __jsx("div", {
      key: key,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 15
      }
    }, __jsx(_components_index__WEBPACK_IMPORTED_MODULE_2__["Card1"], {
      onClick: e => {
        let test = myStore.working.find(i => i === {
          title: index.title,
          text: index.text,
          timerStart: true
        });
        test ? alert("Şu an çalışmakta olan işi tekrar ekleyemezsiniz.") : myStore.addWorking({
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
        lineNumber: 42,
        columnNumber: 19
      }
    }));
  }))), __jsx("div", {
    className: "home-working",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "home-working-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, "\u015Eu an \xE7al\u0131\u015F\u0131l\u0131yor"), __jsx("div", {
    className: "home-working-title-underline",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  })), (_myStore$working = myStore.working) === null || _myStore$working === void 0 ? void 0 : _myStore$working.map((index, key) => {
    return __jsx("div", {
      key: key,
      className: "home-working-new",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 13
      }
    }, __jsx(_components_index__WEBPACK_IMPORTED_MODULE_2__["Card2"], {
      title: index.title,
      desc: index.text,
      timerStart: index.timerStart,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 15
      }
    }));
  })));
};

_s(Home, "EiFA6KTpMnbnVMx+qlE4fnTpSQk=");

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["observer"])(Home));

var _c, _c2;

$RefreshReg$(_c, "Home");
$RefreshReg$(_c2, "%default%");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJteVN0b3JlIiwiaW5UaXRsZSIsInNldGluVGl0bGUiLCJ1c2VTdGF0ZSIsImluVGV4dCIsInNldGluVGV4dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImVrbGUiLCJ0aXRsZSIsInRleHQiLCJjYXJkcyIsIm1hcCIsImluZGV4Iiwia2V5IiwidGVzdCIsIndvcmtpbmciLCJmaW5kIiwiaSIsInRpbWVyU3RhcnQiLCJhbGVydCIsImFkZFdvcmtpbmciLCJvYnNlcnZlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFNQSxNQUFNQSxJQUFtQixHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWlCO0FBQUE7O0FBQUE7O0FBQzNDLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkMsc0RBQVEsQ0FBQyxFQUFELENBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCRixzREFBUSxDQUFDLEVBQUQsQ0FBcEM7QUFFQSxTQUNFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHVEQUFEO0FBQ0UsWUFBUSxFQUFHRyxDQUFELElBQU9KLFVBQVUsQ0FBQ0ksQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FEN0I7QUFFRSxTQUFLLEVBQUMsNkJBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBS0U7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFB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dGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjU5OTMyMDdlNjkyZTI1M2FmMzc3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tIFwibW9ieC1yZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIElucHV0LCBDYXJkMSwgQ2FyZDIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9pbmRleFwiO1xyXG5cclxuaW50ZXJmYWNlIElQcm9wcyB7XHJcbiAgbXlTdG9yZTogYW55O1xyXG59XHJcblxyXG5jb25zdCBIb21lOiBSZWFjdC5GQzxhbnk+ID0gKHsgbXlTdG9yZSB9KSA9PiB7XHJcbiAgY29uc3QgW2luVGl0bGUsIHNldGluVGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2luVGV4dCwgc2V0aW5UZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJob21lXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1uZXdcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtbmV3LWlucHV0XCI+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRpblRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgdGl0bGU9XCJZYXDEsWxhY2FrIGnFnyBpc21pXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtbmV3LWlucHV0LTJcIj5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRpblRleHQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIHdpZHRoPXs0MDB9XHJcbiAgICAgICAgICAgICAgdGl0bGU9XCJOZWxlciB5YXDEsWxhY2FrXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgbXlTdG9yZS5la2xlKHsgdGl0bGU6IGluVGl0bGUsIHRleHQ6IGluVGV4dCB9KTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgaW5wdXRcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgRUtMRVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLW5ldy1jYXJkc1wiPlxyXG4gICAgICAgICAge215U3RvcmUuY2FyZHMubWFwKChpbmRleCwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2tleX0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkMVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXN0ID0gbXlTdG9yZS53b3JraW5nLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGkgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGluZGV4LnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogaW5kZXgudGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVyU3RhcnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRlc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBhbGVydChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwixZ51IGFuIMOnYWzEscWfbWFrdGEgb2xhbiBpxZ9pIHRla3JhciBla2xleWVtZXpzaW5pei5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBteVN0b3JlLmFkZFdvcmtpbmcoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGluZGV4LnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogaW5kZXgudGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVyU3RhcnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17aW5kZXgudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dD17aW5kZXgudGV4dH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS13b3JraW5nXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLXdvcmtpbmctdGl0bGVcIj5cclxuICAgICAgICAgIDxoMj7FnnUgYW4gw6dhbMSxxZ/EsWzEsXlvcjwvaDI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtd29ya2luZy10aXRsZS11bmRlcmxpbmVcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7bXlTdG9yZS53b3JraW5nPy5tYXAoKGluZGV4LCBrZXkpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtrZXl9IGNsYXNzTmFtZT1cImhvbWUtd29ya2luZy1uZXdcIj5cclxuICAgICAgICAgICAgICA8Q2FyZDJcclxuICAgICAgICAgICAgICAgIHRpdGxlPXtpbmRleC50aXRsZX1cclxuICAgICAgICAgICAgICAgIGRlc2M9e2luZGV4LnRleHR9XHJcbiAgICAgICAgICAgICAgICB0aW1lclN0YXJ0PXtpbmRleC50aW1lclN0YXJ0fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgb2JzZXJ2ZXIoSG9tZSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=