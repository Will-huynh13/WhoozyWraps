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
      lineNumber: 12,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    classname: "info__name",
    sx: styles.infoWrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, tite)));
}
_c = TeamCard;
var styles = {
  card: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
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
    width: ['70px', '80px', '100px', null, null, '130px'],
    height: ['70px', '80px', '100px', null, null, '130px'],
    flexShrink: 0,
    border: '2px solid',
    borderColor: 'primary',
    borderRadius: '50%'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVhbS1jYXJkLmpzIl0sIm5hbWVzIjpbIlRlYW1DYXJkIiwic3JjIiwiYWx0VGV4dCIsInRpdGxlIiwiZGVzaWduYXRpb24iLCJzb2NpYWwiLCJzdHlsZXMiLCJjYXJkIiwibWVtYmVyVGh1bWIiLCJpbmZvV3JhcHBlciIsInRpdGUiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImZsZXhEaXJlY3Rpb24iLCJweSIsInB4IiwidHJhbnNpdGlvbiIsImJvcmRlclJhZGl1cyIsInBvc2l0aW9uIiwiYm94U2hhZG93IiwiY29sb3IiLCJvcGFjaXR5IiwiYSIsIm15Iiwid2lkdGgiLCJoZWlnaHQiLCJmbGV4U2hyaW5rIiwiYm9yZGVyIiwiYm9yZGVyQ29sb3IiLCJ0ZXh0QWxpZ24iLCJtdCIsIm5hbWUiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJsaW5lSGVpZ2h0IiwibWIiLCJzb2NpYWxTaGFyZSIsInJpZ2h0IiwiYm90dG9tIiwianVzdGlmeUNvbnRlbnQiLCJwdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFFBQVQsT0FBZ0U7QUFBQSxNQUE1Q0MsR0FBNEMsUUFBNUNBLEdBQTRDO0FBQUEsTUFBdkNDLE9BQXVDLFFBQXZDQSxPQUF1QztBQUFBLE1BQTlCQyxLQUE4QixRQUE5QkEsS0FBOEI7QUFBQSxNQUF2QkMsV0FBdUIsUUFBdkJBLFdBQXVCO0FBQUEsTUFBVkMsTUFBVSxRQUFWQSxNQUFVO0FBQzdFLFNBQ0UscURBQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUVDLE1BQU0sQ0FBQ0MsSUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLDhDQUFEO0FBQ0UsT0FBRyxFQUFFTixHQURQO0FBRUUsT0FBRyxFQUFFQyxPQUZQO0FBR0UsTUFBRSxFQUFFSSxNQUFNLENBQUNFLFdBSGI7QUFBQTtBQUFB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LFVBQU0sRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsTUFBVixFQUFrQixDQUFsQixDQUhHO0FBSVhkLFNBQUssRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsTUFBZixDQUpJO0FBS1hiLFdBQU8sRUFBRSxNQUxFO0FBTVhFLGlCQUFhLEVBQUUsQ0FBQyxLQUFELEVBQVEsSUFBUixFQUFjLFFBQWQsQ0FOSjtBQU9YRCxjQUFVLEVBQUUsUUFQRDtBQVFYMkIsa0JBQWMsRUFBRSxRQVJMO0FBU1h2QixjQUFVLEVBQUUsV0FURDtBQVVYSyxXQUFPLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLENBQVYsQ0FWRTtBQVdYbUIsTUFBRSxFQUFFLENBWE87QUFZWGxCLEtBQUMsRUFBRTtBQUNEVSxjQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLElBQVAsRUFBYSxDQUFiLENBRFQ7QUFFRFosV0FBSyxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxTQUFmLENBRk47QUFHRGMsZ0JBQVUsRUFBRSxLQUhYO0FBSURYLFFBQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsTUFBVixDQUpIO0FBS0RSLFFBQUUsRUFBRSxDQUxIO0FBTURDLGdCQUFVLEVBQUUsV0FOWDtBQU9ELGlCQUFXO0FBQ1RJLGFBQUssRUFBRSxDQUFDLFNBQUQsRUFBWSxJQUFaLEVBQWtCLE1BQWxCO0FBREU7QUFQVjtBQVpRO0FBdkRBLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTQ0ZWMwY2MzNWY1OTE2MGVmYzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IFRleHQsIEhlYWRpbmcsIEltYWdlLCBCb3gsIExpbmsgfSBmcm9tICd0aGVtZS11aSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZWFtQ2FyZCh7IHNyYywgYWx0VGV4dCwgdGl0bGUsIGRlc2lnbmF0aW9uLCBzb2NpYWwgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHN4PXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgIDxJbWFnZSBcclxuICAgICAgICBzcmM9e3NyY31cclxuICAgICAgICBhbHQ9e2FsdFRleHR9XHJcbiAgICAgICAgc3g9e3N0eWxlcy5tZW1iZXJUaHVtYn0vPlxyXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5pbmZvV3JhcHBlcn0+XHJcbiAgICAgICAgICA8SGVhZGluZyBjbGFzc25hbWU9XCJpbmZvX19uYW1lXCIgc3g9e3N0eWxlcy5pbmZvV3JhcHBlcn0+XHJcbiAgICAgICAgICAgIHt0aXRlfVxyXG4gICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGNhcmQ6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBweTogWzAsIG51bGwsIDQsIDUsIDZdLFxyXG4gICAgcHg6IFsyLCBudWxsLCA2LCA3XSxcclxuICAgIHRyYW5zaXRpb246ICdlYXNlLWluLW91dCAwLjRzJyxcclxuICAgIGJvcmRlclJhZGl1czogJzhweCcsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICBib3hTaGFkb3c6IFsnbm9uZScsIG51bGwsICcwIDRweCAxMHB4IHJnYmEoMzksIDgzLCAxMjMsIDAuMTIpJ10sXHJcbiAgICAgICcuaW5mb19fbmFtZSc6IHtcclxuICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgICB9LFxyXG4gICAgICAnLmluZm9fX2Rlc2lnbmF0aW9uJzoge1xyXG4gICAgICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgIH0sXHJcbiAgICAgICcuc29jaWFsX19zaGFyZSc6IHtcclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgIGE6IHtcclxuICAgICAgICAgIG15OiAwLFxyXG4gICAgICAgICAgcHk6IFswLCBudWxsLCAxXSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBtZW1iZXJUaHVtYjoge1xyXG4gICAgd2lkdGg6IFsnNzBweCcsICc4MHB4JywgJzEwMHB4JywgbnVsbCwgbnVsbCwgJzEzMHB4J10sXHJcbiAgICBoZWlnaHQ6IFsnNzBweCcsICc4MHB4JywgJzEwMHB4JywgbnVsbCwgbnVsbCwgJzEzMHB4J10sXHJcbiAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgYm9yZGVyOiAnMnB4IHNvbGlkJyxcclxuICAgIGJvcmRlckNvbG9yOiAncHJpbWFyeScsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gIH0sXHJcbiAgaW5mb1dyYXBwZXI6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgbXQ6IFszLCBudWxsLCA0XSxcclxuICAgIG5hbWU6IHtcclxuICAgICAgZm9udFNpemU6IFsxLCAyLCAzLCBudWxsLCBudWxsLCA0XSxcclxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBbMS4yNSwgMS4zNV0sXHJcbiAgICAgIHRyYW5zaXRpb246ICdjb2xvciAwLjI1cycsXHJcbiAgICAgIG1iOiAxLFxyXG4gICAgfSxcclxuICAgIGRlc2lnbmF0aW9uOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbJzE0cHgnLCBudWxsLCBudWxsLCAyXSxcclxuICAgICAgZm9udFdlaWdodDogJ2JvZHknLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnaGVhZGluZycsXHJcbiAgICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICAgIHRyYW5zaXRpb246ICdjb2xvciAwLjI1cycsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc29jaWFsU2hhcmU6IHtcclxuICAgIHBvc2l0aW9uOiBbJ3JlbGF0aXZlJywgbnVsbCwgJ2Fic29sdXRlJ10sXHJcbiAgICByaWdodDogWzAsIG51bGwsIDYsIG51bGwsIDQsIDZdLFxyXG4gICAgYm90dG9tOiBbMCwgbnVsbCwgJzE4cHgnLCA1XSxcclxuICAgIHdpZHRoOiBbJzEwMCUnLCBudWxsLCAnYXV0byddLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogWydyb3cnLCBudWxsLCAnY29sdW1uJ10sXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIHRyYW5zaXRpb246ICdhbGwgMC4yNXMnLFxyXG4gICAgb3BhY2l0eTogWzEsIG51bGwsIDBdLFxyXG4gICAgcHQ6IDIsXHJcbiAgICBhOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbMCwgMSwgbnVsbCwgMl0sXHJcbiAgICAgIGNvbG9yOiBbJ3RleHQnLCBudWxsLCAncHJpbWFyeSddLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnMWVtJyxcclxuICAgICAgbXk6IFswLCBudWxsLCAnLTJweCddLFxyXG4gICAgICBweDogMSxcclxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cycsXHJcbiAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgIGNvbG9yOiBbJ3ByaW1hcnknLCBudWxsLCAndGV4dCddLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9