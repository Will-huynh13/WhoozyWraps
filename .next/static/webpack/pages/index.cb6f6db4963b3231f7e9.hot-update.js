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
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    path: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_logo_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "Whoozy Logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
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
    sx: styles.footer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyJdLCJuYW1lcyI6WyJGb290ZXIiLCJzdHlsZXMiLCJmb290ZXIiLCJmb290ZXJCb3R0b21BcmVhIiwiRm9vdGVyTG9nbyIsIm1lbnVzIiwiZGF0YSIsIm1lbnVJdGVtIiwibWFwIiwiaXRlbSIsImkiLCJwYXRoIiwibGFiZWwiLCJsaW5rIiwiYm9yZGVyVG9wIiwiYm9yZGVyVG9wQ29sb3IiLCJkaXNwbGF5IiwicHQiLCJwYiIsInRleHRBbGlnbiIsImZsZXhEaXJlY3Rpb24iLCJtdCIsIm1iIiwibmF2IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZmxleFdyYXAiLCJmb250U2l6ZSIsImNvbG9yIiwiZm9udFdlaWdodCIsImN1cnNvciIsInRyYW5zaXRpb24iLCJ0ZXh0RGVjb3JhdGlvbiIsImxpbmVIZWlnaHQiLCJweCIsImNvcHlyaWdodCIsIndpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQy9CLFNBQ0U7QUFBUSxNQUFFLEVBQUVDLE1BQU0sQ0FBQ0MsTUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBR0QsTUFBTSxDQUFDRSxnQkFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLG9EQUFEO0FBQU0sUUFBSSxFQUFFLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLDhDQUFEO0FBQU8sT0FBRyxFQUFHQyxzREFBYjtBQUF5QixPQUFHLEVBQUMsYUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRSxxREFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBRUgsTUFBTSxDQUFDQyxNQUFQLENBQWNHLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLG9EQUFJLENBQUNDLFFBQUwsQ0FBY0MsR0FBZCxDQUFrQixVQUFDQyxJQUFELEVBQU1DLENBQU47QUFBQSxXQUNqQixxREFBQyxvREFBRDtBQUNFLFVBQUksRUFBRUQsSUFBSSxDQUFDRSxJQURiO0FBRUUsU0FBRyxFQUFFRCxDQUZQO0FBR0UsV0FBSyxFQUFFRCxJQUFJLENBQUNHLEtBSGQ7QUFJRSxRQUFFLEVBQUVYLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjVyxJQUpwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRGlCO0FBQUEsR0FBbEIsQ0FESCxDQURGLENBSkYsRUFnQkUscURBQUMsNkNBQUQ7QUFBTSxNQUFFLEVBQUVaLE1BQU0sQ0FBQ0MsTUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhCRixDQURGLENBREYsQ0FERjtBQTBCRDtLQTNCdUJGLE07QUE2QnhCLElBQU1DLE1BQU0sR0FBRztBQUNiQyxRQUFNLEVBQUU7QUFDTkMsb0JBQWdCLEVBQUU7QUFDaEJXLGVBQVMsRUFBRSxXQURLO0FBRWhCQyxvQkFBYyxFQUFFLGNBRkE7QUFHaEJDLGFBQU8sRUFBRSxNQUhPO0FBSWhCQyxRQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLENBQVYsQ0FKWTtBQUtoQkMsUUFBRSxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxPQUFmLENBTFk7QUFNaEJDLGVBQVMsRUFBRSxRQU5LO0FBT2hCQyxtQkFBYSxFQUFFO0FBUEMsS0FEWjtBQVVOZixTQUFLLEVBQUU7QUFDTGdCLFFBQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLENBREM7QUFFTEMsUUFBRSxFQUFFLENBRkM7QUFHTEMsU0FBRyxFQUFFO0FBQ0hQLGVBQU8sRUFBRSxNQUROO0FBRUhRLGtCQUFVLEVBQUUsUUFGVDtBQUdIQyxzQkFBYyxFQUFFLFFBSGI7QUFJSEMsZ0JBQVEsRUFBRTtBQUpQO0FBSEEsS0FWRDtBQXFCTmIsUUFBSSxFQUFFO0FBQ0pjLGNBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxNQUFKLENBRE47QUFFSkMsV0FBSyxFQUFFLE1BRkg7QUFHSkMsZ0JBQVUsRUFBRSxLQUhSO0FBSUpQLFFBQUUsRUFBRSxDQUpBO0FBS0pRLFlBQU0sRUFBRSxTQUxKO0FBTUpDLGdCQUFVLEVBQUUsV0FOUjtBQU9KZixhQUFPLEVBQUUsT0FQTDtBQVFKZ0Isb0JBQWMsRUFBRSxNQVJaO0FBU0pDLGdCQUFVLEVBQUUsQ0FBQyxHQUFELEVBQU0sSUFBTixFQUFZLEdBQVosQ0FUUjtBQVVKQyxRQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLENBQVYsQ0FWQTtBQVdKLGdCQUFVO0FBQ1JOLGFBQUssRUFBRTtBQURDO0FBWE4sS0FyQkE7QUFvQ05PLGFBQVMsRUFBRTtBQUNUUixjQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksTUFBSixDQUREO0FBRVRTLFdBQUssRUFBRTtBQUZFO0FBcENMO0FBREssQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jYjZmNmRiNDk2M2IzMjMxZjdlOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQm94LCBDb250YWluZXIsIEltYWdlLCBUZXh0IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnY29tcG9uZW50cy9saW5rJztcclxuaW1wb3J0IGRhdGEgZnJvbSAnLi9mb290ZXIuZGF0YSc7XHJcbmltcG9ydCBGb290ZXJMb2dvIGZyb20gJ2Fzc2V0cy9sb2dvLnN2Zyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxmb290ZXIgc3g9e3N0eWxlcy5mb290ZXJ9PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxCb3ggc3ggPXtzdHlsZXMuZm9vdGVyQm90dG9tQXJlYX0+XHJcbiAgICAgICAgICA8TGluayBwYXRoID1cIi9cIj5cclxuICAgICAgICAgICAgPEltYWdlIHNyYyA9e0Zvb3RlckxvZ299IGFsdD1cIldob296eSBMb2dvXCIvPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLmZvb3Rlci5tZW51c30+XHJcbiAgICAgICAgICAgIDxuYXY+XHJcbiAgICAgICAgICAgICAge2RhdGEubWVudUl0ZW0ubWFwKChpdGVtLGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgIHBhdGg9e2l0ZW0ucGF0aH1cclxuICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD17aXRlbS5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgc3g9e3N0eWxlcy5mb290ZXIubGlua31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8VGV4dCBzeD17c3R5bGVzLmZvb3Rlcn0+XHJcblxyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvZm9vdGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBmb290ZXI6IHtcclxuICAgIGZvb3RlckJvdHRvbUFyZWE6IHtcclxuICAgICAgYm9yZGVyVG9wOiAnMXB4IHNvbGlkJyxcclxuICAgICAgYm9yZGVyVG9wQ29sb3I6ICdib3JkZXJfY29sb3InLFxyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIHB0OiBbNywgbnVsbCwgOF0sXHJcbiAgICAgIHBiOiBbJzQwcHgnLCBudWxsLCAnMTAwcHgnXSxcclxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICB9LFxyXG4gICAgbWVudXM6IHtcclxuICAgICAgbXQ6IFszLCA0XSxcclxuICAgICAgbWI6IDIsXHJcbiAgICAgIG5hdjoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgbGluazoge1xyXG4gICAgICBmb250U2l6ZTogWzEsICcxNXB4J10sXHJcbiAgICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICc0MDAnLFxyXG4gICAgICBtYjogMixcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4zNXMnLFxyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBbMS41LCBudWxsLCAxLjhdLFxyXG4gICAgICBweDogWzIsIG51bGwsIDRdLFxyXG4gICAgICAnOmhvdmVyJzoge1xyXG4gICAgICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgY29weXJpZ2h0OiB7XHJcbiAgICAgIGZvbnRTaXplOiBbMSwgJzE1cHgnXSxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==