module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router.resolveHref)(pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)(as);
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return basePath && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

    return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
  } catch (_) {
    return urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = hasBasePath(as) ? delBasePath(as) : as;
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      searchParams
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    }

    const query = (0, _querystring.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)(as, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);
    }

    resolvedAs = delBasePath(resolvedAs);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _denormalizePagePath.denormalizePagePath)(delBasePath(pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = addBasePath(page);
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/',
  decode: decodeParam
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys, matcherOptions);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

function decodeParam(param) {
  try {
    return decodeURIComponent(param);
  } catch (_) {
    const err = new Error('failed to decode param');
    err.code = 'DECODE_FAILED';
    throw err;
  }
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      searchParams,
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  parsedDestination.query = (0, _querystring.searchParamsToUrlQuery)(parsedDestination.searchParams);
  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  const paramKeys = Object.keys(params);

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${encodeURI(destinationCompiler(params))}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
    delete parsedDestination.searchParams;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, item));
    } else {
      result.set(key, value);
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes(asPath)) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./src/assets/arrowEven.svg":
/*!**********************************!*\
  !*** ./src/assets/arrowEven.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjA0IiBoZWlnaHQ9IjQzIiB2aWV3Qm94PSIwIDAgMjA0IDQzIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHBhdGggZD0iTTAuNDgxMjAxIDEwLjI1NzFDMC40ODEyMDEgMTAuMjU3MSA5Mi43ODEyIDgxLjc4NDcgMTk1LjQ4MSAxMC4yNTcxIiBzdHJva2U9IiNDMkNCREUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtZGFzaGFycmF5PSI1IDUiLz4NCjxwYXRoIGQ9Ik0xODAuNyAzLjQ3NDU1QzE4MC43IDMuNDc0NTUgMTk5LjgxNSAtMi4wNTE3NyAyMDEuNjM3IDQuMjA5MTZDMjAzLjQ1OSAxMC40NzAxIDIwMi4wOTMgMTYuOTQ0NCAxOTYuMTc2IDI1LjgxNDIiIHN0cm9rZT0iI0MyQ0JERSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1kYXNoYXJyYXk9IjQgNCIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ "./src/assets/arrowOdd.svg":
/*!*********************************!*\
  !*** ./src/assets/arrowOdd.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjA0IiBoZWlnaHQ9IjQzIiB2aWV3Qm94PSIwIDAgMjA0IDQzIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHBhdGggZD0iTTAuOTk5NzU2IDMyLjcxOTVDMC45OTk3NTYgMzIuNzE5NSA5My4yOTk4IC0zOC44MDgxIDE5NiAzMi43MTk1IiBzdHJva2U9IiNDMkNCREUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtZGFzaGFycmF5PSI1IDUiLz4NCjxwYXRoIGQ9Ik0xODEuMjE5IDM5LjQ5NzZDMTgxLjIxOSAzOS40OTc2IDIwMC4zMzQgNDUuMDI0IDIwMi4xNTYgMzguNzYzQzIwMy45NzggMzIuNTAxOSAyMDIuNjExIDI2LjAyNzUgMTk2LjY5NCAxNy4xNTc1IiBzdHJva2U9IiNDMkNCREUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtZGFzaGFycmF5PSI0IDQiLz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "./src/assets/banner-thumb.png":
/*!*************************************!*\
  !*** ./src/assets/banner-thumb.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/banner-thumb-c121dc79382b9bf20414c30c4d092e0a.png";

/***/ }),

/***/ "./src/assets/core-feature.png":
/*!*************************************!*\
  !*** ./src/assets/core-feature.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/core-feature-749dc086eec25ac14ed0c92a6876d29e.png";

/***/ }),

/***/ "./src/assets/feature/partnership.svg":
/*!********************************************!*\
  !*** ./src/assets/feature/partnership.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTUiIGhlaWdodD0iMTA1IiB2aWV3Qm94PSIwIDAgOTUgMTA1IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZCkiPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Ny40OTk5IDE3Ljk5OTlDNjIuMTM1NSAxNy45OTk5IDczLjk5OTkgMjkuODY0NCA3My45OTk5IDQ0LjQ5OTlDNzMuOTk5OSA1OS4xMzUzIDYyLjEzNTUgNzAuOTk5OSA0Ny40OTk5IDcwLjk5OTlDMzIuODY0NCA3MC45OTk5IDIxIDU5LjEzNTMgMjEgNDQuNDk5OUMyMSAyOS44NjQ0IDMyLjg2NDQgMTcuOTk5OSA0Ny40OTk5IDE3Ljk5OTlaIiBmaWxsPSIjRkY0MzYxIi8+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQ3LjQ5OTkgMTcuOTk5OUM2Mi4xMzU1IDE3Ljk5OTkgNzMuOTk5OSAyOS44NjQ0IDczLjk5OTkgNDQuNDk5OUM3My45OTk5IDU5LjEzNTMgNjIuMTM1NSA3MC45OTk5IDQ3LjQ5OTkgNzAuOTk5OUMzMi44NjQ0IDcwLjk5OTkgMjEgNTkuMTM1MyAyMSA0NC40OTk5QzIxIDI5Ljg2NDQgMzIuODY0NCAxNy45OTk5IDQ3LjQ5OTkgMTcuOTk5OVoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4NCjwvZz4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDMgMC45OTk5MzZINTIuOTk5OUM2OS41Njg1IDAuOTk5OTM2IDgyLjk5OTkgMTQuNDMxMSA4Mi45OTk5IDMwLjk5OTlWNDAuOTk5OUM4Mi45OTk5IDU3LjU2ODIgNjkuNTY4NSA3MC45OTk4IDUyLjk5OTkgNzAuOTk5OEg0M0MyNi40MzE1IDcwLjk5OTggMTIuOTk5OSA1Ny41NjgyIDEyLjk5OTkgNDAuOTk5OVYzMC45OTk5QzEyLjk5OTkgMTQuNDMxMSAyNi40MzE1IDAuOTk5OTM2IDQzIDAuOTk5OTM2WiIgZmlsbD0iI0ZGNDM2MSIvPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00MyAwLjk5OTkzNkg1Mi45OTk5QzY5LjU2ODUgMC45OTk5MzYgODIuOTk5OSAxNC40MzExIDgyLjk5OTkgMzAuOTk5OVY0MC45OTk5QzgyLjk5OTkgNTcuNTY4MiA2OS41Njg1IDcwLjk5OTggNTIuOTk5OSA3MC45OTk4SDQzQzI2LjQzMTUgNzAuOTk5OCAxMi45OTk5IDU3LjU2ODIgMTIuOTk5OSA0MC45OTk5VjMwLjk5OTlDMTIuOTk5OSAxNC40MzExIDI2LjQzMTUgMC45OTk5MzYgNDMgMC45OTk5MzZaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXIpIi8+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUxLjQzMjIgNDEuNjM5OEM1MS42NDQxIDQxLjQyNDcgNTEuNzUwMiA0MS4xNzA5IDUxLjc1MDIgNDAuODc3NFYzOC4xNjg4SDYzVjQ2LjI5NTJDNjMgNDcuMDM5MiA2Mi43Mzc5IDQ3LjY3NzQgNjIuMjEzMiA0OC4yMDc1QzYxLjY4ODcgNDguNzM4MSA2MS4wNTgxIDQ5LjAwMzIgNjAuMzIxNiA0OS4wMDMySDM1LjY3ODdDMzQuOTQyIDQ5LjAwMzIgMzQuMzExNCA0OC43MzgxIDMzLjc4NjkgNDguMjA3NUMzMy4yNjIyIDQ3LjY3NzQgMzMgNDcuMDM5MiAzMyA0Ni4yOTUyVjM4LjE2ODhINDQuMjVWNDAuODc3NEM0NC4yNSA0MS4xNzA5IDQ0LjM1NjEgNDEuNDI0NyA0NC41NjgyIDQxLjYzOThDNDQuNzgwMiA0MS44NTM3IDQ1LjAzMTMgNDEuOTYxMyA0NS4zMjE2IDQxLjk2MTNINTAuNjc4N0M1MC45Njg4IDQxLjk2MTMgNTEuMjIwMSA0MS44NTM3IDUxLjQzMjIgNDEuNjM5OFpNNTAuMTQzMSAzOC4xNjg4SDQ1Ljg1NzFWNDAuMzM1NUg1MC4xNDMxVjM4LjE2ODhaTTYyLjIxMzIgMjguMTMwMUM2MS42ODg3IDI3LjU5ODkgNjEuMDU4MSAyNy4zMzM5IDYwLjMyMTYgMjcuMzMzOUg1NC40Mjg1VjI0LjYyNTNDNTQuNDI4NSAyNC4xNzM3IDU0LjI3MjQgMjMuNzkwMyA1My45NTk4IDIzLjQ3MzdDNTMuNjQ3NSAyMy4xNTg2IDUzLjI2NzggMjMgNTIuODIxNiAyM0g0My4xNzg3QzQyLjczMjMgMjMgNDIuMzUyOSAyMy4xNTg2IDQyLjA0MDQgMjMuNDczN0M0MS43Mjc4IDIzLjc4OTggNDEuNTcxNiAyNC4xNzM3IDQxLjU3MTYgMjQuNjI1M1YyNy4zMzM5SDM1LjY3ODdDMzQuOTQyIDI3LjMzMzkgMzQuMzExNCAyNy41OTg5IDMzLjc4NjkgMjguMTMwMUMzMy4yNjIyIDI4LjY1OTcgMzMgMjkuMjk3MyAzMyAzMC4wNDI1VjM2LjU0MzVINjNWMzAuMDQyNUM2MyAyOS4yOTczIDYyLjczNzkgMjguNjU5NyA2Mi4yMTMyIDI4LjEzMDFaTTUyLjI4NTggMjcuMzMzOUg0My43MTQ0VjI1LjE2NjdINTIuMjg1OFYyNy4zMzM5WiIgZmlsbD0id2hpdGUiLz4NCjxkZWZzPg0KPGZpbHRlciBpZD0iZmlsdGVyMF9kIiB4PSItMy4wNTE3NmUtMDUiIHk9IjkuOTk5ODgiIHdpZHRoPSI5NSIgaGVpZ2h0PSI5NSIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPg0KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4NCjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIi8+DQo8ZmVPZmZzZXQgZHk9IjEzIi8+DQo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxMC41Ii8+DQo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAxIDAgMCAwIDAgMC4yNjY2NjcgMCAwIDAgMCAwLjM0MTE3NiAwIDAgMCAwLjMgMCIvPg0KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3ciLz4NCjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93IiByZXN1bHQ9InNoYXBlIi8+DQo8L2ZpbHRlcj4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjUxLjYzNTEiIHkxPSIxMDMuNjM1IiB4Mj0iMTA2LjYzNSIgeTI9IjQwLjM2NDkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IiNGODA3NTkiLz4NCjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0JDNEU5QyIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhciIgeDE9IjUzLjQxMzIiIHkxPSIxMTMuNDEzIiB4Mj0iMTI1LjQxMyIgeTI9IjMwLjU4NjgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IiNGRjQxNkMiLz4NCjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGNEIyQiIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjwvZGVmcz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "./src/assets/feature/performance.svg":
/*!********************************************!*\
  !*** ./src/assets/feature/performance.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTUiIGhlaWdodD0iMTA0IiB2aWV3Qm94PSIwIDAgOTUgMTA0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZCkiPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Ny41IDE2Ljk5OTlDNjIuMTM1NSAxNi45OTk5IDczLjk5OTkgMjguODY0NCA3My45OTk5IDQzLjQ5OTlDNzMuOTk5OSA1OC4xMzUzIDYyLjEzNTUgNjkuOTk5OSA0Ny41IDY5Ljk5OTlDMzIuODY0NCA2OS45OTk5IDIxIDU4LjEzNTMgMjEgNDMuNDk5OUMyMSAyOC44NjQ0IDMyLjg2NDQgMTYuOTk5OSA0Ny41IDE2Ljk5OTlaIiBmaWxsPSIjRkY0MzYxIi8+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQ3LjUgMTYuOTk5OUM2Mi4xMzU1IDE2Ljk5OTkgNzMuOTk5OSAyOC44NjQ0IDczLjk5OTkgNDMuNDk5OUM3My45OTk5IDU4LjEzNTMgNjIuMTM1NSA2OS45OTk5IDQ3LjUgNjkuOTk5OUMzMi44NjQ0IDY5Ljk5OTkgMjEgNTguMTM1MyAyMSA0My40OTk5QzIxIDI4Ljg2NDQgMzIuODY0NCAxNi45OTk5IDQ3LjUgMTYuOTk5OVoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4NCjwvZz4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDIgMC45OTk5MzZINTEuOTk5OUM2OC41Njg1IDAuOTk5OTM2IDgxLjk5OTkgMTQuNDMxMSA4MS45OTk5IDMwLjk5OTlWNDAuOTk5OUM4MS45OTk5IDU3LjU2ODIgNjguNTY4NSA3MC45OTk4IDUxLjk5OTkgNzAuOTk5OEg0MkMyNS40MzE1IDcwLjk5OTggMTEuOTk5OSA1Ny41NjgyIDExLjk5OTkgNDAuOTk5OVYzMC45OTk5QzExLjk5OTkgMTQuNDMxMSAyNS40MzE1IDAuOTk5OTM2IDQyIDAuOTk5OTM2WiIgZmlsbD0iI0ZGNDM2MSIvPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00MiAwLjk5OTkzNkg1MS45OTk5QzY4LjU2ODUgMC45OTk5MzYgODEuOTk5OSAxNC40MzExIDgxLjk5OTkgMzAuOTk5OVY0MC45OTk5QzgxLjk5OTkgNTcuNTY4MiA2OC41Njg1IDcwLjk5OTggNTEuOTk5OSA3MC45OTk4SDQyQzI1LjQzMTUgNzAuOTk5OCAxMS45OTk5IDU3LjU2ODIgMTEuOTk5OSA0MC45OTk5VjMwLjk5OTlDMTEuOTk5OSAxNC40MzExIDI1LjQzMTUgMC45OTk5MzYgNDIgMC45OTk5MzZaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXIpIi8+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTU1Ljk0OTIgMzEuMDAyNkM1NS44NTc1IDMwLjc5NzIgNTUuNjYwMiAzMC42NjU1IDU1LjQ0MjkgMzAuNjY1NUg0OC44MjA5TDU1LjM1NjMgMTkuODk0QzU1LjQ2NTIgMTkuNzE0NCA1NS40NzE4IDE5LjQ4NyA1NS4zNzM1IDE5LjMwMTVDNTUuMjc1MiAxOS4xMTQ0IDU1LjA4NzQgMTguOTk4OCA1NC44ODQgMTguOTk4OEg0NS45NDI5QzQ1LjczMTIgMTguOTk4OCA0NS41Mzc4IDE5LjEyMzYgNDUuNDQyOCAxOS4zMjE0TDM3LjA2MDYgMzYuODIxNEMzNi45NzQgMzcuMDAyMSAzNi45ODM1IDM3LjIxNjYgMzcuMDg1MSAzNy4zODg2QzM3LjE4NzQgMzcuNTYwNyAzNy4zNjY3IDM3LjY2NSAzNy41NjA3IDM3LjY2NUg0My4zMDdMMzcuMDQ1NSA1My4xODkxQzM2LjkzODcgNTMuNDU0NyAzNy4wMzM3IDUzLjc2MjMgMzcuMjY5IDUzLjkxMzNDMzcuMzU5NCA1My45NzAzIDM3LjQ2IDUzLjk5ODggMzcuNTYwMSA1My45OTg4QzM3LjcyMDQgNTMuOTk4OCAzNy44Nzg2IDUzLjkyNjggMzcuOTg4MSA1My43OTE4TDU1Ljg3MDMgMzEuNjI1MkM1Ni4wMTA2IDMxLjQ1MTUgNTYuMDQwNyAzMS4yMDg1IDU1Ljk0OTIgMzEuMDAyNloiIGZpbGw9IndoaXRlIi8+DQo8ZGVmcz4NCjxmaWx0ZXIgaWQ9ImZpbHRlcjBfZCIgeD0iLTMuMDUxNzZlLTA1IiB5PSI4Ljk5OTg4IiB3aWR0aD0iOTUiIGhlaWdodD0iOTUiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4NCjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+DQo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIvPg0KPGZlT2Zmc2V0IGR5PSIxMyIvPg0KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMTAuNSIvPg0KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMC44OTgwMzkgMCAwIDAgMCAwLjExNzY0NyAwIDAgMCAwIDAuNDM1Mjk0IDAgMCAwIDAuMyAwIi8+DQo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9ImVmZmVjdDFfZHJvcFNoYWRvdyIvPg0KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3ciIHJlc3VsdD0ic2hhcGUiLz4NCjwvZmlsdGVyPg0KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyIiB4MT0iNTEuNjM1MSIgeTE9IjEwMi42MzUiIHgyPSIxMDYuNjM1IiB5Mj0iMzkuMzY0OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPg0KPHN0b3Agc3RvcC1jb2xvcj0iI0Y4MDc1OSIvPg0KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjQkM0RTlDIi8+DQo8L2xpbmVhckdyYWRpZW50Pg0KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyIiB4MT0iNTIuNDEzMiIgeTE9IjExMy40MTMiIHgyPSIxMjQuNDEzIiB5Mj0iMzAuNTg2OCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPg0KPHN0b3Agc3RvcC1jb2xvcj0iI0Y4MDc1OSIvPg0KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjQkM0RTlDIi8+DQo8L2xpbmVhckdyYWRpZW50Pg0KPC9kZWZzPg0KPC9zdmc+DQo="

/***/ }),

/***/ "./src/assets/feature/subscription.svg":
/*!*********************************************!*\
  !*** ./src/assets/feature/subscription.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTUiIGhlaWdodD0iMTA0IiB2aWV3Qm94PSIwIDAgOTUgMTA0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZCkiPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Ny40OTk5IDE2Ljk5OTlDNjIuMTM1NCAxNi45OTk5IDc0IDI4Ljg2NDQgNzQgNDMuNDk5OUM3NCA1OC4xMzUzIDYyLjEzNTQgNjkuOTk5OSA0Ny40OTk5IDY5Ljk5OTlDMzIuODY0NCA2OS45OTk5IDIxIDU4LjEzNTMgMjEgNDMuNDk5OUMyMSAyOC44NjQ0IDMyLjg2NDQgMTYuOTk5OSA0Ny40OTk5IDE2Ljk5OTlaIiBmaWxsPSIjRkY0MzYxIi8+DQo8L2c+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQxLjk5OTkgMC45OTk5MzZINTJDNjguNTY4NSAwLjk5OTkzNiA4MiAxNC40MzExIDgyIDMwLjk5OTlWNDAuOTk5OUM4MiA1Ny41NjgyIDY4LjU2ODUgNzAuOTk5OCA1MiA3MC45OTk4SDQxLjk5OTlDMjUuNDMxNCA3MC45OTk4IDExLjk5OTkgNTcuNTY4MiAxMS45OTk5IDQwLjk5OTlWMzAuOTk5OUMxMS45OTk5IDE0LjQzMTEgMjUuNDMxNCAwLjk5OTkzNiA0MS45OTk5IDAuOTk5OTM2WiIgZmlsbD0iI0ZGNDM2MSIvPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00MS45OTk5IDAuOTk5OTM2SDUyQzY4LjU2ODUgMC45OTk5MzYgODIgMTQuNDMxMSA4MiAzMC45OTk5VjQwLjk5OTlDODIgNTcuNTY4MiA2OC41Njg1IDcwLjk5OTggNTIgNzAuOTk5OEg0MS45OTk5QzI1LjQzMTQgNzAuOTk5OCAxMS45OTk5IDU3LjU2ODIgMTEuOTk5OSA0MC45OTk5VjMwLjk5OTlDMTEuOTk5OSAxNC40MzExIDI1LjQzMTQgMC45OTk5MzYgNDEuOTk5OSAwLjk5OTkzNloiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNjQuNTQ0MSAzMS44NTg1QzY0LjU0OTggMzEuOTYwNyA2NC41NDI0IDMyLjA2NDQgNjQuNTE2OCAzMi4xNjg3TDYyLjIzNDYgNDEuMzM0OEM2Mi4xMTk0IDQxLjc5NjEgNjEuNzA3MiA0Mi4xMjE0IDYxLjIzMzQgNDIuMTI0MUw0Ny41Mzk5IDQyLjE5MzRDNDcuNTM4MiA0Mi4xOTM0IDQ3LjUzNjQgNDIuMTkzNCA0Ny41MzQ2IDQyLjE5MzRIMzMuODQxMUMzMy4zNjQ2IDQyLjE5MzQgMzIuOTQ5NiA0MS44NjcxIDMyLjgzNDYgNDEuNDAzMUwzMC41NTIzIDMyLjIwMkMzMC41MjU5IDMyLjA5NTYgMzAuNTE4NCAzMS45ODg2IDMwLjUyNSAzMS44ODM4QzI5LjY0MjEgMzEuNjA0NyAyOSAzMC43NzUyIDI5IDI5Ljc5NzdDMjkgMjguNTkwOCAyOS45NzcyIDI3LjYwOTYgMzEuMTc4NSAyNy42MDk2QzMyLjM3OTggMjcuNjA5NiAzMy4zNTcgMjguNTkwOCAzMy4zNTcgMjkuNzk3N0MzMy4zNTcgMzAuNDc2OCAzMy4wNDcgMzEuMDg0MyAzMi41NjE2IDMxLjQ4NjRMMzUuNDE5IDM0LjM3NjhDMzYuMTQxMiAzNS4xMDc0IDM3LjE0MzIgMzUuNTI2OCAzOC4xNjg0IDM1LjUyNjhDMzkuMzgwNyAzNS41MjY4IDQwLjUzNjQgMzQuOTQ4MyA0MS4yNjQzIDMzLjk4TDQ1Ljk2MDIgMjcuNzMyMUM0NS41NjU4IDI3LjMzNjUgNDUuMzIxNCAyNi43ODk3IDQ1LjMyMTQgMjYuMTg2NUM0NS4zMjE0IDI0Ljk4IDQ2LjI5ODYgMjMuOTk4MyA0Ny40OTk5IDIzLjk5ODNDNDguNzAxMiAyMy45OTgzIDQ5LjY3ODQgMjQuOTggNDkuNjc4NCAyNi4xODY1QzQ5LjY3ODQgMjYuNzcxNCA0OS40NDcyIDI3LjMwMiA0OS4wNzMzIDI3LjY5NUM0OS4wNzQ1IDI3LjY5NjcgNDkuMDc2MSAyNy42OTgzIDQ5LjA3NzMgMjcuNjk5OUw1My43MzkxIDMzLjk2NDlDNTQuNDY2OCAzNC45NDI0IDU1LjYyNjYgMzUuNTI2OCA1Ni44NDIzIDM1LjUyNjhDNTcuODc3IDM1LjUyNjggNTguODUgMzUuMTIxOSA1OS41ODE0IDM0LjM4NzVMNjIuNDU2OCAzMS40OTk5QzYxLjk2MTIgMzEuMDk4MyA2MS42NDI5IDMwLjQ4NTQgNjEuNjQyOSAyOS43OTc3QzYxLjY0MjkgMjguNTkwOCA2Mi42MjAyIDI3LjYwOTYgNjMuODIxNSAyNy42MDk2QzY1LjAyMjcgMjcuNjA5NiA2NiAyOC41OTA4IDY2IDI5Ljc5NzdDNjYgMzAuNzQ4OCA2NS4zOTA2IDMxLjU1ODUgNjQuNTQ0MSAzMS44NTg1Wk02Mi4wMTE4IDQ1LjQ1NjlDNjIuMDExOCA0NC44ODIxIDYxLjU0NzMgNDQuNDE1NSA2MC45NzQ0IDQ0LjQxNTVIMzQuMTQwOEMzMy41Njc5IDQ0LjQxNTUgMzMuMTAzNCA0NC44ODIxIDMzLjEwMzQgNDUuNDU2OVY0Ny45NTY5QzMzLjEwMzQgNDguNTMyNyAzMy41Njc5IDQ4Ljk5ODggMzQuMTQwOCA0OC45OTg4SDYwLjk3NDRDNjEuNTQ3MyA0OC45OTg4IDYyLjAxMTggNDguNTMyNyA2Mi4wMTE4IDQ3Ljk1NjlWNDUuNDU2OVoiIGZpbGw9IndoaXRlIi8+DQo8ZGVmcz4NCjxmaWx0ZXIgaWQ9ImZpbHRlcjBfZCIgeD0iMS4xNDQ0MWUtMDUiIHk9IjguOTk5ODgiIHdpZHRoPSI5NSIgaGVpZ2h0PSI5NSIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPg0KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4NCjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIi8+DQo8ZmVPZmZzZXQgZHk9IjEzIi8+DQo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxMC41Ii8+DQo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwLjk5MjE1NyAwIDAgMCAwIDAuMzQ1MDk4IDAgMCAwIDAgMC40NDcwNTkgMCAwIDAgMC4zIDAiLz4NCjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93Ii8+DQo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvdyIgcmVzdWx0PSJzaGFwZSIvPg0KPC9maWx0ZXI+DQo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSI1Mi40MTMyIiB5MT0iMTEzLjQxMyIgeDI9IjEyNC40MTMiIHkyPSIzMC41ODY4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+DQo8c3RvcCBzdG9wLWNvbG9yPSIjRkY1ODU4Ii8+DQo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGODU3QTYiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8L2RlZnM+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ "./src/assets/feature/support.svg":
/*!****************************************!*\
  !*** ./src/assets/feature/support.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTUiIGhlaWdodD0iMTA1IiB2aWV3Qm94PSIwIDAgOTUgMTA1IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZCkiPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Ny40OTk5IDE3Ljk5OTlDNjIuMTM1NCAxNy45OTk5IDczLjk5OTkgMjkuODY0NCA3My45OTk5IDQ0LjQ5OTlDNzMuOTk5OSA1OS4xMzUzIDYyLjEzNTQgNzAuOTk5OSA0Ny40OTk5IDcwLjk5OTlDMzIuODY0NCA3MC45OTk5IDIwLjk5OTkgNTkuMTM1MyAyMC45OTk5IDQ0LjQ5OTlDMjAuOTk5OSAyOS44NjQ0IDMyLjg2NDQgMTcuOTk5OSA0Ny40OTk5IDE3Ljk5OTlaIiBmaWxsPSIjRkY0MzYxIi8+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQ3LjQ5OTkgMTcuOTk5OUM2Mi4xMzU0IDE3Ljk5OTkgNzMuOTk5OSAyOS44NjQ0IDczLjk5OTkgNDQuNDk5OUM3My45OTk5IDU5LjEzNTMgNjIuMTM1NCA3MC45OTk5IDQ3LjQ5OTkgNzAuOTk5OUMzMi44NjQ0IDcwLjk5OTkgMjAuOTk5OSA1OS4xMzUzIDIwLjk5OTkgNDQuNDk5OUMyMC45OTk5IDI5Ljg2NDQgMzIuODY0NCAxNy45OTk5IDQ3LjQ5OTkgMTcuOTk5OVoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4NCjwvZz4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDIuOTk5OSAwLjk5OTkzNkg1M0M2OS41Njg1IDAuOTk5OTM2IDgzIDE0LjQzMTEgODMgMzAuOTk5OVY0MC45OTk5QzgzIDU3LjU2ODIgNjkuNTY4NSA3MC45OTk4IDUzIDcwLjk5OThINDIuOTk5OUMyNi40MzE0IDcwLjk5OTggMTIuOTk5OSA1Ny41NjgyIDEyLjk5OTkgNDAuOTk5OVYzMC45OTk5QzEyLjk5OTkgMTQuNDMxMSAyNi40MzE0IDAuOTk5OTM2IDQyLjk5OTkgMC45OTk5MzZaIiBmaWxsPSIjRkY0MzYxIi8+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQyLjk5OTkgMC45OTk5MzZINTNDNjkuNTY4NSAwLjk5OTkzNiA4MyAxNC40MzExIDgzIDMwLjk5OTlWNDAuOTk5OUM4MyA1Ny41NjgyIDY5LjU2ODUgNzAuOTk5OCA1MyA3MC45OTk4SDQyLjk5OTlDMjYuNDMxNCA3MC45OTk4IDEyLjk5OTkgNTcuNTY4MiAxMi45OTk5IDQwLjk5OTlWMzAuOTk5OUMxMi45OTk5IDE0LjQzMTEgMjYuNDMxNCAwLjk5OTkzNiA0Mi45OTk5IDAuOTk5OTM2WiIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyKSIvPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02MC4wOTk5IDIxLjk5OTRIMzYuOUMzNS4zMDQ5IDIxLjk5OTQgMzMuOTk5OSAyMy4zMDM3IDMzLjk5OTkgMjQuODk4OFY1MC45OTg4TDM5Ljc5OTkgNDUuMTk4OEg2MC4wOTk5QzYxLjY5NSA0NS4xOTg4IDYyLjk5OTkgNDMuODk0IDYyLjk5OTkgNDIuMjk4OFYyNC44OTg4QzYyLjk5OTkgMjMuMzAzNyA2MS42OTUgMjEuOTk5NCA2MC4wOTk5IDIxLjk5OTRaIiBmaWxsPSIjRkVGQUZDIi8+DQo8ZGVmcz4NCjxmaWx0ZXIgaWQ9ImZpbHRlcjBfZCIgeD0iLTkuOTE4MjFlLTA1IiB5PSI5Ljk5OTg4IiB3aWR0aD0iOTUiIGhlaWdodD0iOTUiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4NCjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+DQo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIvPg0KPGZlT2Zmc2V0IGR5PSIxMyIvPg0KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMTAuNSIvPg0KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMC45NDkwMiAwIDAgMCAwIDAuNTAxOTYxIDAgMCAwIDAgMC4yNzQ1MSAwIDAgMCAwLjMgMCIvPg0KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3ciLz4NCjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93IiByZXN1bHQ9InNoYXBlIi8+DQo8L2ZpbHRlcj4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjUxLjYzNTEiIHkxPSIxMDMuNjM1IiB4Mj0iMTA2LjYzNSIgeTI9IjQwLjM2NDkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IiNGODA3NTkiLz4NCjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0JDNEU5QyIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhciIgeDE9IjUzLjQxMzIiIHkxPSIxMTMuNDEzIiB4Mj0iMTI1LjQxMyIgeTI9IjMwLjU4NjgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IiNGNDZCNDUiLz4NCjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0VFQTg0OSIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjwvZGVmcz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "./src/assets/key-feature/partnership.svg":
/*!************************************************!*\
  !*** ./src/assets/key-feature/partnership.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iMTA0IiB2aWV3Qm94PSIwIDAgOTYgMTA0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZCkiPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00OC4yMTQyIDE2Ljk5OTlDNjIuODM2NyAxNi45OTk5IDc0LjY5MDUgMjguODY0NCA3NC42OTA1IDQzLjQ5OTlDNzQuNjkwNSA1OC4xMzUzIDYyLjgzNjcgNjkuOTk5OSA0OC4yMTQyIDY5Ljk5OTlDMzMuNTkxOSA2OS45OTk5IDIxLjczODEgNTguMTM1MyAyMS43MzgxIDQzLjQ5OTlDMjEuNzM4MSAyOC44NjQ0IDMzLjU5MTkgMTYuOTk5OSA0OC4yMTQyIDE2Ljk5OTlaIiBmaWxsPSIjRkY0MzYxIi8+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQ4LjIxNDIgMTYuOTk5OUM2Mi44MzY3IDE2Ljk5OTkgNzQuNjkwNSAyOC44NjQ0IDc0LjY5MDUgNDMuNDk5OUM3NC42OTA1IDU4LjEzNTMgNjIuODM2NyA2OS45OTk5IDQ4LjIxNDIgNjkuOTk5OUMzMy41OTE5IDY5Ljk5OTkgMjEuNzM4MSA1OC4xMzUzIDIxLjczODEgNDMuNDk5OUMyMS43MzgxIDI4Ljg2NDQgMzMuNTkxOSAxNi45OTk5IDQ4LjIxNDIgMTYuOTk5OVoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4NCjwvZz4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDIuNzIwMiAwLjk5OTkzNkg1Mi43MTEyQzY5LjI2NDkgMC45OTk5MzYgODIuNjg0MyAxNC40MzExIDgyLjY4NDMgMzAuOTk5OVY0MC45OTk5QzgyLjY4NDMgNTcuNTY4MiA2OS4yNjQ5IDcwLjk5OTggNTIuNzExMiA3MC45OTk4SDQyLjcyMDJDMjYuMTY2NiA3MC45OTk4IDEyLjc0NzIgNTcuNTY4MiAxMi43NDcyIDQwLjk5OTlWMzAuOTk5OUMxMi43NDcyIDE0LjQzMTEgMjYuMTY2NiAwLjk5OTkzNiA0Mi43MjAyIDAuOTk5OTM2WiIgZmlsbD0iI0ZGNDM2MSIvPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Mi43MjAyIDAuOTk5OTM2SDUyLjcxMTJDNjkuMjY0OSAwLjk5OTkzNiA4Mi42ODQzIDE0LjQzMTEgODIuNjg0MyAzMC45OTk5VjQwLjk5OTlDODIuNjg0MyA1Ny41NjgyIDY5LjI2NDkgNzAuOTk5OCA1Mi43MTEyIDcwLjk5OThINDIuNzIwMkMyNi4xNjY2IDcwLjk5OTggMTIuNzQ3MiA1Ny41NjgyIDEyLjc0NzIgNDAuOTk5OVYzMC45OTk5QzEyLjc0NzIgMTQuNDMxMSAyNi4xNjY2IDAuOTk5OTM2IDQyLjcyMDIgMC45OTk5MzZaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXIpIi8+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUxLjE0NCA0MS42MzcxQzUxLjM1NTggNDEuNDIyIDUxLjQ2MTggNDEuMTY4MiA1MS40NjE4IDQwLjg3NDdWMzguMTY2MUg2Mi43MDE1VjQ2LjI5MjVDNjIuNzAxNSA0Ny4wMzY1IDYyLjQzOTYgNDcuNjc0NyA2MS45MTU0IDQ4LjIwNDhDNjEuMzkxNCA0OC43MzU0IDYwLjc2MTIgNDkuMDAwNSA2MC4wMjU1IDQ5LjAwMDVIMzUuNDA0N0MzNC42Njg3IDQ5LjAwMDUgMzQuMDM4NiA0OC43MzU0IDMzLjUxNDUgNDguMjA0OEMzMi45OTAzIDQ3LjY3NDcgMzIuNzI4NCA0Ny4wMzY1IDMyLjcyODQgNDYuMjkyNVYzOC4xNjYxSDQzLjk2ODNWNDAuODc0N0M0My45NjgzIDQxLjE2ODIgNDQuMDc0MyA0MS40MjIgNDQuMjg2MSA0MS42MzcxQzQ0LjQ5OCA0MS44NTEgNDQuNzQ4OSA0MS45NTg2IDQ1LjAzODkgNDEuOTU4Nkg1MC4zOTEyQzUwLjY4MTEgNDEuOTU4NiA1MC45MzIxIDQxLjg1MSA1MS4xNDQgNDEuNjM3MVpNNDkuODU2MSAzOC4xNjYxSDQ1LjU3MzlWNDAuMzMyOEg0OS44NTYxVjM4LjE2NjFaTTYxLjkxNTQgMjguMTI3NEM2MS4zOTE0IDI3LjU5NjIgNjAuNzYxMiAyNy4zMzEyIDYwLjAyNTUgMjcuMzMxMkg1NC4xMzc2VjI0LjYyMjZDNTQuMTM3NiAyNC4xNzEgNTMuOTgxNyAyMy43ODc2IDUzLjY2OTMgMjMuNDcxQzUzLjM1NzQgMjMuMTU1OSA1Mi45NzggMjIuOTk3MyA1Mi41MzIyIDIyLjk5NzNINDIuODk4QzQyLjQ1MTkgMjIuOTk3MyA0Mi4wNzI5IDIzLjE1NTkgNDEuNzYwNiAyMy40NzFDNDEuNDQ4NCAyMy43ODcxIDQxLjI5MjMgMjQuMTcxIDQxLjI5MjMgMjQuNjIyNlYyNy4zMzEySDM1LjQwNDdDMzQuNjY4NyAyNy4zMzEyIDM0LjAzODYgMjcuNTk2MiAzMy41MTQ1IDI4LjEyNzRDMzIuOTkwMyAyOC42NTcgMzIuNzI4NCAyOS4yOTQ2IDMyLjcyODQgMzAuMDM5OFYzNi41NDA4SDYyLjcwMTVWMzAuMDM5OEM2Mi43MDE1IDI5LjI5NDYgNjIuNDM5NiAyOC42NTcgNjEuOTE1NCAyOC4xMjc0Wk01MS45OTY5IDI3LjMzMTJINDMuNDMzMlYyNS4xNjRINTEuOTk2OVYyNy4zMzEyWiIgZmlsbD0id2hpdGUiLz4NCjxkZWZzPg0KPGZpbHRlciBpZD0iZmlsdGVyMF9kIiB4PSIwLjczODA2OCIgeT0iOSIgd2lkdGg9Ijk0Ljk1MjQiIGhlaWdodD0iOTUiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4NCjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+DQo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIvPg0KPGZlT2Zmc2V0IGR5PSIxMyIvPg0KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMTAuNSIvPg0KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMSAwIDAgMCAwIDAuMjY2NjY3IDAgMCAwIDAgMC4zNDExNzYgMCAwIDAgMC4zIDAiLz4NCjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93Ii8+DQo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvdyIgcmVzdWx0PSJzaGFwZSIvPg0KPC9maWx0ZXI+DQo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSI1Mi4zNDU4IiB5MT0iMTAyLjYzNSIgeDI9IjEwNy4zNTMiIHkyPSIzOS40MTM4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+DQo8c3RvcCBzdG9wLWNvbG9yPSIjRjgwNzU5Ii8+DQo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNCQzRFOUMiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXIiIHgxPSI1My4xMjQyIiB5MT0iMTEzLjQxMyIgeDI9IjEyNS4xMzMiIHkyPSIzMC42NTA3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+DQo8c3RvcCBzdG9wLWNvbG9yPSIjRkY0MTZDIi8+DQo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjRCMkIiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8L2RlZnM+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ "./src/assets/key-feature/performance.svg":
/*!************************************************!*\
  !*** ./src/assets/key-feature/performance.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/performance-86abb32bf8138707726d2a7a983b8238.svg";

/***/ }),

/***/ "./src/assets/key-feature/subscription.svg":
/*!*************************************************!*\
  !*** ./src/assets/key-feature/subscription.svg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iMTA0IiB2aWV3Qm94PSIwIDAgOTYgMTA0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZCkiPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Ny45NTk2IDE2Ljk5OTlDNjIuNTgyIDE2Ljk5OTkgNzQuNDM1OSAyOC44NjQ0IDc0LjQzNTkgNDMuNDk5OUM3NC40MzU5IDU4LjEzNTMgNjIuNTgyIDY5Ljk5OTkgNDcuOTU5NiA2OS45OTk5QzMzLjMzNzIgNjkuOTk5OSAyMS40ODM0IDU4LjEzNTMgMjEuNDgzNCA0My40OTk5QzIxLjQ4MzQgMjguODY0NCAzMy4zMzcyIDE2Ljk5OTkgNDcuOTU5NiAxNi45OTk5WiIgZmlsbD0iI0ZGNDM2MSIvPg0KPC9nPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Mi40NjUyIDAuOTk5OTM2SDUyLjQ1NjRDNjkuMDEwMSAwLjk5OTkzNiA4Mi40Mjk1IDE0LjQzMTEgODIuNDI5NSAzMC45OTk5VjQwLjk5OTlDODIuNDI5NSA1Ny41NjgyIDY5LjAxMDEgNzAuOTk5OCA1Mi40NTY0IDcwLjk5OThINDIuNDY1MkMyNS45MTE2IDcwLjk5OTggMTIuNDkyMiA1Ny41NjgyIDEyLjQ5MjIgNDAuOTk5OVYzMC45OTk5QzEyLjQ5MjIgMTQuNDMxMSAyNS45MTE2IDAuOTk5OTM2IDQyLjQ2NTIgMC45OTk5MzZaIiBmaWxsPSIjRkY0MzYxIi8+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQyLjQ2NTIgMC45OTk5MzZINTIuNDU2NEM2OS4wMTAxIDAuOTk5OTM2IDgyLjQyOTUgMTQuNDMxMSA4Mi40Mjk1IDMwLjk5OTlWNDAuOTk5OUM4Mi40Mjk1IDU3LjU2ODIgNjkuMDEwMSA3MC45OTk4IDUyLjQ1NjQgNzAuOTk5OEg0Mi40NjUyQzI1LjkxMTYgNzAuOTk5OCAxMi40OTIyIDU3LjU2ODIgMTIuNDkyMiA0MC45OTk5VjMwLjk5OTlDMTIuNDkyMiAxNC40MzExIDI1LjkxMTYgMC45OTk5MzYgNDIuNDY1MiAwLjk5OTkzNloiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNjQuOTg4NiAzMS44NTg1QzY0Ljk5NDMgMzEuOTYwNyA2NC45ODY5IDMyLjA2NDQgNjQuOTYxNCAzMi4xNjg3TDYyLjY4MTEgNDEuMzM0OEM2Mi41NjYxIDQxLjc5NjEgNjIuMTU0MyA0Mi4xMjE0IDYxLjY4MDkgNDIuMTI0MUw0Ny45OTk2IDQyLjE5MzRDNDcuOTk3OSA0Mi4xOTM0IDQ3Ljk5NjIgNDIuMTkzNCA0Ny45OTQ0IDQyLjE5MzRIMzQuMzEzMUMzMy44MzcxIDQyLjE5MzQgMzMuNDIyNCA0MS44NjcxIDMzLjMwNzUgNDEuNDAzMUwzMS4wMjczIDMyLjIwMkMzMS4wMDA5IDMyLjA5NTYgMzAuOTkzNCAzMS45ODg2IDMxLjAwMDEgMzEuODgzOEMzMC4xMTc5IDMxLjYwNDcgMjkuNDc2NCAzMC43NzUyIDI5LjQ3NjQgMjkuNzk3N0MyOS40NzY0IDI4LjU5MDggMzAuNDUyNyAyNy42MDk2IDMxLjY1MjkgMjcuNjA5NkMzMi44NTMxIDI3LjYwOTYgMzMuODI5NCAyOC41OTA4IDMzLjgyOTQgMjkuNzk3N0MzMy44Mjk0IDMwLjQ3NjggMzMuNTE5NyAzMS4wODQzIDMzLjAzNDggMzEuNDg2NEwzNS44ODk2IDM0LjM3NjhDMzYuNjExMiAzNS4xMDc0IDM3LjYxMjMgMzUuNTI2OCAzOC42MzY2IDM1LjUyNjhDMzkuODQ3OCAzNS41MjY4IDQxLjAwMjUgMzQuOTQ4MyA0MS43Mjk3IDMzLjk4TDQ2LjQyMTQgMjcuNzMyMUM0Ni4wMjczIDI3LjMzNjUgNDUuNzgzMiAyNi43ODk3IDQ1Ljc4MzIgMjYuMTg2NUM0NS43ODMyIDI0Ljk4IDQ2Ljc1OTUgMjMuOTk4MyA0Ny45NTk3IDIzLjk5ODNDNDkuMTU5OSAyMy45OTgzIDUwLjEzNjMgMjQuOTggNTAuMTM2MyAyNi4xODY1QzUwLjEzNjMgMjYuNzcxNCA0OS45MDUyIDI3LjMwMiA0OS41MzE3IDI3LjY5NUM0OS41MzI5IDI3LjY5NjcgNDkuNTM0NSAyNy42OTgzIDQ5LjUzNTcgMjcuNjk5OUw1NC4xOTMzIDMzLjk2NDlDNTQuOTIwMyAzNC45NDI0IDU2LjA3OTEgMzUuNTI2OCA1Ny4yOTM3IDM1LjUyNjhDNTguMzI3NSAzNS41MjY4IDU5LjI5OTYgMzUuMTIxOSA2MC4wMzA0IDM0LjM4NzVMNjIuOTAzMiAzMS40OTk5QzYyLjQwODEgMzEuMDk4MyA2Mi4wOSAzMC40ODU0IDYyLjA5IDI5Ljc5NzdDNjIuMDkgMjguNTkwOCA2My4wNjY0IDI3LjYwOTYgNjQuMjY2NiAyNy42MDk2QzY1LjQ2NjggMjcuNjA5NiA2Ni40NDMyIDI4LjU5MDggNjYuNDQzMiAyOS43OTc3QzY2LjQ0MzIgMzAuNzQ4OCA2NS44MzQ0IDMxLjU1ODUgNjQuOTg4NiAzMS44NTg1Wk02Mi40NTg2IDQ1LjQ1NjlDNjIuNDU4NiA0NC44ODIxIDYxLjk5NDUgNDQuNDE1NSA2MS40MjIyIDQ0LjQxNTVIMzQuNjEyNkMzNC4wNDAyIDQ0LjQxNTUgMzMuNTc2MSA0NC44ODIxIDMzLjU3NjEgNDUuNDU2OVY0Ny45NTY5QzMzLjU3NjEgNDguNTMyNyAzNC4wNDAyIDQ4Ljk5ODggMzQuNjEyNiA0OC45OTg4SDYxLjQyMjJDNjEuOTk0NSA0OC45OTg4IDYyLjQ1ODYgNDguNTMyNyA2Mi40NTg2IDQ3Ljk1NjlWNDUuNDU2OVoiIGZpbGw9IndoaXRlIi8+DQo8ZGVmcz4NCjxmaWx0ZXIgaWQ9ImZpbHRlcjBfZCIgeD0iMC40ODM0MTgiIHk9IjkiIHdpZHRoPSI5NC45NTI0IiBoZWlnaHQ9Ijk1IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+DQo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPg0KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiLz4NCjxmZU9mZnNldCBkeT0iMTMiLz4NCjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEwLjUiLz4NCjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAuOTkyMTU3IDAgMCAwIDAgMC4zNDUwOTggMCAwIDAgMCAwLjQ0NzA1OSAwIDAgMCAwLjMgMCIvPg0KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3ciLz4NCjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93IiByZXN1bHQ9InNoYXBlIi8+DQo8L2ZpbHRlcj4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjUyLjg2OTMiIHkxPSIxMTMuNDEzIiB4Mj0iMTI0Ljg3OCIgeTI9IjMwLjY1MDciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IiNGRjU4NTgiLz4NCjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0Y4NTdBNiIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjwvZGVmcz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "./src/assets/key-feature/support.svg":
/*!********************************************!*\
  !*** ./src/assets/key-feature/support.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iMTA0IiB2aWV3Qm94PSIwIDAgOTYgMTA0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZCkiPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Ny43MDM5IDE2Ljk5OTlDNjIuMzI2MyAxNi45OTk5IDc0LjE4MDEgMjguODY0NCA3NC4xODAxIDQzLjQ5OTlDNzQuMTgwMSA1OC4xMzUzIDYyLjMyNjMgNjkuOTk5OSA0Ny43MDM5IDY5Ljk5OTlDMzMuMDgxNiA2OS45OTk5IDIxLjIyNzcgNTguMTM1MyAyMS4yMjc3IDQzLjQ5OTlDMjEuMjI3NyAyOC44NjQ0IDMzLjA4MTYgMTYuOTk5OSA0Ny43MDM5IDE2Ljk5OTlaIiBmaWxsPSIjRkY0MzYxIi8+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQ3LjcwMzkgMTYuOTk5OUM2Mi4zMjYzIDE2Ljk5OTkgNzQuMTgwMSAyOC44NjQ0IDc0LjE4MDEgNDMuNDk5OUM3NC4xODAxIDU4LjEzNTMgNjIuMzI2MyA2OS45OTk5IDQ3LjcwMzkgNjkuOTk5OUMzMy4wODE2IDY5Ljk5OTkgMjEuMjI3NyA1OC4xMzUzIDIxLjIyNzcgNDMuNDk5OUMyMS4yMjc3IDI4Ljg2NDQgMzMuMDgxNiAxNi45OTk5IDQ3LjcwMzkgMTYuOTk5OVoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4NCjwvZz4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDIuMjA4OSAwLjk5OTkzNkg1Mi4yQzY4Ljc1MzcgMC45OTk5MzYgODIuMTczMSAxNC40MzExIDgyLjE3MzEgMzAuOTk5OVY0MC45OTk5QzgyLjE3MzEgNTcuNTY4MiA2OC43NTM3IDcwLjk5OTggNTIuMiA3MC45OTk4SDQyLjIwODlDMjUuNjU1MiA3MC45OTk4IDEyLjIzNTggNTcuNTY4MiAxMi4yMzU4IDQwLjk5OTlWMzAuOTk5OUMxMi4yMzU4IDE0LjQzMTEgMjUuNjU1MiAwLjk5OTkzNiA0Mi4yMDg5IDAuOTk5OTM2WiIgZmlsbD0iI0ZGNDM2MSIvPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Mi4yMDg5IDAuOTk5OTM2SDUyLjJDNjguNzUzNyAwLjk5OTkzNiA4Mi4xNzMxIDE0LjQzMTEgODIuMTczMSAzMC45OTk5VjQwLjk5OTlDODIuMTczMSA1Ny41NjgyIDY4Ljc1MzcgNzAuOTk5OCA1Mi4yIDcwLjk5OThINDIuMjA4OUMyNS42NTUyIDcwLjk5OTggMTIuMjM1OCA1Ny41NjgyIDEyLjIzNTggNDAuOTk5OVYzMC45OTk5QzEyLjIzNTggMTQuNDMxMSAyNS42NTUyIDAuOTk5OTM2IDQyLjIwODkgMC45OTk5MzZaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXIpIi8+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTYwLjI5MjYgMjIuOTk5NEgzNy4xMTM1QzM1LjUxOTggMjIuOTk5NCAzNC4yMTYgMjQuMzAzNyAzNC4yMTYgMjUuODk4OFY1MS45OTg4TDQwLjAxMDggNDYuMTk4OEg2MC4yOTI2QzYxLjg4NjIgNDYuMTk4OCA2My4xOSA0NC44OTQgNjMuMTkgNDMuMjk4OFYyNS44OTg4QzYzLjE5IDI0LjMwMzcgNjEuODg2MiAyMi45OTk0IDYwLjI5MjYgMjIuOTk5NFoiIGZpbGw9IiNGRUZBRkMiLz4NCjxkZWZzPg0KPGZpbHRlciBpZD0iZmlsdGVyMF9kIiB4PSIwLjIyNzY2MSIgeT0iOSIgd2lkdGg9Ijk0Ljk1MjQiIGhlaWdodD0iOTUiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4NCjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+DQo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIvPg0KPGZlT2Zmc2V0IGR5PSIxMyIvPg0KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMTAuNSIvPg0KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMC45NDkwMiAwIDAgMCAwIDAuNTAxOTYxIDAgMCAwIDAgMC4yNzQ1MSAwIDAgMCAwLjMgMCIvPg0KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3ciLz4NCjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93IiByZXN1bHQ9InNoYXBlIi8+DQo8L2ZpbHRlcj4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjUxLjgzNTQiIHkxPSIxMDIuNjM1IiB4Mj0iMTA2Ljg0MiIgeTI9IjM5LjQxMzgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IiNGODA3NTkiLz4NCjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0JDNEU5QyIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhciIgeDE9IjUyLjYxMjkiIHkxPSIxMTMuNDEzIiB4Mj0iMTI0LjYyMiIgeTI9IjMwLjY1MDciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IiNGNDZCNDUiLz4NCjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0VFQTg0OSIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjwvZGVmcz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "./src/assets/logo.svg":
/*!*****************************!*\
  !*** ./src/assets/logo.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-8470483273438e2b915f63fe4cf5b87a.svg";

/***/ }),

/***/ "./src/assets/patternBG.png":
/*!**********************************!*\
  !*** ./src/assets/patternBG.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/patternBG-f25af38e357096ca23290d5f5bcb3355.png";

/***/ }),

/***/ "./src/assets/service-thumb.png":
/*!**************************************!*\
  !*** ./src/assets/service-thumb.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/service-thumb-0a5ac5aae7621b13f0ef8d5f5b13da52.png";

/***/ }),

/***/ "./src/assets/services/secure.svg":
/*!****************************************!*\
  !*** ./src/assets/services/secure.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTciIGhlaWdodD0iNTciIHZpZXdCb3g9IjAgMCA1NyA1NyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjQuNTQxNiAwLjc5MTYxNkgzMi40NTgzQzQ1LjU3NSAwLjc5MTYxNiA1Ni4yMDgzIDExLjQyNDYgNTYuMjA4MyAyNC41NDE2VjMyLjQ1ODNDNTYuMjA4MyA0NS41NzQ4IDQ1LjU3NSA1Ni4yMDgyIDMyLjQ1ODMgNTYuMjA4MkgyNC41NDE2QzExLjQyNDkgNTYuMjA4MiAwLjc5MTY3MyA0NS41NzQ4IDAuNzkxNjczIDMyLjQ1ODNWMjQuNTQxNkMwLjc5MTY3MyAxMS40MjQ2IDExLjQyNDkgMC43OTE2MTYgMjQuNTQxNiAwLjc5MTYxNloiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzEuMjE3MSAzMi45NjI1QzMxLjM4NDkgMzIuNzkyMyAzMS40Njg4IDMyLjU5MTQgMzEuNDY4OCAzMi4zNTlWMzAuMjE0N0g0MC4zNzQ5VjM2LjY0OEM0MC4zNzQ5IDM3LjIzNzEgNDAuMTY3NCAzNy43NDIzIDM5Ljc1MiAzOC4xNjJDMzkuMzM2OCAzOC41ODIxIDM4LjgzNzUgMzguNzkxOSAzOC4yNTQ1IDM4Ljc5MTlIMTguNzQ1NkMxOC4xNjI0IDM4Ljc5MTkgMTcuNjYzMSAzOC41ODIxIDE3LjI0NzkgMzguMTYyQzE2LjgzMjUgMzcuNzQyMyAxNi42MjQ5IDM3LjIzNzEgMTYuNjI0OSAzNi42NDhWMzAuMjE0N0gyNS41MzEyVjMyLjM1OUMyNS41MzEyIDMyLjU5MTQgMjUuNjE1MSAzMi43OTIzIDI1Ljc4MyAzMi45NjI1QzI1Ljk1MDkgMzMuMTMxOSAyNi4xNDk3IDMzLjIxNzEgMjYuMzc5NSAzMy4yMTcxSDMwLjYyMDZDMzAuODUwMiAzMy4yMTcxIDMxLjA0OTIgMzMuMTMxOSAzMS4yMTcxIDMyLjk2MjVaTTMwLjE5NjYgMzAuMjE0N0gyNi44MDM0VjMxLjkzSDMwLjE5NjZWMzAuMjE0N1pNMzkuNzUyMSAyMi4yNjc0QzM5LjMzNjkgMjEuODQ2OSAzOC44Mzc2IDIxLjYzNyAzOC4yNTQ1IDIxLjYzN0gzMy41ODkxVjE5LjQ5MjdDMzMuNTg5MSAxOS4xMzUyIDMzLjQ2NTYgMTguODMxNyAzMy4yMTgxIDE4LjU4MUMzMi45NzA5IDE4LjMzMTYgMzIuNjcwMyAxOC4yMDYxIDMyLjMxNyAxOC4yMDYxSDI0LjY4MzFDMjQuMzI5NyAxOC4yMDYxIDI0LjAyOTMgMTguMzMxNiAyMy43ODE5IDE4LjU4MUMyMy41MzQ1IDE4LjgzMTMgMjMuNDEwOCAxOS4xMzUyIDIzLjQxMDggMTkuNDkyN1YyMS42MzdIMTguNzQ1NkMxOC4xNjI0IDIxLjYzNyAxNy42NjMxIDIxLjg0NjkgMTcuMjQ3OSAyMi4yNjc0QzE2LjgzMjUgMjIuNjg2NiAxNi42MjQ5IDIzLjE5MTQgMTYuNjI0OSAyMy43ODEzVjI4LjkyOEg0MC4zNzQ5VjIzLjc4MTNDNDAuMzc0OSAyMy4xOTE0IDQwLjE2NzQgMjIuNjg2NiAzOS43NTIxIDIyLjI2NzRaTTMxLjg5MjkgMjEuNjM3SDI1LjEwNzJWMTkuOTIxM0gzMS44OTI5VjIxLjYzN1oiIGZpbGw9IndoaXRlIi8+DQo8ZGVmcz4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjMyLjc4NTUiIHkxPSI4OS43ODU1IiB4Mj0iODkuNzg1NSIgeTI9IjI0LjIxNDUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IiNGRjQxNkMiLz4NCjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGNEIyQiIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjwvZGVmcz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "./src/assets/services/smart.svg":
/*!***************************************!*\
  !*** ./src/assets/services/smart.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTciIGhlaWdodD0iNTciIHZpZXdCb3g9IjAgMCA1NyA1NyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjQuNTQxNiAwLjc5MTYxNkgzMi40NTgzQzQ1LjU3NTEgMC43OTE2MTYgNTYuMjA4MyAxMS40MjQ2IDU2LjIwODMgMjQuNTQxNlYzMi40NTgzQzU2LjIwODMgNDUuNTc0OCA0NS41NzUxIDU2LjIwODIgMzIuNDU4MyA1Ni4yMDgySDI0LjU0MTZDMTEuNDI0OSA1Ni4yMDgyIDAuNzkxNjE2IDQ1LjU3NDggMC43OTE2MTYgMzIuNDU4M1YyNC41NDE2QzAuNzkxNjE2IDExLjQyNDYgMTEuNDI0OSAwLjc5MTYxNiAyNC41NDE2IDAuNzkxNjE2WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIvPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Mi4zODkxIDI1LjIyMTRDNDIuMzkzNiAyNS4zMDIzIDQyLjM4NzcgMjUuMzg0NSA0Mi4zNjc1IDI1LjQ2N0w0MC41NjA3IDMyLjcyMzVDNDAuNDY5NSAzMy4wODg3IDQwLjE0MzIgMzMuMzQ2MiAzOS43NjgxIDMzLjM0ODNMMjguOTI3NCAzMy40MDMzQzI4LjkyNiAzMy40MDMzIDI4LjkyNDcgMzMuNDAzMyAyOC45MjMyIDMzLjQwMzNIMTguMDgyNUMxNy43MDUzIDMzLjQwMzMgMTcuMzc2NyAzMy4xNDQ5IDE3LjI4NTcgMzIuNzc3NkwxNS40Nzg5IDI1LjQ5MzRDMTUuNDU4IDI1LjQwOTEgMTUuNDUyMSAyNS4zMjQ0IDE1LjQ1NzMgMjUuMjQxNEMxNC43NTgzIDI1LjAyMDYgMTQuMjUgMjQuMzYzOCAxNC4yNSAyMy41OUMxNC4yNSAyMi42MzQ1IDE1LjAyMzYgMjEuODU3NyAxNS45NzQ2IDIxLjg1NzdDMTYuOTI1NiAyMS44NTc3IDE3LjY5OTMgMjIuNjM0NSAxNy42OTkzIDIzLjU5QzE3LjY5OTMgMjQuMTI3NiAxNy40NTM4IDI0LjYwODUgMTcuMDY5NiAyNC45MjY5TDE5LjMzMTcgMjcuMjE1MUMxOS45MDM0IDI3Ljc5MzUgMjAuNjk2NyAyOC4xMjU1IDIxLjUwODMgMjguMTI1NUMyMi40NjggMjguMTI1NSAyMy4zODMgMjcuNjY3NSAyMy45NTkyIDI2LjkwMUwyNy42NzY5IDIxLjk1NDdDMjcuMzY0NiAyMS42NDE1IDI3LjE3MTEgMjEuMjA4NiAyNy4xNzExIDIwLjczMTFDMjcuMTcxMSAxOS43NzYgMjcuOTQ0OCAxOC45OTg4IDI4Ljg5NTggMTguOTk4OEMyOS44NDY4IDE4Ljk5ODggMzAuNjIwNCAxOS43NzYgMzAuNjIwNCAyMC43MzExQzMwLjYyMDQgMjEuMTk0MiAzMC40MzczIDIxLjYxNDIgMzAuMTQxMyAyMS45MjU0QzMwLjE0MjMgMjEuOTI2NyAzMC4xNDM2IDIxLjkyNzkgMzAuMTQ0NSAyMS45MjkyTDMzLjgzNTEgMjYuODg5QzM0LjQxMTIgMjcuNjYyOCAzNS4zMjk0IDI4LjEyNTUgMzYuMjkxOCAyOC4xMjU1QzM3LjExMDkgMjguMTI1NSAzNy44ODEyIDI3LjgwNSAzOC40NjAzIDI3LjIyMzZMNDAuNzM2NiAyNC45Mzc1QzQwLjM0NDMgMjQuNjE5NiA0MC4wOTIzIDI0LjEzNDQgNDAuMDkyMyAyMy41OUM0MC4wOTIzIDIyLjYzNDUgNDAuODY2IDIxLjg1NzcgNDEuODE3IDIxLjg1NzdDNDIuNzY4IDIxLjg1NzcgNDMuNTQxNyAyMi42MzQ1IDQzLjU0MTcgMjMuNTlDNDMuNTQxNyAyNC4zNDI5IDQzLjA1OTIgMjQuOTgzOSA0Mi4zODkxIDI1LjIyMTRaTTQwLjM4NDQgMzUuOTg2OEM0MC4zODQ0IDM1LjUzMTggNDAuMDE2NiAzNS4xNjI0IDM5LjU2MzEgMzUuMTYyNEgxOC4zMTk4QzE3Ljg2NjIgMzUuMTYyNCAxNy40OTg1IDM1LjUzMTggMTcuNDk4NSAzNS45ODY4VjM3Ljk2NkMxNy40OTg1IDM4LjQyMTggMTcuODY2MiAzOC43OTA4IDE4LjMxOTggMzguNzkwOEgzOS41NjMxQzQwLjAxNjYgMzguNzkwOCA0MC4zODQ0IDM4LjQyMTggNDAuMzg0NCAzNy45NjZWMzUuOTg2OFoiIGZpbGw9IndoaXRlIi8+DQo8ZGVmcz4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjMyLjc4NTUiIHkxPSI4OS43ODU1IiB4Mj0iODkuNzg1NSIgeTI9IjI0LjIxNDUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IiNGRjU4NTgiLz4NCjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0Y4NTdBNiIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjwvZGVmcz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "./src/assets/shape-left.png":
/*!***********************************!*\
  !*** ./src/assets/shape-left.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/shape-left-13fa8b3d988ca4eb9d7c2da935c2d73a.png";

/***/ }),

/***/ "./src/assets/shape-pattern1.png":
/*!***************************************!*\
  !*** ./src/assets/shape-pattern1.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/shape-pattern1-d99df506f0cb8cf704bea5bc18b431e3.png";

/***/ }),

/***/ "./src/assets/shape-pattern2.png":
/*!***************************************!*\
  !*** ./src/assets/shape-pattern2.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/shape-pattern2-4bd72c344fccac3b19031e7c31d42096.png";

/***/ }),

/***/ "./src/assets/shape-right.png":
/*!************************************!*\
  !*** ./src/assets/shape-right.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/shape-right-dbc79b79a05b2f223741e50a97a627aa.png";

/***/ }),

/***/ "./src/assets/team/member-1.png":
/*!**************************************!*\
  !*** ./src/assets/team/member-1.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/member-1-91b98a285548c2590927cff29e8bfb43.png";

/***/ }),

/***/ "./src/assets/team/member-2.png":
/*!**************************************!*\
  !*** ./src/assets/team/member-2.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/member-2-2d599d47e3b020e274e0a619a792256a.png";

/***/ }),

/***/ "./src/assets/team/member-3.png":
/*!**************************************!*\
  !*** ./src/assets/team/member-3.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/member-3-8a6654a8df725186136b2eb13409bac4.png";

/***/ }),

/***/ "./src/assets/team/member-4.png":
/*!**************************************!*\
  !*** ./src/assets/team/member-4.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/member-4-7794f21b0d9a98da9c94518eeceeba7a.png";

/***/ }),

/***/ "./src/assets/team/member-5.png":
/*!**************************************!*\
  !*** ./src/assets/team/member-5.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/member-5-92f2874ba2db4bba3c36b834f6b2b59f.png";

/***/ }),

/***/ "./src/assets/team/member-6.png":
/*!**************************************!*\
  !*** ./src/assets/team/member-6.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/member-6-26fa18c86a2ceb663eb2aaac7c05269f.png";

/***/ }),

/***/ "./src/assets/testimonial/avatar1.png":
/*!********************************************!*\
  !*** ./src/assets/testimonial/avatar1.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/testimonial/avatar2.png":
/*!********************************************!*\
  !*** ./src/assets/testimonial/avatar2.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA3CAYAAACo29JGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABkgSURBVHgBrVppbFzndT3vzZs3+8ZtuGuohSJl2ZIc27FbOKbbJE0CNJWBAk3+NDCKBi3Q1vbvArUN9L+V5kcKtIUTBIaRpqmZpTGCxBG9RLJjW6QkW7JEc1/EIYez7/OWnu97b4aUI8ey4ycNhvNm3pvvfvfec869dxR8ysfsC8/G17bmT4cCiRNzM6+kLKt+MpYIxrPpStyCB1bDQLjLn9cDnuVKvpEfGT8wp/jwcjQ6OPflv39qGZ/ioeBTOGZnX4iHra7HNuYvTsFuTd1Yuor0eh7vXlrDQCyAocNJrC1uolCzEVBVjN81jHqtgfWVXZy8fxJevw+Jvn5Ek0NzXs3/vWrRmH7gka8v4w88/iDjli6/OaV48GSpkJvKrK8gff0iLLOGTDqLN2Y3kCm2MBDXcXi0G41yE6s7JVTouT+67yAuX9tEX28ExyaH0d3fB9Wj8KHRq33QNR/88e7p3uHD3xoYu3MGn/DQ8AmOpdnfnITX+wy3Zsq2bNiWQYdVUdjdRXknA1u1UWsaKDYtxBiKq6u7COo+NFUNNdPE4koOaztVjA11oVFvyntmt7ZQLlYwNmED0QSC0ehpG+rpreXrM7ZtPjowNrmMj3moH+fDs7Oz8aV33njG1rRZvmQI2jDNFmrVIjYXrtDIKlotC5qm4bN3jSDoozFVA+lyC/laC9ulOvw8t7JdQiwUQJ6eLOWqWF9aw+LVNVSydRQyu2g26mjx0ayWAducUlVtaWdt6Ul8zOO2jbs6ez4V8zRm6ajHbRrF/zBaLexsrGD57XPIb26iUmihZSjYTFfRlYhgOEFvGSZqLRsVerLeNGEaNsr1FhTeqMoQLWbzWJvfRnqrzI1poFkrMbRN3rtJw7dh2aZMHtu2ntpeXVhiPqdud823Zdz7s+dO6x6FhtkpaRUP27JQK+Vw/Te/xvzrl5BeLWJhIYtcoUkjG9hJZxCkB0XYelUFhskQ9XnhsUUuKDSuxYAFSiUD5WwFIQ+RtNJAOBiE0SxzE0zUqyU+N2V0QLGhKEh5NO9senXp9O2s+yONW7h47jFbwQv0VtzxmPvgv0IuA8NqQPGqqDeaMAyLIFLnohXkbpQQ4oIizOoQrUjwM8N+Fb1BDUMhLw4kQujh370RH7pCPB/xYGAwBqNeg1mrobSzifLuNqqFHCPT6HwvLYyrHrywtb70+Eet/fcCysLsucdMyz7DfZbGOEY5h2m0EAzHkBw7guxGFmamBi/P65qKsFenB8sIeDUcjfnl50N+HRoN1An7OvMu1BVEKOyHn7knDPIGNKhcdaNloFEqorhbBHw7CCWS8AWjvNZHwzzyXsJGeuWZrfUF9A8fOvOxjbv21iunDduSF0qTXKsUeXNbLiQQjiKc6Eex3JSf0vjdIV2lkTaSXHQi7EO0K4RITxQenw6PJoyKQwsEoQXD8AdDCIQi0BiuXl2HxbgrZ7dxaeZXyNC47uE+5LdXEe8fgZ/3VFzDFBmiKiNEfYYhupwcHZu+beNmz59N0bBnVcsxSiHx2vtu7poIlYtttkyUClUapKJJIIj4uMMEDuGV3sEoggl6qCtB3orTgCD0QEQaIW4R70rCG47AwzxTSRVgbvriXRjeWCXpv4bF4qp8Pcr8JgvCVlxilhHEc4rgRjx7Y2lpbmBsbPmDdtwy57yKfZaAwRyzpFGWZUoAsfgQACFei4dJkPB4/fDSZQVCfiygw242CRomwjROUILG0PR46DVqLD0Q5UZ5oHGzwlEyIENYkLdHuNxZNT+roe/AGIYPdKG7J47+A0e5UVHpqfa2OmHk5iCUuMennM0tLcU/0nPvvnn2Scu0iIoWFy+2SnVjgQ9hnNw4i+jnxGkoHGae2KgT4n1ctMWcCYaDCAT9hHNuAklaLEhhvpikAA+NUxi6lik40oQmNoubpIKgIdbP7wvGezA4QaOYe4n+QXh9/o6WciJIcSJIRIAt30oZPlXw4BMf6rmr519M8RufEouXXrIF35B7mnVqwSqqRLFqtYJ6nWTdqEmipf8oKJg7mnMzH3PLR9Cg2+ANhVHKN9Cqm9Jj3oDgvQZUAo6qiAUyrBQCiYgKciZJTW6CFoqia+Sgk5u6XwKJ3fGbCscux7AOxNn249vrSyc/1Dhb8T0rn/llpmGgWadh9Tp5h0aQVC1DLMCQz47ssuQXRnu7aYuKeCTMEPPi/bUMLl9dxwpll6nqqFBWmQxXVdP5eQv1isNjXi5c8agyImRCwc1thqZKgEmOHIY/knAMcU2TEeQmvwMsSud9VVWeuWVYXj7/yynTMqZkPjFcLBpnipwTD55zNgcykcVCxI3lrvG5f2QUG1dWCOt+gksFXXGCBj+ztL6DXLaI3lgQZqPF8NJRze5Kg6xmAwHmnWn6oPD2whiVqxbRLr5H0wOIRHp5z71UcrykyH+0ZO+8E6Piuqkba0tTAyNjMzcZR956TMS+NEx4x/WKZRvSQLE7fGJ4OV9hU2HYrsUKFUQ0oktPRkMhXqtQcjVwoCeBBo2qFKlYVtPoGurn/VtoUHKl338f5fwObCKoPxZBuKcbke5+BGLd8p4WIyMeTzrfK6hHcq17KG2D3JeKg97iWdM8Ivf2jJt98YVUq9k8LTzkELXpXuxxnu02EajSi473VGcv+XbhrfcQFZtJ0BMyK5OrYMdSsUFyjohw5TmbLtlZXMXg8cPkNTKU14ut68vIU18OTx5CpKtHKhujVWNo63LRPl+IQaI4uOEQXJuLuMkK2qf2PCs3e0ogZ2JsLC99a2iWNMyUD0OimKNIrPbWOMkrgEY8W4pLDbYEgVqmBL9ObUj5ZVALMvYRCwewWq2i58AoSgyhXLVJIDIRGziAgWN3E10ZthtV/OrqLs5dL+D9i+9he/E9GfKqx0vk1WEWsnsh1yk9bdeb+9y4/+B7Tb/6eMdz/Pg3RMwpDmjLD4ibStFlwY1n+6YYl18gPsuN0FmneXXSOO8W7QpzfWUkyF9fHe1Bt1FHOeaTqKvrAkFDCBPe+yfvwPaNPPqJkqMDPbjzwT8iqhZ4XycFPHWCWiMHrbvXBQ9nbdJjcBTKB0Oz/YoR8JA07vyLz6f4oZMO9Lf3xlX+pAJxkUg/59nq7J7thqqgwkBfDLYm0FAlLYShB3XqwzpCQUokjdUAUdSo6ggwL3mFVCQ9Bw/jUHoHo4eHkRw/jGCEpJ5MipXJ++oRKhct+AHPqG407SElYO9tvtKheBmamq16T0pEbJcyripxXigdTzkmu6hpKTeRSCDZyzosTXXBLxcSjH2TOGWXCHGvL4gW1UupkYXCms4rOIubFKDsOnTffaiQqH0BP1TqS+EVKI4BVqsOtX9Y3t+S308142rKNsh0QtQNx/1B2vJ6TguEmOqgobzA2pekCtppJ73WLjukhaqrzhUEhwekHBOXtepEV+aehyEYFHqS4rjInKxSXAupJb+HnGeyyhbPEYadT8grd/edjbUk10E8bCdq9pB/3xpcwyTXATfxIVd3kpcoJwT6iRCUKAhn0Xvh3PYopKKQwKJAVsi2WyyERvrYGjCIlK4G5Rseb4Dh2YVqzsD22i6Rj8ojTPQTC+bnslffQX5tFU16TqO8EqpFLkxgFAleZzdM5rSyVxy3NSX2GXTTYtt/i01SlRRZy4w75xWpvB2tpkoL2vVbu5ZzxKtHbkC7thJBbPF8odrgJTynijpbk6hapzJ5f/YqIsEAfAQSXyRKyUaVQ6HMPgwK64uosKkkZJyTM2qHergzHTF986F0vIx93mob5eCOpI8TYiUp4bB2aoqzlotOEurdCx3DFDdEbVGdOGHJ8BRqQiNotIh84uYiJH1UOJnlTcouAytsAvnyJRpvMgQDSM/Pi/Ys+y0qiuy9hHv7WPqEZUUvFtGgbg2K8r2tP1XlJuMs1wi7g6L73+3YEVcVWdoIR1nSD7JOg+peiD2uc5W4PG87pY9UEnDyqy81RhCwKbLZJGLLobSdZ/OHYCEM9bJO0xW0qE60UJAlzRB6Roao/I+hVszJXozVbLn3ZN4yF+19i/6gl9r513Ga+0JcY9qdi+Kq3ea2TvjtpwInBx0CN/cRqsxSWcRCcdBMp5IXXmpU65LMb9zYpQRrwVBZ1oQ0DB8dIbhoyCxeRza9iIbN3kvQiziNzK4v8ZqGlH4mc8tP2dXOtZsUiH2LEHWFs+1asZ/vXG1puVLGCT2H86yOkx1GUDq1nMgNxQ1PSyIt+YweabYsWc/ltwvYzRcRYauhQFVCGYobVzcwQspoKE2UrRoatS3maoX8FmE4V0ghDW6OA2l6bNiVfNgXkm1D0CHxjtsk7jg8p3bMFKmtePKmbcqqW6p9eRPVrcDdD9r7nt0isU3iliQDUfb0Yp3KnvpLfiwWYUuB5Y+PHu9O9kiOsyscgvQE0T8+DjXswcqlN5m7fH/0kIw1roUbxOpBce6JfTJrj6qUTvS4NncMd+m9Te55hiXyUNqXtL1ju70T9zXUzjnHSAdZbfdvsS8eErGS6GV1oaDBHkq5yk40hx2qaqHhKcPoVrCtldEYCKClt0j6RQxNHqWK9zEcqWdZAtUreTaSgi5/uWxlK/tiU+0Yup/XYO9hqnSKLLbtZZW11ZxzsSpzR+RW59P7tVvbfBEONMa02rrTuZk4lziUwnq+jN1KHWnKrx0+g4Ja4zW13TzLIerPRhEW2+8iDGsUxh6PkxZ1nttNr7OBE3YrDifAIJtTqrsUW4KGXJryQe85pnfWqap50cJYUdquE9gnjLPVDqaKtnebHqQN8n3Xq23VQpm1lclidXMXCxS8ccq0Fssc1u4IsjPWYEgmYjpCUfKfyXZFbp3FqbDKkGjbKFqcG2wifvheEnqwDWdODSdqOYmE4lntcG9buO+nAltR9uDRsi5q/MCcojhf5FQC6FS87ZmAIw72GrK2K6KFsabZxLXra/jhT19iqDXQL5SIm5cVoUQox6oCaHh/hfKLCQVDqbPfGeU9BIgwxwj9N/IKLm0v4eGeCXR3RTql2/5ars2/aKsToGPoXpS5RtvWjBr0qtPtRmtH2cn2neXih+JWxqJat2SnynRllkHwyOZKeO5Hv0CxWEWRDaQB8tnR/jgCNMTgfTYqLWQpzaqWB1nOAko0ptYgVaxsoZDlNQxfW4+gEUxidm4OZ8++JgW37fYm255SlT3Kaq/3JnWCPUKTGrdpzqmnHn4kT6SccRR/ux/v3LTTn7T2OE7wkE0DDYba6vIqfvyzGU5rmpy/eTBCUIkSQDyKgYmBBA6wd5KgJ0WIpvMVbOxWcO39LJYWc9jNVNl8MtGTmsD4/V9AH7kwQHiLokog4qyAha7cYLHYtnhw2btD2sA+THAd5OCGbNI6xarZeplPU+0wtN0ujWQHlyIcT9rSMGFgoVDENqXTnaMhDhNVJNmr1DiVaVoaDbfJXx4c5nCxQlDJlMpiJznt8bCwlc0LDB06iEN3343esXG5yPTSCpZWt3F95zXYbN72DI0ik9nB+OEUDo4N8xpR6Fl7nnJDUdmr4RwjHcr4nvhbGtdsNs+wJfekMEoikaW4njNkfWZITzWlGM4SDYXQ/b+X3mAvs4UUPdRNXTjE9l5rqyoj3pAbY8t2X08yiuRwHAr/DkQjiPWxkzw8wvlBLzvQQemZwm4a6c0sKuUyPWbg5z8/h/GJDTFdxVtvX8Ff/eUXcDBFhcPKoe09Ke4/KKrd/NQUa3ovTHm88pPvn2UvcUrkm+gpivLl2vwyQ67OfmSALXIbz//kZWRLbLKyk5zsjkkULNHA0b44PjM2gObyguAI9j9IC9Egwixao70xTml8rAoCCPb00aNRtutCbLN75bPIkPX5q/j1/76MNzlOnifaejQ/Hnp4Cpur80gdTHEoUsbJu8Zx/z1HeXud09o6+rpYYXCN3T1dSHQl0E5JBtWPk0MHTnc8J45Go/603TKmDCa8MG6D2jCXLVHFh3B9JYNXz82iYdgSsVJDvbjj8AF09Sfx2htX0Bf3o3skyayto3FjE06TR4GfHeY41YlXtgzEJCcgO1uaUC7+gIyyfDYt81chkcfYqfaQzIXWMIq7+Ox99+K553+I48fvwNtvXcCR0QQWVrLYJBjpzSrHZ0OYX9uW8/d/+ed/QoRTJaZPZ6Tlaf/x/R/+dPkzx+6amr28kJpf2sJPzv4Wl+dXBXYin8ujwEpaEZNSEbpc/IWr87hw6SoGB4f5GMSdx4+wQzzI1d5ANCrqN002jIJRNoR6OWPzc5LDGZuX7QQxIBGVhJycNhocMmaQXtjEe5yJZ9nN1tmJFsPUgVGKgs115l6GOWvh9dcv4MqVa9jeTmOLzd2v/sUX5Sha0Per565h6nOnZui1p3/HOHFsZRoX31le/7ulzR02RLvQy2ZPpdbE1cU1LtSHnlgPfCTSTLlAGnCGGl9+6D7o0TiO33lI5ohXZU1XL/JvP/skBBnmSTw5wAgIU2xoUu0L4yy255sV3keUSJUKdtdvoMoh42qmICep9WaNs/UsPv+lr+Dg4YOYv35NlMD44wfuwfz8ItcSx9Gjx1hO6Tg0MYFLF+YR8gUf/sGPnsvf2ridza37Tz2QGB0YvD81MoJjh/pwfHIMmxsZyiQ2Ubc2GG62VPtVzhEEaopx1bE7T+D4HYcJCCWMn7yP/ZECe/wRGjXIyWif9JbX65UAIMoisyEMK0tNKaUcQ7HC2q/JucBSuoAAaeVgfxcVjoaBoRTHXRH8+Z/eg8LmGrZZ+AYYBRucuYe7+vGLV68gNTGJYLP69Def+OubhpA3GSeOoQMTrzfrza9VGs14byKCEL/w4uVrGB3qwWfvPsS4T0J0Cna4GEGsGzsZlhYqvvxnU+QnDiF9DEkx4GBz1hcIs50XocdUR2EIEcAwNNmJhtuuF23qeqmKXK6O+bKJ3VKF+WfhMxMjML0hnL+wjK1dpgQFQ71YwNvvzmMrV+TmVnHi2CTmNxvYLarL//atxx75oC2/M5+bmZnOp1InH+7uSc7mCqV4KLyJbXLaxESKIadR7TeoREyp+3R/SI6z3nzjLZTJZ35Ce4vh6u/pJ0JxkXIi6uSobdiSViQhk2qEFJMlE+u/wkYay9s1vMVcFxTSHSN9DLD2K2i4wHBMp3P4xQZbE2aeqqdFNA6gzvRYWFtnasTz711cfRi3ODy3OpnPb+WPTT54TffrX0uwh7+xscTiU3AQOLnJMnwZpnTGAGfVsYAXn5tIEid9SKWG6DVCNRccoLA2a2VH+wneM0yHgw2n2JUaUNRvDM+dxU1czlm4tr0tp7Vi3t7PcHx3YR0lDk0iAbYIm7vSE6K6bwm9q4iyRuX3er/+9qtnXr+VHR/6U42XXvru9MRg7xMxliaip9Jgrz/L8RT7xVyfGBnbGBhM4oF7j8MktK+ubTCvfE74MYfUUFR6TZU9F9sZg7lTJCl8xRhLtNq3MwiOHUHJduYTBoVDoVanYVvIU6+KdkSxWUaeIFUTvVGGuBhTx2NdyBULT/z2pe9Mf5gNv/d3KN/+7pkzuZ0bT1i2My4+0tWHBGfgHk5DDYbaZibHjhU7xUSsLfKb+EWCmGn7eE4Mi73hBFPK49ReNFAMMB0R6MwAm0RJT3cfYpOT8HPBXrgjat67UqnKGZ/NqkNqXLEhvO9IfwL33HUEk0eOPPHu3MyZ37f+j/yRzf/M/PQMU+QRZk++yC/bqRIMhPgRO8/YP39hAdc3a8gWm7Kqlu8x7ATE6xwuCiUiO8b0rjTUncyadfZN9Ch677rbwZWgaMpSQfLaA9Fu+BXOGzjV9Xo9ODSWRJxUcuLIGI4fHMzrjdojzz3/nTMftfbb+nnU8sLlaU8ofKpstJbromDlTg6PjCHATvG/PvUPuO+Bu9lJFg0Zj9x5U1a1LdlYlbNwYZjq9PiFwmmxlV4p1pE8ca8kd1H4CoFguNOIWF8S40MkfquJsF/HyYlDGB/ux5cevGO5lsud+q/p/56+nXXf9g/b3pubWZ45+4MxbvnTIqyoGDHRncDG8hbevbKESRIp3IGg8JB4tIiIvoEUF+7t1IYCWHYpn8Y+/xUWsVU5KNE4/hJ5rLhdNZUGX88XWOxyKsvQvXxpDqsb6W/VQjj179PTy7e75o/1k0RxXHln5ilTr43lNc/MJkdQixdXsHjpHXzliw+5bT8Luph9c1E6PdckIqrhuPSOSW/mVpcROXgUVfJWOBKXbQahQ73UnF0cHfvIk2FqRI/ipTBviIJ1pr83eeqVN3/5+KOPPpH/OGv14BMc+Uwmv7Iw973U+KmXDV8gni1nJr75N19DqZilXqxKOijm81KeBeMJttqjsmD1cJqjUsKNPfCQ7MVEiHjFQo6ivYGrl6/L37b0xKP4kwdPIV9qzqyvrTx67dqbT1+YO7eFT3B8ol/Kto+f/ew/Z/g0c/bsiykCxelaufqNaqV0UoRtnci4s7VJTRlhXvkRGRyjAE9j5MA4yZ955tVQI6gUcjn2XmqUbjWENX0mGvK8fM9dw2f+9rF//FheutWh4FM+zr/4Ysof854s7m5PlXL5EweOTsYZpinNo8e9/qBET3o0X6JrS+X83Oq16yvhcHTu29/+j+npmZk/2KD9x/8DHtnE9NYKTTMAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/testimonial/avatar3.png":
/*!********************************************!*\
  !*** ./src/assets/testimonial/avatar3.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/testimonial/avatar4.png":
/*!********************************************!*\
  !*** ./src/assets/testimonial/avatar4.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/components/button-group.js":
/*!****************************************!*\
  !*** ./src/components/button-group.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ButtonGroup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Will's Gaming PC\\Documents\\Development\\WhoozyWraps\\src\\components\\button-group.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */


function ButtonGroup({
  next,
  previous
}) {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, "ButtonGroup");
}
const styles = {
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    mb: -4,
    button: {
      bg: 'transparent',
      border: '0px solid',
      fontSize: 40,
      cursor: 'pointer',
      px: '2px',
      color: '#BBC7D7',
      transition: 'all 0.25s',
      '&:hover': {
        color: 'text'
      },
      '&:focus': {
        outline: 0
      }
    }
  }
};

/***/ }),

/***/ "./src/components/drawer.js":
/*!**********************************!*\
  !*** ./src/components/drawer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Drawer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-drawer */ "rc-drawer");
/* harmony import */ var rc_drawer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rc_drawer__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Will's Gaming PC\\Documents\\Development\\WhoozyWraps\\src\\components\\drawer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function Drawer(_ref) {
  let {
    className,
    children,
    closeButton,
    closeButtonStyle,
    drawerHandler,
    toggleHandler,
    open,
    width,
    placement,
    drawerStyle,
    closeBtnStyle
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "children", "closeButton", "closeButtonStyle", "drawerHandler", "toggleHandler", "open", "width", "placement", "drawerStyle", "closeBtnStyle"]);

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(rc_drawer__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({
    open: open,
    onClose: toggleHandler,
    className: `drawer ${className || ''}`.trim(),
    width: width,
    placement: placement,
    handler: false,
    lelve: null,
    duration: '0.4s'
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), closeButton && __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "div",
    onClick: toggleHandler,
    sx: closeBtnStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, closeButton), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: drawerStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, children)), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: "drawer__handler",
    style: {
      displayt: 'inline-block'
    },
    onClick: toggleHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, drawerHandler));
}
;
Drawer.defaultProps = {
  width: '320px',
  placement: 'left'
};

/***/ }),

/***/ "./src/components/feature-card-column.js":
/*!***********************************************!*\
  !*** ./src/components/feature-card-column.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FeatureCardColumn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Will's Gaming PC\\Documents\\Development\\WhoozyWraps\\src\\components\\feature-card-column.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */

function FeatureCardColumn({
  src,
  altText = 'default alt text',
  title,
  text
}) {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.card,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: src,
    altText: altText,
    sx: styles.img,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    sx: styles.wrapper.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    sx: styles.wrapper.subTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, text)));
}
const styles = {
  card: {
    display: 'flex',
    alignItems: ['center', 'flex-start'],
    flexDirection: 'column',
    mb: -1,
    textAlign: ['center', null, 'left'],
    px: [4, null, 0]
  },
  img: {
    mx: ['auto', null, 0],
    ml: ['auto', null, '-13px'],
    mb: -2,
    width: ['80px', null, null, '250px', null, 'auto']
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    title: {
      fontSize: 5,
      color: 'heading_secondary',
      lineHeight: 2.5,
      fontWeight: 700,
      mb: [2, null, 3]
    },
    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: '1.9'
    }
  }
};

/***/ }),

/***/ "./src/components/feature-card.js":
/*!****************************************!*\
  !*** ./src/components/feature-card.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FeatureCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Will's Gaming PC\\Documents\\Development\\WhoozyWraps\\src\\components\\feature-card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */

function FeatureCard({
  src,
  altText = 'default alt text',
  title,
  text
}) {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, "FeatureCard");
}
const styles = {
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    mb: -1
  },
  img: {
    width: ['70px', null, null, '80px', '90px', 'auto'],
    height: 'auto',
    flexShrink: 0,
    mr: [2, 3, null, null, 4, 5],
    ml: -2
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: [2, 3],
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: ['10px', null, '15px']
    },
    subTitle: {
      fontSize: [1, '15px'],
      fontWeight: 400,
      lineHeight: '1.9'
    }
  }
};

/***/ }),

/***/ "./src/components/footer/footer.data.js":
/*!**********************************************!*\
  !*** ./src/components/footer/footer.data.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  menuItem: [{
    path: '/',
    label: 'Home'
  }, {
    path: '/',
    label: 'Adversite'
  }, {
    path: '/',
    label: 'Supports'
  }, {
    path: '/',
    label: 'Marketing'
  }, {
    path: '/',
    label: 'Contact'
  }]
});

/***/ }),

/***/ "./src/components/footer/footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/link */ "./src/components/link.js");
/* harmony import */ var _footer_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.data */ "./src/components/footer/footer.data.js");
/* harmony import */ var assets_logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/logo.svg */ "./src/assets/logo.svg");
/* harmony import */ var assets_logo_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_logo_svg__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Will's Gaming PC\\Documents\\Development\\WhoozyWraps\\src\\components\\footer\\footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */




function Footer() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, "Footer");
}
const styles = {
  footer: {
    footerBottomArea: {
      borderTop: '1px solid',
      borderTopColor: 'border_color',
      display: 'flex',
      pt: [7, null, 8],
      pb: ['40px', null, '100px'],
      textAlign: 'center',
      flexDirection: 'column'
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }
    },
    link: {
      fontSize: [1, '15px'],
      color: 'text',
      fontWeight: '400',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'block',
      textDecoration: 'none',
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ':hover': {
        color: 'primary'
      }
    },
    copyright: {
      fontSize: [1, '15px'],
      width: '100%'
    }
  }
};

/***/ }),

/***/ "./src/components/header/header.data.js":
/*!**********************************************!*\
  !*** ./src/components/header/header.data.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  path: 'home',
  label: 'Home'
}, {
  path: 'feature',
  label: 'Features'
}, {
  path: 'pricing',
  label: 'Pricing'
}, {
  path: 'testimonial',
  label: 'Testimonial'
}]);

/***/ }),

/***/ "./src/components/header/header.js":
/*!*****************************************!*\
  !*** ./src/components/header/header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/logo */ "./src/components/logo.js");
/* harmony import */ var assets_logo_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/logo.svg */ "./src/assets/logo.svg");
/* harmony import */ var assets_logo_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_logo_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mobile_drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mobile-drawer */ "./src/components/header/mobile-drawer.js");
/* harmony import */ var _header_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header.data */ "./src/components/header/header.data.js");
var _jsxFileName = "C:\\Users\\Will's Gaming PC\\Documents\\Development\\WhoozyWraps\\src\\components\\header\\header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */







function Header({
  className
}) {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("header", {
    sx: styles.header,
    className: className,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    sx: styles.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_logo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    src: assets_logo_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    as: "nav",
    sx: styles.nav,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, _header_data__WEBPACK_IMPORTED_MODULE_7__["default"].map((menuItems, i) => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_scroll__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    activeClass: "active",
    to: menuItems.path,
    spy: true,
    smooth: true,
    offset: -70,
    duration: 500,
    key: i,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 15
    }
  }, menuItems.label))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "donate__btn",
    variant: "secondary",
    "aria-label": "Contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, "Contact"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_mobile_drawer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  })));
}
const positionAnim = _emotion_core__WEBPACK_IMPORTED_MODULE_2__["keyframes"]`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;
const styles = {
  header: {
    color: 'text',
    fontWeight: 'body',
    py: 4,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',
    animation: `${positionAnim} 0.4s ease`,
    '.donate__btn': {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ['auto', null, null, null, 0]
    },
    '&.sticky': {
      position: 'fixed',
      backgroundColor: 'background',
      color: '#000000',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
      py: 3,
      'nev > a': {
        color: 'text'
      }
    }
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  nav: {
    mx: 'auto',
    display: 'none',
    '@media screen and (min-width: 1024px)': {
      display: 'block'
    },
    a: {
      fontSize: 2,
      fontWeight: 'body',
      px: 5,
      cursor: 'pointer',
      lineHeight: '1.2',
      transition: 'all 0.15s',
      '&:hover': {
        color: 'primary'
      },
      '&.active': {
        color: 'primary'
      }
    }
  }
};

/***/ }),

/***/ "./src/components/header/mobile-drawer.js":
/*!************************************************!*\
  !*** ./src/components/header/mobile-drawer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MobileDrawer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-custom-scrollbars */ "react-custom-scrollbars");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/drawer */ "./src/components/drawer.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _header_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header.data */ "./src/components/header/header.data.js");
var _jsxFileName = "C:\\Users\\Will's Gaming PC\\Documents\\Development\\WhoozyWraps\\src\\components\\header\\mobile-drawer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const social = [{
  path: '/',
  icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaFacebookF"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  })
}, {
  path: '/',
  icon: __jsx("fa-instagram", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  })
}];
function MobileDrawer() {
  const {
    0: isDrawerOpen,
    1: setIsDrawerOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx(components_drawer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: "320px",
    drawerHandler: __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      sx: styles.handler,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 7
      }
    }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoMdMenu"], {
      size: "26px",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }
    })),
    open: isDrawerOpen,
    toggleHandler: () => setIsDrawerOpen(prevState => !prevState),
    closeButton: __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoMdClose"], {
      size: "24px",
      color: "#000000",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 18
      }
    }),
    drawerStyle: styles.drawer,
    closeBtnStyle: styles.close,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__["Scrollbars"], {
    autoHide: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.menu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, _header_data__WEBPACK_IMPORTED_MODULE_7__["default"].map((menuItems, i) => __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    activeClass: "active",
    to: menuItems.path,
    spy: true,
    smooth: true,
    offset: -70,
    duration: 500,
    key: i,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }, menuItems.label))), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.menuFooter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.social,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, social.map((socialItem, i) => __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "span",
    key: i,
    sx: styles.social.icon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    to: socialItem.path,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 19
    }
  }, socialItem.icon))))))));
}
;
const styles = {
  handler: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
    width: '26px',
    '@media screen and (min-width: 1024px)': {
      display: 'none'
    }
  },
  drawer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'dark'
  },
  close: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '25px',
    right: '30px',
    zIndex: '1',
    cursor: 'pointer'
  },
  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    pt: '100px',
    pb: '40px',
    px: '30px'
  },
  menu: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    a: {
      fontSize: '16px',
      fontWeight: '500',
      color: 'text_white',
      py: '15px',
      cursor: 'pointer',
      borderBottom: '1px solid #e8e5e5',
      transition: 'all 0.25s',
      '&:hover': {
        color: 'secondary'
      },
      '&.active': {
        color: 'secondary'
      }
    }
  },
  menuFooter: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: 'auto'
  },
  social: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    icon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'text',
      fontSize: 14,
      mr: '15px',
      transition: 'all 0.25s',
      cursor: 'pointer',
      ':last-child': {
        mr: '0'
      },
      '&:hover': {
        color: 'secondary'
      }
    }
  },
  button: {
    color: 'white',
    fontSize: '14px',
    fw: '700',
    height: '45px',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    py: '0'
  }
};

/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-stickynode */ "react-stickynode");
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_stickynode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header */ "./src/components/header/header.js");
/* harmony import */ var _footer_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer */ "./src/components/footer/footer.js");
var _jsxFileName = "C:\\Users\\Will's Gaming PC\\Documents\\Development\\WhoozyWraps\\src\\components\\layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/** @jsx jsx */





function Layout({
  children
}) {
  const {
    0: isSticky,
    1: setIsSticky
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const handleStateChange = status => {
    if (status.status === react_stickynode__WEBPACK_IMPORTED_MODULE_2___default.a.STATUS_FIXED) {
      setIsSticky(true);
    } else if (status.status === react_stickynode__WEBPACK_IMPORTED_MODULE_2___default.a.STATUS_ORIGINAL) {
      setIsSticky(false);
    }
  };

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_stickynode__WEBPACK_IMPORTED_MODULE_2___default.a, {
    innerZ: 1001,
    top: 0,
    onStateChange: handleStateChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_header_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: `${isSticky ? 'sticky' : 'unSticky'}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("main", {
    id: "content",
    sx: {
      variant: 'layout.main'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, children), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_footer_footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/components/link.js":
/*!********************************!*\
  !*** ./src/components/link.js ***!
  \********************************/
/*! exports provided: NavLink, Link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return NavLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Will's Gaming PC\\Documents\\Development\\WhoozyWraps\\src\\components\\link.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/** @jsx jsx */


function NavLink(_ref) {
  let {
    path,
    label,
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["path", "label", "children"]);

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, "NavLink");
}
function Link(_ref2) {
  let {
    path,
    label,
    children
  } = _ref2,
      rest = _objectWithoutProperties(_ref2, ["path", "label", "children"]);

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Link"], _extends({}, rest, {
    href: path,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }), children || label);
}

/***/ }),

/***/ "./src/components/list.js":
/*!********************************!*\
  !*** ./src/components/list.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return List; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Will's Gaming PC\\Documents\\Development\\WhoozyWraps\\src\\components\\list.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function List({
  items = [],
  parentStyle,
  childStyle
}) {
  return __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, "List");
}
const styles = {
  listIcon: {
    width: ['25px', '35px'],
    height: 'auto',
    color: 'primary',
    padding: 0,
    fontSize: [3, 5],
    ml: '-1px',
    flexShrink: 0,
    justifyContent: 'flex-start',
    mt: '2px'
  }
};

/***/ }),

/***/ "./src/components/logo.js":
/*!********************************!*\
  !*** ./src/components/logo.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Logo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/link */ "./src/components/link.js");
var _jsxFileName = "C:\\Users\\Will's Gaming PC\\Documents\\Development\\WhoozyWraps\\src\\components\\logo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/** @jsx jsx */


function Logo(_ref) {
  let {
    src
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["src"]);

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], _extends({
    path: "/",
    sx: {
      variant: 'links.logo',
      display: 'flex',
      cursor: 'pointer',
      mr: 15
    }
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: src,
    alt: "Whoozy's logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/components/price-card.js":
/*!**************************************!*\
  !*** ./src/components/price-card.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PriceCard; });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list */ "./src/components/list.js");
var _jsxFileName = "C:\\Users\\Will's Gaming PC\\Documents\\Development\\WhoozyWraps\\src\\components\\price-card.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function PriceCard({
  data: {
    header,
    name,
    description,
    priceWithUnit,
    buttonText = 'Start Free Trial',
    anotherOption,
    points
  }
}) {
  return __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, "PriceCard");
}
const styles = {
  pricingBox: {
    borderRadius: 20,
    position: 'relative',
    transition: 'all 0.3s',
    p: ['35px 25px', null, null, '40px'],
    width: ['100%', '75%', '100%'],
    mb: '40px',
    mt: '40px',
    mx: [0, 'auto', 0],
    '&:before': {
      position: 'absolute',
      content: "''",
      width: '100%',
      top: 0,
      left: 0,
      height: '100%',
      border: '1px solid rgba(38, 78, 118, 0.1)',
      borderRadius: 'inherit',
      transition: 'all 0.3s',
      zIndex: -1
    },
    '&:hover': {
      boxShadow: '0px 4px 25px rgba(38, 78, 118, 0.1) !important',
      '&:before': {
        opacity: 0
      }
    }
  },
  header: {
    height: ['28px', null, null, '32px'],
    backgroundColor: 'yellow',
    borderRadius: '5px',
    fontWeight: 'bold',
    fontSize: 1,
    lineHeight: 1.2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    position: 'absolute',
    top: '-17px',
    letterSpacing: '-.14px',
    px: '12px'
  },
  pricingHeader: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    mb: ['30px', null, null, null, '40px'],
    p: {
      fontSize: [1, 2],
      color: 'text',
      lineHeight: 'heading'
    },
    '.package__name': {
      marginBottom: [1, null, 2]
    }
  },
  price: {
    fontWeight: 500,
    fontSize: [4, null, 5, null, '30px'],
    lineHeight: 1,
    letterSpacing: '-0.55px',
    color: 'text',
    marginBottom: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    pt: [4, 6],
    '> span': {
      position: 'relative',
      pl: '3px',
      display: 'inline-block',
      fontSize: [1, 2],
      fontWeight: 'normal'
    }
  },
  listItem: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: [1, 2],
    lineHeight: [1.75, 1.6],
    mb: 3,
    alignItems: 'flex-start',
    color: 'text',
    '&.closed': {
      opacity: 0.55,
      button: {
        color: '#788FB5'
      }
    }
  },
  buttonGroup: {
    textAlign: 'center',
    mt: ['30px', null, null, null, '35px'],
    '.free__trail': {
      color: 'secondary',
      width: '100%',
      justifyContent: 'center',
      fontWeight: 700,
      fontSize: ['14px', 1],
      p: '20px 0 0'
    }
  }
};

/***/ }),

/***/ "./src/components/rating.js":
/*!**********************************!*\
  !*** ./src/components/rating.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Will's Gaming PC\\Documents\\Development\\WhoozyWraps\\src\\components\\rating.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Rating = () => {
  return __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, "Rating");
};

/* harmony default export */ __webpack_exports__["default"] = (Rating);

/***/ }),

/***/ "./src/components/section-header.js":
/*!******************************************!*\
  !*** ./src/components/section-header.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Will's Gaming PC\\Documents\\Development\\WhoozyWraps\\src\\components\\section-header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function SectionHeader({
  title,
  slogan,
  isWhite
}) {
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: {
      variant: 'sectionHeader'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    sx: {
      variant: 'sectionHeader.subTitle',
      color: isWhite ? 'white' : 'primary',
      opacity: isWhite ? 0.7 : 1
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, slogan), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h2",
    sx: {
      variant: 'sectionHeader.title',
      color: isWhite ? 'white' : 'heading'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, title));
}

/***/ }),

/***/ "./src/components/seo.js":
/*!*******************************!*\
  !*** ./src/components/seo.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SEO; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Will's Gaming PC\\Documents\\Development\\WhoozyWraps\\src\\components\\seo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function SEO({
  description = 'startup product landing page',
  author = 'JSM',
  meta,
  title = 'startup landing title'
}) {
  const metaData = [{
    name: `description`,
    content: description
  }, {
    property: `og:title`,
    content: title
  }, {
    property: `og:description`,
    content: description
  }, {
    property: `og:type`,
    content: `website`
  }, {
    name: `twitter:card`,
    content: `summary`
  }, {
    name: `twitter:creator`,
    content: author
  }, {
    name: `twitter:title`,
    content: title
  }, {
    name: `twitter:description`,
    content: description
  }].concat(meta);
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, title), metaData.map(({
    name,
    content
  }, i) => __jsx("meta", {
    key: i,
    name: name,
    content: content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  })));
}
SEO.defaultProps = {
  lang: `en`,
  meta: []
};

/***/ }),

/***/ "./src/components/team-card.js":
/*!*************************************!*\
  !*** ./src/components/team-card.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TeamCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Will's Gaming PC\\Documents\\Development\\WhoozyWraps\\src\\components\\team-card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */


function TeamCard({
  src,
  altText,
  title,
  designation,
  social
}) {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, "TeamCard");
}
const styles = {
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

/***/ }),

/***/ "./src/components/text-feature.js":
/*!****************************************!*\
  !*** ./src/components/text-feature.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextFeature; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Will's Gaming PC\\Documents\\Development\\WhoozyWraps\\src\\components\\text-feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */

function TextFeature({
  subTitle,
  title,
  description,
  btnName,
  btnURL = '#'
}) {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, "TextFeature");
}
const styles = {
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexShrink: 0,
    a: {
      m: ['0 auto', null, null, 0]
    }
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: -1,
    subTitle: {
      fontSize: [0, null, 1],
      color: 'primary',
      textTransform: 'uppercase',
      fontWeight: '700',
      mb: [2, 3],
      lineHeight: 1.5,
      letterSpacing: ['1.5px', null, '2px']
    },
    title: {
      fontSize: ['24px', null, '28px', '30px', '36px', '42px', null, '48px'],
      color: 'heading_secondary',
      lineHeight: [1.3, null, null, null, 1.2],
      fontWeight: '700',
      letterSpacing: '-.5px',
      mb: 5
    }
  },
  description: {
    fontSize: ['15px', 2, null, null, null, '17px', null, 3],
    fontWeight: 400,
    lineHeight: [1.85, null, null, 2, null, '2.2'],
    color: 'text_secondary',
    mb: '30px'
  }
};

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndexPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme */ "./src/theme/index.js");
/* harmony import */ var components_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/seo */ "./src/components/seo.js");
/* harmony import */ var components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/layout */ "./src/components/layout.js");
/* harmony import */ var _sections_banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sections/banner */ "./src/sections/banner.js");
/* harmony import */ var _sections_key_feature__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sections/key-feature */ "./src/sections/key-feature.js");
/* harmony import */ var _sections_service_section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sections/service-section */ "./src/sections/service-section.js");
/* harmony import */ var _sections_feature__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sections/feature */ "./src/sections/feature.js");
/* harmony import */ var _sections_core_feature__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sections/core-feature */ "./src/sections/core-feature.js");
/* harmony import */ var _sections_workflow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../sections/workflow */ "./src/sections/workflow.js");
/* harmony import */ var _sections_package__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../sections/package */ "./src/sections/package.js");
/* harmony import */ var _sections_team_section__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../sections/team-section */ "./src/sections/team-section.js");
/* harmony import */ var _sections_testimonial__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../sections/testimonial */ "./src/sections/testimonial.js");
var _jsxFileName = "C:\\Users\\Will's Gaming PC\\Documents\\Development\\WhoozyWraps\\src\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














function IndexPage() {
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: theme__WEBPACK_IMPORTED_MODULE_2__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx(components_seo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Whoozy's Wraps",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }), __jsx(_sections_banner__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }), __jsx(_sections_key_feature__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }), __jsx(_sections_service_section__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }), __jsx(_sections_feature__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }), __jsx(_sections_core_feature__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }), __jsx(_sections_workflow__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }), __jsx(_sections_package__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }), __jsx(_sections_team_section__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }), __jsx(_sections_testimonial__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  })));
}

/***/ }),

/***/ "./src/sections/banner.js":
/*!********************************!*\
  !*** ./src/sections/banner.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Banner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var assets_banner_thumb_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/banner-thumb.png */ "./src/assets/banner-thumb.png");
/* harmony import */ var assets_banner_thumb_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assets_banner_thumb_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var assets_shape_left_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/shape-left.png */ "./src/assets/shape-left.png");
/* harmony import */ var assets_shape_left_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_shape_left_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_shape_right_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/shape-right.png */ "./src/assets/shape-right.png");
/* harmony import */ var assets_shape_right_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_shape_right_png__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Will's Gaming PC\\Documents\\Development\\WhoozyWraps\\src\\sections\\banner.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */





function Banner() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    sx: styles.banner,
    id: "home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("container", {
    sx: styles.banner.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.banner.contentBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h1",
    variant: "heroPrimary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, "Quality over Quantity."), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    variant: "heroSecondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, "At Whoozy's we can transform your car's apprerence with ease. Make your dreams come true."), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, "Explore")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.banner.imageBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_banner_thumb_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "banner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }))));
}
const styles = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: 6,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${assets_shape_left_png__WEBPACK_IMPORTED_MODULE_3___default.a})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom left',
      backgroundSize: '36%'
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '40px',
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${assets_shape_right_png__WEBPACK_IMPORTED_MODULE_4___default.a})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom right',
      backgroundSize: '32%'
    },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7]
    },
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        position: 'relative',
        height: [245, 'auto']
      }
    }
  }
};

/***/ }),

/***/ "./src/sections/core-feature.js":
/*!**************************************!*\
  !*** ./src/sections/core-feature.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CoreFeature; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_text_feature__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/text-feature */ "./src/components/text-feature.js");
/* harmony import */ var assets_core_feature_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/core-feature.png */ "./src/assets/core-feature.png");
/* harmony import */ var assets_core_feature_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_core_feature_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_shape_pattern2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/shape-pattern2.png */ "./src/assets/shape-pattern2.png");
/* harmony import */ var assets_shape_pattern2_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_shape_pattern2_png__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Will's Gaming PC\\Documents\\Development\\WhoozyWraps\\src\\sections\\core-feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */




const data = {
  subTitle: 'Core features',
  title: 'Smart Jackpots that you may love this anytime & anywhere',
  description: 'Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.',
  btnName: 'Get Started',
  btnURL: '#'
};
function CoreFeature() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    sx: {
      variant: 'section.coreFeature'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 4
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    sx: styles.containerBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.contentBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_text_feature__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subTitle: data.subTitle,
    title: data.title,
    description: data.description,
    btnName: data.btnName,
    btnURL: data.btnURL,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.thumbnail,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_core_feature_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "Thumbnail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.shapeBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_shape_pattern2_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "Shape",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  })))));
}
const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [0, 7, 0, null, 7]
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', '80%', null, 340, 400, 430, null, 485],
    pb: ['50px', '60px', null, 0],
    mx: ['auto', null, null, 0],
    '.description': {
      pr: [0, null, 6, 7, 6]
    }
  },
  thumbnail: {
    display: 'inline-flex',
    position: 'relative',
    mr: 'auto',
    ml: ['auto', null, null, null, 7],
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto']
    }
  },
  shapeBox: {
    position: 'absolute',
    bottom: -65,
    right: -165,
    zIndex: -1,
    display: ['none', 'inline-block', 'none', null, 'inline-block']
  }
};

/***/ }),

/***/ "./src/sections/feature.js":
/*!*********************************!*\
  !*** ./src/sections/feature.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Feature; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var components_feature_card_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/feature-card.js */ "./src/components/feature-card.js");
/* harmony import */ var assets_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/feature/performance.svg */ "./src/assets/feature/performance.svg");
/* harmony import */ var assets_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/feature/partnership.svg */ "./src/assets/feature/partnership.svg");
/* harmony import */ var assets_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/feature/subscription.svg */ "./src/assets/feature/subscription.svg");
/* harmony import */ var assets_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_feature_support_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/feature/support.svg */ "./src/assets/feature/support.svg");
/* harmony import */ var assets_feature_support_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_feature_support_svg__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\Will's Gaming PC\\Documents\\Development\\WhoozyWraps\\src\\sections\\feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */








const data = [{
  id: 1,
  imgSrc: assets_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
  altText: 'Fast Performance',
  title: 'Fast Performance',
  text: 'Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world.'
}, {
  id: 2,
  imgSrc: assets_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
  altText: 'Pro Subscription',
  title: 'Pro Subscription',
  text: 'We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers.'
}, {
  id: 3,
  imgSrc: assets_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
  altText: 'Partnership deal',
  title: 'Partnership deal',
  text: 'Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world.'
}, {
  id: 4,
  imgSrc: assets_feature_support_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
  altText: 'Customer Support',
  title: 'Customer Support',
  text: 'We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers.'
}];
function Feature() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 4
    }
  }, "Feature");
}
const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: ['40px 0', null, '45px 30px', null, '60px 50px', '70px 50px', null, '80px 90px'],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)']
  }
};

/***/ }),

/***/ "./src/sections/key-feature.js":
/*!*************************************!*\
  !*** ./src/sections/key-feature.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KeyFeature; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/section-header */ "./src/components/section-header.js");
/* harmony import */ var components_feature_card_column_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/feature-card-column.js */ "./src/components/feature-card-column.js");
/* harmony import */ var assets_key_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/key-feature/performance.svg */ "./src/assets/key-feature/performance.svg");
/* harmony import */ var assets_key_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_key_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/key-feature/partnership.svg */ "./src/assets/key-feature/partnership.svg");
/* harmony import */ var assets_key_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_key_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/key-feature/subscription.svg */ "./src/assets/key-feature/subscription.svg");
/* harmony import */ var assets_key_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_key_feature_support_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/key-feature/support.svg */ "./src/assets/key-feature/support.svg");
/* harmony import */ var assets_key_feature_support_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_support_svg__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\Will's Gaming PC\\Documents\\Development\\WhoozyWraps\\src\\sections\\key-feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */








const data = [{
  id: 1,
  imgSrc: assets_key_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
  altText: 'Car Vinyl',
  title: 'Vinyl',
  text: 'Give your car a new look!.'
}, {
  id: 2,
  imgSrc: assets_key_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
  altText: 'decal',
  title: 'Decals',
  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
}, {
  id: 3,
  imgSrc: assets_key_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
  altText: 'tinting',
  title: 'Window Tinting',
  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
}, {
  id: 4,
  imgSrc: assets_key_feature_support_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
  altText: 'detailing',
  title: 'Detailing',
  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
}];
function KeyFeature() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    sx: {
      variant: 'section.keyFeature'
    },
    id: "feature",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_section_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    slogan: "Let your imagination come true",
    title: "Meet our services",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    sx: styles.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, data.map(item => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_feature_card_column_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: item.id,
    src: item.imgSrc,
    alt: item.altText,
    title: item.title,
    text: item.text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  })))));
}
const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: ['35px 0', null, '40px 40px', '50px 60px', '30px', '50px 40px', '55px 90px'],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)', null, 'repeat(4,1fr)']
  }
};

/***/ }),

/***/ "./src/sections/package.js":
/*!*********************************!*\
  !*** ./src/sections/package.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Package; });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-multi-carousel */ "react-multi-carousel");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_price_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/price-card */ "./src/components/price-card.js");
/* harmony import */ var components_button_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/button-group */ "./src/components/button-group.js");
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\Will's Gaming PC\\Documents\\Development\\WhoozyWraps\\src\\sections\\package.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

/** @jsx jsx */








const packages = {
  monthly: [{
    id: 1,
    name: 'Free Plan',
    description: 'For Small teams or office',
    buttonText: 'Start free trail',
    priceWithUnit: '$0',
    points: [{
      id: 1,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 17
        }
      }),
      text: 'Drag & Drop Builder',
      isAvailable: true
    }, {
      id: 2,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 17
        }
      }),
      text: "1,000's of Templates",
      isAvailable: true
    }, {
      id: 3,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 17
        }
      }),
      text: 'Blog Support Tools',
      isAvailable: true
    }, {
      id: 4,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCloseCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 17
        }
      }),
      text: 'eCommerce Store ',
      isAvailable: true
    }]
  }, {
    id: 2,
    name: 'Business king',
    description: 'For Enterprise business',
    priceWithUnit: '$15',
    buttonText: 'Create account',
    anotherOption: 'Or Start 14 Days trail',
    points: [{
      id: 1,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 17
        }
      }),
      text: 'Drag & Drop Builder',
      isAvailable: true
    }, {
      id: 2,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 17
        }
      }),
      text: "1,000's of Templates",
      isAvailable: true
    }, {
      id: 3,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 17
        }
      }),
      text: 'Blog Support Tools',
      isAvailable: true
    }, {
      id: 4,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 17
        }
      }),
      text: 'eCommerce Store ',
      isAvailable: true
    }]
  }, {
    id: 3,
    header: 'Suggested',
    headerIcon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 19
      }
    }),
    name: 'Pro Master',
    description: 'For pro level developers',
    priceWithUnit: '$24',
    buttonText: 'Create account',
    anotherOption: 'Or Start 14 Days trail',
    points: [{
      id: 1,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 17
        }
      }),
      text: 'Drag & Drop Builder',
      isAvailable: true
    }, {
      id: 2,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 17
        }
      }),
      text: "1,000's of Templates",
      isAvailable: true
    }, {
      id: 3,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 17
        }
      }),
      text: 'Blog Support Tools',
      isAvailable: true
    }, {
      id: 4,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 17
        }
      }),
      text: 'eCommerce Store ',
      isAvailable: true
    }]
  }],
  annual: [{
    id: 1,
    name: 'Free Plan',
    description: 'For Small teams or office',
    buttonText: 'Start free trail',
    priceWithUnit: '$0',
    points: [{
      id: 1,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 17
        }
      }),
      text: "1,000's of Templates",
      isAvailable: true
    }, {
      id: 2,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 17
        }
      }),
      text: 'Drag & Drop Builder',
      isAvailable: true
    }, {
      id: 3,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 17
        }
      }),
      text: 'Blog Support Tools',
      isAvailable: true
    }, {
      id: 4,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCloseCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 17
        }
      }),
      text: 'eCommerce Store ',
      isAvailable: true
    }]
  }, {
    id: 2,
    name: 'Business king',
    description: 'For Enterprise business',
    priceWithUnit: '$25',
    buttonText: 'Create account',
    anotherOption: 'Or Start 10 Days trail',
    points: [{
      id: 1,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 17
        }
      }),
      text: 'eCommerce Store',
      isAvailable: true
    }, {
      id: 2,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 17
        }
      }),
      text: 'Blog Support Tools',
      isAvailable: true
    }, {
      id: 3,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 17
        }
      }),
      text: "1,000's of Templates",
      isAvailable: true
    }, {
      id: 4,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 17
        }
      }),
      text: 'Drag & Drop Builder ',
      isAvailable: true
    }]
  }, {
    id: 3,
    header: 'Suggested',
    headerIcon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 19
      }
    }),
    name: 'Pro Master',
    description: 'For pro level developers',
    priceWithUnit: '$39',
    buttonText: 'Create account',
    anotherOption: 'Or Start 10 Days trail',
    points: [{
      id: 1,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 17
        }
      }),
      text: 'eCommerce Store',
      isAvailable: true
    }, {
      id: 2,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 17
        }
      }),
      text: 'Blog Support Tools',
      isAvailable: true
    }, {
      id: 3,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 17
        }
      }),
      text: "1,000's of Templates",
      isAvailable: true
    }, {
      id: 4,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 17
        }
      }),
      text: 'Drag & Drop Builder ',
      isAvailable: true
    }]
  }]
};
const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 3,
    draggable: false
  },
  tablet: {
    breakpoint: {
      max: 1023,
      min: 640
    },
    items: 2,
    draggable: true
  },
  mobile: {
    breakpoint: {
      max: 639,
      min: 0
    },
    items: 1,
    draggable: true
  }
};
function Package() {
  const {
    monthly,
    annual
  } = packages;
  const sliderParams = {
    additionalTransfrom: 0,
    arrows: false,
    autoPlaySpeed: 3000,
    centerMode: false,
    className: '',
    slidesToSlide: 1,
    items: 3,
    containerClass: 'carousel-container',
    customButtonGroup: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(components_button_group__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 24
      }
    }),
    dotListClass: '',
    focusOnSelect: false,
    infinite: false,
    keyBoardControl: false,
    itemClass: '',
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: false,
    sliderClass: ''
  };
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 5
    }
  }, "Package");
}
const fadeIn = _emotion_core__WEBPACK_IMPORTED_MODULE_1__["keyframes"]`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = _emotion_core__WEBPACK_IMPORTED_MODULE_1__["keyframes"]`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
		transform: translateY(0);
    opacity: 1;
  }
`;
const styles = {
  pricingWrapper: {
    mb: '-40px',
    mt: '-40px',
    mx: -3,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    '&.pricing__wrapper .package__card': {
      '.package__header': {
        animation: `${fadeIn} 0.8s ease-in`
      },
      'ul > li': {
        animation: `${fadeIn2} 0.7s ease-in`
      },
      '.package__price': {
        animation: `${fadeIn2} 0.9s ease-in`
      },
      button: {
        animation: `${fadeIn2} 1s ease-in`
      }
    },
    '.carousel-container': {
      width: '100%',
      '> ul > li ': {
        display: 'flex'
      }
    },
    '.button__group': {
      display: ['flex', null, null, null, 'none'],
      mb: [4, null, null, null, 0]
    }
  },
  pricingItem: {
    mx: 3,
    display: 'flex',
    flexShrink: 0,
    flex: '1 1 auto'
  },
  buttonGroup: {
    justifyContent: 'center',
    mb: '7',
    mt: ['-15px', '-35px'],
    position: 'relative',
    zIndex: 2
  },
  buttonGroupInner: {
    display: 'flex',
    padding: '7px',
    margin: '0 auto',
    borderRadius: '5px',
    backgroundColor: '#F7F8FB',
    button: {
      border: 0,
      padding: ['15px 20px', '15px 27px'],
      borderRadius: '5px',
      color: 'text',
      fontSize: [1, 2],
      lineHeight: 1.2,
      fontWeight: 500,
      backgroundColor: 'transparent',
      cursor: 'pointer',
      fontFamily: 'body',
      letterSpacing: '-0.24px',
      transition: 'all 0.3s',
      '&.active': {
        color: '#0f2137',
        backgroundColor: '#ffffff',
        boxShadow: '0 3px 4px rgba(38, 78, 118, 0.1)'
      },
      '&:focus': {
        outline: 0
      }
    }
  }
};

/***/ }),

/***/ "./src/sections/service-section.js":
/*!*****************************************!*\
  !*** ./src/sections/service-section.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ServiceSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_text_feature__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/text-feature */ "./src/components/text-feature.js");
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-modal-video */ "react-modal-video");
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_service_thumb_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/service-thumb.png */ "./src/assets/service-thumb.png");
/* harmony import */ var assets_service_thumb_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_service_thumb_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_shape_pattern1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/shape-pattern1.png */ "./src/assets/shape-pattern1.png");
/* harmony import */ var assets_shape_pattern1_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_shape_pattern1_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_services_smart_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/services/smart.svg */ "./src/assets/services/smart.svg");
/* harmony import */ var assets_services_smart_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_services_smart_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var assets_services_secure_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/services/secure.svg */ "./src/assets/services/secure.svg");
/* harmony import */ var assets_services_secure_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_services_secure_svg__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\Will's Gaming PC\\Documents\\Development\\WhoozyWraps\\src\\sections\\service-section.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */










const data = {
  subTitle: 'our services',
  title: 'Business Goals Achieved with Design',
  features: [{
    id: 1,
    imgSrc: assets_services_smart_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
    altText: 'Smart Features',
    title: 'Smart Features',
    text: 'Get your blood tests delivered at let home collect sample from the victory of the managements. your blood tests.'
  }, {
    id: 2,
    imgSrc: assets_services_secure_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
    altText: 'Secure Contents',
    title: 'Secure Contents',
    text: 'Get your blood tests delivered at let home collect sample from the victory of the managements. your blood tests.'
  }]
};
function ServiceSection() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, "Service Section");
}
const playPluse = _emotion_core__WEBPACK_IMPORTED_MODULE_2__["keyframes"]`
  from {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
    opacity: 1;
  }

  to {
	transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
    opacity: 0;
  }
`;
const styles = {
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
      animation: `${playPluse} 1.5s ease-out infinite`,
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

/***/ }),

/***/ "./src/sections/team-section.js":
/*!**************************************!*\
  !*** ./src/sections/team-section.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TeamSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var components_team_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/team-card */ "./src/components/team-card.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_team_member_1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/team/member-1.png */ "./src/assets/team/member-1.png");
/* harmony import */ var assets_team_member_1_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_team_member_1_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_team_member_2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/team/member-2.png */ "./src/assets/team/member-2.png");
/* harmony import */ var assets_team_member_2_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_team_member_2_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_team_member_3_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/team/member-3.png */ "./src/assets/team/member-3.png");
/* harmony import */ var assets_team_member_3_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_team_member_3_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_team_member_4_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/team/member-4.png */ "./src/assets/team/member-4.png");
/* harmony import */ var assets_team_member_4_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_team_member_4_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var assets_team_member_5_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/team/member-5.png */ "./src/assets/team/member-5.png");
/* harmony import */ var assets_team_member_5_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_team_member_5_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var assets_team_member_6_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! assets/team/member-6.png */ "./src/assets/team/member-6.png");
/* harmony import */ var assets_team_member_6_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(assets_team_member_6_png__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\Will's Gaming PC\\Documents\\Development\\WhoozyWraps\\src\\sections\\team-section.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */











const data = [{
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
    id: 2,
    name: 'twitter',
    path: '#',
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaTwitter"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
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
        lineNumber: 39,
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
        lineNumber: 54,
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
        lineNumber: 60,
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
        lineNumber: 66,
        columnNumber: 15
      }
    })
  }]
}, {
  id: 3,
  imgSrc: assets_team_member_3_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  altText: 'Aaron Nunez',
  title: 'Aaron Nunez',
  designation: 'Web Designer',
  socialProfile: [{
    id: 1,
    name: 'facebook',
    path: '#',
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaFacebookF"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
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
        lineNumber: 87,
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
        lineNumber: 93,
        columnNumber: 15
      }
    })
  }]
}, {
  id: 4,
  imgSrc: assets_team_member_4_png__WEBPACK_IMPORTED_MODULE_8___default.a,
  altText: 'Lina Jutila',
  title: 'Lina Jutila',
  designation: 'Web Developer',
  socialProfile: [{
    id: 1,
    name: 'facebook',
    path: '#',
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaFacebookF"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
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
        lineNumber: 114,
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
        lineNumber: 120,
        columnNumber: 15
      }
    })
  }]
}, {
  id: 5,
  imgSrc: assets_team_member_5_png__WEBPACK_IMPORTED_MODULE_9___default.a,
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
        lineNumber: 135,
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
        lineNumber: 141,
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
        lineNumber: 147,
        columnNumber: 15
      }
    })
  }]
}, {
  id: 6,
  imgSrc: assets_team_member_6_png__WEBPACK_IMPORTED_MODULE_10___default.a,
  altText: 'Aaron Nunez',
  title: 'Aaron Nunez',
  designation: 'Web Designer',
  socialProfile: [{
    id: 1,
    name: 'facebook',
    path: '#',
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaFacebookF"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
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
        lineNumber: 168,
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
        lineNumber: 174,
        columnNumber: 15
      }
    })
  }]
}];
function TeamSection() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 5
    }
  }, "Team Section");
}
const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: ['repeat(2,1fr)', null, 'repeat(2,1fr)', null, 'repeat(3,1fr)']
  }
};

/***/ }),

/***/ "./src/sections/testimonial.js":
/*!*************************************!*\
  !*** ./src/sections/testimonial.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TestimonialCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var components_rating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/rating */ "./src/components/rating.js");
/* harmony import */ var components_button_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/button-group */ "./src/components/button-group.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-multi-carousel */ "react-multi-carousel");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_testimonial_avatar1_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/testimonial/avatar1.png */ "./src/assets/testimonial/avatar1.png");
/* harmony import */ var assets_testimonial_avatar1_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_avatar1_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_testimonial_avatar2_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/testimonial/avatar2.png */ "./src/assets/testimonial/avatar2.png");
/* harmony import */ var assets_testimonial_avatar2_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_avatar2_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_testimonial_avatar3_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/testimonial/avatar3.png */ "./src/assets/testimonial/avatar3.png");
/* harmony import */ var assets_testimonial_avatar3_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_avatar3_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var assets_testimonial_avatar4_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/testimonial/avatar4.png */ "./src/assets/testimonial/avatar4.png");
/* harmony import */ var assets_testimonial_avatar4_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_avatar4_png__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\Will's Gaming PC\\Documents\\Development\\WhoozyWraps\\src\\sections\\testimonial.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */









const data = [{
  id: 1,
  title: 'Modern look & trending design',
  description: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
  avatar: assets_testimonial_avatar1_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  name: 'Denny Hilguston',
  designation: '@denny.hil',
  review: 4
}, {
  id: 2,
  title: 'Design Quality & performance',
  description: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
  avatar: assets_testimonial_avatar2_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  name: 'Denny Hilguston',
  designation: '@denny.hil',
  review: 5
}, {
  id: 3,
  title: 'Layout and organized layers',
  description: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
  avatar: assets_testimonial_avatar3_png__WEBPACK_IMPORTED_MODULE_8___default.a,
  name: 'Denny Hilguston',
  designation: '@denny.hil',
  review: 5
}, {
  id: 4,
  title: 'Modern look & trending design',
  description: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
  avatar: assets_testimonial_avatar4_png__WEBPACK_IMPORTED_MODULE_9___default.a,
  name: 'Denny Hilguston',
  designation: '@denny.hil',
  review: 4
}];
const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1619
    },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.

  },
  laptop: {
    breakpoint: {
      max: 1619,
      min: 1024
    },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.

  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 640
    },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.

  },
  mobile: {
    breakpoint: {
      max: 639,
      min: 0
    },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.

  }
};
const carouselParams = {
  additionalTransfrom: 0,
  arrows: false,
  autoPlaySpeed: 3000,
  centerMode: false,
  className: "",
  containerClass: "carousel-container",
  customButtonGroup: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_button_group__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }),
  dotListClass: "",
  draggable: true,
  focusOnSelect: false,
  infinite: true,
  itemClass: "",
  keyBoardControl: true,
  minimumTouchDrag: 80,
  renderButtonGroupOutside: true,
  renderDotsOutside: false,
  responsive: responsive,
  showDots: false,
  sliderClass: "",
  slidesToSlide: 1
};
function TestimonialCard() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 4
    }
  }, "Testimonial Card");
}
const styles = {
  carouselWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'flex-end',
    mt: '-30px',
    px: '15px',
    '.carousel-container': {
      width: '100%',
      maxWidth: ['100%', null, null, '750px', '1000px', '1180px', null, 'calc(50% + 865px)'],
      mr: ['auto', null, null, null, null, null, null, '-220px'],
      ml: 'auto',
      '.react-multi-carousel-item': {
        transition: 'all 0.25s'
      },
      '.react-multi-carousel-item--active:nth-of-type(4n)': {
        opacity: '0.5',
        '@media screen and (max-width: 1620px)': {
          opacity: 1
        }
      }
    }
  },
  reviewCard: {
    boxShadow: '0px 0px 1px rgba(38, 78, 118, 0.35)',
    transition: 'all 0.3s',
    borderRadius: '6px',
    p: ['30px 20px 35px', '30px 25px 35px', '30px 20px 35px', '35px 30px 40px 40px', '30px 30px 35px', '35px 30px 40px 40px'],
    bg: 'white',
    textAlign: 'left',
    m: ['28px 5px 30px 5px', '28px 20px 30px 20px', '28px 15px 30px 15px', '28px 15px 30px 15px', '30px 20px 40px'],
    '&:hover': {
      boxShadow: '0px 6px 30px rgba(38, 78, 118, 0.1)'
    },
    '.rating': {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: 'none',
        mb: 0,
        display: 'flex'
      },
      svg: {
        marginRight: '2px',
        '&:last-of-type': {
          marginRight: 0
        }
      },
      '.star': {
        color: 'primary',
        mr: '1px'
      },
      '.star-o': {
        color: '#ddd',
        mr: '1px'
      }
    },
    '.card-footer': {
      display: 'flex',
      alignItems: 'center',
      marginTop: [5, null, null, '33px'],
      '.image': {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: 'flex',
        img: {
          width: '55px',
          height: '55px',
          borderRadius: '50%',
          objectFit: 'cover'
        }
      }
    }
  },
  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mb: [3, null, null, '22px'],
    color: 'text',
    lineHeight: 1.6
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: 'normal',
    color: 'text',
    lineHeight: [1.85, null, 2]
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: '3px',
    color: 'text',
    lineHeight: 1.3
  },
  designation: {
    color: 'primary',
    fontWeight: '500',
    fontSize: 1,
    lineHeight: 1.4
  }
};

/***/ }),

/***/ "./src/sections/workflow.js":
/*!**********************************!*\
  !*** ./src/sections/workflow.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WorkFlow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var assets_patternBG_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/patternBG.png */ "./src/assets/patternBG.png");
/* harmony import */ var assets_patternBG_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_patternBG_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_arrowOdd_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/arrowOdd.svg */ "./src/assets/arrowOdd.svg");
/* harmony import */ var assets_arrowOdd_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_arrowOdd_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_arrowEven_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/arrowEven.svg */ "./src/assets/arrowEven.svg");
/* harmony import */ var assets_arrowEven_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_arrowEven_svg__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Will's Gaming PC\\Documents\\Development\\WhoozyWraps\\src\\sections\\workflow.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */






const data = [{
  id: 1,
  title: 'Set disbursement Instructions',
  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
}, {
  id: 2,
  title: 'Assembly retrieves funds from your account',
  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
}, {
  id: 3,
  title: 'Assembly initiates disbursement',
  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
}, {
  id: 4,
  title: 'Customer receives funds payment',
  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
}];
function WorkFlow() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, "Workflow");
}
const styles = {
  workflow: {
    backgroundColor: 'primary',
    backgroundImage: `url(${assets_patternBG_png__WEBPACK_IMPORTED_MODULE_3___default.a})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'relative',
    py: [8, null, 9, null, null, 10]
  },
  grid: {
    mb: -1,
    pt: 0,
    gridGap: ['35px 0', null, '45px 30px', null, '50px 25px', null, null, '50px 65px'],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)', null, 'repeat(4,1fr)']
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    textAlign: ['center', null, 'left'],
    width: ['100%', '80%', '100%'],
    mx: ['auto'],
    px: [4, null, null, 0],
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      left: [0, null, null, null, null, 72, null, 90],
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'center center',
      width: 215,
      height: 60,
      '@media screen and (max-width:1220px)': {
        display: 'none'
      }
    },
    '&:nth-of-type(2n-1)::before': {
      backgroundImage: `url(${assets_arrowOdd_svg__WEBPACK_IMPORTED_MODULE_4___default.a})`
    },
    '&:nth-of-type(2n)::before': {
      backgroundImage: `url(${assets_arrowEven_svg__WEBPACK_IMPORTED_MODULE_5___default.a})`,
      top: 17
    },
    '&:last-child::before': {
      display: 'none'
    }
  },
  iconBox: {
    width: ['50px', null, '60px', null, null, '70px'],
    height: ['50px', null, '60px', null, null, '70px'],
    flexShrink: 0,
    borderRadius: [15, null, 23, null, null, 30],
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    mb: [5, null, null, null, null, 6],
    mx: ['auto', null, 0],
    fontSize: [6, null, 7, null, null, '30px'],
    fontWeight: 700,
    justifyContent: 'center',
    color: '#234582'
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: [3, null, 4, null, null, 5],
      color: 'white',
      lineHeight: [1.4, null, null, null, null, 1.55],
      pr: [0, null, null, null, null, 2],
      mb: [2, 3]
    },
    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
      color: 'white',
      opacity: 0.75,
      pr: [0, null, null, null, null, 5]
    }
  }
};

/***/ }),

/***/ "./src/theme/index.js":
/*!****************************!*\
  !*** ./src/theme/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
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
    default: {
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
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
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

/***/ }),

/***/ "@emotion/core":
/*!********************************!*\
  !*** external "@emotion/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/core");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "rc-drawer":
/*!****************************!*\
  !*** external "rc-drawer" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-drawer");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-custom-scrollbars":
/*!******************************************!*\
  !*** external "react-custom-scrollbars" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-custom-scrollbars");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-icons/io":
/*!*********************************!*\
  !*** external "react-icons/io" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/io");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-modal-video":
/*!************************************!*\
  !*** external "react-modal-video" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-modal-video");

/***/ }),

/***/ "react-multi-carousel":
/*!***************************************!*\
  !*** external "react-multi-carousel" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-multi-carousel");

/***/ }),

/***/ "react-scroll":
/*!*******************************!*\
  !*** external "react-scroll" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ }),

/***/ "react-stickynode":
/*!***********************************!*\
  !*** external "react-stickynode" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stickynode");

/***/ }),

/***/ "theme-ui":
/*!***************************!*\
  !*** external "theme-ui" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("theme-ui");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2Fycm93RXZlbi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9hcnJvd09kZC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9iYW5uZXItdGh1bWIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvY29yZS1mZWF0dXJlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZlYXR1cmUvcGFydG5lcnNoaXAuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZmVhdHVyZS9wZXJmb3JtYW5jZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mZWF0dXJlL3N1YnNjcmlwdGlvbi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mZWF0dXJlL3N1cHBvcnQuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMva2V5LWZlYXR1cmUvcGFydG5lcnNoaXAuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMva2V5LWZlYXR1cmUvcGVyZm9ybWFuY2Uuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMva2V5LWZlYXR1cmUvc3Vic2NyaXB0aW9uLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2tleS1mZWF0dXJlL3N1cHBvcnQuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvbG9nby5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wYXR0ZXJuQkcucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2VydmljZS10aHVtYi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zZXJ2aWNlcy9zZWN1cmUuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2VydmljZXMvc21hcnQuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2hhcGUtbGVmdC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zaGFwZS1wYXR0ZXJuMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zaGFwZS1wYXR0ZXJuMi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zaGFwZS1yaWdodC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy90ZWFtL21lbWJlci0xLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3RlYW0vbWVtYmVyLTIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvdGVhbS9tZW1iZXItMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy90ZWFtL21lbWJlci00LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3RlYW0vbWVtYmVyLTUucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvdGVhbS9tZW1iZXItNi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy90ZXN0aW1vbmlhbC9hdmF0YXIxLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3Rlc3RpbW9uaWFsL2F2YXRhcjIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvdGVzdGltb25pYWwvYXZhdGFyMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy90ZXN0aW1vbmlhbC9hdmF0YXI0LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9idXR0b24tZ3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZHJhd2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ZlYXR1cmUtY2FyZC1jb2x1bW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZmVhdHVyZS1jYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9tb2JpbGUtZHJhd2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9saW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbG9nby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wcmljZS1jYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JhdGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGVhbS1jYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RleHQtZmVhdHVyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL2Jhbm5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvY29yZS1mZWF0dXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9mZWF0dXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9rZXktZmVhdHVyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvcGFja2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvc2VydmljZS1zZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy90ZWFtLXNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL3Rlc3RpbW9uaWFsLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy93b3JrZmxvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGVtb3Rpb24vY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJjLWRyYXdlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtY3VzdG9tLXNjcm9sbGJhcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9mYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2lvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tb2RhbC12aWRlb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LW11bHRpLWNhcm91c2VsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2Nyb2xsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3RpY2t5bm9kZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRoZW1lLXVpXCIiXSwibmFtZXMiOlsibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwiY2FjaGVkT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJvYnNlcnZlciIsImdldE9ic2VydmVyIiwiY29uc29sZSIsInJvdXRlciIsImVyciIsImhyZWYiLCJldmVudCIsInRhcmdldCIsImUiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsInN1Y2Nlc3MiLCJkb2N1bWVudCIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsIm9wdGlvbmFsUHJvcHMiLCJoYXNXYXJuZWQiLCJSZWFjdCIsInAiLCJwYXRobmFtZSIsInJlc29sdmVkSHJlZiIsImNoaWxkRWxtIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRQcm9wcyIsInJlZiIsImVsIiwic2V0Q2hpbGRFbG0iLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsIkxpbmsiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsIlBBR0VfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFkZEJhc2VQYXRoIiwicmVzb2x2ZUhyZWYiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsImNyZWRlbnRpYWxzIiwicmVzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5IiwiaXNTZXJ2ZXJSZW5kZXIiLCJtYXJrTG9hZGluZ0Vycm9yIiwiY29uc3RydWN0b3IiLCJyb3V0ZSIsInF1ZXJ5IiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93Iiwic3RhdGUiLCJvcHRpb25zIiwic3R5bGVTaGVldHMiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIkNvbXBvbmVudCIsIl9fTkVYVF9EQVRBX18iLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsInByZXBhcmVVcmxBcyIsImNoYW5nZSIsImlzTG9jYWxVUkwiLCJTVCIsInBlcmZvcm1hbmNlIiwiY2xlYW5lZEFzIiwiZGVsQmFzZVBhdGgiLCJwYWdlcyIsIl9fcmV3cml0ZXMiLCJwYXJzZWQiLCJtZXRob2QiLCJyZXNvbHZlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwicGFyYW0iLCJhc1BhdGhuYW1lIiwicm91dGVJbmZvIiwiYXBwQ29tcCIsImVycm9yIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJwYWdlIiwiZ2V0Um91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImhhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJfcmVzb2x2ZUhyZWYiLCJjbGVhblBhdGhuYW1lIiwicGFyc2VkSHJlZiIsIlByb21pc2UiLCJmZXRjaENvbXBvbmVudCIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJkYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJlbmNvZGVVUklDb21wb25lbnQiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsIkRVTU1ZX0JBU0UiLCJyZXNvbHZlZEJhc2UiLCJvcmlnaW4iLCJtYXRjaGVyT3B0aW9ucyIsInNlbnNpdGl2ZSIsImRlbGltaXRlciIsImRlY29kZSIsImN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMiLCJzdHJpY3QiLCJjdXN0b21Sb3V0ZSIsImtleXMiLCJtYXRjaGVyUmVnZXgiLCJwYXRoVG9SZWdleHAiLCJtYXRjaGVyIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFyc2VkRGVzdGluYXRpb24iLCJkZXN0aW5hdGlvbiIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJ2YWxpZGF0ZSIsInZhbHVlIiwiQXJyYXkiLCJzdHJPckFycmF5IiwicXVlcnlDb21waWxlciIsInBhcmFtS2V5cyIsImFwcGVuZFBhcmFtc1RvUXVlcnkiLCJwYXJhbXMiLCJzaG91bGRBZGRCYXNlUGF0aCIsIm5ld1VybCIsImVuY29kZVVSSSIsInNlYXJjaFBhcmFtcyIsInJlc3VsdCIsIml0ZW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwiY3VzdG9tUm91dGVNYXRjaGVyIiwicmV3cml0ZSIsImRlc3RSZXMiLCJyZSIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJvcHRpb25hbCIsInJlcGVhdCIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInNlZ21lbnQiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJpc05hTiIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJCdXR0b25Hcm91cCIsIm5leHQiLCJwcmV2aW91cyIsInN0eWxlcyIsImJ1dHRvbkdyb3VwIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwibWIiLCJidXR0b24iLCJiZyIsImJvcmRlciIsImZvbnRTaXplIiwiY3Vyc29yIiwicHgiLCJjb2xvciIsInRyYW5zaXRpb24iLCJvdXRsaW5lIiwiRHJhd2VyIiwiY2xhc3NOYW1lIiwiY2xvc2VCdXR0b24iLCJjbG9zZUJ1dHRvblN0eWxlIiwiZHJhd2VySGFuZGxlciIsInRvZ2dsZUhhbmRsZXIiLCJvcGVuIiwid2lkdGgiLCJwbGFjZW1lbnQiLCJkcmF3ZXJTdHlsZSIsImNsb3NlQnRuU3R5bGUiLCJ0cmltIiwiZGlzcGxheXQiLCJkZWZhdWx0UHJvcHMiLCJGZWF0dXJlQ2FyZENvbHVtbiIsInNyYyIsImFsdFRleHQiLCJ0aXRsZSIsInRleHQiLCJjYXJkIiwiaW1nIiwid3JhcHBlciIsInN1YlRpdGxlIiwiYWxpZ25JdGVtcyIsImZsZXhEaXJlY3Rpb24iLCJ0ZXh0QWxpZ24iLCJteCIsIm1sIiwibGluZUhlaWdodCIsImZvbnRXZWlnaHQiLCJGZWF0dXJlQ2FyZCIsImhlaWdodCIsImZsZXhTaHJpbmsiLCJtciIsIm10IiwibWVudUl0ZW0iLCJsYWJlbCIsIkZvb3RlciIsImZvb3RlciIsImZvb3RlckJvdHRvbUFyZWEiLCJib3JkZXJUb3AiLCJib3JkZXJUb3BDb2xvciIsInB0IiwicGIiLCJtZW51cyIsIm5hdiIsImZsZXhXcmFwIiwibGluayIsInRleHREZWNvcmF0aW9uIiwiY29weXJpZ2h0IiwiSGVhZGVyIiwiaGVhZGVyIiwiY29udGFpbmVyIiwiTG9nb0RhcmsiLCJtZW51SXRlbXMiLCJtYXAiLCJwb3NpdGlvbkFuaW0iLCJrZXlmcmFtZXMiLCJweSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJhY2tncm91bmRDb2xvciIsImFuaW1hdGlvbiIsImJveFNoYWRvdyIsImEiLCJzb2NpYWwiLCJpY29uIiwiTW9iaWxlRHJhd2VyIiwiaXNEcmF3ZXJPcGVuIiwic2V0SXNEcmF3ZXJPcGVuIiwidXNlU3RhdGUiLCJwcmV2U3RhdGUiLCJkcmF3ZXIiLCJjbG9zZSIsImNvbnRlbnQiLCJtZW51IiwibWVudUZvb3RlciIsInNvY2lhbEl0ZW0iLCJyaWdodCIsInpJbmRleCIsImJvcmRlckJvdHRvbSIsImZ3IiwiYm9yZGVyUmFkaXVzIiwiTGF5b3V0IiwiaXNTdGlja3kiLCJzZXRJc1N0aWNreSIsImhhbmRsZVN0YXRlQ2hhbmdlIiwic3RhdHVzIiwiU3RpY2t5IiwiU1RBVFVTX0ZJWEVEIiwiU1RBVFVTX09SSUdJTkFMIiwidmFyaWFudCIsIk5hdkxpbmsiLCJyZXN0IiwiTGlzdCIsIml0ZW1zIiwicGFyZW50U3R5bGUiLCJjaGlsZFN0eWxlIiwibGlzdEljb24iLCJwYWRkaW5nIiwiTG9nbyIsIlByaWNlQ2FyZCIsImRlc2NyaXB0aW9uIiwicHJpY2VXaXRoVW5pdCIsImJ1dHRvblRleHQiLCJhbm90aGVyT3B0aW9uIiwicG9pbnRzIiwicHJpY2luZ0JveCIsIm9wYWNpdHkiLCJsZXR0ZXJTcGFjaW5nIiwicHJpY2luZ0hlYWRlciIsIm1hcmdpbkJvdHRvbSIsInByaWNlIiwicGwiLCJsaXN0SXRlbSIsImZvbnRGYW1pbHkiLCJmb250U3R5bGUiLCJSYXRpbmciLCJTZWN0aW9uSGVhZGVyIiwic2xvZ2FuIiwiaXNXaGl0ZSIsIlNFTyIsImF1dGhvciIsIm1ldGEiLCJtZXRhRGF0YSIsInByb3BlcnR5IiwiY29uY2F0IiwibGFuZyIsIlRlYW1DYXJkIiwiZGVzaWduYXRpb24iLCJteSIsIm1lbWJlclRodW1iIiwiYm9yZGVyQ29sb3IiLCJpbmZvV3JhcHBlciIsInNvY2lhbFNoYXJlIiwiYm90dG9tIiwiVGV4dEZlYXR1cmUiLCJidG5OYW1lIiwiYnRuVVJMIiwidGV4dFRyYW5zZm9ybSIsIkluZGV4UGFnZSIsInRoZW1lIiwiQmFubmVyIiwiYmFubmVyIiwiY29udGVudEJveCIsImltYWdlQm94IiwiQmFubmVySW1nIiwiYmFja2dyb3VuZEltYWdlIiwiU2hhcGVMZWZ0IiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRTaXplIiwiU2hhcGVSaWdodCIsIm1pbkhlaWdodCIsIkNvcmVGZWF0dXJlIiwiY29udGFpbmVyQm94IiwidGh1bWJuYWlsIiwiRmVhdHVyZVRodW1iIiwic2hhcGVCb3giLCJzaGFwZVBhdHRlcm4iLCJwciIsImlkIiwiaW1nU3JjIiwiUGVyZm9ybWFuY2UiLCJQYXJ0bmVyc2hpcCIsIlN1YnNjcmlwdGlvbiIsIlN1cHBvcnQiLCJGZWF0dXJlIiwiZ3JpZCIsImdyaWRHYXAiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiS2V5RmVhdHVyZSIsInBhY2thZ2VzIiwibW9udGhseSIsImlzQXZhaWxhYmxlIiwiaGVhZGVySWNvbiIsImFubnVhbCIsInJlc3BvbnNpdmUiLCJkZXNrdG9wIiwiYnJlYWtwb2ludCIsIm1heCIsIm1pbiIsImRyYWdnYWJsZSIsInRhYmxldCIsIm1vYmlsZSIsIlBhY2thZ2UiLCJzbGlkZXJQYXJhbXMiLCJhZGRpdGlvbmFsVHJhbnNmcm9tIiwiYXJyb3dzIiwiYXV0b1BsYXlTcGVlZCIsImNlbnRlck1vZGUiLCJzbGlkZXNUb1NsaWRlIiwiY29udGFpbmVyQ2xhc3MiLCJjdXN0b21CdXR0b25Hcm91cCIsImRvdExpc3RDbGFzcyIsImZvY3VzT25TZWxlY3QiLCJpbmZpbml0ZSIsImtleUJvYXJkQ29udHJvbCIsIml0ZW1DbGFzcyIsIm1pbmltdW1Ub3VjaERyYWciLCJyZW5kZXJCdXR0b25Hcm91cE91dHNpZGUiLCJyZW5kZXJEb3RzT3V0c2lkZSIsInNob3dEb3RzIiwic2xpZGVyQ2xhc3MiLCJmYWRlSW4iLCJmYWRlSW4yIiwicHJpY2luZ1dyYXBwZXIiLCJwcmljaW5nSXRlbSIsImZsZXgiLCJidXR0b25Hcm91cElubmVyIiwibWFyZ2luIiwiZmVhdHVyZXMiLCJTbWFydCIsIlNlY3VyZSIsIlNlcnZpY2VTZWN0aW9uIiwicGxheVBsdXNlIiwiY29yZUZlYXR1cmUiLCJvcmRlciIsInZpZGVvQnRuIiwidHJhbnNmb3JtIiwic3ZnIiwidmlkZW9XcmFwcGVyIiwibWF4V2lkdGgiLCJwYWRkaW5nVG9wIiwiaWZyYW1lIiwiTWVtYmVyMSIsInNvY2lhbFByb2ZpbGUiLCJNZW1iZXIyIiwiTWVtYmVyMyIsIk1lbWJlcjQiLCJNZW1iZXI1IiwiTWVtYmVyNiIsIlRlYW1TZWN0aW9uIiwiYXZhdGFyIiwiQXZhdGFyMSIsInJldmlldyIsIkF2YXRhcjIiLCJBdmF0YXIzIiwiQXZhdGFyNCIsImxhcHRvcCIsImNhcm91c2VsUGFyYW1zIiwiVGVzdGltb25pYWxDYXJkIiwiY2Fyb3VzZWxXcmFwcGVyIiwicmV2aWV3Q2FyZCIsInVsIiwibGlzdFN0eWxlIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Ub3AiLCJvYmplY3RGaXQiLCJoZWFkaW5nIiwiV29ya0Zsb3ciLCJ3b3JrZmxvdyIsIlBhdHRlcm5CRyIsIkFycm93T2RkIiwiQXJyb3dFdmVuIiwiaWNvbkJveCIsImNvbG9ycyIsInRleHRfc2Vjb25kYXJ5IiwiaGVhZGluZ19zZWNvbmRhcnkiLCJiYWNrZ3JvdW5kIiwiYmFja2dyb3VuZF9zZWNvbmRhcnkiLCJib3JkZXJfY29sb3IiLCJ5ZWxsb3ciLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwibXV0ZWQiLCJhY2NlbnQiLCJtb2RlcyIsImRhcmsiLCJicmVha3BvaW50cyIsImZvbnRzIiwiYm9keSIsImZvbnRTaXplcyIsImZvbnRXZWlnaHRzIiwiYm9sZCIsImxpbmVIZWlnaHRzIiwibGV0dGVyU3BhY2luZ3MiLCJjYXBzIiwic3BhY2UiLCJsYXlvdXQiLCJ0b29sYmFyIiwibWFpbiIsInNlY3Rpb24iLCJrZXlGZWF0dXJlIiwiZmVhdHVyZSIsIm5ld3MiLCJvdmVyZmxvdyIsInRlc3RpbW9uaWFsIiwic2VydmljZXMiLCJwcmljaW5nIiwic2VjdGlvbkhlYWRlciIsImhlcm9QcmltYXJ5IiwiaGVyb1NlY29uZGFyeSIsImxlYWQiLCJsaW5rcyIsImRlZmF1bHQiLCJibG9nIiwibG9nbyIsImltYWdlcyIsImJ1dHRvbnMiLCJkZWZhdWx0QnRuIiwid2hpdGVCdXR0b24iLCJ0ZXh0QnV0dG9uIiwiY2FyZHMiLCJvZmZlciIsImZlYXR1cmVDYXJkIiwiZm9ybXMiLCJpbnB1dCIsInQiLCJiYWRnZXMiLCJyb290IiwiZm9udFNtb290aGluZyIsImhyIiwic3JPbmx5IiwiY2xpcCIsImNsaXBQYXRoIiwid2hpdGVTcGFjZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHdFOzs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7O0FD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LGNBQVEsRUFBRSx1QkFISjtBQUlON1IsWUFBTSxFQUFFLGdCQUpGO0FBS05vTCxZQUFNLEVBQUUsaUJBTEY7QUFNTjRFLGNBQVEsRUFBRSxtQkFOSjtBQU9OM0wsYUFBTyxFQUFFLGNBUEg7QUFRTnpDLGNBQVEsRUFBRSxxQkFSSjtBQVNOcEQsV0FBSyxFQUFFLGdCQVREO0FBVU5zVCxnQkFBVSxFQUFFO0FBVk47QUExQkY7QUFwV0ssQ0FBZixFOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHFDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XHJcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcclxuICAgIFwiZGVmYXVsdFwiOiBvYmpcclxuICB9O1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XHJcblxyXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XHJcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xyXG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XHJcblxyXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcclxuICAgIHJldHVybiBjYWNoZTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gY2FjaGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xyXG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcclxuICAgIHJldHVybiBvYmo7XHJcbiAgfVxyXG5cclxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcclxuXHJcbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XHJcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XHJcbiAgfVxyXG5cclxuICB2YXIgbmV3T2JqID0ge307XHJcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xyXG5cclxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XHJcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xyXG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcclxuXHJcbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XHJcblxyXG4gIGlmIChjYWNoZSkge1xyXG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBuZXdPYmo7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcclxuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XHJcblxyXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xyXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcclxuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XHJcbiAgICB9O1xyXG4gIH0gZWxzZSB7XHJcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xyXG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gX3R5cGVvZihvYmopO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5sZXQgY2FjaGVkT2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAoY2FjaGVkT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gY2FjaGVkT2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChjYWNoZWRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBjYWNoZWRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc10gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW5cbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHsgc2hhbGxvdyB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3QgW2NoaWxkRWxtLCBzZXRDaGlsZEVsbV0gPSBSZWFjdC51c2VTdGF0ZTxFbGVtZW50PigpXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hcyA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcykgOiByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHAgJiZcbiAgICAgIEludGVyc2VjdGlvbk9ic2VydmVyICYmXG4gICAgICBjaGlsZEVsbSAmJlxuICAgICAgY2hpbGRFbG0udGFnTmFtZSAmJlxuICAgICAgaXNMb2NhbFVSTChocmVmKVxuICAgICkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwgfSA9IHByb3BzXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKGVsKSBzZXRDaGlsZEVsbShlbClcblxuICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbClcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoYXMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oe30sIF9yb3V0ZXJbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVG9rZW5pemUgaW5wdXQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBsZXhlcihzdHIpIHtcbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHN0cltpXTtcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKlwiIHx8IGNoYXIgPT09IFwiK1wiIHx8IGNoYXIgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTU9ESUZJRVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVTQ0FQRURfQ0hBUlwiLCBpbmRleDogaSsrLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJPUEVOXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDTE9TRVwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiOlwiKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChqKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgLy8gYDAtOWBcbiAgICAgICAgICAgICAgICAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgQS1aYFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgYS16YFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYF9gXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPT09IDk1KSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk5BTUVcIiwgaW5kZXg6IGksIHZhbHVlOiBuYW1lIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0dGVybiBjYW5ub3Qgc3RhcnQgd2l0aCBcXFwiP1xcXCIgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK10gKyBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RyW2pdID09PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ogKyAxXSAhPT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYXB0dXJpbmcgZ3JvdXBzIGFyZSBub3QgYWxsb3dlZCBhdCBcIiArIGopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuYmFsYW5jZWQgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJQQVRURVJOXCIsIGluZGV4OiBpLCB2YWx1ZTogcGF0dGVybiB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNIQVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICB9XG4gICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVORFwiLCBpbmRleDogaSwgdmFsdWU6IFwiXCIgfSk7XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICovXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciB0b2tlbnMgPSBsZXhlcihzdHIpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMucHJlZml4ZXMsIHByZWZpeGVzID0gX2EgPT09IHZvaWQgMCA/IFwiLi9cIiA6IF9hO1xuICAgIHZhciBkZWZhdWx0UGF0dGVybiA9IFwiW15cIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXSs/XCI7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXkgPSAwO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgdmFyIHRyeUNvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2ldLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zW2krK10udmFsdWU7XG4gICAgfTtcbiAgICB2YXIgbXVzdENvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDb25zdW1lKHR5cGUpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFyIF9hID0gdG9rZW5zW2ldLCBuZXh0VHlwZSA9IF9hLnR5cGUsIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIFwiICsgbmV4dFR5cGUgKyBcIiBhdCBcIiArIGluZGV4ICsgXCIsIGV4cGVjdGVkIFwiICsgdHlwZSk7XG4gICAgfTtcbiAgICB2YXIgY29uc3VtZVRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB3aGlsZSAoKHZhbHVlID0gdHJ5Q29uc3VtZShcIkNIQVJcIikgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgd2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gdHJ5Q29uc3VtZShcIkNIQVJcIik7XG4gICAgICAgIHZhciBuYW1lID0gdHJ5Q29uc3VtZShcIk5BTUVcIik7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIik7XG4gICAgICAgIGlmIChuYW1lIHx8IHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjaGFyIHx8IFwiXCI7XG4gICAgICAgICAgICBpZiAocHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gcHJlZml4O1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm4gfHwgZGVmYXVsdFBhdHRlcm4sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IGNoYXIgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBwYXRoICs9IHZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wZW4gPSB0cnlDb25zdW1lKFwiT1BFTlwiKTtcbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgcGF0dGVybl8xID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgbXVzdENvbnN1bWUoXCJDTE9TRVwiKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXzEgfHwgKHBhdHRlcm5fMSA/IGtleSsrIDogXCJcIiksXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmFtZV8xICYmICFwYXR0ZXJuXzEgPyBkZWZhdWx0UGF0dGVybiA6IHBhdHRlcm5fMSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeCxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbXVzdENvbnN1bWUoXCJFTkRcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUoc3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbih0b2tlbnMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciByZUZsYWdzID0gZmxhZ3Mob3B0aW9ucyk7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hLCBfYiA9IG9wdGlvbnMudmFsaWRhdGUsIHZhbGlkYXRlID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcbiAgICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgICB2YXIgbWF0Y2hlcyA9IHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSRcIiwgcmVGbGFncyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHBhdGggPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW47XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhID8gZGF0YVt0b2tlbi5uYW1lXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBvcHRpb25hbCA9IHRva2VuLm1vZGlmaWVyID09PSBcIj9cIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCI7XG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIitcIjtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghcmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCBiZSBlbXB0eVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGFsbCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZShTdHJpbmcodmFsdWUpLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB2YXIgdHlwZU9mTWVzc2FnZSA9IHJlcGVhdCA/IFwiYW4gYXJyYXlcIiA6IFwiYSBzdHJpbmdcIjtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIGJlIFwiICsgdHlwZU9mTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbn1cbmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb247XG4vKipcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxuICovXG5mdW5jdGlvbiBtYXRjaChzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIHZhciByZSA9IHBhdGhUb1JlZ2V4cChzdHIsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubWF0Y2ggPSBtYXRjaDtcbi8qKlxuICogQ3JlYXRlIGEgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgb3V0cHV0LlxuICovXG5mdW5jdGlvbiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLmRlY29kZSwgZGVjb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2E7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwYXRobmFtZSkge1xuICAgICAgICB2YXIgbSA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIW0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBwYXRoID0gbVswXSwgaW5kZXggPSBtLmluZGV4O1xuICAgICAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBpZiAobVtpXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV07XG4gICAgICAgICAgICBpZiAoa2V5Lm1vZGlmaWVyID09PSBcIipcIiB8fCBrZXkubW9kaWZpZXIgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IG1baV0uc3BsaXQoa2V5LnByZWZpeCArIGtleS5zdWZmaXgpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZSh2YWx1ZSwga2V5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBkZWNvZGUobVtpXSwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIGluZGV4OiBpbmRleCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgICB9O1xufVxuZXhwb3J0cy5yZWdleHBUb0Z1bmN0aW9uID0gcmVnZXhwVG9GdW5jdGlvbjtcbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xufVxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBmbGFncyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5zaXRpdmUgPyBcIlwiIDogXCJpXCI7XG59XG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cykge1xuICAgIGlmICgha2V5cylcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZyk7XG4gICAgaWYgKGdyb3Vwcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpLFxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwKHBhdGhzLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgdmFyIHBhcnRzID0gcGF0aHMubWFwKGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykuc291cmNlOyB9KTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIig/OlwiICsgcGFydHMuam9pbihcInxcIikgKyBcIilcIiwgZmxhZ3Mob3B0aW9ucykpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb1JlZ2V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucyk7XG59XG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnZXhwKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zdHJpY3QsIHN0cmljdCA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3RhcnQsIHN0YXJ0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgX2MgPSBvcHRpb25zLmVuZCwgZW5kID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2QgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2Q7XG4gICAgdmFyIGVuZHNXaXRoID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5lbmRzV2l0aCB8fCBcIlwiKSArIFwiXXwkXCI7XG4gICAgdmFyIGRlbGltaXRlciA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdXCI7XG4gICAgdmFyIHJvdXRlID0gc3RhcnQgPyBcIl5cIiA6IFwiXCI7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18xID0gdG9rZW5zOyBfaSA8IHRva2Vuc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNfMVtfaV07XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnByZWZpeCkpO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4uc3VmZml4KSk7XG4gICAgICAgICAgICBpZiAodG9rZW4ucGF0dGVybikge1xuICAgICAgICAgICAgICAgIGlmIChrZXlzKVxuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gXCIrXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiID8gXCI/XCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKCg/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSg/OlwiICsgc3VmZml4ICsgcHJlZml4ICsgXCIoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikpKilcIiArIHN1ZmZpeCArIFwiKVwiICsgbW9kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kKSB7XG4gICAgICAgIGlmICghc3RyaWN0KVxuICAgICAgICAgICAgcm91dGUgKz0gZGVsaW1pdGVyICsgXCI/XCI7XG4gICAgICAgIHJvdXRlICs9ICFvcHRpb25zLmVuZHNXaXRoID8gXCIkXCIgOiBcIig/PVwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpc0VuZERlbGltaXRlZCA9IHR5cGVvZiBlbmRUb2tlbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkZWxpbWl0ZXIuaW5kZXhPZihlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSkgPiAtMVxuICAgICAgICAgICAgOiAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICBlbmRUb2tlbiA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIGRlbGltaXRlciArIFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKSk/XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VuZERlbGltaXRlZCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPz1cIiArIGRlbGltaXRlciArIFwifFwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpO1xufVxuZXhwb3J0cy50b2tlbnNUb1JlZ2V4cCA9IHRva2Vuc1RvUmVnZXhwO1xuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKVxuICAgICAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpXG4gICAgICAgIHJldHVybiBhcnJheVRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMucGF0aFRvUmVnZXhwID0gcGF0aFRvUmVnZXhwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPSBudWxsIHwgeyBfX046IGZhbHNlIH0gfCAoeyBfX046IHRydWUgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYmFzZVBhdGggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChiYXNlUGF0aClcbiAgICAgIDogYmFzZVBhdGggKyBwYXRoXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKGN1cnJlbnRQYXRoOiBzdHJpbmcsIGhyZWY6IFVybCk6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICByZXR1cm4gZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICA6IGZpbmFsVXJsLmhyZWZcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiB1cmxBc1N0cmluZ1xuICB9XG59XG5cbmNvbnN0IFBBR0VfTE9BRF9FUlJPUiA9IFN5bWJvbCgnUEFHRV9MT0FEX0VSUk9SJylcbmV4cG9ydCBmdW5jdGlvbiBtYXJrTG9hZGluZ0Vycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBQQUdFX0xPQURfRVJST1IsIHt9KVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBQcml2YXRlUm91dGVJbmZvLCBBcHA6IEFwcENvbXBvbmVudCkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrTG9hZGluZ0Vycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHM6IGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG5cbiAgICAgICAgICBsZXQgc2Nyb2xsRGVib3VuY2VUaW1lb3V0OiB1bmRlZmluZWQgfCBOb2RlSlMuVGltZW91dFxuXG4gICAgICAgICAgY29uc3QgZGVib3VuY2VkU2Nyb2xsU2F2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpIGNsZWFyVGltZW91dChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpXG5cbiAgICAgICAgICAgIHNjcm9sbERlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybCwgYXM6IGN1ckFzLCBvcHRpb25zIH0gPSBoaXN0b3J5LnN0YXRlXG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGN1ckFzLFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgIF9OX1g6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICAgICAgICAgICAgX05fWTogd2luZG93LnNjcm9sbFksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSwgMTApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlZFNjcm9sbFNhdmUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gc3RhdGVcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhbmVkQXMgPSBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhc1xuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBjb25zdCB7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIucHJvbWlzZWRCdWlsZE1hbmlmZXN0XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zIH0gPSBwYXJzZWRcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpXG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUykge1xuICAgICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgYXMsXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSFcbiAgICAgIClcbiAgICB9XG4gICAgcmVzb2x2ZWRBcyA9IGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHNoYWxsb3dcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yIH0gPSByb3V0ZUluZm9cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pLmNhdGNoKFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKFBBR0VfTE9BRF9FUlJPUiBpbiBlcnIgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAnL19lcnJvcidcbiAgICAgIClcbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICBlcnIsXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgIH0gYXMgYW55KVxuICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGRlbEJhc2VQYXRoKGFzKSxcbiAgICAgICAgICBfX05fU1NHXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPFByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkSHJlZlxuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGRlbEJhc2VQYXRoKHBhdGhuYW1lISkpXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFnZSlcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VkSHJlZlxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBhc1BhdGgpLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBQcml2YXRlUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShEVU1NWV9CQVNFLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG5leHBvcnQgeyBwYXRoVG9SZWdleHAgfVxuXG5leHBvcnQgY29uc3QgbWF0Y2hlck9wdGlvbnMgPSB7XG4gIHNlbnNpdGl2ZTogZmFsc2UsXG4gIGRlbGltaXRlcjogJy8nLFxuICBkZWNvZGU6IGRlY29kZVBhcmFtLFxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihcbiAgICAgIG1hdGNoZXJSZWdleCxcbiAgICAgIGtleXMsXG4gICAgICBtYXRjaGVyT3B0aW9uc1xuICAgIClcblxuICAgIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQsIHBhcmFtcz86IGFueSkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gcGF0aG5hbWUgPT0gbnVsbCA/IGZhbHNlIDogbWF0Y2hlcihwYXRobmFtZSlcbiAgICAgIGlmICghcmVzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoY3VzdG9tUm91dGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgIC8vIHVubmFtZWQgcGFyYW1zIHNob3VsZCBiZSByZW1vdmVkIGFzIHRoZXlcbiAgICAgICAgICAvLyBhcmUgbm90IGFsbG93ZWQgdG8gYmUgdXNlZCBpbiB0aGUgZGVzdGluYXRpb25cbiAgICAgICAgICBpZiAodHlwZW9mIGtleS5uYW1lID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgZGVsZXRlIChyZXMucGFyYW1zIGFzIGFueSlba2V5Lm5hbWVdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IC4uLnBhcmFtcywgLi4ucmVzLnBhcmFtcyB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlY29kZVBhcmFtKHBhcmFtOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICB9IGNhdGNoIChfKSB7XG4gICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKCdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJylcbiAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgIHRocm93IGVyclxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG50eXBlIFBhcmFtcyA9IHsgW3BhcmFtOiBzdHJpbmddOiBhbnkgfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVwYXJlRGVzdGluYXRpb24oXG4gIGRlc3RpbmF0aW9uOiBzdHJpbmcsXG4gIHBhcmFtczogUGFyYW1zLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIGFwcGVuZFBhcmFtc1RvUXVlcnk6IGJvb2xlYW4sXG4gIGJhc2VQYXRoOiBzdHJpbmdcbikge1xuICBsZXQgcGFyc2VkRGVzdGluYXRpb246IHtcbiAgICBxdWVyeT86IFBhcnNlZFVybFF1ZXJ5XG4gICAgcHJvdG9jb2w/OiBzdHJpbmdcbiAgICBob3N0bmFtZT86IHN0cmluZ1xuICAgIHBvcnQ/OiBzdHJpbmdcbiAgfSAmIFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+ID0ge30gYXMgYW55XG5cbiAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgIHBhcnNlZERlc3RpbmF0aW9uID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaFBhcmFtcyxcbiAgICAgIGhhc2gsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfSA9IG5ldyBVUkwoZGVzdGluYXRpb24pXG5cbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9XG4gIH1cblxuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gICAgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoUGFyYW1zXG4gIClcbiAgY29uc3QgZGVzdFF1ZXJ5ID0gcGFyc2VkRGVzdGluYXRpb24ucXVlcnlcbiAgY29uc3QgZGVzdFBhdGggPSBgJHtwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSF9JHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoIHx8ICcnXG4gIH1gXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1LZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKGRlc3RQYXRoLCBkZXN0UGF0aFBhcmFtS2V5cylcblxuICBjb25zdCBkZXN0UGF0aFBhcmFtcyA9IGRlc3RQYXRoUGFyYW1LZXlzLm1hcCgoa2V5KSA9PiBrZXkubmFtZSlcblxuICBsZXQgZGVzdGluYXRpb25Db21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKFxuICAgIGRlc3RQYXRoLFxuICAgIC8vIHdlIGRvbid0IHZhbGlkYXRlIHdoaWxlIGNvbXBpbGluZyB0aGUgZGVzdGluYXRpb24gc2luY2Ugd2Ugc2hvdWxkXG4gICAgLy8gaGF2ZSBhbHJlYWR5IHZhbGlkYXRlZCBiZWZvcmUgd2UgZ290IHRvIHRoaXMgcG9pbnQgYW5kIHZhbGlkYXRpbmdcbiAgICAvLyBicmVha3MgY29tcGlsaW5nIGRlc3RpbmF0aW9ucyB3aXRoIG5hbWVkIHBhdHRlcm4gcGFyYW1zIGZyb20gdGhlIHNvdXJjZVxuICAgIC8vIGUuZy4gL3NvbWV0aGluZzpoZWxsbyguKikgLT4gL2Fub3RoZXIvOmhlbGxvIGlzIGJyb2tlbiB3aXRoIHZhbGlkYXRpb25cbiAgICAvLyBzaW5jZSBjb21waWxlIHZhbGlkYXRpb24gaXMgbWVhbnQgZm9yIHJldmVyc2luZyBhbmQgbm90IGZvciBpbnNlcnRpbmdcbiAgICAvLyBwYXJhbXMgZnJvbSBhIHNlcGFyYXRlIHBhdGgtcmVnZXggaW50byBhbm90aGVyXG4gICAgeyB2YWxpZGF0ZTogZmFsc2UgfVxuICApXG4gIGxldCBuZXdVcmxcblxuICAvLyB1cGRhdGUgYW55IHBhcmFtcyBpbiBxdWVyeSB2YWx1ZXNcbiAgZm9yIChjb25zdCBba2V5LCBzdHJPckFycmF5XSBvZiBPYmplY3QuZW50cmllcyhkZXN0UXVlcnkpKSB7XG4gICAgbGV0IHZhbHVlID0gQXJyYXkuaXNBcnJheShzdHJPckFycmF5KSA/IHN0ck9yQXJyYXlbMF0gOiBzdHJPckFycmF5XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAvLyB0aGUgdmFsdWUgbmVlZHMgdG8gc3RhcnQgd2l0aCBhIGZvcndhcmQtc2xhc2ggdG8gYmUgY29tcGlsZWRcbiAgICAgIC8vIGNvcnJlY3RseVxuICAgICAgdmFsdWUgPSBgLyR7dmFsdWV9YFxuICAgICAgY29uc3QgcXVlcnlDb21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKHZhbHVlLCB7IHZhbGlkYXRlOiBmYWxzZSB9KVxuICAgICAgdmFsdWUgPSBxdWVyeUNvbXBpbGVyKHBhcmFtcykuc3Vic3RyKDEpXG4gICAgfVxuICAgIGRlc3RRdWVyeVtrZXldID0gdmFsdWVcbiAgfVxuXG4gIC8vIGFkZCBwYXRoIHBhcmFtcyB0byBxdWVyeSBpZiBpdCdzIG5vdCBhIHJlZGlyZWN0IGFuZCBub3RcbiAgLy8gYWxyZWFkeSBkZWZpbmVkIGluIGRlc3RpbmF0aW9uIHF1ZXJ5IG9yIHBhdGhcbiAgY29uc3QgcGFyYW1LZXlzID0gT2JqZWN0LmtleXMocGFyYW1zKVxuXG4gIGlmIChcbiAgICBhcHBlbmRQYXJhbXNUb1F1ZXJ5ICYmXG4gICAgIXBhcmFtS2V5cy5zb21lKChrZXkpID0+IGRlc3RQYXRoUGFyYW1zLmluY2x1ZGVzKGtleSkpXG4gICkge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHBhcmFtS2V5cykge1xuICAgICAgaWYgKCEoa2V5IGluIGRlc3RRdWVyeSkpIHtcbiAgICAgICAgZGVzdFF1ZXJ5W2tleV0gPSBwYXJhbXNba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNob3VsZEFkZEJhc2VQYXRoID0gZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpICYmIGJhc2VQYXRoXG5cbiAgdHJ5IHtcbiAgICBuZXdVcmwgPSBgJHtzaG91bGRBZGRCYXNlUGF0aCA/IGJhc2VQYXRoIDogJyd9JHtlbmNvZGVVUkkoXG4gICAgICBkZXN0aW5hdGlvbkNvbXBpbGVyKHBhcmFtcylcbiAgICApfWBcblxuICAgIGNvbnN0IFtwYXRobmFtZSwgaGFzaF0gPSBuZXdVcmwuc3BsaXQoJyMnKVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoID0gYCR7aGFzaCA/ICcjJyA6ICcnfSR7aGFzaCB8fCAnJ31gXG4gICAgZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFxuICAgIGRlbGV0ZSBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hQYXJhbXNcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyci5tZXNzYWdlLm1hdGNoKC9FeHBlY3RlZCAuKj8gdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheS8pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUbyB1c2UgYSBtdWx0aS1tYXRjaCBpbiB0aGUgZGVzdGluYXRpb24geW91IG11c3QgYWRkIFxcYCpcXGAgYXQgdGhlIGVuZCBvZiB0aGUgcGFyYW0gbmFtZSB0byBzaWduaWZ5IGl0IHNob3VsZCByZXBlYXQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtbXVsdGktbWF0Y2hgXG4gICAgICApXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9XG5cbiAgLy8gUXVlcnkgbWVyZ2Ugb3JkZXIgbG93ZXN0IHByaW9yaXR5IHRvIGhpZ2hlc3RcbiAgLy8gMS4gaW5pdGlhbCBVUkwgcXVlcnkgdmFsdWVzXG4gIC8vIDIuIHBhdGggc2VnbWVudCB2YWx1ZXNcbiAgLy8gMy4gZGVzdGluYXRpb24gc3BlY2lmaWVkIHF1ZXJ5IHZhbHVlc1xuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHtcbiAgICAuLi5xdWVyeSxcbiAgICAuLi5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSxcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmV3VXJsLFxuICAgIHBhcnNlZERlc3RpbmF0aW9uLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBpdGVtKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHZhbHVlKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCBwYXRoTWF0Y2ggZnJvbSAnLi9wYXRoLW1hdGNoJ1xuaW1wb3J0IHByZXBhcmVEZXN0aW5hdGlvbiBmcm9tICcuL3ByZXBhcmUtZGVzdGluYXRpb24nXG5pbXBvcnQgeyBSZXdyaXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2xvYWQtY3VzdG9tLXJvdXRlcydcblxuY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyID0gcGF0aE1hdGNoKHRydWUpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcyhcbiAgYXNQYXRoOiBzdHJpbmcsXG4gIHBhZ2VzOiBzdHJpbmdbXSxcbiAgYmFzZVBhdGg6IHN0cmluZyxcbiAgcmV3cml0ZXM6IFJld3JpdGVbXSxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICByZXNvbHZlSHJlZjogKHBhdGg6IHN0cmluZykgPT4gc3RyaW5nXG4pIHtcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhhc1BhdGgpKSB7XG4gICAgZm9yIChjb25zdCByZXdyaXRlIG9mIHJld3JpdGVzKSB7XG4gICAgICBjb25zdCBtYXRjaGVyID0gY3VzdG9tUm91dGVNYXRjaGVyKHJld3JpdGUuc291cmNlKVxuICAgICAgY29uc3QgcGFyYW1zID0gbWF0Y2hlcihhc1BhdGgpXG5cbiAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgaWYgKCFyZXdyaXRlLmRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgLy8gdGhpcyBpcyBhIHByb3hpZWQgcmV3cml0ZSB3aGljaCBpc24ndCBoYW5kbGVkIG9uIHRoZSBjbGllbnRcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlc3RSZXMgPSBwcmVwYXJlRGVzdGluYXRpb24oXG4gICAgICAgICAgcmV3cml0ZS5kZXN0aW5hdGlvbixcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICByZXdyaXRlLmJhc2VQYXRoID09PSBmYWxzZSA/ICcnIDogYmFzZVBhdGhcbiAgICAgICAgKVxuICAgICAgICBhc1BhdGggPSBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIVxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5KVxuXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhhc1BhdGgpKSB7XG4gICAgICAgICAgLy8gY2hlY2sgaWYgd2Ugbm93IG1hdGNoIGEgcGFnZSBhcyB0aGlzIG1lYW5zIHdlIGFyZSBkb25lXG4gICAgICAgICAgLy8gcmVzb2x2aW5nIHRoZSByZXdyaXRlc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBtYXRjaCBhIGR5bmFtaWMtcm91dGUsIGlmIHNvIHdlIGJyZWFrIHRoZSByZXdyaXRlcyBjaGFpblxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihhc1BhdGgpXG5cbiAgICAgICAgaWYgKHJlc29sdmVkSHJlZiAhPT0gYXNQYXRoICYmIHBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZikpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhc1BhdGhcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJy4uLy4uL2xpYi9sb2FkLWVudi1jb25maWcnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU1qQTBJaUJvWldsbmFIUTlJalF6SWlCMmFXVjNRbTk0UFNJd0lEQWdNakEwSURReklpQm1hV3hzUFNKdWIyNWxJaUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lQZzBLUEhCaGRHZ2daRDBpVFRBdU5EZ3hNakF4SURFd0xqSTFOekZETUM0ME9ERXlNREVnTVRBdU1qVTNNU0E1TWk0M09ERXlJRGd4TGpjNE5EY2dNVGsxTGpRNE1TQXhNQzR5TlRjeElpQnpkSEp2YTJVOUlpTkRNa05DUkVVaUlITjBjbTlyWlMxM2FXUjBhRDBpTVM0MUlpQnpkSEp2YTJVdFpHRnphR0Z5Y21GNVBTSTFJRFVpTHo0TkNqeHdZWFJvSUdROUlrMHhPREF1TnlBekxqUTNORFUxUXpFNE1DNDNJRE11TkRjME5UVWdNVGs1TGpneE5TQXRNaTR3TlRFM055QXlNREV1TmpNM0lEUXVNakE1TVRaRE1qQXpMalExT1NBeE1DNDBOekF4SURJd01pNHdPVE1nTVRZdU9UUTBOQ0F4T1RZdU1UYzJJREkxTGpneE5ESWlJSE4wY205clpUMGlJME15UTBKRVJTSWdjM1J5YjJ0bExYZHBaSFJvUFNJeExqVWlJSE4wY205clpTMWtZWE5vWVhKeVlYazlJalFnTkNJdlBnMEtQQzl6ZG1jK0RRbz1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlNakEwSWlCb1pXbG5hSFE5SWpReklpQjJhV1YzUW05NFBTSXdJREFnTWpBMElEUXpJaUJtYVd4c1BTSnViMjVsSWlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpUGcwS1BIQmhkR2dnWkQwaVRUQXVPVGs1TnpVMklETXlMamN4T1RWRE1DNDVPVGszTlRZZ016SXVOekU1TlNBNU15NHlPVGs0SUMwek9DNDRNRGd4SURFNU5pQXpNaTQzTVRrMUlpQnpkSEp2YTJVOUlpTkRNa05DUkVVaUlITjBjbTlyWlMxM2FXUjBhRDBpTVM0MUlpQnpkSEp2YTJVdFpHRnphR0Z5Y21GNVBTSTFJRFVpTHo0TkNqeHdZWFJvSUdROUlrMHhPREV1TWpFNUlETTVMalE1TnpaRE1UZ3hMakl4T1NBek9TNDBPVGMySURJd01DNHpNelFnTkRVdU1ESTBJREl3TWk0eE5UWWdNemd1TnpZelF6SXdNeTQ1TnpnZ016SXVOVEF4T1NBeU1ESXVOakV4SURJMkxqQXlOelVnTVRrMkxqWTVOQ0F4Tnk0eE5UYzFJaUJ6ZEhKdmEyVTlJaU5ETWtOQ1JFVWlJSE4wY205clpTMTNhV1IwYUQwaU1TNDFJaUJ6ZEhKdmEyVXRaR0Z6YUdGeWNtRjVQU0kwSURRaUx6NE5Dand2YzNablBnMEtcIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9iYW5uZXItdGh1bWItYzEyMWRjNzkzODJiOWJmMjA0MTRjMzBjNGQwOTJlMGEucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2NvcmUtZmVhdHVyZS03NDlkYzA4NmVlYzI1YWMxNGVkMGM5MmE2ODc2ZDI5ZS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpT1RVaUlHaGxhV2RvZEQwaU1UQTFJaUIyYVdWM1FtOTRQU0l3SURBZ09UVWdNVEExSWlCbWFXeHNQU0p1YjI1bElpQjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaVBnMEtQR2NnWm1sc2RHVnlQU0oxY213b0kyWnBiSFJsY2pCZlpDa2lQZzBLUEhCaGRHZ2dabWxzYkMxeWRXeGxQU0psZG1WdWIyUmtJaUJqYkdsd0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdROUlrMDBOeTQwT1RrNUlERTNMams1T1RsRE5qSXVNVE0xTlNBeE55NDVPVGs1SURjekxqazVPVGtnTWprdU9EWTBOQ0EzTXk0NU9UazVJRFEwTGpRNU9UbEROek11T1RrNU9TQTFPUzR4TXpVeklEWXlMakV6TlRVZ056QXVPVGs1T1NBME55NDBPVGs1SURjd0xqazVPVGxETXpJdU9EWTBOQ0EzTUM0NU9UazVJREl4SURVNUxqRXpOVE1nTWpFZ05EUXVORGs1T1VNeU1TQXlPUzQ0TmpRMElETXlMamcyTkRRZ01UY3VPVGs1T1NBME55NDBPVGs1SURFM0xqazVPVGxhSWlCbWFXeHNQU0lqUmtZME16WXhJaTgrRFFvOGNHRjBhQ0JtYVd4c0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdOc2FYQXRjblZzWlQwaVpYWmxibTlrWkNJZ1pEMGlUVFEzTGpRNU9Ua2dNVGN1T1RrNU9VTTJNaTR4TXpVMUlERTNMams1T1RrZ056TXVPVGs1T1NBeU9TNDROalEwSURjekxqazVPVGtnTkRRdU5EazVPVU0zTXk0NU9UazVJRFU1TGpFek5UTWdOakl1TVRNMU5TQTNNQzQ1T1RrNUlEUTNMalE1T1RrZ056QXVPVGs1T1VNek1pNDROalEwSURjd0xqazVPVGtnTWpFZ05Ua3VNVE0xTXlBeU1TQTBOQzQwT1RrNVF6SXhJREk1TGpnMk5EUWdNekl1T0RZME5DQXhOeTQ1T1RrNUlEUTNMalE1T1RrZ01UY3VPVGs1T1ZvaUlHWnBiR3c5SW5WeWJDZ2pjR0ZwYm5Rd1gyeHBibVZoY2lraUx6NE5Dand2Wno0TkNqeHdZWFJvSUdacGJHd3RjblZzWlQwaVpYWmxibTlrWkNJZ1kyeHBjQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmtQU0pOTkRNZ01DNDVPVGs1TXpaSU5USXVPVGs1T1VNMk9TNDFOamcxSURBdU9UazVPVE0ySURneUxqazVPVGtnTVRRdU5ETXhNU0E0TWk0NU9UazVJRE13TGprNU9UbFdOREF1T1RrNU9VTTRNaTQ1T1RrNUlEVTNMalUyT0RJZ05qa3VOVFk0TlNBM01DNDVPVGs0SURVeUxqazVPVGtnTnpBdU9UazVPRWcwTTBNeU5pNDBNekUxSURjd0xqazVPVGdnTVRJdU9UazVPU0ExTnk0MU5qZ3lJREV5TGprNU9Ua2dOREF1T1RrNU9WWXpNQzQ1T1RrNVF6RXlMams1T1RrZ01UUXVORE14TVNBeU5pNDBNekUxSURBdU9UazVPVE0ySURReklEQXVPVGs1T1RNMldpSWdabWxzYkQwaUkwWkdORE0yTVNJdlBnMEtQSEJoZEdnZ1ptbHNiQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmpiR2x3TFhKMWJHVTlJbVYyWlc1dlpHUWlJR1E5SWswME15QXdMams1T1Rrek5rZzFNaTQ1T1RrNVF6WTVMalUyT0RVZ01DNDVPVGs1TXpZZ09ESXVPVGs1T1NBeE5DNDBNekV4SURneUxqazVPVGtnTXpBdU9UazVPVlkwTUM0NU9UazVRemd5TGprNU9Ua2dOVGN1TlRZNE1pQTJPUzQxTmpnMUlEY3dMams1T1RnZ05USXVPVGs1T1NBM01DNDVPVGs0U0RRelF6STJMalF6TVRVZ056QXVPVGs1T0NBeE1pNDVPVGs1SURVM0xqVTJPRElnTVRJdU9UazVPU0EwTUM0NU9UazVWak13TGprNU9UbERNVEl1T1RrNU9TQXhOQzQwTXpFeElESTJMalF6TVRVZ01DNDVPVGs1TXpZZ05ETWdNQzQ1T1RrNU16WmFJaUJtYVd4c1BTSjFjbXdvSTNCaGFXNTBNVjlzYVc1bFlYSXBJaTgrRFFvOGNHRjBhQ0JtYVd4c0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdOc2FYQXRjblZzWlQwaVpYWmxibTlrWkNJZ1pEMGlUVFV4TGpRek1qSWdOREV1TmpNNU9FTTFNUzQyTkRReElEUXhMalF5TkRjZ05URXVOelV3TWlBME1TNHhOekE1SURVeExqYzFNRElnTkRBdU9EYzNORll6T0M0eE5qZzRTRFl6VmpRMkxqSTVOVEpETmpNZ05EY3VNRE01TWlBMk1pNDNNemM1SURRM0xqWTNOelFnTmpJdU1qRXpNaUEwT0M0eU1EYzFRell4TGpZNE9EY2dORGd1TnpNNE1TQTJNUzR3TlRneElEUTVMakF3TXpJZ05qQXVNekl4TmlBME9TNHdNRE15U0RNMUxqWTNPRGRETXpRdU9UUXlJRFE1TGpBd016SWdNelF1TXpFeE5DQTBPQzQzTXpneElETXpMamM0TmprZ05EZ3VNakEzTlVNek15NHlOakl5SURRM0xqWTNOelFnTXpNZ05EY3VNRE01TWlBek15QTBOaTR5T1RVeVZqTTRMakUyT0RoSU5EUXVNalZXTkRBdU9EYzNORU0wTkM0eU5TQTBNUzR4TnpBNUlEUTBMak0xTmpFZ05ERXVOREkwTnlBME5DNDFOamd5SURReExqWXpPVGhETkRRdU56Z3dNaUEwTVM0NE5UTTNJRFExTGpBek1UTWdOREV1T1RZeE15QTBOUzR6TWpFMklEUXhMamsyTVROSU5UQXVOamM0TjBNMU1DNDVOamc0SURReExqazJNVE1nTlRFdU1qSXdNU0EwTVM0NE5UTTNJRFV4TGpRek1qSWdOREV1TmpNNU9GcE5OVEF1TVRRek1TQXpPQzR4TmpnNFNEUTFMamcxTnpGV05EQXVNek0xTlVnMU1DNHhORE14VmpNNExqRTJPRGhhVFRZeUxqSXhNeklnTWpndU1UTXdNVU0yTVM0Mk9EZzNJREkzTGpVNU9Ea2dOakV1TURVNE1TQXlOeTR6TXpNNUlEWXdMak15TVRZZ01qY3VNek16T1VnMU5DNDBNamcxVmpJMExqWXlOVE5ETlRRdU5ESTROU0F5TkM0eE56TTNJRFUwTGpJM01qUWdNak11Tnprd015QTFNeTQ1TlRrNElESXpMalEzTXpkRE5UTXVOalEzTlNBeU15NHhOVGcySURVekxqSTJOemdnTWpNZ05USXVPREl4TmlBeU0wZzBNeTR4TnpnM1F6UXlMamN6TWpNZ01qTWdOREl1TXpVeU9TQXlNeTR4TlRnMklEUXlMakEwTURRZ01qTXVORGN6TjBNME1TNDNNamM0SURJekxqYzRPVGdnTkRFdU5UY3hOaUF5TkM0eE56TTNJRFF4TGpVM01UWWdNalF1TmpJMU0xWXlOeTR6TXpNNVNETTFMalkzT0RkRE16UXVPVFF5SURJM0xqTXpNemtnTXpRdU16RXhOQ0F5Tnk0MU9UZzVJRE16TGpjNE5qa2dNamd1TVRNd01VTXpNeTR5TmpJeUlESTRMalkxT1RjZ016TWdNamt1TWprM015QXpNeUF6TUM0d05ESTFWak0yTGpVME16VklOak5XTXpBdU1EUXlOVU0yTXlBeU9TNHlPVGN6SURZeUxqY3pOemtnTWpndU5qVTVOeUEyTWk0eU1UTXlJREk0TGpFek1ERmFUVFV5TGpJNE5UZ2dNamN1TXpNek9VZzBNeTQzTVRRMFZqSTFMakUyTmpkSU5USXVNamcxT0ZZeU55NHpNek01V2lJZ1ptbHNiRDBpZDJocGRHVWlMejROQ2p4a1pXWnpQZzBLUEdacGJIUmxjaUJwWkQwaVptbHNkR1Z5TUY5a0lpQjRQU0l0TXk0d05URTNObVV0TURVaUlIazlJamt1T1RrNU9EZ2lJSGRwWkhSb1BTSTVOU0lnYUdWcFoyaDBQU0k1TlNJZ1ptbHNkR1Z5Vlc1cGRITTlJblZ6WlhKVGNHRmpaVTl1VlhObElpQmpiMnh2Y2kxcGJuUmxjbkJ2YkdGMGFXOXVMV1pwYkhSbGNuTTlJbk5TUjBJaVBnMEtQR1psUm14dmIyUWdabXh2YjJRdGIzQmhZMmwwZVQwaU1DSWdjbVZ6ZFd4MFBTSkNZV05yWjNKdmRXNWtTVzFoWjJWR2FYZ2lMejROQ2p4bVpVTnZiRzl5VFdGMGNtbDRJR2x1UFNKVGIzVnlZMlZCYkhCb1lTSWdkSGx3WlQwaWJXRjBjbWw0SWlCMllXeDFaWE05SWpBZ01DQXdJREFnTUNBd0lEQWdNQ0F3SURBZ01DQXdJREFnTUNBd0lEQWdNQ0F3SURFeU55QXdJaTgrRFFvOFptVlBabVp6WlhRZ1pIazlJakV6SWk4K0RRbzhabVZIWVhWemMybGhia0pzZFhJZ2MzUmtSR1YyYVdGMGFXOXVQU0l4TUM0MUlpOCtEUW84Wm1WRGIyeHZjazFoZEhKcGVDQjBlWEJsUFNKdFlYUnlhWGdpSUhaaGJIVmxjejBpTUNBd0lEQWdNQ0F4SURBZ01DQXdJREFnTUM0eU5qWTJOamNnTUNBd0lEQWdNQ0F3TGpNME1URTNOaUF3SURBZ01DQXdMak1nTUNJdlBnMEtQR1psUW14bGJtUWdiVzlrWlQwaWJtOXliV0ZzSWlCcGJqSTlJa0poWTJ0bmNtOTFibVJKYldGblpVWnBlQ0lnY21WemRXeDBQU0psWm1abFkzUXhYMlJ5YjNCVGFHRmtiM2NpTHo0TkNqeG1aVUpzWlc1a0lHMXZaR1U5SW01dmNtMWhiQ0lnYVc0OUlsTnZkWEpqWlVkeVlYQm9hV01pSUdsdU1qMGlaV1ptWldOME1WOWtjbTl3VTJoaFpHOTNJaUJ5WlhOMWJIUTlJbk5vWVhCbElpOCtEUW84TDJacGJIUmxjajROQ2p4c2FXNWxZWEpIY21Ga2FXVnVkQ0JwWkQwaWNHRnBiblF3WDJ4cGJtVmhjaUlnZURFOUlqVXhMall6TlRFaUlIa3hQU0l4TURNdU5qTTFJaUI0TWowaU1UQTJMall6TlNJZ2VUSTlJalF3TGpNMk5Ea2lJR2R5WVdScFpXNTBWVzVwZEhNOUluVnpaWEpUY0dGalpVOXVWWE5sSWo0TkNqeHpkRzl3SUhOMGIzQXRZMjlzYjNJOUlpTkdPREEzTlRraUx6NE5Danh6ZEc5d0lHOW1abk5sZEQwaU1TSWdjM1J2Y0MxamIyeHZjajBpSTBKRE5FVTVReUl2UGcwS1BDOXNhVzVsWVhKSGNtRmthV1Z1ZEQ0TkNqeHNhVzVsWVhKSGNtRmthV1Z1ZENCcFpEMGljR0ZwYm5ReFgyeHBibVZoY2lJZ2VERTlJalV6TGpReE16SWlJSGt4UFNJeE1UTXVOREV6SWlCNE1qMGlNVEkxTGpReE15SWdlVEk5SWpNd0xqVTROamdpSUdkeVlXUnBaVzUwVlc1cGRITTlJblZ6WlhKVGNHRmpaVTl1VlhObElqNE5Danh6ZEc5d0lITjBiM0F0WTI5c2IzSTlJaU5HUmpReE5rTWlMejROQ2p4emRHOXdJRzltWm5ObGREMGlNU0lnYzNSdmNDMWpiMnh2Y2owaUkwWkdORUl5UWlJdlBnMEtQQzlzYVc1bFlYSkhjbUZrYVdWdWRENE5Dand2WkdWbWN6NE5Dand2YzNablBnMEtcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlPVFVpSUdobGFXZG9kRDBpTVRBMElpQjJhV1YzUW05NFBTSXdJREFnT1RVZ01UQTBJaUJtYVd4c1BTSnViMjVsSWlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpUGcwS1BHY2dabWxzZEdWeVBTSjFjbXdvSTJacGJIUmxjakJmWkNraVBnMEtQSEJoZEdnZ1ptbHNiQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmpiR2x3TFhKMWJHVTlJbVYyWlc1dlpHUWlJR1E5SWswME55NDFJREUyTGprNU9UbEROakl1TVRNMU5TQXhOaTQ1T1RrNUlEY3pMams1T1RrZ01qZ3VPRFkwTkNBM015NDVPVGs1SURRekxqUTVPVGxETnpNdU9UazVPU0ExT0M0eE16VXpJRFl5TGpFek5UVWdOamt1T1RrNU9TQTBOeTQxSURZNUxqazVPVGxETXpJdU9EWTBOQ0EyT1M0NU9UazVJREl4SURVNExqRXpOVE1nTWpFZ05ETXVORGs1T1VNeU1TQXlPQzQ0TmpRMElETXlMamcyTkRRZ01UWXVPVGs1T1NBME55NDFJREUyTGprNU9UbGFJaUJtYVd4c1BTSWpSa1kwTXpZeElpOCtEUW84Y0dGMGFDQm1hV3hzTFhKMWJHVTlJbVYyWlc1dlpHUWlJR05zYVhBdGNuVnNaVDBpWlhabGJtOWtaQ0lnWkQwaVRUUTNMalVnTVRZdU9UazVPVU0yTWk0eE16VTFJREUyTGprNU9Ua2dOek11T1RrNU9TQXlPQzQ0TmpRMElEY3pMams1T1RrZ05ETXVORGs1T1VNM015NDVPVGs1SURVNExqRXpOVE1nTmpJdU1UTTFOU0EyT1M0NU9UazVJRFEzTGpVZ05qa3VPVGs1T1VNek1pNDROalEwSURZNUxqazVPVGtnTWpFZ05UZ3VNVE0xTXlBeU1TQTBNeTQwT1RrNVF6SXhJREk0TGpnMk5EUWdNekl1T0RZME5DQXhOaTQ1T1RrNUlEUTNMalVnTVRZdU9UazVPVm9pSUdacGJHdzlJblZ5YkNnamNHRnBiblF3WDJ4cGJtVmhjaWtpTHo0TkNqd3ZaejROQ2p4d1lYUm9JR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0lnWTJ4cGNDMXlkV3hsUFNKbGRtVnViMlJrSWlCa1BTSk5ORElnTUM0NU9UazVNelpJTlRFdU9UazVPVU0yT0M0MU5qZzFJREF1T1RrNU9UTTJJRGd4TGprNU9Ua2dNVFF1TkRNeE1TQTRNUzQ1T1RrNUlETXdMams1T1RsV05EQXVPVGs1T1VNNE1TNDVPVGs1SURVM0xqVTJPRElnTmpndU5UWTROU0EzTUM0NU9UazRJRFV4TGprNU9Ua2dOekF1T1RrNU9FZzBNa015TlM0ME16RTFJRGN3TGprNU9UZ2dNVEV1T1RrNU9TQTFOeTQxTmpneUlERXhMams1T1RrZ05EQXVPVGs1T1ZZek1DNDVPVGs1UXpFeExqazVPVGtnTVRRdU5ETXhNU0F5TlM0ME16RTFJREF1T1RrNU9UTTJJRFF5SURBdU9UazVPVE0yV2lJZ1ptbHNiRDBpSTBaR05ETTJNU0l2UGcwS1BIQmhkR2dnWm1sc2JDMXlkV3hsUFNKbGRtVnViMlJrSWlCamJHbHdMWEoxYkdVOUltVjJaVzV2WkdRaUlHUTlJazAwTWlBd0xqazVPVGt6TmtnMU1TNDVPVGs1UXpZNExqVTJPRFVnTUM0NU9UazVNellnT0RFdU9UazVPU0F4TkM0ME16RXhJRGd4TGprNU9Ua2dNekF1T1RrNU9WWTBNQzQ1T1RrNVF6Z3hMams1T1RrZ05UY3VOVFk0TWlBMk9DNDFOamcxSURjd0xqazVPVGdnTlRFdU9UazVPU0EzTUM0NU9UazRTRFF5UXpJMUxqUXpNVFVnTnpBdU9UazVPQ0F4TVM0NU9UazVJRFUzTGpVMk9ESWdNVEV1T1RrNU9TQTBNQzQ1T1RrNVZqTXdMams1T1RsRE1URXVPVGs1T1NBeE5DNDBNekV4SURJMUxqUXpNVFVnTUM0NU9UazVNellnTkRJZ01DNDVPVGs1TXpaYUlpQm1hV3hzUFNKMWNtd29JM0JoYVc1ME1WOXNhVzVsWVhJcElpOCtEUW84Y0dGMGFDQm1hV3hzTFhKMWJHVTlJbVYyWlc1dlpHUWlJR05zYVhBdGNuVnNaVDBpWlhabGJtOWtaQ0lnWkQwaVRUVTFMamswT1RJZ016RXVNREF5TmtNMU5TNDROVGMxSURNd0xqYzVOeklnTlRVdU5qWXdNaUF6TUM0Mk5qVTFJRFUxTGpRME1qa2dNekF1TmpZMU5VZzBPQzQ0TWpBNVREVTFMak0xTmpNZ01Ua3VPRGswUXpVMUxqUTJOVElnTVRrdU56RTBOQ0ExTlM0ME56RTRJREU1TGpRNE55QTFOUzR6TnpNMUlERTVMak13TVRWRE5UVXVNamMxTWlBeE9TNHhNVFEwSURVMUxqQTROelFnTVRndU9UazRPQ0ExTkM0NE9EUWdNVGd1T1RrNE9FZzBOUzQ1TkRJNVF6UTFMamN6TVRJZ01UZ3VPVGs0T0NBME5TNDFNemM0SURFNUxqRXlNellnTkRVdU5EUXlPQ0F4T1M0ek1qRTBURE0zTGpBMk1EWWdNell1T0RJeE5FTXpOaTQ1TnpRZ016Y3VNREF5TVNBek5pNDVPRE0xSURNM0xqSXhOallnTXpjdU1EZzFNU0F6Tnk0ek9EZzJRek0zTGpFNE56UWdNemN1TlRZd055QXpOeTR6TmpZM0lETTNMalkyTlNBek55NDFOakEzSURNM0xqWTJOVWcwTXk0ek1EZE1NemN1TURRMU5TQTFNeTR4T0RreFF6TTJMamt6T0RjZ05UTXVORFUwTnlBek55NHdNek0zSURVekxqYzJNak1nTXpjdU1qWTVJRFV6TGpreE16TkRNemN1TXpVNU5DQTFNeTQ1TnpBeklETTNMalEySURVekxqazVPRGdnTXpjdU5UWXdNU0ExTXk0NU9UZzRRek0zTGpjeU1EUWdOVE11T1RrNE9DQXpOeTQ0TnpnMklEVXpMamt5TmpnZ016Y3VPVGc0TVNBMU15NDNPVEU0VERVMUxqZzNNRE1nTXpFdU5qSTFNa00xTmk0d01UQTJJRE14TGpRMU1UVWdOVFl1TURRd055QXpNUzR5TURnMUlEVTFMamswT1RJZ016RXVNREF5TmxvaUlHWnBiR3c5SW5kb2FYUmxJaTgrRFFvOFpHVm1jejROQ2p4bWFXeDBaWElnYVdROUltWnBiSFJsY2pCZlpDSWdlRDBpTFRNdU1EVXhOelpsTFRBMUlpQjVQU0k0TGprNU9UZzRJaUIzYVdSMGFEMGlPVFVpSUdobGFXZG9kRDBpT1RVaUlHWnBiSFJsY2xWdWFYUnpQU0oxYzJWeVUzQmhZMlZQYmxWelpTSWdZMjlzYjNJdGFXNTBaWEp3YjJ4aGRHbHZiaTFtYVd4MFpYSnpQU0p6VWtkQ0lqNE5DanhtWlVac2IyOWtJR1pzYjI5a0xXOXdZV05wZEhrOUlqQWlJSEpsYzNWc2REMGlRbUZqYTJkeWIzVnVaRWx0WVdkbFJtbDRJaTgrRFFvOFptVkRiMnh2Y2sxaGRISnBlQ0JwYmowaVUyOTFjbU5sUVd4d2FHRWlJSFI1Y0dVOUltMWhkSEpwZUNJZ2RtRnNkV1Z6UFNJd0lEQWdNQ0F3SURBZ01DQXdJREFnTUNBd0lEQWdNQ0F3SURBZ01DQXdJREFnTUNBeE1qY2dNQ0l2UGcwS1BHWmxUMlptYzJWMElHUjVQU0l4TXlJdlBnMEtQR1psUjJGMWMzTnBZVzVDYkhWeUlITjBaRVJsZG1saGRHbHZiajBpTVRBdU5TSXZQZzBLUEdabFEyOXNiM0pOWVhSeWFYZ2dkSGx3WlQwaWJXRjBjbWw0SWlCMllXeDFaWE05SWpBZ01DQXdJREFnTUM0NE9UZ3dNemtnTUNBd0lEQWdNQ0F3TGpFeE56WTBOeUF3SURBZ01DQXdJREF1TkRNMU1qazBJREFnTUNBd0lEQXVNeUF3SWk4K0RRbzhabVZDYkdWdVpDQnRiMlJsUFNKdWIzSnRZV3dpSUdsdU1qMGlRbUZqYTJkeWIzVnVaRWx0WVdkbFJtbDRJaUJ5WlhOMWJIUTlJbVZtWm1WamRERmZaSEp2Y0ZOb1lXUnZkeUl2UGcwS1BHWmxRbXhsYm1RZ2JXOWtaVDBpYm05eWJXRnNJaUJwYmowaVUyOTFjbU5sUjNKaGNHaHBZeUlnYVc0eVBTSmxabVpsWTNReFgyUnliM0JUYUdGa2IzY2lJSEpsYzNWc2REMGljMmhoY0dVaUx6NE5Dand2Wm1sc2RHVnlQZzBLUEd4cGJtVmhja2R5WVdScFpXNTBJR2xrUFNKd1lXbHVkREJmYkdsdVpXRnlJaUI0TVQwaU5URXVOak0xTVNJZ2VURTlJakV3TWk0Mk16VWlJSGd5UFNJeE1EWXVOak0xSWlCNU1qMGlNemt1TXpZME9TSWdaM0poWkdsbGJuUlZibWwwY3owaWRYTmxjbE53WVdObFQyNVZjMlVpUGcwS1BITjBiM0FnYzNSdmNDMWpiMnh2Y2owaUkwWTRNRGMxT1NJdlBnMEtQSE4wYjNBZ2IyWm1jMlYwUFNJeElpQnpkRzl3TFdOdmJHOXlQU0lqUWtNMFJUbERJaTgrRFFvOEwyeHBibVZoY2tkeVlXUnBaVzUwUGcwS1BHeHBibVZoY2tkeVlXUnBaVzUwSUdsa1BTSndZV2x1ZERGZmJHbHVaV0Z5SWlCNE1UMGlOVEl1TkRFek1pSWdlVEU5SWpFeE15NDBNVE1pSUhneVBTSXhNalF1TkRFeklpQjVNajBpTXpBdU5UZzJPQ0lnWjNKaFpHbGxiblJWYm1sMGN6MGlkWE5sY2xOd1lXTmxUMjVWYzJVaVBnMEtQSE4wYjNBZ2MzUnZjQzFqYjJ4dmNqMGlJMFk0TURjMU9TSXZQZzBLUEhOMGIzQWdiMlptYzJWMFBTSXhJaUJ6ZEc5d0xXTnZiRzl5UFNJalFrTTBSVGxESWk4K0RRbzhMMnhwYm1WaGNrZHlZV1JwWlc1MFBnMEtQQzlrWldaelBnMEtQQzl6ZG1jK0RRbz1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlPVFVpSUdobGFXZG9kRDBpTVRBMElpQjJhV1YzUW05NFBTSXdJREFnT1RVZ01UQTBJaUJtYVd4c1BTSnViMjVsSWlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpUGcwS1BHY2dabWxzZEdWeVBTSjFjbXdvSTJacGJIUmxjakJmWkNraVBnMEtQSEJoZEdnZ1ptbHNiQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmpiR2x3TFhKMWJHVTlJbVYyWlc1dlpHUWlJR1E5SWswME55NDBPVGs1SURFMkxqazVPVGxETmpJdU1UTTFOQ0F4Tmk0NU9UazVJRGMwSURJNExqZzJORFFnTnpRZ05ETXVORGs1T1VNM05DQTFPQzR4TXpVeklEWXlMakV6TlRRZ05qa3VPVGs1T1NBME55NDBPVGs1SURZNUxqazVPVGxETXpJdU9EWTBOQ0EyT1M0NU9UazVJREl4SURVNExqRXpOVE1nTWpFZ05ETXVORGs1T1VNeU1TQXlPQzQ0TmpRMElETXlMamcyTkRRZ01UWXVPVGs1T1NBME55NDBPVGs1SURFMkxqazVPVGxhSWlCbWFXeHNQU0lqUmtZME16WXhJaTgrRFFvOEwyYytEUW84Y0dGMGFDQm1hV3hzTFhKMWJHVTlJbVYyWlc1dlpHUWlJR05zYVhBdGNuVnNaVDBpWlhabGJtOWtaQ0lnWkQwaVRUUXhMams1T1RrZ01DNDVPVGs1TXpaSU5USkROamd1TlRZNE5TQXdMams1T1Rrek5pQTRNaUF4TkM0ME16RXhJRGd5SURNd0xqazVPVGxXTkRBdU9UazVPVU00TWlBMU55NDFOamd5SURZNExqVTJPRFVnTnpBdU9UazVPQ0ExTWlBM01DNDVPVGs0U0RReExqazVPVGxETWpVdU5ETXhOQ0EzTUM0NU9UazRJREV4TGprNU9Ua2dOVGN1TlRZNE1pQXhNUzQ1T1RrNUlEUXdMams1T1RsV016QXVPVGs1T1VNeE1TNDVPVGs1SURFMExqUXpNVEVnTWpVdU5ETXhOQ0F3TGprNU9Ua3pOaUEwTVM0NU9UazVJREF1T1RrNU9UTTJXaUlnWm1sc2JEMGlJMFpHTkRNMk1TSXZQZzBLUEhCaGRHZ2dabWxzYkMxeWRXeGxQU0psZG1WdWIyUmtJaUJqYkdsd0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdROUlrMDBNUzQ1T1RrNUlEQXVPVGs1T1RNMlNEVXlRelk0TGpVMk9EVWdNQzQ1T1RrNU16WWdPRElnTVRRdU5ETXhNU0E0TWlBek1DNDVPVGs1VmpRd0xqazVPVGxET0RJZ05UY3VOVFk0TWlBMk9DNDFOamcxSURjd0xqazVPVGdnTlRJZ056QXVPVGs1T0VnME1TNDVPVGs1UXpJMUxqUXpNVFFnTnpBdU9UazVPQ0F4TVM0NU9UazVJRFUzTGpVMk9ESWdNVEV1T1RrNU9TQTBNQzQ1T1RrNVZqTXdMams1T1RsRE1URXVPVGs1T1NBeE5DNDBNekV4SURJMUxqUXpNVFFnTUM0NU9UazVNellnTkRFdU9UazVPU0F3TGprNU9Ua3pObG9pSUdacGJHdzlJblZ5YkNnamNHRnBiblF3WDJ4cGJtVmhjaWtpTHo0TkNqeHdZWFJvSUdacGJHd3RjblZzWlQwaVpYWmxibTlrWkNJZ1kyeHBjQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmtQU0pOTmpRdU5UUTBNU0F6TVM0NE5UZzFRelkwTGpVME9UZ2dNekV1T1RZd055QTJOQzQxTkRJMElETXlMakEyTkRRZ05qUXVOVEUyT0NBek1pNHhOamczVERZeUxqSXpORFlnTkRFdU16TTBPRU0yTWk0eE1UazBJRFF4TGpjNU5qRWdOakV1TnpBM01pQTBNaTR4TWpFMElEWXhMakl6TXpRZ05ESXVNVEkwTVV3ME55NDFNems1SURReUxqRTVNelJETkRjdU5UTTRNaUEwTWk0eE9UTTBJRFEzTGpVek5qUWdOREl1TVRrek5DQTBOeTQxTXpRMklEUXlMakU1TXpSSU16TXVPRFF4TVVNek15NHpOalEySURReUxqRTVNelFnTXpJdU9UUTVOaUEwTVM0NE5qY3hJRE15TGpnek5EWWdOREV1TkRBek1Vd3pNQzQxTlRJeklETXlMakl3TWtNek1DNDFNalU1SURNeUxqQTVOVFlnTXpBdU5URTROQ0F6TVM0NU9EZzJJRE13TGpVeU5TQXpNUzQ0T0RNNFF6STVMalkwTWpFZ016RXVOakEwTnlBeU9TQXpNQzQzTnpVeUlESTVJREk1TGpjNU56ZERNamtnTWpndU5Ua3dPQ0F5T1M0NU56Y3lJREkzTGpZd09UWWdNekV1TVRjNE5TQXlOeTQyTURrMlF6TXlMak0zT1RnZ01qY3VOakE1TmlBek15NHpOVGNnTWpndU5Ua3dPQ0F6TXk0ek5UY2dNamt1TnprM04wTXpNeTR6TlRjZ016QXVORGMyT0NBek15NHdORGNnTXpFdU1EZzBNeUF6TWk0MU5qRTJJRE14TGpRNE5qUk1NelV1TkRFNUlETTBMak0zTmpoRE16WXVNVFF4TWlBek5TNHhNRGMwSURNM0xqRTBNeklnTXpVdU5USTJPQ0F6T0M0eE5qZzBJRE0xTGpVeU5qaERNemt1TXpnd055QXpOUzQxTWpZNElEUXdMalV6TmpRZ016UXVPVFE0TXlBME1TNHlOalF6SURNekxqazRURFExTGprMk1ESWdNamN1TnpNeU1VTTBOUzQxTmpVNElESTNMak16TmpVZ05EVXVNekl4TkNBeU5pNDNPRGszSURRMUxqTXlNVFFnTWpZdU1UZzJOVU0wTlM0ek1qRTBJREkwTGprNElEUTJMakk1T0RZZ01qTXVPVGs0TXlBME55NDBPVGs1SURJekxqazVPRE5ETkRndU56QXhNaUF5TXk0NU9UZ3pJRFE1TGpZM09EUWdNalF1T1RnZ05Ea3VOamM0TkNBeU5pNHhPRFkxUXpRNUxqWTNPRFFnTWpZdU56Y3hOQ0EwT1M0ME5EY3lJREkzTGpNd01pQTBPUzR3TnpNeklESTNMalk1TlVNME9TNHdOelExSURJM0xqWTVOamNnTkRrdU1EYzJNU0F5Tnk0Mk9UZ3pJRFE1TGpBM056TWdNamN1TmprNU9VdzFNeTQzTXpreElETXpMamsyTkRsRE5UUXVORFkyT0NBek5DNDVOREkwSURVMUxqWXlOallnTXpVdU5USTJPQ0ExTmk0NE5ESXpJRE0xTGpVeU5qaEROVGN1T0RjM0lETTFMalV5TmpnZ05UZ3VPRFVnTXpVdU1USXhPU0ExT1M0MU9ERTBJRE0wTGpNNE56Vk1Oakl1TkRVMk9DQXpNUzQwT1RrNVF6WXhMamsyTVRJZ016RXVNRGs0TXlBMk1TNDJOREk1SURNd0xqUTROVFFnTmpFdU5qUXlPU0F5T1M0M09UYzNRell4TGpZME1qa2dNamd1TlRrd09DQTJNaTQyTWpBeUlESTNMall3T1RZZ05qTXVPREl4TlNBeU55NDJNRGsyUXpZMUxqQXlNamNnTWpjdU5qQTVOaUEyTmlBeU9DNDFPVEE0SURZMklESTVMamM1TnpkRE5qWWdNekF1TnpRNE9DQTJOUzR6T1RBMklETXhMalUxT0RVZ05qUXVOVFEwTVNBek1TNDROVGcxV2swMk1pNHdNVEU0SURRMUxqUTFOamxETmpJdU1ERXhPQ0EwTkM0NE9ESXhJRFl4TGpVME56TWdORFF1TkRFMU5TQTJNQzQ1TnpRMElEUTBMalF4TlRWSU16UXVNVFF3T0VNek15NDFOamM1SURRMExqUXhOVFVnTXpNdU1UQXpOQ0EwTkM0NE9ESXhJRE16TGpFd016UWdORFV1TkRVMk9WWTBOeTQ1TlRZNVF6TXpMakV3TXpRZ05EZ3VOVE15TnlBek15NDFOamM1SURRNExqazVPRGdnTXpRdU1UUXdPQ0EwT0M0NU9UZzRTRFl3TGprM05EUkROakV1TlRRM015QTBPQzQ1T1RnNElEWXlMakF4TVRnZ05EZ3VOVE15TnlBMk1pNHdNVEU0SURRM0xqazFOamxXTkRVdU5EVTJPVm9pSUdacGJHdzlJbmRvYVhSbElpOCtEUW84WkdWbWN6NE5DanhtYVd4MFpYSWdhV1E5SW1acGJIUmxjakJmWkNJZ2VEMGlNUzR4TkRRME1XVXRNRFVpSUhrOUlqZ3VPVGs1T0RnaUlIZHBaSFJvUFNJNU5TSWdhR1ZwWjJoMFBTSTVOU0lnWm1sc2RHVnlWVzVwZEhNOUluVnpaWEpUY0dGalpVOXVWWE5sSWlCamIyeHZjaTFwYm5SbGNuQnZiR0YwYVc5dUxXWnBiSFJsY25NOUluTlNSMElpUGcwS1BHWmxSbXh2YjJRZ1pteHZiMlF0YjNCaFkybDBlVDBpTUNJZ2NtVnpkV3gwUFNKQ1lXTnJaM0p2ZFc1a1NXMWhaMlZHYVhnaUx6NE5DanhtWlVOdmJHOXlUV0YwY21sNElHbHVQU0pUYjNWeVkyVkJiSEJvWVNJZ2RIbHdaVDBpYldGMGNtbDRJaUIyWVd4MVpYTTlJakFnTUNBd0lEQWdNQ0F3SURBZ01DQXdJREFnTUNBd0lEQWdNQ0F3SURBZ01DQXdJREV5TnlBd0lpOCtEUW84Wm1WUFptWnpaWFFnWkhrOUlqRXpJaTgrRFFvOFptVkhZWFZ6YzJsaGJrSnNkWElnYzNSa1JHVjJhV0YwYVc5dVBTSXhNQzQxSWk4K0RRbzhabVZEYjJ4dmNrMWhkSEpwZUNCMGVYQmxQU0p0WVhSeWFYZ2lJSFpoYkhWbGN6MGlNQ0F3SURBZ01DQXdMams1TWpFMU55QXdJREFnTUNBd0lEQXVNelExTURrNElEQWdNQ0F3SURBZ01DNDBORGN3TlRrZ01DQXdJREFnTUM0eklEQWlMejROQ2p4bVpVSnNaVzVrSUcxdlpHVTlJbTV2Y20xaGJDSWdhVzR5UFNKQ1lXTnJaM0p2ZFc1a1NXMWhaMlZHYVhnaUlISmxjM1ZzZEQwaVpXWm1aV04wTVY5a2NtOXdVMmhoWkc5M0lpOCtEUW84Wm1WQ2JHVnVaQ0J0YjJSbFBTSnViM0p0WVd3aUlHbHVQU0pUYjNWeVkyVkhjbUZ3YUdsaklpQnBiakk5SW1WbVptVmpkREZmWkhKdmNGTm9ZV1J2ZHlJZ2NtVnpkV3gwUFNKemFHRndaU0l2UGcwS1BDOW1hV3gwWlhJK0RRbzhiR2x1WldGeVIzSmhaR2xsYm5RZ2FXUTlJbkJoYVc1ME1GOXNhVzVsWVhJaUlIZ3hQU0kxTWk0ME1UTXlJaUI1TVQwaU1URXpMalF4TXlJZ2VESTlJakV5TkM0ME1UTWlJSGt5UFNJek1DNDFPRFk0SWlCbmNtRmthV1Z1ZEZWdWFYUnpQU0oxYzJWeVUzQmhZMlZQYmxWelpTSStEUW84YzNSdmNDQnpkRzl3TFdOdmJHOXlQU0lqUmtZMU9EVTRJaTgrRFFvOGMzUnZjQ0J2Wm1aelpYUTlJakVpSUhOMGIzQXRZMjlzYjNJOUlpTkdPRFUzUVRZaUx6NE5Dand2YkdsdVpXRnlSM0poWkdsbGJuUStEUW84TDJSbFpuTStEUW84TDNOMlp6NE5DZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpT1RVaUlHaGxhV2RvZEQwaU1UQTFJaUIyYVdWM1FtOTRQU0l3SURBZ09UVWdNVEExSWlCbWFXeHNQU0p1YjI1bElpQjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaVBnMEtQR2NnWm1sc2RHVnlQU0oxY213b0kyWnBiSFJsY2pCZlpDa2lQZzBLUEhCaGRHZ2dabWxzYkMxeWRXeGxQU0psZG1WdWIyUmtJaUJqYkdsd0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdROUlrMDBOeTQwT1RrNUlERTNMams1T1RsRE5qSXVNVE0xTkNBeE55NDVPVGs1SURjekxqazVPVGtnTWprdU9EWTBOQ0EzTXk0NU9UazVJRFEwTGpRNU9UbEROek11T1RrNU9TQTFPUzR4TXpVeklEWXlMakV6TlRRZ056QXVPVGs1T1NBME55NDBPVGs1SURjd0xqazVPVGxETXpJdU9EWTBOQ0EzTUM0NU9UazVJREl3TGprNU9Ua2dOVGt1TVRNMU15QXlNQzQ1T1RrNUlEUTBMalE1T1RsRE1qQXVPVGs1T1NBeU9TNDROalEwSURNeUxqZzJORFFnTVRjdU9UazVPU0EwTnk0ME9UazVJREUzTGprNU9UbGFJaUJtYVd4c1BTSWpSa1kwTXpZeElpOCtEUW84Y0dGMGFDQm1hV3hzTFhKMWJHVTlJbVYyWlc1dlpHUWlJR05zYVhBdGNuVnNaVDBpWlhabGJtOWtaQ0lnWkQwaVRUUTNMalE1T1RrZ01UY3VPVGs1T1VNMk1pNHhNelUwSURFM0xqazVPVGtnTnpNdU9UazVPU0F5T1M0NE5qUTBJRGN6TGprNU9Ua2dORFF1TkRrNU9VTTNNeTQ1T1RrNUlEVTVMakV6TlRNZ05qSXVNVE0xTkNBM01DNDVPVGs1SURRM0xqUTVPVGtnTnpBdU9UazVPVU16TWk0NE5qUTBJRGN3TGprNU9Ua2dNakF1T1RrNU9TQTFPUzR4TXpVeklESXdMams1T1RrZ05EUXVORGs1T1VNeU1DNDVPVGs1SURJNUxqZzJORFFnTXpJdU9EWTBOQ0F4Tnk0NU9UazVJRFEzTGpRNU9Ua2dNVGN1T1RrNU9Wb2lJR1pwYkd3OUluVnliQ2dqY0dGcGJuUXdYMnhwYm1WaGNpa2lMejROQ2p3dlp6NE5Danh3WVhSb0lHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSWdZMnhwY0MxeWRXeGxQU0psZG1WdWIyUmtJaUJrUFNKTk5ESXVPVGs1T1NBd0xqazVPVGt6TmtnMU0wTTJPUzQxTmpnMUlEQXVPVGs1T1RNMklEZ3pJREUwTGpRek1URWdPRE1nTXpBdU9UazVPVlkwTUM0NU9UazVRemd6SURVM0xqVTJPRElnTmprdU5UWTROU0EzTUM0NU9UazRJRFV6SURjd0xqazVPVGhJTkRJdU9UazVPVU15Tmk0ME16RTBJRGN3TGprNU9UZ2dNVEl1T1RrNU9TQTFOeTQxTmpneUlERXlMams1T1RrZ05EQXVPVGs1T1ZZek1DNDVPVGs1UXpFeUxqazVPVGtnTVRRdU5ETXhNU0F5Tmk0ME16RTBJREF1T1RrNU9UTTJJRFF5TGprNU9Ua2dNQzQ1T1RrNU16WmFJaUJtYVd4c1BTSWpSa1kwTXpZeElpOCtEUW84Y0dGMGFDQm1hV3hzTFhKMWJHVTlJbVYyWlc1dlpHUWlJR05zYVhBdGNuVnNaVDBpWlhabGJtOWtaQ0lnWkQwaVRUUXlMams1T1RrZ01DNDVPVGs1TXpaSU5UTkROamt1TlRZNE5TQXdMams1T1Rrek5pQTRNeUF4TkM0ME16RXhJRGd6SURNd0xqazVPVGxXTkRBdU9UazVPVU00TXlBMU55NDFOamd5SURZNUxqVTJPRFVnTnpBdU9UazVPQ0ExTXlBM01DNDVPVGs0U0RReUxqazVPVGxETWpZdU5ETXhOQ0EzTUM0NU9UazRJREV5TGprNU9Ua2dOVGN1TlRZNE1pQXhNaTQ1T1RrNUlEUXdMams1T1RsV016QXVPVGs1T1VNeE1pNDVPVGs1SURFMExqUXpNVEVnTWpZdU5ETXhOQ0F3TGprNU9Ua3pOaUEwTWk0NU9UazVJREF1T1RrNU9UTTJXaUlnWm1sc2JEMGlkWEpzS0NOd1lXbHVkREZmYkdsdVpXRnlLU0l2UGcwS1BIQmhkR2dnWm1sc2JDMXlkV3hsUFNKbGRtVnViMlJrSWlCamJHbHdMWEoxYkdVOUltVjJaVzV2WkdRaUlHUTlJazAyTUM0d09UazVJREl4TGprNU9UUklNell1T1VNek5TNHpNRFE1SURJeExqazVPVFFnTXpNdU9UazVPU0F5TXk0ek1ETTNJRE16TGprNU9Ua2dNalF1T0RrNE9GWTFNQzQ1T1RnNFRETTVMamM1T1RrZ05EVXVNVGs0T0VnMk1DNHdPVGs1UXpZeExqWTVOU0EwTlM0eE9UZzRJRFl5TGprNU9Ua2dORE11T0RrMElEWXlMams1T1RrZ05ESXVNams0T0ZZeU5DNDRPVGc0UXpZeUxqazVPVGtnTWpNdU16QXpOeUEyTVM0Mk9UVWdNakV1T1RrNU5DQTJNQzR3T1RrNUlESXhMams1T1RSYUlpQm1hV3hzUFNJalJrVkdRVVpESWk4K0RRbzhaR1ZtY3o0TkNqeG1hV3gwWlhJZ2FXUTlJbVpwYkhSbGNqQmZaQ0lnZUQwaUxUa3VPVEU0TWpGbExUQTFJaUI1UFNJNUxqazVPVGc0SWlCM2FXUjBhRDBpT1RVaUlHaGxhV2RvZEQwaU9UVWlJR1pwYkhSbGNsVnVhWFJ6UFNKMWMyVnlVM0JoWTJWUGJsVnpaU0lnWTI5c2IzSXRhVzUwWlhKd2IyeGhkR2x2YmkxbWFXeDBaWEp6UFNKelVrZENJajROQ2p4bVpVWnNiMjlrSUdac2IyOWtMVzl3WVdOcGRIazlJakFpSUhKbGMzVnNkRDBpUW1GamEyZHliM1Z1WkVsdFlXZGxSbWw0SWk4K0RRbzhabVZEYjJ4dmNrMWhkSEpwZUNCcGJqMGlVMjkxY21ObFFXeHdhR0VpSUhSNWNHVTlJbTFoZEhKcGVDSWdkbUZzZFdWelBTSXdJREFnTUNBd0lEQWdNQ0F3SURBZ01DQXdJREFnTUNBd0lEQWdNQ0F3SURBZ01DQXhNamNnTUNJdlBnMEtQR1psVDJabWMyVjBJR1I1UFNJeE15SXZQZzBLUEdabFIyRjFjM05wWVc1Q2JIVnlJSE4wWkVSbGRtbGhkR2x2YmowaU1UQXVOU0l2UGcwS1BHWmxRMjlzYjNKTllYUnlhWGdnZEhsd1pUMGliV0YwY21sNElpQjJZV3gxWlhNOUlqQWdNQ0F3SURBZ01DNDVORGt3TWlBd0lEQWdNQ0F3SURBdU5UQXhPVFl4SURBZ01DQXdJREFnTUM0eU56UTFNU0F3SURBZ01DQXdMak1nTUNJdlBnMEtQR1psUW14bGJtUWdiVzlrWlQwaWJtOXliV0ZzSWlCcGJqSTlJa0poWTJ0bmNtOTFibVJKYldGblpVWnBlQ0lnY21WemRXeDBQU0psWm1abFkzUXhYMlJ5YjNCVGFHRmtiM2NpTHo0TkNqeG1aVUpzWlc1a0lHMXZaR1U5SW01dmNtMWhiQ0lnYVc0OUlsTnZkWEpqWlVkeVlYQm9hV01pSUdsdU1qMGlaV1ptWldOME1WOWtjbTl3VTJoaFpHOTNJaUJ5WlhOMWJIUTlJbk5vWVhCbElpOCtEUW84TDJacGJIUmxjajROQ2p4c2FXNWxZWEpIY21Ga2FXVnVkQ0JwWkQwaWNHRnBiblF3WDJ4cGJtVmhjaUlnZURFOUlqVXhMall6TlRFaUlIa3hQU0l4TURNdU5qTTFJaUI0TWowaU1UQTJMall6TlNJZ2VUSTlJalF3TGpNMk5Ea2lJR2R5WVdScFpXNTBWVzVwZEhNOUluVnpaWEpUY0dGalpVOXVWWE5sSWo0TkNqeHpkRzl3SUhOMGIzQXRZMjlzYjNJOUlpTkdPREEzTlRraUx6NE5Danh6ZEc5d0lHOW1abk5sZEQwaU1TSWdjM1J2Y0MxamIyeHZjajBpSTBKRE5FVTVReUl2UGcwS1BDOXNhVzVsWVhKSGNtRmthV1Z1ZEQ0TkNqeHNhVzVsWVhKSGNtRmthV1Z1ZENCcFpEMGljR0ZwYm5ReFgyeHBibVZoY2lJZ2VERTlJalV6TGpReE16SWlJSGt4UFNJeE1UTXVOREV6SWlCNE1qMGlNVEkxTGpReE15SWdlVEk5SWpNd0xqVTROamdpSUdkeVlXUnBaVzUwVlc1cGRITTlJblZ6WlhKVGNHRmpaVTl1VlhObElqNE5Danh6ZEc5d0lITjBiM0F0WTI5c2IzSTlJaU5HTkRaQ05EVWlMejROQ2p4emRHOXdJRzltWm5ObGREMGlNU0lnYzNSdmNDMWpiMnh2Y2owaUkwVkZRVGcwT1NJdlBnMEtQQzlzYVc1bFlYSkhjbUZrYVdWdWRENE5Dand2WkdWbWN6NE5Dand2YzNablBnMEtcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlPVFlpSUdobGFXZG9kRDBpTVRBMElpQjJhV1YzUW05NFBTSXdJREFnT1RZZ01UQTBJaUJtYVd4c1BTSnViMjVsSWlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpUGcwS1BHY2dabWxzZEdWeVBTSjFjbXdvSTJacGJIUmxjakJmWkNraVBnMEtQSEJoZEdnZ1ptbHNiQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmpiR2x3TFhKMWJHVTlJbVYyWlc1dlpHUWlJR1E5SWswME9DNHlNVFF5SURFMkxqazVPVGxETmpJdU9ETTJOeUF4Tmk0NU9UazVJRGMwTGpZNU1EVWdNamd1T0RZME5DQTNOQzQyT1RBMUlEUXpMalE1T1RsRE56UXVOamt3TlNBMU9DNHhNelV6SURZeUxqZ3pOamNnTmprdU9UazVPU0EwT0M0eU1UUXlJRFk1TGprNU9UbERNek11TlRreE9TQTJPUzQ1T1RrNUlESXhMamN6T0RFZ05UZ3VNVE0xTXlBeU1TNDNNemd4SURRekxqUTVPVGxETWpFdU56TTRNU0F5T0M0NE5qUTBJRE16TGpVNU1Ua2dNVFl1T1RrNU9TQTBPQzR5TVRReUlERTJMams1T1RsYUlpQm1hV3hzUFNJalJrWTBNell4SWk4K0RRbzhjR0YwYUNCbWFXeHNMWEoxYkdVOUltVjJaVzV2WkdRaUlHTnNhWEF0Y25Wc1pUMGlaWFpsYm05a1pDSWdaRDBpVFRRNExqSXhORElnTVRZdU9UazVPVU0yTWk0NE16WTNJREUyTGprNU9Ua2dOelF1Tmprd05TQXlPQzQ0TmpRMElEYzBMalk1TURVZ05ETXVORGs1T1VNM05DNDJPVEExSURVNExqRXpOVE1nTmpJdU9ETTJOeUEyT1M0NU9UazVJRFE0TGpJeE5ESWdOamt1T1RrNU9VTXpNeTQxT1RFNUlEWTVMams1T1RrZ01qRXVOek00TVNBMU9DNHhNelV6SURJeExqY3pPREVnTkRNdU5EazVPVU15TVM0M016Z3hJREk0TGpnMk5EUWdNek11TlRreE9TQXhOaTQ1T1RrNUlEUTRMakl4TkRJZ01UWXVPVGs1T1ZvaUlHWnBiR3c5SW5WeWJDZ2pjR0ZwYm5Rd1gyeHBibVZoY2lraUx6NE5Dand2Wno0TkNqeHdZWFJvSUdacGJHd3RjblZzWlQwaVpYWmxibTlrWkNJZ1kyeHBjQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmtQU0pOTkRJdU56SXdNaUF3TGprNU9Ua3pOa2cxTWk0M01URXlRelk1TGpJMk5Ea2dNQzQ1T1RrNU16WWdPREl1TmpnME15QXhOQzQwTXpFeElEZ3lMalk0TkRNZ016QXVPVGs1T1ZZME1DNDVPVGs1UXpneUxqWTRORE1nTlRjdU5UWTRNaUEyT1M0eU5qUTVJRGN3TGprNU9UZ2dOVEl1TnpFeE1pQTNNQzQ1T1RrNFNEUXlMamN5TURKRE1qWXVNVFkyTmlBM01DNDVPVGs0SURFeUxqYzBOeklnTlRjdU5UWTRNaUF4TWk0M05EY3lJRFF3TGprNU9UbFdNekF1T1RrNU9VTXhNaTQzTkRjeUlERTBMalF6TVRFZ01qWXVNVFkyTmlBd0xqazVPVGt6TmlBME1pNDNNakF5SURBdU9UazVPVE0yV2lJZ1ptbHNiRDBpSTBaR05ETTJNU0l2UGcwS1BIQmhkR2dnWm1sc2JDMXlkV3hsUFNKbGRtVnViMlJrSWlCamJHbHdMWEoxYkdVOUltVjJaVzV2WkdRaUlHUTlJazAwTWk0M01qQXlJREF1T1RrNU9UTTJTRFV5TGpjeE1USkROamt1TWpZME9TQXdMams1T1Rrek5pQTRNaTQyT0RReklERTBMalF6TVRFZ09ESXVOamcwTXlBek1DNDVPVGs1VmpRd0xqazVPVGxET0RJdU5qZzBNeUExTnk0MU5qZ3lJRFk1TGpJMk5Ea2dOekF1T1RrNU9DQTFNaTQzTVRFeUlEY3dMams1T1RoSU5ESXVOekl3TWtNeU5pNHhOalkySURjd0xqazVPVGdnTVRJdU56UTNNaUExTnk0MU5qZ3lJREV5TGpjME56SWdOREF1T1RrNU9WWXpNQzQ1T1RrNVF6RXlMamMwTnpJZ01UUXVORE14TVNBeU5pNHhOalkySURBdU9UazVPVE0ySURReUxqY3lNRElnTUM0NU9UazVNelphSWlCbWFXeHNQU0oxY213b0kzQmhhVzUwTVY5c2FXNWxZWElwSWk4K0RRbzhjR0YwYUNCbWFXeHNMWEoxYkdVOUltVjJaVzV2WkdRaUlHTnNhWEF0Y25Wc1pUMGlaWFpsYm05a1pDSWdaRDBpVFRVeExqRTBOQ0EwTVM0Mk16Y3hRelV4TGpNMU5UZ2dOREV1TkRJeUlEVXhMalEyTVRnZ05ERXVNVFk0TWlBMU1TNDBOakU0SURRd0xqZzNORGRXTXpndU1UWTJNVWcyTWk0M01ERTFWalEyTGpJNU1qVkROakl1TnpBeE5TQTBOeTR3TXpZMUlEWXlMalF6T1RZZ05EY3VOamMwTnlBMk1TNDVNVFUwSURRNExqSXdORGhETmpFdU16a3hOQ0EwT0M0M016VTBJRFl3TGpjMk1USWdORGt1TURBd05TQTJNQzR3TWpVMUlEUTVMakF3TURWSU16VXVOREEwTjBNek5DNDJOamczSURRNUxqQXdNRFVnTXpRdU1ETTROaUEwT0M0M016VTBJRE16TGpVeE5EVWdORGd1TWpBME9FTXpNaTQ1T1RBeklEUTNMalkzTkRjZ016SXVOekk0TkNBME55NHdNelkxSURNeUxqY3lPRFFnTkRZdU1qa3lOVll6T0M0eE5qWXhTRFF6TGprMk9ETldOREF1T0RjME4wTTBNeTQ1TmpneklEUXhMakUyT0RJZ05EUXVNRGMwTXlBME1TNDBNaklnTkRRdU1qZzJNU0EwTVM0Mk16Y3hRelEwTGpRNU9DQTBNUzQ0TlRFZ05EUXVOelE0T1NBME1TNDVOVGcySURRMUxqQXpPRGtnTkRFdU9UVTROa2cxTUM0ek9URXlRelV3TGpZNE1URWdOREV1T1RVNE5pQTFNQzQ1TXpJeElEUXhMamcxTVNBMU1TNHhORFFnTkRFdU5qTTNNVnBOTkRrdU9EVTJNU0F6T0M0eE5qWXhTRFExTGpVM016bFdOREF1TXpNeU9FZzBPUzQ0TlRZeFZqTTRMakUyTmpGYVRUWXhMamt4TlRRZ01qZ3VNVEkzTkVNMk1TNHpPVEUwSURJM0xqVTVOaklnTmpBdU56WXhNaUF5Tnk0ek16RXlJRFl3TGpBeU5UVWdNamN1TXpNeE1rZzFOQzR4TXpjMlZqSTBMall5TWpaRE5UUXVNVE0zTmlBeU5DNHhOekVnTlRNdU9UZ3hOeUF5TXk0M09EYzJJRFV6TGpZMk9UTWdNak11TkRjeFF6VXpMak0xTnpRZ01qTXVNVFUxT1NBMU1pNDVOemdnTWpJdU9UazNNeUExTWk0MU16SXlJREl5TGprNU56TklOREl1T0RrNFF6UXlMalExTVRrZ01qSXVPVGszTXlBME1pNHdOekk1SURJekxqRTFOVGtnTkRFdU56WXdOaUF5TXk0ME56RkROREV1TkRRNE5DQXlNeTQzT0RjeElEUXhMakk1TWpNZ01qUXVNVGN4SURReExqSTVNak1nTWpRdU5qSXlObFl5Tnk0ek16RXlTRE0xTGpRd05EZERNelF1TmpZNE55QXlOeTR6TXpFeUlETTBMakF6T0RZZ01qY3VOVGsyTWlBek15NDFNVFExSURJNExqRXlOelJETXpJdU9Ua3dNeUF5T0M0Mk5UY2dNekl1TnpJNE5DQXlPUzR5T1RRMklETXlMamN5T0RRZ016QXVNRE01T0ZZek5pNDFOREE0U0RZeUxqY3dNVFZXTXpBdU1ETTVPRU0yTWk0M01ERTFJREk1TGpJNU5EWWdOakl1TkRNNU5pQXlPQzQyTlRjZ05qRXVPVEUxTkNBeU9DNHhNamMwV2swMU1TNDVPVFk1SURJM0xqTXpNVEpJTkRNdU5ETXpNbFl5TlM0eE5qUklOVEV1T1RrMk9WWXlOeTR6TXpFeVdpSWdabWxzYkQwaWQyaHBkR1VpTHo0TkNqeGtaV1p6UGcwS1BHWnBiSFJsY2lCcFpEMGlabWxzZEdWeU1GOWtJaUI0UFNJd0xqY3pPREEyT0NJZ2VUMGlPU0lnZDJsa2RHZzlJamswTGprMU1qUWlJR2hsYVdkb2REMGlPVFVpSUdacGJIUmxjbFZ1YVhSelBTSjFjMlZ5VTNCaFkyVlBibFZ6WlNJZ1kyOXNiM0l0YVc1MFpYSndiMnhoZEdsdmJpMW1hV3gwWlhKelBTSnpVa2RDSWo0TkNqeG1aVVpzYjI5a0lHWnNiMjlrTFc5d1lXTnBkSGs5SWpBaUlISmxjM1ZzZEQwaVFtRmphMmR5YjNWdVpFbHRZV2RsUm1sNElpOCtEUW84Wm1WRGIyeHZjazFoZEhKcGVDQnBiajBpVTI5MWNtTmxRV3h3YUdFaUlIUjVjR1U5SW0xaGRISnBlQ0lnZG1Gc2RXVnpQU0l3SURBZ01DQXdJREFnTUNBd0lEQWdNQ0F3SURBZ01DQXdJREFnTUNBd0lEQWdNQ0F4TWpjZ01DSXZQZzBLUEdabFQyWm1jMlYwSUdSNVBTSXhNeUl2UGcwS1BHWmxSMkYxYzNOcFlXNUNiSFZ5SUhOMFpFUmxkbWxoZEdsdmJqMGlNVEF1TlNJdlBnMEtQR1psUTI5c2IzSk5ZWFJ5YVhnZ2RIbHdaVDBpYldGMGNtbDRJaUIyWVd4MVpYTTlJakFnTUNBd0lEQWdNU0F3SURBZ01DQXdJREF1TWpZMk5qWTNJREFnTUNBd0lEQWdNQzR6TkRFeE56WWdNQ0F3SURBZ01DNHpJREFpTHo0TkNqeG1aVUpzWlc1a0lHMXZaR1U5SW01dmNtMWhiQ0lnYVc0eVBTSkNZV05yWjNKdmRXNWtTVzFoWjJWR2FYZ2lJSEpsYzNWc2REMGlaV1ptWldOME1WOWtjbTl3VTJoaFpHOTNJaTgrRFFvOFptVkNiR1Z1WkNCdGIyUmxQU0p1YjNKdFlXd2lJR2x1UFNKVGIzVnlZMlZIY21Gd2FHbGpJaUJwYmpJOUltVm1abVZqZERGZlpISnZjRk5vWVdSdmR5SWdjbVZ6ZFd4MFBTSnphR0Z3WlNJdlBnMEtQQzltYVd4MFpYSStEUW84YkdsdVpXRnlSM0poWkdsbGJuUWdhV1E5SW5CaGFXNTBNRjlzYVc1bFlYSWlJSGd4UFNJMU1pNHpORFU0SWlCNU1UMGlNVEF5TGpZek5TSWdlREk5SWpFd055NHpOVE1pSUhreVBTSXpPUzQwTVRNNElpQm5jbUZrYVdWdWRGVnVhWFJ6UFNKMWMyVnlVM0JoWTJWUGJsVnpaU0krRFFvOGMzUnZjQ0J6ZEc5d0xXTnZiRzl5UFNJalJqZ3dOelU1SWk4K0RRbzhjM1J2Y0NCdlptWnpaWFE5SWpFaUlITjBiM0F0WTI5c2IzSTlJaU5DUXpSRk9VTWlMejROQ2p3dmJHbHVaV0Z5UjNKaFpHbGxiblErRFFvOGJHbHVaV0Z5UjNKaFpHbGxiblFnYVdROUluQmhhVzUwTVY5c2FXNWxZWElpSUhneFBTSTFNeTR4TWpReUlpQjVNVDBpTVRFekxqUXhNeUlnZURJOUlqRXlOUzR4TXpNaUlIa3lQU0l6TUM0Mk5UQTNJaUJuY21Ga2FXVnVkRlZ1YVhSelBTSjFjMlZ5VTNCaFkyVlBibFZ6WlNJK0RRbzhjM1J2Y0NCemRHOXdMV052Ykc5eVBTSWpSa1kwTVRaRElpOCtEUW84YzNSdmNDQnZabVp6WlhROUlqRWlJSE4wYjNBdFkyOXNiM0k5SWlOR1JqUkNNa0lpTHo0TkNqd3ZiR2x1WldGeVIzSmhaR2xsYm5RK0RRbzhMMlJsWm5NK0RRbzhMM04yWno0TkNnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9wZXJmb3JtYW5jZS04NmFiYjMyYmY4MTM4NzA3NzI2ZDJhN2E5ODNiODIzOC5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpT1RZaUlHaGxhV2RvZEQwaU1UQTBJaUIyYVdWM1FtOTRQU0l3SURBZ09UWWdNVEEwSWlCbWFXeHNQU0p1YjI1bElpQjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaVBnMEtQR2NnWm1sc2RHVnlQU0oxY213b0kyWnBiSFJsY2pCZlpDa2lQZzBLUEhCaGRHZ2dabWxzYkMxeWRXeGxQU0psZG1WdWIyUmtJaUJqYkdsd0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdROUlrMDBOeTQ1TlRrMklERTJMams1T1RsRE5qSXVOVGd5SURFMkxqazVPVGtnTnpRdU5ETTFPU0F5T0M0NE5qUTBJRGMwTGpRek5Ua2dORE11TkRrNU9VTTNOQzQwTXpVNUlEVTRMakV6TlRNZ05qSXVOVGd5SURZNUxqazVPVGtnTkRjdU9UVTVOaUEyT1M0NU9UazVRek16TGpNek56SWdOamt1T1RrNU9TQXlNUzQwT0RNMElEVTRMakV6TlRNZ01qRXVORGd6TkNBME15NDBPVGs1UXpJeExqUTRNelFnTWpndU9EWTBOQ0F6TXk0ek16Y3lJREUyTGprNU9Ua2dORGN1T1RVNU5pQXhOaTQ1T1RrNVdpSWdabWxzYkQwaUkwWkdORE0yTVNJdlBnMEtQQzluUGcwS1BIQmhkR2dnWm1sc2JDMXlkV3hsUFNKbGRtVnViMlJrSWlCamJHbHdMWEoxYkdVOUltVjJaVzV2WkdRaUlHUTlJazAwTWk0ME5qVXlJREF1T1RrNU9UTTJTRFV5TGpRMU5qUkROamt1TURFd01TQXdMams1T1Rrek5pQTRNaTQwTWprMUlERTBMalF6TVRFZ09ESXVOREk1TlNBek1DNDVPVGs1VmpRd0xqazVPVGxET0RJdU5ESTVOU0ExTnk0MU5qZ3lJRFk1TGpBeE1ERWdOekF1T1RrNU9DQTFNaTQwTlRZMElEY3dMams1T1RoSU5ESXVORFkxTWtNeU5TNDVNVEUySURjd0xqazVPVGdnTVRJdU5Ea3lNaUExTnk0MU5qZ3lJREV5TGpRNU1qSWdOREF1T1RrNU9WWXpNQzQ1T1RrNVF6RXlMalE1TWpJZ01UUXVORE14TVNBeU5TNDVNVEUySURBdU9UazVPVE0ySURReUxqUTJOVElnTUM0NU9UazVNelphSWlCbWFXeHNQU0lqUmtZME16WXhJaTgrRFFvOGNHRjBhQ0JtYVd4c0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdOc2FYQXRjblZzWlQwaVpYWmxibTlrWkNJZ1pEMGlUVFF5TGpRMk5USWdNQzQ1T1RrNU16WklOVEl1TkRVMk5FTTJPUzR3TVRBeElEQXVPVGs1T1RNMklEZ3lMalF5T1RVZ01UUXVORE14TVNBNE1pNDBNamsxSURNd0xqazVPVGxXTkRBdU9UazVPVU00TWk0ME1qazFJRFUzTGpVMk9ESWdOamt1TURFd01TQTNNQzQ1T1RrNElEVXlMalExTmpRZ056QXVPVGs1T0VnME1pNDBOalV5UXpJMUxqa3hNVFlnTnpBdU9UazVPQ0F4TWk0ME9USXlJRFUzTGpVMk9ESWdNVEl1TkRreU1pQTBNQzQ1T1RrNVZqTXdMams1T1RsRE1USXVORGt5TWlBeE5DNDBNekV4SURJMUxqa3hNVFlnTUM0NU9UazVNellnTkRJdU5EWTFNaUF3TGprNU9Ua3pObG9pSUdacGJHdzlJblZ5YkNnamNHRnBiblF3WDJ4cGJtVmhjaWtpTHo0TkNqeHdZWFJvSUdacGJHd3RjblZzWlQwaVpYWmxibTlrWkNJZ1kyeHBjQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmtQU0pOTmpRdU9UZzROaUF6TVM0NE5UZzFRelkwTGprNU5ETWdNekV1T1RZd055QTJOQzQ1T0RZNUlETXlMakEyTkRRZ05qUXVPVFl4TkNBek1pNHhOamczVERZeUxqWTRNVEVnTkRFdU16TTBPRU0yTWk0MU5qWXhJRFF4TGpjNU5qRWdOakl1TVRVME15QTBNaTR4TWpFMElEWXhMalk0TURrZ05ESXVNVEkwTVV3ME55NDVPVGsySURReUxqRTVNelJETkRjdU9UazNPU0EwTWk0eE9UTTBJRFEzTGprNU5qSWdOREl1TVRrek5DQTBOeTQ1T1RRMElEUXlMakU1TXpSSU16UXVNekV6TVVNek15NDRNemN4SURReUxqRTVNelFnTXpNdU5ESXlOQ0EwTVM0NE5qY3hJRE16TGpNd056VWdOREV1TkRBek1Vd3pNUzR3TWpjeklETXlMakl3TWtNek1TNHdNREE1SURNeUxqQTVOVFlnTXpBdU9Ua3pOQ0F6TVM0NU9EZzJJRE14TGpBd01ERWdNekV1T0Rnek9FTXpNQzR4TVRjNUlETXhMall3TkRjZ01qa3VORGMyTkNBek1DNDNOelV5SURJNUxqUTNOalFnTWprdU56azNOME15T1M0ME56WTBJREk0TGpVNU1EZ2dNekF1TkRVeU55QXlOeTQyTURrMklETXhMalkxTWprZ01qY3VOakE1TmtNek1pNDROVE14SURJM0xqWXdPVFlnTXpNdU9ESTVOQ0F5T0M0MU9UQTRJRE16TGpneU9UUWdNamt1TnprM04wTXpNeTQ0TWprMElETXdMalEzTmpnZ016TXVOVEU1TnlBek1TNHdPRFF6SURNekxqQXpORGdnTXpFdU5EZzJORXd6TlM0NE9EazJJRE0wTGpNM05qaERNell1TmpFeE1pQXpOUzR4TURjMElETTNMall4TWpNZ016VXVOVEkyT0NBek9DNDJNelkySURNMUxqVXlOamhETXprdU9EUTNPQ0F6TlM0MU1qWTRJRFF4TGpBd01qVWdNelF1T1RRNE15QTBNUzQzTWprM0lETXpMams0VERRMkxqUXlNVFFnTWpjdU56TXlNVU0wTmk0d01qY3pJREkzTGpNek5qVWdORFV1Tnpnek1pQXlOaTQzT0RrM0lEUTFMamM0TXpJZ01qWXVNVGcyTlVNME5TNDNPRE15SURJMExqazRJRFEyTGpjMU9UVWdNak11T1RrNE15QTBOeTQ1TlRrM0lESXpMams1T0RORE5Ea3VNVFU1T1NBeU15NDVPVGd6SURVd0xqRXpOak1nTWpRdU9UZ2dOVEF1TVRNMk15QXlOaTR4T0RZMVF6VXdMakV6TmpNZ01qWXVOemN4TkNBME9TNDVNRFV5SURJM0xqTXdNaUEwT1M0MU16RTNJREkzTGpZNU5VTTBPUzQxTXpJNUlESTNMalk1TmpjZ05Ea3VOVE0wTlNBeU55NDJPVGd6SURRNUxqVXpOVGNnTWpjdU5qazVPVXcxTkM0eE9UTXpJRE16TGprMk5EbEROVFF1T1RJd015QXpOQzQ1TkRJMElEVTJMakEzT1RFZ016VXVOVEkyT0NBMU55NHlPVE0zSURNMUxqVXlOamhETlRndU16STNOU0F6TlM0MU1qWTRJRFU1TGpJNU9UWWdNelV1TVRJeE9TQTJNQzR3TXpBMElETTBMak00TnpWTU5qSXVPVEF6TWlBek1TNDBPVGs1UXpZeUxqUXdPREVnTXpFdU1EazRNeUEyTWk0d09TQXpNQzQwT0RVMElEWXlMakE1SURJNUxqYzVOemRETmpJdU1Ea2dNamd1TlRrd09DQTJNeTR3TmpZMElESTNMall3T1RZZ05qUXVNalkyTmlBeU55NDJNRGsyUXpZMUxqUTJOamdnTWpjdU5qQTVOaUEyTmk0ME5ETXlJREk0TGpVNU1EZ2dOall1TkRRek1pQXlPUzQzT1RjM1F6WTJMalEwTXpJZ016QXVOelE0T0NBMk5TNDRNelEwSURNeExqVTFPRFVnTmpRdU9UZzROaUF6TVM0NE5UZzFXazAyTWk0ME5UZzJJRFExTGpRMU5qbEROakl1TkRVNE5pQTBOQzQ0T0RJeElEWXhMams1TkRVZ05EUXVOREUxTlNBMk1TNDBNakl5SURRMExqUXhOVFZJTXpRdU5qRXlOa016TkM0d05EQXlJRFEwTGpReE5UVWdNek11TlRjMk1TQTBOQzQ0T0RJeElETXpMalUzTmpFZ05EVXVORFUyT1ZZME55NDVOVFk1UXpNekxqVTNOakVnTkRndU5UTXlOeUF6TkM0d05EQXlJRFE0TGprNU9EZ2dNelF1TmpFeU5pQTBPQzQ1T1RnNFNEWXhMalF5TWpKRE5qRXVPVGswTlNBME9DNDVPVGc0SURZeUxqUTFPRFlnTkRndU5UTXlOeUEyTWk0ME5UZzJJRFEzTGprMU5qbFdORFV1TkRVMk9Wb2lJR1pwYkd3OUluZG9hWFJsSWk4K0RRbzhaR1ZtY3o0TkNqeG1hV3gwWlhJZ2FXUTlJbVpwYkhSbGNqQmZaQ0lnZUQwaU1DNDBPRE0wTVRnaUlIazlJamtpSUhkcFpIUm9QU0k1TkM0NU5USTBJaUJvWldsbmFIUTlJamsxSWlCbWFXeDBaWEpWYm1sMGN6MGlkWE5sY2xOd1lXTmxUMjVWYzJVaUlHTnZiRzl5TFdsdWRHVnljRzlzWVhScGIyNHRabWxzZEdWeWN6MGljMUpIUWlJK0RRbzhabVZHYkc5dlpDQm1iRzl2WkMxdmNHRmphWFI1UFNJd0lpQnlaWE4xYkhROUlrSmhZMnRuY205MWJtUkpiV0ZuWlVacGVDSXZQZzBLUEdabFEyOXNiM0pOWVhSeWFYZ2dhVzQ5SWxOdmRYSmpaVUZzY0doaElpQjBlWEJsUFNKdFlYUnlhWGdpSUhaaGJIVmxjejBpTUNBd0lEQWdNQ0F3SURBZ01DQXdJREFnTUNBd0lEQWdNQ0F3SURBZ01DQXdJREFnTVRJM0lEQWlMejROQ2p4bVpVOW1abk5sZENCa2VUMGlNVE1pTHo0TkNqeG1aVWRoZFhOemFXRnVRbXgxY2lCemRHUkVaWFpwWVhScGIyNDlJakV3TGpVaUx6NE5DanhtWlVOdmJHOXlUV0YwY21sNElIUjVjR1U5SW0xaGRISnBlQ0lnZG1Gc2RXVnpQU0l3SURBZ01DQXdJREF1T1RreU1UVTNJREFnTUNBd0lEQWdNQzR6TkRVd09UZ2dNQ0F3SURBZ01DQXdMalEwTnpBMU9TQXdJREFnTUNBd0xqTWdNQ0l2UGcwS1BHWmxRbXhsYm1RZ2JXOWtaVDBpYm05eWJXRnNJaUJwYmpJOUlrSmhZMnRuY205MWJtUkpiV0ZuWlVacGVDSWdjbVZ6ZFd4MFBTSmxabVpsWTNReFgyUnliM0JUYUdGa2IzY2lMejROQ2p4bVpVSnNaVzVrSUcxdlpHVTlJbTV2Y20xaGJDSWdhVzQ5SWxOdmRYSmpaVWR5WVhCb2FXTWlJR2x1TWowaVpXWm1aV04wTVY5a2NtOXdVMmhoWkc5M0lpQnlaWE4xYkhROUluTm9ZWEJsSWk4K0RRbzhMMlpwYkhSbGNqNE5DanhzYVc1bFlYSkhjbUZrYVdWdWRDQnBaRDBpY0dGcGJuUXdYMnhwYm1WaGNpSWdlREU5SWpVeUxqZzJPVE1pSUhreFBTSXhNVE11TkRFeklpQjRNajBpTVRJMExqZzNPQ0lnZVRJOUlqTXdMalkxTURjaUlHZHlZV1JwWlc1MFZXNXBkSE05SW5WelpYSlRjR0ZqWlU5dVZYTmxJajROQ2p4emRHOXdJSE4wYjNBdFkyOXNiM0k5SWlOR1JqVTROVGdpTHo0TkNqeHpkRzl3SUc5bVpuTmxkRDBpTVNJZ2MzUnZjQzFqYjJ4dmNqMGlJMFk0TlRkQk5pSXZQZzBLUEM5c2FXNWxZWEpIY21Ga2FXVnVkRDROQ2p3dlpHVm1jejROQ2p3dmMzWm5QZzBLXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpT1RZaUlHaGxhV2RvZEQwaU1UQTBJaUIyYVdWM1FtOTRQU0l3SURBZ09UWWdNVEEwSWlCbWFXeHNQU0p1YjI1bElpQjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaVBnMEtQR2NnWm1sc2RHVnlQU0oxY213b0kyWnBiSFJsY2pCZlpDa2lQZzBLUEhCaGRHZ2dabWxzYkMxeWRXeGxQU0psZG1WdWIyUmtJaUJqYkdsd0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdROUlrMDBOeTQzTURNNUlERTJMams1T1RsRE5qSXVNekkyTXlBeE5pNDVPVGs1SURjMExqRTRNREVnTWpndU9EWTBOQ0EzTkM0eE9EQXhJRFF6TGpRNU9UbEROelF1TVRnd01TQTFPQzR4TXpVeklEWXlMak15TmpNZ05qa3VPVGs1T1NBME55NDNNRE01SURZNUxqazVPVGxETXpNdU1EZ3hOaUEyT1M0NU9UazVJREl4TGpJeU56Y2dOVGd1TVRNMU15QXlNUzR5TWpjM0lEUXpMalE1T1RsRE1qRXVNakkzTnlBeU9DNDROalEwSURNekxqQTRNVFlnTVRZdU9UazVPU0EwTnk0M01ETTVJREUyTGprNU9UbGFJaUJtYVd4c1BTSWpSa1kwTXpZeElpOCtEUW84Y0dGMGFDQm1hV3hzTFhKMWJHVTlJbVYyWlc1dlpHUWlJR05zYVhBdGNuVnNaVDBpWlhabGJtOWtaQ0lnWkQwaVRUUTNMamN3TXprZ01UWXVPVGs1T1VNMk1pNHpNall6SURFMkxqazVPVGtnTnpRdU1UZ3dNU0F5T0M0NE5qUTBJRGMwTGpFNE1ERWdORE11TkRrNU9VTTNOQzR4T0RBeElEVTRMakV6TlRNZ05qSXVNekkyTXlBMk9TNDVPVGs1SURRM0xqY3dNemtnTmprdU9UazVPVU16TXk0d09ERTJJRFk1TGprNU9Ua2dNakV1TWpJM055QTFPQzR4TXpVeklESXhMakl5TnpjZ05ETXVORGs1T1VNeU1TNHlNamMzSURJNExqZzJORFFnTXpNdU1EZ3hOaUF4Tmk0NU9UazVJRFEzTGpjd016a2dNVFl1T1RrNU9Wb2lJR1pwYkd3OUluVnliQ2dqY0dGcGJuUXdYMnhwYm1WaGNpa2lMejROQ2p3dlp6NE5Danh3WVhSb0lHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSWdZMnhwY0MxeWRXeGxQU0psZG1WdWIyUmtJaUJrUFNKTk5ESXVNakE0T1NBd0xqazVPVGt6TmtnMU1pNHlRelk0TGpjMU16Y2dNQzQ1T1RrNU16WWdPREl1TVRjek1TQXhOQzQwTXpFeElEZ3lMakUzTXpFZ016QXVPVGs1T1ZZME1DNDVPVGs1UXpneUxqRTNNekVnTlRjdU5UWTRNaUEyT0M0M05UTTNJRGN3TGprNU9UZ2dOVEl1TWlBM01DNDVPVGs0U0RReUxqSXdPRGxETWpVdU5qVTFNaUEzTUM0NU9UazRJREV5TGpJek5UZ2dOVGN1TlRZNE1pQXhNaTR5TXpVNElEUXdMams1T1RsV016QXVPVGs1T1VNeE1pNHlNelU0SURFMExqUXpNVEVnTWpVdU5qVTFNaUF3TGprNU9Ua3pOaUEwTWk0eU1EZzVJREF1T1RrNU9UTTJXaUlnWm1sc2JEMGlJMFpHTkRNMk1TSXZQZzBLUEhCaGRHZ2dabWxzYkMxeWRXeGxQU0psZG1WdWIyUmtJaUJqYkdsd0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdROUlrMDBNaTR5TURnNUlEQXVPVGs1T1RNMlNEVXlMakpETmpndU56VXpOeUF3TGprNU9Ua3pOaUE0TWk0eE56TXhJREUwTGpRek1URWdPREl1TVRjek1TQXpNQzQ1T1RrNVZqUXdMams1T1RsRE9ESXVNVGN6TVNBMU55NDFOamd5SURZNExqYzFNemNnTnpBdU9UazVPQ0ExTWk0eUlEY3dMams1T1RoSU5ESXVNakE0T1VNeU5TNDJOVFV5SURjd0xqazVPVGdnTVRJdU1qTTFPQ0ExTnk0MU5qZ3lJREV5TGpJek5UZ2dOREF1T1RrNU9WWXpNQzQ1T1RrNVF6RXlMakl6TlRnZ01UUXVORE14TVNBeU5TNDJOVFV5SURBdU9UazVPVE0ySURReUxqSXdPRGtnTUM0NU9UazVNelphSWlCbWFXeHNQU0oxY213b0kzQmhhVzUwTVY5c2FXNWxZWElwSWk4K0RRbzhjR0YwYUNCbWFXeHNMWEoxYkdVOUltVjJaVzV2WkdRaUlHTnNhWEF0Y25Wc1pUMGlaWFpsYm05a1pDSWdaRDBpVFRZd0xqSTVNallnTWpJdU9UazVORWd6Tnk0eE1UTTFRek0xTGpVeE9UZ2dNakl1T1RrNU5DQXpOQzR5TVRZZ01qUXVNekF6TnlBek5DNHlNVFlnTWpVdU9EazRPRlkxTVM0NU9UZzRURFF3TGpBeE1EZ2dORFl1TVRrNE9FZzJNQzR5T1RJMlF6WXhMamc0TmpJZ05EWXVNVGs0T0NBMk15NHhPU0EwTkM0NE9UUWdOak11TVRrZ05ETXVNams0T0ZZeU5TNDRPVGc0UXpZekxqRTVJREkwTGpNd016Y2dOakV1T0RnMk1pQXlNaTQ1T1RrMElEWXdMakk1TWpZZ01qSXVPVGs1TkZvaUlHWnBiR3c5SWlOR1JVWkJSa01pTHo0TkNqeGtaV1p6UGcwS1BHWnBiSFJsY2lCcFpEMGlabWxzZEdWeU1GOWtJaUI0UFNJd0xqSXlOelkyTVNJZ2VUMGlPU0lnZDJsa2RHZzlJamswTGprMU1qUWlJR2hsYVdkb2REMGlPVFVpSUdacGJIUmxjbFZ1YVhSelBTSjFjMlZ5VTNCaFkyVlBibFZ6WlNJZ1kyOXNiM0l0YVc1MFpYSndiMnhoZEdsdmJpMW1hV3gwWlhKelBTSnpVa2RDSWo0TkNqeG1aVVpzYjI5a0lHWnNiMjlrTFc5d1lXTnBkSGs5SWpBaUlISmxjM1ZzZEQwaVFtRmphMmR5YjNWdVpFbHRZV2RsUm1sNElpOCtEUW84Wm1WRGIyeHZjazFoZEhKcGVDQnBiajBpVTI5MWNtTmxRV3h3YUdFaUlIUjVjR1U5SW0xaGRISnBlQ0lnZG1Gc2RXVnpQU0l3SURBZ01DQXdJREFnTUNBd0lEQWdNQ0F3SURBZ01DQXdJREFnTUNBd0lEQWdNQ0F4TWpjZ01DSXZQZzBLUEdabFQyWm1jMlYwSUdSNVBTSXhNeUl2UGcwS1BHWmxSMkYxYzNOcFlXNUNiSFZ5SUhOMFpFUmxkbWxoZEdsdmJqMGlNVEF1TlNJdlBnMEtQR1psUTI5c2IzSk5ZWFJ5YVhnZ2RIbHdaVDBpYldGMGNtbDRJaUIyWVd4MVpYTTlJakFnTUNBd0lEQWdNQzQ1TkRrd01pQXdJREFnTUNBd0lEQXVOVEF4T1RZeElEQWdNQ0F3SURBZ01DNHlOelExTVNBd0lEQWdNQ0F3TGpNZ01DSXZQZzBLUEdabFFteGxibVFnYlc5a1pUMGlibTl5YldGc0lpQnBiakk5SWtKaFkydG5jbTkxYm1SSmJXRm5aVVpwZUNJZ2NtVnpkV3gwUFNKbFptWmxZM1F4WDJSeWIzQlRhR0ZrYjNjaUx6NE5DanhtWlVKc1pXNWtJRzF2WkdVOUltNXZjbTFoYkNJZ2FXNDlJbE52ZFhKalpVZHlZWEJvYVdNaUlHbHVNajBpWldabVpXTjBNVjlrY205d1UyaGhaRzkzSWlCeVpYTjFiSFE5SW5Ob1lYQmxJaTgrRFFvOEwyWnBiSFJsY2o0TkNqeHNhVzVsWVhKSGNtRmthV1Z1ZENCcFpEMGljR0ZwYm5Rd1gyeHBibVZoY2lJZ2VERTlJalV4TGpnek5UUWlJSGt4UFNJeE1ESXVOak0xSWlCNE1qMGlNVEEyTGpnME1pSWdlVEk5SWpNNUxqUXhNemdpSUdkeVlXUnBaVzUwVlc1cGRITTlJblZ6WlhKVGNHRmpaVTl1VlhObElqNE5Danh6ZEc5d0lITjBiM0F0WTI5c2IzSTlJaU5HT0RBM05Ua2lMejROQ2p4emRHOXdJRzltWm5ObGREMGlNU0lnYzNSdmNDMWpiMnh2Y2owaUkwSkRORVU1UXlJdlBnMEtQQzlzYVc1bFlYSkhjbUZrYVdWdWRENE5DanhzYVc1bFlYSkhjbUZrYVdWdWRDQnBaRDBpY0dGcGJuUXhYMnhwYm1WaGNpSWdlREU5SWpVeUxqWXhNamtpSUhreFBTSXhNVE11TkRFeklpQjRNajBpTVRJMExqWXlNaUlnZVRJOUlqTXdMalkxTURjaUlHZHlZV1JwWlc1MFZXNXBkSE05SW5WelpYSlRjR0ZqWlU5dVZYTmxJajROQ2p4emRHOXdJSE4wYjNBdFkyOXNiM0k5SWlOR05EWkNORFVpTHo0TkNqeHpkRzl3SUc5bVpuTmxkRDBpTVNJZ2MzUnZjQzFqYjJ4dmNqMGlJMFZGUVRnME9TSXZQZzBLUEM5c2FXNWxZWEpIY21Ga2FXVnVkRDROQ2p3dlpHVm1jejROQ2p3dmMzWm5QZzBLXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvbG9nby04NDcwNDgzMjczNDM4ZTJiOTE1ZjYzZmU0Y2Y1Yjg3YS5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvcGF0dGVybkJHLWYyNWFmMzhlMzU3MDk2Y2EyMzI5MGQ1ZjViY2IzMzU1LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9zZXJ2aWNlLXRodW1iLTBhNWFjNWFhZTc2MjFiMTNmMGVmOGQ1ZjViMTNkYTUyLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlOVGNpSUdobGFXZG9kRDBpTlRjaUlIWnBaWGRDYjNnOUlqQWdNQ0ExTnlBMU55SWdabWxzYkQwaWJtOXVaU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajROQ2p4d1lYUm9JR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0lnWTJ4cGNDMXlkV3hsUFNKbGRtVnViMlJrSWlCa1BTSk5NalF1TlRReE5pQXdMamM1TVRZeE5rZ3pNaTQwTlRnelF6UTFMalUzTlNBd0xqYzVNVFl4TmlBMU5pNHlNRGd6SURFeExqUXlORFlnTlRZdU1qQTRNeUF5TkM0MU5ERTJWak15TGpRMU9ETkROVFl1TWpBNE15QTBOUzQxTnpRNElEUTFMalUzTlNBMU5pNHlNRGd5SURNeUxqUTFPRE1nTlRZdU1qQTRNa2d5TkM0MU5ERTJRekV4TGpReU5Ea2dOVFl1TWpBNE1pQXdMamM1TVRZM015QTBOUzQxTnpRNElEQXVOemt4TmpjeklETXlMalExT0ROV01qUXVOVFF4TmtNd0xqYzVNVFkzTXlBeE1TNDBNalEySURFeExqUXlORGtnTUM0M09URTJNVFlnTWpRdU5UUXhOaUF3TGpjNU1UWXhObG9pSUdacGJHdzlJblZ5YkNnamNHRnBiblF3WDJ4cGJtVmhjaWtpTHo0TkNqeHdZWFJvSUdacGJHd3RjblZzWlQwaVpYWmxibTlrWkNJZ1kyeHBjQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmtQU0pOTXpFdU1qRTNNU0F6TWk0NU5qSTFRek14TGpNNE5Ea2dNekl1TnpreU15QXpNUzQwTmpnNElETXlMalU1TVRRZ016RXVORFk0T0NBek1pNHpOVGxXTXpBdU1qRTBOMGcwTUM0ek56UTVWak0yTGpZME9FTTBNQzR6TnpRNUlETTNMakl6TnpFZ05EQXVNVFkzTkNBek55NDNOREl6SURNNUxqYzFNaUF6T0M0eE5qSkRNemt1TXpNMk9DQXpPQzQxT0RJeElETTRMamd6TnpVZ016Z3VOemt4T1NBek9DNHlOVFExSURNNExqYzVNVGxJTVRndU56UTFOa014T0M0eE5qSTBJRE00TGpjNU1Ua2dNVGN1TmpZek1TQXpPQzQxT0RJeElERTNMakkwTnprZ016Z3VNVFl5UXpFMkxqZ3pNalVnTXpjdU56UXlNeUF4Tmk0Mk1qUTVJRE0zTGpJek56RWdNVFl1TmpJME9TQXpOaTQyTkRoV016QXVNakUwTjBneU5TNDFNekV5VmpNeUxqTTFPVU15TlM0MU16RXlJRE15TGpVNU1UUWdNalV1TmpFMU1TQXpNaTQzT1RJeklESTFMamM0TXlBek1pNDVOakkxUXpJMUxqazFNRGtnTXpNdU1UTXhPU0F5Tmk0eE5EazNJRE16TGpJeE56RWdNall1TXpjNU5TQXpNeTR5TVRjeFNETXdMall5TURaRE16QXVPRFV3TWlBek15NHlNVGN4SURNeExqQTBPVElnTXpNdU1UTXhPU0F6TVM0eU1UY3hJRE15TGprMk1qVmFUVE13TGpFNU5qWWdNekF1TWpFME4wZ3lOaTQ0TURNMFZqTXhMamt6U0RNd0xqRTVOalpXTXpBdU1qRTBOMXBOTXprdU56VXlNU0F5TWk0eU5qYzBRek01TGpNek5qa2dNakV1T0RRMk9TQXpPQzQ0TXpjMklESXhMall6TnlBek9DNHlOVFExSURJeExqWXpOMGd6TXk0MU9Ea3hWakU1TGpRNU1qZERNek11TlRnNU1TQXhPUzR4TXpVeUlETXpMalEyTlRZZ01UZ3VPRE14TnlBek15NHlNVGd4SURFNExqVTRNVU16TWk0NU56QTVJREU0TGpNek1UWWdNekl1Tmpjd015QXhPQzR5TURZeElETXlMak14TnlBeE9DNHlNRFl4U0RJMExqWTRNekZETWpRdU16STVOeUF4T0M0eU1EWXhJREkwTGpBeU9UTWdNVGd1TXpNeE5pQXlNeTQzT0RFNUlERTRMalU0TVVNeU15NDFNelExSURFNExqZ3pNVE1nTWpNdU5ERXdPQ0F4T1M0eE16VXlJREl6TGpReE1EZ2dNVGt1TkRreU4xWXlNUzQyTXpkSU1UZ3VOelExTmtNeE9DNHhOakkwSURJeExqWXpOeUF4Tnk0Mk5qTXhJREl4TGpnME5qa2dNVGN1TWpRM09TQXlNaTR5TmpjMFF6RTJMamd6TWpVZ01qSXVOamcyTmlBeE5pNDJNalE1SURJekxqRTVNVFFnTVRZdU5qSTBPU0F5TXk0M09ERXpWakk0TGpreU9FZzBNQzR6TnpRNVZqSXpMamM0TVRORE5EQXVNemMwT1NBeU15NHhPVEUwSURRd0xqRTJOelFnTWpJdU5qZzJOaUF6T1M0M05USXhJREl5TGpJMk56UmFUVE14TGpnNU1qa2dNakV1TmpNM1NESTFMakV3TnpKV01Ua3VPVEl4TTBnek1TNDRPVEk1VmpJeExqWXpOMW9pSUdacGJHdzlJbmRvYVhSbElpOCtEUW84WkdWbWN6NE5DanhzYVc1bFlYSkhjbUZrYVdWdWRDQnBaRDBpY0dGcGJuUXdYMnhwYm1WaGNpSWdlREU5SWpNeUxqYzROVFVpSUhreFBTSTRPUzQzT0RVMUlpQjRNajBpT0RrdU56ZzFOU0lnZVRJOUlqSTBMakl4TkRVaUlHZHlZV1JwWlc1MFZXNXBkSE05SW5WelpYSlRjR0ZqWlU5dVZYTmxJajROQ2p4emRHOXdJSE4wYjNBdFkyOXNiM0k5SWlOR1JqUXhOa01pTHo0TkNqeHpkRzl3SUc5bVpuTmxkRDBpTVNJZ2MzUnZjQzFqYjJ4dmNqMGlJMFpHTkVJeVFpSXZQZzBLUEM5c2FXNWxZWEpIY21Ga2FXVnVkRDROQ2p3dlpHVm1jejROQ2p3dmMzWm5QZzBLXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTlRjaUlHaGxhV2RvZEQwaU5UY2lJSFpwWlhkQ2IzZzlJakFnTUNBMU55QTFOeUlnWm1sc2JEMGlibTl1WlNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0TkNqeHdZWFJvSUdacGJHd3RjblZzWlQwaVpYWmxibTlrWkNJZ1kyeHBjQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmtQU0pOTWpRdU5UUXhOaUF3TGpjNU1UWXhOa2d6TWk0ME5UZ3pRelExTGpVM05URWdNQzQzT1RFMk1UWWdOVFl1TWpBNE15QXhNUzQwTWpRMklEVTJMakl3T0RNZ01qUXVOVFF4TmxZek1pNDBOVGd6UXpVMkxqSXdPRE1nTkRVdU5UYzBPQ0EwTlM0MU56VXhJRFUyTGpJd09ESWdNekl1TkRVNE15QTFOaTR5TURneVNESTBMalUwTVRaRE1URXVOREkwT1NBMU5pNHlNRGd5SURBdU56a3hOakUySURRMUxqVTNORGdnTUM0M09URTJNVFlnTXpJdU5EVTRNMVl5TkM0MU5ERTJRekF1TnpreE5qRTJJREV4TGpReU5EWWdNVEV1TkRJME9TQXdMamM1TVRZeE5pQXlOQzQxTkRFMklEQXVOemt4TmpFMldpSWdabWxzYkQwaWRYSnNLQ053WVdsdWREQmZiR2x1WldGeUtTSXZQZzBLUEhCaGRHZ2dabWxzYkMxeWRXeGxQU0psZG1WdWIyUmtJaUJqYkdsd0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdROUlrMDBNaTR6T0RreElESTFMakl5TVRSRE5ESXVNemt6TmlBeU5TNHpNREl6SURReUxqTTROemNnTWpVdU16ZzBOU0EwTWk0ek5qYzFJREkxTGpRMk4wdzBNQzQxTmpBM0lETXlMamN5TXpWRE5EQXVORFk1TlNBek15NHdPRGczSURRd0xqRTBNeklnTXpNdU16UTJNaUF6T1M0M05qZ3hJRE16TGpNME9ETk1Namd1T1RJM05DQXpNeTQwTURNelF6STRMamt5TmlBek15NDBNRE16SURJNExqa3lORGNnTXpNdU5EQXpNeUF5T0M0NU1qTXlJRE16TGpRd016TklNVGd1TURneU5VTXhOeTQzTURVeklETXpMalF3TXpNZ01UY3VNemMyTnlBek15NHhORFE1SURFM0xqSTROVGNnTXpJdU56YzNOa3d4TlM0ME56ZzVJREkxTGpRNU16UkRNVFV1TkRVNElESTFMalF3T1RFZ01UVXVORFV5TVNBeU5TNHpNalEwSURFMUxqUTFOek1nTWpVdU1qUXhORU14TkM0M05UZ3pJREkxTGpBeU1EWWdNVFF1TWpVZ01qUXVNell6T0NBeE5DNHlOU0F5TXk0MU9VTXhOQzR5TlNBeU1pNDJNelExSURFMUxqQXlNellnTWpFdU9EVTNOeUF4TlM0NU56UTJJREl4TGpnMU56ZERNVFl1T1RJMU5pQXlNUzQ0TlRjM0lERTNMalk1T1RNZ01qSXVOak0wTlNBeE55NDJPVGt6SURJekxqVTVRekUzTGpZNU9UTWdNalF1TVRJM05pQXhOeTQwTlRNNElESTBMall3T0RVZ01UY3VNRFk1TmlBeU5DNDVNalk1VERFNUxqTXpNVGNnTWpjdU1qRTFNVU14T1M0NU1ETTBJREkzTGpjNU16VWdNakF1TmprMk55QXlPQzR4TWpVMUlESXhMalV3T0RNZ01qZ3VNVEkxTlVNeU1pNDBOamdnTWpndU1USTFOU0F5TXk0ek9ETWdNamN1TmpZM05TQXlNeTQ1TlRreUlESTJMamt3TVV3eU55NDJOelk1SURJeExqazFORGRETWpjdU16WTBOaUF5TVM0Mk5ERTFJREkzTGpFM01URWdNakV1TWpBNE5pQXlOeTR4TnpFeElESXdMamN6TVRGRE1qY3VNVGN4TVNBeE9TNDNOellnTWpjdU9UUTBPQ0F4T0M0NU9UZzRJREk0TGpnNU5UZ2dNVGd1T1RrNE9FTXlPUzQ0TkRZNElERTRMams1T0RnZ016QXVOakl3TkNBeE9TNDNOellnTXpBdU5qSXdOQ0F5TUM0M016RXhRek13TGpZeU1EUWdNakV1TVRrME1pQXpNQzQwTXpjeklESXhMall4TkRJZ016QXVNVFF4TXlBeU1TNDVNalUwUXpNd0xqRTBNak1nTWpFdU9USTJOeUF6TUM0eE5ETTJJREl4TGpreU56a2dNekF1TVRRME5TQXlNUzQ1TWpreVRETXpMamd6TlRFZ01qWXVPRGc1UXpNMExqUXhNVElnTWpjdU5qWXlPQ0F6TlM0ek1qazBJREk0TGpFeU5UVWdNell1TWpreE9DQXlPQzR4TWpVMVF6TTNMakV4TURrZ01qZ3VNVEkxTlNBek55NDRPREV5SURJM0xqZ3dOU0F6T0M0ME5qQXpJREkzTGpJeU16Wk1OREF1TnpNMk5pQXlOQzQ1TXpjMVF6UXdMak0wTkRNZ01qUXVOakU1TmlBME1DNHdPVEl6SURJMExqRXpORFFnTkRBdU1Ea3lNeUF5TXk0MU9VTTBNQzR3T1RJeklESXlMall6TkRVZ05EQXVPRFkySURJeExqZzFOemNnTkRFdU9ERTNJREl4TGpnMU56ZEROREl1TnpZNElESXhMamcxTnpjZ05ETXVOVFF4TnlBeU1pNDJNelExSURRekxqVTBNVGNnTWpNdU5UbERORE11TlRReE55QXlOQzR6TkRJNUlEUXpMakExT1RJZ01qUXVPVGd6T1NBME1pNHpPRGt4SURJMUxqSXlNVFJhVFRRd0xqTTRORFFnTXpVdU9UZzJPRU0wTUM0ek9EUTBJRE0xTGpVek1UZ2dOREF1TURFMk5pQXpOUzR4TmpJMElETTVMalUyTXpFZ016VXVNVFl5TkVneE9DNHpNVGs0UXpFM0xqZzJOaklnTXpVdU1UWXlOQ0F4Tnk0ME9UZzFJRE0xTGpVek1UZ2dNVGN1TkRrNE5TQXpOUzQ1T0RZNFZqTTNMamsyTmtNeE55NDBPVGcxSURNNExqUXlNVGdnTVRjdU9EWTJNaUF6T0M0M09UQTRJREU0TGpNeE9UZ2dNemd1Tnprd09FZ3pPUzQxTmpNeFF6UXdMakF4TmpZZ016Z3VOemt3T0NBME1DNHpPRFEwSURNNExqUXlNVGdnTkRBdU16ZzBOQ0F6Tnk0NU5qWldNelV1T1RnMk9Gb2lJR1pwYkd3OUluZG9hWFJsSWk4K0RRbzhaR1ZtY3o0TkNqeHNhVzVsWVhKSGNtRmthV1Z1ZENCcFpEMGljR0ZwYm5Rd1gyeHBibVZoY2lJZ2VERTlJak15TGpjNE5UVWlJSGt4UFNJNE9TNDNPRFUxSWlCNE1qMGlPRGt1TnpnMU5TSWdlVEk5SWpJMExqSXhORFVpSUdkeVlXUnBaVzUwVlc1cGRITTlJblZ6WlhKVGNHRmpaVTl1VlhObElqNE5Danh6ZEc5d0lITjBiM0F0WTI5c2IzSTlJaU5HUmpVNE5UZ2lMejROQ2p4emRHOXdJRzltWm5ObGREMGlNU0lnYzNSdmNDMWpiMnh2Y2owaUkwWTROVGRCTmlJdlBnMEtQQzlzYVc1bFlYSkhjbUZrYVdWdWRENE5Dand2WkdWbWN6NE5Dand2YzNablBnMEtcIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9zaGFwZS1sZWZ0LTEzZmE4YjNkOTg4Y2E0ZWI5ZDdjMmRhOTM1YzJkNzNhLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9zaGFwZS1wYXR0ZXJuMS1kOTlkZjUwNmYwY2I4Y2Y3MDRiZWE1YmMxOGI0MzFlMy5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvc2hhcGUtcGF0dGVybjItNGJkNzJjMzQ0ZmNjYWMzYjE5MDMxZTdjMzFkNDIwOTYucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3NoYXBlLXJpZ2h0LWRiYzc5Yjc5YTA1YjJmMjIzNzQxZTUwYTk3YTYyN2FhLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9tZW1iZXItMS05MWI5OGEyODU1NDhjMjU5MDkyN2NmZjI5ZThiZmI0My5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvbWVtYmVyLTItMmQ1OTlkNDdlM2IwMjBlMjc0ZTBhNjE5YTc5MjI1NmEucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL21lbWJlci0zLThhNjY1NGE4ZGY3MjUxODYxMzZiMmViMTM0MDliYWM0LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9tZW1iZXItNC03Nzk0ZjIxYjBkOWE5OGRhOWM5NDUxOGVlY2VlYmE3YS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvbWVtYmVyLTUtOTJmMjg3NGJhMmRiNGJiYTNjMzZiODM0ZjZiMmI1OWYucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL21lbWJlci02LTI2ZmExOGM4NmEyY2ViNjYzZWIyYWFhYzdjMDUyNjlmLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURjQUFBQTNDQVlBQUFDbzI5SkdBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFCbVVTVVJCVkhnQnJWcFprRnhuZGY3dTF2czZ1MFl6b3g1WmtpWExSbU1ic0RDNEdOa1VvWXBBeHBWVXdLRXF3RU5DVVVWaCt6RjVzUWp3a0VxcUxDZVY0S3BVU3BnWFRCS0NBamcyY2VHTVNmQUNNaDVqeWJac3lXb3RzMjg5UFRPOTMzdnpuZk4zejlqeEptTmY2V3BhdCsvODl6L2JkNzV6enJYd1BoL0g3L3BTTHBMMkptTHg3S0ZNTmxOSTVISmowWFF1WnpsT3J0V3M2VDJlRXkxRmt0bGk0UHVsYXIwNU5mbUx4eCt2TmxwVFI0L2RYOFQ3ZUZoNEg0N3hzYkhjTmJ2NzdoenV6by9IWXM1NFBoMkhaN3RJSlZQSUQrNUVwcWNmVGIrRjZtWVoweGN2NGZMc0V0WTI2NmpVVzFndWw1SFA1ZEZxMXRIYjB6MlZTS1VlNkJuS25QanlWNDhXOFI2UDl5VGMwTURBZUNvWnV5Zml1T05SeDBGdlBvV2huaHdLL1YxSXVpRjZjem5zMkgwVnVvWUxxRzJ1NCtYVHAvRExrNmV3Vm0xaW85WkVyZEZFSWhuSDZNZ2dkdThhUnVHcXZiQmREMTRraHA3dS9JbStvUjMzRGUrOWZoSy80K0hpZHpnS08zZU9lYTU5TDNVekhnWWhta0dMbWc5UW1WL0YzSElaaTB0bDdPcExJaG1Kd3FiNmJEZUNSQ1lQSjVaQ2IzY2V1VmFEMTIxa015bjA5V2FRcFlBOXc4UG9HUmxDTmo4RU41YkcrbnA1b2xuM0o1Wm16azgyNjdVdjd4ZzlVTVM3UE42VmNJVkNJZWNGL2ozOGVKZEhEZWZTS2FTaXJwcS8xZlJSYi9GczFERzl1Z0tFRFl4MFoyRlpBZUtwREtLcEhNWVNhUXdOZCtPVlo1L0RLOFVabkZ0YXdNV2lpLzYrTEs3bUdsMER1N2lXTDZzaDA1Vkh2VjVINkFmalRpUnlmbkg2M05IZW5WZDk0OTNzMTc3U0d3c0RBNFd3V1grV3U3M0xvdFo5MzBlVEZyQXNud0Jod1hGc1JEMFhIaytmMWx6ZHFLRk0xN01pSGlLSkJLS012MlF5Z2RtTGwvSE0xQXM0WFp4SGNXRVQ1eGNyV0toYUtGVmR6Q3lXY1BIaVJUUnFtd2hiZGNSamNjQ2g4aXlxTHd5T1B2bnpINTgvZkhpc2NLVjd2aUxocmlvVUpyaEpDbVlYd2pEa2xSQWhuMWV1TkxDeTJjSmFnOWZpU1RSNHNSVllqQ1VmbTgwV2ZOdEdoRUo1VVc3U3B0dVdWM0htK1pjeFY2cGlvd0dzTVBaZVhWakdJNzk4SHYvdy9ZZng0RThmeDh6eUpwYm1GOUNxVnhENERZUzIyV0lRK0xEQ3NOQ2J6ajk3NDlqWXhKWHMreDJGR3h1NzhVN0hjWDRVaGxhT3AyclJrZ2Z5WjZWV3cveEtDYTlPeitKVkl1RHM4aHJXS2xVS2JrTlVJR0FSVGFYMC9wQ1c5aG1iNlZ3YWtWZ1VwVW9ORVFLSHkzaHN0Rm9ZR2QySGNybU9iMzc3Yi9Iamh4OUdaWDJabnIxSmdacWlTbFdveThkR0kyNHU5QnMvdXVXakg3bnJuZmIrdGpFMzlxR1AzT25YcThkYWZMaDRocVVQb1VhSUVrMWVjN2hwbXlnWk1EWmMrYzZqRUx6dXVTN2lVUS9aYklyYUR4RFEybllZSUJwTFlQZmUzVmdwclRPeUlvd3NDOTJwS08vdlIyRkhGZ2NPSE1EUTV6Nk5tY3NYc0hUcEFwTHhCR3d2Qm91dVNRMUI0dHgxSGJXaVl6bjMzbnJycC9IWVl3OGRlOWZDM1hqTGJSTmh2WDZzUlkxVDVWUWNOY2U0Q3JoSnkvSW9tRVBFQ3hIeFBIU25rMGdUWEJnWHFGWnI4Qm1MMlZpRXdxV1JUR1dKZnR3ZzE0bkdVK2d2N0VIeWhaZlFuNGxobzI3aWFuVFhFSzQ2c0FlN0R1d2xXdlpnLzlVRjJINmRidVdwaDBBOEpYUm9hUStwZUJSeFBqTWVqNlBoUk84ZHYyMmlPUG56RXlmZVRJWTNkY3V4dytPRk1QQ1ArMEhBamZycWloM1hrTU9oNWNUeEl0Uml4SE1RNVUrZjdDTWdDTGgyaUh3bWdiekFlemFMUkNyUGdKRW5PZkFTU2ZTUGpPTFE0WnN4TkRTQXdtQWZCcm96U0VTQWlFMzIwbGpYTTJDODJSVElvZ0NFS2dwb3poaVZZMVBKSDlpL0IxLzUwenZnVXU3QXNvNGZIcDhvdkprY3pwdGRIQnplL1N6M1BtRFJZdlhxR2xxKzhYc1J6Ukx2bzl1SkZlT1JDR0xSQ1A4djdta2prNHloSzVOa2ZER0djaW1NM1hBRDhqdEc2RXEwdUd5VGJtWFQ2cm1lYnZSMDVSUmxkK3djd09ESVRpb2hSa1c1RkpMMjhpeU5SWnRBWkRtMG51Tm92Z3pJWWxCWnc1NmhIYmh4dUF2RlVnMXpTNldZN1ZvVG84UDdIeWdXWDZxOXJWdmVjUFA0UFRTVW9xSllyTlh5OWJwYVQ2N1prZ1lDSm1adUl1S2dpeTRacC9WaU1SZFJXbTExdllvTU4zYnc2cXVRN2U1VGR3d2JoRWE3U2ZQRW1NaWpjR29lQm1qQlRFOFgxcGJtd0xoR2MzMlZXb3NnRklHSXZLN0VtdTN4ZEtrWVl3T1hwT0RtOFNPSWNVL1REOTZQa1o3OWVNWlM4eFY4TzVUOGUvZGJ1cVc0b3hWYVJ5MjFrRmlLRmd2OXJlODdYQzFrYkluYjBLVElKNkxvenlmUm00alJMWDBWNXRyZFE5aTFhMVEzR0RBbGlDV0pBb3pkVnR2RnVESXRFT0dLdVhTZWNabEJULzhRa3RrZTVzTXVlUEVjckdpU3drWVphcTV1VXdMRG9SVmppUXlhWEROcXRlajJDUTBWMlE5dnVPdm04WW14dDdRY0gzdTh2WHY1U3d1MVlQS2FzWnlsWDRVRUZhRFo0SGQwbzBhOUJpY1o0YjREaGZRa2czMGdueU5rZXhTV3lxRlFsaDFWVUFoNVQraFFNVVM3K3NvOHYyL1I5WmpnYVIxV0NSUXF5ZFJCbWhaaFhuU2phamtWVEx5R09nNEpWQzZCU29oQm9qZkg5TU4wWVhabExPVllwSVE0OGdiTDBXcmpGR2s4YkNkb1F3cDgvUkNxc0tGYVN6OEhSc0E2aVcrOTNpU1lVREJxczlrUU10ekFScW1FOHZ3c0tzdUxDdU1XcVplVDZxRkxKaEZzcm1MNTNITm9yTTRUTzFiUjNDanA1bDJITHV2RkRleFRPSXRXVXl2ckZ2azhXanRvVmxHOStDSkNndGY2eUhYNHhYTkZtTTBhdDZMNnh6ODJQakgrQnVINCszZnF4aEcyaFdGK29vdlpiYzBGdEVBbkRpVVp5MzBOdXVFbWhkdGc0cGF6WHZkUjJxaWllSGtCcTVmblVWdFpVSlloTm04RlRPN2N0SnZJb2pvOWc0M3BpNmpNenFHMVNhcFZxNXZjeFQrMkd6TWdvbFl6c1dieDJUYTl5RTMxd3ErVTRUQUVIbm1GcUJwWUJ1RzI5aHlLaFBlOFRyaXhzZkVDdjVrUTZUczNTWnpJNzBuQzdnZ21DVnYxWXhtZENMRFVhTEVLWGJUT3N5V3U2WWM0dDdDQzJkSXFOcGVYNEcrVTRaZExPUHZFZjZPK2VCRTJHWCtzZHdEbGxUV3lrREpxeXl1bzgyZlFiREN4VzhZVmxVK2F4STEyR3ZMRkw1MFFVY2FtY05iL2ZlYU1lbGFnNGJaZHVkR1E0K1BqRTdsdHk3bitoTkdBaVMyakNkK2tnQ0RzV0YwdENRMXNXeGMwY1dpRWJVbE81TDJKYUF5WFMyV2NXU2hoczd6SmFxR0oyZWVmeFVQZitTNGUvdmEzMEpoK0VSSEdXVExmaHhLSjh1cnNQT3FiRzFRbWxTZG9LWmhQZDl6T3E1SkVHSnYwbHViS0hCemZ4YWt6NTFFakFSQnVZYW14MUwrMkJLelp3VjFid29WVytFVVJRazVGRWdFQnRZendRZDhzb0ZZMHVyQ1prTWszTzI1QUpiUlVPS0ZaNVkyS0NudG1aZ0VYVnNyS1lsSU0vcy85MlIzWS82RVBZSE4rSHBGTUQzSjdyMFV0Y0xCV1drT3R2TUZLdmFGYkZGY01kWi8wRmdwa0JRWnRMU0VCMlg3WVJOVFRyeFNwQlBOc1VVS2dhTmsyUVNnR3RqNnUrOXcvZHJqQUsyTWR4SkZZVTRRVDBKQ1k0L09VY3RuR1VpS1VKT3lPWUhMREprR2sybXhwRGt5bDR1aG5najR3UElnMGsvcXJVMDlUVnkxMFhYMFFReCs3RGJHZUFTUjRab2RHa1IwZVFZbldMYzNQTVRldlVrbFNRclVWckRnWUdDSGwrYUp6cnQrd0kzanB6R2xoZWlxUXRZVWFuWEFSN2hUU05jZHp0dWQ0WTYvdE5uUktHcUZlNWlHZDVHMjEwWksvTG92eWFjeUpxTE5JTFF1WUNMbG1Zcyt4ZjFMb3plTDZ2U080YXJUQTVFeXJFQ0Y5VVV3aUJTZWQ1YzhNWWt6d2hSdkcwT1M2cGVWVjFGam1OQ3ZyV2ozWUtveHZCQk1CNVRPVjdYRHpQL25odi9KN2NkMWdLd2VIblgySDJ4U3g1aWNtWEN0c2pZc2ZoRzBCMVJqOHQ4bkZiUHErdEJDRTMxbWgwM1pKL2s5dW9nWFZIWGsyZUtiSlBGd0tFS2Y3REtiSUlidXk2aW5wYko2d3Y0SDBvQlN1VVVWQmFwUVVLOFcyd2o3MEZZYXdkUFlDMXRlV1VhUDFrcjFEREljbW4rMTI4aEdxcTZ0NGNuSVN6NXgrQ2NWWFRpT1IzNkZ4THg3VmtuRFNxRE5paHBZSkQ3SzhNWmZ4ZHFnalZzZlZOSXpiTVlUWDVEaXJiVFdUTndrZ2tzeUZlUENEcEFTTjhFMkMwTklHSzlFNjlnenZ3TTZkTzhDMkYzUGV5NGgyTTlmdEdvVGRTMXJGS2lLYTdrWnZZUjhXTDA0VE1vaThHeXNrQXhWNFliUWRaK0lwTFR4MzZqUysvWGYvaEIzMGlPSHVPSWxBcUlRK0NEdjVEVzJyZFF3WENtd1VTS3p0bkluZ3NJMThvWEdKME5mUGdYelc0QTBVeFlTV0dRRXRFOE50bTYreitHd1N3c01JTmMzMW1uT0xLSzl0b0RLOWdqNENTSno5a3hqck9lLzBlYnBsRkpIQkhpeUZGY3pPckRCZUF3V2trTmJ3bVJMY29FUFRiSTM5SjU3OEZkdC9TZXdheUNCT2h0TWdXUmVYdElKTzltNVhMVzM1TERVS0RybEV5SUtDUlJ2YVJhZ09EQ3NLdGRPREZJcW10TnBHeW1nMHFxQVRZWFVnbG9ha2lIUUN3MnpWSGJ6eGc5aEg4aHlzTEdMZllZSlhJMEFzazJFK1k3M0hwRDI5dElSLy9KdmptRHQvQ1lkR3NqaEV0MDczOWlsWWlWSkRUVTFTUy9yNDFjbG5XRW81SmhWUk9GZDZObEpQdGttOEdxMmRzalJIQytrSWc1eTRhcTVqVmVXTm1oS29TZkpDV2N5aklDNUxuQVkxS3ZjNFhGaFNoTndybGJqY0d5UFhFejlJUk1nUkNUQnJLNnRJWjNKdzR4bEVHSHN1UHplSmNwV2FXTVhHMmFlZlFmblJKL0dGUFIvQW4vL3hKOGxIUTNRTkRpS1I2eVd2OUxaY1RGenpzVWNmeGVMaWlpUlpKS2tBU1JVZUszNWhOQm91blRSbGJZT2lHSVdYY3U1V0tmTzY1TjNTOW9CSmpJSG1QMkVuaGdNNmFrRXBoVFR2aGUxY0tNMGd1bU9PQml5d216WHpiejlGbGNpWXBRdGxUODZSeGJQdUV3TE5PTnlmM0lYd1l3ZmdEU1p4L3NMVHFKY3ZJVHN3U0dKQ3R3NmFLcHk0bGhEcmZ6NytQZjIvQUVpRDlWeGNhajRLNXlpZ0JZYWRoR0hISTdHZDB0ZzUyUGJWVU1zS3NZVG1PWEZCV2FCaHVLRUNTdHRGbTF0V2REU28yVnZVNnB5UmdvWTRFMWxKaHNRM1JwVE1NZGFzODNOSXNBRVUyejJLNko0aHVpNGJRMTBlTjFmQmdIdEFVMFc2djQvQ01KRlRRRTFYVk5qRFAzMElNM1BMdXJiQW9meU1SbzFsZFovYlliWWxrTG5XYmloeEswTExjM3FUSUdRbnY0V2RuR2ZhUWlaNUd4WW5LU0tRRWxJQVI2NDRwaEtYdEdHem92WVlkK251SExwWWs2VjV4a2RIRUQyNEczSFdlVTRtaXlCcUsvdXcrWGlYU2hpNTlnYVdiaWtsaG00a1FibGFtTGwwR2ZmOS9YZVVQMW9zZnVVeGNxOVBsMHZ3LzVidEsvd0xhaG9EV1laaEtXNm9ONVlrbVpUNEtXZUVNRUdwS2FEdHcxdHBnSitUUkxrS1dieGxPZXJqdnNhbnIvN2ZLWWRhaE9sYWhKUXB6OTdLU0ErODNpNDRPM3RnOWJGd2pYRloxelNjZ3REMFpseHlVUytlVXZmbXFzcENtbXd5M1hQMG0wb01SR21pNlhxdHBYZ2d5dmVZSnlYdXRVb1BBbXozNVV3S2t5RGsya1hHWXpnVnRoRWw5QTJuVkxnM2hGekJKTVpBbHVRdDNXVHhjMm4xQ1dkc2U0c1dxbkkvZXhudDlNSEV6clBwa3pqN05iSVkvbXpWdUQ1ZDNHOW9IQ3RWa3ZYamFUZ2swcGFRWmphYUVEVHc2OStjeEF3ckM5dVdocUd0UXNuOWxpUDBMcUVrUUI2c1paSnRkeEpkSnl1MGpRSmFMZ2d2R0pmY05xbG9TK3BVRVV3V0ZCZktzQWVwTTRHV3J5MDJ4M0czTENiWG9xekFIWU0vblBhazJZSnprTXF3dGRmVmczUitCSEhtT3BmRmFCaTJLWVBreEhhK0RBZ2l5bVVaeTNZeWc1UFAvaFlDWjlLakZGL3l1TFl2U3BPZWpzUjNHLzZiUlBST01idFZoMjdIM25NdTl6TFZvUzZHV0ZzYUM3NWRKNWkwRkdyanRGd2k3cUc4WG1NUHgyc0Rpd2x3MC9ZTE5GNEYwYVNtYTNHVDZoNzhHOC8wSWthSWw3UWduV2h4SlZPTTJtcU5rQllGVHltQUhUSVdnZkV5NjdzbVFTa1Jad2RNbENpeHlMYUQ4RmczNWRFampJS0NEcEFFNFJZbkR0dVlRYzR4eWV6VFBJR08wVUxEVW55Nm5lOGJVaHBqenlJYU5kWDRacVdpYlQxSm5BMCszTkhrYm05MU1RUjBKT0RYcW5VQ1JFUkdxRzFyQ2hFT0ZBR0Y2ZHRhVmxIckxWYm45VTN0YmprcGRzcG8yU1lyN1RyN01oQWwyQUlKUmhrT2VXbURGQy9DWVVxVlJGMjhCcUVoR2xzRmR2c1VOL1pEZThxZW1wb3FVZmVUVzlRc05MbE9OdVFwV3dnNG5VbWl4QmI0ZGhZeDFibTRyUWlubGJyaE5HaUYwbm9Jc0xpNnp1NXpCYlhhT3VxVmt2WS9aWExUcXEzQnI1YlpYaWlod1E1WVFBUzBZemxqVWY1dWRXTU5GeTVNcXd1NmJLZkgwaHgvc1pxUTlhTWNselhJZEpyYVRmT1YzMXFCOFJxMFN6VzVrWjQ0TmZYVUkwWFhNSUhnY2RLZGNZT0tvYmJPSkZBRmtpUHNITmVxZGUxWGREcGhBaTRpV0xWdFNkdXl0bW9LNlhvdGtXZXVzaFV3ZDJsR0tacFUzdExFYlRrbGsyWEU5ZG5EakdkN2FhQ29La1ZpTVdRMWNPNlZGekF6dllnV2ZVcUdrSXJXM0tWSEZ4WlhOWEtFMnVDdDY0emQzbzYxTmp2aHZ3L0libFE0MXcyT3RRTDdIb1ZjdWtUWUtVNXRVM0lJaVpWZmN1a2VUWmIzMG1YV3VrdFlDVjJ2VWpQMW5ybUg3c3N1V0xubDR2eENHUnQrRWN2ODNxUDF4WXFicFEzc09iZ2ZJd2R1VUNUVWtGQnlidFBDWmZ6UDVDKzAzR3BRMEt2MzdVYXhlRmx6V2RRTE5ZSExwRWRDeGxGbXRSMTVuZVJ0QkExMGRxQkYydHpjWEsydnIzL2NiOVFMZ2RaU1VLaFBKdUpLZ1ZJY1F5MlJMd3A1bHJ3bVZuQmRUNXV3T1ZiZURRb2p1VEhDSjhka2RrRHJTVG5FdVNobTFxcDQ4ZUljRmxpVENmTDI5WFhyV0N1Ujd1SmdKSzdXbGhHeXROa3ZuVDJGQngvOGR3NHVHOW96dmZldi94SWZ2RzR2Vy9UY1IyMERXWStoWWt0Y3U1Z3ZOVlVKSnZhMnVURU44eDlUVDAvZXZ5V2NISmxFNmdLZi9TVlBSa1NrUVdJZHU2MlN6YzI2YWExUVl6TE5hWEF1SndJSXVVNUVIVVhKT3IrTDg1cVEyaXh6VVlNdUk1UFVLdDN6N013eSt4NHplT0hzSERmRk9DVHFiWkFNQ1BJMldnM2QxTXJTWmZ6TGd6L0FiMTZZZ2U5RWNlMTFCekh4bVU5cVh0dlpuOFBCZmJ1b3JWWEpldG9yWGE3NHFOUWJKaGR1RVg3dC8zeDFicVpZM0hKTE9jNFd6MDRlMnI5M2tsMmxjWWtoY2IrUTZDY3hVMlV2WDhkdlRPSUNFb0ZXQllGcVhGcDdpYWd3L3JyR1hwdTJzaktQY2VOczJJYW1TcWRqWXBXTm9KTy9QWWVUcDg2cmF5VTV2dXJoVUVTSXVzeS9telMzYnduejkvR0oyMjdSOGtwQ0lVb0tKMTR5T0R4TWtMdUVicllvYnYzRUtDN05MbklRc29icDJSSXV6YTNncFhPWEpsODhjMnF5STlQcjJ1bkptSGQzdlZaOUZ1MmFUVW15Vkx3YVgwNmJkOUkxV0w5SmZkWGlQTnhuenBHeVNGQlR2bk9sTlNIRHlEakpNV0ZjV24wOXVRalc1OWVVTm9VS0FKWnFXaHBMZFdFaWpxa25YZVkwaCtpY3ppYng0ZXNQcWtDS3lqcHI5M1RXdHhoYzRsNmFPbkhkMlp2Q1FKWlczcG5tR2dYV2k1Lzk4cEU3dnJvbHorc0dJVTlNdlREbGVwSDdraHpRaXdVRW5jUk54UjRjMTJwOFNFdEJrRlRtQW9xQWJiK1hlR3NQdWRTVlk2NHlSVFBXNHNBaTRkbzZvaEtoQkdrN2JZdE9KYUxER3Y0Ukd2eDdSMjVCT3U2aXRyNkN4aVpiZnhzYlRDRk1MV3VMK3FKT2cvTTdlVHNpUDFCQXZuOG56MEd5b2N3M0tGanh0Zks4WVlUbE5vT2ptMzcxRHhqUUJRRVVNekkySlkrODNtUzFPWnhZMDZYQWRXcmZEeUtrV3pHZEhjaDlwanRtck9odzBOK1ZTbk1nR1dGN3hUZUpYbXBGNlY1YkpqOWFWaWVSV09najBmN01wMjVocDNvZHBhVnA1cjJTa3VvbUFhVzhOSzlVTUU3azdkMnhDeDdiRmh1bEpkUWRyM2pqSDM3OTZQK1g1UTJUMWFsaXNVVHZPa0pzTHltNTFRcUJjRit0YXhVZ0JXV3phWm96d2kvbE5TZ0JpR2piS3BJYUpDMklWYnVJcEs0TUUybTFRVzVhZXBxZXJWUllyZStSTEd2ZGFCbFhqUktjL3VvdnZzYktIdGlnbGNvTE15aHhQcjZ4T0VlMHJISkdIa052YjQ5V0pkRWtKMGx4VG03VFBTVTdtem1DTnpuZWRMSzZWQ3FWK25MNU0wVEJ6eXVpTlZ0YjM0bmxQTWVVSExKcGFUc0lvNUZadGJKOGNVY0JHeGl1S2JIYWFBWGFnYXd5Rmx0c0VVckxRc2kyY0doSEc3eW0rWm9oRzNuaWlhZndrMGNleDhIOSt6QzZiejhTN0x2RWlMcXBmRGRkY2szSFl2SnExZFVmdXRXTXhSemNzZi9RYlUrOW1SeHYrYXJHaThYaWlYZ3NjamVVc1RUYnpSaURrbHR2TldpT2FnOUw2R0lKVVhrWWF2NFJwVWlUeCtYMTdsd2FhK3ViR05yUnp6VTQrZzN0OW9UVzlFR2tkU0Z1dnJ5OGpGY3Z6R0p1Y1JXL2Z1RThNdjI3MEQxeURZbDNOeko5b3pyRFc1bWpHN0psYi9ybTl0MGplejU0NHExa2VOdjNVSjZjT24yTXFlRnVlYmdrYWczNk5nTVhFS2kzaFpabWJMWGVVaGVVWm0yREFPTmJydFo0U1E0bUJRRjdPSkQwMlFQcDc4a3hrV2RoK3JxdXNvOGE4NllTZGU0M2s4dWdNL3gwQkNIei9YVEJQR091aWxSdWtNVnlEV3ZMNnhLTGR3OE03VC8yZHZ0L3g1ZHNmbnZtMVdPTld2VjJOb0ZLK3NCT1lRaGpNZGxVcHpzbWdxMnRyeU9WVG12eWRtM1hUSW90U2ZBMm9tUTF2LytKajJNb0c4R0hiN3lPaU1yaWwwcnJVRGtwZStMTWp6Lzh3WEY4L1d0ZjBYZFFaRTZlcHdVM2xtYlFQYlNQajRpVVZoWlhidDkxemMzSDNtbnZWL1I2MUxuWmhSTkJLN2llT2FjbytjMUF1WlJHb1hiSkpHUk1MOU0zSlJPdkxYR00xV2hack0wcVN0czgyL1QvaFh0bTJXTGZ1N3VBVzI0YVUyUVZRREh0VlV1cmovOTg2R0dOWGVsTlNxbGtlL0x1V0ZaYTVNWHJQbnJiOWQ4NjhlU0pLOW4zRmIvWVZweWJLNzQ2UFR0S3gveUdLVkJOZ3BkaVV2S2JWQWNpWlRhVHdCSUhHeDRyZ1EyaXFEU08xOVlxMkwxcmdJQ3dqb2QvTm9uZnZId1JGNmRuZGNadGMzQWZJUXNTcmlwdkdQbHNRMFNseWF0SzgwMFp3eU8zYzk5OTMvdmUvZGQvNUk2N2kxZTZad2Z2OHBoZkxVLzJkbWNlNEJSb2pQRlhpRVNrTkdLeWw0cVpQdGpIRnNQeVJyMWRsVGVSeTZUVWV1bHNUQ3ZxK2RVSyt5dXV0czQ5RnFBM1hYY05YajU3am9vS3RibjdoYy9mamovNW84OUtRMDA5Z2ZFOVNTZTVmZWlhbTc0NytkVHIzek41cCtPS0xmZmFZK3FsWXZIVXVVdEhtTTJPMU91dEUvSkNqTGhpMHplUUwwZlFIZ2FXaUpKeHRndVdWbW9ZWUVXUXA1QlNWaTBzTE9LWFQ1OUVycnNiTjk5MGcxcS9TdWJ4MGl2bjhMTkhINU4zeUNZWmowZDI3TDd1U04vb3RWUDRIUTRMNzhQeHFjTmpoVnFsT3BIUGVWOGM2azJQblo5Ynd5cXR0V2RudjlLbzNueUN5QnFTV2NUaHNMcityeWZPWVdYVEpPVWtjK1cwb0Y5ZGlGY3dHYmJDeDIzV2wwV1NDYnpINDMwUjdyWEg4YU5mS256L0o1Tmo2MDE3ZkZkLzlsRFM4M0pYanc0VUhDK2VrODVrT2gvRE04OWZMcDJmWHl0WmpqTjE1T1lQWC9qdUR4NmFhdnJKRThYaTFIc1c2TFhIL3dFYy9EQ0VxbE5mWHdBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURjQUFBQTNDQVlBQUFDbzI5SkdBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFCa2dTVVJCVkhnQnJWcHBiRnpuZFQzdnpaczMrOFp0dUd1b2hTSmwyWkljMjdGYk9LYmJKRTBDTkpXQkFrMytORENLQmkzUTF2YnZBclVOOUwrVjVrY0t0SVVUQklhUnBxbVpwVEdDeEJHOVJMSmpXNlFrVzdKRWMxL0VJWWV6Ny9PV251OTdiNGFVSThleTR5Y05odk5tM3B2dmZ2ZmVjODY5ZHhSOHlzZnNDOC9HMTdibVQ0Y0NpUk56TTYra0xLdCtNcFlJeHJQcFN0eUNCMWJEUUxqTG45Y0RudVZLdnBFZkdUOHdwL2p3Y2pRNk9QZmx2MzlxR1ovaW9lQlRPR1puWDRpSHJhN0hOdVl2VHNGdVRkMVl1b3IwZWg3dlhsckRRQ3lBb2NOSnJDMXVvbEN6RVZCVmpOODFqSHF0Z2ZXVlhaeThmeEpldncrSnZuNUVrME56WHMzL3ZXclJtSDdna2E4djR3ODgvaURqbGk2L09hVjQ4R1Nwa0p2S3JLOGdmZjBpTExPR1REcUxOMlkza0NtMk1CRFhjWGkwRzQxeUU2czdKVlRvdVQrNjd5QXVYOXRFWDI4RXh5YUgwZDNmQjlXajhLSFJxMzNRTlIvODhlN3AzdUhEM3hvWXUzTUduL0RROEFtT3BkbmZuSVRYK3d5M1pzcTJiTmlXUVlkVlVkamRSWGtuQTF1MVVXc2FLRFl0eEJpS3E2dTdDT28rTkZVTk5kUEU0a29PYXp0VmpBMTFvVkZ2eW50bXQ3WlFMbFl3Tm1FRDBRU0MwZWhwRytycHJlWHJNN1p0UGpvd05ybU1qM21vSCtmRHM3T3o4YVYzM25qRzFyUlp2bVFJMmpETkZtclZJallYcnRESUtsb3RDNXFtNGJOM2pTRG9vekZWQStseUMvbGFDOXVsT3Z3OHQ3SmRRaXdVUUo2ZUxPV3FXRjlhdytMVk5WU3lkUlF5dTJnMjZtangwYXlXQWR1Y1VsVnRhV2R0NlVsOHpPTzJqYnM2ZXo0Vjh6Um02YWpIYlJyRi96QmFMZXhzckdENTdYUEliMjZpVW1paFpTallURmZSbFloZ09FRnZHU1pxTFJzVmVyTGVOR0VhTnNyMUZoVGVxTW9RTFdieldKdmZSbnFyekkxcG9Ga3JNYlJOM3J0Snc3ZGgyYVpNSHR1Mm50cGVYVmhpUHFkdWQ4MjNaZHo3cytkTzZ4NkZodGtwYVJVUDI3SlFLK1Z3L1RlL3h2enJsNUJlTFdKaElZdGNvVWtqRzloSlp4Q2tCMFhZZWxVRmhza1E5WG5oc1VVdUtEU3V4WUFGU2lVRDVXd0ZJUStSdE5KQU9CaUUwU3h6RTB6VXF5VStOMlYwUUxHaEtFaDVOTzlzZW5YcDlPMnMreU9OVzdoNDdqRmJ3UXYwVnR6eG1Qdmd2MEl1QThOcVFQR3FxRGVhTUF5TElGTG5vaFhrYnBRUTRvSWl6T29RclVqd004TitGYjFCRFVNaEx3NGtRdWpoMzcwUkg3cENQQi94WUdBd0JxTmVnMW1yb2JTemlmTHVOcXFGSENQVDZId3ZMWXlySHJ5d3RiNzArRWV0L2ZjQ3lzTHN1Y2RNeXo3RGZaYkdPRVk1aDJtMEVBekhrQnc3Z3V4R0ZtYW1CaS9QNjVxS3NGZW5COHNJZURVY2pmbmw1ME4rSFJvTjFBbjdPdk11MUJWRUtPeUhuN2tuRFBJR05LaGNkYU5sb0ZFcW9yaGJCSHc3Q0NXUzhBV2p2TlpId3p6eVhzSkdldVdacmZVRjlBOGZPdk94amJ2MjFpdW5EZHVTRjBxVFhLc1VlWE5iTGlRUWppS2M2RWV4M0pTZjB2amRJVjJsa1RhU1hIUWk3RU8wSzRSSVR4UWVudzZQSm95S1F3c0VvUVhEOEFkRENJUWkwQml1WGwySHhiZ3JaN2R4YWVaWHlOQzQ3dUUrNUxkWEVlOGZnWi8zVkZ6REZCbWlLaU5FZllZaHVwd2NIWnUrYmVObXo1OU4wYkJuVmNzeFNpSHgydnR1N3BvSWxZdHR0a3lVQ2xVYXBLSkpJSWo0dU1NRUR1R1Yzc0VvZ2dsNnFDdEIzb3JUZ0NEMFFFUWFJVzRSNzByQ0c0N0F3enhUU1JWZ2J2cmlYUmplV0NYcHY0YkY0cXA4UGNyOEpndkNWbHhpbGhIRWM0cmdSang3WTJscGJtQnNiUG1EZHR3eTU3eUtmWmFBd1J5enBGR1daVW9Bc2ZnUUFDRmVpNGRKa1BCNC9mRFNaUVZDZml5Z3cyNDJDUm9td2pST1VJTEcwUFI0NkRWcUxEMFE1VVo1b0hHendsRXlJRU5Za0xkSHVOeFpOVCtyb2UvQUdJWVBkS0c3SjQ3K0EwZTVVVkhwcWZhMk9tSGs1aUNVdU1lbm5NMHRMY1UvMG5QdnZubjJTY3UwaUlvV0Z5KzJTblZqZ1E5aG5OdzRpK2pueEdrb0hHYWUyS2dUNG4xY3RNV2NDWWFEQ0FUOWhITnVBa2xhTEVoaHZwaWtBQStOVXhpNmxpazQwb1FtTm91YnBJS2dJZGJQN3d2R2V6QTRRYU9ZZTRuK1FYaDkvbzZXY2lKSWNTSklSSUF0MzBvWlBsWHc0Qk1mNnJtcjUxOU04UnVmRW91WFhySUYzNUI3bW5WcXdTcXFSTEZxdFlKNm5XVGRxRW1pcGY4b0tKZzdtbk16SDNQTFI5Q2cyK0FOaFZIS045Q3FtOUpqM29EZ3ZRWlVBbzZxaUFVeXJCUUNpWWdLY2laSlRXNkNGb3FpYStTZ2s1dTZYd0tKM2ZHYkNzY3V4N0FPeE5uMjQ5dnJTeWMvMURoYjhUMHJuL2xscG1HZ1dhZGg5VHA1aDBhUVZDMURMTUNRejQ3c3N1UVhSbnU3YVl1S2VDVE1FUFBpL2JVTUxsOWR4d3BsbDZucXFGQldtUXhYVmRQNWVRdjFpc05qWGk1YzhhZ3lJbVJDd2MxdGhxWktnRW1PSElZL2tuQU1jVTJURWVRbXZ3TXNTdWQ5VlZXZXVXVllYajcveXluVE1xWmtQakZjTEJwbmlwd1RENTV6TmdjeWtjVkN4STNscnZHNWYyUVVHMWRXQ090K2drc0ZYWEdDQmorenRMNkRYTGFJM2xnUVpxUEY4TkpSemU1S2c2eG1Bd0htblduNm9QRDJ3aGlWcXhiUkxyNUgwd09JUkhwNXo3MVVjcnlreUgrMFpPKzhFNlBpdXFrYmEwdFRBeU5qTXpjWlI5NTZUTVMrTkV4NHgvV0taUnZTUUxFN2ZHSjRPVjloVTJIWXJzVUtGVVEwb2t0UFJrTWhYcXRRY2pWd29DZUJCbzJxRktsWVZ0UG9HdXJuL1Z0b1VIS2wzMzhmNWZ3T2JDS29QeFpCdUtjYmtlNStCR0xkOHA0V0l5TWVUenJmSzZoSGNxMTdLRzJEM0plS2c5N2lXZE04SXZmMmpKdDk4WVZVcTlrOExUemtFTFhwWHV4eG51MDJFYWpTaTQ3M1ZHY3YrWGJocmZjUUZadEowQk15SzVPcllNZFNzVUZ5am9odzVUbWJMdGxaWE1YZzhjUGtOVEtVMTR1dDY4dklVMThPVHg1Q3BLdEhLaHVqVldObzYzTFJQbCtJUWFJNHVPRVFYSnVMdU1rSzJxZjJQQ3MzZTBvZ1oySnNMQzk5YTJpV05NeVVEME9pbUtOSXJQYldPTWtyZ0VZOFc0cExEYllFZ1ZxbUJMOU9iVWo1WlZBTE12WVJDd2V3V3EyaTU4QW9TZ3loWExWSklESVJHemlBZ1dOM0UxMFp0aHRWL09ycUxzNWRMK0Q5aSs5aGUvRTlHZktxeDB2azFXRVdzbnNoMXlrOWJkZWIrOXk0LytCN1RiLzZlTWR6L1BnM1JNd3BEbWpMRDRpYlN0Rmx3WTFuKzZZWWwxOGdQc3VOMEZtbmVYWFNPTzhXN1FwemZXVWt5RjlmSGUxQnQxRkhPZWFUcUt2ckFrRkRDQlBlK3lmdndQYU5QUHFKa3FNRFBianp3VDhpcWhaNFh5Y0ZQSFdDV2lNSHJidlhCUTluYmRKamNCVEtCME96L1lvUjhKQTA3dnlMejZmNG9aTU85TGYzeGxYK3BBSnhrVWcvNTlucTdKN3RocXFnd2tCZkRMWW0wRkFsTFlTaEIzWHF3enBDUVVva2pkVUFVZFNvNmdnd0wzbUZWQ1E5QncvalVIb0hvNGVIa1J3L2pHQ0VwSjVNaXBYSisrb1JLaGN0K0FIUHFHNDA3U0VsWU85dHZ0S2hlQm1hbXExNlQwcEViSmN5cmlweFhpZ2RUemttdTZocEtUZVJTQ0RaeXpvc1RYWEJMeGNTakgyVE9HV1hDSEd2TDRnVzFVdXBrWVhDbXM0ck9JdWJGS0RzT25UZmZhaVFxSDBCUDFUcVMrRVZLSTRCVnFzT3RYOVkzdCtTMzA4MTQycktOc2gwUXRRTngvMUIydko2VGd1RW1PcWdvYnpBMnBla0N0cHBKNzNXTGp1a2hhcXJ6aFVFaHdla0hCT1h0ZXBFVithZWh5RVlGSHFTNHJqSW5LeFNYQXVwSmIrSG5HZXl5aGJQRVlhZFQ4Z3JkL2VkamJVazEwRThiQ2RxOXBCLzN4cGN3eVRYQVRmeElWZDNrcGNvSndUNmlSQ1VLQWhuMFh2aDNQWW9wS0tRd0tKQVZzaTJXeXlFUnZyWUdqQ0lsSzRHNVJzZWI0RGgyWVZxenNEMjJpNlJqOG9qVFBRVEMrYm5zbGZmUVg1dEZVMTZUcU84RXFwRkxreGdGQWxlWnpkTTVyU3lWeHkzTlNYMkdYVFRZdHQvaTAxU2xSUlp5NHc3NXhXcHZCMnRwa29MMnZWYnU1Wnp4S3RIYmtDN3RoSkJiUEY4b2RyZ0pUeW5panBiazZoYXB6SjVmL1lxSXNFQWZBUVNYeVJLeVVhVlE2SE1QZ3dLNjR1b3NLa2taSnlUTTJxSGVyZ3pIVEY5ODZGMHZJeDkzbW9iNWVDT3BJOFRZaVVwNGJCMmFvcXpsb3RPRXVyZEN4M0RGRGRFYlZHZE9HSEo4QlJxUWlOb3RJaDg0dVlpSkgxVU9KbmxUY291QXl0c0F2bnlKUnB2TWdRRFNNL1BpL1lzK3kwcWl1eTloSHY3V1BxRVpVVXZGdEdnYmcySzhyMnRQMVhsSnVNczF3aTdnNkw3MyszWUVWY1ZXZG9JUjFuU0Q3Sk9nK3BlaUQydWM1VzRQRzg3cFk5VUVuRHlxeTgxUmhDd0tiTFpKR0xMb2JTZFovT0hZQ0VNOWJKTzB4VzBxRTYwVUpBbHpSQjZSb2FvL0kraFZzekpYb3pWYkxuM1pONHlGKzE5aS82Z2w5cjUxM0dhKzBKY1k5cWRpK0txM2VhMlR2anRwd0luQngwQ04vY1Jxc3hTV2NSQ2NkQk1wNUlYWG1wVTY1TE1iOXpZcFFScndWQloxb1EwREI4ZEliaG95Q3hlUnphOWlJYk4za3ZRaXppTnpLNHY4WnFHbEg0bWM4dFAyZFhPdFpzVWlIMkxFSFdGcysxYXNaL3ZYRzFwdVZMR0NUMkg4NnlPa3gxR1VEcTFuTWdOeFExUFN5SXQrWXdlYWJZc1djL2x0d3ZZelJjUllhdWhRRlZDR1lvYlZ6Y3dRc3BvS0UyVXJSb2F0UzNtYW9YOEZtRTRWMGdoRFc2T0EybDZiTmlWZk5nWGttMUQwQ0h4anRzazdqZzhwM2JNRkttdGVQS21iY3FxVzZwOWVSUFZyY0RkRDlyN250MGlzVTNpbGlRRFVmYjBZcDNLbnZwTGZpd1dZVXVCNVkrUEh1OU85a2lPc3lzY2d2UUUwVDgrRGpYc3djcWxONW03ZkgvMGtJdzFyb1VieE9wQmNlNkpmVEpyajZxVVR2UzRObmNNZCttOVRlNTVoaVh5VU5xWHRMMWp1NzBUOXpYVXpqbkhTQWRaYmZkdnNTOGVFckdTNkdWMW9hREJIa3E1eWs0MGh4MnFhcUhoS2NQb1ZyQ3RsZEVZQ0tDbHQwajZSUXhOSHFXSzl6RWNxV2RaQXRVcmVUYVNnaTUvdVd4bEsvdGlVKzBZdXAvWFlPOWhxblNLTExidFpaVzExWnh6c1NwelIrUlc1OVA3dFZ2YmZCRU9OTWEwMnJyVHVaazRsemlVd25xK2pOMUtIV25LcngwK2c0SmE0elcxM1R6TEllclBSaEVXMis4aURHc1V4aDZQa3haMW50dE5yN09CRTNZckRpZkFJSnRUcXJzVVc0S0dYSnJ5UWU4NXBuZldxYXA1MGNKWVVkcXVFOWduakxQVkRxYUt0bmViSHFRTjhuM1hxMjNWUXBtMWxjbGlkWE1YQ3hTOGNjcTBGc3NjMXU0SXNqUFdZRWdtWWpwQ1VmS2Z5WFpGYnAzRnFiREtrR2piS0ZxY0cyd2lmdmhlRW5xd0RXZE9EU2RxT1ltRTRsbnRjRzlidU8rbkFsdFI5dURSc2k1cS9NQ2NvamhmNUZRQzZGUzg3Wm1BSXc3MkdySzJLNktGc2FiWnhMWHJhL2poVDE5aXFEWFFMNVNJbTVjVm9VUW94Nm9DYUhoL2hmS0xDUVZEcWJQZkdlVTlCSWd3eHdqOU4vSUtMbTB2NGVHZUNYUjNSVHFsMi81YXJzMi9hS3NUb0dQb1hwUzVSdHZXakJyMHF0UHRSbXRIMmNuMm5lWGloK0pXeHFKYXQyU255blJsbGtId3lPWktlTzVIdjBDeFdFV1JEYVFCOHRuUi9qZ0NOTVRnZlRZcUxXUXB6YXFXQjFuT0FrbzBwdFlnVmF4c29aRGxOUXhmVzQrZ0VVeGlkbTRPWjgrK0pnVzM3ZlltMjU1U2xUM0thcS8zSm5XQ1BVS1RHcmRwenFtbkhuNGtUNlNjY1JSL3V4L3YzTFRUbjdUMk9FN3drRTBERFliYTZ2SXFmdnl6R1U1cm1weS9lVEJDVUlrU1FEeUtnWW1CQkE2d2Q1S2dKMFdJcHZNVmJPeFdjTzM5TEpZV2M5ak5WTmw4TXRHVG1zRDQvVjlBSDdrd1FIaUxva29nNHF5QWhhN2NZTEhZdG5odzJidEQyc0ErVEhBZDVPQ0diTkk2eGFyWmVwbFBVKzB3dE4wdWpXUUhseUljVDlyU01HRmdvVkRFTnFYVG5hTWhEaE5WSk5tcjFEaVZhVm9hRGJmSlh4NGM1bkN4UWxESmxNcGlKem50OGJDd2xjMExEQjA2aUVOMzM0M2VzWEc1eVBUU0NwWld0M0Y5NXpYWWJONzJESTBpazluQitPRVVEbzROOHhwUjZGbDdubkpEVWRtcjRSd2pIY3I0bnZoYkd0ZHNOcyt3SmZla01Fb2lrYVc0bmpOa2ZXWklUeldsR000U0RZWFEvYitYM21BdnM0VVVQZFJOWFRqRTlsNXJxeW9qM3BBYlk4dDJYMDh5aXVSd0hBci9Ea1FqaVBXeGt6dzh3dmxCTHp2UVFlbVp3bTRhNmMwc0t1VXlQV2JnNXo4L2gvR0pEVEZkeFZ0dlg4RmYvZVVYY0RCRmhjUEtvZTA5S2U0L0tLcmQvTlFVYTNvdlRIbTg4cFB2bjJVdmNVcmttK2dwaXZMbDJ2d3lRNjdPZm1TQUxYSWJ6Ly9rWldSTGJMS3lrNXpzamtrVUxOSEEwYjQ0UGpNMmdPYnlndUFJOWo5SUM5RWd3aXhhbzcweFRtbDhyQW9DQ1BiMDBhTlJ0dXRDYkxONzViUElrUFg1cS9qMS83Nk1OemxPbmlmYWVqUS9IbnA0Q3B1cjgwZ2RUSEVvVXNiSnU4WngvejFIZVh1ZDA5bzYrcnBZWVhDTjNUMWRTSFFsMEU1SkJ0V1BrME1IVG5jOEo0NUdvLzYwM1RLbURDYThNRzZEMmpDWExWSEZoM0I5SllOWHo4MmlZZGdTc1ZKRHZiamo4QUYwOVNmeDJodFgwQmYzbzNza3lheXRvM0ZqRTA2VFI0R2ZIZVk0MVlsWHRnekVKQ2NnTzF1YVVDNytnSXl5ZkRZdDgxY2hrY2ZZcWZhUXpJWFdNSXE3K094OTkrSzU1MytJNDhmdndOdHZYY0NSMFFRV1ZyTFlKQmpwelNySFowT1lYOXVXOC9kLytlZC9Rb1JUSmFaUFo2VGxhZi94L1IvK2RQa3p4KzZhbXIyOGtKcGYyc0pQenY0V2wrZFhCWFlpbjh1andFcGFFWk5TRWJwYy9JV3I4N2h3NlNvR0I0ZjVHTVNkeDQrd1F6ekkxZDVBTkNycU4wMDJqSUpSTm9SNk9XUHpjNUxER1p1WDdRUXhJQkdWaEp5Y05ob2NNbWFRWHRqRWU1eUpaOW5OMXRtSkZzUFVnVkdLZ3MxMTVsNkdPV3ZoOWRjdjRNcVZhOWplVG1PTHpkMnYvc1VYNVNoYTBQZXI1NjVoNm5Pblp1aTFwMy9IT0hGc1pSb1gzMWxlLzd1bHpSMDJSTHZReTJaUHBkYkUxY1UxTHRTSG5sZ1BmQ1RTVExsQUduQ0dHbDkrNkQ3bzBUaU8zM2xJNW9oWFpVMVhML0p2UC9za0JCbm1TVHc1d0FnSVUyeG9VdTBMNHl5MjU1c1Yza2VVU0pVS2R0ZHZvTW9oNDJxbUlDZXA5V2FOcy9Vc1B2K2xyK0RnNFlPWXYzNU5sTUQ0NHdmdXdmejhJdGNTeDlHangxaE82VGcwTVlGTEYrWVI4Z1VmL3NHUG5zdmYycmlkemEzN1R6MlFHQjBZdkQ4MU1vSmpoL3B3ZkhJTW14c1p5aVEyVWJjMkdHNjJWUHRWemhFRWFvcHgxYkU3VCtENEhZY0pDQ1dNbjd5UC9aRUNlL3dSR2pYSXlXaWY5SmJYNjVVQUlNb2lzeUVNSzB0TkthVWNRN0hDMnEvSnVjQlN1b0FBYWVWZ2Z4Y1Zqb2FCb1JUSFhSSDgrWi9lZzhMbUdyWlorQVlZQlJ1Y3VZZTcrdkdMVjY4Z05UR0pZTFA2OURlZitPdWJocEEzR1NlT29RTVRyemZyemE5VkdzMTRieUtDRUwvdzR1VnJHQjNxd1dmdlBzUzRUMEowQ25hNEdFR3NHenNabGhZcXZ2eG5VK1FuRGlGOURFa3g0R0J6MWhjSXM1MFhvY2RVUjJFSUVjQXdOTm1KaHR1dUYyM3FlcW1LWEs2TytiS0ozVktGK1dmaE14TWpNTDBobkwrd2pLMWRwZ1FGUTcxWXdOdnZ6bU1yVitUbVZuSGkyQ1RtTnh2WUxhckwvL2F0eHg3NW9DMi9NNStibVpuT3AxSW5IKzd1U2M3bUNxVjRLTHlKYlhMYXhFU0tJYWRSN1Rlb1JFeXArM1IvU0k2ejNuempMWlRKWjM1Q2U0dmg2dS9wSjBKeGtYSWk2dVNvYmRpU1ZpUWhrMnFFRkpNbEUrdS93a1lheTlzMXZNVmNGeFRTSFNOOURMRDJLMmk0d0hCTXAzUDR4UVpiRTJhZXFxZEZOQTZnenZSWVdGdG5hc1R6NzExY2ZSaTNPRHkzT3BuUGIrV1BUVDU0VGZmclgwdXdoNyt4c2NUaVUzQVFPTG5KTW53WnBuVEdBR2ZWc1lBWG41dElFaWQ5U0tXRzZEVkNOUmNjb0xBMmEyVkgrd25lTTB5SGd3Mm4ySlVhVU5SdkRNK2R4VTFjemxtNHRyMHRwN1ZpM3Q3UGNIeDNZUjBsRGswaUFiWUltN3ZTRTZLNmJ3bTlxNGl5UnVYM2VyLys5cXRuWHIrVkhSLzZVNDJYWHZydTlNUmc3eE14bGlhaXA5Smdyei9MOFJUN3hWeWZHQm5iR0JoTTRvRjdqOE1rdEsrdWJUQ3ZmRTc0TVlmVVVGUjZUWlU5RjlzWmc3bFRKQ2w4eFJoTHROcTNNd2lPSFVISmR1WVRCb1ZEb1ZhbllWdklVNitLZGtTeFdVYWVJRlVUdlZHR3VCaFR4Mk5keUJVTFQvejJwZTlNZjVnTnYvZDNLTi8rN3BrenVaMGJUMWkyTXk0KzB0V0hCR2ZnSGs1RERZYmFaaWJIamhVN3hVU3NMZktiK0VXQ21HbjdlRTRNaTczaEJGUEs0OVJlTkZBTU1CMFI2TXdBbTBSSlQzY2ZZcE9UOEhQQlhyZ2phdDY3VXFuS0daL05xa05xWExFaHZPOUlmd0wzM0hVRWswZU9QUEh1M015WjM3ZitqL3lSemYvTS9QUU1VK1FSWmsrK3lDL2JxUklNaFBnUk84L1lQMzloQWRjM2E4Z1dtN0txbHU4eDdBVEU2eHd1Q2lVaU84YjByalRVbmN5YWRmWk45Q2g2NzdyYndaV2dhTXBTUWZMYUE5RnUrQlhPR3pqVjlYbzlPRFNXUkp4VWN1TElHSTRmSE16cmpkb2p6ejMvblRNZnRmYmIrbm5VOHNMbGFVOG9mS3BzdEpicm9tRGxUZzZQakNIQVR2Ry9QdlVQdU8rQnU5bEpGZzBaajl4NVUxYTFMZGxZbGJOd1laanE5UGlGd21teGxWNHAxcEU4Y2E4a2QxSDRDb0ZndU5PSVdGOFM0ME1rZnF1SnNGL0h5WWxER0IvdXg1Y2V2R081bHN1ZCtxL3AvNTYrblhYZjlnL2IzcHViV1o0NSs0TXhidm5USXF5b0dESFJuY0RHOGhiZXZiS0VTUklwM0lHZzhKQjR0SWlJdm9FVUYrN3QxSVlDV0hZcG44WSsveFVXc1ZVNUtORTQvaEo1ckxoZE5aVUdYODhYV094eUtzdlF2WHhwRHFzYjZXL1ZRamoxNzlQVHk3ZTc1by8xazBSeFhIbG41aWxUcjQzbE5jL01Ka2RRaXhkWHNIanBIWHpsaXcrNWJUOEx1cGg5YzFFNlBkY2tJcXJodVBTT1NXL21WcGNST1hnVVZmSldPQktYYlFhaFE3M1VuRjBjSGZ2SWsyRnFSSS9pcFRCdmlJSjFwcjgzZWVxVk4zLzUrS09QUHBIL09HdjE0Qk1jK1V3bXY3SXc5NzNVK0ttWERWOGduaTFuSnI3NU4xOURxWmlsWHF4S09pam04MUtlQmVNSnR0cWpzbUQxY0pxalVzS05QZkNRN01WRWlIakZRbzZpdllHcmw2L0wzN2IweEtQNGt3ZFBJVjlxenF5dnJUeDY3ZHFiVDErWU83ZUZUM0I4b2wvS3RvK2YvZXcvWi9nMGMvYnNpeWtDeGVsYXVmcU5hcVYwVW9SdG5jaTRzN1ZKVFJsaFh2a1JHUnlqQUU5ajVNQTR5Wjk1NXRWUUk2Z1Vjam4yWG1xVWJqV0VOWDBtR3ZLOGZNOWR3MmYrOXJGLy9GaGV1dFdoNEZNK3pyLzRZc29mODU0czdtNVBsWEw1RXdlT1RzWVpwaW5ObzhlOS9xQkVUM28wWDZKclMrWDgzT3ExNnl2aGNIVHUyOS8raitucG1aay8yS0Q5eC84REh0bkU5TllLVFRNQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURjQUFBQTNDQVlBQUFDbzI5SkdBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFCalVTVVJCVkhnQnJWb0pjRjFuZGY3dSt2YW5wNmZGV2l6N09VNjh4SGlMd1drU0ZnWEtORzFTRUZPZ3lYUmhLVzB6TUNWT08yMkhNRUF5YWFDRlFwSU8wM1k2d3dSSXB4bkc3WkEwZ1lhVXdYSUNKSTZUU0E1ZTVDMlNMZG5hcFNlOS9iMjc4SjMvTFpLOEVHZjVOWGVlM25Mdi9jOS96dm5PZDc3L2FuaWJ4NTdlM2tRdW1Pc0wydWIyUkxJbEJmZzdncGFkU01SaWlVREFnbWtheUdZWDBxN3JqdVFMVGpvVURneEd3Nkg5UmlBNCtLbDcvMzBFYitQUThEYU12dDVVb2l2UmRaZmhsM3JEZ1ZCdmExczNtdU5OUE9LSWhFS0lxc05HTUJpQTc3bUE3cU5jY1ZBcytaaVptVUU0RWtZd0VJVG1lNE9GUXU1NzZiblp4ei95TmhqNmxvejdUTis3ZTEzSC9VbzVsKzlOeHBvUWkwYlIyZGFDTlYyZGFPSC9JUnBqV0JvQ25MaGxXTEJ0Qzc3djE4NzJ4UmdhV0lMck9qVGFoK05VK0w2QThmazVuSm1lZXZ4bkw3LzY4T1A5US8xNGs4UEFteGdmdlBIYUhidldkendXaThidUxaZktLVVBYRWJLRGFHbE9ZczNxYm5SM2RNRGlaNFloaGxVOVpwbVdPbGZUTkg1dXFQRFV1YlR5S3VjelROVkJpMUdpc2ZsS1pkTml0dmpKM2h0Mzl6WUYvUDJueG1iU2VJTkRmeU0vSGhnZVRvek5aeC9jc3VQR0FjLzFlblA1UENwY2JjTXdFV0xvdGJhMm9pblJyTHhqV1NZbmJrSTNkQjVHdzZoZ0lLQStOM21PTGd2QXc3WnRkWDR3R0lSdDJZalMwMkhEeHVyT0xuaWUxMnVId3NNLytiOGZmUVZ2Y0Z5eGNjZUd4MU1SUFREZ09mNGVSaFE5RWtDNVhGWVRETmdCck9wWWhTaERVZU9YSG8wVFEyeCtybXM2dldhcWlZc0JZcWdZN3pFa2xjSDhUb2I4TDhQblM0VEdSUVBNMDJBSXBrVVEwanhrTXZQM25oNmZHajQyUEp5NjBqbGZrWEZIVDUzcjQ4MEhPS3VVNU1mTTdJejZYRlpjMGpZVURxckptWnk0NHppUWVZclJFbUlXODh6MVBQRUFpc1Vpc3BrTXlzeXpVckdrRnFjay8vTW9Gb3JLWU0vaHdmQVVFR29pSUNVU1RiQVozcWRQRFBIYWJzbzJ6SUdqdytmNnJtVGVyMnZjMGVIemQybTY5a01mbFlUSEZNMFhGMUZoMGxjMEcyV1BJUldJd0tOM1NrNEJUaWxMZTBwdy9DTEtxS2lNZHRXRUhlVFNpOGdzWmxBU2c3TDhmakdIY3I0QTMzSGgwTkFpUXp5L1FNTUxaUlQ1ZTU4ejA3a2dzOVBqQ0lURGFHNXVSN21ZaDJmb0NVdjNmamcwUExibkxSbDM5UFQ1dTN6WGUwaTk4ZVZtdnNxSE5hdFg4MFJOaFYyQTRlYlFtN0w2VlFUMFlSTTg1TUxpQmJvREFwQStvODhNRUVnRVJIeFhlYU9PbXhLcUV1YTJITFlKVFU2V3NHWFptSmtZUjVrNHMybnpGcFhmNGwyNUhnUGp3ZGN6MEx6Y0Z5OGRQZFZYTHBjZU1tczVJVVhEa1Z6aWxNS3hLRXlCZVU0cWsxbGtMYk5WblpJSlJpTXh3cjVON3pyMG5JWVNQU0cvQzBTaUNFYkRxaXhvcmdlWGk2R1g4aW9uN1dCWTVhR0VkS0ZjQUQrR3gvTXFaUWVUazdNSXRIYkRDak5DNkdWWkxHZ3lDMThXNGNIancyZEhOcTViOC9nVkd6Y3djQ3psZTlvalBvdXQ1SXJrajZTNzVKS3N0cURpY1U2azZGWVFvSmNFS0pxVHpXaHBhU0VBTUZ3NTBRcnpKcDNKWXZ6OE9PZGl3WW8zbzMzVktyUVFUUk0wUnFzUWFPeVFNa3BLUUtsY1FaN2hudU4xcHhieUdCa2VRenBiUmlidllPdTJkM0lCSW5BcVpmN2U1WHlzS2hsUWJ0Y2ZJY2dNYmw2M2J1U0tqUE50ZXg5ZkVnclZQSzhLN2VJSU1aRXJHdVBGbTh3Z2lwNmdwVllGRTBFMWV0a1ZEekFhUnljbXNEaVhabUdQY1FGc25EbDFDaWVQSEVaVExJYU9SQXZXclYyRGNOUm1LTnJJWmJOWVdGakE4T2c1bkJnZnAwRlpGSE5GcEJkS2FPdGFpdy8vd2NmSmFDb0tvTVFvWDhDSzRTbnZaWjZhWnUxam1kcTVjOTI2OUc4MGJ1REk2YS93bEZURFVER1FLK3N4RlBTUWhjVmZIY1RhZ0laTnQ5MkdYeHc2UURZeG8xeHFhaVlMdDZXTWRRb2x0TVRpNkdwcHdva3oweGlZbUdXb0J0SFRIa05jWjc2WkZTd3V6Q0lXNmtKQWtQRDhLQTZmSHNXNWJJbUFFV1RJYTlpMThScE1US2VSdHhPSU1hUUxwUXJEVU5DWTVjTmlORW5PK3FneEhqOFZnaUYxOE83bHRxd0FsT2Naam9UdGUxZDRzUlkyRmY2VjZTbWpuRWZjMXBGc2p1SDk3M3MzZGw5M25hSTVtdnJqYW1rT0VtRWRMZkVnWmljbUVRL0YwZDIxRHAycFRmakFyYitQSk90aDIrcE8yTEVBWUpXaG1idzJGK1RxM1RjZ3Nta3p6SjcxMkxCNUo0NFBIbVlaaUdEdGx2V01IcGZyNTZ2ODFIU0ZOaGY2Ukdycm5zTW5obmRjMW5NTXEwZkVHQjhyU2FjVVphSSsyWVNMZ0h4QmF6eWRFRThZYTJNT2FVeHlxWEdlbk1jcXJMbGxSTWhRdG16Y3dMdzBjWlZtb1pETllPTFZsOUFaRTJDSkljM1M0SlkxSWlCVXFOcTJodXNUTVdRS2NpNUI1dG9ObUt0NHVHcFZpc2I1YXVrazkwMjl5bmJnTHhrbzcrWFFMZU5CdnIzNUlzOGRIRGpaeXhONmErNVNIdk9YWDhEakJYbTRncHBFTzVOaG1wOWZnSUIrZTdLVnlGWm1ybmxFdWdvblFmckUrcGRvYWtZOGFpQko3N1JGSStob2FXZHhqc0hKRmhBaThKUzRqTHJMS2REQ2NtWU9MVXpzTm1RUmN0UG9ibzhqeURSb2FrbFdGeGhWU21jeHQrdkcxSSs2Z1RML1g1MGM3cjNZY3didVd1NHBaYm0yNUQ5R0d4eDZ6QTVHWVlmamlJYlpCUVFYWUlaRDZPcnNKTm9WRmF2M1dmTkN6TDhLWWR2MExVU2l6YnhMSGlYbWlNNEZLZEl3UmFGZE1oTzN3QzdBUUVHS05tL1YwOXBNQ2hlRHdVWEtaT2NSekxObXNoMlMybGFuY3hLV0xzTlVQRmdIdStWRE16VEp2ZjZHNXlUWGZOOXJVQnFmSjlXOUp4ZVE0ZmhTWTF3WTdWMzh2NFJzZmhac1JvVkpvalVSWnloeWdweGhSZFpEdHhraUFYaEV1QXJaUjU0SHJXQVlzM1FFSmRkMFpCbCtUc0ZYclZDVXlFc1dxdEpCRGsrUmJhSnZLSUlLUzBabW9VQUF5akdVRjVBbmt4SHZ5ZHdhTkE5TDNKUXIwVHN3TUp4b0dFY3ordnhMaEtJNnFmWmFwbkdhUjk2WVNHQ2VvVlFoRjV6UExXSStuME5UYTVLNWt1TzVYR0Y2aDFITFNUSFVXSTBGdWdNc3dDRjZNQnlKUytaZ2Vtb0dib1dmczk1NXJzKytMMVNkcEVtdlFGb2VnaGM5NzdOeldDQWxLNVhLOUJwUmxEVlYrR2pWTUFsSlhiM1dQVmczMEl4NmV4ckc4WHFmcUh1cDdxbjZlNmZSWjNIQ3ZMVkRIaFZKYmNma1hJRXdicU9uYlRWQnhCQTBRb0ZjVVVMWm94ZGxFcTVidlpZVnBDY3BNY3pNem1KMlpoWkJUakxPRGtJOEVHbE9zSloxSUZmSXErN0JKeGlWdUhBTFJZY0w1eUJHc0JIbTA5Yldxa2hDakdSYXJxMFduSy9peWZyN0pZL283MU5HN250K0lFVkxkbmpMTEJlanhLQkd3dkk3VThneC93L1J6dUNxSGl5MG5VVzJtRU9JWkRFek1jY2NncHFnY0VkRGw2SnVxbk9GVXJIM3crenNsUEpzbEdnNVBEbUY0dlNNWWlqNVVvN2RRZ0Z6NlRRMnlQMkVhRE5DcHRNNUpOZHRnazZEb3pUT2tVaW9aQVRUVUJLbTRucU5lVW83SlllL2xFb016WUdFOUpJNzVBZGVMYzlVcm5sZW83bVVvOXFEMFRBRTRabmlDV29oN1QwWVpSZjl2ODgvaHdCelF4SmRZeTZsT1VsMjV5cGtaRUppM05UNEJDcDVBZzV6YnA3Zlo4a2ZzMlFod2s3T25CdkR6MzcrTElLUkVBcHNpWndLWlFjQzB5eHpMQmhMWXBhU3crVGtwR3FUNUZyNVFxR1JPa0w3cE8ycUkraUtsQXBHK2t4RE0zdFZqWkNlWDcxVzIzNkpWVU0zVkM5V2pWd1BPZDRvMWhMSHpPUUVJcXh2Mld3elNqU3dUQTVhcWJEWXMrNFpOQ3JMVUFsd0VZSU1SWmx3c1ZqaHBJRnpORVRxWVphY3MwUWVXU1pQYzZteGxKaGZMNzN5S3NzRFMwallRbzdJTzEzTzRacG9BaVp6VGJJbkdJdW91WEY1RmMwVHpVVU1rN0NVc0sybkUrcXo5YjBkWmpnYzJpNHJMYXNpUDVvZ0p4d2RIVVdCSzNUaXhBbHMyN1lOa1VpRVlhYnh4aUU4OExYNzBkWFZoWHZ1dVllRk9ZMTRVNExua3VFejdSWnpCUlpnaGxCZWFIMFpIYXVTaEhnTml3elhFME9uRVdZWXRsRm5XZHZSZ2pqcFdZYUE1SE5SUXh0NDMrbHBISHoxS05iMHRDQVNqS01BRzNHV0JwOW8yZHpleW5DT1lXcHFTbmxyZ2FoWlR4OXB0VHFvMlZ3RWhENVNqTG5BbnFGanh6cE9uRGlKclZ1MzR1bW5uMWFUbjV1YlU3S0JKTEdzenV6c05MWnYzNFpEaHc2UkZpV3FSamUzNFB6SUVCSjZrVjcyTVRROFNvckdmQ1BxNlpRR0pQZDBJcDRzWEF2TFJpUVFocHR6VU1tNU9IdDhCSGxxUHFWMGhzMHFnWUhlaWhCMWhYTldDZ1F5RXVlMTIzZXgzaFVoV28xRWw0U2ZFR3hKRlJuVkhoSnE4ZXRodVhRUXQvSzVYR3J6cGswMGhraEdOQXV6NjMzeXlTZHgrKzIzNDZtbm5zSk5OOTJFQXdjTzRPU3BJU1RaMXV6YXRZdGRjVE1XRnhmSkV6dlYvK1c1TTZSaFRkUWdaMWtTU2doWTNZcWFTZGNWekplNDZuRzBkM0dSRnVtUHJpQmxTeE9CTGRjaXl6RDN2QXFSTVlNbWx5RVlEdURzbUlQajdBeTZ2U0tDQktsQzBGVDNGY0FRNDR4bFlwTzBYc0k3UGE5dWtGY0RGR1Zjd215bUd4d1cyNTZlTlhqMDBVZlY1QXU1UE5Mejg5aTVjeWZpaE43dTdpNnNUYTFHa2xTb3JhMnRvVmlaVW92b0ZWMDNHWEpoYkZ4M0ZWNWtXeE95REZ6VDA0azUwck1reGRuV0pMVVcxaldxeTZwMVdjd3ZNdmRzZUNHL1dpN29pRWhKbHRwbkNKY3c0OXI0M2I0UDBkZ29ranlubGZUTzR2MWs0c0pTSktjYVV1QmxoNTh3cjN2WE8vSG85NzZQejM3dWM3aDJ5eFpzWVdodTI3NmR0Q21pTGpaSEk3ZHUyNDd4OFZGTUVFaDZVajA0Y3ZnSWtjL0JlNisvQVZsNlBHSktpam00ZnVzN3NFZ0FPWFdLK2NXYWNOWHFMa3pPenF0MlplMmFMcXhxU3lxR1VxSlhodmliOFhOVDdDN0M2RjdWZ2lZYWtjN2tjZVRzT2J6bm81OUdjc2R1K0dXaU50dW91a0pXTDlTU1h2VWk3dFdhMWxvb3JzZzkvYXIxNi9HUDMvZzZTYStMOS8vMkI0UlE0dWpRTVhKRFIxR2hKNTU2VW4wbkNUMU4xVXN3cWF1SFhteHR3YWYrNUkrUVovM1NSUFVpTTdFMUY3M3Yyb1V1cXM1alkyT3NWV25NWm5LWXBUZEdHZktMTFBLQ2ZBbXlsZTcyVG5MU0R2UXd0S05NQlRaVEdDWnpDYmQxWXVmdWQ1RzZlWXJ1NmFiZVFNRGxKTG5XeHkwenJHNlUxdmk5OEpkMGhuTGJUMy82VTVWSElwb09EZzZxLytXRTYzZnZWcEpja0RyaTFxM2JDT2srMnJrWElQRS9mT29vUFpnamEyS3NzOXVXaFlrWUhuNnY5ejI0YnRzVzVlbnowM000OXRwWkhCdVp3SEY2NnZ6c0FoWjRiWnVlN2U1c1YwMW5tZ3R3bG9YOWxXTW5zZlA2bTJyOW0zUUNiSEVNdllhTVM4WmRidFJMV3ZWM1d0cjQyQjEvZkNkQkpDRUlxQlFveHJhZ3BreGVXRXN5bWF5dURDOGVpN01qQ0VSeGlEWHB6ci84RExYR2dxcG5PemYwa0ttd0V4RHY4ZFZtVHNhYllxeFJGZzR4aEhNczVqNXJtRGlqSXJxazFDcEw5RXlSSkh4TUxXYng4ckhYTU12KzdxT2Z2RlBKZ1FSYkdtNGp3b2dSVG5raEdpNS92N3oxYVhoVTA0YU16MzcrYjdpWjRXeXFHN2VpV1YxMnNtb1VLYnVWaWI1Lzk3ZjNZbnA2VkVIKzBPZ0Uxck96WHQvVkpyT2hIQjVVRGF2UDJZVWk1SVNyMm5ENHlCR2NPanZHL0V2REVUckxTVS9TcTlsY0RobVdnZFBqTTNoMVpCeTMvZUVuMGRaek5RMHJLUUp1RWp6QzhWaXR4Ny9RUy9veVk3QWlQR3Y1TjJRV1M4VXpGbXRSL1VlcTB0Y2FYYm1BMHZQNXZXVWJTcVBjdS9mSExQQ0VlU3RLYjZhaDJWSDh5dzkrQW90aGU5TTdOakJ6SExqMHZtMklWRmZFYW9MSVIyNzlIVHgzWUFBdkRoN0YrZkZKdk1MQzM5cVNnT0ZUNzNUS21NbVU4T0dQL3lsMjMvQmVzcE9LYW9TbDl3NndZR3NYR2JYMFdnY1ZVY1NXL1FJMUF3NlJlT2lERjdxNy9odGY2Zm1HQ2xHYmt2bms5RHdlKzY4bmFHZ0VzY1JxTEV3dXNLWlJhMlQvOXMzL2ZCS1JQL3NZYnJ6MktucU83UXpaaU1iSkd5VFFLUzVPKy92Zmc4MnBOWGoyNENCT2pvMWorT3daQk8zcXRsYWlLNFVQM3ZvaFJrV0JqU3J2SzN4V0JGL2VVeW0wL2xKTzFRR2o3b3k2a1RMRUVkWFBwVFB4KzdWOXdwNUwydnlGOUtWNkFWY3B3S0lFZzZyVUYrLzVPdlhFQ2ZXNUhPbTVNVGJVVTByLzBEd2JZVFpGWC9pTDIzR2ppRHJzeVJ5Q1RNVXZ3Mk5mNTdIT2xlVmdiWnhKejVONTVGVE9VUmJBWTg4OGo5NWIrL0RsTDM4SnhVeUJvcEhKbk9YR0pmTldUZFhYTGpFM2Y4VlI3K25xblFMTDZUcjk1cDA3MDd4QS84b2ZlNnFWcjdwY3Rwa3NmUFdCYjJINHRYTkVTem14cEQ0UHhUdDVNVk1sUDF0djVMVVF2dlN2MzhXK0l5ZEl5cmxieWhVTW0yR2xxZEFOeko4NDZWd1NWN09VYkw1cURab1RRYkw4ck1xcEh6L3hKSjd2MzEvZDNxcnRDbDFpdlZjWWQ3bEJEdzd1M0x4dXBOcUp1KzcrRlNmQ1V4MUJnT0gzMnFuenVPZnZIOENyZ3llVXR6eEtEQXFwbUZzR080SndySTNoSkRjaVZKQ3RHcUVtM1BmdDcrUDdQL29GRFlvb3RjeFNjTTZ1SWkrOVcwa3RtakNUTWRJc2w0c2lYWUZCUlB6bU4vNUpFZll3YzYzT0g5L1lxQm5zZTk5VFJxbzNaZjBoK2RkWG9nUlhPeFRGNU5Rc3Z2cTFmOFlYdjNnL0RoOStqV3NyYlFZM0drMVA3WWhxcUFKUEpFbzZac2M0V1g2bkVRem9jVHZTakgvNzc2ZnhyVWYyUWdzS2x5eFJMS0lxSm1vME93U0hkWE4rWnA2cU1uOVAvYVRDS1BCSXZDZElFdmJ1M1lzbWhxUXNuQXAvUlJ2OFpZZFhPNnJqUWhWTUpzZTFVM3NIaldEdVAzaDBIemxqYjQ3dy9KMy9lQXd2dnZqU0N0ZWJ6SjhWTXByY2drQWk5M05LYzhndFRIRHJXUG9vMmRCM2xZRHFGb0cxclZGOCt4L3VobFpZUUhveHo1NnZ3bFlwaDlIejU1Q3RGUEhTOERRZWYvWmxWZFFOaXhzaUxJYjl6KzFIUjA4WGFWcTVXb1k4YThrNHJZYnE3bEllTnNCUWljZitFNXZXOXZRdGVZNWpQcjF3M3pNLzJZZS8rdHdYMkFVY1hJYWVlaTMzYXNvek0xVkpCNUxBdkpSR3loVUlKS2o3dDFFeVlCbmdlbFY4MlRPUS9YQVQ0NHNsM1BIWEQ1Qis1YWx5Y2NPamtHRW5Uc0dISEZOYXFsbktEWTNGUXZXYTk5Ly9BQUdJYVdIRmxpbk1XblVmak1DbGprdUFqRU92RVM0ZXFyOXZCUFlQSHYzT3lKbXoyVjdPT1ZXSDNPV2VVdDB2NzFGbjQrbzdpcG1pWnZuVUoyVXYyNkgyNGJGOXNYUlgxU25EVnlHQ0VrOTg1cmtEYUcxZmhWUkhNK0dlSG1GVEs1dHNQMy81TUdZbzVFcnZKN3RURnV2ajZkTm5zUGQvbm1HLzVwRzBiMkdhQkJUTUs1SXNteUh3YXlWQVZ6SjdQY0JZbGZzM3J1Mis3eUxqWkRSM3JEdkVrKzRVcjJqTDRybXFEZW9OYjRybmxOSHFjMDNWSXRtbTBnZ0tIdlVFa2RNdFExT014UmVRWVN2anNKUzh3Q0l1VHpWc3ZEcWxYc3Y4N1l1L09vN0p4V0p0MDlGV08wa3VROXMwNDNqNWxlUDRNWnRueWMyeHNRa1cvaFp1bFNXVWdGVHRDTHdWbmpNYzNQend3OTlNWDlLNDlQVElSTHc1MWN3Vi9LMGxkbUlvSXhxY1c2UTdDVkV4c0JhdUNsMU5VWUNwdjRRVHFveFFNMWZ0U2tVM0ZJcEtZZmRwNE1ESk1VVUczcjE3dTlJalh6cDhuTnl5b0VRb2o4QlNJdGpvd203Y0FMbHNKM0xzeUErK2NBVFBQWHNBcjVEVGlsaVVUTGFoamRLRHZ6UXJJZGIzclYvYnVXSVQ4cUxBVGFWNkUxN0FIdUNxcE9xZHI1cSs1NmpZRjY5SldDcXRrQk9PVUZlcHNPK3FLbERjT2JDcVc4Ylp1ZGU0Y29zS2dVbHloTityMjRrUkMrd1JZMEVEVzllMmswQ0g4TXZEUThpVWVROTJISUdRYUlPa2U0RjJxbXh0U2lHVHpsMXFyOWZJK3pLMmJOK0F1ejcvQ2V4KzV3NHVTR1hrNnU3MmRSZmFjdEdlK01oSWY1cElkek05a1Y3UllxaDlhS04yNkxXV244cHp1YUlXUU9xV0VsVlo3enlDUWpqYXdmQmlHUkErNWVtTnZKQ05SdmwzaXRMZEw0K2N3ZWhjamtLdkZCcnFqM3J0U1FpVy8yVHphcFlXV3kyL3B6WWF0WWFPRXFSQ2ZYem9GUDc4MDN2WXF1MVBjL2ZwWmx4aVhMWkJXci8xdGo1RzB3L2x3dFZrOW1waENYbGtvcXBkdUVXMWxTc2VpM0NEVUtTRHNsOVM5Y253d2lqbUp4aSs1K2xCU3oxc0kzMmpESkgzS3J5ZUxkNFdiVk92NW0rWmhuc01TZDFvUWt2Ylpubzl5S1hLcWNWUk02MTE0SjVxWWczMWVFZCtjZndqK2ZUcFMrNkpYNVlHekUrZEdFcDJYTFBBM0x1bHpyNmhubUhRVlg5bHlFYUZQUDRVdEZUWFVQMit4dEtKZklLWHNuY3Rld28yQVNXYnl6YkVIWG5lUy9LUUd3WWt6Mnl6REdXZGVrakE5U3NxL0V5TE9pVVJXTzJnZXJWU3NOUmtxenpuZ3QwOWYzN2d1NWV6NFRkeW5MbkpreThrT3pZdXNMamZjbUZwRUNEUnlTcEVYTEprUjZmMlNJWkI3MG1lZVpyMFpHVDJSb0J5M0hsdWNaVlV2dFJCU3JhNFJNRFZ2T3JldG5RRWFxZklFTFFVaWNPZ29FVDlrblROMEplZXFGZ3l6cjk3L0ZUL1E3OXAvcTlMNE9ZbVQ3elEwckg1a0tscnQvQ0NRV25qNnpKQWhTVGFaSFBxcVhwVzdjRVVRNUV1dXJhWkxGdFo4b2lIcVpmVXcyNXFoNVRxbUc3SlBycWxPbkh4ZHJrc1hMWDZSSkxQY1BkZGVVNnNoZUVYVXZLNmVxS2kramdGaWI1MngvanBmZDk5dmJsZkVUdWRuUmdhYXUzWTlBUFo2dUlORXN1OXVMelcxUEZIMFRZZmpRN2FZbmk1M0dpMFRFYzlrQ1BTamZxSzIxZENEaFRiOFh5RnBPSkZLWjlsUVU2V0ZaUGRoRkhUUmZpN0VXNnEzREF4dk8rRks1bjNGVlB2bVltaDlPems4WWRiMnEvUmZMVzk3S3ZWckxPVmVxUFkwRFJxT1ZJTlg3TktkejBSazB6dTBqaHFsMGF2RVFPdnR2R2lWMm1IMGtYTFJHR0wrM2V5azF2MW1QYXc1YmgzakkzMFQxenBuRFc4aVpIYTBaY3lYZWNSM3JSWGJpdzFUMVBQNjFVTlZnQ3c3TXFlVEpoTlgyN2hIRW53QXZYWmtncHB3NnRXb2dhZFUvV21DaURDVWx5ZGNuN0hOZjIrYTk1OTd1VC9EK0lOampkbFhIMWMvWTdiZWptcnU1aUhmZlhIRStzVFZZYldSQnhYQ0xIb0l0UXRDL21URE04aUM2ODhSTERTT09WbFFyeXdIOS93K2tuQTd5dW1aL3J4SnNkYk1xNCtObTI2SmVYYlZoKzNxejdCdk5teFhJc1JqM3Fhb3hEVTVDWkpmdkVzSmZpTVlobjF3aXlzcDhxRVJCSFE5cE45UDVTV2piNjNPTjRXNDVhUEZBMWxFdTNnck1XcjIwa0NFcHJwcHhob0NVTWtDYXBkNmZremFjOVpUR3VHT2NnSm5DRklNT1Fxajc4ZEJpMGZ2d1k5emR1Z1dqYUdKQUFBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRGNBQUFBM0NBWUFBQUNvMjlKR0FBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUJ1MlNVUkJWSGdCdFZwNWRGeDNlYjF2bTFYTFNCcXRIc21TTEhsSkhDOGhpeE9TV0dZbkNjUWhZVHVuTEQ1cG9kQnlFdjlWdXRBNDU3UWxYUTQ0TFJST1N3a2NPQkFvWUZQS0NRa2t0Z21RUUJ4YmpwM1lzbVZwdEk2V2tXYlI3UE9XM3U4M3NwTkF5RWI2a3ZGb1p0Njg5L3UyKzkzdi9rYkQ2M3djT0hBb0VvYXgyekQwclZYRDY5VTBiWnZtZVJIUFJRVFE0RllycUdaUzZaWHAyYmlXeTZVclRuWFk4OXdqY0RDOFovKytPRjdIUThQcmNJaEJJVk8vazRzY3NteG5xREszZ0dJK2oxQnpDM3pSS0d5RFJzbUovTWZqZjY3blFYY2RsSmRUS00zT29aaFpndTRCanVZTWU2Nzc5WXBiUGZpSi9mZkc4UWNlZjVCeER4NzQ2WkJobUhmenp5SFhjMkF2SkdFbjVxQlhiRjdaUU5WeG9mdDg4TVc2WU5CSVQ5ZWgwUWd4enRNMC91M0M0S01ZSDBObWNvYkJzMEVId2VWSjFXcjFZQm42Zlh1L2NPOWh2TWJqTlJuMzhJR0h0d0htNTZGclEycWhmRzlsYVI1bmYvTUVUTnZCWUVjM2ZDNk40OVdkY0FpaDdoaXFsaCthR01kemZUNkxSdkRtcFNKV3hzK2h1clRDcUxrMHpZYnJPUHhBUThYd0lieW1HdzJ4bnNPZXJlMjU5WU83NG5pVng2c3k3djY3N29vMCtDSjNod2JXM3hWczY0QnJtcnlBcGk2eXNEQ0h6RXFhaXl2RFRXYXhycTBkbFhBUU9ScFJxRmF4bEVvaW1WeUFMeERBMnJZMWFMUVoxVlFXZXRWQmxkR3EwbHBiczFHRmprQnNMZXA0ZmZqcEVMNldaSFkxN0x2MXRwMzN2SnIxdm1MakR0ejFhWUtEY2Npd2ZMMldMd0M5T1FLOXJRMEYxazVtSllmVXlnb3N2OFcvbHpHVG1JR2ZrYXBuMUNxTXprSXlpZEY0SEFGK3orSXRMVVBIcG1nSHR2YXNRNE12cE5LMElHRFQzQWlqcXhPV0dXVHdOTEdKWlVvbjhET25tRWR4WmlwZVRNM3QyblB2S3dPZVYyVGNRMS81MW01N2JQVCtvRzVGcXBhQnM0ekNxYWs0Q3A0TlI5ZXd1THdNbS9YRk5JWEo4enRZWXlQbnpzTmdWRHFpcmJCWmo2RmdDSGFwZ29HMkxtenY2Y2VUcDU5R1EzMGQzbnpaMWRBYm0rRjJ0Y0dsOFhJWlYrcU9mN2lNZUtWY1FINXFCbVZHM1pEUE5LUWQzZHV6NTdOL2RmRGwxbTI4M0FtUC9leXhPLzNOelY5cjZsMFhtTXNzNFA2SC94Y1BIM3NLYzlrVTZpS05DSVhEY0xpUUtnMEpoVUtNMGhMR3grTEk1MWF3WmV0VzZMcUJxZWtaRkVwbHBMSVpMS2ZTc0YwWGI3N2lqWmd2Rk9IcjdVYjM5cTNRUWdIV0lzSEg3MlBrTFBocFlKbmZ5NThmZzVITHcyQWtKY0tHWVFRMHcvakErMi81VU9aN0R4OTRBcTgxY3NlZk9IcW41K3I3TGRPSDVlUWkvdTRmN3NIWlNhWlgwSS90bDExR0w3dElMaTFqYm00ZUFYK0FxYVJqa1NuWTFCUkJwTEd1ZG5WWFYrOVhDRFFyVEYyRG9LTHpZVEhaQmdZR0VZbTI0Sk1mK3pqTWdCOE8wOUJmY3BBamN1WW1aNEZTaVVtcHNSWmRsR3diWmJzS3I2NFJ2cTUyK09vYVlPdmEzaHR2dm5iL3F6YnUxL3YrWlhkd1hmOEIvN3AxOFB3bXZ2Q2wrL0N6UncraHFhVVo5WFZoaEpsU0kyZlBJcDh2OEd4ZFFiZ3MzR0JxaGhuQlVIMFk1WElGdHUycTJ6UTBOS3JYdVZ5T2tTWXEwakdtWWNDeWZQam9SL2ZnOXB2ZUJZK29XUnlmZ2N0clNwcExTNUJuY1l4RGgzcHRUUWcwUlZHUnRIWFpMbGp2L1BqV3Q5OTQ5WXVtNkl1bTVmSFBmcjdYWitvUCtvcWxnTEc0aE9YRk9YenhnVzhSeWczMHJGbURucDV1VEl6SGtWeGU0a0xaa0preUVvMDZHclcyZXczOGhQcGl2bGhyekVRRmszVXFLVnN1bDFFb0ZQZ2RCd2FSVmxxSTQ5b1lHVGtMZlRtTGpjRW1XUHhNTnl3YTdxT2pETGcweXJjdUJ2OUFML3lOSkRtV3FkS1d5WUNBL0ZNb3Z1T1dqVmQ5NXp1SGY1eitiVHZNRnpPT3lYOG9aT2tSd3lBVWsxMGt6cDVEc1pRakd2b3hsNXpENU13RVRCcFZ6OWRzNHVocWE4V3VhNjdHaHI1ZVdQVG9FZ0ZtSWpHTDhkbEZ6R2ZTeUJGSWJOSXVuODlBbUFpNlFuUjFtR1pTajNKVStkbTNmL1lUVkhJRi9OSFFUWHpmWVo4ekVPaU13dDhrNlNkT1lIcEtka2dmOUlpNDJSSjdaQnpseFdRazROTVBIZGozK2UyMzd0dWJma25qUms2TTNHMnNyUFJxWkJ2R2NvYTE0U0hBWXZkWXpFVXVNaEIwc0k2UnU0U1AxcFlXOUs3dFplMzBvNld0R1o1YmhaUE53c25rY2ZaWkEydVppazlQeEhGc2JBTHgrWGtWRFRISVpOU3FWVWxOV3dCQ2VBbS9hK09CWHh4Q3FLNE90Ny92ZlFoRjY5bjRMVWdoR3Z4Y2t6U21YU2dUUWVNSkZPZVQ4QkZOZFY2enF0bTlwaGtVcHJUMzk2Ymw2ZU9uZXcyZmNWQ2pkODMyZGhqTnplcWlCcjE4N093SUV1a1VLcFV5YnI3eGJmaXpPeitKU3kvZGlLN3Vkb1FiRzRrRTdFMWNxTzdRemF5dHVtQ1lhZXFEeDZqTUVDRlhTbFhrQ1JCU1E5TDJ4U2pwWlk1aUpJWXkyaUlvbll5UDQ0cGRONkNsbzAzVnI4blUwK1NaYUt4TkoxRWRuWVdlTGFqV3poUFV1Z1ZGM2FCdng4Yy85WmMvL09xMy9uUHVnajM2ODQycjg1djNtNUxUOUpobTZYQmJ3ckMzRHFCdDZEcGN2MnNuRjZEaExXOTVDejcyNTUrQ0Z3akRxNitISG1FZDFEZENDemZBczBKOCtLQUZBMndUVFFTZVJsVm5yWTFOaVBDMW9ac3FBOFNnU3FXaStwbXVLSm1tNkZpaHlGUmpUWDdoaS8rdWFKaDhwa3ZOVGkvQmZYb2N4dnd5ZkFKQ3JHay8yNGFmdGVmV0JWRjMyUVkwWFhVRnJLYTZ6ei9mbm92R25mdlNONGJjb3llSEFqTUxxbTRNSVQ1YURjYWRoaERhZXZ1bFIrT1AvK1FPM282R3l4bTZuMWZ3OFNGbzZhalU4a3dpSmlOUW9WSFNGbXltbGFCbmtQVXBDeEx3a1lneDBWQWxrdHE4bDBNajVWRzF5eldBR1IzQjBWODlEbzAxNjU0YWh6YTN4RDVINitsd2s5ZlhXYnRlblIvV2htNUVydG9DaXdUQUlEdnltY2JRazQrZEh2b2Q0d0tHZnFmQlJ1dU9Ua0IvYWdSbWdqa3QvRS8rbzRIOWJBbnQ3VzBZSEJnQTFOSnFYeGZqMVVERGROVVlEWjBwN0xJMmMrazBabVpuRUFvSUJXTkVwQmI1bVh4UFUraXFxY2xBR3NXRmFNcXpZbDFNM1llK2Z4REdYSm9Bd2pVdy9VdytORWxEOGxWamZUZUNWNnlIR1l0Q1o1c1NPc2N5SmlwckNNSzUrd1hHalgvN3dWNzZlN2MwVmxNU29aaURmbllNMVdPbllOSnJPbSt3OFpKTnVPT09PNFQrcUVOZ3ZHWWh6MmM5ZU5VeVBEWlpseEZ6eWlVVStZZ1F1bnRpYXhCai9iaDJSYVdvTkg1NUNKYXJsQlFEK2RxcnNRLzEydWJmSjhiT0lzZHJpblBGWWkxTVB0dmJBZC9XZm1pZFRkQ1ltcWJVcVdRS2pRcEkrazRtVUg3eTJORHhmZmRITGhybjM3NSt0M0hsVmxTalJEemVRR1lzV2I0dlZ3Rk9UUUNQbjZFWGwzSGJMYnVoaXVQaUxNQkZWWXJROGhsb2hiSXlVcHAyaVUxYVgwM0RDZ2x2VjNNRHJ0KzJtV1NhNldTb2I2azAxRmI3WXkxaXovMHRSNUZJT0RVOWl6SlQwZXR2aDNicFdtaGQ1S0NtcHNwRDNaN1I4aE9QelBFRlZILzlERFN5R2gvTHcvVlg3cnJZQ2h5LytSR1BjRzgyWHdJa1UzQW01b0ZNRGliclFSYzJVTWdCWndydzZEMnZvNUVMcUNyMGNsbFRLZEt4UjMvNUJNWVRDMWpPNXJDMHRFU3dyTEtmQlJEamdEb1k2MFFISi9JMzlQWWhseS9ocDhNbnVIQlhwYkxyYXJVYWxCU3Q1WUl5a0VpRENpbFhNcXhoMDJXOUVBQ1dMcURWVGxHcGl6S3poVUJUSVVab3pCS2ZqRVhzdWFhMER3ODdsWEdKMCtPOTVBdmJkRFpHVjc1RmlxTTExVU5iektJOGxZQ1Z5cW1PSVV6RGMwckl4eGVoNVphNStEQ0tTMmw4LzlzUDRObXBXU3lzRkpFZ3RkSjRuUUJudHJJbnRJbHBRbGJmUWE3WlN0cTJrd1M1eE04Zk9YNkM5VmZsdVk2cU8wODFjeHJzWHFoazBpNmFuNkJVVWRWcU9WSkRWRThOdzk3c0Vxb3NGek5QWWtBSzVyS1ZlSks5ZEpJZHNtREU2b2VPSHo4ZU1kM2pwN2Y1ZWpzWmtWWWluYUdJcmt1SWRicGFZTkpRai9EclRpVGdrZVYvOVY4L2gvajBKUHFiR3JGejV3MVl2MnNYTnZUMklrN3ZaUW5oTHFNWjYraENZMzFJa1dsWlZUTWJlWDJvam0wbXpLSFZRVC83NTFOc0ZVdlpDaEZRVjN3MDFrS2l6ZlBPenkyaXdLaExpeEJEaThXaW1qZ2taWVdabVBNRXBTbktHRXhaUytwME5kb1NFNDBSYzN2YU9laTJnbGVXT3Q1dEdwbWxJZS9wRk96eEJ1aUQzZERhV3hVV1NnbzRraUtrUUZvSG84bWFhM29tZ3YvNTVhOXgrT1JwNU9xYk1mQ2UyM0g1emlHY0p2OHNWRXE0NVkwM29ILzlJQ25hQXZKY1RIZXNCMjJzNHdJam1tZGtTMnp1QVo5SlE4Skk1MVlVZDJ5TE5LQ252WU9Da1ljdGE3dnh5OU9qcW5tenIyQjZZaEtKODVPb0wxYmhUK1VSS0x1cS82b1JsdWZvREpmajQzTlhLL3hkSk5TR1ZuTUcydy9yYlp2SlNHOFZScTl6SE5HT253WmFTSlBXZHNHTlJuZ0JvNGFMY2k5KytlcDM3OGJqejR4Z29MVUoxOTE4SS9TeWpWQlhGKzdZKzBta3FXTFYrNExNK1NDNkNjME92UXRwMXBrTXFrVEorV1h5elBReXNrVGlKaktnQk1IR2xOR0hhTGRTeUdQTDRBWXNMaVpWUDZ0aGlvZlRwMDdndjVncEhWWVlHM2lmbnBZT3RKQU1DUHNoUXdCNjJtRFM4UTRkVnZFMEJYYmlGMGxBL3QrclRYM3JSOGZOZEhhYnRHWFhrT1pOM3NmRmVVd1ZxNjhiTGdkU1Z4VThhNEVvV0pvNUR6b0xvZjVCT0l3V1p4NFNiYVlCYTFCalBaQVZLLzduMGZBeVo4Q1ZWQXJUWFBRNFZiR0p4VVVzRUtnV0NWRHovS3k3dFpOQllDT25JM3JiT3hGa2FqMXc1T2NLR0lSUERyWkgwY0FHNW9pMS9MK2RxYjFwN1FDMlhIc0RPclplZ2tDMG9TWkhWR1g4SWJxejV4bGNnMHRPWEoxSXhFMTl4K1plZHpFRCsrd0VESHJaTlFqakFpNGt6dTRDNnkzS01XUmRMenl5YzRkRzE2MGJwRnZNV3FHWHFGcTViTnhVZ1lTVkNEdUJVRGZwNmFrVkZHajRKSVdqQkc4MnhRbDlKclZNNHpLb2NDRTlyTTNOZlFNWUk3RzJtU0Z5Ym50M2oyb1RPbzBKOGxwK0FrV1JUbEk2SndmbUFybnVZbWNuenRCNUN5UGppTXhGME5IWlN0cFdoRWhKcmFLMlRTOFEzVG01TzE3RXREV09Oa3d6UXdRZkdsUGhHR0hsaXB5cjJJdVlJdVppQ2k1UjBXbUx3Q1JMTVZycmladzB6QllBSWF0bnhMejVKZlk0U1VPNU9wZFhMRk12S1hIQkJXUTV4aVN6WW1RU2MxVEhNdXg3TnIvWFZkK0UrZGxwRkZleTZHcUo0dkxCVFJpZG55VjZLdG1XNDFTUVNNc3BnMDVzV3hOREU0MnkvQ0hreTR4OGNnYXA5QUxxeUdmbk9WbzV5WG40MlphMGpoakJyRTRSZUUwM0kycGlsSFNWNXVpdG9VSk1JOXlaZVZRSjd6cjdraVpOZ0Nmb1NXb2Y2Wk13cjZka1NhQ2VmL3BwQmxDTXJDQjdiaHg5NzN3ckNYTllUZVFDOFZXbWJGVUVIa1lweWY2WExvcWhlZFpYVGpHTGJINEZMWUVvUHJ6N1ZzVElaQTRkRzhiM0h6dUNDNk9LUCtCVGluV2tnMGF4ampYZFVqVkZ1UmM1MXEyZjJaT01uMGRtYWtxTlBxM2hlalJSY1F2NU9Od0dMR1lEMlpiRmZxRzF0eWptSU1oaGs5Wm9mV3RncnVtQVBVRlBpcFpSWmlRRm1iaHdFV3grZGZnbitONVBIc0hZUWhwQkZ2TlY1SnVmK2VCN1ZhT1Z2UUJEMHNqUWxkcHNVQnNSSlNSSFkzWFRVQk9IY05VbHB1Y2dVZExqdFQvM25RZHg1TlNJNm5uaTZZN3VMc1RXOXNBZ1FIbUdjRkJIU1h3U1UrRzd1Y1FreGlrZWFlVEM4aFh1U3lCbkYxRjU1ampuelRDNjFyZkJUMUp0Mm84ZlN5UGFHUEZmc3A2cDEzU1JTUXNDZVJ0NmlKenRxTkxBOHRnTUFzTDZPUnh1dWZVMi9QTVBmZ1N0b1k3Y01ZYnIzL0YyVkppNkplWitnR05ObFNwWG1UZk9NalduNXVad2ZuS0N0TXhXZmN0akpFdE9GWTExQVU0QkZUeDI2amhHWm1ZVmhFdi82ZWpvUUhkM043UENncVVtQ0VPMURJUEFzelF4aGhVT3ZWYlZWZ0JYSSsyMTVpNlQrZ0tOUEVhMEMzREdqTmFIMDRTaVN0cExMa1JLajJlZ3M4ZFpHL3NCTWhSWE0xV1RkWU5rNFJ2NlliRUgyZWVuVUNES1BYTGtHQmFwRnEvcklkQ1FJVHgwNUJGTVQwK2dJaG9tYy85ZDErMWcybGlZSlRwT0VTbGxTTTBJV0tGR2ttMDFIWGlvbzBJbTA0RHRLSEtGMWxiMnpvRjFxOUdsUVl5MHhzOHlSTnAwTWdHTkpNQmtaRzJqdHVkQU5pNWhRd05yTGJaK0EwS1JacTVCeDVQSFRtRGJwWnZqcHFQYnc1cm15U3JoTGM0UzVSWUFNbmxCU0pQRHFLT3JxOERoVksxdjZVZjhrVEVjZStJSmJHWXR0SkY1UE10R1crVUNqajV6RmtWR3hLVkRKcVltOGU0YmRtSXNNWTl6akVxZTZHVjdOWlp1U2U4MFBUUVNpQ3htaDBZUUtuSmM2dUpNdHE1L3JScXVwZGNaNUs5cE1wK1ZwU1Q5WCtIeVhOVVhYYS9tSUdsb2paM3Q2RnEzSHVHbUZvV21yaHFnSE9TckJReWZPWmsycld2eUUxSWZpc0pvdFdrQUhoR3llSWJrMWFqeFRaRUZOQmxNVFR3NytuTUtyQ1gwTlVjUmErM0ZteSsvRms4Tkg4VjhsU1NBckwvRUc1Zm8wU2ZPbkVJcVh5Yk55bEI3S2FtMDA1bHFPajBkSk11SVVCN1VhbkRGd3BkMEZNVnNXa2tISWxXVUtkZ0txMmRyWThQV2xNeEhjc3VNZ05wUWlSQW5mSFI0eVdYS1orYll1QzAxejRsQ1p4RnNzb3YyQ2RNTnJRd0xXWkV2MEkzS0k2SnBxSHpteFRUMk1ZVlJHa1ZYTkdMSHRSdnc3Sk5UK01RSDdrQ1NSYzMxWXNzbHU1Rmd1aGJZOTU2ZG5NSW9ZVC9EdmxXa2J1TGp6UnllVkJla21zV0dyR1kyMWtpOURKMjhwZXpqeFRycjJZanppaXdMS3NrNVpsaGtCbGVHYnpxRTM1T0pud1phUXJzc1lTUnMxRVh1VC9DYXR0SS91YXRrMTJUR01zOHhkUGN3QlNYZlFiNTl2K0xkcTRObzdjbXRHVVVhNm5razB0WmFRdXhtdE1iOHVQNkdNbUhhajRYSkxOeXNpM2J1enZSdUdtRGFVSkJ0YmNQeTQwZHhmblpLT1NqRTVtNHhJUVJBUklVdVV5Y1J5U0ZFV2NCVldrb1ZRZTRqT053ZEVxTUZIR1FTMTR3YUJmTVVZTGd5QlNtL2U4d2VXODJDYW94VkpOdFFjMFJ0d3I5Z2hHN3B3MmJmOW4zcHFlTi9jOWp6N0tFYXg2cnBHMG9BVUNOSkRMN2dGa0w2Z0VyTFlNUkYzNFpMb1ZPWWFhRmdHbzIxSVV4eTNNek5qenhCSnR3ZzZla2pLMG1wREZlcXNnaW9scUZhUkYwb3FJd1RjaXh6WVphcFM0Yks4WWhhSkNNU1pPdlFXUjdGRWtVaElSSlNLWVpFeEZQYWpTelJ1ekNzZXVvanBlam9nZzNlcXBIUWh1Kzk5OEc0R2xadDF6N0NEMnZHMFVXYVVxazQxdnV1aEVuREJKRThqemYxSEZVelRlMWQxRVV5YUdwdVZjS01QTTZQanBGS1RlRlhUdzNqTjJkR3VPaWlLdndnQzcyNVBrQ0RmR28vUVJCUVVrZEZ5SzF0SVZ0VTBrNmVPVThIK05IV0ZzWDYvbjUwZHNZd09qWXNVS2FjSXRmU1Z6Y3ZsZk5YNXp6VkJtVGR3cGFZdmpyN0lvWGtyMStjeEtFSDlydHUvbTdkczVYZG50WU9mK2c2Vm5PbkdoMWx0TkNvQXN0QUtCZWJHQitEc3p5UG1abEViYStiTlRYRk9udnMrTk9ZbzhRdWV3S0NhdUxISUVsMU0vdGhrQU9zeU93Qyt3TDhZbVFxVnlKbzBlK3NsYXB3U0Rib0N0bkdTaW1QMXJZZXJCL2NqalBuamlvMVFGTlJFYlZNSm9tYVZubXhodGlPTk1OVW4wdGZwS0oyOEtKeGtwcWp4L1llcGl1SG9BOGdVTWNnK3NpNFBXTTFqNzFWT2E2VzF5NmpjUERSdzJRSmMvUjZTRUg5Q2hGeGdZcVhVQ1JSbE5WRXpodEdPTjZFeVJQOVROVUxXOHppK1JtZXUxd29FY2FicVl5VkZHc3BVeTVZcGhUZjFkMkpBaDNVMHRTRnZyNXRtSng0V3MxN0hxTWppNjhocjZHQWh1VjBNWXFxbmJuNkQvZi8yMFB4NXlJbjd6dmVQYTQxTUJSc2VDdEhIS2FQZDBHTWZzNndDOGZHU3pZajJ0V05FNVFCYytrVjVNazhsTXpuMVZpRHBMYTBzenJ5dzFhcTBZS01jdmNTRjVmbXVTdEZScGJwWGNkQjFlRjd3bFFhR3VzNUxXbEswZlp4MFIzUk52UjI5M0t3SmI5c2lPQThVN1JhektyeFNPQmVKQVdYMldTc2lsV3FEL0o3Vkt3dWJtbTlZQXRyYnV6TUlkY0lEOG5taHdSTXRFVk5mdzZCTGg2cjdPRGhCMytNSHg3OEVaYTVSMWRpNUVKK01hWWVKODZPcW8zRW5zNE90REl5QnNFa1M5MXlsbEhSU0d6RDNBOFFuVVdjSnMrekN3dFlvUGJ2T1ZLTEZienZ0dmZndmJmZHJnajJ5Smx6T0QweVFtQXA0QnhUTkp0UE1ETXN4V0trWlZqQ1Y2VTM2cXFGSEw3dlM0L3N1ckRNRit3VjNIWFhwMCtReFAycHRxb0txNGV1NDNjT3NaWHY5dzl1eEk0M2JLS21zWUlQdmZkV25EbDlCbzBoRWxkdWtJaGpSRVRLc0JsUEo1ZXh6QWxESlBZR3l1L2lhVWxkUzZRL3NvOGw3aVdJbG1tSjRVVFR2LzcwWDZDUm9sS1IzMTFNekN2bnRqUzNVNUp2VVdtWjRVUXY2WGhCOTVUMUNQcFdOVy9YMGFQeGl6czlMMWg1ckM4MnpQUHVVK2ZMSi9yTGJabTdtQmtmNVVaa0k0SERoMXR1Zmp1U25OZW1VbVFsNUlHejNLcWFwMVppY2NHTm5CZWxKd2w1bHIwNWtmK0s3SGxMakxxa2dwTEppZXVYYjkrR0NKM2pjcUpPa25UbkN5bnU3Zm13YWNONlhQR0dhNmlkN3NHT0s5L0VaaS9YcU5RQVNxUkFGL2Q4K2N1SDQ4OWYzZStFcFd5NyszaXp1UHFkaVBiU3hva2dlK1RJWTdqcHRnK29UZjFtUnVYdHU2N0ZKWnMzc0ErR0ZFVEx6cW5zcE1xbW83Y0s2WG15RW5rdFVaUDBra2VRQkYxNjZ6dHZmSWNxQlFHcFBNOFJVVWs0cFRpN2cxd3l4ajMwZCsvK01MWnV1VjdBZ3pYb3lzNVIvRCsrY25qZmI2L3ZkNHpyNit0TGV4Vm5GOU1xL1ZLR1NjOWNuQjVsc2RmRHg0bllGNmhETHBOU0VsMlFrQitsSkJEbWd2VlZibnBoR2hERFpJaFYrMzJNb2ppd2dUVW9CcXpodVBPR3l5OUhoZW00TkQ5SHdZZ0RNeU5xc2ovNnVaa1NJQisxQXFiYUw5eXdjWXVxZmU3c3Bzc3J6cTRYWGVPTHZkbloxeGNua3UvQlMwVU5WWng5NWhSMlhIV3QyajhJY3dOZWhCeFplRlJBUk5lVm5HQXphckpISU1ZSTZNZ2hFVk44WTdXZUJRRURaQzFidDIxVHIyVy9PNXRkdWFoYk50SmhmaUVMeG5NVTBlOExZL1RNSWl6YjJQUEF3U2ZpcjlnNE9kcmIxeHpVYldmdml4c0dHbllTRHozNkdBYTJYNlYrNVJPazkyM1dXWHhtR2lXYnlFbnZTbStRMzVPSWNSSTFlVGlyKzI3eXZtbjVsQk1hcVdOR0NTQTMzWFNqYWcwbFJxN0VZYmRJRFNVUUVMbFFYMVZlTmRWN3hWR05qYzFZVHBYM2Z2UGc0Ny8zOXlnbVh1Sm82WXJ0WDV5YkZXQjV3YWFlb0pOc0liLzcxdHRKdllJcVlzR21LRG81bFI4L2R4YUpwUlJTbVpMaWhsTHdGM1p5TG14MGlMRjFkSWFrNzdvWTk5aWE2M0hiZTkrUEZxclJtZVUwVW1RNXk2a2xoWWppU3I5ZmRCRy8wak9GVk10MTJxS3RlK09KeFA2WFd2OUxHaWRIYTBmWC91VDhUSng2L3YyOHV0b2FFdmF4NVlwcjZPVXlhai9Fb0xXTVFoc1hHdXVLSWNVZG4zSXloNVY4cmlZK2tSNkpRR3V1N29yS0ZDQS9idHZZUDhBdDZCdlJ2M0d3TnNaUU5aUEZwMGk2WlM4aHlLalozSkNNY2wvUU1HdS9BU1BZcEVrNDlneHUzZnl5dnlEUzhRcU9LRlBVdHIzdGRGeTg5azZOUkJrMDZNSXJnVE0vZ2FXUlNsYUJ0Q3BMY1ZhTUVpUDhiTlNDaG43Mk1abS9SSTN1YUkzaXN2VUQ1SkF0eUxGbGxDZ25Wb21NUlVydllWSTZQMEZFV3MwNjZxUytvRjhoS0JNZzd1cnU5alU5ZlM5cm1Cd3ZHN2tMUjJkblo1eFBmWXZ6aVgyY3J1NFd6NHFBSTdLQ0xyOHBrZkdmdm9xMnROVm1NUEVjR1lZd2YyRWhrbHFWY2tVTmxXM2MybXJsUkhIb3lLUDRwL3YyWS91Vk8zRE5qbXN3Mk45SFlha21Jb2x4OVExQk51Nm9vblZNeWZ2eVJXZWZvUGtyWGZOcityMWxJcEhvL2NmUGZQcitOMTEzOWRBeU55ZHVadTBKK2ptVTljNmZPb2tEUC80UnhpWm5rTTVrRllnSVRSSmdrQmpIMkt1YUc1dkkvbDBjT1BBRHhVektkbTEvb0NmV2dYZSs4MjFZdTZhTGpLUUZHOVp2UW4xVDVMQnVXSHRqZlgzRGVKWEhLNDdjODQvVktPNXFqOVFQWlhYL25UZkIyeTN2RzZ5YnJ1NFlocTVtZTdCL2dYT3lUMjZHVmErVFdVNm9WWWpiVitzcG8zL2p1LzhOMlZvUTdjTlR2MFJ4TUUyVjYydmYrQ2F1dXZKS3ZHWG5EWWM3MjdydXVmVEtxdzdqTlI2dnkyK2NKWkttUmdNMWZJUWdzeTJmU1dQcWZCeFBuUnhXTWtLZWxFeE5EZElkYWZDR2djdnd0NS85ZS9VREFHSHpObzFmRTZtakNsWTluQzlWaitSS3BmM3BkUG9WcHgvK1A0MTcvcEZJalBkUzE5bFdyVGhEaFZSMnEyZmJrY1Q4UXUvMDlHUmtjWEdPK240UW81UHo2VzkrOXp0cEdqYk10SnlndGo4Y0tKVU94bDhIZzU1Ly9CK01tSFlkZW5meTVRQUFBQUJKUlU1RXJrSmdnZz09XCIiLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBCb3gsIENvbnRhaW5lciwgRmxleCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgSW9Jb3NBcnJvd1JvdW5kQmFjaywgSW9Jb3NBcnJvd1JvdW5kRm9yd2FyZCB9IGZyb20gJ3JlYWN0LWljb25zL2lvJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbkdyb3VwKHsgbmV4dCwgcHJldmlvdXMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8aDE+QnV0dG9uR3JvdXA8L2gxPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBidXR0b25Hcm91cDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgbWI6IC00LFxyXG4gICAgYnV0dG9uOiB7XHJcbiAgICAgIGJnOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICBib3JkZXI6ICcwcHggc29saWQnLFxyXG4gICAgICBmb250U2l6ZTogNDAsXHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICBweDogJzJweCcsXHJcbiAgICAgIGNvbG9yOiAnI0JCQzdENycsXHJcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4yNXMnLFxyXG4gICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICBjb2xvcjogJ3RleHQnLFxyXG4gICAgICB9LFxyXG4gICAgICAnJjpmb2N1cyc6IHtcclxuICAgICAgICBvdXRsaW5lOiAwLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IFJjRHJhd2VyIGZyb20gJ3JjLWRyYXdlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEcmF3ZXIgKHsgXHJcbiAgY2xhc3NOYW1lLFxyXG4gIGNoaWxkcmVuLFxyXG4gIGNsb3NlQnV0dG9uLFxyXG4gIGNsb3NlQnV0dG9uU3R5bGUsXHJcbiAgZHJhd2VySGFuZGxlcixcclxuICB0b2dnbGVIYW5kbGVyLFxyXG4gIG9wZW4sXHJcbiAgd2lkdGgsXHJcbiAgcGxhY2VtZW50LFxyXG4gIGRyYXdlclN0eWxlLFxyXG4gIGNsb3NlQnRuU3R5bGUsXHJcbiAgLi4ucHJvcHNcclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxSY0RyYXdlclxyXG4gICAgICAgIG9wZW4gPSB7b3Blbn1cclxuICAgICAgICBvbkNsb3NlID0ge3RvZ2dsZUhhbmRsZXJ9XHJcbiAgICAgICAgY2xhc3NOYW1lID0ge2BkcmF3ZXIgJHtjbGFzc05hbWUgfHwgJycgfWAudHJpbSgpfVxyXG4gICAgICAgIHdpZHRoID17d2lkdGh9XHJcbiAgICAgICAgcGxhY2VtZW50ID0ge3BsYWNlbWVudH1cclxuICAgICAgICBoYW5kbGVyID0ge2ZhbHNlfVxyXG4gICAgICAgIGxlbHZlID0ge251bGx9XHJcbiAgICAgICAgZHVyYXRpb24gPSB7JzAuNHMnfVxyXG4gICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgPlxyXG4gICAgICAgIHtjbG9zZUJ1dHRvbiAmJiAoXHJcbiAgICAgICAgICA8Qm94IGFzID0gXCJkaXZcIiBvbkNsaWNrID0ge3RvZ2dsZUhhbmRsZXJ9IHN4ID0ge2Nsb3NlQnRuU3R5bGV9PlxyXG4gICAgICAgICAgICB7Y2xvc2VCdXR0b259XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxCb3ggc3ggPSB7ZHJhd2VyU3R5bGV9PntjaGlsZHJlbn08L0JveD5cclxuICAgICAgPC9SY0RyYXdlcj5cclxuICAgICAgPEJveCBjbGFzc05hbWUgPVwiZHJhd2VyX19oYW5kbGVyXCIgc3R5bGUgPSB7e2Rpc3BsYXl0OiAnaW5saW5lLWJsb2NrJ319IG9uQ2xpY2sgPSB7dG9nZ2xlSGFuZGxlcn0+XHJcbiAgICAgICAge2RyYXdlckhhbmRsZXJ9XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuRHJhd2VyLmRlZmF1bHRQcm9wcyA9IHtcclxuICB3aWR0aDogJzMyMHB4JyxcclxuICBwbGFjZW1lbnQ6ICdsZWZ0JyxcclxufTsiLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBJbWFnZSwgQm94LCBIZWFkaW5nLCBUZXh0IH0gZnJvbSAndGhlbWUtdWknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmVhdHVyZUNhcmRDb2x1bW4oe1xyXG4gIHNyYyxcclxuICBhbHRUZXh0ID0gJ2RlZmF1bHQgYWx0IHRleHQnLFxyXG4gIHRpdGxlLFxyXG4gIHRleHQsXHJcbn0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBzeCA9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgPEltYWdlIHNyYyA9e3NyY30gYWx0VGV4dD17YWx0VGV4dH0gc3ggPXtzdHlsZXMuaW1nfT48L0ltYWdlPlxyXG4gICAgICA8Qm94IHN4PXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgPEhlYWRpbmcgc3g9e3N0eWxlcy53cmFwcGVyLnRpdGxlfT57dGl0bGV9PC9IZWFkaW5nPlxyXG4gICAgICAgIDxUZXh0IHN4PXtzdHlsZXMud3JhcHBlci5zdWJUaXRsZX0+e3RleHR9PC9UZXh0PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBjYXJkOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiBbJ2NlbnRlcicsICdmbGV4LXN0YXJ0J10sXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIG1iOiAtMSxcclxuICAgIHRleHRBbGlnbjogWydjZW50ZXInLCBudWxsLCAnbGVmdCddLFxyXG4gICAgcHg6IFs0LCBudWxsLCAwXSxcclxuICB9LFxyXG4gIGltZzoge1xyXG4gICAgbXg6IFsnYXV0bycsIG51bGwsIDBdLFxyXG4gICAgbWw6IFsnYXV0bycsIG51bGwsICctMTNweCddLFxyXG4gICAgbWI6IC0yLFxyXG4gICAgd2lkdGg6IFsnODBweCcsIG51bGwsIG51bGwsICcyNTBweCcsIG51bGwsICdhdXRvJ10sXHJcbiAgfSxcclxuICB3cmFwcGVyOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICB0aXRsZToge1xyXG4gICAgICBmb250U2l6ZTogNSxcclxuICAgICAgY29sb3I6ICdoZWFkaW5nX3NlY29uZGFyeScsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDIuNSxcclxuICAgICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgICBtYjogWzIsIG51bGwsIDNdLFxyXG4gICAgfSxcclxuICAgIHN1YlRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiAxLFxyXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICcxLjknLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBJbWFnZSwgQm94LCBIZWFkaW5nLCBUZXh0IH0gZnJvbSAndGhlbWUtdWknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmVhdHVyZUNhcmQoe1xyXG4gIHNyYyxcclxuICBhbHRUZXh0ID0gJ2RlZmF1bHQgYWx0IHRleHQnLFxyXG4gIHRpdGxlLFxyXG4gIHRleHQsXHJcbn0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGgxPkZlYXR1cmVDYXJkPC9oMT5cclxuXHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGNhcmQ6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcclxuICAgIG1iOiAtMSxcclxuICB9LFxyXG5cclxuICBpbWc6IHtcclxuICAgIHdpZHRoOiBbJzcwcHgnLCBudWxsLCBudWxsLCAnODBweCcsICc5MHB4JywgJ2F1dG8nXSxcclxuICAgIGhlaWdodDogJ2F1dG8nLFxyXG4gICAgZmxleFNocmluazogMCxcclxuICAgIG1yOiBbMiwgMywgbnVsbCwgbnVsbCwgNCwgNV0sXHJcbiAgICBtbDogLTIsXHJcbiAgfSxcclxuICB3cmFwcGVyOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBtdDogJy01cHgnLFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IFsyLCAzXSxcclxuICAgICAgY29sb3I6ICdoZWFkaW5nX3NlY29uZGFyeScsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNCxcclxuICAgICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgICBtYjogWycxMHB4JywgbnVsbCwgJzE1cHgnXSxcclxuICAgIH0sXHJcblxyXG4gICAgc3ViVGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IFsxLCAnMTVweCddLFxyXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICcxLjknLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgbWVudUl0ZW06IFtcclxuICAgIHtcclxuICAgICAgcGF0aDogJy8nLFxyXG4gICAgICBsYWJlbDogJ0hvbWUnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcGF0aDogJy8nLFxyXG4gICAgICBsYWJlbDogJ0FkdmVyc2l0ZScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwYXRoOiAnLycsXHJcbiAgICAgIGxhYmVsOiAnU3VwcG9ydHMnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcGF0aDogJy8nLFxyXG4gICAgICBsYWJlbDogJ01hcmtldGluZycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwYXRoOiAnLycsXHJcbiAgICAgIGxhYmVsOiAnQ29udGFjdCcsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEJveCwgQ29udGFpbmVyLCBJbWFnZSwgVGV4dCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ2NvbXBvbmVudHMvbGluayc7XHJcbmltcG9ydCBkYXRhIGZyb20gJy4vZm9vdGVyLmRhdGEnO1xyXG5pbXBvcnQgRm9vdGVyTG9nbyBmcm9tICdhc3NldHMvbG9nby5zdmcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8aDE+Rm9vdGVyPC9oMT5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgZm9vdGVyOiB7XHJcbiAgICBmb290ZXJCb3R0b21BcmVhOiB7XHJcbiAgICAgIGJvcmRlclRvcDogJzFweCBzb2xpZCcsXHJcbiAgICAgIGJvcmRlclRvcENvbG9yOiAnYm9yZGVyX2NvbG9yJyxcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBwdDogWzcsIG51bGwsIDhdLFxyXG4gICAgICBwYjogWyc0MHB4JywgbnVsbCwgJzEwMHB4J10sXHJcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgfSxcclxuICAgIG1lbnVzOiB7XHJcbiAgICAgIG10OiBbMywgNF0sXHJcbiAgICAgIG1iOiAyLFxyXG4gICAgICBuYXY6IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIGxpbms6IHtcclxuICAgICAgZm9udFNpemU6IFsxLCAnMTVweCddLFxyXG4gICAgICBjb2xvcjogJ3RleHQnLFxyXG4gICAgICBmb250V2VpZ2h0OiAnNDAwJyxcclxuICAgICAgbWI6IDIsXHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMzVzJyxcclxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcclxuICAgICAgbGluZUhlaWdodDogWzEuNSwgbnVsbCwgMS44XSxcclxuICAgICAgcHg6IFsyLCBudWxsLCA0XSxcclxuICAgICAgJzpob3Zlcic6IHtcclxuICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGNvcHlyaWdodDoge1xyXG4gICAgICBmb250U2l6ZTogWzEsICcxNXB4J10sXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IFtcclxuICB7XHJcbiAgICBwYXRoOiAnaG9tZScsXHJcbiAgICBsYWJlbDogJ0hvbWUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ2ZlYXR1cmUnLFxyXG4gICAgbGFiZWw6ICdGZWF0dXJlcycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAncHJpY2luZycsXHJcbiAgICBsYWJlbDogJ1ByaWNpbmcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ3Rlc3RpbW9uaWFsJyxcclxuICAgIGxhYmVsOiAnVGVzdGltb25pYWwnLFxyXG4gIH0sXHJcbl07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIENvbnRhaW5lciwgRmxleCwgQnV0dG9uIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXNjcm9sbCc7XHJcbmltcG9ydCBMb2dvIGZyb20gJ2NvbXBvbmVudHMvbG9nbyc7XHJcbmltcG9ydCBMb2dvRGFyayBmcm9tICdhc3NldHMvbG9nby5zdmcnO1xyXG5pbXBvcnQgTW9iaWxlRHJhd2VyIGZyb20gJy4vbW9iaWxlLWRyYXdlcic7XHJcbmltcG9ydCBtZW51SXRlbXMgZnJvbSAnLi9oZWFkZXIuZGF0YSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoeyBjbGFzc05hbWUgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICAgIDxoZWFkZXIgc3ggPSB7c3R5bGVzLmhlYWRlcn0gY2xhc3NOYW1lPSB7Y2xhc3NOYW1lfSA+XHJcbiAgICAgICAgPENvbnRhaW5lciBzeCA9IHtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgIDxMb2dvIHNyYyA9IHtMb2dvRGFya30gLz5cclxuICAgICAgICAgIDxGbGV4IGFzID0gXCJuYXZcIiBzeCA9IHtzdHlsZXMubmF2fT5cclxuICAgICAgICAgICAge21lbnVJdGVtcy5tYXAoKG1lbnVJdGVtcywgaSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICB0bz17bWVudUl0ZW1zLnBhdGh9XHJcbiAgICAgICAgICAgICAgICBzcHk9IHt0cnVlfVxyXG4gICAgICAgICAgICAgICAgc21vb3RoID0ge3RydWV9XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQ9IHstNzB9XHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbiA9ezUwMH1cclxuICAgICAgICAgICAgICAgIGtleSA9IHtpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHttZW51SXRlbXMubGFiZWx9XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPSBcImRvbmF0ZV9fYnRuXCIgdmFyaWFudCA9XCJzZWNvbmRhcnlcIiBhcmlhLWxhYmVsID1cIkNvbnRhY3RcIj5cclxuICAgICAgICAgICAgQ29udGFjdFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8TW9iaWxlRHJhd2VyICAvPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L2hlYWRlcj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBwb3NpdGlvbkFuaW0gPSBrZXlmcmFtZXNgXHJcbiAgZnJvbSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGhlYWRlcjoge1xyXG4gICAgY29sb3I6ICd0ZXh0JyxcclxuICAgIGZvbnRXZWlnaHQ6ICdib2R5JyxcclxuICAgIHB5OiA0LFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgbGVmdDogMCxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgIHRyYW5zaXRpb246ICdhbGwgMC40cyBlYXNlJyxcclxuICAgIGFuaW1hdGlvbjogYCR7cG9zaXRpb25BbmltfSAwLjRzIGVhc2VgLFxyXG4gICAgJy5kb25hdGVfX2J0bic6IHtcclxuICAgICAgZmxleFNocmluazogMCxcclxuICAgICAgbXI6IFsxNSwgMjAsIG51bGwsIG51bGwsIDBdLFxyXG4gICAgICBtbDogWydhdXRvJywgbnVsbCwgbnVsbCwgbnVsbCwgMF0sXHJcbiAgICB9LFxyXG4gICAgJyYuc3RpY2t5Jzoge1xyXG4gICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnYmFja2dyb3VuZCcsXHJcbiAgICAgIGNvbG9yOiAnIzAwMDAwMCcsXHJcbiAgICAgIGJveFNoYWRvdzogJzAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDYpJyxcclxuICAgICAgcHk6IDMsXHJcbiAgICAgICduZXYgPiBhJzoge1xyXG4gICAgICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY29udGFpbmVyOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgfSxcclxuICBuYXY6IHtcclxuICAgIG14OiAnYXV0bycsXHJcbiAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSc6IHtcclxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgIH0sXHJcbiAgICBhOiB7XHJcbiAgICAgIGZvbnRTaXplOiAyLFxyXG4gICAgICBmb250V2VpZ2h0OiAnYm9keScsXHJcbiAgICAgIHB4OiA1LFxyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgbGluZUhlaWdodDogJzEuMicsXHJcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4xNXMnLFxyXG4gICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgICB9LFxyXG4gICAgICAnJi5hY3RpdmUnOiB7XHJcbiAgICAgICAgY29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IFNjcm9sbGJhcnMgfSBmcm9tICdyZWFjdC1jdXN0b20tc2Nyb2xsYmFycyc7XHJcbmltcG9ydCBEcmF3ZXIgZnJvbSAnY29tcG9uZW50cy9kcmF3ZXInO1xyXG5pbXBvcnQgeyBJb01kQ2xvc2UsIElvTWRNZW51IH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcclxuaW1wb3J0IHsgRmFGYWNlYm9va0YsIEZhVHdpdHRlciwgRmFHaXRodWJBbHQsIEZhRHJpYmJibGUgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcbmltcG9ydCBtZW51SXRlbXMgZnJvbSAnLi9oZWFkZXIuZGF0YSc7XHJcblxyXG5jb25zdCBzb2NpYWwgPSBbXHJcbiAge1xyXG4gICAgcGF0aDogJy8nLFxyXG4gICAgaWNvbjogPEZhRmFjZWJvb2tGIC8+LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJy8nLFxyXG4gICAgaWNvbjogPGZhLWluc3RhZ3JhbSAvPixcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9iaWxlRHJhd2VyKCkge1xyXG4gIGNvbnN0IFtpc0RyYXdlck9wZW4sIHNldElzRHJhd2VyT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICByZXR1cm4gKFxyXG4gICAgPERyYXdlclxyXG4gICAgd2lkdGg9XCIzMjBweFwiXHJcbiAgICBkcmF3ZXJIYW5kbGVyPXtcclxuICAgICAgPEJveCBzeCA9IHtzdHlsZXMuaGFuZGxlcn0+XHJcbiAgICAgICAgPElvTWRNZW51IHNpemUgPVwiMjZweFwiIC8+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgfVxyXG4gICAgb3BlbiA9IHtpc0RyYXdlck9wZW59XHJcbiAgICB0b2dnbGVIYW5kbGVyID0geygpID0+IHNldElzRHJhd2VyT3BlbigocHJldlN0YXRlKSA9PiAhcHJldlN0YXRlKX1cclxuICAgIGNsb3NlQnV0dG9uPXs8SW9NZENsb3NlIHNpemUgPSBcIjI0cHhcIiBjb2xvciA9IFwiIzAwMDAwMFwiLz59XHJcbiAgICBkcmF3ZXJTdHlsZT17c3R5bGVzLmRyYXdlcn1cclxuICAgIGNsb3NlQnRuU3R5bGU9e3N0eWxlcy5jbG9zZX1cclxuICAgID5cclxuICAgICAgPFNjcm9sbGJhcnMgYXV0b0hpZGU+XHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgPEJveCBzeCA9e3N0eWxlcy5tZW51fT5cclxuICAgICAgICAgIHttZW51SXRlbXMubWFwKChtZW51SXRlbXMsIGkpID0+IChcclxuICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgdG89e21lbnVJdGVtcy5wYXRofVxyXG4gICAgICAgICAgICAgICAgc3B5PSB7dHJ1ZX1cclxuICAgICAgICAgICAgICAgIHNtb290aCA9IHt0cnVlfVxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0PSB7LTcwfVxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb24gPXs1MDB9XHJcbiAgICAgICAgICAgICAgICBrZXkgPSB7aX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7bWVudUl0ZW1zLmxhYmVsfVxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDxCb3ggc3ggPXtzdHlsZXMubWVudUZvb3Rlcn0+XHJcbiAgICAgICAgICAgIDxCb3ggc3ggPXtzdHlsZXMuc29jaWFsfT5cclxuICAgICAgICAgICAgICB7c29jaWFsLm1hcCgoc29jaWFsSXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPEJveCBhcz1cInNwYW5cIiBrZXk9e2l9IHN4PXtzdHlsZXMuc29jaWFsLmljb259PlxyXG4gICAgICAgICAgICAgICAgICA8TGluayB0byA9e3NvY2lhbEl0ZW0ucGF0aH0+e3NvY2lhbEl0ZW0uaWNvbn08L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvU2Nyb2xsYmFycz5cclxuICAgIDwvRHJhd2VyPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgaGFuZGxlcjoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBmbGV4U2hyaW5rOiAnMCcsXHJcbiAgICB3aWR0aDogJzI2cHgnLFxyXG5cclxuICAgICdAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpJzoge1xyXG4gICAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIGRyYXdlcjoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnZGFyaycsXHJcbiAgfSxcclxuXHJcbiAgY2xvc2U6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6ICcyNXB4JyxcclxuICAgIHJpZ2h0OiAnMzBweCcsXHJcbiAgICB6SW5kZXg6ICcxJyxcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gIH0sXHJcblxyXG4gIGNvbnRlbnQ6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgcHQ6ICcxMDBweCcsXHJcbiAgICBwYjogJzQwcHgnLFxyXG4gICAgcHg6ICczMHB4JyxcclxuICB9LFxyXG5cclxuICBtZW51OiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBhOiB7XHJcbiAgICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICc1MDAnLFxyXG4gICAgICBjb2xvcjogJ3RleHRfd2hpdGUnLFxyXG4gICAgICBweTogJzE1cHgnLFxyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlOGU1ZTUnLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzJyxcclxuICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgY29sb3I6ICdzZWNvbmRhcnknLFxyXG4gICAgICB9LFxyXG4gICAgICAnJi5hY3RpdmUnOiB7XHJcbiAgICAgICAgY29sb3I6ICdzZWNvbmRhcnknLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBtZW51Rm9vdGVyOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIG10OiAnYXV0bycsXHJcbiAgfSxcclxuXHJcbiAgc29jaWFsOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcblxyXG4gICAgaWNvbjoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgbXI6ICcxNXB4JyxcclxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cycsXHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAnOmxhc3QtY2hpbGQnOiB7XHJcbiAgICAgICAgbXI6ICcwJyxcclxuICAgICAgfSxcclxuICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgY29sb3I6ICdzZWNvbmRhcnknLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBidXR0b246IHtcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgZm9udFNpemU6ICcxNHB4JyxcclxuICAgIGZ3OiAnNzAwJyxcclxuICAgIGhlaWdodDogJzQ1cHgnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgcHk6ICcwJyxcclxuICB9LFxyXG59OyIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFN0aWNreSBmcm9tICdyZWFjdC1zdGlja3lub2RlJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlci9oZWFkZXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vZm9vdGVyL2Zvb3Rlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgW2lzU3RpY2t5LCBzZXRJc1N0aWNreV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN0YXRlQ2hhbmdlID0gKHN0YXR1cykgPT4ge1xyXG4gICAgaWYgKHN0YXR1cy5zdGF0dXMgPT09IFN0aWNreS5TVEFUVVNfRklYRUQpIHtcclxuICAgICAgc2V0SXNTdGlja3kodHJ1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKHN0YXR1cy5zdGF0dXMgPT09IFN0aWNreS5TVEFUVVNfT1JJR0lOQUwpIHtcclxuICAgICAgc2V0SXNTdGlja3koZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPFN0aWNreSBpbm5lclo9ezEwMDF9IHRvcD17MH0gb25TdGF0ZUNoYW5nZT17aGFuZGxlU3RhdGVDaGFuZ2V9PlxyXG4gICAgICAgIDxIZWFkZXIgY2xhc3NOYW1lPXtgJHtpc1N0aWNreSA/ICdzdGlja3knIDogJ3VuU3RpY2t5J31gfSAvPlxyXG4gICAgICA8L1N0aWNreT5cclxuICAgICAgPG1haW4gaWQ9XCJjb250ZW50XCIgc3g9e3sgdmFyaWFudDogJ2xheW91dC5tYWluJywgfX0gPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9tYWluPlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgTmF2TGluayBhcyBNZW51TGluaywgTGluayBhcyBBIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBOYXZMaW5rKHsgcGF0aCwgbGFiZWwsIGNoaWxkcmVuLCAuLi5yZXN0IH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGgxPk5hdkxpbms8L2gxPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMaW5rKHsgcGF0aCwgbGFiZWwsIGNoaWxkcmVuLCAuLi5yZXN0IH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEEgey4uLnJlc3R9IGhyZWYgPXtwYXRofT5cclxuICAgICAge2NoaWxkcmVuIHx8IGxhYmVsfVxyXG4gICAgICA8L0E+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGbGV4LCBCb3gsIEljb25CdXR0b24gfSBmcm9tICd0aGVtZS11aSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXN0KHsgaXRlbXMgPSBbXSwgcGFyZW50U3R5bGUsIGNoaWxkU3R5bGUgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8aDE+TGlzdDwvaDE+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGxpc3RJY29uOiB7XHJcbiAgICB3aWR0aDogWycyNXB4JywgJzM1cHgnXSxcclxuICAgIGhlaWdodDogJ2F1dG8nLFxyXG4gICAgY29sb3I6ICdwcmltYXJ5JyxcclxuICAgIHBhZGRpbmc6IDAsXHJcbiAgICBmb250U2l6ZTogWzMsIDVdLFxyXG4gICAgbWw6ICctMXB4JyxcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgbXQ6ICcycHgnLFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEltYWdlIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnY29tcG9uZW50cy9saW5rJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ28oeyBzcmMsIC4uLnJlc3QgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGlua1xyXG4gICAgcGF0aCA9IFwiL1wiXHJcbiAgICBzeCA9IHt7XHJcbiAgICAgIHZhcmlhbnQ6ICdsaW5rcy5sb2dvJyxcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgbXI6IDE1LFxyXG4gICAgfX1cclxuICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICA8SW1hZ2Ugc3JjID0ge3NyY30gYWx0ID0gXCJXaG9venkncyBsb2dvXCIgLz5cclxuICAgIDwvTGluaz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IEJveCwgQ2FyZCwgVGV4dCwgSGVhZGluZywgQnV0dG9uIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGlzdCBmcm9tICcuL2xpc3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJpY2VDYXJkKHtcclxuICBkYXRhOiB7XHJcbiAgICBoZWFkZXIsXHJcbiAgICBuYW1lLFxyXG4gICAgZGVzY3JpcHRpb24sXHJcbiAgICBwcmljZVdpdGhVbml0LFxyXG4gICAgYnV0dG9uVGV4dCA9ICdTdGFydCBGcmVlIFRyaWFsJyxcclxuICAgIGFub3RoZXJPcHRpb24sXHJcbiAgICBwb2ludHMsXHJcbiAgfSxcclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8aDE+UHJpY2VDYXJkPC9oMT5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgcHJpY2luZ0JveDoge1xyXG4gICAgYm9yZGVyUmFkaXVzOiAyMCxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzJyxcclxuICAgIHA6IFsnMzVweCAyNXB4JywgbnVsbCwgbnVsbCwgJzQwcHgnXSxcclxuICAgIHdpZHRoOiBbJzEwMCUnLCAnNzUlJywgJzEwMCUnXSxcclxuICAgIG1iOiAnNDBweCcsXHJcbiAgICBtdDogJzQwcHgnLFxyXG4gICAgbXg6IFswLCAnYXV0bycsIDBdLFxyXG4gICAgJyY6YmVmb3JlJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgY29udGVudDogXCInJ1wiLFxyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICBib3JkZXI6ICcxcHggc29saWQgcmdiYSgzOCwgNzgsIDExOCwgMC4xKScsXHJcbiAgICAgIGJvcmRlclJhZGl1czogJ2luaGVyaXQnLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuM3MnLFxyXG4gICAgICB6SW5kZXg6IC0xLFxyXG4gICAgfSxcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICBib3hTaGFkb3c6ICcwcHggNHB4IDI1cHggcmdiYSgzOCwgNzgsIDExOCwgMC4xKSAhaW1wb3J0YW50JyxcclxuICAgICAgJyY6YmVmb3JlJzoge1xyXG4gICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaGVhZGVyOiB7XHJcbiAgICBoZWlnaHQ6IFsnMjhweCcsIG51bGwsIG51bGwsICczMnB4J10sXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd5ZWxsb3cnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgIGZvbnRTaXplOiAxLFxyXG4gICAgbGluZUhlaWdodDogMS4yLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAnLTE3cHgnLFxyXG4gICAgbGV0dGVyU3BhY2luZzogJy0uMTRweCcsXHJcbiAgICBweDogJzEycHgnLFxyXG4gIH0sXHJcbiAgcHJpY2luZ0hlYWRlcjoge1xyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcclxuICAgIG1iOiBbJzMwcHgnLCBudWxsLCBudWxsLCBudWxsLCAnNDBweCddLFxyXG4gICAgcDoge1xyXG4gICAgICBmb250U2l6ZTogWzEsIDJdLFxyXG4gICAgICBjb2xvcjogJ3RleHQnLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnaGVhZGluZycsXHJcbiAgICB9LFxyXG4gICAgJy5wYWNrYWdlX19uYW1lJzoge1xyXG4gICAgICBtYXJnaW5Cb3R0b206IFsxLCBudWxsLCAyXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBwcmljZToge1xyXG4gICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgZm9udFNpemU6IFs0LCBudWxsLCA1LCBudWxsLCAnMzBweCddLFxyXG4gICAgbGluZUhlaWdodDogMSxcclxuICAgIGxldHRlclNwYWNpbmc6ICctMC41NXB4JyxcclxuICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICBtYXJnaW5Cb3R0b206IDIsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIHB0OiBbNCwgNl0sXHJcbiAgICAnPiBzcGFuJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgcGw6ICczcHgnLFxyXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgICAgZm9udFNpemU6IFsxLCAyXSxcclxuICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbGlzdEl0ZW06IHtcclxuICAgIGZvbnRGYW1pbHk6ICdETSBTYW5zJyxcclxuICAgIGZvbnRTdHlsZTogJ25vcm1hbCcsXHJcbiAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgIGZvbnRTaXplOiBbMSwgMl0sXHJcbiAgICBsaW5lSGVpZ2h0OiBbMS43NSwgMS42XSxcclxuICAgIG1iOiAzLFxyXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgY29sb3I6ICd0ZXh0JyxcclxuICAgICcmLmNsb3NlZCc6IHtcclxuICAgICAgb3BhY2l0eTogMC41NSxcclxuICAgICAgYnV0dG9uOiB7XHJcbiAgICAgICAgY29sb3I6ICcjNzg4RkI1JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBidXR0b25Hcm91cDoge1xyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIG10OiBbJzMwcHgnLCBudWxsLCBudWxsLCBudWxsLCAnMzVweCddLFxyXG4gICAgJy5mcmVlX190cmFpbCc6IHtcclxuICAgICAgY29sb3I6ICdzZWNvbmRhcnknLFxyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgICAgZm9udFNpemU6IFsnMTRweCcsIDFdLFxyXG4gICAgICBwOiAnMjBweCAwIDAnLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGYVN0YXIgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcblxyXG5jb25zdCBSYXRpbmcgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxoMT5SYXRpbmc8L2gxPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSYXRpbmc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCwgVGV4dCwgSGVhZGluZyB9IGZyb20gJ3RoZW1lLXVpJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlY3Rpb25IZWFkZXIoeyB0aXRsZSwgc2xvZ2FuLCBpc1doaXRlIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBzeCA9IHt7dmFyaWFudDogJ3NlY3Rpb25IZWFkZXInfX0+XHJcbiAgICAgIDxUZXh0XHJcbiAgICAgICAgYXMgPSBcInBcIlxyXG4gICAgICAgIHN4ID0ge3tcclxuICAgICAgICAgIHZhcmlhbnQ6ICdzZWN0aW9uSGVhZGVyLnN1YlRpdGxlJyxcclxuICAgICAgICAgIGNvbG9yOiBpc1doaXRlPyAnd2hpdGUnIDogJ3ByaW1hcnknLFxyXG4gICAgICAgICAgb3BhY2l0eTogaXNXaGl0ZSA/IDAuNyA6IDEsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtzbG9nYW59XHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDxIZWFkaW5nXHJcbiAgICAgICAgICBhcz1cImgyXCJcclxuICAgICAgICAgIHN4ID0ge3tcclxuICAgICAgICAgICAgdmFyaWFudDogJ3NlY3Rpb25IZWFkZXIudGl0bGUnLFxyXG4gICAgICAgICAgICBjb2xvcjogaXNXaGl0ZT8gJ3doaXRlJyA6ICdoZWFkaW5nJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU0VPKHtcclxuICBkZXNjcmlwdGlvbiA9ICdzdGFydHVwIHByb2R1Y3QgbGFuZGluZyBwYWdlJyxcclxuICBhdXRob3IgPSAnSlNNJyxcclxuICBtZXRhLFxyXG4gIHRpdGxlID0gJ3N0YXJ0dXAgbGFuZGluZyB0aXRsZScsXHJcbn0pIHtcclxuICBjb25zdCBtZXRhRGF0YSA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogYGRlc2NyaXB0aW9uYCxcclxuICAgICAgY29udGVudDogZGVzY3JpcHRpb24sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm9wZXJ0eTogYG9nOnRpdGxlYCxcclxuICAgICAgY29udGVudDogdGl0bGUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm9wZXJ0eTogYG9nOmRlc2NyaXB0aW9uYCxcclxuICAgICAgY29udGVudDogZGVzY3JpcHRpb24sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm9wZXJ0eTogYG9nOnR5cGVgLFxyXG4gICAgICBjb250ZW50OiBgd2Vic2l0ZWAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBgdHdpdHRlcjpjYXJkYCxcclxuICAgICAgY29udGVudDogYHN1bW1hcnlgLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogYHR3aXR0ZXI6Y3JlYXRvcmAsXHJcbiAgICAgIGNvbnRlbnQ6IGF1dGhvcixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IGB0d2l0dGVyOnRpdGxlYCxcclxuICAgICAgY29udGVudDogdGl0bGUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBgdHdpdHRlcjpkZXNjcmlwdGlvbmAsXHJcbiAgICAgIGNvbnRlbnQ6IGRlc2NyaXB0aW9uLFxyXG4gICAgfSxcclxuICBdLmNvbmNhdChtZXRhKTtcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cclxuICAgICAge21ldGFEYXRhLm1hcCgoeyBuYW1lLCBjb250ZW50IH0sIGkpID0+IChcclxuICAgICAgICA8bWV0YSBrZXk9e2l9IG5hbWU9e25hbWV9IGNvbnRlbnQ9e2NvbnRlbnR9IC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC9IZWFkPlxyXG4gICk7XHJcbn1cclxuXHJcblNFTy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgbGFuZzogYGVuYCxcclxuICBtZXRhOiBbXSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgVGV4dCwgSGVhZGluZywgSW1hZ2UsIEJveCwgTGluayB9IGZyb20gJ3RoZW1lLXVpJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlYW1DYXJkKHsgc3JjLCBhbHRUZXh0LCB0aXRsZSwgZGVzaWduYXRpb24sIHNvY2lhbCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxoMT5UZWFtQ2FyZDwvaDE+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGNhcmQ6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBweTogWzAsIG51bGwsIDQsIDUsIDZdLFxyXG4gICAgcHg6IFsyLCBudWxsLCA2LCA3XSxcclxuICAgIHRyYW5zaXRpb246ICdlYXNlLWluLW91dCAwLjRzJyxcclxuICAgIGJvcmRlclJhZGl1czogJzhweCcsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICBib3hTaGFkb3c6IFsnbm9uZScsIG51bGwsICcwIDRweCAxMHB4IHJnYmEoMzksIDgzLCAxMjMsIDAuMTIpJ10sXHJcbiAgICAgICcuaW5mb19fbmFtZSc6IHtcclxuICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgICB9LFxyXG4gICAgICAnLmluZm9fX2Rlc2lnbmF0aW9uJzoge1xyXG4gICAgICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgIH0sXHJcbiAgICAgICcuc29jaWFsX19zaGFyZSc6IHtcclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgIGE6IHtcclxuICAgICAgICAgIG15OiAwLFxyXG4gICAgICAgICAgcHk6IFswLCBudWxsLCAxXSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBtZW1iZXJUaHVtYjoge1xyXG4gICAgd2lkdGg6IFsnNzBweCcsICc4MHB4JywgJzEwMHB4JywgbnVsbCwgbnVsbCwgJzEzMHB4J10sXHJcbiAgICBoZWlnaHQ6IFsnNzBweCcsICc4MHB4JywgJzEwMHB4JywgbnVsbCwgbnVsbCwgJzEzMHB4J10sXHJcbiAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgYm9yZGVyOiAnMnB4IHNvbGlkJyxcclxuICAgIGJvcmRlckNvbG9yOiAncHJpbWFyeScsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gIH0sXHJcbiAgaW5mb1dyYXBwZXI6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgbXQ6IFszLCBudWxsLCA0XSxcclxuICAgIG5hbWU6IHtcclxuICAgICAgZm9udFNpemU6IFsxLCAyLCAzLCBudWxsLCBudWxsLCA0XSxcclxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBbMS4yNSwgMS4zNV0sXHJcbiAgICAgIHRyYW5zaXRpb246ICdjb2xvciAwLjI1cycsXHJcbiAgICAgIG1iOiAxLFxyXG4gICAgfSxcclxuICAgIGRlc2lnbmF0aW9uOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbJzE0cHgnLCBudWxsLCBudWxsLCAyXSxcclxuICAgICAgZm9udFdlaWdodDogJ2JvZHknLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnaGVhZGluZycsXHJcbiAgICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICAgIHRyYW5zaXRpb246ICdjb2xvciAwLjI1cycsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc29jaWFsU2hhcmU6IHtcclxuICAgIHBvc2l0aW9uOiBbJ3JlbGF0aXZlJywgbnVsbCwgJ2Fic29sdXRlJ10sXHJcbiAgICByaWdodDogWzAsIG51bGwsIDYsIG51bGwsIDQsIDZdLFxyXG4gICAgYm90dG9tOiBbMCwgbnVsbCwgJzE4cHgnLCA1XSxcclxuICAgIHdpZHRoOiBbJzEwMCUnLCBudWxsLCAnYXV0byddLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogWydyb3cnLCBudWxsLCAnY29sdW1uJ10sXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIHRyYW5zaXRpb246ICdhbGwgMC4yNXMnLFxyXG4gICAgb3BhY2l0eTogWzEsIG51bGwsIDBdLFxyXG4gICAgcHQ6IDIsXHJcbiAgICBhOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbMCwgMSwgbnVsbCwgMl0sXHJcbiAgICAgIGNvbG9yOiBbJ3RleHQnLCBudWxsLCAncHJpbWFyeSddLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnMWVtJyxcclxuICAgICAgbXk6IFswLCBudWxsLCAnLTJweCddLFxyXG4gICAgICBweDogMSxcclxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cycsXHJcbiAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgIGNvbG9yOiBbJ3ByaW1hcnknLCBudWxsLCAndGV4dCddLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBCb3gsIEhlYWRpbmcsIFRleHQsIEJ1dHRvbiwgTGluayB9IGZyb20gJ3RoZW1lLXVpJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRleHRGZWF0dXJlKHtcclxuICBzdWJUaXRsZSxcclxuICB0aXRsZSxcclxuICBkZXNjcmlwdGlvbixcclxuICBidG5OYW1lLFxyXG4gIGJ0blVSTCA9ICcjJyxcclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8aDE+VGV4dEZlYXR1cmU8L2gxPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBjYXJkOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICBhOiB7XHJcbiAgICAgIG06IFsnMCBhdXRvJywgbnVsbCwgbnVsbCwgMF0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgd3JhcHBlcjoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgbXQ6IC0xLFxyXG4gICAgc3ViVGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IFswLCBudWxsLCAxXSxcclxuICAgICAgY29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICc3MDAnLFxyXG4gICAgICBtYjogWzIsIDNdLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjUsXHJcbiAgICAgIGxldHRlclNwYWNpbmc6IFsnMS41cHgnLCBudWxsLCAnMnB4J10sXHJcbiAgICB9LFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IFsnMjRweCcsIG51bGwsICcyOHB4JywgJzMwcHgnLCAnMzZweCcsICc0MnB4JywgbnVsbCwgJzQ4cHgnXSxcclxuICAgICAgY29sb3I6ICdoZWFkaW5nX3NlY29uZGFyeScsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjMsIG51bGwsIG51bGwsIG51bGwsIDEuMl0sXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICc3MDAnLFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLS41cHgnLFxyXG4gICAgICBtYjogNSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBkZXNjcmlwdGlvbjoge1xyXG4gICAgZm9udFNpemU6IFsnMTVweCcsIDIsIG51bGwsIG51bGwsIG51bGwsICcxN3B4JywgbnVsbCwgM10sXHJcbiAgICBmb250V2VpZ2h0OiA0MDAsXHJcbiAgICBsaW5lSGVpZ2h0OiBbMS44NSwgbnVsbCwgbnVsbCwgMiwgbnVsbCwgJzIuMiddLFxyXG4gICAgY29sb3I6ICd0ZXh0X3NlY29uZGFyeScsXHJcbiAgICBtYjogJzMwcHgnLFxyXG4gIH0sXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB0aGVtZSBmcm9tICd0aGVtZSc7XHJcblxyXG5pbXBvcnQgU0VPIGZyb20gJ2NvbXBvbmVudHMvc2VvJztcclxuaW1wb3J0IExheW91dCBmcm9tICdjb21wb25lbnRzL2xheW91dCc7XHJcbmltcG9ydCBCYW5uZXIgZnJvbSAnLi4vc2VjdGlvbnMvYmFubmVyJztcclxuaW1wb3J0IEtleUZlYXR1cmUgZnJvbSAnLi4vc2VjdGlvbnMva2V5LWZlYXR1cmUnO1xyXG5pbXBvcnQgU2VydmljZVNlY3Rpb24gZnJvbSAnLi4vc2VjdGlvbnMvc2VydmljZS1zZWN0aW9uJztcclxuaW1wb3J0IEZlYXR1cmUgZnJvbSAnLi4vc2VjdGlvbnMvZmVhdHVyZSc7XHJcbmltcG9ydCBDb3JlRmVhdHVyZSBmcm9tICcuLi9zZWN0aW9ucy9jb3JlLWZlYXR1cmUnO1xyXG5pbXBvcnQgV29ya0Zsb3cgZnJvbSAnLi4vc2VjdGlvbnMvd29ya2Zsb3cnO1xyXG5pbXBvcnQgUGFja2FnZSBmcm9tICcuLi9zZWN0aW9ucy9wYWNrYWdlJztcclxuaW1wb3J0IFRlYW1TZWN0aW9uIGZyb20gJy4uL3NlY3Rpb25zL3RlYW0tc2VjdGlvbic7XHJcbmltcG9ydCBUZXN0aW1vbmlhbENhcmQgZnJvbSAnLi4vc2VjdGlvbnMvdGVzdGltb25pYWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXhQYWdlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICA8U0VPIHRpdGxlPVwiV2hvb3p5J3MgV3JhcHNcIiAvPlxyXG4gICAgICAgICAgPEJhbm5lciAvPlxyXG4gICAgICAgICAgPEtleUZlYXR1cmUgLz5cclxuICAgICAgICAgIDxTZXJ2aWNlU2VjdGlvbiAvPlxyXG4gICAgICAgICAgPEZlYXR1cmUgLz5cclxuICAgICAgICAgIDxDb3JlRmVhdHVyZSAvPlxyXG4gICAgICAgICAgPFdvcmtGbG93IC8+XHJcbiAgICAgICAgICA8UGFja2FnZSAvPlxyXG4gICAgICAgICAgPFRlYW1TZWN0aW9uIC8+XHJcbiAgICAgICAgICA8VGVzdGltb25pYWxDYXJkIC8+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEJveCwgSGVhZGluZywgVGV4dCwgSW1hZ2UsIEJ1dHRvbiB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IEJhbm5lckltZyBmcm9tICdhc3NldHMvYmFubmVyLXRodW1iLnBuZyc7XHJcbmltcG9ydCBTaGFwZUxlZnQgZnJvbSAnYXNzZXRzL3NoYXBlLWxlZnQucG5nJztcclxuaW1wb3J0IFNoYXBlUmlnaHQgZnJvbSAnYXNzZXRzL3NoYXBlLXJpZ2h0LnBuZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYW5uZXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIHN4PXtzdHlsZXMuYmFubmVyfSBpZD1cImhvbWVcIj5cclxuICAgICAgPGNvbnRhaW5lciBzeD17c3R5bGVzLmJhbm5lci5jb250YWluZXJ9PlxyXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5iYW5uZXIuY29udGVudEJveH0+XHJcbiAgICAgICAgICA8SGVhZGluZyBhcyA9XCJoMVwiIHZhcmlhbnQgPVwiaGVyb1ByaW1hcnlcIj5cclxuICAgICAgICAgICAgUXVhbGl0eSBvdmVyIFF1YW50aXR5LlxyXG4gICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgPFRleHQgYXMgPVwicFwiIHZhcmlhbnQ9XCJoZXJvU2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgIEF0IFdob296eSdzIHdlIGNhbiB0cmFuc2Zvcm0geW91ciBjYXIncyBhcHByZXJlbmNlIHdpdGggZWFzZS4gTWFrZSB5b3VyIGRyZWFtcyBjb21lIHRydWUuXHJcbiAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgIEV4cGxvcmVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICA8Qm94IHN4ID17c3R5bGVzLmJhbm5lci5pbWFnZUJveH0+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjID17QmFubmVySW1nfSBhbHQ9J2Jhbm5lcicgLz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9jb250YWluZXI+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGJhbm5lcjoge1xyXG4gICAgcHQ6IFsnMTQwcHgnLCAnMTQ1cHgnLCAnMTU1cHgnLCAnMTcwcHgnLCBudWxsLCBudWxsLCAnMTgwcHgnLCAnMjE1cHgnXSxcclxuICAgIHBiOiBbMiwgbnVsbCwgMCwgbnVsbCwgMiwgMCwgbnVsbCwgNV0sXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIHpJbmRleDogMixcclxuICAgICcmOjpiZWZvcmUnOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICBjb250ZW50OiAnXCJcIicsXHJcbiAgICAgIGJvdHRvbTogNixcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIHpJbmRleDogLTEsXHJcbiAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke1NoYXBlTGVmdH0pYCxcclxuICAgICAgYmFja2dyb3VuZFJlcGVhdDogYG5vLXJlcGVhdGAsXHJcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2JvdHRvbSBsZWZ0JyxcclxuICAgICAgYmFja2dyb3VuZFNpemU6ICczNiUnLFxyXG4gICAgfSxcclxuICAgICcmOjphZnRlcic6IHtcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcclxuICAgICAgYm90dG9tOiAnNDBweCcsXHJcbiAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgekluZGV4OiAtMSxcclxuICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7U2hhcGVSaWdodH0pYCxcclxuICAgICAgYmFja2dyb3VuZFJlcGVhdDogYG5vLXJlcGVhdGAsXHJcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2JvdHRvbSByaWdodCcsXHJcbiAgICAgIGJhY2tncm91bmRTaXplOiAnMzIlJyxcclxuICAgIH0sXHJcbiAgICBjb250YWluZXI6IHtcclxuICAgICAgbWluSGVpZ2h0OiAnaW5oZXJpdCcsXHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIH0sXHJcbiAgICBjb250ZW50Qm94OiB7XHJcbiAgICAgIHdpZHRoOiBbJzEwMCUnLCAnOTAlJywgJzUzNXB4JywgbnVsbCwgJzU3JScsICc2MCUnLCAnNjglJywgJzYwJSddLFxyXG4gICAgICBteDogJ2F1dG8nLFxyXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICBtYjogWyc0MHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgN10sXHJcbiAgICB9LFxyXG4gICAgaW1hZ2VCb3g6IHtcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxyXG4gICAgICBtYjogWzAsIG51bGwsIC02LCBudWxsLCBudWxsLCAnLTQwcHgnLCBudWxsLCAtM10sXHJcbiAgICAgIGltZzoge1xyXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgIGhlaWdodDogWzI0NSwgJ2F1dG8nXSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQ29udGFpbmVyLCBCb3gsIEltYWdlIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgVGV4dEZlYXR1cmUgZnJvbSAnY29tcG9uZW50cy90ZXh0LWZlYXR1cmUnO1xyXG5cclxuaW1wb3J0IEZlYXR1cmVUaHVtYiBmcm9tICdhc3NldHMvY29yZS1mZWF0dXJlLnBuZyc7XHJcbmltcG9ydCBzaGFwZVBhdHRlcm4gZnJvbSAnYXNzZXRzL3NoYXBlLXBhdHRlcm4yLnBuZyc7XHJcblxyXG5jb25zdCBkYXRhID0ge1xyXG4gIHN1YlRpdGxlOiAnQ29yZSBmZWF0dXJlcycsXHJcbiAgdGl0bGU6ICdTbWFydCBKYWNrcG90cyB0aGF0IHlvdSBtYXkgbG92ZSB0aGlzIGFueXRpbWUgJiBhbnl3aGVyZScsXHJcbiAgZGVzY3JpcHRpb246XHJcbiAgICAnR2V0IHlvdXIgdGVzdHMgZGVsaXZlcmVkIGF0IGxldCBob21lIGNvbGxlY3Qgc2FtcGxlIGZyb20gdGhlIHZpY3Rvcnkgb2YgdGhlIG1hbmFnZW1lbnRzIHRoYXQgc3VwcGxpZXMgYmVzdCBkZXNpZ24gc3lzdGVtIGd1aWRlbGluZXMgZXZlci4nLFxyXG4gIGJ0bk5hbWU6ICdHZXQgU3RhcnRlZCcsXHJcbiAgYnRuVVJMOiAnIycsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3JlRmVhdHVyZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICA8c2VjdGlvbiBzeD17e3ZhcmlhbnQ6ICdzZWN0aW9uLmNvcmVGZWF0dXJlJ319PlxyXG4gICAgPENvbnRhaW5lciBzeD17c3R5bGVzLmNvbnRhaW5lckJveH0+XHJcbiAgICAgIDxCb3ggc3g9e3N0eWxlcy5jb250ZW50Qm94fT5cclxuICAgICAgICA8VGV4dEZlYXR1cmUgXHJcbiAgICAgICAgICBzdWJUaXRsZT17ZGF0YS5zdWJUaXRsZX1cclxuICAgICAgICAgIHRpdGxlPXtkYXRhLnRpdGxlfVxyXG4gICAgICAgICAgZGVzY3JpcHRpb249e2RhdGEuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICBidG5OYW1lPXtkYXRhLmJ0bk5hbWV9XHJcbiAgICAgICAgICBidG5VUkw9e2RhdGEuYnRuVVJMfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8Qm94IHN4PXtzdHlsZXMudGh1bWJuYWlsfT5cclxuICAgICAgICA8SW1hZ2Ugc3JjPXtGZWF0dXJlVGh1bWJ9IGFsdD1cIlRodW1ibmFpbFwiIC8+XHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLnNoYXBlQm94fT5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9e3NoYXBlUGF0dGVybn0gYWx0PVwiU2hhcGVcIi8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgY29udGFpbmVyQm94OiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICBmbGV4V3JhcDogWyd3cmFwJywgbnVsbCwgbnVsbCwgJ25vd3JhcCddLFxyXG4gICAgcGI6IFswLCA3LCAwLCBudWxsLCA3XSxcclxuICB9LFxyXG4gIGNvbnRlbnRCb3g6IHtcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICBweDogWzAsIG51bGwsICczMHB4JywgMF0sXHJcbiAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgbnVsbCwgbnVsbCwgJ2xlZnQnXSxcclxuICAgIHdpZHRoOiBbJzEwMCUnLCAnODAlJywgbnVsbCwgMzQwLCA0MDAsIDQzMCwgbnVsbCwgNDg1XSxcclxuICAgIHBiOiBbJzUwcHgnLCAnNjBweCcsIG51bGwsIDBdLFxyXG4gICAgbXg6IFsnYXV0bycsIG51bGwsIG51bGwsIDBdLFxyXG4gICAgJy5kZXNjcmlwdGlvbic6IHtcclxuICAgICAgcHI6IFswLCBudWxsLCA2LCA3LCA2XSxcclxuICAgIH0sXHJcbiAgfSxcclxuICB0aHVtYm5haWw6IHtcclxuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIG1yOiAnYXV0bycsXHJcbiAgICBtbDogWydhdXRvJywgbnVsbCwgbnVsbCwgbnVsbCwgN10sXHJcbiAgICAnPiBpbWcnOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICB6SW5kZXg6IDEsXHJcbiAgICAgIGhlaWdodDogWzMxMCwgJ2F1dG8nXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzaGFwZUJveDoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBib3R0b206IC02NSxcclxuICAgIHJpZ2h0OiAtMTY1LFxyXG4gICAgekluZGV4OiAtMSxcclxuICAgIGRpc3BsYXk6IFsnbm9uZScsICdpbmxpbmUtYmxvY2snLCAnbm9uZScsIG51bGwsICdpbmxpbmUtYmxvY2snXSxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEdyaWQgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXInO1xyXG5pbXBvcnQgRmVhdHVyZUNhcmQgZnJvbSAnY29tcG9uZW50cy9mZWF0dXJlLWNhcmQuanMnO1xyXG5pbXBvcnQgUGVyZm9ybWFuY2UgZnJvbSAnYXNzZXRzL2ZlYXR1cmUvcGVyZm9ybWFuY2Uuc3ZnJztcclxuaW1wb3J0IFBhcnRuZXJzaGlwIGZyb20gJ2Fzc2V0cy9mZWF0dXJlL3BhcnRuZXJzaGlwLnN2Zyc7XHJcbmltcG9ydCBTdWJzY3JpcHRpb24gZnJvbSAnYXNzZXRzL2ZlYXR1cmUvc3Vic2NyaXB0aW9uLnN2Zyc7XHJcbmltcG9ydCBTdXBwb3J0IGZyb20gJ2Fzc2V0cy9mZWF0dXJlL3N1cHBvcnQuc3ZnJztcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBpbWdTcmM6IFBlcmZvcm1hbmNlLFxyXG4gICAgYWx0VGV4dDogJ0Zhc3QgUGVyZm9ybWFuY2UnLFxyXG4gICAgdGl0bGU6ICdGYXN0IFBlcmZvcm1hbmNlJyxcclxuICAgIHRleHQ6XHJcbiAgICAgICdMZXTigJlzIGp1c3QgZ2V0IHRoaXMgb3V0IG9mIHRoZSB3YXkgLSB0aGVyZSB3aWxsIGFsd2F5cyBiZSBhIGtpdCB2ZXJzaW9uIG9mIEVkdSBmbG93LiBQYWlkIHN1YnNjcmlwdGlvbnMgYWxsb3cgdXMgdG8gY29udGludWUgaGVscGluZyBsZWFybmVycyBhcm91bmQgdGhlIHdvcmxkLicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIGltZ1NyYzogUGFydG5lcnNoaXAsXHJcbiAgICBhbHRUZXh0OiAnUHJvIFN1YnNjcmlwdGlvbicsXHJcbiAgICB0aXRsZTogJ1BybyBTdWJzY3JpcHRpb24nLFxyXG4gICAgdGV4dDpcclxuICAgICAgJ1dlIGJlbGlldmUgaXTigJlzIGltcG9ydGFudCBmb3IgZXZlcnlvbmUgdG8gaGF2ZSBhY2Nlc3MgdG8gc29mdHdhcmUg4oCTIGVzcGVjaWFsbHkgd2hlbiBpdCBjb21lcyB0byBkaWdpdGFsIGxlYXJuaW5nIGJlIG5hdmlnYXRlZCBieSBrZXlib2FyZCBhbmQgc2NyZWVuIHJlYWRlcnMuJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgaW1nU3JjOiBTdWJzY3JpcHRpb24sXHJcbiAgICBhbHRUZXh0OiAnUGFydG5lcnNoaXAgZGVhbCcsXHJcbiAgICB0aXRsZTogJ1BhcnRuZXJzaGlwIGRlYWwnLFxyXG4gICAgdGV4dDpcclxuICAgICAgJ0xldOKAmXMganVzdCBnZXQgdGhpcyBvdXQgb2YgdGhlIHdheSAtIHRoZXJlIHdpbGwgYWx3YXlzIGJlIGEga2l0IHZlcnNpb24gb2YgRWR1IGZsb3cuIFBhaWQgc3Vic2NyaXB0aW9ucyBhbGxvdyB1cyB0byBjb250aW51ZSBoZWxwaW5nIGxlYXJuZXJzIGFyb3VuZCB0aGUgd29ybGQuJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0LFxyXG4gICAgaW1nU3JjOiBTdXBwb3J0LFxyXG4gICAgYWx0VGV4dDogJ0N1c3RvbWVyIFN1cHBvcnQnLFxyXG4gICAgdGl0bGU6ICdDdXN0b21lciBTdXBwb3J0JyxcclxuICAgIHRleHQ6XHJcbiAgICAgICdXZSBiZWxpZXZlIGl04oCZcyBpbXBvcnRhbnQgZm9yIGV2ZXJ5b25lIHRvIGhhdmUgYWNjZXNzIHRvIHNvZnR3YXJlIOKAkyBlc3BlY2lhbGx5IHdoZW4gaXQgY29tZXMgdG8gZGlnaXRhbCBsZWFybmluZyBiZSBuYXZpZ2F0ZWQgYnkga2V5Ym9hcmQgYW5kIHNjcmVlbiByZWFkZXJzLicsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZlYXR1cmUoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgPGgxPkZlYXR1cmU8L2gxPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBncmlkOiB7XHJcbiAgICBwdDogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDJdLFxyXG4gICAgcHg6IFs1LCA2LCAwLCBudWxsLCA3LCA4LCA3XSxcclxuICAgIGdyaWRHYXA6IFtcclxuICAgICAgJzQwcHggMCcsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICc0NXB4IDMwcHgnLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnNjBweCA1MHB4JyxcclxuICAgICAgJzcwcHggNTBweCcsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICc4MHB4IDkwcHgnLFxyXG4gICAgXSxcclxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFsncmVwZWF0KDEsMWZyKScsIG51bGwsICdyZXBlYXQoMiwxZnIpJ10sXHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL3NlY3Rpb24taGVhZGVyJztcclxuaW1wb3J0IEZlYXR1cmVDYXJkQ29sdW1uIGZyb20gJ2NvbXBvbmVudHMvZmVhdHVyZS1jYXJkLWNvbHVtbi5qcyc7XHJcbmltcG9ydCBQZXJmb3JtYW5jZSBmcm9tICdhc3NldHMva2V5LWZlYXR1cmUvcGVyZm9ybWFuY2Uuc3ZnJztcclxuaW1wb3J0IFBhcnRuZXJzaGlwIGZyb20gJ2Fzc2V0cy9rZXktZmVhdHVyZS9wYXJ0bmVyc2hpcC5zdmcnO1xyXG5pbXBvcnQgU3Vic2NyaXB0aW9uIGZyb20gJ2Fzc2V0cy9rZXktZmVhdHVyZS9zdWJzY3JpcHRpb24uc3ZnJztcclxuaW1wb3J0IFN1cHBvcnQgZnJvbSAnYXNzZXRzL2tleS1mZWF0dXJlL3N1cHBvcnQuc3ZnJztcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBpbWdTcmM6IFBlcmZvcm1hbmNlLFxyXG4gICAgYWx0VGV4dDogJ0NhciBWaW55bCcsXHJcbiAgICB0aXRsZTogJ1ZpbnlsJyxcclxuICAgIHRleHQ6XHJcbiAgICAgICdHaXZlIHlvdXIgY2FyIGEgbmV3IGxvb2shLicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIGltZ1NyYzogUGFydG5lcnNoaXAsXHJcbiAgICBhbHRUZXh0OiAnZGVjYWwnLFxyXG4gICAgdGl0bGU6ICdEZWNhbHMnLFxyXG4gICAgdGV4dDpcclxuICAgICAgJ0dldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCBob21lIGNvbGxlY3QgYSBzYW1wbGUgZnJvbSB0aGUgeW91ciBibG9vZCB0ZXN0cy4nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBpbWdTcmM6IFN1YnNjcmlwdGlvbixcclxuICAgIGFsdFRleHQ6ICd0aW50aW5nJyxcclxuICAgIHRpdGxlOiAnV2luZG93IFRpbnRpbmcnLFxyXG4gICAgdGV4dDpcclxuICAgICAgJ0dldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCBob21lIGNvbGxlY3QgYSBzYW1wbGUgZnJvbSB0aGUgeW91ciBibG9vZCB0ZXN0cy4nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICBpbWdTcmM6IFN1cHBvcnQsXHJcbiAgICBhbHRUZXh0OiAnZGV0YWlsaW5nJyxcclxuICAgIHRpdGxlOiAnRGV0YWlsaW5nJyxcclxuICAgIHRleHQ6XHJcbiAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb20gdGhlIHlvdXIgYmxvb2QgdGVzdHMuJyxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gS2V5RmVhdHVyZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gc3ggPXt7dmFyaWFudDogJ3NlY3Rpb24ua2V5RmVhdHVyZSd9fSAgaWQ9XCJmZWF0dXJlXCI+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFNlY3Rpb25IZWFkZXJcclxuICAgICAgICAgIHNsb2dhbiA9IFwiTGV0IHlvdXIgaW1hZ2luYXRpb24gY29tZSB0cnVlXCJcclxuICAgICAgICAgIHRpdGxlID0gXCJNZWV0IG91ciBzZXJ2aWNlc1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEdyaWQgc3ggPSB7c3R5bGVzLmdyaWR9PlxyXG4gICAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICA8RmVhdHVyZUNhcmRDb2x1bW5cclxuICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgIHNyYz17aXRlbS5pbWdTcmN9XHJcbiAgICAgICAgICAgICAgICBhbHQ9e2l0ZW0uYWx0VGV4dH1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgdGV4dD17aXRlbS50ZXh0fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgZ3JpZDoge1xyXG4gICAgd2lkdGg6IFsnMTAwJScsICc4MCUnLCAnMTAwJSddLFxyXG4gICAgbXg6ICdhdXRvJyxcclxuICAgIGdyaWRHYXA6IFtcclxuICAgICAgJzM1cHggMCcsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICc0MHB4IDQwcHgnLFxyXG4gICAgICAnNTBweCA2MHB4JyxcclxuICAgICAgJzMwcHgnLFxyXG4gICAgICAnNTBweCA0MHB4JyxcclxuICAgICAgJzU1cHggOTBweCcsXHJcbiAgICBdLFxyXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1xyXG4gICAgICAncmVwZWF0KDEsMWZyKScsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICdyZXBlYXQoMiwxZnIpJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJ3JlcGVhdCg0LDFmciknLFxyXG4gICAgXSxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBDb250YWluZXIsIEJveCwgRmxleCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LW11bHRpLWNhcm91c2VsJztcclxuaW1wb3J0IFByaWNlQ2FyZCBmcm9tICdjb21wb25lbnRzL3ByaWNlLWNhcmQnO1xyXG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSAnY29tcG9uZW50cy9idXR0b24tZ3JvdXAnO1xyXG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyJztcclxuaW1wb3J0IHsgSW9Jb3NDaGVja21hcmtDaXJjbGUsIElvSW9zQ2xvc2VDaXJjbGUgfSBmcm9tICdyZWFjdC1pY29ucy9pbyc7XHJcblxyXG5jb25zdCBwYWNrYWdlcyA9IHtcclxuICBtb250aGx5OiBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICBuYW1lOiAnRnJlZSBQbGFuJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdGb3IgU21hbGwgdGVhbXMgb3Igb2ZmaWNlJyxcclxuICAgICAgYnV0dG9uVGV4dDogJ1N0YXJ0IGZyZWUgdHJhaWwnLFxyXG4gICAgICBwcmljZVdpdGhVbml0OiAnJDAnLFxyXG4gICAgICBwb2ludHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICAgIHRleHQ6ICdEcmFnICYgRHJvcCBCdWlsZGVyJyxcclxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgICB0ZXh0OiBcIjEsMDAwJ3Mgb2YgVGVtcGxhdGVzXCIsXHJcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAzLFxyXG4gICAgICAgICAgaWNvbjogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIC8+LFxyXG4gICAgICAgICAgdGV4dDogJ0Jsb2cgU3VwcG9ydCBUb29scycsXHJcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiA0LFxyXG4gICAgICAgICAgaWNvbjogPElvSW9zQ2xvc2VDaXJjbGUgLz4sXHJcbiAgICAgICAgICB0ZXh0OiAnZUNvbW1lcmNlIFN0b3JlICcsXHJcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIG5hbWU6ICdCdXNpbmVzcyBraW5nJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdGb3IgRW50ZXJwcmlzZSBidXNpbmVzcycsXHJcbiAgICAgIHByaWNlV2l0aFVuaXQ6ICckMTUnLFxyXG4gICAgICBidXR0b25UZXh0OiAnQ3JlYXRlIGFjY291bnQnLFxyXG4gICAgICBhbm90aGVyT3B0aW9uOiAnT3IgU3RhcnQgMTQgRGF5cyB0cmFpbCcsXHJcbiAgICAgIHBvaW50czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgaWNvbjogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIC8+LFxyXG4gICAgICAgICAgdGV4dDogJ0RyYWcgJiBEcm9wIEJ1aWxkZXInLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogMixcclxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICAgIHRleHQ6IFwiMSwwMDAncyBvZiBUZW1wbGF0ZXNcIixcclxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgICB0ZXh0OiAnQmxvZyBTdXBwb3J0IFRvb2xzJyxcclxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgICB0ZXh0OiAnZUNvbW1lcmNlIFN0b3JlICcsXHJcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDMsXHJcbiAgICAgIGhlYWRlcjogJ1N1Z2dlc3RlZCcsXHJcbiAgICAgIGhlYWRlckljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgbmFtZTogJ1BybyBNYXN0ZXInLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ0ZvciBwcm8gbGV2ZWwgZGV2ZWxvcGVycycsXHJcbiAgICAgIHByaWNlV2l0aFVuaXQ6ICckMjQnLFxyXG4gICAgICBidXR0b25UZXh0OiAnQ3JlYXRlIGFjY291bnQnLFxyXG4gICAgICBhbm90aGVyT3B0aW9uOiAnT3IgU3RhcnQgMTQgRGF5cyB0cmFpbCcsXHJcbiAgICAgIHBvaW50czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgaWNvbjogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIC8+LFxyXG4gICAgICAgICAgdGV4dDogJ0RyYWcgJiBEcm9wIEJ1aWxkZXInLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogMixcclxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICAgIHRleHQ6IFwiMSwwMDAncyBvZiBUZW1wbGF0ZXNcIixcclxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgICB0ZXh0OiAnQmxvZyBTdXBwb3J0IFRvb2xzJyxcclxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgICB0ZXh0OiAnZUNvbW1lcmNlIFN0b3JlICcsXHJcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICBdLFxyXG4gIGFubnVhbDogW1xyXG4gICAge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgbmFtZTogJ0ZyZWUgUGxhbicsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnRm9yIFNtYWxsIHRlYW1zIG9yIG9mZmljZScsXHJcbiAgICAgIGJ1dHRvblRleHQ6ICdTdGFydCBmcmVlIHRyYWlsJyxcclxuICAgICAgcHJpY2VXaXRoVW5pdDogJyQwJyxcclxuICAgICAgcG9pbnRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgICB0ZXh0OiBcIjEsMDAwJ3Mgb2YgVGVtcGxhdGVzXCIsXHJcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgICAgaWNvbjogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIC8+LFxyXG4gICAgICAgICAgdGV4dDogJ0RyYWcgJiBEcm9wIEJ1aWxkZXInLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogMyxcclxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICAgIHRleHQ6ICdCbG9nIFN1cHBvcnQgVG9vbHMnLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogNCxcclxuICAgICAgICAgIGljb246IDxJb0lvc0Nsb3NlQ2lyY2xlIC8+LFxyXG4gICAgICAgICAgdGV4dDogJ2VDb21tZXJjZSBTdG9yZSAnLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICBuYW1lOiAnQnVzaW5lc3Mga2luZycsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnRm9yIEVudGVycHJpc2UgYnVzaW5lc3MnLFxyXG4gICAgICBwcmljZVdpdGhVbml0OiAnJDI1JyxcclxuICAgICAgYnV0dG9uVGV4dDogJ0NyZWF0ZSBhY2NvdW50JyxcclxuICAgICAgYW5vdGhlck9wdGlvbjogJ09yIFN0YXJ0IDEwIERheXMgdHJhaWwnLFxyXG4gICAgICBwb2ludHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICAgIHRleHQ6ICdlQ29tbWVyY2UgU3RvcmUnLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogMixcclxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICAgIHRleHQ6ICdCbG9nIFN1cHBvcnQgVG9vbHMnLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogMyxcclxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICAgIHRleHQ6IFwiMSwwMDAncyBvZiBUZW1wbGF0ZXNcIixcclxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgICB0ZXh0OiAnRHJhZyAmIERyb3AgQnVpbGRlciAnLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAzLFxyXG4gICAgICBoZWFkZXI6ICdTdWdnZXN0ZWQnLFxyXG4gICAgICBoZWFkZXJJY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgIG5hbWU6ICdQcm8gTWFzdGVyJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdGb3IgcHJvIGxldmVsIGRldmVsb3BlcnMnLFxyXG4gICAgICBwcmljZVdpdGhVbml0OiAnJDM5JyxcclxuICAgICAgYnV0dG9uVGV4dDogJ0NyZWF0ZSBhY2NvdW50JyxcclxuICAgICAgYW5vdGhlck9wdGlvbjogJ09yIFN0YXJ0IDEwIERheXMgdHJhaWwnLFxyXG4gICAgICBwb2ludHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICAgIHRleHQ6ICdlQ29tbWVyY2UgU3RvcmUnLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogMixcclxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICAgIHRleHQ6ICdCbG9nIFN1cHBvcnQgVG9vbHMnLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogMyxcclxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICAgIHRleHQ6IFwiMSwwMDAncyBvZiBUZW1wbGF0ZXNcIixcclxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgICB0ZXh0OiAnRHJhZyAmIERyb3AgQnVpbGRlciAnLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgXSxcclxufTtcclxuXHJcbmNvbnN0IHJlc3BvbnNpdmUgPSB7XHJcbiAgZGVza3RvcDoge1xyXG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDMwMDAsIG1pbjogMTAyNCB9LFxyXG4gICAgaXRlbXM6IDMsXHJcbiAgICBkcmFnZ2FibGU6IGZhbHNlLFxyXG4gIH0sXHJcbiAgdGFibGV0OiB7XHJcbiAgICBicmVha3BvaW50OiB7IG1heDogMTAyMywgbWluOiA2NDAgfSxcclxuICAgIGl0ZW1zOiAyLFxyXG4gICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gIH0sXHJcbiAgbW9iaWxlOiB7XHJcbiAgICBicmVha3BvaW50OiB7IG1heDogNjM5LCBtaW46IDAgfSxcclxuICAgIGl0ZW1zOiAxLFxyXG4gICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWNrYWdlKCkge1xyXG4gIGNvbnN0IHsgbW9udGhseSwgYW5udWFsIH0gPSBwYWNrYWdlcztcclxuXHJcbiAgY29uc3Qgc2xpZGVyUGFyYW1zID0ge1xyXG4gICAgYWRkaXRpb25hbFRyYW5zZnJvbTogMCxcclxuICAgIGFycm93czogZmFsc2UsXHJcbiAgICBhdXRvUGxheVNwZWVkOiAzMDAwLFxyXG4gICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICBjbGFzc05hbWU6ICcnLFxyXG4gICAgc2xpZGVzVG9TbGlkZTogMSxcclxuICAgIGl0ZW1zOiAzLFxyXG4gICAgY29udGFpbmVyQ2xhc3M6ICdjYXJvdXNlbC1jb250YWluZXInLFxyXG4gICAgY3VzdG9tQnV0dG9uR3JvdXA6IDxCdXR0b25Hcm91cCAvPixcclxuICAgIGRvdExpc3RDbGFzczogJycsXHJcbiAgICBmb2N1c09uU2VsZWN0OiBmYWxzZSxcclxuICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgIGtleUJvYXJkQ29udHJvbDogZmFsc2UsXHJcbiAgICBpdGVtQ2xhc3M6ICcnLFxyXG4gICAgbWluaW11bVRvdWNoRHJhZzogODAsXHJcbiAgICByZW5kZXJCdXR0b25Hcm91cE91dHNpZGU6IHRydWUsXHJcbiAgICByZW5kZXJEb3RzT3V0c2lkZTogZmFsc2UsXHJcbiAgICByZXNwb25zaXZlOiByZXNwb25zaXZlLFxyXG4gICAgc2hvd0RvdHM6IGZhbHNlLFxyXG4gICAgc2xpZGVyQ2xhc3M6ICcnLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aDE+UGFja2FnZTwvaDE+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgZmFkZUluID0ga2V5ZnJhbWVzYFxyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbmA7XHJcbmNvbnN0IGZhZGVJbjIgPSBrZXlmcmFtZXNgXHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIHRvIHtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgcHJpY2luZ1dyYXBwZXI6IHtcclxuICAgIG1iOiAnLTQwcHgnLFxyXG4gICAgbXQ6ICctNDBweCcsXHJcbiAgICBteDogLTMsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICAnJi5wcmljaW5nX193cmFwcGVyIC5wYWNrYWdlX19jYXJkJzoge1xyXG4gICAgICAnLnBhY2thZ2VfX2hlYWRlcic6IHtcclxuICAgICAgICBhbmltYXRpb246IGAke2ZhZGVJbn0gMC44cyBlYXNlLWluYCxcclxuICAgICAgfSxcclxuICAgICAgJ3VsID4gbGknOiB7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBgJHtmYWRlSW4yfSAwLjdzIGVhc2UtaW5gLFxyXG4gICAgICB9LFxyXG4gICAgICAnLnBhY2thZ2VfX3ByaWNlJzoge1xyXG4gICAgICAgIGFuaW1hdGlvbjogYCR7ZmFkZUluMn0gMC45cyBlYXNlLWluYCxcclxuICAgICAgfSxcclxuICAgICAgYnV0dG9uOiB7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBgJHtmYWRlSW4yfSAxcyBlYXNlLWluYCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAnLmNhcm91c2VsLWNvbnRhaW5lcic6IHtcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgJz4gdWwgPiBsaSAnOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgICcuYnV0dG9uX19ncm91cCc6IHtcclxuICAgICAgZGlzcGxheTogWydmbGV4JywgbnVsbCwgbnVsbCwgbnVsbCwgJ25vbmUnXSxcclxuICAgICAgbWI6IFs0LCBudWxsLCBudWxsLCBudWxsLCAwXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBwcmljaW5nSXRlbToge1xyXG4gICAgbXg6IDMsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgZmxleDogJzEgMSBhdXRvJyxcclxuICB9LFxyXG4gIGJ1dHRvbkdyb3VwOiB7XHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBtYjogJzcnLFxyXG4gICAgbXQ6IFsnLTE1cHgnLCAnLTM1cHgnXSxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgekluZGV4OiAyLFxyXG4gIH0sXHJcbiAgYnV0dG9uR3JvdXBJbm5lcjoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgcGFkZGluZzogJzdweCcsXHJcbiAgICBtYXJnaW46ICcwIGF1dG8nLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNGN0Y4RkInLFxyXG4gICAgYnV0dG9uOiB7XHJcbiAgICAgIGJvcmRlcjogMCxcclxuICAgICAgcGFkZGluZzogWycxNXB4IDIwcHgnLCAnMTVweCAyN3B4J10sXHJcbiAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICAgIGZvbnRTaXplOiBbMSwgMl0sXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMixcclxuICAgICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICBmb250RmFtaWx5OiAnYm9keScsXHJcbiAgICAgIGxldHRlclNwYWNpbmc6ICctMC4yNHB4JyxcclxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzJyxcclxuICAgICAgJyYuYWN0aXZlJzoge1xyXG4gICAgICAgIGNvbG9yOiAnIzBmMjEzNycsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICAgICAgYm94U2hhZG93OiAnMCAzcHggNHB4IHJnYmEoMzgsIDc4LCAxMTgsIDAuMSknLFxyXG4gICAgICB9LFxyXG4gICAgICAnJjpmb2N1cyc6IHtcclxuICAgICAgICBvdXRsaW5lOiAwLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIENvbnRhaW5lciwgQm94LCBHcmlkLCBUZXh0LCBIZWFkaW5nLCBCdXR0b24sIEltYWdlIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcclxuaW1wb3J0IFRleHRGZWF0dXJlIGZyb20gJ2NvbXBvbmVudHMvdGV4dC1mZWF0dXJlJztcclxuaW1wb3J0IE1vZGFsVmlkZW8gZnJvbSAncmVhY3QtbW9kYWwtdmlkZW8nO1xyXG5pbXBvcnQgeyBJb0lvc1BsYXkgfSBmcm9tICdyZWFjdC1pY29ucy9pbyc7XHJcblxyXG5pbXBvcnQgU2VydmljZVRodW1iIGZyb20gJ2Fzc2V0cy9zZXJ2aWNlLXRodW1iLnBuZyc7XHJcbmltcG9ydCBzaGFwZVBhdHRlcm4gZnJvbSAnYXNzZXRzL3NoYXBlLXBhdHRlcm4xLnBuZyc7XHJcblxyXG5pbXBvcnQgU21hcnQgZnJvbSAnYXNzZXRzL3NlcnZpY2VzL3NtYXJ0LnN2Zyc7XHJcbmltcG9ydCBTZWN1cmUgZnJvbSAnYXNzZXRzL3NlcnZpY2VzL3NlY3VyZS5zdmcnO1xyXG5cclxuY29uc3QgZGF0YSA9IHtcclxuICBzdWJUaXRsZTogJ291ciBzZXJ2aWNlcycsXHJcbiAgdGl0bGU6ICdCdXNpbmVzcyBHb2FscyBBY2hpZXZlZCB3aXRoIERlc2lnbicsXHJcbiAgZmVhdHVyZXM6IFtcclxuICAgIHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIGltZ1NyYzogU21hcnQsXHJcbiAgICAgIGFsdFRleHQ6ICdTbWFydCBGZWF0dXJlcycsXHJcbiAgICAgIHRpdGxlOiAnU21hcnQgRmVhdHVyZXMnLFxyXG4gICAgICB0ZXh0OlxyXG4gICAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgbGV0IGhvbWUgY29sbGVjdCBzYW1wbGUgZnJvbSB0aGUgdmljdG9yeSBvZiB0aGUgbWFuYWdlbWVudHMuIHlvdXIgYmxvb2QgdGVzdHMuJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICBpbWdTcmM6IFNlY3VyZSxcclxuICAgICAgYWx0VGV4dDogJ1NlY3VyZSBDb250ZW50cycsXHJcbiAgICAgIHRpdGxlOiAnU2VjdXJlIENvbnRlbnRzJyxcclxuICAgICAgdGV4dDpcclxuICAgICAgICAnR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IGxldCBob21lIGNvbGxlY3Qgc2FtcGxlIGZyb20gdGhlIHZpY3Rvcnkgb2YgdGhlIG1hbmFnZW1lbnRzLiB5b3VyIGJsb29kIHRlc3RzLicsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXJ2aWNlU2VjdGlvbigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGgxPlNlcnZpY2UgU2VjdGlvbjwvaDE+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgcGxheVBsdXNlID0ga2V5ZnJhbWVzYFxyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWigwKSBzY2FsZSgxKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWigwKSBzY2FsZSgxLjUpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgY29yZUZlYXR1cmU6IHtcclxuICAgIHB5OiBbMCwgbnVsbCwgbnVsbCwgMiwgbnVsbCwgN10sXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICB9LFxyXG4gIGNvbnRhaW5lckJveDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogWydmbGV4LXN0YXJ0JywgbnVsbCwgbnVsbCwgJ2NlbnRlciddLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFsnZmxleC1zdGFydCcsIG51bGwsIG51bGwsICdzcGFjZS1iZXR3ZWVuJ10sXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBbJ2NvbHVtbicsIG51bGwsIG51bGwsICdyb3cnXSxcclxuICAgIHBiOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgN10sXHJcbiAgfSxcclxuICB0aHVtYm5haWw6IHtcclxuICAgIG1yOiBbJ2F1dG8nLCBudWxsLCBudWxsLCA2LCA2MCwgODVdLFxyXG4gICAgb3JkZXI6IFsyLCBudWxsLCBudWxsLCAwXSxcclxuICAgIG1sOiBbJ2F1dG8nLCBudWxsLCBudWxsLCAwXSxcclxuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICc+IGltZyc6IHtcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIHpJbmRleDogMSxcclxuICAgICAgaGVpZ2h0OiBbMzEwLCAnYXV0byddLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNoYXBlQm94OiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIGJvdHRvbTogLTY4LFxyXG4gICAgbGVmdDogLTE2MCxcclxuICAgIHpJbmRleDogLTEsXHJcbiAgICBkaXNwbGF5OiBbJ25vbmUnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnaW5saW5lLWJsb2NrJ10sXHJcbiAgfSxcclxuICB2aWRlb0J0bjoge1xyXG4gICAgekluZGV4OiAyLFxyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBsZWZ0OiAnNTAlJyxcclxuICAgIHRvcDogJzUwJScsXHJcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gICAgd2lkdGg6IFsnNjBweCcsIG51bGwsICc4MHB4JywgbnVsbCwgJzEwMHB4J10sXHJcbiAgICBoZWlnaHQ6IFsnNjBweCcsIG51bGwsICc4MHB4JywgbnVsbCwgJzEwMHB4J10sXHJcbiAgICBwOiAnMHB4ICFpbXBvcnRhbnQnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgJyY6OmJlZm9yZSc6IHtcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcclxuICAgICAgbGVmdDogJzUwJScsXHJcbiAgICAgIHRvcDogJzUwJScsXHJcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKScsXHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgIHdpZHRoOiBbJzYwcHgnLCBudWxsLCAnODBweCcsIG51bGwsICcxMDBweCddLFxyXG4gICAgICBoZWlnaHQ6IFsnNjBweCcsIG51bGwsICc4MHB4JywgbnVsbCwgJzEwMHB4J10sXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gICAgICBhbmltYXRpb246IGAke3BsYXlQbHVzZX0gMS41cyBlYXNlLW91dCBpbmZpbml0ZWAsXHJcbiAgICAgIG9wYWNpdHk6IDAuNSxcclxuICAgIH0sXHJcbiAgICAnPiBzcGFuJzoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNSknLFxyXG4gICAgICB3aWR0aDogJ2luaGVyaXQnLFxyXG4gICAgICBoZWlnaHQ6ICdpbmhlcml0JyxcclxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC41cycsXHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIHpJbmRleDogMixcclxuICAgIH0sXHJcbiAgICBzdmc6IHtcclxuICAgICAgZm9udFNpemU6IFs0MCwgbnVsbCwgNDgsIG51bGwsIDYyXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjb250ZW50Qm94OiB7XHJcbiAgICB3aWR0aDogWycxMDAlJywgbnVsbCwgbnVsbCwgMzE1LCAzOTAsIDQ1MCwgbnVsbCwgNTAwXSxcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICBtYjogWzcsIG51bGwsIDYwLCAwXSxcclxuICAgIHRleHRBbGlnbjogWydjZW50ZXInLCBudWxsLCBudWxsLCAnbGVmdCddLFxyXG4gIH0sXHJcbiAgZ3JpZDoge1xyXG4gICAgcHI6IFsyLCAwLCBudWxsLCBudWxsLCA2LCAnNzBweCddLFxyXG4gICAgcGw6IFsyLCAwXSxcclxuICAgIHB0OiBbMiwgbnVsbCwgbnVsbCwgbnVsbCwgM10sXHJcbiAgICBteDogJ2F1dG8nLFxyXG4gICAgd2lkdGg6IFsnMTAwJScsIDM3MCwgNDIwLCAnMTAwJSddLFxyXG4gICAgZ3JpZEdhcDogWyczNXB4IDAnLCBudWxsLCBudWxsLCBudWxsLCAnNTBweCAwJ10sXHJcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbJ3JlcGVhdCgxLDFmciknXSxcclxuICB9LFxyXG4gIGNhcmQ6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcclxuICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcycsXHJcbiAgfSxcclxuXHJcbiAgaWNvbjoge1xyXG4gICAgd2lkdGg6IFsnNDVweCcsIG51bGwsIG51bGwsIG51bGwsICc1NXB4J10sXHJcbiAgICBoZWlnaHQ6ICdhdXRvJyxcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICBtcjogWzMsIG51bGwsIG51bGwsIG51bGwsIDRdLFxyXG4gIH0sXHJcbiAgd3JhcHBlcjoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXHJcbiAgICBtdDogJy01cHgnLFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IDMsXHJcbiAgICAgIGNvbG9yOiAnaGVhZGluZ19zZWNvbmRhcnknLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjQsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgICAgbWI6IFsyLCBudWxsLCAzLCAyLCAzXSxcclxuICAgIH0sXHJcblxyXG4gICAgc3ViVGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAnMTRweCcsIDFdLFxyXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuOSxcclxuICAgIH0sXHJcbiAgfSxcclxuICB2aWRlb1dyYXBwZXI6IHtcclxuICAgIG1heFdpZHRoOiAnMTAwJScsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIHdpZHRoOiAnOTAwcHgnLFxyXG4gICAgJyY6YmVmb3JlJzoge1xyXG4gICAgICBjb250ZW50OiAnXCJcIicsXHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgIHBhZGRpbmdUb3A6ICc1Ni4yNSUnLFxyXG4gICAgfSxcclxuICAgIGlmcmFtZToge1xyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgbGVmdDogMCxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyJztcclxuaW1wb3J0IFRlYW1DYXJkIGZyb20gJ2NvbXBvbmVudHMvdGVhbS1jYXJkJztcclxuaW1wb3J0IHsgRmFGYWNlYm9va0YsIEZhVHdpdHRlciwgRmFJbnN0YWdyYW0gfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcblxyXG5pbXBvcnQgTWVtYmVyMSBmcm9tICdhc3NldHMvdGVhbS9tZW1iZXItMS5wbmcnO1xyXG5pbXBvcnQgTWVtYmVyMiBmcm9tICdhc3NldHMvdGVhbS9tZW1iZXItMi5wbmcnO1xyXG5pbXBvcnQgTWVtYmVyMyBmcm9tICdhc3NldHMvdGVhbS9tZW1iZXItMy5wbmcnO1xyXG5pbXBvcnQgTWVtYmVyNCBmcm9tICdhc3NldHMvdGVhbS9tZW1iZXItNC5wbmcnO1xyXG5pbXBvcnQgTWVtYmVyNSBmcm9tICdhc3NldHMvdGVhbS9tZW1iZXItNS5wbmcnO1xyXG5pbXBvcnQgTWVtYmVyNiBmcm9tICdhc3NldHMvdGVhbS9tZW1iZXItNi5wbmcnO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIGltZ1NyYzogTWVtYmVyMSxcclxuICAgIGFsdFRleHQ6ICdTYWltb24gSGFybWVyJyxcclxuICAgIHRpdGxlOiAnU2FpbW9uIEhhcm1lcicsXHJcbiAgICBkZXNpZ25hdGlvbjogJ0NFTyBhbmQgRm91bmRlcicsXHJcbiAgICBzb2NpYWxQcm9maWxlOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBuYW1lOiAnZmFjZWJvb2snLFxyXG4gICAgICAgIHBhdGg6ICcjJyxcclxuICAgICAgICBpY29uOiA8RmFGYWNlYm9va0YgLz4sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMixcclxuICAgICAgICBuYW1lOiAndHdpdHRlcicsXHJcbiAgICAgICAgcGF0aDogJyMnLFxyXG4gICAgICAgIGljb246IDxGYVR3aXR0ZXIgLz4sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMyxcclxuICAgICAgICBuYW1lOiAnaW5zdGFncmFtJyxcclxuICAgICAgICBwYXRoOiAnIycsXHJcbiAgICAgICAgaWNvbjogPEZhSW5zdGFncmFtIC8+LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgaW1nU3JjOiBNZW1iZXIyLFxyXG4gICAgYWx0VGV4dDogJ0Fhcm9uIE51bmV6JyxcclxuICAgIHRpdGxlOiAnQWFyb24gTnVuZXonLFxyXG4gICAgZGVzaWduYXRpb246ICdGb3VuZGVyJyxcclxuICAgIHNvY2lhbFByb2ZpbGU6IFtcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5hbWU6ICdmYWNlYm9vaycsXHJcbiAgICAgICAgcGF0aDogJyMnLFxyXG4gICAgICAgIGljb246IDxGYUZhY2Vib29rRiAvPixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAyLFxyXG4gICAgICAgIG5hbWU6ICd0d2l0dGVyJyxcclxuICAgICAgICBwYXRoOiAnIycsXHJcbiAgICAgICAgaWNvbjogPEZhVHdpdHRlciAvPixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAzLFxyXG4gICAgICAgIG5hbWU6ICdpbnN0YWdyYW0nLFxyXG4gICAgICAgIHBhdGg6ICcjJyxcclxuICAgICAgICBpY29uOiA8RmFJbnN0YWdyYW0gLz4sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBpbWdTcmM6IE1lbWJlcjMsXHJcbiAgICBhbHRUZXh0OiAnQWFyb24gTnVuZXonLFxyXG4gICAgdGl0bGU6ICdBYXJvbiBOdW5leicsXHJcbiAgICBkZXNpZ25hdGlvbjogJ1dlYiBEZXNpZ25lcicsXHJcbiAgICBzb2NpYWxQcm9maWxlOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBuYW1lOiAnZmFjZWJvb2snLFxyXG4gICAgICAgIHBhdGg6ICcjJyxcclxuICAgICAgICBpY29uOiA8RmFGYWNlYm9va0YgLz4sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMixcclxuICAgICAgICBuYW1lOiAndHdpdHRlcicsXHJcbiAgICAgICAgcGF0aDogJyMnLFxyXG4gICAgICAgIGljb246IDxGYVR3aXR0ZXIgLz4sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMyxcclxuICAgICAgICBuYW1lOiAnaW5zdGFncmFtJyxcclxuICAgICAgICBwYXRoOiAnIycsXHJcbiAgICAgICAgaWNvbjogPEZhSW5zdGFncmFtIC8+LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0LFxyXG4gICAgaW1nU3JjOiBNZW1iZXI0LFxyXG4gICAgYWx0VGV4dDogJ0xpbmEgSnV0aWxhJyxcclxuICAgIHRpdGxlOiAnTGluYSBKdXRpbGEnLFxyXG4gICAgZGVzaWduYXRpb246ICdXZWIgRGV2ZWxvcGVyJyxcclxuICAgIHNvY2lhbFByb2ZpbGU6IFtcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5hbWU6ICdmYWNlYm9vaycsXHJcbiAgICAgICAgcGF0aDogJyMnLFxyXG4gICAgICAgIGljb246IDxGYUZhY2Vib29rRiAvPixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAyLFxyXG4gICAgICAgIG5hbWU6ICd0d2l0dGVyJyxcclxuICAgICAgICBwYXRoOiAnIycsXHJcbiAgICAgICAgaWNvbjogPEZhVHdpdHRlciAvPixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAzLFxyXG4gICAgICAgIG5hbWU6ICdpbnN0YWdyYW0nLFxyXG4gICAgICAgIHBhdGg6ICcjJyxcclxuICAgICAgICBpY29uOiA8RmFJbnN0YWdyYW0gLz4sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDUsXHJcbiAgICBpbWdTcmM6IE1lbWJlcjUsXHJcbiAgICBhbHRUZXh0OiAnU2FpbW9uIEhhcm1lcicsXHJcbiAgICB0aXRsZTogJ1NhaW1vbiBIYXJtZXInLFxyXG4gICAgZGVzaWduYXRpb246ICdDRU8gYW5kIEZvdW5kZXInLFxyXG4gICAgc29jaWFsUHJvZmlsZTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmFtZTogJ2ZhY2Vib29rJyxcclxuICAgICAgICBwYXRoOiAnIycsXHJcbiAgICAgICAgaWNvbjogPEZhRmFjZWJvb2tGIC8+LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgbmFtZTogJ3R3aXR0ZXInLFxyXG4gICAgICAgIHBhdGg6ICcjJyxcclxuICAgICAgICBpY29uOiA8RmFUd2l0dGVyIC8+LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgbmFtZTogJ2luc3RhZ3JhbScsXHJcbiAgICAgICAgcGF0aDogJyMnLFxyXG4gICAgICAgIGljb246IDxGYUluc3RhZ3JhbSAvPixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNixcclxuICAgIGltZ1NyYzogTWVtYmVyNixcclxuICAgIGFsdFRleHQ6ICdBYXJvbiBOdW5leicsXHJcbiAgICB0aXRsZTogJ0Fhcm9uIE51bmV6JyxcclxuICAgIGRlc2lnbmF0aW9uOiAnV2ViIERlc2lnbmVyJyxcclxuICAgIHNvY2lhbFByb2ZpbGU6IFtcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5hbWU6ICdmYWNlYm9vaycsXHJcbiAgICAgICAgcGF0aDogJyMnLFxyXG4gICAgICAgIGljb246IDxGYUZhY2Vib29rRiAvPixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAyLFxyXG4gICAgICAgIG5hbWU6ICd0d2l0dGVyJyxcclxuICAgICAgICBwYXRoOiAnIycsXHJcbiAgICAgICAgaWNvbjogPEZhVHdpdHRlciAvPixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAzLFxyXG4gICAgICAgIG5hbWU6ICdpbnN0YWdyYW0nLFxyXG4gICAgICAgIHBhdGg6ICcjJyxcclxuICAgICAgICBpY29uOiA8RmFJbnN0YWdyYW0gLz4sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZWFtU2VjdGlvbigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGgxPlRlYW0gU2VjdGlvbjwvaDE+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGdyaWQ6IHtcclxuICAgIG10OiBbMCwgbnVsbCwgLTYsIG51bGwsIC00XSxcclxuICAgIGdyaWRHYXA6IFsnMzVweCAwcHgnLCBudWxsLCAwLCBudWxsLCBudWxsLCAnMzBweCAzNXB4J10sXHJcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXHJcbiAgICAgICdyZXBlYXQoMiwxZnIpJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJ3JlcGVhdCgyLDFmciknLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAncmVwZWF0KDMsMWZyKScsXHJcbiAgICBdLFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIENvbnRhaW5lciwgSGVhZGluZywgVGV4dCwgQm94LCBJbWFnZSB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSAnY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlcic7XHJcbmltcG9ydCBSYXRpbmcgZnJvbSAnY29tcG9uZW50cy9yYXRpbmcnO1xyXG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSAnY29tcG9uZW50cy9idXR0b24tZ3JvdXAnO1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtbXVsdGktY2Fyb3VzZWwnO1xyXG5cclxuaW1wb3J0IEF2YXRhcjEgZnJvbSAnYXNzZXRzL3Rlc3RpbW9uaWFsL2F2YXRhcjEucG5nJztcclxuaW1wb3J0IEF2YXRhcjIgZnJvbSAnYXNzZXRzL3Rlc3RpbW9uaWFsL2F2YXRhcjIucG5nJztcclxuaW1wb3J0IEF2YXRhcjMgZnJvbSAnYXNzZXRzL3Rlc3RpbW9uaWFsL2F2YXRhcjMucG5nJztcclxuaW1wb3J0IEF2YXRhcjQgZnJvbSAnYXNzZXRzL3Rlc3RpbW9uaWFsL2F2YXRhcjQucG5nJztcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICB0aXRsZTogJ01vZGVybiBsb29rICYgdHJlbmRpbmcgZGVzaWduJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnR2V0IHdvcmtpbmcgZXhwZXJpZW5jZSB0byB3b3JrIHdpdGggdGhpcyBhbWF6aW5nIHRlYW0gJiBpbiBmdXR1cmUgd2FudCB0byB3b3JrIHRvZ2V0aGVyIGZvciBicmlnaHQgZnV0dXJlIHByb2plY3RzIGFuZCBhbHNvIG1ha2UgZGVwb3NpdCB0byBmcmVlbGFuY2VyLicsXHJcbiAgICBhdmF0YXI6IEF2YXRhcjEsXHJcbiAgICBuYW1lOiAnRGVubnkgSGlsZ3VzdG9uJyxcclxuICAgIGRlc2lnbmF0aW9uOiAnQGRlbm55LmhpbCcsXHJcbiAgICByZXZpZXc6IDQsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIHRpdGxlOiAnRGVzaWduIFF1YWxpdHkgJiBwZXJmb3JtYW5jZScsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ0dldCB3b3JraW5nIGV4cGVyaWVuY2UgdG8gd29yayB3aXRoIHRoaXMgYW1hemluZyB0ZWFtICYgaW4gZnV0dXJlIHdhbnQgdG8gd29yayB0b2dldGhlciBmb3IgYnJpZ2h0IGZ1dHVyZSBwcm9qZWN0cyBhbmQgYWxzbyBtYWtlIGRlcG9zaXQgdG8gZnJlZWxhbmNlci4nLFxyXG4gICAgYXZhdGFyOiBBdmF0YXIyLFxyXG4gICAgbmFtZTogJ0Rlbm55IEhpbGd1c3RvbicsXHJcbiAgICBkZXNpZ25hdGlvbjogJ0BkZW5ueS5oaWwnLFxyXG4gICAgcmV2aWV3OiA1LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICB0aXRsZTogJ0xheW91dCBhbmQgb3JnYW5pemVkIGxheWVycycsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ0dldCB3b3JraW5nIGV4cGVyaWVuY2UgdG8gd29yayB3aXRoIHRoaXMgYW1hemluZyB0ZWFtICYgaW4gZnV0dXJlIHdhbnQgdG8gd29yayB0b2dldGhlciBmb3IgYnJpZ2h0IGZ1dHVyZSBwcm9qZWN0cyBhbmQgYWxzbyBtYWtlIGRlcG9zaXQgdG8gZnJlZWxhbmNlci4nLFxyXG4gICAgYXZhdGFyOiBBdmF0YXIzLFxyXG4gICAgbmFtZTogJ0Rlbm55IEhpbGd1c3RvbicsXHJcbiAgICBkZXNpZ25hdGlvbjogJ0BkZW5ueS5oaWwnLFxyXG4gICAgcmV2aWV3OiA1LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICB0aXRsZTogJ01vZGVybiBsb29rICYgdHJlbmRpbmcgZGVzaWduJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnR2V0IHdvcmtpbmcgZXhwZXJpZW5jZSB0byB3b3JrIHdpdGggdGhpcyBhbWF6aW5nIHRlYW0gJiBpbiBmdXR1cmUgd2FudCB0byB3b3JrIHRvZ2V0aGVyIGZvciBicmlnaHQgZnV0dXJlIHByb2plY3RzIGFuZCBhbHNvIG1ha2UgZGVwb3NpdCB0byBmcmVlbGFuY2VyLicsXHJcbiAgICBhdmF0YXI6IEF2YXRhcjQsXHJcbiAgICBuYW1lOiAnRGVubnkgSGlsZ3VzdG9uJyxcclxuICAgIGRlc2lnbmF0aW9uOiAnQGRlbm55LmhpbCcsXHJcbiAgICByZXZpZXc6IDQsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IHJlc3BvbnNpdmUgPSB7XHJcbiAgZGVza3RvcDoge1xyXG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDMwMDAsIG1pbjogMTYxOSB9LFxyXG4gICAgaXRlbXM6IDQsXHJcbiAgICBzbGlkZXNUb1NsaWRlOiA0LCAvLyBvcHRpb25hbCwgZGVmYXVsdCB0byAxLlxyXG4gIH0sXHJcbiAgbGFwdG9wOiB7XHJcbiAgICBicmVha3BvaW50OiB7IG1heDogMTYxOSwgbWluOiAxMDI0IH0sXHJcbiAgICBpdGVtczogMyxcclxuICAgIHNsaWRlc1RvU2xpZGU6IDMsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXHJcbiAgfSxcclxuICB0YWJsZXQ6IHtcclxuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAxMDI0LCBtaW46IDY0MCB9LFxyXG4gICAgaXRlbXM6IDIsXHJcbiAgICBzbGlkZXNUb1NsaWRlOiAyLCAvLyBvcHRpb25hbCwgZGVmYXVsdCB0byAxLlxyXG4gIH0sXHJcbiAgbW9iaWxlOiB7XHJcbiAgICBicmVha3BvaW50OiB7IG1heDogNjM5LCBtaW46IDAgfSxcclxuICAgIGl0ZW1zOiAxLFxyXG4gICAgc2xpZGVzVG9TbGlkZTogMSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgY2Fyb3VzZWxQYXJhbXMgPSB7XHJcbiAgYWRkaXRpb25hbFRyYW5zZnJvbTowLFxyXG4gIGFycm93czpmYWxzZSxcclxuICBhdXRvUGxheVNwZWVkOjMwMDAsXHJcbiAgY2VudGVyTW9kZTpmYWxzZSxcclxuICBjbGFzc05hbWU6XCJcIixcclxuICBjb250YWluZXJDbGFzczpcImNhcm91c2VsLWNvbnRhaW5lclwiLFxyXG4gIGN1c3RvbUJ1dHRvbkdyb3VwOjxCdXR0b25Hcm91cCAvPixcclxuICBkb3RMaXN0Q2xhc3M6XCJcIixcclxuICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgZm9jdXNPblNlbGVjdDpmYWxzZSxcclxuICBpbmZpbml0ZTp0cnVlLFxyXG4gIGl0ZW1DbGFzczpcIlwiLFxyXG4gIGtleUJvYXJkQ29udHJvbDogdHJ1ZSxcclxuICBtaW5pbXVtVG91Y2hEcmFnOjgwLFxyXG4gIHJlbmRlckJ1dHRvbkdyb3VwT3V0c2lkZTogdHJ1ZSxcclxuICByZW5kZXJEb3RzT3V0c2lkZTpmYWxzZSxcclxuICByZXNwb25zaXZlOnJlc3BvbnNpdmUsXHJcbiAgc2hvd0RvdHM6ZmFsc2UsXHJcbiAgc2xpZGVyQ2xhc3M6XCJcIixcclxuICBzbGlkZXNUb1NsaWRlOjEsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlc3RpbW9uaWFsQ2FyZCgpIHtcclxuICByZXR1cm4gKFxyXG4gICA8aDE+VGVzdGltb25pYWwgQ2FyZDwvaDE+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGNhcm91c2VsV3JhcHBlcjoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGFsaWduSXRlbXM6ICdmbGV4LWVuZCcsXHJcbiAgICBtdDogJy0zMHB4JyxcclxuICAgIHB4OiAnMTVweCcsXHJcbiAgICAnLmNhcm91c2VsLWNvbnRhaW5lcic6IHtcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgbWF4V2lkdGg6IFtcclxuICAgICAgICAnMTAwJScsXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgICc3NTBweCcsXHJcbiAgICAgICAgJzEwMDBweCcsXHJcbiAgICAgICAgJzExODBweCcsXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICAnY2FsYyg1MCUgKyA4NjVweCknLFxyXG4gICAgICBdLFxyXG4gICAgICBtcjogWydhdXRvJywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJy0yMjBweCddLFxyXG4gICAgICBtbDogJ2F1dG8nLFxyXG4gICAgICAnLnJlYWN0LW11bHRpLWNhcm91c2VsLWl0ZW0nOiB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cycsXHJcbiAgICAgIH0sXHJcbiAgICAgICcucmVhY3QtbXVsdGktY2Fyb3VzZWwtaXRlbS0tYWN0aXZlOm50aC1vZi10eXBlKDRuKSc6IHtcclxuICAgICAgICBvcGFjaXR5OiAnMC41JyxcclxuICAgICAgICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYyMHB4KSc6IHtcclxuICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICByZXZpZXdDYXJkOiB7XHJcbiAgICBib3hTaGFkb3c6ICcwcHggMHB4IDFweCByZ2JhKDM4LCA3OCwgMTE4LCAwLjM1KScsXHJcbiAgICB0cmFuc2l0aW9uOiAnYWxsIDAuM3MnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnNnB4JyxcclxuICAgIHA6IFtcclxuICAgICAgJzMwcHggMjBweCAzNXB4JyxcclxuICAgICAgJzMwcHggMjVweCAzNXB4JyxcclxuICAgICAgJzMwcHggMjBweCAzNXB4JyxcclxuICAgICAgJzM1cHggMzBweCA0MHB4IDQwcHgnLFxyXG4gICAgICAnMzBweCAzMHB4IDM1cHgnLFxyXG4gICAgICAnMzVweCAzMHB4IDQwcHggNDBweCcsXHJcbiAgICBdLFxyXG4gICAgYmc6ICd3aGl0ZScsXHJcbiAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcclxuICAgIG06IFtcclxuICAgICAgJzI4cHggNXB4IDMwcHggNXB4JyxcclxuICAgICAgJzI4cHggMjBweCAzMHB4IDIwcHgnLFxyXG4gICAgICAnMjhweCAxNXB4IDMwcHggMTVweCcsXHJcbiAgICAgICcyOHB4IDE1cHggMzBweCAxNXB4JyxcclxuICAgICAgJzMwcHggMjBweCA0MHB4JyxcclxuICAgIF0sXHJcbiAgICAnJjpob3Zlcic6IHtcclxuICAgICAgYm94U2hhZG93OiAnMHB4IDZweCAzMHB4IHJnYmEoMzgsIDc4LCAxMTgsIDAuMSknLFxyXG4gICAgfSxcclxuICAgICcucmF0aW5nJzoge1xyXG4gICAgICBtYjogWzEsIG51bGwsIG51bGwsIDJdLFxyXG4gICAgICB1bDoge1xyXG4gICAgICAgIHBsOiAwLFxyXG4gICAgICAgIGxpc3RTdHlsZTogJ25vbmUnLFxyXG4gICAgICAgIG1iOiAwLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgfSxcclxuICAgICAgc3ZnOiB7XHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICcycHgnLFxyXG4gICAgICAgICcmOmxhc3Qtb2YtdHlwZSc6IHtcclxuICAgICAgICAgIG1hcmdpblJpZ2h0OiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgICcuc3Rhcic6IHtcclxuICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgICAgIG1yOiAnMXB4JyxcclxuICAgICAgfSxcclxuICAgICAgJy5zdGFyLW8nOiB7XHJcbiAgICAgICAgY29sb3I6ICcjZGRkJyxcclxuICAgICAgICBtcjogJzFweCcsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgJy5jYXJkLWZvb3Rlcic6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgbWFyZ2luVG9wOiBbNSwgbnVsbCwgbnVsbCwgJzMzcHgnXSxcclxuICAgICAgJy5pbWFnZSc6IHtcclxuICAgICAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgICAgIG1yOiBbMywgbnVsbCwgbnVsbCwgNF0sXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGltZzoge1xyXG4gICAgICAgICAgd2lkdGg6ICc1NXB4JyxcclxuICAgICAgICAgIGhlaWdodDogJzU1cHgnLFxyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICAgICAgICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBmb250U2l6ZTogWzEsIDJdLFxyXG4gICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgbWI6IFszLCBudWxsLCBudWxsLCAnMjJweCddLFxyXG4gICAgY29sb3I6ICd0ZXh0JyxcclxuICAgIGxpbmVIZWlnaHQ6IDEuNixcclxuICB9LFxyXG4gIGRlc2NyaXB0aW9uOiB7XHJcbiAgICBmb250U2l6ZTogWzEsIG51bGwsIG51bGwsIDJdLFxyXG4gICAgZm9udFdlaWdodDogJ25vcm1hbCcsXHJcbiAgICBjb2xvcjogJ3RleHQnLFxyXG4gICAgbGluZUhlaWdodDogWzEuODUsIG51bGwsIDJdLFxyXG4gIH0sXHJcbiAgaGVhZGluZzoge1xyXG4gICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAyXSxcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgIG1iOiAnM3B4JyxcclxuICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICBsaW5lSGVpZ2h0OiAxLjMsXHJcbiAgfSxcclxuICBkZXNpZ25hdGlvbjoge1xyXG4gICAgY29sb3I6ICdwcmltYXJ5JyxcclxuICAgIGZvbnRXZWlnaHQ6ICc1MDAnLFxyXG4gICAgZm9udFNpemU6IDEsXHJcbiAgICBsaW5lSGVpZ2h0OiAxLjQsXHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkLCBCb3gsIEhlYWRpbmcsIFRleHQgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXInO1xyXG5cclxuaW1wb3J0IFBhdHRlcm5CRyBmcm9tICdhc3NldHMvcGF0dGVybkJHLnBuZyc7XHJcbmltcG9ydCBBcnJvd09kZCBmcm9tICdhc3NldHMvYXJyb3dPZGQuc3ZnJztcclxuaW1wb3J0IEFycm93RXZlbiBmcm9tICdhc3NldHMvYXJyb3dFdmVuLnN2Zyc7XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgdGl0bGU6ICdTZXQgZGlzYnVyc2VtZW50IEluc3RydWN0aW9ucycsXHJcbiAgICB0ZXh0OlxyXG4gICAgICAnR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IGhvbWUgY29sbGVjdCBhIHNhbXBsZSBmcm9tIHRoZSB5b3VyIGJsb29kIHRlc3RzLicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIHRpdGxlOiAnQXNzZW1ibHkgcmV0cmlldmVzIGZ1bmRzIGZyb20geW91ciBhY2NvdW50JyxcclxuICAgIHRleHQ6XHJcbiAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb20gdGhlIHlvdXIgYmxvb2QgdGVzdHMuJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgdGl0bGU6ICdBc3NlbWJseSBpbml0aWF0ZXMgZGlzYnVyc2VtZW50JyxcclxuICAgIHRleHQ6XHJcbiAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb20gdGhlIHlvdXIgYmxvb2QgdGVzdHMuJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0LFxyXG4gICAgdGl0bGU6ICdDdXN0b21lciByZWNlaXZlcyBmdW5kcyBwYXltZW50JyxcclxuICAgIHRleHQ6XHJcbiAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb20gdGhlIHlvdXIgYmxvb2QgdGVzdHMuJyxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV29ya0Zsb3coKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxoMT5Xb3JrZmxvdzwvaDE+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHdvcmtmbG93OiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdwcmltYXJ5JyxcclxuICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke1BhdHRlcm5CR30pYCxcclxuICAgIGJhY2tncm91bmRSZXBlYXQ6IGBuby1yZXBlYXRgLFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyIGNlbnRlcicsXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgcHk6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMF0sXHJcbiAgfSxcclxuICBncmlkOiB7XHJcbiAgICBtYjogLTEsXHJcbiAgICBwdDogMCxcclxuICAgIGdyaWRHYXA6IFtcclxuICAgICAgJzM1cHggMCcsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICc0NXB4IDMwcHgnLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnNTBweCAyNXB4JyxcclxuICAgICAgbnVsbCxcclxuICAgICAgbnVsbCxcclxuICAgICAgJzUwcHggNjVweCcsXHJcbiAgICBdLFxyXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1xyXG4gICAgICAncmVwZWF0KDEsMWZyKScsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICdyZXBlYXQoMiwxZnIpJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJ3JlcGVhdCg0LDFmciknLFxyXG4gICAgXSxcclxuICB9LFxyXG4gIGNhcmQ6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgbnVsbCwgJ2xlZnQnXSxcclxuICAgIHdpZHRoOiBbJzEwMCUnLCAnODAlJywgJzEwMCUnXSxcclxuICAgIG14OiBbJ2F1dG8nXSxcclxuICAgIHB4OiBbNCwgbnVsbCwgbnVsbCwgMF0sXHJcbiAgICAnJjo6YmVmb3JlJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgY29udGVudDogJ1wiXCInLFxyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGxlZnQ6IFswLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA3MiwgbnVsbCwgOTBdLFxyXG4gICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBgbm8tcmVwZWF0YCxcclxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyIGNlbnRlcicsXHJcbiAgICAgIHdpZHRoOiAyMTUsXHJcbiAgICAgIGhlaWdodDogNjAsXHJcbiAgICAgICdAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyMjBweCknOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ25vbmUnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgICcmOm50aC1vZi10eXBlKDJuLTEpOjpiZWZvcmUnOiB7XHJcbiAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke0Fycm93T2RkfSlgLFxyXG4gICAgfSxcclxuICAgICcmOm50aC1vZi10eXBlKDJuKTo6YmVmb3JlJzoge1xyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtBcnJvd0V2ZW59KWAsXHJcbiAgICAgIHRvcDogMTcsXHJcbiAgICB9LFxyXG4gICAgJyY6bGFzdC1jaGlsZDo6YmVmb3JlJzoge1xyXG4gICAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIGljb25Cb3g6IHtcclxuICAgIHdpZHRoOiBbJzUwcHgnLCBudWxsLCAnNjBweCcsIG51bGwsIG51bGwsICc3MHB4J10sXHJcbiAgICBoZWlnaHQ6IFsnNTBweCcsIG51bGwsICc2MHB4JywgbnVsbCwgbnVsbCwgJzcwcHgnXSxcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICBib3JkZXJSYWRpdXM6IFsxNSwgbnVsbCwgMjMsIG51bGwsIG51bGwsIDMwXSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgbWI6IFs1LCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA2XSxcclxuICAgIG14OiBbJ2F1dG8nLCBudWxsLCAwXSxcclxuICAgIGZvbnRTaXplOiBbNiwgbnVsbCwgNywgbnVsbCwgbnVsbCwgJzMwcHgnXSxcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIGNvbG9yOiAnIzIzNDU4MicsXHJcbiAgfSxcclxuICB3cmFwcGVyOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBtdDogJy01cHgnLFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IFszLCBudWxsLCA0LCBudWxsLCBudWxsLCA1XSxcclxuICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjQsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDEuNTVdLFxyXG4gICAgICBwcjogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDJdLFxyXG4gICAgICBtYjogWzIsIDNdLFxyXG4gICAgfSxcclxuXHJcbiAgICBzdWJUaXRsZToge1xyXG4gICAgICBmb250U2l6ZTogMSxcclxuICAgICAgZm9udFdlaWdodDogNDAwLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBbMS44NSwgbnVsbCwgbnVsbCwgMS45LCAyXSxcclxuICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIG9wYWNpdHk6IDAuNzUsXHJcbiAgICAgIHByOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNV0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICAvLyBleGFtcGxlIGNvbG9ycyB3aXRoIGRhcmsgbW9kZVxyXG4gIGNvbG9yczoge1xyXG4gICAgdGV4dDogJyMzNDNENDgnLCAvLyBib2R5IGNvbG9yIGFuZCBwcmltYXJ5IGNvbG9yXHJcbiAgICB0ZXh0X3NlY29uZGFyeTogJyMwMjA3M0UnLCAvLyBzZWNvbmRhcnkgYm9keSBjb2xvclxyXG4gICAgaGVhZGluZzogJyMwRjIxMzcnLCAvLyBwcmltYXJ5IGhlYWRpbmcgY29sb3JcclxuICAgIGhlYWRpbmdfc2Vjb25kYXJ5OiAnIzBGMjEzNycsIC8vIGhlYWRpbmcgY29sb3JcclxuICAgIGJhY2tncm91bmQ6ICcjRkZGRkZGJywgLy8gYm9keSBiYWNrZ3JvdW5kIGNvbG9yXHJcbiAgICBiYWNrZ3JvdW5kX3NlY29uZGFyeTogJyNGOUZCRkQnLCAvLyBzZWNvbmRhcnkgYmFja2dyb3VuZCBjb2xvclxyXG4gICAgYm9yZGVyX2NvbG9yOiAnI0U1RUNGNCcsIC8vIGJvcmRlciBjb2xvclxyXG4gICAgeWVsbG93OiAnI0ZGQTc0MCcsIC8vIGJvcmRlciBjb2xvclxyXG4gICAgcHJpbWFyeTogJyNFQTNBNjAnLCAvLyBwcmltYXJ5IGJ1dHRvbiBhbmQgbGluayBjb2xvclxyXG4gICAgc2Vjb25kYXJ5OiAnIzI1NjNGRicsIC8vIHNlY29uZGFyeSBjb2xvciAtIGNhbiBiZSB1c2VkIGZvciBob3ZlciBzdGF0ZXNcclxuICAgIG11dGVkOiAnI0U0RTRFNCcsIC8vIG11dGVkIGNvbG9yXHJcbiAgICBhY2NlbnQ6ICcjNjA5JywgLy8gYSBjb250cmFzdCBjb2xvciBmb3IgZW1waGFzaXppbmcgVUlcclxuXHJcbiAgICAvLyBoaWdobGlnaHRcdGEgYmFja2dyb3VuZCBjb2xvciBmb3IgaGlnaGxpZ2h0aW5nIHRleHRcclxuICAgIG1vZGVzOiB7XHJcbiAgICAgIGRhcms6IHtcclxuICAgICAgICB0ZXh0OiAnI2ZmZicsXHJcbiAgICAgICAgYmFja2dyb3VuZDogJyMwMDAnLFxyXG4gICAgICAgIHByaW1hcnk6ICcjMGNmJyxcclxuICAgICAgICBzZWNvbmRhcnk6ICcjMDljJyxcclxuICAgICAgICBtdXRlZDogJyMxMTEnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGJyZWFrcG9pbnRzOiBbXHJcbiAgICAnNDgwcHgnLFxyXG4gICAgJzY0MHB4JyxcclxuICAgICc3NjhweCcsXHJcbiAgICAnMTAyNHB4JyxcclxuICAgICcxMjIwcHgnLFxyXG4gICAgJzEzNjZweCcsXHJcbiAgICAnMTYyMHB4JyxcclxuICBdLFxyXG4gIGZvbnRzOiB7XHJcbiAgICBib2R5OiBcIidETSBTYW5zJywgc2Fucy1zZXJpZlwiLFxyXG4gICAgaGVhZGluZzogXCInRE0gU2FucycsIHNhbnMtc2VyaWZcIixcclxuICB9LFxyXG4gIGZvbnRTaXplczogWzEyLCAxNSwgMTYsIDE4LCAyMCwgMjIsIDI0LCAyOCwgMzIsIDM2LCA0MiwgNDgsIDUyLCA2NF0sXHJcbiAgZm9udFdlaWdodHM6IHtcclxuICAgIGJvZHk6ICdub3JtYWwnLFxyXG4gICAgaGVhZGluZzogNTAwLFxyXG4gICAgYm9sZDogNzAwLFxyXG4gIH0sXHJcbiAgbGluZUhlaWdodHM6IHtcclxuICAgIGJvZHk6IDEuOCxcclxuICAgIGhlYWRpbmc6IDEuNSxcclxuICB9LFxyXG4gIGxldHRlclNwYWNpbmdzOiB7XHJcbiAgICBib2R5OiAnbm9ybWFsJyxcclxuICAgIGNhcHM6ICcwLjJlbScsXHJcbiAgICBoZWFkaW5nOiAnLTAuNXB4JyxcclxuICB9LFxyXG4gIHNwYWNlOiBbMCwgNSwgMTAsIDE1LCAyMCwgMjUsIDMwLCA1MCwgODAsIDEwMCwgMTIwLCAxNTBdLFxyXG4gIC8vIHZhcmlhbnRzIGNhbiB1c2UgY3VzdG9tLCB1c2VyLWRlZmluZWQgbmFtZXNcclxuICBsYXlvdXQ6IHtcclxuICAgIGNvbnRhaW5lcjoge1xyXG4gICAgICBtYXhXaWR0aDogW1xyXG4gICAgICAgICcxMDAlJyxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgJzc4MHB4JyxcclxuICAgICAgICAnMTAyMHB4JyxcclxuICAgICAgICAnMTIwMHB4JyxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgICcxMzEwcHgnLFxyXG4gICAgICBdLFxyXG4gICAgICBweDogWzQsIDZdLFxyXG4gICAgfSxcclxuICAgIGhlYWRlcjoge1xyXG4gICAgICBjb2xvcjogJyMwMjA3M0UnLFxyXG4gICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgICAgcHk6IDMsXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgfSxcclxuICAgIHRvb2xiYXI6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgIH0sXHJcbiAgICBtYWluOiB7fSxcclxuICB9LFxyXG4gIHNlY3Rpb246IHtcclxuICAgIGtleUZlYXR1cmU6IHtcclxuICAgICAgcHQ6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMF0sXHJcbiAgICAgIHBiOiBbJzkwcHgnLCBudWxsLCA5LCBudWxsLCBudWxsLCAxMCwgbnVsbCwgJzE2NXB4J10sXHJcbiAgICB9LFxyXG4gICAgZmVhdHVyZToge1xyXG4gICAgICBwYjogWzgsIG51bGwsIDksIG51bGwsIG51bGwsIDEwLCBudWxsLCAnMTcwcHgnXSxcclxuICAgIH0sXHJcbiAgICBuZXdzOiB7XHJcbiAgICAgIHBiOiBbOCwgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTAsIG51bGwsICcxNzBweCddLFxyXG4gICAgfSxcclxuICAgIGNvcmVGZWF0dXJlOiB7XHJcbiAgICAgIHBiOiBbOCwgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTAsIG51bGwsICcxNzBweCddLFxyXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICB9LFxyXG4gICAgdGVzdGltb25pYWw6IHtcclxuICAgICAgcHQ6IFs4LCBudWxsLCA4LCAnNzBweCcsIG51bGwsIDgsIG51bGwsICcxNDVweCddLFxyXG4gICAgICBwYjogWyc5MHB4JywgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTAsIG51bGwsICcxOTBweCddLFxyXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICB9LFxyXG4gICAgc2VydmljZXM6IHtcclxuICAgICAgcGI6IFsnOTBweCcsIG51bGwsIDksIG51bGwsIG51bGwsIDEwLCBudWxsLCAnMTUwcHgnXSxcclxuICAgIH0sXHJcbiAgICBwcmljaW5nOiB7XHJcbiAgICAgIHB0OiBbOCwgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTAsIG51bGwsICcxODBweCddLFxyXG4gICAgICBwYjogWyc5MHB4JywgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTAsIG51bGwsICcxODBweCddLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlY3Rpb25IZWFkZXI6IHtcclxuICAgIHdpZHRoOiBbJzEwMCUnLCBudWxsLCAnNTQwcHgnXSxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBtdDogWyctM3B4JywgbnVsbCwgLTFdLFxyXG4gICAgbWFyZ2luQm90dG9tOiBbJzUwcHgnLCBudWxsLCAnNjBweCcsIG51bGwsIG51bGwsICc2NXB4JywgbnVsbCwgJzgwcHgnXSxcclxuICAgIG14OiAnYXV0bycsXHJcbiAgICB0aXRsZToge1xyXG4gICAgICBmb250U2l6ZTogWycyNHB4JywgbnVsbCwgJzI4cHgnLCBudWxsLCBudWxsLCAnMzJweCcsIG51bGwsICczNnB4J10sXHJcbiAgICAgIGNvbG9yOiAnaGVhZGluZycsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjMsIG51bGwsIG51bGwsIDEuMjVdLFxyXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICBmb250V2VpZ2h0OiAnNzAwJyxcclxuICAgICAgbGV0dGVyU3BhY2luZzogJy0uNXB4JyxcclxuICAgIH0sXHJcblxyXG4gICAgc3ViVGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IFswLCAnMTNweCcsIG51bGwsICcxNHB4J10sXHJcbiAgICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgIGxldHRlclNwYWNpbmc6IFsnMS41cHgnLCBudWxsLCAnMnB4J10sXHJcbiAgICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxyXG4gICAgICBmb250V2VpZ2h0OiAnNzAwJyxcclxuICAgICAgbWI6IDIsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNSxcclxuICAgIH0sXHJcbiAgfSxcclxuICB0ZXh0OiB7XHJcbiAgICBoZWFkaW5nOiB7XHJcbiAgICAgIGZvbnRGYW1pbHk6ICdoZWFkaW5nJyxcclxuICAgICAgbGluZUhlaWdodDogJ2hlYWRpbmcnLFxyXG4gICAgICBmb250V2VpZ2h0OiAnaGVhZGluZycsXHJcbiAgICAgIGZvbnRTaXplOiBbNF0sXHJcbiAgICAgIGxldHRlclNwYWNpbmc6ICctLjU1cHgnLFxyXG4gICAgICBjb2xvcjogJ2hlYWRpbmcnLFxyXG4gICAgfSxcclxuICAgIGhlcm9QcmltYXJ5OiB7XHJcbiAgICAgIGNvbG9yOiAnaGVhZGluZycsXHJcbiAgICAgIGZvbnRTaXplOiBbXHJcbiAgICAgICAgJzMycHgnLFxyXG4gICAgICAgICczNnB4JyxcclxuICAgICAgICAnNDJweCcsXHJcbiAgICAgICAgJzQwcHgnLFxyXG4gICAgICAgICc0MnB4JyxcclxuICAgICAgICAnNTJweCcsXHJcbiAgICAgICAgJzU4cHgnLFxyXG4gICAgICAgICc2NnB4JyxcclxuICAgICAgXSxcclxuICAgICAgbGluZUhlaWdodDogWzEuMywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgMS4yXSxcclxuICAgICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgICBtYjogWzQsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDVdLFxyXG4gICAgfSxcclxuICAgIGhlcm9TZWNvbmRhcnk6IHtcclxuICAgICAgZm9udFNpemU6IFsyLCBudWxsLCAnMTdweCcsIG51bGwsIG51bGwsICcxOXB4JywgNF0sXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjksIG51bGwsIG51bGwsIDJdLFxyXG4gICAgICBmb250V2VpZ2h0OiAnYm9keScsXHJcbiAgICAgIG1iOiA1LFxyXG4gICAgICBweDogWzAsIG51bGwsIDUsIDYsIG51bGwsIDgsIDldLFxyXG4gICAgICBjb2xvcjogJ2hlYWRpbmcnLFxyXG4gICAgfSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgIC8vIGV4dGVuZHMgdGhlIHRleHQuaGVhZGluZyBzdHlsZXNcclxuICAgICAgdmFyaWFudDogJ3RleHQuaGVhZGluZycsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgICAgZm9udFNpemU6IFszLCBudWxsLCA0XSxcclxuICAgICAgbGluZUhlaWdodDogMS4yNSxcclxuICAgICAgbWI6IDEsXHJcbiAgICB9LFxyXG4gICAgbGVhZDoge1xyXG4gICAgICBmb250U2l6ZTogNDAsXHJcbiAgICAgIGZvbnRGYW1pbHk6ICdETSBTYW5zJyxcclxuICAgICAgZm9udFdlaWdodDogJzUwMCcsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICc2MHB4JyxcclxuICAgICAgbGV0dGVyU3BhY2luZzogJy0xLjVweCcsXHJcbiAgICAgIGNvbG9yOiAnIzBGMjEzNycsXHJcbiAgICB9LFxyXG4gICAgbXV0ZWQ6IHtcclxuICAgICAgbGluZUhlaWdodDogJzI2cHgnLFxyXG4gICAgICBjb2xvcjogJ211dGVkJyxcclxuICAgIH0sXHJcbiAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgICBjb2xvcjogJyMwMEE5OUQnLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnNDBweCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbGlua3M6IHtcclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICB9LFxyXG4gICAgYm9sZDoge1xyXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICB9LFxyXG4gICAgbmF2OiB7XHJcbiAgICAgIGRpc3BsYXk6IFsnbm9uZScsIG51bGwsICdpbmxpbmUtYmxvY2snXSxcclxuICAgICAgcHg6IDI1LFxyXG4gICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgIH0sXHJcbiAgICBibG9nOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgIHB4OiAwLFxyXG4gICAgICBjb2xvcjogJ2luaGVyaXQnLFxyXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG4gICAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnY29sb3IgMC4yNXMnLFxyXG4gICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGZvb3Rlcjoge1xyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICBweDogMCxcclxuICAgICAgY29sb3I6ICdpbmhlcml0JyxcclxuICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcclxuICAgIH0sXHJcbiAgICBsb2dvOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBpbWFnZXM6IHtcclxuICAgIGF2YXRhcjoge1xyXG4gICAgICB3aWR0aDogNDgsXHJcbiAgICAgIGhlaWdodDogNDgsXHJcbiAgICAgIGJvcmRlclJhZGl1czogOTk5OTksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgLy8gdmFyaWFudHMgZm9yIGJ1dHRvbnNcclxuICBidXR0b25zOiB7XHJcbiAgICBtZW51OiB7XHJcbiAgICAgIGRpc3BsYXk6IFtudWxsLCBudWxsLCAnbm9uZSddLFxyXG4gICAgfSwgLy8gZGVmYXVsdCB2YXJpYW50IGZvciBNZW51QnV0dG9uXHJcbiAgICAvLyB5b3UgY2FuIHJlZmVyZW5jZSBvdGhlciB2YWx1ZXMgZGVmaW5lZCBpbiB0aGUgdGhlbWVcclxuICAgIGRlZmF1bHRCdG46IHtcclxuICAgICAgYm9yZGVyUmFkaXVzOiAnNDVweCcsXHJcbiAgICAgIGZvbnRTaXplOiBbJzE0cHgnLCBudWxsLCBudWxsLCAyXSxcclxuICAgICAgbGV0dGVyU3BhY2luZ3M6ICctMC4xNXB4JyxcclxuICAgICAgcGFkZGluZzogWycxMnB4IDIwcHgnLCBudWxsLCAnMTVweCAzMHB4J10sXHJcbiAgICAgIGZvbnRGYW1pbHk6ICdib2R5JyxcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMixcclxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cycsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgICAgJyY6Zm9jdXMnOiB7XHJcbiAgICAgICAgb3V0bGluZTogMCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBwcmltYXJ5OiB7XHJcbiAgICAgIHZhcmlhbnQ6ICdidXR0b25zLmRlZmF1bHRCdG4nLFxyXG4gICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgYmc6ICdwcmltYXJ5JyxcclxuICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgYm94U2hhZG93OiAncmdiYSgyMzMsIDc2LCA4NCwgMC41NykgMHB4IDlweCAyMHB4IC01cHgnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHdoaXRlQnV0dG9uOiB7XHJcbiAgICAgIHZhcmlhbnQ6ICdidXR0b25zLmRlZmF1bHRCdG4nLFxyXG4gICAgICBjb2xvcjogJ2hlYWRpbmdfc2Vjb25kYXJ5JyxcclxuICAgICAgYmc6ICd3aGl0ZScsXHJcbiAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgIGJveFNoYWRvdzogJ3JnYmEoMCwgMCwgMCwgMC41KSAwcHggMTJweCAyNHB4IC0xMHB4JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgdmFyaWFudDogJ2J1dHRvbnMuZGVmYXVsdEJ0bicsXHJcbiAgICAgIGJvcmRlcjogJzJweCBzb2xpZCcsXHJcbiAgICAgIGJvcmRlckNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgIGJnOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICBwYWRkaW5nOiBbJzEwcHggMTVweCcsIG51bGwsICcxNXB4IDMwcHgnXSxcclxuICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgYmc6ICdwcmltYXJ5JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB0ZXh0QnV0dG9uOiB7XHJcbiAgICAgIHZhcmlhbnQ6ICdidXR0b25zLmRlZmF1bHRCdG4nLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgc3ZnOiB7XHJcbiAgICAgICAgZm9udFNpemU6IFs0LCA2XSxcclxuICAgICAgICBtcjogMixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjYXJkczoge1xyXG4gICAgcHJpbWFyeToge1xyXG4gICAgICBwYWRkaW5nOiAyLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICB9LFxyXG4gICAgb2ZmZXI6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgZmxleDogWycxIDEgY2FsYyg1MCUgLSAxNnB4KScsICcxIDEgMjAlJ10sXHJcbiAgICAgIG1pbkhlaWdodDogMTMwLFxyXG4gICAgICBtOiAyLFxyXG4gICAgICBiYWNrZ3JvdW5kOiAnI0ZGRkZGRicsXHJcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjRURFRkY2JyxcclxuICAgICAgYm9yZGVyUmFkaXVzOiA1LFxyXG4gICAgfSxcclxuICAgIGZlYXR1cmVDYXJkOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcclxuICAgICAgcDogMyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBmb3Jtczoge1xyXG4gICAgbGFiZWw6IHtcclxuICAgICAgZm9udFNpemU6IDEsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgIH0sXHJcbiAgICBpbnB1dDoge1xyXG4gICAgICBib3JkZXJSYWRpdXM6IDgsXHJcbiAgICAgIGJvcmRlckNvbG9yOiAnYm9yZGVyX2NvbG9yJyxcclxuICAgICAgaGVpZ2h0OiA2MCxcclxuICAgICAgJyY6Zm9jdXMnOiB7XHJcbiAgICAgICAgYm9yZGVyQ29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgICBib3hTaGFkb3c6ICh0KSA9PiBgMCAwIDAgMnB4ICR7dC5jb2xvcnMucHJpbWFyeX1gLFxyXG4gICAgICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgYmFkZ2VzOiB7XHJcbiAgICBwcmltYXJ5OiB7XHJcbiAgICAgIGNvbG9yOiAnYmFja2dyb3VuZCcsXHJcbiAgICAgIGJnOiAnIzI4QTVGRicsXHJcbiAgICAgIGJvcmRlclJhZGl1czogMzAsXHJcbiAgICAgIHA6ICczcHggMTFweCcsXHJcbiAgICAgIGZvbnRTaXplOiAxLFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuNXB4JyxcclxuICAgIH0sXHJcbiAgICBvdXRsaW5lOiB7XHJcbiAgICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgIGJnOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICBib3hTaGFkb3c6ICdpbnNldCAwIDAgMCAxcHgnLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBzdHlsZXM6IHtcclxuICAgIC8vIFRvIGFkZCBiYXNlLCB0b3AtbGV2ZWwgc3R5bGVzIHRvIHRoZSA8Ym9keT4gZWxlbWVudCwgdXNlIHRoZW1lLnN0eWxlcy5yb290LlxyXG4gICAgcm9vdDoge1xyXG4gICAgICBmb250RmFtaWx5OiAnYm9keScsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICdib2R5JyxcclxuICAgICAgZm9udFdlaWdodDogJ2JvZHknLFxyXG4gICAgICBmb250U21vb3RoaW5nOiAnYW50aWFsaWFzZWQnLFxyXG4gICAgICAvLyBNb2RhbCBHbG9iYWwgU3R5bGVcclxuICAgICAgJy5tb2RhbC12aWRlby1jbG9zZS1idG4nOiB7XHJcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgIH0sXHJcbiAgICAgICcubW9kYWwtdmlkZW8tbW92aWUtd3JhcCc6IHtcclxuICAgICAgICBtYXJnaW46IDYsXHJcbiAgICAgICAgd2lkdGg6ICdhdXRvJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAvLyBEaXZpZGVyIHN0eWxlc1xyXG4gICAgaHI6IHtcclxuICAgICAgYm9yZGVyOiAwLFxyXG4gICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQnLFxyXG4gICAgICBib3JkZXJDb2xvcjogJyNEOUUwRTcnLFxyXG4gICAgfSxcclxuICAgIC8vIGFsc28geW91IGNhbiB1c2Ugb3RoZXIgSFRNTCBlbGVtZW50cyBzdHlsZSBoZXJlXHJcbiAgICB1bDoge1xyXG4gICAgICBsaXN0U3R5bGU6ICdub25lJyxcclxuICAgIH0sXHJcbiAgICBzck9ubHk6IHtcclxuICAgICAgYm9yZGVyOiAnMCAhaW1wb3J0YW50JyxcclxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KSAhaW1wb3J0YW50JyxcclxuICAgICAgY2xpcFBhdGg6ICdpbnNldCg1MCUpICFpbXBvcnRhbnQnLFxyXG4gICAgICBoZWlnaHQ6ICcxcHggIWltcG9ydGFudCcsXHJcbiAgICAgIG1hcmdpbjogJy0xcHggIWltcG9ydGFudCcsXHJcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuICFpbXBvcnRhbnQnLFxyXG4gICAgICBwYWRkaW5nOiAnMCAhaW1wb3J0YW50JyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSAhaW1wb3J0YW50JyxcclxuICAgICAgd2lkdGg6ICcxcHggIWltcG9ydGFudCcsXHJcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAgIWltcG9ydGFudCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJjLWRyYXdlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jdXN0b20tc2Nyb2xsYmFyc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9mYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9pb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tb2RhbC12aWRlb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tdWx0aS1jYXJvdXNlbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zY3JvbGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3RpY2t5bm9kZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0aGVtZS11aVwiKTsiXSwic291cmNlUm9vdCI6IiJ9