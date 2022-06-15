webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/team-section.js":
/*!**************************************!*\
  !*** ./src/sections/team-section.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TeamSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var components_team_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/team-card */ "./src/components/team-card.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var assets_team_member_1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/team/member-1.png */ "./src/assets/team/member-1.png");
/* harmony import */ var assets_team_member_1_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_team_member_1_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_team_member_2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/team/member-2.png */ "./src/assets/team/member-2.png");
/* harmony import */ var assets_team_member_2_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_team_member_2_png__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\Will's Gaming PC\\Documents\\Development\\WhoozyWraps\\src\\sections\\team-section.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */






 // import Member3 from 'assets/team/member-3.png';
// import Member4 from 'assets/team/member-4.png';
// import Member5 from 'assets/team/member-5.png';
// import Member6 from 'assets/team/member-6.png';

var data = [{
  id: 1,
  imgSrc: assets_team_member_1_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  altText: 'Saimon Harmer',
  title: 'Saimon Harmer',
  designation: 'CEO and Founder',
  socialProfile: [{
    id: 1,
    name: 'facebook',
    path: '#',
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaFacebookF"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 15
      }
    })
  }, {
    id: 3,
    name: 'instagram',
    path: '#',
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaInstagram"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 15
      }
    })
  }]
}, {
  id: 2,
  imgSrc: assets_team_member_2_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  altText: 'Aaron Nunez',
  title: 'Aaron Nunez',
  designation: 'Founder',
  socialProfile: [{
    id: 1,
    name: 'facebook',
    path: '#',
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaFacebookF"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 15
      }
    })
  }, {
    id: 2,
    name: 'twitter',
    path: '#',
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaTwitter"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 15
      }
    })
  }, {
    id: 3,
    name: 'instagram',
    path: '#',
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaInstagram"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 15
      }
    })
  }]
}];
function TeamSection() {
  var _this = this;

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    slogan: "Meet the team",
    title: "Our talented individuals",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    sx: styles.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, data.map(function (item) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_team_card__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: item.id,
      src: item.imgSrc,
      altText: item.altText,
      title: item.item,
      designation: item.designation,
      social: item.socialProfile,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 15
      }
    });
  }))));
}
_c = TeamSection;
var styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: ['repeat(2,1fr)', null, 'repeat(2,1fr)', null, 'repeat(3,1fr)']
  }
};

var _c;

$RefreshReg$(_c, "TeamSection");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3RlYW0tc2VjdGlvbi5qcyJdLCJuYW1lcyI6WyJkYXRhIiwiaWQiLCJpbWdTcmMiLCJNZW1iZXIxIiwiYWx0VGV4dCIsInRpdGxlIiwiZGVzaWduYXRpb24iLCJzb2NpYWxQcm9maWxlIiwibmFtZSIsInBhdGgiLCJpY29uIiwiTWVtYmVyMiIsIlRlYW1TZWN0aW9uIiwic3R5bGVzIiwiZ3JpZCIsIm1hcCIsIml0ZW0iLCJtdCIsImdyaWRHYXAiLCJncmlkVGVtcGxhdGVDb2x1bW5zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0NBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLENBQ1g7QUFDRUMsSUFBRSxFQUFFLENBRE47QUFFRUMsUUFBTSxFQUFFQywrREFGVjtBQUdFQyxTQUFPLEVBQUUsZUFIWDtBQUlFQyxPQUFLLEVBQUUsZUFKVDtBQUtFQyxhQUFXLEVBQUUsaUJBTGY7QUFNRUMsZUFBYSxFQUFFLENBQ2I7QUFDRU4sTUFBRSxFQUFFLENBRE47QUFFRU8sUUFBSSxFQUFFLFVBRlI7QUFHRUMsUUFBSSxFQUFFLEdBSFI7QUFJRUMsUUFBSSxFQUFFLHFEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKUixHQURhLEVBT2I7QUFDRVQsTUFBRSxFQUFFLENBRE47QUFFRU8sUUFBSSxFQUFFLFdBRlI7QUFHRUMsUUFBSSxFQUFFLEdBSFI7QUFJRUMsUUFBSSxFQUFFLHFEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKUixHQVBhO0FBTmpCLENBRFcsRUFzQlg7QUFDRVQsSUFBRSxFQUFFLENBRE47QUFFRUMsUUFBTSxFQUFFUywrREFGVjtBQUdFUCxTQUFPLEVBQUUsYUFIWDtBQUlFQyxPQUFLLEVBQUUsYUFKVDtBQUtFQyxhQUFXLEVBQUUsU0FMZjtBQU1FQyxlQUFhLEVBQUUsQ0FDYjtBQUNFTixNQUFFLEVBQUUsQ0FETjtBQUVFTyxRQUFJLEVBQUUsVUFGUjtBQUdFQyxRQUFJLEVBQUUsR0FIUjtBQUlFQyxRQUFJLEVBQUUscURBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpSLEdBRGEsRUFPYjtBQUNFVCxNQUFFLEVBQUUsQ0FETjtBQUVFTyxRQUFJLEVBQUUsU0FGUjtBQUdFQyxRQUFJLEVBQUUsR0FIUjtBQUlFQyxRQUFJLEVBQUUscURBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpSLEdBUGEsRUFhYjtBQUNFVCxNQUFFLEVBQUUsQ0FETjtBQUVFTyxRQUFJLEVBQUUsV0FGUjtBQUdFQyxRQUFJLEVBQUUsR0FIUjtBQUlFQyxRQUFJLEVBQUUscURBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpSLEdBYmE7QUFOakIsQ0F0QlcsQ0FBYjtBQW1EZSxTQUFTRSxXQUFULEdBQXVCO0FBQUE7O0FBQ3BDLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyxpRUFBRDtBQUNFLFVBQU0sRUFBRSxlQURWO0FBRUUsU0FBSyxFQUFDLDBCQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUtJLHFEQUFDLDZDQUFEO0FBQU0sTUFBRSxFQUFFQyxNQUFNLENBQUNDLElBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2QsSUFBSSxDQUFDZSxHQUFMLENBQVMsVUFBQ0MsSUFBRDtBQUFBLFdBQ1IscURBQUMsNERBQUQ7QUFDRSxTQUFHLEVBQUVBLElBQUksQ0FBQ2YsRUFEWjtBQUVFLFNBQUcsRUFBRWUsSUFBSSxDQUFDZCxNQUZaO0FBR0UsYUFBTyxFQUFFYyxJQUFJLENBQUNaLE9BSGhCO0FBSUUsV0FBSyxFQUFFWSxJQUFJLENBQUNBLElBSmQ7QUFLRSxpQkFBVyxFQUFFQSxJQUFJLENBQUNWLFdBTHBCO0FBTUUsWUFBTSxFQUFFVSxJQUFJLENBQUNULGFBTmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURRO0FBQUEsR0FBVCxDQURILENBTEosQ0FERixDQURGO0FBdUJEO0tBeEJ1QkssVztBQTBCeEIsSUFBTUMsTUFBTSxHQUFHO0FBQ2JDLE1BQUksRUFBRTtBQUNKRyxNQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLENBQUMsQ0FBWCxFQUFjLElBQWQsRUFBb0IsQ0FBQyxDQUFyQixDQURBO0FBRUpDLFdBQU8sRUFBRSxDQUFDLFVBQUQsRUFBYSxJQUFiLEVBQW1CLENBQW5CLEVBQXNCLElBQXRCLEVBQTRCLElBQTVCLEVBQWtDLFdBQWxDLENBRkw7QUFHSkMsdUJBQW1CLEVBQUUsQ0FDbkIsZUFEbUIsRUFFbkIsSUFGbUIsRUFHbkIsZUFIbUIsRUFJbkIsSUFKbUIsRUFLbkIsZUFMbUI7QUFIakI7QUFETyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmRjMmZkMzk5MGZiYzUwNzkwY2YwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEdyaWQgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXInO1xyXG5pbXBvcnQgVGVhbUNhcmQgZnJvbSAnY29tcG9uZW50cy90ZWFtLWNhcmQnO1xyXG5pbXBvcnQgeyBGYUZhY2Vib29rRiwgRmFUd2l0dGVyLCBGYUluc3RhZ3JhbSB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuXHJcbmltcG9ydCBNZW1iZXIxIGZyb20gJ2Fzc2V0cy90ZWFtL21lbWJlci0xLnBuZyc7XHJcbmltcG9ydCBNZW1iZXIyIGZyb20gJ2Fzc2V0cy90ZWFtL21lbWJlci0yLnBuZyc7XHJcbi8vIGltcG9ydCBNZW1iZXIzIGZyb20gJ2Fzc2V0cy90ZWFtL21lbWJlci0zLnBuZyc7XHJcbi8vIGltcG9ydCBNZW1iZXI0IGZyb20gJ2Fzc2V0cy90ZWFtL21lbWJlci00LnBuZyc7XHJcbi8vIGltcG9ydCBNZW1iZXI1IGZyb20gJ2Fzc2V0cy90ZWFtL21lbWJlci01LnBuZyc7XHJcbi8vIGltcG9ydCBNZW1iZXI2IGZyb20gJ2Fzc2V0cy90ZWFtL21lbWJlci02LnBuZyc7XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgaW1nU3JjOiBNZW1iZXIxLFxyXG4gICAgYWx0VGV4dDogJ1NhaW1vbiBIYXJtZXInLFxyXG4gICAgdGl0bGU6ICdTYWltb24gSGFybWVyJyxcclxuICAgIGRlc2lnbmF0aW9uOiAnQ0VPIGFuZCBGb3VuZGVyJyxcclxuICAgIHNvY2lhbFByb2ZpbGU6IFtcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5hbWU6ICdmYWNlYm9vaycsXHJcbiAgICAgICAgcGF0aDogJyMnLFxyXG4gICAgICAgIGljb246IDxGYUZhY2Vib29rRiAvPixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAzLFxyXG4gICAgICAgIG5hbWU6ICdpbnN0YWdyYW0nLFxyXG4gICAgICAgIHBhdGg6ICcjJyxcclxuICAgICAgICBpY29uOiA8RmFJbnN0YWdyYW0gLz4sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBpbWdTcmM6IE1lbWJlcjIsXHJcbiAgICBhbHRUZXh0OiAnQWFyb24gTnVuZXonLFxyXG4gICAgdGl0bGU6ICdBYXJvbiBOdW5leicsXHJcbiAgICBkZXNpZ25hdGlvbjogJ0ZvdW5kZXInLFxyXG4gICAgc29jaWFsUHJvZmlsZTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmFtZTogJ2ZhY2Vib29rJyxcclxuICAgICAgICBwYXRoOiAnIycsXHJcbiAgICAgICAgaWNvbjogPEZhRmFjZWJvb2tGIC8+LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgbmFtZTogJ3R3aXR0ZXInLFxyXG4gICAgICAgIHBhdGg6ICcjJyxcclxuICAgICAgICBpY29uOiA8RmFUd2l0dGVyIC8+LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgbmFtZTogJ2luc3RhZ3JhbScsXHJcbiAgICAgICAgcGF0aDogJyMnLFxyXG4gICAgICAgIGljb246IDxGYUluc3RhZ3JhbSAvPixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlYW1TZWN0aW9uKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbj5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8U2VjdGlvbkhlYWRlclxyXG4gICAgICAgICAgc2xvZ2FuID1cIk1lZXQgdGhlIHRlYW1cIlxyXG4gICAgICAgICAgdGl0bGU9XCJPdXIgdGFsZW50ZWQgaW5kaXZpZHVhbHNcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxHcmlkIHN4PXtzdHlsZXMuZ3JpZH0+XHJcbiAgICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxUZWFtQ2FyZFxyXG4gICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgc3JjPXtpdGVtLmltZ1NyY31cclxuICAgICAgICAgICAgICAgIGFsdFRleHQ9e2l0ZW0uYWx0VGV4dH1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLml0ZW19XHJcbiAgICAgICAgICAgICAgICBkZXNpZ25hdGlvbj17aXRlbS5kZXNpZ25hdGlvbn1cclxuICAgICAgICAgICAgICAgIHNvY2lhbD17aXRlbS5zb2NpYWxQcm9maWxlfVxyXG5cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGdyaWQ6IHtcclxuICAgIG10OiBbMCwgbnVsbCwgLTYsIG51bGwsIC00XSxcclxuICAgIGdyaWRHYXA6IFsnMzVweCAwcHgnLCBudWxsLCAwLCBudWxsLCBudWxsLCAnMzBweCAzNXB4J10sXHJcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXHJcbiAgICAgICdyZXBlYXQoMiwxZnIpJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJ3JlcGVhdCgyLDFmciknLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAncmVwZWF0KDMsMWZyKScsXHJcbiAgICBdLFxyXG4gIH0sXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=