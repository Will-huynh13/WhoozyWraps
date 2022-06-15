webpackHotUpdate_N_E("pages/index",{

/***/ "./src/assets/feature/partnership.svg":
false,

/***/ "./src/assets/feature/performance.svg":
false,

/***/ "./src/assets/feature/subscription.svg":
false,

/***/ "./src/assets/feature/support.svg":
false,

/***/ "./src/components/feature-card.js":
false,

/***/ "./src/sections/feature.js":
/*!*********************************!*\
  !*** ./src/sections/feature.js ***!
  \*********************************/
/*! exports provided: default, getInsta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Feature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInsta", function() { return getInsta; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");


var _jsxFileName = "C:\\Users\\Will's Gaming PC\\Documents\\Development\\WhoozyWraps\\src\\sections\\feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

/** @jsx jsx */



function Feature(feed) {
  var _this = this;

  console.log(feed);
  var images = feed.data;
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])("section", {
    sx: {
      variant: 'section.feature'
    },
    id: "gallery",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 6
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    slogan: "Recent works",
    title: "Here are some examples of our work!",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 8
    }
  })), images && images.map(function (image) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
      key: images.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])("img", {
      src: image.media_url,
      alt: image.caption,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 15
      }
    }));
  }));
}
_c = Feature;
var getInsta = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var url, data, feed;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = 'https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=IGQVJVLWptdEpqRWlxOGNhOGd3bHIxQmZA2MUxDOU1EbVVoMHlWaGRIdklObl81dDMxRmdIeUsxdU11eFRyNXgtUE5WbDZAoMDJGc2ZAXQmw0Qmp0cnl6REg2LXRwb3NqRl9NUU5Iam9nQjdGZAzFXVkpvYgZDZD';
            _context.next = 3;
            return fetch(url);

          case 3:
            data = _context.sent;
            _context.next = 6;
            return data.json();

          case 6:
            feed = _context.sent;
            return _context.abrupt("return", {
              props: {
                feed: feed
              }
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getInsta() {
    return _ref.apply(this, arguments);
  };
}();
var styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: ['40px 0', null, '45px 30px', null, '60px 50px', '70px 50px', null, '80px 90px'],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)']
  }
};

var _c;

$RefreshReg$(_c, "Feature");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2ZlYXR1cmUuanMiXSwibmFtZXMiOlsiRmVhdHVyZSIsImZlZWQiLCJjb25zb2xlIiwibG9nIiwiaW1hZ2VzIiwiZGF0YSIsInZhcmlhbnQiLCJtYXAiLCJpbWFnZSIsImlkIiwibWVkaWFfdXJsIiwiY2FwdGlvbiIsImdldEluc3RhIiwidXJsIiwiZmV0Y2giLCJqc29uIiwicHJvcHMiLCJzdHlsZXMiLCJncmlkIiwicHQiLCJweCIsImdyaWRHYXAiLCJncmlkVGVtcGxhdGVDb2x1bW5zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsT0FBVCxDQUFpQkMsSUFBakIsRUFBdUI7QUFBQTs7QUFDcENDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0EsTUFBTUcsTUFBTSxHQUFHSCxJQUFJLENBQUNJLElBQXBCO0FBQ0EsU0FDRTtBQUFTLE1BQUUsRUFBRTtBQUFDQyxhQUFPLEVBQUU7QUFBVixLQUFiO0FBQTJDLE1BQUUsRUFBRSxTQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MscURBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLGlFQUFEO0FBQ0UsVUFBTSxFQUFDLGNBRFQ7QUFFRSxTQUFLLEVBQUMscUNBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREQsRUFTRUYsTUFBTSxJQUFJQSxNQUFNLENBQUNHLEdBQVAsQ0FBVyxVQUFBQyxLQUFLO0FBQUEsV0FDcEI7QUFBSyxTQUFHLEVBQUVKLE1BQU0sQ0FBQ0ssRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssU0FBRyxFQUFHRCxLQUFLLENBQUNFLFNBQWpCO0FBQTRCLFNBQUcsRUFBRUYsS0FBSyxDQUFDRyxPQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FEb0I7QUFBQSxHQUFoQixDQVRaLENBREY7QUFpQkQ7S0FwQnVCWCxPO0FBc0JqQixJQUFNWSxRQUFRO0FBQUEsOExBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2pCQyxlQURpQixHQUNYLCtRQURXO0FBQUE7QUFBQSxtQkFFSkMsS0FBSyxDQUFDRCxHQUFELENBRkQ7O0FBQUE7QUFFakJSLGdCQUZpQjtBQUFBO0FBQUEsbUJBR0pBLElBQUksQ0FBQ1UsSUFBTCxFQUhJOztBQUFBO0FBR2pCZCxnQkFIaUI7QUFBQSw2Q0FJakI7QUFDSmUsbUJBQUssRUFBQztBQUNKZixvQkFBSSxFQUFKQTtBQURJO0FBREYsYUFKaUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSjs7QUFBQSxrQkFBUlcsUUFBUTtBQUFBO0FBQUE7QUFBQSxHQUFkO0FBVVAsSUFBTUssTUFBTSxHQUFHO0FBQ2JDLE1BQUksRUFBRTtBQUNKQyxNQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLElBQVYsRUFBZ0IsSUFBaEIsRUFBc0IsSUFBdEIsRUFBNEIsSUFBNUIsRUFBa0MsQ0FBbEMsQ0FEQTtBQUVKQyxNQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxJQUFWLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLENBRkE7QUFHSkMsV0FBTyxFQUFFLENBQ1AsUUFETyxFQUVQLElBRk8sRUFHUCxXQUhPLEVBSVAsSUFKTyxFQUtQLFdBTE8sRUFNUCxXQU5PLEVBT1AsSUFQTyxFQVFQLFdBUk8sQ0FITDtBQWFKQyx1QkFBbUIsRUFBRSxDQUFDLGVBQUQsRUFBa0IsSUFBbEIsRUFBd0IsZUFBeEI7QUFiakI7QUFETyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjVjODE5NDIwYzIwYTdlODQ4ZTlkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEdyaWQgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmVhdHVyZShmZWVkKSB7XHJcbiAgY29uc29sZS5sb2coZmVlZClcclxuICBjb25zdCBpbWFnZXMgPSBmZWVkLmRhdGE7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIHN4PXt7dmFyaWFudDogJ3NlY3Rpb24uZmVhdHVyZSd9fSBpZCA9XCJnYWxsZXJ5XCI+XHJcbiAgICAgPENvbnRhaW5lcj5cclxuICAgICAgIDxTZWN0aW9uSGVhZGVyXHJcbiAgICAgICAgIHNsb2dhbj1cIlJlY2VudCB3b3Jrc1wiXHJcbiAgICAgICAgIHRpdGxlPVwiSGVyZSBhcmUgc29tZSBleGFtcGxlcyBvZiBvdXIgd29yayFcIlxyXG4gICAgICAgICAvPlxyXG4gICAgICAgIHsvKiA8R3JpZCBzeD17c3R5bGVzLmdyaWR9PiAqL31cclxuICAgICAgICB7LyogPC9HcmlkPiAqL31cclxuICAgICA8L0NvbnRhaW5lcj5cclxuICAgICB7aW1hZ2VzICYmIGltYWdlcy5tYXAoaW1hZ2UgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17aW1hZ2VzLmlkfT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYyA9e2ltYWdlLm1lZGlhX3VybH0gYWx0PXtpbWFnZS5jYXB0aW9ufS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0SW5zdGEgID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHVybCA9ICdodHRwczovL2dyYXBoLmluc3RhZ3JhbS5jb20vbWUvbWVkaWE/ZmllbGRzPWlkLGNhcHRpb24sbWVkaWFfdXJsLHRpbWVzdGFtcCxtZWRpYV90eXBlLHBlcm1hbGluayZhY2Nlc3NfdG9rZW49SUdRVkpWTFdwdGRFcHFSV2x4T0dOaE9HZDNiSEl4UW1aQTJNVXhET1UxRWJWVm9NSGxXYUdSSWRrbE9ibDgxZERNeFJtZEllVXN4ZFUxMWVGUnlOWGd0VUU1V2JEWkFvTURKR2MyWkFYUW13MFFtcDBjbmw2UkVnMkxYUndiM05xUmw5TlVVNUlhbTluUWpkR1pBekZYVmtwdllnWkRaRCdcclxuICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICBjb25zdCBmZWVkID0gYXdhaXQgZGF0YS5qc29uKCk7XHJcbiAgcmV0dXJue1xyXG4gICAgcHJvcHM6e1xyXG4gICAgICBmZWVkXHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgZ3JpZDoge1xyXG4gICAgcHQ6IFswLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAyXSxcclxuICAgIHB4OiBbNSwgNiwgMCwgbnVsbCwgNywgOCwgN10sXHJcbiAgICBncmlkR2FwOiBbXHJcbiAgICAgICc0MHB4IDAnLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnNDVweCAzMHB4JyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJzYwcHggNTBweCcsXHJcbiAgICAgICc3MHB4IDUwcHgnLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnODBweCA5MHB4JyxcclxuICAgIF0sXHJcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbJ3JlcGVhdCgxLDFmciknLCBudWxsLCAncmVwZWF0KDIsMWZyKSddLFxyXG4gIH0sXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=