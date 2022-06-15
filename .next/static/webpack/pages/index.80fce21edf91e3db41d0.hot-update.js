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
  }), images && images.map(function (image) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
      key: images.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 13
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])("img", {
      src: image.media_url,
      alt: image.caption,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 15
      }
    }));
  })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2ZlYXR1cmUuanMiXSwibmFtZXMiOlsiZGF0YSIsImlkIiwiaW1nU3JjIiwiUGVyZm9ybWFuY2UiLCJhbHRUZXh0IiwidGl0bGUiLCJ0ZXh0IiwiUGFydG5lcnNoaXAiLCJTdWJzY3JpcHRpb24iLCJTdXBwb3J0IiwiRmVhdHVyZSIsImZlZWQiLCJjb25zb2xlIiwibG9nIiwiaW1hZ2VzIiwidmFyaWFudCIsIm1hcCIsImltYWdlIiwibWVkaWFfdXJsIiwiY2FwdGlvbiIsImdldEluc3RhIiwidXJsIiwiZmV0Y2giLCJqc29uIiwicHJvcHMiLCJzdHlsZXMiLCJncmlkIiwicHQiLCJweCIsImdyaWRHYXAiLCJncmlkVGVtcGxhdGVDb2x1bW5zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBRyxDQUNYO0FBQ0VDLElBQUUsRUFBRSxDQUROO0FBRUVDLFFBQU0sRUFBRUMscUVBRlY7QUFHRUMsU0FBTyxFQUFFLGtCQUhYO0FBSUVDLE9BQUssRUFBRSxrQkFKVDtBQUtFQyxNQUFJLEVBQ0Y7QUFOSixDQURXLEVBU1g7QUFDRUwsSUFBRSxFQUFFLENBRE47QUFFRUMsUUFBTSxFQUFFSyxxRUFGVjtBQUdFSCxTQUFPLEVBQUUsa0JBSFg7QUFJRUMsT0FBSyxFQUFFLGtCQUpUO0FBS0VDLE1BQUksRUFDRjtBQU5KLENBVFcsRUFpQlg7QUFDRUwsSUFBRSxFQUFFLENBRE47QUFFRUMsUUFBTSxFQUFFTSxzRUFGVjtBQUdFSixTQUFPLEVBQUUsa0JBSFg7QUFJRUMsT0FBSyxFQUFFLGtCQUpUO0FBS0VDLE1BQUksRUFDRjtBQU5KLENBakJXLEVBeUJYO0FBQ0VMLElBQUUsRUFBRSxDQUROO0FBRUVDLFFBQU0sRUFBRU8saUVBRlY7QUFHRUwsU0FBTyxFQUFFLGtCQUhYO0FBSUVDLE9BQUssRUFBRSxrQkFKVDtBQUtFQyxNQUFJLEVBQ0Y7QUFOSixDQXpCVyxDQUFiO0FBbUNlLFNBQVNJLE9BQVQsQ0FBaUJDLElBQWpCLEVBQXVCO0FBQUE7O0FBQ3BDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBLE1BQU1HLE1BQU0sR0FBR0gsSUFBSSxDQUFDWCxJQUFwQjtBQUNBLFNBQ0U7QUFBUyxNQUFFLEVBQUU7QUFBQ2UsYUFBTyxFQUFFO0FBQVYsS0FBYjtBQUEyQyxNQUFFLEVBQUUsU0FBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLHFEQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyxpRUFBRDtBQUNFLFVBQU0sRUFBQyxjQURUO0FBRUUsU0FBSyxFQUFDLHFDQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQU1NRCxNQUFNLElBQUlBLE1BQU0sQ0FBQ0UsR0FBUCxDQUFXLFVBQUFDLEtBQUs7QUFBQSxXQUN6QjtBQUFLLFNBQUcsRUFBRUgsTUFBTSxDQUFDYixFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxTQUFHLEVBQUdnQixLQUFLLENBQUNDLFNBQWpCO0FBQTRCLFNBQUcsRUFBRUQsS0FBSyxDQUFDRSxPQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FEeUI7QUFBQSxHQUFoQixDQU5oQixDQURELENBREY7QUFpQkQ7S0FwQnVCVCxPO0FBc0JqQixJQUFNVSxRQUFRO0FBQUEsOExBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2pCQyxlQURpQixHQUNYLCtRQURXO0FBQUE7QUFBQSxtQkFFSkMsS0FBSyxDQUFDRCxHQUFELENBRkQ7O0FBQUE7QUFFakJyQixnQkFGaUI7QUFBQTtBQUFBLG1CQUdKQSxJQUFJLENBQUN1QixJQUFMLEVBSEk7O0FBQUE7QUFHakJaLGdCQUhpQjtBQUl2QkMsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBSnVCLDZDQUtqQjtBQUNKYSxtQkFBSyxFQUFDO0FBQ0piLG9CQUFJLEVBQUpBO0FBREk7QUFERixhQUxpQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFKOztBQUFBLGtCQUFSUyxRQUFRO0FBQUE7QUFBQTtBQUFBLEdBQWQ7QUFXUCxJQUFNSyxNQUFNLEdBQUc7QUFDYkMsTUFBSSxFQUFFO0FBQ0pDLE1BQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsSUFBVixFQUFnQixJQUFoQixFQUFzQixJQUF0QixFQUE0QixJQUE1QixFQUFrQyxDQUFsQyxDQURBO0FBRUpDLE1BQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLElBQVYsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsQ0FGQTtBQUdKQyxXQUFPLEVBQUUsQ0FDUCxRQURPLEVBRVAsSUFGTyxFQUdQLFdBSE8sRUFJUCxJQUpPLEVBS1AsV0FMTyxFQU1QLFdBTk8sRUFPUCxJQVBPLEVBUVAsV0FSTyxDQUhMO0FBYUpDLHVCQUFtQixFQUFFLENBQUMsZUFBRCxFQUFrQixJQUFsQixFQUF3QixlQUF4QjtBQWJqQjtBQURPLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODBmY2UyMWVkZjkxZTNkYjQxZDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgR3JpZCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSAnY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlcic7XHJcbmltcG9ydCBGZWF0dXJlQ2FyZCBmcm9tICdjb21wb25lbnRzL2ZlYXR1cmUtY2FyZC5qcyc7XHJcbmltcG9ydCBQZXJmb3JtYW5jZSBmcm9tICdhc3NldHMvZmVhdHVyZS9wZXJmb3JtYW5jZS5zdmcnO1xyXG5pbXBvcnQgUGFydG5lcnNoaXAgZnJvbSAnYXNzZXRzL2ZlYXR1cmUvcGFydG5lcnNoaXAuc3ZnJztcclxuaW1wb3J0IFN1YnNjcmlwdGlvbiBmcm9tICdhc3NldHMvZmVhdHVyZS9zdWJzY3JpcHRpb24uc3ZnJztcclxuaW1wb3J0IFN1cHBvcnQgZnJvbSAnYXNzZXRzL2ZlYXR1cmUvc3VwcG9ydC5zdmcnO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIGltZ1NyYzogUGVyZm9ybWFuY2UsXHJcbiAgICBhbHRUZXh0OiAnRmFzdCBQZXJmb3JtYW5jZScsXHJcbiAgICB0aXRsZTogJ0Zhc3QgUGVyZm9ybWFuY2UnLFxyXG4gICAgdGV4dDpcclxuICAgICAgJ0xldOKAmXMganVzdCBnZXQgdGhpcyBvdXQgb2YgdGhlIHdheSAtIHRoZXJlIHdpbGwgYWx3YXlzIGJlIGEga2l0IHZlcnNpb24gb2YgRWR1IGZsb3cuIFBhaWQgc3Vic2NyaXB0aW9ucyBhbGxvdyB1cyB0byBjb250aW51ZSBoZWxwaW5nIGxlYXJuZXJzIGFyb3VuZCB0aGUgd29ybGQuJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgaW1nU3JjOiBQYXJ0bmVyc2hpcCxcclxuICAgIGFsdFRleHQ6ICdQcm8gU3Vic2NyaXB0aW9uJyxcclxuICAgIHRpdGxlOiAnUHJvIFN1YnNjcmlwdGlvbicsXHJcbiAgICB0ZXh0OlxyXG4gICAgICAnV2UgYmVsaWV2ZSBpdOKAmXMgaW1wb3J0YW50IGZvciBldmVyeW9uZSB0byBoYXZlIGFjY2VzcyB0byBzb2Z0d2FyZSDigJMgZXNwZWNpYWxseSB3aGVuIGl0IGNvbWVzIHRvIGRpZ2l0YWwgbGVhcm5pbmcgYmUgbmF2aWdhdGVkIGJ5IGtleWJvYXJkIGFuZCBzY3JlZW4gcmVhZGVycy4nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBpbWdTcmM6IFN1YnNjcmlwdGlvbixcclxuICAgIGFsdFRleHQ6ICdQYXJ0bmVyc2hpcCBkZWFsJyxcclxuICAgIHRpdGxlOiAnUGFydG5lcnNoaXAgZGVhbCcsXHJcbiAgICB0ZXh0OlxyXG4gICAgICAnTGV04oCZcyBqdXN0IGdldCB0aGlzIG91dCBvZiB0aGUgd2F5IC0gdGhlcmUgd2lsbCBhbHdheXMgYmUgYSBraXQgdmVyc2lvbiBvZiBFZHUgZmxvdy4gUGFpZCBzdWJzY3JpcHRpb25zIGFsbG93IHVzIHRvIGNvbnRpbnVlIGhlbHBpbmcgbGVhcm5lcnMgYXJvdW5kIHRoZSB3b3JsZC4nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICBpbWdTcmM6IFN1cHBvcnQsXHJcbiAgICBhbHRUZXh0OiAnQ3VzdG9tZXIgU3VwcG9ydCcsXHJcbiAgICB0aXRsZTogJ0N1c3RvbWVyIFN1cHBvcnQnLFxyXG4gICAgdGV4dDpcclxuICAgICAgJ1dlIGJlbGlldmUgaXTigJlzIGltcG9ydGFudCBmb3IgZXZlcnlvbmUgdG8gaGF2ZSBhY2Nlc3MgdG8gc29mdHdhcmUg4oCTIGVzcGVjaWFsbHkgd2hlbiBpdCBjb21lcyB0byBkaWdpdGFsIGxlYXJuaW5nIGJlIG5hdmlnYXRlZCBieSBrZXlib2FyZCBhbmQgc2NyZWVuIHJlYWRlcnMuJyxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmVhdHVyZShmZWVkKSB7XHJcbiAgY29uc29sZS5sb2coZmVlZClcclxuICBjb25zdCBpbWFnZXMgPSBmZWVkLmRhdGE7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIHN4PXt7dmFyaWFudDogJ3NlY3Rpb24uZmVhdHVyZSd9fSBpZCA9XCJnYWxsZXJ5XCI+XHJcbiAgICAgPENvbnRhaW5lcj5cclxuICAgICAgIDxTZWN0aW9uSGVhZGVyXHJcbiAgICAgICAgIHNsb2dhbj1cIlJlY2VudCB3b3Jrc1wiXHJcbiAgICAgICAgIHRpdGxlPVwiSGVyZSBhcmUgc29tZSBleGFtcGxlcyBvZiBvdXIgd29yayFcIlxyXG4gICAgICAgICAvPlxyXG4gICAgICAgIHsvKiA8R3JpZCBzeD17c3R5bGVzLmdyaWR9PiAqL31cclxuICAgICAgICAgIHtpbWFnZXMgJiYgaW1hZ2VzLm1hcChpbWFnZSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtpbWFnZXMuaWR9PlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjID17aW1hZ2UubWVkaWFfdXJsfSBhbHQ9e2ltYWdlLmNhcHRpb259Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICB7LyogPC9HcmlkPiAqL31cclxuICAgICA8L0NvbnRhaW5lcj5cclxuICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRJbnN0YSAgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgdXJsID0gJ2h0dHBzOi8vZ3JhcGguaW5zdGFncmFtLmNvbS9tZS9tZWRpYT9maWVsZHM9aWQsY2FwdGlvbixtZWRpYV91cmwsdGltZXN0YW1wLG1lZGlhX3R5cGUscGVybWFsaW5rJmFjY2Vzc190b2tlbj1JR1FWSlZMV3B0ZEVwcVJXbHhPR05oT0dkM2JISXhRbVpBMk1VeERPVTFFYlZWb01IbFdhR1JJZGtsT2JsODFkRE14Um1kSWVVc3hkVTExZUZSeU5YZ3RVRTVXYkRaQW9NREpHYzJaQVhRbXcwUW1wMGNubDZSRWcyTFhSd2IzTnFSbDlOVVU1SWFtOW5RamRHWkF6RlhWa3B2WWdaRFpEJ1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gIGNvbnN0IGZlZWQgPSBhd2FpdCBkYXRhLmpzb24oKTtcclxuICBjb25zb2xlLmxvZyhmZWVkKTtcclxuICByZXR1cm57XHJcbiAgICBwcm9wczp7XHJcbiAgICAgIGZlZWRcclxuICAgIH1cclxuICB9XHJcbn07XHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBncmlkOiB7XHJcbiAgICBwdDogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDJdLFxyXG4gICAgcHg6IFs1LCA2LCAwLCBudWxsLCA3LCA4LCA3XSxcclxuICAgIGdyaWRHYXA6IFtcclxuICAgICAgJzQwcHggMCcsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICc0NXB4IDMwcHgnLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnNjBweCA1MHB4JyxcclxuICAgICAgJzcwcHggNTBweCcsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICc4MHB4IDkwcHgnLFxyXG4gICAgXSxcclxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFsncmVwZWF0KDEsMWZyKScsIG51bGwsICdyZXBlYXQoMiwxZnIpJ10sXHJcbiAgfSxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==