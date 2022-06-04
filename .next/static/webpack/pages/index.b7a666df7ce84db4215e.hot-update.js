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
    text: '#3448',
    // body color and primary color
    text_secondary: '#02073E',
    // secondary body color
    heading: '#0F2137',
    // primary heading color
    heading_secondary: '#0F2137',
    // heading color
    background: '#FFFFFF',
    // body background color
    background_secondary: '#F9FBFD',
    // secondary background color
    border_color: '#E5ECF4',
    // border color
    yellow: '#FFA740',
    // border color
    primary: '#EA3A60',
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
    body: "'DM Sans', sans-serif",
    heading: "'DM Sans', sans-serif"
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
      pt: [8, null, 9, null, null, 10],
      pb: ['90px', null, 9, null, null, 10, null, '165px']
    },
    feature: {
      pb: [8, null, 9, null, null, 10, null, '170px']
    },
    news: {
      pb: [8, null, 9, null, null, 10, null, '170px']
    },
    coreFeature: {
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
      letterSpacing: '-.5px'
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
      letterSpacing: '-.55px',
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
      fontSize: [2, null, '17px', null, null, '19px', 4],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3RoZW1lL2luZGV4LmpzIl0sIm5hbWVzIjpbImNvbG9ycyIsInRleHQiLCJ0ZXh0X3NlY29uZGFyeSIsImhlYWRpbmciLCJoZWFkaW5nX3NlY29uZGFyeSIsImJhY2tncm91bmQiLCJiYWNrZ3JvdW5kX3NlY29uZGFyeSIsImJvcmRlcl9jb2xvciIsInllbGxvdyIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJtdXRlZCIsImFjY2VudCIsIm1vZGVzIiwiZGFyayIsImJyZWFrcG9pbnRzIiwiZm9udHMiLCJib2R5IiwiZm9udFNpemVzIiwiZm9udFdlaWdodHMiLCJib2xkIiwibGluZUhlaWdodHMiLCJsZXR0ZXJTcGFjaW5ncyIsImNhcHMiLCJzcGFjZSIsImxheW91dCIsImNvbnRhaW5lciIsIm1heFdpZHRoIiwicHgiLCJoZWFkZXIiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJweSIsInBvc2l0aW9uIiwid2lkdGgiLCJ0b29sYmFyIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIm1haW4iLCJzZWN0aW9uIiwia2V5RmVhdHVyZSIsInB0IiwicGIiLCJmZWF0dXJlIiwibmV3cyIsImNvcmVGZWF0dXJlIiwib3ZlcmZsb3ciLCJ0ZXN0aW1vbmlhbCIsInNlcnZpY2VzIiwicHJpY2luZyIsInNlY3Rpb25IZWFkZXIiLCJmbGV4RGlyZWN0aW9uIiwibXQiLCJtYXJnaW5Cb3R0b20iLCJteCIsInRpdGxlIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwidGV4dEFsaWduIiwibGV0dGVyU3BhY2luZyIsInN1YlRpdGxlIiwidGV4dFRyYW5zZm9ybSIsIm1iIiwiZm9udEZhbWlseSIsImhlcm9QcmltYXJ5IiwiaGVyb1NlY29uZGFyeSIsInZhcmlhbnQiLCJsZWFkIiwibGlua3MiLCJjdXJzb3IiLCJuYXYiLCJibG9nIiwidGV4dERlY29yYXRpb24iLCJ0cmFuc2l0aW9uIiwiZm9vdGVyIiwibG9nbyIsImltYWdlcyIsImF2YXRhciIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsImJ1dHRvbnMiLCJtZW51IiwiZGVmYXVsdEJ0biIsInBhZGRpbmciLCJvdXRsaW5lIiwiYmciLCJib3hTaGFkb3ciLCJ3aGl0ZUJ1dHRvbiIsImJvcmRlciIsImJvcmRlckNvbG9yIiwidGV4dEJ1dHRvbiIsImJhY2tncm91bmRDb2xvciIsInN2ZyIsIm1yIiwiY2FyZHMiLCJvZmZlciIsImZsZXgiLCJtaW5IZWlnaHQiLCJtIiwiZmVhdHVyZUNhcmQiLCJwIiwiZm9ybXMiLCJsYWJlbCIsImlucHV0IiwidCIsImJhZGdlcyIsInN0eWxlcyIsInJvb3QiLCJmb250U21vb3RoaW5nIiwibWFyZ2luIiwiaHIiLCJib3JkZXJCb3R0b20iLCJ1bCIsImxpc3RTdHlsZSIsInNyT25seSIsImNsaXAiLCJjbGlwUGF0aCIsIndoaXRlU3BhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBLDhDQUFlO0FBQ2I7QUFDQUEsUUFBTSxFQUFFO0FBQ05DLFFBQUksRUFBRSxPQURBO0FBQ1M7QUFDZkMsa0JBQWMsRUFBRSxTQUZWO0FBRXFCO0FBQzNCQyxXQUFPLEVBQUUsU0FISDtBQUdjO0FBQ3BCQyxxQkFBaUIsRUFBRSxTQUpiO0FBSXdCO0FBQzlCQyxjQUFVLEVBQUUsU0FMTjtBQUtpQjtBQUN2QkMsd0JBQW9CLEVBQUUsU0FOaEI7QUFNMkI7QUFDakNDLGdCQUFZLEVBQUUsU0FQUjtBQU9tQjtBQUN6QkMsVUFBTSxFQUFFLFNBUkY7QUFRYTtBQUNuQkMsV0FBTyxFQUFFLFNBVEg7QUFTYztBQUNwQkMsYUFBUyxFQUFFLFNBVkw7QUFVZ0I7QUFDdEJDLFNBQUssRUFBRSxTQVhEO0FBV1k7QUFDbEJDLFVBQU0sRUFBRSxNQVpGO0FBWVU7QUFFaEI7QUFDQUMsU0FBSyxFQUFFO0FBQ0xDLFVBQUksRUFBRTtBQUNKYixZQUFJLEVBQUUsTUFERjtBQUVKSSxrQkFBVSxFQUFFLE1BRlI7QUFHSkksZUFBTyxFQUFFLE1BSEw7QUFJ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SSxFQUFFLHFDQUZBO0FBR05DLGNBQVEsRUFBRSx1QkFISjtBQUlOdEMsWUFBTSxFQUFFLGdCQUpGO0FBS04rQixZQUFNLEVBQUUsaUJBTEY7QUFNTi9ELGNBQVEsRUFBRSxtQkFOSjtBQU9OcUMsYUFBTyxFQUFFLGNBUEg7QUFRTm5ELGNBQVEsRUFBRSxxQkFSSjtBQVNOQyxXQUFLLEVBQUUsZ0JBVEQ7QUFVTm9GLGdCQUFVLEVBQUU7QUFWTjtBQTFCRjtBQXBXSyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI3YTY2NmRmN2NlODRkYjQyMTVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XHJcbiAgLy8gZXhhbXBsZSBjb2xvcnMgd2l0aCBkYXJrIG1vZGVcclxuICBjb2xvcnM6IHtcclxuICAgIHRleHQ6ICcjMzQ0OCcsIC8vIGJvZHkgY29sb3IgYW5kIHByaW1hcnkgY29sb3JcclxuICAgIHRleHRfc2Vjb25kYXJ5OiAnIzAyMDczRScsIC8vIHNlY29uZGFyeSBib2R5IGNvbG9yXHJcbiAgICBoZWFkaW5nOiAnIzBGMjEzNycsIC8vIHByaW1hcnkgaGVhZGluZyBjb2xvclxyXG4gICAgaGVhZGluZ19zZWNvbmRhcnk6ICcjMEYyMTM3JywgLy8gaGVhZGluZyBjb2xvclxyXG4gICAgYmFja2dyb3VuZDogJyNGRkZGRkYnLCAvLyBib2R5IGJhY2tncm91bmQgY29sb3JcclxuICAgIGJhY2tncm91bmRfc2Vjb25kYXJ5OiAnI0Y5RkJGRCcsIC8vIHNlY29uZGFyeSBiYWNrZ3JvdW5kIGNvbG9yXHJcbiAgICBib3JkZXJfY29sb3I6ICcjRTVFQ0Y0JywgLy8gYm9yZGVyIGNvbG9yXHJcbiAgICB5ZWxsb3c6ICcjRkZBNzQwJywgLy8gYm9yZGVyIGNvbG9yXHJcbiAgICBwcmltYXJ5OiAnI0VBM0E2MCcsIC8vIHByaW1hcnkgYnV0dG9uIGFuZCBsaW5rIGNvbG9yXHJcbiAgICBzZWNvbmRhcnk6ICcjMjU2M0ZGJywgLy8gc2Vjb25kYXJ5IGNvbG9yIC0gY2FuIGJlIHVzZWQgZm9yIGhvdmVyIHN0YXRlc1xyXG4gICAgbXV0ZWQ6ICcjRTRFNEU0JywgLy8gbXV0ZWQgY29sb3JcclxuICAgIGFjY2VudDogJyM2MDknLCAvLyBhIGNvbnRyYXN0IGNvbG9yIGZvciBlbXBoYXNpemluZyBVSVxyXG5cclxuICAgIC8vIGhpZ2hsaWdodFx0YSBiYWNrZ3JvdW5kIGNvbG9yIGZvciBoaWdobGlnaHRpbmcgdGV4dFxyXG4gICAgbW9kZXM6IHtcclxuICAgICAgZGFyazoge1xyXG4gICAgICAgIHRleHQ6ICcjZmZmJyxcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnIzAwMCcsXHJcbiAgICAgICAgcHJpbWFyeTogJyMwY2YnLFxyXG4gICAgICAgIHNlY29uZGFyeTogJyMwOWMnLFxyXG4gICAgICAgIG11dGVkOiAnIzExMScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYnJlYWtwb2ludHM6IFtcclxuICAgICc0ODBweCcsXHJcbiAgICAnNjQwcHgnLFxyXG4gICAgJzc2OHB4JyxcclxuICAgICcxMDI0cHgnLFxyXG4gICAgJzEyMjBweCcsXHJcbiAgICAnMTM2NnB4JyxcclxuICAgICcxNjIwcHgnLFxyXG4gIF0sXHJcbiAgZm9udHM6IHtcclxuICAgIGJvZHk6IFwiJ0RNIFNhbnMnLCBzYW5zLXNlcmlmXCIsXHJcbiAgICBoZWFkaW5nOiBcIidETSBTYW5zJywgc2Fucy1zZXJpZlwiLFxyXG4gIH0sXHJcbiAgZm9udFNpemVzOiBbMTIsIDE1LCAxNiwgMTgsIDIwLCAyMiwgMjQsIDI4LCAzMiwgMzYsIDQyLCA0OCwgNTIsIDY0XSxcclxuICBmb250V2VpZ2h0czoge1xyXG4gICAgYm9keTogJ25vcm1hbCcsXHJcbiAgICBoZWFkaW5nOiA1MDAsXHJcbiAgICBib2xkOiA3MDAsXHJcbiAgfSxcclxuICBsaW5lSGVpZ2h0czoge1xyXG4gICAgYm9keTogMS44LFxyXG4gICAgaGVhZGluZzogMS41LFxyXG4gIH0sXHJcbiAgbGV0dGVyU3BhY2luZ3M6IHtcclxuICAgIGJvZHk6ICdub3JtYWwnLFxyXG4gICAgY2FwczogJzAuMmVtJyxcclxuICAgIGhlYWRpbmc6ICctMC41cHgnLFxyXG4gIH0sXHJcbiAgc3BhY2U6IFswLCA1LCAxMCwgMTUsIDIwLCAyNSwgMzAsIDUwLCA4MCwgMTAwLCAxMjAsIDE1MF0sXHJcbiAgLy8gdmFyaWFudHMgY2FuIHVzZSBjdXN0b20sIHVzZXItZGVmaW5lZCBuYW1lc1xyXG4gIGxheW91dDoge1xyXG4gICAgY29udGFpbmVyOiB7XHJcbiAgICAgIG1heFdpZHRoOiBbXHJcbiAgICAgICAgJzEwMCUnLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICAnNzgwcHgnLFxyXG4gICAgICAgICcxMDIwcHgnLFxyXG4gICAgICAgICcxMjAwcHgnLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgJzEzMTBweCcsXHJcbiAgICAgIF0sXHJcbiAgICAgIHB4OiBbNCwgNl0sXHJcbiAgICB9LFxyXG4gICAgaGVhZGVyOiB7XHJcbiAgICAgIGNvbG9yOiAnIzAyMDczRScsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxyXG4gICAgICBweTogMyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICB9LFxyXG4gICAgdG9vbGJhcjoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgfSxcclxuICAgIG1haW46IHt9LFxyXG4gIH0sXHJcbiAgc2VjdGlvbjoge1xyXG4gICAga2V5RmVhdHVyZToge1xyXG4gICAgICBwdDogWzgsIG51bGwsIDksIG51bGwsIG51bGwsIDEwXSxcclxuICAgICAgcGI6IFsnOTBweCcsIG51bGwsIDksIG51bGwsIG51bGwsIDEwLCBudWxsLCAnMTY1cHgnXSxcclxuICAgIH0sXHJcbiAgICBmZWF0dXJlOiB7XHJcbiAgICAgIHBiOiBbOCwgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTAsIG51bGwsICcxNzBweCddLFxyXG4gICAgfSxcclxuICAgIG5ld3M6IHtcclxuICAgICAgcGI6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMCwgbnVsbCwgJzE3MHB4J10sXHJcbiAgICB9LFxyXG4gICAgY29yZUZlYXR1cmU6IHtcclxuICAgICAgcGI6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMCwgbnVsbCwgJzE3MHB4J10sXHJcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIH0sXHJcbiAgICB0ZXN0aW1vbmlhbDoge1xyXG4gICAgICBwdDogWzgsIG51bGwsIDgsICc3MHB4JywgbnVsbCwgOCwgbnVsbCwgJzE0NXB4J10sXHJcbiAgICAgIHBiOiBbJzkwcHgnLCBudWxsLCA5LCBudWxsLCBudWxsLCAxMCwgbnVsbCwgJzE5MHB4J10sXHJcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIH0sXHJcbiAgICBzZXJ2aWNlczoge1xyXG4gICAgICBwYjogWyc5MHB4JywgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTAsIG51bGwsICcxNTBweCddLFxyXG4gICAgfSxcclxuICAgIHByaWNpbmc6IHtcclxuICAgICAgcHQ6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMCwgbnVsbCwgJzE4MHB4J10sXHJcbiAgICAgIHBiOiBbJzkwcHgnLCBudWxsLCA5LCBudWxsLCBudWxsLCAxMCwgbnVsbCwgJzE4MHB4J10sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2VjdGlvbkhlYWRlcjoge1xyXG4gICAgd2lkdGg6IFsnMTAwJScsIG51bGwsICc1NDBweCddLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIG10OiBbJy0zcHgnLCBudWxsLCAtMV0sXHJcbiAgICBtYXJnaW5Cb3R0b206IFsnNTBweCcsIG51bGwsICc2MHB4JywgbnVsbCwgbnVsbCwgJzY1cHgnLCBudWxsLCAnODBweCddLFxyXG4gICAgbXg6ICdhdXRvJyxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbJzI0cHgnLCBudWxsLCAnMjhweCcsIG51bGwsIG51bGwsICczMnB4JywgbnVsbCwgJzM2cHgnXSxcclxuICAgICAgY29sb3I6ICdoZWFkaW5nJyxcclxuICAgICAgbGluZUhlaWdodDogWzEuMywgbnVsbCwgbnVsbCwgMS4yNV0sXHJcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICc3MDAnLFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLS41cHgnLFxyXG4gICAgfSxcclxuXHJcbiAgICBzdWJUaXRsZToge1xyXG4gICAgICBmb250U2l6ZTogWzAsICcxM3B4JywgbnVsbCwgJzE0cHgnXSxcclxuICAgICAgY29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgbGV0dGVyU3BhY2luZzogWycxLjVweCcsIG51bGwsICcycHgnXSxcclxuICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICc3MDAnLFxyXG4gICAgICBtYjogMixcclxuICAgICAgbGluZUhlaWdodDogMS41LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHRleHQ6IHtcclxuICAgIGhlYWRpbmc6IHtcclxuICAgICAgZm9udEZhbWlseTogJ2hlYWRpbmcnLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnaGVhZGluZycsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdoZWFkaW5nJyxcclxuICAgICAgZm9udFNpemU6IFs0XSxcclxuICAgICAgbGV0dGVyU3BhY2luZzogJy0uNTVweCcsXHJcbiAgICAgIGNvbG9yOiAnaGVhZGluZycsXHJcbiAgICB9LFxyXG4gICAgaGVyb1ByaW1hcnk6IHtcclxuICAgICAgY29sb3I6ICdoZWFkaW5nJyxcclxuICAgICAgZm9udFNpemU6IFtcclxuICAgICAgICAnMzJweCcsXHJcbiAgICAgICAgJzM2cHgnLFxyXG4gICAgICAgICc0MnB4JyxcclxuICAgICAgICAnNDBweCcsXHJcbiAgICAgICAgJzQycHgnLFxyXG4gICAgICAgICc1MnB4JyxcclxuICAgICAgICAnNThweCcsXHJcbiAgICAgICAgJzY2cHgnLFxyXG4gICAgICBdLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBbMS4zLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAxLjJdLFxyXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICAgIG1iOiBbNCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNV0sXHJcbiAgICB9LFxyXG4gICAgaGVyb1NlY29uZGFyeToge1xyXG4gICAgICBmb250U2l6ZTogWzIsIG51bGwsICcxN3B4JywgbnVsbCwgbnVsbCwgJzE5cHgnLCA0XSxcclxuICAgICAgbGluZUhlaWdodDogWzEuOSwgbnVsbCwgbnVsbCwgMl0sXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2R5JyxcclxuICAgICAgbWI6IDUsXHJcbiAgICAgIHB4OiBbMCwgbnVsbCwgNSwgNiwgbnVsbCwgOCwgOV0sXHJcbiAgICAgIGNvbG9yOiAnaGVhZGluZycsXHJcbiAgICB9LFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgLy8gZXh0ZW5kcyB0aGUgdGV4dC5oZWFkaW5nIHN0eWxlc1xyXG4gICAgICB2YXJpYW50OiAndGV4dC5oZWFkaW5nJyxcclxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgICBmb250U2l6ZTogWzMsIG51bGwsIDRdLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjI1LFxyXG4gICAgICBtYjogMSxcclxuICAgIH0sXHJcbiAgICBsZWFkOiB7XHJcbiAgICAgIGZvbnRTaXplOiA0MCxcclxuICAgICAgZm9udEZhbWlseTogJ0RNIFNhbnMnLFxyXG4gICAgICBmb250V2VpZ2h0OiAnNTAwJyxcclxuICAgICAgbGluZUhlaWdodDogJzYwcHgnLFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLTEuNXB4JyxcclxuICAgICAgY29sb3I6ICcjMEYyMTM3JyxcclxuICAgIH0sXHJcbiAgICBtdXRlZDoge1xyXG4gICAgICBsaW5lSGVpZ2h0OiAnMjZweCcsXHJcbiAgICAgIGNvbG9yOiAnbXV0ZWQnLFxyXG4gICAgfSxcclxuICAgIHNlY29uZGFyeToge1xyXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICAgIGNvbG9yOiAnIzAwQTk5RCcsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICc0MHB4JyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBsaW5rczoge1xyXG4gICAgZGVmYXVsdDoge1xyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgIH0sXHJcbiAgICBib2xkOiB7XHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgIH0sXHJcbiAgICBuYXY6IHtcclxuICAgICAgZGlzcGxheTogWydub25lJywgbnVsbCwgJ2lubGluZS1ibG9jayddLFxyXG4gICAgICBweDogMjUsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxyXG4gICAgfSxcclxuICAgIGJsb2c6IHtcclxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgcHg6IDAsXHJcbiAgICAgIGNvbG9yOiAnaW5oZXJpdCcsXHJcbiAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXHJcbiAgICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXHJcbiAgICAgIHRyYW5zaXRpb246ICdjb2xvciAwLjI1cycsXHJcbiAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZm9vdGVyOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgIHB4OiAwLFxyXG4gICAgICBjb2xvcjogJ2luaGVyaXQnLFxyXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG4gICAgfSxcclxuICAgIGxvZ286IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGltYWdlczoge1xyXG4gICAgYXZhdGFyOiB7XHJcbiAgICAgIHdpZHRoOiA0OCxcclxuICAgICAgaGVpZ2h0OiA0OCxcclxuICAgICAgYm9yZGVyUmFkaXVzOiA5OTk5OSxcclxuICAgIH0sXHJcbiAgfSxcclxuICAvLyB2YXJpYW50cyBmb3IgYnV0dG9uc1xyXG4gIGJ1dHRvbnM6IHtcclxuICAgIG1lbnU6IHtcclxuICAgICAgZGlzcGxheTogW251bGwsIG51bGwsICdub25lJ10sXHJcbiAgICB9LCAvLyBkZWZhdWx0IHZhcmlhbnQgZm9yIE1lbnVCdXR0b25cclxuICAgIC8vIHlvdSBjYW4gcmVmZXJlbmNlIG90aGVyIHZhbHVlcyBkZWZpbmVkIGluIHRoZSB0aGVtZVxyXG4gICAgZGVmYXVsdEJ0bjoge1xyXG4gICAgICBib3JkZXJSYWRpdXM6ICc0NXB4JyxcclxuICAgICAgZm9udFNpemU6IFsnMTRweCcsIG51bGwsIG51bGwsIDJdLFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nczogJy0wLjE1cHgnLFxyXG4gICAgICBwYWRkaW5nOiBbJzEycHggMjBweCcsIG51bGwsICcxNXB4IDMwcHgnXSxcclxuICAgICAgZm9udEZhbWlseTogJ2JvZHknLFxyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgbGluZUhlaWdodDogMS4yLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzJyxcclxuICAgICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgICAnJjpmb2N1cyc6IHtcclxuICAgICAgICBvdXRsaW5lOiAwLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHByaW1hcnk6IHtcclxuICAgICAgdmFyaWFudDogJ2J1dHRvbnMuZGVmYXVsdEJ0bicsXHJcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICBiZzogJ3ByaW1hcnknLFxyXG4gICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICBib3hTaGFkb3c6ICdyZ2JhKDIzMywgNzYsIDg0LCAwLjU3KSAwcHggOXB4IDIwcHggLTVweCcsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgd2hpdGVCdXR0b246IHtcclxuICAgICAgdmFyaWFudDogJ2J1dHRvbnMuZGVmYXVsdEJ0bicsXHJcbiAgICAgIGNvbG9yOiAnaGVhZGluZ19zZWNvbmRhcnknLFxyXG4gICAgICBiZzogJ3doaXRlJyxcclxuICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgYm94U2hhZG93OiAncmdiYSgwLCAwLCAwLCAwLjUpIDBweCAxMnB4IDI0cHggLTEwcHgnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHNlY29uZGFyeToge1xyXG4gICAgICB2YXJpYW50OiAnYnV0dG9ucy5kZWZhdWx0QnRuJyxcclxuICAgICAgYm9yZGVyOiAnMnB4IHNvbGlkJyxcclxuICAgICAgYm9yZGVyQ29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgY29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgYmc6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgIHBhZGRpbmc6IFsnMTBweCAxNXB4JywgbnVsbCwgJzE1cHggMzBweCddLFxyXG4gICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICBiZzogJ3ByaW1hcnknLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHRleHRCdXR0b246IHtcclxuICAgICAgdmFyaWFudDogJ2J1dHRvbnMuZGVmYXVsdEJ0bicsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICBzdmc6IHtcclxuICAgICAgICBmb250U2l6ZTogWzQsIDZdLFxyXG4gICAgICAgIG1yOiAyLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNhcmRzOiB7XHJcbiAgICBwcmltYXJ5OiB7XHJcbiAgICAgIHBhZGRpbmc6IDIsXHJcbiAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgIH0sXHJcbiAgICBvZmZlcjoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBmbGV4OiBbJzEgMSBjYWxjKDUwJSAtIDE2cHgpJywgJzEgMSAyMCUnXSxcclxuICAgICAgbWluSGVpZ2h0OiAxMzAsXHJcbiAgICAgIG06IDIsXHJcbiAgICAgIGJhY2tncm91bmQ6ICcjRkZGRkZGJyxcclxuICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNFREVGRjYnLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDUsXHJcbiAgICB9LFxyXG4gICAgZmVhdHVyZUNhcmQ6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxyXG4gICAgICBwOiAzLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGZvcm1zOiB7XHJcbiAgICBsYWJlbDoge1xyXG4gICAgICBmb250U2l6ZTogMSxcclxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgfSxcclxuICAgIGlucHV0OiB7XHJcbiAgICAgIGJvcmRlclJhZGl1czogOCxcclxuICAgICAgYm9yZGVyQ29sb3I6ICdib3JkZXJfY29sb3InLFxyXG4gICAgICBoZWlnaHQ6IDYwLFxyXG4gICAgICAnJjpmb2N1cyc6IHtcclxuICAgICAgICBib3JkZXJDb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgICAgIGJveFNoYWRvdzogKHQpID0+IGAwIDAgMCAycHggJHt0LmNvbG9ycy5wcmltYXJ5fWAsXHJcbiAgICAgICAgb3V0bGluZTogJ25vbmUnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBiYWRnZXM6IHtcclxuICAgIHByaW1hcnk6IHtcclxuICAgICAgY29sb3I6ICdiYWNrZ3JvdW5kJyxcclxuICAgICAgYmc6ICcjMjhBNUZGJyxcclxuICAgICAgYm9yZGVyUmFkaXVzOiAzMCxcclxuICAgICAgcDogJzNweCAxMXB4JyxcclxuICAgICAgZm9udFNpemU6IDEsXHJcbiAgICAgIGxldHRlclNwYWNpbmc6ICctMC41cHgnLFxyXG4gICAgfSxcclxuICAgIG91dGxpbmU6IHtcclxuICAgICAgY29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgYmc6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgIGJveFNoYWRvdzogJ2luc2V0IDAgMCAwIDFweCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIHN0eWxlczoge1xyXG4gICAgLy8gVG8gYWRkIGJhc2UsIHRvcC1sZXZlbCBzdHlsZXMgdG8gdGhlIDxib2R5PiBlbGVtZW50LCB1c2UgdGhlbWUuc3R5bGVzLnJvb3QuXHJcbiAgICByb290OiB7XHJcbiAgICAgIGZvbnRGYW1pbHk6ICdib2R5JyxcclxuICAgICAgbGluZUhlaWdodDogJ2JvZHknLFxyXG4gICAgICBmb250V2VpZ2h0OiAnYm9keScsXHJcbiAgICAgIGZvbnRTbW9vdGhpbmc6ICdhbnRpYWxpYXNlZCcsXHJcbiAgICAgIC8vIE1vZGFsIEdsb2JhbCBTdHlsZVxyXG4gICAgICAnLm1vZGFsLXZpZGVvLWNsb3NlLWJ0bic6IHtcclxuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgfSxcclxuICAgICAgJy5tb2RhbC12aWRlby1tb3ZpZS13cmFwJzoge1xyXG4gICAgICAgIG1hcmdpbjogNixcclxuICAgICAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIC8vIERpdmlkZXIgc3R5bGVzXHJcbiAgICBocjoge1xyXG4gICAgICBib3JkZXI6IDAsXHJcbiAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCcsXHJcbiAgICAgIGJvcmRlckNvbG9yOiAnI0Q5RTBFNycsXHJcbiAgICB9LFxyXG4gICAgLy8gYWxzbyB5b3UgY2FuIHVzZSBvdGhlciBIVE1MIGVsZW1lbnRzIHN0eWxlIGhlcmVcclxuICAgIHVsOiB7XHJcbiAgICAgIGxpc3RTdHlsZTogJ25vbmUnLFxyXG4gICAgfSxcclxuICAgIHNyT25seToge1xyXG4gICAgICBib3JkZXI6ICcwICFpbXBvcnRhbnQnLFxyXG4gICAgICBjbGlwOiAncmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpICFpbXBvcnRhbnQnLFxyXG4gICAgICBjbGlwUGF0aDogJ2luc2V0KDUwJSkgIWltcG9ydGFudCcsXHJcbiAgICAgIGhlaWdodDogJzFweCAhaW1wb3J0YW50JyxcclxuICAgICAgbWFyZ2luOiAnLTFweCAhaW1wb3J0YW50JyxcclxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4gIWltcG9ydGFudCcsXHJcbiAgICAgIHBhZGRpbmc6ICcwICFpbXBvcnRhbnQnLFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlICFpbXBvcnRhbnQnLFxyXG4gICAgICB3aWR0aDogJzFweCAhaW1wb3J0YW50JyxcclxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCAhaW1wb3J0YW50JyxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==