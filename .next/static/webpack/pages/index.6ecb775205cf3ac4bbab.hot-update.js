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
            console.log(feed);
            return _context.abrupt("return", {
              props: {
                insta: feed
              }
            });

          case 9:
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
      lineNumber: 24,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 6
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    slogan: "Recent works",
    title: "Here are some examples of our work!",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 8
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    sx: styles.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, images && images.map(function (image) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
      key: images.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 16
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])("img", {
      src: image.media_url,
      alt: image.caption,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2ZlYXR1cmUuanMiXSwibmFtZXMiOlsiZ2V0U3RhdGljUHJvcHMiLCJ1cmwiLCJwcm9jZXNzIiwiZW52IiwiSU5TVEFHUkFNX0tFWSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJmZWVkIiwiY29uc29sZSIsImxvZyIsInByb3BzIiwiaW5zdGEiLCJGZWF0dXJlIiwiaW1hZ2VzIiwidmFyaWFudCIsInN0eWxlcyIsImdyaWQiLCJtYXAiLCJpbWFnZSIsImlkIiwibWVkaWFfdXJsIiwiY2FwdGlvbiIsInB0IiwicHgiLCJncmlkR2FwIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLGNBQWM7QUFBQSw4TEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDdEJDLGVBRHNCLDhIQUUxQkMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGFBRmM7QUFBQTtBQUFBLG1CQUdUQyxLQUFLLENBQUNKLEdBQUQsQ0FISTs7QUFBQTtBQUd0QkssZ0JBSHNCO0FBQUE7QUFBQSxtQkFJVEEsSUFBSSxDQUFDQyxJQUFMLEVBSlM7O0FBQUE7QUFJdEJDLGdCQUpzQjtBQUs1QkMsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBTDRCLDZDQU1yQjtBQUNMRyxtQkFBSyxFQUFFO0FBQ0xDLHFCQUFLLEVBQUVKO0FBREY7QUFERixhQU5xQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFkUixjQUFjO0FBQUE7QUFBQTtBQUFBLEdBQXBCO0FBY0EsU0FBU2EsT0FBVCxDQUFpQkQsS0FBakIsRUFBd0I7QUFBQTs7QUFDN0IsTUFBTUUsTUFBTSxHQUFHRixLQUFLLENBQUNOLElBQXJCO0FBQ0FHLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRSxLQUFaO0FBQ0EsU0FDRTtBQUFTLE1BQUUsRUFBRTtBQUFDRyxhQUFPLEVBQUU7QUFBVixLQUFiO0FBQTJDLE1BQUUsRUFBRSxTQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MscURBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLGlFQUFEO0FBQ0UsVUFBTSxFQUFDLGNBRFQ7QUFFRSxTQUFLLEVBQUMscUNBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBS0cscURBQUMsNkNBQUQ7QUFBTSxNQUFFLEVBQUVDLE1BQU0sQ0FBQ0MsSUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNRSCxNQUFNLElBQUlBLE1BQU0sQ0FBQ0ksR0FBUCxDQUFXLFVBQUFDLEtBQUs7QUFBQSxXQUMzQjtBQUFLLFNBQUcsRUFBRUwsTUFBTSxDQUFDTSxFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0s7QUFBSyxTQUFHLEVBQUdELEtBQUssQ0FBQ0UsU0FBakI7QUFBNEIsU0FBRyxFQUFFRixLQUFLLENBQUNHLE9BQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFETCxDQUQyQjtBQUFBLEdBQWhCLENBRGxCLENBTEgsQ0FERCxDQURGO0FBaUJEO0tBcEJlVCxPO0FBdUJoQixJQUFNRyxNQUFNLEdBQUc7QUFDYkMsTUFBSSxFQUFFO0FBQ0pNLE1BQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsSUFBVixFQUFnQixJQUFoQixFQUFzQixJQUF0QixFQUE0QixJQUE1QixFQUFrQyxDQUFsQyxDQURBO0FBRUpDLE1BQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLElBQVYsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsQ0FGQTtBQUdKQyxXQUFPLEVBQUUsQ0FDUCxRQURPLEVBRVAsSUFGTyxFQUdQLFdBSE8sRUFJUCxJQUpPLEVBS1AsV0FMTyxFQU1QLFdBTk8sRUFPUCxJQVBPLEVBUVAsV0FSTyxDQUhMO0FBYUpDLHVCQUFtQixFQUFFLENBQUMsZUFBRCxFQUFrQixJQUFsQixFQUF3QixlQUF4QjtBQWJqQjtBQURPLENBQWY7QUFrQmViLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZlY2I3NzUyMDVjZjNhYzRiYmFiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEdyaWQgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHVybCA9IGBodHRwczovL2dyYXBoLmluc3RhZ3JhbS5jb20vbWUvbWVkaWE/ZmllbGRzPWlkLGNhcHRpb24sbWVkaWFfdXJsLHRpbWVzdGFtcCxtZWRpYV90eXBlLHBlcm1hbGluayZhY2Nlc3NfdG9rZW49XHJcbiAgJHtwcm9jZXNzLmVudi5JTlNUQUdSQU1fS0VZfWA7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKHVybClcclxuICBjb25zdCBmZWVkID0gYXdhaXQgZGF0YS5qc29uKClcclxuICBjb25zb2xlLmxvZyhmZWVkKVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBpbnN0YTogZmVlZCxcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRmVhdHVyZShpbnN0YSkge1xyXG4gIGNvbnN0IGltYWdlcyA9IGluc3RhLmRhdGE7XHJcbiAgY29uc29sZS5sb2coaW5zdGEpXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIHN4PXt7dmFyaWFudDogJ3NlY3Rpb24uZmVhdHVyZSd9fSBpZCA9XCJnYWxsZXJ5XCI+XHJcbiAgICAgPENvbnRhaW5lcj5cclxuICAgICAgIDxTZWN0aW9uSGVhZGVyXHJcbiAgICAgICAgIHNsb2dhbj1cIlJlY2VudCB3b3Jrc1wiXHJcbiAgICAgICAgIHRpdGxlPVwiSGVyZSBhcmUgc29tZSBleGFtcGxlcyBvZiBvdXIgd29yayFcIlxyXG4gICAgICAgICAvPlxyXG4gICAgICAgIDxHcmlkIHN4PXtzdHlsZXMuZ3JpZH0+XHJcbiAgICAgICAgICAgICAgIHtpbWFnZXMgJiYgaW1hZ2VzLm1hcChpbWFnZSA9PiAoXHJcbiAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbWFnZXMuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjID17aW1hZ2UubWVkaWFfdXJsfSBhbHQ9e2ltYWdlLmNhcHRpb259Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgIDwvR3JpZD5cclxuICAgICA8L0NvbnRhaW5lcj5cclxuICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgZ3JpZDoge1xyXG4gICAgcHQ6IFswLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAyXSxcclxuICAgIHB4OiBbNSwgNiwgMCwgbnVsbCwgNywgOCwgN10sXHJcbiAgICBncmlkR2FwOiBbXHJcbiAgICAgICc0MHB4IDAnLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnNDVweCAzMHB4JyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJzYwcHggNTBweCcsXHJcbiAgICAgICc3MHB4IDUwcHgnLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnODBweCA5MHB4JyxcclxuICAgIF0sXHJcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbJ3JlcGVhdCgxLDFmciknLCBudWxsLCAncmVwZWF0KDIsMWZyKSddLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlIl0sInNvdXJjZVJvb3QiOiIifQ==