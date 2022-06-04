webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/service-section.js":
/*!*****************************************!*\
  !*** ./src/sections/service-section.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ServiceSection; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var components_text_feature__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/text-feature */ "./src/components/text-feature.js");
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-modal-video */ "./node_modules/react-modal-video/lib/index.js");
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var assets_service_thumb_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/service-thumb.png */ "./src/assets/service-thumb.png");
/* harmony import */ var assets_service_thumb_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_service_thumb_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_shape_pattern1_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/shape-pattern1.png */ "./src/assets/shape-pattern1.png");
/* harmony import */ var assets_shape_pattern1_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_shape_pattern1_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var assets_services_smart_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/services/smart.svg */ "./src/assets/services/smart.svg");
/* harmony import */ var assets_services_smart_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_services_smart_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var assets_services_secure_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! assets/services/secure.svg */ "./src/assets/services/secure.svg");
/* harmony import */ var assets_services_secure_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(assets_services_secure_svg__WEBPACK_IMPORTED_MODULE_10__);


var _jsxFileName = "C:\\Users\\Will's Gaming PC\\Documents\\Development\\WhoozyWraps\\src\\sections\\service-section.js",
    _templateObject;

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/** @jsx jsx */










var data = {
  subTitle: 'The process',
  title: 'Your imagination Achieved with precision ',
  features: [{
    id: 1,
    imgSrc: assets_services_smart_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
    altText: 'Smart Features',
    title: 'Smart Features',
    text: 'Get your blood tests delivered at let home collect sample from the victory of the managements. your blood tests.'
  }, {
    id: 2,
    imgSrc: assets_services_secure_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
    altText: 'Secure Contents',
    title: 'Secure Contents',
    text: 'Get your blood tests delivered at let home collect sample from the victory of the managements. your blood tests.'
  }]
};
function ServiceSection() {
  var _this = this;

  var handleClick = function handleClick(e) {
    e.preventDefault();
    setVideoOpen(true);
  };

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("section", {
    sx: {
      variant: 'section.services'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    sx: styles.containerBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.thumbnail,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: assets_service_thumb_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "Thumbnail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    sx: styles.videoBtn,
    onClick: handleClick,
    "aria-label": "Play Button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_6__["IoIosPlay"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  })))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.contentBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_text_feature__WEBPACK_IMPORTED_MODULE_4__["default"], {
    subTitle: data.subTitle,
    title: data.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    sx: styles.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, data.features.map(function (feature) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      sx: styles.card,
      key: feature.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 15
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Image"], {
      src: feature.imgSrc,
      alt: feature.altText,
      sx: styles.icon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }
    }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      sx: styles.wrapper,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
      sx: styles.wrapper.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 19
      }
    }, feature.title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      sx: styles.wrapper.subTitle,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 19
      }
    }, feature.text)));
  })))));
}
_c = ServiceSection;
var playPluse = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  from {\n    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);\n    opacity: 1;\n  }\n\n  to {\n\ttransform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);\n    opacity: 0;\n  }\n"])));
var styles = {
  coreFeature: {
    py: [0, null, null, 2, null, 7],
    position: 'relative'
  },
  containerBox: {
    display: 'flex',
    alignItems: ['flex-start', null, null, 'center'],
    justifyContent: ['flex-start', null, null, 'space-between'],
    flexDirection: ['column', null, null, 'row'],
    pb: [0, null, null, null, null, 7]
  },
  thumbnail: {
    mr: ['auto', null, null, 6, 60, 85],
    order: [2, null, null, 0],
    ml: ['auto', null, null, 0],
    display: 'inline-flex',
    position: 'relative',
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto']
    }
  },
  shapeBox: {
    position: 'absolute',
    bottom: -68,
    left: -160,
    zIndex: -1,
    display: ['none', null, null, null, null, 'inline-block']
  },
  videoBtn: {
    zIndex: 2,
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: ['60px', null, '80px', null, '100px'],
    height: ['60px', null, '80px', null, '100px'],
    p: '0px !important',
    backgroundColor: 'transparent',
    '&::before': {
      position: 'absolute',
      content: '""',
      left: '50%',
      top: '50%',
      transform: 'translateX(-50%) translateY(-50%)',
      display: 'block',
      width: ['60px', null, '80px', null, '100px'],
      height: ['60px', null, '80px', null, '100px'],
      backgroundColor: 'primary',
      borderRadius: '50%',
      animation: "".concat(playPluse, " 1.5s ease-out infinite"),
      opacity: 0.5
    },
    '> span': {
      backgroundColor: 'rgba(255,255,255,0.5)',
      width: 'inherit',
      height: 'inherit',
      textAlign: 'center',
      borderRadius: '50%',
      cursor: 'pointer',
      transition: 'all 0.5s',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      zIndex: 2
    },
    svg: {
      fontSize: [40, null, 48, null, 62]
    }
  },
  contentBox: {
    width: ['100%', null, null, 315, 390, 450, null, 500],
    flexShrink: 0,
    mb: [7, null, 60, 0],
    textAlign: ['center', null, null, 'left']
  },
  grid: {
    pr: [2, 0, null, null, 6, '70px'],
    pl: [2, 0],
    pt: [2, null, null, null, 3],
    mx: 'auto',
    width: ['100%', 370, 420, '100%'],
    gridGap: ['35px 0', null, null, null, '50px 0'],
    gridTemplateColumns: ['repeat(1,1fr)']
  },
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    transition: 'all 0.3s'
  },
  icon: {
    width: ['45px', null, null, null, '55px'],
    height: 'auto',
    flexShrink: 0,
    mr: [3, null, null, null, 4]
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    mt: '-5px',
    title: {
      fontSize: 3,
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3, 2, 3]
    },
    subTitle: {
      fontSize: [1, null, null, '14px', 1],
      fontWeight: 400,
      lineHeight: 1.9
    }
  },
  videoWrapper: {
    maxWidth: '100%',
    position: 'relative',
    width: '900px',
    '&:before': {
      content: '""',
      display: 'block',
      paddingTop: '56.25%'
    },
    iframe: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0
    }
  }
};

var _c;

$RefreshReg$(_c, "ServiceSection");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3NlcnZpY2Utc2VjdGlvbi5qcyJdLCJuYW1lcyI6WyJkYXRhIiwic3ViVGl0bGUiLCJ0aXRsZSIsImZlYXR1cmVzIiwiaWQiLCJpbWdTcmMiLCJTbWFydCIsImFsdFRleHQiLCJ0ZXh0IiwiU2VjdXJlIiwiU2VydmljZVNlY3Rpb24iLCJoYW5kbGVDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNldFZpZGVvT3BlbiIsInZhcmlhbnQiLCJzdHlsZXMiLCJjb250YWluZXJCb3giLCJ0aHVtYm5haWwiLCJTZXJ2aWNlVGh1bWIiLCJ2aWRlb0J0biIsImNvbnRlbnRCb3giLCJncmlkIiwibWFwIiwiZmVhdHVyZSIsImNhcmQiLCJpY29uIiwid3JhcHBlciIsInBsYXlQbHVzZSIsImtleWZyYW1lcyIsImNvcmVGZWF0dXJlIiwicHkiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJmbGV4RGlyZWN0aW9uIiwicGIiLCJtciIsIm9yZGVyIiwibWwiLCJ6SW5kZXgiLCJoZWlnaHQiLCJzaGFwZUJveCIsImJvdHRvbSIsImxlZnQiLCJ0b3AiLCJ0cmFuc2Zvcm0iLCJ3aWR0aCIsInAiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb250ZW50IiwiYm9yZGVyUmFkaXVzIiwiYW5pbWF0aW9uIiwib3BhY2l0eSIsInRleHRBbGlnbiIsImN1cnNvciIsInRyYW5zaXRpb24iLCJzdmciLCJmb250U2l6ZSIsImZsZXhTaHJpbmsiLCJtYiIsInByIiwicGwiLCJwdCIsIm14IiwiZ3JpZEdhcCIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJtdCIsImNvbG9yIiwibGluZUhlaWdodCIsImZvbnRXZWlnaHQiLCJ2aWRlb1dyYXBwZXIiLCJtYXhXaWR0aCIsInBhZGRpbmdUb3AiLCJpZnJhbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FB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QUFFLE1BRkY7QUFHUEcsaUJBQWEsRUFBRSxRQUhSO0FBSVBtQixhQUFTLEVBQUUsTUFKSjtBQUtQYSxNQUFFLEVBQUUsTUFMRztBQU1QbEUsU0FBSyxFQUFFO0FBQ0x5RCxjQUFRLEVBQUUsQ0FETDtBQUVMVSxXQUFLLEVBQUUsbUJBRkY7QUFHTEMsZ0JBQVUsRUFBRSxHQUhQO0FBSUxDLGdCQUFVLEVBQUUsR0FKUDtBQUtMVixRQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCO0FBTEMsS0FOQTtBQWNQNUQsWUFBUSxFQUFFO0FBQ1IwRCxjQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLElBQVYsRUFBZ0IsTUFBaEIsRUFBd0IsQ0FBeEIsQ0FERjtBQUVSWSxnQkFBVSxFQUFFLEdBRko7QUFHUkQsZ0JBQVUsRUFBRTtBQUhKO0FBZEgsR0FwR0k7QUF3SGJFLGNBQVksRUFBRTtBQUNaQyxZQUFRLEVBQUUsTUFERTtBQUVaekMsWUFBUSxFQUFFLFVBRkU7QUFHWmdCLFNBQUssRUFBRSxPQUhLO0FBSVosZ0JBQVk7QUFDVkcsYUFBTyxFQUFFLElBREM7QUFFVmxCLGFBQU8sRUFBRSxPQUZDO0FBR1Z5QyxnQkFBVSxFQUFFO0FBSEYsS0FKQTtBQVNaQyxVQUFNLEVBQUU7QUFDTjNCLFdBQUssRUFBRSxNQUREO0FBRU5OLFlBQU0sRUFBRSxNQUZGO0FBR05WLGNBQVEsRUFBRSxVQUhKO0FBSU5jLFNBQUcsRUFBRSxDQUpDO0FBS05ELFVBQUksRUFBRTtBQUxBO0FBVEk7QUF4SEQsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lMmMwN2FhODI5NDIyMzMzMzlmOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG4vKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBDb250YWluZXIsIEJveCwgR3JpZCwgVGV4dCwgSGVhZGluZywgQnV0dG9uLCBJbWFnZSB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XHJcbmltcG9ydCBUZXh0RmVhdHVyZSBmcm9tICdjb21wb25lbnRzL3RleHQtZmVhdHVyZSc7XHJcbmltcG9ydCBNb2RhbFZpZGVvIGZyb20gJ3JlYWN0LW1vZGFsLXZpZGVvJztcclxuaW1wb3J0IHsgSW9Jb3NQbGF5IH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xyXG5cclxuaW1wb3J0IFNlcnZpY2VUaHVtYiBmcm9tICdhc3NldHMvc2VydmljZS10aHVtYi5wbmcnO1xyXG5pbXBvcnQgc2hhcGVQYXR0ZXJuIGZyb20gJ2Fzc2V0cy9zaGFwZS1wYXR0ZXJuMS5wbmcnO1xyXG5cclxuaW1wb3J0IFNtYXJ0IGZyb20gJ2Fzc2V0cy9zZXJ2aWNlcy9zbWFydC5zdmcnO1xyXG5pbXBvcnQgU2VjdXJlIGZyb20gJ2Fzc2V0cy9zZXJ2aWNlcy9zZWN1cmUuc3ZnJztcclxuXHJcbmNvbnN0IGRhdGEgPSB7XHJcbiAgc3ViVGl0bGU6ICdUaGUgcHJvY2VzcycsXHJcbiAgdGl0bGU6ICdZb3VyIGltYWdpbmF0aW9uIEFjaGlldmVkIHdpdGggcHJlY2lzaW9uICcsXHJcbiAgZmVhdHVyZXM6IFtcclxuICAgIHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIGltZ1NyYzogU21hcnQsXHJcbiAgICAgIGFsdFRleHQ6ICdTbWFydCBGZWF0dXJlcycsXHJcbiAgICAgIHRpdGxlOiAnU21hcnQgRmVhdHVyZXMnLFxyXG4gICAgICB0ZXh0OlxyXG4gICAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgbGV0IGhvbWUgY29sbGVjdCBzYW1wbGUgZnJvbSB0aGUgdmljdG9yeSBvZiB0aGUgbWFuYWdlbWVudHMuIHlvdXIgYmxvb2QgdGVzdHMuJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICBpbWdTcmM6IFNlY3VyZSxcclxuICAgICAgYWx0VGV4dDogJ1NlY3VyZSBDb250ZW50cycsXHJcbiAgICAgIHRpdGxlOiAnU2VjdXJlIENvbnRlbnRzJyxcclxuICAgICAgdGV4dDpcclxuICAgICAgICAnR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IGxldCBob21lIGNvbGxlY3Qgc2FtcGxlIGZyb20gdGhlIHZpY3Rvcnkgb2YgdGhlIG1hbmFnZW1lbnRzLiB5b3VyIGJsb29kIHRlc3RzLicsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXJ2aWNlU2VjdGlvbigpIHtcclxuICBjb25zdCBoYW5kbGVDbGljayA9KGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldFZpZGVvT3Blbih0cnVlKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIHN4PXt7dmFyaWFudDogJ3NlY3Rpb24uc2VydmljZXMnfX0+XHJcbiAgICAgIDxDb250YWluZXIgc3ggPXtzdHlsZXMuY29udGFpbmVyQm94fT5cclxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMudGh1bWJuYWlsfT5cclxuICAgICAgICAgIDxJbWFnZSBzcmMgPXtTZXJ2aWNlVGh1bWJ9IGFsdCA9XCJUaHVtYm5haWxcIi8+XHJcbiAgICAgICAgICA8QnV0dG9uIFxyXG4gICAgICAgICAgc3ggPXtzdHlsZXMudmlkZW9CdG59XHJcbiAgICAgICAgICBvbkNsaWNrID0ge2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIlBsYXkgQnV0dG9uXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgPElvSW9zUGxheSAgLz5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPEJveCBzeCA9e3N0eWxlcy5jb250ZW50Qm94fT5cclxuICAgICAgICAgIDxUZXh0RmVhdHVyZSBzdWJUaXRsZSA9e2RhdGEuc3ViVGl0bGV9IHRpdGxlID17ZGF0YS50aXRsZX0vPlxyXG4gICAgICAgICAgPEdyaWQgc3ggPXtzdHlsZXMuZ3JpZH0+XHJcbiAgICAgICAgICAgIHtkYXRhLmZlYXR1cmVzLm1hcCgoZmVhdHVyZSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxCb3ggc3ggPSB7c3R5bGVzLmNhcmR9IGtleSA9e2ZlYXR1cmUuaWR9PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYyA9e2ZlYXR1cmUuaW1nU3JjfSBhbHQ9e2ZlYXR1cmUuYWx0VGV4dH0gc3g9e3N0eWxlcy5pY29ufS8+XHJcbiAgICAgICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICAgIDxIZWFkaW5nIHN4PSB7c3R5bGVzLndyYXBwZXIudGl0bGV9PntmZWF0dXJlLnRpdGxlfTwvSGVhZGluZz5cclxuICAgICAgICAgICAgICAgICAgPFRleHQgc3g9e3N0eWxlcy53cmFwcGVyLnN1YlRpdGxlfT57ZmVhdHVyZS50ZXh0fTwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L3NlY3Rpb24+XHJcblxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHBsYXlQbHVzZSA9IGtleWZyYW1lc2BcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVooMCkgc2NhbGUoMSk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVooMCkgc2NhbGUoMS41KTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGNvcmVGZWF0dXJlOiB7XHJcbiAgICBweTogWzAsIG51bGwsIG51bGwsIDIsIG51bGwsIDddLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgfSxcclxuICBjb250YWluZXJCb3g6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6IFsnZmxleC1zdGFydCcsIG51bGwsIG51bGwsICdjZW50ZXInXSxcclxuICAgIGp1c3RpZnlDb250ZW50OiBbJ2ZsZXgtc3RhcnQnLCBudWxsLCBudWxsLCAnc3BhY2UtYmV0d2VlbiddLFxyXG4gICAgZmxleERpcmVjdGlvbjogWydjb2x1bW4nLCBudWxsLCBudWxsLCAncm93J10sXHJcbiAgICBwYjogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDddLFxyXG4gIH0sXHJcbiAgdGh1bWJuYWlsOiB7XHJcbiAgICBtcjogWydhdXRvJywgbnVsbCwgbnVsbCwgNiwgNjAsIDg1XSxcclxuICAgIG9yZGVyOiBbMiwgbnVsbCwgbnVsbCwgMF0sXHJcbiAgICBtbDogWydhdXRvJywgbnVsbCwgbnVsbCwgMF0sXHJcbiAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAnPiBpbWcnOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICB6SW5kZXg6IDEsXHJcbiAgICAgIGhlaWdodDogWzMxMCwgJ2F1dG8nXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzaGFwZUJveDoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBib3R0b206IC02OCxcclxuICAgIGxlZnQ6IC0xNjAsXHJcbiAgICB6SW5kZXg6IC0xLFxyXG4gICAgZGlzcGxheTogWydub25lJywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJ2lubGluZS1ibG9jayddLFxyXG4gIH0sXHJcbiAgdmlkZW9CdG46IHtcclxuICAgIHpJbmRleDogMixcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgbGVmdDogJzUwJScsXHJcbiAgICB0b3A6ICc1MCUnLFxyXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICAgIHdpZHRoOiBbJzYwcHgnLCBudWxsLCAnODBweCcsIG51bGwsICcxMDBweCddLFxyXG4gICAgaGVpZ2h0OiBbJzYwcHgnLCBudWxsLCAnODBweCcsIG51bGwsICcxMDBweCddLFxyXG4gICAgcDogJzBweCAhaW1wb3J0YW50JyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgICcmOjpiZWZvcmUnOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICBjb250ZW50OiAnXCJcIicsXHJcbiAgICAgIGxlZnQ6ICc1MCUnLFxyXG4gICAgICB0b3A6ICc1MCUnLFxyXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSknLFxyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICB3aWR0aDogWyc2MHB4JywgbnVsbCwgJzgwcHgnLCBudWxsLCAnMTAwcHgnXSxcclxuICAgICAgaGVpZ2h0OiBbJzYwcHgnLCBudWxsLCAnODBweCcsIG51bGwsICcxMDBweCddLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICAgICAgYW5pbWF0aW9uOiBgJHtwbGF5UGx1c2V9IDEuNXMgZWFzZS1vdXQgaW5maW5pdGVgLFxyXG4gICAgICBvcGFjaXR5OiAwLjUsXHJcbiAgICB9LFxyXG4gICAgJz4gc3Bhbic6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjUpJyxcclxuICAgICAgd2lkdGg6ICdpbmhlcml0JyxcclxuICAgICAgaGVpZ2h0OiAnaW5oZXJpdCcsXHJcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuNXMnLFxyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICB6SW5kZXg6IDIsXHJcbiAgICB9LFxyXG4gICAgc3ZnOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbNDAsIG51bGwsIDQ4LCBudWxsLCA2Ml0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY29udGVudEJveDoge1xyXG4gICAgd2lkdGg6IFsnMTAwJScsIG51bGwsIG51bGwsIDMxNSwgMzkwLCA0NTAsIG51bGwsIDUwMF0sXHJcbiAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgbWI6IFs3LCBudWxsLCA2MCwgMF0sXHJcbiAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgbnVsbCwgbnVsbCwgJ2xlZnQnXSxcclxuICB9LFxyXG4gIGdyaWQ6IHtcclxuICAgIHByOiBbMiwgMCwgbnVsbCwgbnVsbCwgNiwgJzcwcHgnXSxcclxuICAgIHBsOiBbMiwgMF0sXHJcbiAgICBwdDogWzIsIG51bGwsIG51bGwsIG51bGwsIDNdLFxyXG4gICAgbXg6ICdhdXRvJyxcclxuICAgIHdpZHRoOiBbJzEwMCUnLCAzNzAsIDQyMCwgJzEwMCUnXSxcclxuICAgIGdyaWRHYXA6IFsnMzVweCAwJywgbnVsbCwgbnVsbCwgbnVsbCwgJzUwcHggMCddLFxyXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogWydyZXBlYXQoMSwxZnIpJ10sXHJcbiAgfSxcclxuICBjYXJkOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXHJcbiAgICB0cmFuc2l0aW9uOiAnYWxsIDAuM3MnLFxyXG4gIH0sXHJcblxyXG4gIGljb246IHtcclxuICAgIHdpZHRoOiBbJzQ1cHgnLCBudWxsLCBudWxsLCBudWxsLCAnNTVweCddLFxyXG4gICAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgbXI6IFszLCBudWxsLCBudWxsLCBudWxsLCA0XSxcclxuICB9LFxyXG4gIHdyYXBwZXI6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIHRleHRBbGlnbjogJ2xlZnQnLFxyXG4gICAgbXQ6ICctNXB4JyxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiAzLFxyXG4gICAgICBjb2xvcjogJ2hlYWRpbmdfc2Vjb25kYXJ5JyxcclxuICAgICAgbGluZUhlaWdodDogMS40LFxyXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICAgIG1iOiBbMiwgbnVsbCwgMywgMiwgM10sXHJcbiAgICB9LFxyXG5cclxuICAgIHN1YlRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgJzE0cHgnLCAxXSxcclxuICAgICAgZm9udFdlaWdodDogNDAwLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdmlkZW9XcmFwcGVyOiB7XHJcbiAgICBtYXhXaWR0aDogJzEwMCUnLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICB3aWR0aDogJzkwMHB4JyxcclxuICAgICcmOmJlZm9yZSc6IHtcclxuICAgICAgY29udGVudDogJ1wiXCInLFxyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICBwYWRkaW5nVG9wOiAnNTYuMjUlJyxcclxuICAgIH0sXHJcbiAgICBpZnJhbWU6IHtcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=