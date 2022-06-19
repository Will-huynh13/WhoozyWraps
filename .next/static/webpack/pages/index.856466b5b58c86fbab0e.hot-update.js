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
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-multi-carousel */ "./node_modules/react-multi-carousel/index.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Will's Gaming PC\\Documents\\Development\\WhoozyWraps\\src\\sections\\feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */




var responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.

  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464
    },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.

  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0
    },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.

  }
};

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
      lineNumber: 29,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    slogan: "Recent works",
    title: "Here are some examples of our work!",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_multi_carousel__WEBPACK_IMPORTED_MODULE_3___default.a, {
    responsive: responsive,
    swipeable: false,
    draggable: false,
    showDots: true,
    ssr: true // means to render carousel on server-side.
    ,
    infinite: true,
    autoPlay: this.props.deviceType !== "mobile" ? true : false,
    autoPlaySpeed: 1000,
    keyBoardControl: true,
    customTransition: "all .5",
    transitionDuration: 500,
    containerClass: "carousel-container",
    removeArrowOnDeviceType: ["tablet", "mobile"],
    deviceType: this.props.deviceType,
    dotListClass: "custom-dot-list-style",
    itemClass: "carousel-item-padding-40-px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, images && images.map(function (image) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
      target: "_blank",
      href: image.permalink,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 19
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      key: images.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("img", {
      width: 300,
      height: 300,
      className: "aspect-square",
      src: image.media_url,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 23
      }
    })));
  }))));
}

_c = Feature;
var styles = {
  grid: {
    gridGap: ["0px"],
    rowGap: ["0px"],
    gridTemplateColumns: ["repeat(4, [col-start] fit-content(200px) [col-end])"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2ZlYXR1cmUuanMiXSwibmFtZXMiOlsicmVzcG9uc2l2ZSIsImRlc2t0b3AiLCJicmVha3BvaW50IiwibWF4IiwibWluIiwiaXRlbXMiLCJzbGlkZXNUb1NsaWRlIiwidGFibGV0IiwibW9iaWxlIiwiRmVhdHVyZSIsImRhdGEiLCJpbWFnZXMiLCJ2YXJpYW50IiwicHJvcHMiLCJkZXZpY2VUeXBlIiwibWFwIiwiaW1hZ2UiLCJwZXJtYWxpbmsiLCJpZCIsIm1lZGlhX3VybCIsInN0eWxlcyIsImdyaWQiLCJncmlkR2FwIiwicm93R2FwIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBRztBQUNqQkMsU0FBTyxFQUFFO0FBQ1BDLGNBQVUsRUFBRTtBQUFFQyxTQUFHLEVBQUUsSUFBUDtBQUFhQyxTQUFHLEVBQUU7QUFBbEIsS0FETDtBQUVQQyxTQUFLLEVBQUUsQ0FGQTtBQUdQQyxpQkFBYSxFQUFFLENBSFIsQ0FHVTs7QUFIVixHQURRO0FBTWpCQyxRQUFNLEVBQUU7QUFDTkwsY0FBVSxFQUFFO0FBQUVDLFNBQUcsRUFBRSxJQUFQO0FBQWFDLFNBQUcsRUFBRTtBQUFsQixLQUROO0FBRU5DLFNBQUssRUFBRSxDQUZEO0FBR05DLGlCQUFhLEVBQUUsQ0FIVCxDQUdXOztBQUhYLEdBTlM7QUFXakJFLFFBQU0sRUFBRTtBQUNOTixjQUFVLEVBQUU7QUFBRUMsU0FBRyxFQUFFLEdBQVA7QUFBWUMsU0FBRyxFQUFFO0FBQWpCLEtBRE47QUFFTkMsU0FBSyxFQUFFLENBRkQ7QUFHTkMsaUJBQWEsRUFBRSxDQUhULENBR1c7O0FBSFg7QUFYUyxDQUFuQjs7QUFrQkEsU0FBU0csT0FBVCxPQUF5QjtBQUFBOztBQUFBLE1BQVBDLElBQU8sUUFBUEEsSUFBTztBQUN2QixNQUFNQyxNQUFNLEdBQUdELElBQUksQ0FBQ0EsSUFBcEIsQ0FEdUIsQ0FFdkI7O0FBQ0EsU0FDRTtBQUFTLE1BQUUsRUFBRTtBQUFFRSxhQUFPLEVBQUU7QUFBWCxLQUFiO0FBQTZDLE1BQUUsRUFBQyxTQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLGlFQUFEO0FBQ0UsVUFBTSxFQUFDLGNBRFQ7QUFFRSxTQUFLLEVBQUMscUNBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBTUUscURBQUMsMkRBQUQ7QUFDQSxjQUFVLEVBQUVaLFVBRFo7QUFFQSxhQUFTLEVBQUUsS0FGWDtBQUdBLGFBQVMsRUFBRSxLQUhYO0FBSUEsWUFBUSxFQUFFLElBSlY7QUFLQSxPQUFHLEVBQUUsSUFMTCxDQUtXO0FBTFg7QUFNQSxZQUFRLEVBQUUsSUFOVjtBQU9BLFlBQVEsRUFBRSxLQUFLYSxLQUFMLENBQVdDLFVBQVgsS0FBMEIsUUFBMUIsR0FBcUMsSUFBckMsR0FBNEMsS0FQdEQ7QUFRQSxpQkFBYSxFQUFFLElBUmY7QUFTQSxtQkFBZSxFQUFFLElBVGpCO0FBVUEsb0JBQWdCLEVBQUMsUUFWakI7QUFXQSxzQkFBa0IsRUFBRSxHQVhwQjtBQVlBLGtCQUFjLEVBQUMsb0JBWmY7QUFhQSwyQkFBdUIsRUFBRSxDQUFDLFFBQUQsRUFBVyxRQUFYLENBYnpCO0FBY0EsY0FBVSxFQUFFLEtBQUtELEtBQUwsQ0FBV0MsVUFkdkI7QUFlQSxnQkFBWSxFQUFDLHVCQWZiO0FBZ0JBLGFBQVMsRUFBQyw2QkFoQlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWtCS0gsTUFBTSxJQUFJQSxNQUFNLENBQUNJLEdBQVAsQ0FBVyxVQUFDQyxLQUFEO0FBQUEsV0FDaEI7QUFBRyxZQUFNLEVBQUUsUUFBWDtBQUFvQixVQUFJLEVBQUVBLEtBQUssQ0FBQ0MsU0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNGO0FBQUssU0FBRyxFQUFFTixNQUFNLENBQUNPLEVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDTTtBQUNFLFdBQUssRUFBRSxHQURUO0FBRUUsWUFBTSxFQUFFLEdBRlY7QUFHRSxlQUFTLEVBQUMsZUFIWjtBQUlFLFNBQUcsRUFBRUYsS0FBSyxDQUFDRyxTQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFETixDQURFLENBRGdCO0FBQUEsR0FBWCxDQWxCZixDQU5GLENBREYsQ0FERjtBQTJDRDs7S0E5Q1FWLE87QUFpRFQsSUFBTVcsTUFBTSxHQUFHO0FBQ2JDLE1BQUksRUFBRTtBQUNKQyxXQUFPLEVBQUUsQ0FDUCxLQURPLENBREw7QUFJSkMsVUFBTSxFQUFDLENBQ0wsS0FESyxDQUpIO0FBT0pDLHVCQUFtQixFQUFFLENBQUMscURBQUQ7QUFQakI7QUFETyxDQUFmO0FBWWVmLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljg1NjQ2NmI1YjU4Yzg2ZmJhYjBlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4IH0gZnJvbSBcInRoZW1lLXVpXCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgR3JpZCB9IGZyb20gXCJ0aGVtZS11aVwiO1xyXG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tIFwiY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlclwiO1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtbXVsdGktY2Fyb3VzZWwnO1xyXG5cclxuY29uc3QgcmVzcG9uc2l2ZSA9IHtcclxuICBkZXNrdG9wOiB7XHJcbiAgICBicmVha3BvaW50OiB7IG1heDogMzAwMCwgbWluOiAxMDI0IH0sXHJcbiAgICBpdGVtczogMyxcclxuICAgIHNsaWRlc1RvU2xpZGU6IDMgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cclxuICB9LFxyXG4gIHRhYmxldDoge1xyXG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDEwMjQsIG1pbjogNDY0IH0sXHJcbiAgICBpdGVtczogMixcclxuICAgIHNsaWRlc1RvU2xpZGU6IDIgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cclxuICB9LFxyXG4gIG1vYmlsZToge1xyXG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDQ2NCwgbWluOiAwIH0sXHJcbiAgICBpdGVtczogMSxcclxuICAgIHNsaWRlc1RvU2xpZGU6IDEgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBGZWF0dXJlKHtkYXRhfSkge1xyXG4gIGNvbnN0IGltYWdlcyA9IGRhdGEuZGF0YTtcclxuICAvLyBjb25zb2xlLmxvZyhcInByb3BzOlxcblwiLCBkYXRhKTtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gc3g9e3sgdmFyaWFudDogXCJzZWN0aW9uLmZlYXR1cmVcIiB9fSBpZD1cImdhbGxlcnlcIj5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8U2VjdGlvbkhlYWRlclxyXG4gICAgICAgICAgc2xvZ2FuPVwiUmVjZW50IHdvcmtzXCJcclxuICAgICAgICAgIHRpdGxlPVwiSGVyZSBhcmUgc29tZSBleGFtcGxlcyBvZiBvdXIgd29yayFcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgey8qIDxHcmlkIHN4PXtzdHlsZXMuZ3JpZH0+ICovfVxyXG4gICAgICAgIDxDYXJvdXNlbCBcclxuICAgICAgICByZXNwb25zaXZlPXtyZXNwb25zaXZlfVxyXG4gICAgICAgIHN3aXBlYWJsZT17ZmFsc2V9XHJcbiAgICAgICAgZHJhZ2dhYmxlPXtmYWxzZX1cclxuICAgICAgICBzaG93RG90cz17dHJ1ZX1cclxuICAgICAgICBzc3I9e3RydWV9IC8vIG1lYW5zIHRvIHJlbmRlciBjYXJvdXNlbCBvbiBzZXJ2ZXItc2lkZS5cclxuICAgICAgICBpbmZpbml0ZT17dHJ1ZX1cclxuICAgICAgICBhdXRvUGxheT17dGhpcy5wcm9wcy5kZXZpY2VUeXBlICE9PSBcIm1vYmlsZVwiID8gdHJ1ZSA6IGZhbHNlfVxyXG4gICAgICAgIGF1dG9QbGF5U3BlZWQ9ezEwMDB9XHJcbiAgICAgICAga2V5Qm9hcmRDb250cm9sPXt0cnVlfVxyXG4gICAgICAgIGN1c3RvbVRyYW5zaXRpb249XCJhbGwgLjVcIlxyXG4gICAgICAgIHRyYW5zaXRpb25EdXJhdGlvbj17NTAwfVxyXG4gICAgICAgIGNvbnRhaW5lckNsYXNzPVwiY2Fyb3VzZWwtY29udGFpbmVyXCJcclxuICAgICAgICByZW1vdmVBcnJvd09uRGV2aWNlVHlwZT17W1widGFibGV0XCIsIFwibW9iaWxlXCJdfVxyXG4gICAgICAgIGRldmljZVR5cGU9e3RoaXMucHJvcHMuZGV2aWNlVHlwZX1cclxuICAgICAgICBkb3RMaXN0Q2xhc3M9XCJjdXN0b20tZG90LWxpc3Qtc3R5bGVcIlxyXG4gICAgICAgIGl0ZW1DbGFzcz1cImNhcm91c2VsLWl0ZW0tcGFkZGluZy00MC1weFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7aW1hZ2VzICYmIGltYWdlcy5tYXAoKGltYWdlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxhIHRhcmdldCA9XCJfYmxhbmtcIiBocmVmPXtpbWFnZS5wZXJtYWxpbmt9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2ltYWdlcy5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzAwfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszMDB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhc3BlY3Qtc3F1YXJlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2UubWVkaWFfdXJsfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgICAgICAgICB7LyogPC9HcmlkPiAqL31cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGdyaWQ6IHtcclxuICAgIGdyaWRHYXA6IFtcclxuICAgICAgXCIwcHhcIixcclxuICAgIF0sXHJcbiAgICByb3dHYXA6W1xyXG4gICAgICBcIjBweFwiXHJcbiAgICBdLFxyXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1wicmVwZWF0KDQsIFtjb2wtc3RhcnRdIGZpdC1jb250ZW50KDIwMHB4KSBbY29sLWVuZF0pXCJdLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9