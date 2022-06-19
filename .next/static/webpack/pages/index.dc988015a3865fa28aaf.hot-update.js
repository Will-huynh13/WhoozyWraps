webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/feature.js":
/*!*********************************!*\
  !*** ./src/sections/feature.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-multi-carousel */ "./node_modules/react-multi-carousel/index.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\Will's Gaming PC\\Documents\\Development\\WhoozyWraps\\src\\sections\\feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

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
  var _this = this,
      _jsx;

  var data = _ref.data;
  var images = data.data; // console.log("props:\n", data);

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("section", {
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
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    slogan: "Recent works",
    title: "Here are some examples of our work!",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_multi_carousel__WEBPACK_IMPORTED_MODULE_4___default.a, (_jsx = {
    responsive: responsive,
    swipeable: false,
    draggable: false,
    showDots: true
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "responsive", responsive), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "ssr", true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "infinite", true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "autoPlay", this.props.deviceType !== "mobile" ? true : false), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "autoPlaySpeed", 1000), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "keyBoardControl", true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "customTransition", "all .5"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "transitionDuration", 500), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "containerClass", "carousel-container"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "removeArrowOnDeviceType", ["tablet", "mobile"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "deviceType", this.props.deviceType), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "dotListClass", "custom-dot-list-style"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "itemClass", "carousel-item-padding-40-px"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 9
  }), _jsx), images && images.map(function (image) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("a", {
      target: "_blank",
      href: image.permalink,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 19
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
      key: images.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("img", {
      width: 300,
      height: 300,
      className: "aspect-square",
      src: image.media_url,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2ZlYXR1cmUuanMiXSwibmFtZXMiOlsicmVzcG9uc2l2ZSIsImRlc2t0b3AiLCJicmVha3BvaW50IiwibWF4IiwibWluIiwiaXRlbXMiLCJzbGlkZXNUb1NsaWRlIiwidGFibGV0IiwibW9iaWxlIiwiRmVhdHVyZSIsImRhdGEiLCJpbWFnZXMiLCJ2YXJpYW50IiwicHJvcHMiLCJkZXZpY2VUeXBlIiwibWFwIiwiaW1hZ2UiLCJwZXJtYWxpbmsiLCJpZCIsIm1lZGlhX3VybCIsInN0eWxlcyIsImdyaWQiLCJncmlkR2FwIiwicm93R2FwIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHO0FBQ2pCQyxTQUFPLEVBQUU7QUFDUEMsY0FBVSxFQUFFO0FBQUVDLFNBQUcsRUFBRSxJQUFQO0FBQWFDLFNBQUcsRUFBRTtBQUFsQixLQURMO0FBRVBDLFNBQUssRUFBRSxDQUZBO0FBR1BDLGlCQUFhLEVBQUUsQ0FIUixDQUdVOztBQUhWLEdBRFE7QUFNakJDLFFBQU0sRUFBRTtBQUNOTCxjQUFVLEVBQUU7QUFBRUMsU0FBRyxFQUFFLElBQVA7QUFBYUMsU0FBRyxFQUFFO0FBQWxCLEtBRE47QUFFTkMsU0FBSyxFQUFFLENBRkQ7QUFHTkMsaUJBQWEsRUFBRSxDQUhULENBR1c7O0FBSFgsR0FOUztBQVdqQkUsUUFBTSxFQUFFO0FBQ05OLGNBQVUsRUFBRTtBQUFFQyxTQUFHLEVBQUUsR0FBUDtBQUFZQyxTQUFHLEVBQUU7QUFBakIsS0FETjtBQUVOQyxTQUFLLEVBQUUsQ0FGRDtBQUdOQyxpQkFBYSxFQUFFLENBSFQsQ0FHVzs7QUFIWDtBQVhTLENBQW5COztBQWtCQSxTQUFTRyxPQUFULE9BQXlCO0FBQUE7QUFBQTs7QUFBQSxNQUFQQyxJQUFPLFFBQVBBLElBQU87QUFDdkIsTUFBTUMsTUFBTSxHQUFHRCxJQUFJLENBQUNBLElBQXBCLENBRHVCLENBRXZCOztBQUNBLFNBQ0U7QUFBUyxNQUFFLEVBQUU7QUFBRUUsYUFBTyxFQUFFO0FBQVgsS0FBYjtBQUE2QyxNQUFFLEVBQUMsU0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyxpRUFBRDtBQUNFLFVBQU0sRUFBQyxjQURUO0FBRUUsU0FBSyxFQUFDLHFDQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQU1FLHFEQUFDLDJEQUFEO0FBQ0EsY0FBVSxFQUFFWixVQURaO0FBRUEsYUFBUyxFQUFFLEtBRlg7QUFHQSxhQUFTLEVBQUUsS0FIWDtBQUlBLFlBQVEsRUFBRTtBQUpWLG1IQUtZQSxVQUxaLDBHQU1LLElBTkwsK0dBT1UsSUFQViwrR0FRVSxLQUFLYSxLQUFMLENBQVdDLFVBQVgsS0FBMEIsUUFBMUIsR0FBcUMsSUFBckMsR0FBNEMsS0FSdEQsb0hBU2UsSUFUZixzSEFVaUIsSUFWakIsdUhBV2lCLFFBWGpCLHlIQVlvQixHQVpwQixxSEFhZSxvQkFiZiw4SEFjeUIsQ0FBQyxRQUFELEVBQVcsUUFBWCxDQWR6QixpSEFlWSxLQUFLRCxLQUFMLENBQVdDLFVBZnZCLG1IQWdCYSx1QkFoQmIsZ0hBaUJVLDZCQWpCVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbUJLSCxNQUFNLElBQUlBLE1BQU0sQ0FBQ0ksR0FBUCxDQUFXLFVBQUNDLEtBQUQ7QUFBQSxXQUNoQjtBQUFHLFlBQU0sRUFBRSxRQUFYO0FBQW9CLFVBQUksRUFBRUEsS0FBSyxDQUFDQyxTQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0Y7QUFBSyxTQUFHLEVBQUVOLE1BQU0sQ0FBQ08sRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNNO0FBQ0UsV0FBSyxFQUFFLEdBRFQ7QUFFRSxZQUFNLEVBQUUsR0FGVjtBQUdFLGVBQVMsRUFBQyxlQUhaO0FBSUUsU0FBRyxFQUFFRixLQUFLLENBQUNHLFNBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUROLENBREUsQ0FEZ0I7QUFBQSxHQUFYLENBbkJmLENBTkYsQ0FERixDQURGO0FBNENEOztLQS9DUVYsTztBQWtEVCxJQUFNVyxNQUFNLEdBQUc7QUFDYkMsTUFBSSxFQUFFO0FBQ0pDLFdBQU8sRUFBRSxDQUNQLEtBRE8sQ0FETDtBQUlKQyxVQUFNLEVBQUMsQ0FDTCxLQURLLENBSkg7QUFPSkMsdUJBQW1CLEVBQUUsQ0FBQyxxREFBRDtBQVBqQjtBQURPLENBQWY7QUFZZWYsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGM5ODgwMTVhMzg2NWZhMjhhYWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tIFwidGhlbWUtdWlcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkIH0gZnJvbSBcInRoZW1lLXVpXCI7XHJcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gXCJjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyXCI7XHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1tdWx0aS1jYXJvdXNlbCc7XHJcblxyXG5jb25zdCByZXNwb25zaXZlID0ge1xyXG4gIGRlc2t0b3A6IHtcclxuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAzMDAwLCBtaW46IDEwMjQgfSxcclxuICAgIGl0ZW1zOiAzLFxyXG4gICAgc2xpZGVzVG9TbGlkZTogMyAvLyBvcHRpb25hbCwgZGVmYXVsdCB0byAxLlxyXG4gIH0sXHJcbiAgdGFibGV0OiB7XHJcbiAgICBicmVha3BvaW50OiB7IG1heDogMTAyNCwgbWluOiA0NjQgfSxcclxuICAgIGl0ZW1zOiAyLFxyXG4gICAgc2xpZGVzVG9TbGlkZTogMiAvLyBvcHRpb25hbCwgZGVmYXVsdCB0byAxLlxyXG4gIH0sXHJcbiAgbW9iaWxlOiB7XHJcbiAgICBicmVha3BvaW50OiB7IG1heDogNDY0LCBtaW46IDAgfSxcclxuICAgIGl0ZW1zOiAxLFxyXG4gICAgc2xpZGVzVG9TbGlkZTogMSAvLyBvcHRpb25hbCwgZGVmYXVsdCB0byAxLlxyXG4gIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIEZlYXR1cmUoe2RhdGF9KSB7XHJcbiAgY29uc3QgaW1hZ2VzID0gZGF0YS5kYXRhO1xyXG4gIC8vIGNvbnNvbGUubG9nKFwicHJvcHM6XFxuXCIsIGRhdGEpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBzeD17eyB2YXJpYW50OiBcInNlY3Rpb24uZmVhdHVyZVwiIH19IGlkPVwiZ2FsbGVyeVwiPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxTZWN0aW9uSGVhZGVyXHJcbiAgICAgICAgICBzbG9nYW49XCJSZWNlbnQgd29ya3NcIlxyXG4gICAgICAgICAgdGl0bGU9XCJIZXJlIGFyZSBzb21lIGV4YW1wbGVzIG9mIG91ciB3b3JrIVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICB7LyogPEdyaWQgc3g9e3N0eWxlcy5ncmlkfT4gKi99XHJcbiAgICAgICAgPENhcm91c2VsIFxyXG4gICAgICAgIHJlc3BvbnNpdmU9e3Jlc3BvbnNpdmV9XHJcbiAgICAgICAgc3dpcGVhYmxlPXtmYWxzZX1cclxuICAgICAgICBkcmFnZ2FibGU9e2ZhbHNlfVxyXG4gICAgICAgIHNob3dEb3RzPXt0cnVlfVxyXG4gICAgICAgIHJlc3BvbnNpdmU9e3Jlc3BvbnNpdmV9XHJcbiAgICAgICAgc3NyPXt0cnVlfSAvLyBtZWFucyB0byByZW5kZXIgY2Fyb3VzZWwgb24gc2VydmVyLXNpZGUuXHJcbiAgICAgICAgaW5maW5pdGU9e3RydWV9XHJcbiAgICAgICAgYXV0b1BsYXk9e3RoaXMucHJvcHMuZGV2aWNlVHlwZSAhPT0gXCJtb2JpbGVcIiA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICBhdXRvUGxheVNwZWVkPXsxMDAwfVxyXG4gICAgICAgIGtleUJvYXJkQ29udHJvbD17dHJ1ZX1cclxuICAgICAgICBjdXN0b21UcmFuc2l0aW9uPVwiYWxsIC41XCJcclxuICAgICAgICB0cmFuc2l0aW9uRHVyYXRpb249ezUwMH1cclxuICAgICAgICBjb250YWluZXJDbGFzcz1cImNhcm91c2VsLWNvbnRhaW5lclwiXHJcbiAgICAgICAgcmVtb3ZlQXJyb3dPbkRldmljZVR5cGU9e1tcInRhYmxldFwiLCBcIm1vYmlsZVwiXX1cclxuICAgICAgICBkZXZpY2VUeXBlPXt0aGlzLnByb3BzLmRldmljZVR5cGV9XHJcbiAgICAgICAgZG90TGlzdENsYXNzPVwiY3VzdG9tLWRvdC1saXN0LXN0eWxlXCJcclxuICAgICAgICBpdGVtQ2xhc3M9XCJjYXJvdXNlbC1pdGVtLXBhZGRpbmctNDAtcHhcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge2ltYWdlcyAmJiBpbWFnZXMubWFwKChpbWFnZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8YSB0YXJnZXQgPVwiX2JsYW5rXCIgaHJlZj17aW1hZ2UucGVybWFsaW5rfT5cclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbWFnZXMuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezMwMH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MzAwfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXNwZWN0LXNxdWFyZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlLm1lZGlhX3VybH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICAgICAgICAgey8qIDwvR3JpZD4gKi99XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBncmlkOiB7XHJcbiAgICBncmlkR2FwOiBbXHJcbiAgICAgIFwiMHB4XCIsXHJcbiAgICBdLFxyXG4gICAgcm93R2FwOltcclxuICAgICAgXCIwcHhcIlxyXG4gICAgXSxcclxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFtcInJlcGVhdCg0LCBbY29sLXN0YXJ0XSBmaXQtY29udGVudCgyMDBweCkgW2NvbC1lbmRdKVwiXSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==