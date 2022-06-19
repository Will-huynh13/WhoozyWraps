webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/feature.js":
/*!*********************************!*\
  !*** ./src/sections/feature.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
var _jsxFileName = "C:\\Users\\Will's Gaming PC\\Documents\\Development\\WhoozyWraps\\src\\sections\\feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */





function Feature(_ref) {
  var _this = this;

  var data = _ref.data;
  var images = data.data; // console.log("props:\n", data);

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    sx: {
      variant: "section.feature"
    },
    id: "gallery",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    slogan: "Recent works",
    title: "Here are some examples of our work!",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Box, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, images && images.map(function (image) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      key: images.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
      target: "_blank",
      href: image.permalink,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 15
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("img", {
      width: 300,
      height: 300,
      className: "aspect-square",
      src: image.media_url,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 19
      }
    })));
  }))));
}

_c = Feature;
var styles = {
  grid: {
    gridGap: ["0px"],
    rowGap: ["0px"],
    gridTemplateColumns: ["repeat(4, [col-start] min-content [col-end])"]
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Feature);

var _c;

$RefreshReg$(_c, "Feature");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2ZlYXR1cmUuanMiXSwibmFtZXMiOlsiRmVhdHVyZSIsImRhdGEiLCJpbWFnZXMiLCJ2YXJpYW50IiwibWFwIiwiaW1hZ2UiLCJpZCIsInBlcm1hbGluayIsIm1lZGlhX3VybCIsInN0eWxlcyIsImdyaWQiLCJncmlkR2FwIiwicm93R2FwIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNBLE9BQVQsT0FBeUI7QUFBQTs7QUFBQSxNQUFQQyxJQUFPLFFBQVBBLElBQU87QUFDdkIsTUFBTUMsTUFBTSxHQUFHRCxJQUFJLENBQUNBLElBQXBCLENBRHVCLENBRXZCOztBQUNBLFNBQ0U7QUFBUyxNQUFFLEVBQUU7QUFBRUUsYUFBTyxFQUFFO0FBQVgsS0FBYjtBQUE2QyxNQUFFLEVBQUMsU0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyxpRUFBRDtBQUNFLFVBQU0sRUFBQyxjQURUO0FBRUUsU0FBSyxFQUFDLHFDQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUtFLHFEQUFDLEdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRCxNQUFNLElBQUlBLE1BQU0sQ0FBQ0UsR0FBUCxDQUFXLFVBQUNDLEtBQUQ7QUFBQSxXQUNwQjtBQUFLLFNBQUcsRUFBRUgsTUFBTSxDQUFDSSxFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxZQUFNLEVBQUUsUUFBWDtBQUFvQixVQUFJLEVBQUVELEtBQUssQ0FBQ0UsU0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQ0UsV0FBSyxFQUFFLEdBRFQ7QUFFRSxZQUFNLEVBQUUsR0FGVjtBQUdFLGVBQVMsRUFBQyxlQUhaO0FBSUUsU0FBRyxFQUFFRixLQUFLLENBQUNHLFNBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLENBREYsQ0FEb0I7QUFBQSxHQUFYLENBRGIsQ0FMRixDQURGLENBREY7QUF3QkQ7O0tBM0JRUixPO0FBOEJULElBQU1TLE1BQU0sR0FBRztBQUNiQyxNQUFJLEVBQUU7QUFDSkMsV0FBTyxFQUFFLENBQ1AsS0FETyxDQURMO0FBSUpDLFVBQU0sRUFBQyxDQUNMLEtBREssQ0FKSDtBQU9KQyx1QkFBbUIsRUFBRSxDQUFDLDhDQUFEO0FBUGpCO0FBRE8sQ0FBZjtBQVllYixzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zZDcyMmI3OWVjYTkwYzE3NTFjYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gXCJ0aGVtZS11aVwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEdyaWQgfSBmcm9tIFwidGhlbWUtdWlcIjtcclxuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSBcImNvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXJcIjtcclxuaW1wb3J0IHsgRmFGaWxlRXhjZWwgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBGZWF0dXJlKHtkYXRhfSkge1xyXG4gIGNvbnN0IGltYWdlcyA9IGRhdGEuZGF0YTtcclxuICAvLyBjb25zb2xlLmxvZyhcInByb3BzOlxcblwiLCBkYXRhKTtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gc3g9e3sgdmFyaWFudDogXCJzZWN0aW9uLmZlYXR1cmVcIiB9fSBpZD1cImdhbGxlcnlcIj5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8U2VjdGlvbkhlYWRlclxyXG4gICAgICAgICAgc2xvZ2FuPVwiUmVjZW50IHdvcmtzXCJcclxuICAgICAgICAgIHRpdGxlPVwiSGVyZSBhcmUgc29tZSBleGFtcGxlcyBvZiBvdXIgd29yayFcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEJveD5cclxuICAgICAgICAgIHtpbWFnZXMgJiYgaW1hZ2VzLm1hcCgoaW1hZ2UpID0+IChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2ltYWdlcy5pZH0+XHJcbiAgICAgICAgICAgICAgPGEgdGFyZ2V0ID1cIl9ibGFua1wiIGhyZWY9e2ltYWdlLnBlcm1hbGlua30+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezMwMH0gXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszMDB9IFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFzcGVjdC1zcXVhcmVcIiBcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlLm1lZGlhX3VybH0gXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGdyaWQ6IHtcclxuICAgIGdyaWRHYXA6IFtcclxuICAgICAgXCIwcHhcIixcclxuICAgIF0sXHJcbiAgICByb3dHYXA6W1xyXG4gICAgICBcIjBweFwiXHJcbiAgICBdLFxyXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1wicmVwZWF0KDQsIFtjb2wtc3RhcnRdIG1pbi1jb250ZW50IFtjb2wtZW5kXSlcIl0sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=