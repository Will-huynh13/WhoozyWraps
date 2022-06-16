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
            console.log('hello');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2ZlYXR1cmUuanMiXSwibmFtZXMiOlsiZ2V0U3RhdGljUHJvcHMiLCJ1cmwiLCJwcm9jZXNzIiwiZW52IiwiSU5TVEFHUkFNX0tFWSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJmZWVkIiwiY29uc29sZSIsImxvZyIsInByb3BzIiwiaW5zdGEiLCJGZWF0dXJlIiwiaW1hZ2VzIiwidmFyaWFudCIsInN0eWxlcyIsImdyaWQiLCJtYXAiLCJpbWFnZSIsImlkIiwibWVkaWFfdXJsIiwiY2FwdGlvbiIsInB0IiwicHgiLCJncmlkR2FwIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLGNBQWM7QUFBQSw4TEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDdEJDLGVBRHNCLDhIQUUxQkMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGFBRmM7QUFBQTtBQUFBLG1CQUdUQyxLQUFLLENBQUNKLEdBQUQsQ0FISTs7QUFBQTtBQUd0QkssZ0JBSHNCO0FBQUE7QUFBQSxtQkFJVEEsSUFBSSxDQUFDQyxJQUFMLEVBSlM7O0FBQUE7QUFJdEJDLGdCQUpzQjtBQUs1QkMsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFMNEIsNkNBTXJCO0FBQ0xDLG1CQUFLLEVBQUU7QUFDTEMscUJBQUssRUFBRUo7QUFERjtBQURGLGFBTnFCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWRSLGNBQWM7QUFBQTtBQUFBO0FBQUEsR0FBcEI7QUFjQSxTQUFTYSxPQUFULENBQWlCRCxLQUFqQixFQUF3QjtBQUFBOztBQUM3QixNQUFNRSxNQUFNLEdBQUdGLEtBQUssQ0FBQ04sSUFBckI7QUFDQUcsU0FBTyxDQUFDQyxHQUFSLENBQVlFLEtBQVo7QUFDQSxTQUNFO0FBQVMsTUFBRSxFQUFFO0FBQUNHLGFBQU8sRUFBRTtBQUFWLEtBQWI7QUFBMkMsTUFBRSxFQUFFLFNBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxxREFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsaUVBQUQ7QUFDRSxVQUFNLEVBQUMsY0FEVDtBQUVFLFNBQUssRUFBQyxxQ0FGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFLRyxxREFBQyw2Q0FBRDtBQUFNLE1BQUUsRUFBRUMsTUFBTSxDQUFDQyxJQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ1FILE1BQU0sSUFBSUEsTUFBTSxDQUFDSSxHQUFQLENBQVcsVUFBQUMsS0FBSztBQUFBLFdBQzNCO0FBQUssU0FBRyxFQUFFTCxNQUFNLENBQUNNLEVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSztBQUFLLFNBQUcsRUFBR0QsS0FBSyxDQUFDRSxTQUFqQjtBQUE0QixTQUFHLEVBQUVGLEtBQUssQ0FBQ0csT0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURMLENBRDJCO0FBQUEsR0FBaEIsQ0FEbEIsQ0FMSCxDQURELENBREY7QUFpQkQ7S0FwQmVULE87QUF1QmhCLElBQU1HLE1BQU0sR0FBRztBQUNiQyxNQUFJLEVBQUU7QUFDSk0sTUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxJQUFWLEVBQWdCLElBQWhCLEVBQXNCLElBQXRCLEVBQTRCLElBQTVCLEVBQWtDLENBQWxDLENBREE7QUFFSkMsTUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsSUFBVixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixDQUZBO0FBR0pDLFdBQU8sRUFBRSxDQUNQLFFBRE8sRUFFUCxJQUZPLEVBR1AsV0FITyxFQUlQLElBSk8sRUFLUCxXQUxPLEVBTVAsV0FOTyxFQU9QLElBUE8sRUFRUCxXQVJPLENBSEw7QUFhSkMsdUJBQW1CLEVBQUUsQ0FBQyxlQUFELEVBQWtCLElBQWxCLEVBQXdCLGVBQXhCO0FBYmpCO0FBRE8sQ0FBZjtBQWtCZWIsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDE1MTk1NDFhZTRmNTYzZmY5NDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgR3JpZCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSAnY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlcic7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vZ3JhcGguaW5zdGFncmFtLmNvbS9tZS9tZWRpYT9maWVsZHM9aWQsY2FwdGlvbixtZWRpYV91cmwsdGltZXN0YW1wLG1lZGlhX3R5cGUscGVybWFsaW5rJmFjY2Vzc190b2tlbj1cclxuICAke3Byb2Nlc3MuZW52LklOU1RBR1JBTV9LRVl9YDtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2godXJsKVxyXG4gIGNvbnN0IGZlZWQgPSBhd2FpdCBkYXRhLmpzb24oKVxyXG4gIGNvbnNvbGUubG9nKCdoZWxsbycpXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGluc3RhOiBmZWVkLFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBGZWF0dXJlKGluc3RhKSB7XHJcbiAgY29uc3QgaW1hZ2VzID0gaW5zdGEuZGF0YTtcclxuICBjb25zb2xlLmxvZyhpbnN0YSlcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gc3g9e3t2YXJpYW50OiAnc2VjdGlvbi5mZWF0dXJlJ319IGlkID1cImdhbGxlcnlcIj5cclxuICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgPFNlY3Rpb25IZWFkZXJcclxuICAgICAgICAgc2xvZ2FuPVwiUmVjZW50IHdvcmtzXCJcclxuICAgICAgICAgdGl0bGU9XCJIZXJlIGFyZSBzb21lIGV4YW1wbGVzIG9mIG91ciB3b3JrIVwiXHJcbiAgICAgICAgIC8+XHJcbiAgICAgICAgPEdyaWQgc3g9e3N0eWxlcy5ncmlkfT5cclxuICAgICAgICAgICAgICAge2ltYWdlcyAmJiBpbWFnZXMubWFwKGltYWdlID0+IChcclxuICAgICAgICAgICAgICAgPGRpdiBrZXk9e2ltYWdlcy5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmMgPXtpbWFnZS5tZWRpYV91cmx9IGFsdD17aW1hZ2UuY2FwdGlvbn0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgPC9HcmlkPlxyXG4gICAgIDwvQ29udGFpbmVyPlxyXG4gICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBncmlkOiB7XHJcbiAgICBwdDogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDJdLFxyXG4gICAgcHg6IFs1LCA2LCAwLCBudWxsLCA3LCA4LCA3XSxcclxuICAgIGdyaWRHYXA6IFtcclxuICAgICAgJzQwcHggMCcsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICc0NXB4IDMwcHgnLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnNjBweCA1MHB4JyxcclxuICAgICAgJzcwcHggNTBweCcsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICc4MHB4IDkwcHgnLFxyXG4gICAgXSxcclxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFsncmVwZWF0KDEsMWZyKScsIG51bGwsICdyZXBlYXQoMiwxZnIpJ10sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmUiXSwic291cmNlUm9vdCI6IiJ9