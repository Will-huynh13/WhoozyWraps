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
    className: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("section", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2V4cGxvcmUuanMiXSwibmFtZXMiOlsiSGVhZGVyMiIsImNsYXNzTmFtZSIsInN0eWxlcyIsImhlYWRlciIsInBvc2l0aW9uQW5pbSIsImtleWZyYW1lcyIsImNvbG9yIiwiZm9udFdlaWdodCIsInB5Iiwid2lkdGgiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0cmFuc2l0aW9uIiwiYW5pbWF0aW9uIiwiZmxleFNocmluayIsIm1yIiwibWwiLCJib3hTaGFkb3ciLCJjb250YWluZXIiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwibmF2IiwibXgiLCJhIiwiZm9udFNpemUiLCJweCIsImN1cnNvciIsImxpbmVIZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE9BQVQsT0FBZ0M7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7QUFDN0MsU0FDRSxxREFBQyxnRUFBRDtBQUFRLE1BQUUsRUFBRUMsTUFBTSxDQUFDQyxNQUFuQjtBQUEyQixhQUFTLE1BQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FERjtBQU9EO0tBUnVCSCxPO0FBVXhCLElBQU1JLFlBQVksR0FBR0MsK0RBQUgsZ1NBQWxCO0FBYUEsSUFBTUgsTUFBTSxHQUFHO0FBQ2JDLFFBQU0sRUFBRTtBQUNORyxTQUFLLEVBQUUsTUFERDtBQUVOQyxjQUFVLEVBQUUsTUFGTjtBQUdOQyxNQUFFLEVBQUUsQ0FIRTtBQUlOQyxTQUFLLEVBQUUsTUFKRDtBQUtOQyxZQUFRLEVBQUUsVUFMSjtBQU1OQyxPQUFHLEVBQUUsQ0FOQztBQU9OQyxRQUFJLEVBQUUsQ0FQQTtBQVFOQyxtQkFBZSxFQUFFLGFBUlg7QUFTTkMsY0FBVSxFQUFFLGVBVE47QUFVTkMsYUFBUyxZQUFLWCxZQUFMLGVBVkg7QUFXTixvQkFBZ0I7QUFDZFksZ0JBQVUsRUFBRSxDQURFO0FBRWRDLFFBQUUsRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsSUFBVCxFQUFlLElBQWYsRUFBcUIsQ0FBckIsQ0FGVTtBQUdkQyxRQUFFLEVBQUUsQ0FBQyxNQUFELEVBQVMsSUFBVCxFQUFlLElBQWYsRUFBcUIsSUFBckIsRUFBMkIsQ0FBM0I7QUFIVSxLQVhWO0FBZ0JOLGdCQUFZO0FBQ1ZSLGNBQVEsRUFBRSxPQURBO0FBRVZHLHFCQUFlLEVBQUUsWUFGUDtBQUdWUCxXQUFLLEVBQUUsU0FIRztBQUlWYSxlQUFTLEVBQUUsK0JBSkQ7QUFLVlgsUUFBRSxFQUFFLENBTE07QUFNVixpQkFBVztBQUNURixhQUFLLEVBQUU7QUFERTtBQU5EO0FBaEJOLEdBREs7QUE0QmJjLFdBQVMsRUFBRTtBQUNUQyxXQUFPLEVBQUUsTUFEQTtBQUVUQyxjQUFVLEVBQUUsUUFGSDtBQUdUQyxrQkFBYyxFQUFFO0FBSFAsR0E1QkU7QUFpQ2JDLEtBQUcsRUFBRTtBQUNIQyxNQUFFLEVBQUUsTUFERDtBQUVISixXQUFPLEVBQUUsTUFGTjtBQUdILDZDQUF5QztBQUN2Q0EsYUFBTyxFQUFFO0FBRDhCLEtBSHRDO0FBTUhLLEtBQUMsRUFBRTtBQUNEQyxjQUFRLEVBQUUsQ0FEVDtBQUVEcEIsZ0JBQVUsRUFBRSxNQUZYO0FBR0RxQixRQUFFLEVBQUUsQ0FISDtBQUlEQyxZQUFNLEVBQUUsU0FKUDtBQUtEQyxnQkFBVSxFQUFFLEtBTFg7QUFNRGhCLGdCQUFVLEVBQUUsV0FOWDtBQU9ELGlCQUFXO0FBQ1RSLGFBQUssRUFBRTtBQURFLE9BUFY7QUFVRCxrQkFBWTtBQUNWQSxhQUFLLEVBQUU7QUFERztBQVZYO0FBTkE7QUFqQ1EsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9leHBsb3JlLjZjNmViMjdjNmQyNWQ5YzI5YmQ3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBDb250YWluZXIsIEZsZXgsIEJ1dHRvbiB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1zY3JvbGwnO1xyXG5pbXBvcnQgTG9nbyBmcm9tICdjb21wb25lbnRzL2xvZ28nO1xyXG5pbXBvcnQgTG9nb0RhcmsgZnJvbSAnYXNzZXRzL2xvZ28uc3ZnJztcclxuaW1wb3J0IE1vYmlsZURyYXdlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlci9tb2JpbGUtZHJhd2VyJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICdjb21wb25lbnRzL2hlYWRlci9oZWFkZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyMih7IGNsYXNzTmFtZSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxIZWFkZXIgc3g9e3N0eWxlcy5oZWFkZXJ9IGNsYXNzTmFtZT5cclxuICAgICAgICA8c2VjdGlvbj5cclxuXHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9IZWFkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBwb3NpdGlvbkFuaW0gPSBrZXlmcmFtZXNgXHJcbiAgZnJvbSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGhlYWRlcjoge1xyXG4gICAgY29sb3I6ICd0ZXh0JyxcclxuICAgIGZvbnRXZWlnaHQ6ICdib2R5JyxcclxuICAgIHB5OiA0LFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgbGVmdDogMCxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgIHRyYW5zaXRpb246ICdhbGwgMC40cyBlYXNlJyxcclxuICAgIGFuaW1hdGlvbjogYCR7cG9zaXRpb25BbmltfSAwLjRzIGVhc2VgLFxyXG4gICAgJy5kb25hdGVfX2J0bic6IHtcclxuICAgICAgZmxleFNocmluazogMCxcclxuICAgICAgbXI6IFsxNSwgMjAsIG51bGwsIG51bGwsIDBdLFxyXG4gICAgICBtbDogWydhdXRvJywgbnVsbCwgbnVsbCwgbnVsbCwgMF0sXHJcbiAgICB9LFxyXG4gICAgJyYuc3RpY2t5Jzoge1xyXG4gICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnYmFja2dyb3VuZCcsXHJcbiAgICAgIGNvbG9yOiAnIzAwMDAwMCcsXHJcbiAgICAgIGJveFNoYWRvdzogJzAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDYpJyxcclxuICAgICAgcHk6IDMsXHJcbiAgICAgICduZXYgPiBhJzoge1xyXG4gICAgICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY29udGFpbmVyOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgfSxcclxuICBuYXY6IHtcclxuICAgIG14OiAnYXV0bycsXHJcbiAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSc6IHtcclxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgIH0sXHJcbiAgICBhOiB7XHJcbiAgICAgIGZvbnRTaXplOiAyLFxyXG4gICAgICBmb250V2VpZ2h0OiAnYm9keScsXHJcbiAgICAgIHB4OiA1LFxyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgbGluZUhlaWdodDogJzEuMicsXHJcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4xNXMnLFxyXG4gICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgICB9LFxyXG4gICAgICAnJi5hY3RpdmUnOiB7XHJcbiAgICAgICAgY29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==