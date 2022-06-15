webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var components_feature_card_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/feature-card.js */ "./src/components/feature-card.js");
/* harmony import */ var assets_feature_performance_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/feature/performance.svg */ "./src/assets/feature/performance.svg");
/* harmony import */ var assets_feature_performance_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_feature_performance_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/feature/partnership.svg */ "./src/assets/feature/partnership.svg");
/* harmony import */ var assets_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/feature/subscription.svg */ "./src/assets/feature/subscription.svg");
/* harmony import */ var assets_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var assets_feature_support_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/feature/support.svg */ "./src/assets/feature/support.svg");
/* harmony import */ var assets_feature_support_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_feature_support_svg__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "C:\\Users\\Will's Gaming PC\\Documents\\Development\\WhoozyWraps\\src\\sections\\feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

/** @jsx jsx */








var data = [{
  id: 1,
  imgSrc: assets_feature_performance_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
  altText: 'Fast Performance',
  title: 'Fast Performance',
  text: 'Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world.'
}, {
  id: 2,
  imgSrc: assets_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
  altText: 'Pro Subscription',
  title: 'Pro Subscription',
  text: 'We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers.'
}, {
  id: 3,
  imgSrc: assets_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
  altText: 'Partnership deal',
  title: 'Partnership deal',
  text: 'Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world.'
}, {
  id: 4,
  imgSrc: assets_feature_support_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
  altText: 'Customer Support',
  title: 'Customer Support',
  text: 'We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers.'
}];
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
      lineNumber: 50,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 6
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    slogan: "Recent works",
    title: "Here are some examples of our work!",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 8
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    sx: styles.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, images && images.map(function (image) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
      key: images.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 13
      }
    });
  }))));
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
            console.log(feed);
            return _context.abrupt("return", {
              props: {
                feed: feed
              }
            });

          case 9:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2ZlYXR1cmUuanMiXSwibmFtZXMiOlsiZGF0YSIsImlkIiwiaW1nU3JjIiwiUGVyZm9ybWFuY2UiLCJhbHRUZXh0IiwidGl0bGUiLCJ0ZXh0IiwiUGFydG5lcnNoaXAiLCJTdWJzY3JpcHRpb24iLCJTdXBwb3J0IiwiRmVhdHVyZSIsImZlZWQiLCJjb25zb2xlIiwibG9nIiwiaW1hZ2VzIiwidmFyaWFudCIsInN0eWxlcyIsImdyaWQiLCJtYXAiLCJpbWFnZSIsImdldEluc3RhIiwidXJsIiwiZmV0Y2giLCJqc29uIiwicHJvcHMiLCJwdCIsInB4IiwiZ3JpZEdhcCIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLENBQ1g7QUFDRUMsSUFBRSxFQUFFLENBRE47QUFFRUMsUUFBTSxFQUFFQyxxRUFGVjtBQUdFQyxTQUFPLEVBQUUsa0JBSFg7QUFJRUMsT0FBSyxFQUFFLGtCQUpUO0FBS0VDLE1BQUksRUFDRjtBQU5KLENBRFcsRUFTWDtBQUNFTCxJQUFFLEVBQUUsQ0FETjtBQUVFQyxRQUFNLEVBQUVLLHFFQUZWO0FBR0VILFNBQU8sRUFBRSxrQkFIWDtBQUlFQyxPQUFLLEVBQUUsa0JBSlQ7QUFLRUMsTUFBSSxFQUNGO0FBTkosQ0FUVyxFQWlCWDtBQUNFTCxJQUFFLEVBQUUsQ0FETjtBQUVFQyxRQUFNLEVBQUVNLHNFQUZWO0FBR0VKLFNBQU8sRUFBRSxrQkFIWDtBQUlFQyxPQUFLLEVBQUUsa0JBSlQ7QUFLRUMsTUFBSSxFQUNGO0FBTkosQ0FqQlcsRUF5Qlg7QUFDRUwsSUFBRSxFQUFFLENBRE47QUFFRUMsUUFBTSxFQUFFTyxpRUFGVjtBQUdFTCxTQUFPLEVBQUUsa0JBSFg7QUFJRUMsT0FBSyxFQUFFLGtCQUpUO0FBS0VDLE1BQUksRUFDRjtBQU5KLENBekJXLENBQWI7QUFtQ2UsU0FBU0ksT0FBVCxDQUFpQkMsSUFBakIsRUFBdUI7QUFBQTs7QUFDcENDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0EsTUFBTUcsTUFBTSxHQUFHSCxJQUFJLENBQUNYLElBQXBCO0FBQ0EsU0FDRTtBQUFTLE1BQUUsRUFBRTtBQUFDZSxhQUFPLEVBQUU7QUFBVixLQUFiO0FBQTJDLE1BQUUsRUFBRSxTQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MscURBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLGlFQUFEO0FBQ0UsVUFBTSxFQUFDLGNBRFQ7QUFFRSxTQUFLLEVBQUMscUNBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBS0cscURBQUMsNkNBQUQ7QUFBTSxNQUFFLEVBQUVDLE1BQU0sQ0FBQ0MsSUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSCxNQUFNLElBQUlBLE1BQU0sQ0FBQ0ksR0FBUCxDQUFXLFVBQUFDLEtBQUs7QUFBQSxXQUN6QjtBQUFLLFNBQUcsRUFBRUwsTUFBTSxDQUFDYixFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRHlCO0FBQUEsR0FBaEIsQ0FEYixDQUxILENBREQsQ0FERjtBQWlCRDtLQXBCdUJTLE87QUFzQmpCLElBQU1VLFFBQVE7QUFBQSw4TEFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDakJDLGVBRGlCLEdBQ1gsK1FBRFc7QUFBQTtBQUFBLG1CQUVKQyxLQUFLLENBQUNELEdBQUQsQ0FGRDs7QUFBQTtBQUVqQnJCLGdCQUZpQjtBQUFBO0FBQUEsbUJBR0pBLElBQUksQ0FBQ3VCLElBQUwsRUFISTs7QUFBQTtBQUdqQlosZ0JBSGlCO0FBSXZCQyxtQkFBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFKdUIsNkNBS2pCO0FBQ0phLG1CQUFLLEVBQUM7QUFDSmIsb0JBQUksRUFBSkE7QUFESTtBQURGLGFBTGlCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUo7O0FBQUEsa0JBQVJTLFFBQVE7QUFBQTtBQUFBO0FBQUEsR0FBZDtBQVdQLElBQU1KLE1BQU0sR0FBRztBQUNiQyxNQUFJLEVBQUU7QUFDSlEsTUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxJQUFWLEVBQWdCLElBQWhCLEVBQXNCLElBQXRCLEVBQTRCLElBQTVCLEVBQWtDLENBQWxDLENBREE7QUFFSkMsTUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsSUFBVixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixDQUZBO0FBR0pDLFdBQU8sRUFBRSxDQUNQLFFBRE8sRUFFUCxJQUZPLEVBR1AsV0FITyxFQUlQLElBSk8sRUFLUCxXQUxPLEVBTVAsV0FOTyxFQU9QLElBUE8sRUFRUCxXQVJPLENBSEw7QUFhSkMsdUJBQW1CLEVBQUUsQ0FBQyxlQUFELEVBQWtCLElBQWxCLEVBQXdCLGVBQXhCO0FBYmpCO0FBRE8sQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44YzMwOGNhMjJjMTQwZDgxYTU5Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyJztcclxuaW1wb3J0IEZlYXR1cmVDYXJkIGZyb20gJ2NvbXBvbmVudHMvZmVhdHVyZS1jYXJkLmpzJztcclxuaW1wb3J0IFBlcmZvcm1hbmNlIGZyb20gJ2Fzc2V0cy9mZWF0dXJlL3BlcmZvcm1hbmNlLnN2Zyc7XHJcbmltcG9ydCBQYXJ0bmVyc2hpcCBmcm9tICdhc3NldHMvZmVhdHVyZS9wYXJ0bmVyc2hpcC5zdmcnO1xyXG5pbXBvcnQgU3Vic2NyaXB0aW9uIGZyb20gJ2Fzc2V0cy9mZWF0dXJlL3N1YnNjcmlwdGlvbi5zdmcnO1xyXG5pbXBvcnQgU3VwcG9ydCBmcm9tICdhc3NldHMvZmVhdHVyZS9zdXBwb3J0LnN2Zyc7XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgaW1nU3JjOiBQZXJmb3JtYW5jZSxcclxuICAgIGFsdFRleHQ6ICdGYXN0IFBlcmZvcm1hbmNlJyxcclxuICAgIHRpdGxlOiAnRmFzdCBQZXJmb3JtYW5jZScsXHJcbiAgICB0ZXh0OlxyXG4gICAgICAnTGV04oCZcyBqdXN0IGdldCB0aGlzIG91dCBvZiB0aGUgd2F5IC0gdGhlcmUgd2lsbCBhbHdheXMgYmUgYSBraXQgdmVyc2lvbiBvZiBFZHUgZmxvdy4gUGFpZCBzdWJzY3JpcHRpb25zIGFsbG93IHVzIHRvIGNvbnRpbnVlIGhlbHBpbmcgbGVhcm5lcnMgYXJvdW5kIHRoZSB3b3JsZC4nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBpbWdTcmM6IFBhcnRuZXJzaGlwLFxyXG4gICAgYWx0VGV4dDogJ1BybyBTdWJzY3JpcHRpb24nLFxyXG4gICAgdGl0bGU6ICdQcm8gU3Vic2NyaXB0aW9uJyxcclxuICAgIHRleHQ6XHJcbiAgICAgICdXZSBiZWxpZXZlIGl04oCZcyBpbXBvcnRhbnQgZm9yIGV2ZXJ5b25lIHRvIGhhdmUgYWNjZXNzIHRvIHNvZnR3YXJlIOKAkyBlc3BlY2lhbGx5IHdoZW4gaXQgY29tZXMgdG8gZGlnaXRhbCBsZWFybmluZyBiZSBuYXZpZ2F0ZWQgYnkga2V5Ym9hcmQgYW5kIHNjcmVlbiByZWFkZXJzLicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIGltZ1NyYzogU3Vic2NyaXB0aW9uLFxyXG4gICAgYWx0VGV4dDogJ1BhcnRuZXJzaGlwIGRlYWwnLFxyXG4gICAgdGl0bGU6ICdQYXJ0bmVyc2hpcCBkZWFsJyxcclxuICAgIHRleHQ6XHJcbiAgICAgICdMZXTigJlzIGp1c3QgZ2V0IHRoaXMgb3V0IG9mIHRoZSB3YXkgLSB0aGVyZSB3aWxsIGFsd2F5cyBiZSBhIGtpdCB2ZXJzaW9uIG9mIEVkdSBmbG93LiBQYWlkIHN1YnNjcmlwdGlvbnMgYWxsb3cgdXMgdG8gY29udGludWUgaGVscGluZyBsZWFybmVycyBhcm91bmQgdGhlIHdvcmxkLicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIGltZ1NyYzogU3VwcG9ydCxcclxuICAgIGFsdFRleHQ6ICdDdXN0b21lciBTdXBwb3J0JyxcclxuICAgIHRpdGxlOiAnQ3VzdG9tZXIgU3VwcG9ydCcsXHJcbiAgICB0ZXh0OlxyXG4gICAgICAnV2UgYmVsaWV2ZSBpdOKAmXMgaW1wb3J0YW50IGZvciBldmVyeW9uZSB0byBoYXZlIGFjY2VzcyB0byBzb2Z0d2FyZSDigJMgZXNwZWNpYWxseSB3aGVuIGl0IGNvbWVzIHRvIGRpZ2l0YWwgbGVhcm5pbmcgYmUgbmF2aWdhdGVkIGJ5IGtleWJvYXJkIGFuZCBzY3JlZW4gcmVhZGVycy4nLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGZWF0dXJlKGZlZWQpIHtcclxuICBjb25zb2xlLmxvZyhmZWVkKVxyXG4gIGNvbnN0IGltYWdlcyA9IGZlZWQuZGF0YTtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gc3g9e3t2YXJpYW50OiAnc2VjdGlvbi5mZWF0dXJlJ319IGlkID1cImdhbGxlcnlcIj5cclxuICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgPFNlY3Rpb25IZWFkZXJcclxuICAgICAgICAgc2xvZ2FuPVwiUmVjZW50IHdvcmtzXCJcclxuICAgICAgICAgdGl0bGU9XCJIZXJlIGFyZSBzb21lIGV4YW1wbGVzIG9mIG91ciB3b3JrIVwiXHJcbiAgICAgICAgIC8+XHJcbiAgICAgICAgPEdyaWQgc3g9e3N0eWxlcy5ncmlkfT5cclxuICAgICAgICAgIHtpbWFnZXMgJiYgaW1hZ2VzLm1hcChpbWFnZSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtpbWFnZXMuaWR9PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgPC9Db250YWluZXI+XHJcbiAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0SW5zdGEgID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHVybCA9ICdodHRwczovL2dyYXBoLmluc3RhZ3JhbS5jb20vbWUvbWVkaWE/ZmllbGRzPWlkLGNhcHRpb24sbWVkaWFfdXJsLHRpbWVzdGFtcCxtZWRpYV90eXBlLHBlcm1hbGluayZhY2Nlc3NfdG9rZW49SUdRVkpWTFdwdGRFcHFSV2x4T0dOaE9HZDNiSEl4UW1aQTJNVXhET1UxRWJWVm9NSGxXYUdSSWRrbE9ibDgxZERNeFJtZEllVXN4ZFUxMWVGUnlOWGd0VUU1V2JEWkFvTURKR2MyWkFYUW13MFFtcDBjbmw2UkVnMkxYUndiM05xUmw5TlVVNUlhbTluUWpkR1pBekZYVmtwdllnWkRaRCdcclxuICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICBjb25zdCBmZWVkID0gYXdhaXQgZGF0YS5qc29uKCk7XHJcbiAgY29uc29sZS5sb2coZmVlZCk7XHJcbiAgcmV0dXJue1xyXG4gICAgcHJvcHM6e1xyXG4gICAgICBmZWVkXHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgZ3JpZDoge1xyXG4gICAgcHQ6IFswLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAyXSxcclxuICAgIHB4OiBbNSwgNiwgMCwgbnVsbCwgNywgOCwgN10sXHJcbiAgICBncmlkR2FwOiBbXHJcbiAgICAgICc0MHB4IDAnLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnNDVweCAzMHB4JyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJzYwcHggNTBweCcsXHJcbiAgICAgICc3MHB4IDUwcHgnLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnODBweCA5MHB4JyxcclxuICAgIF0sXHJcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbJ3JlcGVhdCgxLDFmciknLCBudWxsLCAncmVwZWF0KDIsMWZyKSddLFxyXG4gIH0sXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=