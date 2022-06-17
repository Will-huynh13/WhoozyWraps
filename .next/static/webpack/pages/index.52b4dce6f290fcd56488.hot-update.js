webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/key-feature.js":
/*!*************************************!*\
  !*** ./src/sections/key-feature.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KeyFeature; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var _components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/section-header */ "./src/components/section-header.js");
/* harmony import */ var components_feature_card_column_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/feature-card-column.js */ "./src/components/feature-card-column.js");
/* harmony import */ var assets_key_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/key-feature/performance.svg */ "./src/assets/key-feature/performance.svg");
/* harmony import */ var assets_key_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_key_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/key-feature/partnership.svg */ "./src/assets/key-feature/partnership.svg");
/* harmony import */ var assets_key_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_key_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/key-feature/subscription.svg */ "./src/assets/key-feature/subscription.svg");
/* harmony import */ var assets_key_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_key_feature_support_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/key-feature/support.svg */ "./src/assets/key-feature/support.svg");
/* harmony import */ var assets_key_feature_support_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_support_svg__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\Will's Gaming PC\\Documents\\Development\\WhoozyWraps\\src\\sections\\key-feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */








var data = [{
  id: 1,
  imgSrc: assets_key_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
  altText: 'Car Vinyl',
  title: 'Vinyl',
  text: 'Give your car a new look!'
}, {
  id: 2,
  imgSrc: assets_key_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
  altText: 'decal',
  title: 'Decals',
  text: 'Get yo decals here cuh.'
}, {
  id: 3,
  imgSrc: assets_key_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
  altText: 'tinting',
  title: 'Window Tinting',
  text: 'We tint so you can get head.'
}, {
  id: 4,
  imgSrc: assets_key_feature_support_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
  altText: 'detailing',
  title: 'Detailing',
  text: 'Make your car shiny so they think its new'
}];
function KeyFeature() {
  var _this = this;

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    sx: {
      variant: 'section.keyFeature'
    },
    id: "products",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_section_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    slogan: "Reimagine your car",
    title: "Meet our services",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    sx: styles.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, data.map(function (item) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_feature_card_column_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: item.id //src={item.imgSrc}
      ,
      alt: item.altText,
      title: item.title,
      text: item.text,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 15
      }
    });
  }))));
}
_c = KeyFeature;
var styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: ['3px 0', null, '40px 40px', '50px 60px', '30px', '50px 40px', '55px 90px'],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)', null, 'repeat(4,1fr)']
  }
};

var _c;

$RefreshReg$(_c, "KeyFeature");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2tleS1mZWF0dXJlLmpzIl0sIm5hbWVzIjpbImRhdGEiLCJpZCIsImltZ1NyYyIsIlBlcmZvcm1hbmNlIiwiYWx0VGV4dCIsInRpdGxlIiwidGV4dCIsIlBhcnRuZXJzaGlwIiwiU3Vic2NyaXB0aW9uIiwiU3VwcG9ydCIsIktleUZlYXR1cmUiLCJ2YXJpYW50Iiwic3R5bGVzIiwiZ3JpZCIsIm1hcCIsIml0ZW0iLCJ3aWR0aCIsIm14IiwiZ3JpZEdhcCIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLENBQ1g7QUFDRUMsSUFBRSxFQUFFLENBRE47QUFFRUMsUUFBTSxFQUFFQyx5RUFGVjtBQUdFQyxTQUFPLEVBQUUsV0FIWDtBQUlFQyxPQUFLLEVBQUUsT0FKVDtBQUtFQyxNQUFJLEVBQ0Y7QUFOSixDQURXLEVBU1g7QUFDRUwsSUFBRSxFQUFFLENBRE47QUFFRUMsUUFBTSxFQUFFSyx5RUFGVjtBQUdFSCxTQUFPLEVBQUUsT0FIWDtBQUlFQyxPQUFLLEVBQUUsUUFKVDtBQUtFQyxNQUFJLEVBQ0Y7QUFOSixDQVRXLEVBaUJYO0FBQ0VMLElBQUUsRUFBRSxDQUROO0FBRUVDLFFBQU0sRUFBRU0sMEVBRlY7QUFHRUosU0FBTyxFQUFFLFNBSFg7QUFJRUMsT0FBSyxFQUFFLGdCQUpUO0FBS0VDLE1BQUksRUFDRjtBQU5KLENBakJXLEVBeUJYO0FBQ0VMLElBQUUsRUFBRSxDQUROO0FBRUVDLFFBQU0sRUFBRU8scUVBRlY7QUFHRUwsU0FBTyxFQUFFLFdBSFg7QUFJRUMsT0FBSyxFQUFFLFdBSlQ7QUFLRUMsTUFBSSxFQUNGO0FBTkosQ0F6QlcsQ0FBYjtBQW1DZSxTQUFTSSxVQUFULEdBQXNCO0FBQUE7O0FBQ25DLFNBQ0U7QUFBUyxNQUFFLEVBQUc7QUFBQ0MsYUFBTyxFQUFFO0FBQVYsS0FBZDtBQUFnRCxNQUFFLEVBQUMsVUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyxrRUFBRDtBQUNFLFVBQU0sRUFBRyxvQkFEWDtBQUVFLFNBQUssRUFBRyxtQkFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFLSSxxREFBQyw2Q0FBRDtBQUFNLE1BQUUsRUFBSUMsTUFBTSxDQUFDQyxJQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0diLElBQUksQ0FBQ2MsR0FBTCxDQUFTLFVBQUNDLElBQUQ7QUFBQSxXQUNSLHFEQUFDLHlFQUFEO0FBQ0UsU0FBRyxFQUFFQSxJQUFJLENBQUNkLEVBRFosQ0FFRTtBQUZGO0FBR0UsU0FBRyxFQUFFYyxJQUFJLENBQUNYLE9BSFo7QUFJRSxXQUFLLEVBQUVXLElBQUksQ0FBQ1YsS0FKZDtBQUtFLFVBQUksRUFBRVUsSUFBSSxDQUFDVCxJQUxiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEUTtBQUFBLEdBQVQsQ0FESCxDQUxKLENBREYsQ0FERjtBQXFCRDtLQXRCdUJJLFU7QUF3QnhCLElBQU1FLE1BQU0sR0FBRztBQUNiQyxNQUFJLEVBQUU7QUFDSkcsU0FBSyxFQUFFLENBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsTUFBaEIsQ0FESDtBQUVKQyxNQUFFLEVBQUUsTUFGQTtBQUdKQyxXQUFPLEVBQUUsQ0FDUCxPQURPLEVBRVAsSUFGTyxFQUdQLFdBSE8sRUFJUCxXQUpPLEVBS1AsTUFMTyxFQU1QLFdBTk8sRUFPUCxXQVBPLENBSEw7QUFZSkMsdUJBQW1CLEVBQUUsQ0FDbkIsZUFEbUIsRUFFbkIsSUFGbUIsRUFHbkIsZUFIbUIsRUFJbkIsSUFKbUIsRUFLbkIsZUFMbUI7QUFaakI7QUFETyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjUyYjRkY2U2ZjI5MGZjZDU2NDg4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEdyaWQgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXInO1xyXG5pbXBvcnQgRmVhdHVyZUNhcmRDb2x1bW4gZnJvbSAnY29tcG9uZW50cy9mZWF0dXJlLWNhcmQtY29sdW1uLmpzJztcclxuaW1wb3J0IFBlcmZvcm1hbmNlIGZyb20gJ2Fzc2V0cy9rZXktZmVhdHVyZS9wZXJmb3JtYW5jZS5zdmcnO1xyXG5pbXBvcnQgUGFydG5lcnNoaXAgZnJvbSAnYXNzZXRzL2tleS1mZWF0dXJlL3BhcnRuZXJzaGlwLnN2Zyc7XHJcbmltcG9ydCBTdWJzY3JpcHRpb24gZnJvbSAnYXNzZXRzL2tleS1mZWF0dXJlL3N1YnNjcmlwdGlvbi5zdmcnO1xyXG5pbXBvcnQgU3VwcG9ydCBmcm9tICdhc3NldHMva2V5LWZlYXR1cmUvc3VwcG9ydC5zdmcnO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIGltZ1NyYzogUGVyZm9ybWFuY2UsXHJcbiAgICBhbHRUZXh0OiAnQ2FyIFZpbnlsJyxcclxuICAgIHRpdGxlOiAnVmlueWwnLFxyXG4gICAgdGV4dDpcclxuICAgICAgJ0dpdmUgeW91ciBjYXIgYSBuZXcgbG9vayEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBpbWdTcmM6IFBhcnRuZXJzaGlwLFxyXG4gICAgYWx0VGV4dDogJ2RlY2FsJyxcclxuICAgIHRpdGxlOiAnRGVjYWxzJyxcclxuICAgIHRleHQ6XHJcbiAgICAgICdHZXQgeW8gZGVjYWxzIGhlcmUgY3VoLicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIGltZ1NyYzogU3Vic2NyaXB0aW9uLFxyXG4gICAgYWx0VGV4dDogJ3RpbnRpbmcnLFxyXG4gICAgdGl0bGU6ICdXaW5kb3cgVGludGluZycsXHJcbiAgICB0ZXh0OlxyXG4gICAgICAnV2UgdGludCBzbyB5b3UgY2FuIGdldCBoZWFkLicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIGltZ1NyYzogU3VwcG9ydCxcclxuICAgIGFsdFRleHQ6ICdkZXRhaWxpbmcnLFxyXG4gICAgdGl0bGU6ICdEZXRhaWxpbmcnLFxyXG4gICAgdGV4dDpcclxuICAgICAgJ01ha2UgeW91ciBjYXIgc2hpbnkgc28gdGhleSB0aGluayBpdHMgbmV3JyxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gS2V5RmVhdHVyZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gc3ggPXt7dmFyaWFudDogJ3NlY3Rpb24ua2V5RmVhdHVyZSd9fSAgaWQ9XCJwcm9kdWN0c1wiPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxTZWN0aW9uSGVhZGVyXHJcbiAgICAgICAgICBzbG9nYW4gPSBcIlJlaW1hZ2luZSB5b3VyIGNhclwiXHJcbiAgICAgICAgICB0aXRsZSA9IFwiTWVldCBvdXIgc2VydmljZXNcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxHcmlkIHN4ID0ge3N0eWxlcy5ncmlkfT5cclxuICAgICAgICAgICAge2RhdGEubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgPEZlYXR1cmVDYXJkQ29sdW1uXHJcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAvL3NyYz17aXRlbS5pbWdTcmN9XHJcbiAgICAgICAgICAgICAgICBhbHQ9e2l0ZW0uYWx0VGV4dH1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgdGV4dD17aXRlbS50ZXh0fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgZ3JpZDoge1xyXG4gICAgd2lkdGg6IFsnMTAwJScsICc4MCUnLCAnMTAwJSddLFxyXG4gICAgbXg6ICdhdXRvJyxcclxuICAgIGdyaWRHYXA6IFtcclxuICAgICAgJzNweCAwJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJzQwcHggNDBweCcsXHJcbiAgICAgICc1MHB4IDYwcHgnLFxyXG4gICAgICAnMzBweCcsXHJcbiAgICAgICc1MHB4IDQwcHgnLFxyXG4gICAgICAnNTVweCA5MHB4JyxcclxuICAgIF0sXHJcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXHJcbiAgICAgICdyZXBlYXQoMSwxZnIpJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJ3JlcGVhdCgyLDFmciknLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAncmVwZWF0KDQsMWZyKScsXHJcbiAgICBdLFxyXG4gIH0sXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=