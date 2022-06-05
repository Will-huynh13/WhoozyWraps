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
  path: '/',
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
      fontSize: 14,
      mr: '15px',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL21vYmlsZS1kcmF3ZXIuanMiXSwibmFtZXMiOlsic29jaWFsIiwicGF0aCIsImljb24iLCJNb2JpbGVEcmF3ZXIiLCJ1c2VTdGF0ZSIsImlzRHJhd2VyT3BlbiIsInNldElzRHJhd2VyT3BlbiIsInN0eWxlcyIsImhhbmRsZXIiLCJwcmV2U3RhdGUiLCJkcmF3ZXIiLCJjbG9zZSIsImNvbnRlbnQiLCJtZW51IiwibWVudUl0ZW1zIiwibWFwIiwiaSIsImxhYmVsIiwibWVudUZvb3RlciIsInNvY2lhbEl0ZW0iLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZmxleFNocmluayIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwicG9zaXRpb24iLCJ0b3AiLCJyaWdodCIsInpJbmRleCIsImN1cnNvciIsImZsZXhEaXJlY3Rpb24iLCJwdCIsInBiIiwicHgiLCJhIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiY29sb3IiLCJweSIsImJvcmRlckJvdHRvbSIsInRyYW5zaXRpb24iLCJtdCIsIm1yIiwiYnV0dG9uIiwiZnciLCJib3JkZXJSYWRpdXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUcsQ0FDYjtBQUNFQyxNQUFJLEVBQUUsR0FEUjtBQUVFQyxNQUFJLEVBQUUsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRlIsQ0FEYSxFQUtiO0FBQ0VELE1BQUksRUFBRSxHQURSO0FBRUVDLE1BQUksRUFBRSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGUixDQUxhLENBQWY7QUFXZSxTQUFTQyxZQUFULEdBQXdCO0FBQUE7O0FBQUE7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YnJCLFlBQVUsRUFBRTtBQUNWTSxTQUFLLEVBQUUsTUFERztBQUVWSixXQUFPLEVBQUUsTUFGQztBQUdWWSxpQkFBYSxFQUFFLFFBSEw7QUFJVlgsY0FBVSxFQUFFLFFBSkY7QUFLVnNCLE1BQUUsRUFBRTtBQUxNLEdBN0RDO0FBcUViM0MsUUFBTSxFQUFFO0FBQ053QixTQUFLLEVBQUUsTUFERDtBQUVOSixXQUFPLEVBQUUsTUFGSDtBQUdOQyxjQUFVLEVBQUUsUUFITjtBQUlOQyxrQkFBYyxFQUFFLFFBSlY7QUFNTnBCLFFBQUksRUFBRTtBQUNKa0IsYUFBTyxFQUFFLE1BREw7QUFFSkMsZ0JBQVUsRUFBRSxRQUZSO0FBR0pDLG9CQUFjLEVBQUUsUUFIWjtBQUlKaUIsV0FBSyxFQUFFLE1BSkg7QUFLSkYsY0FBUSxFQUFFLEVBTE47QUFNSk8sUUFBRSxFQUFFLE1BTkE7QUFPSkYsZ0JBQVUsRUFBRSxXQVBSO0FBUUpYLFlBQU0sRUFBRSxTQVJKO0FBU0oscUJBQWU7QUFDYmEsVUFBRSxFQUFFO0FBRFMsT0FUWDtBQVlKLGlCQUFXO0FBQ1RMLGFBQUssRUFBRTtBQURFO0FBWlA7QUFOQSxHQXJFSztBQTZGYk0sUUFBTSxFQUFFO0FBQ05OLFNBQUssRUFBRSxPQUREO0FBRU5GLFlBQVEsRUFBRSxNQUZKO0FBR05TLE1BQUUsRUFBRSxLQUhFO0FBSU5yQixVQUFNLEVBQUUsTUFKRjtBQUtOc0IsZ0JBQVksRUFBRSxLQUxSO0FBTU5oQixVQUFNLEVBQUUsU0FORjtBQU9OUCxTQUFLLEVBQUUsTUFQRDtBQVFOSixXQUFPLEVBQUUsTUFSSDtBQVNOQyxjQUFVLEVBQUUsUUFUTjtBQVVOQyxrQkFBYyxFQUFFLFFBVlY7QUFXTmtCLE1BQUUsRUFBRTtBQVhFO0FBN0ZLLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODIxODQ5NzNjMWFhMjhhMTk0YzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm94IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBTY3JvbGxiYXJzIH0gZnJvbSAncmVhY3QtY3VzdG9tLXNjcm9sbGJhcnMnO1xyXG5pbXBvcnQgRHJhd2VyIGZyb20gJ2NvbXBvbmVudHMvZHJhd2VyJztcclxuaW1wb3J0IHsgSW9NZENsb3NlLCBJb01kTWVudSB9IGZyb20gJ3JlYWN0LWljb25zL2lvJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXNjcm9sbCc7XHJcbmltcG9ydCB7IEZhRmFjZWJvb2tGLCBGYUluc3RhZ3JhbVNxdWFyZX0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5pbXBvcnQgbWVudUl0ZW1zIGZyb20gJy4vaGVhZGVyLmRhdGEnO1xyXG5cclxuY29uc3Qgc29jaWFsID0gW1xyXG4gIHtcclxuICAgIHBhdGg6ICcvJyxcclxuICAgIGljb246IDxGYUZhY2Vib29rRiAvPixcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcvJyxcclxuICAgIGljb246IDxGYUluc3RhZ3JhbVNxdWFyZS8+LFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2JpbGVEcmF3ZXIoKSB7XHJcbiAgY29uc3QgW2lzRHJhd2VyT3Blbiwgc2V0SXNEcmF3ZXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIHJldHVybiAoXHJcbiAgICA8RHJhd2VyXHJcbiAgICB3aWR0aD1cIjMyMHB4XCJcclxuICAgIGRyYXdlckhhbmRsZXI9e1xyXG4gICAgICA8Qm94IHN4ID0ge3N0eWxlcy5oYW5kbGVyfT5cclxuICAgICAgICA8SW9NZE1lbnUgc2l6ZSA9XCIyNnB4XCIgLz5cclxuICAgICAgPC9Cb3g+XHJcbiAgICB9XHJcbiAgICBvcGVuID0ge2lzRHJhd2VyT3Blbn1cclxuICAgIHRvZ2dsZUhhbmRsZXIgPSB7KCkgPT4gc2V0SXNEcmF3ZXJPcGVuKChwcmV2U3RhdGUpID0+ICFwcmV2U3RhdGUpfVxyXG4gICAgY2xvc2VCdXR0b249ezxJb01kQ2xvc2Ugc2l6ZSA9IFwiMjRweFwiIGNvbG9yID0gXCIjMDAwMDAwXCIvPn1cclxuICAgIGRyYXdlclN0eWxlPXtzdHlsZXMuZHJhd2VyfVxyXG4gICAgY2xvc2VCdG5TdHlsZT17c3R5bGVzLmNsb3NlfVxyXG4gICAgPlxyXG4gICAgICA8U2Nyb2xsYmFycyBhdXRvSGlkZT5cclxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICA8Qm94IHN4ID17c3R5bGVzLm1lbnV9PlxyXG4gICAgICAgICAge21lbnVJdGVtcy5tYXAoKG1lbnVJdGVtcywgaSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICB0bz17bWVudUl0ZW1zLnBhdGh9XHJcbiAgICAgICAgICAgICAgICBzcHk9IHt0cnVlfVxyXG4gICAgICAgICAgICAgICAgc21vb3RoID0ge3RydWV9XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQ9IHstNzB9XHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbiA9ezUwMH1cclxuICAgICAgICAgICAgICAgIGtleSA9IHtpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHttZW51SXRlbXMubGFiZWx9XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPEJveCBzeCA9e3N0eWxlcy5tZW51Rm9vdGVyfT5cclxuICAgICAgICAgICAgPEJveCBzeCA9e3N0eWxlcy5zb2NpYWx9PlxyXG4gICAgICAgICAgICAgIHtzb2NpYWwubWFwKChzb2NpYWxJdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8Qm94IGFzPVwic3BhblwiIGtleT17aX0gc3g9e3N0eWxlcy5zb2NpYWwuaWNvbn0+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIHRvID17c29jaWFsSXRlbS5wYXRofT57c29jaWFsSXRlbS5pY29ufTwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9TY3JvbGxiYXJzPlxyXG4gICAgPC9EcmF3ZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBoYW5kbGVyOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIGZsZXhTaHJpbms6ICcwJyxcclxuICAgIHdpZHRoOiAnMjZweCcsXHJcblxyXG4gICAgJ0BtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCknOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdub25lJyxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgZHJhd2VyOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdkYXJrJyxcclxuICB9LFxyXG5cclxuICBjbG9zZToge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHRvcDogJzI1cHgnLFxyXG4gICAgcmlnaHQ6ICczMHB4JyxcclxuICAgIHpJbmRleDogJzEnLFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgfSxcclxuXHJcbiAgY29udGVudDoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBwdDogJzEwMHB4JyxcclxuICAgIHBiOiAnNDBweCcsXHJcbiAgICBweDogJzMwcHgnLFxyXG4gIH0sXHJcblxyXG4gIG1lbnU6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGE6IHtcclxuICAgICAgZm9udFNpemU6ICcxNnB4JyxcclxuICAgICAgZm9udFdlaWdodDogJzUwMCcsXHJcbiAgICAgIGNvbG9yOiAndGV4dF93aGl0ZScsXHJcbiAgICAgIHB5OiAnMTVweCcsXHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQgI2U4ZTVlNScsXHJcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4yNXMnLFxyXG4gICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICBjb2xvcjogJ3NlY29uZGFyeScsXHJcbiAgICAgIH0sXHJcbiAgICAgICcmLmFjdGl2ZSc6IHtcclxuICAgICAgICBjb2xvcjogJ3NlY29uZGFyeScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIG1lbnVGb290ZXI6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgbXQ6ICdhdXRvJyxcclxuICB9LFxyXG5cclxuICBzb2NpYWw6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuXHJcbiAgICBpY29uOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgY29sb3I6ICd0ZXh0JyxcclxuICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgICBtcjogJzE1cHgnLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzJyxcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICc6bGFzdC1jaGlsZCc6IHtcclxuICAgICAgICBtcjogJzAnLFxyXG4gICAgICB9LFxyXG4gICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICBjb2xvcjogJ3NlY29uZGFyeScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIGJ1dHRvbjoge1xyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBmb250U2l6ZTogJzE0cHgnLFxyXG4gICAgZnc6ICc3MDAnLFxyXG4gICAgaGVpZ2h0OiAnNDVweCcsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBweTogJzAnLFxyXG4gIH0sXHJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==