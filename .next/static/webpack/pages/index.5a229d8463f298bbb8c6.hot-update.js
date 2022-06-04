webpackHotUpdate_N_E("pages/index",{

/***/ "./src/assets/shape-pattern2.png":
false,

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
      lineNumber: 18,
      columnNumber: 4
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    sx: styles.containerBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.contentBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
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
      lineNumber: 21,
      columnNumber: 9
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.thumbnail,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_core_feature_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "Thumbnail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.shapeBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2NvcmUtZmVhdHVyZS5qcyJdLCJuYW1lcyI6WyJkYXRhIiwic3ViVGl0bGUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYnRuTmFtZSIsImJ0blVSTCIsIkNvcmVGZWF0dXJlIiwidmFyaWFudCIsInN0eWxlcyIsImNvbnRhaW5lckJveCIsImNvbnRlbnRCb3giLCJ0aHVtYm5haWwiLCJGZWF0dXJlVGh1bWIiLCJzaGFwZUJveCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJmbGV4V3JhcCIsInBiIiwiZmxleFNocmluayIsInB4IiwidGV4dEFsaWduIiwid2lkdGgiLCJteCIsInByIiwicG9zaXRpb24iLCJtciIsIm1sIiwiekluZGV4IiwiaGVpZ2h0IiwiYm90dG9tIiwicmlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLElBQUksR0FBRztBQUNYQyxVQUFRLEVBQUUsZUFEQztBQUVYQyxPQUFLLEVBQUUsMERBRkk7QUFHWEMsYUFBVyxFQUNULDJJQUpTO0FBS1hDLFNBQU8sRUFBRSxhQUxFO0FBTVhDLFFBQU0sRUFBRTtBQU5HLENBQWI7QUFTZSxTQUFTQyxXQUFULEdBQXVCO0FBQ3BDLFNBQ0M7QUFBUyxNQUFFLEVBQUU7QUFBQ0MsYUFBTyxFQUFFO0FBQVYsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MscURBQUMsa0RBQUQ7QUFBVyxNQUFFLEVBQUVDLE1BQU0sQ0FBQ0MsWUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLDRDQUFEO0FBQUssTUFBRSxFQUFFRCxNQUFNLENBQUNFLFVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQywrREFBRDtBQUNFLFlBQVEsRUFBRVYsSUFBSSxDQUFDQyxRQURqQjtBQUVFLFNBQUssRUFBRUQsSUFBSSxDQUFDRSxLQUZkO0FBR0UsZUFBVyxFQUFFRixJQUFJLENBQUNHLFdBSHBCO0FBSUUsV0FBTyxFQUFFSCxJQUFJLENBQUNJLE9BSmhCO0FBS0UsVUFBTSxFQUFFSixJQUFJLENBQUNLLE1BTGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFVRSxxREFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBRUcsTUFBTSxDQUFDRyxTQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsOENBQUQ7QUFBTyxPQUFHLEVBQUVDLDhEQUFaO0FBQTBCLE9BQUcsRUFBQyxXQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxxREFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBRUosTUFBTSxDQUFDSyxRQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FWRixDQURELENBREQ7QUFvQkQ7S0FyQnVCUCxXO0FBdUJ4QixJQUFNRSxNQUFNLEdBQUc7QUFDYkMsY0FBWSxFQUFFO0FBQ1pLLFdBQU8sRUFBRSxNQURHO0FBRVpDLGNBQVUsRUFBRSxRQUZBO0FBR1pDLGtCQUFjLEVBQUUsZUFISjtBQUlaQyxZQUFRLEVBQUUsQ0FBQyxNQUFELEVBQVMsSUFBVCxFQUFlLElBQWYsRUFBcUIsUUFBckIsQ0FKRTtBQUtaQyxNQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxJQUFWLEVBQWdCLENBQWhCO0FBTFEsR0FERDtBQVFiUixZQUFVLEVBQUU7QUFDVlMsY0FBVSxFQUFFLENBREY7QUFFVkMsTUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxNQUFWLEVBQWtCLENBQWxCLENBRk07QUFHVkMsYUFBUyxFQUFFLENBQUMsUUFBRCxFQUFXLElBQVgsRUFBaUIsSUFBakIsRUFBdUIsTUFBdkIsQ0FIRDtBQUlWQyxTQUFLLEVBQUUsQ0FBQyxNQUFELEVBQVMsS0FBVCxFQUFnQixJQUFoQixFQUFzQixHQUF0QixFQUEyQixHQUEzQixFQUFnQyxHQUFoQyxFQUFxQyxJQUFyQyxFQUEyQyxHQUEzQyxDQUpHO0FBS1ZKLE1BQUUsRUFBRSxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLElBQWpCLEVBQXVCLENBQXZCLENBTE07QUFNVkssTUFBRSxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxJQUFmLEVBQXFCLENBQXJCLENBTk07QUFPVixvQkFBZ0I7QUFDZEMsUUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQjtBQURVO0FBUE4sR0FSQztBQW1CYmIsV0FBUyxFQUFFO0FBQ1RHLFdBQU8sRUFBRSxhQURBO0FBRVRXLFlBQVEsRUFBRSxVQUZEO0FBR1RDLE1BQUUsRUFBRSxNQUhLO0FBSVRDLE1BQUUsRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsSUFBZixFQUFxQixJQUFyQixFQUEyQixDQUEzQixDQUpLO0FBS1QsYUFBUztBQUNQRixjQUFRLEVBQUUsVUFESDtBQUVQRyxZQUFNLEVBQUUsQ0FGRDtBQUdQQyxZQUFNLEVBQUUsQ0FBQyxHQUFELEVBQU0sTUFBTjtBQUhEO0FBTEEsR0FuQkU7QUE4QmJoQixVQUFRLEVBQUU7QUFDUlksWUFBUSxFQUFFLFVBREY7QUFFUkssVUFBTSxFQUFFLENBQUMsRUFGRDtBQUdSQyxTQUFLLEVBQUUsQ0FBQyxHQUhBO0FBSVJILFVBQU0sRUFBRSxDQUFDLENBSkQ7QUFLUmQsV0FBTyxFQUFFLENBQUMsTUFBRCxFQUFTLGNBQVQsRUFBeUIsTUFBekIsRUFBaUMsSUFBakMsRUFBdUMsY0FBdkM7QUFMRDtBQTlCRyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjVhMjI5ZDg0NjNmMjk4YmJiOGM2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBDb250YWluZXIsIEJveCwgSW1hZ2UgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBUZXh0RmVhdHVyZSBmcm9tICdjb21wb25lbnRzL3RleHQtZmVhdHVyZSc7XHJcblxyXG5pbXBvcnQgRmVhdHVyZVRodW1iIGZyb20gJ2Fzc2V0cy9jb3JlLWZlYXR1cmUucG5nJztcclxuXHJcbmNvbnN0IGRhdGEgPSB7XHJcbiAgc3ViVGl0bGU6ICdDb3JlIGZlYXR1cmVzJyxcclxuICB0aXRsZTogJ1NtYXJ0IEphY2twb3RzIHRoYXQgeW91IG1heSBsb3ZlIHRoaXMgYW55dGltZSAmIGFueXdoZXJlJyxcclxuICBkZXNjcmlwdGlvbjpcclxuICAgICdHZXQgeW91ciB0ZXN0cyBkZWxpdmVyZWQgYXQgbGV0IGhvbWUgY29sbGVjdCBzYW1wbGUgZnJvbSB0aGUgdmljdG9yeSBvZiB0aGUgbWFuYWdlbWVudHMgdGhhdCBzdXBwbGllcyBiZXN0IGRlc2lnbiBzeXN0ZW0gZ3VpZGVsaW5lcyBldmVyLicsXHJcbiAgYnRuTmFtZTogJ0dldCBTdGFydGVkJyxcclxuICBidG5VUkw6ICcjJyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvcmVGZWF0dXJlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgIDxzZWN0aW9uIHN4PXt7dmFyaWFudDogJ3NlY3Rpb24uY29yZUZlYXR1cmUnfX0+XHJcbiAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuY29udGFpbmVyQm94fT5cclxuICAgICAgPEJveCBzeD17c3R5bGVzLmNvbnRlbnRCb3h9PlxyXG4gICAgICAgIDxUZXh0RmVhdHVyZSBcclxuICAgICAgICAgIHN1YlRpdGxlPXtkYXRhLnN1YlRpdGxlfVxyXG4gICAgICAgICAgdGl0bGU9e2RhdGEudGl0bGV9XHJcbiAgICAgICAgICBkZXNjcmlwdGlvbj17ZGF0YS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgIGJ0bk5hbWU9e2RhdGEuYnRuTmFtZX1cclxuICAgICAgICAgIGJ0blVSTD17ZGF0YS5idG5VUkx9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxCb3ggc3g9e3N0eWxlcy50aHVtYm5haWx9PlxyXG4gICAgICAgIDxJbWFnZSBzcmM9e0ZlYXR1cmVUaHVtYn0gYWx0PVwiVGh1bWJuYWlsXCIgLz5cclxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuc2hhcGVCb3h9PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGNvbnRhaW5lckJveDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgZmxleFdyYXA6IFsnd3JhcCcsIG51bGwsIG51bGwsICdub3dyYXAnXSxcclxuICAgIHBiOiBbMCwgNywgMCwgbnVsbCwgN10sXHJcbiAgfSxcclxuICBjb250ZW50Qm94OiB7XHJcbiAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgcHg6IFswLCBudWxsLCAnMzBweCcsIDBdLFxyXG4gICAgdGV4dEFsaWduOiBbJ2NlbnRlcicsIG51bGwsIG51bGwsICdsZWZ0J10sXHJcbiAgICB3aWR0aDogWycxMDAlJywgJzgwJScsIG51bGwsIDM0MCwgNDAwLCA0MzAsIG51bGwsIDQ4NV0sXHJcbiAgICBwYjogWyc1MHB4JywgJzYwcHgnLCBudWxsLCAwXSxcclxuICAgIG14OiBbJ2F1dG8nLCBudWxsLCBudWxsLCAwXSxcclxuICAgICcuZGVzY3JpcHRpb24nOiB7XHJcbiAgICAgIHByOiBbMCwgbnVsbCwgNiwgNywgNl0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdGh1bWJuYWlsOiB7XHJcbiAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBtcjogJ2F1dG8nLFxyXG4gICAgbWw6IFsnYXV0bycsIG51bGwsIG51bGwsIG51bGwsIDddLFxyXG4gICAgJz4gaW1nJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgekluZGV4OiAxLFxyXG4gICAgICBoZWlnaHQ6IFszMTAsICdhdXRvJ10sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2hhcGVCb3g6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgYm90dG9tOiAtNjUsXHJcbiAgICByaWdodDogLTE2NSxcclxuICAgIHpJbmRleDogLTEsXHJcbiAgICBkaXNwbGF5OiBbJ25vbmUnLCAnaW5saW5lLWJsb2NrJywgJ25vbmUnLCBudWxsLCAnaW5saW5lLWJsb2NrJ10sXHJcbiAgfSxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==