webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/feature.js":
/*!*********************************!*\
  !*** ./src/sections/feature.js ***!
  \*********************************/
/*! exports provided: getStaticProps, Feature, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Feature", function() { return Feature; });
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



var getStaticProps = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var url, data, feed;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = "https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=\n  ".concat(process.env.INSTAGRAM_KEY);
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
                insta: feed
              }
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getStaticProps() {
    return _ref.apply(this, arguments);
  };
}();
function Feature(insta) {
  var _this = this;

  var images = insta.data;
  console.log(insta);
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])("section", {
    sx: {
      variant: 'section.feature'
    },
    id: "gallery",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 6
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    slogan: "Recent works",
    title: "Here are some examples of our work!",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 8
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    sx: styles.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, images && images.map(function (image) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
      key: images.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 16
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])("img", {
      src: image.media_url,
      alt: image.caption,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 21
      }
    }));
  }))));
}
_c = Feature;
var styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: ['40px 0', null, '45px 30px', null, '60px 50px', '70px 50px', null, '80px 90px'],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)']
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Feature);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2ZlYXR1cmUuanMiXSwibmFtZXMiOlsiZ2V0U3RhdGljUHJvcHMiLCJ1cmwiLCJwcm9jZXNzIiwiZW52IiwiSU5TVEFHUkFNX0tFWSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJmZWVkIiwicHJvcHMiLCJpbnN0YSIsIkZlYXR1cmUiLCJpbWFnZXMiLCJjb25zb2xlIiwibG9nIiwidmFyaWFudCIsInN0eWxlcyIsImdyaWQiLCJtYXAiLCJpbWFnZSIsImlkIiwibWVkaWFfdXJsIiwiY2FwdGlvbiIsInB0IiwicHgiLCJncmlkR2FwIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLGNBQWM7QUFBQSw4TEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDdEJDLGVBRHNCLDhIQUUxQkMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGFBRmM7QUFBQTtBQUFBLG1CQUdUQyxLQUFLLENBQUNKLEdBQUQsQ0FISTs7QUFBQTtBQUd0QkssZ0JBSHNCO0FBQUE7QUFBQSxtQkFJVEEsSUFBSSxDQUFDQyxJQUFMLEVBSlM7O0FBQUE7QUFJdEJDLGdCQUpzQjtBQUFBLDZDQUtyQjtBQUNMQyxtQkFBSyxFQUFFO0FBQ0xDLHFCQUFLLEVBQUVGO0FBREY7QUFERixhQUxxQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFkUixjQUFjO0FBQUE7QUFBQTtBQUFBLEdBQXBCO0FBYUEsU0FBU1csT0FBVCxDQUFpQkQsS0FBakIsRUFBd0I7QUFBQTs7QUFDN0IsTUFBTUUsTUFBTSxHQUFHRixLQUFLLENBQUNKLElBQXJCO0FBQ0FPLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixLQUFaO0FBQ0EsU0FDRTtBQUFTLE1BQUUsRUFBRTtBQUFDSyxhQUFPLEVBQUU7QUFBVixLQUFiO0FBQTJDLE1BQUUsRUFBRSxTQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MscURBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLGlFQUFEO0FBQ0UsVUFBTSxFQUFDLGNBRFQ7QUFFRSxTQUFLLEVBQUMscUNBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBS0cscURBQUMsNkNBQUQ7QUFBTSxNQUFFLEVBQUVDLE1BQU0sQ0FBQ0MsSUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNRTCxNQUFNLElBQUlBLE1BQU0sQ0FBQ00sR0FBUCxDQUFXLFVBQUFDLEtBQUs7QUFBQSxXQUMzQjtBQUFLLFNBQUcsRUFBRVAsTUFBTSxDQUFDUSxFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0s7QUFBSyxTQUFHLEVBQUdELEtBQUssQ0FBQ0UsU0FBakI7QUFBNEIsU0FBRyxFQUFFRixLQUFLLENBQUNHLE9BQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFETCxDQUQyQjtBQUFBLEdBQWhCLENBRGxCLENBTEgsQ0FERCxDQURGO0FBaUJEO0tBcEJlWCxPO0FBdUJoQixJQUFNSyxNQUFNLEdBQUc7QUFDYkMsTUFBSSxFQUFFO0FBQ0pNLE1BQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsSUFBVixFQUFnQixJQUFoQixFQUFzQixJQUF0QixFQUE0QixJQUE1QixFQUFrQyxDQUFsQyxDQURBO0FBRUpDLE1BQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLElBQVYsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsQ0FGQTtBQUdKQyxXQUFPLEVBQUUsQ0FDUCxRQURPLEVBRVAsSUFGTyxFQUdQLFdBSE8sRUFJUCxJQUpPLEVBS1AsV0FMTyxFQU1QLFdBTk8sRUFPUCxJQVBPLEVBUVAsV0FSTyxDQUhMO0FBYUpDLHVCQUFtQixFQUFFLENBQUMsZUFBRCxFQUFrQixJQUFsQixFQUF3QixlQUF4QjtBQWJqQjtBQURPLENBQWY7QUFrQmVmLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljk1NTRhZjIxZDRmODBmMThiODExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEdyaWQgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHVybCA9IGBodHRwczovL2dyYXBoLmluc3RhZ3JhbS5jb20vbWUvbWVkaWE/ZmllbGRzPWlkLGNhcHRpb24sbWVkaWFfdXJsLHRpbWVzdGFtcCxtZWRpYV90eXBlLHBlcm1hbGluayZhY2Nlc3NfdG9rZW49XHJcbiAgJHtwcm9jZXNzLmVudi5JTlNUQUdSQU1fS0VZfWA7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKHVybClcclxuICBjb25zdCBmZWVkID0gYXdhaXQgZGF0YS5qc29uKClcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgaW5zdGE6IGZlZWQsXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEZlYXR1cmUoaW5zdGEpIHtcclxuICBjb25zdCBpbWFnZXMgPSBpbnN0YS5kYXRhO1xyXG4gIGNvbnNvbGUubG9nKGluc3RhKVxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBzeD17e3ZhcmlhbnQ6ICdzZWN0aW9uLmZlYXR1cmUnfX0gaWQgPVwiZ2FsbGVyeVwiPlxyXG4gICAgIDxDb250YWluZXI+XHJcbiAgICAgICA8U2VjdGlvbkhlYWRlclxyXG4gICAgICAgICBzbG9nYW49XCJSZWNlbnQgd29ya3NcIlxyXG4gICAgICAgICB0aXRsZT1cIkhlcmUgYXJlIHNvbWUgZXhhbXBsZXMgb2Ygb3VyIHdvcmshXCJcclxuICAgICAgICAgLz5cclxuICAgICAgICA8R3JpZCBzeD17c3R5bGVzLmdyaWR9PlxyXG4gICAgICAgICAgICAgICB7aW1hZ2VzICYmIGltYWdlcy5tYXAoaW1hZ2UgPT4gKFxyXG4gICAgICAgICAgICAgICA8ZGl2IGtleT17aW1hZ2VzLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYyA9e2ltYWdlLm1lZGlhX3VybH0gYWx0PXtpbWFnZS5jYXB0aW9ufS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICA8L0dyaWQ+XHJcbiAgICAgPC9Db250YWluZXI+XHJcbiAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGdyaWQ6IHtcclxuICAgIHB0OiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgMl0sXHJcbiAgICBweDogWzUsIDYsIDAsIG51bGwsIDcsIDgsIDddLFxyXG4gICAgZ3JpZEdhcDogW1xyXG4gICAgICAnNDBweCAwJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJzQ1cHggMzBweCcsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICc2MHB4IDUwcHgnLFxyXG4gICAgICAnNzBweCA1MHB4JyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJzgwcHggOTBweCcsXHJcbiAgICBdLFxyXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogWydyZXBlYXQoMSwxZnIpJywgbnVsbCwgJ3JlcGVhdCgyLDFmciknXSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZSJdLCJzb3VyY2VSb290IjoiIn0=