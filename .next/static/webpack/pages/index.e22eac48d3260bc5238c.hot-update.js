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
  }, "Copyright ", new Date().getFullYear(), " Whoozy's Wraps"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    sx: styles.footer.copyright,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, "Banner image provided by @nbhd_media"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.footer.info,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, "whoozyswraps@hotmail.com"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, "4845 Pontiac Street, Commerce City CO, 80022"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
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
      fontSize: [1, '15px'],
      width: '100%'
    },
    info: {
      fontFamily: "text",
      textAlign: "right",
      borderTop: '1px solid'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyJdLCJuYW1lcyI6WyJGb290ZXIiLCJzdHlsZXMiLCJmb290ZXIiLCJmb290ZXJCb3R0b21BcmVhIiwibWVudXMiLCJkYXRhIiwibWVudUl0ZW0iLCJtYXAiLCJpdGVtIiwiaSIsInBhdGgiLCJsYWJlbCIsImxpbmsiLCJjb3B5cmlnaHQiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJpbmZvIiwiYm9yZGVyVG9wIiwiYm9yZGVyVG9wQ29sb3IiLCJkaXNwbGF5IiwicHQiLCJwYiIsInRleHRBbGlnbiIsImZsZXhEaXJlY3Rpb24iLCJtdCIsIm1iIiwibmF2IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZmxleFdyYXAiLCJmb250U2l6ZSIsImNvbG9yIiwiZm9udFdlaWdodCIsImN1cnNvciIsInRyYW5zaXRpb24iLCJ0ZXh0RGVjb3JhdGlvbiIsImxpbmVIZWlnaHQiLCJweCIsIndpZHRoIiwiZm9udEZhbWlseSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUMvQixTQUNFO0FBQVEsTUFBRSxFQUFFQyxNQUFNLENBQUNDLE1BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUdELE1BQU0sQ0FBQ0UsZ0JBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRSxxREFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBRUYsTUFBTSxDQUFDQyxNQUFQLENBQWNFLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFB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LEVBQUU7QUFGRSxLQXBDTDtBQXlDTnRCLFFBQUksRUFBRTtBQUNKdUIsZ0JBQVUsRUFBRSxNQURSO0FBRUpqQixlQUFTLEVBQUUsT0FGUDtBQUdKTCxlQUFTLEVBQUU7QUFIUDtBQXpDQTtBQURLLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTIyZWFjNDhkMzI2MGJjNTIzOGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEJveCwgQ29udGFpbmVyLCBJbWFnZSwgVGV4dCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ2NvbXBvbmVudHMvbGluayc7XHJcbmltcG9ydCBkYXRhIGZyb20gJy4vZm9vdGVyLmRhdGEnO1xyXG5pbXBvcnQgRm9vdGVyTG9nbyBmcm9tICdhc3NldHMvbG9nby5zdmcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9vdGVyIHN4PXtzdHlsZXMuZm9vdGVyfT5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8Qm94IHN4ID17c3R5bGVzLmZvb3RlckJvdHRvbUFyZWF9PlxyXG4gICAgICAgICAgey8qIDxMaW5rIHBhdGggPVwiL1wiPlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjID17Rm9vdGVyTG9nb30gYWx0PVwiV2hvb3p5IExvZ29cIi8+XHJcbiAgICAgICAgICA8L0xpbms+ICovfVxyXG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLmZvb3Rlci5tZW51c30+XHJcbiAgICAgICAgICAgIDxuYXY+XHJcbiAgICAgICAgICAgICAge2RhdGEubWVudUl0ZW0ubWFwKChpdGVtLGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgIHBhdGg9e2l0ZW0ucGF0aH1cclxuICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD17aXRlbS5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgc3g9e3N0eWxlcy5mb290ZXIubGlua31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8VGV4dCBzeD17c3R5bGVzLmZvb3Rlci5jb3B5cmlnaHR9PlxyXG4gICAgICAgICAgICAgICAgQ29weXJpZ2h0IHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IFdob296eSdzIFdyYXBzXHJcbiAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICA8YT48L2E+XHJcbiAgICAgICAgICA8VGV4dCBzeD17c3R5bGVzLmZvb3Rlci5jb3B5cmlnaHR9PlxyXG4gICAgICAgICAgICAgICAgQmFubmVyIGltYWdlIHByb3ZpZGVkIGJ5IEBuYmhkX21lZGlhXHJcbiAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuZm9vdGVyLmluZm99PlxyXG4gICAgICAgICAgPFRleHQ+XHJcbiAgICAgICAgICAgIHdob296eXN3cmFwc0Bob3RtYWlsLmNvbVxyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPFRleHQ+XHJcbiAgICAgICAgICA0ODQ1IFBvbnRpYWMgU3RyZWV0LCBDb21tZXJjZSBDaXR5IENPLCA4MDAyMlxyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPFRleHQ+XHJcbiAgICAgICAgICAoNzIwKS00NDEtNDUwNlxyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9mb290ZXI+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGZvb3Rlcjoge1xyXG4gICAgZm9vdGVyQm90dG9tQXJlYToge1xyXG4gICAgICBib3JkZXJUb3A6ICcxcHggc29saWQnLFxyXG4gICAgICBib3JkZXJUb3BDb2xvcjogJ2JvcmRlcl9jb2xvcicsXHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgcHQ6IFs3LCBudWxsLCA4XSxcclxuICAgICAgcGI6IFsnNDBweCcsIG51bGwsICcxMDBweCddLFxyXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIH0sXHJcbiAgICBtZW51czoge1xyXG4gICAgICBtdDogWzMsIDRdLFxyXG4gICAgICBtYjogMixcclxuICAgICAgbmF2OiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBsaW5rOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbMSwgJzE1cHgnXSxcclxuICAgICAgY29sb3I6ICd0ZXh0JyxcclxuICAgICAgZm9udFdlaWdodDogJzQwMCcsXHJcbiAgICAgIG1iOiAyLFxyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjM1cycsXHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjUsIG51bGwsIDEuOF0sXHJcbiAgICAgIHB4OiBbMiwgbnVsbCwgNF0sXHJcbiAgICAgICc6aG92ZXInOiB7XHJcbiAgICAgICAgY29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBjb3B5cmlnaHQ6IHtcclxuICAgICAgZm9udFNpemU6IFsxLCAnMTVweCddLFxyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBcclxuICAgIH0sXHJcbiAgICBpbmZvOiB7XHJcbiAgICAgIGZvbnRGYW1pbHk6IFwidGV4dFwiLFxyXG4gICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIixcclxuICAgICAgYm9yZGVyVG9wOiAnMXB4IHNvbGlkJyxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==