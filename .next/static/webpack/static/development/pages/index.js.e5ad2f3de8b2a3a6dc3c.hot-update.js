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

_s(Home, "JoulyeADczn5qiKGZY7Ey55qVR4=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJteVN0b3JlIiwiaW5UaXRsZSIsInNldGluVGl0bGUiLCJ1c2VTdGF0ZSIsImluVGV4dCIsInNldGluVGV4dCIsInN0b3JlU2l6ZSIsInNldFN0b3JlU2l6ZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImVrbGUiLCJ0aXRsZSIsInRleHQiLCJhbGVydCIsImNhcmRzIiwibWFwIiwiaW5kZXgiLCJrZXkiLCJjb250cm9sIiwid29ya2luZyIsImZvckVhY2giLCJlbGVtZW50IiwiYWRkV29ya2luZyIsInRpbWVyU3RhcnQiLCJvYnNlcnZlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFNQSxNQUFNQSxJQUFtQixHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWlCO0FBQUE7O0FBQUE7O0FBQzNDLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkMsc0RBQVEsQ0FBQyxFQUFELENBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCRixzREFBUSxDQUFDLEVBQUQsQ0FBcEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0csU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJKLHNEQUFRLENBQUMsQ0FBRCxDQUExQztBQUVBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsdURBQUQ7QUFDRSxZQUFRLEVBQUdLLENBQUQsSUFBT04sVUFBVSxDQUFDTSxDQUFDLENBQUNDLE1B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QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLHVEQUFEO0FBQ0UsV0FBSyxFQUFFRCxLQUFLLENBQUNMLEtBRGY7QUFFRSxVQUFJLEVBQUVLLEtBQUssQ0FBQ0osSUFGZDtBQUdFLGdCQUFVLEVBQUVJLEtBQUssQ0FBQ08sVUFIcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBREY7QUFTRCxHQVZBLENBTEgsQ0E3REYsQ0FERjtBQWlGRCxDQXRGRDs7R0FBTXpCLEk7O0tBQUFBLEk7QUF3RlMscUVBQUEwQiwyREFBUSxDQUFDMUIsSUFBRCxDQUF2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuZTVhZDJmM2RlOGIyYTNhNmRjM2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gXCJtb2J4LXJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgSW5wdXQsIENhcmQxLCBDYXJkMiB9IGZyb20gXCIuLi9jb21wb25lbnRzL2luZGV4XCI7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHtcclxuICBteVN0b3JlOiBhbnk7XHJcbn1cclxuXHJcbmNvbnN0IEhvbWU6IFJlYWN0LkZDPGFueT4gPSAoeyBteVN0b3JlIH0pID0+IHtcclxuICBjb25zdCBbaW5UaXRsZSwgc2V0aW5UaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaW5UZXh0LCBzZXRpblRleHRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3N0b3JlU2l6ZSwgc2V0U3RvcmVTaXplXSA9IHVzZVN0YXRlKDEpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJob21lXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1uZXdcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtbmV3LWlucHV0XCI+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRpblRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgdGl0bGU9XCJZYXDEsWxhY2FrIGnFnyBpc21pXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtbmV3LWlucHV0LTJcIj5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRpblRleHQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIHdpZHRoPXs0MDB9XHJcbiAgICAgICAgICAgICAgdGl0bGU9XCJOZWxlciB5YXDEsWxhY2FrXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc3RvcmVTaXplIDw9IDlcclxuICAgICAgICAgICAgICAgID8gbXlTdG9yZS5la2xlKHsgdGl0bGU6IGluVGl0bGUsIHRleHQ6IGluVGV4dCB9KVxyXG4gICAgICAgICAgICAgICAgOiBhbGVydChcIllldGVyaW5jZSDEsMWfIEVrbGVuZGkuXCIpO1xyXG4gICAgICAgICAgICAgIHNldFN0b3JlU2l6ZShzdG9yZVNpemUgKyAxKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgaW5wdXRcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgRUtMRVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLW5ldy1jYXJkc1wiPlxyXG4gICAgICAgICAge215U3RvcmUuY2FyZHMubWFwKChpbmRleCwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2tleX0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkMVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlPXtteVN0b3JlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGxldCBjb250cm9sO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbXlTdG9yZS53b3JraW5nLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC50aXRsZSA9PT0gaW5kZXgudGl0bGUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC50ZXh0ID09PSBpbmRleC50ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyAoY29udHJvbCA9IHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoY29udHJvbCA9IGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBhbGVydChcIkJ1IGnFnyDFn3UgYW5kYSB6YXRlbiDDp2FsxLHFn8SxbMSxeW9yXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbXlTdG9yZS5hZGRXb3JraW5nKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBpbmRleC50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGluZGV4LnRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lclN0YXJ0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2luZGV4LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9e2luZGV4LnRleHR9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtd29ya2luZ1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS13b3JraW5nLXRpdGxlXCI+XHJcbiAgICAgICAgICA8aDI+xZ51IGFuIMOnYWzEscWfxLFsxLF5b3I8L2gyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLXdvcmtpbmctdGl0bGUtdW5kZXJsaW5lXCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge215U3RvcmUud29ya2luZz8ubWFwKChpbmRleCwga2V5KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17a2V5fSBjbGFzc05hbWU9XCJob21lLXdvcmtpbmctbmV3XCI+XHJcbiAgICAgICAgICAgICAgPENhcmQyXHJcbiAgICAgICAgICAgICAgICB0aXRsZT17aW5kZXgudGl0bGV9XHJcbiAgICAgICAgICAgICAgICBkZXNjPXtpbmRleC50ZXh0fVxyXG4gICAgICAgICAgICAgICAgdGltZXJTdGFydD17aW5kZXgudGltZXJTdGFydH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG9ic2VydmVyKEhvbWUpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9