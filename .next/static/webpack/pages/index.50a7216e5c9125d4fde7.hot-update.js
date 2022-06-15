webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/team-card.js":
/*!*************************************!*\
  !*** ./src/components/team-card.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TeamCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
var _jsxFileName = "C:\\Users\\Will's Gaming PC\\Documents\\Development\\WhoozyWraps\\src\\components\\team-card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */


function TeamCard(_ref) {
  var _this = this;

  var src = _ref.src,
      altText = _ref.altText,
      title = _ref.title,
      designation = _ref.designation,
      social = _ref.social;
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.card,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: src,
    alt: altText,
    sx: styles.memberThumb,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.infoWrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    className: "info__name",
    sx: styles.infoWrapper.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }, title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    className: "info__designation",
    sx: styles.infoWrapper.designation,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, designation)), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.socialShare,
    className: "social__share",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, social.map(function (item) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      key: item.id,
      href: item.path,
      className: item.name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }
    }, item.icon);
  })));
}
_c = TeamCard;
var styles = {
  card: {
    display: 'flex',
    alignItems: 'center',
    // flexDirection: 'column',
    py: [0, null, 4, 5, 6],
    px: [2, null, 6, 7],
    transition: 'ease-in-out 0.4s',
    borderRadius: '8px',
    position: 'relative',
    '&:hover': {
      boxShadow: ['none', null, '0 4px 10px rgba(39, 83, 123, 0.12)'],
      '.info__name': {
        color: 'primary'
      },
      '.info__designation': {
        color: 'primary'
      },
      '.social__share': {
        opacity: 1,
        a: {
          my: 0,
          py: [0, null, 1]
        }
      }
    }
  },
  memberThumb: {
    // width: ['100px', '100px', '100px', null, null, '130px'],
    // height: ['100px', '1000px', '100px', null, null, '130px'],
    flexShrink: 0,
    border: '2px solid',
    borderColor: 'primary' //borderRadius: '50%',

  },
  infoWrapper: {
    width: '100%',
    textAlign: 'center',
    mt: [3, null, 4],
    name: {
      fontSize: [1, 2, 3, null, null, 4],
      fontWeight: 'bold',
      lineHeight: [1.25, 1.35],
      transition: 'color 0.25s',
      mb: 1
    },
    designation: {
      fontSize: ['14px', null, null, 2],
      fontWeight: 'body',
      lineHeight: 'heading',
      color: 'text',
      transition: 'color 0.25s'
    }
  },
  socialShare: {
    position: ['relative', null, 'absolute'],
    right: [0, null, 6, null, 4, 6],
    bottom: [0, null, '18px', 5],
    width: ['100%', null, 'auto'],
    display: 'flex',
    flexDirection: ['row', null, 'column'],
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.25s',
    opacity: [1, null, 0],
    pt: 2,
    a: {
      fontSize: [0, 1, null, 2],
      color: ['text', null, 'primary'],
      lineHeight: '1em',
      my: [0, null, '-2px'],
      px: 1,
      transition: 'all 0.25s',
      '&:hover': {
        color: ['primary', null, 'text']
      }
    }
  }
};

var _c;

$RefreshReg$(_c, "TeamCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVhbS1jYXJkLmpzIl0sIm5hbWVzIjpbIlRlYW1DYXJkIiwic3JjIiwiYWx0VGV4dCIsInRpdGxlIiwiZGVzaWduYXRpb24iLCJzb2NpYWwiLCJzdHlsZXMiLCJjYXJkIiwibWVtYmVyVGh1bWIiLCJpbmZvV3JhcHBlciIsIm5hbWUiLCJzb2NpYWxTaGFyZSIsIm1hcCIsIml0ZW0iLCJpZCIsInBhdGgiLCJpY29uIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJweSIsInB4IiwidHJhbnNpdGlvbiIsImJvcmRlclJhZGl1cyIsInBvc2l0aW9uIiwiYm94U2hhZG93IiwiY29sb3IiLCJvcGFjaXR5IiwiYSIsIm15IiwiZmxleFNocmluayIsImJvcmRlciIsImJvcmRlckNvbG9yIiwid2lkdGgiLCJ0ZXh0QWxpZ24iLCJtdCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImxpbmVIZWlnaHQiLCJtYiIsInJpZ2h0IiwiYm90dG9tIiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwicHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxRQUFULE9BQWdFO0FBQUE7O0FBQUEsTUFBNUNDLEdBQTRDLFFBQTVDQSxHQUE0QztBQUFBLE1BQXZDQyxPQUF1QyxRQUF2Q0EsT0FBdUM7QUFBQSxNQUE5QkMsS0FBOEIsUUFBOUJBLEtBQThCO0FBQUEsTUFBdkJDLFdBQXVCLFFBQXZCQSxXQUF1QjtBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTtBQUM3RSxTQUNFLHFEQUFDLDRDQUFEO0FBQUssTUFBRSxFQUFFQyxNQUFNLENBQUNDLElBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyw4Q0FBRDtBQUFPLE9BQUcsRUFBRU4sR0FBWjtBQUFpQixPQUFHLEVBQUVDLE9BQXRCO0FBQStCLE1BQUUsRUFBRUks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O0FBT0QsaUJBQVc7QUFDVEksYUFBSyxFQUFFLENBQUMsU0FBRCxFQUFZLElBQVosRUFBa0IsTUFBbEI7QUFERTtBQVBWO0FBWlE7QUF2REEsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41MGE3MjE2ZTVjOTEyNWQ0ZmRlNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgVGV4dCwgSGVhZGluZywgSW1hZ2UsIEJveCwgTGluayB9IGZyb20gJ3RoZW1lLXVpJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlYW1DYXJkKHsgc3JjLCBhbHRUZXh0LCB0aXRsZSwgZGVzaWduYXRpb24sIHNvY2lhbCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggc3g9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgPEltYWdlIHNyYz17c3JjfSBhbHQ9e2FsdFRleHR9IHN4PXtzdHlsZXMubWVtYmVyVGh1bWJ9Lz5cclxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuaW5mb1dyYXBwZXJ9PlxyXG4gICAgICAgICAgPEhlYWRpbmcgY2xhc3NOYW1lPVwiaW5mb19fbmFtZVwiIHN4PXtzdHlsZXMuaW5mb1dyYXBwZXIubmFtZX0+XHJcbiAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT1cImluZm9fX2Rlc2lnbmF0aW9uXCIgc3g9e3N0eWxlcy5pbmZvV3JhcHBlci5kZXNpZ25hdGlvbn0+XHJcbiAgICAgICAgICAgIHtkZXNpZ25hdGlvbn1cclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuc29jaWFsU2hhcmV9IGNsYXNzTmFtZT1cInNvY2lhbF9fc2hhcmVcIj5cclxuICAgICAgICAgIHtzb2NpYWwubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgIDxMaW5rIGtleSA9e2l0ZW0uaWR9IGhyZWY9e2l0ZW0ucGF0aH0gY2xhc3NOYW1lPXtpdGVtLm5hbWV9PlxyXG4gICAgICAgICAgICAgIHtpdGVtLmljb259XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGNhcmQ6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAvLyBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIHB5OiBbMCwgbnVsbCwgNCwgNSwgNl0sXHJcbiAgICBweDogWzIsIG51bGwsIDYsIDddLFxyXG4gICAgdHJhbnNpdGlvbjogJ2Vhc2UtaW4tb3V0IDAuNHMnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnOHB4JyxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgJyY6aG92ZXInOiB7XHJcbiAgICAgIGJveFNoYWRvdzogWydub25lJywgbnVsbCwgJzAgNHB4IDEwcHggcmdiYSgzOSwgODMsIDEyMywgMC4xMiknXSxcclxuICAgICAgJy5pbmZvX19uYW1lJzoge1xyXG4gICAgICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgIH0sXHJcbiAgICAgICcuaW5mb19fZGVzaWduYXRpb24nOiB7XHJcbiAgICAgICAgY29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgfSxcclxuICAgICAgJy5zb2NpYWxfX3NoYXJlJzoge1xyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgYToge1xyXG4gICAgICAgICAgbXk6IDAsXHJcbiAgICAgICAgICBweTogWzAsIG51bGwsIDFdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIG1lbWJlclRodW1iOiB7XHJcbiAgIC8vIHdpZHRoOiBbJzEwMHB4JywgJzEwMHB4JywgJzEwMHB4JywgbnVsbCwgbnVsbCwgJzEzMHB4J10sXHJcbiAgIC8vIGhlaWdodDogWycxMDBweCcsICcxMDAwcHgnLCAnMTAwcHgnLCBudWxsLCBudWxsLCAnMTMwcHgnXSxcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICBib3JkZXI6ICcycHggc29saWQnLFxyXG4gICAgYm9yZGVyQ29sb3I6ICdwcmltYXJ5JyxcclxuICAgIC8vYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICB9LFxyXG4gIGluZm9XcmFwcGVyOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIG10OiBbMywgbnVsbCwgNF0sXHJcbiAgICBuYW1lOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbMSwgMiwgMywgbnVsbCwgbnVsbCwgNF0sXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgICAgbGluZUhlaWdodDogWzEuMjUsIDEuMzVdLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnY29sb3IgMC4yNXMnLFxyXG4gICAgICBtYjogMSxcclxuICAgIH0sXHJcbiAgICBkZXNpZ25hdGlvbjoge1xyXG4gICAgICBmb250U2l6ZTogWycxNHB4JywgbnVsbCwgbnVsbCwgMl0sXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2R5JyxcclxuICAgICAgbGluZUhlaWdodDogJ2hlYWRpbmcnLFxyXG4gICAgICBjb2xvcjogJ3RleHQnLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnY29sb3IgMC4yNXMnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNvY2lhbFNoYXJlOiB7XHJcbiAgICBwb3NpdGlvbjogWydyZWxhdGl2ZScsIG51bGwsICdhYnNvbHV0ZSddLFxyXG4gICAgcmlnaHQ6IFswLCBudWxsLCA2LCBudWxsLCA0LCA2XSxcclxuICAgIGJvdHRvbTogWzAsIG51bGwsICcxOHB4JywgNV0sXHJcbiAgICB3aWR0aDogWycxMDAlJywgbnVsbCwgJ2F1dG8nXSxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246IFsncm93JywgbnVsbCwgJ2NvbHVtbiddLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzJyxcclxuICAgIG9wYWNpdHk6IFsxLCBudWxsLCAwXSxcclxuICAgIHB0OiAyLFxyXG4gICAgYToge1xyXG4gICAgICBmb250U2l6ZTogWzAsIDEsIG51bGwsIDJdLFxyXG4gICAgICBjb2xvcjogWyd0ZXh0JywgbnVsbCwgJ3ByaW1hcnknXSxcclxuICAgICAgbGluZUhlaWdodDogJzFlbScsXHJcbiAgICAgIG15OiBbMCwgbnVsbCwgJy0ycHgnXSxcclxuICAgICAgcHg6IDEsXHJcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4yNXMnLFxyXG4gICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICBjb2xvcjogWydwcmltYXJ5JywgbnVsbCwgJ3RleHQnXSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==