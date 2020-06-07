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
      lineNumber: 74,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "home-working-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, "\u015Eu an \xE7al\u0131\u015F\u0131l\u0131yor"), __jsx("div", {
    className: "home-working-title-underline",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  })), (_myStore$working = myStore.working) === null || _myStore$working === void 0 ? void 0 : _myStore$working.map((index, key) => {
    return __jsx("div", {
      key: key,
      className: "home-working-new",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 13
      }
    }, __jsx(_components_index__WEBPACK_IMPORTED_MODULE_2__["Card2"], {
      title: index.title,
      desc: index.text,
      timerStart: index.timerStart,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJteVN0b3JlIiwiaW5UaXRsZSIsInNldGluVGl0bGUiLCJ1c2VTdGF0ZSIsImluVGV4dCIsInNldGluVGV4dCIsInN0b3JlU2l6ZSIsInNldFN0b3JlU2l6ZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImVrbGUiLCJ0aXRsZSIsInRleHQiLCJhbGVydCIsImNhcmRzIiwibWFwIiwiaW5kZXgiLCJrZXkiLCJjb250cm9sIiwid29ya2luZyIsImZvckVhY2giLCJlbGVtZW50IiwiYWRkV29ya2luZyIsInRpbWVyU3RhcnQiLCJvYnNlcnZlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFNQSxNQUFNQSxJQUFtQixHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWlCO0FBQUE7O0FBQUE7O0FBQzNDLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkMsc0RBQVEsQ0FBQyxFQUFELENBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCRixzREFBUSxDQUFDLEVBQUQsQ0FBcEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0csU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJKLHNEQUFRLENBQUMsQ0FBRCxDQUExQztBQUVBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsdURBQUQ7QUFDRSxZQUFRLEVBQUdLLENBQUQsSUFBT04sVUFBVSxDQUFDTSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUQ3QjtBQUVFLFNBQUssRUFBQyw2QkFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFLRTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx1REFBRDtBQUNFLFlBQVEsRUFBR0YsQ0FBRCxJQUFPSCxTQUFTLENBQUNHLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBRDVCO0FBRUUsU0FBSyxFQUFFLEdBRlQ7QUFHRSxTQUFLLEVBQUMsc0JBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBTEYsRUFZRSxNQUFDLHdEQUFEO0FBQ0UsV0FBTyxFQUFFLE1BQU07QUFDYkosZUFBUyxJQUFJLENBQWIsR0FDSU4sT0FBTyxDQUFDVyxJQUFSLENBQWE7QUFBRUMsYUFBSyxFQUFFWCxPQUFUO0FBQWtCWSxZQUFJLEVBQUVUO0FBQXhCLE9BQWIsQ0FESixHQUVJVSxLQUFLLENBQUMsdUJBQUQsQ0FGVDtBQUdBUCxrQkFBWSxDQUFDRCxTQUFTLEdBQUcsQ0FBYixDQUFaO0FBQ0QsS0FOSDtBQU9FLFNBQUssTUFQUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWkYsQ0FERixFQXlCRTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dOLE9BQU8sQ0FBQ2UsS0FBUixDQUFjQyxHQUFkLENBQWtCLENBQUNDLEtBQUQsRUFBUUMsR0FBUixLQUFnQjtBQUNqQyxXQUNFO0FBQUssU0FBRyxFQUFFQSxHQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FFSSxNQUFDLHVEQUFEO0FBQ0UsYUFBTyxFQUFHVixDQUFELElBQVk7QUFDbkIsWUFBSVcsT0FBSjtBQUNBbkIsZUFBTyxDQUFDb0IsT0FBUixDQUFnQkMsT0FBaEIsQ0FBeUJDLE9BQUQsSUFBYTtBQUNuQ0EsaUJBQU8sQ0FBQ1YsS0FBUixLQUFrQkssS0FBSyxDQUFDTCxLQUF4QixJQUNBVSxPQUFPLENBQUNULElBQVIsS0FBaUJJLEtBQUssQ0FBQ0osSUFEdkIsR0FFS00sT0FBTyxHQUFHLElBRmYsR0FHS0EsT0FBTyxHQUFHLEtBSGY7QUFJRCxTQUxEO0FBT0FBLGVBQU8sR0FDSEwsS0FBSyxDQUFDLGlDQUFELENBREYsR0FFSGQsT0FBTyxDQUFDdUIsVUFBUixDQUFtQjtBQUNqQlgsZUFBSyxFQUFFSyxLQUFLLENBQUNMLEtBREk7QUFFakJDLGNBQUksRUFBRUksS0FBSyxDQUFDSixJQUZLO0FBR2pCVyxvQkFBVSxFQUFFO0FBSEssU0FBbkIsQ0FGSjtBQU9ELE9BakJIO0FBa0JFLFdBQUssRUFBRVAsS0FBSyxDQUFDTCxLQWxCZjtBQW1CRSxVQUFJLEVBQUVLLEtBQUssQ0FBQ0osSUFuQmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZKLENBREY7QUEyQkQsR0E1QkEsQ0FESCxDQXpCRixDQURGLEVBMkRFO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLG9CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFEQURGLEVBRUU7QUFBSyxhQUFTLEVBQUMsOEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsc0JBS0diLE9BQU8sQ0FBQ29CLE9BTFgscURBS0csaUJBQWlCSixHQUFqQixDQUFxQixDQUFDQyxLQUFELEVBQVFDLEdBQVIsS0FBZ0I7QUFDcEMsV0FDRTtBQUFLLFNBQUcsRUFBRUEsR0FBVjtBQUFlLGVBQVMsRUFBQyxrQkFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsdURBQUQ7QUFDRSxXQUFLLEVBQUVELEtBQUssQ0FBQ0wsS0FEZjtBQUVFLFVBQUksRUFBRUssS0FBSyxDQUFDSixJQUZkO0FBR0UsZ0JBQVUsRUFBRUksS0FBSyxDQUFDTyxVQUhwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FERjtBQVNELEdBVkEsQ0FMSCxDQTNERixDQURGO0FBK0VELENBcEZEOztHQUFNekIsSTs7S0FBQUEsSTtBQXNGUyxxRUFBQTBCLDJEQUFRLENBQUMxQixJQUFELENBQXZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4wNzgxYmVjZGFlNDBlY2Y5ZDNiOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSBcIm1vYngtcmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBJbnB1dCwgQ2FyZDEsIENhcmQyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvaW5kZXhcIjtcclxuXHJcbmludGVyZmFjZSBJUHJvcHMge1xyXG4gIG15U3RvcmU6IGFueTtcclxufVxyXG5cclxuY29uc3QgSG9tZTogUmVhY3QuRkM8YW55PiA9ICh7IG15U3RvcmUgfSkgPT4ge1xyXG4gIGNvbnN0IFtpblRpdGxlLCBzZXRpblRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpblRleHQsIHNldGluVGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc3RvcmVTaXplLCBzZXRTdG9yZVNpemVdID0gdXNlU3RhdGUoMSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWVcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLW5ld1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1uZXctaW5wdXRcIj5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldGluVGl0bGUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICB0aXRsZT1cIllhcMSxbGFjYWsgacWfIGlzbWlcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1uZXctaW5wdXQtMlwiPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldGluVGV4dChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgd2lkdGg9ezQwMH1cclxuICAgICAgICAgICAgICB0aXRsZT1cIk5lbGVyIHlhcMSxbGFjYWtcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBzdG9yZVNpemUgPD0gOVxyXG4gICAgICAgICAgICAgICAgPyBteVN0b3JlLmVrbGUoeyB0aXRsZTogaW5UaXRsZSwgdGV4dDogaW5UZXh0IH0pXHJcbiAgICAgICAgICAgICAgICA6IGFsZXJ0KFwiWWV0ZXJpbmNlIMSwxZ8gRWtsZW5kaS5cIik7XHJcbiAgICAgICAgICAgICAgc2V0U3RvcmVTaXplKHN0b3JlU2l6ZSArIDEpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBpbnB1dFxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBFS0xFXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtbmV3LWNhcmRzXCI+XHJcbiAgICAgICAgICB7bXlTdG9yZS5jYXJkcy5tYXAoKGluZGV4LCBrZXkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17a2V5fT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgPENhcmQxXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGU6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRyb2w7XHJcbiAgICAgICAgICAgICAgICAgICAgICBteVN0b3JlLndvcmtpbmcuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnRpdGxlID09PSBpbmRleC50aXRsZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnRleHQgPT09IGluZGV4LnRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IChjb250cm9sID0gdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IChjb250cm9sID0gZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgY29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGFsZXJ0KFwiQnUgacWfIMWfdSBhbmRhIHphdGVuIMOnYWzEscWfxLFsxLF5b3JcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBteVN0b3JlLmFkZFdvcmtpbmcoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGluZGV4LnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogaW5kZXgudGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVyU3RhcnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17aW5kZXgudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dD17aW5kZXgudGV4dH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS13b3JraW5nXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLXdvcmtpbmctdGl0bGVcIj5cclxuICAgICAgICAgIDxoMj7FnnUgYW4gw6dhbMSxxZ/EsWzEsXlvcjwvaDI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtd29ya2luZy10aXRsZS11bmRlcmxpbmVcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7bXlTdG9yZS53b3JraW5nPy5tYXAoKGluZGV4LCBrZXkpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtrZXl9IGNsYXNzTmFtZT1cImhvbWUtd29ya2luZy1uZXdcIj5cclxuICAgICAgICAgICAgICA8Q2FyZDJcclxuICAgICAgICAgICAgICAgIHRpdGxlPXtpbmRleC50aXRsZX1cclxuICAgICAgICAgICAgICAgIGRlc2M9e2luZGV4LnRleHR9XHJcbiAgICAgICAgICAgICAgICB0aW1lclN0YXJ0PXtpbmRleC50aW1lclN0YXJ0fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgb2JzZXJ2ZXIoSG9tZSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=