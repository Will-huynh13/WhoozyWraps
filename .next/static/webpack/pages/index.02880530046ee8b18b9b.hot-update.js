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
      lineNumber: 11,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    slogan: "Recent works",
    title: "Here are some examples of our work!",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    sx: styles.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, images && images.map(function (image) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      key: images.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("img", {
      width: 300,
      height: 300,
      className: "object-cover aspect-square",
      src: image.media_url,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 19
      }
    }));
  }))));
}

_c = Feature;
var styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: ["40px 0", null, "45px 30px", null, "60px 50px", "70px 50px", null, "80px 90px"],
    gridTemplateColumns: ["repeat(1,1fr)", "repeat(2,1fr)", "repeat(3,1fr)"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2ZlYXR1cmUuanMiXSwibmFtZXMiOlsiRmVhdHVyZSIsImRhdGEiLCJpbWFnZXMiLCJ2YXJpYW50Iiwic3R5bGVzIiwiZ3JpZCIsIm1hcCIsImltYWdlIiwiaWQiLCJtZWRpYV91cmwiLCJwdCIsInB4IiwiZ3JpZEdhcCIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxPQUFULE9BQXlCO0FBQUE7O0FBQUEsTUFBUEMsSUFBTyxRQUFQQSxJQUFPO0FBQ3ZCLE1BQU1DLE1BQU0sR0FBR0QsSUFBSSxDQUFDQSxJQUFwQixDQUR1QixDQUV2Qjs7QUFDQSxTQUNFO0FBQVMsTUFBRSxFQUFFO0FBQUVFLGFBQU8sRUFBRTtBQUFYLEtBQWI7QUFBNkMsTUFBRSxFQUFDLFNBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsaUVBQUQ7QUFDRSxVQUFNLEVBQUMsY0FEVDtBQUVFLFNBQUssRUFBQyxxQ0FGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFLRSxxREFBQyw2Q0FBRDtBQUFNLE1BQUUsRUFBRUMsTUFBTSxDQUFDQyxJQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dILE1BQU0sSUFBSUEsTUFBTSxDQUFDSSxHQUFQLENBQVcsVUFBQ0MsS0FBRDtBQUFBLFdBQ3BCO0FBQUssU0FBRyxFQUFFTCxNQUFNLENBQUNNLEVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDTTtBQUFLLFdBQUssRUFBRSxHQUFaO0FBQWlCLFlBQU0sRUFBRSxHQUF6QjtBQUE4QixlQUFTLEVBQUMsNEJBQXhDO0FBQXFFLFNBQUcsRUFBRUQsS0FBSyxDQUFDRSxTQUFoRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRE4sQ0FEb0I7QUFBQSxHQUFYLENBRGIsQ0FMRixDQURGLENBREY7QUFrQkQ7O0tBckJRVCxPO0FBd0JULElBQU1JLE1BQU0sR0FBRztBQUNiQyxNQUFJLEVBQUU7QUFDSkssTUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxJQUFWLEVBQWdCLElBQWhCLEVBQXNCLElBQXRCLEVBQTRCLElBQTVCLEVBQWtDLENBQWxDLENBREE7QUFFSkMsTUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsSUFBVixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixDQUZBO0FBR0pDLFdBQU8sRUFBRSxDQUNQLFFBRE8sRUFFUCxJQUZPLEVBR1AsV0FITyxFQUlQLElBSk8sRUFLUCxXQUxPLEVBTVAsV0FOTyxFQU9QLElBUE8sRUFRUCxXQVJPLENBSEw7QUFhSkMsdUJBQW1CLEVBQUUsQ0FBQyxlQUFELEVBQWtCLGVBQWxCLEVBQW1DLGVBQW5DO0FBYmpCO0FBRE8sQ0FBZjtBQWtCZWIsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDI4ODA1MzAwNDZlZThiMThiOWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tIFwidGhlbWUtdWlcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkIH0gZnJvbSBcInRoZW1lLXVpXCI7XHJcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gXCJjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gRmVhdHVyZSh7ZGF0YX0pIHtcclxuICBjb25zdCBpbWFnZXMgPSBkYXRhLmRhdGE7XHJcbiAgLy8gY29uc29sZS5sb2coXCJwcm9wczpcXG5cIiwgZGF0YSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIHN4PXt7IHZhcmlhbnQ6IFwic2VjdGlvbi5mZWF0dXJlXCIgfX0gaWQ9XCJnYWxsZXJ5XCI+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFNlY3Rpb25IZWFkZXJcclxuICAgICAgICAgIHNsb2dhbj1cIlJlY2VudCB3b3Jrc1wiXHJcbiAgICAgICAgICB0aXRsZT1cIkhlcmUgYXJlIHNvbWUgZXhhbXBsZXMgb2Ygb3VyIHdvcmshXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxHcmlkIHN4PXtzdHlsZXMuZ3JpZH0+XHJcbiAgICAgICAgICB7aW1hZ2VzICYmIGltYWdlcy5tYXAoKGltYWdlKSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtpbWFnZXMuaWR9PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHdpZHRoPXszMDB9IGhlaWdodD17MzAwfSBjbGFzc05hbWU9XCJvYmplY3QtY292ZXIgYXNwZWN0LXNxdWFyZVwiIHNyYz17aW1hZ2UubWVkaWFfdXJsfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGdyaWQ6IHtcclxuICAgIHB0OiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgMl0sXHJcbiAgICBweDogWzUsIDYsIDAsIG51bGwsIDcsIDgsIDddLFxyXG4gICAgZ3JpZEdhcDogW1xyXG4gICAgICBcIjQwcHggMFwiLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBcIjQ1cHggMzBweFwiLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBcIjYwcHggNTBweFwiLFxyXG4gICAgICBcIjcwcHggNTBweFwiLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBcIjgwcHggOTBweFwiLFxyXG4gICAgXSxcclxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFtcInJlcGVhdCgxLDFmcilcIiwgXCJyZXBlYXQoMiwxZnIpXCIsIFwicmVwZWF0KDMsMWZyKVwiXSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==