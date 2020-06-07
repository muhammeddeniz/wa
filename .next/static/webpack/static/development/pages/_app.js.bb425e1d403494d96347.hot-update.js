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
      store.CardsDelete(data);
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
      lineNumber: 23,
      columnNumber: 9
    }
  }, "\xC7al\u0131\u015Fmaya Ba\u015Fla"), __jsx("img", {
    className: "bottom-arrow",
    src: "/bottom.svg",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "card1-description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, " ", title ? title : "default", " "), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJkLTEvY2FyZDEudHN4Il0sIm5hbWVzIjpbIkNhcmQxIiwidGl0bGUiLCJ0ZXh0Iiwic3RvcmUiLCJkYXRhIiwicmVzdCIsImUiLCJDYXJkc0RlbGV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFTQSxNQUFNQSxLQUFzQixHQUFHLFVBQTJDO0FBQUEsTUFBMUM7QUFBRUMsU0FBRjtBQUFTQyxRQUFUO0FBQWVDLFNBQWY7QUFBc0JDO0FBQXRCLEdBQTBDO0FBQUEsTUFBWEMsSUFBVzs7QUFDeEUsU0FDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQTJCQSxJQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQ0U7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxXQUFPLEVBQUdDLENBQUQsSUFBTztBQUNkSCxXQUFLLENBQUNJLFdBQU4sQ0FBa0JILElBQWxCO0FBQ0QsS0FISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlDQVJGLEVBU0U7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUE4QixPQUFHLEVBQUMsYUFBbEM7QUFBZ0QsT0FBRyxFQUFDLEVBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixDQURGLEVBWUU7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBTUgsS0FBSyxHQUFHQSxLQUFILEdBQVcsU0FBdEIsTUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSUMsSUFBSSxHQUFHQSxJQUFILEdBQVUsR0FBbEIsQ0FGRixDQVpGLENBREY7QUFtQkQsQ0FwQkQ7O0tBQU1GLEs7QUFzQlNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLmJiNDI1ZTFkNDAzNDk0ZDk2MzQ3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgXCIuL2NhcmQxLnNjc3NcIjtcclxuXHJcbnR5cGUgUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbXCJkaXZcIl0gJiB7XHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgdGV4dD86IHN0cmluZztcclxuICBkYXRhPzogc3RyaW5nO1xyXG4gIHN0b3JlPzogYW55O1xyXG59O1xyXG5cclxuY29uc3QgQ2FyZDE6IFJlYWN0LkZDPFByb3BzPiA9ICh7IHRpdGxlLCB0ZXh0LCBzdG9yZSwgZGF0YSwgLi4ucmVzdCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZDFcIiB7Li4ucmVzdH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZDEtaW1hZ2VcIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBzdG9yZS5DYXJkc0RlbGV0ZShkYXRhKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgZGVsZXRlXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGgxPsOHYWzEscWfbWF5YSBCYcWfbGE8L2gxPlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYm90dG9tLWFycm93XCIgc3JjPVwiL2JvdHRvbS5zdmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkMS1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgIDxoNT4ge3RpdGxlID8gdGl0bGUgOiBcImRlZmF1bHRcIn0gPC9oNT5cclxuICAgICAgICA8cD57dGV4dCA/IHRleHQgOiBcIiBcIn08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmQxO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9