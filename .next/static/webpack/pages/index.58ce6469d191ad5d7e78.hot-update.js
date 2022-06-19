webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/footer/footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/link */ "./src/components/link.js");
/* harmony import */ var _footer_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.data */ "./src/components/footer/footer.data.js");
/* harmony import */ var assets_logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/logo.svg */ "./src/assets/logo.svg");
/* harmony import */ var assets_logo_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_logo_svg__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Will's Gaming PC\\Documents\\Development\\WhoozyWraps\\src\\components\\footer\\footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */




function Footer() {
  var _this = this;

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("footer", {
    sx: styles.footer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.footerBottomArea,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.footer.menus,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("nav", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, _footer_data__WEBPACK_IMPORTED_MODULE_3__["default"].menuItem.map(function (item, i) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      path: item.path,
      key: i,
      label: item.label,
      sx: styles.footer.link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }
    });
  }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    sx: styles.footer.copyright,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, "Copyright ", new Date().getFullYear(), " Whoozy's Wraps"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.footer.info,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, "whoozyswraps@hotmail.com"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, "4845 Pontiac Street, Commerce City CO, 80022"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, "(720)-441-4506")))));
}
_c = Footer;
var styles = {
  footer: {
    footerBottomArea: {
      borderTop: '1px solid',
      borderTopColor: 'border_color',
      display: 'flex',
      pt: [7, null, 8],
      pb: ['40px', null, '100px'],
      textAlign: 'center',
      flexDirection: 'column'
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }
    },
    link: {
      fontSize: [1, '15px'],
      color: 'text',
      fontWeight: '400',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'block',
      textDecoration: 'none',
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ':hover': {
        color: 'primary'
      }
    },
    copyright: {
      fontSize: [1, '13px'],
      width: '100%'
    },
    info: {
      fontFamily: "text",
      textAlign: "right",
      borderTop: '1px solid',
      borderBottom: ""
    }
  }
};

var _c;

$RefreshReg$(_c, "Footer");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyJdLCJuYW1lcyI6WyJGb290ZXIiLCJzdHlsZXMiLCJmb290ZXIiLCJmb290ZXJCb3R0b21BcmVhIiwibWVudXMiLCJkYXRhIiwibWVudUl0ZW0iLCJtYXAiLCJpdGVtIiwiaSIsInBhdGgiLCJsYWJlbCIsImxpbmsiLCJjb3B5cmlnaHQiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJpbmZvIiwiYm9yZGVyVG9wIiwiYm9yZGVyVG9wQ29sb3IiLCJkaXNwbGF5IiwicHQiLCJwYiIsInRleHRBbGlnbiIsImZsZXhEaXJlY3Rpb24iLCJtdCIsIm1iIiwibmF2IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZmxleFdyYXAiLCJmb250U2l6ZSIsImNvbG9yIiwiZm9udFdlaWdodCIsImN1cnNvciIsInRyYW5zaXRpb24iLCJ0ZXh0RGVjb3JhdGlvbiIsImxpbmVIZWlnaHQiLCJweCIsIndpZHRoIiwiZm9udEZhbWlseSIsImJvcmRlckJvdHRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUMvQixTQUNFO0FBQVEsTUFBRSxFQUFFQyxNQUFNLENBQUNDLE1BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUdELE1BQU0sQ0FBQ0UsZ0JBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRSxxREFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBRUYsTUFBTSxDQUFDQyxNQUFQLENBQWNFLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FD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QUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjU4Y2U2NDY5ZDE5MWFkNWQ3ZTc4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBCb3gsIENvbnRhaW5lciwgSW1hZ2UsIFRleHQgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdjb21wb25lbnRzL2xpbmsnO1xyXG5pbXBvcnQgZGF0YSBmcm9tICcuL2Zvb3Rlci5kYXRhJztcclxuaW1wb3J0IEZvb3RlckxvZ28gZnJvbSAnYXNzZXRzL2xvZ28uc3ZnJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGZvb3RlciBzeD17c3R5bGVzLmZvb3Rlcn0+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPEJveCBzeCA9e3N0eWxlcy5mb290ZXJCb3R0b21BcmVhfT5cclxuICAgICAgICAgIHsvKiA8TGluayBwYXRoID1cIi9cIj5cclxuICAgICAgICAgICAgPEltYWdlIHNyYyA9e0Zvb3RlckxvZ299IGFsdD1cIldob296eSBMb2dvXCIvPlxyXG4gICAgICAgICAgPC9MaW5rPiAqL31cclxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5mb290ZXIubWVudXN9PlxyXG4gICAgICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICAgIHtkYXRhLm1lbnVJdGVtLm1hcCgoaXRlbSxpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICBwYXRoPXtpdGVtLnBhdGh9XHJcbiAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgbGFiZWw9e2l0ZW0ubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgIHN4PXtzdHlsZXMuZm9vdGVyLmxpbmt9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPFRleHQgc3g9e3N0eWxlcy5mb290ZXIuY29weXJpZ2h0fT5cclxuICAgICAgICAgICAgICAgIENvcHlyaWdodCB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBXaG9venkncyBXcmFwc1xyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLmZvb3Rlci5pbmZvfT5cclxuICAgICAgICAgIDxUZXh0PlxyXG4gICAgICAgICAgICB3aG9venlzd3JhcHNAaG90bWFpbC5jb21cclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDxUZXh0PlxyXG4gICAgICAgICAgNDg0NSBQb250aWFjIFN0cmVldCwgQ29tbWVyY2UgQ2l0eSBDTywgODAwMjJcclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDxUZXh0PlxyXG4gICAgICAgICAgKDcyMCktNDQxLTQ1MDZcclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvZm9vdGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBmb290ZXI6IHtcclxuICAgIGZvb3RlckJvdHRvbUFyZWE6IHtcclxuICAgICAgYm9yZGVyVG9wOiAnMXB4IHNvbGlkJyxcclxuICAgICAgYm9yZGVyVG9wQ29sb3I6ICdib3JkZXJfY29sb3InLFxyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIHB0OiBbNywgbnVsbCwgOF0sXHJcbiAgICAgIHBiOiBbJzQwcHgnLCBudWxsLCAnMTAwcHgnXSxcclxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICB9LFxyXG4gICAgbWVudXM6IHtcclxuICAgICAgbXQ6IFszLCA0XSxcclxuICAgICAgbWI6IDIsXHJcbiAgICAgIG5hdjoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgbGluazoge1xyXG4gICAgICBmb250U2l6ZTogWzEsICcxNXB4J10sXHJcbiAgICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICc0MDAnLFxyXG4gICAgICBtYjogMixcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4zNXMnLFxyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBbMS41LCBudWxsLCAxLjhdLFxyXG4gICAgICBweDogWzIsIG51bGwsIDRdLFxyXG4gICAgICAnOmhvdmVyJzoge1xyXG4gICAgICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgY29weXJpZ2h0OiB7XHJcbiAgICAgIGZvbnRTaXplOiBbMSwgJzEzcHgnXSxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgXHJcbiAgICB9LFxyXG4gICAgaW5mbzoge1xyXG4gICAgICBmb250RmFtaWx5OiBcInRleHRcIixcclxuICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCIsXHJcbiAgICAgIGJvcmRlclRvcDogJzFweCBzb2xpZCcsXHJcbiAgICAgIGJvcmRlckJvdHRvbTogXCJcIlxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9