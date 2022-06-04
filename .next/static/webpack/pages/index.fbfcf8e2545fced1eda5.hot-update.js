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
    body: "'DM Sans'', sans-serif",
    heading: "'Hemi Head FourTwentySix', sans-serif"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3RoZW1lL2luZGV4LmpzIl0sIm5hbWVzIjpbImNvbG9ycyIsInRleHQiLCJ0ZXh0X3NlY29uZGFyeSIsImhlYWRpbmciLCJoZWFkaW5nX3NlY29uZGFyeSIsImJhY2tncm91bmQiLCJiYWNrZ3JvdW5kX3NlY29uZGFyeSIsImJvcmRlcl9jb2xvciIsInllbGxvdyIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJtdXRlZCIsImFjY2VudCIsIm1vZGVzIiwiZGFyayIsImJyZWFrcG9pbnRzIiwiZm9udHMiLCJib2R5IiwiZm9udFNpemVzIiwiZm9udFdlaWdodHMiLCJib2xkIiwibGluZUhlaWdodHMiLCJsZXR0ZXJTcGFjaW5ncyIsImNhcHMiLCJzcGFjZSIsImxheW91dCIsImNvbnRhaW5lciIsIm1heFdpZHRoIiwicHgiLCJoZWFkZXIiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJweSIsInBvc2l0aW9uIiwid2lkdGgiLCJ0b29sYmFyIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIm1haW4iLCJzZWN0aW9uIiwia2V5RmVhdHVyZSIsInB0IiwicGIiLCJmZWF0dXJlIiwibmV3cyIsImNvcmVGZWF0dXJlIiwib3ZlcmZsb3ciLCJ0ZXN0aW1vbmlhbCIsInNlcnZpY2VzIiwicHJpY2luZyIsInNlY3Rpb25IZWFkZXIiLCJmbGV4RGlyZWN0aW9uIiwibXQiLCJtYXJnaW5Cb3R0b20iLCJteCIsInRpdGxlIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwidGV4dEFsaWduIiwibGV0dGVyU3BhY2luZyIsInN1YlRpdGxlIiwidGV4dFRyYW5zZm9ybSIsIm1iIiwiZm9udEZhbWlseSIsImhlcm9QcmltYXJ5IiwiaGVyb1NlY29uZGFyeSIsInZhcmlhbnQiLCJsZWFkIiwibGlua3MiLCJjdXJzb3IiLCJuYXYiLCJibG9nIiwidGV4dERlY29yYXRpb24iLCJ0cmFuc2l0aW9uIiwiZm9vdGVyIiwibG9nbyIsImltYWdlcyIsImF2YXRhciIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsImJ1dHRvbnMiLCJtZW51IiwiZGVmYXVsdEJ0biIsInBhZGRpbmciLCJvdXRsaW5lIiwiYmciLCJib3hTaGFkb3ciLCJ3aGl0ZUJ1dHRvbiIsImJvcmRlciIsImJvcmRlckNvbG9yIiwidGV4dEJ1dHRvbiIsImJhY2tncm91bmRDb2xvciIsInN2ZyIsIm1yIiwiY2FyZHMiLCJvZmZlciIsImZsZXgiLCJtaW5IZWlnaHQiLCJtIiwiZmVhdHVyZUNhcmQiLCJwIiwiZm9ybXMiLCJsYWJlbCIsImlucHV0IiwidCIsImJhZGdlcyIsInN0eWxlcyIsInJvb3QiLCJmb250U21vb3RoaW5nIiwibWFyZ2luIiwiaHIiLCJib3JkZXJCb3R0b20iLCJ1bCIsImxpc3RTdHlsZSIsInNyT25seSIsImNsaXAiLCJjbGlwUGF0aCIsIndoaXRlU3BhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBLDhDQUFlO0FBQ2I7QUFDQUEsUUFBTSxFQUFFO0FBQ05DLFFBQUksRUFBRSxTQURBO0FBQ1c7QUFDakJDLGtCQUFjLEVBQUUsU0FGVjtBQUVxQjtBQUMzQkMsV0FBTyxFQUFFLFNBSEg7QUFHYztBQUNwQkMscUJBQWlCLEVBQUUsU0FKYjtBQUl3QjtBQUM5QkMsY0FBVSxFQUFFLFNBTE47QUFLaUI7QUFDdkJDLHdCQUFvQixFQUFFLFNBTmhCO0FBTTJCO0FBQ2pDQyxnQkFBWSxFQUFFLFNBUFI7QUFPbUI7QUFDekJDLFVBQU0sRUFBRSxTQVJGO0FBUWE7QUFDbkJDLFdBQU8sRUFBRSxTQVRIO0FBU2M7QUFDcEJDLGFBQVMsRUFBRSxTQVZMO0FBVWdCO0FBQ3RCQyxTQUFLLEVBQUUsU0FYRDtBQVdZO0FBQ2xCQyxVQUFNLEVBQUUsTUFaRjtBQVlVO0FBRWhCO0FBQ0FDLFNBQUssRUFBRTtBQUNMQyxVQUFJLEVBQUU7QUFDSmIsWUFBSSxFQUFFLE1BREY7QUFFSkksa0JBQVUsRUFBRSxNQUZSO0FBR0pJLGVBQU8sRUFBRSxNQUhMO0FB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VUFBSSxFQUFFLHFDQUZBO0FBR05DLGNBQVEsRUFBRSx1QkFISjtBQUlOdEMsWUFBTSxFQUFFLGdCQUpGO0FBS04rQixZQUFNLEVBQUUsaUJBTEY7QUFNTi9ELGNBQVEsRUFBRSxtQkFOSjtBQU9OcUMsYUFBTyxFQUFFLGNBUEg7QUFRTm5ELGNBQVEsRUFBRSxxQkFSSjtBQVNOQyxXQUFLLEVBQUUsZ0JBVEQ7QUFVTm9GLGdCQUFVLEVBQUU7QUFWTjtBQTFCRjtBQXBXSyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmZiZmNmOGUyNTQ1ZmNlZDFlZGE1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XHJcbiAgLy8gZXhhbXBsZSBjb2xvcnMgd2l0aCBkYXJrIG1vZGVcclxuICBjb2xvcnM6IHtcclxuICAgIHRleHQ6ICcjMzQzRDQ4JywgLy8gYm9keSBjb2xvciBhbmQgcHJpbWFyeSBjb2xvclxyXG4gICAgdGV4dF9zZWNvbmRhcnk6ICcjMDIwNzNFJywgLy8gc2Vjb25kYXJ5IGJvZHkgY29sb3JcclxuICAgIGhlYWRpbmc6ICcjMEYyMTM3JywgLy8gcHJpbWFyeSBoZWFkaW5nIGNvbG9yXHJcbiAgICBoZWFkaW5nX3NlY29uZGFyeTogJyMwRjIxMzcnLCAvLyBoZWFkaW5nIGNvbG9yXHJcbiAgICBiYWNrZ3JvdW5kOiAnI0ZGRkZGRicsIC8vIGJvZHkgYmFja2dyb3VuZCBjb2xvclxyXG4gICAgYmFja2dyb3VuZF9zZWNvbmRhcnk6ICcjRjlGQkZEJywgLy8gc2Vjb25kYXJ5IGJhY2tncm91bmQgY29sb3JcclxuICAgIGJvcmRlcl9jb2xvcjogJyNFNUVDRjQnLCAvLyBib3JkZXIgY29sb3JcclxuICAgIHllbGxvdzogJyNGRkE3NDAnLCAvLyBib3JkZXIgY29sb3JcclxuICAgIHByaW1hcnk6ICcjRUEzQTYwJywgLy8gcHJpbWFyeSBidXR0b24gYW5kIGxpbmsgY29sb3JcclxuICAgIHNlY29uZGFyeTogJyMyNTYzRkYnLCAvLyBzZWNvbmRhcnkgY29sb3IgLSBjYW4gYmUgdXNlZCBmb3IgaG92ZXIgc3RhdGVzXHJcbiAgICBtdXRlZDogJyNFNEU0RTQnLCAvLyBtdXRlZCBjb2xvclxyXG4gICAgYWNjZW50OiAnIzYwOScsIC8vIGEgY29udHJhc3QgY29sb3IgZm9yIGVtcGhhc2l6aW5nIFVJXHJcblxyXG4gICAgLy8gaGlnaGxpZ2h0XHRhIGJhY2tncm91bmQgY29sb3IgZm9yIGhpZ2hsaWdodGluZyB0ZXh0XHJcbiAgICBtb2Rlczoge1xyXG4gICAgICBkYXJrOiB7XHJcbiAgICAgICAgdGV4dDogJyNmZmYnLFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICcjMDAwJyxcclxuICAgICAgICBwcmltYXJ5OiAnIzBjZicsXHJcbiAgICAgICAgc2Vjb25kYXJ5OiAnIzA5YycsXHJcbiAgICAgICAgbXV0ZWQ6ICcjMTExJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBicmVha3BvaW50czogW1xyXG4gICAgJzQ4MHB4JyxcclxuICAgICc2NDBweCcsXHJcbiAgICAnNzY4cHgnLFxyXG4gICAgJzEwMjRweCcsXHJcbiAgICAnMTIyMHB4JyxcclxuICAgICcxMzY2cHgnLFxyXG4gICAgJzE2MjBweCcsXHJcbiAgXSxcclxuICBmb250czoge1xyXG4gICAgYm9keTogXCInRE0gU2FucycnLCBzYW5zLXNlcmlmXCIsXHJcbiAgICBoZWFkaW5nOiBcIidIZW1pIEhlYWQgRm91clR3ZW50eVNpeCcsIHNhbnMtc2VyaWZcIixcclxuICB9LFxyXG4gIGZvbnRTaXplczogWzEyLCAxNSwgMTYsIDE4LCAyMCwgMjIsIDI0LCAyOCwgMzIsIDM2LCA0MiwgNDgsIDUyLCA2NF0sXHJcbiAgZm9udFdlaWdodHM6IHtcclxuICAgIGJvZHk6ICdub3JtYWwnLFxyXG4gICAgaGVhZGluZzogNTAwLFxyXG4gICAgYm9sZDogNzAwLFxyXG4gIH0sXHJcbiAgbGluZUhlaWdodHM6IHtcclxuICAgIGJvZHk6IDEuOCxcclxuICAgIGhlYWRpbmc6IDEuNSxcclxuICB9LFxyXG4gIGxldHRlclNwYWNpbmdzOiB7XHJcbiAgICBib2R5OiAnbm9ybWFsJyxcclxuICAgIGNhcHM6ICcwLjJlbScsXHJcbiAgICBoZWFkaW5nOiAnLTAuNXB4JyxcclxuICB9LFxyXG4gIHNwYWNlOiBbMCwgNSwgMTAsIDE1LCAyMCwgMjUsIDMwLCA1MCwgODAsIDEwMCwgMTIwLCAxNTBdLFxyXG4gIC8vIHZhcmlhbnRzIGNhbiB1c2UgY3VzdG9tLCB1c2VyLWRlZmluZWQgbmFtZXNcclxuICBsYXlvdXQ6IHtcclxuICAgIGNvbnRhaW5lcjoge1xyXG4gICAgICBtYXhXaWR0aDogW1xyXG4gICAgICAgICcxMDAlJyxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgJzc4MHB4JyxcclxuICAgICAgICAnMTAyMHB4JyxcclxuICAgICAgICAnMTIwMHB4JyxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgICcxMzEwcHgnLFxyXG4gICAgICBdLFxyXG4gICAgICBweDogWzQsIDZdLFxyXG4gICAgfSxcclxuICAgIGhlYWRlcjoge1xyXG4gICAgICBjb2xvcjogJyMwMjA3M0UnLFxyXG4gICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgICAgcHk6IDMsXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgfSxcclxuICAgIHRvb2xiYXI6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgIH0sXHJcbiAgICBtYWluOiB7fSxcclxuICB9LFxyXG4gIHNlY3Rpb246IHtcclxuICAgIGtleUZlYXR1cmU6IHtcclxuICAgICAgcHQ6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMF0sXHJcbiAgICAgIHBiOiBbJzkwcHgnLCBudWxsLCA5LCBudWxsLCBudWxsLCAxMCwgbnVsbCwgJzE2NXB4J10sXHJcbiAgICB9LFxyXG4gICAgZmVhdHVyZToge1xyXG4gICAgICBwYjogWzgsIG51bGwsIDksIG51bGwsIG51bGwsIDEwLCBudWxsLCAnMTcwcHgnXSxcclxuICAgIH0sXHJcbiAgICBuZXdzOiB7XHJcbiAgICAgIHBiOiBbOCwgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTAsIG51bGwsICcxNzBweCddLFxyXG4gICAgfSxcclxuICAgIGNvcmVGZWF0dXJlOiB7XHJcbiAgICAgIHBiOiBbOCwgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTAsIG51bGwsICcxNzBweCddLFxyXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICB9LFxyXG4gICAgdGVzdGltb25pYWw6IHtcclxuICAgICAgcHQ6IFs4LCBudWxsLCA4LCAnNzBweCcsIG51bGwsIDgsIG51bGwsICcxNDVweCddLFxyXG4gICAgICBwYjogWyc5MHB4JywgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTAsIG51bGwsICcxOTBweCddLFxyXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICB9LFxyXG4gICAgc2VydmljZXM6IHtcclxuICAgICAgcGI6IFsnOTBweCcsIG51bGwsIDksIG51bGwsIG51bGwsIDEwLCBudWxsLCAnMTUwcHgnXSxcclxuICAgIH0sXHJcbiAgICBwcmljaW5nOiB7XHJcbiAgICAgIHB0OiBbOCwgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTAsIG51bGwsICcxODBweCddLFxyXG4gICAgICBwYjogWyc5MHB4JywgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTAsIG51bGwsICcxODBweCddLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlY3Rpb25IZWFkZXI6IHtcclxuICAgIHdpZHRoOiBbJzEwMCUnLCBudWxsLCAnNTQwcHgnXSxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBtdDogWyctM3B4JywgbnVsbCwgLTFdLFxyXG4gICAgbWFyZ2luQm90dG9tOiBbJzUwcHgnLCBudWxsLCAnNjBweCcsIG51bGwsIG51bGwsICc2NXB4JywgbnVsbCwgJzgwcHgnXSxcclxuICAgIG14OiAnYXV0bycsXHJcbiAgICB0aXRsZToge1xyXG4gICAgICBmb250U2l6ZTogWycyNHB4JywgbnVsbCwgJzI4cHgnLCBudWxsLCBudWxsLCAnMzJweCcsIG51bGwsICczNnB4J10sXHJcbiAgICAgIGNvbG9yOiAnaGVhZGluZycsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjMsIG51bGwsIG51bGwsIDEuMjVdLFxyXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICBmb250V2VpZ2h0OiAnNzAwJyxcclxuICAgICAgbGV0dGVyU3BhY2luZzogJy0uNXB4JyxcclxuICAgIH0sXHJcblxyXG4gICAgc3ViVGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IFswLCAnMTNweCcsIG51bGwsICcxNHB4J10sXHJcbiAgICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgIGxldHRlclNwYWNpbmc6IFsnMS41cHgnLCBudWxsLCAnMnB4J10sXHJcbiAgICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxyXG4gICAgICBmb250V2VpZ2h0OiAnNzAwJyxcclxuICAgICAgbWI6IDIsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNSxcclxuICAgIH0sXHJcbiAgfSxcclxuICB0ZXh0OiB7XHJcbiAgICBoZWFkaW5nOiB7XHJcbiAgICAgIGZvbnRGYW1pbHk6ICdoZWFkaW5nJyxcclxuICAgICAgbGluZUhlaWdodDogJ2hlYWRpbmcnLFxyXG4gICAgICBmb250V2VpZ2h0OiAnaGVhZGluZycsXHJcbiAgICAgIGZvbnRTaXplOiBbNF0sXHJcbiAgICAgIGxldHRlclNwYWNpbmc6ICcuNTBweCcsXHJcbiAgICAgIGNvbG9yOiAnaGVhZGluZycsXHJcbiAgICB9LFxyXG4gICAgaGVyb1ByaW1hcnk6IHtcclxuICAgICAgY29sb3I6ICdoZWFkaW5nJyxcclxuICAgICAgZm9udFNpemU6IFtcclxuICAgICAgICAnMzJweCcsXHJcbiAgICAgICAgJzM2cHgnLFxyXG4gICAgICAgICc0MnB4JyxcclxuICAgICAgICAnNDBweCcsXHJcbiAgICAgICAgJzQycHgnLFxyXG4gICAgICAgICc1MnB4JyxcclxuICAgICAgICAnNThweCcsXHJcbiAgICAgICAgJzY2cHgnLFxyXG4gICAgICBdLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBbMS4zLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAxLjJdLFxyXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICAgIG1iOiBbNCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNV0sXHJcbiAgICB9LFxyXG4gICAgaGVyb1NlY29uZGFyeToge1xyXG4gICAgICBmb250U2l6ZTogW1wiMTdweFwiLCBcIjE3cHhcIiwgJzE3cHgnLCBudWxsLCBudWxsLCAnMTdweCcsIDRdLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBbMS45LCBudWxsLCBudWxsLCAyXSxcclxuICAgICAgZm9udFdlaWdodDogJ2JvZHknLFxyXG4gICAgICBtYjogNSxcclxuICAgICAgcHg6IFswLCBudWxsLCA1LCA2LCBudWxsLCA4LCA5XSxcclxuICAgICAgY29sb3I6ICdoZWFkaW5nJyxcclxuICAgIH0sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICAvLyBleHRlbmRzIHRoZSB0ZXh0LmhlYWRpbmcgc3R5bGVzXHJcbiAgICAgIHZhcmlhbnQ6ICd0ZXh0LmhlYWRpbmcnLFxyXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICAgIGZvbnRTaXplOiBbMywgbnVsbCwgNF0sXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMjUsXHJcbiAgICAgIG1iOiAxLFxyXG4gICAgfSxcclxuICAgIGxlYWQ6IHtcclxuICAgICAgZm9udFNpemU6IDQwLFxyXG4gICAgICBmb250RmFtaWx5OiAnRE0gU2FucycsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICc1MDAnLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnNjBweCcsXHJcbiAgICAgIGxldHRlclNwYWNpbmc6ICctMS41cHgnLFxyXG4gICAgICBjb2xvcjogJyMwRjIxMzcnLFxyXG4gICAgfSxcclxuICAgIG11dGVkOiB7XHJcbiAgICAgIGxpbmVIZWlnaHQ6ICcyNnB4JyxcclxuICAgICAgY29sb3I6ICdtdXRlZCcsXHJcbiAgICB9LFxyXG4gICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgICAgY29sb3I6ICcjMDBBOTlEJyxcclxuICAgICAgbGluZUhlaWdodDogJzQwcHgnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGxpbmtzOiB7XHJcbiAgICBkZWZhdWx0OiB7XHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgfSxcclxuICAgIGJvbGQ6IHtcclxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgfSxcclxuICAgIG5hdjoge1xyXG4gICAgICBkaXNwbGF5OiBbJ25vbmUnLCBudWxsLCAnaW5saW5lLWJsb2NrJ10sXHJcbiAgICAgIHB4OiAyNSxcclxuICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXHJcbiAgICB9LFxyXG4gICAgYmxvZzoge1xyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICBweDogMCxcclxuICAgICAgY29sb3I6ICdpbmhlcml0JyxcclxuICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcclxuICAgICAgZm9udFNpemU6ICdpbmhlcml0JyxcclxuICAgICAgdHJhbnNpdGlvbjogJ2NvbG9yIDAuMjVzJyxcclxuICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgY29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBmb290ZXI6IHtcclxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgcHg6IDAsXHJcbiAgICAgIGNvbG9yOiAnaW5oZXJpdCcsXHJcbiAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXHJcbiAgICB9LFxyXG4gICAgbG9nbzoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaW1hZ2VzOiB7XHJcbiAgICBhdmF0YXI6IHtcclxuICAgICAgd2lkdGg6IDQ4LFxyXG4gICAgICBoZWlnaHQ6IDQ4LFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDk5OTk5LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIC8vIHZhcmlhbnRzIGZvciBidXR0b25zXHJcbiAgYnV0dG9uczoge1xyXG4gICAgbWVudToge1xyXG4gICAgICBkaXNwbGF5OiBbbnVsbCwgbnVsbCwgJ25vbmUnXSxcclxuICAgIH0sIC8vIGRlZmF1bHQgdmFyaWFudCBmb3IgTWVudUJ1dHRvblxyXG4gICAgLy8geW91IGNhbiByZWZlcmVuY2Ugb3RoZXIgdmFsdWVzIGRlZmluZWQgaW4gdGhlIHRoZW1lXHJcbiAgICBkZWZhdWx0QnRuOiB7XHJcbiAgICAgIGJvcmRlclJhZGl1czogJzQ1cHgnLFxyXG4gICAgICBmb250U2l6ZTogWycxNHB4JywgbnVsbCwgbnVsbCwgMl0sXHJcbiAgICAgIGxldHRlclNwYWNpbmdzOiAnLTAuMTVweCcsXHJcbiAgICAgIHBhZGRpbmc6IFsnMTJweCAyMHB4JywgbnVsbCwgJzE1cHggMzBweCddLFxyXG4gICAgICBmb250RmFtaWx5OiAnYm9keScsXHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjIsXHJcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4yNXMnLFxyXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICAgICcmOmZvY3VzJzoge1xyXG4gICAgICAgIG91dGxpbmU6IDAsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgcHJpbWFyeToge1xyXG4gICAgICB2YXJpYW50OiAnYnV0dG9ucy5kZWZhdWx0QnRuJyxcclxuICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIGJnOiAncHJpbWFyeScsXHJcbiAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgIGJveFNoYWRvdzogJ3JnYmEoMjMzLCA3NiwgODQsIDAuNTcpIDBweCA5cHggMjBweCAtNXB4JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB3aGl0ZUJ1dHRvbjoge1xyXG4gICAgICB2YXJpYW50OiAnYnV0dG9ucy5kZWZhdWx0QnRuJyxcclxuICAgICAgY29sb3I6ICdoZWFkaW5nX3NlY29uZGFyeScsXHJcbiAgICAgIGJnOiAnd2hpdGUnLFxyXG4gICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICBib3hTaGFkb3c6ICdyZ2JhKDAsIDAsIDAsIDAuNSkgMHB4IDEycHggMjRweCAtMTBweCcsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgIHZhcmlhbnQ6ICdidXR0b25zLmRlZmF1bHRCdG4nLFxyXG4gICAgICBib3JkZXI6ICcycHggc29saWQnLFxyXG4gICAgICBib3JkZXJDb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgICBjb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgICBiZzogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgcGFkZGluZzogWycxMHB4IDE1cHgnLCBudWxsLCAnMTVweCAzMHB4J10sXHJcbiAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgIGJnOiAncHJpbWFyeScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgdGV4dEJ1dHRvbjoge1xyXG4gICAgICB2YXJpYW50OiAnYnV0dG9ucy5kZWZhdWx0QnRuJyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIHN2Zzoge1xyXG4gICAgICAgIGZvbnRTaXplOiBbNCwgNl0sXHJcbiAgICAgICAgbXI6IDIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY2FyZHM6IHtcclxuICAgIHByaW1hcnk6IHtcclxuICAgICAgcGFkZGluZzogMixcclxuICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgfSxcclxuICAgIG9mZmVyOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIGZsZXg6IFsnMSAxIGNhbGMoNTAlIC0gMTZweCknLCAnMSAxIDIwJSddLFxyXG4gICAgICBtaW5IZWlnaHQ6IDEzMCxcclxuICAgICAgbTogMixcclxuICAgICAgYmFja2dyb3VuZDogJyNGRkZGRkYnLFxyXG4gICAgICBib3JkZXI6ICcxcHggc29saWQgI0VERUZGNicsXHJcbiAgICAgIGJvcmRlclJhZGl1czogNSxcclxuICAgIH0sXHJcbiAgICBmZWF0dXJlQ2FyZDoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcclxuICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXHJcbiAgICAgIHA6IDMsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZm9ybXM6IHtcclxuICAgIGxhYmVsOiB7XHJcbiAgICAgIGZvbnRTaXplOiAxLFxyXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICB9LFxyXG4gICAgaW5wdXQ6IHtcclxuICAgICAgYm9yZGVyUmFkaXVzOiA4LFxyXG4gICAgICBib3JkZXJDb2xvcjogJ2JvcmRlcl9jb2xvcicsXHJcbiAgICAgIGhlaWdodDogNjAsXHJcbiAgICAgICcmOmZvY3VzJzoge1xyXG4gICAgICAgIGJvcmRlckNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgICAgYm94U2hhZG93OiAodCkgPT4gYDAgMCAwIDJweCAke3QuY29sb3JzLnByaW1hcnl9YCxcclxuICAgICAgICBvdXRsaW5lOiAnbm9uZScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIGJhZGdlczoge1xyXG4gICAgcHJpbWFyeToge1xyXG4gICAgICBjb2xvcjogJ2JhY2tncm91bmQnLFxyXG4gICAgICBiZzogJyMyOEE1RkYnLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDMwLFxyXG4gICAgICBwOiAnM3B4IDExcHgnLFxyXG4gICAgICBmb250U2l6ZTogMSxcclxuICAgICAgbGV0dGVyU3BhY2luZzogJy0wLjVweCcsXHJcbiAgICB9LFxyXG4gICAgb3V0bGluZToge1xyXG4gICAgICBjb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgICBiZzogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgYm94U2hhZG93OiAnaW5zZXQgMCAwIDAgMXB4JyxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgc3R5bGVzOiB7XHJcbiAgICAvLyBUbyBhZGQgYmFzZSwgdG9wLWxldmVsIHN0eWxlcyB0byB0aGUgPGJvZHk+IGVsZW1lbnQsIHVzZSB0aGVtZS5zdHlsZXMucm9vdC5cclxuICAgIHJvb3Q6IHtcclxuICAgICAgZm9udEZhbWlseTogJ2JvZHknLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnYm9keScsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2R5JyxcclxuICAgICAgZm9udFNtb290aGluZzogJ2FudGlhbGlhc2VkJyxcclxuICAgICAgLy8gTW9kYWwgR2xvYmFsIFN0eWxlXHJcbiAgICAgICcubW9kYWwtdmlkZW8tY2xvc2UtYnRuJzoge1xyXG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICB9LFxyXG4gICAgICAnLm1vZGFsLXZpZGVvLW1vdmllLXdyYXAnOiB7XHJcbiAgICAgICAgbWFyZ2luOiA2LFxyXG4gICAgICAgIHdpZHRoOiAnYXV0bycsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgLy8gRGl2aWRlciBzdHlsZXNcclxuICAgIGhyOiB7XHJcbiAgICAgIGJvcmRlcjogMCxcclxuICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkJyxcclxuICAgICAgYm9yZGVyQ29sb3I6ICcjRDlFMEU3JyxcclxuICAgIH0sXHJcbiAgICAvLyBhbHNvIHlvdSBjYW4gdXNlIG90aGVyIEhUTUwgZWxlbWVudHMgc3R5bGUgaGVyZVxyXG4gICAgdWw6IHtcclxuICAgICAgbGlzdFN0eWxlOiAnbm9uZScsXHJcbiAgICB9LFxyXG4gICAgc3JPbmx5OiB7XHJcbiAgICAgIGJvcmRlcjogJzAgIWltcG9ydGFudCcsXHJcbiAgICAgIGNsaXA6ICdyZWN0KDFweCwgMXB4LCAxcHgsIDFweCkgIWltcG9ydGFudCcsXHJcbiAgICAgIGNsaXBQYXRoOiAnaW5zZXQoNTAlKSAhaW1wb3J0YW50JyxcclxuICAgICAgaGVpZ2h0OiAnMXB4ICFpbXBvcnRhbnQnLFxyXG4gICAgICBtYXJnaW46ICctMXB4ICFpbXBvcnRhbnQnLFxyXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbiAhaW1wb3J0YW50JyxcclxuICAgICAgcGFkZGluZzogJzAgIWltcG9ydGFudCcsXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUgIWltcG9ydGFudCcsXHJcbiAgICAgIHdpZHRoOiAnMXB4ICFpbXBvcnRhbnQnLFxyXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwICFpbXBvcnRhbnQnLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9