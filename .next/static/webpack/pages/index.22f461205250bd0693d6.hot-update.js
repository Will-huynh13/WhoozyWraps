webpackHotUpdate_N_E("pages/index",{

/***/ "./src/theme/index.js":
/*!****************************!*\
  !*** ./src/theme/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony default export */ __webpack_exports__["default"] = ({
  // example colors with dark mode
  colors: {
    text: '#343D48',
    // body color and primary color
    text_secondary: '#02073E',
    // secondary body color
    heading: '#0F2137',
    // primary heading color
    heading_secondary: '#0F2137',
    // heading color
    background: '##a8b3c1',
    // body background color
    background_secondary: '#F9FBFD',
    // secondary background color
    border_color: '#E5ECF4',
    // border color
    yellow: '#FFA740',
    // border color
    primary: '#2563FF',
    // primary button and link color
    secondary: '#2563FF',
    // secondary color - can be used for hover states
    muted: '#E4E4E4',
    // muted color
    accent: '#609',
    // a contrast color for emphasizing UI
    // highlight	a background color for highlighting text
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#0cf',
        secondary: '#09c',
        muted: '#111'
      }
    }
  },
  breakpoints: ['480px', '640px', '768px', '1024px', '1220px', '1366px', '1620px'],
  fonts: {
    body: "'Hemi Head FourTwentySix', sans-serif",
    heading: "'Hemi Head FourTwentySix', sans-serif",
    text: "'DM Sans', sans-serif"
  },
  fontSizes: [12, 15, 16, 18, 20, 22, 24, 28, 32, 36, 42, 48, 52, 64],
  fontWeights: {
    body: 'normal',
    heading: 500,
    bold: 700
  },
  lineHeights: {
    body: 1.8,
    heading: 1.5
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
    heading: '-0.5px'
  },
  space: [0, 5, 10, 15, 20, 25, 30, 50, 80, 100, 120, 150],
  // variants can use custom, user-defined names
  layout: {
    container: {
      maxWidth: ['100%', null, null, '780px', '1020px', '1200px', null, '1310px'],
      px: [4, 6]
    },
    header: {
      color: '#02073E',
      fontWeight: 'normal',
      py: 3,
      position: 'absolute',
      width: '100%'
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    main: {}
  },
  section: {
    keyFeature: {
      //products
      pt: [8, null, 9, null, null, 10],
      pb: ['90px', null, 9, null, null, 10, null, '165px']
    },
    feature: {
      //gallery
      pb: [8, null, 9, null, null, 10, null, '170px']
    },
    news: {
      pb: [8, null, 9, null, null, 10, null, '170px']
    },
    coreFeature: {
      //explore
      pb: [8, null, 9, null, null, 10, null, '170px'],
      overflow: 'hidden'
    },
    testimonial: {
      pt: [8, null, 8, '70px', null, 8, null, '145px'],
      pb: ['90px', null, 9, null, null, 10, null, '190px'],
      overflow: 'hidden'
    },
    services: {
      pb: ['90px', null, 9, null, null, 10, null, '150px']
    },
    pricing: {
      pt: [8, null, 9, null, null, 10, null, '180px'],
      pb: ['90px', null, 9, null, null, 10, null, '180px']
    }
  },
  sectionHeader: {
    width: ['100%', null, '540px'],
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: ['-3px', null, -1],
    marginBottom: ['50px', null, '60px', null, null, '65px', null, '80px'],
    mx: 'auto',
    title: {
      fontSize: ['24px', null, '28px', null, null, '32px', null, '36px'],
      color: 'heading',
      lineHeight: [1.3, null, null, 1.25],
      textAlign: 'center',
      fontWeight: '700',
      letterSpacing: '1px'
    },
    subTitle: {
      fontSize: [0, '13px', null, '14px'],
      color: 'primary',
      textAlign: 'center',
      letterSpacing: ['1.5px', null, '2px'],
      textTransform: 'uppercase',
      fontWeight: '700',
      mb: 2,
      lineHeight: 1.5
    }
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: [4],
      letterSpacing: '.50px',
      color: 'heading'
    },
    heroPrimary: {
      color: 'heading',
      fontSize: ['32px', '36px', '42px', '40px', '42px', '52px', '58px', '66px'],
      lineHeight: [1.3, null, null, null, null, 1.2],
      fontWeight: 700,
      mb: [4, null, null, null, null, 5]
    },
    heroSecondary: {
      fontFamily: 'text',
      fontSize: ["17px", "17px", '17px', null, null, '17px', 4],
      lineHeight: [1.9, null, null, 2],
      fontWeight: 'body',
      mb: 5,
      px: [0, null, 5, 6, null, 8, 9],
      color: 'heading'
    },
    title: {
      // extends the text.heading styles
      variant: 'text.heading',
      fontWeight: 'bold',
      fontSize: [3, null, 4],
      lineHeight: 1.25,
      mb: 1
    },
    lead: {
      fontSize: 40,
      fontFamily: 'DM Sans',
      fontWeight: '500',
      lineHeight: '60px',
      letterSpacing: '-1.5px',
      color: '#0F2137'
    },
    muted: {
      lineHeight: '26px',
      color: 'muted'
    },
    secondary: {
      fontWeight: 500,
      color: '#00A99D',
      lineHeight: '40px'
    }
  },
  links: {
    "default": {
      cursor: 'pointer'
    },
    bold: {
      fontWeight: 'bold'
    },
    nav: {
      display: ['none', null, 'inline-block'],
      px: 25,
      fontWeight: 'normal'
    },
    blog: {
      display: 'block',
      px: 0,
      color: 'inherit',
      textDecoration: 'none',
      fontSize: 'inherit',
      transition: 'color 0.25s',
      '&:hover': {
        color: 'primary'
      }
    },
    footer: {
      display: 'block',
      px: 0,
      color: 'inherit',
      textDecoration: 'none'
    },
    logo: {
      display: 'flex'
    }
  },
  images: {
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 99999
    }
  },
  // variants for buttons
  buttons: {
    menu: {
      display: [null, null, 'none']
    },
    // default variant for MenuButton
    // you can reference other values defined in the theme
    defaultBtn: {
      borderRadius: '45px',
      fontSize: ['14px', null, null, 2],
      letterSpacings: '-0.15px',
      padding: ['12px 20px', null, '15px 30px'],
      fontFamily: 'body',
      cursor: 'pointer',
      lineHeight: 1.2,
      transition: 'all 0.25s',
      fontWeight: 500,
      '&:focus': {
        outline: 0
      }
    },
    primary: {
      variant: 'buttons.defaultBtn',
      color: 'white',
      bg: 'primary',
      '&:hover': {
        boxShadow: 'rgba(233, 76, 84, 0.57) 0px 9px 20px -5px'
      }
    },
    whiteButton: {
      variant: 'buttons.defaultBtn',
      color: 'heading_secondary',
      bg: 'white',
      '&:hover': {
        boxShadow: 'rgba(0, 0, 0, 0.5) 0px 12px 24px -10px'
      }
    },
    secondary: {
      variant: 'buttons.defaultBtn',
      border: '2px solid',
      borderColor: 'primary',
      color: 'primary',
      bg: 'transparent',
      padding: ['10px 15px', null, '15px 30px'],
      '&:hover': {
        color: 'white',
        bg: 'primary'
      }
    },
    textButton: {
      variant: 'buttons.defaultBtn',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      color: 'white',
      svg: {
        fontSize: [4, 6],
        mr: 2
      }
    }
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4
    },
    offer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      flex: ['1 1 calc(50% - 16px)', '1 1 20%'],
      minHeight: 130,
      m: 2,
      background: '#FFFFFF',
      border: '1px solid #EDEFF6',
      borderRadius: 5
    },
    featureCard: {
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'row',
      p: 3
    }
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: 'bold'
    },
    input: {
      borderRadius: 8,
      borderColor: 'border_color',
      height: 60,
      '&:focus': {
        borderColor: 'primary',
        boxShadow: function boxShadow(t) {
          return "0 0 0 2px ".concat(t.colors.primary);
        },
        outline: 'none'
      }
    }
  },
  badges: {
    primary: {
      color: 'background',
      bg: '#28A5FF',
      borderRadius: 30,
      p: '3px 11px',
      fontSize: 1,
      letterSpacing: '-0.5px'
    },
    outline: {
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 1px'
    }
  },
  styles: {
    // To add base, top-level styles to the <body> element, use theme.styles.root.
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      fontSmoothing: 'antialiased',
      // Modal Global Style
      '.modal-video-close-btn': {
        cursor: 'pointer'
      },
      '.modal-video-movie-wrap': {
        margin: 6,
        width: 'auto'
      }
    },
    // Divider styles
    hr: {
      border: 0,
      borderBottom: '1px solid',
      borderColor: '#D9E0E7'
    },
    // also you can use other HTML elements style here
    ul: {
      listStyle: 'none'
    },
    srOnly: {
      border: '0 !important',
      clip: 'rect(1px, 1px, 1px, 1px) !important',
      clipPath: 'inset(50%) !important',
      height: '1px !important',
      margin: '-1px !important',
      overflow: 'hidden !important',
      padding: '0 !important',
      position: 'absolute !important',
      width: '1px !important',
      whiteSpace: 'nowrap !important'
    }
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3RoZW1lL2luZGV4LmpzIl0sIm5hbWVzIjpbImNvbG9ycyIsInRleHQiLCJ0ZXh0X3NlY29uZGFyeSIsImhlYWRpbmciLCJoZWFkaW5nX3NlY29uZGFyeSIsImJhY2tncm91bmQiLCJiYWNrZ3JvdW5kX3NlY29uZGFyeSIsImJvcmRlcl9jb2xvciIsInllbGxvdyIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJtdXRlZCIsImFjY2VudCIsIm1vZGVzIiwiZGFyayIsImJyZWFrcG9pbnRzIiwiZm9udHMiLCJib2R5IiwiZm9udFNpemVzIiwiZm9udFdlaWdodHMiLCJib2xkIiwibGluZUhlaWdodHMiLCJsZXR0ZXJTcGFjaW5ncyIsImNhcHMiLCJzcGFjZSIsImxheW91dCIsImNvbnRhaW5lciIsIm1heFdpZHRoIiwicHgiLCJoZWFkZXIiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJweSIsInBvc2l0aW9uIiwid2lkdGgiLCJ0b29sYmFyIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIm1haW4iLCJzZWN0aW9uIiwia2V5RmVhdHVyZSIsInB0IiwicGIiLCJmZWF0dXJlIiwibmV3cyIsImNvcmVGZWF0dXJlIiwib3ZlcmZsb3ciLCJ0ZXN0aW1vbmlhbCIsInNlcnZpY2VzIiwicHJpY2luZyIsInNlY3Rpb25IZWFkZXIiLCJmbGV4RGlyZWN0aW9uIiwibXQiLCJtYXJnaW5Cb3R0b20iLCJteCIsInRpdGxlIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwidGV4dEFsaWduIiwibGV0dGVyU3BhY2luZyIsInN1YlRpdGxlIiwidGV4dFRyYW5zZm9ybSIsIm1iIiwiZm9udEZhbWlseSIsImhlcm9QcmltYXJ5IiwiaGVyb1NlY29uZGFyeSIsInZhcmlhbnQiLCJsZWFkIiwibGlua3MiLCJjdXJzb3IiLCJuYXYiLCJibG9nIiwidGV4dERlY29yYXRpb24iLCJ0cmFuc2l0aW9uIiwiZm9vdGVyIiwibG9nbyIsImltYWdlcyIsImF2YXRhciIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsImJ1dHRvbnMiLCJtZW51IiwiZGVmYXVsdEJ0biIsInBhZGRpbmciLCJvdXRsaW5lIiwiYmciLCJib3hTaGFkb3ciLCJ3aGl0ZUJ1dHRvbiIsImJvcmRlciIsImJvcmRlckNvbG9yIiwidGV4dEJ1dHRvbiIsImJhY2tncm91bmRDb2xvciIsInN2ZyIsIm1yIiwiY2FyZHMiLCJvZmZlciIsImZsZXgiLCJtaW5IZWlnaHQiLCJtIiwiZmVhdHVyZUNhcmQiLCJwIiwiZm9ybXMiLCJsYWJlbCIsImlucHV0IiwidCIsImJhZGdlcyIsInN0eWxlcyIsInJvb3QiLCJmb250U21vb3RoaW5nIiwibWFyZ2luIiwiaHIiLCJib3JkZXJCb3R0b20iLCJ1bCIsImxpc3RTdHlsZSIsInNyT25seSIsImNsaXAiLCJjbGlwUGF0aCIsIndoaXRlU3BhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBLDhDQUFlO0FBQ2I7QUFDQUEsUUFBTSxFQUFFO0FBQ05DLFFBQUksRUFBRSxTQURBO0FBQ1c7QUFDakJDLGtCQUFjLEVBQUUsU0FGVjtBQUVxQjtBQUMzQkMsV0FBTyxFQUFFLFNBSEg7QUFHYztBQUNwQkMscUJBQWlCLEVBQUUsU0FKYjtBQUl3QjtBQUM5QkMsY0FBVSxFQUFFLFVBTE47QUFLa0I7QUFDeEJDLHdCQUFvQixFQUFFLFNBTmhCO0FBTTJCO0FBQ2pDQyxnQkFBWSxFQUFFLFNBUFI7QUFPbUI7QUFDekJDLFVBQU0sRUFBRSxTQVJGO0FBUWE7QUFDbkJDLFdBQU8sRUFBRSxTQVRIO0FBU2M7QUFDcEJDLGFBQVMsRUFBRSxTQVZMO0FBVWdCO0FBQ3RCQyxTQUFLLEVBQUUsU0FYRDtBQVdZO0FBQ2xCQyxVQUFNLEVBQUUsTUFaRjtBQVlVO0FBRWhCO0FBQ0FDLFNBQUssRUFBRTtBQUNMQyxVQUFJLEVBQUU7QUFDSmIsWUFBSSxFQUFFLE1BREY7QUFFSkksa0JBQVUsRUFBRSxNQUZSO0FBR0pJLGVBQU8sRUFBRSxNQUhMO0FB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QUU7QUFEVCxLQXZCRTtBQTBCTkMsVUFBTSxFQUFFO0FBQ04xQixZQUFNLEVBQUUsY0FERjtBQUVOMkIsVUFBSSxFQUFFLHFDQUZBO0FBR05DLGNBQVEsRUFBRSx1QkFISjtBQUlOdEMsWUFBTSxFQUFFLGdCQUpGO0FBS04rQixZQUFNLEVBQUUsaUJBTEY7QUFNTi9ELGNBQVEsRUFBRSxtQkFOSjtBQU9OcUMsYUFBTyxFQUFFLGNBUEg7QUFRTm5ELGNBQVEsRUFBRSxxQkFSSjtBQVNOQyxXQUFLLEVBQUUsZ0JBVEQ7QUFVTm9GLGdCQUFVLEVBQUU7QUFWTjtBQTFCRjtBQXRXSyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjIyZjQ2MTIwNTI1MGJkMDY5M2Q2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XHJcbiAgLy8gZXhhbXBsZSBjb2xvcnMgd2l0aCBkYXJrIG1vZGVcclxuICBjb2xvcnM6IHtcclxuICAgIHRleHQ6ICcjMzQzRDQ4JywgLy8gYm9keSBjb2xvciBhbmQgcHJpbWFyeSBjb2xvclxyXG4gICAgdGV4dF9zZWNvbmRhcnk6ICcjMDIwNzNFJywgLy8gc2Vjb25kYXJ5IGJvZHkgY29sb3JcclxuICAgIGhlYWRpbmc6ICcjMEYyMTM3JywgLy8gcHJpbWFyeSBoZWFkaW5nIGNvbG9yXHJcbiAgICBoZWFkaW5nX3NlY29uZGFyeTogJyMwRjIxMzcnLCAvLyBoZWFkaW5nIGNvbG9yXHJcbiAgICBiYWNrZ3JvdW5kOiAnIyNhOGIzYzEnLCAvLyBib2R5IGJhY2tncm91bmQgY29sb3JcclxuICAgIGJhY2tncm91bmRfc2Vjb25kYXJ5OiAnI0Y5RkJGRCcsIC8vIHNlY29uZGFyeSBiYWNrZ3JvdW5kIGNvbG9yXHJcbiAgICBib3JkZXJfY29sb3I6ICcjRTVFQ0Y0JywgLy8gYm9yZGVyIGNvbG9yXHJcbiAgICB5ZWxsb3c6ICcjRkZBNzQwJywgLy8gYm9yZGVyIGNvbG9yXHJcbiAgICBwcmltYXJ5OiAnIzI1NjNGRicsIC8vIHByaW1hcnkgYnV0dG9uIGFuZCBsaW5rIGNvbG9yXHJcbiAgICBzZWNvbmRhcnk6ICcjMjU2M0ZGJywgLy8gc2Vjb25kYXJ5IGNvbG9yIC0gY2FuIGJlIHVzZWQgZm9yIGhvdmVyIHN0YXRlc1xyXG4gICAgbXV0ZWQ6ICcjRTRFNEU0JywgLy8gbXV0ZWQgY29sb3JcclxuICAgIGFjY2VudDogJyM2MDknLCAvLyBhIGNvbnRyYXN0IGNvbG9yIGZvciBlbXBoYXNpemluZyBVSVxyXG5cclxuICAgIC8vIGhpZ2hsaWdodFx0YSBiYWNrZ3JvdW5kIGNvbG9yIGZvciBoaWdobGlnaHRpbmcgdGV4dFxyXG4gICAgbW9kZXM6IHtcclxuICAgICAgZGFyazoge1xyXG4gICAgICAgIHRleHQ6ICcjZmZmJyxcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnIzAwMCcsXHJcbiAgICAgICAgcHJpbWFyeTogJyMwY2YnLFxyXG4gICAgICAgIHNlY29uZGFyeTogJyMwOWMnLFxyXG4gICAgICAgIG11dGVkOiAnIzExMScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYnJlYWtwb2ludHM6IFtcclxuICAgICc0ODBweCcsXHJcbiAgICAnNjQwcHgnLFxyXG4gICAgJzc2OHB4JyxcclxuICAgICcxMDI0cHgnLFxyXG4gICAgJzEyMjBweCcsXHJcbiAgICAnMTM2NnB4JyxcclxuICAgICcxNjIwcHgnLFxyXG4gIF0sXHJcbiAgZm9udHM6IHtcclxuICAgIGJvZHk6IFwiJ0hlbWkgSGVhZCBGb3VyVHdlbnR5U2l4Jywgc2Fucy1zZXJpZlwiLFxyXG4gICAgaGVhZGluZzogXCInSGVtaSBIZWFkIEZvdXJUd2VudHlTaXgnLCBzYW5zLXNlcmlmXCIsXHJcbiAgICB0ZXh0OiBcIidETSBTYW5zJywgc2Fucy1zZXJpZlwiXHJcbiAgfSxcclxuICBmb250U2l6ZXM6IFsxMiwgMTUsIDE2LCAxOCwgMjAsIDIyLCAyNCwgMjgsIDMyLCAzNiwgNDIsIDQ4LCA1MiwgNjRdLFxyXG4gIGZvbnRXZWlnaHRzOiB7XHJcbiAgICBib2R5OiAnbm9ybWFsJyxcclxuICAgIGhlYWRpbmc6IDUwMCxcclxuICAgIGJvbGQ6IDcwMCxcclxuICB9LFxyXG4gIGxpbmVIZWlnaHRzOiB7XHJcbiAgICBib2R5OiAxLjgsXHJcbiAgICBoZWFkaW5nOiAxLjUsXHJcbiAgfSxcclxuICBsZXR0ZXJTcGFjaW5nczoge1xyXG4gICAgYm9keTogJ25vcm1hbCcsXHJcbiAgICBjYXBzOiAnMC4yZW0nLFxyXG4gICAgaGVhZGluZzogJy0wLjVweCcsXHJcbiAgfSxcclxuICBzcGFjZTogWzAsIDUsIDEwLCAxNSwgMjAsIDI1LCAzMCwgNTAsIDgwLCAxMDAsIDEyMCwgMTUwXSxcclxuICAvLyB2YXJpYW50cyBjYW4gdXNlIGN1c3RvbSwgdXNlci1kZWZpbmVkIG5hbWVzXHJcbiAgbGF5b3V0OiB7XHJcbiAgICBjb250YWluZXI6IHtcclxuICAgICAgbWF4V2lkdGg6IFtcclxuICAgICAgICAnMTAwJScsXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgICc3ODBweCcsXHJcbiAgICAgICAgJzEwMjBweCcsXHJcbiAgICAgICAgJzEyMDBweCcsXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICAnMTMxMHB4JyxcclxuICAgICAgXSxcclxuICAgICAgcHg6IFs0LCA2XSxcclxuICAgIH0sXHJcbiAgICBoZWFkZXI6IHtcclxuICAgICAgY29sb3I6ICcjMDIwNzNFJyxcclxuICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXHJcbiAgICAgIHB5OiAzLFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIH0sXHJcbiAgICB0b29sYmFyOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICB9LFxyXG4gICAgbWFpbjoge30sXHJcbiAgfSxcclxuICBzZWN0aW9uOiB7XHJcbiAgICBrZXlGZWF0dXJlOiB7IC8vcHJvZHVjdHNcclxuICAgICAgcHQ6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMF0sXHJcbiAgICAgIHBiOiBbJzkwcHgnLCBudWxsLCA5LCBudWxsLCBudWxsLCAxMCwgbnVsbCwgJzE2NXB4J10sXHJcbiAgICB9LFxyXG4gICAgZmVhdHVyZTogeyAvL2dhbGxlcnlcclxuICAgICAgcGI6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMCwgbnVsbCwgJzE3MHB4J10sXHJcbiAgICB9LFxyXG4gICAgbmV3czoge1xyXG4gICAgICBwYjogWzgsIG51bGwsIDksIG51bGwsIG51bGwsIDEwLCBudWxsLCAnMTcwcHgnXSxcclxuICAgIH0sXHJcbiAgICBjb3JlRmVhdHVyZTogeyAvL2V4cGxvcmVcclxuICAgICAgcGI6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMCwgbnVsbCwgJzE3MHB4J10sXHJcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIH0sXHJcbiAgICB0ZXN0aW1vbmlhbDoge1xyXG4gICAgICBwdDogWzgsIG51bGwsIDgsICc3MHB4JywgbnVsbCwgOCwgbnVsbCwgJzE0NXB4J10sXHJcbiAgICAgIHBiOiBbJzkwcHgnLCBudWxsLCA5LCBudWxsLCBudWxsLCAxMCwgbnVsbCwgJzE5MHB4J10sXHJcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIH0sXHJcbiAgICBzZXJ2aWNlczoge1xyXG4gICAgICBwYjogWyc5MHB4JywgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTAsIG51bGwsICcxNTBweCddLFxyXG4gICAgfSxcclxuICAgIHByaWNpbmc6IHtcclxuICAgICAgcHQ6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMCwgbnVsbCwgJzE4MHB4J10sXHJcbiAgICAgIHBiOiBbJzkwcHgnLCBudWxsLCA5LCBudWxsLCBudWxsLCAxMCwgbnVsbCwgJzE4MHB4J10sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2VjdGlvbkhlYWRlcjoge1xyXG4gICAgd2lkdGg6IFsnMTAwJScsIG51bGwsICc1NDBweCddLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIG10OiBbJy0zcHgnLCBudWxsLCAtMV0sXHJcbiAgICBtYXJnaW5Cb3R0b206IFsnNTBweCcsIG51bGwsICc2MHB4JywgbnVsbCwgbnVsbCwgJzY1cHgnLCBudWxsLCAnODBweCddLFxyXG4gICAgbXg6ICdhdXRvJyxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbJzI0cHgnLCBudWxsLCAnMjhweCcsIG51bGwsIG51bGwsICczMnB4JywgbnVsbCwgJzM2cHgnXSxcclxuICAgICAgY29sb3I6ICdoZWFkaW5nJyxcclxuICAgICAgbGluZUhlaWdodDogWzEuMywgbnVsbCwgbnVsbCwgMS4yNV0sXHJcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICc3MDAnLFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnMXB4JyxcclxuICAgIH0sXHJcblxyXG4gICAgc3ViVGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IFswLCAnMTNweCcsIG51bGwsICcxNHB4J10sXHJcbiAgICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgIGxldHRlclNwYWNpbmc6IFsnMS41cHgnLCBudWxsLCAnMnB4J10sXHJcbiAgICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxyXG4gICAgICBmb250V2VpZ2h0OiAnNzAwJyxcclxuICAgICAgbWI6IDIsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNSxcclxuICAgIH0sXHJcbiAgfSxcclxuICB0ZXh0OiB7XHJcbiAgICBoZWFkaW5nOiB7XHJcbiAgICAgIGZvbnRGYW1pbHk6ICdoZWFkaW5nJyxcclxuICAgICAgbGluZUhlaWdodDogJ2hlYWRpbmcnLFxyXG4gICAgICBmb250V2VpZ2h0OiAnaGVhZGluZycsXHJcbiAgICAgIGZvbnRTaXplOiBbNF0sXHJcbiAgICAgIGxldHRlclNwYWNpbmc6ICcuNTBweCcsXHJcbiAgICAgIGNvbG9yOiAnaGVhZGluZycsXHJcbiAgICB9LFxyXG4gICAgaGVyb1ByaW1hcnk6IHtcclxuICAgICAgY29sb3I6ICdoZWFkaW5nJyxcclxuICAgICAgZm9udFNpemU6IFtcclxuICAgICAgICAnMzJweCcsXHJcbiAgICAgICAgJzM2cHgnLFxyXG4gICAgICAgICc0MnB4JyxcclxuICAgICAgICAnNDBweCcsXHJcbiAgICAgICAgJzQycHgnLFxyXG4gICAgICAgICc1MnB4JyxcclxuICAgICAgICAnNThweCcsXHJcbiAgICAgICAgJzY2cHgnLFxyXG4gICAgICBdLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBbMS4zLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAxLjJdLFxyXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICAgIG1iOiBbNCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNV0sXHJcbiAgICB9LFxyXG4gICAgaGVyb1NlY29uZGFyeToge1xyXG4gICAgICBmb250RmFtaWx5OiAndGV4dCcsXHJcbiAgICAgIGZvbnRTaXplOiBbXCIxN3B4XCIsIFwiMTdweFwiLCAnMTdweCcsIG51bGwsIG51bGwsICcxN3B4JywgNF0sXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjksIG51bGwsIG51bGwsIDJdLFxyXG4gICAgICBmb250V2VpZ2h0OiAnYm9keScsXHJcbiAgICAgIG1iOiA1LFxyXG4gICAgICBweDogWzAsIG51bGwsIDUsIDYsIG51bGwsIDgsIDldLFxyXG4gICAgICBjb2xvcjogJ2hlYWRpbmcnLFxyXG4gICAgfSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgIC8vIGV4dGVuZHMgdGhlIHRleHQuaGVhZGluZyBzdHlsZXNcclxuICAgICAgdmFyaWFudDogJ3RleHQuaGVhZGluZycsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgICAgZm9udFNpemU6IFszLCBudWxsLCA0XSxcclxuICAgICAgbGluZUhlaWdodDogMS4yNSxcclxuICAgICAgbWI6IDEsXHJcbiAgICB9LFxyXG4gICAgbGVhZDoge1xyXG4gICAgICBmb250U2l6ZTogNDAsXHJcbiAgICAgIGZvbnRGYW1pbHk6ICdETSBTYW5zJyxcclxuICAgICAgZm9udFdlaWdodDogJzUwMCcsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICc2MHB4JyxcclxuICAgICAgbGV0dGVyU3BhY2luZzogJy0xLjVweCcsXHJcbiAgICAgIGNvbG9yOiAnIzBGMjEzNycsXHJcbiAgICB9LFxyXG4gICAgbXV0ZWQ6IHtcclxuICAgICAgbGluZUhlaWdodDogJzI2cHgnLFxyXG4gICAgICBjb2xvcjogJ211dGVkJyxcclxuICAgIH0sXHJcbiAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgICBjb2xvcjogJyMwMEE5OUQnLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnNDBweCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbGlua3M6IHtcclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICB9LFxyXG4gICAgYm9sZDoge1xyXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICB9LFxyXG4gICAgbmF2OiB7XHJcbiAgICAgIGRpc3BsYXk6IFsnbm9uZScsIG51bGwsICdpbmxpbmUtYmxvY2snXSxcclxuICAgICAgcHg6IDI1LFxyXG4gICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgIH0sXHJcbiAgICBibG9nOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgIHB4OiAwLFxyXG4gICAgICBjb2xvcjogJ2luaGVyaXQnLFxyXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG4gICAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnY29sb3IgMC4yNXMnLFxyXG4gICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGZvb3Rlcjoge1xyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICBweDogMCxcclxuICAgICAgY29sb3I6ICdpbmhlcml0JyxcclxuICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcclxuICAgIH0sXHJcbiAgICBsb2dvOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBpbWFnZXM6IHtcclxuICAgIGF2YXRhcjoge1xyXG4gICAgICB3aWR0aDogNDgsXHJcbiAgICAgIGhlaWdodDogNDgsXHJcbiAgICAgIGJvcmRlclJhZGl1czogOTk5OTksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgLy8gdmFyaWFudHMgZm9yIGJ1dHRvbnNcclxuICBidXR0b25zOiB7XHJcbiAgICBtZW51OiB7XHJcbiAgICAgIGRpc3BsYXk6IFtudWxsLCBudWxsLCAnbm9uZSddLFxyXG4gICAgfSwgLy8gZGVmYXVsdCB2YXJpYW50IGZvciBNZW51QnV0dG9uXHJcbiAgICAvLyB5b3UgY2FuIHJlZmVyZW5jZSBvdGhlciB2YWx1ZXMgZGVmaW5lZCBpbiB0aGUgdGhlbWVcclxuICAgIGRlZmF1bHRCdG46IHtcclxuICAgICAgYm9yZGVyUmFkaXVzOiAnNDVweCcsXHJcbiAgICAgIGZvbnRTaXplOiBbJzE0cHgnLCBudWxsLCBudWxsLCAyXSxcclxuICAgICAgbGV0dGVyU3BhY2luZ3M6ICctMC4xNXB4JyxcclxuICAgICAgcGFkZGluZzogWycxMnB4IDIwcHgnLCBudWxsLCAnMTVweCAzMHB4J10sXHJcbiAgICAgIGZvbnRGYW1pbHk6ICdib2R5JyxcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMixcclxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cycsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgICAgJyY6Zm9jdXMnOiB7XHJcbiAgICAgICAgb3V0bGluZTogMCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBwcmltYXJ5OiB7XHJcbiAgICAgIHZhcmlhbnQ6ICdidXR0b25zLmRlZmF1bHRCdG4nLFxyXG4gICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgYmc6ICdwcmltYXJ5JyxcclxuICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgYm94U2hhZG93OiAncmdiYSgyMzMsIDc2LCA4NCwgMC41NykgMHB4IDlweCAyMHB4IC01cHgnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHdoaXRlQnV0dG9uOiB7XHJcbiAgICAgIHZhcmlhbnQ6ICdidXR0b25zLmRlZmF1bHRCdG4nLFxyXG4gICAgICBjb2xvcjogJ2hlYWRpbmdfc2Vjb25kYXJ5JyxcclxuICAgICAgYmc6ICd3aGl0ZScsXHJcbiAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgIGJveFNoYWRvdzogJ3JnYmEoMCwgMCwgMCwgMC41KSAwcHggMTJweCAyNHB4IC0xMHB4JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgdmFyaWFudDogJ2J1dHRvbnMuZGVmYXVsdEJ0bicsXHJcbiAgICAgIGJvcmRlcjogJzJweCBzb2xpZCcsXHJcbiAgICAgIGJvcmRlckNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgIGJnOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICBwYWRkaW5nOiBbJzEwcHggMTVweCcsIG51bGwsICcxNXB4IDMwcHgnXSxcclxuICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgYmc6ICdwcmltYXJ5JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB0ZXh0QnV0dG9uOiB7XHJcbiAgICAgIHZhcmlhbnQ6ICdidXR0b25zLmRlZmF1bHRCdG4nLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgc3ZnOiB7XHJcbiAgICAgICAgZm9udFNpemU6IFs0LCA2XSxcclxuICAgICAgICBtcjogMixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjYXJkczoge1xyXG4gICAgcHJpbWFyeToge1xyXG4gICAgICBwYWRkaW5nOiAyLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICB9LFxyXG4gICAgb2ZmZXI6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgZmxleDogWycxIDEgY2FsYyg1MCUgLSAxNnB4KScsICcxIDEgMjAlJ10sXHJcbiAgICAgIG1pbkhlaWdodDogMTMwLFxyXG4gICAgICBtOiAyLFxyXG4gICAgICBiYWNrZ3JvdW5kOiAnI0ZGRkZGRicsXHJcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjRURFRkY2JyxcclxuICAgICAgYm9yZGVyUmFkaXVzOiA1LFxyXG4gICAgfSxcclxuICAgIGZlYXR1cmVDYXJkOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcclxuICAgICAgcDogMyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBmb3Jtczoge1xyXG4gICAgbGFiZWw6IHtcclxuICAgICAgZm9udFNpemU6IDEsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgIH0sXHJcbiAgICBpbnB1dDoge1xyXG4gICAgICBib3JkZXJSYWRpdXM6IDgsXHJcbiAgICAgIGJvcmRlckNvbG9yOiAnYm9yZGVyX2NvbG9yJyxcclxuICAgICAgaGVpZ2h0OiA2MCxcclxuICAgICAgJyY6Zm9jdXMnOiB7XHJcbiAgICAgICAgYm9yZGVyQ29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgICBib3hTaGFkb3c6ICh0KSA9PiBgMCAwIDAgMnB4ICR7dC5jb2xvcnMucHJpbWFyeX1gLFxyXG4gICAgICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgYmFkZ2VzOiB7XHJcbiAgICBwcmltYXJ5OiB7XHJcbiAgICAgIGNvbG9yOiAnYmFja2dyb3VuZCcsXHJcbiAgICAgIGJnOiAnIzI4QTVGRicsXHJcbiAgICAgIGJvcmRlclJhZGl1czogMzAsXHJcbiAgICAgIHA6ICczcHggMTFweCcsXHJcbiAgICAgIGZvbnRTaXplOiAxLFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuNXB4JyxcclxuICAgIH0sXHJcbiAgICBvdXRsaW5lOiB7XHJcbiAgICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgIGJnOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICBib3hTaGFkb3c6ICdpbnNldCAwIDAgMCAxcHgnLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBzdHlsZXM6IHtcclxuICAgIC8vIFRvIGFkZCBiYXNlLCB0b3AtbGV2ZWwgc3R5bGVzIHRvIHRoZSA8Ym9keT4gZWxlbWVudCwgdXNlIHRoZW1lLnN0eWxlcy5yb290LlxyXG4gICAgcm9vdDoge1xyXG4gICAgICBmb250RmFtaWx5OiAnYm9keScsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICdib2R5JyxcclxuICAgICAgZm9udFdlaWdodDogJ2JvZHknLFxyXG4gICAgICBmb250U21vb3RoaW5nOiAnYW50aWFsaWFzZWQnLFxyXG4gICAgICAvLyBNb2RhbCBHbG9iYWwgU3R5bGVcclxuICAgICAgJy5tb2RhbC12aWRlby1jbG9zZS1idG4nOiB7XHJcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgIH0sXHJcbiAgICAgICcubW9kYWwtdmlkZW8tbW92aWUtd3JhcCc6IHtcclxuICAgICAgICBtYXJnaW46IDYsXHJcbiAgICAgICAgd2lkdGg6ICdhdXRvJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAvLyBEaXZpZGVyIHN0eWxlc1xyXG4gICAgaHI6IHtcclxuICAgICAgYm9yZGVyOiAwLFxyXG4gICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQnLFxyXG4gICAgICBib3JkZXJDb2xvcjogJyNEOUUwRTcnLFxyXG4gICAgfSxcclxuICAgIC8vIGFsc28geW91IGNhbiB1c2Ugb3RoZXIgSFRNTCBlbGVtZW50cyBzdHlsZSBoZXJlXHJcbiAgICB1bDoge1xyXG4gICAgICBsaXN0U3R5bGU6ICdub25lJyxcclxuICAgIH0sXHJcbiAgICBzck9ubHk6IHtcclxuICAgICAgYm9yZGVyOiAnMCAhaW1wb3J0YW50JyxcclxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KSAhaW1wb3J0YW50JyxcclxuICAgICAgY2xpcFBhdGg6ICdpbnNldCg1MCUpICFpbXBvcnRhbnQnLFxyXG4gICAgICBoZWlnaHQ6ICcxcHggIWltcG9ydGFudCcsXHJcbiAgICAgIG1hcmdpbjogJy0xcHggIWltcG9ydGFudCcsXHJcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuICFpbXBvcnRhbnQnLFxyXG4gICAgICBwYWRkaW5nOiAnMCAhaW1wb3J0YW50JyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSAhaW1wb3J0YW50JyxcclxuICAgICAgd2lkdGg6ICcxcHggIWltcG9ydGFudCcsXHJcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAgIWltcG9ydGFudCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=