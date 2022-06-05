webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/banner.js":
/*!********************************!*\
  !*** ./src/sections/banner.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Banner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var assets_banner_thumb_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/banner-thumb.png */ "./src/assets/banner-thumb.png");
/* harmony import */ var assets_banner_thumb_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assets_banner_thumb_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/link */ "./src/components/link.js");
var _jsxFileName = "C:\\Users\\Will's Gaming PC\\Documents\\Development\\WhoozyWraps\\src\\sections\\banner.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */




function Banner() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    sx: styles.banner,
    id: "home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("container", {
    sx: styles.banner.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.banner.contentBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h1",
    variant: "heroPrimary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, "Quality over Quantity."), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    variant: "heroSecondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, "At Whoozy's we can transform your car's apprerence with ease. Make your dreams come true."), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    href: "www.google.com",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, "Explore"))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.banner.imageBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_banner_thumb_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "banner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }))));
}
_c = Banner;
var styles = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: 6,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundRepeat: "no-repeat",
      backgroundPosition: 'bottom left',
      backgroundSize: '36%'
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '40px',
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundRepeat: "no-repeat",
      backgroundPosition: 'bottom right',
      backgroundSize: '32%'
    },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7]
    },
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        position: 'relative',
        height: [245, 'auto']
      }
    }
  }
};

var _c;

$RefreshReg$(_c, "Banner");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2Jhbm5lci5qcyJdLCJuYW1lcyI6WyJCYW5uZXIiLCJzdHlsZXMiLCJiYW5uZXIiLCJjb250YWluZXIiLCJjb250ZW50Qm94IiwiaW1hZ2VCb3giLCJCYW5uZXJJbWciLCJwdCIsInBiIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJjb250ZW50IiwiYm90dG9tIiwibGVmdCIsImhlaWdodCIsIndpZHRoIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRTaXplIiwicmlnaHQiLCJtaW5IZWlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwibXgiLCJ0ZXh0QWxpZ24iLCJtYiIsImltZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULEdBQWtCO0FBQy9CLFNBQ0U7QUFBUyxNQUFFLEVBQUVDLE1BQU0sQ0FBQ0MsTUFBcEI7QUFBNEIsTUFBRSxFQUFDLE1BQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFXLE1BQUUsRUFBRUQsTUFBTSxDQUFDQyxNQUFQLENBQWNDLFNBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBRUYsTUFBTSxDQUFDQyxNQUFQLENBQWNFLFVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyxnREFBRDtBQUFTLE1BQUUsRUFBRSxJQUFiO0FBQWtCLFdBQU8sRUFBRSxhQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQURGLEVBSUUscURBQUMsNkNBQUQ7QUFBTSxNQUFFLEVBQUUsR0FBVjtBQUFjLFdBQU8sRUFBQyxlQUF0QjtBQUFBO0FB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RSxVQURQO0FBRUhLLGNBQU0sRUFBRSxDQUFDLEdBQUQsRUFBTSxNQUFOO0FBRkw7QUFMRztBQXpDSjtBQURLLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzI3ZDA4ZDJhYmRlMjU5MjMzNmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgQm94LCBIZWFkaW5nLCBUZXh0LCBJbWFnZSwgQnV0dG9uIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgQmFubmVySW1nIGZyb20gJ2Fzc2V0cy9iYW5uZXItdGh1bWIucG5nJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ2NvbXBvbmVudHMvbGluayc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYW5uZXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIHN4PXtzdHlsZXMuYmFubmVyfSBpZD1cImhvbWVcIj5cclxuICAgICAgPGNvbnRhaW5lciBzeD17c3R5bGVzLmJhbm5lci5jb250YWluZXJ9PlxyXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5iYW5uZXIuY29udGVudEJveH0+XHJcbiAgICAgICAgICA8SGVhZGluZyBhcyA9XCJoMVwiIHZhcmlhbnQgPVwiaGVyb1ByaW1hcnlcIj5cclxuICAgICAgICAgICAgUXVhbGl0eSBvdmVyIFF1YW50aXR5LlxyXG4gICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgPFRleHQgYXMgPVwicFwiIHZhcmlhbnQ9XCJoZXJvU2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgIEF0IFdob296eSdzIHdlIGNhbiB0cmFuc2Zvcm0geW91ciBjYXIncyBhcHByZXJlbmNlIHdpdGggZWFzZS4gTWFrZSB5b3VyIGRyZWFtcyBjb21lIHRydWUuXHJcbiAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwid3d3Lmdvb2dsZS5jb21cIj5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgIEV4cGxvcmVcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgIDxCb3ggc3ggPXtzdHlsZXMuYmFubmVyLmltYWdlQm94fT5cclxuICAgICAgICAgIDxJbWFnZSBzcmMgPXtCYW5uZXJJbWd9IGFsdD0nYmFubmVyJyAvPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L2NvbnRhaW5lcj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgYmFubmVyOiB7XHJcbiAgICBwdDogWycxNDBweCcsICcxNDVweCcsICcxNTVweCcsICcxNzBweCcsIG51bGwsIG51bGwsICcxODBweCcsICcyMTVweCddLFxyXG4gICAgcGI6IFsyLCBudWxsLCAwLCBudWxsLCAyLCAwLCBudWxsLCA1XSxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgekluZGV4OiAyLFxyXG4gICAgJyY6OmJlZm9yZSc6IHtcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcclxuICAgICAgYm90dG9tOiA2LFxyXG4gICAgICBsZWZ0OiAwLFxyXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgekluZGV4OiAtMSxcclxuICAgICAgYmFja2dyb3VuZFJlcGVhdDogYG5vLXJlcGVhdGAsXHJcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2JvdHRvbSBsZWZ0JyxcclxuICAgICAgYmFja2dyb3VuZFNpemU6ICczNiUnLFxyXG4gICAgfSxcclxuICAgICcmOjphZnRlcic6IHtcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcclxuICAgICAgYm90dG9tOiAnNDBweCcsXHJcbiAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgekluZGV4OiAtMSxcclxuICAgICAgYmFja2dyb3VuZFJlcGVhdDogYG5vLXJlcGVhdGAsXHJcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2JvdHRvbSByaWdodCcsXHJcbiAgICAgIGJhY2tncm91bmRTaXplOiAnMzIlJyxcclxuICAgIH0sXHJcbiAgICBjb250YWluZXI6IHtcclxuICAgICAgbWluSGVpZ2h0OiAnaW5oZXJpdCcsXHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIH0sXHJcbiAgICBjb250ZW50Qm94OiB7XHJcbiAgICAgIHdpZHRoOiBbJzEwMCUnLCAnOTAlJywgJzUzNXB4JywgbnVsbCwgJzU3JScsICc2MCUnLCAnNjglJywgJzYwJSddLFxyXG4gICAgICBteDogJ2F1dG8nLFxyXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICBtYjogWyc0MHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgN10sXHJcbiAgICB9LFxyXG4gICAgaW1hZ2VCb3g6IHtcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxyXG4gICAgICBtYjogWzAsIG51bGwsIC02LCBudWxsLCBudWxsLCAnLTQwcHgnLCBudWxsLCAtM10sXHJcbiAgICAgIGltZzoge1xyXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgIGhlaWdodDogWzI0NSwgJ2F1dG8nXSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==