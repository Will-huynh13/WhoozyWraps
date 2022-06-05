webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/header/mobile-drawer.js":
/*!************************************************!*\
  !*** ./src/components/header/mobile-drawer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MobileDrawer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-custom-scrollbars */ "./node_modules/react-custom-scrollbars/lib/index.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/drawer */ "./src/components/drawer.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _header_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header.data */ "./src/components/header/header.data.js");
var _jsxFileName = "C:\\Users\\Will's Gaming PC\\Documents\\Development\\WhoozyWraps\\src\\components\\header\\mobile-drawer.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var social = [{
  path: 'https://www.facebook.com/WhoozysWraps',
  icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaFacebookF"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  })
}, {
  path: '/',
  icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaInstagramSquare"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  })
}];
function MobileDrawer() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isDrawerOpen = _useState[0],
      setIsDrawerOpen = _useState[1];

  return __jsx(components_drawer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: "320px",
    drawerHandler: __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      sx: styles.handler,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 7
      }
    }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoMdMenu"], {
      size: "26px",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }
    })),
    open: isDrawerOpen,
    toggleHandler: function toggleHandler() {
      return setIsDrawerOpen(function (prevState) {
        return !prevState;
      });
    },
    closeButton: __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoMdClose"], {
      size: "24px",
      color: "#000000",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 18
      }
    }),
    drawerStyle: styles.drawer,
    closeBtnStyle: styles.close,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__["Scrollbars"], {
    autoHide: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.menu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, _header_data__WEBPACK_IMPORTED_MODULE_7__["default"].map(function (menuItems, i) {
    return __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      activeClass: "active",
      to: menuItems.path,
      spy: true,
      smooth: true,
      offset: -70,
      duration: 500,
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 15
      }
    }, menuItems.label);
  })), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.menuFooter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.social,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, social.map(function (socialItem, i) {
    return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      as: "span",
      key: i,
      sx: styles.social.icon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }
    }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      to: socialItem.path,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 19
      }
    }, socialItem.icon));
  }))))));
}

_s(MobileDrawer, "t28cAGpFqiK0sX63aU+U7uaWhmM=");

_c = MobileDrawer;
;
var styles = {
  handler: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
    width: '26px',
    '@media screen and (min-width: 1024px)': {
      display: 'none'
    }
  },
  drawer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'dark'
  },
  close: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '25px',
    right: '30px',
    zIndex: '1',
    cursor: 'pointer'
  },
  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    pt: '100px',
    pb: '40px',
    px: '30px'
  },
  menu: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    a: {
      fontSize: '16px',
      fontWeight: '500',
      color: 'text_white',
      py: '15px',
      cursor: 'pointer',
      borderBottom: '1px solid #e8e5e5',
      transition: 'all 0.25s',
      '&:hover': {
        color: 'secondary'
      },
      '&.active': {
        color: 'secondary'
      }
    }
  },
  menuFooter: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: 'auto'
  },
  social: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    icon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'text',
      fontSize: 30,
      mr: '30px',
      transition: 'all 0.25s',
      cursor: 'pointer',
      ':last-child': {
        mr: '0'
      },
      '&:hover': {
        color: 'secondary'
      }
    }
  },
  button: {
    color: 'white',
    fontSize: '14px',
    fw: '700',
    height: '45px',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    py: '0'
  }
};

var _c;

$RefreshReg$(_c, "MobileDrawer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL21vYmlsZS1kcmF3ZXIuanMiXSwibmFtZXMiOlsic29jaWFsIiwicGF0aCIsImljb24iLCJNb2JpbGVEcmF3ZXIiLCJ1c2VTdGF0ZSIsImlzRHJhd2VyT3BlbiIsInNldElzRHJhd2VyT3BlbiIsInN0eWxlcyIsImhhbmRsZXIiLCJwcmV2U3RhdGUiLCJkcmF3ZXIiLCJjbG9zZSIsImNvbnRlbnQiLCJtZW51IiwibWVudUl0ZW1zIiwibWFwIiwiaSIsImxhYmVsIiwibWVudUZvb3RlciIsInNvY2lhbEl0ZW0iLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZmxleFNocmluayIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwicG9zaXRpb24iLCJ0b3AiLCJyaWdodCIsInpJbmRleCIsImN1cnNvciIsImZsZXhEaXJlY3Rpb24iLCJwdCIsInBiIiwicHgiLCJhIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiY29sb3IiLCJweSIsImJvcmRlckJvdHRvbSIsInRyYW5zaXRpb24iLCJtdCIsIm1yIiwiYnV0dG9uIiwiZnciLCJib3JkZXJSYWRpdXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUcsQ0FDYjtBQUNFQyxNQUFJLEVBQUUsdUNBRFI7QUFFRUMsTUFBSSxFQUFFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZSLENBRGEsRUFLYjtBQUNFRCxNQUFJLEVBQUUsR0FEUjtBQUVFQyxNQUFJLEVBQUUsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRlIsQ0FMYSxDQUFmO0FBV2UsU0FBU0MsWUFBVCxHQUF3QjtBQUFBOztBQUFB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RGJyQixZQUFVLEVBQUU7QUFDVk0sU0FBSyxFQUFFLE1BREc7QUFFVkosV0FBTyxFQUFFLE1BRkM7QUFHVlksaUJBQWEsRUFBRSxRQUhMO0FBSVZYLGNBQVUsRUFBRSxRQUpGO0FBS1ZzQixNQUFFLEVBQUU7QUFMTSxHQTdEQztBQXFFYjNDLFFBQU0sRUFBRTtBQUNOd0IsU0FBSyxFQUFFLE1BREQ7QUFFTkosV0FBTyxFQUFFLE1BRkg7QUFHTkMsY0FBVSxFQUFFLFFBSE47QUFJTkMsa0JBQWMsRUFBRSxRQUpWO0FBTU5wQixRQUFJLEVBQUU7QUFDSmtCLGFBQU8sRUFBRSxNQURMO0FBRUpDLGdCQUFVLEVBQUUsUUFGUjtBQUdKQyxvQkFBYyxFQUFFLFFBSFo7QUFJSmlCLFdBQUssRUFBRSxNQUpIO0FBS0pGLGNBQVEsRUFBRSxFQUxOO0FBTUpPLFFBQUUsRUFBRSxNQU5BO0FBT0pGLGdCQUFVLEVBQUUsV0FQUjtBQVFKWCxZQUFNLEVBQUUsU0FSSjtBQVNKLHFCQUFlO0FBQ2JhLFVBQUUsRUFBRTtBQURTLE9BVFg7QUFZSixpQkFBVztBQUNUTCxhQUFLLEVBQUU7QUFERTtBQVpQO0FBTkEsR0FyRUs7QUE2RmJNLFFBQU0sRUFBRTtBQUNOTixTQUFLLEVBQUUsT0FERDtBQUVORixZQUFRLEVBQUUsTUFGSjtBQUdOUyxNQUFFLEVBQUUsS0FIRTtBQUlOckIsVUFBTSxFQUFFLE1BSkY7QUFLTnNCLGdCQUFZLEVBQUUsS0FMUjtBQU1OaEIsVUFBTSxFQUFFLFNBTkY7QUFPTlAsU0FBSyxFQUFFLE1BUEQ7QUFRTkosV0FBTyxFQUFFLE1BUkg7QUFTTkMsY0FBVSxFQUFFLFFBVE47QUFVTkMsa0JBQWMsRUFBRSxRQVZWO0FBV05rQixNQUFFLEVBQUU7QUFYRTtBQTdGSyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmZiYmMyYmZmYWRiY2ZmOGY4NzFiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgU2Nyb2xsYmFycyB9IGZyb20gJ3JlYWN0LWN1c3RvbS1zY3JvbGxiYXJzJztcclxuaW1wb3J0IERyYXdlciBmcm9tICdjb21wb25lbnRzL2RyYXdlcic7XHJcbmltcG9ydCB7IElvTWRDbG9zZSwgSW9NZE1lbnUgfSBmcm9tICdyZWFjdC1pY29ucy9pbyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1zY3JvbGwnO1xyXG5pbXBvcnQgeyBGYUZhY2Vib29rRiwgRmFJbnN0YWdyYW1TcXVhcmV9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuaW1wb3J0IG1lbnVJdGVtcyBmcm9tICcuL2hlYWRlci5kYXRhJztcclxuXHJcbmNvbnN0IHNvY2lhbCA9IFtcclxuICB7XHJcbiAgICBwYXRoOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL1dob296eXNXcmFwcycsXHJcbiAgICBpY29uOiA8RmFGYWNlYm9va0YgLz4sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnLycsXHJcbiAgICBpY29uOiA8RmFJbnN0YWdyYW1TcXVhcmUvPixcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9iaWxlRHJhd2VyKCkge1xyXG4gIGNvbnN0IFtpc0RyYXdlck9wZW4sIHNldElzRHJhd2VyT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICByZXR1cm4gKFxyXG4gICAgPERyYXdlclxyXG4gICAgd2lkdGg9XCIzMjBweFwiXHJcbiAgICBkcmF3ZXJIYW5kbGVyPXtcclxuICAgICAgPEJveCBzeCA9IHtzdHlsZXMuaGFuZGxlcn0+XHJcbiAgICAgICAgPElvTWRNZW51IHNpemUgPVwiMjZweFwiIC8+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgfVxyXG4gICAgb3BlbiA9IHtpc0RyYXdlck9wZW59XHJcbiAgICB0b2dnbGVIYW5kbGVyID0geygpID0+IHNldElzRHJhd2VyT3BlbigocHJldlN0YXRlKSA9PiAhcHJldlN0YXRlKX1cclxuICAgIGNsb3NlQnV0dG9uPXs8SW9NZENsb3NlIHNpemUgPSBcIjI0cHhcIiBjb2xvciA9IFwiIzAwMDAwMFwiLz59XHJcbiAgICBkcmF3ZXJTdHlsZT17c3R5bGVzLmRyYXdlcn1cclxuICAgIGNsb3NlQnRuU3R5bGU9e3N0eWxlcy5jbG9zZX1cclxuICAgID5cclxuICAgICAgPFNjcm9sbGJhcnMgYXV0b0hpZGU+XHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgPEJveCBzeCA9e3N0eWxlcy5tZW51fT5cclxuICAgICAgICAgIHttZW51SXRlbXMubWFwKChtZW51SXRlbXMsIGkpID0+IChcclxuICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgdG89e21lbnVJdGVtcy5wYXRofVxyXG4gICAgICAgICAgICAgICAgc3B5PSB7dHJ1ZX1cclxuICAgICAgICAgICAgICAgIHNtb290aCA9IHt0cnVlfVxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0PSB7LTcwfVxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb24gPXs1MDB9XHJcbiAgICAgICAgICAgICAgICBrZXkgPSB7aX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7bWVudUl0ZW1zLmxhYmVsfVxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDxCb3ggc3ggPXtzdHlsZXMubWVudUZvb3Rlcn0+XHJcbiAgICAgICAgICAgIDxCb3ggc3ggPXtzdHlsZXMuc29jaWFsfT5cclxuICAgICAgICAgICAgICB7c29jaWFsLm1hcCgoc29jaWFsSXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPEJveCBhcz1cInNwYW5cIiBrZXk9e2l9IHN4PXtzdHlsZXMuc29jaWFsLmljb259PlxyXG4gICAgICAgICAgICAgICAgICA8TGluayB0byA9e3NvY2lhbEl0ZW0ucGF0aH0+e3NvY2lhbEl0ZW0uaWNvbn08L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvU2Nyb2xsYmFycz5cclxuICAgIDwvRHJhd2VyPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgaGFuZGxlcjoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBmbGV4U2hyaW5rOiAnMCcsXHJcbiAgICB3aWR0aDogJzI2cHgnLFxyXG5cclxuICAgICdAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpJzoge1xyXG4gICAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIGRyYXdlcjoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnZGFyaycsXHJcbiAgfSxcclxuXHJcbiAgY2xvc2U6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6ICcyNXB4JyxcclxuICAgIHJpZ2h0OiAnMzBweCcsXHJcbiAgICB6SW5kZXg6ICcxJyxcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gIH0sXHJcblxyXG4gIGNvbnRlbnQ6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgcHQ6ICcxMDBweCcsXHJcbiAgICBwYjogJzQwcHgnLFxyXG4gICAgcHg6ICczMHB4JyxcclxuICB9LFxyXG5cclxuICBtZW51OiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBhOiB7XHJcbiAgICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICc1MDAnLFxyXG4gICAgICBjb2xvcjogJ3RleHRfd2hpdGUnLFxyXG4gICAgICBweTogJzE1cHgnLFxyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlOGU1ZTUnLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzJyxcclxuICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgY29sb3I6ICdzZWNvbmRhcnknLFxyXG4gICAgICB9LFxyXG4gICAgICAnJi5hY3RpdmUnOiB7XHJcbiAgICAgICAgY29sb3I6ICdzZWNvbmRhcnknLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBtZW51Rm9vdGVyOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIG10OiAnYXV0bycsXHJcbiAgfSxcclxuXHJcbiAgc29jaWFsOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcblxyXG4gICAgaWNvbjoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICAgIGZvbnRTaXplOiAzMCxcclxuICAgICAgbXI6ICczMHB4JyxcclxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cycsXHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAnOmxhc3QtY2hpbGQnOiB7XHJcbiAgICAgICAgbXI6ICcwJyxcclxuICAgICAgfSxcclxuICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgY29sb3I6ICdzZWNvbmRhcnknLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBidXR0b246IHtcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgZm9udFNpemU6ICcxNHB4JyxcclxuICAgIGZ3OiAnNzAwJyxcclxuICAgIGhlaWdodDogJzQ1cHgnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgcHk6ICcwJyxcclxuICB9LFxyXG59OyJdLCJzb3VyY2VSb290IjoiIn0=