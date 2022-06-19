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
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-responsive-carousel */ "./node_modules/react-responsive-carousel/lib/js/index.js");
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Will's Gaming PC\\Documents\\Development\\WhoozyWraps\\src\\sections\\feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */





function Feature(_ref) {
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
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__["Carousel"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("link", {
    rel: "stylesheet",
    href: "carousel.css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("img", {
    width: 300,
    src: "https://scontent.cdninstagram.com/v/t51.29350-15/288991226_4048529642039083_5872947077685539097_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=VWZcKWvyqBwAX_SADoy&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT9Q_z5Dao6z0YfDb2ozGwXZIqAIc2pKAHBz-FqSAYzaRg&oe=62B33826",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 15
    }
  })))));
}

_c = Feature;
var styles = {
  grid: {
    gridGap: ["0px"],
    rowGap: ["0px"],
    gridTemplateColumns: ["repeat(4, [col-start] fit-content(200px) [col-end])"]
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Feature); // {images && images.map((image) => (
//   <div key={images.id}>
//     <a target ="_blank" href={image.permalink}>
//         <img 
//           width={300} 
//           height={300} 
//           className="aspect-square" 
//           src={image.media_url} 
//           />
//     </a>
//       </div>
//     ))}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2ZlYXR1cmUuanMiXSwibmFtZXMiOlsiRmVhdHVyZSIsImRhdGEiLCJpbWFnZXMiLCJ2YXJpYW50Iiwic3R5bGVzIiwiZ3JpZCIsImdyaWRHYXAiLCJyb3dHYXAiLCJncmlkVGVtcGxhdGVDb2x1bW5zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNBLE9BQVQsT0FBeUI7QUFBQSxNQUFQQyxJQUFPLFFBQVBBLElBQU87QUFDdkIsTUFBTUMsTUFBTSxHQUFHRCxJQUFJLENBQUNBLElBQXBCLENBRHVCLENBRXZCOztBQUNBLFNBQ0U7QUFBUyxNQUFFLEVBQUU7QUFBRUUsYUFBTyxFQUFFO0FBQVgsS0FBYjtBQUE2QyxNQUFFLEVBQUMsU0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyxpRUFBRDtBQUNFLFVBQU0sRUFBQyxjQURUO0FBRUUsU0FBSyxFQUFDLHFDQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQU1JLHFEQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLE9BQUcsRUFBQyxZQUFWO0FBQXVCLFFBQUksRUFBQyxjQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxTQUFLLEVBQUUsR0FBWjtBQUFpQixPQUFHLEVBQUMseVJBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUZGLENBTkosQ0FERixDQURGO0FBa0JEOztLQXJCUUgsTztBQXdCVCxJQUFNSSxNQUFNLEdBQUc7QUFDYkMsTUFBSSxFQUFFO0FBQ0pDLFdBQU8sRUFBRSxDQUNQLEtBRE8sQ0FETDtBQUlKQyxVQUFNLEVBQUMsQ0FDTCxLQURLLENBSkg7QUFPSkMsdUJBQW1CLEVBQUUsQ0FBQyxxREFBRDtBQVBqQjtBQURPLENBQWY7QUFZZVIsc0VBQWYsRSxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40NWRlMmFmODYxZDNmMmNlZmY3MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gXCJ0aGVtZS11aVwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEdyaWQgfSBmcm9tIFwidGhlbWUtdWlcIjtcclxuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSBcImNvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXJcIjtcclxuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tICdyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsJztcclxuXHJcblxyXG5mdW5jdGlvbiBGZWF0dXJlKHtkYXRhfSkge1xyXG4gIGNvbnN0IGltYWdlcyA9IGRhdGEuZGF0YTtcclxuICAvLyBjb25zb2xlLmxvZyhcInByb3BzOlxcblwiLCBkYXRhKTtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gc3g9e3sgdmFyaWFudDogXCJzZWN0aW9uLmZlYXR1cmVcIiB9fSBpZD1cImdhbGxlcnlcIj5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8U2VjdGlvbkhlYWRlclxyXG4gICAgICAgICAgc2xvZ2FuPVwiUmVjZW50IHdvcmtzXCJcclxuICAgICAgICAgIHRpdGxlPVwiSGVyZSBhcmUgc29tZSBleGFtcGxlcyBvZiBvdXIgd29yayFcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgey8qIDxHcmlkIHN4PXtzdHlsZXMuZ3JpZH0+ICovfVxyXG4gICAgICAgICAgPENhcm91c2VsPlxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImNhcm91c2VsLmNzc1wiLz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aW1nIHdpZHRoPXszMDB9IHNyYz1cImh0dHBzOi8vc2NvbnRlbnQuY2RuaW5zdGFncmFtLmNvbS92L3Q1MS4yOTM1MC0xNS8yODg5OTEyMjZfNDA0ODUyOTY0MjAzOTA4M181ODcyOTQ3MDc3Njg1NTM5MDk3X24uanBnP19uY19jYXQ9MTA1JmNjYj0xLTcmX25jX3NpZD04YWU5ZDYmX25jX29oYz1WV1pjS1d2eXFCd0FYX1NBRG95Jl9uY19odD1zY29udGVudC5jZG5pbnN0YWdyYW0uY29tJmVkbT1BTm85SzVjRUFBQUEmb2g9MDBfQVQ5UV96NURhbzZ6MFlmRGIyb3pHd1haSXFBSWMycEtBSEJ6LUZxU0FZemFSZyZvZT02MkIzMzgyNlwiLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICAgICAgICAgIHsvKiA8L0dyaWQ+ICovfVxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgZ3JpZDoge1xyXG4gICAgZ3JpZEdhcDogW1xyXG4gICAgICBcIjBweFwiLFxyXG4gICAgXSxcclxuICAgIHJvd0dhcDpbXHJcbiAgICAgIFwiMHB4XCJcclxuICAgIF0sXHJcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXCJyZXBlYXQoNCwgW2NvbC1zdGFydF0gZml0LWNvbnRlbnQoMjAwcHgpIFtjb2wtZW5kXSlcIl0sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmU7XHJcblxyXG4vLyB7aW1hZ2VzICYmIGltYWdlcy5tYXAoKGltYWdlKSA9PiAoXHJcbi8vICAgPGRpdiBrZXk9e2ltYWdlcy5pZH0+XHJcbi8vICAgICA8YSB0YXJnZXQgPVwiX2JsYW5rXCIgaHJlZj17aW1hZ2UucGVybWFsaW5rfT5cclxuLy8gICAgICAgICA8aW1nIFxyXG4vLyAgICAgICAgICAgd2lkdGg9ezMwMH0gXHJcbi8vICAgICAgICAgICBoZWlnaHQ9ezMwMH0gXHJcbi8vICAgICAgICAgICBjbGFzc05hbWU9XCJhc3BlY3Qtc3F1YXJlXCIgXHJcbi8vICAgICAgICAgICBzcmM9e2ltYWdlLm1lZGlhX3VybH0gXHJcbi8vICAgICAgICAgICAvPlxyXG4vLyAgICAgPC9hPlxyXG4vLyAgICAgICA8L2Rpdj5cclxuLy8gICAgICkpfSJdLCJzb3VyY2VSb290IjoiIn0=