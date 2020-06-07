webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./src/components/card-1/card1.tsx":
/*!*****************************************!*\
  !*** ./src/components/card-1/card1.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _card1_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card1.scss */ "./src/components/card-1/card1.scss");
/* harmony import */ var _card1_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_card1_scss__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\muham\\Desktop\\working-area\\src\\components\\card-1\\card1.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



const Card1 = (_ref) => {
  let {
    title,
    text,
    store,
    data
  } = _ref,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["title", "text", "store", "data"]);

  return __jsx("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "card1"
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: "card1-image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("div", {
    onClick: e => {
      e.preventDefault();
      store === null || store === void 0 ? void 0 : store.CardsDelete(data);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, "delete"), __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, "\xC7al\u0131\u015Fmaya Ba\u015Fla"), __jsx("img", {
    className: "bottom-arrow",
    src: "/bottom.svg",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "card1-description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, " ", title ? title : "default", " "), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, text ? text : " ")));
};

_c = Card1;
/* harmony default export */ __webpack_exports__["default"] = (Card1);

var _c;

$RefreshReg$(_c, "Card1");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJkLTEvY2FyZDEudHN4Il0sIm5hbWVzIjpbIkNhcmQxIiwidGl0bGUiLCJ0ZXh0Iiwic3RvcmUiLCJkYXRhIiwicmVzdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIkNhcmRzRGVsZXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBOztBQVNBLE1BQU1BLEtBQXNCLEdBQUcsVUFBMkM7QUFBQSxNQUExQztBQUFFQyxTQUFGO0FBQVNDLFFBQVQ7QUFBZUMsU0FBZjtBQUFzQkM7QUFBdEIsR0FBMEM7QUFBQSxNQUFYQyxJQUFXOztBQUN4RSxTQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FBMkJBLElBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFDRTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFdBQU8sRUFBR0MsQ0FBRCxJQUFPO0FBQ2RBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBSixXQUFLLFNBQUwsSUFBQUEsS0FBSyxXQUFMLFlBQUFBLEtBQUssQ0FBRUssV0FBUCxDQUFtQkosSUFBbkI7QUFDRCxLQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUNBVEYsRUFVRTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQThCLE9BQUcsRUFBQyxhQUFsQztBQUFnRCxPQUFHLEVBQUMsRUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLENBREYsRUFhRTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFNSCxLQUFLLEdBQUdBLEtBQUgsR0FBVyxTQUF0QixNQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJQyxJQUFJLEdBQUdBLElBQUgsR0FBVSxHQUFsQixDQUZGLENBYkYsQ0FERjtBQW9CRCxDQXJCRDs7S0FBTUYsSztBQXVCU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuYTQ2MGI2NTVhM2YyMzQzMmFkMzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBcIi4vY2FyZDEuc2Nzc1wiO1xyXG5cclxudHlwZSBQcm9wcyA9IEpTWC5JbnRyaW5zaWNFbGVtZW50c1tcImRpdlwiXSAmIHtcclxuICB0aXRsZT86IHN0cmluZztcclxuICB0ZXh0Pzogc3RyaW5nO1xyXG4gIGRhdGE/OiBzdHJpbmc7XHJcbiAgc3RvcmU/OiBhbnk7XHJcbn07XHJcblxyXG5jb25zdCBDYXJkMTogUmVhY3QuRkM8UHJvcHM+ID0gKHsgdGl0bGUsIHRleHQsIHN0b3JlLCBkYXRhLCAuLi5yZXN0IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkMVwiIHsuLi5yZXN0fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkMS1pbWFnZVwiPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc3RvcmU/LkNhcmRzRGVsZXRlKGRhdGEpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBkZWxldGVcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aDE+w4dhbMSxxZ9tYXlhIEJhxZ9sYTwvaDE+XHJcbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJib3R0b20tYXJyb3dcIiBzcmM9XCIvYm90dG9tLnN2Z1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQxLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgPGg1PiB7dGl0bGUgPyB0aXRsZSA6IFwiZGVmYXVsdFwifSA8L2g1PlxyXG4gICAgICAgIDxwPnt0ZXh0ID8gdGV4dCA6IFwiIFwifTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDE7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=