webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/core-feature.js":
/*!**************************************!*\
  !*** ./src/sections/core-feature.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CoreFeature; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var components_text_feature__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/text-feature */ "./src/components/text-feature.js");
/* harmony import */ var assets_core_feature_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/core-feature.png */ "./src/assets/core-feature.png");
/* harmony import */ var assets_core_feature_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_core_feature_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_shape_pattern2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/shape-pattern2.png */ "./src/assets/shape-pattern2.png");
/* harmony import */ var assets_shape_pattern2_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_shape_pattern2_png__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Will's Gaming PC\\Documents\\Development\\WhoozyWraps\\src\\sections\\core-feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */




var data = {
  subTitle: 'Core features',
  title: 'Smart Jackpots that you may love this anytime & anywhere',
  description: 'Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.',
  btnName: 'Get Started',
  btnURL: '#'
};
function CoreFeature() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    sx: {
      variant: 'section.coreFeature'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 4
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    sx: styles.containerBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.contentBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_text_feature__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subTitle: data.subTitle,
    title: data.title,
    description: data.description,
    btnName: data.btnName,
    btnURL: data.btnURL,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.thumbnail,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_core_feature_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "Thumbnail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.shapeBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }))));
}
_c = CoreFeature;
var styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [0, 7, 0, null, 7]
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', '80%', null, 340, 400, 430, null, 485],
    pb: ['50px', '60px', null, 0],
    mx: ['auto', null, null, 0],
    '.description': {
      pr: [0, null, 6, 7, 6]
    }
  },
  thumbnail: {
    display: 'inline-flex',
    position: 'relative',
    mr: 'auto',
    ml: ['auto', null, null, null, 7],
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto']
    }
  },
  shapeBox: {
    position: 'absolute',
    bottom: -65,
    right: -165,
    zIndex: -1,
    display: ['none', 'inline-block', 'none', null, 'inline-block']
  }
};

var _c;

$RefreshReg$(_c, "CoreFeature");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2NvcmUtZmVhdHVyZS5qcyJdLCJuYW1lcyI6WyJkYXRhIiwic3ViVGl0bGUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYnRuTmFtZSIsImJ0blVSTCIsIkNvcmVGZWF0dXJlIiwidmFyaWFudCIsInN0eWxlcyIsImNvbnRhaW5lckJveCIsImNvbnRlbnRCb3giLCJ0aHVtYm5haWwiLCJGZWF0dXJlVGh1bWIiLCJzaGFwZUJveCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJmbGV4V3JhcCIsInBiIiwiZmxleFNocmluayIsInB4IiwidGV4dEFsaWduIiwid2lkdGgiLCJteCIsInByIiwicG9zaXRpb24iLCJtciIsIm1sIiwiekluZGV4IiwiaGVpZ2h0IiwiYm90dG9tIiwicmlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxJQUFJLEdBQUc7QUFDWEMsVUFBUSxFQUFFLGVBREM7QUFFWEMsT0FBSyxFQUFFLDBEQUZJO0FBR1hDLGFBQVcsRUFDVCwySUFKUztBQUtYQyxTQUFPLEVBQUUsYUFMRTtBQU1YQyxRQUFNLEVBQUU7QUFORyxDQUFiO0FBU2UsU0FBU0MsV0FBVCxHQUF1QjtBQUNwQyxTQUNDO0FBQVMsTUFBRSxFQUFFO0FBQUNDLGFBQU8sRUFBRTtBQUFWLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLHFEQUFDLGtEQUFEO0FBQVcsTUFBRSxFQUFFQyxNQUFNLENBQUNDLFlBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBRUQsTUFBTSxDQUFDRSxVQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsK0RBQUQ7QUFDRSxZQUFRLEVBQUVWLElBQUksQ0FBQ0MsUUFEakI7QUFFRSxTQUFLLEVBQUVELElBQUksQ0FBQ0UsS0FGZDtBQUdFLGVBQVcsRUFBRUYsSUFBSSxDQUFDRyxXQUhwQjtBQUlFLFdBQU8sRUFBRUgsSUFBSSxDQUFDSSxPQUpoQjtBQUtFLFVBQU0sRUFBRUosSUFBSSxDQUFDSyxNQUxmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBVUUscURBQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUVHLE1BQU0sQ0FBQ0csU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLDhDQUFEO0FBQU8sT0FBRyxFQUFFQyw4REFBWjtBQUEwQixPQUFHLEVBQUMsV0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUscURBQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUVKLE1BQU0sQ0FBQ0ssUUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBVkYsQ0FERCxDQUREO0FBb0JEO0tBckJ1QlAsVztBQXVCeEIsSUFBTUUsTUFBTSxHQUFHO0FBQ2JDLGNBQVksRUFBRTtBQUNaSyxXQUFPLEVBQUUsTUFERztBQUVaQyxjQUFVLEVBQUUsUUFGQTtBQUdaQyxrQkFBYyxFQUFFLGVBSEo7QUFJWkMsWUFBUSxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxJQUFmLEVBQXFCLFFBQXJCLENBSkU7QUFLWkMsTUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsSUFBVixFQUFnQixDQUFoQjtBQUxRLEdBREQ7QUFRYlIsWUFBVSxFQUFFO0FBQ1ZTLGNBQVUsRUFBRSxDQURGO0FBRVZDLE1BQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsTUFBVixFQUFrQixDQUFsQixDQUZNO0FBR1ZDLGFBQVMsRUFBRSxDQUFDLFFBQUQsRUFBVyxJQUFYLEVBQWlCLElBQWpCLEVBQXVCLE1BQXZCLENBSEQ7QUFJVkMsU0FBSyxFQUFFLENBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsSUFBaEIsRUFBc0IsR0FBdEIsRUFBMkIsR0FBM0IsRUFBZ0MsR0FBaEMsRUFBcUMsSUFBckMsRUFBMkMsR0FBM0MsQ0FKRztBQUtWSixNQUFFLEVBQUUsQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixJQUFqQixFQUF1QixDQUF2QixDQUxNO0FBTVZLLE1BQUUsRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsSUFBZixFQUFxQixDQUFyQixDQU5NO0FBT1Ysb0JBQWdCO0FBQ2RDLFFBQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEI7QUFEVTtBQVBOLEdBUkM7QUFtQmJiLFdBQVMsRUFBRTtBQUNURyxXQUFPLEVBQUUsYUFEQTtBQUVUVyxZQUFRLEVBQUUsVUFGRDtBQUdUQyxNQUFFLEVBQUUsTUFISztBQUlUQyxNQUFFLEVBQUUsQ0FBQyxNQUFELEVBQVMsSUFBVCxFQUFlLElBQWYsRUFBcUIsSUFBckIsRUFBMkIsQ0FBM0IsQ0FKSztBQUtULGFBQVM7QUFDUEYsY0FBUSxFQUFFLFVBREg7QUFFUEcsWUFBTSxFQUFFLENBRkQ7QUFHUEMsWUFBTSxFQUFFLENBQUMsR0FBRCxFQUFNLE1BQU47QUFIRDtBQUxBLEdBbkJFO0FBOEJiaEIsVUFBUSxFQUFFO0FBQ1JZLFlBQVEsRUFBRSxVQURGO0FBRVJLLFVBQU0sRUFBRSxDQUFDLEVBRkQ7QUFHUkMsU0FBSyxFQUFFLENBQUMsR0FIQTtBQUlSSCxVQUFNLEVBQUUsQ0FBQyxDQUpEO0FBS1JkLFdBQU8sRUFBRSxDQUFDLE1BQUQsRUFBUyxjQUFULEVBQXlCLE1BQXpCLEVBQWlDLElBQWpDLEVBQXVDLGNBQXZDO0FBTEQ7QUE5QkcsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wMTRkNzM5Mzc5MTI5MDljNWQ4OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQ29udGFpbmVyLCBCb3gsIEltYWdlIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgVGV4dEZlYXR1cmUgZnJvbSAnY29tcG9uZW50cy90ZXh0LWZlYXR1cmUnO1xyXG5cclxuaW1wb3J0IEZlYXR1cmVUaHVtYiBmcm9tICdhc3NldHMvY29yZS1mZWF0dXJlLnBuZyc7XHJcbmltcG9ydCBzaGFwZVBhdHRlcm4gZnJvbSAnYXNzZXRzL3NoYXBlLXBhdHRlcm4yLnBuZyc7XHJcblxyXG5jb25zdCBkYXRhID0ge1xyXG4gIHN1YlRpdGxlOiAnQ29yZSBmZWF0dXJlcycsXHJcbiAgdGl0bGU6ICdTbWFydCBKYWNrcG90cyB0aGF0IHlvdSBtYXkgbG92ZSB0aGlzIGFueXRpbWUgJiBhbnl3aGVyZScsXHJcbiAgZGVzY3JpcHRpb246XHJcbiAgICAnR2V0IHlvdXIgdGVzdHMgZGVsaXZlcmVkIGF0IGxldCBob21lIGNvbGxlY3Qgc2FtcGxlIGZyb20gdGhlIHZpY3Rvcnkgb2YgdGhlIG1hbmFnZW1lbnRzIHRoYXQgc3VwcGxpZXMgYmVzdCBkZXNpZ24gc3lzdGVtIGd1aWRlbGluZXMgZXZlci4nLFxyXG4gIGJ0bk5hbWU6ICdHZXQgU3RhcnRlZCcsXHJcbiAgYnRuVVJMOiAnIycsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3JlRmVhdHVyZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICA8c2VjdGlvbiBzeD17e3ZhcmlhbnQ6ICdzZWN0aW9uLmNvcmVGZWF0dXJlJ319PlxyXG4gICAgPENvbnRhaW5lciBzeD17c3R5bGVzLmNvbnRhaW5lckJveH0+XHJcbiAgICAgIDxCb3ggc3g9e3N0eWxlcy5jb250ZW50Qm94fT5cclxuICAgICAgICA8VGV4dEZlYXR1cmUgXHJcbiAgICAgICAgICBzdWJUaXRsZT17ZGF0YS5zdWJUaXRsZX1cclxuICAgICAgICAgIHRpdGxlPXtkYXRhLnRpdGxlfVxyXG4gICAgICAgICAgZGVzY3JpcHRpb249e2RhdGEuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICBidG5OYW1lPXtkYXRhLmJ0bk5hbWV9XHJcbiAgICAgICAgICBidG5VUkw9e2RhdGEuYnRuVVJMfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8Qm94IHN4PXtzdHlsZXMudGh1bWJuYWlsfT5cclxuICAgICAgICA8SW1hZ2Ugc3JjPXtGZWF0dXJlVGh1bWJ9IGFsdD1cIlRodW1ibmFpbFwiIC8+XHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLnNoYXBlQm94fT5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBjb250YWluZXJCb3g6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgIGZsZXhXcmFwOiBbJ3dyYXAnLCBudWxsLCBudWxsLCAnbm93cmFwJ10sXHJcbiAgICBwYjogWzAsIDcsIDAsIG51bGwsIDddLFxyXG4gIH0sXHJcbiAgY29udGVudEJveDoge1xyXG4gICAgZmxleFNocmluazogMCxcclxuICAgIHB4OiBbMCwgbnVsbCwgJzMwcHgnLCAwXSxcclxuICAgIHRleHRBbGlnbjogWydjZW50ZXInLCBudWxsLCBudWxsLCAnbGVmdCddLFxyXG4gICAgd2lkdGg6IFsnMTAwJScsICc4MCUnLCBudWxsLCAzNDAsIDQwMCwgNDMwLCBudWxsLCA0ODVdLFxyXG4gICAgcGI6IFsnNTBweCcsICc2MHB4JywgbnVsbCwgMF0sXHJcbiAgICBteDogWydhdXRvJywgbnVsbCwgbnVsbCwgMF0sXHJcbiAgICAnLmRlc2NyaXB0aW9uJzoge1xyXG4gICAgICBwcjogWzAsIG51bGwsIDYsIDcsIDZdLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHRodW1ibmFpbDoge1xyXG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgbXI6ICdhdXRvJyxcclxuICAgIG1sOiBbJ2F1dG8nLCBudWxsLCBudWxsLCBudWxsLCA3XSxcclxuICAgICc+IGltZyc6IHtcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIHpJbmRleDogMSxcclxuICAgICAgaGVpZ2h0OiBbMzEwLCAnYXV0byddLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNoYXBlQm94OiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIGJvdHRvbTogLTY1LFxyXG4gICAgcmlnaHQ6IC0xNjUsXHJcbiAgICB6SW5kZXg6IC0xLFxyXG4gICAgZGlzcGxheTogWydub25lJywgJ2lubGluZS1ibG9jaycsICdub25lJywgbnVsbCwgJ2lubGluZS1ibG9jayddLFxyXG4gIH0sXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=