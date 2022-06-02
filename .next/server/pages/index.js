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

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iMTA0IiB2aWV3Qm94PSIwIDAgOTYgMTA0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZCkiPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00OC40NjY0IDE2Ljk5OTlDNjMuMDg4NyAxNi45OTk5IDc0Ljk0MjUgMjguODY0NCA3NC45NDI1IDQzLjQ5OTlDNzQuOTQyNSA1OC4xMzUzIDYzLjA4ODcgNjkuOTk5OSA0OC40NjY0IDY5Ljk5OTlDMzMuODQzOSA2OS45OTk5IDIxLjk5MDEgNTguMTM1MyAyMS45OTAxIDQzLjQ5OTlDMjEuOTkwMSAyOC44NjQ0IDMzLjg0MzkgMTYuOTk5OSA0OC40NjY0IDE2Ljk5OTlaIiBmaWxsPSIjRkY0MzYxIi8+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQ4LjQ2NjQgMTYuOTk5OUM2My4wODg3IDE2Ljk5OTkgNzQuOTQyNSAyOC44NjQ0IDc0Ljk0MjUgNDMuNDk5OUM3NC45NDI1IDU4LjEzNTMgNjMuMDg4NyA2OS45OTk5IDQ4LjQ2NjQgNjkuOTk5OUMzMy44NDM5IDY5Ljk5OTkgMjEuOTkwMSA1OC4xMzUzIDIxLjk5MDEgNDMuNDk5OUMyMS45OTAxIDI4Ljg2NDQgMzMuODQzOSAxNi45OTk5IDQ4LjQ2NjQgMTYuOTk5OVoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4NCjwvZz4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDIuOTcyMiAwLjk5OTkzNkg1Mi45NjMxQzY5LjUxNjggMC45OTk5MzYgODIuOTM2MiAxNC40MzExIDgyLjkzNjIgMzAuOTk5OVY0MC45OTk5QzgyLjkzNjIgNTcuNTY4MiA2OS41MTY4IDcwLjk5OTggNTIuOTYzMSA3MC45OTk4SDQyLjk3MjJDMjYuNDE4NSA3MC45OTk4IDEyLjk5OSA1Ny41NjgyIDEyLjk5OSA0MC45OTk5VjMwLjk5OTlDMTIuOTk5IDE0LjQzMTEgMjYuNDE4NSAwLjk5OTkzNiA0Mi45NzIyIDAuOTk5OTM2WiIgZmlsbD0iI0ZGNDM2MSIvPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Mi45NzIyIDAuOTk5OTM2SDUyLjk2MzFDNjkuNTE2OCAwLjk5OTkzNiA4Mi45MzYyIDE0LjQzMTEgODIuOTM2MiAzMC45OTk5VjQwLjk5OTlDODIuOTM2MiA1Ny41NjgyIDY5LjUxNjggNzAuOTk5OCA1Mi45NjMxIDcwLjk5OThINDIuOTcyMkMyNi40MTg1IDcwLjk5OTggMTIuOTk5IDU3LjU2ODIgMTIuOTk5IDQwLjk5OTlWMzAuOTk5OUMxMi45OTkgMTQuNDMxMSAyNi40MTg1IDAuOTk5OTM2IDQyLjk3MjIgMC45OTk5MzZaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXIpIi8+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTU2LjkwOCAzMS4wMDI2QzU2LjgxNjQgMzAuNzk3MiA1Ni42MTkzIDMwLjY2NTUgNTYuNDAyMSAzMC42NjU1SDQ5Ljc4NjFMNTYuMzE1NiAxOS44OTRDNTYuNDI0NCAxOS43MTQ0IDU2LjQzMTEgMTkuNDg3IDU2LjMzMjkgMTkuMzAxNUM1Ni4yMzQ3IDE5LjExNDQgNTYuMDQ3IDE4Ljk5ODggNTUuODQzNyAxOC45OTg4SDQ2LjkxMDdDNDYuNjk5MiAxOC45OTg4IDQ2LjUwNTkgMTkuMTIzNiA0Ni40MTEgMTkuMzIxNEwzOC4wMzYzIDM2LjgyMTRDMzcuOTQ5OCAzNy4wMDIxIDM3Ljk1OTMgMzcuMjE2NiAzOC4wNjA4IDM3LjM4ODZDMzguMTYzIDM3LjU2MDcgMzguMzQyMiAzNy42NjUgMzguNTM2IDM3LjY2NUg0NC4yNzcyTDM4LjAyMTIgNTMuMTg5MUMzNy45MTQ2IDUzLjQ1NDcgMzguMDA5NSA1My43NjIzIDM4LjI0NDUgNTMuOTEzM0MzOC4zMzQ5IDUzLjk3MDMgMzguNDM1NCA1My45OTg4IDM4LjUzNTQgNTMuOTk4OEMzOC42OTU2IDUzLjk5ODggMzguODUzNiA1My45MjY4IDM4Ljk2MzEgNTMuNzkxOEw1Ni44MjkyIDMxLjYyNTJDNTYuOTY5NCAzMS40NTE1IDU2Ljk5OTUgMzEuMjA4NSA1Ni45MDggMzEuMDAyNloiIGZpbGw9IndoaXRlIi8+DQo8ZGVmcz4NCjxmaWx0ZXIgaWQ9ImZpbHRlcjBfZCIgeD0iMC45OTAxMTIiIHk9IjkiIHdpZHRoPSI5NC45NTI0IiBoZWlnaHQ9Ijk1IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+DQo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPg0KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiLz4NCjxmZU9mZnNldCBkeT0iMTMiLz4NCjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEwLjUiLz4NCjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAuODk4MDM5IDAgMCAwIDAgMC4xMTc2NDcgMCAwIDAgMCAwLjQzNTI5NCAwIDAgMCAwLjMgMCIvPg0KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3ciLz4NCjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93IiByZXN1bHQ9InNoYXBlIi8+DQo8L2ZpbHRlcj4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjUyLjU5NzgiIHkxPSIxMDIuNjM1IiB4Mj0iMTA3LjYwNSIgeTI9IjM5LjQxMzgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IiNGODA3NTkiLz4NCjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0JDNEU5QyIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhciIgeDE9IjUzLjM3NjEiIHkxPSIxMTMuNDEzIiB4Mj0iMTI1LjM4NSIgeTI9IjMwLjY1MDciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IiNGODA3NTkiLz4NCjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0JDNEU5QyIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjwvZGVmcz4NCjwvc3ZnPg0K"

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
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, "FeatureCardColumn");
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
    width: ['80px', null, null, '90px', null, 'auto']
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    title: {
      fontSize: 3,
      color: 'heading_secondary',
      lineHeight: 1.4,
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
  return __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, "SectionHeader");
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
  }, "Quality over Quanity."), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
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
  altText: 'Fast Performance',
  title: 'Fast Performance',
  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
}, {
  id: 2,
  imgSrc: assets_key_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
  altText: 'Partnership deal',
  title: 'Partnership deal',
  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
}, {
  id: 3,
  imgSrc: assets_key_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
  altText: 'Pro Subscription',
  title: 'Pro Subscription',
  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
}, {
  id: 4,
  imgSrc: assets_key_feature_support_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
  altText: 'Customer Support',
  title: 'Customer Support',
  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
}];
function KeyFeature() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 4
    }
  }, "Key Feature");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2Fycm93RXZlbi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9hcnJvd09kZC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9iYW5uZXItdGh1bWIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvY29yZS1mZWF0dXJlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZlYXR1cmUvcGFydG5lcnNoaXAuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZmVhdHVyZS9wZXJmb3JtYW5jZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mZWF0dXJlL3N1YnNjcmlwdGlvbi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mZWF0dXJlL3N1cHBvcnQuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMva2V5LWZlYXR1cmUvcGFydG5lcnNoaXAuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMva2V5LWZlYXR1cmUvcGVyZm9ybWFuY2Uuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMva2V5LWZlYXR1cmUvc3Vic2NyaXB0aW9uLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2tleS1mZWF0dXJlL3N1cHBvcnQuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvbG9nby5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wYXR0ZXJuQkcucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2VydmljZS10aHVtYi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zZXJ2aWNlcy9zZWN1cmUuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2VydmljZXMvc21hcnQuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2hhcGUtbGVmdC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zaGFwZS1wYXR0ZXJuMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zaGFwZS1wYXR0ZXJuMi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zaGFwZS1yaWdodC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy90ZWFtL21lbWJlci0xLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3RlYW0vbWVtYmVyLTIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvdGVhbS9tZW1iZXItMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy90ZWFtL21lbWJlci00LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3RlYW0vbWVtYmVyLTUucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvdGVhbS9tZW1iZXItNi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy90ZXN0aW1vbmlhbC9hdmF0YXIxLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3Rlc3RpbW9uaWFsL2F2YXRhcjIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvdGVzdGltb25pYWwvYXZhdGFyMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy90ZXN0aW1vbmlhbC9hdmF0YXI0LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9idXR0b24tZ3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZHJhd2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ZlYXR1cmUtY2FyZC1jb2x1bW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZmVhdHVyZS1jYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9tb2JpbGUtZHJhd2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9saW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbG9nby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wcmljZS1jYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JhdGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGVhbS1jYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RleHQtZmVhdHVyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL2Jhbm5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvY29yZS1mZWF0dXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9mZWF0dXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9rZXktZmVhdHVyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvcGFja2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvc2VydmljZS1zZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy90ZWFtLXNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL3Rlc3RpbW9uaWFsLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy93b3JrZmxvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGVtb3Rpb24vY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJjLWRyYXdlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtY3VzdG9tLXNjcm9sbGJhcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9mYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2lvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tb2RhbC12aWRlb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LW11bHRpLWNhcm91c2VsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2Nyb2xsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3RpY2t5bm9kZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRoZW1lLXVpXCIiXSwibmFtZXMiOlsibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwiY2FjaGVkT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJvYnNlcnZlciIsImdldE9ic2VydmVyIiwiY29uc29sZSIsInJvdXRlciIsImVyciIsImhyZWYiLCJldmVudCIsInRhcmdldCIsImUiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsInN1Y2Nlc3MiLCJkb2N1bWVudCIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsIm9wdGlvbmFsUHJvcHMiLCJoYXNXYXJuZWQiLCJSZWFjdCIsInAiLCJwYXRobmFtZSIsInJlc29sdmVkSHJlZiIsImNoaWxkRWxtIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRQcm9wcyIsInJlZiIsImVsIiwic2V0Q2hpbGRFbG0iLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsIkxpbmsiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsIlBBR0VfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFkZEJhc2VQYXRoIiwicmVzb2x2ZUhyZWYiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsImNyZWRlbnRpYWxzIiwicmVzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5IiwiaXNTZXJ2ZXJSZW5kZXIiLCJtYXJrTG9hZGluZ0Vycm9yIiwiY29uc3RydWN0b3IiLCJyb3V0ZSIsInF1ZXJ5IiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93Iiwic3RhdGUiLCJvcHRpb25zIiwic3R5bGVTaGVldHMiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIkNvbXBvbmVudCIsIl9fTkVYVF9EQVRBX18iLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsInByZXBhcmVVcmxBcyIsImNoYW5nZSIsImlzTG9jYWxVUkwiLCJTVCIsInBlcmZvcm1hbmNlIiwiY2xlYW5lZEFzIiwiZGVsQmFzZVBhdGgiLCJwYWdlcyIsIl9fcmV3cml0ZXMiLCJwYXJzZWQiLCJtZXRob2QiLCJyZXNvbHZlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwicGFyYW0iLCJhc1BhdGhuYW1lIiwicm91dGVJbmZvIiwiYXBwQ29tcCIsImVycm9yIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJwYWdlIiwiZ2V0Um91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImhhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJfcmVzb2x2ZUhyZWYiLCJjbGVhblBhdGhuYW1lIiwicGFyc2VkSHJlZiIsIlByb21pc2UiLCJmZXRjaENvbXBvbmVudCIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJkYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJlbmNvZGVVUklDb21wb25lbnQiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsIkRVTU1ZX0JBU0UiLCJyZXNvbHZlZEJhc2UiLCJvcmlnaW4iLCJtYXRjaGVyT3B0aW9ucyIsInNlbnNpdGl2ZSIsImRlbGltaXRlciIsImRlY29kZSIsImN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMiLCJzdHJpY3QiLCJjdXN0b21Sb3V0ZSIsImtleXMiLCJtYXRjaGVyUmVnZXgiLCJwYXRoVG9SZWdleHAiLCJtYXRjaGVyIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFyc2VkRGVzdGluYXRpb24iLCJkZXN0aW5hdGlvbiIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJ2YWxpZGF0ZSIsInZhbHVlIiwiQXJyYXkiLCJzdHJPckFycmF5IiwicXVlcnlDb21waWxlciIsInBhcmFtS2V5cyIsImFwcGVuZFBhcmFtc1RvUXVlcnkiLCJwYXJhbXMiLCJzaG91bGRBZGRCYXNlUGF0aCIsIm5ld1VybCIsImVuY29kZVVSSSIsInNlYXJjaFBhcmFtcyIsInJlc3VsdCIsIml0ZW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwiY3VzdG9tUm91dGVNYXRjaGVyIiwicmV3cml0ZSIsImRlc3RSZXMiLCJyZSIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJvcHRpb25hbCIsInJlcGVhdCIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInNlZ21lbnQiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJpc05hTiIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJCdXR0b25Hcm91cCIsIm5leHQiLCJwcmV2aW91cyIsInN0eWxlcyIsImJ1dHRvbkdyb3VwIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwibWIiLCJidXR0b24iLCJiZyIsImJvcmRlciIsImZvbnRTaXplIiwiY3Vyc29yIiwicHgiLCJjb2xvciIsInRyYW5zaXRpb24iLCJvdXRsaW5lIiwiRHJhd2VyIiwiY2xhc3NOYW1lIiwiY2xvc2VCdXR0b24iLCJjbG9zZUJ1dHRvblN0eWxlIiwiZHJhd2VySGFuZGxlciIsInRvZ2dsZUhhbmRsZXIiLCJvcGVuIiwid2lkdGgiLCJwbGFjZW1lbnQiLCJkcmF3ZXJTdHlsZSIsImNsb3NlQnRuU3R5bGUiLCJ0cmltIiwiZGlzcGxheXQiLCJkZWZhdWx0UHJvcHMiLCJGZWF0dXJlQ2FyZENvbHVtbiIsInNyYyIsImFsdFRleHQiLCJ0aXRsZSIsInRleHQiLCJjYXJkIiwiYWxpZ25JdGVtcyIsImZsZXhEaXJlY3Rpb24iLCJ0ZXh0QWxpZ24iLCJpbWciLCJteCIsIm1sIiwid3JhcHBlciIsImxpbmVIZWlnaHQiLCJmb250V2VpZ2h0Iiwic3ViVGl0bGUiLCJGZWF0dXJlQ2FyZCIsImhlaWdodCIsImZsZXhTaHJpbmsiLCJtciIsIm10IiwibWVudUl0ZW0iLCJsYWJlbCIsIkZvb3RlciIsImZvb3RlciIsImZvb3RlckJvdHRvbUFyZWEiLCJib3JkZXJUb3AiLCJib3JkZXJUb3BDb2xvciIsInB0IiwicGIiLCJtZW51cyIsIm5hdiIsImZsZXhXcmFwIiwibGluayIsInRleHREZWNvcmF0aW9uIiwiY29weXJpZ2h0IiwiSGVhZGVyIiwiaGVhZGVyIiwiY29udGFpbmVyIiwiTG9nb0RhcmsiLCJtZW51SXRlbXMiLCJtYXAiLCJwb3NpdGlvbkFuaW0iLCJrZXlmcmFtZXMiLCJweSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJhY2tncm91bmRDb2xvciIsImFuaW1hdGlvbiIsImJveFNoYWRvdyIsImEiLCJzb2NpYWwiLCJpY29uIiwiTW9iaWxlRHJhd2VyIiwiaXNEcmF3ZXJPcGVuIiwic2V0SXNEcmF3ZXJPcGVuIiwidXNlU3RhdGUiLCJwcmV2U3RhdGUiLCJkcmF3ZXIiLCJjbG9zZSIsImNvbnRlbnQiLCJtZW51IiwibWVudUZvb3RlciIsInNvY2lhbEl0ZW0iLCJyaWdodCIsInpJbmRleCIsImJvcmRlckJvdHRvbSIsImZ3IiwiYm9yZGVyUmFkaXVzIiwiTGF5b3V0IiwiaXNTdGlja3kiLCJzZXRJc1N0aWNreSIsImhhbmRsZVN0YXRlQ2hhbmdlIiwic3RhdHVzIiwiU3RpY2t5IiwiU1RBVFVTX0ZJWEVEIiwiU1RBVFVTX09SSUdJTkFMIiwidmFyaWFudCIsIk5hdkxpbmsiLCJyZXN0IiwiTGlzdCIsIml0ZW1zIiwicGFyZW50U3R5bGUiLCJjaGlsZFN0eWxlIiwibGlzdEljb24iLCJwYWRkaW5nIiwiTG9nbyIsIlByaWNlQ2FyZCIsImRlc2NyaXB0aW9uIiwicHJpY2VXaXRoVW5pdCIsImJ1dHRvblRleHQiLCJhbm90aGVyT3B0aW9uIiwicG9pbnRzIiwicHJpY2luZ0JveCIsIm9wYWNpdHkiLCJsZXR0ZXJTcGFjaW5nIiwicHJpY2luZ0hlYWRlciIsIm1hcmdpbkJvdHRvbSIsInByaWNlIiwicGwiLCJsaXN0SXRlbSIsImZvbnRGYW1pbHkiLCJmb250U3R5bGUiLCJSYXRpbmciLCJTZWN0aW9uSGVhZGVyIiwic2xvZ2FuIiwiaXNXaGl0ZSIsIlNFTyIsImF1dGhvciIsIm1ldGEiLCJtZXRhRGF0YSIsInByb3BlcnR5IiwiY29uY2F0IiwibGFuZyIsIlRlYW1DYXJkIiwiZGVzaWduYXRpb24iLCJteSIsIm1lbWJlclRodW1iIiwiYm9yZGVyQ29sb3IiLCJpbmZvV3JhcHBlciIsInNvY2lhbFNoYXJlIiwiYm90dG9tIiwiVGV4dEZlYXR1cmUiLCJidG5OYW1lIiwiYnRuVVJMIiwidGV4dFRyYW5zZm9ybSIsIkluZGV4UGFnZSIsInRoZW1lIiwiQmFubmVyIiwiYmFubmVyIiwiY29udGVudEJveCIsImltYWdlQm94IiwiQmFubmVySW1nIiwiYmFja2dyb3VuZEltYWdlIiwiU2hhcGVMZWZ0IiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRTaXplIiwiU2hhcGVSaWdodCIsIm1pbkhlaWdodCIsIkNvcmVGZWF0dXJlIiwiY29udGFpbmVyQm94IiwidGh1bWJuYWlsIiwiRmVhdHVyZVRodW1iIiwic2hhcGVCb3giLCJzaGFwZVBhdHRlcm4iLCJwciIsImlkIiwiaW1nU3JjIiwiUGVyZm9ybWFuY2UiLCJQYXJ0bmVyc2hpcCIsIlN1YnNjcmlwdGlvbiIsIlN1cHBvcnQiLCJGZWF0dXJlIiwiZ3JpZCIsImdyaWRHYXAiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiS2V5RmVhdHVyZSIsInBhY2thZ2VzIiwibW9udGhseSIsImlzQXZhaWxhYmxlIiwiaGVhZGVySWNvbiIsImFubnVhbCIsInJlc3BvbnNpdmUiLCJkZXNrdG9wIiwiYnJlYWtwb2ludCIsIm1heCIsIm1pbiIsImRyYWdnYWJsZSIsInRhYmxldCIsIm1vYmlsZSIsIlBhY2thZ2UiLCJzbGlkZXJQYXJhbXMiLCJhZGRpdGlvbmFsVHJhbnNmcm9tIiwiYXJyb3dzIiwiYXV0b1BsYXlTcGVlZCIsImNlbnRlck1vZGUiLCJzbGlkZXNUb1NsaWRlIiwiY29udGFpbmVyQ2xhc3MiLCJjdXN0b21CdXR0b25Hcm91cCIsImRvdExpc3RDbGFzcyIsImZvY3VzT25TZWxlY3QiLCJpbmZpbml0ZSIsImtleUJvYXJkQ29udHJvbCIsIml0ZW1DbGFzcyIsIm1pbmltdW1Ub3VjaERyYWciLCJyZW5kZXJCdXR0b25Hcm91cE91dHNpZGUiLCJyZW5kZXJEb3RzT3V0c2lkZSIsInNob3dEb3RzIiwic2xpZGVyQ2xhc3MiLCJmYWRlSW4iLCJmYWRlSW4yIiwicHJpY2luZ1dyYXBwZXIiLCJwcmljaW5nSXRlbSIsImZsZXgiLCJidXR0b25Hcm91cElubmVyIiwibWFyZ2luIiwiZmVhdHVyZXMiLCJTbWFydCIsIlNlY3VyZSIsIlNlcnZpY2VTZWN0aW9uIiwicGxheVBsdXNlIiwiY29yZUZlYXR1cmUiLCJvcmRlciIsInZpZGVvQnRuIiwidHJhbnNmb3JtIiwic3ZnIiwidmlkZW9XcmFwcGVyIiwibWF4V2lkdGgiLCJwYWRkaW5nVG9wIiwiaWZyYW1lIiwiTWVtYmVyMSIsInNvY2lhbFByb2ZpbGUiLCJNZW1iZXIyIiwiTWVtYmVyMyIsIk1lbWJlcjQiLCJNZW1iZXI1IiwiTWVtYmVyNiIsIlRlYW1TZWN0aW9uIiwiYXZhdGFyIiwiQXZhdGFyMSIsInJldmlldyIsIkF2YXRhcjIiLCJBdmF0YXIzIiwiQXZhdGFyNCIsImxhcHRvcCIsImNhcm91c2VsUGFyYW1zIiwiVGVzdGltb25pYWxDYXJkIiwiY2Fyb3VzZWxXcmFwcGVyIiwicmV2aWV3Q2FyZCIsInVsIiwibGlzdFN0eWxlIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Ub3AiLCJvYmplY3RGaXQiLCJoZWFkaW5nIiwiV29ya0Zsb3ciLCJ3b3JrZmxvdyIsIlBhdHRlcm5CRyIsIkFycm93T2RkIiwiQXJyb3dFdmVuIiwiaWNvbkJveCIsImNvbG9ycyIsInRleHRfc2Vjb25kYXJ5IiwiaGVhZGluZ19zZWNvbmRhcnkiLCJiYWNrZ3JvdW5kIiwiYmFja2dyb3VuZF9zZWNvbmRhcnkiLCJib3JkZXJfY29sb3IiLCJ5ZWxsb3ciLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwibXV0ZWQiLCJhY2NlbnQiLCJtb2RlcyIsImRhcmsiLCJicmVha3BvaW50cyIsImZvbnRzIiwiYm9keSIsImZvbnRTaXplcyIsImZvbnRXZWlnaHRzIiwiYm9sZCIsImxpbmVIZWlnaHRzIiwibGV0dGVyU3BhY2luZ3MiLCJjYXBzIiwic3BhY2UiLCJsYXlvdXQiLCJ0b29sYmFyIiwibWFpbiIsInNlY3Rpb24iLCJrZXlGZWF0dXJlIiwiZmVhdHVyZSIsIm5ld3MiLCJvdmVyZmxvdyIsInRlc3RpbW9uaWFsIiwic2VydmljZXMiLCJwcmljaW5nIiwic2VjdGlvbkhlYWRlciIsImhlcm9QcmltYXJ5IiwiaGVyb1NlY29uZGFyeSIsImxlYWQiLCJsaW5rcyIsImRlZmF1bHQiLCJibG9nIiwibG9nbyIsImltYWdlcyIsImJ1dHRvbnMiLCJkZWZhdWx0QnRuIiwid2hpdGVCdXR0b24iLCJ0ZXh0QnV0dG9uIiwiY2FyZHMiLCJvZmZlciIsImZlYXR1cmVDYXJkIiwiZm9ybXMiLCJpbnB1dCIsInQiLCJiYWRnZXMiLCJyb290IiwiZm9udFNtb290aGluZyIsImhyIiwic3JPbmx5IiwiY2xpcCIsImNsaXBQYXRoIiwid2hpdGVTcGFjZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHdFOzs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7O0FD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QUFTSixpQ0FBMkI7QUFDekJ3TixjQUFNLEVBQUUsQ0FEaUI7QUFFekI1TSxhQUFLLEVBQUU7QUFGa0I7QUFUdkIsS0FGQTtBQWdCTjtBQUNBa1QsTUFBRSxFQUFFO0FBQ0ZoVSxZQUFNLEVBQUUsQ0FETjtBQUVGd0Ysa0JBQVksRUFBRSxXQUZaO0FBR0ZvRCxpQkFBVyxFQUFFO0FBSFgsS0FqQkU7QUFzQk47QUFDQWdILE1BQUUsRUFBRTtBQUNGQyxlQUFTLEVBQUU7QUFEVCxLQXZCRTtBQTBCTm9FLFVBQU0sRUFBRTtBQUNOalUsWUFBTSxFQUFFLGNBREY7QUFFTmtVLFVBQUksRUFBRSxxQ0FGQTtBQUdOQyxjQUFRLEVBQUUsdUJBSEo7QUFJTjdSLFlBQU0sRUFBRSxnQkFKRjtBQUtOb0wsWUFBTSxFQUFFLGlCQUxGO0FBTU40RSxjQUFRLEVBQUUsbUJBTko7QUFPTjNMLGFBQU8sRUFBRSxjQVBIO0FBUU56QyxjQUFRLEVBQUUscUJBUko7QUFTTnBELFdBQUssRUFBRSxnQkFURDtBQVVOc1QsZ0JBQVUsRUFBRTtBQVZOO0FBMUJGO0FBcFdLLENBQWYsRTs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxxQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xyXG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XHJcbiAgICBcImRlZmF1bHRcIjogb2JqXHJcbiAgfTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xyXG5cclxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xyXG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcclxuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xyXG5cclxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XHJcbiAgICByZXR1cm4gY2FjaGU7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGNhY2hlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcclxuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XHJcbiAgICByZXR1cm4gb2JqO1xyXG4gIH1cclxuXHJcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBcImRlZmF1bHRcIjogb2JqXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XHJcblxyXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xyXG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xyXG4gIH1cclxuXHJcbiAgdmFyIG5ld09iaiA9IHt9O1xyXG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcclxuXHJcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xyXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcclxuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XHJcblxyXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xyXG5cclxuICBpZiAoY2FjaGUpIHtcclxuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmV3T2JqO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XHJcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xyXG5cclxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcclxuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XHJcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xyXG4gICAgfTtcclxuICB9IGVsc2Uge1xyXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcclxuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3cgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0J1xuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IFtjaGlsZEVsbSwgc2V0Q2hpbGRFbG1dID0gUmVhY3QudXNlU3RhdGU8RWxlbWVudD4oKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXMgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpIDogcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoXG4gICAgICBwICYmXG4gICAgICBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJlxuICAgICAgY2hpbGRFbG0gJiZcbiAgICAgIGNoaWxkRWxtLnRhZ05hbWUgJiZcbiAgICAgIGlzTG9jYWxVUkwoaHJlZilcbiAgICApIHtcbiAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc11cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMoY2hpbGRFbG0sICgpID0+IHtcbiAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3AsIGNoaWxkRWxtLCBocmVmLCBhcywgcm91dGVyXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsIH0gPSBwcm9wc1xuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgIGlmIChlbCkgc2V0Q2hpbGRFbG0oZWwpXG5cbiAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGlmIChwKSB7XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgfVxuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNoaWxkUHJvcHMuaHJlZiA9IGFkZEJhc2VQYXRoKGFzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKHt9LCBfcm91dGVyW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID0gbnVsbCB8IHsgX19OOiBmYWxzZSB9IHwgKHsgX19OOiB0cnVlIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGJhc2VQYXRoICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goYmFzZVBhdGgpXG4gICAgICA6IGJhc2VQYXRoICsgcGF0aFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihjdXJyZW50UGF0aDogc3RyaW5nLCBocmVmOiBVcmwpOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgcmV0dXJuIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgOiBmaW5hbFVybC5ocmVmXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gdXJsQXNTdHJpbmdcbiAgfVxufVxuXG5jb25zdCBQQUdFX0xPQURfRVJST1IgPSBTeW1ib2woJ1BBR0VfTE9BRF9FUlJPUicpXG5leHBvcnQgZnVuY3Rpb24gbWFya0xvYWRpbmdFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgUEFHRV9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzOiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIHJldHVybiB7XG4gICAgdXJsOiBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCkpLFxuICAgIGFzOiBhcyA/IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKSA6IGFzLFxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8UHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbywgQXBwOiBBcHBDb21wb25lbnQpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzOiBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IHN0YXRlXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgY29uc3QgY2xlYW5lZEFzID0gaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXNcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgY29uc3QgeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLnByb21pc2VkQnVpbGRNYW5pZmVzdFxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcyB9ID0gcGFyc2VkXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpIHtcbiAgICAgIHJlc29sdmVkQXMgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIGFzLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgYmFzZVBhdGgsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gdGhpcy5fcmVzb2x2ZUhyZWYoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhXG4gICAgICApXG4gICAgfVxuICAgIHJlc29sdmVkQXMgPSBkZWxCYXNlUGF0aChyZXNvbHZlZEFzKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2BcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciB9ID0gcm91dGVJbmZvXG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKS5jYXRjaChcbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oKG9wdGlvbnMgYXMgYW55KS5fTl9YLCAob3B0aW9ucyBhcyBhbnkpLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChQQUdFX0xPQURfRVJST1IgaW4gZXJyIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgJy9fZXJyb3InXG4gICAgICApXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBkZWxCYXNlUGF0aChhcyksXG4gICAgICAgICAgX19OX1NTR1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gZGVub3JtYWxpemVQYWdlUGF0aChkZWxCYXNlUGF0aChwYXRobmFtZSEpKVxuXG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgIHJldHVybiBwYXJzZWRIcmVmXG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJlxuICAgICAgICAgIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhZ2UpXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgYXNQYXRoKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5jb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTChcbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWYsXG4gICAgb3JpZ2luLFxuICAgIHByb3RvY29sLFxuICB9ID0gbmV3IFVSTCh1cmwsIHJlc29sdmVkQmFzZSlcbiAgaWYgKFxuICAgIG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4gfHxcbiAgICAocHJvdG9jb2wgIT09ICdodHRwOicgJiYgcHJvdG9jb2wgIT09ICdodHRwczonKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXJPcHRpb25zID0ge1xuICBzZW5zaXRpdmU6IGZhbHNlLFxuICBkZWxpbWl0ZXI6ICcvJyxcbiAgZGVjb2RlOiBkZWNvZGVQYXJhbSxcbn1cblxuZXhwb3J0IGNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgPSB7XG4gIC4uLm1hdGNoZXJPcHRpb25zLFxuICBzdHJpY3Q6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChjdXN0b21Sb3V0ZSA9IGZhbHNlKSA9PiB7XG4gIHJldHVybiAocGF0aDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qga2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgICBjb25zdCBtYXRjaGVyUmVnZXggPSBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKFxuICAgICAgcGF0aCxcbiAgICAgIGtleXMsXG4gICAgICBjdXN0b21Sb3V0ZSA/IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgOiBtYXRjaGVyT3B0aW9uc1xuICAgIClcbiAgICBjb25zdCBtYXRjaGVyID0gcGF0aFRvUmVnZXhwLnJlZ2V4cFRvRnVuY3Rpb24oXG4gICAgICBtYXRjaGVyUmVnZXgsXG4gICAgICBrZXlzLFxuICAgICAgbWF0Y2hlck9wdGlvbnNcbiAgICApXG5cbiAgICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJhbXM/OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhdGhuYW1lID09IG51bGwgPyBmYWxzZSA6IG1hdGNoZXIocGF0aG5hbWUpXG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGN1c3RvbVJvdXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4gICAgICAgICAgLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXkubmFtZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wYXJhbXMsIC4uLnJlcy5wYXJhbXMgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkZWNvZGVQYXJhbShwYXJhbTogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgfSBjYXRjaCAoXykge1xuICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpXG4gICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICB0aHJvdyBlcnJcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuLFxuICBiYXNlUGF0aDogc3RyaW5nXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaFBhcmFtcyxcbiAgICAgIGhhc2gsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfVxuICB9XG5cbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFBhcmFtc1xuICApXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gYC8ke3ZhbHVlfWBcbiAgICAgIGNvbnN0IHF1ZXJ5Q29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZSh2YWx1ZSwgeyB2YWxpZGF0ZTogZmFsc2UgfSlcbiAgICAgIHZhbHVlID0gcXVlcnlDb21waWxlcihwYXJhbXMpLnN1YnN0cigxKVxuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4gIC8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG4gIGNvbnN0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG91bGRBZGRCYXNlUGF0aCA9IGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSAmJiBiYXNlUGF0aFxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gYCR7c2hvdWxkQWRkQmFzZVBhdGggPyBiYXNlUGF0aCA6ICcnfSR7ZW5jb2RlVVJJKFxuICAgICAgZGVzdGluYXRpb25Db21waWxlcihwYXJhbXMpXG4gICAgKX1gXG5cbiAgICBjb25zdCBbcGF0aG5hbWUsIGhhc2hdID0gbmV3VXJsLnNwbGl0KCcjJylcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCA9IGAke2hhc2ggPyAnIycgOiAnJ30ke2hhc2ggfHwgJyd9YFxuICAgIGRlbGV0ZSBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoUGFyYW1zXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgaXRlbSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCB2YWx1ZSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIGJhc2VQYXRoOiBzdHJpbmcsXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZ1xuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgcmV3cml0ZS5iYXNlUGF0aCA9PT0gZmFsc2UgPyAnJyA6IGJhc2VQYXRoXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgICAgICAgIC8vIGNoZWNrIGlmIHdlIG5vdyBtYXRjaCBhIHBhZ2UgYXMgdGhpcyBtZWFucyB3ZSBhcmUgZG9uZVxuICAgICAgICAgIC8vIHJlc29sdmluZyB0aGUgcmV3cml0ZXNcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgbWF0Y2ggYSBkeW5hbWljLXJvdXRlLCBpZiBzbyB3ZSBicmVhayB0aGUgcmV3cml0ZXMgY2hhaW5cbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYoYXNQYXRoKVxuXG4gICAgICAgIGlmIChyZXNvbHZlZEhyZWYgIT09IGFzUGF0aCAmJiBwYWdlcy5pbmNsdWRlcyhyZXNvbHZlZEhyZWYpKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXNQYXRoXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICcuLi8uLi9saWIvbG9hZC1lbnYtY29uZmlnJ1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlNakEwSWlCb1pXbG5hSFE5SWpReklpQjJhV1YzUW05NFBTSXdJREFnTWpBMElEUXpJaUJtYVd4c1BTSnViMjVsSWlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpUGcwS1BIQmhkR2dnWkQwaVRUQXVORGd4TWpBeElERXdMakkxTnpGRE1DNDBPREV5TURFZ01UQXVNalUzTVNBNU1pNDNPREV5SURneExqYzRORGNnTVRrMUxqUTRNU0F4TUM0eU5UY3hJaUJ6ZEhKdmEyVTlJaU5ETWtOQ1JFVWlJSE4wY205clpTMTNhV1IwYUQwaU1TNDFJaUJ6ZEhKdmEyVXRaR0Z6YUdGeWNtRjVQU0kxSURVaUx6NE5Danh3WVhSb0lHUTlJazB4T0RBdU55QXpMalEzTkRVMVF6RTRNQzQzSURNdU5EYzBOVFVnTVRrNUxqZ3hOU0F0TWk0d05URTNOeUF5TURFdU5qTTNJRFF1TWpBNU1UWkRNakF6TGpRMU9TQXhNQzQwTnpBeElESXdNaTR3T1RNZ01UWXVPVFEwTkNBeE9UWXVNVGMySURJMUxqZ3hORElpSUhOMGNtOXJaVDBpSTBNeVEwSkVSU0lnYzNSeWIydGxMWGRwWkhSb1BTSXhMalVpSUhOMGNtOXJaUzFrWVhOb1lYSnlZWGs5SWpRZ05DSXZQZzBLUEM5emRtYytEUW89XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTWpBMElpQm9aV2xuYUhROUlqUXpJaUIyYVdWM1FtOTRQU0l3SURBZ01qQTBJRFF6SWlCbWFXeHNQU0p1YjI1bElpQjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaVBnMEtQSEJoZEdnZ1pEMGlUVEF1T1RrNU56VTJJRE15TGpjeE9UVkRNQzQ1T1RrM05UWWdNekl1TnpFNU5TQTVNeTR5T1RrNElDMHpPQzQ0TURneElERTVOaUF6TWk0M01UazFJaUJ6ZEhKdmEyVTlJaU5ETWtOQ1JFVWlJSE4wY205clpTMTNhV1IwYUQwaU1TNDFJaUJ6ZEhKdmEyVXRaR0Z6YUdGeWNtRjVQU0kxSURVaUx6NE5Danh3WVhSb0lHUTlJazB4T0RFdU1qRTVJRE01TGpRNU56WkRNVGd4TGpJeE9TQXpPUzQwT1RjMklESXdNQzR6TXpRZ05EVXVNREkwSURJd01pNHhOVFlnTXpndU56WXpRekl3TXk0NU56Z2dNekl1TlRBeE9TQXlNREl1TmpFeElESTJMakF5TnpVZ01UazJMalk1TkNBeE55NHhOVGMxSWlCemRISnZhMlU5SWlORE1rTkNSRVVpSUhOMGNtOXJaUzEzYVdSMGFEMGlNUzQxSWlCemRISnZhMlV0WkdGemFHRnljbUY1UFNJMElEUWlMejROQ2p3dmMzWm5QZzBLXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvYmFubmVyLXRodW1iLWMxMjFkYzc5MzgyYjliZjIwNDE0YzMwYzRkMDkyZTBhLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9jb3JlLWZlYXR1cmUtNzQ5ZGMwODZlZWMyNWFjMTRlZDBjOTJhNjg3NmQyOWUucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU9UVWlJR2hsYVdkb2REMGlNVEExSWlCMmFXVjNRbTk0UFNJd0lEQWdPVFVnTVRBMUlpQm1hV3hzUFNKdWIyNWxJaUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lQZzBLUEdjZ1ptbHNkR1Z5UFNKMWNtd29JMlpwYkhSbGNqQmZaQ2tpUGcwS1BIQmhkR2dnWm1sc2JDMXlkV3hsUFNKbGRtVnViMlJrSWlCamJHbHdMWEoxYkdVOUltVjJaVzV2WkdRaUlHUTlJazAwTnk0ME9UazVJREUzTGprNU9UbEROakl1TVRNMU5TQXhOeTQ1T1RrNUlEY3pMams1T1RrZ01qa3VPRFkwTkNBM015NDVPVGs1SURRMExqUTVPVGxETnpNdU9UazVPU0ExT1M0eE16VXpJRFl5TGpFek5UVWdOekF1T1RrNU9TQTBOeTQwT1RrNUlEY3dMams1T1RsRE16SXVPRFkwTkNBM01DNDVPVGs1SURJeElEVTVMakV6TlRNZ01qRWdORFF1TkRrNU9VTXlNU0F5T1M0NE5qUTBJRE15TGpnMk5EUWdNVGN1T1RrNU9TQTBOeTQwT1RrNUlERTNMams1T1RsYUlpQm1hV3hzUFNJalJrWTBNell4SWk4K0RRbzhjR0YwYUNCbWFXeHNMWEoxYkdVOUltVjJaVzV2WkdRaUlHTnNhWEF0Y25Wc1pUMGlaWFpsYm05a1pDSWdaRDBpVFRRM0xqUTVPVGtnTVRjdU9UazVPVU0yTWk0eE16VTFJREUzTGprNU9Ua2dOek11T1RrNU9TQXlPUzQ0TmpRMElEY3pMams1T1RrZ05EUXVORGs1T1VNM015NDVPVGs1SURVNUxqRXpOVE1nTmpJdU1UTTFOU0EzTUM0NU9UazVJRFEzTGpRNU9Ua2dOekF1T1RrNU9VTXpNaTQ0TmpRMElEY3dMams1T1RrZ01qRWdOVGt1TVRNMU15QXlNU0EwTkM0ME9UazVRekl4SURJNUxqZzJORFFnTXpJdU9EWTBOQ0F4Tnk0NU9UazVJRFEzTGpRNU9Ua2dNVGN1T1RrNU9Wb2lJR1pwYkd3OUluVnliQ2dqY0dGcGJuUXdYMnhwYm1WaGNpa2lMejROQ2p3dlp6NE5Danh3WVhSb0lHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSWdZMnhwY0MxeWRXeGxQU0psZG1WdWIyUmtJaUJrUFNKTk5ETWdNQzQ1T1RrNU16WklOVEl1T1RrNU9VTTJPUzQxTmpnMUlEQXVPVGs1T1RNMklEZ3lMams1T1RrZ01UUXVORE14TVNBNE1pNDVPVGs1SURNd0xqazVPVGxXTkRBdU9UazVPVU00TWk0NU9UazVJRFUzTGpVMk9ESWdOamt1TlRZNE5TQTNNQzQ1T1RrNElEVXlMams1T1RrZ056QXVPVGs1T0VnME0wTXlOaTQwTXpFMUlEY3dMams1T1RnZ01USXVPVGs1T1NBMU55NDFOamd5SURFeUxqazVPVGtnTkRBdU9UazVPVll6TUM0NU9UazVRekV5TGprNU9Ua2dNVFF1TkRNeE1TQXlOaTQwTXpFMUlEQXVPVGs1T1RNMklEUXpJREF1T1RrNU9UTTJXaUlnWm1sc2JEMGlJMFpHTkRNMk1TSXZQZzBLUEhCaGRHZ2dabWxzYkMxeWRXeGxQU0psZG1WdWIyUmtJaUJqYkdsd0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdROUlrMDBNeUF3TGprNU9Ua3pOa2cxTWk0NU9UazVRelk1TGpVMk9EVWdNQzQ1T1RrNU16WWdPREl1T1RrNU9TQXhOQzQwTXpFeElEZ3lMams1T1RrZ016QXVPVGs1T1ZZME1DNDVPVGs1UXpneUxqazVPVGtnTlRjdU5UWTRNaUEyT1M0MU5qZzFJRGN3TGprNU9UZ2dOVEl1T1RrNU9TQTNNQzQ1T1RrNFNEUXpRekkyTGpRek1UVWdOekF1T1RrNU9DQXhNaTQ1T1RrNUlEVTNMalUyT0RJZ01USXVPVGs1T1NBME1DNDVPVGs1VmpNd0xqazVPVGxETVRJdU9UazVPU0F4TkM0ME16RXhJREkyTGpRek1UVWdNQzQ1T1RrNU16WWdORE1nTUM0NU9UazVNelphSWlCbWFXeHNQU0oxY213b0kzQmhhVzUwTVY5c2FXNWxZWElwSWk4K0RRbzhjR0YwYUNCbWFXeHNMWEoxYkdVOUltVjJaVzV2WkdRaUlHTnNhWEF0Y25Wc1pUMGlaWFpsYm05a1pDSWdaRDBpVFRVeExqUXpNaklnTkRFdU5qTTVPRU0xTVM0Mk5EUXhJRFF4TGpReU5EY2dOVEV1TnpVd01pQTBNUzR4TnpBNUlEVXhMamMxTURJZ05EQXVPRGMzTkZZek9DNHhOamc0U0RZelZqUTJMakk1TlRKRE5qTWdORGN1TURNNU1pQTJNaTQzTXpjNUlEUTNMalkzTnpRZ05qSXVNakV6TWlBME9DNHlNRGMxUXpZeExqWTRPRGNnTkRndU56TTRNU0EyTVM0d05UZ3hJRFE1TGpBd016SWdOakF1TXpJeE5pQTBPUzR3TURNeVNETTFMalkzT0RkRE16UXVPVFF5SURRNUxqQXdNeklnTXpRdU16RXhOQ0EwT0M0M016Z3hJRE16TGpjNE5qa2dORGd1TWpBM05VTXpNeTR5TmpJeUlEUTNMalkzTnpRZ016TWdORGN1TURNNU1pQXpNeUEwTmk0eU9UVXlWak00TGpFMk9EaElORFF1TWpWV05EQXVPRGMzTkVNME5DNHlOU0EwTVM0eE56QTVJRFEwTGpNMU5qRWdOREV1TkRJME55QTBOQzQxTmpneUlEUXhMall6T1RoRE5EUXVOemd3TWlBME1TNDROVE0zSURRMUxqQXpNVE1nTkRFdU9UWXhNeUEwTlM0ek1qRTJJRFF4TGprMk1UTklOVEF1TmpjNE4wTTFNQzQ1TmpnNElEUXhMamsyTVRNZ05URXVNakl3TVNBME1TNDROVE0zSURVeExqUXpNaklnTkRFdU5qTTVPRnBOTlRBdU1UUXpNU0F6T0M0eE5qZzRTRFExTGpnMU56RldOREF1TXpNMU5VZzFNQzR4TkRNeFZqTTRMakUyT0RoYVRUWXlMakl4TXpJZ01qZ3VNVE13TVVNMk1TNDJPRGczSURJM0xqVTVPRGtnTmpFdU1EVTRNU0F5Tnk0ek16TTVJRFl3TGpNeU1UWWdNamN1TXpNek9VZzFOQzQwTWpnMVZqSTBMall5TlRORE5UUXVOREk0TlNBeU5DNHhOek0zSURVMExqSTNNalFnTWpNdU56a3dNeUExTXk0NU5UazRJREl6TGpRM016ZEROVE11TmpRM05TQXlNeTR4TlRnMklEVXpMakkyTnpnZ01qTWdOVEl1T0RJeE5pQXlNMGcwTXk0eE56ZzNRelF5TGpjek1qTWdNak1nTkRJdU16VXlPU0F5TXk0eE5UZzJJRFF5TGpBME1EUWdNak11TkRjek4wTTBNUzQzTWpjNElESXpMamM0T1RnZ05ERXVOVGN4TmlBeU5DNHhOek0zSURReExqVTNNVFlnTWpRdU5qSTFNMVl5Tnk0ek16TTVTRE0xTGpZM09EZERNelF1T1RReUlESTNMak16TXprZ016UXVNekV4TkNBeU55NDFPVGc1SURNekxqYzROamtnTWpndU1UTXdNVU16TXk0eU5qSXlJREk0TGpZMU9UY2dNek1nTWprdU1qazNNeUF6TXlBek1DNHdOREkxVmpNMkxqVTBNelZJTmpOV016QXVNRFF5TlVNMk15QXlPUzR5T1RjeklEWXlMamN6TnprZ01qZ3VOalU1TnlBMk1pNHlNVE15SURJNExqRXpNREZhVFRVeUxqSTROVGdnTWpjdU16TXpPVWcwTXk0M01UUTBWakkxTGpFMk5qZElOVEl1TWpnMU9GWXlOeTR6TXpNNVdpSWdabWxzYkQwaWQyaHBkR1VpTHo0TkNqeGtaV1p6UGcwS1BHWnBiSFJsY2lCcFpEMGlabWxzZEdWeU1GOWtJaUI0UFNJdE15NHdOVEUzTm1VdE1EVWlJSGs5SWprdU9UazVPRGdpSUhkcFpIUm9QU0k1TlNJZ2FHVnBaMmgwUFNJNU5TSWdabWxzZEdWeVZXNXBkSE05SW5WelpYSlRjR0ZqWlU5dVZYTmxJaUJqYjJ4dmNpMXBiblJsY25CdmJHRjBhVzl1TFdacGJIUmxjbk05SW5OU1IwSWlQZzBLUEdabFJteHZiMlFnWm14dmIyUXRiM0JoWTJsMGVUMGlNQ0lnY21WemRXeDBQU0pDWVdOclozSnZkVzVrU1cxaFoyVkdhWGdpTHo0TkNqeG1aVU52Ykc5eVRXRjBjbWw0SUdsdVBTSlRiM1Z5WTJWQmJIQm9ZU0lnZEhsd1pUMGliV0YwY21sNElpQjJZV3gxWlhNOUlqQWdNQ0F3SURBZ01DQXdJREFnTUNBd0lEQWdNQ0F3SURBZ01DQXdJREFnTUNBd0lERXlOeUF3SWk4K0RRbzhabVZQWm1aelpYUWdaSGs5SWpFeklpOCtEUW84Wm1WSFlYVnpjMmxoYmtKc2RYSWdjM1JrUkdWMmFXRjBhVzl1UFNJeE1DNDFJaTgrRFFvOFptVkRiMnh2Y2sxaGRISnBlQ0IwZVhCbFBTSnRZWFJ5YVhnaUlIWmhiSFZsY3owaU1DQXdJREFnTUNBeElEQWdNQ0F3SURBZ01DNHlOalkyTmpjZ01DQXdJREFnTUNBd0xqTTBNVEUzTmlBd0lEQWdNQ0F3TGpNZ01DSXZQZzBLUEdabFFteGxibVFnYlc5a1pUMGlibTl5YldGc0lpQnBiakk5SWtKaFkydG5jbTkxYm1SSmJXRm5aVVpwZUNJZ2NtVnpkV3gwUFNKbFptWmxZM1F4WDJSeWIzQlRhR0ZrYjNjaUx6NE5DanhtWlVKc1pXNWtJRzF2WkdVOUltNXZjbTFoYkNJZ2FXNDlJbE52ZFhKalpVZHlZWEJvYVdNaUlHbHVNajBpWldabVpXTjBNVjlrY205d1UyaGhaRzkzSWlCeVpYTjFiSFE5SW5Ob1lYQmxJaTgrRFFvOEwyWnBiSFJsY2o0TkNqeHNhVzVsWVhKSGNtRmthV1Z1ZENCcFpEMGljR0ZwYm5Rd1gyeHBibVZoY2lJZ2VERTlJalV4TGpZek5URWlJSGt4UFNJeE1ETXVOak0xSWlCNE1qMGlNVEEyTGpZek5TSWdlVEk5SWpRd0xqTTJORGtpSUdkeVlXUnBaVzUwVlc1cGRITTlJblZ6WlhKVGNHRmpaVTl1VlhObElqNE5Danh6ZEc5d0lITjBiM0F0WTI5c2IzSTlJaU5HT0RBM05Ua2lMejROQ2p4emRHOXdJRzltWm5ObGREMGlNU0lnYzNSdmNDMWpiMnh2Y2owaUkwSkRORVU1UXlJdlBnMEtQQzlzYVc1bFlYSkhjbUZrYVdWdWRENE5DanhzYVc1bFlYSkhjbUZrYVdWdWRDQnBaRDBpY0dGcGJuUXhYMnhwYm1WaGNpSWdlREU5SWpVekxqUXhNeklpSUhreFBTSXhNVE11TkRFeklpQjRNajBpTVRJMUxqUXhNeUlnZVRJOUlqTXdMalU0TmpnaUlHZHlZV1JwWlc1MFZXNXBkSE05SW5WelpYSlRjR0ZqWlU5dVZYTmxJajROQ2p4emRHOXdJSE4wYjNBdFkyOXNiM0k5SWlOR1JqUXhOa01pTHo0TkNqeHpkRzl3SUc5bVpuTmxkRDBpTVNJZ2MzUnZjQzFqYjJ4dmNqMGlJMFpHTkVJeVFpSXZQZzBLUEM5c2FXNWxZWEpIY21Ga2FXVnVkRDROQ2p3dlpHVm1jejROQ2p3dmMzWm5QZzBLXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpT1RVaUlHaGxhV2RvZEQwaU1UQTBJaUIyYVdWM1FtOTRQU0l3SURBZ09UVWdNVEEwSWlCbWFXeHNQU0p1YjI1bElpQjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaVBnMEtQR2NnWm1sc2RHVnlQU0oxY213b0kyWnBiSFJsY2pCZlpDa2lQZzBLUEhCaGRHZ2dabWxzYkMxeWRXeGxQU0psZG1WdWIyUmtJaUJqYkdsd0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdROUlrMDBOeTQxSURFMkxqazVPVGxETmpJdU1UTTFOU0F4Tmk0NU9UazVJRGN6TGprNU9Ua2dNamd1T0RZME5DQTNNeTQ1T1RrNUlEUXpMalE1T1RsRE56TXVPVGs1T1NBMU9DNHhNelV6SURZeUxqRXpOVFVnTmprdU9UazVPU0EwTnk0MUlEWTVMams1T1RsRE16SXVPRFkwTkNBMk9TNDVPVGs1SURJeElEVTRMakV6TlRNZ01qRWdORE11TkRrNU9VTXlNU0F5T0M0NE5qUTBJRE15TGpnMk5EUWdNVFl1T1RrNU9TQTBOeTQxSURFMkxqazVPVGxhSWlCbWFXeHNQU0lqUmtZME16WXhJaTgrRFFvOGNHRjBhQ0JtYVd4c0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdOc2FYQXRjblZzWlQwaVpYWmxibTlrWkNJZ1pEMGlUVFEzTGpVZ01UWXVPVGs1T1VNMk1pNHhNelUxSURFMkxqazVPVGtnTnpNdU9UazVPU0F5T0M0NE5qUTBJRGN6TGprNU9Ua2dORE11TkRrNU9VTTNNeTQ1T1RrNUlEVTRMakV6TlRNZ05qSXVNVE0xTlNBMk9TNDVPVGs1SURRM0xqVWdOamt1T1RrNU9VTXpNaTQ0TmpRMElEWTVMams1T1RrZ01qRWdOVGd1TVRNMU15QXlNU0EwTXk0ME9UazVRekl4SURJNExqZzJORFFnTXpJdU9EWTBOQ0F4Tmk0NU9UazVJRFEzTGpVZ01UWXVPVGs1T1ZvaUlHWnBiR3c5SW5WeWJDZ2pjR0ZwYm5Rd1gyeHBibVZoY2lraUx6NE5Dand2Wno0TkNqeHdZWFJvSUdacGJHd3RjblZzWlQwaVpYWmxibTlrWkNJZ1kyeHBjQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmtQU0pOTkRJZ01DNDVPVGs1TXpaSU5URXVPVGs1T1VNMk9DNDFOamcxSURBdU9UazVPVE0ySURneExqazVPVGtnTVRRdU5ETXhNU0E0TVM0NU9UazVJRE13TGprNU9UbFdOREF1T1RrNU9VTTRNUzQ1T1RrNUlEVTNMalUyT0RJZ05qZ3VOVFk0TlNBM01DNDVPVGs0SURVeExqazVPVGtnTnpBdU9UazVPRWcwTWtNeU5TNDBNekUxSURjd0xqazVPVGdnTVRFdU9UazVPU0ExTnk0MU5qZ3lJREV4TGprNU9Ua2dOREF1T1RrNU9WWXpNQzQ1T1RrNVF6RXhMams1T1RrZ01UUXVORE14TVNBeU5TNDBNekUxSURBdU9UazVPVE0ySURReUlEQXVPVGs1T1RNMldpSWdabWxzYkQwaUkwWkdORE0yTVNJdlBnMEtQSEJoZEdnZ1ptbHNiQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmpiR2x3TFhKMWJHVTlJbVYyWlc1dlpHUWlJR1E5SWswME1pQXdMams1T1Rrek5rZzFNUzQ1T1RrNVF6WTRMalUyT0RVZ01DNDVPVGs1TXpZZ09ERXVPVGs1T1NBeE5DNDBNekV4SURneExqazVPVGtnTXpBdU9UazVPVlkwTUM0NU9UazVRemd4TGprNU9Ua2dOVGN1TlRZNE1pQTJPQzQxTmpnMUlEY3dMams1T1RnZ05URXVPVGs1T1NBM01DNDVPVGs0U0RReVF6STFMalF6TVRVZ056QXVPVGs1T0NBeE1TNDVPVGs1SURVM0xqVTJPRElnTVRFdU9UazVPU0EwTUM0NU9UazVWak13TGprNU9UbERNVEV1T1RrNU9TQXhOQzQwTXpFeElESTFMalF6TVRVZ01DNDVPVGs1TXpZZ05ESWdNQzQ1T1RrNU16WmFJaUJtYVd4c1BTSjFjbXdvSTNCaGFXNTBNVjlzYVc1bFlYSXBJaTgrRFFvOGNHRjBhQ0JtYVd4c0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdOc2FYQXRjblZzWlQwaVpYWmxibTlrWkNJZ1pEMGlUVFUxTGprME9USWdNekV1TURBeU5rTTFOUzQ0TlRjMUlETXdMamM1TnpJZ05UVXVOall3TWlBek1DNDJOalUxSURVMUxqUTBNamtnTXpBdU5qWTFOVWcwT0M0NE1qQTVURFUxTGpNMU5qTWdNVGt1T0RrMFF6VTFMalEyTlRJZ01Ua3VOekUwTkNBMU5TNDBOekU0SURFNUxqUTROeUExTlM0ek56TTFJREU1TGpNd01UVkROVFV1TWpjMU1pQXhPUzR4TVRRMElEVTFMakE0TnpRZ01UZ3VPVGs0T0NBMU5DNDRPRFFnTVRndU9UazRPRWcwTlM0NU5ESTVRelExTGpjek1USWdNVGd1T1RrNE9DQTBOUzQxTXpjNElERTVMakV5TXpZZ05EVXVORFF5T0NBeE9TNHpNakUwVERNM0xqQTJNRFlnTXpZdU9ESXhORU16Tmk0NU56UWdNemN1TURBeU1TQXpOaTQ1T0RNMUlETTNMakl4TmpZZ016Y3VNRGcxTVNBek55NHpPRGcyUXpNM0xqRTROelFnTXpjdU5UWXdOeUF6Tnk0ek5qWTNJRE0zTGpZMk5TQXpOeTQxTmpBM0lETTNMalkyTlVnME15NHpNRGRNTXpjdU1EUTFOU0ExTXk0eE9Ea3hRek0yTGprek9EY2dOVE11TkRVME55QXpOeTR3TXpNM0lEVXpMamMyTWpNZ016Y3VNalk1SURVekxqa3hNek5ETXpjdU16VTVOQ0ExTXk0NU56QXpJRE0zTGpRMklEVXpMams1T0RnZ016Y3VOVFl3TVNBMU15NDVPVGc0UXpNM0xqY3lNRFFnTlRNdU9UazRPQ0F6Tnk0NE56ZzJJRFV6TGpreU5qZ2dNemN1T1RnNE1TQTFNeTQzT1RFNFREVTFMamczTURNZ016RXVOakkxTWtNMU5pNHdNVEEySURNeExqUTFNVFVnTlRZdU1EUXdOeUF6TVM0eU1EZzFJRFUxTGprME9USWdNekV1TURBeU5sb2lJR1pwYkd3OUluZG9hWFJsSWk4K0RRbzhaR1ZtY3o0TkNqeG1hV3gwWlhJZ2FXUTlJbVpwYkhSbGNqQmZaQ0lnZUQwaUxUTXVNRFV4TnpabExUQTFJaUI1UFNJNExqazVPVGc0SWlCM2FXUjBhRDBpT1RVaUlHaGxhV2RvZEQwaU9UVWlJR1pwYkhSbGNsVnVhWFJ6UFNKMWMyVnlVM0JoWTJWUGJsVnpaU0lnWTI5c2IzSXRhVzUwWlhKd2IyeGhkR2x2YmkxbWFXeDBaWEp6UFNKelVrZENJajROQ2p4bVpVWnNiMjlrSUdac2IyOWtMVzl3WVdOcGRIazlJakFpSUhKbGMzVnNkRDBpUW1GamEyZHliM1Z1WkVsdFlXZGxSbWw0SWk4K0RRbzhabVZEYjJ4dmNrMWhkSEpwZUNCcGJqMGlVMjkxY21ObFFXeHdhR0VpSUhSNWNHVTlJbTFoZEhKcGVDSWdkbUZzZFdWelBTSXdJREFnTUNBd0lEQWdNQ0F3SURBZ01DQXdJREFnTUNBd0lEQWdNQ0F3SURBZ01DQXhNamNnTUNJdlBnMEtQR1psVDJabWMyVjBJR1I1UFNJeE15SXZQZzBLUEdabFIyRjFjM05wWVc1Q2JIVnlJSE4wWkVSbGRtbGhkR2x2YmowaU1UQXVOU0l2UGcwS1BHWmxRMjlzYjNKTllYUnlhWGdnZEhsd1pUMGliV0YwY21sNElpQjJZV3gxWlhNOUlqQWdNQ0F3SURBZ01DNDRPVGd3TXprZ01DQXdJREFnTUNBd0xqRXhOelkwTnlBd0lEQWdNQ0F3SURBdU5ETTFNamswSURBZ01DQXdJREF1TXlBd0lpOCtEUW84Wm1WQ2JHVnVaQ0J0YjJSbFBTSnViM0p0WVd3aUlHbHVNajBpUW1GamEyZHliM1Z1WkVsdFlXZGxSbWw0SWlCeVpYTjFiSFE5SW1WbVptVmpkREZmWkhKdmNGTm9ZV1J2ZHlJdlBnMEtQR1psUW14bGJtUWdiVzlrWlQwaWJtOXliV0ZzSWlCcGJqMGlVMjkxY21ObFIzSmhjR2hwWXlJZ2FXNHlQU0psWm1abFkzUXhYMlJ5YjNCVGFHRmtiM2NpSUhKbGMzVnNkRDBpYzJoaGNHVWlMejROQ2p3dlptbHNkR1Z5UGcwS1BHeHBibVZoY2tkeVlXUnBaVzUwSUdsa1BTSndZV2x1ZERCZmJHbHVaV0Z5SWlCNE1UMGlOVEV1TmpNMU1TSWdlVEU5SWpFd01pNDJNelVpSUhneVBTSXhNRFl1TmpNMUlpQjVNajBpTXprdU16WTBPU0lnWjNKaFpHbGxiblJWYm1sMGN6MGlkWE5sY2xOd1lXTmxUMjVWYzJVaVBnMEtQSE4wYjNBZ2MzUnZjQzFqYjJ4dmNqMGlJMFk0TURjMU9TSXZQZzBLUEhOMGIzQWdiMlptYzJWMFBTSXhJaUJ6ZEc5d0xXTnZiRzl5UFNJalFrTTBSVGxESWk4K0RRbzhMMnhwYm1WaGNrZHlZV1JwWlc1MFBnMEtQR3hwYm1WaGNrZHlZV1JwWlc1MElHbGtQU0p3WVdsdWRERmZiR2x1WldGeUlpQjRNVDBpTlRJdU5ERXpNaUlnZVRFOUlqRXhNeTQwTVRNaUlIZ3lQU0l4TWpRdU5ERXpJaUI1TWowaU16QXVOVGcyT0NJZ1ozSmhaR2xsYm5SVmJtbDBjejBpZFhObGNsTndZV05sVDI1VmMyVWlQZzBLUEhOMGIzQWdjM1J2Y0MxamIyeHZjajBpSTBZNE1EYzFPU0l2UGcwS1BITjBiM0FnYjJabWMyVjBQU0l4SWlCemRHOXdMV052Ykc5eVBTSWpRa00wUlRsRElpOCtEUW84TDJ4cGJtVmhja2R5WVdScFpXNTBQZzBLUEM5a1pXWnpQZzBLUEM5emRtYytEUW89XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpT1RVaUlHaGxhV2RvZEQwaU1UQTBJaUIyYVdWM1FtOTRQU0l3SURBZ09UVWdNVEEwSWlCbWFXeHNQU0p1YjI1bElpQjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaVBnMEtQR2NnWm1sc2RHVnlQU0oxY213b0kyWnBiSFJsY2pCZlpDa2lQZzBLUEhCaGRHZ2dabWxzYkMxeWRXeGxQU0psZG1WdWIyUmtJaUJqYkdsd0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdROUlrMDBOeTQwT1RrNUlERTJMams1T1RsRE5qSXVNVE0xTkNBeE5pNDVPVGs1SURjMElESTRMamcyTkRRZ056UWdORE11TkRrNU9VTTNOQ0ExT0M0eE16VXpJRFl5TGpFek5UUWdOamt1T1RrNU9TQTBOeTQwT1RrNUlEWTVMams1T1RsRE16SXVPRFkwTkNBMk9TNDVPVGs1SURJeElEVTRMakV6TlRNZ01qRWdORE11TkRrNU9VTXlNU0F5T0M0NE5qUTBJRE15TGpnMk5EUWdNVFl1T1RrNU9TQTBOeTQwT1RrNUlERTJMams1T1RsYUlpQm1hV3hzUFNJalJrWTBNell4SWk4K0RRbzhMMmMrRFFvOGNHRjBhQ0JtYVd4c0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdOc2FYQXRjblZzWlQwaVpYWmxibTlrWkNJZ1pEMGlUVFF4TGprNU9Ua2dNQzQ1T1RrNU16WklOVEpETmpndU5UWTROU0F3TGprNU9Ua3pOaUE0TWlBeE5DNDBNekV4SURneUlETXdMams1T1RsV05EQXVPVGs1T1VNNE1pQTFOeTQxTmpneUlEWTRMalUyT0RVZ056QXVPVGs1T0NBMU1pQTNNQzQ1T1RrNFNEUXhMams1T1RsRE1qVXVORE14TkNBM01DNDVPVGs0SURFeExqazVPVGtnTlRjdU5UWTRNaUF4TVM0NU9UazVJRFF3TGprNU9UbFdNekF1T1RrNU9VTXhNUzQ1T1RrNUlERTBMalF6TVRFZ01qVXVORE14TkNBd0xqazVPVGt6TmlBME1TNDVPVGs1SURBdU9UazVPVE0yV2lJZ1ptbHNiRDBpSTBaR05ETTJNU0l2UGcwS1BIQmhkR2dnWm1sc2JDMXlkV3hsUFNKbGRtVnViMlJrSWlCamJHbHdMWEoxYkdVOUltVjJaVzV2WkdRaUlHUTlJazAwTVM0NU9UazVJREF1T1RrNU9UTTJTRFV5UXpZNExqVTJPRFVnTUM0NU9UazVNellnT0RJZ01UUXVORE14TVNBNE1pQXpNQzQ1T1RrNVZqUXdMams1T1RsRE9ESWdOVGN1TlRZNE1pQTJPQzQxTmpnMUlEY3dMams1T1RnZ05USWdOekF1T1RrNU9FZzBNUzQ1T1RrNVF6STFMalF6TVRRZ056QXVPVGs1T0NBeE1TNDVPVGs1SURVM0xqVTJPRElnTVRFdU9UazVPU0EwTUM0NU9UazVWak13TGprNU9UbERNVEV1T1RrNU9TQXhOQzQwTXpFeElESTFMalF6TVRRZ01DNDVPVGs1TXpZZ05ERXVPVGs1T1NBd0xqazVPVGt6TmxvaUlHWnBiR3c5SW5WeWJDZ2pjR0ZwYm5Rd1gyeHBibVZoY2lraUx6NE5Danh3WVhSb0lHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSWdZMnhwY0MxeWRXeGxQU0psZG1WdWIyUmtJaUJrUFNKTk5qUXVOVFEwTVNBek1TNDROVGcxUXpZMExqVTBPVGdnTXpFdU9UWXdOeUEyTkM0MU5ESTBJRE15TGpBMk5EUWdOalF1TlRFMk9DQXpNaTR4TmpnM1REWXlMakl6TkRZZ05ERXVNek0wT0VNMk1pNHhNVGswSURReExqYzVOakVnTmpFdU56QTNNaUEwTWk0eE1qRTBJRFl4TGpJek16UWdOREl1TVRJME1VdzBOeTQxTXprNUlEUXlMakU1TXpSRE5EY3VOVE00TWlBME1pNHhPVE0wSURRM0xqVXpOalFnTkRJdU1Ua3pOQ0EwTnk0MU16UTJJRFF5TGpFNU16UklNek11T0RReE1VTXpNeTR6TmpRMklEUXlMakU1TXpRZ016SXVPVFE1TmlBME1TNDROamN4SURNeUxqZ3pORFlnTkRFdU5EQXpNVXd6TUM0MU5USXpJRE15TGpJd01rTXpNQzQxTWpVNUlETXlMakE1TlRZZ016QXVOVEU0TkNBek1TNDVPRGcySURNd0xqVXlOU0F6TVM0NE9ETTRRekk1TGpZME1qRWdNekV1TmpBME55QXlPU0F6TUM0M056VXlJREk1SURJNUxqYzVOemRETWprZ01qZ3VOVGt3T0NBeU9TNDVOemN5SURJM0xqWXdPVFlnTXpFdU1UYzROU0F5Tnk0Mk1EazJRek15TGpNM09UZ2dNamN1TmpBNU5pQXpNeTR6TlRjZ01qZ3VOVGt3T0NBek15NHpOVGNnTWprdU56azNOME16TXk0ek5UY2dNekF1TkRjMk9DQXpNeTR3TkRjZ016RXVNRGcwTXlBek1pNDFOakUySURNeExqUTROalJNTXpVdU5ERTVJRE0wTGpNM05qaERNell1TVRReE1pQXpOUzR4TURjMElETTNMakUwTXpJZ016VXVOVEkyT0NBek9DNHhOamcwSURNMUxqVXlOamhETXprdU16Z3dOeUF6TlM0MU1qWTRJRFF3TGpVek5qUWdNelF1T1RRNE15QTBNUzR5TmpReklETXpMams0VERRMUxqazJNRElnTWpjdU56TXlNVU0wTlM0MU5qVTRJREkzTGpNek5qVWdORFV1TXpJeE5DQXlOaTQzT0RrM0lEUTFMak15TVRRZ01qWXVNVGcyTlVNME5TNHpNakUwSURJMExqazRJRFEyTGpJNU9EWWdNak11T1RrNE15QTBOeTQwT1RrNUlESXpMams1T0RORE5EZ3VOekF4TWlBeU15NDVPVGd6SURRNUxqWTNPRFFnTWpRdU9UZ2dORGt1TmpjNE5DQXlOaTR4T0RZMVF6UTVMalkzT0RRZ01qWXVOemN4TkNBME9TNDBORGN5SURJM0xqTXdNaUEwT1M0d056TXpJREkzTGpZNU5VTTBPUzR3TnpRMUlESTNMalk1TmpjZ05Ea3VNRGMyTVNBeU55NDJPVGd6SURRNUxqQTNOek1nTWpjdU5qazVPVXcxTXk0M016a3hJRE16TGprMk5EbEROVFF1TkRZMk9DQXpOQzQ1TkRJMElEVTFMall5TmpZZ016VXVOVEkyT0NBMU5pNDROREl6SURNMUxqVXlOamhETlRjdU9EYzNJRE0xTGpVeU5qZ2dOVGd1T0RVZ016VXVNVEl4T1NBMU9TNDFPREUwSURNMExqTTROelZNTmpJdU5EVTJPQ0F6TVM0ME9UazVRell4TGprMk1USWdNekV1TURrNE15QTJNUzQyTkRJNUlETXdMalE0TlRRZ05qRXVOalF5T1NBeU9TNDNPVGMzUXpZeExqWTBNamtnTWpndU5Ua3dPQ0EyTWk0Mk1qQXlJREkzTGpZd09UWWdOak11T0RJeE5TQXlOeTQyTURrMlF6WTFMakF5TWpjZ01qY3VOakE1TmlBMk5pQXlPQzQxT1RBNElEWTJJREk1TGpjNU56ZEROallnTXpBdU56UTRPQ0EyTlM0ek9UQTJJRE14TGpVMU9EVWdOalF1TlRRME1TQXpNUzQ0TlRnMVdrMDJNaTR3TVRFNElEUTFMalExTmpsRE5qSXVNREV4T0NBME5DNDRPREl4SURZeExqVTBOek1nTkRRdU5ERTFOU0EyTUM0NU56UTBJRFEwTGpReE5UVklNelF1TVRRd09FTXpNeTQxTmpjNUlEUTBMalF4TlRVZ016TXVNVEF6TkNBME5DNDRPREl4SURNekxqRXdNelFnTkRVdU5EVTJPVlkwTnk0NU5UWTVRek16TGpFd016UWdORGd1TlRNeU55QXpNeTQxTmpjNUlEUTRMams1T0RnZ016UXVNVFF3T0NBME9DNDVPVGc0U0RZd0xqazNORFJETmpFdU5UUTNNeUEwT0M0NU9UZzRJRFl5TGpBeE1UZ2dORGd1TlRNeU55QTJNaTR3TVRFNElEUTNMamsxTmpsV05EVXVORFUyT1ZvaUlHWnBiR3c5SW5kb2FYUmxJaTgrRFFvOFpHVm1jejROQ2p4bWFXeDBaWElnYVdROUltWnBiSFJsY2pCZlpDSWdlRDBpTVM0eE5EUTBNV1V0TURVaUlIazlJamd1T1RrNU9EZ2lJSGRwWkhSb1BTSTVOU0lnYUdWcFoyaDBQU0k1TlNJZ1ptbHNkR1Z5Vlc1cGRITTlJblZ6WlhKVGNHRmpaVTl1VlhObElpQmpiMnh2Y2kxcGJuUmxjbkJ2YkdGMGFXOXVMV1pwYkhSbGNuTTlJbk5TUjBJaVBnMEtQR1psUm14dmIyUWdabXh2YjJRdGIzQmhZMmwwZVQwaU1DSWdjbVZ6ZFd4MFBTSkNZV05yWjNKdmRXNWtTVzFoWjJWR2FYZ2lMejROQ2p4bVpVTnZiRzl5VFdGMGNtbDRJR2x1UFNKVGIzVnlZMlZCYkhCb1lTSWdkSGx3WlQwaWJXRjBjbWw0SWlCMllXeDFaWE05SWpBZ01DQXdJREFnTUNBd0lEQWdNQ0F3SURBZ01DQXdJREFnTUNBd0lEQWdNQ0F3SURFeU55QXdJaTgrRFFvOFptVlBabVp6WlhRZ1pIazlJakV6SWk4K0RRbzhabVZIWVhWemMybGhia0pzZFhJZ2MzUmtSR1YyYVdGMGFXOXVQU0l4TUM0MUlpOCtEUW84Wm1WRGIyeHZjazFoZEhKcGVDQjBlWEJsUFNKdFlYUnlhWGdpSUhaaGJIVmxjejBpTUNBd0lEQWdNQ0F3TGprNU1qRTFOeUF3SURBZ01DQXdJREF1TXpRMU1EazRJREFnTUNBd0lEQWdNQzQwTkRjd05Ua2dNQ0F3SURBZ01DNHpJREFpTHo0TkNqeG1aVUpzWlc1a0lHMXZaR1U5SW01dmNtMWhiQ0lnYVc0eVBTSkNZV05yWjNKdmRXNWtTVzFoWjJWR2FYZ2lJSEpsYzNWc2REMGlaV1ptWldOME1WOWtjbTl3VTJoaFpHOTNJaTgrRFFvOFptVkNiR1Z1WkNCdGIyUmxQU0p1YjNKdFlXd2lJR2x1UFNKVGIzVnlZMlZIY21Gd2FHbGpJaUJwYmpJOUltVm1abVZqZERGZlpISnZjRk5vWVdSdmR5SWdjbVZ6ZFd4MFBTSnphR0Z3WlNJdlBnMEtQQzltYVd4MFpYSStEUW84YkdsdVpXRnlSM0poWkdsbGJuUWdhV1E5SW5CaGFXNTBNRjlzYVc1bFlYSWlJSGd4UFNJMU1pNDBNVE15SWlCNU1UMGlNVEV6TGpReE15SWdlREk5SWpFeU5DNDBNVE1pSUhreVBTSXpNQzQxT0RZNElpQm5jbUZrYVdWdWRGVnVhWFJ6UFNKMWMyVnlVM0JoWTJWUGJsVnpaU0krRFFvOGMzUnZjQ0J6ZEc5d0xXTnZiRzl5UFNJalJrWTFPRFU0SWk4K0RRbzhjM1J2Y0NCdlptWnpaWFE5SWpFaUlITjBiM0F0WTI5c2IzSTlJaU5HT0RVM1FUWWlMejROQ2p3dmJHbHVaV0Z5UjNKaFpHbGxiblErRFFvOEwyUmxabk0rRFFvOEwzTjJaejROQ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU9UVWlJR2hsYVdkb2REMGlNVEExSWlCMmFXVjNRbTk0UFNJd0lEQWdPVFVnTVRBMUlpQm1hV3hzUFNKdWIyNWxJaUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lQZzBLUEdjZ1ptbHNkR1Z5UFNKMWNtd29JMlpwYkhSbGNqQmZaQ2tpUGcwS1BIQmhkR2dnWm1sc2JDMXlkV3hsUFNKbGRtVnViMlJrSWlCamJHbHdMWEoxYkdVOUltVjJaVzV2WkdRaUlHUTlJazAwTnk0ME9UazVJREUzTGprNU9UbEROakl1TVRNMU5DQXhOeTQ1T1RrNUlEY3pMams1T1RrZ01qa3VPRFkwTkNBM015NDVPVGs1SURRMExqUTVPVGxETnpNdU9UazVPU0ExT1M0eE16VXpJRFl5TGpFek5UUWdOekF1T1RrNU9TQTBOeTQwT1RrNUlEY3dMams1T1RsRE16SXVPRFkwTkNBM01DNDVPVGs1SURJd0xqazVPVGtnTlRrdU1UTTFNeUF5TUM0NU9UazVJRFEwTGpRNU9UbERNakF1T1RrNU9TQXlPUzQ0TmpRMElETXlMamcyTkRRZ01UY3VPVGs1T1NBME55NDBPVGs1SURFM0xqazVPVGxhSWlCbWFXeHNQU0lqUmtZME16WXhJaTgrRFFvOGNHRjBhQ0JtYVd4c0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdOc2FYQXRjblZzWlQwaVpYWmxibTlrWkNJZ1pEMGlUVFEzTGpRNU9Ua2dNVGN1T1RrNU9VTTJNaTR4TXpVMElERTNMams1T1RrZ056TXVPVGs1T1NBeU9TNDROalEwSURjekxqazVPVGtnTkRRdU5EazVPVU0zTXk0NU9UazVJRFU1TGpFek5UTWdOakl1TVRNMU5DQTNNQzQ1T1RrNUlEUTNMalE1T1RrZ056QXVPVGs1T1VNek1pNDROalEwSURjd0xqazVPVGtnTWpBdU9UazVPU0ExT1M0eE16VXpJREl3TGprNU9Ua2dORFF1TkRrNU9VTXlNQzQ1T1RrNUlESTVMamcyTkRRZ016SXVPRFkwTkNBeE55NDVPVGs1SURRM0xqUTVPVGtnTVRjdU9UazVPVm9pSUdacGJHdzlJblZ5YkNnamNHRnBiblF3WDJ4cGJtVmhjaWtpTHo0TkNqd3ZaejROQ2p4d1lYUm9JR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0lnWTJ4cGNDMXlkV3hsUFNKbGRtVnViMlJrSWlCa1BTSk5OREl1T1RrNU9TQXdMams1T1Rrek5rZzFNME0yT1M0MU5qZzFJREF1T1RrNU9UTTJJRGd6SURFMExqUXpNVEVnT0RNZ016QXVPVGs1T1ZZME1DNDVPVGs1UXpneklEVTNMalUyT0RJZ05qa3VOVFk0TlNBM01DNDVPVGs0SURVeklEY3dMams1T1RoSU5ESXVPVGs1T1VNeU5pNDBNekUwSURjd0xqazVPVGdnTVRJdU9UazVPU0ExTnk0MU5qZ3lJREV5TGprNU9Ua2dOREF1T1RrNU9WWXpNQzQ1T1RrNVF6RXlMams1T1RrZ01UUXVORE14TVNBeU5pNDBNekUwSURBdU9UazVPVE0ySURReUxqazVPVGtnTUM0NU9UazVNelphSWlCbWFXeHNQU0lqUmtZME16WXhJaTgrRFFvOGNHRjBhQ0JtYVd4c0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdOc2FYQXRjblZzWlQwaVpYWmxibTlrWkNJZ1pEMGlUVFF5TGprNU9Ua2dNQzQ1T1RrNU16WklOVE5ETmprdU5UWTROU0F3TGprNU9Ua3pOaUE0TXlBeE5DNDBNekV4SURneklETXdMams1T1RsV05EQXVPVGs1T1VNNE15QTFOeTQxTmpneUlEWTVMalUyT0RVZ056QXVPVGs1T0NBMU15QTNNQzQ1T1RrNFNEUXlMams1T1RsRE1qWXVORE14TkNBM01DNDVPVGs0SURFeUxqazVPVGtnTlRjdU5UWTRNaUF4TWk0NU9UazVJRFF3TGprNU9UbFdNekF1T1RrNU9VTXhNaTQ1T1RrNUlERTBMalF6TVRFZ01qWXVORE14TkNBd0xqazVPVGt6TmlBME1pNDVPVGs1SURBdU9UazVPVE0yV2lJZ1ptbHNiRDBpZFhKc0tDTndZV2x1ZERGZmJHbHVaV0Z5S1NJdlBnMEtQSEJoZEdnZ1ptbHNiQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmpiR2x3TFhKMWJHVTlJbVYyWlc1dlpHUWlJR1E5SWswMk1DNHdPVGs1SURJeExqazVPVFJJTXpZdU9VTXpOUzR6TURRNUlESXhMams1T1RRZ016TXVPVGs1T1NBeU15NHpNRE0zSURNekxqazVPVGtnTWpRdU9EazRPRlkxTUM0NU9UZzRURE01TGpjNU9Ua2dORFV1TVRrNE9FZzJNQzR3T1RrNVF6WXhMalk1TlNBME5TNHhPVGc0SURZeUxqazVPVGtnTkRNdU9EazBJRFl5TGprNU9Ua2dOREl1TWprNE9GWXlOQzQ0T1RnNFF6WXlMams1T1RrZ01qTXVNekF6TnlBMk1TNDJPVFVnTWpFdU9UazVOQ0EyTUM0d09UazVJREl4TGprNU9UUmFJaUJtYVd4c1BTSWpSa1ZHUVVaRElpOCtEUW84WkdWbWN6NE5DanhtYVd4MFpYSWdhV1E5SW1acGJIUmxjakJmWkNJZ2VEMGlMVGt1T1RFNE1qRmxMVEExSWlCNVBTSTVMams1T1RnNElpQjNhV1IwYUQwaU9UVWlJR2hsYVdkb2REMGlPVFVpSUdacGJIUmxjbFZ1YVhSelBTSjFjMlZ5VTNCaFkyVlBibFZ6WlNJZ1kyOXNiM0l0YVc1MFpYSndiMnhoZEdsdmJpMW1hV3gwWlhKelBTSnpVa2RDSWo0TkNqeG1aVVpzYjI5a0lHWnNiMjlrTFc5d1lXTnBkSGs5SWpBaUlISmxjM1ZzZEQwaVFtRmphMmR5YjNWdVpFbHRZV2RsUm1sNElpOCtEUW84Wm1WRGIyeHZjazFoZEhKcGVDQnBiajBpVTI5MWNtTmxRV3h3YUdFaUlIUjVjR1U5SW0xaGRISnBlQ0lnZG1Gc2RXVnpQU0l3SURBZ01DQXdJREFnTUNBd0lEQWdNQ0F3SURBZ01DQXdJREFnTUNBd0lEQWdNQ0F4TWpjZ01DSXZQZzBLUEdabFQyWm1jMlYwSUdSNVBTSXhNeUl2UGcwS1BHWmxSMkYxYzNOcFlXNUNiSFZ5SUhOMFpFUmxkbWxoZEdsdmJqMGlNVEF1TlNJdlBnMEtQR1psUTI5c2IzSk5ZWFJ5YVhnZ2RIbHdaVDBpYldGMGNtbDRJaUIyWVd4MVpYTTlJakFnTUNBd0lEQWdNQzQ1TkRrd01pQXdJREFnTUNBd0lEQXVOVEF4T1RZeElEQWdNQ0F3SURBZ01DNHlOelExTVNBd0lEQWdNQ0F3TGpNZ01DSXZQZzBLUEdabFFteGxibVFnYlc5a1pUMGlibTl5YldGc0lpQnBiakk5SWtKaFkydG5jbTkxYm1SSmJXRm5aVVpwZUNJZ2NtVnpkV3gwUFNKbFptWmxZM1F4WDJSeWIzQlRhR0ZrYjNjaUx6NE5DanhtWlVKc1pXNWtJRzF2WkdVOUltNXZjbTFoYkNJZ2FXNDlJbE52ZFhKalpVZHlZWEJvYVdNaUlHbHVNajBpWldabVpXTjBNVjlrY205d1UyaGhaRzkzSWlCeVpYTjFiSFE5SW5Ob1lYQmxJaTgrRFFvOEwyWnBiSFJsY2o0TkNqeHNhVzVsWVhKSGNtRmthV1Z1ZENCcFpEMGljR0ZwYm5Rd1gyeHBibVZoY2lJZ2VERTlJalV4TGpZek5URWlJSGt4UFNJeE1ETXVOak0xSWlCNE1qMGlNVEEyTGpZek5TSWdlVEk5SWpRd0xqTTJORGtpSUdkeVlXUnBaVzUwVlc1cGRITTlJblZ6WlhKVGNHRmpaVTl1VlhObElqNE5Danh6ZEc5d0lITjBiM0F0WTI5c2IzSTlJaU5HT0RBM05Ua2lMejROQ2p4emRHOXdJRzltWm5ObGREMGlNU0lnYzNSdmNDMWpiMnh2Y2owaUkwSkRORVU1UXlJdlBnMEtQQzlzYVc1bFlYSkhjbUZrYVdWdWRENE5DanhzYVc1bFlYSkhjbUZrYVdWdWRDQnBaRDBpY0dGcGJuUXhYMnhwYm1WaGNpSWdlREU5SWpVekxqUXhNeklpSUhreFBTSXhNVE11TkRFeklpQjRNajBpTVRJMUxqUXhNeUlnZVRJOUlqTXdMalU0TmpnaUlHZHlZV1JwWlc1MFZXNXBkSE05SW5WelpYSlRjR0ZqWlU5dVZYTmxJajROQ2p4emRHOXdJSE4wYjNBdFkyOXNiM0k5SWlOR05EWkNORFVpTHo0TkNqeHpkRzl3SUc5bVpuTmxkRDBpTVNJZ2MzUnZjQzFqYjJ4dmNqMGlJMFZGUVRnME9TSXZQZzBLUEM5c2FXNWxZWEpIY21Ga2FXVnVkRDROQ2p3dlpHVm1jejROQ2p3dmMzWm5QZzBLXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpT1RZaUlHaGxhV2RvZEQwaU1UQTBJaUIyYVdWM1FtOTRQU0l3SURBZ09UWWdNVEEwSWlCbWFXeHNQU0p1YjI1bElpQjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaVBnMEtQR2NnWm1sc2RHVnlQU0oxY213b0kyWnBiSFJsY2pCZlpDa2lQZzBLUEhCaGRHZ2dabWxzYkMxeWRXeGxQU0psZG1WdWIyUmtJaUJqYkdsd0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdROUlrMDBPQzR5TVRReUlERTJMams1T1RsRE5qSXVPRE0yTnlBeE5pNDVPVGs1SURjMExqWTVNRFVnTWpndU9EWTBOQ0EzTkM0Mk9UQTFJRFF6TGpRNU9UbEROelF1Tmprd05TQTFPQzR4TXpVeklEWXlMamd6TmpjZ05qa3VPVGs1T1NBME9DNHlNVFF5SURZNUxqazVPVGxETXpNdU5Ua3hPU0EyT1M0NU9UazVJREl4TGpjek9ERWdOVGd1TVRNMU15QXlNUzQzTXpneElEUXpMalE1T1RsRE1qRXVOek00TVNBeU9DNDROalEwSURNekxqVTVNVGtnTVRZdU9UazVPU0EwT0M0eU1UUXlJREUyTGprNU9UbGFJaUJtYVd4c1BTSWpSa1kwTXpZeElpOCtEUW84Y0dGMGFDQm1hV3hzTFhKMWJHVTlJbVYyWlc1dlpHUWlJR05zYVhBdGNuVnNaVDBpWlhabGJtOWtaQ0lnWkQwaVRUUTRMakl4TkRJZ01UWXVPVGs1T1VNMk1pNDRNelkzSURFMkxqazVPVGtnTnpRdU5qa3dOU0F5T0M0NE5qUTBJRGMwTGpZNU1EVWdORE11TkRrNU9VTTNOQzQyT1RBMUlEVTRMakV6TlRNZ05qSXVPRE0yTnlBMk9TNDVPVGs1SURRNExqSXhORElnTmprdU9UazVPVU16TXk0MU9URTVJRFk1TGprNU9Ua2dNakV1TnpNNE1TQTFPQzR4TXpVeklESXhMamN6T0RFZ05ETXVORGs1T1VNeU1TNDNNemd4SURJNExqZzJORFFnTXpNdU5Ua3hPU0F4Tmk0NU9UazVJRFE0TGpJeE5ESWdNVFl1T1RrNU9Wb2lJR1pwYkd3OUluVnliQ2dqY0dGcGJuUXdYMnhwYm1WaGNpa2lMejROQ2p3dlp6NE5Danh3WVhSb0lHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSWdZMnhwY0MxeWRXeGxQU0psZG1WdWIyUmtJaUJrUFNKTk5ESXVOekl3TWlBd0xqazVPVGt6TmtnMU1pNDNNVEV5UXpZNUxqSTJORGtnTUM0NU9UazVNellnT0RJdU5qZzBNeUF4TkM0ME16RXhJRGd5TGpZNE5ETWdNekF1T1RrNU9WWTBNQzQ1T1RrNVF6Z3lMalk0TkRNZ05UY3VOVFk0TWlBMk9TNHlOalE1SURjd0xqazVPVGdnTlRJdU56RXhNaUEzTUM0NU9UazRTRFF5TGpjeU1ESkRNall1TVRZMk5pQTNNQzQ1T1RrNElERXlMamMwTnpJZ05UY3VOVFk0TWlBeE1pNDNORGN5SURRd0xqazVPVGxXTXpBdU9UazVPVU14TWk0M05EY3lJREUwTGpRek1URWdNall1TVRZMk5pQXdMams1T1Rrek5pQTBNaTQzTWpBeUlEQXVPVGs1T1RNMldpSWdabWxzYkQwaUkwWkdORE0yTVNJdlBnMEtQSEJoZEdnZ1ptbHNiQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmpiR2x3TFhKMWJHVTlJbVYyWlc1dlpHUWlJR1E5SWswME1pNDNNakF5SURBdU9UazVPVE0yU0RVeUxqY3hNVEpETmprdU1qWTBPU0F3TGprNU9Ua3pOaUE0TWk0Mk9EUXpJREUwTGpRek1URWdPREl1TmpnME15QXpNQzQ1T1RrNVZqUXdMams1T1RsRE9ESXVOamcwTXlBMU55NDFOamd5SURZNUxqSTJORGtnTnpBdU9UazVPQ0ExTWk0M01URXlJRGN3TGprNU9UaElOREl1TnpJd01rTXlOaTR4TmpZMklEY3dMams1T1RnZ01USXVOelEzTWlBMU55NDFOamd5SURFeUxqYzBOeklnTkRBdU9UazVPVll6TUM0NU9UazVRekV5TGpjME56SWdNVFF1TkRNeE1TQXlOaTR4TmpZMklEQXVPVGs1T1RNMklEUXlMamN5TURJZ01DNDVPVGs1TXpaYUlpQm1hV3hzUFNKMWNtd29JM0JoYVc1ME1WOXNhVzVsWVhJcElpOCtEUW84Y0dGMGFDQm1hV3hzTFhKMWJHVTlJbVYyWlc1dlpHUWlJR05zYVhBdGNuVnNaVDBpWlhabGJtOWtaQ0lnWkQwaVRUVXhMakUwTkNBME1TNDJNemN4UXpVeExqTTFOVGdnTkRFdU5ESXlJRFV4TGpRMk1UZ2dOREV1TVRZNE1pQTFNUzQwTmpFNElEUXdMamczTkRkV016Z3VNVFkyTVVnMk1pNDNNREUxVmpRMkxqSTVNalZETmpJdU56QXhOU0EwTnk0d016WTFJRFl5TGpRek9UWWdORGN1TmpjME55QTJNUzQ1TVRVMElEUTRMakl3TkRoRE5qRXVNemt4TkNBME9DNDNNelUwSURZd0xqYzJNVElnTkRrdU1EQXdOU0EyTUM0d01qVTFJRFE1TGpBd01EVklNelV1TkRBME4wTXpOQzQyTmpnM0lEUTVMakF3TURVZ016UXVNRE00TmlBME9DNDNNelUwSURNekxqVXhORFVnTkRndU1qQTBPRU16TWk0NU9UQXpJRFEzTGpZM05EY2dNekl1TnpJNE5DQTBOeTR3TXpZMUlETXlMamN5T0RRZ05EWXVNamt5TlZZek9DNHhOall4U0RRekxqazJPRE5XTkRBdU9EYzBOME0wTXk0NU5qZ3pJRFF4TGpFMk9ESWdORFF1TURjME15QTBNUzQwTWpJZ05EUXVNamcyTVNBME1TNDJNemN4UXpRMExqUTVPQ0EwTVM0NE5URWdORFF1TnpRNE9TQTBNUzQ1TlRnMklEUTFMakF6T0RrZ05ERXVPVFU0TmtnMU1DNHpPVEV5UXpVd0xqWTRNVEVnTkRFdU9UVTROaUExTUM0NU16SXhJRFF4TGpnMU1TQTFNUzR4TkRRZ05ERXVOak0zTVZwTk5Ea3VPRFUyTVNBek9DNHhOall4U0RRMUxqVTNNemxXTkRBdU16TXlPRWcwT1M0NE5UWXhWak00TGpFMk5qRmFUVFl4TGpreE5UUWdNamd1TVRJM05FTTJNUzR6T1RFMElESTNMalU1TmpJZ05qQXVOell4TWlBeU55NHpNekV5SURZd0xqQXlOVFVnTWpjdU16TXhNa2cxTkM0eE16YzJWakkwTGpZeU1qWkROVFF1TVRNM05pQXlOQzR4TnpFZ05UTXVPVGd4TnlBeU15NDNPRGMySURVekxqWTJPVE1nTWpNdU5EY3hRelV6TGpNMU56UWdNak11TVRVMU9TQTFNaTQ1TnpnZ01qSXVPVGszTXlBMU1pNDFNekl5SURJeUxqazVOek5JTkRJdU9EazRRelF5TGpRMU1Ua2dNakl1T1RrM015QTBNaTR3TnpJNUlESXpMakUxTlRrZ05ERXVOell3TmlBeU15NDBOekZETkRFdU5EUTROQ0F5TXk0M09EY3hJRFF4TGpJNU1qTWdNalF1TVRjeElEUXhMakk1TWpNZ01qUXVOakl5TmxZeU55NHpNekV5U0RNMUxqUXdORGRETXpRdU5qWTROeUF5Tnk0ek16RXlJRE0wTGpBek9EWWdNamN1TlRrMk1pQXpNeTQxTVRRMUlESTRMakV5TnpSRE16SXVPVGt3TXlBeU9DNDJOVGNnTXpJdU56STROQ0F5T1M0eU9UUTJJRE15TGpjeU9EUWdNekF1TURNNU9GWXpOaTQxTkRBNFNEWXlMamN3TVRWV016QXVNRE01T0VNMk1pNDNNREUxSURJNUxqSTVORFlnTmpJdU5ETTVOaUF5T0M0Mk5UY2dOakV1T1RFMU5DQXlPQzR4TWpjMFdrMDFNUzQ1T1RZNUlESTNMak16TVRKSU5ETXVORE16TWxZeU5TNHhOalJJTlRFdU9UazJPVll5Tnk0ek16RXlXaUlnWm1sc2JEMGlkMmhwZEdVaUx6NE5DanhrWldaelBnMEtQR1pwYkhSbGNpQnBaRDBpWm1sc2RHVnlNRjlrSWlCNFBTSXdMamN6T0RBMk9DSWdlVDBpT1NJZ2QybGtkR2c5SWprMExqazFNalFpSUdobGFXZG9kRDBpT1RVaUlHWnBiSFJsY2xWdWFYUnpQU0oxYzJWeVUzQmhZMlZQYmxWelpTSWdZMjlzYjNJdGFXNTBaWEp3YjJ4aGRHbHZiaTFtYVd4MFpYSnpQU0p6VWtkQ0lqNE5DanhtWlVac2IyOWtJR1pzYjI5a0xXOXdZV05wZEhrOUlqQWlJSEpsYzNWc2REMGlRbUZqYTJkeWIzVnVaRWx0WVdkbFJtbDRJaTgrRFFvOFptVkRiMnh2Y2sxaGRISnBlQ0JwYmowaVUyOTFjbU5sUVd4d2FHRWlJSFI1Y0dVOUltMWhkSEpwZUNJZ2RtRnNkV1Z6UFNJd0lEQWdNQ0F3SURBZ01DQXdJREFnTUNBd0lEQWdNQ0F3SURBZ01DQXdJREFnTUNBeE1qY2dNQ0l2UGcwS1BHWmxUMlptYzJWMElHUjVQU0l4TXlJdlBnMEtQR1psUjJGMWMzTnBZVzVDYkhWeUlITjBaRVJsZG1saGRHbHZiajBpTVRBdU5TSXZQZzBLUEdabFEyOXNiM0pOWVhSeWFYZ2dkSGx3WlQwaWJXRjBjbWw0SWlCMllXeDFaWE05SWpBZ01DQXdJREFnTVNBd0lEQWdNQ0F3SURBdU1qWTJOalkzSURBZ01DQXdJREFnTUM0ek5ERXhOellnTUNBd0lEQWdNQzR6SURBaUx6NE5DanhtWlVKc1pXNWtJRzF2WkdVOUltNXZjbTFoYkNJZ2FXNHlQU0pDWVdOclozSnZkVzVrU1cxaFoyVkdhWGdpSUhKbGMzVnNkRDBpWldabVpXTjBNVjlrY205d1UyaGhaRzkzSWk4K0RRbzhabVZDYkdWdVpDQnRiMlJsUFNKdWIzSnRZV3dpSUdsdVBTSlRiM1Z5WTJWSGNtRndhR2xqSWlCcGJqSTlJbVZtWm1WamRERmZaSEp2Y0ZOb1lXUnZkeUlnY21WemRXeDBQU0p6YUdGd1pTSXZQZzBLUEM5bWFXeDBaWEkrRFFvOGJHbHVaV0Z5UjNKaFpHbGxiblFnYVdROUluQmhhVzUwTUY5c2FXNWxZWElpSUhneFBTSTFNaTR6TkRVNElpQjVNVDBpTVRBeUxqWXpOU0lnZURJOUlqRXdOeTR6TlRNaUlIa3lQU0l6T1M0ME1UTTRJaUJuY21Ga2FXVnVkRlZ1YVhSelBTSjFjMlZ5VTNCaFkyVlBibFZ6WlNJK0RRbzhjM1J2Y0NCemRHOXdMV052Ykc5eVBTSWpSamd3TnpVNUlpOCtEUW84YzNSdmNDQnZabVp6WlhROUlqRWlJSE4wYjNBdFkyOXNiM0k5SWlOQ1F6UkZPVU1pTHo0TkNqd3ZiR2x1WldGeVIzSmhaR2xsYm5RK0RRbzhiR2x1WldGeVIzSmhaR2xsYm5RZ2FXUTlJbkJoYVc1ME1WOXNhVzVsWVhJaUlIZ3hQU0kxTXk0eE1qUXlJaUI1TVQwaU1URXpMalF4TXlJZ2VESTlJakV5TlM0eE16TWlJSGt5UFNJek1DNDJOVEEzSWlCbmNtRmthV1Z1ZEZWdWFYUnpQU0oxYzJWeVUzQmhZMlZQYmxWelpTSStEUW84YzNSdmNDQnpkRzl3TFdOdmJHOXlQU0lqUmtZME1UWkRJaTgrRFFvOGMzUnZjQ0J2Wm1aelpYUTlJakVpSUhOMGIzQXRZMjlzYjNJOUlpTkdSalJDTWtJaUx6NE5Dand2YkdsdVpXRnlSM0poWkdsbGJuUStEUW84TDJSbFpuTStEUW84TDNOMlp6NE5DZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpT1RZaUlHaGxhV2RvZEQwaU1UQTBJaUIyYVdWM1FtOTRQU0l3SURBZ09UWWdNVEEwSWlCbWFXeHNQU0p1YjI1bElpQjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaVBnMEtQR2NnWm1sc2RHVnlQU0oxY213b0kyWnBiSFJsY2pCZlpDa2lQZzBLUEhCaGRHZ2dabWxzYkMxeWRXeGxQU0psZG1WdWIyUmtJaUJqYkdsd0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdROUlrMDBPQzQwTmpZMElERTJMams1T1RsRE5qTXVNRGc0TnlBeE5pNDVPVGs1SURjMExqazBNalVnTWpndU9EWTBOQ0EzTkM0NU5ESTFJRFF6TGpRNU9UbEROelF1T1RReU5TQTFPQzR4TXpVeklEWXpMakE0T0RjZ05qa3VPVGs1T1NBME9DNDBOalkwSURZNUxqazVPVGxETXpNdU9EUXpPU0EyT1M0NU9UazVJREl4TGprNU1ERWdOVGd1TVRNMU15QXlNUzQ1T1RBeElEUXpMalE1T1RsRE1qRXVPVGt3TVNBeU9DNDROalEwSURNekxqZzBNemtnTVRZdU9UazVPU0EwT0M0ME5qWTBJREUyTGprNU9UbGFJaUJtYVd4c1BTSWpSa1kwTXpZeElpOCtEUW84Y0dGMGFDQm1hV3hzTFhKMWJHVTlJbVYyWlc1dlpHUWlJR05zYVhBdGNuVnNaVDBpWlhabGJtOWtaQ0lnWkQwaVRUUTRMalEyTmpRZ01UWXVPVGs1T1VNMk15NHdPRGczSURFMkxqazVPVGtnTnpRdU9UUXlOU0F5T0M0NE5qUTBJRGMwTGprME1qVWdORE11TkRrNU9VTTNOQzQ1TkRJMUlEVTRMakV6TlRNZ05qTXVNRGc0TnlBMk9TNDVPVGs1SURRNExqUTJOalFnTmprdU9UazVPVU16TXk0NE5ETTVJRFk1TGprNU9Ua2dNakV1T1Rrd01TQTFPQzR4TXpVeklESXhMams1TURFZ05ETXVORGs1T1VNeU1TNDVPVEF4SURJNExqZzJORFFnTXpNdU9EUXpPU0F4Tmk0NU9UazVJRFE0TGpRMk5qUWdNVFl1T1RrNU9Wb2lJR1pwYkd3OUluVnliQ2dqY0dGcGJuUXdYMnhwYm1WaGNpa2lMejROQ2p3dlp6NE5Danh3WVhSb0lHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSWdZMnhwY0MxeWRXeGxQU0psZG1WdWIyUmtJaUJrUFNKTk5ESXVPVGN5TWlBd0xqazVPVGt6TmtnMU1pNDVOak14UXpZNUxqVXhOamdnTUM0NU9UazVNellnT0RJdU9UTTJNaUF4TkM0ME16RXhJRGd5TGprek5qSWdNekF1T1RrNU9WWTBNQzQ1T1RrNVF6Z3lMamt6TmpJZ05UY3VOVFk0TWlBMk9TNDFNVFk0SURjd0xqazVPVGdnTlRJdU9UWXpNU0EzTUM0NU9UazRTRFF5TGprM01qSkRNall1TkRFNE5TQTNNQzQ1T1RrNElERXlMams1T1NBMU55NDFOamd5SURFeUxqazVPU0EwTUM0NU9UazVWak13TGprNU9UbERNVEl1T1RrNUlERTBMalF6TVRFZ01qWXVOREU0TlNBd0xqazVPVGt6TmlBME1pNDVOekl5SURBdU9UazVPVE0yV2lJZ1ptbHNiRDBpSTBaR05ETTJNU0l2UGcwS1BIQmhkR2dnWm1sc2JDMXlkV3hsUFNKbGRtVnViMlJrSWlCamJHbHdMWEoxYkdVOUltVjJaVzV2WkdRaUlHUTlJazAwTWk0NU56SXlJREF1T1RrNU9UTTJTRFV5TGprMk16RkROamt1TlRFMk9DQXdMams1T1Rrek5pQTRNaTQ1TXpZeUlERTBMalF6TVRFZ09ESXVPVE0yTWlBek1DNDVPVGs1VmpRd0xqazVPVGxET0RJdU9UTTJNaUExTnk0MU5qZ3lJRFk1TGpVeE5qZ2dOekF1T1RrNU9DQTFNaTQ1TmpNeElEY3dMams1T1RoSU5ESXVPVGN5TWtNeU5pNDBNVGcxSURjd0xqazVPVGdnTVRJdU9UazVJRFUzTGpVMk9ESWdNVEl1T1RrNUlEUXdMams1T1RsV016QXVPVGs1T1VNeE1pNDVPVGtnTVRRdU5ETXhNU0F5Tmk0ME1UZzFJREF1T1RrNU9UTTJJRFF5TGprM01qSWdNQzQ1T1RrNU16WmFJaUJtYVd4c1BTSjFjbXdvSTNCaGFXNTBNVjlzYVc1bFlYSXBJaTgrRFFvOGNHRjBhQ0JtYVd4c0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdOc2FYQXRjblZzWlQwaVpYWmxibTlrWkNJZ1pEMGlUVFUyTGprd09DQXpNUzR3TURJMlF6VTJMamd4TmpRZ016QXVOemszTWlBMU5pNDJNVGt6SURNd0xqWTJOVFVnTlRZdU5EQXlNU0F6TUM0Mk5qVTFTRFE1TGpjNE5qRk1OVFl1TXpFMU5pQXhPUzQ0T1RSRE5UWXVOREkwTkNBeE9TNDNNVFEwSURVMkxqUXpNVEVnTVRrdU5EZzNJRFUyTGpNek1qa2dNVGt1TXpBeE5VTTFOaTR5TXpRM0lERTVMakV4TkRRZ05UWXVNRFEzSURFNExqazVPRGdnTlRVdU9EUXpOeUF4T0M0NU9UZzRTRFEyTGpreE1EZERORFl1TmprNU1pQXhPQzQ1T1RnNElEUTJMalV3TlRrZ01Ua3VNVEl6TmlBME5pNDBNVEVnTVRrdU16SXhORXd6T0M0d016WXpJRE0yTGpneU1UUkRNemN1T1RRNU9DQXpOeTR3TURJeElETTNMamsxT1RNZ016Y3VNakUyTmlBek9DNHdOakE0SURNM0xqTTRPRFpETXpndU1UWXpJRE0zTGpVMk1EY2dNemd1TXpReU1pQXpOeTQyTmpVZ016Z3VOVE0ySURNM0xqWTJOVWcwTkM0eU56Y3lURE00TGpBeU1USWdOVE11TVRnNU1VTXpOeTQ1TVRRMklEVXpMalExTkRjZ016Z3VNREE1TlNBMU15NDNOakl6SURNNExqSTBORFVnTlRNdU9URXpNME16T0M0ek16UTVJRFV6TGprM01ETWdNemd1TkRNMU5DQTFNeTQ1T1RnNElETTRMalV6TlRRZ05UTXVPVGs0T0VNek9DNDJPVFUySURVekxqazVPRGdnTXpndU9EVXpOaUExTXk0NU1qWTRJRE00TGprMk16RWdOVE11TnpreE9FdzFOaTQ0TWpreUlETXhMall5TlRKRE5UWXVPVFk1TkNBek1TNDBOVEUxSURVMkxqazVPVFVnTXpFdU1qQTROU0ExTmk0NU1EZ2dNekV1TURBeU5sb2lJR1pwYkd3OUluZG9hWFJsSWk4K0RRbzhaR1ZtY3o0TkNqeG1hV3gwWlhJZ2FXUTlJbVpwYkhSbGNqQmZaQ0lnZUQwaU1DNDVPVEF4TVRJaUlIazlJamtpSUhkcFpIUm9QU0k1TkM0NU5USTBJaUJvWldsbmFIUTlJamsxSWlCbWFXeDBaWEpWYm1sMGN6MGlkWE5sY2xOd1lXTmxUMjVWYzJVaUlHTnZiRzl5TFdsdWRHVnljRzlzWVhScGIyNHRabWxzZEdWeWN6MGljMUpIUWlJK0RRbzhabVZHYkc5dlpDQm1iRzl2WkMxdmNHRmphWFI1UFNJd0lpQnlaWE4xYkhROUlrSmhZMnRuY205MWJtUkpiV0ZuWlVacGVDSXZQZzBLUEdabFEyOXNiM0pOWVhSeWFYZ2dhVzQ5SWxOdmRYSmpaVUZzY0doaElpQjBlWEJsUFNKdFlYUnlhWGdpSUhaaGJIVmxjejBpTUNBd0lEQWdNQ0F3SURBZ01DQXdJREFnTUNBd0lEQWdNQ0F3SURBZ01DQXdJREFnTVRJM0lEQWlMejROQ2p4bVpVOW1abk5sZENCa2VUMGlNVE1pTHo0TkNqeG1aVWRoZFhOemFXRnVRbXgxY2lCemRHUkVaWFpwWVhScGIyNDlJakV3TGpVaUx6NE5DanhtWlVOdmJHOXlUV0YwY21sNElIUjVjR1U5SW0xaGRISnBlQ0lnZG1Gc2RXVnpQU0l3SURBZ01DQXdJREF1T0RrNE1ETTVJREFnTUNBd0lEQWdNQzR4TVRjMk5EY2dNQ0F3SURBZ01DQXdMalF6TlRJNU5DQXdJREFnTUNBd0xqTWdNQ0l2UGcwS1BHWmxRbXhsYm1RZ2JXOWtaVDBpYm05eWJXRnNJaUJwYmpJOUlrSmhZMnRuY205MWJtUkpiV0ZuWlVacGVDSWdjbVZ6ZFd4MFBTSmxabVpsWTNReFgyUnliM0JUYUdGa2IzY2lMejROQ2p4bVpVSnNaVzVrSUcxdlpHVTlJbTV2Y20xaGJDSWdhVzQ5SWxOdmRYSmpaVWR5WVhCb2FXTWlJR2x1TWowaVpXWm1aV04wTVY5a2NtOXdVMmhoWkc5M0lpQnlaWE4xYkhROUluTm9ZWEJsSWk4K0RRbzhMMlpwYkhSbGNqNE5DanhzYVc1bFlYSkhjbUZrYVdWdWRDQnBaRDBpY0dGcGJuUXdYMnhwYm1WaGNpSWdlREU5SWpVeUxqVTVOemdpSUhreFBTSXhNREl1TmpNMUlpQjRNajBpTVRBM0xqWXdOU0lnZVRJOUlqTTVMalF4TXpnaUlHZHlZV1JwWlc1MFZXNXBkSE05SW5WelpYSlRjR0ZqWlU5dVZYTmxJajROQ2p4emRHOXdJSE4wYjNBdFkyOXNiM0k5SWlOR09EQTNOVGtpTHo0TkNqeHpkRzl3SUc5bVpuTmxkRDBpTVNJZ2MzUnZjQzFqYjJ4dmNqMGlJMEpETkVVNVF5SXZQZzBLUEM5c2FXNWxZWEpIY21Ga2FXVnVkRDROQ2p4c2FXNWxZWEpIY21Ga2FXVnVkQ0JwWkQwaWNHRnBiblF4WDJ4cGJtVmhjaUlnZURFOUlqVXpMak0zTmpFaUlIa3hQU0l4TVRNdU5ERXpJaUI0TWowaU1USTFMak00TlNJZ2VUSTlJak13TGpZMU1EY2lJR2R5WVdScFpXNTBWVzVwZEhNOUluVnpaWEpUY0dGalpVOXVWWE5sSWo0TkNqeHpkRzl3SUhOMGIzQXRZMjlzYjNJOUlpTkdPREEzTlRraUx6NE5Danh6ZEc5d0lHOW1abk5sZEQwaU1TSWdjM1J2Y0MxamIyeHZjajBpSTBKRE5FVTVReUl2UGcwS1BDOXNhVzVsWVhKSGNtRmthV1Z1ZEQ0TkNqd3ZaR1ZtY3o0TkNqd3ZjM1puUGcwS1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU9UWWlJR2hsYVdkb2REMGlNVEEwSWlCMmFXVjNRbTk0UFNJd0lEQWdPVFlnTVRBMElpQm1hV3hzUFNKdWIyNWxJaUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lQZzBLUEdjZ1ptbHNkR1Z5UFNKMWNtd29JMlpwYkhSbGNqQmZaQ2tpUGcwS1BIQmhkR2dnWm1sc2JDMXlkV3hsUFNKbGRtVnViMlJrSWlCamJHbHdMWEoxYkdVOUltVjJaVzV2WkdRaUlHUTlJazAwTnk0NU5UazJJREUyTGprNU9UbEROakl1TlRneUlERTJMams1T1RrZ056UXVORE0xT1NBeU9DNDROalEwSURjMExqUXpOVGtnTkRNdU5EazVPVU0zTkM0ME16VTVJRFU0TGpFek5UTWdOakl1TlRneUlEWTVMams1T1RrZ05EY3VPVFU1TmlBMk9TNDVPVGs1UXpNekxqTXpOeklnTmprdU9UazVPU0F5TVM0ME9ETTBJRFU0TGpFek5UTWdNakV1TkRnek5DQTBNeTQwT1RrNVF6SXhMalE0TXpRZ01qZ3VPRFkwTkNBek15NHpNemN5SURFMkxqazVPVGtnTkRjdU9UVTVOaUF4Tmk0NU9UazVXaUlnWm1sc2JEMGlJMFpHTkRNMk1TSXZQZzBLUEM5blBnMEtQSEJoZEdnZ1ptbHNiQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmpiR2x3TFhKMWJHVTlJbVYyWlc1dlpHUWlJR1E5SWswME1pNDBOalV5SURBdU9UazVPVE0yU0RVeUxqUTFOalJETmprdU1ERXdNU0F3TGprNU9Ua3pOaUE0TWk0ME1qazFJREUwTGpRek1URWdPREl1TkRJNU5TQXpNQzQ1T1RrNVZqUXdMams1T1RsRE9ESXVOREk1TlNBMU55NDFOamd5SURZNUxqQXhNREVnTnpBdU9UazVPQ0ExTWk0ME5UWTBJRGN3TGprNU9UaElOREl1TkRZMU1rTXlOUzQ1TVRFMklEY3dMams1T1RnZ01USXVORGt5TWlBMU55NDFOamd5SURFeUxqUTVNaklnTkRBdU9UazVPVll6TUM0NU9UazVRekV5TGpRNU1qSWdNVFF1TkRNeE1TQXlOUzQ1TVRFMklEQXVPVGs1T1RNMklEUXlMalEyTlRJZ01DNDVPVGs1TXpaYUlpQm1hV3hzUFNJalJrWTBNell4SWk4K0RRbzhjR0YwYUNCbWFXeHNMWEoxYkdVOUltVjJaVzV2WkdRaUlHTnNhWEF0Y25Wc1pUMGlaWFpsYm05a1pDSWdaRDBpVFRReUxqUTJOVElnTUM0NU9UazVNelpJTlRJdU5EVTJORU0yT1M0d01UQXhJREF1T1RrNU9UTTJJRGd5TGpReU9UVWdNVFF1TkRNeE1TQTRNaTQwTWprMUlETXdMams1T1RsV05EQXVPVGs1T1VNNE1pNDBNamsxSURVM0xqVTJPRElnTmprdU1ERXdNU0EzTUM0NU9UazRJRFV5TGpRMU5qUWdOekF1T1RrNU9FZzBNaTQwTmpVeVF6STFMamt4TVRZZ056QXVPVGs1T0NBeE1pNDBPVEl5SURVM0xqVTJPRElnTVRJdU5Ea3lNaUEwTUM0NU9UazVWak13TGprNU9UbERNVEl1TkRreU1pQXhOQzQwTXpFeElESTFMamt4TVRZZ01DNDVPVGs1TXpZZ05ESXVORFkxTWlBd0xqazVPVGt6TmxvaUlHWnBiR3c5SW5WeWJDZ2pjR0ZwYm5Rd1gyeHBibVZoY2lraUx6NE5Danh3WVhSb0lHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSWdZMnhwY0MxeWRXeGxQU0psZG1WdWIyUmtJaUJrUFNKTk5qUXVPVGc0TmlBek1TNDROVGcxUXpZMExqazVORE1nTXpFdU9UWXdOeUEyTkM0NU9EWTVJRE15TGpBMk5EUWdOalF1T1RZeE5DQXpNaTR4TmpnM1REWXlMalk0TVRFZ05ERXVNek0wT0VNMk1pNDFOall4SURReExqYzVOakVnTmpJdU1UVTBNeUEwTWk0eE1qRTBJRFl4TGpZNE1Ea2dOREl1TVRJME1VdzBOeTQ1T1RrMklEUXlMakU1TXpSRE5EY3VPVGszT1NBME1pNHhPVE0wSURRM0xqazVOaklnTkRJdU1Ua3pOQ0EwTnk0NU9UUTBJRFF5TGpFNU16UklNelF1TXpFek1VTXpNeTQ0TXpjeElEUXlMakU1TXpRZ016TXVOREl5TkNBME1TNDROamN4SURNekxqTXdOelVnTkRFdU5EQXpNVXd6TVM0d01qY3pJRE15TGpJd01rTXpNUzR3TURBNUlETXlMakE1TlRZZ016QXVPVGt6TkNBek1TNDVPRGcySURNeExqQXdNREVnTXpFdU9EZ3pPRU16TUM0eE1UYzVJRE14TGpZd05EY2dNamt1TkRjMk5DQXpNQzQzTnpVeUlESTVMalEzTmpRZ01qa3VOemszTjBNeU9TNDBOelkwSURJNExqVTVNRGdnTXpBdU5EVXlOeUF5Tnk0Mk1EazJJRE14TGpZMU1qa2dNamN1TmpBNU5rTXpNaTQ0TlRNeElESTNMall3T1RZZ016TXVPREk1TkNBeU9DNDFPVEE0SURNekxqZ3lPVFFnTWprdU56azNOME16TXk0NE1qazBJRE13TGpRM05qZ2dNek11TlRFNU55QXpNUzR3T0RReklETXpMakF6TkRnZ016RXVORGcyTkV3ek5TNDRPRGsySURNMExqTTNOamhETXpZdU5qRXhNaUF6TlM0eE1EYzBJRE0zTGpZeE1qTWdNelV1TlRJMk9DQXpPQzQyTXpZMklETTFMalV5TmpoRE16a3VPRFEzT0NBek5TNDFNalk0SURReExqQXdNalVnTXpRdU9UUTRNeUEwTVM0M01qazNJRE16TGprNFREUTJMalF5TVRRZ01qY3VOek15TVVNME5pNHdNamN6SURJM0xqTXpOalVnTkRVdU56Z3pNaUF5Tmk0M09EazNJRFExTGpjNE16SWdNall1TVRnMk5VTTBOUzQzT0RNeUlESTBMams0SURRMkxqYzFPVFVnTWpNdU9UazRNeUEwTnk0NU5UazNJREl6TGprNU9ETkRORGt1TVRVNU9TQXlNeTQ1T1RneklEVXdMakV6TmpNZ01qUXVPVGdnTlRBdU1UTTJNeUF5Tmk0eE9EWTFRelV3TGpFek5qTWdNall1TnpjeE5DQTBPUzQ1TURVeUlESTNMak13TWlBME9TNDFNekUzSURJM0xqWTVOVU0wT1M0MU16STVJREkzTGpZNU5qY2dORGt1TlRNME5TQXlOeTQyT1RneklEUTVMalV6TlRjZ01qY3VOams1T1V3MU5DNHhPVE16SURNekxqazJORGxETlRRdU9USXdNeUF6TkM0NU5ESTBJRFUyTGpBM09URWdNelV1TlRJMk9DQTFOeTR5T1RNM0lETTFMalV5TmpoRE5UZ3VNekkzTlNBek5TNDFNalk0SURVNUxqSTVPVFlnTXpVdU1USXhPU0EyTUM0d016QTBJRE0wTGpNNE56Vk1Oakl1T1RBek1pQXpNUzQwT1RrNVF6WXlMalF3T0RFZ016RXVNRGs0TXlBMk1pNHdPU0F6TUM0ME9EVTBJRFl5TGpBNUlESTVMamM1TnpkRE5qSXVNRGtnTWpndU5Ua3dPQ0EyTXk0d05qWTBJREkzTGpZd09UWWdOalF1TWpZMk5pQXlOeTQyTURrMlF6WTFMalEyTmpnZ01qY3VOakE1TmlBMk5pNDBORE15SURJNExqVTVNRGdnTmpZdU5EUXpNaUF5T1M0M09UYzNRelkyTGpRME16SWdNekF1TnpRNE9DQTJOUzQ0TXpRMElETXhMalUxT0RVZ05qUXVPVGc0TmlBek1TNDROVGcxV2swMk1pNDBOVGcySURRMUxqUTFOamxETmpJdU5EVTROaUEwTkM0NE9ESXhJRFl4TGprNU5EVWdORFF1TkRFMU5TQTJNUzQwTWpJeUlEUTBMalF4TlRWSU16UXVOakV5TmtNek5DNHdOREF5SURRMExqUXhOVFVnTXpNdU5UYzJNU0EwTkM0NE9ESXhJRE16TGpVM05qRWdORFV1TkRVMk9WWTBOeTQ1TlRZNVF6TXpMalUzTmpFZ05EZ3VOVE15TnlBek5DNHdOREF5SURRNExqazVPRGdnTXpRdU5qRXlOaUEwT0M0NU9UZzRTRFl4TGpReU1qSkROakV1T1RrME5TQTBPQzQ1T1RnNElEWXlMalExT0RZZ05EZ3VOVE15TnlBMk1pNDBOVGcySURRM0xqazFOamxXTkRVdU5EVTJPVm9pSUdacGJHdzlJbmRvYVhSbElpOCtEUW84WkdWbWN6NE5DanhtYVd4MFpYSWdhV1E5SW1acGJIUmxjakJmWkNJZ2VEMGlNQzQwT0RNME1UZ2lJSGs5SWpraUlIZHBaSFJvUFNJNU5DNDVOVEkwSWlCb1pXbG5hSFE5SWprMUlpQm1hV3gwWlhKVmJtbDBjejBpZFhObGNsTndZV05sVDI1VmMyVWlJR052Ykc5eUxXbHVkR1Z5Y0c5c1lYUnBiMjR0Wm1sc2RHVnljejBpYzFKSFFpSStEUW84Wm1WR2JHOXZaQ0JtYkc5dlpDMXZjR0ZqYVhSNVBTSXdJaUJ5WlhOMWJIUTlJa0poWTJ0bmNtOTFibVJKYldGblpVWnBlQ0l2UGcwS1BHWmxRMjlzYjNKTllYUnlhWGdnYVc0OUlsTnZkWEpqWlVGc2NHaGhJaUIwZVhCbFBTSnRZWFJ5YVhnaUlIWmhiSFZsY3owaU1DQXdJREFnTUNBd0lEQWdNQ0F3SURBZ01DQXdJREFnTUNBd0lEQWdNQ0F3SURBZ01USTNJREFpTHo0TkNqeG1aVTltWm5ObGRDQmtlVDBpTVRNaUx6NE5DanhtWlVkaGRYTnphV0Z1UW14MWNpQnpkR1JFWlhacFlYUnBiMjQ5SWpFd0xqVWlMejROQ2p4bVpVTnZiRzl5VFdGMGNtbDRJSFI1Y0dVOUltMWhkSEpwZUNJZ2RtRnNkV1Z6UFNJd0lEQWdNQ0F3SURBdU9Ua3lNVFUzSURBZ01DQXdJREFnTUM0ek5EVXdPVGdnTUNBd0lEQWdNQ0F3TGpRME56QTFPU0F3SURBZ01DQXdMak1nTUNJdlBnMEtQR1psUW14bGJtUWdiVzlrWlQwaWJtOXliV0ZzSWlCcGJqSTlJa0poWTJ0bmNtOTFibVJKYldGblpVWnBlQ0lnY21WemRXeDBQU0psWm1abFkzUXhYMlJ5YjNCVGFHRmtiM2NpTHo0TkNqeG1aVUpzWlc1a0lHMXZaR1U5SW01dmNtMWhiQ0lnYVc0OUlsTnZkWEpqWlVkeVlYQm9hV01pSUdsdU1qMGlaV1ptWldOME1WOWtjbTl3VTJoaFpHOTNJaUJ5WlhOMWJIUTlJbk5vWVhCbElpOCtEUW84TDJacGJIUmxjajROQ2p4c2FXNWxZWEpIY21Ga2FXVnVkQ0JwWkQwaWNHRnBiblF3WDJ4cGJtVmhjaUlnZURFOUlqVXlMamcyT1RNaUlIa3hQU0l4TVRNdU5ERXpJaUI0TWowaU1USTBMamczT0NJZ2VUSTlJak13TGpZMU1EY2lJR2R5WVdScFpXNTBWVzVwZEhNOUluVnpaWEpUY0dGalpVOXVWWE5sSWo0TkNqeHpkRzl3SUhOMGIzQXRZMjlzYjNJOUlpTkdSalU0TlRnaUx6NE5Danh6ZEc5d0lHOW1abk5sZEQwaU1TSWdjM1J2Y0MxamIyeHZjajBpSTBZNE5UZEJOaUl2UGcwS1BDOXNhVzVsWVhKSGNtRmthV1Z1ZEQ0TkNqd3ZaR1ZtY3o0TkNqd3ZjM1puUGcwS1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU9UWWlJR2hsYVdkb2REMGlNVEEwSWlCMmFXVjNRbTk0UFNJd0lEQWdPVFlnTVRBMElpQm1hV3hzUFNKdWIyNWxJaUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lQZzBLUEdjZ1ptbHNkR1Z5UFNKMWNtd29JMlpwYkhSbGNqQmZaQ2tpUGcwS1BIQmhkR2dnWm1sc2JDMXlkV3hsUFNKbGRtVnViMlJrSWlCamJHbHdMWEoxYkdVOUltVjJaVzV2WkdRaUlHUTlJazAwTnk0M01ETTVJREUyTGprNU9UbEROakl1TXpJMk15QXhOaTQ1T1RrNUlEYzBMakU0TURFZ01qZ3VPRFkwTkNBM05DNHhPREF4SURRekxqUTVPVGxETnpRdU1UZ3dNU0ExT0M0eE16VXpJRFl5TGpNeU5qTWdOamt1T1RrNU9TQTBOeTQzTURNNUlEWTVMams1T1RsRE16TXVNRGd4TmlBMk9TNDVPVGs1SURJeExqSXlOemNnTlRndU1UTTFNeUF5TVM0eU1qYzNJRFF6TGpRNU9UbERNakV1TWpJM055QXlPQzQ0TmpRMElETXpMakE0TVRZZ01UWXVPVGs1T1NBME55NDNNRE01SURFMkxqazVPVGxhSWlCbWFXeHNQU0lqUmtZME16WXhJaTgrRFFvOGNHRjBhQ0JtYVd4c0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdOc2FYQXRjblZzWlQwaVpYWmxibTlrWkNJZ1pEMGlUVFEzTGpjd016a2dNVFl1T1RrNU9VTTJNaTR6TWpZeklERTJMams1T1RrZ056UXVNVGd3TVNBeU9DNDROalEwSURjMExqRTRNREVnTkRNdU5EazVPVU0zTkM0eE9EQXhJRFU0TGpFek5UTWdOakl1TXpJMk15QTJPUzQ1T1RrNUlEUTNMamN3TXprZ05qa3VPVGs1T1VNek15NHdPREUySURZNUxqazVPVGtnTWpFdU1qSTNOeUExT0M0eE16VXpJREl4TGpJeU56Y2dORE11TkRrNU9VTXlNUzR5TWpjM0lESTRMamcyTkRRZ016TXVNRGd4TmlBeE5pNDVPVGs1SURRM0xqY3dNemtnTVRZdU9UazVPVm9pSUdacGJHdzlJblZ5YkNnamNHRnBiblF3WDJ4cGJtVmhjaWtpTHo0TkNqd3ZaejROQ2p4d1lYUm9JR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0lnWTJ4cGNDMXlkV3hsUFNKbGRtVnViMlJrSWlCa1BTSk5OREl1TWpBNE9TQXdMams1T1Rrek5rZzFNaTR5UXpZNExqYzFNemNnTUM0NU9UazVNellnT0RJdU1UY3pNU0F4TkM0ME16RXhJRGd5TGpFM016RWdNekF1T1RrNU9WWTBNQzQ1T1RrNVF6Z3lMakUzTXpFZ05UY3VOVFk0TWlBMk9DNDNOVE0zSURjd0xqazVPVGdnTlRJdU1pQTNNQzQ1T1RrNFNEUXlMakl3T0RsRE1qVXVOalUxTWlBM01DNDVPVGs0SURFeUxqSXpOVGdnTlRjdU5UWTRNaUF4TWk0eU16VTRJRFF3TGprNU9UbFdNekF1T1RrNU9VTXhNaTR5TXpVNElERTBMalF6TVRFZ01qVXVOalUxTWlBd0xqazVPVGt6TmlBME1pNHlNRGc1SURBdU9UazVPVE0yV2lJZ1ptbHNiRDBpSTBaR05ETTJNU0l2UGcwS1BIQmhkR2dnWm1sc2JDMXlkV3hsUFNKbGRtVnViMlJrSWlCamJHbHdMWEoxYkdVOUltVjJaVzV2WkdRaUlHUTlJazAwTWk0eU1EZzVJREF1T1RrNU9UTTJTRFV5TGpKRE5qZ3VOelV6TnlBd0xqazVPVGt6TmlBNE1pNHhOek14SURFMExqUXpNVEVnT0RJdU1UY3pNU0F6TUM0NU9UazVWalF3TGprNU9UbERPREl1TVRjek1TQTFOeTQxTmpneUlEWTRMamMxTXpjZ056QXVPVGs1T0NBMU1pNHlJRGN3TGprNU9UaElOREl1TWpBNE9VTXlOUzQyTlRVeUlEY3dMams1T1RnZ01USXVNak0xT0NBMU55NDFOamd5SURFeUxqSXpOVGdnTkRBdU9UazVPVll6TUM0NU9UazVRekV5TGpJek5UZ2dNVFF1TkRNeE1TQXlOUzQyTlRVeUlEQXVPVGs1T1RNMklEUXlMakl3T0RrZ01DNDVPVGs1TXpaYUlpQm1hV3hzUFNKMWNtd29JM0JoYVc1ME1WOXNhVzVsWVhJcElpOCtEUW84Y0dGMGFDQm1hV3hzTFhKMWJHVTlJbVYyWlc1dlpHUWlJR05zYVhBdGNuVnNaVDBpWlhabGJtOWtaQ0lnWkQwaVRUWXdMakk1TWpZZ01qSXVPVGs1TkVnek55NHhNVE0xUXpNMUxqVXhPVGdnTWpJdU9UazVOQ0F6TkM0eU1UWWdNalF1TXpBek55QXpOQzR5TVRZZ01qVXVPRGs0T0ZZMU1TNDVPVGc0VERRd0xqQXhNRGdnTkRZdU1UazRPRWcyTUM0eU9USTJRell4TGpnNE5qSWdORFl1TVRrNE9DQTJNeTR4T1NBME5DNDRPVFFnTmpNdU1Ua2dORE11TWprNE9GWXlOUzQ0T1RnNFF6WXpMakU1SURJMExqTXdNemNnTmpFdU9EZzJNaUF5TWk0NU9UazBJRFl3TGpJNU1qWWdNakl1T1RrNU5Gb2lJR1pwYkd3OUlpTkdSVVpCUmtNaUx6NE5DanhrWldaelBnMEtQR1pwYkhSbGNpQnBaRDBpWm1sc2RHVnlNRjlrSWlCNFBTSXdMakl5TnpZMk1TSWdlVDBpT1NJZ2QybGtkR2c5SWprMExqazFNalFpSUdobGFXZG9kRDBpT1RVaUlHWnBiSFJsY2xWdWFYUnpQU0oxYzJWeVUzQmhZMlZQYmxWelpTSWdZMjlzYjNJdGFXNTBaWEp3YjJ4aGRHbHZiaTFtYVd4MFpYSnpQU0p6VWtkQ0lqNE5DanhtWlVac2IyOWtJR1pzYjI5a0xXOXdZV05wZEhrOUlqQWlJSEpsYzNWc2REMGlRbUZqYTJkeWIzVnVaRWx0WVdkbFJtbDRJaTgrRFFvOFptVkRiMnh2Y2sxaGRISnBlQ0JwYmowaVUyOTFjbU5sUVd4d2FHRWlJSFI1Y0dVOUltMWhkSEpwZUNJZ2RtRnNkV1Z6UFNJd0lEQWdNQ0F3SURBZ01DQXdJREFnTUNBd0lEQWdNQ0F3SURBZ01DQXdJREFnTUNBeE1qY2dNQ0l2UGcwS1BHWmxUMlptYzJWMElHUjVQU0l4TXlJdlBnMEtQR1psUjJGMWMzTnBZVzVDYkhWeUlITjBaRVJsZG1saGRHbHZiajBpTVRBdU5TSXZQZzBLUEdabFEyOXNiM0pOWVhSeWFYZ2dkSGx3WlQwaWJXRjBjbWw0SWlCMllXeDFaWE05SWpBZ01DQXdJREFnTUM0NU5Ea3dNaUF3SURBZ01DQXdJREF1TlRBeE9UWXhJREFnTUNBd0lEQWdNQzR5TnpRMU1TQXdJREFnTUNBd0xqTWdNQ0l2UGcwS1BHWmxRbXhsYm1RZ2JXOWtaVDBpYm05eWJXRnNJaUJwYmpJOUlrSmhZMnRuY205MWJtUkpiV0ZuWlVacGVDSWdjbVZ6ZFd4MFBTSmxabVpsWTNReFgyUnliM0JUYUdGa2IzY2lMejROQ2p4bVpVSnNaVzVrSUcxdlpHVTlJbTV2Y20xaGJDSWdhVzQ5SWxOdmRYSmpaVWR5WVhCb2FXTWlJR2x1TWowaVpXWm1aV04wTVY5a2NtOXdVMmhoWkc5M0lpQnlaWE4xYkhROUluTm9ZWEJsSWk4K0RRbzhMMlpwYkhSbGNqNE5DanhzYVc1bFlYSkhjbUZrYVdWdWRDQnBaRDBpY0dGcGJuUXdYMnhwYm1WaGNpSWdlREU5SWpVeExqZ3pOVFFpSUhreFBTSXhNREl1TmpNMUlpQjRNajBpTVRBMkxqZzBNaUlnZVRJOUlqTTVMalF4TXpnaUlHZHlZV1JwWlc1MFZXNXBkSE05SW5WelpYSlRjR0ZqWlU5dVZYTmxJajROQ2p4emRHOXdJSE4wYjNBdFkyOXNiM0k5SWlOR09EQTNOVGtpTHo0TkNqeHpkRzl3SUc5bVpuTmxkRDBpTVNJZ2MzUnZjQzFqYjJ4dmNqMGlJMEpETkVVNVF5SXZQZzBLUEM5c2FXNWxZWEpIY21Ga2FXVnVkRDROQ2p4c2FXNWxZWEpIY21Ga2FXVnVkQ0JwWkQwaWNHRnBiblF4WDJ4cGJtVmhjaUlnZURFOUlqVXlMall4TWpraUlIa3hQU0l4TVRNdU5ERXpJaUI0TWowaU1USTBMall5TWlJZ2VUSTlJak13TGpZMU1EY2lJR2R5WVdScFpXNTBWVzVwZEhNOUluVnpaWEpUY0dGalpVOXVWWE5sSWo0TkNqeHpkRzl3SUhOMGIzQXRZMjlzYjNJOUlpTkdORFpDTkRVaUx6NE5Danh6ZEc5d0lHOW1abk5sZEQwaU1TSWdjM1J2Y0MxamIyeHZjajBpSTBWRlFUZzBPU0l2UGcwS1BDOXNhVzVsWVhKSGNtRmthV1Z1ZEQ0TkNqd3ZaR1ZtY3o0TkNqd3ZjM1puUGcwS1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2xvZ28tODQ3MDQ4MzI3MzQzOGUyYjkxNWY2M2ZlNGNmNWI4N2Euc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3BhdHRlcm5CRy1mMjVhZjM4ZTM1NzA5NmNhMjMyOTBkNWY1YmNiMzM1NS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvc2VydmljZS10aHVtYi0wYTVhYzVhYWU3NjIxYjEzZjBlZjhkNWY1YjEzZGE1Mi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTlRjaUlHaGxhV2RvZEQwaU5UY2lJSFpwWlhkQ2IzZzlJakFnTUNBMU55QTFOeUlnWm1sc2JEMGlibTl1WlNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0TkNqeHdZWFJvSUdacGJHd3RjblZzWlQwaVpYWmxibTlrWkNJZ1kyeHBjQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmtQU0pOTWpRdU5UUXhOaUF3TGpjNU1UWXhOa2d6TWk0ME5UZ3pRelExTGpVM05TQXdMamM1TVRZeE5pQTFOaTR5TURneklERXhMalF5TkRZZ05UWXVNakE0TXlBeU5DNDFOREUyVmpNeUxqUTFPRE5ETlRZdU1qQTRNeUEwTlM0MU56UTRJRFExTGpVM05TQTFOaTR5TURneUlETXlMalExT0RNZ05UWXVNakE0TWtneU5DNDFOREUyUXpFeExqUXlORGtnTlRZdU1qQTRNaUF3TGpjNU1UWTNNeUEwTlM0MU56UTRJREF1TnpreE5qY3pJRE15TGpRMU9ETldNalF1TlRReE5rTXdMamM1TVRZM015QXhNUzQwTWpRMklERXhMalF5TkRrZ01DNDNPVEUyTVRZZ01qUXVOVFF4TmlBd0xqYzVNVFl4TmxvaUlHWnBiR3c5SW5WeWJDZ2pjR0ZwYm5Rd1gyeHBibVZoY2lraUx6NE5Danh3WVhSb0lHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSWdZMnhwY0MxeWRXeGxQU0psZG1WdWIyUmtJaUJrUFNKTk16RXVNakUzTVNBek1pNDVOakkxUXpNeExqTTRORGtnTXpJdU56a3lNeUF6TVM0ME5qZzRJRE15TGpVNU1UUWdNekV1TkRZNE9DQXpNaTR6TlRsV016QXVNakUwTjBnME1DNHpOelE1VmpNMkxqWTBPRU0wTUM0ek56UTVJRE0zTGpJek56RWdOREF1TVRZM05DQXpOeTQzTkRJeklETTVMamMxTWlBek9DNHhOakpETXprdU16TTJPQ0F6T0M0MU9ESXhJRE00TGpnek56VWdNemd1TnpreE9TQXpPQzR5TlRRMUlETTRMamM1TVRsSU1UZ3VOelExTmtNeE9DNHhOakkwSURNNExqYzVNVGtnTVRjdU5qWXpNU0F6T0M0MU9ESXhJREUzTGpJME56a2dNemd1TVRZeVF6RTJMamd6TWpVZ016Y3VOelF5TXlBeE5pNDJNalE1SURNM0xqSXpOekVnTVRZdU5qSTBPU0F6Tmk0Mk5EaFdNekF1TWpFME4wZ3lOUzQxTXpFeVZqTXlMak0xT1VNeU5TNDFNekV5SURNeUxqVTVNVFFnTWpVdU5qRTFNU0F6TWk0M09USXpJREkxTGpjNE15QXpNaTQ1TmpJMVF6STFMamsxTURrZ016TXVNVE14T1NBeU5pNHhORGszSURNekxqSXhOekVnTWpZdU16YzVOU0F6TXk0eU1UY3hTRE13TGpZeU1EWkRNekF1T0RVd01pQXpNeTR5TVRjeElETXhMakEwT1RJZ016TXVNVE14T1NBek1TNHlNVGN4SURNeUxqazJNalZhVFRNd0xqRTVOallnTXpBdU1qRTBOMGd5Tmk0NE1ETTBWak14TGprelNETXdMakU1TmpaV016QXVNakUwTjFwTk16a3VOelV5TVNBeU1pNHlOamMwUXpNNUxqTXpOamtnTWpFdU9EUTJPU0F6T0M0NE16YzJJREl4TGpZek55QXpPQzR5TlRRMUlESXhMall6TjBnek15NDFPRGt4VmpFNUxqUTVNamRETXpNdU5UZzVNU0F4T1M0eE16VXlJRE16TGpRMk5UWWdNVGd1T0RNeE55QXpNeTR5TVRneElERTRMalU0TVVNek1pNDVOekE1SURFNExqTXpNVFlnTXpJdU5qY3dNeUF4T0M0eU1EWXhJRE15TGpNeE55QXhPQzR5TURZeFNESTBMalk0TXpGRE1qUXVNekk1TnlBeE9DNHlNRFl4SURJMExqQXlPVE1nTVRndU16TXhOaUF5TXk0M09ERTVJREU0TGpVNE1VTXlNeTQxTXpRMUlERTRMamd6TVRNZ01qTXVOREV3T0NBeE9TNHhNelV5SURJekxqUXhNRGdnTVRrdU5Ea3lOMVl5TVM0Mk16ZElNVGd1TnpRMU5rTXhPQzR4TmpJMElESXhMall6TnlBeE55NDJOak14SURJeExqZzBOamtnTVRjdU1qUTNPU0F5TWk0eU5qYzBRekUyTGpnek1qVWdNakl1TmpnMk5pQXhOaTQyTWpRNUlESXpMakU1TVRRZ01UWXVOakkwT1NBeU15NDNPREV6VmpJNExqa3lPRWcwTUM0ek56UTVWakl6TGpjNE1UTkROREF1TXpjME9TQXlNeTR4T1RFMElEUXdMakUyTnpRZ01qSXVOamcyTmlBek9TNDNOVEl4SURJeUxqSTJOelJhVFRNeExqZzVNamtnTWpFdU5qTTNTREkxTGpFd056SldNVGt1T1RJeE0wZ3pNUzQ0T1RJNVZqSXhMall6TjFvaUlHWnBiR3c5SW5kb2FYUmxJaTgrRFFvOFpHVm1jejROQ2p4c2FXNWxZWEpIY21Ga2FXVnVkQ0JwWkQwaWNHRnBiblF3WDJ4cGJtVmhjaUlnZURFOUlqTXlMamM0TlRVaUlIa3hQU0k0T1M0M09EVTFJaUI0TWowaU9Ea3VOemcxTlNJZ2VUSTlJakkwTGpJeE5EVWlJR2R5WVdScFpXNTBWVzVwZEhNOUluVnpaWEpUY0dGalpVOXVWWE5sSWo0TkNqeHpkRzl3SUhOMGIzQXRZMjlzYjNJOUlpTkdSalF4TmtNaUx6NE5Danh6ZEc5d0lHOW1abk5sZEQwaU1TSWdjM1J2Y0MxamIyeHZjajBpSTBaR05FSXlRaUl2UGcwS1BDOXNhVzVsWVhKSGNtRmthV1Z1ZEQ0TkNqd3ZaR1ZtY3o0TkNqd3ZjM1puUGcwS1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU5UY2lJR2hsYVdkb2REMGlOVGNpSUhacFpYZENiM2c5SWpBZ01DQTFOeUExTnlJZ1ptbHNiRDBpYm05dVpTSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklqNE5Danh3WVhSb0lHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSWdZMnhwY0MxeWRXeGxQU0psZG1WdWIyUmtJaUJrUFNKTk1qUXVOVFF4TmlBd0xqYzVNVFl4Tmtnek1pNDBOVGd6UXpRMUxqVTNOVEVnTUM0M09URTJNVFlnTlRZdU1qQTRNeUF4TVM0ME1qUTJJRFUyTGpJd09ETWdNalF1TlRReE5sWXpNaTQwTlRnelF6VTJMakl3T0RNZ05EVXVOVGMwT0NBME5TNDFOelV4SURVMkxqSXdPRElnTXpJdU5EVTRNeUExTmk0eU1EZ3lTREkwTGpVME1UWkRNVEV1TkRJME9TQTFOaTR5TURneUlEQXVOemt4TmpFMklEUTFMalUzTkRnZ01DNDNPVEUyTVRZZ016SXVORFU0TTFZeU5DNDFOREUyUXpBdU56a3hOakUySURFeExqUXlORFlnTVRFdU5ESTBPU0F3TGpjNU1UWXhOaUF5TkM0MU5ERTJJREF1TnpreE5qRTJXaUlnWm1sc2JEMGlkWEpzS0NOd1lXbHVkREJmYkdsdVpXRnlLU0l2UGcwS1BIQmhkR2dnWm1sc2JDMXlkV3hsUFNKbGRtVnViMlJrSWlCamJHbHdMWEoxYkdVOUltVjJaVzV2WkdRaUlHUTlJazAwTWk0ek9Ea3hJREkxTGpJeU1UUkROREl1TXprek5pQXlOUzR6TURJeklEUXlMak00TnpjZ01qVXVNemcwTlNBME1pNHpOamMxSURJMUxqUTJOMHcwTUM0MU5qQTNJRE15TGpjeU16VkROREF1TkRZNU5TQXpNeTR3T0RnM0lEUXdMakUwTXpJZ016TXVNelEyTWlBek9TNDNOamd4SURNekxqTTBPRE5NTWpndU9USTNOQ0F6TXk0ME1ETXpRekk0TGpreU5pQXpNeTQwTURNeklESTRMamt5TkRjZ016TXVOREF6TXlBeU9DNDVNak15SURNekxqUXdNek5JTVRndU1EZ3lOVU14Tnk0M01EVXpJRE16TGpRd016TWdNVGN1TXpjMk55QXpNeTR4TkRRNUlERTNMakk0TlRjZ016SXVOemMzTmt3eE5TNDBOemc1SURJMUxqUTVNelJETVRVdU5EVTRJREkxTGpRd09URWdNVFV1TkRVeU1TQXlOUzR6TWpRMElERTFMalExTnpNZ01qVXVNalF4TkVNeE5DNDNOVGd6SURJMUxqQXlNRFlnTVRRdU1qVWdNalF1TXpZek9DQXhOQzR5TlNBeU15NDFPVU14TkM0eU5TQXlNaTQyTXpRMUlERTFMakF5TXpZZ01qRXVPRFUzTnlBeE5TNDVOelEySURJeExqZzFOemRETVRZdU9USTFOaUF5TVM0NE5UYzNJREUzTGpZNU9UTWdNakl1TmpNME5TQXhOeTQyT1RreklESXpMalU1UXpFM0xqWTVPVE1nTWpRdU1USTNOaUF4Tnk0ME5UTTRJREkwTGpZd09EVWdNVGN1TURZNU5pQXlOQzQ1TWpZNVRERTVMak16TVRjZ01qY3VNakUxTVVNeE9TNDVNRE0wSURJM0xqYzVNelVnTWpBdU5qazJOeUF5T0M0eE1qVTFJREl4TGpVd09ETWdNamd1TVRJMU5VTXlNaTQwTmpnZ01qZ3VNVEkxTlNBeU15NHpPRE1nTWpjdU5qWTNOU0F5TXk0NU5Ua3lJREkyTGprd01Vd3lOeTQyTnpZNUlESXhMamsxTkRkRE1qY3VNelkwTmlBeU1TNDJOREUxSURJM0xqRTNNVEVnTWpFdU1qQTROaUF5Tnk0eE56RXhJREl3TGpjek1URkRNamN1TVRjeE1TQXhPUzQzTnpZZ01qY3VPVFEwT0NBeE9DNDVPVGc0SURJNExqZzVOVGdnTVRndU9UazRPRU15T1M0NE5EWTRJREU0TGprNU9EZ2dNekF1TmpJd05DQXhPUzQzTnpZZ016QXVOakl3TkNBeU1DNDNNekV4UXpNd0xqWXlNRFFnTWpFdU1UazBNaUF6TUM0ME16Y3pJREl4TGpZeE5ESWdNekF1TVRReE15QXlNUzQ1TWpVMFF6TXdMakUwTWpNZ01qRXVPVEkyTnlBek1DNHhORE0ySURJeExqa3lOemtnTXpBdU1UUTBOU0F5TVM0NU1qa3lURE16TGpnek5URWdNall1T0RnNVF6TTBMalF4TVRJZ01qY3VOall5T0NBek5TNHpNamswSURJNExqRXlOVFVnTXpZdU1qa3hPQ0F5T0M0eE1qVTFRek0zTGpFeE1Ea2dNamd1TVRJMU5TQXpOeTQ0T0RFeUlESTNMamd3TlNBek9DNDBOakF6SURJM0xqSXlNelpNTkRBdU56TTJOaUF5TkM0NU16YzFRelF3TGpNME5ETWdNalF1TmpFNU5pQTBNQzR3T1RJeklESTBMakV6TkRRZ05EQXVNRGt5TXlBeU15NDFPVU0wTUM0d09USXpJREl5TGpZek5EVWdOREF1T0RZMklESXhMamcxTnpjZ05ERXVPREUzSURJeExqZzFOemRETkRJdU56WTRJREl4TGpnMU56Y2dORE11TlRReE55QXlNaTQyTXpRMUlEUXpMalUwTVRjZ01qTXVOVGxETkRNdU5UUXhOeUF5TkM0ek5ESTVJRFF6TGpBMU9USWdNalF1T1Rnek9TQTBNaTR6T0RreElESTFMakl5TVRSYVRUUXdMak00TkRRZ016VXVPVGcyT0VNME1DNHpPRFEwSURNMUxqVXpNVGdnTkRBdU1ERTJOaUF6TlM0eE5qSTBJRE01TGpVMk16RWdNelV1TVRZeU5FZ3hPQzR6TVRrNFF6RTNMamcyTmpJZ016VXVNVFl5TkNBeE55NDBPVGcxSURNMUxqVXpNVGdnTVRjdU5EazROU0F6TlM0NU9EWTRWak0zTGprMk5rTXhOeTQwT1RnMUlETTRMalF5TVRnZ01UY3VPRFkyTWlBek9DNDNPVEE0SURFNExqTXhPVGdnTXpndU56a3dPRWd6T1M0MU5qTXhRelF3TGpBeE5qWWdNemd1Tnprd09DQTBNQzR6T0RRMElETTRMalF5TVRnZ05EQXVNemcwTkNBek55NDVOalpXTXpVdU9UZzJPRm9pSUdacGJHdzlJbmRvYVhSbElpOCtEUW84WkdWbWN6NE5DanhzYVc1bFlYSkhjbUZrYVdWdWRDQnBaRDBpY0dGcGJuUXdYMnhwYm1WaGNpSWdlREU5SWpNeUxqYzROVFVpSUhreFBTSTRPUzQzT0RVMUlpQjRNajBpT0RrdU56ZzFOU0lnZVRJOUlqSTBMakl4TkRVaUlHZHlZV1JwWlc1MFZXNXBkSE05SW5WelpYSlRjR0ZqWlU5dVZYTmxJajROQ2p4emRHOXdJSE4wYjNBdFkyOXNiM0k5SWlOR1JqVTROVGdpTHo0TkNqeHpkRzl3SUc5bVpuTmxkRDBpTVNJZ2MzUnZjQzFqYjJ4dmNqMGlJMFk0TlRkQk5pSXZQZzBLUEM5c2FXNWxZWEpIY21Ga2FXVnVkRDROQ2p3dlpHVm1jejROQ2p3dmMzWm5QZzBLXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvc2hhcGUtbGVmdC0xM2ZhOGIzZDk4OGNhNGViOWQ3YzJkYTkzNWMyZDczYS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvc2hhcGUtcGF0dGVybjEtZDk5ZGY1MDZmMGNiOGNmNzA0YmVhNWJjMThiNDMxZTMucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3NoYXBlLXBhdHRlcm4yLTRiZDcyYzM0NGZjY2FjM2IxOTAzMWU3YzMxZDQyMDk2LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9zaGFwZS1yaWdodC1kYmM3OWI3OWEwNWIyZjIyMzc0MWU1MGE5N2E2MjdhYS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvbWVtYmVyLTEtOTFiOThhMjg1NTQ4YzI1OTA5MjdjZmYyOWU4YmZiNDMucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL21lbWJlci0yLTJkNTk5ZDQ3ZTNiMDIwZTI3NGUwYTYxOWE3OTIyNTZhLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9tZW1iZXItMy04YTY2NTRhOGRmNzI1MTg2MTM2YjJlYjEzNDA5YmFjNC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvbWVtYmVyLTQtNzc5NGYyMWIwZDlhOThkYTljOTQ1MThlZWNlZWJhN2EucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL21lbWJlci01LTkyZjI4NzRiYTJkYjRiYmEzYzM2YjgzNGY2YjJiNTlmLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9tZW1iZXItNi0yNmZhMThjODZhMmNlYjY2M2ViMmFhYWM3YzA1MjY5Zi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEY0FBQUEzQ0FZQUFBQ28yOUpHQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQm1VU1VSQlZIZ0JyVnBaa0Z4bmRmN3UxdnM2dTBZem94NVpraVhMUm1NYnNEQzRHTmtVb1lwQXhwVlV3S0Vxd0VOQ1VVVmgrekY1c1Fqd2tFcXFMQ2VWNEtwVVNwZ1hUQktDQWpnMmNlR01TZkFDTWg1anliWnN5V290czI4OVBUTzkzM3Z6bmZOM3o5anhKbU5mNldwYXQrLzg5ei9iZDc1enpyWHdQaC9INy9wU0xwTDJKbUx4N0tGTU5sTkk1SEpqMFhRdVp6bE9ydFdzNlQyZUV5MUZrdGxpNFB1bGFyMDVOZm1MeHgrdk5scFRSNC9kWDhUN2VGaDRINDd4c2JIY05idjc3aHp1em8vSFlzNTRQaDJIWjd0SUpWUElEKzVFcHFjZlRiK0Y2bVlaMHhjdjRmTHNFdFkyNjZqVVcxZ3VsNUhQNWRGcTF0SGIwejJWU0tVZTZCbktuUGp5VjQ4VzhSNlA5eVRjME1EQWVDb1p1eWZpdU9OUngwRnZQb1dobmh3Sy9WMUl1aUY2Y3puczJIMFZ1b1lMcUcydTQrWFRwL0RMazZld1ZtMWlvOVpFcmRGRUlobkg2TWdnZHU4YVJ1R3F2YkJkRDE0a2hwN3UvSW0rb1IzM0RlKzlmaEsvNCtIaWR6Z0tPM2VPZWE1OUwzVXpIZ1lobWtHTG1nOVFtVi9GM0hJWmkwdGw3T3BMSWhtSndxYjZiRGVDUkNZUEo1WkNiM2NldVZhRDEyMWtNeW4wOVdhUXBZQTl3OFBvR1JsQ05qOEVONWJHK25wNW9sbjNKNVptems4MjY3VXY3eGc5VU1TN1BONlZjSVZDSWVjRi9qMzhlSmRIRGVmU0thU2lycHEvMWZSUmIvRnMxREc5dWdLRURZeDBaMkZaQWVLcERLS3BITVlTYVF3TmQrT1ZaNS9ESzhVWm5GdGF3TVdpaS82K0xLN21HbDBEdTdpV0w2c2gwNVZIdlY1SDZBZmpUaVJ5Zm5INjNOSGVuVmQ5NDkzczE3N1NHd3NEQTRXd1dYK1d1NzNMb3RaOTMwZVRGckFzbndCaHdYRnNSRDBYSGsrZjFsemRxS0ZNMTdNaUhpS0pCS0tNdjJReWdkbUxsL0hNMUFzNFhaeEhjV0VUNXhjcldLaGFLRlZkekN5V2NQSGlSVFJxbXdoYmRjUmpjY0NoOGl5cUx3eU9Qdm56SDU4L2ZIaXNjS1Y3dmlMaHJpb1VKcmhKQ21ZWHdqRGtsUkFobjFldU5MQ3kyY0phZzlmaVNUUjRzUlZZakNVZm04MFdmTnRHaEVKNVVXN1NwdHVXVjNIbStaY3hWNnBpb3dHc01QWmVYVmpHSTc5OEh2L3cvWWZ4NEU4Zng4enlKcGJtRjlDcVZ4RDREWVMyMldJUStMRENzTkNiemo5NzQ5all4SlhzK3gyRkd4dTc4VTdIY1g0VWhsYU9wMnJSa2dmeVo2Vld3L3hLQ2E5T3orSlZJdURzOGhyV0tsVUtia05VSUdBUlRhWDAvcENXOWhtYjZWd2FrVmdVcFVvTkVRS0h5M2hzdEZvWUdkMkhjcm1PYjM3N2IvSGpoeDlHWlgyWm5yMUpnWnFpU2xXb3k4ZEdJMjR1OUJzL3V1V2pIN25ybmZiK3RqRTM5cUdQM09uWHE4ZGFmTGg0aHFVUG9VYUlFazFlYzdocG15Z1pNRFpjK2M2akVMenV1UzdpVVEvWmJJcmFEeERRMm5ZWUlCcExZUGZlM1ZncHJUT3lJb3dzQzkycEtPL3ZSMkZIRmdjT0hNRFE1ejZObWNzWHNIVHBBcEx4Qkd3dkJvdXVTUTFCNHR4MUhiV2lZem4zM25ycnAvSFlZdzhkZTlmQzNYakxiUk5odlg2c1JZMVQ1VlFjTmNlNENyaEp5L0lvbUVQRUN4SHhQSFNuazBnVFhCZ1hxRlpyOEJtTDJWaUV3cVdSVEdXSmZ0d2cxNG5HVStndjdFSHloWmZRbjRsaG8yN2lhblRYRUs0NnNBZTdEdXdsV3ZaZy85VUYySDZkYnVXcGgwQThKWFJvYVErcGVCUnhQak1lajZQaFJPOGR2MjJpT1BuekV5ZmVUSVkzZGN1eHcrT0ZNUENQKzBIQWpmcnFpaDNYa01PaDVjVHhJdFJpeEhNUTVVK2Y3Q01nQ0xoMmlId21nYnpBZXphTFJDclBnSkVuT2ZBU1NmU1BqT0xRNFpzeE5EU0F3bUFmQnJvelNFU0FpRTMyMGxqWE0yQzgyUlRJb2dDRUtncG96aGlWWTFQSkg5aS9CMS81MHp2Z1V1N0FzbzRmSHA4b3ZKa2N6cHRkSEJ6ZS9TejNQbURSWXZYcUdscSs4WHNSelJMdm85dUpGZU9SQ0dMUkNQOHY3bWtqazR5aEs1TmtmREdHY2ltTTNYQUQ4anRHNkVxMHVHeVRibVhUNnJtZWJ2UjA1UlJsZCt3Y3dPRElUaW9oUmtXNUZKTDI4aXlOUlp0QVpEbTBudU5vdmd6SVlsQlp3NTZoSGJoeHVBdkZVZzF6UzZXWTdWb1RvOFA3SHlnV1g2cTlyVnZlY1BQNFBUU1VvcUpZck5YeTlicGFUNjdaa2dZQ0ptWnVJdUtnaXk0WnAvVmlNUmRSV20xMXZZb01OM2J3NnF1UTdlNVRkd3diaEVhN1NmUEVtTWlqY0dvZUJtakJURThYMXBibXdMaEdjMzJWV29zZ0ZJR0l2SzdFbXUzeGRLa1lZd09YcE9EbThTT0ljVS9URDk2UGtaNzllTVpTOHhWOE81VDhlL2RidXFXNG94VmFSeTIxa0ZpS0ZndjlyZTg3WEMxa2JJbmIwS1RJSjZMb3p5ZlJtNGpSTFgwVjV0cmRROWkxYTFRM0dEQWxpQ1dKQW96ZFZ0dkZ1REl0RU9HS3VYU2VjWmxCVC84UWt0a2U1c011ZVBFY3JHaVN3a1laYXE1dVV3TERvUlZqaVF5YVhETnF0ZWoyQ1EwVjJROXZ1T3ZtOFlteHQ3UWNIM3U4dlh2NVN3dTFZUEthc1p5bFg0VUVGYURaNEhkMG8wYTlCaWNaNGI0RGhmUWtnMzBnbnlOa2V4U1d5cUZRbGgxVlVBaDVUK2hRTVVTNytzbzh2Mi9SOVpqZ2FSMVdDUlFxeWRSQm1oWmhYblNqYWprVlRMeUdPZzRKVkM2QlNvaEJvamZIOU1OMFlYWmxMT1ZZcElRNDhnYkwwV3JqRkdrOGJDZG9Rd3A4L1JDcXNLRmFTejhIUnNBNmlXKzkzaVNZVURCcXM5a1FNdHpBUnFtRTh2d3NLc3VMQ3VNV3FaZVQ2cUZMSmhGc3JtTDUzSE5vck00VE8xYlIzQ2pwNWwySEx1dkZEZXhUT0l0V1V5dnJGdms4V2p0b1ZsRzkrQ0pDZ3RmNnlIWDR4WE5GbU0wYXQ2TDZ4ejgyUGpIK0J1SDQrM2ZxeGhHMmhXRitvb3ZaYmMwRnRFQW5EaVVaeTMwTnV1RW1oZHRnNHBhelh2ZFIycWlpZUhrQnE1Zm5VVnRaVUpZaE5tOEZUTzdjdEp2SW9qbzlnNDNwaTZqTXpxRzFTYXBWcTV2Y3hUKzJHek1nb2xZenNXYngyVGE5eUUzMXdxK1U0VEFFSG5tRnFCcFlCdUcyOWh5S2hQZThUcml4c2ZFQ3Y1a1E2VHMzU1p6STcwbkM3Z2dtQ1Z2MVl4bWRDTERVYUxFS1hiVE9zeVd1NlljNHQ3Q0MyZElxTnBlWDRHK1U0WmRMT1B2RWY2TytlQkUyR1grc2R3RGxsVFd5a0RKcXl5dW84MmZRYkRDeFc4WVZsVStheEkxMkd2TEZMNTBRVWNhbWNOYi9mZWFNZWxhZzRiWmR1ZEdRNCtQakU3bHR5N24raE5HQWlTMmpDZCtrZ0NEc1dGMHRDUTFzV3hjMGNXaUViVWxPNUwySmFBeVhTMldjV1NoaHM3ekphcUdKMmVlZnhVUGYrUzRlL3ZhMzBKaCtFUkhHV1RMZmh4S0o4dXJzUE9xYkcxUW1sU2RvS1poUGQ5ek9xNUpFR0p2MGx1YktIQnpmeGFrejUxRWpBUkJ1WWFteDFMKzJCS3pad1YxYndvVlcrRVVSUWs1RkVnRUJ0WXp3UWQ4c29GWTB1ckNaa01rM08yNUFKYlJVT0tGWjVZMktDbnRtWmdFWFZzcktZbElNL3MvOTJSM1kvNkVQWUhOK0hwRk1EM0o3cjBVdGNMQldXa090dk1GS3ZhRmJGRmNNZFovMEZncGtCUVp0TFNFQjJYN1lSTlRUcnhTcEJQTnNVVUtnYU5rMlFTZ0d0ajZ1Kzl3L2RyakFLMk1keEpGWVU0UVQwSkNZNC9PVWN0bkdVaUtVSk95T1lITERKa0drMm14cERreWw0dWhuZ2o0d1BJZzBrL3FyVTA5VFZ5MTBYWDBRUXgrN0RiR2VBU1I0Wm9kR2tSMGVRWW5XTGMzUE1UZXZVa2xTUXJVVnJEZ1lHQ0hsK2FKenJ0K3dJM2pwekdsaGVpcVF0WVVhblhBUjdoVFNOY2R6dHVkNFk2L3ROblJLR3FGZTVpR2Q1RzIxMFpLL0xvdnlhY3lKcUxOSUxRdVlDTGxtWXMreGYxTG96ZUw2dlNPNGFyVEE1RXlyRUNGOVVVd2lCU2VkNWM4TVlrendoUnZHME9TNnBlVlYxRmptTkN2cldqM1lLb3h2QkJNQjVUT1Y3WER6UC9uaHYvSjdjZDFnS3dlSG5YMkgyeFN4NWljbVhDdHNqWXNmaEcwQjFSajh0OG5GYlBxK3RCQ0UzMW1oMDNaSi9rOXVvZ1hWSFhrMmVLYkpQRndLRUtmN0RLYklJYnV5NmlucGJKNnd2NEgwb0JTdVVVVkJhcFFVSzhXMndqNzBGWWF3ZFBZQzF0ZVdVYVAxa3IxRERJY21uKzEyOGhHcXE2dDRjbklTejV4K0NjVlhUaU9SMzZGeEx4N1ZrbkRTcUROaWhwWUpEN0s4TVpmeGRxZ2pWc2ZWTkl6Yk1ZVFg1RGlyYlRXVE53a2drc3lGZVBDRHBBU044RTJDME5JR0s5RTY5Z3p2d002ZE84QzJGM1BleTRoMk05ZnRHb1RkUzFyRktpS2E3a1p2WVI4V0wwNFRNb2k4R3lza0F4VjRZYlFkWitJcExUeDM2alMrL1hmL2hCMzBpT0h1T0lsQXFJUStDRHY1RFcycmRRd1hDbXdVU0t6dG5JbmdzSTE4b1hHSjBOZlBnWHpXNEEwVXhZU1dHUUV0RThOdG02K3orR3dTd3NNSU5jMzFtbk9MS0s5dG9ESzlnajRDU0p6OWt4anJPZS8wZWJwbEZKSEJIaXlGRmN6T3JEQmVBd1dra05id21STGNvRVBUYkkzOUo1NzhGZHQvU2V3YXlDQk9odE1nV1JlWHRJSk85bTVYTFczNUxEVUtEcmxFeUlLQ1JSdmFSYWdPRENzS3RkT0RGSXFtdE5wR3ltZzBxcUFUWVhVZ2xvYWtpSFFDdzJ6VkhienhnOWhIOGh5c0xHTGZZWUpYSTBBc2syRStZNzNIcEQyOXRJUi8vSnZqbUR0L0NZZEdzamhFdDA3MzlpbFlpVkpEVFUxU1MvcjQxY2xuV0VvNUpoVlJPRmQ2TmxKUHRrbThHcTJkc2pSSEMra0lnNXk0YXE1alZlV05taEtvU2ZKQ1djeWpJQzVMbkFZMUt2YzRYRmhTaE53cmxiamNHeVBYRXo5SVJNZ1JDVEJySzZ0SVozSnc0eGxFR0hzdVB6ZUpjcFdhV01YRzJhZWZRZm5SSi9HRlBSL0FuLy94SjhsSFEzUU5EaUtSNnlXdjlMWmNURnp6c1VjZnhlTGlpaVJaSktrQVNSVWVLMzVoTkJvdW5UUmxiWU9pR0lXWGN1NVdLZk82NU4zUzlvQkpqSUhtUDJFbmhnTTZha0VwaFRUdmhlMWNLTTBndW1PT0JpeXdtelh6Yno5RmxjaVlwUXRsVDg2UnhiUHVFd0xOT055ZjNJWHdZd2ZnRFNaeC9zTFRxSmN2SVRzd1NHSkN0dzZhS3B5NGxoRHJmejcrUGYyL0FFaUQ5VnhjYWo0SzV5aWdCWWFkaEdISEk3R2QwdGc1MlBiVlVNc0tzWVRtT1hGQldhQmh1S0VDU3R0Rm0xdFdkRFNvMlZ2VTZweVJnb1k0RTFsSmhzUTNScFRNTWRhczgzTklzQUVVMnoySzZKNGh1aTRiUTEwZU4xZkJnSHRBVTBXNnY0L0NNSkZUUUUxWFZOakRQMzBJTTNQTHVyYkFvZnlNUm8xbGRaL2JZYllsa0xuV2JpaHhLMExMYzNxVElHUW52NFdkbkdmYVFpWjVHeFluS1NLUUVsSUFSNjQ0cGhLWHRHR3pvdllZZCtudUhMcFlrNlY1eGtkSEVEMjRHM0hXZVU0bWl5QnFLL3V3K1hpWFNoaTU5Z2FXYmlrbGhtNGtRYmxhbUxsMEdmZjkvWGVVUDFvc2Z1VXhjcTlQbDB2dy81YnRLL3dMYWhvRFdZWmhLVzZvTjVZa21aVDRLV2VFTUVHcEthRHR3MXRwZ0orVFJMa0tXYnhsT2VyanZzYW5yLzdmS1lkYWhPbGFoSlFwejk3S1NBKzgzaTQ0TzN0ZzliRndqWEZaMXpTY2d0RDBabHh5VVMrZVV2Zm1xc3BDbW13eTNYUDBtMG9NUkdtaTZYcXRwWGdneXZlWUp5WHV0VW9QQW16MzVVd0treURrMmtYR1l6Z1Z0aEVsOUEyblZMZzNoRnpCSk1aQWx1UXQzV1R4YzJuMUNXZHNlNHNXcW5JL2V4bnQ5TUhFenJQcGt6ajdOYklZL216VnVENWQzRzlvSEN0Vmt2WGphVGdrMHBhUVpqYWFFRFR3NjkrY3hBd3JDOXVXaHFHdFFzbjlsaVAwTHFFa1FCNnNaWkp0ZHhKZEp5dTBqUUphTGdndkdKZmNOcWxvUytwVUVVd1dGQmZLc0FlcE00R1dyeTAyeDNHM0xDYlhvcXpBSFlNL25QYWsyWUp6a01xd3RkZlZnM1IrQkhIbU9wZkZhQmkyS1lQa3hIYStEQWdpeW1VWnkzWXlnNVBQL2hZQ1o5S2pGRi95dUxZdlNwT2Vqc1IzRy82YlJQUk9NYnRWaDI3SDNuTXU5ekxWb1M2R1dGc2FDNzVkSjVpMEZHcmp0RndpN3FHOFhtTVB4MnNEaXdsdzAvWUxORjRGMGFTbWEzR1Q2aDc4RzgvMElrYUlsN1FnbldoeEpWT00ybXFOa0JZRlR5bUFIVElXZ2ZFeTY3c21RU2tSWndkTWxDaXh5TGFEOEZnMzVkRWpqSUtDRHBBRTRSWW5EdHVZUWM0eHllelRQSUdPMFVMRFVueTZuZThiVWhwanp5SWFOZFg0WnFXaWJUMUpuQTArM05Ia2JtOTFNUVIwSk9EWHFuVUNSRVJHcUcxckNoRU9GQUdGNmR0YVZsSHJMVmJuOVUzdGJqa3Bkc3BvMlNZcjdUcjdNaEFsMkFJSlJoa09lV21ERkMvQ1lVcVZSRjI4QnFFaEdsc0ZkdnNVTi9aRGU4cWVtcG9xVWZlVFc5UXNOTGxPTnVRcFd3ZzRuVW1peEJiNGRoWXgxYm00clFpbmxicmhOR2lGMG5vSXNMaTZ6dTV6QmJYYU91cVZrdlkvWlhMVHFxM0JyNWJaWGlpaHdRNVlRQVMwWXpsalVmNXVkV01ORnk1TXF3dTZiS2ZIMGh4L3NacVE5YU1jbHpYSWRKcmFUZk9WMzFxQjhScTBTelc1a1o0NE5mWFVJMFhYTUlIZ2NkS2RjWU9Lb2JiT0pGQUZraVBzSE5lcWRlMVhkRHBoQWk0aVdMVnRTZHV5dG1vSzZYb3RrV2V1c2hVd2QybEdLWnBVM3RMRWJUa2xrMlhFOWRuRGpHZDdhYUNvS2tWaU1XUTFjTzZWRnpBenZZZ1dmVXFHa0lyVzNLVkhGeFpYTlhLRTJ1Q3Q2NHpkM282MU5qdmh2dy9JYmxRNDF3Mk90UUw3SG9WY3VrVFlLVTV0VTNJSWlaVmZjdWtlVFpiMzBtWFd1a3RZQ1YydlVqUDFucm1IN3NzdVdMbmw0dnhDR1J0K0VjdjgzcVAxeFlxYnBRM3NPYmdmSXdkdVVDVFVrRkJ5YnRQQ1pmelA1QyswM0dwUTBLdjM3VWF4ZUZseldkUUxOWUhMcEVkQ3hsRm10UjE1bmVSdEJBMTBkcUJGMnR6Y1hLMnZyMy9jYjlRTGdkWlNVS2hQSnVKS2dWSWNReTJSTHdwNWxyd21WbkJkVDV1d09WYmVEUW9qdVRIQ0o4ZGtka0RyU1RuRXVTaG0xcXA0OGVJY0ZsaVRDZkwyOVhYcldDdVI3dUpnSks3V2xoR3l0Tmt2blQyRkJ4LzhkdzR1RzlvenZmZXYveElmdkc0dlcvVGNSMjBEV1kraFlrdGN1NWd2TlZVSkp2YTJ1VEVOOHg5VFQwL2V2eVdjSEpsRTZnS2YvU1ZQUmtTa1FXSWR1NjJTemMyNmFhMVFZekxOYVhBdUp3SUl1VTVFSFVYSk9yK0w4NXFRMml4elVZTXVJNVBVS3QzejdNd3kreDR6ZU9Ic0hEZkZPQ1RxYlpBTUNQSTJXZzNkMU1yU1pmekxnei9BYjE2WWdlOUVjZTExQnpIeG1VOXFYdHZabjhQQmZidW9yVlhKZXRvclhhNzRxTlFiSmhkdUVYN3QvM3gxYnFaWTNISkxPYzRXejA0ZTJyOTNrbDJsY1lraGNiK1E2Q2N4VTJVdlg4ZHZUT0lDRW9GV0JZRnFYRnA3aWFndy9yckdYcHUyc2pLUGNlTnMySWFtU3FkallwV05vSk8vUFllVHA4NnJheVU1dnVyaFVFU0l1c3kvbXpTM2J3bno5L0dKMjI3UjhrcENJVW9LSjE0eU9EeE1rTHVFYnJZb2J2M0VLQzdOTG5JUXNvYnAyUkl1emEzZ3BYT1hKbDg4YzJxeUk5UHIydW5KbUhkM3ZWWjlGdTJhVFVteVZMd2FYMDZiZDlJMVdMOUpmZFhpUE54bnpwR3lTRkJUdm5PbE5TSER5RGpKTVdGY1duMDl1UWpXNTllVU5vVUtBSlpxV2hwTGRXRWlqcWtuWGVZMGgraWN6aWJ4NGVzUHFrQ0t5anByOTNUV3R4aGM0bDZhT25IZDJadkNRSlpXM3BubUdnWFdpNS85OHBFN3Zyb2x6K3NHSVU5TXZURGxlcEg3a2h6UWl3VUVuY1JOeFI0YzEycDhTRXRCa0ZUbUFvcUFiYitYZUdzUHVkU1ZZNjR5UlRQVzRzQWk0ZG82b2hLaEJHazdiWXRPSmFMREd2NFJHdng3UjI1Qk91Nml0cjZDeGlaYmZ4c2JUQ0ZNTFd1TCtxSk9nL003ZVRzaVAxQkF2bjhuejBHeW9jdzNLRmp4dGZLOFlZVGxOb09qbTM3MUR4alFCUUVVTXpJMkpZKzgzbVMxT1p4WTA2WEFkV3JmRHlLa1d6R2RIY2g5cGp0bXJPaHcwTitWU25NZ0dXRjd4VGVKWG1wRjZWNWJKajlhVmllUldPZ2owZjdNcDI1aHAzb2RwYVZwNXIyU2t1b21BYVc4Tks5VU1FN2s3ZDJ4Q3g3YkZodWxKZFFkcjNqakgzNzk2UCtYNVEyVDFhbGlzVVR2T2tKc0x5bTUxUXFCY0YrdGF4VWdCV1d6YVpvendpL2xOU2dCaUdqYktwSWFKQzJJVmJ1SXBLNE1FMm0xUVc1YWVwcWVyVlJZcmUrUkxHdmRhQmxYalJLYy91b3Z2c2JLSHRpZ2xjb0xNeWh4UHI2eE9FZTBySEpHSGtOdmI0OVdKZEVrSjBseFRtN1RQU1U3bXptQ056bmVkTEs2VkNxVituTDVNMFRCenl1aU5WdGIzNG5sUE1lVUhMSnBhVHNJbzVGWnRiSjhjVWNCR3hpdUtiSGFhQVhhZ2F3eUZsdHNFVXJMUXNpMmNHaEhHN3ltK1pvaEczbmlpYWZ3azBjZXg4SDkrekM2Yno4UzdMdkVpTHFwZkRkZGNrM0hZdkpxMWRVZnV0V014Unpjc2YvUWJVKzltUnh2K2FyR2k4WGlpWGdzY2plVXNUVGJ6UmlEa2x0dk5XaU9hZzlMNkdJSlVYa1lhdjRScFVpVHgrWDE3bHdhYSt1YkdOclJ6elU0K2czdDlvVFc5RUdrZFNGdXZyeThqRmN2ekdKdWNSVy9mdUU4TXYyNzBEMXlEWWwzTnpKOW96ckRXNW1qRzdKbGIvcm05dDBqZXo1NDRxMWtlTnYzVUo2Y09uMk1xZUZ1ZWJna2FnMzZOZ01YRUtpM2haWm1iTFhlVWhlVVptMkRBT05icnRaNFNRNG1CUUY3T0pEMDJRUHA3OGt4a1dkaCtycXVzbzhhODZZU2RlNDNrOHVnTS94MEJDSHovWFRCUEdPdWlsUnVrTVZ5RFd2TDZ4S0xkdzhNN1QvMmR2dC94NWRzZm52bTFXT05XdlYyTm9GSytzQk9ZUWhqTWRsVXB6c21ncTJ0cnlPVlRtdnlkbTNYVElvdFNmQTJvbVExdi8rSmoyTW9HOEdIYjd5T2lNcmlsMHJyVURrcGUrTE1qei84d1hGOC9XdGYwWGRRWkU2ZXB3VTNsbWJRUGJTUGo0aVVWaFpYYnQ5MXpjM0gzbW52Vi9SNjFMblpoUk5CSzdpZU9hY28rYzFBdVpSR29YYkpKR1JNTDlNM0pST3ZMWEdNMVdoWnJNMHFTdHM4Mi9UL2hYdG0yV0xmdTd1QVcyNGFVMlFWUURIdFZVdXJqLzk4NkdHTlhlbE5TcWxrZS9MdVdGWmE1TVhyUG5yYjlkODY4ZVNKSzluM0ZiL1lWcHliSzc0NlBUdEt4L3lHS1ZCTmdwZGlVdktiVkFjaVpUYVR3QklIR3g0cmdRMmlxRFNPMTlZcTJMMXJnSUN3am9kL05vbmZ2SHdSRjZkbmRjWnRjM0FmSVFzU3JpcHZHUGxzUTBTbHlhdEs4MDBad3lPM2M5OTkzL3ZlL2RkLzVJNjdpMWU2WndmdjhwaGZMVS8yZG1jZTRCUm9qUEZYaUVTa05HS3lsNHFaUHRqSEZzUHlScjFkbFRlUnk2VFVldWxzVEN2cStkVUsreXV1dHM0OUZxQTNYWGNOWGo1N2pvb0t0Ym43aGMvZmpqLzVvODlLUTAwOWdmRTlTU2U1ZmVpYW03NDcrZFRyM3pONXArT0tMZmZhWStxbFl2SFV1VXRIbU0yTzFPdXRFL0pDakxoaTB6ZVFMMGZRSGdhV2lKSnh0Z3VXVm1vWVlFV1FwNUJTVmkwc0xPS1hUNTlFcnJzYk45OTBnMXEvU3VieDBpdm44TE5ISDVOM3lDWVpqMGQyN0w3dVNOL290VlA0SFE0TDc4UHhxY05qaFZxbE9wSFBlVjhjNmsyUG5aOWJ3eXF0dFdkbnY5S28zbnlDeUJxU1djVGhzTHIrcnlmT1lXWFRKT1VrYytXMG9GOWRpRmN3R2JiQ3gyM1dsMFdTQ2J6SDQzMFI3clhIOGFOZktuei9KNU5qNjAxN2ZGZC85bERTODNKWGp3NFVIQytlazg1a09oL0RNODlmTHAyZlh5dFpqak4xNU9ZUFgvanVEeDZhYXZySkU4WGkxSHNXNkxYSC93RWMvRENFcWxOZlh3QUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEY0FBQUEzQ0FZQUFBQ28yOUpHQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQmtnU1VSQlZIZ0JyVnBwYkZ6bmRUM3Z6WnMzKzhadHVHdW9oU0psMlpJYzI3RmJPS2JiSkUwQ05KV0JBazMrTkRDS0JpM1ExdmJ2QXJVTjlMK1Y1a2NLdElVVEJJYVJwcW1acFRHQ3hCRzlSTEpqVzZRa1c3SkVjMS9FSVllejcvT1dudTk3YjRhVUk4ZXk0eWNOaHZObTNwdnZmdmZlYzg2OWR4Ujh5c2ZzQzgvRzE3Ym1UNGNDaVJOek02K2tMS3QrTXBZSXhyUHBTdHlDQjFiRFFMakxuOWNEbnVWS3ZwRWZHVDh3cC9qd2NqUTZPUGZsdjM5cUdaL2lvZUJUT0dablg0aUhyYTdITnVZdlRzRnVUZDFZdW9yMGVoN3ZYbHJEUUN5QW9jTkpyQzF1b2xDekVWQlZqTjgxakhxdGdmV1ZYWnk4ZnhKZXZ3K0p2bjVFazBOelhzMy92V3JSbUg3Z2thOHY0dzg4L2lEamxpNi9PYVY0OEdTcGtKdktySzhnZmYwaUxMT0dURHFMTjJZM2tDbTJNQkRYY1hpMEc0MXlFNnM3SlZUb3VUKzY3eUF1WDl0RVgyOEV4eWFIMGQzZkI5V2o4S0hScTMzUU5SLzg4ZTdwM3VIRDN4b1l1M01Hbi9EUThBbU9wZG5mbklUWCt3eTNac3EyYk5pV1FZZFZVZGpkUlhrbkExdTFVV3NhS0RZdHhCaUtxNnU3Q09vK05GVU5OZFBFNGtvT2F6dFZqQTExb1ZGdnludG10N1pRTGxZd05tRUQwUVNDMGVocEcrcnByZVhyTTdadFBqb3dOcm1NajNtb0grZkRzN096OGFWMzNuakcxclJadm1RSTJqRE5GbXJWSWpZWHJ0RElLbG90QzVxbTRiTjNqU0Rvb3pGVkErbHlDL2xhQzl1bE92dzh0N0pkUWl3VVFKNmVMT1dxV0Y5YXcrTFZOVlN5ZFJReXUyZzI2bWp4MGF5V0FkdWNVbFZ0YVdkdDZVbDh6T08yamJzNmV6NFY4elJtNmFqSGJSckYvekJhTGV4c3JHRDU3WFBJYjI2aVVtaWhaU2pZVEZmUmxZaGdPRUZ2R1NacUxSc1ZlckxlTkdFYU5zcjFGaFRlcU1vUUxXYnpXSnZmUm5xcnpJMXBvRmtyTWJSTjNydEp3N2RoMmFaTUh0dTJudHBlWFZoaVBxZHVkODIzWmR6N3MrZE82eDZGaHRrcGFSVVAyN0pRSytWdy9UZS94dnpybDVCZUxXSmhJWXRjb1Vrakc5aEpaeENrQjBYWWVsVUZoc2tROVhuaHNVVXVLRFN1eFlBRlNpVUQ1V3dGSVErUnROSkFPQmlFMFN4ekUwelVxeVUrTjJWMFFMR2hLRWg1Tk85c2VuWHA5TzJzK3lPTlc3aDQ3akZid1F2MFZ0enhtUHZndjBJdUE4TnFRUEdxcURlYU1BeUxJRkxub2hYa2JwUVE0b0lpek9vUXJVandNOE4rRmIxQkRVTWhMdzRrUXVqaDM3MFJIN3BDUEIveFlHQXdCcU5lZzFtcm9iU3ppZkx1TnFxRkhDUFQ2SHd2TFl5ckhyeXd0YjcwK0VldC9mY0N5c0xzdWNkTXl6N0RmWmJHT0VZNWgybTBFQXpIa0J3N2d1eEdGbWFtQmkvUDY1cUtzRmVuQjhzSWVEVWNqZm5sNTBOK0hSb04xQW43T3ZNdTFCVkVLT3lIbjdrbkRQSUdOS2hjZGFObG9GRXFvcmhiQkh3N0NDV1M4QVdqdk5aSHd6enlYc0pHZXVXWnJmVUY5QThmT3ZPeGpidjIxaXVuRGR1U0YwcVRYS3NVZVhOYkxpUVFqaUtjNkVleDNKU2YwdmpkSVYybGtUYVNYSFFpN0VPMEs0UklUeFFlbnc2UEpveUtRd3NFb1FYRDhBZERDSVFpMEJpdVhsMkh4YmdyWjdkeGFlWlh5TkM0N3VFKzVMZFhFZThmZ1ovM1ZGekRGQm1pS2lORWZZWWh1cHdjSFp1K2JlTm16NTlOMGJCblZjc3hTaUh4MnZ0dTdwb0lsWXR0dGt5VUNsVWFwS0pKSUlqNHVNTUVEdUdWM3NFb2dnbDZxQ3RCM29yVGdDRDBRRVFhSVc0UjcwckNHNDdBd3p4VFNSVmdidnJpWFJqZVdDWHB2NGJGNHFwOFBjcjhKZ3ZDVmx4aWxoSEVjNHJnUmp4N1kybHBibUJzYlBtRGR0d3k1N3lLZlphQXdSeXpwRkdXWlVvQXNmZ1FBQ0ZlaTRkSmtQQjQvZkRTWlFWQ2ZpeWd3MjQyQ1JvbXdqUk9VSUxHMFBSNDZEVnFMRDBRNVVaNW9IR3p3bEV5SUVOWWtMZEh1TnhaTlQrcm9lL0FHSVlQZEtHN0o0NytBMGU1VVZIcHFmYTJPbUhrNWlDVXVNZW5uTTB0TGNVLzBuUHZ2bm4yU2N1MGlJb1dGeSsyU25WamdROWhuTnc0aStqbnhHa29IR2FlMktnVDRuMWN0TVdjQ1lhRENBVDloSE51QWtsYUxFaGh2cGlrQUErTlV4aTZsaWs0MG9RbU5vdWJwSUtnSWRiUDd3dkdlekE0UWFPWWU0bitRWGg5L282V2NpSkljU0pJUklBdDMwb1pQbFh3NEJNZjZybXI1MTlNOFJ1ZkVvdVhYcklGMzVCN21uVnF3U3FxUkxGcXRZSjZuV1RkcUVtaXBmOG9LSmc3bW5NekgzUExSOUNnMitBTmhWSEtOOUNxbTlKajNvRGd2UVpVQW82cWlBVXlyQlFDaVlnS2NpWkpUVzZDRm9xaWErU2drNXU2WHdLSjNmR2JDc2N1eDdBT3hObjI0OXZyU3ljLzFEaGI4VDBybi9sbHBtR2dXYWRoOVRwNWgwYVFWQzFETE1DUXo0N3NzdVFYUm51N2FZdUtlQ1RNRVBQaS9iVU1MbDlkeHdwbGw2bnFxRkJXbVF4WFZkUDVlUXYxaXNOalhpNWM4YWd5SW1SQ3djMXRocVpLZ0VtT0hJWS9rbkFNY1UyVEVlUW12d01zU3VkOVZWV2V1V1ZZWGo3L3l5blRNcVprUGpGY0xCcG5pcHdURDU1ek5nY3lrY1ZDeEkzbHJ2RzVmMlFVRzFkV0NPdCtna3NGWFhHQ0JqK3p0TDZEWExhSTNsZ1FacVBGOE5KUnplNUtnNnhtQXdIbW5XbjZvUEQyd2hpVnF4YlJMcjVIMHdPSVJIcDV6NzFVY3J5a3lIKzBaTys4RTZQaXVxa2JhMHRUQXlOak16Y1pSOTU2VE1TK05FeDR4L1dLWlJ2U1FMRTdmR0o0T1Y5aFUySFlyc1VLRlVRMG9rdFBSa01oWHF0UWNqVndvQ2VCQm8ycUZLbFlWdFBvR3Vybi9WdG9VSEtsMzM4ZjVmd09iQ0tvUHhaQnVLY2JrZTUrQkdMZDhwNFdJeU1lVHpyZks2aEhjcTE3S0cyRDNKZUtnOTdpV2RNOEl2ZjJqSnQ5OFlWVXE5azhMVHprRUxYcFh1eHhudTAyRWFqU2k0NzNWR2N2K1hiaHJmY1FGWnRKMEJNeUs1T3JZTWRTc1VGeWpvaHc1VG1iTHRsWlhNWGc4Y1BrTlRLVTE0dXQ2OHZJVTE4T1R4NUNwS3RIS2h1alZXTm82M0xSUGwrSVFhSTR1T0VRWEp1THVNa0sycWYyUENzM2Uwb2daMkpzTEM5OWEyaVdOTXlVRDBPaW1LTklyUGJXT01rcmdFWThXNHBMRGJZRWdWcW1CTDlPYlVqNVpWQUxNdllSQ3dld1dxMmk1OEFvU2d5aFhMVkpJRElSR3ppQWdXTjNFMTBadGh0Vi9PcnFMczVkTCtEOWkrOWhlL0U5R2ZLcXgwdmsxV0VXc25zaDF5azliZGViKzl5NC8rQjdUYi82ZU1kei9QZzNSTXdwRG1qTEQ0aWJTdEZsd1kxbis2WVlsMThnUHN1TjBGbW5lWFhTT084VzdRcHpmV1VreUY5ZkhlMUJ0MUZIT2VhVHFLdnJBa0ZEQ0JQZSt5ZnZ3UGFOUFBxSmtxTURQYmp6d1Q4aXFoWjRYeWNGUEhXQ1dpTUhyYnZYQlE5bmJkSmpjQlRLQjBPei9Zb1I4SkEwN3Z5THo2ZjRvWk1POUxmM3hsWCtwQUp4a1VnLzU5bnE3Sjd0aHFxZ3drQmZETFltMEZBbExZU2hCM1hxd3pwQ1FVb2tqZFVBVWRTbzZnZ3dMM21GVkNROUJ3L2pVSG9IbzRlSGtSdy9qR0NFcEo1TWlwWEorK29SS2hjdCtBSFBxRzQwN1NFbFlPOXR2dEtoZUJtYW1xMTZUMHBFYkpjeXJpcHhYaWdkVHprbXU2aHBLVGVSU0NEWnl6b3NUWFhCTHhjU2pIMlRPR1dYQ0hHdkw0Z1cxVXVwa1lYQ21zNHJPSXViRktEc09uVGZmYWlRcUgwQlAxVHFTK0VWS0k0QlZxc090WDlZM3QrUzMwODE0MnJLTnNoMFF0UU54LzFCMnZKNlRndUVtT3Fnb2J6QTJwZWtDdHBwSjczV0xqdWtoYXFyemhVRWh3ZWtIQk9YdGVwRVYrYWVoeUVZRkhxUzRyakluS3hTWEF1cEpiK0huR2V5eWhiUEVZYWRUOGdyZC9lZGpiVWsxMEU4YkNkcTlwQi8zeHBjd3lUWEFUZnhJVmQza3Bjb0p3VDZpUkNVS0FobjBYdmgzUFlvcEtLUXdLSkFWc2kyV3l5RVJ2cllHakNJbEs0RzVSc2ViNERoMllWcXpzRDIyaTZSajhvalRQUVRDK2Juc2xmZlFYNXRGVTE2VHFPOEVxcEZMa3hnRkFsZVp6ZE01clN5Vnh5M05TWDJHWFRUWXR0L2kwMVNsUlJaeTR3NzV4V3B2QjJ0cGtvTDJ2VmJ1NVp6eEt0SGJrQzd0aEpCYlBGOG9kcmdKVHluaWpwYms2aGFweko1Zi9ZcUlzRUFmQVFTWHlSS3lVYVZRNkhNUGd3SzY0dW9zS2trWkp5VE0ycUhlcmd6SFRGOTg2RjB2SXg5M21vYjVlQ09wSThUWWlVcDRiQjJhb3F6bG90T0V1cmRDeDNERkRkRWJWR2RPR0hKOEJScVFpTm90SWg4NHVZaUpIMVVPSm5sVGNvdUF5dHNBdm55SlJwdk1nUURTTS9QaS9Zcyt5MHFpdXk5aEh2N1dQcUVaVVV2RnRHZ2JnMks4cjJ0UDFYbEp1TXMxd2k3ZzZMNzMrM1lFVmNWV2RvSVIxblNEN0pPZytwZWlEMnVjNVc0UEc4N3BZOVVFbkR5cXk4MVJoQ3dLYkxaSkdMTG9iU2RaL09IWUNFTTliSk8weFcwcUU2MFVKQWx6UkI2Um9hby9JK2hWc3pKWG96VmJMbjNaTjR5RisxOWkvNmdsOXI1MTNHYSswSmNZOXFkaStLcTNlYTJUdmp0cHdJbkJ4MENOL2NScXN4U1djUkNjZEJNcDVJWFhtcFU2NUxNYjl6WXBRUnJ3VkJaMW9RMERCOGRJYmhveUN4ZVJ6YTlpSWJOM2t2UWl6aU56SzR2OFpxR2xING1jOHRQMmRYT3Rac1VpSDJMRUhXRnMrMWFzWi92WEcxcHVWTEdDVDJIODZ5T2t4MUdVRHExbk1nTnhRMVBTeUl0K1l3ZWFiWXNXYy9sdHd2WXpSY1JZYXVoUUZWQ0dZb2JWemN3UXNwb0tFMlVyUm9hdFMzbWFvWDhGbUU0VjBnaERXNk9BMmw2Yk5pVmZOZ1hrbTFEMENIeGp0c2s3amc4cDNiTUZLbXRlUEttYmNxcVc2cDllUlBWcmNEZEQ5cjdudDBpc1UzaWxpUURVZmIwWXAzS252cExmaXdXWVV1QjVZK1BIdTlPOWtpT3N5c2NndlFFMFQ4K0RqWHN3Y3FsTjVtN2ZILzBrSXcxcm9VYnhPcEJjZTZKZlRKcmo2cVVUdlM0Tm5jTWQrbTlUZTU1aGlYeVVOcVh0TDFqdTcwVDl6WFV6am5IU0FkWmJmZHZzUzhlRXJHUzZHVjFvYURCSGtxNXlrNDBoeDJxYXFIaEtjUG9WckN0bGRFWUNLQ2x0MGo2UlF4TkhxV0s5ekVjcVdkWkF0VXJlVGFTZ2k1L3VXeGxLL3RpVSswWXVwL1hZTzlocW5TS0xMYnRaWlcxMVp4enNTcHpSK1JXNTlQN3RWdmJmQkVPTk1hMDJyclR1Wms0bHppVXducStqTjFLSFduS3J4MCtnNEphNHpXMTNUekxJZXJQUmhFVzIrOGlER3NVeGg2UGt4WjFudHROcjdPQkUzWXJEaWZBSUp0VHFyc1VXNEtHWEpyeVFlODVwbmZXcWFwNTBjSllVZHF1RTlnbmpMUFZEcWFLdG5lYkhxUU44bjNYcTIzVlFwbTFsY2xpZFhNWEN4UzhjY3EwRnNzYzF1NElzalBXWUVnbVlqcENVZktmeVhaRmJwM0ZxYkRLa0dqYktGcWNHMndpZnZoZUVucXdEV2RPRFNkcU9ZbUU0bG50Y0c5YnVPK25BbHRSOXVEUnNpNXEvTUNjb2poZjVGUUM2RlM4N1ptQUl3NzJHcksySzZLRnNhYlp4TFhyYS9qaFQxOWlxRFhRTDVTSW01Y1ZvVVFveDZvQ2FIaC9oZktMQ1FWRHFiUGZHZVU5Qklnd3h3ajlOL0lLTG0wdjRlR2VDWFIzUlRxbDIvNWFyczIvYUtzVG9HUG9YcFM1UnR2V2pCcjBxdFB0Um10SDJjbjJuZVhpaCtKV3hxSmF0MlNueW5SbGxrSHd5T1pLZU81SHYwQ3hXRVdSRGFRQjh0blIvamdDTk1UZ2ZUWXFMV1FwemFxV0Ixbk9Ba28wcHRZZ1ZheHNvWkRsTlF4Zlc0K2dFVXhpZG00T1o4KytKZ1czN2ZZbTI1NVNsVDNLYXEvM0puV0NQVUtUR3JkcHpxbW5IbjRrVDZTY2NSUi91eC92M0xUVG43VDJPRTd3a0UwRERZYmE2dklxZnZ5ekdVNXJtcHkvZVRCQ1VJa1NRRHlLZ1ltQkJBNndkNUtnSjBXSXB2TVZiT3hXY08zOUxKWVdjOWpOVk5sOE10R1Rtc0Q0L1Y5QUg3a3dRSGlMb2tvZzRxeUFoYTdjWUxIWXRuaHcyYnREMnNBK1RIQWQ1T0NHYk5JNnhhclplcGxQVSswd3ROMHVqV1FIbHlJY1Q5clNNR0Znb1ZERU5xWFRuYU1oRGhOVkpObXIxRGlWYVZvYURiZkpYeDRjNW5DeFFsREpsTXBpSnpudDhiQ3dsYzBMREIwNmlFTjMzNDNlc1hHNXlQVFNDcFpXdDNGOTV6WFliTjcyREkwaWs5bkIrT0VVRG80Tjh4cFI2Rmw3bm5KRFVkbXI0UndqSGNyNG52aGJHdGRzTnMrd0pmZWtNRW9pa2FXNG5qTmtmV1pJVHpXbEdNNFNEWVhRL2IrWDNtQXZzNFVVUGRSTlhUakU5bDVycXlvajNwQWJZOHQyWDA4eWl1UndIQXIvRGtRamlQV3hrenc4d3ZsQkx6dlFRZW1ad200YTZjMHNLdVV5UFdiZzV6OC9oL0dKRFRGZHhWdHZYOEZmL2VVWGNEQkZoY1BLb2UwOUtlNC9LS3JkL05RVWEzb3ZUSG04OHBQdm4yVXZjVXJrbStncGl2TGwydnd5UTY3T2ZtU0FMWEliei8va1pXUkxiTEt5azV6c2pra1VMTkhBMGI0NFBqTTJnT2J5Z3VBSTlqOUlDOUVnd2l4YW83MHhUbWw4ckFvQ0NQYjAwYU5SdHV0Q2JMTjc1YlBJa1BYNXEvajEvNzZNTnpsT25pZmFlalEvSG5wNENwdXI4MGdkVEhFb1VzYkp1OFp4L3oxSGVYdWQwOW82K3JwWVlYQ04zVDFkU0hRbDBFNUpCdFdQazBNSFRuYzhKNDVHby82MDNUS21EQ2E4TUc2RDJqQ1hMVkhGaDNCOUpZTlh6ODJpWWRnU3NWSkR2YmpqOEFGMDlTZngyaHRYMEJmM28zc2t5YXl0bzNGakUwNlRSNEdmSGVZNDFZbFh0Z3pFSkNjZ08xdWFVQzcrZ0l5eWZEWXQ4MWNoa2NmWXFmYVF6SVhXTUlxNytPeDk5K0s1NTMrSTQ4ZnZ3TnR2WGNDUjBRUVdWckxZSkJqcHpTckhaME9ZWDl1VzgvZC8rZWQvUW9SVEphWlBaNlRsYWYveC9SLytkUGt6eCs2YW1yMjhrSnBmMnNKUHp2NFdsK2RYQlhZaW44dWp3RXBhRVpOU0VicGMvSVdyODdodzZTb0dCNGY1R01TZHg0K3dRenpJMWQ1QU5DcnFOMDAyaklKUk5vUjZPV1B6YzVMREdadVg3UVF4SUJHVmhKeWNOaG9jTW1hUVh0akVlNXlKWjluTjF0bUpGc1BVZ1ZHS2dzMTE1bDZHT1d2aDlkY3Y0TXFWYTlqZVRtT0x6ZDJ2L3NVWDVTaGEwUGVyNTY1aDZuT25adWkxcDMvSE9IRnNaUm9YMzFsZS83dWx6UjAyUkx2UXkyWlBwZGJFMWNVMUx0U0hubGdQZkNUU1RMbEFHbkNHR2w5KzZEN28wVGlPMzNsSTVvaFhaVTFYTC9KdlAvc2tCQm5tU1R3NXdBZ0lVMnhvVXUwTDR5eTI1NXNWM2tlVVNKVUtkdGR2b01vaDQycW1JQ2VwOVdhTnMvVXNQditscitEZzRZT1l2MzVObE1ENDR3ZnV3Zno4SXRjU3g5R2p4MWhPNlRnME1ZRkxGK1lSOGdVZi9zR1Buc3ZmMnJpZHphMzdUejJRR0IwWXZEODFNb0pqaC9wd2ZISU1teHNaeWlRMlViYzJHRzYyVlB0VnpoRUVhb3B4MWJFN1QrRDRIWWNKQ0NXTW43eVAvWkVDZS93UkdqWEl5V2lmOUpiWDY1VUFJTW9pc3lFTUswdE5LYVVjUTdIQzJxL0p1Y0JTdW9BQWFlVmdmeGNWam9hQm9SVEhYUkg4K1ovZWc4TG1HclpaK0FZWUJSdWN1WWU3K3ZHTFY2OGdOVEdKWUxQNjlEZWYrT3ViaHBBM0dTZU9vUU1UcnpmcnphOVZHczE0YnlLQ0VML3c0dVZyR0IzcXdXZnZQc1M0VDBKMENuYTRHRUdzR3pzWmxoWXF2dnhuVStRbkRpRjlERWt4NEdCejFoY0lzNTBYb2NkVVIyRUlFY0F3Tk5tSmh0dXVGMjNxZXFtS1hLNk8rYktKM1ZLRitXZmhNeE1qTUwwaG5MK3dqSzFkcGdRRlE3MVl3TnZ2em1NclYrVG1WbkhpMkNUbU54dllMYXJMLy9hdHh4NzVvQzIvTTUrYm1abk9wMUluSCs3dVNjN21DcVY0S0x5SmJYTGF4RVNLSWFkUjdUZW9SRXlwKzNSL1NJNnozbnpqTFpUSlozNUNlNHZoNnUvcEowSnhrWElpNnVTb2JkaVNWaVFoazJxRUZKTWxFK3Uvd2tZYXk5czF2TVZjRnhUU0hTTjlETEQySzJpNHdIQk1wM1A0eFFaYkUyYWVxcWRGTkE2Z3p2UllXRnRuYXNUejcxMWNmUmkzT0R5M09wblBiK1dQVFQ1NFRmZnJYMHV3aDcreHNjVGlVM0FRT0xuSk1ud1pwblRHQUdmVnNZQVhuNXRJRWlkOVNLV0c2RFZDTlJjY29MQTJhMlZIK3duZU0weUhndzJuMkpVYVVOUnZETStkeFUxY3psbTR0cjB0cDdWaTN0N1BjSHgzWVIwbERrMGlBYllJbTd2U0U2SzZid205cTRpeVJ1WDNlci8rOXF0blhyK1ZIUi82VTQyWFh2cnU5TVJnN3hNeGxpYWlwOUpncnovTDhSVDd4VnlmR0JuYkdCaE00b0Y3ajhNa3RLK3ViVEN2ZkU3NE1ZZlVVRlI2VFpVOUY5c1pnN2xUSkNsOHhSaEx0TnEzTXdpT0hVSEpkdVlUQm9WRG9WYW5ZVnZJVTYrS2RrU3hXVWFlSUZVVHZWR0d1QmhUeDJOZHlCVUxUL3oycGU5TWY1Z052L2QzS04vKzdwa3p1WjBiVDFpMk15NCswdFdIQkdmZ0hrNUREWWJhWmliSGpoVTd4VVNzTGZLYitFV0NtR243ZUU0TWk3M2hCRlBLNDlSZU5GQU1NQjBSNk13QW0wUkpUM2NmWXBPVDhIUEJYcmdqYXQ2N1VxbktHWi9OcWtOcVhMRWh2TzlJZndMMzNIVUVrMGVPUFBIdTNNeVozN2Yrai95UnpmL00vUFFNVStRUlprKyt5Qy9icVJJTWhQZ1JPOC9ZUDM5aEFkYzNhOGdXbTdLcWx1OHg3QVRFNnh3dUNpVWlPOGIwcmpUVW5jeWFkZlpOOUNoNjc3cmJ3WldnYU1wU1FmTGFBOUZ1K0JYT0d6alY5WG85T0RTV1JKeFVjdUxJR0k0ZkhNenJqZG9qenozL25UTWZ0ZmJiK25uVThzTGxhVThvZktwc3RKYnJvbURsVGc2UGpDSEFUdkcvUHZVUHVPK0J1OWxKRmcwWmo5eDVVMWExTGRsWWxiTndZWmpxOVBpRndtbXhsVjRwMXBFOGNhOGtkMUg0Q29GZ3VOT0lXRjhTNDBNa2ZxdUpzRi9IeVlsREdCL3V4NWNldkdPNWxzdWQrcS9wLzU2K25YWGY5Zy9iM3B1YldaNDUrNE14YnZuVElxeW9HREhSbmNERzhoYmV2YktFU1JJcDNJR2c4SkI0dElpSXZvRVVGKzd0MUlZQ1dIWXBuOFkrL3hVV3NWVTVLTkU0L2hKNXJMaGROWlVHWDg4WFdPeHlLc3ZRdlh4cERxc2I2Vy9WUWpqMTc5UFR5N2U3NW8vMWswUnhYSGxuNWlsVHI0M2xOYy9NSmtkUWl4ZFhzSGpwSFh6bGl3KzViVDhMdXBoOWMxRTZQZGNrSXFyaHVQU09TVy9tVnBjUk9YZ1VWZkpXT0JLWGJRYWhRNzNVbkYwY0hmdklrMkZxUkkvaXBUQnZpSUoxcHI4M2VlcVZOMy81K0tPUFBwSC9PR3YxNEJNYytVd212N0l3OTczVStLbVhEVjhnbmkxbkpyNzVOMTlEcVppbFhxeEtPaWptODFLZUJlTUp0dHFqc21EMWNKcWpVc0tOUGZDUTdNVkVpSGpGUW82aXZZR3JsNi9MMzdiMHhLUDRrd2RQSVY5cXpxeXZyVHg2N2RxYlQxK1lPN2VGVDNCOG9sL0t0bytmL2V3L1ovZzBjL2JzaXlrQ3hlbGF1ZnFOYXFWMFVvUnRuY2k0czdWSlRSbGhYdmtSR1J5akFFOWo1TUE0eVo5NTV0VlFJNmdVY2puMlhtcVVialdFTlgwbUd2SzhmTTlkdzJmKzlyRi8vRmhldXRXaDRGTSt6ci80WXNvZjg1NHM3bTVQbFhMNUV3ZU9Uc1lacGluTm84ZTkvcUJFVDNvMFg2SnJTK1g4M09xMTZ5dmhjSFR1MjkvK2orbnBtWmsvMktEOXgvOERIdG5FOU5ZS1RUTUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEY0FBQUEzQ0FZQUFBQ28yOUpHQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQmpVU1VSQlZIZ0JyVm9KY0YxbmRmN3UrdmFucDZmRldpejdPVTY4eEhpTHdXa1NGZ1hLTkcxU0VGT2d5WFJoS1cwek1DVk9PMjJITUVBeWFhQ0ZRcElPMDNZNnd3UklweG5HN1pBMGdZYVV3WElDSkk2VFNBNWU1QzJTTGRuYXBTZTkvYjI3OEozL0xaSzhFR2Y1TlhlZTNuTHYvYzkvenZuT2Q3Ny9hbmlieDU3ZTNrUXVtT3NMMnViMlJMSWxCZmc3Z3BhZFNNUmlpVURBZ21rYXlHWVgwcTdyanVRTFRqb1VEZ3hHdzZIOVJpQTQrS2w3LzMwRWIrUFE4RGFNdnQ1VW9pdlJkWmZobDNyRGdWQnZhMXMzbXVOTlBPS0loRUtJcXNOR01CaUE3N21BN3FOY2NWQXMrWmlabVVFNEVrWXdFSVRtZTRPRlF1NTc2Ym5aeHoveU5oajZsb3o3VE4rN2UxM0gvVW81bCs5Tnhwb1FpMGJSMmRhQ05WMmRhT0gvSVJwaldCb0NuTGhsV0xCdEM3N3YxODcyeFJnYVdJTHJPalRhaCtOVStMNkE4Zms1bkptZWV2eG5MNy82OE9QOVEvMTRrOFBBbXhnZnZQSGFIYnZXZHp3V2k4YnVMWmZLS1VQWEViS0RhR2xPWXMzcWJuUjNkTURpWjRZaGhsVTlacG1XT2xmVE5INXVxUERVdWJUeUt1Y3pUTlZCaTFHaXNmbEtaZE5pdHZqSjNodDM5ellGL1AybnhtYlNlSU5EZnlNL0hoZ2VUb3pOWngvY3N1UEdBYy8xZW5QNVBDcGNiY013RVdMb3RiYTJvaW5Sckx4aldTWW5ia0kzZEI1R3c2aGdJS0ErTjNtT0xndkF3N1p0ZFg0d0dJUnQyWWpTMDJIRHh1ck9MbmllMTJ1SHdzTS8rYjhmZlFWdmNGeXhjY2VHeDFNUlBURGdPZjRlUmhROUVrQzVYRllURE5nQnJPcFloU2hEVWVPWEhvMFRRMngrcm1zNnZXYXFpWXNCWXFnWTd6RWtsY0g4VG9iOEw4UG5TNFRHUlFQTTAyQUlwa1VRMGp4a012UDNuaDZmR2o0MlBKeTYwamxma1hGSFQ1M3I0ODBIT0t1VTVNZk03SXo2WEZaYzBqWVVEcXJKbVp5NDR6aVFlWXJSRW1JVzg4ejFQUEVBaXNVaXNwa015c3l6VXJHa0ZxY2svL01vRm9yS1lNL2h3ZkFVRUdvaUlDVVNUYkFaM3FkUERQSGFic28yeklHancrZjZybVRlcjJ2YzBlSHpkMm02OWtNZmxZVEhGTTBYRjFGaDBsYzBHMldQSVJXSXdLTjNTazRCVGlsTGUwcHcvQ0xLcUtpTWR0V0VIZVRTaThnc1psQVNnN0w4ZmpHSGNyNEEzM0hoME5BaVF6eS9RTU1MWlJUNWU1OHowN2tnczlQakNJVERhRzV1UjdtWWgyZm9DVXYzZmpnMFBMYm5MUmwzOVBUNXUzelhlMGk5OGVWbXZzcUhOYXRYODBSTmhWMkE0ZWJRbTdMNlZRVDBZUk04NU1MaUJib0RBcEErbzg4TUVFZ0VSSHhYZWFPT214S3FFdWEySExZSlRVNldzR1habUprWVI1azRzMm56RnBYZjRsMjVIZ1Bqd2RjejBMemNGeThkUGRWWExwY2VNbXM1SVVYRGtWemlsTUt4S0V5QmVVNHFrMWxrTGJOVm5aSUpSaU14d3I1Tjd6cjBuSVlTUFNHL0MwU2lDRWJEcWl4b3JnZVhpNkdYOGlvbjdXQlk1YUdFZEtGY0FEK0d4L01xWlFlVGs3TUl0SGJEQ2pOQzZHVlpMR2d5QzE4VzRjSGp3MmRITnE1YjgvZ1ZHemN3Y0N6bGU5b2pQb3V0NUlya2o2Uzc1SktzdHFEaWNVNms2RllRb0pjRUtKcVR6V2hwYVNFQU1GdzUwUXJ6SnAzSll2ejhPT2Rpd1lvM28zM1ZLclFRVFJNMFJxc1FhT3lRTWtwS1FLbGNRWjdobnVOMXB4YnlHQmtlUXpwYlJpYnZZT3UyZDNJQkluQXFaZjdlNVh5c0tobFFidGNmSWNnTWJsNjNidVNLalBOdGV4OWZFZ3JWUEs4SzdlSUlNWkVyR3VQRm04d2dpcDZncFZZRkUwRTFldGtWRHpBYVJ5Y21zRGlYWm1HUGNRRnNuRGwxQ2llUEhFWlRMSWFPUkF2V3JWMkRjTlJtS05ySVpiTllXRmpBOE9nNW5CZ2ZwMEZaRkhORnBCZEthT3RhaXcvL3djZkphQ29Lb01Rb1g4Q0s0U252Wlo2YVp1MWptZHE1YzkyNjlHODBidURJNmEvd2xGVERVREdRSytzeEZQU1FoY1ZmSGNUYWdJWk50OTJHWHh3NlFEWXhvMXhxYWlZTHQ2V01kUW9sdE1UaTZHcHB3b2t6MHhpWW1HV29CdEhUSGtOY1o3NlpGU3d1ekNJVzZrSkFrUEQ4S0E2ZkhzVzViSW1BRVdUSWE5aTE4UnBNVEtlUnR4T0lNYVFMcFFyRFVOQ1k1Y05pTkVuTytxZ3hIajhWZ2lGMThPN2x0cXdBbE9jWmpvVHRlMWQ0c1JZMkZmNlY2U21qbkVmYzFwRnNqdUg5NzNzM2RsOTNuYUk1bXZyamFta09FbUVkTGZFZ1ppY21FUS9GMGQyMURwMnBUZmpBcmIrUEpPdGgyK3BPMkxFQVlKV2htYncyRitUcTNUY2dzbWt6eko3MTJMQjVKNDRQSG1ZWmlHRHRsdldNSHBmcjU2djgxSFNGTmhmNlJHcnJuc01uaG5kYzFuTU1xMGZFR0I4clNhY1VaYUkrMllTTGdIeEJhenlkRUU4WWEyTU9hVXh5cVhHZW5NY3FyTGxsUk1oUXRtemN3THcwY1pWbW9aRE5ZT0xWbDlBWkUyQ0pJYzNTNEpZMUlpQlVxTnEyaHVzVE1XUUtjaTVCNXRvTm1LdDR1R3BWaXNiNWF1a2s5MDI5eW5iZ0x4a283K1hRTGVOQnZyMzVJczhkSERqWnl4TjZhKzVTSHZPWFg4RGpCWG00Z3BwRU81TmhtcDlmZ0lCK2U3S1Z5Rlptcm5sRXVnb25RZnJFK3Bkb2FrWThhaUJKNzdSRkkraG9hV2R4anNISkZoQWk4SlM0akxyTEtkRENjbVlPTFV6c05tUVJjdFBvYm84anlEUm9ha2xXRnhoVlNtY3h0K3ZHMUkrNmdUTC9YNTBjN3IzWWN3YnVXdTRwWmJtMjVEOUdHeHg2ekE1R1lZZmppSWJaQlFRWFlJWkQ2T3JzSk5vVkZhdjNXZk5Dekw4S1lkdjBMVVNpemJ4TEhpWG1pTTRGS2RJd1JhRmRNaE8zd0M3QVFFR0tObS9WMDlwTUNoZUR3VVhLWk9jUnpMTm1zaDJTMmxhbmN4S1dMc05VUEZnSHUrVkRNelRKdmY2RzV5VFhmTjlyVUJxZko5VzlKeGVRNGZoU1kxd1k3VjM4djRSc2ZoWnNSb1ZKb2pVUlp5aHlncHhoUmRaRHR4a2lBWGhFdUFyWlI1NEhyV0FZczNRRUpkZDBaQmwrVHNGWHJWQ1V5RXNXcXRKQkRrK1JiYUp2S0lJS1MwWm1vVUFBeWpHVUY1QW5reEh2eWR3YU5BOUwzSlFyMFRzd01KeG9HRWN6K3Z4TGhLSTZxZlphcG5HYVI5NllTR0Nlb1ZRaEY1elBMV0krbjBOVGE1SzVrdU81WEdGNmgxSExTVEhVV0kwRnVnTXN3Q0Y2TUJ5SlMrWmdlbW9HYm9XZnM5NTVycysrTDFTZHBFbXZRRm9lZ2hjOTc3TnpXQ0FsSzVYSzlCcFJsRFZWK0dqVk1BbEpYYjNXUFZnMzBJeDZleHJHOFhxZnFIdXA3cW42ZTZmUlozSEN2TFZESGhWSmJjZmtYSUV3YnFPbmJUVkJ4QkEwUW9GY1VVTFpveGRsRXE1YnZaWVZwQ2NwTWN6TXptSjJaaFpCVGpMT0RrSThFR2xPc0paMUlGZklxKzdCSnhpVnVIQUxSWWNMNXlCR3NCSG0wOWJXcWtoQ2pHUmFycTBXbksvaXlmcjdKWS9vNzFORzdudCtJRVZMZG5qTExCZWp4S0JHd3ZJN1U4Z3gvdy9SenVDcUhpeTBuVVcybUVPSVpERXpNY2NjZ3BxZ2NFZERsNkp1cW5PRlVySDN3K3pzbFBKc2xHZzVQRG1GNHZTTVlpajVVbzdkUWdGejZUUTJ5UDJFYUROQ3B0TTVKTmR0Z2s2RG96VE9rVWlvWkFUVFVCS200bnFOZVVvN0pZZS9sRW9NellHRTlKSTc1QWRlTGM5VXJubGVvN21VbzlxRDBUQUU0Wm5pQ1dvaDdUMFlaUmY5djg4L2h3QnpReEpkWXk2bE9VbDI1eXBrWkVKaTNOVDRCQ3A1QWc1emJwN2ZaOGtmczJRaHdrN09uQnZEejM3K0xJS1JFQXBzaVp3S1pRY0MweXh6TEJoTFlwYVN3K1RrcEdxVDVGcjVRcUdST2tMN3BPMnFJK2lLbEFwRytreERNM3RWalpDZVg3MVcyMzZKVlVNM1ZDOVdqVndQT2Q0bzFoTEh6T1FFSXF4djJXd3pTalN3VEE1YXFiRFlzKzRaTkNyTFVBbHdFWUlNUlpsd3NWamhwSUZ6TkVUcVlaYWNzMFFlV1NaUGM2bXhsSmhmTDczeUtzc0RTMGpZUW83SU8xM080WnBvQWlaelRiSW5HSXVvdVhGNUZjMFR6VVVNazdDVXNLMm5FK3F6OWIwZFpqZ2MyaTRyTGFzaVA1b2dKeHdkSFVXQkszVGl4QWxzMjdZTmtVaUVZYWJ4eGlFODhMWDcwZFhWaFh2dXVZZUZPWTE0VTRMbmt1RXo3Ulp6QlJaZ2hsQmVhSDBaSGF1U2hIZ05pd3pYRTBPbkVXWVl0bEZuV2R2UmdqanBXWWFBNUhOUlF4dDQzK2xwSEh6MUtOYjB0Q0FTaktNQUczR1dCcDlvMmR6ZXluQ09ZV3BxU25scmdhaFpUeDlwdFRxbzJWd0VoRDVTakxuQW5xRmp4enBPbkRpSnJWdTM0dW1ubjFhVG41dWJVN0tCSkxHc3p1enNOTFp2MzRaRGh3NlJGaVdxUmplMzRQeklFQko2a1Y3Mk1UUThTb3JHZkNQcTZaUUdKUGQwSXA0c1hBdkxSaVFRaHB0elVNbTVPSHQ4QkhscVBxVjBoczBxZ1lIZWloQjFoWE5XQ2dReUV1ZTEyM2V4M2hVaFdvMUVsNFNmRUd4SkZSblZIaEpxOGV0aHVYUVF0L0s1WEdyenBrMDBoa2hHTkF1ejYzM3l5U2R4KysyMzQ2bW5uc0pOTjkyRUF3Y080T1NwSVNUWjF1emF0WXRkY1RNV0Z4ZkpFenZWLytXNU02UmhUZFFnWjFrU1NnaFkzWXFhU2RjVnpKZTQ2bkcwZDNHUkZ1bVByaUJsU3hPQkxkY2l5ekQzdkFxUk1ZTW1seUVZRHVEc21JUGo3QXk2dlNLQ0JLbEMwRlQzRmNBUTQ0eGxZcE8wWHNJN1BhOXVrRmNERkdWY3dteW1HeHdXMjU2ZU5YajAwVWZWNUF1NVBOTHo4OWk1Y3lmaWhON3U3aTZzVGExR2tsU29yYTJ0b1ZpWlVvdm9GVjAzR1hKaGJGeDNGVjVrV3hPeURGelQwNGs1MHJNa3hkbldKTFVXMWpXcXk2cDFXY3d2TXZkc2VDRy9XaTdvaUVoSmx0cG5DSmN3NDlyNDNiNFAwZGdva2p5bmxmVE80djFrNHNKU0pLY2FVdUJsaDU4d3IzdlhPL0hvOTc2UHozN3VjN2gyeXhac1lXaHUyNzZkdENtaUxqWkhJN2R1MjQ3eDhWRk1FRWg2VWowNGN2Z0lrYy9CZTYrL0FWbDZQR0pLaWptNGZ1czdzRWdBT1hXSytjV2FjTlhxTGt6T3pxdDJaZTJhTHF4cVN5cUdVcUpYaHZpYjhYTlQ3QzdDNkY3VmdpWWFrYzdrY2VUc09iem5vNTlHY3NkdStHV2lOdHVvdWtKV0w5U1NYdlVpN3RXYTFsb29yc2c5L2FyMTYvR1AzL2c2U2ErTDkvLzJCNFJRNHVqUU1YSkRSMUdoSjU1NlVuMG5DVDFOMVVzd3FhdUhYbXh0d2FmKzVJK1FaLzNTUlBVaU03RTFGNzN2Mm9VdXFzNWpZMk9zVlduTVpuS1lwVGRHR2ZLTExQS0NmQW15bGU3MlRuTFNEdlF3dEtOTUJUWlRHQ1p6Q2JkMVl1ZnVkNUc2ZVlydTZhYmVRTURsSkxuV3h5MHpyRzZVMXZpOThKZDBobkxiVDMvNlU1VkhJcG9PRGc2cS8rV0U2M2Z2VnBKY2tEcmkxcTNiQ09rKzJya1hJUEUvZk9vb1BaZ2phMktzczl1V2hZa1lIbjZ2OXoyNGJ0c1c1ZW56MDNNNDl0cFpIQnVad0hGNjZ2enNBaFo0Ylp1ZTdlNXNWMDFubWd0d2xvWDlsV01uc2ZQNm0ycjltM1FDYkhFTXZZYU1TOFpkYnRSTFd2VjNXdHI0MkIxL2ZDZEJKQ0VJcUJRb3hyYWdwa3hlV0VzeW1heXVEQzhlaTdNakNFUnhpRFhwenIvOERMWEdncXBuT3pmMGtLbXdFeER2OGRWbVRzYWJZcXhSRmc0eGhITXM1ajVybURpaklycWsxQ3BMOUV5UkpIeE1MV2J4OHJIWE1Ndis3cU9mdkZQSmdRUmJHbTRqd29nUlRua2hHaTUvdjd6MWFYaFUwNGFNejM3K2I3aVo0V3lxRzdlaVdWMTJzbW9VS2J1VmliNS85N2YzWW5wNlZFSCswT2dFMXJPelh0L1ZKck9oSEI1VURhdlAyWVVpNUlTcjJuRDR5QkdjT2p2Ry9FdkRFVHJMU1UvU3E5bGNEaG1XZ2RQak0zaDFaQnkzL2VFbjBkWnpOUTByS1FKdUVqekM4Vml0eDcvUVMvb3lZN0FpUEd2NU4yUVdTOFV6Rm10Ui9VZXEwdGNhWGJtQTB2UDV2V1ViU3FQY3UvZkhMUENFZVN0S2I2YWgyVkg4eXc5K0FvdGhlOU03TmpCekhMajB2bTJJVkZmRWFvTElSMjc5SFR4M1lBQXZEaDdGK2ZGSnZNTEMzOXFTZ09GVDczVEttTW1VOE9HUC95bDIzL0Jlc3BPS2FvU2w5dzZ3WUdzWEdiWDBXZ2NWVWNTVy9RSTFBdzZSZU9pREY3cTcvaHRmNmZtR0NsR2Jrdm5rOUR3ZSs2OG5hR2dFc2NScUxFd3VzS1pSYTJULzlzMy9mQktSUC9zWWJyejJLbnFPN1F6WmlNYkpHeVRRS1M1TysvdmZnODJwTlhqMjRDQk9qbzFqK093WkJPM3F0bGFpSzRVUDN2b2hSa1dCalNydkszeFdCRi9lVXltMC9sSk8xUUdqN295NmtUTEVFZFhQcFRQeCs3Vjl3cDVMMnZ5RjlLVjZBVmNwd0tJRWc2clVGKy81T3ZYRUNmVzVIT201TVRiVVUwci8wRHdiWVRaRlgvaUwyM0dqaURyc3lSeUNUTVV2dzJOZjU3SE9sZVZnYlp4Sno1TjU1RlRPVVJiQVk4ODhqOTViKy9EbEwzOEp4VXlCb3BISm5PWEdKZk5XVGRYWExqRTNmOFZSNytucW5RTEw2VHI5NXAwNzA3eEEvOG9mZTZxVnI3cGN0cGtzZlBXQmIySDR0WE5FU3pteHBENFB4VHQ1TVZNbFAxdHY1TFVRdnZTdjM4VytJeWRJeXJsYnloVU1tMkdscWRBTnpKODQ2VndTVjdPVWJMNXFEWm9UUWJMOHJNcXBIei94Sko3djMxL2QzcXJ0Q2wxaXZWY1lkN2xCRHc3dTNMeHVwTnFKdSs3K0ZTZkNVeDFCZ09IMzJxbnp1T2Z2SDhDcmd5ZVV0enhLREFxcG1Gc0dPNEp3ckkzaEpEY2lWSkN0R3FFbTNQZnQ3K1A3UC9vRkRZb290Y3hTY002dUlpKzlXMGt0bWpDVE1kSXNsNHNpWFlGQlJQem1OLzVKRWZZd2M2M09IOS9ZcUJuc2U5OVRScW8zWmYwaCtkZFhvZ1JYT3hURjVOUXN2dnExZjhZWHYzZy9EaDkraldzcmJRWTNHazFQN1locXFBSlBKRW82WnNjNFdYNm5FUXpvY1R2U2pILzc3NmZ4clVmMlFnc0tseXhSTEtJcUptbzBPd1NIZFhOK1pwNnFNbjlQL2FUQ0tQQkl2Q2RJRXZidTNZc21ocVFzbkFwL1JSdjhaWWRYTzZyalFoVk1Kc2UxVTNzSGpXRHVQM2gwSHpsamI0N3cvSjMvZUF3dnZ2alNDdGVieko4Vk1wcmNna0FpOTNOS2M4Z3RUSERyV1BvbzJkQjNsWURxRm9HMXJWRjgreC91aGxaWVFIb3h6NTZ2d2xZcGg5SHo1NUN0RlBIUzhEUWVmL1psVmRRTml4c2lMSWI5eisxSFIwOFhhVnE1V29ZOGE4azRyWWJxN2xJZU5zQlFpY2YrRTV2Vzl2UXRlWTVqUHIxdzN6TS8yWWUvK3R3WDJBVWNYSWFlZWkzM2Fzb3pNMVZKQjVMQXZKUkd5aFVJSktqN3QxRXlZQm5nZWxWODJUT1EvWEFUNDRzbDNQSFhENUIrNWFseWNjT2prR0VuVHNHSEhGTmFxbG5LRFkzRlF2V2E5OS8vQUFHSWFXSEZsaW5NV25VZmpNQ2xqa3VBakVPdkVTNGVxcjl2QlBZUEh2M095Sm16MlY3T09WV0gzT1dlVXQwdjcxRm40K283aXBtaVp2blVKMlV2MjZIMjRiRjlzWFJYMVNuRFZ5R0NFazk4NXJrRGFHMWZoVlJITStHZUhtRlRLNXRzUDMvNU1HWW81RXJ2Sjd0VEZ1dmo2ZE5uc1BkL25tRy81cEcwYjJHYUJCVE1LNUlzbXlId2F5VkFWeko3UGNCWWxmczNydTIrN3lMalpEUjNyRHZFays0VXIyakw0cm1xRGVvTmI0cm5sTkhxYzAzVkl0bW0wZ2dLSHZVRWtkTXRRMU9NeFJlUVlTdmpzSlM4d0NJdVR6VnN2RHFsWHN2ODdZdS9PbzdKeFdKdDA5RldPMGt1UTlzMDQzajVsZVA0TVp0bnljMnhzUWtXL2hadWxTV1VnRlR0Q0x3Vm5qTWMzUHp3dzk5TVg5SzQ5UFRJUkx3NTFjd1YvSzBsZG1Jb0l4cWNXNlE3Q1ZFeHNCYXVDbDFOVVlDcHY0UVRxb3hRTTFmdFNrVTNGSXBLWWZkcDRNREpNVVVHM3IxN3U5SWpYenA4bk55eW9FUW9qOEJTSXRqb3dtN2NBTGxzSjNMc3lBKytjQVRQUFhzQXI1RFRpbGlVVExhaGpkS0R2elFySWRiM3JWL2J1V0lUOHFMQVRhVjZFMTdBSHVDcXBPcWRyNXErNTZqWUY2OUpXQ3F0a0JPT1VGZXBzTytxS2xEY09iQ3FXOGJadWRlNGNvc0tnVWx5aE4rcjI0a1JDK3dSWTBFRFc5ZTJrMENIOE12RFE4aVVlUTkySElHUWFJT2tlNEYycW14dFNpR1R6bDFxcjlmSSt6SzJiTitBdXo3L0NleCs1dzR1U0dYazZ1NzJkUmZhY3RHZStNaElmNXBJZHpNOWtWN1JZcWg5YUtOMjZMV1duOHB6dWFJV1FPcVdFbFZaN3p5Q1FqamF3ZkJpR1JBKzVlbU52SkNOUnZsM2l0TGRMNCtjd2VoY2prS3ZGQnJxajNydFNRaVcvMlR6YXBZV1d5Mi9wellhdFlhT0VxUkNmWHpvRlA3ODAzdllxdTFQYy9mcFpseGlYTFpCV3IvMXRqNUcwdy9sd3RWazltcGhDWGxrb3FwZHVFVzFsU3NlaTNDRFVLU0RzbDlTOWNud3dpam1KeGkrNStsQlN6MXNJMzJqREpIM0tyeWVMZDRXYlZPdjVtK1pobnNNU2Qxb1FrdmJabm85eUtYS3FjVlJNNjExNEo1cVlnMzFlRWQrY2Z3aitmVHBTKzZKWDVZR3pFK2RHRXAyWExQQTNMdWx6cjZobm1IUVZYOWx5RWFGUFA0VXRGVFhVUDIreHRLSmZJS1hzbmN0ZXdvMkFTV2J5emJFSFhuZVMvS1FHd1lrejJ5ekRHV2Rla2pBOVNzcS9FeUxPaVVSV08yZ2VyVlNzTlJrcXp6bmd0MDlmMzdndTVlejRUZHluTG5Ka3k4a096WXVzTGpmY21GcEVDRFJ5U3BFWExKa1I2ZjJTSVpCNzBtZWVacjBaR1QyUm9CeTNIbHVjWlZVdnRSQlNyYTRSTURWdk9yZXRuUUVhcWZJRUxRVWljT2dvRVQ5a25UTjBKZWVxRmd5enI5Ny9GVC9RNzlwL3E5TDRPWW1UN3pRMHJINWtLbHJ0L0NDUVduajZ6SkFoU1RhWkhQcXFYcFc3Y0VVUTVFdXVyYVpMRnRaOG9pSHFaZlV3MjVxaDVUcW1HN0pQcnFsT25IeGRya3NYTFg2UkpMUGNQZGRlVTZzaGVFWFV2SzZlcUtpK2pnRmliNTJ4L2pwZmQ5OXZibGZFVHVkblJnYWF1M1k5QVBaNnVJTkVzdTl1THpXMVBGSDBUWWZqUTdhWW5pNTNHaTBURWM5a0NQU2pmcUsyMWRDRGhUYjhYeUZwT0pGS1o5bFFVNldGWlBkaEZIVFJmaTdFVzZxM0RBeHZPK0ZLNW4zRlZQdm1ZbWg5T3prOFlkYjJxL1JmTFc5N0t2VnJMT1ZlcVBZMERScU9WSU5YN05LZHowUmswenUwamhxbDBhdkVRT3Z0dkdpVjJtSDBrWExSR0dMKzNleWsxdjFtUGF3NWJoM2pJMzBUMXpwbkRXOGlaSGEwWmN5WGVjUjNyUlhiaXcxVDFQUDYxVU5WZ0N3N01xZVRKaE5YMjdoSEVud0F2WFprZ3BwdzZ0V29nYWRVL1dtQ2lEQ1VseWRjbjdITmYyK2E5NTk3dVQvRCtJTmpqZGxYSDFjL1k3YmVqbXJ1NWlIZmZYSEUrc1RWWWJXUkJ4WENMSG9JdFF0Qy9tVERNOGlDNjg4UkxEU09PVmxRcnl3SDkvdytrbkE3eXVtWi9yeEpzZGJNcTQrTm0yNkplWGJWaCszcXo3QnZObXhYSXNSajNxYW94RFU1Q1pKZnZFc0pmaU1ZaG4xd2l5c3A4cUVSQkhROXBOOVA1U1dqYjYzT040VzQ1YVBGQTFsRXUzZ3JNV3IyMGtDRXBycHB4aG9DVU1rQ2FwZDZma3phYzlaVEd1R09jZ0puQ0ZJTU9RcWo3OGRCaTBmdndZOXpkdWdXamFHSkFBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURjQUFBQTNDQVlBQUFDbzI5SkdBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFCdTJTVVJCVkhnQnRWcDVkRngzZWIxdm0xWExTQnF0SHNtU0xIbEpIQzhoaXhPU1dHWW5DY1FoWVR1bkxENXBvZEJ5RXY5VnV0QTQ1N1FsWFE0NExSUk9Td2tjT0JBb1lGUEtDUWtrdGdtUVFCeGJqcDNZc21WcHRJNldrV2JSN1BPVzN1ODNzcE5BeUViNmt2Rm9adDY4OS91Mis5M3Yva2JENjN3Y09IQW9Fb2F4MnpEMHJWWEQ2OVUwYlp2bWVSSFBSUVRRNEZZcnFHWlM2WlhwMmJpV3k2VXJUblhZODl3amNEQzhaLysrT0Y3SFE4UHJjSWhCSVZPL2s0c2NzbXhucURLM2dHSStqMUJ6QzN6UktHeURSc21KL01mamY2N25RWGNkbEpkVEtNM09vWmhaZ3U0Qmp1WU1lNjc3OVlwYlBmaUovZmZHOFFjZWY1QnhEeDc0NlpCaG1IZnp6eUhYYzJBdkpHRW41cUJYYkY3WlFOVnhvZnQ4OE1XNllOQklUOWVoMFFneHp0TTAvdTNDNEtNWUgwTm1jb2JCczBFSHdlVkoxV3IxWUJuNmZYdS9jTzlodk1iak5SbjM4SUdIdHdIbTU2RnJRMnFoZkc5bGFSNW5mL01FVE52QllFYzNmQzZONDlXZGNBaWg3aGlxbGgrYUdNZHpmVDZMUnZEbXBTSld4cytodXJUQ3FMazB6WWJyT1B4QVE4WHdJYnltR3cyeG5zT2VyZTI1OVlPNzRuaVZ4NnN5N3Y2NzdvbzArQ0ozaHdiVzN4VnM2NEJybXJ5QXBpNnlzRENIekVxYWl5dkRUV2F4cnEwZGxYQVFPUnBScUZheGxFb2ltVnlBTHhEQTJyWTFhTFFaMVZRV2V0VkJsZEdxMGxwYnMxR0Zqa0JzTGVwNGZmanBFTDZXWkhZMTdMdjF0cDMzdkpyMXZtTGpEdHoxYVlLRGNjaXdmTDJXTHdDOU9RSzlyUTBGMWs1bUpZZlV5Z29zdjhXL2x6R1RtSUdma2FwbjFDcU16a0l5aWRGNEhBRit6K0l0TFVQSHBtZ0h0dmFzUTRNdnBOSzBJR0RUM0FpanF4T1dHV1R3TkxHSlpVb244RE9ubUVkeFppcGVUTTN0Mm5Qdkt3T2VWMlRjUTEvNTFtNTdiUFQrb0c1RnFwYUJzNHpDcWFrNENwNE5SOWV3dUx3TW0vWEZOSVhKOHp0WVl5UG56c05nVkRxaXJiQlpqNkZnQ0hhcGdvRzJMbXp2NmNlVHA1OUdRMzBkM256WjFkQWJtK0YydGNHbDhYSVpWK3FPZjdpTWVLVmNRSDVxQm1WRzNaRFBOS1FkM2R1ejU3Ti9kZkRsMW0yODNBbVAvZXl4Ty8zTnpWOXI2bDBYbU1zczRQNkgveGNQSDNzS2M5a1U2aUtOQ0lYRGNMaVFLZzBKaFVLTTBoTEd4K0xJNTFhd1pldFc2THFCcWVrWkZFcGxwTElaTEtmU3NGMFhiNzdpalpndkZPSHI3VWIzOXEzUVFnSFdJc0hINzJQa0xQaHBZSm5meTU4Zmc1SEx3MkFrSmNLR1lRUTB3L2pBKzIvNVVPWjdEeDk0QXE4MWNzZWZPSHFuNStyN0xkT0g1ZVFpL3U0ZjdzSFpTYVpYMEkvdGwxMUdMN3RJTGkxamJtNGVBWCtBcWFSamtTblkxQlJCcExHdWRuVlhWKzlYQ0RRclRGMkRvS0x6WVRIWkJnWUdFWW0yNEpNZit6ak1nQjhPMDlCZmNwQWpjdVltWjRGU2lVbXBzUlpkbEd3Ylpic0tyNjRSdnE1MitPb2FZT3ZhM2h0dnZuYi9xemJ1MS92K1pYZHdYZjhCLzdwMThQd212dkNsKy9DelJ3K2hxYVVaOVhWaGhKbFNJMmZQSXA4djhHeGRRYmdzM0dCcWhobkJVSDBZNVhJRnR1MnEyelEwTktyWHVWeU9rU1lxMGpHbVljQ3lmUGpvUi9mZzlwdmVCWStvV1J5ZmdjdHJTcHBMUzVCbmNZeERoM3B0VFFnMFJWR1J0SFhaTGxqdi9Qald0OTk0OVl1bTZJdW01ZkhQZnI3WForb1Arb3FsZ0xHNGhPWEZPWHp4Z1c4UnlnMzByRm1EbnA1dVRJekhrVnhlNGtMWmtKa3lFbzA2R3JXMmV3MzhoUHBpdmxocnpFUUZrM1VxS1ZzdWwxRW9GUGdkQndhUlZscUk0OW9ZR1RrTGZUbUxqY0VtV1B4TU55d2E3cU9qRExnMHlyY3VCdjlBTC95TkpEbVdxZEtXeVlDQS9GTW92dU9XalZkOTV6dUhmNXorYlR2TUZ6T095WDhvWk9rUnd5QVVrMTBrenA1RHNaUWpHdm94bDV6RDVNd0VUQnBWejlkczR1aHFhOFd1YTY3R2hyNWVXUFRvRWdGbUlqR0w4ZGxGekdmU3lCRkliTkl1bjg5QW1BaTZRblIxbUdaU2ozSlUrZG0zZi9ZVFZISUYvTkhRVFh6ZllaOHpFT2lNd3Q4azZTZE9ZSHBLZGtnZjlJaTQyUko3WkJ6bHhXUWs0Tk1QSGRqMytlMjM3dHViZmtualJrNk0zRzJzclBScVpCdkdjb2ExNFNIQVl2ZFl6RVV1TWhCMHNJNlJ1NFNQMXBZVzlLN3RaZTMwbzZXdEdaNWJoWlBOd3Nua2NmWlpBMnVaaWs5UHhIRnNiQUx4K1hrVkRUSElaTlNxVlVsTld3QkNlQW0vYStPQlh4eENxSzRPdDcvdmZRaEY2OW40TFVnaEd2eGNrelNtWFNnVFFlTUpGT2VUOEJGTmRWNnpxdG05cGhrVXByVDM5NmJsNmVPbmV3MmZjVkNqZDgzMmRoak56ZXFpQnIxODdPd0lFdWtVS3BVeWJyN3hiZml6T3orSlN5L2RpSzd1ZG9RYkc0a0U3RTFjcU83UXpheXR1bUNZYWVxRHg2ak1FQ0ZYU2xYa0NSQlNROUwyeFNqcFpZNWlKSVl5MmlJb25ZeVA0NHBkTjZDbG8wM1ZyOG5VMCtTWmFLeE5KMUVkbllXZUxhald6aFBVdWdWRjNhQnZ4OGMvOVpjLy9PcTMvblB1Z2ozNjg0MnI4NXYzbTVMVDlKaG02WEJid3JDM0RxQnQ2RHBjdjJzbkY2RGhMVzk1Q3o3MjU1K0NGd2pEcTYrSEhtRWQxRGRDQ3pmQXMwSjgrS0FGQTJ3VFRRU2VSbFZuclkxTmlQQzFvWnNxQThTZ1NxV2krcG11S0ptbTZGaWh5RlJqVFg3aGkvK3VhSmg4cGt2TlRpL0JmWG9jeHZ3eWZBSkNyR2svMjRhZnRlZldCVkYzMlFZMFhYVUZyS2E2enovZm5vdkduZnZTTjRiY295ZUhBak1McW00TUlUNWFEY2FkaGhEYWV2dWxSK09QLytRTzNvNkd5eG02bjFmdzhTRm82YWpVOGt3aUppTlFvVkhTRm15bWxhQm5rUFVwQ3hMd2tZZ3gwVkFsa3RxOGwwTWo1VkcxeXpXQUdSM0IwVjg5RG8wMTY1NGFoemEzeEQ1SDYrbHdrOWZYV2J0ZW5SL1dobTVFcnRvQ2l3VEFJRHZ5bWNiUWs0K2RIdm9kNHdLR2ZxZkJSdXVPVGtCL2FnUm1namt0L0UvK280SDliQW50N1cwWUhCZ0ExTkpxWHhmajFVRERkTlVZRFowcDdMSTJjK2swWm1abkVBb0lCV05FcEJiNW1YeFBVK2lxcWNsQUdzV0ZhTXF6WWwxTTNZZStmeERHWEpvQXdqVXcvVXcrTkVsRDhsVmpmVGVDVjZ5SEdZdENaNXNTT3NjeUppcHJDTUs1K3dYR2pYLzd3Vjc2ZTdjMFZsTVNvWmlEZm5ZTTFXT25ZTkpyT20rdzhaSk51T09PTzRUK3FFTmd2R1loejJjOWVOVXlQRFpabHhGenlpVVUrWWdRdW50aWF4QmovYmgyUmFXb05INTVDSmFybEJRRCtkcXJzUS8xMnViZko4Yk9Jc2RyaW5QRllpMU1QdHZiQWQvV2ZtaWRUZENZbXFiVXFXUUtqUXBJK2s0bVVIN3kyTkR4ZmZkSExocm4zNzUrdDNIbFZsU2pSRHplUUdZc1diNHZWd0ZPVFFDUG42RVhsM0hiTGJ1aGl1UGlMTUJGVllyUThobG9oYkl5VXBwMmlVMWFYMDNEQ2dsdlYzTURydCsybVdTYTZXU29iNmswMUZiN1l5MWl6LzB0UjVGSU9EVTlpekpUMGV0dmgzYnBXbWhkNUtDbXBzcEQzWjdSOGhPUHpQRUZWSC85RERTeUdoL0x3L1ZYN3JyWUNoeS8rUkdQY0c4Mlh3SWtVM0FtNW9GTURpYnJRUmMyVU1nQlp3cnc2RDJ2bzVFTHFDcjBjbGxUS2RLeFIzLzVCTVlUQzFqTzVyQzB0RVN3ckxLZkJSRGpnRG9ZNjBRSEovSTM5UFlobHkvaHA4TW51SEJYcGJMcmFyVWFsQlN0NVlJeWtFaURDaWxYTXF4aDAyVzlFQUNXTHFEVlRsR3Bpekt6aFVCVElVWm96QktmakVYc3VhYTBEdzg3bFhHSjArTzk1QXZiZERaR1Y3NUZpcU0xMVVOYnpLSThsWUNWeXFtT0lVekRjMHJJeHhlaDVaYTUrRENLUzJsOC85c1A0Tm1wV1N5c0ZKRWd0ZEo0blFCbnRySW50SWxwUWxiZlFhN1pTdHEya3dTNXhNOGZPWDZDOVZmbHVZNnFPMDgxY3hyc1hxaGswaTZhbjZCVVVkVnFPVkpEVkU4Tnc5N3NFcW9zRnpOUFlrQUs1cktWZUpLOWRKSWRzbURFNm9lT0h6OGVNZDNqcDdmNWVqc1prVllpbmFHSXJrdUlkYnBhWU5KUWovRHJUaVRna2VWLzlWOC9oL2owSlBxYkdyRno1dzFZdjJzWE52VDJJazd2WlFuaExxTVo2K2hDWTMxSWtXbFpWVE1iZVgyb2ptMG16S0hWUVQvNzUxTnNGVXZaQ2hGUVYzdzAxa0tpemZQT3p5Mml3S2hMaXhCRGk4V2ltamdrWllXWm1QTUVwU25LR0V4WlMrcDBOZG9TRTQwUmMzdmFPZWkyZ2xlV090NXRHcG1sSWUvcEZPenhCdWlEM2REYVd4VVdTZ280a2lLa1FGb0hvOG1hYTNvbWd2LzU1YTl4K09ScDVPcWJNZkNlMjNINXppR2NKdjhzVkVxNDVZMDNvSC85SUNuYUF2SmNUSGVzQjIyczR3SWptbWRrUzJ6dUFaOUpROEpJNTFZVWQyeUxOS0NudllPQ2tZY3RhN3Z4eTlPanFubXpyMkI2WWhLSjg1T29MMWJoVCtVUktMdXEvNm9SbHVmb0RKZmo0M05YSy94ZEpOU0dWbk1HMncvcmJadkpTRzhWUnE5ekhOR09ud1phU0pQV2RzR05SbmdCbzRhTGNpOSsrZXAzNzhiano0eGdvTFVKMTkxOEkvU3lqVkJYRis3WSswbWtxV0xWKzRMTStTQzZDYzBPdlF0cDFwa01xa1RKK1dYeXpQUXlza1RpSmpLZ0JNSEdsTkdIYUxkU3lHUEw0QVlzTGlaVlA2dGhpb2ZUcDA3Z3Y1Z3BIVllZRzNpZm5wWU90SkFNQ1BzaFF3QjYybURTOFE0ZFZ2RTBCWGJpRjBsQS90K3JUWDNyUjhmTmRIYWJ0R1hYa09aTjNzZkZlVXdWcTY4YkxnZFNWeFU4YTRFb1dKbzVEem9Mb2Y1Qk9Jd1daeDRTYmFZQmExQmpQWkFWSy83bjBmQXlaOENWVkFyVFhQUTRWYkdKeFVVc0VLZ1dDVkR6L0t5N3RaTkJZQ09uSTNyYk94RmthajF3NU9jS0dJUlBEclpIMGNBRzVvaTEvTCtkcWIxcDdRQzJYSHNET3JaZWdrQzBvU1pIVkdYOElicXo1eGxjZzB0T1hKMUl4RTE5eCtaZWR6RUQrK3dFREhyWk5RampBaTRrenU0QzZ5M0tNV1JkTHp5eWM0ZEcxNjBicEZ2TVdxR1hxRnE1Yk54VWdZU1ZDRHVCVURmcDZha1ZGR2o0SklXakJHODJ4UWw5SnJWTTR6S29jQ0U5ck0zTmZRTVlJN0cybVNGeWJudDNqMm9UT28wSjhscCtBa1dSVGxJNkp3Zm1Bcm51WW1jbnp0QjVDeVBqaU14RjBOSFpTdHBXaEVoSnJhSzJUUzhRM1RtNU8xN0V0RFdPTmt3elF3UWZHbFBoR0dIbGlweXIySXVZSXVaaUNpNVIwV21Md0NSTE1WcnJpWncwekJZQUlhdG54THo1SmZZNFNVTzVPcGRYTEZNdktYSEJCV1E1eGlTelltUVNjMVRITXV4N05yL1hWZCtFK2RscEZGZXk2R3FKNHZMQlRSaWRueVY2S3RtVzQxU1FTTXNwZzA1c1d4TkRFNDJ5L0NIa3k0eDhjZ2FwOUFMcXlHZm5PVm81eVhuNDJaYTBqaGpCckU0UmVFMDNJMnBpbEhTVjV1aXRvVUpNSTl5WmVWUUo3enI3a2laTmdDZm9TV29mNlpNd3I2ZGtTYUNlZi9wcEJsQ01yQ0I3Ymh4OTczd3JDWE5ZVGVRQzhWV21iRlVFSGtZcHlmNlhMb3FoZWRaWFRqR0xiSDRGTFlFb1ByejdWc1RJWkE0ZEc4YjNIenVDQzZPS1ArQlRpbldrZzBheGpqWGRValZGdVJjNTFxMmYyWk9NbjBkbWFrcU5QcTNoZWpSUmNRdjVPTndHTEdZRDJaYkZmcUcxdHlqbUlNaGhrOVpvZld0Z3J1bUFQVUZQaXBaUlppUUZtYmh3RVd4K2RmZ24rTjVQSHNIWVFocEJGdk5WNUp1ZitlQjdWYU9WdlFCRDBzalFsZHBzVUJzUkpTUkhZM1hUVUJPSGNOVWxwdWNnVWRManRULzNuUWR4NU5TSTZubmk2WTd1THNUVzlzQWdRSG1HY0ZCSFNYd1NVK0c3dWNRa3hpa2VhZVRDOGhYdVN5Qm5GMUY1NWpqbnpUQzYxcmZCVDFKdDJvOGZTeVBhR1BGZnNwNnAxM1NSU1FzQ2VSdDZpSnp0cU5MQTh0Z01Bc0w2T1J4dXVmVTIvUE1QZmdTdG9ZN2NNWWJyMy9GMlZKaTZKZVorZ0dOTmxTcFhtVGZPTWpXbjV1WndmbktDdE14V2ZjdGpKRXRPRlkxMUFVNEJGVHgyNmpoR1ptWVZoRXYvNmVqb1FIZDNON1BDZ3FVbUNFTzFESVBBc3pReGhoVU92VmJWVmdCWEkrMjE1aTZUK2dLTlBFYTBDM0RHak5hSDA0U2lTdHBMTGtSS2oyZWdzOGRaRy9zQk1oUlhNMVdUZFlOazRSdjZZYkVIMmVlblVDREtQWExrR0JhcEZxL3JJZENRSVR4MDVCRk1UMCtnSWhvbWMvOWQxKzFnMmxpWUpUcE9FU2xsU00wSVdLRkdrbTAxSFhpb28wSW0wNER0S0hLRjFsYjJ6b0YxcTlHbFFZeTB4czh5Uk5wME1nR05KTUJrWkcyanR1ZEFOaTVoUXdOckxiWitBMEtSWnE1Qng1UEhUbURicFp2anBxUGJ3NXJteVNyaExjNFM1UllBTW5sQlNKUERxS09ycThEaFZLMXY2VWY4a1RFY2UrSUpiR1l0dEpGNVBNdEdXK1VDamo1ekZrVkd4S1ZESnFZbThlNGJkbUlzTVk5empFcWU2R1Y3TlpadVNlODBQVFFTaUN4bWgwWVFLbkpjNnVKTXRxNS9yUnF1cGRjWjVLOXBNcCtWcFNUOVgrSHlYTlVYWGEvbUlHbG9qWjN0NkZxM0h1R21Gb1dtcmhxZ0hPU3JCUXlmT1prMnJXdnlFMUlmaXNKb3RXa0FIaEd5ZUliazFhanhUWkVGTkJsTVRUdzcrbk1LckNYME5VY1JhKzNGbXkrL0ZrOE5IOFY4bFNTQXJML0VHNWZvMFNmT25FSXFYeWJOeWxCN0thbTAwNWxxT2owZEpNdUlVQjdVYW5ERndwZDBGTVZzV2trSElsV1VLZGdLcTJkclk4UFdsTXhIY3N1TWdOcFFpUkFuZkhSNHlXWEtaK2JZdUMwMXo0bENaeEZzc292MkNkTU5yUXdMV1pFdjBJM0tJNkpwcUh6bXhUVDJNWVZSR2tWWE5HTEh0UnZ3N0pOVCtNUUg3a0NTUmMzMVlzc2x1NUZndWhiWTk1NmRuTUlvWVQvRHZsV2tidUxqelJ5ZVZCZWttc1dHckdZMjFraTlESjI4cGV6anhUcnIyWWp6aWl3TEtzazVabGhrQmxlR2J6cUUzNU9KbndaYVFyc3NZU1JzMUVYdVQvQ2F0dEkvdWF0azEyVEdNczh4ZFBjd0JTWGZRYjU5ditMZHE0Tm83Y210R1VVYTZua2swdFphUXV4bXRNYjh1UDZHTW1IYWo0WEpMTnlzaTNidXp2UnVHbURhVUpCdGJjUHk0MGR4Zm5aS09TakU1bTR4SVFSQVJJVXVVeWNSeVNGRVdjQlZXa29WUWU0ak9Od2RFcU1GSEdRUzE0d2FCZk1VWUxneUJTbS9lOHdlVzgyQ2FveFZKTnRRYzBSdHdyOWdoRzdwdzJiZjluM3BxZU4vYzlqejdLRWF4NnJwRzBvQVVDTkpETDdnRmtMNmdFckxZTVJGMzRaTG9WT1lhYUZnR28yMUlVeHkzTXpOanp4Qkp0d2c2ZWtqSzBtcERGZXFzZ2lvbHFGYVJGMG9xSXdUY2l4ellaYXBTNGJLOFloYUpDTVNaT3ZRV1I3RkVrVWhJUkpTS1laRXhGUGFqU3pSdXpDc2V1b2pwZWpvZ2czZXFwSFFodSs5OThHNEdsWnQxejdDRDJ2RzBVV2FVcWs0MXZ1dWhFbkRCSkU4anpmMUhGVXpUZTFkMUVVeWFHcHVWY0tNUE02UGpwRktUZUZYVHczak4yZEd1T2lpS3Z3Z0M3MjVQa0NEZkdvL1FSQlFVa2RGeUsxdElWdFUwazZlT1U4SCtOSFdGc1g2L241MGRzWXdPallzVUthY0l0ZlNWemN2bGZOWDV6elZCbVRkd3BhWXZqcjdJb1hrcjErY3hLRUg5cnR1L203ZHM1WGRudFlPZitnNlZuT25HaDFsdE5Db0FzdEFLQmViR0IrRHN6eVBtWmxFYmErYk5UWEZPbnZzK05PWW84UXVld0tDYXVMSElFbDFNL3Roa0FPc3lPd0Mrd0w4WW1RcVZ5Sm8wZStzbGFwd1NEYm9DdG5HU2ltUDFyWWVyQi9jampQbmppbzFRRk5SRWJWTUpvbWFWbm14aHRpT05NTlVuMHRmcEtKMjhLSnhrcHFqeC9ZZXBpdUhvQThnVU1jZytzaTRQV00xajcxVk9hNlcxeTZqY1BEUncyUUpjL1I2U0VIOUNoRnhnWXFYVUNSUmxOVkV6aHRHT042RXlSUDlUTlVMVzh6aStSbWV1MXdvRWNhYnFZeVZGR3NwVXk1WXBoVGYxZDJKQWgzVTB0U0Z2cjV0bUp4NFdzMTdIcU1qaTY4aHI2R0FodVYwTVlxcW5ibjZEL2YvMjBQeDV5SW43enZlUGE0MU1CUnNlQ3RISEthUGQwR01mczZ3QzhmR1N6WWoydFdORTVRQmMra1Y1TWs4bE16bjFWaURwTGEwc3pyeXcxYXEwWUtNY3ZjU0Y1Zm11U3RGUnBicFhjZEIxZUY3d2xRYUd1czVMV2xLMGZaeDBSM1JOdlIyOTNLd0piOXNpT0E4VTdSYXpLcnhTT0JlSkFXWDJXU3NpbFdxRC9KN1ZLd3VibW05WUF0cmJ1ek1JZGNJRDhubWh3Uk10RVZOZnc2QkxoNnI3T0RoQjMrTUh4NzhFWmE1UjFkaTVFSitNYVllSjg2T3FvM0VuczRPdERJeUJzRWtTOTF5bGxIUlNHekQzQThRblVXY0pzK3pDd3RZb1Bidk9WS0xGYnp2dHZmZ3ZiZmRyZ2oyeUpsek9EMHlRbUFwNEJ4VE5KdFBNRE1zeFdLa1pWakNWNlUzNnFxRkhMN3ZTNC9zdXJETUYrd1YzSFhYcDArUXhQMnB0cW9LcTRldTQzY09zWlh2OXc5dXhJNDNiS0ttc1lJUHZmZFduRGw5Qm8waEVsZHVrSWhqUkVUS3NCbFBKNWV4ekFsREpQWUd5dS9pYVVsZFM2US9zbzhsN2lXSWxtbUo0VVRUdi83MFg2Q1JvbEtSMzExTXpDdm50alMzVTVKdlVXbVo0VVF2NlhoQjk1VDFDUHBXTlcvWDBhUHhpenM5TDFoNXJDODJ6UFB1VStmTEovckxiWm03bUJrZjVVWmtJNEhEaDF0dWZqdVNuTmVtVW1RbDVJR3ozS3FhcDFaaWNjR05uQmVsSndsNWxyMDVrZitLN0hsTGpMcWtncExKaWV1WGI5K0dDSjNqY3FKT2tuVG5DeW51N2Ztd2FjTjZYUEdHYTZpZDdzR09LOS9FWmkvWHFOUUFTcVJBRi9kOCtjdUg0ODlmM2UrRXBXeTcrM2l6dVBxZGlQYlN4b2tnZStUSVk3anB0ZytvVGYxbVJ1WHR1NjdGSlpzM3NBK0dGRVRMenFuc3BNcW1vN2NLNlhteUVua3RVWlAwa2tlUUJGMTY2enR2ZkljcUJRR3BQTThSVVVrNHBUaTdnMXd5eGozMGQrLytNTFp1dVY3QWd6WG95czVSL0QrK2NuamZiNi92ZDR6cjYrdExleFZuRjlNcS9WS0dTYzljbkI1bHNkZkR4NG5ZRjZoRExwTlNFbDJRa0IrbEpCRG1ndlZWYm5waEdoRERaSWhWKzMyTW9qaXdnVFVvQnF6aHVQT0d5eTlIaGVtNE5EOUh3WWdETXlOcXNqLzZ1WmtTSUIrMUFxYmFMOXl3Y1l1cWZlN3Nwc3NyenE0WFhlT0x2ZG5aMXhjbmt1L0JTMFVOVlp4OTVoUjJYSFd0Mmo4SWN3TmVoQnhaZUZSQVJOZVZuR0F6YXJKSElNWUk2TWdoRVZOOFk3V2VCUUVEWkMxYnQyMVRyMlcvTzV0ZHVhaGJOdEpoZmlFTHhuTVUwZThMWS9UTUlpemIyUFBBd1NmaXI5ZzRPZHJiMXh6VWJXZnZpeHNHR25ZU0R6MzZHQWEyWDZWKzVST2s5MjNXV1h4bUdpV2J5RW52U20rUTM1T0ljUkkxZVRpcisyN3l2bW41bEJNYXFXTkdDU0EzM1hTamFnMGxScTdFWWJkSURTVVFFTGxRWDFWZU5kVjd4VkdOamMxWVRwWDNmdlBnNDcvMzl5Z21YdUpvNllydFg1eWJGV0I1d2FhZW9KTnNJYi83MXR0SnZZSXFZc0dtS0RvNWxSOC9keGFKcFJSU21aTGlobEx3RjNaeUxteDBpTEYxZElhazc3b1k5OWlhNjNIYmU5K1BGcXJSbWVVMFVtUTV5NmtsaFlqaVNyOWZkQkcvMGpPRlZNdDEycUt0ZStPSnhQNlhXdjlMR2lkSGEwZlgvdVQ4VEp4Ni92Mjh1dG9hRXZheDVZcHI2T1V5YWovRW9MV01RaHNYR3V1S0ljVWRuM0l5aDVWOHJpWStrUjZKUUd1dTdvcktGQ0EvYnR2WVA4QXQ2QnZSdjNHd05zWlFOWlBGcDBpNlpTOGh5S2paM0pDTWNsL1FNR3UvQVNQWXBFazQ5Z3h1M2Z5eXZ5RFM4UXFPS0ZQVXRyM3RkRnk4OWs2TlJCazA2TUlyZ1RNL2dhV1JTbGFCdENwTGNWYU1FaVA4Yk5TQ2huNzJNWm0vUkkzdWFJM2lzdlVENUpBdHlMRmxsQ2duVm9tTVJVcnZZVkk2UDBGRVdzMDY2cVMrb0Y4aEtCTWc3dXJ1OWpVOWZTOXJtQnd2RzdrTFIyZG5aNXhQZll2emlYMmNydTRXejRxQUk3S0NMcjhwa2ZHZnZvcTJ0TlZtTVBFY0dZWXdmMkVoa2xxVmNrVU5sVzNjMm1ybFJISG95S1A0cC92MlkvdVZPM0ROam1zdzJOOUhZYWttSW9seDlRMUJOdTZvb25WTXlmdnlSV2Vmb1BrclhmTnIrcjFsSXBIby9jZlBmUHIrTjExMzlkQXlOeWR1WnUwSitqbVU5YzZmT29rRFAvNFJ4aVpua001a0ZZZ0lUUkpna0JqSDJLdWFHNXZJL2wwY09QQUR4VXpLZG0xL29DZldnWGUrODIxWXU2YUxqS1FGRzladlFuMVQ1TEJ1V0h0amZYM0RlSlhISzQ3Yzg0L1ZLTzVxajlRUFpYWC9uVGZCMnkzdkc2eWJydTRZaHE1bWU3Qi9nWE95VDI2R1ZhK1RXVTZvVllqYlYrc3BvMy9qdS84TjJWb1E3Y05UdjBSeE1FMlY2MnZmK0NhdXV2Skt2R1huRFljNzI3cnV1ZlRLcXc3ak5SNnZ5MitjSlpLbVJnTTFmSVFnc3kyZlNXUHFmQnhQblJ4V01rS2VsRXhORGRJZGFmQ0dnY3Z3dDUvOWUvVURBR0h6Tm8xZkU2bWpDbFk5bkM5VmorUktwZjNwZFBvVnB4LytQNDE3L3BGSWpQZFMxOWxXclRoRGhWUjJxMmZia2NUOFF1LzA5R1JrY1hHTytuNFFvNVB6Nlc5Kzl6dHBHamJNdEp5Z3RqOGNLSlVPeGw4SGc1NS8vQitNbUhZZGVuZnk1UUFBQUFCSlJVNUVya0pnZ2c9PVwiIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQm94LCBDb250YWluZXIsIEZsZXggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IElvSW9zQXJyb3dSb3VuZEJhY2ssIElvSW9zQXJyb3dSb3VuZEZvcndhcmQgfSBmcm9tICdyZWFjdC1pY29ucy9pbyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b25Hcm91cCh7IG5leHQsIHByZXZpb3VzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGgxPkJ1dHRvbkdyb3VwPC9oMT5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgYnV0dG9uR3JvdXA6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIG1iOiAtNCxcclxuICAgIGJ1dHRvbjoge1xyXG4gICAgICBiZzogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgYm9yZGVyOiAnMHB4IHNvbGlkJyxcclxuICAgICAgZm9udFNpemU6IDQwLFxyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgcHg6ICcycHgnLFxyXG4gICAgICBjb2xvcjogJyNCQkM3RDcnLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzJyxcclxuICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgY29sb3I6ICd0ZXh0JyxcclxuICAgICAgfSxcclxuICAgICAgJyY6Zm9jdXMnOiB7XHJcbiAgICAgICAgb3V0bGluZTogMCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBSY0RyYXdlciBmcm9tICdyYy1kcmF3ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHJhd2VyICh7IFxyXG4gIGNsYXNzTmFtZSxcclxuICBjaGlsZHJlbixcclxuICBjbG9zZUJ1dHRvbixcclxuICBjbG9zZUJ1dHRvblN0eWxlLFxyXG4gIGRyYXdlckhhbmRsZXIsXHJcbiAgdG9nZ2xlSGFuZGxlcixcclxuICBvcGVuLFxyXG4gIHdpZHRoLFxyXG4gIHBsYWNlbWVudCxcclxuICBkcmF3ZXJTdHlsZSxcclxuICBjbG9zZUJ0blN0eWxlLFxyXG4gIC4uLnByb3BzXHJcbn0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8UmNEcmF3ZXJcclxuICAgICAgICBvcGVuID0ge29wZW59XHJcbiAgICAgICAgb25DbG9zZSA9IHt0b2dnbGVIYW5kbGVyfVxyXG4gICAgICAgIGNsYXNzTmFtZSA9IHtgZHJhd2VyICR7Y2xhc3NOYW1lIHx8ICcnIH1gLnRyaW0oKX1cclxuICAgICAgICB3aWR0aCA9e3dpZHRofVxyXG4gICAgICAgIHBsYWNlbWVudCA9IHtwbGFjZW1lbnR9XHJcbiAgICAgICAgaGFuZGxlciA9IHtmYWxzZX1cclxuICAgICAgICBsZWx2ZSA9IHtudWxsfVxyXG4gICAgICAgIGR1cmF0aW9uID0geycwLjRzJ31cclxuICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgID5cclxuICAgICAgICB7Y2xvc2VCdXR0b24gJiYgKFxyXG4gICAgICAgICAgPEJveCBhcyA9IFwiZGl2XCIgb25DbGljayA9IHt0b2dnbGVIYW5kbGVyfSBzeCA9IHtjbG9zZUJ0blN0eWxlfT5cclxuICAgICAgICAgICAge2Nsb3NlQnV0dG9ufVxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8Qm94IHN4ID0ge2RyYXdlclN0eWxlfT57Y2hpbGRyZW59PC9Cb3g+XHJcbiAgICAgIDwvUmNEcmF3ZXI+XHJcbiAgICAgIDxCb3ggY2xhc3NOYW1lID1cImRyYXdlcl9faGFuZGxlclwiIHN0eWxlID0ge3tkaXNwbGF5dDogJ2lubGluZS1ibG9jayd9fSBvbkNsaWNrID0ge3RvZ2dsZUhhbmRsZXJ9PlxyXG4gICAgICAgIHtkcmF3ZXJIYW5kbGVyfVxyXG4gICAgICA8L0JveD5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbkRyYXdlci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgd2lkdGg6ICczMjBweCcsXHJcbiAgcGxhY2VtZW50OiAnbGVmdCcsXHJcbn07IiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgSW1hZ2UsIEJveCwgSGVhZGluZywgVGV4dCB9IGZyb20gJ3RoZW1lLXVpJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZlYXR1cmVDYXJkQ29sdW1uKHtcclxuICBzcmMsXHJcbiAgYWx0VGV4dCA9ICdkZWZhdWx0IGFsdCB0ZXh0JyxcclxuICB0aXRsZSxcclxuICB0ZXh0LFxyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxoMT5GZWF0dXJlQ2FyZENvbHVtbjwvaDE+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGNhcmQ6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6IFsnY2VudGVyJywgJ2ZsZXgtc3RhcnQnXSxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgbWI6IC0xLFxyXG4gICAgdGV4dEFsaWduOiBbJ2NlbnRlcicsIG51bGwsICdsZWZ0J10sXHJcbiAgICBweDogWzQsIG51bGwsIDBdLFxyXG4gIH0sXHJcbiAgaW1nOiB7XHJcbiAgICBteDogWydhdXRvJywgbnVsbCwgMF0sXHJcbiAgICBtbDogWydhdXRvJywgbnVsbCwgJy0xM3B4J10sXHJcbiAgICBtYjogLTIsXHJcbiAgICB3aWR0aDogWyc4MHB4JywgbnVsbCwgbnVsbCwgJzkwcHgnLCBudWxsLCAnYXV0byddLFxyXG4gIH0sXHJcbiAgd3JhcHBlcjoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IDMsXHJcbiAgICAgIGNvbG9yOiAnaGVhZGluZ19zZWNvbmRhcnknLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjQsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgICAgbWI6IFsyLCBudWxsLCAzXSxcclxuICAgIH0sXHJcbiAgICBzdWJUaXRsZToge1xyXG4gICAgICBmb250U2l6ZTogMSxcclxuICAgICAgZm9udFdlaWdodDogNDAwLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnMS45JyxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgSW1hZ2UsIEJveCwgSGVhZGluZywgVGV4dCB9IGZyb20gJ3RoZW1lLXVpJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZlYXR1cmVDYXJkKHtcclxuICBzcmMsXHJcbiAgYWx0VGV4dCA9ICdkZWZhdWx0IGFsdCB0ZXh0JyxcclxuICB0aXRsZSxcclxuICB0ZXh0LFxyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxoMT5GZWF0dXJlQ2FyZDwvaDE+XHJcblxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBjYXJkOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXHJcbiAgICBtYjogLTEsXHJcbiAgfSxcclxuXHJcbiAgaW1nOiB7XHJcbiAgICB3aWR0aDogWyc3MHB4JywgbnVsbCwgbnVsbCwgJzgwcHgnLCAnOTBweCcsICdhdXRvJ10sXHJcbiAgICBoZWlnaHQ6ICdhdXRvJyxcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICBtcjogWzIsIDMsIG51bGwsIG51bGwsIDQsIDVdLFxyXG4gICAgbWw6IC0yLFxyXG4gIH0sXHJcbiAgd3JhcHBlcjoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgbXQ6ICctNXB4JyxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbMiwgM10sXHJcbiAgICAgIGNvbG9yOiAnaGVhZGluZ19zZWNvbmRhcnknLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjQsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgICAgbWI6IFsnMTBweCcsIG51bGwsICcxNXB4J10sXHJcbiAgICB9LFxyXG5cclxuICAgIHN1YlRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbMSwgJzE1cHgnXSxcclxuICAgICAgZm9udFdlaWdodDogNDAwLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnMS45JyxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIG1lbnVJdGVtOiBbXHJcbiAgICB7XHJcbiAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgbGFiZWw6ICdIb21lJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgbGFiZWw6ICdBZHZlcnNpdGUnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcGF0aDogJy8nLFxyXG4gICAgICBsYWJlbDogJ1N1cHBvcnRzJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgbGFiZWw6ICdNYXJrZXRpbmcnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcGF0aDogJy8nLFxyXG4gICAgICBsYWJlbDogJ0NvbnRhY3QnLFxyXG4gICAgfSxcclxuICBdLFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBCb3gsIENvbnRhaW5lciwgSW1hZ2UsIFRleHQgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdjb21wb25lbnRzL2xpbmsnO1xyXG5pbXBvcnQgZGF0YSBmcm9tICcuL2Zvb3Rlci5kYXRhJztcclxuaW1wb3J0IEZvb3RlckxvZ28gZnJvbSAnYXNzZXRzL2xvZ28uc3ZnJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGgxPkZvb3RlcjwvaDE+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGZvb3Rlcjoge1xyXG4gICAgZm9vdGVyQm90dG9tQXJlYToge1xyXG4gICAgICBib3JkZXJUb3A6ICcxcHggc29saWQnLFxyXG4gICAgICBib3JkZXJUb3BDb2xvcjogJ2JvcmRlcl9jb2xvcicsXHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgcHQ6IFs3LCBudWxsLCA4XSxcclxuICAgICAgcGI6IFsnNDBweCcsIG51bGwsICcxMDBweCddLFxyXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIH0sXHJcbiAgICBtZW51czoge1xyXG4gICAgICBtdDogWzMsIDRdLFxyXG4gICAgICBtYjogMixcclxuICAgICAgbmF2OiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBsaW5rOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbMSwgJzE1cHgnXSxcclxuICAgICAgY29sb3I6ICd0ZXh0JyxcclxuICAgICAgZm9udFdlaWdodDogJzQwMCcsXHJcbiAgICAgIG1iOiAyLFxyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjM1cycsXHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjUsIG51bGwsIDEuOF0sXHJcbiAgICAgIHB4OiBbMiwgbnVsbCwgNF0sXHJcbiAgICAgICc6aG92ZXInOiB7XHJcbiAgICAgICAgY29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBjb3B5cmlnaHQ6IHtcclxuICAgICAgZm9udFNpemU6IFsxLCAnMTVweCddLFxyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBbXHJcbiAge1xyXG4gICAgcGF0aDogJ2hvbWUnLFxyXG4gICAgbGFiZWw6ICdIb21lJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICdmZWF0dXJlJyxcclxuICAgIGxhYmVsOiAnRmVhdHVyZXMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ3ByaWNpbmcnLFxyXG4gICAgbGFiZWw6ICdQcmljaW5nJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICd0ZXN0aW1vbmlhbCcsXHJcbiAgICBsYWJlbDogJ1Rlc3RpbW9uaWFsJyxcclxuICB9LFxyXG5dO1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBDb250YWluZXIsIEZsZXgsIEJ1dHRvbiB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1zY3JvbGwnO1xyXG5pbXBvcnQgTG9nbyBmcm9tICdjb21wb25lbnRzL2xvZ28nO1xyXG5pbXBvcnQgTG9nb0RhcmsgZnJvbSAnYXNzZXRzL2xvZ28uc3ZnJztcclxuaW1wb3J0IE1vYmlsZURyYXdlciBmcm9tICcuL21vYmlsZS1kcmF3ZXInO1xyXG5pbXBvcnQgbWVudUl0ZW1zIGZyb20gJy4vaGVhZGVyLmRhdGEnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKHsgY2xhc3NOYW1lIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgICA8aGVhZGVyIHN4ID0ge3N0eWxlcy5oZWFkZXJ9IGNsYXNzTmFtZT0ge2NsYXNzTmFtZX0gPlxyXG4gICAgICAgIDxDb250YWluZXIgc3ggPSB7c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8TG9nbyBzcmMgPSB7TG9nb0Rhcmt9IC8+XHJcbiAgICAgICAgICA8RmxleCBhcyA9IFwibmF2XCIgc3ggPSB7c3R5bGVzLm5hdn0+XHJcbiAgICAgICAgICAgIHttZW51SXRlbXMubWFwKChtZW51SXRlbXMsIGkpID0+IChcclxuICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgdG89e21lbnVJdGVtcy5wYXRofVxyXG4gICAgICAgICAgICAgICAgc3B5PSB7dHJ1ZX1cclxuICAgICAgICAgICAgICAgIHNtb290aCA9IHt0cnVlfVxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0PSB7LTcwfVxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb24gPXs1MDB9XHJcbiAgICAgICAgICAgICAgICBrZXkgPSB7aX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7bWVudUl0ZW1zLmxhYmVsfVxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT0gXCJkb25hdGVfX2J0blwiIHZhcmlhbnQgPVwic2Vjb25kYXJ5XCIgYXJpYS1sYWJlbCA9XCJDb250YWN0XCI+XHJcbiAgICAgICAgICAgIENvbnRhY3RcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPE1vYmlsZURyYXdlciAgLz5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgcG9zaXRpb25BbmltID0ga2V5ZnJhbWVzYFxyXG4gIGZyb20ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBoZWFkZXI6IHtcclxuICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICBmb250V2VpZ2h0OiAnYm9keScsXHJcbiAgICBweTogNCxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHRvcDogMCxcclxuICAgIGxlZnQ6IDAsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICB0cmFuc2l0aW9uOiAnYWxsIDAuNHMgZWFzZScsXHJcbiAgICBhbmltYXRpb246IGAke3Bvc2l0aW9uQW5pbX0gMC40cyBlYXNlYCxcclxuICAgICcuZG9uYXRlX19idG4nOiB7XHJcbiAgICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICAgIG1yOiBbMTUsIDIwLCBudWxsLCBudWxsLCAwXSxcclxuICAgICAgbWw6IFsnYXV0bycsIG51bGwsIG51bGwsIG51bGwsIDBdLFxyXG4gICAgfSxcclxuICAgICcmLnN0aWNreSc6IHtcclxuICAgICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JhY2tncm91bmQnLFxyXG4gICAgICBjb2xvcjogJyMwMDAwMDAnLFxyXG4gICAgICBib3hTaGFkb3c6ICcwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjA2KScsXHJcbiAgICAgIHB5OiAzLFxyXG4gICAgICAnbmV2ID4gYSc6IHtcclxuICAgICAgICBjb2xvcjogJ3RleHQnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNvbnRhaW5lcjoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gIH0sXHJcbiAgbmF2OiB7XHJcbiAgICBteDogJ2F1dG8nLFxyXG4gICAgZGlzcGxheTogJ25vbmUnLFxyXG4gICAgJ0BtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCknOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICB9LFxyXG4gICAgYToge1xyXG4gICAgICBmb250U2l6ZTogMixcclxuICAgICAgZm9udFdlaWdodDogJ2JvZHknLFxyXG4gICAgICBweDogNSxcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICcxLjInLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMTVzJyxcclxuICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgY29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgfSxcclxuICAgICAgJyYuYWN0aXZlJzoge1xyXG4gICAgICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm94IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBTY3JvbGxiYXJzIH0gZnJvbSAncmVhY3QtY3VzdG9tLXNjcm9sbGJhcnMnO1xyXG5pbXBvcnQgRHJhd2VyIGZyb20gJ2NvbXBvbmVudHMvZHJhd2VyJztcclxuaW1wb3J0IHsgSW9NZENsb3NlLCBJb01kTWVudSB9IGZyb20gJ3JlYWN0LWljb25zL2lvJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXNjcm9sbCc7XHJcbmltcG9ydCB7IEZhRmFjZWJvb2tGLCBGYVR3aXR0ZXIsIEZhR2l0aHViQWx0LCBGYURyaWJiYmxlIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5pbXBvcnQgbWVudUl0ZW1zIGZyb20gJy4vaGVhZGVyLmRhdGEnO1xyXG5cclxuY29uc3Qgc29jaWFsID0gW1xyXG4gIHtcclxuICAgIHBhdGg6ICcvJyxcclxuICAgIGljb246IDxGYUZhY2Vib29rRiAvPixcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcvJyxcclxuICAgIGljb246IDxmYS1pbnN0YWdyYW0gLz4sXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vYmlsZURyYXdlcigpIHtcclxuICBjb25zdCBbaXNEcmF3ZXJPcGVuLCBzZXRJc0RyYXdlck9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgcmV0dXJuIChcclxuICAgIDxEcmF3ZXJcclxuICAgIHdpZHRoPVwiMzIwcHhcIlxyXG4gICAgZHJhd2VySGFuZGxlcj17XHJcbiAgICAgIDxCb3ggc3ggPSB7c3R5bGVzLmhhbmRsZXJ9PlxyXG4gICAgICAgIDxJb01kTWVudSBzaXplID1cIjI2cHhcIiAvPlxyXG4gICAgICA8L0JveD5cclxuICAgIH1cclxuICAgIG9wZW4gPSB7aXNEcmF3ZXJPcGVufVxyXG4gICAgdG9nZ2xlSGFuZGxlciA9IHsoKSA9PiBzZXRJc0RyYXdlck9wZW4oKHByZXZTdGF0ZSkgPT4gIXByZXZTdGF0ZSl9XHJcbiAgICBjbG9zZUJ1dHRvbj17PElvTWRDbG9zZSBzaXplID0gXCIyNHB4XCIgY29sb3IgPSBcIiMwMDAwMDBcIi8+fVxyXG4gICAgZHJhd2VyU3R5bGU9e3N0eWxlcy5kcmF3ZXJ9XHJcbiAgICBjbG9zZUJ0blN0eWxlPXtzdHlsZXMuY2xvc2V9XHJcbiAgICA+XHJcbiAgICAgIDxTY3JvbGxiYXJzIGF1dG9IaWRlPlxyXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgIDxCb3ggc3ggPXtzdHlsZXMubWVudX0+XHJcbiAgICAgICAgICB7bWVudUl0ZW1zLm1hcCgobWVudUl0ZW1zLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgIHRvPXttZW51SXRlbXMucGF0aH1cclxuICAgICAgICAgICAgICAgIHNweT0ge3RydWV9XHJcbiAgICAgICAgICAgICAgICBzbW9vdGggPSB7dHJ1ZX1cclxuICAgICAgICAgICAgICAgIG9mZnNldD0gey03MH1cclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uID17NTAwfVxyXG4gICAgICAgICAgICAgICAga2V5ID0ge2l9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge21lbnVJdGVtcy5sYWJlbH1cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8Qm94IHN4ID17c3R5bGVzLm1lbnVGb290ZXJ9PlxyXG4gICAgICAgICAgICA8Qm94IHN4ID17c3R5bGVzLnNvY2lhbH0+XHJcbiAgICAgICAgICAgICAge3NvY2lhbC5tYXAoKHNvY2lhbEl0ZW0sIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxCb3ggYXM9XCJzcGFuXCIga2V5PXtpfSBzeD17c3R5bGVzLnNvY2lhbC5pY29ufT5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgdG8gPXtzb2NpYWxJdGVtLnBhdGh9Pntzb2NpYWxJdGVtLmljb259PC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L1Njcm9sbGJhcnM+XHJcbiAgICA8L0RyYXdlcj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGhhbmRsZXI6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgZmxleFNocmluazogJzAnLFxyXG4gICAgd2lkdGg6ICcyNnB4JyxcclxuXHJcbiAgICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSc6IHtcclxuICAgICAgZGlzcGxheTogJ25vbmUnLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBkcmF3ZXI6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ2RhcmsnLFxyXG4gIH0sXHJcblxyXG4gIGNsb3NlOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAnMjVweCcsXHJcbiAgICByaWdodDogJzMwcHgnLFxyXG4gICAgekluZGV4OiAnMScsXHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICB9LFxyXG5cclxuICBjb250ZW50OiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIHB0OiAnMTAwcHgnLFxyXG4gICAgcGI6ICc0MHB4JyxcclxuICAgIHB4OiAnMzBweCcsXHJcbiAgfSxcclxuXHJcbiAgbWVudToge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgYToge1xyXG4gICAgICBmb250U2l6ZTogJzE2cHgnLFxyXG4gICAgICBmb250V2VpZ2h0OiAnNTAwJyxcclxuICAgICAgY29sb3I6ICd0ZXh0X3doaXRlJyxcclxuICAgICAgcHk6ICcxNXB4JyxcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZThlNWU1JyxcclxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cycsXHJcbiAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgIGNvbG9yOiAnc2Vjb25kYXJ5JyxcclxuICAgICAgfSxcclxuICAgICAgJyYuYWN0aXZlJzoge1xyXG4gICAgICAgIGNvbG9yOiAnc2Vjb25kYXJ5JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgbWVudUZvb3Rlcjoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBtdDogJ2F1dG8nLFxyXG4gIH0sXHJcblxyXG4gIHNvY2lhbDoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG5cclxuICAgIGljb246IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICBjb2xvcjogJ3RleHQnLFxyXG4gICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgIG1yOiAnMTVweCcsXHJcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4yNXMnLFxyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgJzpsYXN0LWNoaWxkJzoge1xyXG4gICAgICAgIG1yOiAnMCcsXHJcbiAgICAgIH0sXHJcbiAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgIGNvbG9yOiAnc2Vjb25kYXJ5JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgYnV0dG9uOiB7XHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGZvbnRTaXplOiAnMTRweCcsXHJcbiAgICBmdzogJzcwMCcsXHJcbiAgICBoZWlnaHQ6ICc0NXB4JyxcclxuICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIHB5OiAnMCcsXHJcbiAgfSxcclxufTsiLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTdGlja3kgZnJvbSAncmVhY3Qtc3RpY2t5bm9kZSc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXIvaGVhZGVyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL2Zvb3Rlci9mb290ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFtpc1N0aWNreSwgc2V0SXNTdGlja3ldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdGF0ZUNoYW5nZSA9IChzdGF0dXMpID0+IHtcclxuICAgIGlmIChzdGF0dXMuc3RhdHVzID09PSBTdGlja3kuU1RBVFVTX0ZJWEVEKSB7XHJcbiAgICAgIHNldElzU3RpY2t5KHRydWUpO1xyXG4gICAgfSBlbHNlIGlmIChzdGF0dXMuc3RhdHVzID09PSBTdGlja3kuU1RBVFVTX09SSUdJTkFMKSB7XHJcbiAgICAgIHNldElzU3RpY2t5KGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxTdGlja3kgaW5uZXJaPXsxMDAxfSB0b3A9ezB9IG9uU3RhdGVDaGFuZ2U9e2hhbmRsZVN0YXRlQ2hhbmdlfT5cclxuICAgICAgICA8SGVhZGVyIGNsYXNzTmFtZT17YCR7aXNTdGlja3kgPyAnc3RpY2t5JyA6ICd1blN0aWNreSd9YH0gLz5cclxuICAgICAgPC9TdGlja3k+XHJcbiAgICAgIDxtYWluIGlkPVwiY29udGVudFwiIHN4PXt7IHZhcmlhbnQ6ICdsYXlvdXQubWFpbicsIH19ID5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIE5hdkxpbmsgYXMgTWVudUxpbmssIExpbmsgYXMgQSB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTmF2TGluayh7IHBhdGgsIGxhYmVsLCBjaGlsZHJlbiwgLi4ucmVzdCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxoMT5OYXZMaW5rPC9oMT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTGluayh7IHBhdGgsIGxhYmVsLCBjaGlsZHJlbiwgLi4ucmVzdCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBIHsuLi5yZXN0fSBocmVmID17cGF0aH0+XHJcbiAgICAgIHtjaGlsZHJlbiB8fCBsYWJlbH1cclxuICAgICAgPC9BPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRmxleCwgQm94LCBJY29uQnV0dG9uIH0gZnJvbSAndGhlbWUtdWknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdCh7IGl0ZW1zID0gW10sIHBhcmVudFN0eWxlLCBjaGlsZFN0eWxlIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGgxPkxpc3Q8L2gxPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBsaXN0SWNvbjoge1xyXG4gICAgd2lkdGg6IFsnMjVweCcsICczNXB4J10sXHJcbiAgICBoZWlnaHQ6ICdhdXRvJyxcclxuICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICBwYWRkaW5nOiAwLFxyXG4gICAgZm9udFNpemU6IFszLCA1XSxcclxuICAgIG1sOiAnLTFweCcsXHJcbiAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JyxcclxuICAgIG10OiAnMnB4JyxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBJbWFnZSB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ2NvbXBvbmVudHMvbGluayc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dvKHsgc3JjLCAuLi5yZXN0IH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPExpbmtcclxuICAgIHBhdGggPSBcIi9cIlxyXG4gICAgc3ggPSB7e1xyXG4gICAgICB2YXJpYW50OiAnbGlua3MubG9nbycsXHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgIG1yOiAxNSxcclxuICAgIH19XHJcbiAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAgPEltYWdlIHNyYyA9IHtzcmN9IGFsdCA9IFwiV2hvb3p5J3MgbG9nb1wiIC8+XHJcbiAgICA8L0xpbms+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBCb3gsIENhcmQsIFRleHQsIEhlYWRpbmcsIEJ1dHRvbiB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpc3QgZnJvbSAnLi9saXN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByaWNlQ2FyZCh7XHJcbiAgZGF0YToge1xyXG4gICAgaGVhZGVyLFxyXG4gICAgbmFtZSxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgcHJpY2VXaXRoVW5pdCxcclxuICAgIGJ1dHRvblRleHQgPSAnU3RhcnQgRnJlZSBUcmlhbCcsXHJcbiAgICBhbm90aGVyT3B0aW9uLFxyXG4gICAgcG9pbnRzLFxyXG4gIH0sXHJcbn0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGgxPlByaWNlQ2FyZDwvaDE+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHByaWNpbmdCb3g6IHtcclxuICAgIGJvcmRlclJhZGl1czogMjAsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcycsXHJcbiAgICBwOiBbJzM1cHggMjVweCcsIG51bGwsIG51bGwsICc0MHB4J10sXHJcbiAgICB3aWR0aDogWycxMDAlJywgJzc1JScsICcxMDAlJ10sXHJcbiAgICBtYjogJzQwcHgnLFxyXG4gICAgbXQ6ICc0MHB4JyxcclxuICAgIG14OiBbMCwgJ2F1dG8nLCAwXSxcclxuICAgICcmOmJlZm9yZSc6IHtcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIGNvbnRlbnQ6IFwiJydcIixcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBsZWZ0OiAwLFxyXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIHJnYmEoMzgsIDc4LCAxMTgsIDAuMSknLFxyXG4gICAgICBib3JkZXJSYWRpdXM6ICdpbmhlcml0JyxcclxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzJyxcclxuICAgICAgekluZGV4OiAtMSxcclxuICAgIH0sXHJcbiAgICAnJjpob3Zlcic6IHtcclxuICAgICAgYm94U2hhZG93OiAnMHB4IDRweCAyNXB4IHJnYmEoMzgsIDc4LCAxMTgsIDAuMSkgIWltcG9ydGFudCcsXHJcbiAgICAgICcmOmJlZm9yZSc6IHtcclxuICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGhlYWRlcjoge1xyXG4gICAgaGVpZ2h0OiBbJzI4cHgnLCBudWxsLCBudWxsLCAnMzJweCddLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAneWVsbG93JyxcclxuICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICBmb250U2l6ZTogMSxcclxuICAgIGxpbmVIZWlnaHQ6IDEuMixcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHRvcDogJy0xN3B4JyxcclxuICAgIGxldHRlclNwYWNpbmc6ICctLjE0cHgnLFxyXG4gICAgcHg6ICcxMnB4JyxcclxuICB9LFxyXG4gIHByaWNpbmdIZWFkZXI6IHtcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXHJcbiAgICBtYjogWyczMHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzQwcHgnXSxcclxuICAgIHA6IHtcclxuICAgICAgZm9udFNpemU6IFsxLCAyXSxcclxuICAgICAgY29sb3I6ICd0ZXh0JyxcclxuICAgICAgbGluZUhlaWdodDogJ2hlYWRpbmcnLFxyXG4gICAgfSxcclxuICAgICcucGFja2FnZV9fbmFtZSc6IHtcclxuICAgICAgbWFyZ2luQm90dG9tOiBbMSwgbnVsbCwgMl0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcHJpY2U6IHtcclxuICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgIGZvbnRTaXplOiBbNCwgbnVsbCwgNSwgbnVsbCwgJzMwcHgnXSxcclxuICAgIGxpbmVIZWlnaHQ6IDEsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuNTVweCcsXHJcbiAgICBjb2xvcjogJ3RleHQnLFxyXG4gICAgbWFyZ2luQm90dG9tOiAyLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBwdDogWzQsIDZdLFxyXG4gICAgJz4gc3Bhbic6IHtcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIHBsOiAnM3B4JyxcclxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICAgIGZvbnRTaXplOiBbMSwgMl0sXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGxpc3RJdGVtOiB7XHJcbiAgICBmb250RmFtaWx5OiAnRE0gU2FucycsXHJcbiAgICBmb250U3R5bGU6ICdub3JtYWwnLFxyXG4gICAgZm9udFdlaWdodDogJ25vcm1hbCcsXHJcbiAgICBmb250U2l6ZTogWzEsIDJdLFxyXG4gICAgbGluZUhlaWdodDogWzEuNzUsIDEuNl0sXHJcbiAgICBtYjogMyxcclxuICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcclxuICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICAnJi5jbG9zZWQnOiB7XHJcbiAgICAgIG9wYWNpdHk6IDAuNTUsXHJcbiAgICAgIGJ1dHRvbjoge1xyXG4gICAgICAgIGNvbG9yOiAnIzc4OEZCNScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYnV0dG9uR3JvdXA6IHtcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICBtdDogWyczMHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzM1cHgnXSxcclxuICAgICcuZnJlZV9fdHJhaWwnOiB7XHJcbiAgICAgIGNvbG9yOiAnc2Vjb25kYXJ5JyxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICAgIGZvbnRTaXplOiBbJzE0cHgnLCAxXSxcclxuICAgICAgcDogJzIwcHggMCAwJyxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRmFTdGFyIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5cclxuY29uc3QgUmF0aW5nID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8aDE+UmF0aW5nPC9oMT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmF0aW5nO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb3gsIFRleHQsIEhlYWRpbmcgfSBmcm9tICd0aGVtZS11aSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWN0aW9uSGVhZGVyKHsgdGl0bGUsIHNsb2dhbiwgaXNXaGl0ZSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxoMT5TZWN0aW9uSGVhZGVyPC9oMT5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTRU8oe1xyXG4gIGRlc2NyaXB0aW9uID0gJ3N0YXJ0dXAgcHJvZHVjdCBsYW5kaW5nIHBhZ2UnLFxyXG4gIGF1dGhvciA9ICdKU00nLFxyXG4gIG1ldGEsXHJcbiAgdGl0bGUgPSAnc3RhcnR1cCBsYW5kaW5nIHRpdGxlJyxcclxufSkge1xyXG4gIGNvbnN0IG1ldGFEYXRhID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBgZGVzY3JpcHRpb25gLFxyXG4gICAgICBjb250ZW50OiBkZXNjcmlwdGlvbixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3BlcnR5OiBgb2c6dGl0bGVgLFxyXG4gICAgICBjb250ZW50OiB0aXRsZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3BlcnR5OiBgb2c6ZGVzY3JpcHRpb25gLFxyXG4gICAgICBjb250ZW50OiBkZXNjcmlwdGlvbixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3BlcnR5OiBgb2c6dHlwZWAsXHJcbiAgICAgIGNvbnRlbnQ6IGB3ZWJzaXRlYCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IGB0d2l0dGVyOmNhcmRgLFxyXG4gICAgICBjb250ZW50OiBgc3VtbWFyeWAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBgdHdpdHRlcjpjcmVhdG9yYCxcclxuICAgICAgY29udGVudDogYXV0aG9yLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogYHR3aXR0ZXI6dGl0bGVgLFxyXG4gICAgICBjb250ZW50OiB0aXRsZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IGB0d2l0dGVyOmRlc2NyaXB0aW9uYCxcclxuICAgICAgY29udGVudDogZGVzY3JpcHRpb24sXHJcbiAgICB9LFxyXG4gIF0uY29uY2F0KG1ldGEpO1xyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxyXG4gICAgICB7bWV0YURhdGEubWFwKCh7IG5hbWUsIGNvbnRlbnQgfSwgaSkgPT4gKFxyXG4gICAgICAgIDxtZXRhIGtleT17aX0gbmFtZT17bmFtZX0gY29udGVudD17Y29udGVudH0gLz5cclxuICAgICAgKSl9XHJcbiAgICA8L0hlYWQ+XHJcbiAgKTtcclxufVxyXG5cclxuU0VPLmRlZmF1bHRQcm9wcyA9IHtcclxuICBsYW5nOiBgZW5gLFxyXG4gIG1ldGE6IFtdLFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBUZXh0LCBIZWFkaW5nLCBJbWFnZSwgQm94LCBMaW5rIH0gZnJvbSAndGhlbWUtdWknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVhbUNhcmQoeyBzcmMsIGFsdFRleHQsIHRpdGxlLCBkZXNpZ25hdGlvbiwgc29jaWFsIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGgxPlRlYW1DYXJkPC9oMT5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgY2FyZDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIHB5OiBbMCwgbnVsbCwgNCwgNSwgNl0sXHJcbiAgICBweDogWzIsIG51bGwsIDYsIDddLFxyXG4gICAgdHJhbnNpdGlvbjogJ2Vhc2UtaW4tb3V0IDAuNHMnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnOHB4JyxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgJyY6aG92ZXInOiB7XHJcbiAgICAgIGJveFNoYWRvdzogWydub25lJywgbnVsbCwgJzAgNHB4IDEwcHggcmdiYSgzOSwgODMsIDEyMywgMC4xMiknXSxcclxuICAgICAgJy5pbmZvX19uYW1lJzoge1xyXG4gICAgICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgIH0sXHJcbiAgICAgICcuaW5mb19fZGVzaWduYXRpb24nOiB7XHJcbiAgICAgICAgY29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgfSxcclxuICAgICAgJy5zb2NpYWxfX3NoYXJlJzoge1xyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgYToge1xyXG4gICAgICAgICAgbXk6IDAsXHJcbiAgICAgICAgICBweTogWzAsIG51bGwsIDFdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIG1lbWJlclRodW1iOiB7XHJcbiAgICB3aWR0aDogWyc3MHB4JywgJzgwcHgnLCAnMTAwcHgnLCBudWxsLCBudWxsLCAnMTMwcHgnXSxcclxuICAgIGhlaWdodDogWyc3MHB4JywgJzgwcHgnLCAnMTAwcHgnLCBudWxsLCBudWxsLCAnMTMwcHgnXSxcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICBib3JkZXI6ICcycHggc29saWQnLFxyXG4gICAgYm9yZGVyQ29sb3I6ICdwcmltYXJ5JyxcclxuICAgIGJvcmRlclJhZGl1czogJzUwJScsXHJcbiAgfSxcclxuICBpbmZvV3JhcHBlcjoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICBtdDogWzMsIG51bGwsIDRdLFxyXG4gICAgbmFtZToge1xyXG4gICAgICBmb250U2l6ZTogWzEsIDIsIDMsIG51bGwsIG51bGwsIDRdLFxyXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjI1LCAxLjM1XSxcclxuICAgICAgdHJhbnNpdGlvbjogJ2NvbG9yIDAuMjVzJyxcclxuICAgICAgbWI6IDEsXHJcbiAgICB9LFxyXG4gICAgZGVzaWduYXRpb246IHtcclxuICAgICAgZm9udFNpemU6IFsnMTRweCcsIG51bGwsIG51bGwsIDJdLFxyXG4gICAgICBmb250V2VpZ2h0OiAnYm9keScsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICdoZWFkaW5nJyxcclxuICAgICAgY29sb3I6ICd0ZXh0JyxcclxuICAgICAgdHJhbnNpdGlvbjogJ2NvbG9yIDAuMjVzJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzb2NpYWxTaGFyZToge1xyXG4gICAgcG9zaXRpb246IFsncmVsYXRpdmUnLCBudWxsLCAnYWJzb2x1dGUnXSxcclxuICAgIHJpZ2h0OiBbMCwgbnVsbCwgNiwgbnVsbCwgNCwgNl0sXHJcbiAgICBib3R0b206IFswLCBudWxsLCAnMThweCcsIDVdLFxyXG4gICAgd2lkdGg6IFsnMTAwJScsIG51bGwsICdhdXRvJ10sXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBbJ3JvdycsIG51bGwsICdjb2x1bW4nXSxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cycsXHJcbiAgICBvcGFjaXR5OiBbMSwgbnVsbCwgMF0sXHJcbiAgICBwdDogMixcclxuICAgIGE6IHtcclxuICAgICAgZm9udFNpemU6IFswLCAxLCBudWxsLCAyXSxcclxuICAgICAgY29sb3I6IFsndGV4dCcsIG51bGwsICdwcmltYXJ5J10sXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICcxZW0nLFxyXG4gICAgICBteTogWzAsIG51bGwsICctMnB4J10sXHJcbiAgICAgIHB4OiAxLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzJyxcclxuICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgY29sb3I6IFsncHJpbWFyeScsIG51bGwsICd0ZXh0J10sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEJveCwgSGVhZGluZywgVGV4dCwgQnV0dG9uLCBMaW5rIH0gZnJvbSAndGhlbWUtdWknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGV4dEZlYXR1cmUoe1xyXG4gIHN1YlRpdGxlLFxyXG4gIHRpdGxlLFxyXG4gIGRlc2NyaXB0aW9uLFxyXG4gIGJ0bk5hbWUsXHJcbiAgYnRuVVJMID0gJyMnLFxyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxoMT5UZXh0RmVhdHVyZTwvaDE+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGNhcmQ6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgZmxleFNocmluazogMCxcclxuICAgIGE6IHtcclxuICAgICAgbTogWycwIGF1dG8nLCBudWxsLCBudWxsLCAwXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICB3cmFwcGVyOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBtdDogLTEsXHJcbiAgICBzdWJUaXRsZToge1xyXG4gICAgICBmb250U2l6ZTogWzAsIG51bGwsIDFdLFxyXG4gICAgICBjb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcclxuICAgICAgZm9udFdlaWdodDogJzcwMCcsXHJcbiAgICAgIG1iOiBbMiwgM10sXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNSxcclxuICAgICAgbGV0dGVyU3BhY2luZzogWycxLjVweCcsIG51bGwsICcycHgnXSxcclxuICAgIH0sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICBmb250U2l6ZTogWycyNHB4JywgbnVsbCwgJzI4cHgnLCAnMzBweCcsICczNnB4JywgJzQycHgnLCBudWxsLCAnNDhweCddLFxyXG4gICAgICBjb2xvcjogJ2hlYWRpbmdfc2Vjb25kYXJ5JyxcclxuICAgICAgbGluZUhlaWdodDogWzEuMywgbnVsbCwgbnVsbCwgbnVsbCwgMS4yXSxcclxuICAgICAgZm9udFdlaWdodDogJzcwMCcsXHJcbiAgICAgIGxldHRlclNwYWNpbmc6ICctLjVweCcsXHJcbiAgICAgIG1iOiA1LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGRlc2NyaXB0aW9uOiB7XHJcbiAgICBmb250U2l6ZTogWycxNXB4JywgMiwgbnVsbCwgbnVsbCwgbnVsbCwgJzE3cHgnLCBudWxsLCAzXSxcclxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcclxuICAgIGxpbmVIZWlnaHQ6IFsxLjg1LCBudWxsLCBudWxsLCAyLCBudWxsLCAnMi4yJ10sXHJcbiAgICBjb2xvcjogJ3RleHRfc2Vjb25kYXJ5JyxcclxuICAgIG1iOiAnMzBweCcsXHJcbiAgfSxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHRoZW1lIGZyb20gJ3RoZW1lJztcclxuXHJcbmltcG9ydCBTRU8gZnJvbSAnY29tcG9uZW50cy9zZW8nO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJ2NvbXBvbmVudHMvbGF5b3V0JztcclxuaW1wb3J0IEJhbm5lciBmcm9tICcuLi9zZWN0aW9ucy9iYW5uZXInO1xyXG5pbXBvcnQgS2V5RmVhdHVyZSBmcm9tICcuLi9zZWN0aW9ucy9rZXktZmVhdHVyZSc7XHJcbmltcG9ydCBTZXJ2aWNlU2VjdGlvbiBmcm9tICcuLi9zZWN0aW9ucy9zZXJ2aWNlLXNlY3Rpb24nO1xyXG5pbXBvcnQgRmVhdHVyZSBmcm9tICcuLi9zZWN0aW9ucy9mZWF0dXJlJztcclxuaW1wb3J0IENvcmVGZWF0dXJlIGZyb20gJy4uL3NlY3Rpb25zL2NvcmUtZmVhdHVyZSc7XHJcbmltcG9ydCBXb3JrRmxvdyBmcm9tICcuLi9zZWN0aW9ucy93b3JrZmxvdyc7XHJcbmltcG9ydCBQYWNrYWdlIGZyb20gJy4uL3NlY3Rpb25zL3BhY2thZ2UnO1xyXG5pbXBvcnQgVGVhbVNlY3Rpb24gZnJvbSAnLi4vc2VjdGlvbnMvdGVhbS1zZWN0aW9uJztcclxuaW1wb3J0IFRlc3RpbW9uaWFsQ2FyZCBmcm9tICcuLi9zZWN0aW9ucy90ZXN0aW1vbmlhbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleFBhZ2UoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgIDxTRU8gdGl0bGU9XCJXaG9venkncyBXcmFwc1wiIC8+XHJcbiAgICAgICAgICA8QmFubmVyIC8+XHJcbiAgICAgICAgICA8S2V5RmVhdHVyZSAvPlxyXG4gICAgICAgICAgPFNlcnZpY2VTZWN0aW9uIC8+XHJcbiAgICAgICAgICA8RmVhdHVyZSAvPlxyXG4gICAgICAgICAgPENvcmVGZWF0dXJlIC8+XHJcbiAgICAgICAgICA8V29ya0Zsb3cgLz5cclxuICAgICAgICAgIDxQYWNrYWdlIC8+XHJcbiAgICAgICAgICA8VGVhbVNlY3Rpb24gLz5cclxuICAgICAgICAgIDxUZXN0aW1vbmlhbENhcmQgLz5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICApO1xyXG59XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgQm94LCBIZWFkaW5nLCBUZXh0LCBJbWFnZSwgQnV0dG9uIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgQmFubmVySW1nIGZyb20gJ2Fzc2V0cy9iYW5uZXItdGh1bWIucG5nJztcclxuaW1wb3J0IFNoYXBlTGVmdCBmcm9tICdhc3NldHMvc2hhcGUtbGVmdC5wbmcnO1xyXG5pbXBvcnQgU2hhcGVSaWdodCBmcm9tICdhc3NldHMvc2hhcGUtcmlnaHQucG5nJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJhbm5lcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gc3g9e3N0eWxlcy5iYW5uZXJ9IGlkPVwiaG9tZVwiPlxyXG4gICAgICA8Y29udGFpbmVyIHN4PXtzdHlsZXMuYmFubmVyLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmJhbm5lci5jb250ZW50Qm94fT5cclxuICAgICAgICAgIDxIZWFkaW5nIGFzID1cImgxXCIgdmFyaWFudCA9XCJoZXJvUHJpbWFyeVwiPlxyXG4gICAgICAgICAgICBRdWFsaXR5IG92ZXIgUXVhbml0eS5cclxuICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgIDxUZXh0IGFzID1cInBcIiB2YXJpYW50PVwiaGVyb1NlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICBBdCBXaG9venkncyB3ZSBjYW4gdHJhbnNmb3JtIHlvdXIgY2FyJ3MgYXBwcmVyZW5jZSB3aXRoIGVhc2UuIE1ha2UgeW91ciBkcmVhbXMgY29tZSB0cnVlLlxyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICBFeHBsb3JlXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgPEJveCBzeCA9e3N0eWxlcy5iYW5uZXIuaW1hZ2VCb3h9PlxyXG4gICAgICAgICAgPEltYWdlIHNyYyA9e0Jhbm5lckltZ30gYWx0PSdiYW5uZXInIC8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvY29udGFpbmVyPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBiYW5uZXI6IHtcclxuICAgIHB0OiBbJzE0MHB4JywgJzE0NXB4JywgJzE1NXB4JywgJzE3MHB4JywgbnVsbCwgbnVsbCwgJzE4MHB4JywgJzIxNXB4J10sXHJcbiAgICBwYjogWzIsIG51bGwsIDAsIG51bGwsIDIsIDAsIG51bGwsIDVdLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICB6SW5kZXg6IDIsXHJcbiAgICAnJjo6YmVmb3JlJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgY29udGVudDogJ1wiXCInLFxyXG4gICAgICBib3R0b206IDYsXHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICB6SW5kZXg6IC0xLFxyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtTaGFwZUxlZnR9KWAsXHJcbiAgICAgIGJhY2tncm91bmRSZXBlYXQ6IGBuby1yZXBlYXRgLFxyXG4gICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdib3R0b20gbGVmdCcsXHJcbiAgICAgIGJhY2tncm91bmRTaXplOiAnMzYlJyxcclxuICAgIH0sXHJcbiAgICAnJjo6YWZ0ZXInOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICBjb250ZW50OiAnXCJcIicsXHJcbiAgICAgIGJvdHRvbTogJzQwcHgnLFxyXG4gICAgICByaWdodDogMCxcclxuICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIHpJbmRleDogLTEsXHJcbiAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke1NoYXBlUmlnaHR9KWAsXHJcbiAgICAgIGJhY2tncm91bmRSZXBlYXQ6IGBuby1yZXBlYXRgLFxyXG4gICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdib3R0b20gcmlnaHQnLFxyXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogJzMyJScsXHJcbiAgICB9LFxyXG4gICAgY29udGFpbmVyOiB7XHJcbiAgICAgIG1pbkhlaWdodDogJ2luaGVyaXQnLFxyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICB9LFxyXG4gICAgY29udGVudEJveDoge1xyXG4gICAgICB3aWR0aDogWycxMDAlJywgJzkwJScsICc1MzVweCcsIG51bGwsICc1NyUnLCAnNjAlJywgJzY4JScsICc2MCUnXSxcclxuICAgICAgbXg6ICdhdXRvJyxcclxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgbWI6IFsnNDBweCcsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDddLFxyXG4gICAgfSxcclxuICAgIGltYWdlQm94OiB7XHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcclxuICAgICAgbWI6IFswLCBudWxsLCAtNiwgbnVsbCwgbnVsbCwgJy00MHB4JywgbnVsbCwgLTNdLFxyXG4gICAgICBpbWc6IHtcclxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICBoZWlnaHQ6IFsyNDUsICdhdXRvJ10sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIENvbnRhaW5lciwgQm94LCBJbWFnZSB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IFRleHRGZWF0dXJlIGZyb20gJ2NvbXBvbmVudHMvdGV4dC1mZWF0dXJlJztcclxuXHJcbmltcG9ydCBGZWF0dXJlVGh1bWIgZnJvbSAnYXNzZXRzL2NvcmUtZmVhdHVyZS5wbmcnO1xyXG5pbXBvcnQgc2hhcGVQYXR0ZXJuIGZyb20gJ2Fzc2V0cy9zaGFwZS1wYXR0ZXJuMi5wbmcnO1xyXG5cclxuY29uc3QgZGF0YSA9IHtcclxuICBzdWJUaXRsZTogJ0NvcmUgZmVhdHVyZXMnLFxyXG4gIHRpdGxlOiAnU21hcnQgSmFja3BvdHMgdGhhdCB5b3UgbWF5IGxvdmUgdGhpcyBhbnl0aW1lICYgYW55d2hlcmUnLFxyXG4gIGRlc2NyaXB0aW9uOlxyXG4gICAgJ0dldCB5b3VyIHRlc3RzIGRlbGl2ZXJlZCBhdCBsZXQgaG9tZSBjb2xsZWN0IHNhbXBsZSBmcm9tIHRoZSB2aWN0b3J5IG9mIHRoZSBtYW5hZ2VtZW50cyB0aGF0IHN1cHBsaWVzIGJlc3QgZGVzaWduIHN5c3RlbSBndWlkZWxpbmVzIGV2ZXIuJyxcclxuICBidG5OYW1lOiAnR2V0IFN0YXJ0ZWQnLFxyXG4gIGJ0blVSTDogJyMnLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29yZUZlYXR1cmUoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgPHNlY3Rpb24gc3g9e3t2YXJpYW50OiAnc2VjdGlvbi5jb3JlRmVhdHVyZSd9fT5cclxuICAgIDxDb250YWluZXIgc3g9e3N0eWxlcy5jb250YWluZXJCb3h9PlxyXG4gICAgICA8Qm94IHN4PXtzdHlsZXMuY29udGVudEJveH0+XHJcbiAgICAgICAgPFRleHRGZWF0dXJlIFxyXG4gICAgICAgICAgc3ViVGl0bGU9e2RhdGEuc3ViVGl0bGV9XHJcbiAgICAgICAgICB0aXRsZT17ZGF0YS50aXRsZX1cclxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtkYXRhLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgYnRuTmFtZT17ZGF0YS5idG5OYW1lfVxyXG4gICAgICAgICAgYnRuVVJMPXtkYXRhLmJ0blVSTH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPEJveCBzeD17c3R5bGVzLnRodW1ibmFpbH0+XHJcbiAgICAgICAgPEltYWdlIHNyYz17RmVhdHVyZVRodW1ifSBhbHQ9XCJUaHVtYm5haWxcIiAvPlxyXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5zaGFwZUJveH0+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtzaGFwZVBhdHRlcm59IGFsdD1cIlNoYXBlXCIvPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGNvbnRhaW5lckJveDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgZmxleFdyYXA6IFsnd3JhcCcsIG51bGwsIG51bGwsICdub3dyYXAnXSxcclxuICAgIHBiOiBbMCwgNywgMCwgbnVsbCwgN10sXHJcbiAgfSxcclxuICBjb250ZW50Qm94OiB7XHJcbiAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgcHg6IFswLCBudWxsLCAnMzBweCcsIDBdLFxyXG4gICAgdGV4dEFsaWduOiBbJ2NlbnRlcicsIG51bGwsIG51bGwsICdsZWZ0J10sXHJcbiAgICB3aWR0aDogWycxMDAlJywgJzgwJScsIG51bGwsIDM0MCwgNDAwLCA0MzAsIG51bGwsIDQ4NV0sXHJcbiAgICBwYjogWyc1MHB4JywgJzYwcHgnLCBudWxsLCAwXSxcclxuICAgIG14OiBbJ2F1dG8nLCBudWxsLCBudWxsLCAwXSxcclxuICAgICcuZGVzY3JpcHRpb24nOiB7XHJcbiAgICAgIHByOiBbMCwgbnVsbCwgNiwgNywgNl0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdGh1bWJuYWlsOiB7XHJcbiAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBtcjogJ2F1dG8nLFxyXG4gICAgbWw6IFsnYXV0bycsIG51bGwsIG51bGwsIG51bGwsIDddLFxyXG4gICAgJz4gaW1nJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgekluZGV4OiAxLFxyXG4gICAgICBoZWlnaHQ6IFszMTAsICdhdXRvJ10sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2hhcGVCb3g6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgYm90dG9tOiAtNjUsXHJcbiAgICByaWdodDogLTE2NSxcclxuICAgIHpJbmRleDogLTEsXHJcbiAgICBkaXNwbGF5OiBbJ25vbmUnLCAnaW5saW5lLWJsb2NrJywgJ25vbmUnLCBudWxsLCAnaW5saW5lLWJsb2NrJ10sXHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyJztcclxuaW1wb3J0IEZlYXR1cmVDYXJkIGZyb20gJ2NvbXBvbmVudHMvZmVhdHVyZS1jYXJkLmpzJztcclxuaW1wb3J0IFBlcmZvcm1hbmNlIGZyb20gJ2Fzc2V0cy9mZWF0dXJlL3BlcmZvcm1hbmNlLnN2Zyc7XHJcbmltcG9ydCBQYXJ0bmVyc2hpcCBmcm9tICdhc3NldHMvZmVhdHVyZS9wYXJ0bmVyc2hpcC5zdmcnO1xyXG5pbXBvcnQgU3Vic2NyaXB0aW9uIGZyb20gJ2Fzc2V0cy9mZWF0dXJlL3N1YnNjcmlwdGlvbi5zdmcnO1xyXG5pbXBvcnQgU3VwcG9ydCBmcm9tICdhc3NldHMvZmVhdHVyZS9zdXBwb3J0LnN2Zyc7XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgaW1nU3JjOiBQZXJmb3JtYW5jZSxcclxuICAgIGFsdFRleHQ6ICdGYXN0IFBlcmZvcm1hbmNlJyxcclxuICAgIHRpdGxlOiAnRmFzdCBQZXJmb3JtYW5jZScsXHJcbiAgICB0ZXh0OlxyXG4gICAgICAnTGV04oCZcyBqdXN0IGdldCB0aGlzIG91dCBvZiB0aGUgd2F5IC0gdGhlcmUgd2lsbCBhbHdheXMgYmUgYSBraXQgdmVyc2lvbiBvZiBFZHUgZmxvdy4gUGFpZCBzdWJzY3JpcHRpb25zIGFsbG93IHVzIHRvIGNvbnRpbnVlIGhlbHBpbmcgbGVhcm5lcnMgYXJvdW5kIHRoZSB3b3JsZC4nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBpbWdTcmM6IFBhcnRuZXJzaGlwLFxyXG4gICAgYWx0VGV4dDogJ1BybyBTdWJzY3JpcHRpb24nLFxyXG4gICAgdGl0bGU6ICdQcm8gU3Vic2NyaXB0aW9uJyxcclxuICAgIHRleHQ6XHJcbiAgICAgICdXZSBiZWxpZXZlIGl04oCZcyBpbXBvcnRhbnQgZm9yIGV2ZXJ5b25lIHRvIGhhdmUgYWNjZXNzIHRvIHNvZnR3YXJlIOKAkyBlc3BlY2lhbGx5IHdoZW4gaXQgY29tZXMgdG8gZGlnaXRhbCBsZWFybmluZyBiZSBuYXZpZ2F0ZWQgYnkga2V5Ym9hcmQgYW5kIHNjcmVlbiByZWFkZXJzLicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIGltZ1NyYzogU3Vic2NyaXB0aW9uLFxyXG4gICAgYWx0VGV4dDogJ1BhcnRuZXJzaGlwIGRlYWwnLFxyXG4gICAgdGl0bGU6ICdQYXJ0bmVyc2hpcCBkZWFsJyxcclxuICAgIHRleHQ6XHJcbiAgICAgICdMZXTigJlzIGp1c3QgZ2V0IHRoaXMgb3V0IG9mIHRoZSB3YXkgLSB0aGVyZSB3aWxsIGFsd2F5cyBiZSBhIGtpdCB2ZXJzaW9uIG9mIEVkdSBmbG93LiBQYWlkIHN1YnNjcmlwdGlvbnMgYWxsb3cgdXMgdG8gY29udGludWUgaGVscGluZyBsZWFybmVycyBhcm91bmQgdGhlIHdvcmxkLicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIGltZ1NyYzogU3VwcG9ydCxcclxuICAgIGFsdFRleHQ6ICdDdXN0b21lciBTdXBwb3J0JyxcclxuICAgIHRpdGxlOiAnQ3VzdG9tZXIgU3VwcG9ydCcsXHJcbiAgICB0ZXh0OlxyXG4gICAgICAnV2UgYmVsaWV2ZSBpdOKAmXMgaW1wb3J0YW50IGZvciBldmVyeW9uZSB0byBoYXZlIGFjY2VzcyB0byBzb2Z0d2FyZSDigJMgZXNwZWNpYWxseSB3aGVuIGl0IGNvbWVzIHRvIGRpZ2l0YWwgbGVhcm5pbmcgYmUgbmF2aWdhdGVkIGJ5IGtleWJvYXJkIGFuZCBzY3JlZW4gcmVhZGVycy4nLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGZWF0dXJlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgIDxoMT5GZWF0dXJlPC9oMT5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgZ3JpZDoge1xyXG4gICAgcHQ6IFswLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAyXSxcclxuICAgIHB4OiBbNSwgNiwgMCwgbnVsbCwgNywgOCwgN10sXHJcbiAgICBncmlkR2FwOiBbXHJcbiAgICAgICc0MHB4IDAnLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnNDVweCAzMHB4JyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJzYwcHggNTBweCcsXHJcbiAgICAgICc3MHB4IDUwcHgnLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnODBweCA5MHB4JyxcclxuICAgIF0sXHJcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbJ3JlcGVhdCgxLDFmciknLCBudWxsLCAncmVwZWF0KDIsMWZyKSddLFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgR3JpZCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlcic7XHJcbmltcG9ydCBGZWF0dXJlQ2FyZENvbHVtbiBmcm9tICdjb21wb25lbnRzL2ZlYXR1cmUtY2FyZC1jb2x1bW4uanMnO1xyXG5pbXBvcnQgUGVyZm9ybWFuY2UgZnJvbSAnYXNzZXRzL2tleS1mZWF0dXJlL3BlcmZvcm1hbmNlLnN2Zyc7XHJcbmltcG9ydCBQYXJ0bmVyc2hpcCBmcm9tICdhc3NldHMva2V5LWZlYXR1cmUvcGFydG5lcnNoaXAuc3ZnJztcclxuaW1wb3J0IFN1YnNjcmlwdGlvbiBmcm9tICdhc3NldHMva2V5LWZlYXR1cmUvc3Vic2NyaXB0aW9uLnN2Zyc7XHJcbmltcG9ydCBTdXBwb3J0IGZyb20gJ2Fzc2V0cy9rZXktZmVhdHVyZS9zdXBwb3J0LnN2Zyc7XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgaW1nU3JjOiBQZXJmb3JtYW5jZSxcclxuICAgIGFsdFRleHQ6ICdGYXN0IFBlcmZvcm1hbmNlJyxcclxuICAgIHRpdGxlOiAnRmFzdCBQZXJmb3JtYW5jZScsXHJcbiAgICB0ZXh0OlxyXG4gICAgICAnR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IGhvbWUgY29sbGVjdCBhIHNhbXBsZSBmcm9tIHRoZSB5b3VyIGJsb29kIHRlc3RzLicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIGltZ1NyYzogUGFydG5lcnNoaXAsXHJcbiAgICBhbHRUZXh0OiAnUGFydG5lcnNoaXAgZGVhbCcsXHJcbiAgICB0aXRsZTogJ1BhcnRuZXJzaGlwIGRlYWwnLFxyXG4gICAgdGV4dDpcclxuICAgICAgJ0dldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCBob21lIGNvbGxlY3QgYSBzYW1wbGUgZnJvbSB0aGUgeW91ciBibG9vZCB0ZXN0cy4nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBpbWdTcmM6IFN1YnNjcmlwdGlvbixcclxuICAgIGFsdFRleHQ6ICdQcm8gU3Vic2NyaXB0aW9uJyxcclxuICAgIHRpdGxlOiAnUHJvIFN1YnNjcmlwdGlvbicsXHJcbiAgICB0ZXh0OlxyXG4gICAgICAnR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IGhvbWUgY29sbGVjdCBhIHNhbXBsZSBmcm9tIHRoZSB5b3VyIGJsb29kIHRlc3RzLicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIGltZ1NyYzogU3VwcG9ydCxcclxuICAgIGFsdFRleHQ6ICdDdXN0b21lciBTdXBwb3J0JyxcclxuICAgIHRpdGxlOiAnQ3VzdG9tZXIgU3VwcG9ydCcsXHJcbiAgICB0ZXh0OlxyXG4gICAgICAnR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IGhvbWUgY29sbGVjdCBhIHNhbXBsZSBmcm9tIHRoZSB5b3VyIGJsb29kIHRlc3RzLicsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEtleUZlYXR1cmUoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgPGgxPktleSBGZWF0dXJlPC9oMT5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgZ3JpZDoge1xyXG4gICAgd2lkdGg6IFsnMTAwJScsICc4MCUnLCAnMTAwJSddLFxyXG4gICAgbXg6ICdhdXRvJyxcclxuICAgIGdyaWRHYXA6IFtcclxuICAgICAgJzM1cHggMCcsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICc0MHB4IDQwcHgnLFxyXG4gICAgICAnNTBweCA2MHB4JyxcclxuICAgICAgJzMwcHgnLFxyXG4gICAgICAnNTBweCA0MHB4JyxcclxuICAgICAgJzU1cHggOTBweCcsXHJcbiAgICBdLFxyXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1xyXG4gICAgICAncmVwZWF0KDEsMWZyKScsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICdyZXBlYXQoMiwxZnIpJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJ3JlcGVhdCg0LDFmciknLFxyXG4gICAgXSxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBDb250YWluZXIsIEJveCwgRmxleCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LW11bHRpLWNhcm91c2VsJztcclxuaW1wb3J0IFByaWNlQ2FyZCBmcm9tICdjb21wb25lbnRzL3ByaWNlLWNhcmQnO1xyXG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSAnY29tcG9uZW50cy9idXR0b24tZ3JvdXAnO1xyXG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyJztcclxuaW1wb3J0IHsgSW9Jb3NDaGVja21hcmtDaXJjbGUsIElvSW9zQ2xvc2VDaXJjbGUgfSBmcm9tICdyZWFjdC1pY29ucy9pbyc7XHJcblxyXG5jb25zdCBwYWNrYWdlcyA9IHtcclxuICBtb250aGx5OiBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICBuYW1lOiAnRnJlZSBQbGFuJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdGb3IgU21hbGwgdGVhbXMgb3Igb2ZmaWNlJyxcclxuICAgICAgYnV0dG9uVGV4dDogJ1N0YXJ0IGZyZWUgdHJhaWwnLFxyXG4gICAgICBwcmljZVdpdGhVbml0OiAnJDAnLFxyXG4gICAgICBwb2ludHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICAgIHRleHQ6ICdEcmFnICYgRHJvcCBCdWlsZGVyJyxcclxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgICB0ZXh0OiBcIjEsMDAwJ3Mgb2YgVGVtcGxhdGVzXCIsXHJcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAzLFxyXG4gICAgICAgICAgaWNvbjogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIC8+LFxyXG4gICAgICAgICAgdGV4dDogJ0Jsb2cgU3VwcG9ydCBUb29scycsXHJcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiA0LFxyXG4gICAgICAgICAgaWNvbjogPElvSW9zQ2xvc2VDaXJjbGUgLz4sXHJcbiAgICAgICAgICB0ZXh0OiAnZUNvbW1lcmNlIFN0b3JlICcsXHJcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIG5hbWU6ICdCdXNpbmVzcyBraW5nJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdGb3IgRW50ZXJwcmlzZSBidXNpbmVzcycsXHJcbiAgICAgIHByaWNlV2l0aFVuaXQ6ICckMTUnLFxyXG4gICAgICBidXR0b25UZXh0OiAnQ3JlYXRlIGFjY291bnQnLFxyXG4gICAgICBhbm90aGVyT3B0aW9uOiAnT3IgU3RhcnQgMTQgRGF5cyB0cmFpbCcsXHJcbiAgICAgIHBvaW50czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgaWNvbjogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIC8+LFxyXG4gICAgICAgICAgdGV4dDogJ0RyYWcgJiBEcm9wIEJ1aWxkZXInLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogMixcclxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICAgIHRleHQ6IFwiMSwwMDAncyBvZiBUZW1wbGF0ZXNcIixcclxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgICB0ZXh0OiAnQmxvZyBTdXBwb3J0IFRvb2xzJyxcclxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgICB0ZXh0OiAnZUNvbW1lcmNlIFN0b3JlICcsXHJcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDMsXHJcbiAgICAgIGhlYWRlcjogJ1N1Z2dlc3RlZCcsXHJcbiAgICAgIGhlYWRlckljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgbmFtZTogJ1BybyBNYXN0ZXInLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ0ZvciBwcm8gbGV2ZWwgZGV2ZWxvcGVycycsXHJcbiAgICAgIHByaWNlV2l0aFVuaXQ6ICckMjQnLFxyXG4gICAgICBidXR0b25UZXh0OiAnQ3JlYXRlIGFjY291bnQnLFxyXG4gICAgICBhbm90aGVyT3B0aW9uOiAnT3IgU3RhcnQgMTQgRGF5cyB0cmFpbCcsXHJcbiAgICAgIHBvaW50czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgaWNvbjogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIC8+LFxyXG4gICAgICAgICAgdGV4dDogJ0RyYWcgJiBEcm9wIEJ1aWxkZXInLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogMixcclxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICAgIHRleHQ6IFwiMSwwMDAncyBvZiBUZW1wbGF0ZXNcIixcclxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgICB0ZXh0OiAnQmxvZyBTdXBwb3J0IFRvb2xzJyxcclxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgICB0ZXh0OiAnZUNvbW1lcmNlIFN0b3JlICcsXHJcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICBdLFxyXG4gIGFubnVhbDogW1xyXG4gICAge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgbmFtZTogJ0ZyZWUgUGxhbicsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnRm9yIFNtYWxsIHRlYW1zIG9yIG9mZmljZScsXHJcbiAgICAgIGJ1dHRvblRleHQ6ICdTdGFydCBmcmVlIHRyYWlsJyxcclxuICAgICAgcHJpY2VXaXRoVW5pdDogJyQwJyxcclxuICAgICAgcG9pbnRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgICB0ZXh0OiBcIjEsMDAwJ3Mgb2YgVGVtcGxhdGVzXCIsXHJcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgICAgaWNvbjogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIC8+LFxyXG4gICAgICAgICAgdGV4dDogJ0RyYWcgJiBEcm9wIEJ1aWxkZXInLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogMyxcclxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICAgIHRleHQ6ICdCbG9nIFN1cHBvcnQgVG9vbHMnLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogNCxcclxuICAgICAgICAgIGljb246IDxJb0lvc0Nsb3NlQ2lyY2xlIC8+LFxyXG4gICAgICAgICAgdGV4dDogJ2VDb21tZXJjZSBTdG9yZSAnLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICBuYW1lOiAnQnVzaW5lc3Mga2luZycsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnRm9yIEVudGVycHJpc2UgYnVzaW5lc3MnLFxyXG4gICAgICBwcmljZVdpdGhVbml0OiAnJDI1JyxcclxuICAgICAgYnV0dG9uVGV4dDogJ0NyZWF0ZSBhY2NvdW50JyxcclxuICAgICAgYW5vdGhlck9wdGlvbjogJ09yIFN0YXJ0IDEwIERheXMgdHJhaWwnLFxyXG4gICAgICBwb2ludHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICAgIHRleHQ6ICdlQ29tbWVyY2UgU3RvcmUnLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogMixcclxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICAgIHRleHQ6ICdCbG9nIFN1cHBvcnQgVG9vbHMnLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogMyxcclxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICAgIHRleHQ6IFwiMSwwMDAncyBvZiBUZW1wbGF0ZXNcIixcclxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgICB0ZXh0OiAnRHJhZyAmIERyb3AgQnVpbGRlciAnLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAzLFxyXG4gICAgICBoZWFkZXI6ICdTdWdnZXN0ZWQnLFxyXG4gICAgICBoZWFkZXJJY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgIG5hbWU6ICdQcm8gTWFzdGVyJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdGb3IgcHJvIGxldmVsIGRldmVsb3BlcnMnLFxyXG4gICAgICBwcmljZVdpdGhVbml0OiAnJDM5JyxcclxuICAgICAgYnV0dG9uVGV4dDogJ0NyZWF0ZSBhY2NvdW50JyxcclxuICAgICAgYW5vdGhlck9wdGlvbjogJ09yIFN0YXJ0IDEwIERheXMgdHJhaWwnLFxyXG4gICAgICBwb2ludHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICAgIHRleHQ6ICdlQ29tbWVyY2UgU3RvcmUnLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogMixcclxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICAgIHRleHQ6ICdCbG9nIFN1cHBvcnQgVG9vbHMnLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogMyxcclxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICAgIHRleHQ6IFwiMSwwMDAncyBvZiBUZW1wbGF0ZXNcIixcclxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgICB0ZXh0OiAnRHJhZyAmIERyb3AgQnVpbGRlciAnLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgXSxcclxufTtcclxuXHJcbmNvbnN0IHJlc3BvbnNpdmUgPSB7XHJcbiAgZGVza3RvcDoge1xyXG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDMwMDAsIG1pbjogMTAyNCB9LFxyXG4gICAgaXRlbXM6IDMsXHJcbiAgICBkcmFnZ2FibGU6IGZhbHNlLFxyXG4gIH0sXHJcbiAgdGFibGV0OiB7XHJcbiAgICBicmVha3BvaW50OiB7IG1heDogMTAyMywgbWluOiA2NDAgfSxcclxuICAgIGl0ZW1zOiAyLFxyXG4gICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gIH0sXHJcbiAgbW9iaWxlOiB7XHJcbiAgICBicmVha3BvaW50OiB7IG1heDogNjM5LCBtaW46IDAgfSxcclxuICAgIGl0ZW1zOiAxLFxyXG4gICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWNrYWdlKCkge1xyXG4gIGNvbnN0IHsgbW9udGhseSwgYW5udWFsIH0gPSBwYWNrYWdlcztcclxuXHJcbiAgY29uc3Qgc2xpZGVyUGFyYW1zID0ge1xyXG4gICAgYWRkaXRpb25hbFRyYW5zZnJvbTogMCxcclxuICAgIGFycm93czogZmFsc2UsXHJcbiAgICBhdXRvUGxheVNwZWVkOiAzMDAwLFxyXG4gICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICBjbGFzc05hbWU6ICcnLFxyXG4gICAgc2xpZGVzVG9TbGlkZTogMSxcclxuICAgIGl0ZW1zOiAzLFxyXG4gICAgY29udGFpbmVyQ2xhc3M6ICdjYXJvdXNlbC1jb250YWluZXInLFxyXG4gICAgY3VzdG9tQnV0dG9uR3JvdXA6IDxCdXR0b25Hcm91cCAvPixcclxuICAgIGRvdExpc3RDbGFzczogJycsXHJcbiAgICBmb2N1c09uU2VsZWN0OiBmYWxzZSxcclxuICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgIGtleUJvYXJkQ29udHJvbDogZmFsc2UsXHJcbiAgICBpdGVtQ2xhc3M6ICcnLFxyXG4gICAgbWluaW11bVRvdWNoRHJhZzogODAsXHJcbiAgICByZW5kZXJCdXR0b25Hcm91cE91dHNpZGU6IHRydWUsXHJcbiAgICByZW5kZXJEb3RzT3V0c2lkZTogZmFsc2UsXHJcbiAgICByZXNwb25zaXZlOiByZXNwb25zaXZlLFxyXG4gICAgc2hvd0RvdHM6IGZhbHNlLFxyXG4gICAgc2xpZGVyQ2xhc3M6ICcnLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aDE+UGFja2FnZTwvaDE+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgZmFkZUluID0ga2V5ZnJhbWVzYFxyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbmA7XHJcbmNvbnN0IGZhZGVJbjIgPSBrZXlmcmFtZXNgXHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIHRvIHtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgcHJpY2luZ1dyYXBwZXI6IHtcclxuICAgIG1iOiAnLTQwcHgnLFxyXG4gICAgbXQ6ICctNDBweCcsXHJcbiAgICBteDogLTMsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICAnJi5wcmljaW5nX193cmFwcGVyIC5wYWNrYWdlX19jYXJkJzoge1xyXG4gICAgICAnLnBhY2thZ2VfX2hlYWRlcic6IHtcclxuICAgICAgICBhbmltYXRpb246IGAke2ZhZGVJbn0gMC44cyBlYXNlLWluYCxcclxuICAgICAgfSxcclxuICAgICAgJ3VsID4gbGknOiB7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBgJHtmYWRlSW4yfSAwLjdzIGVhc2UtaW5gLFxyXG4gICAgICB9LFxyXG4gICAgICAnLnBhY2thZ2VfX3ByaWNlJzoge1xyXG4gICAgICAgIGFuaW1hdGlvbjogYCR7ZmFkZUluMn0gMC45cyBlYXNlLWluYCxcclxuICAgICAgfSxcclxuICAgICAgYnV0dG9uOiB7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBgJHtmYWRlSW4yfSAxcyBlYXNlLWluYCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAnLmNhcm91c2VsLWNvbnRhaW5lcic6IHtcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgJz4gdWwgPiBsaSAnOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgICcuYnV0dG9uX19ncm91cCc6IHtcclxuICAgICAgZGlzcGxheTogWydmbGV4JywgbnVsbCwgbnVsbCwgbnVsbCwgJ25vbmUnXSxcclxuICAgICAgbWI6IFs0LCBudWxsLCBudWxsLCBudWxsLCAwXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBwcmljaW5nSXRlbToge1xyXG4gICAgbXg6IDMsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgZmxleDogJzEgMSBhdXRvJyxcclxuICB9LFxyXG4gIGJ1dHRvbkdyb3VwOiB7XHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBtYjogJzcnLFxyXG4gICAgbXQ6IFsnLTE1cHgnLCAnLTM1cHgnXSxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgekluZGV4OiAyLFxyXG4gIH0sXHJcbiAgYnV0dG9uR3JvdXBJbm5lcjoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgcGFkZGluZzogJzdweCcsXHJcbiAgICBtYXJnaW46ICcwIGF1dG8nLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNGN0Y4RkInLFxyXG4gICAgYnV0dG9uOiB7XHJcbiAgICAgIGJvcmRlcjogMCxcclxuICAgICAgcGFkZGluZzogWycxNXB4IDIwcHgnLCAnMTVweCAyN3B4J10sXHJcbiAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICAgIGZvbnRTaXplOiBbMSwgMl0sXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMixcclxuICAgICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICBmb250RmFtaWx5OiAnYm9keScsXHJcbiAgICAgIGxldHRlclNwYWNpbmc6ICctMC4yNHB4JyxcclxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzJyxcclxuICAgICAgJyYuYWN0aXZlJzoge1xyXG4gICAgICAgIGNvbG9yOiAnIzBmMjEzNycsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICAgICAgYm94U2hhZG93OiAnMCAzcHggNHB4IHJnYmEoMzgsIDc4LCAxMTgsIDAuMSknLFxyXG4gICAgICB9LFxyXG4gICAgICAnJjpmb2N1cyc6IHtcclxuICAgICAgICBvdXRsaW5lOiAwLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIENvbnRhaW5lciwgQm94LCBHcmlkLCBUZXh0LCBIZWFkaW5nLCBCdXR0b24sIEltYWdlIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcclxuaW1wb3J0IFRleHRGZWF0dXJlIGZyb20gJ2NvbXBvbmVudHMvdGV4dC1mZWF0dXJlJztcclxuaW1wb3J0IE1vZGFsVmlkZW8gZnJvbSAncmVhY3QtbW9kYWwtdmlkZW8nO1xyXG5pbXBvcnQgeyBJb0lvc1BsYXkgfSBmcm9tICdyZWFjdC1pY29ucy9pbyc7XHJcblxyXG5pbXBvcnQgU2VydmljZVRodW1iIGZyb20gJ2Fzc2V0cy9zZXJ2aWNlLXRodW1iLnBuZyc7XHJcbmltcG9ydCBzaGFwZVBhdHRlcm4gZnJvbSAnYXNzZXRzL3NoYXBlLXBhdHRlcm4xLnBuZyc7XHJcblxyXG5pbXBvcnQgU21hcnQgZnJvbSAnYXNzZXRzL3NlcnZpY2VzL3NtYXJ0LnN2Zyc7XHJcbmltcG9ydCBTZWN1cmUgZnJvbSAnYXNzZXRzL3NlcnZpY2VzL3NlY3VyZS5zdmcnO1xyXG5cclxuY29uc3QgZGF0YSA9IHtcclxuICBzdWJUaXRsZTogJ291ciBzZXJ2aWNlcycsXHJcbiAgdGl0bGU6ICdCdXNpbmVzcyBHb2FscyBBY2hpZXZlZCB3aXRoIERlc2lnbicsXHJcbiAgZmVhdHVyZXM6IFtcclxuICAgIHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIGltZ1NyYzogU21hcnQsXHJcbiAgICAgIGFsdFRleHQ6ICdTbWFydCBGZWF0dXJlcycsXHJcbiAgICAgIHRpdGxlOiAnU21hcnQgRmVhdHVyZXMnLFxyXG4gICAgICB0ZXh0OlxyXG4gICAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgbGV0IGhvbWUgY29sbGVjdCBzYW1wbGUgZnJvbSB0aGUgdmljdG9yeSBvZiB0aGUgbWFuYWdlbWVudHMuIHlvdXIgYmxvb2QgdGVzdHMuJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICBpbWdTcmM6IFNlY3VyZSxcclxuICAgICAgYWx0VGV4dDogJ1NlY3VyZSBDb250ZW50cycsXHJcbiAgICAgIHRpdGxlOiAnU2VjdXJlIENvbnRlbnRzJyxcclxuICAgICAgdGV4dDpcclxuICAgICAgICAnR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IGxldCBob21lIGNvbGxlY3Qgc2FtcGxlIGZyb20gdGhlIHZpY3Rvcnkgb2YgdGhlIG1hbmFnZW1lbnRzLiB5b3VyIGJsb29kIHRlc3RzLicsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXJ2aWNlU2VjdGlvbigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGgxPlNlcnZpY2UgU2VjdGlvbjwvaDE+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgcGxheVBsdXNlID0ga2V5ZnJhbWVzYFxyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWigwKSBzY2FsZSgxKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWigwKSBzY2FsZSgxLjUpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgY29yZUZlYXR1cmU6IHtcclxuICAgIHB5OiBbMCwgbnVsbCwgbnVsbCwgMiwgbnVsbCwgN10sXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICB9LFxyXG4gIGNvbnRhaW5lckJveDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogWydmbGV4LXN0YXJ0JywgbnVsbCwgbnVsbCwgJ2NlbnRlciddLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFsnZmxleC1zdGFydCcsIG51bGwsIG51bGwsICdzcGFjZS1iZXR3ZWVuJ10sXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBbJ2NvbHVtbicsIG51bGwsIG51bGwsICdyb3cnXSxcclxuICAgIHBiOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgN10sXHJcbiAgfSxcclxuICB0aHVtYm5haWw6IHtcclxuICAgIG1yOiBbJ2F1dG8nLCBudWxsLCBudWxsLCA2LCA2MCwgODVdLFxyXG4gICAgb3JkZXI6IFsyLCBudWxsLCBudWxsLCAwXSxcclxuICAgIG1sOiBbJ2F1dG8nLCBudWxsLCBudWxsLCAwXSxcclxuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICc+IGltZyc6IHtcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIHpJbmRleDogMSxcclxuICAgICAgaGVpZ2h0OiBbMzEwLCAnYXV0byddLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNoYXBlQm94OiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIGJvdHRvbTogLTY4LFxyXG4gICAgbGVmdDogLTE2MCxcclxuICAgIHpJbmRleDogLTEsXHJcbiAgICBkaXNwbGF5OiBbJ25vbmUnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnaW5saW5lLWJsb2NrJ10sXHJcbiAgfSxcclxuICB2aWRlb0J0bjoge1xyXG4gICAgekluZGV4OiAyLFxyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBsZWZ0OiAnNTAlJyxcclxuICAgIHRvcDogJzUwJScsXHJcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gICAgd2lkdGg6IFsnNjBweCcsIG51bGwsICc4MHB4JywgbnVsbCwgJzEwMHB4J10sXHJcbiAgICBoZWlnaHQ6IFsnNjBweCcsIG51bGwsICc4MHB4JywgbnVsbCwgJzEwMHB4J10sXHJcbiAgICBwOiAnMHB4ICFpbXBvcnRhbnQnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgJyY6OmJlZm9yZSc6IHtcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcclxuICAgICAgbGVmdDogJzUwJScsXHJcbiAgICAgIHRvcDogJzUwJScsXHJcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKScsXHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgIHdpZHRoOiBbJzYwcHgnLCBudWxsLCAnODBweCcsIG51bGwsICcxMDBweCddLFxyXG4gICAgICBoZWlnaHQ6IFsnNjBweCcsIG51bGwsICc4MHB4JywgbnVsbCwgJzEwMHB4J10sXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gICAgICBhbmltYXRpb246IGAke3BsYXlQbHVzZX0gMS41cyBlYXNlLW91dCBpbmZpbml0ZWAsXHJcbiAgICAgIG9wYWNpdHk6IDAuNSxcclxuICAgIH0sXHJcbiAgICAnPiBzcGFuJzoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNSknLFxyXG4gICAgICB3aWR0aDogJ2luaGVyaXQnLFxyXG4gICAgICBoZWlnaHQ6ICdpbmhlcml0JyxcclxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC41cycsXHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIHpJbmRleDogMixcclxuICAgIH0sXHJcbiAgICBzdmc6IHtcclxuICAgICAgZm9udFNpemU6IFs0MCwgbnVsbCwgNDgsIG51bGwsIDYyXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjb250ZW50Qm94OiB7XHJcbiAgICB3aWR0aDogWycxMDAlJywgbnVsbCwgbnVsbCwgMzE1LCAzOTAsIDQ1MCwgbnVsbCwgNTAwXSxcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICBtYjogWzcsIG51bGwsIDYwLCAwXSxcclxuICAgIHRleHRBbGlnbjogWydjZW50ZXInLCBudWxsLCBudWxsLCAnbGVmdCddLFxyXG4gIH0sXHJcbiAgZ3JpZDoge1xyXG4gICAgcHI6IFsyLCAwLCBudWxsLCBudWxsLCA2LCAnNzBweCddLFxyXG4gICAgcGw6IFsyLCAwXSxcclxuICAgIHB0OiBbMiwgbnVsbCwgbnVsbCwgbnVsbCwgM10sXHJcbiAgICBteDogJ2F1dG8nLFxyXG4gICAgd2lkdGg6IFsnMTAwJScsIDM3MCwgNDIwLCAnMTAwJSddLFxyXG4gICAgZ3JpZEdhcDogWyczNXB4IDAnLCBudWxsLCBudWxsLCBudWxsLCAnNTBweCAwJ10sXHJcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbJ3JlcGVhdCgxLDFmciknXSxcclxuICB9LFxyXG4gIGNhcmQ6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcclxuICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcycsXHJcbiAgfSxcclxuXHJcbiAgaWNvbjoge1xyXG4gICAgd2lkdGg6IFsnNDVweCcsIG51bGwsIG51bGwsIG51bGwsICc1NXB4J10sXHJcbiAgICBoZWlnaHQ6ICdhdXRvJyxcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICBtcjogWzMsIG51bGwsIG51bGwsIG51bGwsIDRdLFxyXG4gIH0sXHJcbiAgd3JhcHBlcjoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXHJcbiAgICBtdDogJy01cHgnLFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IDMsXHJcbiAgICAgIGNvbG9yOiAnaGVhZGluZ19zZWNvbmRhcnknLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjQsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgICAgbWI6IFsyLCBudWxsLCAzLCAyLCAzXSxcclxuICAgIH0sXHJcblxyXG4gICAgc3ViVGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAnMTRweCcsIDFdLFxyXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuOSxcclxuICAgIH0sXHJcbiAgfSxcclxuICB2aWRlb1dyYXBwZXI6IHtcclxuICAgIG1heFdpZHRoOiAnMTAwJScsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIHdpZHRoOiAnOTAwcHgnLFxyXG4gICAgJyY6YmVmb3JlJzoge1xyXG4gICAgICBjb250ZW50OiAnXCJcIicsXHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgIHBhZGRpbmdUb3A6ICc1Ni4yNSUnLFxyXG4gICAgfSxcclxuICAgIGlmcmFtZToge1xyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgbGVmdDogMCxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyJztcclxuaW1wb3J0IFRlYW1DYXJkIGZyb20gJ2NvbXBvbmVudHMvdGVhbS1jYXJkJztcclxuaW1wb3J0IHsgRmFGYWNlYm9va0YsIEZhVHdpdHRlciwgRmFJbnN0YWdyYW0gfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcblxyXG5pbXBvcnQgTWVtYmVyMSBmcm9tICdhc3NldHMvdGVhbS9tZW1iZXItMS5wbmcnO1xyXG5pbXBvcnQgTWVtYmVyMiBmcm9tICdhc3NldHMvdGVhbS9tZW1iZXItMi5wbmcnO1xyXG5pbXBvcnQgTWVtYmVyMyBmcm9tICdhc3NldHMvdGVhbS9tZW1iZXItMy5wbmcnO1xyXG5pbXBvcnQgTWVtYmVyNCBmcm9tICdhc3NldHMvdGVhbS9tZW1iZXItNC5wbmcnO1xyXG5pbXBvcnQgTWVtYmVyNSBmcm9tICdhc3NldHMvdGVhbS9tZW1iZXItNS5wbmcnO1xyXG5pbXBvcnQgTWVtYmVyNiBmcm9tICdhc3NldHMvdGVhbS9tZW1iZXItNi5wbmcnO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIGltZ1NyYzogTWVtYmVyMSxcclxuICAgIGFsdFRleHQ6ICdTYWltb24gSGFybWVyJyxcclxuICAgIHRpdGxlOiAnU2FpbW9uIEhhcm1lcicsXHJcbiAgICBkZXNpZ25hdGlvbjogJ0NFTyBhbmQgRm91bmRlcicsXHJcbiAgICBzb2NpYWxQcm9maWxlOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBuYW1lOiAnZmFjZWJvb2snLFxyXG4gICAgICAgIHBhdGg6ICcjJyxcclxuICAgICAgICBpY29uOiA8RmFGYWNlYm9va0YgLz4sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMixcclxuICAgICAgICBuYW1lOiAndHdpdHRlcicsXHJcbiAgICAgICAgcGF0aDogJyMnLFxyXG4gICAgICAgIGljb246IDxGYVR3aXR0ZXIgLz4sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMyxcclxuICAgICAgICBuYW1lOiAnaW5zdGFncmFtJyxcclxuICAgICAgICBwYXRoOiAnIycsXHJcbiAgICAgICAgaWNvbjogPEZhSW5zdGFncmFtIC8+LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgaW1nU3JjOiBNZW1iZXIyLFxyXG4gICAgYWx0VGV4dDogJ0Fhcm9uIE51bmV6JyxcclxuICAgIHRpdGxlOiAnQWFyb24gTnVuZXonLFxyXG4gICAgZGVzaWduYXRpb246ICdGb3VuZGVyJyxcclxuICAgIHNvY2lhbFByb2ZpbGU6IFtcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5hbWU6ICdmYWNlYm9vaycsXHJcbiAgICAgICAgcGF0aDogJyMnLFxyXG4gICAgICAgIGljb246IDxGYUZhY2Vib29rRiAvPixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAyLFxyXG4gICAgICAgIG5hbWU6ICd0d2l0dGVyJyxcclxuICAgICAgICBwYXRoOiAnIycsXHJcbiAgICAgICAgaWNvbjogPEZhVHdpdHRlciAvPixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAzLFxyXG4gICAgICAgIG5hbWU6ICdpbnN0YWdyYW0nLFxyXG4gICAgICAgIHBhdGg6ICcjJyxcclxuICAgICAgICBpY29uOiA8RmFJbnN0YWdyYW0gLz4sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBpbWdTcmM6IE1lbWJlcjMsXHJcbiAgICBhbHRUZXh0OiAnQWFyb24gTnVuZXonLFxyXG4gICAgdGl0bGU6ICdBYXJvbiBOdW5leicsXHJcbiAgICBkZXNpZ25hdGlvbjogJ1dlYiBEZXNpZ25lcicsXHJcbiAgICBzb2NpYWxQcm9maWxlOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBuYW1lOiAnZmFjZWJvb2snLFxyXG4gICAgICAgIHBhdGg6ICcjJyxcclxuICAgICAgICBpY29uOiA8RmFGYWNlYm9va0YgLz4sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMixcclxuICAgICAgICBuYW1lOiAndHdpdHRlcicsXHJcbiAgICAgICAgcGF0aDogJyMnLFxyXG4gICAgICAgIGljb246IDxGYVR3aXR0ZXIgLz4sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMyxcclxuICAgICAgICBuYW1lOiAnaW5zdGFncmFtJyxcclxuICAgICAgICBwYXRoOiAnIycsXHJcbiAgICAgICAgaWNvbjogPEZhSW5zdGFncmFtIC8+LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0LFxyXG4gICAgaW1nU3JjOiBNZW1iZXI0LFxyXG4gICAgYWx0VGV4dDogJ0xpbmEgSnV0aWxhJyxcclxuICAgIHRpdGxlOiAnTGluYSBKdXRpbGEnLFxyXG4gICAgZGVzaWduYXRpb246ICdXZWIgRGV2ZWxvcGVyJyxcclxuICAgIHNvY2lhbFByb2ZpbGU6IFtcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5hbWU6ICdmYWNlYm9vaycsXHJcbiAgICAgICAgcGF0aDogJyMnLFxyXG4gICAgICAgIGljb246IDxGYUZhY2Vib29rRiAvPixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAyLFxyXG4gICAgICAgIG5hbWU6ICd0d2l0dGVyJyxcclxuICAgICAgICBwYXRoOiAnIycsXHJcbiAgICAgICAgaWNvbjogPEZhVHdpdHRlciAvPixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAzLFxyXG4gICAgICAgIG5hbWU6ICdpbnN0YWdyYW0nLFxyXG4gICAgICAgIHBhdGg6ICcjJyxcclxuICAgICAgICBpY29uOiA8RmFJbnN0YWdyYW0gLz4sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDUsXHJcbiAgICBpbWdTcmM6IE1lbWJlcjUsXHJcbiAgICBhbHRUZXh0OiAnU2FpbW9uIEhhcm1lcicsXHJcbiAgICB0aXRsZTogJ1NhaW1vbiBIYXJtZXInLFxyXG4gICAgZGVzaWduYXRpb246ICdDRU8gYW5kIEZvdW5kZXInLFxyXG4gICAgc29jaWFsUHJvZmlsZTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmFtZTogJ2ZhY2Vib29rJyxcclxuICAgICAgICBwYXRoOiAnIycsXHJcbiAgICAgICAgaWNvbjogPEZhRmFjZWJvb2tGIC8+LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgbmFtZTogJ3R3aXR0ZXInLFxyXG4gICAgICAgIHBhdGg6ICcjJyxcclxuICAgICAgICBpY29uOiA8RmFUd2l0dGVyIC8+LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgbmFtZTogJ2luc3RhZ3JhbScsXHJcbiAgICAgICAgcGF0aDogJyMnLFxyXG4gICAgICAgIGljb246IDxGYUluc3RhZ3JhbSAvPixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNixcclxuICAgIGltZ1NyYzogTWVtYmVyNixcclxuICAgIGFsdFRleHQ6ICdBYXJvbiBOdW5leicsXHJcbiAgICB0aXRsZTogJ0Fhcm9uIE51bmV6JyxcclxuICAgIGRlc2lnbmF0aW9uOiAnV2ViIERlc2lnbmVyJyxcclxuICAgIHNvY2lhbFByb2ZpbGU6IFtcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5hbWU6ICdmYWNlYm9vaycsXHJcbiAgICAgICAgcGF0aDogJyMnLFxyXG4gICAgICAgIGljb246IDxGYUZhY2Vib29rRiAvPixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAyLFxyXG4gICAgICAgIG5hbWU6ICd0d2l0dGVyJyxcclxuICAgICAgICBwYXRoOiAnIycsXHJcbiAgICAgICAgaWNvbjogPEZhVHdpdHRlciAvPixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAzLFxyXG4gICAgICAgIG5hbWU6ICdpbnN0YWdyYW0nLFxyXG4gICAgICAgIHBhdGg6ICcjJyxcclxuICAgICAgICBpY29uOiA8RmFJbnN0YWdyYW0gLz4sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZWFtU2VjdGlvbigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGgxPlRlYW0gU2VjdGlvbjwvaDE+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGdyaWQ6IHtcclxuICAgIG10OiBbMCwgbnVsbCwgLTYsIG51bGwsIC00XSxcclxuICAgIGdyaWRHYXA6IFsnMzVweCAwcHgnLCBudWxsLCAwLCBudWxsLCBudWxsLCAnMzBweCAzNXB4J10sXHJcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXHJcbiAgICAgICdyZXBlYXQoMiwxZnIpJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJ3JlcGVhdCgyLDFmciknLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAncmVwZWF0KDMsMWZyKScsXHJcbiAgICBdLFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIENvbnRhaW5lciwgSGVhZGluZywgVGV4dCwgQm94LCBJbWFnZSB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSAnY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlcic7XHJcbmltcG9ydCBSYXRpbmcgZnJvbSAnY29tcG9uZW50cy9yYXRpbmcnO1xyXG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSAnY29tcG9uZW50cy9idXR0b24tZ3JvdXAnO1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtbXVsdGktY2Fyb3VzZWwnO1xyXG5cclxuaW1wb3J0IEF2YXRhcjEgZnJvbSAnYXNzZXRzL3Rlc3RpbW9uaWFsL2F2YXRhcjEucG5nJztcclxuaW1wb3J0IEF2YXRhcjIgZnJvbSAnYXNzZXRzL3Rlc3RpbW9uaWFsL2F2YXRhcjIucG5nJztcclxuaW1wb3J0IEF2YXRhcjMgZnJvbSAnYXNzZXRzL3Rlc3RpbW9uaWFsL2F2YXRhcjMucG5nJztcclxuaW1wb3J0IEF2YXRhcjQgZnJvbSAnYXNzZXRzL3Rlc3RpbW9uaWFsL2F2YXRhcjQucG5nJztcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICB0aXRsZTogJ01vZGVybiBsb29rICYgdHJlbmRpbmcgZGVzaWduJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnR2V0IHdvcmtpbmcgZXhwZXJpZW5jZSB0byB3b3JrIHdpdGggdGhpcyBhbWF6aW5nIHRlYW0gJiBpbiBmdXR1cmUgd2FudCB0byB3b3JrIHRvZ2V0aGVyIGZvciBicmlnaHQgZnV0dXJlIHByb2plY3RzIGFuZCBhbHNvIG1ha2UgZGVwb3NpdCB0byBmcmVlbGFuY2VyLicsXHJcbiAgICBhdmF0YXI6IEF2YXRhcjEsXHJcbiAgICBuYW1lOiAnRGVubnkgSGlsZ3VzdG9uJyxcclxuICAgIGRlc2lnbmF0aW9uOiAnQGRlbm55LmhpbCcsXHJcbiAgICByZXZpZXc6IDQsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIHRpdGxlOiAnRGVzaWduIFF1YWxpdHkgJiBwZXJmb3JtYW5jZScsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ0dldCB3b3JraW5nIGV4cGVyaWVuY2UgdG8gd29yayB3aXRoIHRoaXMgYW1hemluZyB0ZWFtICYgaW4gZnV0dXJlIHdhbnQgdG8gd29yayB0b2dldGhlciBmb3IgYnJpZ2h0IGZ1dHVyZSBwcm9qZWN0cyBhbmQgYWxzbyBtYWtlIGRlcG9zaXQgdG8gZnJlZWxhbmNlci4nLFxyXG4gICAgYXZhdGFyOiBBdmF0YXIyLFxyXG4gICAgbmFtZTogJ0Rlbm55IEhpbGd1c3RvbicsXHJcbiAgICBkZXNpZ25hdGlvbjogJ0BkZW5ueS5oaWwnLFxyXG4gICAgcmV2aWV3OiA1LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICB0aXRsZTogJ0xheW91dCBhbmQgb3JnYW5pemVkIGxheWVycycsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ0dldCB3b3JraW5nIGV4cGVyaWVuY2UgdG8gd29yayB3aXRoIHRoaXMgYW1hemluZyB0ZWFtICYgaW4gZnV0dXJlIHdhbnQgdG8gd29yayB0b2dldGhlciBmb3IgYnJpZ2h0IGZ1dHVyZSBwcm9qZWN0cyBhbmQgYWxzbyBtYWtlIGRlcG9zaXQgdG8gZnJlZWxhbmNlci4nLFxyXG4gICAgYXZhdGFyOiBBdmF0YXIzLFxyXG4gICAgbmFtZTogJ0Rlbm55IEhpbGd1c3RvbicsXHJcbiAgICBkZXNpZ25hdGlvbjogJ0BkZW5ueS5oaWwnLFxyXG4gICAgcmV2aWV3OiA1LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICB0aXRsZTogJ01vZGVybiBsb29rICYgdHJlbmRpbmcgZGVzaWduJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnR2V0IHdvcmtpbmcgZXhwZXJpZW5jZSB0byB3b3JrIHdpdGggdGhpcyBhbWF6aW5nIHRlYW0gJiBpbiBmdXR1cmUgd2FudCB0byB3b3JrIHRvZ2V0aGVyIGZvciBicmlnaHQgZnV0dXJlIHByb2plY3RzIGFuZCBhbHNvIG1ha2UgZGVwb3NpdCB0byBmcmVlbGFuY2VyLicsXHJcbiAgICBhdmF0YXI6IEF2YXRhcjQsXHJcbiAgICBuYW1lOiAnRGVubnkgSGlsZ3VzdG9uJyxcclxuICAgIGRlc2lnbmF0aW9uOiAnQGRlbm55LmhpbCcsXHJcbiAgICByZXZpZXc6IDQsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IHJlc3BvbnNpdmUgPSB7XHJcbiAgZGVza3RvcDoge1xyXG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDMwMDAsIG1pbjogMTYxOSB9LFxyXG4gICAgaXRlbXM6IDQsXHJcbiAgICBzbGlkZXNUb1NsaWRlOiA0LCAvLyBvcHRpb25hbCwgZGVmYXVsdCB0byAxLlxyXG4gIH0sXHJcbiAgbGFwdG9wOiB7XHJcbiAgICBicmVha3BvaW50OiB7IG1heDogMTYxOSwgbWluOiAxMDI0IH0sXHJcbiAgICBpdGVtczogMyxcclxuICAgIHNsaWRlc1RvU2xpZGU6IDMsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXHJcbiAgfSxcclxuICB0YWJsZXQ6IHtcclxuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAxMDI0LCBtaW46IDY0MCB9LFxyXG4gICAgaXRlbXM6IDIsXHJcbiAgICBzbGlkZXNUb1NsaWRlOiAyLCAvLyBvcHRpb25hbCwgZGVmYXVsdCB0byAxLlxyXG4gIH0sXHJcbiAgbW9iaWxlOiB7XHJcbiAgICBicmVha3BvaW50OiB7IG1heDogNjM5LCBtaW46IDAgfSxcclxuICAgIGl0ZW1zOiAxLFxyXG4gICAgc2xpZGVzVG9TbGlkZTogMSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgY2Fyb3VzZWxQYXJhbXMgPSB7XHJcbiAgYWRkaXRpb25hbFRyYW5zZnJvbTowLFxyXG4gIGFycm93czpmYWxzZSxcclxuICBhdXRvUGxheVNwZWVkOjMwMDAsXHJcbiAgY2VudGVyTW9kZTpmYWxzZSxcclxuICBjbGFzc05hbWU6XCJcIixcclxuICBjb250YWluZXJDbGFzczpcImNhcm91c2VsLWNvbnRhaW5lclwiLFxyXG4gIGN1c3RvbUJ1dHRvbkdyb3VwOjxCdXR0b25Hcm91cCAvPixcclxuICBkb3RMaXN0Q2xhc3M6XCJcIixcclxuICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgZm9jdXNPblNlbGVjdDpmYWxzZSxcclxuICBpbmZpbml0ZTp0cnVlLFxyXG4gIGl0ZW1DbGFzczpcIlwiLFxyXG4gIGtleUJvYXJkQ29udHJvbDogdHJ1ZSxcclxuICBtaW5pbXVtVG91Y2hEcmFnOjgwLFxyXG4gIHJlbmRlckJ1dHRvbkdyb3VwT3V0c2lkZTogdHJ1ZSxcclxuICByZW5kZXJEb3RzT3V0c2lkZTpmYWxzZSxcclxuICByZXNwb25zaXZlOnJlc3BvbnNpdmUsXHJcbiAgc2hvd0RvdHM6ZmFsc2UsXHJcbiAgc2xpZGVyQ2xhc3M6XCJcIixcclxuICBzbGlkZXNUb1NsaWRlOjEsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlc3RpbW9uaWFsQ2FyZCgpIHtcclxuICByZXR1cm4gKFxyXG4gICA8aDE+VGVzdGltb25pYWwgQ2FyZDwvaDE+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGNhcm91c2VsV3JhcHBlcjoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGFsaWduSXRlbXM6ICdmbGV4LWVuZCcsXHJcbiAgICBtdDogJy0zMHB4JyxcclxuICAgIHB4OiAnMTVweCcsXHJcbiAgICAnLmNhcm91c2VsLWNvbnRhaW5lcic6IHtcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgbWF4V2lkdGg6IFtcclxuICAgICAgICAnMTAwJScsXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgICc3NTBweCcsXHJcbiAgICAgICAgJzEwMDBweCcsXHJcbiAgICAgICAgJzExODBweCcsXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICAnY2FsYyg1MCUgKyA4NjVweCknLFxyXG4gICAgICBdLFxyXG4gICAgICBtcjogWydhdXRvJywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJy0yMjBweCddLFxyXG4gICAgICBtbDogJ2F1dG8nLFxyXG4gICAgICAnLnJlYWN0LW11bHRpLWNhcm91c2VsLWl0ZW0nOiB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cycsXHJcbiAgICAgIH0sXHJcbiAgICAgICcucmVhY3QtbXVsdGktY2Fyb3VzZWwtaXRlbS0tYWN0aXZlOm50aC1vZi10eXBlKDRuKSc6IHtcclxuICAgICAgICBvcGFjaXR5OiAnMC41JyxcclxuICAgICAgICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYyMHB4KSc6IHtcclxuICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICByZXZpZXdDYXJkOiB7XHJcbiAgICBib3hTaGFkb3c6ICcwcHggMHB4IDFweCByZ2JhKDM4LCA3OCwgMTE4LCAwLjM1KScsXHJcbiAgICB0cmFuc2l0aW9uOiAnYWxsIDAuM3MnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnNnB4JyxcclxuICAgIHA6IFtcclxuICAgICAgJzMwcHggMjBweCAzNXB4JyxcclxuICAgICAgJzMwcHggMjVweCAzNXB4JyxcclxuICAgICAgJzMwcHggMjBweCAzNXB4JyxcclxuICAgICAgJzM1cHggMzBweCA0MHB4IDQwcHgnLFxyXG4gICAgICAnMzBweCAzMHB4IDM1cHgnLFxyXG4gICAgICAnMzVweCAzMHB4IDQwcHggNDBweCcsXHJcbiAgICBdLFxyXG4gICAgYmc6ICd3aGl0ZScsXHJcbiAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcclxuICAgIG06IFtcclxuICAgICAgJzI4cHggNXB4IDMwcHggNXB4JyxcclxuICAgICAgJzI4cHggMjBweCAzMHB4IDIwcHgnLFxyXG4gICAgICAnMjhweCAxNXB4IDMwcHggMTVweCcsXHJcbiAgICAgICcyOHB4IDE1cHggMzBweCAxNXB4JyxcclxuICAgICAgJzMwcHggMjBweCA0MHB4JyxcclxuICAgIF0sXHJcbiAgICAnJjpob3Zlcic6IHtcclxuICAgICAgYm94U2hhZG93OiAnMHB4IDZweCAzMHB4IHJnYmEoMzgsIDc4LCAxMTgsIDAuMSknLFxyXG4gICAgfSxcclxuICAgICcucmF0aW5nJzoge1xyXG4gICAgICBtYjogWzEsIG51bGwsIG51bGwsIDJdLFxyXG4gICAgICB1bDoge1xyXG4gICAgICAgIHBsOiAwLFxyXG4gICAgICAgIGxpc3RTdHlsZTogJ25vbmUnLFxyXG4gICAgICAgIG1iOiAwLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgfSxcclxuICAgICAgc3ZnOiB7XHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICcycHgnLFxyXG4gICAgICAgICcmOmxhc3Qtb2YtdHlwZSc6IHtcclxuICAgICAgICAgIG1hcmdpblJpZ2h0OiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgICcuc3Rhcic6IHtcclxuICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgICAgIG1yOiAnMXB4JyxcclxuICAgICAgfSxcclxuICAgICAgJy5zdGFyLW8nOiB7XHJcbiAgICAgICAgY29sb3I6ICcjZGRkJyxcclxuICAgICAgICBtcjogJzFweCcsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgJy5jYXJkLWZvb3Rlcic6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgbWFyZ2luVG9wOiBbNSwgbnVsbCwgbnVsbCwgJzMzcHgnXSxcclxuICAgICAgJy5pbWFnZSc6IHtcclxuICAgICAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgICAgIG1yOiBbMywgbnVsbCwgbnVsbCwgNF0sXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGltZzoge1xyXG4gICAgICAgICAgd2lkdGg6ICc1NXB4JyxcclxuICAgICAgICAgIGhlaWdodDogJzU1cHgnLFxyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICAgICAgICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBmb250U2l6ZTogWzEsIDJdLFxyXG4gICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgbWI6IFszLCBudWxsLCBudWxsLCAnMjJweCddLFxyXG4gICAgY29sb3I6ICd0ZXh0JyxcclxuICAgIGxpbmVIZWlnaHQ6IDEuNixcclxuICB9LFxyXG4gIGRlc2NyaXB0aW9uOiB7XHJcbiAgICBmb250U2l6ZTogWzEsIG51bGwsIG51bGwsIDJdLFxyXG4gICAgZm9udFdlaWdodDogJ25vcm1hbCcsXHJcbiAgICBjb2xvcjogJ3RleHQnLFxyXG4gICAgbGluZUhlaWdodDogWzEuODUsIG51bGwsIDJdLFxyXG4gIH0sXHJcbiAgaGVhZGluZzoge1xyXG4gICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAyXSxcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgIG1iOiAnM3B4JyxcclxuICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICBsaW5lSGVpZ2h0OiAxLjMsXHJcbiAgfSxcclxuICBkZXNpZ25hdGlvbjoge1xyXG4gICAgY29sb3I6ICdwcmltYXJ5JyxcclxuICAgIGZvbnRXZWlnaHQ6ICc1MDAnLFxyXG4gICAgZm9udFNpemU6IDEsXHJcbiAgICBsaW5lSGVpZ2h0OiAxLjQsXHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkLCBCb3gsIEhlYWRpbmcsIFRleHQgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXInO1xyXG5cclxuaW1wb3J0IFBhdHRlcm5CRyBmcm9tICdhc3NldHMvcGF0dGVybkJHLnBuZyc7XHJcbmltcG9ydCBBcnJvd09kZCBmcm9tICdhc3NldHMvYXJyb3dPZGQuc3ZnJztcclxuaW1wb3J0IEFycm93RXZlbiBmcm9tICdhc3NldHMvYXJyb3dFdmVuLnN2Zyc7XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgdGl0bGU6ICdTZXQgZGlzYnVyc2VtZW50IEluc3RydWN0aW9ucycsXHJcbiAgICB0ZXh0OlxyXG4gICAgICAnR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IGhvbWUgY29sbGVjdCBhIHNhbXBsZSBmcm9tIHRoZSB5b3VyIGJsb29kIHRlc3RzLicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIHRpdGxlOiAnQXNzZW1ibHkgcmV0cmlldmVzIGZ1bmRzIGZyb20geW91ciBhY2NvdW50JyxcclxuICAgIHRleHQ6XHJcbiAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb20gdGhlIHlvdXIgYmxvb2QgdGVzdHMuJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgdGl0bGU6ICdBc3NlbWJseSBpbml0aWF0ZXMgZGlzYnVyc2VtZW50JyxcclxuICAgIHRleHQ6XHJcbiAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb20gdGhlIHlvdXIgYmxvb2QgdGVzdHMuJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0LFxyXG4gICAgdGl0bGU6ICdDdXN0b21lciByZWNlaXZlcyBmdW5kcyBwYXltZW50JyxcclxuICAgIHRleHQ6XHJcbiAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb20gdGhlIHlvdXIgYmxvb2QgdGVzdHMuJyxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV29ya0Zsb3coKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxoMT5Xb3JrZmxvdzwvaDE+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHdvcmtmbG93OiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdwcmltYXJ5JyxcclxuICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke1BhdHRlcm5CR30pYCxcclxuICAgIGJhY2tncm91bmRSZXBlYXQ6IGBuby1yZXBlYXRgLFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyIGNlbnRlcicsXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgcHk6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMF0sXHJcbiAgfSxcclxuICBncmlkOiB7XHJcbiAgICBtYjogLTEsXHJcbiAgICBwdDogMCxcclxuICAgIGdyaWRHYXA6IFtcclxuICAgICAgJzM1cHggMCcsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICc0NXB4IDMwcHgnLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnNTBweCAyNXB4JyxcclxuICAgICAgbnVsbCxcclxuICAgICAgbnVsbCxcclxuICAgICAgJzUwcHggNjVweCcsXHJcbiAgICBdLFxyXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1xyXG4gICAgICAncmVwZWF0KDEsMWZyKScsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICdyZXBlYXQoMiwxZnIpJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJ3JlcGVhdCg0LDFmciknLFxyXG4gICAgXSxcclxuICB9LFxyXG4gIGNhcmQ6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgbnVsbCwgJ2xlZnQnXSxcclxuICAgIHdpZHRoOiBbJzEwMCUnLCAnODAlJywgJzEwMCUnXSxcclxuICAgIG14OiBbJ2F1dG8nXSxcclxuICAgIHB4OiBbNCwgbnVsbCwgbnVsbCwgMF0sXHJcbiAgICAnJjo6YmVmb3JlJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgY29udGVudDogJ1wiXCInLFxyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGxlZnQ6IFswLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA3MiwgbnVsbCwgOTBdLFxyXG4gICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBgbm8tcmVwZWF0YCxcclxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyIGNlbnRlcicsXHJcbiAgICAgIHdpZHRoOiAyMTUsXHJcbiAgICAgIGhlaWdodDogNjAsXHJcbiAgICAgICdAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyMjBweCknOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ25vbmUnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgICcmOm50aC1vZi10eXBlKDJuLTEpOjpiZWZvcmUnOiB7XHJcbiAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke0Fycm93T2RkfSlgLFxyXG4gICAgfSxcclxuICAgICcmOm50aC1vZi10eXBlKDJuKTo6YmVmb3JlJzoge1xyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtBcnJvd0V2ZW59KWAsXHJcbiAgICAgIHRvcDogMTcsXHJcbiAgICB9LFxyXG4gICAgJyY6bGFzdC1jaGlsZDo6YmVmb3JlJzoge1xyXG4gICAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIGljb25Cb3g6IHtcclxuICAgIHdpZHRoOiBbJzUwcHgnLCBudWxsLCAnNjBweCcsIG51bGwsIG51bGwsICc3MHB4J10sXHJcbiAgICBoZWlnaHQ6IFsnNTBweCcsIG51bGwsICc2MHB4JywgbnVsbCwgbnVsbCwgJzcwcHgnXSxcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICBib3JkZXJSYWRpdXM6IFsxNSwgbnVsbCwgMjMsIG51bGwsIG51bGwsIDMwXSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgbWI6IFs1LCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA2XSxcclxuICAgIG14OiBbJ2F1dG8nLCBudWxsLCAwXSxcclxuICAgIGZvbnRTaXplOiBbNiwgbnVsbCwgNywgbnVsbCwgbnVsbCwgJzMwcHgnXSxcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIGNvbG9yOiAnIzIzNDU4MicsXHJcbiAgfSxcclxuICB3cmFwcGVyOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBtdDogJy01cHgnLFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IFszLCBudWxsLCA0LCBudWxsLCBudWxsLCA1XSxcclxuICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjQsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDEuNTVdLFxyXG4gICAgICBwcjogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDJdLFxyXG4gICAgICBtYjogWzIsIDNdLFxyXG4gICAgfSxcclxuXHJcbiAgICBzdWJUaXRsZToge1xyXG4gICAgICBmb250U2l6ZTogMSxcclxuICAgICAgZm9udFdlaWdodDogNDAwLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBbMS44NSwgbnVsbCwgbnVsbCwgMS45LCAyXSxcclxuICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIG9wYWNpdHk6IDAuNzUsXHJcbiAgICAgIHByOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNV0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICAvLyBleGFtcGxlIGNvbG9ycyB3aXRoIGRhcmsgbW9kZVxyXG4gIGNvbG9yczoge1xyXG4gICAgdGV4dDogJyMzNDNENDgnLCAvLyBib2R5IGNvbG9yIGFuZCBwcmltYXJ5IGNvbG9yXHJcbiAgICB0ZXh0X3NlY29uZGFyeTogJyMwMjA3M0UnLCAvLyBzZWNvbmRhcnkgYm9keSBjb2xvclxyXG4gICAgaGVhZGluZzogJyMwRjIxMzcnLCAvLyBwcmltYXJ5IGhlYWRpbmcgY29sb3JcclxuICAgIGhlYWRpbmdfc2Vjb25kYXJ5OiAnIzBGMjEzNycsIC8vIGhlYWRpbmcgY29sb3JcclxuICAgIGJhY2tncm91bmQ6ICcjRkZGRkZGJywgLy8gYm9keSBiYWNrZ3JvdW5kIGNvbG9yXHJcbiAgICBiYWNrZ3JvdW5kX3NlY29uZGFyeTogJyNGOUZCRkQnLCAvLyBzZWNvbmRhcnkgYmFja2dyb3VuZCBjb2xvclxyXG4gICAgYm9yZGVyX2NvbG9yOiAnI0U1RUNGNCcsIC8vIGJvcmRlciBjb2xvclxyXG4gICAgeWVsbG93OiAnI0ZGQTc0MCcsIC8vIGJvcmRlciBjb2xvclxyXG4gICAgcHJpbWFyeTogJyNFQTNBNjAnLCAvLyBwcmltYXJ5IGJ1dHRvbiBhbmQgbGluayBjb2xvclxyXG4gICAgc2Vjb25kYXJ5OiAnIzI1NjNGRicsIC8vIHNlY29uZGFyeSBjb2xvciAtIGNhbiBiZSB1c2VkIGZvciBob3ZlciBzdGF0ZXNcclxuICAgIG11dGVkOiAnI0U0RTRFNCcsIC8vIG11dGVkIGNvbG9yXHJcbiAgICBhY2NlbnQ6ICcjNjA5JywgLy8gYSBjb250cmFzdCBjb2xvciBmb3IgZW1waGFzaXppbmcgVUlcclxuXHJcbiAgICAvLyBoaWdobGlnaHRcdGEgYmFja2dyb3VuZCBjb2xvciBmb3IgaGlnaGxpZ2h0aW5nIHRleHRcclxuICAgIG1vZGVzOiB7XHJcbiAgICAgIGRhcms6IHtcclxuICAgICAgICB0ZXh0OiAnI2ZmZicsXHJcbiAgICAgICAgYmFja2dyb3VuZDogJyMwMDAnLFxyXG4gICAgICAgIHByaW1hcnk6ICcjMGNmJyxcclxuICAgICAgICBzZWNvbmRhcnk6ICcjMDljJyxcclxuICAgICAgICBtdXRlZDogJyMxMTEnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGJyZWFrcG9pbnRzOiBbXHJcbiAgICAnNDgwcHgnLFxyXG4gICAgJzY0MHB4JyxcclxuICAgICc3NjhweCcsXHJcbiAgICAnMTAyNHB4JyxcclxuICAgICcxMjIwcHgnLFxyXG4gICAgJzEzNjZweCcsXHJcbiAgICAnMTYyMHB4JyxcclxuICBdLFxyXG4gIGZvbnRzOiB7XHJcbiAgICBib2R5OiBcIidETSBTYW5zJywgc2Fucy1zZXJpZlwiLFxyXG4gICAgaGVhZGluZzogXCInRE0gU2FucycsIHNhbnMtc2VyaWZcIixcclxuICB9LFxyXG4gIGZvbnRTaXplczogWzEyLCAxNSwgMTYsIDE4LCAyMCwgMjIsIDI0LCAyOCwgMzIsIDM2LCA0MiwgNDgsIDUyLCA2NF0sXHJcbiAgZm9udFdlaWdodHM6IHtcclxuICAgIGJvZHk6ICdub3JtYWwnLFxyXG4gICAgaGVhZGluZzogNTAwLFxyXG4gICAgYm9sZDogNzAwLFxyXG4gIH0sXHJcbiAgbGluZUhlaWdodHM6IHtcclxuICAgIGJvZHk6IDEuOCxcclxuICAgIGhlYWRpbmc6IDEuNSxcclxuICB9LFxyXG4gIGxldHRlclNwYWNpbmdzOiB7XHJcbiAgICBib2R5OiAnbm9ybWFsJyxcclxuICAgIGNhcHM6ICcwLjJlbScsXHJcbiAgICBoZWFkaW5nOiAnLTAuNXB4JyxcclxuICB9LFxyXG4gIHNwYWNlOiBbMCwgNSwgMTAsIDE1LCAyMCwgMjUsIDMwLCA1MCwgODAsIDEwMCwgMTIwLCAxNTBdLFxyXG4gIC8vIHZhcmlhbnRzIGNhbiB1c2UgY3VzdG9tLCB1c2VyLWRlZmluZWQgbmFtZXNcclxuICBsYXlvdXQ6IHtcclxuICAgIGNvbnRhaW5lcjoge1xyXG4gICAgICBtYXhXaWR0aDogW1xyXG4gICAgICAgICcxMDAlJyxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgJzc4MHB4JyxcclxuICAgICAgICAnMTAyMHB4JyxcclxuICAgICAgICAnMTIwMHB4JyxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgICcxMzEwcHgnLFxyXG4gICAgICBdLFxyXG4gICAgICBweDogWzQsIDZdLFxyXG4gICAgfSxcclxuICAgIGhlYWRlcjoge1xyXG4gICAgICBjb2xvcjogJyMwMjA3M0UnLFxyXG4gICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgICAgcHk6IDMsXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgfSxcclxuICAgIHRvb2xiYXI6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgIH0sXHJcbiAgICBtYWluOiB7fSxcclxuICB9LFxyXG4gIHNlY3Rpb246IHtcclxuICAgIGtleUZlYXR1cmU6IHtcclxuICAgICAgcHQ6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMF0sXHJcbiAgICAgIHBiOiBbJzkwcHgnLCBudWxsLCA5LCBudWxsLCBudWxsLCAxMCwgbnVsbCwgJzE2NXB4J10sXHJcbiAgICB9LFxyXG4gICAgZmVhdHVyZToge1xyXG4gICAgICBwYjogWzgsIG51bGwsIDksIG51bGwsIG51bGwsIDEwLCBudWxsLCAnMTcwcHgnXSxcclxuICAgIH0sXHJcbiAgICBuZXdzOiB7XHJcbiAgICAgIHBiOiBbOCwgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTAsIG51bGwsICcxNzBweCddLFxyXG4gICAgfSxcclxuICAgIGNvcmVGZWF0dXJlOiB7XHJcbiAgICAgIHBiOiBbOCwgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTAsIG51bGwsICcxNzBweCddLFxyXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICB9LFxyXG4gICAgdGVzdGltb25pYWw6IHtcclxuICAgICAgcHQ6IFs4LCBudWxsLCA4LCAnNzBweCcsIG51bGwsIDgsIG51bGwsICcxNDVweCddLFxyXG4gICAgICBwYjogWyc5MHB4JywgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTAsIG51bGwsICcxOTBweCddLFxyXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICB9LFxyXG4gICAgc2VydmljZXM6IHtcclxuICAgICAgcGI6IFsnOTBweCcsIG51bGwsIDksIG51bGwsIG51bGwsIDEwLCBudWxsLCAnMTUwcHgnXSxcclxuICAgIH0sXHJcbiAgICBwcmljaW5nOiB7XHJcbiAgICAgIHB0OiBbOCwgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTAsIG51bGwsICcxODBweCddLFxyXG4gICAgICBwYjogWyc5MHB4JywgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTAsIG51bGwsICcxODBweCddLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlY3Rpb25IZWFkZXI6IHtcclxuICAgIHdpZHRoOiBbJzEwMCUnLCBudWxsLCAnNTQwcHgnXSxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBtdDogWyctM3B4JywgbnVsbCwgLTFdLFxyXG4gICAgbWFyZ2luQm90dG9tOiBbJzUwcHgnLCBudWxsLCAnNjBweCcsIG51bGwsIG51bGwsICc2NXB4JywgbnVsbCwgJzgwcHgnXSxcclxuICAgIG14OiAnYXV0bycsXHJcbiAgICB0aXRsZToge1xyXG4gICAgICBmb250U2l6ZTogWycyNHB4JywgbnVsbCwgJzI4cHgnLCBudWxsLCBudWxsLCAnMzJweCcsIG51bGwsICczNnB4J10sXHJcbiAgICAgIGNvbG9yOiAnaGVhZGluZycsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjMsIG51bGwsIG51bGwsIDEuMjVdLFxyXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICBmb250V2VpZ2h0OiAnNzAwJyxcclxuICAgICAgbGV0dGVyU3BhY2luZzogJy0uNXB4JyxcclxuICAgIH0sXHJcblxyXG4gICAgc3ViVGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IFswLCAnMTNweCcsIG51bGwsICcxNHB4J10sXHJcbiAgICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgIGxldHRlclNwYWNpbmc6IFsnMS41cHgnLCBudWxsLCAnMnB4J10sXHJcbiAgICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxyXG4gICAgICBmb250V2VpZ2h0OiAnNzAwJyxcclxuICAgICAgbWI6IDIsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNSxcclxuICAgIH0sXHJcbiAgfSxcclxuICB0ZXh0OiB7XHJcbiAgICBoZWFkaW5nOiB7XHJcbiAgICAgIGZvbnRGYW1pbHk6ICdoZWFkaW5nJyxcclxuICAgICAgbGluZUhlaWdodDogJ2hlYWRpbmcnLFxyXG4gICAgICBmb250V2VpZ2h0OiAnaGVhZGluZycsXHJcbiAgICAgIGZvbnRTaXplOiBbNF0sXHJcbiAgICAgIGxldHRlclNwYWNpbmc6ICctLjU1cHgnLFxyXG4gICAgICBjb2xvcjogJ2hlYWRpbmcnLFxyXG4gICAgfSxcclxuICAgIGhlcm9QcmltYXJ5OiB7XHJcbiAgICAgIGNvbG9yOiAnaGVhZGluZycsXHJcbiAgICAgIGZvbnRTaXplOiBbXHJcbiAgICAgICAgJzMycHgnLFxyXG4gICAgICAgICczNnB4JyxcclxuICAgICAgICAnNDJweCcsXHJcbiAgICAgICAgJzQwcHgnLFxyXG4gICAgICAgICc0MnB4JyxcclxuICAgICAgICAnNTJweCcsXHJcbiAgICAgICAgJzU4cHgnLFxyXG4gICAgICAgICc2NnB4JyxcclxuICAgICAgXSxcclxuICAgICAgbGluZUhlaWdodDogWzEuMywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgMS4yXSxcclxuICAgICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgICBtYjogWzQsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDVdLFxyXG4gICAgfSxcclxuICAgIGhlcm9TZWNvbmRhcnk6IHtcclxuICAgICAgZm9udFNpemU6IFsyLCBudWxsLCAnMTdweCcsIG51bGwsIG51bGwsICcxOXB4JywgNF0sXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjksIG51bGwsIG51bGwsIDJdLFxyXG4gICAgICBmb250V2VpZ2h0OiAnYm9keScsXHJcbiAgICAgIG1iOiA1LFxyXG4gICAgICBweDogWzAsIG51bGwsIDUsIDYsIG51bGwsIDgsIDldLFxyXG4gICAgICBjb2xvcjogJ2hlYWRpbmcnLFxyXG4gICAgfSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgIC8vIGV4dGVuZHMgdGhlIHRleHQuaGVhZGluZyBzdHlsZXNcclxuICAgICAgdmFyaWFudDogJ3RleHQuaGVhZGluZycsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgICAgZm9udFNpemU6IFszLCBudWxsLCA0XSxcclxuICAgICAgbGluZUhlaWdodDogMS4yNSxcclxuICAgICAgbWI6IDEsXHJcbiAgICB9LFxyXG4gICAgbGVhZDoge1xyXG4gICAgICBmb250U2l6ZTogNDAsXHJcbiAgICAgIGZvbnRGYW1pbHk6ICdETSBTYW5zJyxcclxuICAgICAgZm9udFdlaWdodDogJzUwMCcsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICc2MHB4JyxcclxuICAgICAgbGV0dGVyU3BhY2luZzogJy0xLjVweCcsXHJcbiAgICAgIGNvbG9yOiAnIzBGMjEzNycsXHJcbiAgICB9LFxyXG4gICAgbXV0ZWQ6IHtcclxuICAgICAgbGluZUhlaWdodDogJzI2cHgnLFxyXG4gICAgICBjb2xvcjogJ211dGVkJyxcclxuICAgIH0sXHJcbiAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgICBjb2xvcjogJyMwMEE5OUQnLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnNDBweCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbGlua3M6IHtcclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICB9LFxyXG4gICAgYm9sZDoge1xyXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICB9LFxyXG4gICAgbmF2OiB7XHJcbiAgICAgIGRpc3BsYXk6IFsnbm9uZScsIG51bGwsICdpbmxpbmUtYmxvY2snXSxcclxuICAgICAgcHg6IDI1LFxyXG4gICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgIH0sXHJcbiAgICBibG9nOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgIHB4OiAwLFxyXG4gICAgICBjb2xvcjogJ2luaGVyaXQnLFxyXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG4gICAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnY29sb3IgMC4yNXMnLFxyXG4gICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGZvb3Rlcjoge1xyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICBweDogMCxcclxuICAgICAgY29sb3I6ICdpbmhlcml0JyxcclxuICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcclxuICAgIH0sXHJcbiAgICBsb2dvOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBpbWFnZXM6IHtcclxuICAgIGF2YXRhcjoge1xyXG4gICAgICB3aWR0aDogNDgsXHJcbiAgICAgIGhlaWdodDogNDgsXHJcbiAgICAgIGJvcmRlclJhZGl1czogOTk5OTksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgLy8gdmFyaWFudHMgZm9yIGJ1dHRvbnNcclxuICBidXR0b25zOiB7XHJcbiAgICBtZW51OiB7XHJcbiAgICAgIGRpc3BsYXk6IFtudWxsLCBudWxsLCAnbm9uZSddLFxyXG4gICAgfSwgLy8gZGVmYXVsdCB2YXJpYW50IGZvciBNZW51QnV0dG9uXHJcbiAgICAvLyB5b3UgY2FuIHJlZmVyZW5jZSBvdGhlciB2YWx1ZXMgZGVmaW5lZCBpbiB0aGUgdGhlbWVcclxuICAgIGRlZmF1bHRCdG46IHtcclxuICAgICAgYm9yZGVyUmFkaXVzOiAnNDVweCcsXHJcbiAgICAgIGZvbnRTaXplOiBbJzE0cHgnLCBudWxsLCBudWxsLCAyXSxcclxuICAgICAgbGV0dGVyU3BhY2luZ3M6ICctMC4xNXB4JyxcclxuICAgICAgcGFkZGluZzogWycxMnB4IDIwcHgnLCBudWxsLCAnMTVweCAzMHB4J10sXHJcbiAgICAgIGZvbnRGYW1pbHk6ICdib2R5JyxcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMixcclxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cycsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgICAgJyY6Zm9jdXMnOiB7XHJcbiAgICAgICAgb3V0bGluZTogMCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBwcmltYXJ5OiB7XHJcbiAgICAgIHZhcmlhbnQ6ICdidXR0b25zLmRlZmF1bHRCdG4nLFxyXG4gICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgYmc6ICdwcmltYXJ5JyxcclxuICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgYm94U2hhZG93OiAncmdiYSgyMzMsIDc2LCA4NCwgMC41NykgMHB4IDlweCAyMHB4IC01cHgnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHdoaXRlQnV0dG9uOiB7XHJcbiAgICAgIHZhcmlhbnQ6ICdidXR0b25zLmRlZmF1bHRCdG4nLFxyXG4gICAgICBjb2xvcjogJ2hlYWRpbmdfc2Vjb25kYXJ5JyxcclxuICAgICAgYmc6ICd3aGl0ZScsXHJcbiAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgIGJveFNoYWRvdzogJ3JnYmEoMCwgMCwgMCwgMC41KSAwcHggMTJweCAyNHB4IC0xMHB4JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgdmFyaWFudDogJ2J1dHRvbnMuZGVmYXVsdEJ0bicsXHJcbiAgICAgIGJvcmRlcjogJzJweCBzb2xpZCcsXHJcbiAgICAgIGJvcmRlckNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgIGJnOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICBwYWRkaW5nOiBbJzEwcHggMTVweCcsIG51bGwsICcxNXB4IDMwcHgnXSxcclxuICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgYmc6ICdwcmltYXJ5JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB0ZXh0QnV0dG9uOiB7XHJcbiAgICAgIHZhcmlhbnQ6ICdidXR0b25zLmRlZmF1bHRCdG4nLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgc3ZnOiB7XHJcbiAgICAgICAgZm9udFNpemU6IFs0LCA2XSxcclxuICAgICAgICBtcjogMixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjYXJkczoge1xyXG4gICAgcHJpbWFyeToge1xyXG4gICAgICBwYWRkaW5nOiAyLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICB9LFxyXG4gICAgb2ZmZXI6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgZmxleDogWycxIDEgY2FsYyg1MCUgLSAxNnB4KScsICcxIDEgMjAlJ10sXHJcbiAgICAgIG1pbkhlaWdodDogMTMwLFxyXG4gICAgICBtOiAyLFxyXG4gICAgICBiYWNrZ3JvdW5kOiAnI0ZGRkZGRicsXHJcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjRURFRkY2JyxcclxuICAgICAgYm9yZGVyUmFkaXVzOiA1LFxyXG4gICAgfSxcclxuICAgIGZlYXR1cmVDYXJkOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcclxuICAgICAgcDogMyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBmb3Jtczoge1xyXG4gICAgbGFiZWw6IHtcclxuICAgICAgZm9udFNpemU6IDEsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgIH0sXHJcbiAgICBpbnB1dDoge1xyXG4gICAgICBib3JkZXJSYWRpdXM6IDgsXHJcbiAgICAgIGJvcmRlckNvbG9yOiAnYm9yZGVyX2NvbG9yJyxcclxuICAgICAgaGVpZ2h0OiA2MCxcclxuICAgICAgJyY6Zm9jdXMnOiB7XHJcbiAgICAgICAgYm9yZGVyQ29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgICBib3hTaGFkb3c6ICh0KSA9PiBgMCAwIDAgMnB4ICR7dC5jb2xvcnMucHJpbWFyeX1gLFxyXG4gICAgICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgYmFkZ2VzOiB7XHJcbiAgICBwcmltYXJ5OiB7XHJcbiAgICAgIGNvbG9yOiAnYmFja2dyb3VuZCcsXHJcbiAgICAgIGJnOiAnIzI4QTVGRicsXHJcbiAgICAgIGJvcmRlclJhZGl1czogMzAsXHJcbiAgICAgIHA6ICczcHggMTFweCcsXHJcbiAgICAgIGZvbnRTaXplOiAxLFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuNXB4JyxcclxuICAgIH0sXHJcbiAgICBvdXRsaW5lOiB7XHJcbiAgICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgIGJnOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICBib3hTaGFkb3c6ICdpbnNldCAwIDAgMCAxcHgnLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBzdHlsZXM6IHtcclxuICAgIC8vIFRvIGFkZCBiYXNlLCB0b3AtbGV2ZWwgc3R5bGVzIHRvIHRoZSA8Ym9keT4gZWxlbWVudCwgdXNlIHRoZW1lLnN0eWxlcy5yb290LlxyXG4gICAgcm9vdDoge1xyXG4gICAgICBmb250RmFtaWx5OiAnYm9keScsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICdib2R5JyxcclxuICAgICAgZm9udFdlaWdodDogJ2JvZHknLFxyXG4gICAgICBmb250U21vb3RoaW5nOiAnYW50aWFsaWFzZWQnLFxyXG4gICAgICAvLyBNb2RhbCBHbG9iYWwgU3R5bGVcclxuICAgICAgJy5tb2RhbC12aWRlby1jbG9zZS1idG4nOiB7XHJcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgIH0sXHJcbiAgICAgICcubW9kYWwtdmlkZW8tbW92aWUtd3JhcCc6IHtcclxuICAgICAgICBtYXJnaW46IDYsXHJcbiAgICAgICAgd2lkdGg6ICdhdXRvJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAvLyBEaXZpZGVyIHN0eWxlc1xyXG4gICAgaHI6IHtcclxuICAgICAgYm9yZGVyOiAwLFxyXG4gICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQnLFxyXG4gICAgICBib3JkZXJDb2xvcjogJyNEOUUwRTcnLFxyXG4gICAgfSxcclxuICAgIC8vIGFsc28geW91IGNhbiB1c2Ugb3RoZXIgSFRNTCBlbGVtZW50cyBzdHlsZSBoZXJlXHJcbiAgICB1bDoge1xyXG4gICAgICBsaXN0U3R5bGU6ICdub25lJyxcclxuICAgIH0sXHJcbiAgICBzck9ubHk6IHtcclxuICAgICAgYm9yZGVyOiAnMCAhaW1wb3J0YW50JyxcclxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KSAhaW1wb3J0YW50JyxcclxuICAgICAgY2xpcFBhdGg6ICdpbnNldCg1MCUpICFpbXBvcnRhbnQnLFxyXG4gICAgICBoZWlnaHQ6ICcxcHggIWltcG9ydGFudCcsXHJcbiAgICAgIG1hcmdpbjogJy0xcHggIWltcG9ydGFudCcsXHJcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuICFpbXBvcnRhbnQnLFxyXG4gICAgICBwYWRkaW5nOiAnMCAhaW1wb3J0YW50JyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSAhaW1wb3J0YW50JyxcclxuICAgICAgd2lkdGg6ICcxcHggIWltcG9ydGFudCcsXHJcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAgIWltcG9ydGFudCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJjLWRyYXdlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jdXN0b20tc2Nyb2xsYmFyc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9mYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9pb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tb2RhbC12aWRlb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tdWx0aS1jYXJvdXNlbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zY3JvbGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3RpY2t5bm9kZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0aGVtZS11aVwiKTsiXSwic291cmNlUm9vdCI6IiJ9