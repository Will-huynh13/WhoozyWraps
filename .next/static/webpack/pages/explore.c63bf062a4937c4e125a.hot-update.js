webpackHotUpdate_N_E("pages/explore",{

/***/ "./src/pages/explore.js":
/*!******************************!*\
  !*** ./src/pages/explore.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header2; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/logo */ "./src/components/logo.js");
/* harmony import */ var assets_logo_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/logo.svg */ "./src/assets/logo.svg");
/* harmony import */ var assets_logo_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_logo_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_header_mobile_drawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/header/mobile-drawer */ "./src/components/header/mobile-drawer.js");
/* harmony import */ var components_header_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/header/header */ "./src/components/header/header.js");


var _jsxFileName = "C:\\Users\\Will's Gaming PC\\Documents\\Development\\WhoozyWraps\\src\\pages\\explore.js",
    _templateObject;


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/** @jsx jsx */







function Header2(_ref) {
  var className = _ref.className;
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_header_header__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: styles.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  });
}
_c = Header2;
var positionAnim = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  from {\n    position: fixed;\n    opacity: 1;\n  }\n\n  to {\n    position: absolute;\n    opacity: 1;\n    transition: all 0.4s ease;\n  }\n"])));
var styles = {
  header: {
    color: 'text',
    fontWeight: 'body',
    py: 4,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',
    animation: "".concat(positionAnim, " 0.4s ease"),
    '.donate__btn': {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ['auto', null, null, null, 0]
    },
    '&.sticky': {
      position: 'fixed',
      backgroundColor: 'background',
      color: '#000000',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
      py: 3,
      'nev > a': {
        color: 'text'
      }
    }
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  nav: {
    mx: 'auto',
    display: 'none',
    '@media screen and (min-width: 1024px)': {
      display: 'block'
    },
    a: {
      fontSize: 2,
      fontWeight: 'body',
      px: 5,
      cursor: 'pointer',
      lineHeight: '1.2',
      transition: 'all 0.15s',
      '&:hover': {
        color: 'primary'
      },
      '&.active': {
        color: 'primary'
      }
    }
  }
};

var _c;

$RefreshReg$(_c, "Header2");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2V4cGxvcmUuanMiXSwibmFtZXMiOlsiSGVhZGVyMiIsImNsYXNzTmFtZSIsInN0eWxlcyIsImhlYWRlciIsInBvc2l0aW9uQW5pbSIsImtleWZyYW1lcyIsImNvbG9yIiwiZm9udFdlaWdodCIsInB5Iiwid2lkdGgiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0cmFuc2l0aW9uIiwiYW5pbWF0aW9uIiwiZmxleFNocmluayIsIm1yIiwibWwiLCJib3hTaGFkb3ciLCJjb250YWluZXIiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwibmF2IiwibXgiLCJhIiwiZm9udFNpemUiLCJweCIsImN1cnNvciIsImxpbmVIZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE9BQVQsT0FBZ0M7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7QUFDN0MsU0FDRSxxREFBQyxnRUFBRDtBQUFRLE1BQUUsRUFBRUMsTUFBTSxDQUFDQyxNQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREY7QUFLRDtLQU51QkgsTztBQVF4QixJQUFNSSxZQUFZLEdBQUdDLCtEQUFILGdTQUFsQjtBQWFBLElBQU1ILE1BQU0sR0FBRztBQUNiQyxRQUFNLEVBQUU7QUFDTkcsU0FBSyxFQUFFLE1BREQ7QUFFTkMsY0FBVSxFQUFFLE1BRk47QUFHTkMsTUFBRSxFQUFFLENBSEU7QUFJTkMsU0FBSyxFQUFFLE1BSkQ7QUFLTkMsWUFBUSxFQUFFLFVBTEo7QUFNTkMsT0FBRyxFQUFFLENBTkM7QUFPTkMsUUFBSSxFQUFFLENBUEE7QUFRTkMsbUJBQWUsRUFBRSxhQVJYO0FBU05DLGNBQVUsRUFBRSxlQVROO0FBVU5DLGFBQVMsWUFBS1gsWUFBTCxlQVZIO0FBV04sb0JBQWdCO0FBQ2RZLGdCQUFVLEVBQUUsQ0FERTtBQUVkQyxRQUFFLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLElBQVQsRUFBZSxJQUFmLEVBQXFCLENBQXJCLENBRlU7QUFHZEMsUUFBRSxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxJQUFmLEVBQXFCLElBQXJCLEVBQTJCLENBQTNCO0FBSFUsS0FYVjtBQWdCTixnQkFBWTtBQUNWUixjQUFRLEVBQUUsT0FEQTtBQUVWRyxxQkFBZSxFQUFFLFlBRlA7QUFHVlAsV0FBSyxFQUFFLFNBSEc7QUFJVmEsZUFBUyxFQUFFLCtCQUpEO0FBS1ZYLFFBQUUsRUFBRSxDQUxNO0FBTVYsaUJBQVc7QUFDVEYsYUFBSyxFQUFFO0FBREU7QUFORDtBQWhCTixHQURLO0FBNEJiYyxXQUFTLEVBQUU7QUFDVEMsV0FBTyxFQUFFLE1BREE7QUFFVEMsY0FBVSxFQUFFLFFBRkg7QUFHVEMsa0JBQWMsRUFBRTtBQUhQLEdBNUJFO0FBaUNiQyxLQUFHLEVBQUU7QUFDSEMsTUFBRSxFQUFFLE1BREQ7QUFFSEosV0FBTyxFQUFFLE1BRk47QUFHSCw2Q0FBeUM7QUFDdkNBLGFBQU8sRUFBRTtBQUQ4QixLQUh0QztBQU1ISyxLQUFDLEVBQUU7QUFDREMsY0FBUSxFQUFFLENBRFQ7QUFFRHBCLGdCQUFVLEVBQUUsTUFGWDtBQUdEcUIsUUFBRSxFQUFFLENBSEg7QUFJREMsWUFBTSxFQUFFLFNBSlA7QUFLREMsZ0JBQVUsRUFBRSxLQUxYO0FBTURoQixnQkFBVSxFQUFFLFdBTlg7QUFPRCxpQkFBVztBQUNUUixhQUFLLEVBQUU7QUFERSxPQVBWO0FBVUQsa0JBQVk7QUFDVkEsYUFBSyxFQUFFO0FBREc7QUFWWDtBQU5BO0FBakNRLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXhwbG9yZS5jNjNiZjA2MmE0OTM3YzRlMTI1YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQ29udGFpbmVyLCBGbGV4LCBCdXR0b24gfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcclxuaW1wb3J0IExvZ28gZnJvbSAnY29tcG9uZW50cy9sb2dvJztcclxuaW1wb3J0IExvZ29EYXJrIGZyb20gJ2Fzc2V0cy9sb2dvLnN2Zyc7XHJcbmltcG9ydCBNb2JpbGVEcmF3ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXIvbW9iaWxlLWRyYXdlcic7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcjIoeyBjbGFzc05hbWUgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8SGVhZGVyIHN4PXtzdHlsZXMuaGVhZGVyfT5cclxuXHJcbiAgICA8L0hlYWRlcj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IHBvc2l0aW9uQW5pbSA9IGtleWZyYW1lc2BcclxuICBmcm9tIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgaGVhZGVyOiB7XHJcbiAgICBjb2xvcjogJ3RleHQnLFxyXG4gICAgZm9udFdlaWdodDogJ2JvZHknLFxyXG4gICAgcHk6IDQsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6IDAsXHJcbiAgICBsZWZ0OiAwLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAwLjRzIGVhc2UnLFxyXG4gICAgYW5pbWF0aW9uOiBgJHtwb3NpdGlvbkFuaW19IDAuNHMgZWFzZWAsXHJcbiAgICAnLmRvbmF0ZV9fYnRuJzoge1xyXG4gICAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgICBtcjogWzE1LCAyMCwgbnVsbCwgbnVsbCwgMF0sXHJcbiAgICAgIG1sOiBbJ2F1dG8nLCBudWxsLCBudWxsLCBudWxsLCAwXSxcclxuICAgIH0sXHJcbiAgICAnJi5zdGlja3knOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdiYWNrZ3JvdW5kJyxcclxuICAgICAgY29sb3I6ICcjMDAwMDAwJyxcclxuICAgICAgYm94U2hhZG93OiAnMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNiknLFxyXG4gICAgICBweTogMyxcclxuICAgICAgJ25ldiA+IGEnOiB7XHJcbiAgICAgICAgY29sb3I6ICd0ZXh0JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjb250YWluZXI6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICB9LFxyXG4gIG5hdjoge1xyXG4gICAgbXg6ICdhdXRvJyxcclxuICAgIGRpc3BsYXk6ICdub25lJyxcclxuICAgICdAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpJzoge1xyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgfSxcclxuICAgIGE6IHtcclxuICAgICAgZm9udFNpemU6IDIsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2R5JyxcclxuICAgICAgcHg6IDUsXHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnMS4yJyxcclxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjE1cycsXHJcbiAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgIH0sXHJcbiAgICAgICcmLmFjdGl2ZSc6IHtcclxuICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9