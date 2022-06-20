webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/react-easy-swipe/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/react-easy-swipe/lib/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./react-swipe */ "./node_modules/react-easy-swipe/lib/react-swipe.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _reactSwipe) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _reactSwipe2 = _interopRequireDefault(_reactSwipe);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = _reactSwipe2.default;
});

/***/ }),

/***/ "./node_modules/react-easy-swipe/lib/react-swipe.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-easy-swipe/lib/react-swipe.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _propTypes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.setHasSupportToCaptureOption = setHasSupportToCaptureOption;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  function _objectWithoutProperties(obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var supportsCaptureOption = false;
  function setHasSupportToCaptureOption(hasSupport) {
    supportsCaptureOption = hasSupport;
  }

  try {
    addEventListener('test', null, Object.defineProperty({}, 'capture', { get: function get() {
        setHasSupportToCaptureOption(true);
      } }));
  } catch (e) {} // eslint-disable-line no-empty

  function getSafeEventHandlerOpts() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { capture: true };

    return supportsCaptureOption ? options : options.capture;
  }

  /**
   * [getPosition returns a position element that works for mouse or touch events]
   * @param  {[Event]} event [the received event]
   * @return {[Object]}      [x and y coords]
   */
  function getPosition(event) {
    if ('touches' in event) {
      var _event$touches$ = event.touches[0],
          pageX = _event$touches$.pageX,
          pageY = _event$touches$.pageY;

      return { x: pageX, y: pageY };
    }

    var screenX = event.screenX,
        screenY = event.screenY;

    return { x: screenX, y: screenY };
  }

  var ReactSwipe = function (_Component) {
    _inherits(ReactSwipe, _Component);

    function ReactSwipe() {
      var _ref;

      _classCallCheck(this, ReactSwipe);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var _this = _possibleConstructorReturn(this, (_ref = ReactSwipe.__proto__ || Object.getPrototypeOf(ReactSwipe)).call.apply(_ref, [this].concat(args)));

      _this._handleSwipeStart = _this._handleSwipeStart.bind(_this);
      _this._handleSwipeMove = _this._handleSwipeMove.bind(_this);
      _this._handleSwipeEnd = _this._handleSwipeEnd.bind(_this);

      _this._onMouseDown = _this._onMouseDown.bind(_this);
      _this._onMouseMove = _this._onMouseMove.bind(_this);
      _this._onMouseUp = _this._onMouseUp.bind(_this);

      _this._setSwiperRef = _this._setSwiperRef.bind(_this);
      return _this;
    }

    _createClass(ReactSwipe, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.swiper) {
          this.swiper.addEventListener('touchmove', this._handleSwipeMove, getSafeEventHandlerOpts({
            capture: true,
            passive: false
          }));
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.swiper) {
          this.swiper.removeEventListener('touchmove', this._handleSwipeMove, getSafeEventHandlerOpts({
            capture: true,
            passive: false
          }));
        }
      }
    }, {
      key: '_onMouseDown',
      value: function _onMouseDown(event) {
        if (!this.props.allowMouseEvents) {
          return;
        }

        this.mouseDown = true;

        document.addEventListener('mouseup', this._onMouseUp);
        document.addEventListener('mousemove', this._onMouseMove);

        this._handleSwipeStart(event);
      }
    }, {
      key: '_onMouseMove',
      value: function _onMouseMove(event) {
        if (!this.mouseDown) {
          return;
        }

        this._handleSwipeMove(event);
      }
    }, {
      key: '_onMouseUp',
      value: function _onMouseUp(event) {
        this.mouseDown = false;

        document.removeEventListener('mouseup', this._onMouseUp);
        document.removeEventListener('mousemove', this._onMouseMove);

        this._handleSwipeEnd(event);
      }
    }, {
      key: '_handleSwipeStart',
      value: function _handleSwipeStart(event) {
        var _getPosition = getPosition(event),
            x = _getPosition.x,
            y = _getPosition.y;

        this.moveStart = { x: x, y: y };
        this.props.onSwipeStart(event);
      }
    }, {
      key: '_handleSwipeMove',
      value: function _handleSwipeMove(event) {
        if (!this.moveStart) {
          return;
        }

        var _getPosition2 = getPosition(event),
            x = _getPosition2.x,
            y = _getPosition2.y;

        var deltaX = x - this.moveStart.x;
        var deltaY = y - this.moveStart.y;
        this.moving = true;

        // handling the responsability of cancelling the scroll to
        // the component handling the event
        var shouldPreventDefault = this.props.onSwipeMove({
          x: deltaX,
          y: deltaY
        }, event);

        if (shouldPreventDefault && event.cancelable) {
          event.preventDefault();
        }

        this.movePosition = { deltaX: deltaX, deltaY: deltaY };
      }
    }, {
      key: '_handleSwipeEnd',
      value: function _handleSwipeEnd(event) {
        this.props.onSwipeEnd(event);

        var tolerance = this.props.tolerance;


        if (this.moving && this.movePosition) {
          if (this.movePosition.deltaX < -tolerance) {
            this.props.onSwipeLeft(1, event);
          } else if (this.movePosition.deltaX > tolerance) {
            this.props.onSwipeRight(1, event);
          }
          if (this.movePosition.deltaY < -tolerance) {
            this.props.onSwipeUp(1, event);
          } else if (this.movePosition.deltaY > tolerance) {
            this.props.onSwipeDown(1, event);
          }
        }

        this.moveStart = null;
        this.moving = false;
        this.movePosition = null;
      }
    }, {
      key: '_setSwiperRef',
      value: function _setSwiperRef(node) {
        this.swiper = node;
        this.props.innerRef(node);
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            tagName = _props.tagName,
            className = _props.className,
            style = _props.style,
            children = _props.children,
            allowMouseEvents = _props.allowMouseEvents,
            onSwipeUp = _props.onSwipeUp,
            onSwipeDown = _props.onSwipeDown,
            onSwipeLeft = _props.onSwipeLeft,
            onSwipeRight = _props.onSwipeRight,
            onSwipeStart = _props.onSwipeStart,
            onSwipeMove = _props.onSwipeMove,
            onSwipeEnd = _props.onSwipeEnd,
            innerRef = _props.innerRef,
            tolerance = _props.tolerance,
            props = _objectWithoutProperties(_props, ['tagName', 'className', 'style', 'children', 'allowMouseEvents', 'onSwipeUp', 'onSwipeDown', 'onSwipeLeft', 'onSwipeRight', 'onSwipeStart', 'onSwipeMove', 'onSwipeEnd', 'innerRef', 'tolerance']);

        return _react2.default.createElement(
          this.props.tagName,
          _extends({
            ref: this._setSwiperRef,
            onMouseDown: this._onMouseDown,
            onTouchStart: this._handleSwipeStart,
            onTouchEnd: this._handleSwipeEnd,
            className: className,
            style: style
          }, props),
          children
        );
      }
    }]);

    return ReactSwipe;
  }(_react.Component);

  ReactSwipe.displayName = 'ReactSwipe';
  ReactSwipe.propTypes = {
    tagName: _propTypes2.default.string,
    className: _propTypes2.default.string,
    style: _propTypes2.default.object,
    children: _propTypes2.default.node,
    allowMouseEvents: _propTypes2.default.bool,
    onSwipeUp: _propTypes2.default.func,
    onSwipeDown: _propTypes2.default.func,
    onSwipeLeft: _propTypes2.default.func,
    onSwipeRight: _propTypes2.default.func,
    onSwipeStart: _propTypes2.default.func,
    onSwipeMove: _propTypes2.default.func,
    onSwipeEnd: _propTypes2.default.func,
    innerRef: _propTypes2.default.func,
    tolerance: _propTypes2.default.number.isRequired
  };
  ReactSwipe.defaultProps = {
    tagName: 'div',
    allowMouseEvents: false,
    onSwipeUp: function onSwipeUp() {},
    onSwipeDown: function onSwipeDown() {},
    onSwipeLeft: function onSwipeLeft() {},
    onSwipeRight: function onSwipeRight() {},
    onSwipeStart: function onSwipeStart() {},
    onSwipeMove: function onSwipeMove() {},
    onSwipeEnd: function onSwipeEnd() {},
    innerRef: function innerRef() {},

    tolerance: 0
  };
  exports.default = ReactSwipe;
});

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/js/CSSTranslate.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/js/CSSTranslate.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(position, metric, axis) {
  var positionPercent = position === 0 ? position : position + metric;
  var positionCss = axis === 'horizontal' ? [positionPercent, 0, 0] : [0, positionPercent, 0];
  var transitionProp = 'translate3d';
  var translatedPosition = '(' + positionCss.join(',') + ')';
  return transitionProp + translatedPosition;
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/js/components/Carousel/animations.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/js/components/Carousel/animations.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fadeAnimationHandler = exports.slideStopSwipingHandler = exports.slideSwipeAnimationHandler = exports.slideAnimationHandler = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _CSSTranslate = _interopRequireDefault(__webpack_require__(/*! ../../CSSTranslate */ "./node_modules/react-responsive-carousel/lib/js/CSSTranslate.js"));

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-responsive-carousel/lib/js/components/Carousel/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Main animation handler for the default 'sliding' style animation
 * @param props
 * @param state
 */
var slideAnimationHandler = function slideAnimationHandler(props, state) {
  var returnStyles = {};
  var selectedItem = state.selectedItem;
  var previousItem = selectedItem;
  var lastPosition = _react.Children.count(props.children) - 1;
  var needClonedSlide = props.infiniteLoop && (selectedItem < 0 || selectedItem > lastPosition); // Handle list position if it needs a clone

  if (needClonedSlide) {
    if (previousItem < 0) {
      if (props.centerMode && props.centerSlidePercentage && props.axis === 'horizontal') {
        returnStyles.itemListStyle = (0, _utils.setPosition)(-(lastPosition + 2) * props.centerSlidePercentage - (100 - props.centerSlidePercentage) / 2, props.axis);
      } else {
        returnStyles.itemListStyle = (0, _utils.setPosition)(-(lastPosition + 2) * 100, props.axis);
      }
    } else if (previousItem > lastPosition) {
      returnStyles.itemListStyle = (0, _utils.setPosition)(0, props.axis);
    }

    return returnStyles;
  }

  var currentPosition = (0, _utils.getPosition)(selectedItem, props); // if 3d is available, let's take advantage of the performance of transform

  var transformProp = (0, _CSSTranslate.default)(currentPosition, '%', props.axis);
  var transitionTime = props.transitionTime + 'ms';
  returnStyles.itemListStyle = {
    WebkitTransform: transformProp,
    msTransform: transformProp,
    OTransform: transformProp,
    transform: transformProp
  };

  if (!state.swiping) {
    returnStyles.itemListStyle = _objectSpread(_objectSpread({}, returnStyles.itemListStyle), {}, {
      WebkitTransitionDuration: transitionTime,
      MozTransitionDuration: transitionTime,
      OTransitionDuration: transitionTime,
      transitionDuration: transitionTime,
      msTransitionDuration: transitionTime
    });
  }

  return returnStyles;
};
/**
 * Swiping animation handler for the default 'sliding' style animation
 * @param delta
 * @param props
 * @param state
 * @param setState
 */


exports.slideAnimationHandler = slideAnimationHandler;

var slideSwipeAnimationHandler = function slideSwipeAnimationHandler(delta, props, state, setState) {
  var returnStyles = {};
  var isHorizontal = props.axis === 'horizontal';

  var childrenLength = _react.Children.count(props.children);

  var initialBoundry = 0;
  var currentPosition = (0, _utils.getPosition)(state.selectedItem, props);
  var finalBoundry = props.infiniteLoop ? (0, _utils.getPosition)(childrenLength - 1, props) - 100 : (0, _utils.getPosition)(childrenLength - 1, props);
  var axisDelta = isHorizontal ? delta.x : delta.y;
  var handledDelta = axisDelta; // prevent user from swiping left out of boundaries

  if (currentPosition === initialBoundry && axisDelta > 0) {
    handledDelta = 0;
  } // prevent user from swiping right out of boundaries


  if (currentPosition === finalBoundry && axisDelta < 0) {
    handledDelta = 0;
  }

  var position = currentPosition + 100 / (state.itemSize / handledDelta);
  var hasMoved = Math.abs(axisDelta) > props.swipeScrollTolerance;

  if (props.infiniteLoop && hasMoved) {
    // When allowing infinite loop, if we slide left from position 0 we reveal the cloned last slide that appears before it
    // if we slide even further we need to jump to other side so it can continue - and vice versa for the last slide
    if (state.selectedItem === 0 && position > -100) {
      position -= childrenLength * 100;
    } else if (state.selectedItem === childrenLength - 1 && position < -childrenLength * 100) {
      position += childrenLength * 100;
    }
  }

  if (!props.preventMovementUntilSwipeScrollTolerance || hasMoved || state.swipeMovementStarted) {
    if (!state.swipeMovementStarted) {
      setState({
        swipeMovementStarted: true
      });
    }

    returnStyles.itemListStyle = (0, _utils.setPosition)(position, props.axis);
  } //allows scroll if the swipe was within the tolerance


  if (hasMoved && !state.cancelClick) {
    setState({
      cancelClick: true
    });
  }

  return returnStyles;
};
/**
 * Default 'sliding' style animination handler for when a swipe action stops.
 * @param props
 * @param state
 */


exports.slideSwipeAnimationHandler = slideSwipeAnimationHandler;

var slideStopSwipingHandler = function slideStopSwipingHandler(props, state) {
  var currentPosition = (0, _utils.getPosition)(state.selectedItem, props);
  var itemListStyle = (0, _utils.setPosition)(currentPosition, props.axis);
  return {
    itemListStyle: itemListStyle
  };
};
/**
 * Main animation handler for the default 'fade' style animation
 * @param props
 * @param state
 */


exports.slideStopSwipingHandler = slideStopSwipingHandler;

var fadeAnimationHandler = function fadeAnimationHandler(props, state) {
  var transitionTime = props.transitionTime + 'ms';
  var transitionTimingFunction = 'ease-in-out';
  var slideStyle = {
    position: 'absolute',
    display: 'block',
    zIndex: -2,
    minHeight: '100%',
    opacity: 0,
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    transitionTimingFunction: transitionTimingFunction,
    msTransitionTimingFunction: transitionTimingFunction,
    MozTransitionTimingFunction: transitionTimingFunction,
    WebkitTransitionTimingFunction: transitionTimingFunction,
    OTransitionTimingFunction: transitionTimingFunction
  };

  if (!state.swiping) {
    slideStyle = _objectSpread(_objectSpread({}, slideStyle), {}, {
      WebkitTransitionDuration: transitionTime,
      MozTransitionDuration: transitionTime,
      OTransitionDuration: transitionTime,
      transitionDuration: transitionTime,
      msTransitionDuration: transitionTime
    });
  }

  return {
    slideStyle: slideStyle,
    selectedStyle: _objectSpread(_objectSpread({}, slideStyle), {}, {
      opacity: 1,
      position: 'relative'
    }),
    prevStyle: _objectSpread({}, slideStyle)
  };
};

exports.fadeAnimationHandler = fadeAnimationHandler;

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/js/components/Carousel/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/js/components/Carousel/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactEasySwipe = _interopRequireDefault(__webpack_require__(/*! react-easy-swipe */ "./node_modules/react-easy-swipe/lib/index.js"));

var _cssClasses = _interopRequireDefault(__webpack_require__(/*! ../../cssClasses */ "./node_modules/react-responsive-carousel/lib/js/cssClasses.js"));

var _Thumbs = _interopRequireDefault(__webpack_require__(/*! ../Thumbs */ "./node_modules/react-responsive-carousel/lib/js/components/Thumbs.js"));

var _document = _interopRequireDefault(__webpack_require__(/*! ../../shims/document */ "./node_modules/react-responsive-carousel/lib/js/shims/document.js"));

var _window = _interopRequireDefault(__webpack_require__(/*! ../../shims/window */ "./node_modules/react-responsive-carousel/lib/js/shims/window.js"));

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-responsive-carousel/lib/js/components/Carousel/utils.js");

var _animations = __webpack_require__(/*! ./animations */ "./node_modules/react-responsive-carousel/lib/js/components/Carousel/animations.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Carousel = /*#__PURE__*/function (_React$Component) {
  _inherits(Carousel, _React$Component);

  var _super = _createSuper(Carousel);

  // @ts-ignore
  function Carousel(props) {
    var _this;

    _classCallCheck(this, Carousel);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "thumbsRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "carouselWrapperRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "listRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "itemsRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "timer", void 0);

    _defineProperty(_assertThisInitialized(_this), "animationHandler", void 0);

    _defineProperty(_assertThisInitialized(_this), "setThumbsRef", function (node) {
      _this.thumbsRef = node;
    });

    _defineProperty(_assertThisInitialized(_this), "setCarouselWrapperRef", function (node) {
      _this.carouselWrapperRef = node;
    });

    _defineProperty(_assertThisInitialized(_this), "setListRef", function (node) {
      _this.listRef = node;
    });

    _defineProperty(_assertThisInitialized(_this), "setItemsRef", function (node, index) {
      if (!_this.itemsRef) {
        _this.itemsRef = [];
      }

      _this.itemsRef[index] = node;
    });

    _defineProperty(_assertThisInitialized(_this), "autoPlay", function () {
      if (_react.Children.count(_this.props.children) <= 1) {
        return;
      }

      _this.clearAutoPlay();

      if (!_this.props.autoPlay) {
        return;
      }

      _this.timer = setTimeout(function () {
        _this.increment();
      }, _this.props.interval);
    });

    _defineProperty(_assertThisInitialized(_this), "clearAutoPlay", function () {
      if (_this.timer) clearTimeout(_this.timer);
    });

    _defineProperty(_assertThisInitialized(_this), "resetAutoPlay", function () {
      _this.clearAutoPlay();

      _this.autoPlay();
    });

    _defineProperty(_assertThisInitialized(_this), "stopOnHover", function () {
      _this.setState({
        isMouseEntered: true
      }, _this.clearAutoPlay);
    });

    _defineProperty(_assertThisInitialized(_this), "startOnLeave", function () {
      _this.setState({
        isMouseEntered: false
      }, _this.autoPlay);
    });

    _defineProperty(_assertThisInitialized(_this), "isFocusWithinTheCarousel", function () {
      if (!_this.carouselWrapperRef) {
        return false;
      }

      if ((0, _document.default)().activeElement === _this.carouselWrapperRef || _this.carouselWrapperRef.contains((0, _document.default)().activeElement)) {
        return true;
      }

      return false;
    });

    _defineProperty(_assertThisInitialized(_this), "navigateWithKeyboard", function (e) {
      if (!_this.isFocusWithinTheCarousel()) {
        return;
      }

      var axis = _this.props.axis;
      var isHorizontal = axis === 'horizontal';
      var keyNames = {
        ArrowUp: 38,
        ArrowRight: 39,
        ArrowDown: 40,
        ArrowLeft: 37
      };
      var nextKey = isHorizontal ? keyNames.ArrowRight : keyNames.ArrowDown;
      var prevKey = isHorizontal ? keyNames.ArrowLeft : keyNames.ArrowUp;

      if (nextKey === e.keyCode) {
        _this.increment();
      } else if (prevKey === e.keyCode) {
        _this.decrement();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updateSizes", function () {
      if (!_this.state.initialized || !_this.itemsRef || _this.itemsRef.length === 0) {
        return;
      }

      var isHorizontal = _this.props.axis === 'horizontal';
      var firstItem = _this.itemsRef[0];

      if (!firstItem) {
        return;
      }

      var itemSize = isHorizontal ? firstItem.clientWidth : firstItem.clientHeight;

      _this.setState({
        itemSize: itemSize
      });

      if (_this.thumbsRef) {
        _this.thumbsRef.updateSizes();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setMountState", function () {
      _this.setState({
        hasMount: true
      });

      _this.updateSizes();
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickItem", function (index, item) {
      if (_react.Children.count(_this.props.children) === 0) {
        return;
      }

      if (_this.state.cancelClick) {
        _this.setState({
          cancelClick: false
        });

        return;
      }

      _this.props.onClickItem(index, item);

      if (index !== _this.state.selectedItem) {
        _this.setState({
          selectedItem: index
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnChange", function (index, item) {
      if (_react.Children.count(_this.props.children) <= 1) {
        return;
      }

      _this.props.onChange(index, item);
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickThumb", function (index, item) {
      _this.props.onClickThumb(index, item);

      _this.moveTo(index);
    });

    _defineProperty(_assertThisInitialized(_this), "onSwipeStart", function (event) {
      _this.setState({
        swiping: true
      });

      _this.props.onSwipeStart(event);
    });

    _defineProperty(_assertThisInitialized(_this), "onSwipeEnd", function (event) {
      _this.setState({
        swiping: false,
        cancelClick: false,
        swipeMovementStarted: false
      });

      _this.props.onSwipeEnd(event);

      _this.clearAutoPlay();

      if (_this.state.autoPlay) {
        _this.autoPlay();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSwipeMove", function (delta, event) {
      _this.props.onSwipeMove(event);

      var animationHandlerResponse = _this.props.swipeAnimationHandler(delta, _this.props, _this.state, _this.setState.bind(_assertThisInitialized(_this)));

      _this.setState(_objectSpread({}, animationHandlerResponse)); // If we have not moved, we should have an empty object returned
      // Return false to allow scrolling when not swiping


      return !!Object.keys(animationHandlerResponse).length;
    });

    _defineProperty(_assertThisInitialized(_this), "decrement", function () {
      var positions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      _this.moveTo(_this.state.selectedItem - (typeof positions === 'number' ? positions : 1));
    });

    _defineProperty(_assertThisInitialized(_this), "increment", function () {
      var positions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      _this.moveTo(_this.state.selectedItem + (typeof positions === 'number' ? positions : 1));
    });

    _defineProperty(_assertThisInitialized(_this), "moveTo", function (position) {
      if (typeof position !== 'number') {
        return;
      }

      var lastPosition = _react.Children.count(_this.props.children) - 1;

      if (position < 0) {
        position = _this.props.infiniteLoop ? lastPosition : 0;
      }

      if (position > lastPosition) {
        position = _this.props.infiniteLoop ? 0 : lastPosition;
      }

      _this.selectItem({
        // if it's not a slider, we don't need to set position here
        selectedItem: position
      }); // don't reset auto play when stop on hover is enabled, doing so will trigger a call to auto play more than once
      // and will result in the interval function not being cleared correctly.


      if (_this.state.autoPlay && _this.state.isMouseEntered === false) {
        _this.resetAutoPlay();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onClickNext", function () {
      _this.increment(1);
    });

    _defineProperty(_assertThisInitialized(_this), "onClickPrev", function () {
      _this.decrement(1);
    });

    _defineProperty(_assertThisInitialized(_this), "onSwipeForward", function () {
      _this.increment(1);

      if (_this.props.emulateTouch) {
        _this.setState({
          cancelClick: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSwipeBackwards", function () {
      _this.decrement(1);

      if (_this.props.emulateTouch) {
        _this.setState({
          cancelClick: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "changeItem", function (newIndex) {
      return function (e) {
        if (!(0, _utils.isKeyboardEvent)(e) || e.key === 'Enter') {
          _this.moveTo(newIndex);
        }
      };
    });

    _defineProperty(_assertThisInitialized(_this), "selectItem", function (state) {
      // Merge in the new state while updating updating previous item
      _this.setState(_objectSpread({
        previousItem: _this.state.selectedItem
      }, state), function () {
        // Run animation handler and update styles based on it
        _this.setState(_this.animationHandler(_this.props, _this.state));
      });

      _this.handleOnChange(state.selectedItem, _react.Children.toArray(_this.props.children)[state.selectedItem]);
    });

    _defineProperty(_assertThisInitialized(_this), "getInitialImage", function () {
      var selectedItem = _this.props.selectedItem;
      var item = _this.itemsRef && _this.itemsRef[selectedItem];
      var images = item && item.getElementsByTagName('img') || [];
      return images[0];
    });

    _defineProperty(_assertThisInitialized(_this), "getVariableItemHeight", function (position) {
      var item = _this.itemsRef && _this.itemsRef[position];

      if (_this.state.hasMount && item && item.children.length) {
        var slideImages = item.children[0].getElementsByTagName('img') || [];

        if (slideImages.length > 0) {
          var image = slideImages[0];

          if (!image.complete) {
            // if the image is still loading, the size won't be available so we trigger a new render after it's done
            var onImageLoad = function onImageLoad() {
              _this.forceUpdate();

              image.removeEventListener('load', onImageLoad);
            };

            image.addEventListener('load', onImageLoad);
          }
        } // try to get img first, if img not there find first display tag


        var displayItem = slideImages[0] || item.children[0];
        var height = displayItem.clientHeight;
        return height > 0 ? height : null;
      }

      return null;
    });

    var initState = {
      initialized: false,
      previousItem: props.selectedItem,
      selectedItem: props.selectedItem,
      hasMount: false,
      isMouseEntered: false,
      autoPlay: props.autoPlay,
      swiping: false,
      swipeMovementStarted: false,
      cancelClick: false,
      itemSize: 1,
      itemListStyle: {},
      slideStyle: {},
      selectedStyle: {},
      prevStyle: {}
    };
    _this.animationHandler = typeof props.animationHandler === 'function' && props.animationHandler || props.animationHandler === 'fade' && _animations.fadeAnimationHandler || _animations.slideAnimationHandler;
    _this.state = _objectSpread(_objectSpread({}, initState), _this.animationHandler(props, initState));
    return _this;
  }

  _createClass(Carousel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.props.children) {
        return;
      }

      this.setupCarousel();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (!prevProps.children && this.props.children && !this.state.initialized) {
        this.setupCarousel();
      }

      if (!prevProps.autoFocus && this.props.autoFocus) {
        this.forceFocus();
      }

      if (prevState.swiping && !this.state.swiping) {
        // We stopped swiping, ensure we are heading to the new/current slide and not stuck
        this.setState(_objectSpread({}, this.props.stopSwipingHandler(this.props, this.state)));
      }

      if (prevProps.selectedItem !== this.props.selectedItem || prevProps.centerMode !== this.props.centerMode) {
        this.updateSizes();
        this.moveTo(this.props.selectedItem);
      }

      if (prevProps.autoPlay !== this.props.autoPlay) {
        if (this.props.autoPlay) {
          this.setupAutoPlay();
        } else {
          this.destroyAutoPlay();
        }

        this.setState({
          autoPlay: this.props.autoPlay
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.destroyCarousel();
    }
  }, {
    key: "setupCarousel",
    value: function setupCarousel() {
      var _this2 = this;

      this.bindEvents();

      if (this.state.autoPlay && _react.Children.count(this.props.children) > 1) {
        this.setupAutoPlay();
      }

      if (this.props.autoFocus) {
        this.forceFocus();
      }

      this.setState({
        initialized: true
      }, function () {
        var initialImage = _this2.getInitialImage();

        if (initialImage && !initialImage.complete) {
          // if it's a carousel of images, we set the mount state after the first image is loaded
          initialImage.addEventListener('load', _this2.setMountState);
        } else {
          _this2.setMountState();
        }
      });
    }
  }, {
    key: "destroyCarousel",
    value: function destroyCarousel() {
      if (this.state.initialized) {
        this.unbindEvents();
        this.destroyAutoPlay();
      }
    }
  }, {
    key: "setupAutoPlay",
    value: function setupAutoPlay() {
      this.autoPlay();
      var carouselWrapper = this.carouselWrapperRef;

      if (this.props.stopOnHover && carouselWrapper) {
        carouselWrapper.addEventListener('mouseenter', this.stopOnHover);
        carouselWrapper.addEventListener('mouseleave', this.startOnLeave);
      }
    }
  }, {
    key: "destroyAutoPlay",
    value: function destroyAutoPlay() {
      this.clearAutoPlay();
      var carouselWrapper = this.carouselWrapperRef;

      if (this.props.stopOnHover && carouselWrapper) {
        carouselWrapper.removeEventListener('mouseenter', this.stopOnHover);
        carouselWrapper.removeEventListener('mouseleave', this.startOnLeave);
      }
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      // as the widths are calculated, we need to resize
      // the carousel when the window is resized
      (0, _window.default)().addEventListener('resize', this.updateSizes); // issue #2 - image loading smaller

      (0, _window.default)().addEventListener('DOMContentLoaded', this.updateSizes);

      if (this.props.useKeyboardArrows) {
        (0, _document.default)().addEventListener('keydown', this.navigateWithKeyboard);
      }
    }
  }, {
    key: "unbindEvents",
    value: function unbindEvents() {
      // removing listeners
      (0, _window.default)().removeEventListener('resize', this.updateSizes);
      (0, _window.default)().removeEventListener('DOMContentLoaded', this.updateSizes);
      var initialImage = this.getInitialImage();

      if (initialImage) {
        initialImage.removeEventListener('load', this.setMountState);
      }

      if (this.props.useKeyboardArrows) {
        (0, _document.default)().removeEventListener('keydown', this.navigateWithKeyboard);
      }
    }
  }, {
    key: "forceFocus",
    value: function forceFocus() {
      var _this$carouselWrapper;

      (_this$carouselWrapper = this.carouselWrapperRef) === null || _this$carouselWrapper === void 0 ? void 0 : _this$carouselWrapper.focus();
    }
  }, {
    key: "renderItems",
    value: function renderItems(isClone) {
      var _this3 = this;

      if (!this.props.children) {
        return [];
      }

      return _react.Children.map(this.props.children, function (item, index) {
        var isSelected = index === _this3.state.selectedItem;
        var isPrevious = index === _this3.state.previousItem;
        var style = isSelected && _this3.state.selectedStyle || isPrevious && _this3.state.prevStyle || _this3.state.slideStyle || {};

        if (_this3.props.centerMode && _this3.props.axis === 'horizontal') {
          style = _objectSpread(_objectSpread({}, style), {}, {
            minWidth: _this3.props.centerSlidePercentage + '%'
          });
        }

        if (_this3.state.swiping && _this3.state.swipeMovementStarted) {
          style = _objectSpread(_objectSpread({}, style), {}, {
            pointerEvents: 'none'
          });
        }

        var slideProps = {
          ref: function ref(e) {
            return _this3.setItemsRef(e, index);
          },
          key: 'itemKey' + index + (isClone ? 'clone' : ''),
          className: _cssClasses.default.ITEM(true, index === _this3.state.selectedItem, index === _this3.state.previousItem),
          onClick: _this3.handleClickItem.bind(_this3, index, item),
          style: style
        };
        return /*#__PURE__*/_react.default.createElement("li", slideProps, _this3.props.renderItem(item, {
          isSelected: index === _this3.state.selectedItem,
          isPrevious: index === _this3.state.previousItem
        }));
      });
    }
  }, {
    key: "renderControls",
    value: function renderControls() {
      var _this4 = this;

      var _this$props = this.props,
          showIndicators = _this$props.showIndicators,
          labels = _this$props.labels,
          renderIndicator = _this$props.renderIndicator,
          children = _this$props.children;

      if (!showIndicators) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("ul", {
        className: "control-dots"
      }, _react.Children.map(children, function (_, index) {
        return renderIndicator && renderIndicator(_this4.changeItem(index), index === _this4.state.selectedItem, index, labels.item);
      }));
    }
  }, {
    key: "renderStatus",
    value: function renderStatus() {
      if (!this.props.showStatus) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("p", {
        className: "carousel-status"
      }, this.props.statusFormatter(this.state.selectedItem + 1, _react.Children.count(this.props.children)));
    }
  }, {
    key: "renderThumbs",
    value: function renderThumbs() {
      if (!this.props.showThumbs || !this.props.children || _react.Children.count(this.props.children) === 0) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement(_Thumbs.default, {
        ref: this.setThumbsRef,
        onSelectItem: this.handleClickThumb,
        selectedItem: this.state.selectedItem,
        transitionTime: this.props.transitionTime,
        thumbWidth: this.props.thumbWidth,
        labels: this.props.labels,
        emulateTouch: this.props.emulateTouch
      }, this.props.renderThumbs(this.props.children));
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      if (!this.props.children || _react.Children.count(this.props.children) === 0) {
        return null;
      }

      var isSwipeable = this.props.swipeable && _react.Children.count(this.props.children) > 1;
      var isHorizontal = this.props.axis === 'horizontal';
      var canShowArrows = this.props.showArrows && _react.Children.count(this.props.children) > 1; // show left arrow?

      var hasPrev = canShowArrows && (this.state.selectedItem > 0 || this.props.infiniteLoop) || false; // show right arrow

      var hasNext = canShowArrows && (this.state.selectedItem < _react.Children.count(this.props.children) - 1 || this.props.infiniteLoop) || false;
      var itemsClone = this.renderItems(true);
      var firstClone = itemsClone.shift();
      var lastClone = itemsClone.pop();
      var swiperProps = {
        className: _cssClasses.default.SLIDER(true, this.state.swiping),
        onSwipeMove: this.onSwipeMove,
        onSwipeStart: this.onSwipeStart,
        onSwipeEnd: this.onSwipeEnd,
        style: this.state.itemListStyle,
        tolerance: this.props.swipeScrollTolerance
      };
      var containerStyles = {};

      if (isHorizontal) {
        swiperProps.onSwipeLeft = this.onSwipeForward;
        swiperProps.onSwipeRight = this.onSwipeBackwards;

        if (this.props.dynamicHeight) {
          var itemHeight = this.getVariableItemHeight(this.state.selectedItem); // swiperProps.style.height = itemHeight || 'auto';

          containerStyles.height = itemHeight || 'auto';
        }
      } else {
        swiperProps.onSwipeUp = this.props.verticalSwipe === 'natural' ? this.onSwipeBackwards : this.onSwipeForward;
        swiperProps.onSwipeDown = this.props.verticalSwipe === 'natural' ? this.onSwipeForward : this.onSwipeBackwards;
        swiperProps.style = _objectSpread(_objectSpread({}, swiperProps.style), {}, {
          height: this.state.itemSize
        });
        containerStyles.height = this.state.itemSize;
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        "aria-label": this.props.ariaLabel,
        className: _cssClasses.default.ROOT(this.props.className),
        ref: this.setCarouselWrapperRef,
        tabIndex: this.props.useKeyboardArrows ? 0 : undefined
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: _cssClasses.default.CAROUSEL(true),
        style: {
          width: this.props.width
        }
      }, this.renderControls(), this.props.renderArrowPrev(this.onClickPrev, hasPrev, this.props.labels.leftArrow), /*#__PURE__*/_react.default.createElement("div", {
        className: _cssClasses.default.WRAPPER(true, this.props.axis),
        style: containerStyles
      }, isSwipeable ? /*#__PURE__*/_react.default.createElement(_reactEasySwipe.default, _extends({
        tagName: "ul",
        innerRef: this.setListRef
      }, swiperProps, {
        allowMouseEvents: this.props.emulateTouch
      }), this.props.infiniteLoop && lastClone, this.renderItems(), this.props.infiniteLoop && firstClone) : /*#__PURE__*/_react.default.createElement("ul", {
        className: _cssClasses.default.SLIDER(true, this.state.swiping),
        ref: function ref(node) {
          return _this5.setListRef(node);
        },
        style: this.state.itemListStyle || {}
      }, this.props.infiniteLoop && lastClone, this.renderItems(), this.props.infiniteLoop && firstClone)), this.props.renderArrowNext(this.onClickNext, hasNext, this.props.labels.rightArrow), this.renderStatus()), this.renderThumbs());
    }
  }]);

  return Carousel;
}(_react.default.Component);

exports.default = Carousel;

_defineProperty(Carousel, "displayName", 'Carousel');

_defineProperty(Carousel, "defaultProps", {
  ariaLabel: undefined,
  axis: 'horizontal',
  centerSlidePercentage: 80,
  interval: 3000,
  labels: {
    leftArrow: 'previous slide / item',
    rightArrow: 'next slide / item',
    item: 'slide item'
  },
  onClickItem: _utils.noop,
  onClickThumb: _utils.noop,
  onChange: _utils.noop,
  onSwipeStart: function onSwipeStart() {},
  onSwipeEnd: function onSwipeEnd() {},
  onSwipeMove: function onSwipeMove() {
    return false;
  },
  preventMovementUntilSwipeScrollTolerance: false,
  renderArrowPrev: function renderArrowPrev(onClickHandler, hasPrev, label) {
    return /*#__PURE__*/_react.default.createElement("button", {
      type: "button",
      "aria-label": label,
      className: _cssClasses.default.ARROW_PREV(!hasPrev),
      onClick: onClickHandler
    });
  },
  renderArrowNext: function renderArrowNext(onClickHandler, hasNext, label) {
    return /*#__PURE__*/_react.default.createElement("button", {
      type: "button",
      "aria-label": label,
      className: _cssClasses.default.ARROW_NEXT(!hasNext),
      onClick: onClickHandler
    });
  },
  renderIndicator: function renderIndicator(onClickHandler, isSelected, index, label) {
    return /*#__PURE__*/_react.default.createElement("li", {
      className: _cssClasses.default.DOT(isSelected),
      onClick: onClickHandler,
      onKeyDown: onClickHandler,
      value: index,
      key: index,
      role: "button",
      tabIndex: 0,
      "aria-label": "".concat(label, " ").concat(index + 1)
    });
  },
  renderItem: function renderItem(item) {
    return item;
  },
  renderThumbs: function renderThumbs(children) {
    var images = _react.Children.map(children, function (item) {
      var img = item; // if the item is not an image, try to find the first image in the item's children.

      if (item.type !== 'img') {
        img = _react.Children.toArray(item.props.children).find(function (children) {
          return children.type === 'img';
        });
      }

      if (!img) {
        return undefined;
      }

      return img;
    });

    if (images.filter(function (image) {
      return image;
    }).length === 0) {
      console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md");
      return [];
    }

    return images;
  },
  statusFormatter: _utils.defaultStatusFormatter,
  selectedItem: 0,
  showArrows: true,
  showIndicators: true,
  showStatus: true,
  showThumbs: true,
  stopOnHover: true,
  swipeScrollTolerance: 5,
  swipeable: true,
  transitionTime: 350,
  verticalSwipe: 'standard',
  width: '100%',
  animationHandler: 'slide',
  swipeAnimationHandler: _animations.slideSwipeAnimationHandler,
  stopSwipingHandler: _animations.slideStopSwipingHandler
});

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/js/components/Carousel/types.js":
/*!************************************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/js/components/Carousel/types.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/js/components/Carousel/utils.js":
/*!************************************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/js/components/Carousel/utils.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setPosition = exports.getPosition = exports.isKeyboardEvent = exports.defaultStatusFormatter = exports.noop = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _CSSTranslate = _interopRequireDefault(__webpack_require__(/*! ../../CSSTranslate */ "./node_modules/react-responsive-carousel/lib/js/CSSTranslate.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = function noop() {};

exports.noop = noop;

var defaultStatusFormatter = function defaultStatusFormatter(current, total) {
  return "".concat(current, " of ").concat(total);
};

exports.defaultStatusFormatter = defaultStatusFormatter;

var isKeyboardEvent = function isKeyboardEvent(e) {
  return e ? e.hasOwnProperty('key') : false;
};
/**
 * Gets the list 'position' relative to a current index
 * @param index
 */


exports.isKeyboardEvent = isKeyboardEvent;

var getPosition = function getPosition(index, props) {
  if (props.infiniteLoop) {
    // index has to be added by 1 because of the first cloned slide
    ++index;
  }

  if (index === 0) {
    return 0;
  }

  var childrenLength = _react.Children.count(props.children);

  if (props.centerMode && props.axis === 'horizontal') {
    var currentPosition = -index * props.centerSlidePercentage;
    var lastPosition = childrenLength - 1;

    if (index && (index !== lastPosition || props.infiniteLoop)) {
      currentPosition += (100 - props.centerSlidePercentage) / 2;
    } else if (index === lastPosition) {
      currentPosition += 100 - props.centerSlidePercentage;
    }

    return currentPosition;
  }

  return -index * 100;
};
/**
 * Sets the 'position' transform for sliding animations
 * @param position
 * @param forceReflow
 */


exports.getPosition = getPosition;

var setPosition = function setPosition(position, axis) {
  var style = {};
  ['WebkitTransform', 'MozTransform', 'MsTransform', 'OTransform', 'transform', 'msTransform'].forEach(function (prop) {
    // @ts-ignore
    style[prop] = (0, _CSSTranslate.default)(position, '%', axis);
  });
  return style;
};

exports.setPosition = setPosition;

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/js/components/Thumbs.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/js/components/Thumbs.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _cssClasses = _interopRequireDefault(__webpack_require__(/*! ../cssClasses */ "./node_modules/react-responsive-carousel/lib/js/cssClasses.js"));

var _dimensions = __webpack_require__(/*! ../dimensions */ "./node_modules/react-responsive-carousel/lib/js/dimensions.js");

var _CSSTranslate = _interopRequireDefault(__webpack_require__(/*! ../CSSTranslate */ "./node_modules/react-responsive-carousel/lib/js/CSSTranslate.js"));

var _reactEasySwipe = _interopRequireDefault(__webpack_require__(/*! react-easy-swipe */ "./node_modules/react-easy-swipe/lib/index.js"));

var _window = _interopRequireDefault(__webpack_require__(/*! ../shims/window */ "./node_modules/react-responsive-carousel/lib/js/shims/window.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var isKeyboardEvent = function isKeyboardEvent(e) {
  return e.hasOwnProperty('key');
};

var Thumbs = /*#__PURE__*/function (_Component) {
  _inherits(Thumbs, _Component);

  var _super = _createSuper(Thumbs);

  function Thumbs(_props) {
    var _this;

    _classCallCheck(this, Thumbs);

    _this = _super.call(this, _props);

    _defineProperty(_assertThisInitialized(_this), "itemsWrapperRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "itemsListRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "thumbsRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "setItemsWrapperRef", function (node) {
      _this.itemsWrapperRef = node;
    });

    _defineProperty(_assertThisInitialized(_this), "setItemsListRef", function (node) {
      _this.itemsListRef = node;
    });

    _defineProperty(_assertThisInitialized(_this), "setThumbsRef", function (node, index) {
      if (!_this.thumbsRef) {
        _this.thumbsRef = [];
      }

      _this.thumbsRef[index] = node;
    });

    _defineProperty(_assertThisInitialized(_this), "updateSizes", function () {
      if (!_this.props.children || !_this.itemsWrapperRef || !_this.thumbsRef) {
        return;
      }

      var total = _react.Children.count(_this.props.children);

      var wrapperSize = _this.itemsWrapperRef.clientWidth;
      var itemSize = _this.props.thumbWidth ? _this.props.thumbWidth : (0, _dimensions.outerWidth)(_this.thumbsRef[0]);
      var visibleItems = Math.floor(wrapperSize / itemSize);
      var showArrows = visibleItems < total;
      var lastPosition = showArrows ? total - visibleItems : 0;

      _this.setState(function (_state, props) {
        return {
          itemSize: itemSize,
          visibleItems: visibleItems,
          firstItem: showArrows ? _this.getFirstItem(props.selectedItem) : 0,
          lastPosition: lastPosition,
          showArrows: showArrows
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickItem", function (index, item, e) {
      if (!isKeyboardEvent(e) || e.key === 'Enter') {
        var handler = _this.props.onSelectItem;

        if (typeof handler === 'function') {
          handler(index, item);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSwipeStart", function () {
      _this.setState({
        swiping: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSwipeEnd", function () {
      _this.setState({
        swiping: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSwipeMove", function (delta) {
      var deltaX = delta.x;

      if (!_this.state.itemSize || !_this.itemsWrapperRef || !_this.state.visibleItems) {
        return false;
      }

      var leftBoundary = 0;

      var childrenLength = _react.Children.count(_this.props.children);

      var currentPosition = -(_this.state.firstItem * 100) / _this.state.visibleItems;
      var lastLeftItem = Math.max(childrenLength - _this.state.visibleItems, 0);
      var lastLeftBoundary = -lastLeftItem * 100 / _this.state.visibleItems; // prevent user from swiping left out of boundaries

      if (currentPosition === leftBoundary && deltaX > 0) {
        deltaX = 0;
      } // prevent user from swiping right out of boundaries


      if (currentPosition === lastLeftBoundary && deltaX < 0) {
        deltaX = 0;
      }

      var wrapperSize = _this.itemsWrapperRef.clientWidth;
      var position = currentPosition + 100 / (wrapperSize / deltaX); // if 3d isn't available we will use left to move

      if (_this.itemsListRef) {
        ['WebkitTransform', 'MozTransform', 'MsTransform', 'OTransform', 'transform', 'msTransform'].forEach(function (prop) {
          _this.itemsListRef.style[prop] = (0, _CSSTranslate.default)(position, '%', _this.props.axis);
        });
      }

      return true;
    });

    _defineProperty(_assertThisInitialized(_this), "slideRight", function (positions) {
      _this.moveTo(_this.state.firstItem - (typeof positions === 'number' ? positions : 1));
    });

    _defineProperty(_assertThisInitialized(_this), "slideLeft", function (positions) {
      _this.moveTo(_this.state.firstItem + (typeof positions === 'number' ? positions : 1));
    });

    _defineProperty(_assertThisInitialized(_this), "moveTo", function (position) {
      // position can't be lower than 0
      position = position < 0 ? 0 : position; // position can't be higher than last postion

      position = position >= _this.state.lastPosition ? _this.state.lastPosition : position;

      _this.setState({
        firstItem: position
      });
    });

    _this.state = {
      selectedItem: _props.selectedItem,
      swiping: false,
      showArrows: false,
      firstItem: 0,
      visibleItems: 0,
      lastPosition: 0
    };
    return _this;
  }

  _createClass(Thumbs, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setupThumbs();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.selectedItem !== this.state.selectedItem) {
        this.setState({
          selectedItem: this.props.selectedItem,
          firstItem: this.getFirstItem(this.props.selectedItem)
        });
      }

      if (this.props.children === prevProps.children) {
        return;
      } // This will capture any size changes for arrow adjustments etc.
      // usually in the same render cycle so we don't see any flickers


      this.updateSizes();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.destroyThumbs();
    }
  }, {
    key: "setupThumbs",
    value: function setupThumbs() {
      // as the widths are calculated, we need to resize
      // the carousel when the window is resized
      (0, _window.default)().addEventListener('resize', this.updateSizes); // issue #2 - image loading smaller

      (0, _window.default)().addEventListener('DOMContentLoaded', this.updateSizes); // when the component is rendered we need to calculate
      // the container size to adjust the responsive behaviour

      this.updateSizes();
    }
  }, {
    key: "destroyThumbs",
    value: function destroyThumbs() {
      // removing listeners
      (0, _window.default)().removeEventListener('resize', this.updateSizes);
      (0, _window.default)().removeEventListener('DOMContentLoaded', this.updateSizes);
    }
  }, {
    key: "getFirstItem",
    value: function getFirstItem(selectedItem) {
      var firstItem = selectedItem;

      if (selectedItem >= this.state.lastPosition) {
        firstItem = this.state.lastPosition;
      }

      if (selectedItem < this.state.firstItem + this.state.visibleItems) {
        firstItem = this.state.firstItem;
      }

      if (selectedItem < this.state.firstItem) {
        firstItem = selectedItem;
      }

      return firstItem;
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var _this2 = this;

      return this.props.children.map(function (img, index) {
        var itemClass = _cssClasses.default.ITEM(false, index === _this2.state.selectedItem);

        var thumbProps = {
          key: index,
          ref: function ref(e) {
            return _this2.setThumbsRef(e, index);
          },
          className: itemClass,
          onClick: _this2.handleClickItem.bind(_this2, index, _this2.props.children[index]),
          onKeyDown: _this2.handleClickItem.bind(_this2, index, _this2.props.children[index]),
          'aria-label': "".concat(_this2.props.labels.item, " ").concat(index + 1),
          style: {
            width: _this2.props.thumbWidth
          }
        };
        return /*#__PURE__*/_react.default.createElement("li", _extends({}, thumbProps, {
          role: "button",
          tabIndex: 0
        }), img);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (!this.props.children) {
        return null;
      }

      var isSwipeable = _react.Children.count(this.props.children) > 1; // show left arrow?

      var hasPrev = this.state.showArrows && this.state.firstItem > 0; // show right arrow

      var hasNext = this.state.showArrows && this.state.firstItem < this.state.lastPosition; // obj to hold the transformations and styles

      var itemListStyles = {};
      var currentPosition = -this.state.firstItem * (this.state.itemSize || 0);
      var transformProp = (0, _CSSTranslate.default)(currentPosition, 'px', this.props.axis);
      var transitionTime = this.props.transitionTime + 'ms';
      itemListStyles = {
        WebkitTransform: transformProp,
        MozTransform: transformProp,
        MsTransform: transformProp,
        OTransform: transformProp,
        transform: transformProp,
        msTransform: transformProp,
        WebkitTransitionDuration: transitionTime,
        MozTransitionDuration: transitionTime,
        MsTransitionDuration: transitionTime,
        OTransitionDuration: transitionTime,
        transitionDuration: transitionTime,
        msTransitionDuration: transitionTime
      };
      return /*#__PURE__*/_react.default.createElement("div", {
        className: _cssClasses.default.CAROUSEL(false)
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: _cssClasses.default.WRAPPER(false),
        ref: this.setItemsWrapperRef
      }, /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        className: _cssClasses.default.ARROW_PREV(!hasPrev),
        onClick: function onClick() {
          return _this3.slideRight();
        },
        "aria-label": this.props.labels.leftArrow
      }), isSwipeable ? /*#__PURE__*/_react.default.createElement(_reactEasySwipe.default, {
        tagName: "ul",
        className: _cssClasses.default.SLIDER(false, this.state.swiping),
        onSwipeLeft: this.slideLeft,
        onSwipeRight: this.slideRight,
        onSwipeMove: this.onSwipeMove,
        onSwipeStart: this.onSwipeStart,
        onSwipeEnd: this.onSwipeEnd,
        style: itemListStyles,
        innerRef: this.setItemsListRef,
        allowMouseEvents: this.props.emulateTouch
      }, this.renderItems()) : /*#__PURE__*/_react.default.createElement("ul", {
        className: _cssClasses.default.SLIDER(false, this.state.swiping),
        ref: function ref(node) {
          return _this3.setItemsListRef(node);
        },
        style: itemListStyles
      }, this.renderItems()), /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        className: _cssClasses.default.ARROW_NEXT(!hasNext),
        onClick: function onClick() {
          return _this3.slideLeft();
        },
        "aria-label": this.props.labels.rightArrow
      })));
    }
  }]);

  return Thumbs;
}(_react.Component);

exports.default = Thumbs;

_defineProperty(Thumbs, "displayName", 'Thumbs');

_defineProperty(Thumbs, "defaultProps", {
  axis: 'horizontal',
  labels: {
    leftArrow: 'previous slide / item',
    rightArrow: 'next slide / item',
    item: 'slide item'
  },
  selectedItem: 0,
  thumbWidth: 80,
  transitionTime: 350
});

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/js/cssClasses.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/js/cssClasses.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  ROOT: function ROOT(customClassName) {
    return (0, _classnames.default)(_defineProperty({
      'carousel-root': true
    }, customClassName || '', !!customClassName));
  },
  CAROUSEL: function CAROUSEL(isSlider) {
    return (0, _classnames.default)({
      carousel: true,
      'carousel-slider': isSlider
    });
  },
  WRAPPER: function WRAPPER(isSlider, axis) {
    return (0, _classnames.default)({
      'thumbs-wrapper': !isSlider,
      'slider-wrapper': isSlider,
      'axis-horizontal': axis === 'horizontal',
      'axis-vertical': axis !== 'horizontal'
    });
  },
  SLIDER: function SLIDER(isSlider, isSwiping) {
    return (0, _classnames.default)({
      thumbs: !isSlider,
      slider: isSlider,
      animated: !isSwiping
    });
  },
  ITEM: function ITEM(isSlider, selected, previous) {
    return (0, _classnames.default)({
      thumb: !isSlider,
      slide: isSlider,
      selected: selected,
      previous: previous
    });
  },
  ARROW_PREV: function ARROW_PREV(disabled) {
    return (0, _classnames.default)({
      'control-arrow control-prev': true,
      'control-disabled': disabled
    });
  },
  ARROW_NEXT: function ARROW_NEXT(disabled) {
    return (0, _classnames.default)({
      'control-arrow control-next': true,
      'control-disabled': disabled
    });
  },
  DOT: function DOT(selected) {
    return (0, _classnames.default)({
      dot: true,
      selected: selected
    });
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/js/dimensions.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/js/dimensions.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.outerWidth = void 0;

var outerWidth = function outerWidth(el) {
  var width = el.offsetWidth;
  var style = getComputedStyle(el);
  width += parseInt(style.marginLeft) + parseInt(style.marginRight);
  return width;
};

exports.outerWidth = outerWidth;

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/js/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/js/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Carousel", {
  enumerable: true,
  get: function get() {
    return _Carousel.default;
  }
});
Object.defineProperty(exports, "CarouselProps", {
  enumerable: true,
  get: function get() {
    return _types.CarouselProps;
  }
});
Object.defineProperty(exports, "Thumbs", {
  enumerable: true,
  get: function get() {
    return _Thumbs.default;
  }
});

var _Carousel = _interopRequireDefault(__webpack_require__(/*! ./components/Carousel */ "./node_modules/react-responsive-carousel/lib/js/components/Carousel/index.js"));

var _types = __webpack_require__(/*! ./components/Carousel/types */ "./node_modules/react-responsive-carousel/lib/js/components/Carousel/types.js");

var _Thumbs = _interopRequireDefault(__webpack_require__(/*! ./components/Thumbs */ "./node_modules/react-responsive-carousel/lib/js/components/Thumbs.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/js/shims/document.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/js/shims/document.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  return document;
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/js/shims/window.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/js/shims/window.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  return window;
};

exports.default = _default;

/***/ }),

/***/ "./src/sections/feature.js":
/*!*********************************!*\
  !*** ./src/sections/feature.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-responsive-carousel */ "./node_modules/react-responsive-carousel/lib/js/index.js");
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Will's Gaming PC\\Documents\\Development\\WhoozyWraps\\src\\sections\\feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */




var responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.

  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464
    },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.

  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0
    },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.

  }
};

function Feature(_ref) {
  var _this = this;

  var data = _ref.data;
  var images = data.data; // console.log("props:\n", data);

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    sx: {
      variant: "section.feature"
    },
    id: "gallery",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    slogan: "Recent works",
    title: "Here are some examples of our work!",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_3___default.a, {
    responsive: responsive,
    interval: 3000,
    autoPlay: true,
    infiniteLoop: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, images && images.map(function (image) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
      target: "_blank",
      href: image.permalink,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 19
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      key: images.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("img", {
      height: "100%",
      width: "100%",
      src: image.media_url,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 23
      }
    })));
  }))));
}

_c = Feature;
/* harmony default export */ __webpack_exports__["default"] = (Feature);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWVhc3ktc3dpcGUvbGliL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtZWFzeS1zd2lwZS9saWIvcmVhY3Qtc3dpcGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsL2xpYi9qcy9DU1NUcmFuc2xhdGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsL2xpYi9qcy9jb21wb25lbnRzL0Nhcm91c2VsL2FuaW1hdGlvbnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsL2xpYi9qcy9jb21wb25lbnRzL0Nhcm91c2VsL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbC9saWIvanMvY29tcG9uZW50cy9DYXJvdXNlbC91dGlscy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwvbGliL2pzL2NvbXBvbmVudHMvVGh1bWJzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbC9saWIvanMvY3NzQ2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwvbGliL2pzL2RpbWVuc2lvbnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsL2xpYi9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwvbGliL2pzL3NoaW1zL2RvY3VtZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbC9saWIvanMvc2hpbXMvd2luZG93LmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvc2VjdGlvbnMvZmVhdHVyZS5qcyJdLCJuYW1lcyI6WyJyZXNwb25zaXZlIiwiZGVza3RvcCIsImJyZWFrcG9pbnQiLCJtYXgiLCJtaW4iLCJpdGVtcyIsInNsaWRlc1RvU2xpZGUiLCJ0YWJsZXQiLCJtb2JpbGUiLCJGZWF0dXJlIiwiZGF0YSIsImltYWdlcyIsInZhcmlhbnQiLCJtYXAiLCJpbWFnZSIsInBlcm1hbGluayIsImlkIiwibWVkaWFfdXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLE1BQU0sSUFBMEM7QUFDaEQsSUFBSSxpQ0FBTyxDQUFDLE9BQVMsRUFBRSw4RkFBZSxDQUFDLG9DQUFFLE9BQU87QUFBQTtBQUFBO0FBQUEsb0dBQUM7QUFDakQsR0FBRyxNQUFNLFlBUU47QUFDSCxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUMsRTs7Ozs7Ozs7Ozs7QUM1QkQ7QUFDQSxNQUFNLElBQTBDO0FBQ2hELElBQUksaUNBQU8sQ0FBQyxPQUFTLEVBQUUsaUVBQU8sRUFBRSwyRUFBWSxDQUFDLG9DQUFFLE9BQU87QUFBQTtBQUFBO0FBQUEsb0dBQUM7QUFDdkQsR0FBRyxNQUFNLFlBUU47QUFDSCxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNB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UztBQUNUO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBOztBQUVBLHFDQUFxQyw2QkFBNkI7QUFDbEU7OztBQUdBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sRUFBRTtBQUNUOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Tzs7O0FBR1A7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0VBQW9FOztBQUVwRTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSw2Q0FBNkM7O0FBRTdDOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQOzs7QUFHQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFOztBQUUxRSxvRkFBb0Y7QUFDcEY7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRTtBQUMxRTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHVFQUF1RTs7QUFFdkUsc0VBQXNFOztBQUV0RSw0RkFBNEY7O0FBRTVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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REUsQ0FEZ0I7QUFBQSxHQUFYLENBUGYsQ0FMRixDQURGLENBREY7QUE2QkQ7O0tBaENRUixPO0FBa0NNQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yNzIyNzVkODZlYWUwOTU2ZmZhNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcclxuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcclxuICAgIGRlZmluZShbJ2V4cG9ydHMnLCAnLi9yZWFjdC1zd2lwZSddLCBmYWN0b3J5KTtcclxuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBmYWN0b3J5KGV4cG9ydHMsIHJlcXVpcmUoJy4vcmVhY3Qtc3dpcGUnKSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHZhciBtb2QgPSB7XHJcbiAgICAgIGV4cG9ydHM6IHt9XHJcbiAgICB9O1xyXG4gICAgZmFjdG9yeShtb2QuZXhwb3J0cywgZ2xvYmFsLnJlYWN0U3dpcGUpO1xyXG4gICAgZ2xvYmFsLmluZGV4ID0gbW9kLmV4cG9ydHM7XHJcbiAgfVxyXG59KSh0aGlzLCBmdW5jdGlvbiAoZXhwb3J0cywgX3JlYWN0U3dpcGUpIHtcclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xyXG4gICAgdmFsdWU6IHRydWVcclxuICB9KTtcclxuXHJcbiAgdmFyIF9yZWFjdFN3aXBlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0U3dpcGUpO1xyXG5cclxuICBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xyXG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcclxuICAgICAgZGVmYXVsdDogb2JqXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0cy5kZWZhdWx0ID0gX3JlYWN0U3dpcGUyLmRlZmF1bHQ7XHJcbn0pOyIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XHJcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XHJcbiAgICBkZWZpbmUoWydleHBvcnRzJywgJ3JlYWN0JywgJ3Byb3AtdHlwZXMnXSwgZmFjdG9yeSk7XHJcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgZmFjdG9yeShleHBvcnRzLCByZXF1aXJlKCdyZWFjdCcpLCByZXF1aXJlKCdwcm9wLXR5cGVzJykpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB2YXIgbW9kID0ge1xyXG4gICAgICBleHBvcnRzOiB7fVxyXG4gICAgfTtcclxuICAgIGZhY3RvcnkobW9kLmV4cG9ydHMsIGdsb2JhbC5yZWFjdCwgZ2xvYmFsLnByb3BUeXBlcyk7XHJcbiAgICBnbG9iYWwucmVhY3RTd2lwZSA9IG1vZC5leHBvcnRzO1xyXG4gIH1cclxufSkodGhpcywgZnVuY3Rpb24gKGV4cG9ydHMsIF9yZWFjdCwgX3Byb3BUeXBlcykge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XHJcbiAgICB2YWx1ZTogdHJ1ZVxyXG4gIH0pO1xyXG4gIGV4cG9ydHMuc2V0SGFzU3VwcG9ydFRvQ2FwdHVyZU9wdGlvbiA9IHNldEhhc1N1cHBvcnRUb0NhcHR1cmVPcHRpb247XHJcblxyXG4gIHZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xyXG5cclxuICB2YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xyXG5cclxuICBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xyXG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcclxuICAgICAgZGVmYXVsdDogb2JqXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgdmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xyXG5cclxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xyXG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XHJcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykge1xyXG4gICAgdmFyIHRhcmdldCA9IHt9O1xyXG5cclxuICAgIGZvciAodmFyIGkgaW4gb2JqKSB7XHJcbiAgICAgIGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7XHJcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlO1xyXG4gICAgICB0YXJnZXRbaV0gPSBvYmpbaV07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRhcmdldDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcclxuICAgIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XHJcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xyXG4gICAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcclxuICAgICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XHJcbiAgICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xyXG4gICAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xyXG4gICAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcclxuICAgICAgcmV0dXJuIENvbnN0cnVjdG9yO1xyXG4gICAgfTtcclxuICB9KCk7XHJcblxyXG4gIGZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcclxuICAgIGlmICghc2VsZikge1xyXG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcclxuICAgIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcclxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XHJcbiAgICAgIGNvbnN0cnVjdG9yOiB7XHJcbiAgICAgICAgdmFsdWU6IHN1YkNsYXNzLFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcclxuICB9XHJcblxyXG4gIHZhciBzdXBwb3J0c0NhcHR1cmVPcHRpb24gPSBmYWxzZTtcclxuICBmdW5jdGlvbiBzZXRIYXNTdXBwb3J0VG9DYXB0dXJlT3B0aW9uKGhhc1N1cHBvcnQpIHtcclxuICAgIHN1cHBvcnRzQ2FwdHVyZU9wdGlvbiA9IGhhc1N1cHBvcnQ7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG51bGwsIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2NhcHR1cmUnLCB7IGdldDogZnVuY3Rpb24gZ2V0KCkge1xyXG4gICAgICAgIHNldEhhc1N1cHBvcnRUb0NhcHR1cmVPcHRpb24odHJ1ZSk7XHJcbiAgICAgIH0gfSkpO1xyXG4gIH0gY2F0Y2ggKGUpIHt9IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZW1wdHlcclxuXHJcbiAgZnVuY3Rpb24gZ2V0U2FmZUV2ZW50SGFuZGxlck9wdHMoKSB7XHJcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogeyBjYXB0dXJlOiB0cnVlIH07XHJcblxyXG4gICAgcmV0dXJuIHN1cHBvcnRzQ2FwdHVyZU9wdGlvbiA/IG9wdGlvbnMgOiBvcHRpb25zLmNhcHR1cmU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBbZ2V0UG9zaXRpb24gcmV0dXJucyBhIHBvc2l0aW9uIGVsZW1lbnQgdGhhdCB3b3JrcyBmb3IgbW91c2Ugb3IgdG91Y2ggZXZlbnRzXVxyXG4gICAqIEBwYXJhbSAge1tFdmVudF19IGV2ZW50IFt0aGUgcmVjZWl2ZWQgZXZlbnRdXHJcbiAgICogQHJldHVybiB7W09iamVjdF19ICAgICAgW3ggYW5kIHkgY29vcmRzXVxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGdldFBvc2l0aW9uKGV2ZW50KSB7XHJcbiAgICBpZiAoJ3RvdWNoZXMnIGluIGV2ZW50KSB7XHJcbiAgICAgIHZhciBfZXZlbnQkdG91Y2hlcyQgPSBldmVudC50b3VjaGVzWzBdLFxyXG4gICAgICAgICAgcGFnZVggPSBfZXZlbnQkdG91Y2hlcyQucGFnZVgsXHJcbiAgICAgICAgICBwYWdlWSA9IF9ldmVudCR0b3VjaGVzJC5wYWdlWTtcclxuXHJcbiAgICAgIHJldHVybiB7IHg6IHBhZ2VYLCB5OiBwYWdlWSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBzY3JlZW5YID0gZXZlbnQuc2NyZWVuWCxcclxuICAgICAgICBzY3JlZW5ZID0gZXZlbnQuc2NyZWVuWTtcclxuXHJcbiAgICByZXR1cm4geyB4OiBzY3JlZW5YLCB5OiBzY3JlZW5ZIH07XHJcbiAgfVxyXG5cclxuICB2YXIgUmVhY3RTd2lwZSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XHJcbiAgICBfaW5oZXJpdHMoUmVhY3RTd2lwZSwgX0NvbXBvbmVudCk7XHJcblxyXG4gICAgZnVuY3Rpb24gUmVhY3RTd2lwZSgpIHtcclxuICAgICAgdmFyIF9yZWY7XHJcblxyXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVhY3RTd2lwZSk7XHJcblxyXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xyXG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfcmVmID0gUmVhY3RTd2lwZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFJlYWN0U3dpcGUpKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKTtcclxuXHJcbiAgICAgIF90aGlzLl9oYW5kbGVTd2lwZVN0YXJ0ID0gX3RoaXMuX2hhbmRsZVN3aXBlU3RhcnQuYmluZChfdGhpcyk7XHJcbiAgICAgIF90aGlzLl9oYW5kbGVTd2lwZU1vdmUgPSBfdGhpcy5faGFuZGxlU3dpcGVNb3ZlLmJpbmQoX3RoaXMpO1xyXG4gICAgICBfdGhpcy5faGFuZGxlU3dpcGVFbmQgPSBfdGhpcy5faGFuZGxlU3dpcGVFbmQuYmluZChfdGhpcyk7XHJcblxyXG4gICAgICBfdGhpcy5fb25Nb3VzZURvd24gPSBfdGhpcy5fb25Nb3VzZURvd24uYmluZChfdGhpcyk7XHJcbiAgICAgIF90aGlzLl9vbk1vdXNlTW92ZSA9IF90aGlzLl9vbk1vdXNlTW92ZS5iaW5kKF90aGlzKTtcclxuICAgICAgX3RoaXMuX29uTW91c2VVcCA9IF90aGlzLl9vbk1vdXNlVXAuYmluZChfdGhpcyk7XHJcblxyXG4gICAgICBfdGhpcy5fc2V0U3dpcGVyUmVmID0gX3RoaXMuX3NldFN3aXBlclJlZi5iaW5kKF90aGlzKTtcclxuICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIF9jcmVhdGVDbGFzcyhSZWFjdFN3aXBlLCBbe1xyXG4gICAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXHJcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zd2lwZXIpIHtcclxuICAgICAgICAgIHRoaXMuc3dpcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuX2hhbmRsZVN3aXBlTW92ZSwgZ2V0U2FmZUV2ZW50SGFuZGxlck9wdHMoe1xyXG4gICAgICAgICAgICBjYXB0dXJlOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXNzaXZlOiBmYWxzZVxyXG4gICAgICAgICAgfSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSwge1xyXG4gICAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXHJcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zd2lwZXIpIHtcclxuICAgICAgICAgIHRoaXMuc3dpcGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuX2hhbmRsZVN3aXBlTW92ZSwgZ2V0U2FmZUV2ZW50SGFuZGxlck9wdHMoe1xyXG4gICAgICAgICAgICBjYXB0dXJlOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXNzaXZlOiBmYWxzZVxyXG4gICAgICAgICAgfSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSwge1xyXG4gICAgICBrZXk6ICdfb25Nb3VzZURvd24nLFxyXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX29uTW91c2VEb3duKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmFsbG93TW91c2VFdmVudHMpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubW91c2VEb3duID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuX29uTW91c2VVcCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5fb25Nb3VzZU1vdmUpO1xyXG5cclxuICAgICAgICB0aGlzLl9oYW5kbGVTd2lwZVN0YXJ0KGV2ZW50KTtcclxuICAgICAgfVxyXG4gICAgfSwge1xyXG4gICAgICBrZXk6ICdfb25Nb3VzZU1vdmUnLFxyXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX29uTW91c2VNb3ZlKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1vdXNlRG93bikge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5faGFuZGxlU3dpcGVNb3ZlKGV2ZW50KTtcclxuICAgICAgfVxyXG4gICAgfSwge1xyXG4gICAgICBrZXk6ICdfb25Nb3VzZVVwJyxcclxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9vbk1vdXNlVXAoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5fb25Nb3VzZVVwKTtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLl9vbk1vdXNlTW92ZSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2hhbmRsZVN3aXBlRW5kKGV2ZW50KTtcclxuICAgICAgfVxyXG4gICAgfSwge1xyXG4gICAgICBrZXk6ICdfaGFuZGxlU3dpcGVTdGFydCcsXHJcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlU3dpcGVTdGFydChldmVudCkge1xyXG4gICAgICAgIHZhciBfZ2V0UG9zaXRpb24gPSBnZXRQb3NpdGlvbihldmVudCksXHJcbiAgICAgICAgICAgIHggPSBfZ2V0UG9zaXRpb24ueCxcclxuICAgICAgICAgICAgeSA9IF9nZXRQb3NpdGlvbi55O1xyXG5cclxuICAgICAgICB0aGlzLm1vdmVTdGFydCA9IHsgeDogeCwgeTogeSB9O1xyXG4gICAgICAgIHRoaXMucHJvcHMub25Td2lwZVN0YXJ0KGV2ZW50KTtcclxuICAgICAgfVxyXG4gICAgfSwge1xyXG4gICAgICBrZXk6ICdfaGFuZGxlU3dpcGVNb3ZlJyxcclxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVTd2lwZU1vdmUoZXZlbnQpIHtcclxuICAgICAgICBpZiAoIXRoaXMubW92ZVN0YXJ0KSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgX2dldFBvc2l0aW9uMiA9IGdldFBvc2l0aW9uKGV2ZW50KSxcclxuICAgICAgICAgICAgeCA9IF9nZXRQb3NpdGlvbjIueCxcclxuICAgICAgICAgICAgeSA9IF9nZXRQb3NpdGlvbjIueTtcclxuXHJcbiAgICAgICAgdmFyIGRlbHRhWCA9IHggLSB0aGlzLm1vdmVTdGFydC54O1xyXG4gICAgICAgIHZhciBkZWx0YVkgPSB5IC0gdGhpcy5tb3ZlU3RhcnQueTtcclxuICAgICAgICB0aGlzLm1vdmluZyA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIGhhbmRsaW5nIHRoZSByZXNwb25zYWJpbGl0eSBvZiBjYW5jZWxsaW5nIHRoZSBzY3JvbGwgdG9cclxuICAgICAgICAvLyB0aGUgY29tcG9uZW50IGhhbmRsaW5nIHRoZSBldmVudFxyXG4gICAgICAgIHZhciBzaG91bGRQcmV2ZW50RGVmYXVsdCA9IHRoaXMucHJvcHMub25Td2lwZU1vdmUoe1xyXG4gICAgICAgICAgeDogZGVsdGFYLFxyXG4gICAgICAgICAgeTogZGVsdGFZXHJcbiAgICAgICAgfSwgZXZlbnQpO1xyXG5cclxuICAgICAgICBpZiAoc2hvdWxkUHJldmVudERlZmF1bHQgJiYgZXZlbnQuY2FuY2VsYWJsZSkge1xyXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubW92ZVBvc2l0aW9uID0geyBkZWx0YVg6IGRlbHRhWCwgZGVsdGFZOiBkZWx0YVkgfTtcclxuICAgICAgfVxyXG4gICAgfSwge1xyXG4gICAgICBrZXk6ICdfaGFuZGxlU3dpcGVFbmQnLFxyXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZVN3aXBlRW5kKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vblN3aXBlRW5kKGV2ZW50KTtcclxuXHJcbiAgICAgICAgdmFyIHRvbGVyYW5jZSA9IHRoaXMucHJvcHMudG9sZXJhbmNlO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubW92aW5nICYmIHRoaXMubW92ZVBvc2l0aW9uKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5tb3ZlUG9zaXRpb24uZGVsdGFYIDwgLXRvbGVyYW5jZSkge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uU3dpcGVMZWZ0KDEsIGV2ZW50KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5tb3ZlUG9zaXRpb24uZGVsdGFYID4gdG9sZXJhbmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25Td2lwZVJpZ2h0KDEsIGV2ZW50KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh0aGlzLm1vdmVQb3NpdGlvbi5kZWx0YVkgPCAtdG9sZXJhbmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25Td2lwZVVwKDEsIGV2ZW50KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5tb3ZlUG9zaXRpb24uZGVsdGFZID4gdG9sZXJhbmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25Td2lwZURvd24oMSwgZXZlbnQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5tb3ZlU3RhcnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubW92aW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5tb3ZlUG9zaXRpb24gPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9LCB7XHJcbiAgICAgIGtleTogJ19zZXRTd2lwZXJSZWYnLFxyXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3NldFN3aXBlclJlZihub2RlKSB7XHJcbiAgICAgICAgdGhpcy5zd2lwZXIgPSBub2RlO1xyXG4gICAgICAgIHRoaXMucHJvcHMuaW5uZXJSZWYobm9kZSk7XHJcbiAgICAgIH1cclxuICAgIH0sIHtcclxuICAgICAga2V5OiAncmVuZGVyJyxcclxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcclxuICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcclxuICAgICAgICAgICAgdGFnTmFtZSA9IF9wcm9wcy50YWdOYW1lLFxyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lLFxyXG4gICAgICAgICAgICBzdHlsZSA9IF9wcm9wcy5zdHlsZSxcclxuICAgICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW4sXHJcbiAgICAgICAgICAgIGFsbG93TW91c2VFdmVudHMgPSBfcHJvcHMuYWxsb3dNb3VzZUV2ZW50cyxcclxuICAgICAgICAgICAgb25Td2lwZVVwID0gX3Byb3BzLm9uU3dpcGVVcCxcclxuICAgICAgICAgICAgb25Td2lwZURvd24gPSBfcHJvcHMub25Td2lwZURvd24sXHJcbiAgICAgICAgICAgIG9uU3dpcGVMZWZ0ID0gX3Byb3BzLm9uU3dpcGVMZWZ0LFxyXG4gICAgICAgICAgICBvblN3aXBlUmlnaHQgPSBfcHJvcHMub25Td2lwZVJpZ2h0LFxyXG4gICAgICAgICAgICBvblN3aXBlU3RhcnQgPSBfcHJvcHMub25Td2lwZVN0YXJ0LFxyXG4gICAgICAgICAgICBvblN3aXBlTW92ZSA9IF9wcm9wcy5vblN3aXBlTW92ZSxcclxuICAgICAgICAgICAgb25Td2lwZUVuZCA9IF9wcm9wcy5vblN3aXBlRW5kLFxyXG4gICAgICAgICAgICBpbm5lclJlZiA9IF9wcm9wcy5pbm5lclJlZixcclxuICAgICAgICAgICAgdG9sZXJhbmNlID0gX3Byb3BzLnRvbGVyYW5jZSxcclxuICAgICAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ3RhZ05hbWUnLCAnY2xhc3NOYW1lJywgJ3N0eWxlJywgJ2NoaWxkcmVuJywgJ2FsbG93TW91c2VFdmVudHMnLCAnb25Td2lwZVVwJywgJ29uU3dpcGVEb3duJywgJ29uU3dpcGVMZWZ0JywgJ29uU3dpcGVSaWdodCcsICdvblN3aXBlU3RhcnQnLCAnb25Td2lwZU1vdmUnLCAnb25Td2lwZUVuZCcsICdpbm5lclJlZicsICd0b2xlcmFuY2UnXSk7XHJcblxyXG4gICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcclxuICAgICAgICAgIHRoaXMucHJvcHMudGFnTmFtZSxcclxuICAgICAgICAgIF9leHRlbmRzKHtcclxuICAgICAgICAgICAgcmVmOiB0aGlzLl9zZXRTd2lwZXJSZWYsXHJcbiAgICAgICAgICAgIG9uTW91c2VEb3duOiB0aGlzLl9vbk1vdXNlRG93bixcclxuICAgICAgICAgICAgb25Ub3VjaFN0YXJ0OiB0aGlzLl9oYW5kbGVTd2lwZVN0YXJ0LFxyXG4gICAgICAgICAgICBvblRvdWNoRW5kOiB0aGlzLl9oYW5kbGVTd2lwZUVuZCxcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXHJcbiAgICAgICAgICAgIHN0eWxlOiBzdHlsZVxyXG4gICAgICAgICAgfSwgcHJvcHMpLFxyXG4gICAgICAgICAgY2hpbGRyZW5cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XSk7XHJcblxyXG4gICAgcmV0dXJuIFJlYWN0U3dpcGU7XHJcbiAgfShfcmVhY3QuQ29tcG9uZW50KTtcclxuXHJcbiAgUmVhY3RTd2lwZS5kaXNwbGF5TmFtZSA9ICdSZWFjdFN3aXBlJztcclxuICBSZWFjdFN3aXBlLnByb3BUeXBlcyA9IHtcclxuICAgIHRhZ05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxyXG4gICAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcclxuICAgIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcclxuICAgIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXHJcbiAgICBhbGxvd01vdXNlRXZlbnRzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXHJcbiAgICBvblN3aXBlVXA6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcclxuICAgIG9uU3dpcGVEb3duOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXHJcbiAgICBvblN3aXBlTGVmdDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxyXG4gICAgb25Td2lwZVJpZ2h0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXHJcbiAgICBvblN3aXBlU3RhcnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcclxuICAgIG9uU3dpcGVNb3ZlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXHJcbiAgICBvblN3aXBlRW5kOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXHJcbiAgICBpbm5lclJlZjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxyXG4gICAgdG9sZXJhbmNlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlci5pc1JlcXVpcmVkXHJcbiAgfTtcclxuICBSZWFjdFN3aXBlLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHRhZ05hbWU6ICdkaXYnLFxyXG4gICAgYWxsb3dNb3VzZUV2ZW50czogZmFsc2UsXHJcbiAgICBvblN3aXBlVXA6IGZ1bmN0aW9uIG9uU3dpcGVVcCgpIHt9LFxyXG4gICAgb25Td2lwZURvd246IGZ1bmN0aW9uIG9uU3dpcGVEb3duKCkge30sXHJcbiAgICBvblN3aXBlTGVmdDogZnVuY3Rpb24gb25Td2lwZUxlZnQoKSB7fSxcclxuICAgIG9uU3dpcGVSaWdodDogZnVuY3Rpb24gb25Td2lwZVJpZ2h0KCkge30sXHJcbiAgICBvblN3aXBlU3RhcnQ6IGZ1bmN0aW9uIG9uU3dpcGVTdGFydCgpIHt9LFxyXG4gICAgb25Td2lwZU1vdmU6IGZ1bmN0aW9uIG9uU3dpcGVNb3ZlKCkge30sXHJcbiAgICBvblN3aXBlRW5kOiBmdW5jdGlvbiBvblN3aXBlRW5kKCkge30sXHJcbiAgICBpbm5lclJlZjogZnVuY3Rpb24gaW5uZXJSZWYoKSB7fSxcclxuXHJcbiAgICB0b2xlcmFuY2U6IDBcclxuICB9O1xyXG4gIGV4cG9ydHMuZGVmYXVsdCA9IFJlYWN0U3dpcGU7XHJcbn0pOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XHJcbiAgdmFsdWU6IHRydWVcclxufSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcclxuXHJcbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIF9kZWZhdWx0KHBvc2l0aW9uLCBtZXRyaWMsIGF4aXMpIHtcclxuICB2YXIgcG9zaXRpb25QZXJjZW50ID0gcG9zaXRpb24gPT09IDAgPyBwb3NpdGlvbiA6IHBvc2l0aW9uICsgbWV0cmljO1xyXG4gIHZhciBwb3NpdGlvbkNzcyA9IGF4aXMgPT09ICdob3Jpem9udGFsJyA/IFtwb3NpdGlvblBlcmNlbnQsIDAsIDBdIDogWzAsIHBvc2l0aW9uUGVyY2VudCwgMF07XHJcbiAgdmFyIHRyYW5zaXRpb25Qcm9wID0gJ3RyYW5zbGF0ZTNkJztcclxuICB2YXIgdHJhbnNsYXRlZFBvc2l0aW9uID0gJygnICsgcG9zaXRpb25Dc3Muam9pbignLCcpICsgJyknO1xyXG4gIHJldHVybiB0cmFuc2l0aW9uUHJvcCArIHRyYW5zbGF0ZWRQb3NpdGlvbjtcclxufTtcclxuXHJcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XHJcbiAgdmFsdWU6IHRydWVcclxufSk7XHJcbmV4cG9ydHMuZmFkZUFuaW1hdGlvbkhhbmRsZXIgPSBleHBvcnRzLnNsaWRlU3RvcFN3aXBpbmdIYW5kbGVyID0gZXhwb3J0cy5zbGlkZVN3aXBlQW5pbWF0aW9uSGFuZGxlciA9IGV4cG9ydHMuc2xpZGVBbmltYXRpb25IYW5kbGVyID0gdm9pZCAwO1xyXG5cclxudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcclxuXHJcbnZhciBfQ1NTVHJhbnNsYXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vQ1NTVHJhbnNsYXRlXCIpKTtcclxuXHJcbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcclxuXHJcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XHJcblxyXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxyXG5cclxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XHJcblxyXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxyXG5cclxuLyoqXHJcbiAqIE1haW4gYW5pbWF0aW9uIGhhbmRsZXIgZm9yIHRoZSBkZWZhdWx0ICdzbGlkaW5nJyBzdHlsZSBhbmltYXRpb25cclxuICogQHBhcmFtIHByb3BzXHJcbiAqIEBwYXJhbSBzdGF0ZVxyXG4gKi9cclxudmFyIHNsaWRlQW5pbWF0aW9uSGFuZGxlciA9IGZ1bmN0aW9uIHNsaWRlQW5pbWF0aW9uSGFuZGxlcihwcm9wcywgc3RhdGUpIHtcclxuICB2YXIgcmV0dXJuU3R5bGVzID0ge307XHJcbiAgdmFyIHNlbGVjdGVkSXRlbSA9IHN0YXRlLnNlbGVjdGVkSXRlbTtcclxuICB2YXIgcHJldmlvdXNJdGVtID0gc2VsZWN0ZWRJdGVtO1xyXG4gIHZhciBsYXN0UG9zaXRpb24gPSBfcmVhY3QuQ2hpbGRyZW4uY291bnQocHJvcHMuY2hpbGRyZW4pIC0gMTtcclxuICB2YXIgbmVlZENsb25lZFNsaWRlID0gcHJvcHMuaW5maW5pdGVMb29wICYmIChzZWxlY3RlZEl0ZW0gPCAwIHx8IHNlbGVjdGVkSXRlbSA+IGxhc3RQb3NpdGlvbik7IC8vIEhhbmRsZSBsaXN0IHBvc2l0aW9uIGlmIGl0IG5lZWRzIGEgY2xvbmVcclxuXHJcbiAgaWYgKG5lZWRDbG9uZWRTbGlkZSkge1xyXG4gICAgaWYgKHByZXZpb3VzSXRlbSA8IDApIHtcclxuICAgICAgaWYgKHByb3BzLmNlbnRlck1vZGUgJiYgcHJvcHMuY2VudGVyU2xpZGVQZXJjZW50YWdlICYmIHByb3BzLmF4aXMgPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgIHJldHVyblN0eWxlcy5pdGVtTGlzdFN0eWxlID0gKDAsIF91dGlscy5zZXRQb3NpdGlvbikoLShsYXN0UG9zaXRpb24gKyAyKSAqIHByb3BzLmNlbnRlclNsaWRlUGVyY2VudGFnZSAtICgxMDAgLSBwcm9wcy5jZW50ZXJTbGlkZVBlcmNlbnRhZ2UpIC8gMiwgcHJvcHMuYXhpcyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuU3R5bGVzLml0ZW1MaXN0U3R5bGUgPSAoMCwgX3V0aWxzLnNldFBvc2l0aW9uKSgtKGxhc3RQb3NpdGlvbiArIDIpICogMTAwLCBwcm9wcy5heGlzKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChwcmV2aW91c0l0ZW0gPiBsYXN0UG9zaXRpb24pIHtcclxuICAgICAgcmV0dXJuU3R5bGVzLml0ZW1MaXN0U3R5bGUgPSAoMCwgX3V0aWxzLnNldFBvc2l0aW9uKSgwLCBwcm9wcy5heGlzKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmV0dXJuU3R5bGVzO1xyXG4gIH1cclxuXHJcbiAgdmFyIGN1cnJlbnRQb3NpdGlvbiA9ICgwLCBfdXRpbHMuZ2V0UG9zaXRpb24pKHNlbGVjdGVkSXRlbSwgcHJvcHMpOyAvLyBpZiAzZCBpcyBhdmFpbGFibGUsIGxldCdzIHRha2UgYWR2YW50YWdlIG9mIHRoZSBwZXJmb3JtYW5jZSBvZiB0cmFuc2Zvcm1cclxuXHJcbiAgdmFyIHRyYW5zZm9ybVByb3AgPSAoMCwgX0NTU1RyYW5zbGF0ZS5kZWZhdWx0KShjdXJyZW50UG9zaXRpb24sICclJywgcHJvcHMuYXhpcyk7XHJcbiAgdmFyIHRyYW5zaXRpb25UaW1lID0gcHJvcHMudHJhbnNpdGlvblRpbWUgKyAnbXMnO1xyXG4gIHJldHVyblN0eWxlcy5pdGVtTGlzdFN0eWxlID0ge1xyXG4gICAgV2Via2l0VHJhbnNmb3JtOiB0cmFuc2Zvcm1Qcm9wLFxyXG4gICAgbXNUcmFuc2Zvcm06IHRyYW5zZm9ybVByb3AsXHJcbiAgICBPVHJhbnNmb3JtOiB0cmFuc2Zvcm1Qcm9wLFxyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm1Qcm9wXHJcbiAgfTtcclxuXHJcbiAgaWYgKCFzdGF0ZS5zd2lwaW5nKSB7XHJcbiAgICByZXR1cm5TdHlsZXMuaXRlbUxpc3RTdHlsZSA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgcmV0dXJuU3R5bGVzLml0ZW1MaXN0U3R5bGUpLCB7fSwge1xyXG4gICAgICBXZWJraXRUcmFuc2l0aW9uRHVyYXRpb246IHRyYW5zaXRpb25UaW1lLFxyXG4gICAgICBNb3pUcmFuc2l0aW9uRHVyYXRpb246IHRyYW5zaXRpb25UaW1lLFxyXG4gICAgICBPVHJhbnNpdGlvbkR1cmF0aW9uOiB0cmFuc2l0aW9uVGltZSxcclxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiB0cmFuc2l0aW9uVGltZSxcclxuICAgICAgbXNUcmFuc2l0aW9uRHVyYXRpb246IHRyYW5zaXRpb25UaW1lXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiByZXR1cm5TdHlsZXM7XHJcbn07XHJcbi8qKlxyXG4gKiBTd2lwaW5nIGFuaW1hdGlvbiBoYW5kbGVyIGZvciB0aGUgZGVmYXVsdCAnc2xpZGluZycgc3R5bGUgYW5pbWF0aW9uXHJcbiAqIEBwYXJhbSBkZWx0YVxyXG4gKiBAcGFyYW0gcHJvcHNcclxuICogQHBhcmFtIHN0YXRlXHJcbiAqIEBwYXJhbSBzZXRTdGF0ZVxyXG4gKi9cclxuXHJcblxyXG5leHBvcnRzLnNsaWRlQW5pbWF0aW9uSGFuZGxlciA9IHNsaWRlQW5pbWF0aW9uSGFuZGxlcjtcclxuXHJcbnZhciBzbGlkZVN3aXBlQW5pbWF0aW9uSGFuZGxlciA9IGZ1bmN0aW9uIHNsaWRlU3dpcGVBbmltYXRpb25IYW5kbGVyKGRlbHRhLCBwcm9wcywgc3RhdGUsIHNldFN0YXRlKSB7XHJcbiAgdmFyIHJldHVyblN0eWxlcyA9IHt9O1xyXG4gIHZhciBpc0hvcml6b250YWwgPSBwcm9wcy5heGlzID09PSAnaG9yaXpvbnRhbCc7XHJcblxyXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IF9yZWFjdC5DaGlsZHJlbi5jb3VudChwcm9wcy5jaGlsZHJlbik7XHJcblxyXG4gIHZhciBpbml0aWFsQm91bmRyeSA9IDA7XHJcbiAgdmFyIGN1cnJlbnRQb3NpdGlvbiA9ICgwLCBfdXRpbHMuZ2V0UG9zaXRpb24pKHN0YXRlLnNlbGVjdGVkSXRlbSwgcHJvcHMpO1xyXG4gIHZhciBmaW5hbEJvdW5kcnkgPSBwcm9wcy5pbmZpbml0ZUxvb3AgPyAoMCwgX3V0aWxzLmdldFBvc2l0aW9uKShjaGlsZHJlbkxlbmd0aCAtIDEsIHByb3BzKSAtIDEwMCA6ICgwLCBfdXRpbHMuZ2V0UG9zaXRpb24pKGNoaWxkcmVuTGVuZ3RoIC0gMSwgcHJvcHMpO1xyXG4gIHZhciBheGlzRGVsdGEgPSBpc0hvcml6b250YWwgPyBkZWx0YS54IDogZGVsdGEueTtcclxuICB2YXIgaGFuZGxlZERlbHRhID0gYXhpc0RlbHRhOyAvLyBwcmV2ZW50IHVzZXIgZnJvbSBzd2lwaW5nIGxlZnQgb3V0IG9mIGJvdW5kYXJpZXNcclxuXHJcbiAgaWYgKGN1cnJlbnRQb3NpdGlvbiA9PT0gaW5pdGlhbEJvdW5kcnkgJiYgYXhpc0RlbHRhID4gMCkge1xyXG4gICAgaGFuZGxlZERlbHRhID0gMDtcclxuICB9IC8vIHByZXZlbnQgdXNlciBmcm9tIHN3aXBpbmcgcmlnaHQgb3V0IG9mIGJvdW5kYXJpZXNcclxuXHJcblxyXG4gIGlmIChjdXJyZW50UG9zaXRpb24gPT09IGZpbmFsQm91bmRyeSAmJiBheGlzRGVsdGEgPCAwKSB7XHJcbiAgICBoYW5kbGVkRGVsdGEgPSAwO1xyXG4gIH1cclxuXHJcbiAgdmFyIHBvc2l0aW9uID0gY3VycmVudFBvc2l0aW9uICsgMTAwIC8gKHN0YXRlLml0ZW1TaXplIC8gaGFuZGxlZERlbHRhKTtcclxuICB2YXIgaGFzTW92ZWQgPSBNYXRoLmFicyhheGlzRGVsdGEpID4gcHJvcHMuc3dpcGVTY3JvbGxUb2xlcmFuY2U7XHJcblxyXG4gIGlmIChwcm9wcy5pbmZpbml0ZUxvb3AgJiYgaGFzTW92ZWQpIHtcclxuICAgIC8vIFdoZW4gYWxsb3dpbmcgaW5maW5pdGUgbG9vcCwgaWYgd2Ugc2xpZGUgbGVmdCBmcm9tIHBvc2l0aW9uIDAgd2UgcmV2ZWFsIHRoZSBjbG9uZWQgbGFzdCBzbGlkZSB0aGF0IGFwcGVhcnMgYmVmb3JlIGl0XHJcbiAgICAvLyBpZiB3ZSBzbGlkZSBldmVuIGZ1cnRoZXIgd2UgbmVlZCB0byBqdW1wIHRvIG90aGVyIHNpZGUgc28gaXQgY2FuIGNvbnRpbnVlIC0gYW5kIHZpY2UgdmVyc2EgZm9yIHRoZSBsYXN0IHNsaWRlXHJcbiAgICBpZiAoc3RhdGUuc2VsZWN0ZWRJdGVtID09PSAwICYmIHBvc2l0aW9uID4gLTEwMCkge1xyXG4gICAgICBwb3NpdGlvbiAtPSBjaGlsZHJlbkxlbmd0aCAqIDEwMDtcclxuICAgIH0gZWxzZSBpZiAoc3RhdGUuc2VsZWN0ZWRJdGVtID09PSBjaGlsZHJlbkxlbmd0aCAtIDEgJiYgcG9zaXRpb24gPCAtY2hpbGRyZW5MZW5ndGggKiAxMDApIHtcclxuICAgICAgcG9zaXRpb24gKz0gY2hpbGRyZW5MZW5ndGggKiAxMDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoIXByb3BzLnByZXZlbnRNb3ZlbWVudFVudGlsU3dpcGVTY3JvbGxUb2xlcmFuY2UgfHwgaGFzTW92ZWQgfHwgc3RhdGUuc3dpcGVNb3ZlbWVudFN0YXJ0ZWQpIHtcclxuICAgIGlmICghc3RhdGUuc3dpcGVNb3ZlbWVudFN0YXJ0ZWQpIHtcclxuICAgICAgc2V0U3RhdGUoe1xyXG4gICAgICAgIHN3aXBlTW92ZW1lbnRTdGFydGVkOiB0cnVlXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVyblN0eWxlcy5pdGVtTGlzdFN0eWxlID0gKDAsIF91dGlscy5zZXRQb3NpdGlvbikocG9zaXRpb24sIHByb3BzLmF4aXMpO1xyXG4gIH0gLy9hbGxvd3Mgc2Nyb2xsIGlmIHRoZSBzd2lwZSB3YXMgd2l0aGluIHRoZSB0b2xlcmFuY2VcclxuXHJcblxyXG4gIGlmIChoYXNNb3ZlZCAmJiAhc3RhdGUuY2FuY2VsQ2xpY2spIHtcclxuICAgIHNldFN0YXRlKHtcclxuICAgICAgY2FuY2VsQ2xpY2s6IHRydWVcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJldHVyblN0eWxlcztcclxufTtcclxuLyoqXHJcbiAqIERlZmF1bHQgJ3NsaWRpbmcnIHN0eWxlIGFuaW1pbmF0aW9uIGhhbmRsZXIgZm9yIHdoZW4gYSBzd2lwZSBhY3Rpb24gc3RvcHMuXHJcbiAqIEBwYXJhbSBwcm9wc1xyXG4gKiBAcGFyYW0gc3RhdGVcclxuICovXHJcblxyXG5cclxuZXhwb3J0cy5zbGlkZVN3aXBlQW5pbWF0aW9uSGFuZGxlciA9IHNsaWRlU3dpcGVBbmltYXRpb25IYW5kbGVyO1xyXG5cclxudmFyIHNsaWRlU3RvcFN3aXBpbmdIYW5kbGVyID0gZnVuY3Rpb24gc2xpZGVTdG9wU3dpcGluZ0hhbmRsZXIocHJvcHMsIHN0YXRlKSB7XHJcbiAgdmFyIGN1cnJlbnRQb3NpdGlvbiA9ICgwLCBfdXRpbHMuZ2V0UG9zaXRpb24pKHN0YXRlLnNlbGVjdGVkSXRlbSwgcHJvcHMpO1xyXG4gIHZhciBpdGVtTGlzdFN0eWxlID0gKDAsIF91dGlscy5zZXRQb3NpdGlvbikoY3VycmVudFBvc2l0aW9uLCBwcm9wcy5heGlzKTtcclxuICByZXR1cm4ge1xyXG4gICAgaXRlbUxpc3RTdHlsZTogaXRlbUxpc3RTdHlsZVxyXG4gIH07XHJcbn07XHJcbi8qKlxyXG4gKiBNYWluIGFuaW1hdGlvbiBoYW5kbGVyIGZvciB0aGUgZGVmYXVsdCAnZmFkZScgc3R5bGUgYW5pbWF0aW9uXHJcbiAqIEBwYXJhbSBwcm9wc1xyXG4gKiBAcGFyYW0gc3RhdGVcclxuICovXHJcblxyXG5cclxuZXhwb3J0cy5zbGlkZVN0b3BTd2lwaW5nSGFuZGxlciA9IHNsaWRlU3RvcFN3aXBpbmdIYW5kbGVyO1xyXG5cclxudmFyIGZhZGVBbmltYXRpb25IYW5kbGVyID0gZnVuY3Rpb24gZmFkZUFuaW1hdGlvbkhhbmRsZXIocHJvcHMsIHN0YXRlKSB7XHJcbiAgdmFyIHRyYW5zaXRpb25UaW1lID0gcHJvcHMudHJhbnNpdGlvblRpbWUgKyAnbXMnO1xyXG4gIHZhciB0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24gPSAnZWFzZS1pbi1vdXQnO1xyXG4gIHZhciBzbGlkZVN0eWxlID0ge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgekluZGV4OiAtMixcclxuICAgIG1pbkhlaWdodDogJzEwMCUnLFxyXG4gICAgb3BhY2l0eTogMCxcclxuICAgIHRvcDogMCxcclxuICAgIHJpZ2h0OiAwLFxyXG4gICAgbGVmdDogMCxcclxuICAgIGJvdHRvbTogMCxcclxuICAgIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbjogdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uLFxyXG4gICAgbXNUcmFuc2l0aW9uVGltaW5nRnVuY3Rpb246IHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbixcclxuICAgIE1velRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbjogdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uLFxyXG4gICAgV2Via2l0VHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiB0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24sXHJcbiAgICBPVHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiB0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb25cclxuICB9O1xyXG5cclxuICBpZiAoIXN0YXRlLnN3aXBpbmcpIHtcclxuICAgIHNsaWRlU3R5bGUgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHNsaWRlU3R5bGUpLCB7fSwge1xyXG4gICAgICBXZWJraXRUcmFuc2l0aW9uRHVyYXRpb246IHRyYW5zaXRpb25UaW1lLFxyXG4gICAgICBNb3pUcmFuc2l0aW9uRHVyYXRpb246IHRyYW5zaXRpb25UaW1lLFxyXG4gICAgICBPVHJhbnNpdGlvbkR1cmF0aW9uOiB0cmFuc2l0aW9uVGltZSxcclxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiB0cmFuc2l0aW9uVGltZSxcclxuICAgICAgbXNUcmFuc2l0aW9uRHVyYXRpb246IHRyYW5zaXRpb25UaW1lXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBzbGlkZVN0eWxlOiBzbGlkZVN0eWxlLFxyXG4gICAgc2VsZWN0ZWRTdHlsZTogX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBzbGlkZVN0eWxlKSwge30sIHtcclxuICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcclxuICAgIH0pLFxyXG4gICAgcHJldlN0eWxlOiBfb2JqZWN0U3ByZWFkKHt9LCBzbGlkZVN0eWxlKVxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnRzLmZhZGVBbmltYXRpb25IYW5kbGVyID0gZmFkZUFuaW1hdGlvbkhhbmRsZXI7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcclxuICB2YWx1ZTogdHJ1ZVxyXG59KTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xyXG5cclxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XHJcblxyXG52YXIgX3JlYWN0RWFzeVN3aXBlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3QtZWFzeS1zd2lwZVwiKSk7XHJcblxyXG52YXIgX2Nzc0NsYXNzZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9jc3NDbGFzc2VzXCIpKTtcclxuXHJcbnZhciBfVGh1bWJzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vVGh1bWJzXCIpKTtcclxuXHJcbnZhciBfZG9jdW1lbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9zaGltcy9kb2N1bWVudFwiKSk7XHJcblxyXG52YXIgX3dpbmRvdyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uL3NoaW1zL3dpbmRvd1wiKSk7XHJcblxyXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XHJcblxyXG52YXIgX2FuaW1hdGlvbnMgPSByZXF1aXJlKFwiLi9hbmltYXRpb25zXCIpO1xyXG5cclxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cclxuXHJcbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsOyB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpOyBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IHJldHVybiBjYWNoZTsgfTsgcmV0dXJuIGNhY2hlOyB9XHJcblxyXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikgeyByZXR1cm4geyBkZWZhdWx0OiBvYmogfTsgfSB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTsgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7IHJldHVybiBjYWNoZS5nZXQob2JqKTsgfSB2YXIgbmV3T2JqID0ge307IHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgaWYgKGNhY2hlKSB7IGNhY2hlLnNldChvYmosIG5ld09iaik7IH0gcmV0dXJuIG5ld09iajsgfVxyXG5cclxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxyXG5cclxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cclxuXHJcbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XHJcblxyXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cclxuXHJcbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XHJcblxyXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XHJcblxyXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxyXG5cclxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cclxuXHJcbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XHJcblxyXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxyXG5cclxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxyXG5cclxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XHJcblxyXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XHJcblxyXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XHJcblxyXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxyXG5cclxudmFyIENhcm91c2VsID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XHJcbiAgX2luaGVyaXRzKENhcm91c2VsLCBfUmVhY3QkQ29tcG9uZW50KTtcclxuXHJcbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihDYXJvdXNlbCk7XHJcblxyXG4gIC8vIEB0cy1pZ25vcmVcclxuICBmdW5jdGlvbiBDYXJvdXNlbChwcm9wcykge1xyXG4gICAgdmFyIF90aGlzO1xyXG5cclxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDYXJvdXNlbCk7XHJcblxyXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcyk7XHJcblxyXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInRodW1ic1JlZlwiLCB2b2lkIDApO1xyXG5cclxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJjYXJvdXNlbFdyYXBwZXJSZWZcIiwgdm9pZCAwKTtcclxuXHJcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwibGlzdFJlZlwiLCB2b2lkIDApO1xyXG5cclxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpdGVtc1JlZlwiLCB2b2lkIDApO1xyXG5cclxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJ0aW1lclwiLCB2b2lkIDApO1xyXG5cclxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJhbmltYXRpb25IYW5kbGVyXCIsIHZvaWQgMCk7XHJcblxyXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInNldFRodW1ic1JlZlwiLCBmdW5jdGlvbiAobm9kZSkge1xyXG4gICAgICBfdGhpcy50aHVtYnNSZWYgPSBub2RlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInNldENhcm91c2VsV3JhcHBlclJlZlwiLCBmdW5jdGlvbiAobm9kZSkge1xyXG4gICAgICBfdGhpcy5jYXJvdXNlbFdyYXBwZXJSZWYgPSBub2RlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInNldExpc3RSZWZcIiwgZnVuY3Rpb24gKG5vZGUpIHtcclxuICAgICAgX3RoaXMubGlzdFJlZiA9IG5vZGU7XHJcbiAgICB9KTtcclxuXHJcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic2V0SXRlbXNSZWZcIiwgZnVuY3Rpb24gKG5vZGUsIGluZGV4KSB7XHJcbiAgICAgIGlmICghX3RoaXMuaXRlbXNSZWYpIHtcclxuICAgICAgICBfdGhpcy5pdGVtc1JlZiA9IFtdO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBfdGhpcy5pdGVtc1JlZltpbmRleF0gPSBub2RlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImF1dG9QbGF5XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKF9yZWFjdC5DaGlsZHJlbi5jb3VudChfdGhpcy5wcm9wcy5jaGlsZHJlbikgPD0gMSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgX3RoaXMuY2xlYXJBdXRvUGxheSgpO1xyXG5cclxuICAgICAgaWYgKCFfdGhpcy5wcm9wcy5hdXRvUGxheSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgX3RoaXMudGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBfdGhpcy5pbmNyZW1lbnQoKTtcclxuICAgICAgfSwgX3RoaXMucHJvcHMuaW50ZXJ2YWwpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImNsZWFyQXV0b1BsYXlcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAoX3RoaXMudGltZXIpIGNsZWFyVGltZW91dChfdGhpcy50aW1lcik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicmVzZXRBdXRvUGxheVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIF90aGlzLmNsZWFyQXV0b1BsYXkoKTtcclxuXHJcbiAgICAgIF90aGlzLmF1dG9QbGF5KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic3RvcE9uSG92ZXJcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgaXNNb3VzZUVudGVyZWQ6IHRydWVcclxuICAgICAgfSwgX3RoaXMuY2xlYXJBdXRvUGxheSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic3RhcnRPbkxlYXZlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGlzTW91c2VFbnRlcmVkOiBmYWxzZVxyXG4gICAgICB9LCBfdGhpcy5hdXRvUGxheSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaXNGb2N1c1dpdGhpblRoZUNhcm91c2VsXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKCFfdGhpcy5jYXJvdXNlbFdyYXBwZXJSZWYpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICgoMCwgX2RvY3VtZW50LmRlZmF1bHQpKCkuYWN0aXZlRWxlbWVudCA9PT0gX3RoaXMuY2Fyb3VzZWxXcmFwcGVyUmVmIHx8IF90aGlzLmNhcm91c2VsV3JhcHBlclJlZi5jb250YWlucygoMCwgX2RvY3VtZW50LmRlZmF1bHQpKCkuYWN0aXZlRWxlbWVudCkpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm5hdmlnYXRlV2l0aEtleWJvYXJkXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGlmICghX3RoaXMuaXNGb2N1c1dpdGhpblRoZUNhcm91c2VsKCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBheGlzID0gX3RoaXMucHJvcHMuYXhpcztcclxuICAgICAgdmFyIGlzSG9yaXpvbnRhbCA9IGF4aXMgPT09ICdob3Jpem9udGFsJztcclxuICAgICAgdmFyIGtleU5hbWVzID0ge1xyXG4gICAgICAgIEFycm93VXA6IDM4LFxyXG4gICAgICAgIEFycm93UmlnaHQ6IDM5LFxyXG4gICAgICAgIEFycm93RG93bjogNDAsXHJcbiAgICAgICAgQXJyb3dMZWZ0OiAzN1xyXG4gICAgICB9O1xyXG4gICAgICB2YXIgbmV4dEtleSA9IGlzSG9yaXpvbnRhbCA/IGtleU5hbWVzLkFycm93UmlnaHQgOiBrZXlOYW1lcy5BcnJvd0Rvd247XHJcbiAgICAgIHZhciBwcmV2S2V5ID0gaXNIb3Jpem9udGFsID8ga2V5TmFtZXMuQXJyb3dMZWZ0IDoga2V5TmFtZXMuQXJyb3dVcDtcclxuXHJcbiAgICAgIGlmIChuZXh0S2V5ID09PSBlLmtleUNvZGUpIHtcclxuICAgICAgICBfdGhpcy5pbmNyZW1lbnQoKTtcclxuICAgICAgfSBlbHNlIGlmIChwcmV2S2V5ID09PSBlLmtleUNvZGUpIHtcclxuICAgICAgICBfdGhpcy5kZWNyZW1lbnQoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInVwZGF0ZVNpemVzXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKCFfdGhpcy5zdGF0ZS5pbml0aWFsaXplZCB8fCAhX3RoaXMuaXRlbXNSZWYgfHwgX3RoaXMuaXRlbXNSZWYubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgaXNIb3Jpem9udGFsID0gX3RoaXMucHJvcHMuYXhpcyA9PT0gJ2hvcml6b250YWwnO1xyXG4gICAgICB2YXIgZmlyc3RJdGVtID0gX3RoaXMuaXRlbXNSZWZbMF07XHJcblxyXG4gICAgICBpZiAoIWZpcnN0SXRlbSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIGl0ZW1TaXplID0gaXNIb3Jpem9udGFsID8gZmlyc3RJdGVtLmNsaWVudFdpZHRoIDogZmlyc3RJdGVtLmNsaWVudEhlaWdodDtcclxuXHJcbiAgICAgIF90aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBpdGVtU2l6ZTogaXRlbVNpemVcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoX3RoaXMudGh1bWJzUmVmKSB7XHJcbiAgICAgICAgX3RoaXMudGh1bWJzUmVmLnVwZGF0ZVNpemVzKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJzZXRNb3VudFN0YXRlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGhhc01vdW50OiB0cnVlXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgX3RoaXMudXBkYXRlU2l6ZXMoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJoYW5kbGVDbGlja0l0ZW1cIiwgZnVuY3Rpb24gKGluZGV4LCBpdGVtKSB7XHJcbiAgICAgIGlmIChfcmVhY3QuQ2hpbGRyZW4uY291bnQoX3RoaXMucHJvcHMuY2hpbGRyZW4pID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoX3RoaXMuc3RhdGUuY2FuY2VsQ2xpY2spIHtcclxuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBjYW5jZWxDbGljazogZmFsc2VcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBfdGhpcy5wcm9wcy5vbkNsaWNrSXRlbShpbmRleCwgaXRlbSk7XHJcblxyXG4gICAgICBpZiAoaW5kZXggIT09IF90aGlzLnN0YXRlLnNlbGVjdGVkSXRlbSkge1xyXG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIHNlbGVjdGVkSXRlbTogaW5kZXhcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImhhbmRsZU9uQ2hhbmdlXCIsIGZ1bmN0aW9uIChpbmRleCwgaXRlbSkge1xyXG4gICAgICBpZiAoX3JlYWN0LkNoaWxkcmVuLmNvdW50KF90aGlzLnByb3BzLmNoaWxkcmVuKSA8PSAxKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBfdGhpcy5wcm9wcy5vbkNoYW5nZShpbmRleCwgaXRlbSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaGFuZGxlQ2xpY2tUaHVtYlwiLCBmdW5jdGlvbiAoaW5kZXgsIGl0ZW0pIHtcclxuICAgICAgX3RoaXMucHJvcHMub25DbGlja1RodW1iKGluZGV4LCBpdGVtKTtcclxuXHJcbiAgICAgIF90aGlzLm1vdmVUbyhpbmRleCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25Td2lwZVN0YXJ0XCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgc3dpcGluZzogdHJ1ZVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIF90aGlzLnByb3BzLm9uU3dpcGVTdGFydChldmVudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25Td2lwZUVuZFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHN3aXBpbmc6IGZhbHNlLFxyXG4gICAgICAgIGNhbmNlbENsaWNrOiBmYWxzZSxcclxuICAgICAgICBzd2lwZU1vdmVtZW50U3RhcnRlZDogZmFsc2VcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBfdGhpcy5wcm9wcy5vblN3aXBlRW5kKGV2ZW50KTtcclxuXHJcbiAgICAgIF90aGlzLmNsZWFyQXV0b1BsYXkoKTtcclxuXHJcbiAgICAgIGlmIChfdGhpcy5zdGF0ZS5hdXRvUGxheSkge1xyXG4gICAgICAgIF90aGlzLmF1dG9QbGF5KCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvblN3aXBlTW92ZVwiLCBmdW5jdGlvbiAoZGVsdGEsIGV2ZW50KSB7XHJcbiAgICAgIF90aGlzLnByb3BzLm9uU3dpcGVNb3ZlKGV2ZW50KTtcclxuXHJcbiAgICAgIHZhciBhbmltYXRpb25IYW5kbGVyUmVzcG9uc2UgPSBfdGhpcy5wcm9wcy5zd2lwZUFuaW1hdGlvbkhhbmRsZXIoZGVsdGEsIF90aGlzLnByb3BzLCBfdGhpcy5zdGF0ZSwgX3RoaXMuc2V0U3RhdGUuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSkpO1xyXG5cclxuICAgICAgX3RoaXMuc2V0U3RhdGUoX29iamVjdFNwcmVhZCh7fSwgYW5pbWF0aW9uSGFuZGxlclJlc3BvbnNlKSk7IC8vIElmIHdlIGhhdmUgbm90IG1vdmVkLCB3ZSBzaG91bGQgaGF2ZSBhbiBlbXB0eSBvYmplY3QgcmV0dXJuZWRcclxuICAgICAgLy8gUmV0dXJuIGZhbHNlIHRvIGFsbG93IHNjcm9sbGluZyB3aGVuIG5vdCBzd2lwaW5nXHJcblxyXG5cclxuICAgICAgcmV0dXJuICEhT2JqZWN0LmtleXMoYW5pbWF0aW9uSGFuZGxlclJlc3BvbnNlKS5sZW5ndGg7XHJcbiAgICB9KTtcclxuXHJcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiZGVjcmVtZW50XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIHBvc2l0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMTtcclxuXHJcbiAgICAgIF90aGlzLm1vdmVUbyhfdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW0gLSAodHlwZW9mIHBvc2l0aW9ucyA9PT0gJ251bWJlcicgPyBwb3NpdGlvbnMgOiAxKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaW5jcmVtZW50XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIHBvc2l0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMTtcclxuXHJcbiAgICAgIF90aGlzLm1vdmVUbyhfdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW0gKyAodHlwZW9mIHBvc2l0aW9ucyA9PT0gJ251bWJlcicgPyBwb3NpdGlvbnMgOiAxKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwibW92ZVRvXCIsIGZ1bmN0aW9uIChwb3NpdGlvbikge1xyXG4gICAgICBpZiAodHlwZW9mIHBvc2l0aW9uICE9PSAnbnVtYmVyJykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIGxhc3RQb3NpdGlvbiA9IF9yZWFjdC5DaGlsZHJlbi5jb3VudChfdGhpcy5wcm9wcy5jaGlsZHJlbikgLSAxO1xyXG5cclxuICAgICAgaWYgKHBvc2l0aW9uIDwgMCkge1xyXG4gICAgICAgIHBvc2l0aW9uID0gX3RoaXMucHJvcHMuaW5maW5pdGVMb29wID8gbGFzdFBvc2l0aW9uIDogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHBvc2l0aW9uID4gbGFzdFBvc2l0aW9uKSB7XHJcbiAgICAgICAgcG9zaXRpb24gPSBfdGhpcy5wcm9wcy5pbmZpbml0ZUxvb3AgPyAwIDogbGFzdFBvc2l0aW9uO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBfdGhpcy5zZWxlY3RJdGVtKHtcclxuICAgICAgICAvLyBpZiBpdCdzIG5vdCBhIHNsaWRlciwgd2UgZG9uJ3QgbmVlZCB0byBzZXQgcG9zaXRpb24gaGVyZVxyXG4gICAgICAgIHNlbGVjdGVkSXRlbTogcG9zaXRpb25cclxuICAgICAgfSk7IC8vIGRvbid0IHJlc2V0IGF1dG8gcGxheSB3aGVuIHN0b3Agb24gaG92ZXIgaXMgZW5hYmxlZCwgZG9pbmcgc28gd2lsbCB0cmlnZ2VyIGEgY2FsbCB0byBhdXRvIHBsYXkgbW9yZSB0aGFuIG9uY2VcclxuICAgICAgLy8gYW5kIHdpbGwgcmVzdWx0IGluIHRoZSBpbnRlcnZhbCBmdW5jdGlvbiBub3QgYmVpbmcgY2xlYXJlZCBjb3JyZWN0bHkuXHJcblxyXG5cclxuICAgICAgaWYgKF90aGlzLnN0YXRlLmF1dG9QbGF5ICYmIF90aGlzLnN0YXRlLmlzTW91c2VFbnRlcmVkID09PSBmYWxzZSkge1xyXG4gICAgICAgIF90aGlzLnJlc2V0QXV0b1BsYXkoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uQ2xpY2tOZXh0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgX3RoaXMuaW5jcmVtZW50KDEpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uQ2xpY2tQcmV2XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgX3RoaXMuZGVjcmVtZW50KDEpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uU3dpcGVGb3J3YXJkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgX3RoaXMuaW5jcmVtZW50KDEpO1xyXG5cclxuICAgICAgaWYgKF90aGlzLnByb3BzLmVtdWxhdGVUb3VjaCkge1xyXG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGNhbmNlbENsaWNrOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvblN3aXBlQmFja3dhcmRzXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgX3RoaXMuZGVjcmVtZW50KDEpO1xyXG5cclxuICAgICAgaWYgKF90aGlzLnByb3BzLmVtdWxhdGVUb3VjaCkge1xyXG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGNhbmNlbENsaWNrOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJjaGFuZ2VJdGVtXCIsIGZ1bmN0aW9uIChuZXdJbmRleCkge1xyXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoISgwLCBfdXRpbHMuaXNLZXlib2FyZEV2ZW50KShlKSB8fCBlLmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgX3RoaXMubW92ZVRvKG5ld0luZGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic2VsZWN0SXRlbVwiLCBmdW5jdGlvbiAoc3RhdGUpIHtcclxuICAgICAgLy8gTWVyZ2UgaW4gdGhlIG5ldyBzdGF0ZSB3aGlsZSB1cGRhdGluZyB1cGRhdGluZyBwcmV2aW91cyBpdGVtXHJcbiAgICAgIF90aGlzLnNldFN0YXRlKF9vYmplY3RTcHJlYWQoe1xyXG4gICAgICAgIHByZXZpb3VzSXRlbTogX3RoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtXHJcbiAgICAgIH0sIHN0YXRlKSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIFJ1biBhbmltYXRpb24gaGFuZGxlciBhbmQgdXBkYXRlIHN0eWxlcyBiYXNlZCBvbiBpdFxyXG4gICAgICAgIF90aGlzLnNldFN0YXRlKF90aGlzLmFuaW1hdGlvbkhhbmRsZXIoX3RoaXMucHJvcHMsIF90aGlzLnN0YXRlKSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgX3RoaXMuaGFuZGxlT25DaGFuZ2Uoc3RhdGUuc2VsZWN0ZWRJdGVtLCBfcmVhY3QuQ2hpbGRyZW4udG9BcnJheShfdGhpcy5wcm9wcy5jaGlsZHJlbilbc3RhdGUuc2VsZWN0ZWRJdGVtXSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiZ2V0SW5pdGlhbEltYWdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIHNlbGVjdGVkSXRlbSA9IF90aGlzLnByb3BzLnNlbGVjdGVkSXRlbTtcclxuICAgICAgdmFyIGl0ZW0gPSBfdGhpcy5pdGVtc1JlZiAmJiBfdGhpcy5pdGVtc1JlZltzZWxlY3RlZEl0ZW1dO1xyXG4gICAgICB2YXIgaW1hZ2VzID0gaXRlbSAmJiBpdGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbWcnKSB8fCBbXTtcclxuICAgICAgcmV0dXJuIGltYWdlc1swXTtcclxuICAgIH0pO1xyXG5cclxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJnZXRWYXJpYWJsZUl0ZW1IZWlnaHRcIiwgZnVuY3Rpb24gKHBvc2l0aW9uKSB7XHJcbiAgICAgIHZhciBpdGVtID0gX3RoaXMuaXRlbXNSZWYgJiYgX3RoaXMuaXRlbXNSZWZbcG9zaXRpb25dO1xyXG5cclxuICAgICAgaWYgKF90aGlzLnN0YXRlLmhhc01vdW50ICYmIGl0ZW0gJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgICB2YXIgc2xpZGVJbWFnZXMgPSBpdGVtLmNoaWxkcmVuWzBdLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbWcnKSB8fCBbXTtcclxuXHJcbiAgICAgICAgaWYgKHNsaWRlSW1hZ2VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIHZhciBpbWFnZSA9IHNsaWRlSW1hZ2VzWzBdO1xyXG5cclxuICAgICAgICAgIGlmICghaW1hZ2UuY29tcGxldGUpIHtcclxuICAgICAgICAgICAgLy8gaWYgdGhlIGltYWdlIGlzIHN0aWxsIGxvYWRpbmcsIHRoZSBzaXplIHdvbid0IGJlIGF2YWlsYWJsZSBzbyB3ZSB0cmlnZ2VyIGEgbmV3IHJlbmRlciBhZnRlciBpdCdzIGRvbmVcclxuICAgICAgICAgICAgdmFyIG9uSW1hZ2VMb2FkID0gZnVuY3Rpb24gb25JbWFnZUxvYWQoKSB7XHJcbiAgICAgICAgICAgICAgX3RoaXMuZm9yY2VVcGRhdGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgaW1hZ2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uSW1hZ2VMb2FkKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbkltYWdlTG9hZCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSAvLyB0cnkgdG8gZ2V0IGltZyBmaXJzdCwgaWYgaW1nIG5vdCB0aGVyZSBmaW5kIGZpcnN0IGRpc3BsYXkgdGFnXHJcblxyXG5cclxuICAgICAgICB2YXIgZGlzcGxheUl0ZW0gPSBzbGlkZUltYWdlc1swXSB8fCBpdGVtLmNoaWxkcmVuWzBdO1xyXG4gICAgICAgIHZhciBoZWlnaHQgPSBkaXNwbGF5SXRlbS5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgcmV0dXJuIGhlaWdodCA+IDAgPyBoZWlnaHQgOiBudWxsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBpbml0U3RhdGUgPSB7XHJcbiAgICAgIGluaXRpYWxpemVkOiBmYWxzZSxcclxuICAgICAgcHJldmlvdXNJdGVtOiBwcm9wcy5zZWxlY3RlZEl0ZW0sXHJcbiAgICAgIHNlbGVjdGVkSXRlbTogcHJvcHMuc2VsZWN0ZWRJdGVtLFxyXG4gICAgICBoYXNNb3VudDogZmFsc2UsXHJcbiAgICAgIGlzTW91c2VFbnRlcmVkOiBmYWxzZSxcclxuICAgICAgYXV0b1BsYXk6IHByb3BzLmF1dG9QbGF5LFxyXG4gICAgICBzd2lwaW5nOiBmYWxzZSxcclxuICAgICAgc3dpcGVNb3ZlbWVudFN0YXJ0ZWQ6IGZhbHNlLFxyXG4gICAgICBjYW5jZWxDbGljazogZmFsc2UsXHJcbiAgICAgIGl0ZW1TaXplOiAxLFxyXG4gICAgICBpdGVtTGlzdFN0eWxlOiB7fSxcclxuICAgICAgc2xpZGVTdHlsZToge30sXHJcbiAgICAgIHNlbGVjdGVkU3R5bGU6IHt9LFxyXG4gICAgICBwcmV2U3R5bGU6IHt9XHJcbiAgICB9O1xyXG4gICAgX3RoaXMuYW5pbWF0aW9uSGFuZGxlciA9IHR5cGVvZiBwcm9wcy5hbmltYXRpb25IYW5kbGVyID09PSAnZnVuY3Rpb24nICYmIHByb3BzLmFuaW1hdGlvbkhhbmRsZXIgfHwgcHJvcHMuYW5pbWF0aW9uSGFuZGxlciA9PT0gJ2ZhZGUnICYmIF9hbmltYXRpb25zLmZhZGVBbmltYXRpb25IYW5kbGVyIHx8IF9hbmltYXRpb25zLnNsaWRlQW5pbWF0aW9uSGFuZGxlcjtcclxuICAgIF90aGlzLnN0YXRlID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBpbml0U3RhdGUpLCBfdGhpcy5hbmltYXRpb25IYW5kbGVyKHByb3BzLCBpbml0U3RhdGUpKTtcclxuICAgIHJldHVybiBfdGhpcztcclxuICB9XHJcblxyXG4gIF9jcmVhdGVDbGFzcyhDYXJvdXNlbCwgW3tcclxuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxyXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICBpZiAoIXRoaXMucHJvcHMuY2hpbGRyZW4pIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuc2V0dXBDYXJvdXNlbCgpO1xyXG4gICAgfVxyXG4gIH0sIHtcclxuICAgIGtleTogXCJjb21wb25lbnREaWRVcGRhdGVcIixcclxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcclxuICAgICAgaWYgKCFwcmV2UHJvcHMuY2hpbGRyZW4gJiYgdGhpcy5wcm9wcy5jaGlsZHJlbiAmJiAhdGhpcy5zdGF0ZS5pbml0aWFsaXplZCkge1xyXG4gICAgICAgIHRoaXMuc2V0dXBDYXJvdXNlbCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIXByZXZQcm9wcy5hdXRvRm9jdXMgJiYgdGhpcy5wcm9wcy5hdXRvRm9jdXMpIHtcclxuICAgICAgICB0aGlzLmZvcmNlRm9jdXMoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHByZXZTdGF0ZS5zd2lwaW5nICYmICF0aGlzLnN0YXRlLnN3aXBpbmcpIHtcclxuICAgICAgICAvLyBXZSBzdG9wcGVkIHN3aXBpbmcsIGVuc3VyZSB3ZSBhcmUgaGVhZGluZyB0byB0aGUgbmV3L2N1cnJlbnQgc2xpZGUgYW5kIG5vdCBzdHVja1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoX29iamVjdFNwcmVhZCh7fSwgdGhpcy5wcm9wcy5zdG9wU3dpcGluZ0hhbmRsZXIodGhpcy5wcm9wcywgdGhpcy5zdGF0ZSkpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHByZXZQcm9wcy5zZWxlY3RlZEl0ZW0gIT09IHRoaXMucHJvcHMuc2VsZWN0ZWRJdGVtIHx8IHByZXZQcm9wcy5jZW50ZXJNb2RlICE9PSB0aGlzLnByb3BzLmNlbnRlck1vZGUpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNpemVzKCk7XHJcbiAgICAgICAgdGhpcy5tb3ZlVG8odGhpcy5wcm9wcy5zZWxlY3RlZEl0ZW0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAocHJldlByb3BzLmF1dG9QbGF5ICE9PSB0aGlzLnByb3BzLmF1dG9QbGF5KSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYXV0b1BsYXkpIHtcclxuICAgICAgICAgIHRoaXMuc2V0dXBBdXRvUGxheSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmRlc3Ryb3lBdXRvUGxheSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBhdXRvUGxheTogdGhpcy5wcm9wcy5hdXRvUGxheVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwge1xyXG4gICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXHJcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgIHRoaXMuZGVzdHJveUNhcm91c2VsKCk7XHJcbiAgICB9XHJcbiAgfSwge1xyXG4gICAga2V5OiBcInNldHVwQ2Fyb3VzZWxcIixcclxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXR1cENhcm91c2VsKCkge1xyXG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcclxuXHJcbiAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuc3RhdGUuYXV0b1BsYXkgJiYgX3JlYWN0LkNoaWxkcmVuLmNvdW50KHRoaXMucHJvcHMuY2hpbGRyZW4pID4gMSkge1xyXG4gICAgICAgIHRoaXMuc2V0dXBBdXRvUGxheSgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5wcm9wcy5hdXRvRm9jdXMpIHtcclxuICAgICAgICB0aGlzLmZvcmNlRm9jdXMoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgaW5pdGlhbGl6ZWQ6IHRydWVcclxuICAgICAgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBpbml0aWFsSW1hZ2UgPSBfdGhpczIuZ2V0SW5pdGlhbEltYWdlKCk7XHJcblxyXG4gICAgICAgIGlmIChpbml0aWFsSW1hZ2UgJiYgIWluaXRpYWxJbWFnZS5jb21wbGV0ZSkge1xyXG4gICAgICAgICAgLy8gaWYgaXQncyBhIGNhcm91c2VsIG9mIGltYWdlcywgd2Ugc2V0IHRoZSBtb3VudCBzdGF0ZSBhZnRlciB0aGUgZmlyc3QgaW1hZ2UgaXMgbG9hZGVkXHJcbiAgICAgICAgICBpbml0aWFsSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIF90aGlzMi5zZXRNb3VudFN0YXRlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgX3RoaXMyLnNldE1vdW50U3RhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIHtcclxuICAgIGtleTogXCJkZXN0cm95Q2Fyb3VzZWxcIixcclxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95Q2Fyb3VzZWwoKSB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLmluaXRpYWxpemVkKSB7XHJcbiAgICAgICAgdGhpcy51bmJpbmRFdmVudHMoKTtcclxuICAgICAgICB0aGlzLmRlc3Ryb3lBdXRvUGxheSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwge1xyXG4gICAga2V5OiBcInNldHVwQXV0b1BsYXlcIixcclxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXR1cEF1dG9QbGF5KCkge1xyXG4gICAgICB0aGlzLmF1dG9QbGF5KCk7XHJcbiAgICAgIHZhciBjYXJvdXNlbFdyYXBwZXIgPSB0aGlzLmNhcm91c2VsV3JhcHBlclJlZjtcclxuXHJcbiAgICAgIGlmICh0aGlzLnByb3BzLnN0b3BPbkhvdmVyICYmIGNhcm91c2VsV3JhcHBlcikge1xyXG4gICAgICAgIGNhcm91c2VsV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy5zdG9wT25Ib3Zlcik7XHJcbiAgICAgICAgY2Fyb3VzZWxXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLnN0YXJ0T25MZWF2ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCB7XHJcbiAgICBrZXk6IFwiZGVzdHJveUF1dG9QbGF5XCIsXHJcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveUF1dG9QbGF5KCkge1xyXG4gICAgICB0aGlzLmNsZWFyQXV0b1BsYXkoKTtcclxuICAgICAgdmFyIGNhcm91c2VsV3JhcHBlciA9IHRoaXMuY2Fyb3VzZWxXcmFwcGVyUmVmO1xyXG5cclxuICAgICAgaWYgKHRoaXMucHJvcHMuc3RvcE9uSG92ZXIgJiYgY2Fyb3VzZWxXcmFwcGVyKSB7XHJcbiAgICAgICAgY2Fyb3VzZWxXcmFwcGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLnN0b3BPbkhvdmVyKTtcclxuICAgICAgICBjYXJvdXNlbFdyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMuc3RhcnRPbkxlYXZlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIHtcclxuICAgIGtleTogXCJiaW5kRXZlbnRzXCIsXHJcbiAgICB2YWx1ZTogZnVuY3Rpb24gYmluZEV2ZW50cygpIHtcclxuICAgICAgLy8gYXMgdGhlIHdpZHRocyBhcmUgY2FsY3VsYXRlZCwgd2UgbmVlZCB0byByZXNpemVcclxuICAgICAgLy8gdGhlIGNhcm91c2VsIHdoZW4gdGhlIHdpbmRvdyBpcyByZXNpemVkXHJcbiAgICAgICgwLCBfd2luZG93LmRlZmF1bHQpKCkuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy51cGRhdGVTaXplcyk7IC8vIGlzc3VlICMyIC0gaW1hZ2UgbG9hZGluZyBzbWFsbGVyXHJcblxyXG4gICAgICAoMCwgX3dpbmRvdy5kZWZhdWx0KSgpLmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCB0aGlzLnVwZGF0ZVNpemVzKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnByb3BzLnVzZUtleWJvYXJkQXJyb3dzKSB7XHJcbiAgICAgICAgKDAsIF9kb2N1bWVudC5kZWZhdWx0KSgpLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm5hdmlnYXRlV2l0aEtleWJvYXJkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIHtcclxuICAgIGtleTogXCJ1bmJpbmRFdmVudHNcIixcclxuICAgIHZhbHVlOiBmdW5jdGlvbiB1bmJpbmRFdmVudHMoKSB7XHJcbiAgICAgIC8vIHJlbW92aW5nIGxpc3RlbmVyc1xyXG4gICAgICAoMCwgX3dpbmRvdy5kZWZhdWx0KSgpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMudXBkYXRlU2l6ZXMpO1xyXG4gICAgICAoMCwgX3dpbmRvdy5kZWZhdWx0KSgpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCB0aGlzLnVwZGF0ZVNpemVzKTtcclxuICAgICAgdmFyIGluaXRpYWxJbWFnZSA9IHRoaXMuZ2V0SW5pdGlhbEltYWdlKCk7XHJcblxyXG4gICAgICBpZiAoaW5pdGlhbEltYWdlKSB7XHJcbiAgICAgICAgaW5pdGlhbEltYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCB0aGlzLnNldE1vdW50U3RhdGUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5wcm9wcy51c2VLZXlib2FyZEFycm93cykge1xyXG4gICAgICAgICgwLCBfZG9jdW1lbnQuZGVmYXVsdCkoKS5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5uYXZpZ2F0ZVdpdGhLZXlib2FyZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCB7XHJcbiAgICBrZXk6IFwiZm9yY2VGb2N1c1wiLFxyXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvcmNlRm9jdXMoKSB7XHJcbiAgICAgIHZhciBfdGhpcyRjYXJvdXNlbFdyYXBwZXI7XHJcblxyXG4gICAgICAoX3RoaXMkY2Fyb3VzZWxXcmFwcGVyID0gdGhpcy5jYXJvdXNlbFdyYXBwZXJSZWYpID09PSBudWxsIHx8IF90aGlzJGNhcm91c2VsV3JhcHBlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3RoaXMkY2Fyb3VzZWxXcmFwcGVyLmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfSwge1xyXG4gICAga2V5OiBcInJlbmRlckl0ZW1zXCIsXHJcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVySXRlbXMoaXNDbG9uZSkge1xyXG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcclxuXHJcbiAgICAgIGlmICghdGhpcy5wcm9wcy5jaGlsZHJlbikge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIF9yZWFjdC5DaGlsZHJlbi5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XHJcbiAgICAgICAgdmFyIGlzU2VsZWN0ZWQgPSBpbmRleCA9PT0gX3RoaXMzLnN0YXRlLnNlbGVjdGVkSXRlbTtcclxuICAgICAgICB2YXIgaXNQcmV2aW91cyA9IGluZGV4ID09PSBfdGhpczMuc3RhdGUucHJldmlvdXNJdGVtO1xyXG4gICAgICAgIHZhciBzdHlsZSA9IGlzU2VsZWN0ZWQgJiYgX3RoaXMzLnN0YXRlLnNlbGVjdGVkU3R5bGUgfHwgaXNQcmV2aW91cyAmJiBfdGhpczMuc3RhdGUucHJldlN0eWxlIHx8IF90aGlzMy5zdGF0ZS5zbGlkZVN0eWxlIHx8IHt9O1xyXG5cclxuICAgICAgICBpZiAoX3RoaXMzLnByb3BzLmNlbnRlck1vZGUgJiYgX3RoaXMzLnByb3BzLmF4aXMgPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgc3R5bGUgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHN0eWxlKSwge30sIHtcclxuICAgICAgICAgICAgbWluV2lkdGg6IF90aGlzMy5wcm9wcy5jZW50ZXJTbGlkZVBlcmNlbnRhZ2UgKyAnJSdcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKF90aGlzMy5zdGF0ZS5zd2lwaW5nICYmIF90aGlzMy5zdGF0ZS5zd2lwZU1vdmVtZW50U3RhcnRlZCkge1xyXG4gICAgICAgICAgc3R5bGUgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHN0eWxlKSwge30sIHtcclxuICAgICAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBzbGlkZVByb3BzID0ge1xyXG4gICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMzLnNldEl0ZW1zUmVmKGUsIGluZGV4KTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBrZXk6ICdpdGVtS2V5JyArIGluZGV4ICsgKGlzQ2xvbmUgPyAnY2xvbmUnIDogJycpLFxyXG4gICAgICAgICAgY2xhc3NOYW1lOiBfY3NzQ2xhc3Nlcy5kZWZhdWx0LklURU0odHJ1ZSwgaW5kZXggPT09IF90aGlzMy5zdGF0ZS5zZWxlY3RlZEl0ZW0sIGluZGV4ID09PSBfdGhpczMuc3RhdGUucHJldmlvdXNJdGVtKSxcclxuICAgICAgICAgIG9uQ2xpY2s6IF90aGlzMy5oYW5kbGVDbGlja0l0ZW0uYmluZChfdGhpczMsIGluZGV4LCBpdGVtKSxcclxuICAgICAgICAgIHN0eWxlOiBzdHlsZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgc2xpZGVQcm9wcywgX3RoaXMzLnByb3BzLnJlbmRlckl0ZW0oaXRlbSwge1xyXG4gICAgICAgICAgaXNTZWxlY3RlZDogaW5kZXggPT09IF90aGlzMy5zdGF0ZS5zZWxlY3RlZEl0ZW0sXHJcbiAgICAgICAgICBpc1ByZXZpb3VzOiBpbmRleCA9PT0gX3RoaXMzLnN0YXRlLnByZXZpb3VzSXRlbVxyXG4gICAgICAgIH0pKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwge1xyXG4gICAga2V5OiBcInJlbmRlckNvbnRyb2xzXCIsXHJcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyQ29udHJvbHMoKSB7XHJcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xyXG5cclxuICAgICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcclxuICAgICAgICAgIHNob3dJbmRpY2F0b3JzID0gX3RoaXMkcHJvcHMuc2hvd0luZGljYXRvcnMsXHJcbiAgICAgICAgICBsYWJlbHMgPSBfdGhpcyRwcm9wcy5sYWJlbHMsXHJcbiAgICAgICAgICByZW5kZXJJbmRpY2F0b3IgPSBfdGhpcyRwcm9wcy5yZW5kZXJJbmRpY2F0b3IsXHJcbiAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzLmNoaWxkcmVuO1xyXG5cclxuICAgICAgaWYgKCFzaG93SW5kaWNhdG9ycykge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7XHJcbiAgICAgICAgY2xhc3NOYW1lOiBcImNvbnRyb2wtZG90c1wiXHJcbiAgICAgIH0sIF9yZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGZ1bmN0aW9uIChfLCBpbmRleCkge1xyXG4gICAgICAgIHJldHVybiByZW5kZXJJbmRpY2F0b3IgJiYgcmVuZGVySW5kaWNhdG9yKF90aGlzNC5jaGFuZ2VJdGVtKGluZGV4KSwgaW5kZXggPT09IF90aGlzNC5zdGF0ZS5zZWxlY3RlZEl0ZW0sIGluZGV4LCBsYWJlbHMuaXRlbSk7XHJcbiAgICAgIH0pKTtcclxuICAgIH1cclxuICB9LCB7XHJcbiAgICBrZXk6IFwicmVuZGVyU3RhdHVzXCIsXHJcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyU3RhdHVzKCkge1xyXG4gICAgICBpZiAoIXRoaXMucHJvcHMuc2hvd1N0YXR1cykge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHtcclxuICAgICAgICBjbGFzc05hbWU6IFwiY2Fyb3VzZWwtc3RhdHVzXCJcclxuICAgICAgfSwgdGhpcy5wcm9wcy5zdGF0dXNGb3JtYXR0ZXIodGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW0gKyAxLCBfcmVhY3QuQ2hpbGRyZW4uY291bnQodGhpcy5wcm9wcy5jaGlsZHJlbikpKTtcclxuICAgIH1cclxuICB9LCB7XHJcbiAgICBrZXk6IFwicmVuZGVyVGh1bWJzXCIsXHJcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyVGh1bWJzKCkge1xyXG4gICAgICBpZiAoIXRoaXMucHJvcHMuc2hvd1RodW1icyB8fCAhdGhpcy5wcm9wcy5jaGlsZHJlbiB8fCBfcmVhY3QuQ2hpbGRyZW4uY291bnQodGhpcy5wcm9wcy5jaGlsZHJlbikgPT09IDApIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9UaHVtYnMuZGVmYXVsdCwge1xyXG4gICAgICAgIHJlZjogdGhpcy5zZXRUaHVtYnNSZWYsXHJcbiAgICAgICAgb25TZWxlY3RJdGVtOiB0aGlzLmhhbmRsZUNsaWNrVGh1bWIsXHJcbiAgICAgICAgc2VsZWN0ZWRJdGVtOiB0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbSxcclxuICAgICAgICB0cmFuc2l0aW9uVGltZTogdGhpcy5wcm9wcy50cmFuc2l0aW9uVGltZSxcclxuICAgICAgICB0aHVtYldpZHRoOiB0aGlzLnByb3BzLnRodW1iV2lkdGgsXHJcbiAgICAgICAgbGFiZWxzOiB0aGlzLnByb3BzLmxhYmVscyxcclxuICAgICAgICBlbXVsYXRlVG91Y2g6IHRoaXMucHJvcHMuZW11bGF0ZVRvdWNoXHJcbiAgICAgIH0sIHRoaXMucHJvcHMucmVuZGVyVGh1bWJzKHRoaXMucHJvcHMuY2hpbGRyZW4pKTtcclxuICAgIH1cclxuICB9LCB7XHJcbiAgICBrZXk6IFwicmVuZGVyXCIsXHJcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xyXG4gICAgICB2YXIgX3RoaXM1ID0gdGhpcztcclxuXHJcbiAgICAgIGlmICghdGhpcy5wcm9wcy5jaGlsZHJlbiB8fCBfcmVhY3QuQ2hpbGRyZW4uY291bnQodGhpcy5wcm9wcy5jaGlsZHJlbikgPT09IDApIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIGlzU3dpcGVhYmxlID0gdGhpcy5wcm9wcy5zd2lwZWFibGUgJiYgX3JlYWN0LkNoaWxkcmVuLmNvdW50KHRoaXMucHJvcHMuY2hpbGRyZW4pID4gMTtcclxuICAgICAgdmFyIGlzSG9yaXpvbnRhbCA9IHRoaXMucHJvcHMuYXhpcyA9PT0gJ2hvcml6b250YWwnO1xyXG4gICAgICB2YXIgY2FuU2hvd0Fycm93cyA9IHRoaXMucHJvcHMuc2hvd0Fycm93cyAmJiBfcmVhY3QuQ2hpbGRyZW4uY291bnQodGhpcy5wcm9wcy5jaGlsZHJlbikgPiAxOyAvLyBzaG93IGxlZnQgYXJyb3c/XHJcblxyXG4gICAgICB2YXIgaGFzUHJldiA9IGNhblNob3dBcnJvd3MgJiYgKHRoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtID4gMCB8fCB0aGlzLnByb3BzLmluZmluaXRlTG9vcCkgfHwgZmFsc2U7IC8vIHNob3cgcmlnaHQgYXJyb3dcclxuXHJcbiAgICAgIHZhciBoYXNOZXh0ID0gY2FuU2hvd0Fycm93cyAmJiAodGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW0gPCBfcmVhY3QuQ2hpbGRyZW4uY291bnQodGhpcy5wcm9wcy5jaGlsZHJlbikgLSAxIHx8IHRoaXMucHJvcHMuaW5maW5pdGVMb29wKSB8fCBmYWxzZTtcclxuICAgICAgdmFyIGl0ZW1zQ2xvbmUgPSB0aGlzLnJlbmRlckl0ZW1zKHRydWUpO1xyXG4gICAgICB2YXIgZmlyc3RDbG9uZSA9IGl0ZW1zQ2xvbmUuc2hpZnQoKTtcclxuICAgICAgdmFyIGxhc3RDbG9uZSA9IGl0ZW1zQ2xvbmUucG9wKCk7XHJcbiAgICAgIHZhciBzd2lwZXJQcm9wcyA9IHtcclxuICAgICAgICBjbGFzc05hbWU6IF9jc3NDbGFzc2VzLmRlZmF1bHQuU0xJREVSKHRydWUsIHRoaXMuc3RhdGUuc3dpcGluZyksXHJcbiAgICAgICAgb25Td2lwZU1vdmU6IHRoaXMub25Td2lwZU1vdmUsXHJcbiAgICAgICAgb25Td2lwZVN0YXJ0OiB0aGlzLm9uU3dpcGVTdGFydCxcclxuICAgICAgICBvblN3aXBlRW5kOiB0aGlzLm9uU3dpcGVFbmQsXHJcbiAgICAgICAgc3R5bGU6IHRoaXMuc3RhdGUuaXRlbUxpc3RTdHlsZSxcclxuICAgICAgICB0b2xlcmFuY2U6IHRoaXMucHJvcHMuc3dpcGVTY3JvbGxUb2xlcmFuY2VcclxuICAgICAgfTtcclxuICAgICAgdmFyIGNvbnRhaW5lclN0eWxlcyA9IHt9O1xyXG5cclxuICAgICAgaWYgKGlzSG9yaXpvbnRhbCkge1xyXG4gICAgICAgIHN3aXBlclByb3BzLm9uU3dpcGVMZWZ0ID0gdGhpcy5vblN3aXBlRm9yd2FyZDtcclxuICAgICAgICBzd2lwZXJQcm9wcy5vblN3aXBlUmlnaHQgPSB0aGlzLm9uU3dpcGVCYWNrd2FyZHM7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmR5bmFtaWNIZWlnaHQpIHtcclxuICAgICAgICAgIHZhciBpdGVtSGVpZ2h0ID0gdGhpcy5nZXRWYXJpYWJsZUl0ZW1IZWlnaHQodGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW0pOyAvLyBzd2lwZXJQcm9wcy5zdHlsZS5oZWlnaHQgPSBpdGVtSGVpZ2h0IHx8ICdhdXRvJztcclxuXHJcbiAgICAgICAgICBjb250YWluZXJTdHlsZXMuaGVpZ2h0ID0gaXRlbUhlaWdodCB8fCAnYXV0byc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN3aXBlclByb3BzLm9uU3dpcGVVcCA9IHRoaXMucHJvcHMudmVydGljYWxTd2lwZSA9PT0gJ25hdHVyYWwnID8gdGhpcy5vblN3aXBlQmFja3dhcmRzIDogdGhpcy5vblN3aXBlRm9yd2FyZDtcclxuICAgICAgICBzd2lwZXJQcm9wcy5vblN3aXBlRG93biA9IHRoaXMucHJvcHMudmVydGljYWxTd2lwZSA9PT0gJ25hdHVyYWwnID8gdGhpcy5vblN3aXBlRm9yd2FyZCA6IHRoaXMub25Td2lwZUJhY2t3YXJkcztcclxuICAgICAgICBzd2lwZXJQcm9wcy5zdHlsZSA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgc3dpcGVyUHJvcHMuc3R5bGUpLCB7fSwge1xyXG4gICAgICAgICAgaGVpZ2h0OiB0aGlzLnN0YXRlLml0ZW1TaXplXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29udGFpbmVyU3R5bGVzLmhlaWdodCA9IHRoaXMuc3RhdGUuaXRlbVNpemU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XHJcbiAgICAgICAgXCJhcmlhLWxhYmVsXCI6IHRoaXMucHJvcHMuYXJpYUxhYmVsLFxyXG4gICAgICAgIGNsYXNzTmFtZTogX2Nzc0NsYXNzZXMuZGVmYXVsdC5ST09UKHRoaXMucHJvcHMuY2xhc3NOYW1lKSxcclxuICAgICAgICByZWY6IHRoaXMuc2V0Q2Fyb3VzZWxXcmFwcGVyUmVmLFxyXG4gICAgICAgIHRhYkluZGV4OiB0aGlzLnByb3BzLnVzZUtleWJvYXJkQXJyb3dzID8gMCA6IHVuZGVmaW5lZFxyXG4gICAgICB9LCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XHJcbiAgICAgICAgY2xhc3NOYW1lOiBfY3NzQ2xhc3Nlcy5kZWZhdWx0LkNBUk9VU0VMKHRydWUpLFxyXG4gICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICB3aWR0aDogdGhpcy5wcm9wcy53aWR0aFxyXG4gICAgICAgIH1cclxuICAgICAgfSwgdGhpcy5yZW5kZXJDb250cm9scygpLCB0aGlzLnByb3BzLnJlbmRlckFycm93UHJldih0aGlzLm9uQ2xpY2tQcmV2LCBoYXNQcmV2LCB0aGlzLnByb3BzLmxhYmVscy5sZWZ0QXJyb3cpLCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XHJcbiAgICAgICAgY2xhc3NOYW1lOiBfY3NzQ2xhc3Nlcy5kZWZhdWx0LldSQVBQRVIodHJ1ZSwgdGhpcy5wcm9wcy5heGlzKSxcclxuICAgICAgICBzdHlsZTogY29udGFpbmVyU3R5bGVzXHJcbiAgICAgIH0sIGlzU3dpcGVhYmxlID8gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0RWFzeVN3aXBlLmRlZmF1bHQsIF9leHRlbmRzKHtcclxuICAgICAgICB0YWdOYW1lOiBcInVsXCIsXHJcbiAgICAgICAgaW5uZXJSZWY6IHRoaXMuc2V0TGlzdFJlZlxyXG4gICAgICB9LCBzd2lwZXJQcm9wcywge1xyXG4gICAgICAgIGFsbG93TW91c2VFdmVudHM6IHRoaXMucHJvcHMuZW11bGF0ZVRvdWNoXHJcbiAgICAgIH0pLCB0aGlzLnByb3BzLmluZmluaXRlTG9vcCAmJiBsYXN0Q2xvbmUsIHRoaXMucmVuZGVySXRlbXMoKSwgdGhpcy5wcm9wcy5pbmZpbml0ZUxvb3AgJiYgZmlyc3RDbG9uZSkgOiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInVsXCIsIHtcclxuICAgICAgICBjbGFzc05hbWU6IF9jc3NDbGFzc2VzLmRlZmF1bHQuU0xJREVSKHRydWUsIHRoaXMuc3RhdGUuc3dpcGluZyksXHJcbiAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYobm9kZSkge1xyXG4gICAgICAgICAgcmV0dXJuIF90aGlzNS5zZXRMaXN0UmVmKG5vZGUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3R5bGU6IHRoaXMuc3RhdGUuaXRlbUxpc3RTdHlsZSB8fCB7fVxyXG4gICAgICB9LCB0aGlzLnByb3BzLmluZmluaXRlTG9vcCAmJiBsYXN0Q2xvbmUsIHRoaXMucmVuZGVySXRlbXMoKSwgdGhpcy5wcm9wcy5pbmZpbml0ZUxvb3AgJiYgZmlyc3RDbG9uZSkpLCB0aGlzLnByb3BzLnJlbmRlckFycm93TmV4dCh0aGlzLm9uQ2xpY2tOZXh0LCBoYXNOZXh0LCB0aGlzLnByb3BzLmxhYmVscy5yaWdodEFycm93KSwgdGhpcy5yZW5kZXJTdGF0dXMoKSksIHRoaXMucmVuZGVyVGh1bWJzKCkpO1xyXG4gICAgfVxyXG4gIH1dKTtcclxuXHJcbiAgcmV0dXJuIENhcm91c2VsO1xyXG59KF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudCk7XHJcblxyXG5leHBvcnRzLmRlZmF1bHQgPSBDYXJvdXNlbDtcclxuXHJcbl9kZWZpbmVQcm9wZXJ0eShDYXJvdXNlbCwgXCJkaXNwbGF5TmFtZVwiLCAnQ2Fyb3VzZWwnKTtcclxuXHJcbl9kZWZpbmVQcm9wZXJ0eShDYXJvdXNlbCwgXCJkZWZhdWx0UHJvcHNcIiwge1xyXG4gIGFyaWFMYWJlbDogdW5kZWZpbmVkLFxyXG4gIGF4aXM6ICdob3Jpem9udGFsJyxcclxuICBjZW50ZXJTbGlkZVBlcmNlbnRhZ2U6IDgwLFxyXG4gIGludGVydmFsOiAzMDAwLFxyXG4gIGxhYmVsczoge1xyXG4gICAgbGVmdEFycm93OiAncHJldmlvdXMgc2xpZGUgLyBpdGVtJyxcclxuICAgIHJpZ2h0QXJyb3c6ICduZXh0IHNsaWRlIC8gaXRlbScsXHJcbiAgICBpdGVtOiAnc2xpZGUgaXRlbSdcclxuICB9LFxyXG4gIG9uQ2xpY2tJdGVtOiBfdXRpbHMubm9vcCxcclxuICBvbkNsaWNrVGh1bWI6IF91dGlscy5ub29wLFxyXG4gIG9uQ2hhbmdlOiBfdXRpbHMubm9vcCxcclxuICBvblN3aXBlU3RhcnQ6IGZ1bmN0aW9uIG9uU3dpcGVTdGFydCgpIHt9LFxyXG4gIG9uU3dpcGVFbmQ6IGZ1bmN0aW9uIG9uU3dpcGVFbmQoKSB7fSxcclxuICBvblN3aXBlTW92ZTogZnVuY3Rpb24gb25Td2lwZU1vdmUoKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSxcclxuICBwcmV2ZW50TW92ZW1lbnRVbnRpbFN3aXBlU2Nyb2xsVG9sZXJhbmNlOiBmYWxzZSxcclxuICByZW5kZXJBcnJvd1ByZXY6IGZ1bmN0aW9uIHJlbmRlckFycm93UHJldihvbkNsaWNrSGFuZGxlciwgaGFzUHJldiwgbGFiZWwpIHtcclxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XHJcbiAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXHJcbiAgICAgIFwiYXJpYS1sYWJlbFwiOiBsYWJlbCxcclxuICAgICAgY2xhc3NOYW1lOiBfY3NzQ2xhc3Nlcy5kZWZhdWx0LkFSUk9XX1BSRVYoIWhhc1ByZXYpLFxyXG4gICAgICBvbkNsaWNrOiBvbkNsaWNrSGFuZGxlclxyXG4gICAgfSk7XHJcbiAgfSxcclxuICByZW5kZXJBcnJvd05leHQ6IGZ1bmN0aW9uIHJlbmRlckFycm93TmV4dChvbkNsaWNrSGFuZGxlciwgaGFzTmV4dCwgbGFiZWwpIHtcclxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XHJcbiAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXHJcbiAgICAgIFwiYXJpYS1sYWJlbFwiOiBsYWJlbCxcclxuICAgICAgY2xhc3NOYW1lOiBfY3NzQ2xhc3Nlcy5kZWZhdWx0LkFSUk9XX05FWFQoIWhhc05leHQpLFxyXG4gICAgICBvbkNsaWNrOiBvbkNsaWNrSGFuZGxlclxyXG4gICAgfSk7XHJcbiAgfSxcclxuICByZW5kZXJJbmRpY2F0b3I6IGZ1bmN0aW9uIHJlbmRlckluZGljYXRvcihvbkNsaWNrSGFuZGxlciwgaXNTZWxlY3RlZCwgaW5kZXgsIGxhYmVsKSB7XHJcbiAgICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7XHJcbiAgICAgIGNsYXNzTmFtZTogX2Nzc0NsYXNzZXMuZGVmYXVsdC5ET1QoaXNTZWxlY3RlZCksXHJcbiAgICAgIG9uQ2xpY2s6IG9uQ2xpY2tIYW5kbGVyLFxyXG4gICAgICBvbktleURvd246IG9uQ2xpY2tIYW5kbGVyLFxyXG4gICAgICB2YWx1ZTogaW5kZXgsXHJcbiAgICAgIGtleTogaW5kZXgsXHJcbiAgICAgIHJvbGU6IFwiYnV0dG9uXCIsXHJcbiAgICAgIHRhYkluZGV4OiAwLFxyXG4gICAgICBcImFyaWEtbGFiZWxcIjogXCJcIi5jb25jYXQobGFiZWwsIFwiIFwiKS5jb25jYXQoaW5kZXggKyAxKVxyXG4gICAgfSk7XHJcbiAgfSxcclxuICByZW5kZXJJdGVtOiBmdW5jdGlvbiByZW5kZXJJdGVtKGl0ZW0pIHtcclxuICAgIHJldHVybiBpdGVtO1xyXG4gIH0sXHJcbiAgcmVuZGVyVGh1bWJzOiBmdW5jdGlvbiByZW5kZXJUaHVtYnMoY2hpbGRyZW4pIHtcclxuICAgIHZhciBpbWFnZXMgPSBfcmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICB2YXIgaW1nID0gaXRlbTsgLy8gaWYgdGhlIGl0ZW0gaXMgbm90IGFuIGltYWdlLCB0cnkgdG8gZmluZCB0aGUgZmlyc3QgaW1hZ2UgaW4gdGhlIGl0ZW0ncyBjaGlsZHJlbi5cclxuXHJcbiAgICAgIGlmIChpdGVtLnR5cGUgIT09ICdpbWcnKSB7XHJcbiAgICAgICAgaW1nID0gX3JlYWN0LkNoaWxkcmVuLnRvQXJyYXkoaXRlbS5wcm9wcy5jaGlsZHJlbikuZmluZChmdW5jdGlvbiAoY2hpbGRyZW4pIHtcclxuICAgICAgICAgIHJldHVybiBjaGlsZHJlbi50eXBlID09PSAnaW1nJztcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCFpbWcpIHtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gaW1nO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGltYWdlcy5maWx0ZXIoZnVuY3Rpb24gKGltYWdlKSB7XHJcbiAgICAgIHJldHVybiBpbWFnZTtcclxuICAgIH0pLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBjb25zb2xlLndhcm4oXCJObyBpbWFnZXMgZm91bmQhIENhbid0IGJ1aWxkIHRoZSB0aHVtYiBsaXN0IHdpdGhvdXQgaW1hZ2VzLiBJZiB5b3UgZG9uJ3QgbmVlZCB0aHVtYnMsIHNldCBzaG93VGh1bWJzPXtmYWxzZX0gaW4gdGhlIENhcm91c2VsLiBOb3RlIHRoYXQgaXQncyBub3QgcG9zc2libGUgdG8gZ2V0IGltYWdlcyByZW5kZXJlZCBpbnNpZGUgY3VzdG9tIGNvbXBvbmVudHMuIE1vcmUgaW5mbyBhdCBodHRwczovL2dpdGh1Yi5jb20vbGVhbmRyb3dkL3JlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwvYmxvYi9tYXN0ZXIvVFJPVUJMRVNIT09USU5HLm1kXCIpO1xyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGltYWdlcztcclxuICB9LFxyXG4gIHN0YXR1c0Zvcm1hdHRlcjogX3V0aWxzLmRlZmF1bHRTdGF0dXNGb3JtYXR0ZXIsXHJcbiAgc2VsZWN0ZWRJdGVtOiAwLFxyXG4gIHNob3dBcnJvd3M6IHRydWUsXHJcbiAgc2hvd0luZGljYXRvcnM6IHRydWUsXHJcbiAgc2hvd1N0YXR1czogdHJ1ZSxcclxuICBzaG93VGh1bWJzOiB0cnVlLFxyXG4gIHN0b3BPbkhvdmVyOiB0cnVlLFxyXG4gIHN3aXBlU2Nyb2xsVG9sZXJhbmNlOiA1LFxyXG4gIHN3aXBlYWJsZTogdHJ1ZSxcclxuICB0cmFuc2l0aW9uVGltZTogMzUwLFxyXG4gIHZlcnRpY2FsU3dpcGU6ICdzdGFuZGFyZCcsXHJcbiAgd2lkdGg6ICcxMDAlJyxcclxuICBhbmltYXRpb25IYW5kbGVyOiAnc2xpZGUnLFxyXG4gIHN3aXBlQW5pbWF0aW9uSGFuZGxlcjogX2FuaW1hdGlvbnMuc2xpZGVTd2lwZUFuaW1hdGlvbkhhbmRsZXIsXHJcbiAgc3RvcFN3aXBpbmdIYW5kbGVyOiBfYW5pbWF0aW9ucy5zbGlkZVN0b3BTd2lwaW5nSGFuZGxlclxyXG59KTsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xyXG4gIHZhbHVlOiB0cnVlXHJcbn0pO1xyXG5leHBvcnRzLnNldFBvc2l0aW9uID0gZXhwb3J0cy5nZXRQb3NpdGlvbiA9IGV4cG9ydHMuaXNLZXlib2FyZEV2ZW50ID0gZXhwb3J0cy5kZWZhdWx0U3RhdHVzRm9ybWF0dGVyID0gZXhwb3J0cy5ub29wID0gdm9pZCAwO1xyXG5cclxudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcclxuXHJcbnZhciBfQ1NTVHJhbnNsYXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vQ1NTVHJhbnNsYXRlXCIpKTtcclxuXHJcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XHJcblxyXG52YXIgbm9vcCA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcclxuXHJcbmV4cG9ydHMubm9vcCA9IG5vb3A7XHJcblxyXG52YXIgZGVmYXVsdFN0YXR1c0Zvcm1hdHRlciA9IGZ1bmN0aW9uIGRlZmF1bHRTdGF0dXNGb3JtYXR0ZXIoY3VycmVudCwgdG90YWwpIHtcclxuICByZXR1cm4gXCJcIi5jb25jYXQoY3VycmVudCwgXCIgb2YgXCIpLmNvbmNhdCh0b3RhbCk7XHJcbn07XHJcblxyXG5leHBvcnRzLmRlZmF1bHRTdGF0dXNGb3JtYXR0ZXIgPSBkZWZhdWx0U3RhdHVzRm9ybWF0dGVyO1xyXG5cclxudmFyIGlzS2V5Ym9hcmRFdmVudCA9IGZ1bmN0aW9uIGlzS2V5Ym9hcmRFdmVudChlKSB7XHJcbiAgcmV0dXJuIGUgPyBlLmhhc093blByb3BlcnR5KCdrZXknKSA6IGZhbHNlO1xyXG59O1xyXG4vKipcclxuICogR2V0cyB0aGUgbGlzdCAncG9zaXRpb24nIHJlbGF0aXZlIHRvIGEgY3VycmVudCBpbmRleFxyXG4gKiBAcGFyYW0gaW5kZXhcclxuICovXHJcblxyXG5cclxuZXhwb3J0cy5pc0tleWJvYXJkRXZlbnQgPSBpc0tleWJvYXJkRXZlbnQ7XHJcblxyXG52YXIgZ2V0UG9zaXRpb24gPSBmdW5jdGlvbiBnZXRQb3NpdGlvbihpbmRleCwgcHJvcHMpIHtcclxuICBpZiAocHJvcHMuaW5maW5pdGVMb29wKSB7XHJcbiAgICAvLyBpbmRleCBoYXMgdG8gYmUgYWRkZWQgYnkgMSBiZWNhdXNlIG9mIHRoZSBmaXJzdCBjbG9uZWQgc2xpZGVcclxuICAgICsraW5kZXg7XHJcbiAgfVxyXG5cclxuICBpZiAoaW5kZXggPT09IDApIHtcclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxuXHJcbiAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gX3JlYWN0LkNoaWxkcmVuLmNvdW50KHByb3BzLmNoaWxkcmVuKTtcclxuXHJcbiAgaWYgKHByb3BzLmNlbnRlck1vZGUgJiYgcHJvcHMuYXhpcyA9PT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICB2YXIgY3VycmVudFBvc2l0aW9uID0gLWluZGV4ICogcHJvcHMuY2VudGVyU2xpZGVQZXJjZW50YWdlO1xyXG4gICAgdmFyIGxhc3RQb3NpdGlvbiA9IGNoaWxkcmVuTGVuZ3RoIC0gMTtcclxuXHJcbiAgICBpZiAoaW5kZXggJiYgKGluZGV4ICE9PSBsYXN0UG9zaXRpb24gfHwgcHJvcHMuaW5maW5pdGVMb29wKSkge1xyXG4gICAgICBjdXJyZW50UG9zaXRpb24gKz0gKDEwMCAtIHByb3BzLmNlbnRlclNsaWRlUGVyY2VudGFnZSkgLyAyO1xyXG4gICAgfSBlbHNlIGlmIChpbmRleCA9PT0gbGFzdFBvc2l0aW9uKSB7XHJcbiAgICAgIGN1cnJlbnRQb3NpdGlvbiArPSAxMDAgLSBwcm9wcy5jZW50ZXJTbGlkZVBlcmNlbnRhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGN1cnJlbnRQb3NpdGlvbjtcclxuICB9XHJcblxyXG4gIHJldHVybiAtaW5kZXggKiAxMDA7XHJcbn07XHJcbi8qKlxyXG4gKiBTZXRzIHRoZSAncG9zaXRpb24nIHRyYW5zZm9ybSBmb3Igc2xpZGluZyBhbmltYXRpb25zXHJcbiAqIEBwYXJhbSBwb3NpdGlvblxyXG4gKiBAcGFyYW0gZm9yY2VSZWZsb3dcclxuICovXHJcblxyXG5cclxuZXhwb3J0cy5nZXRQb3NpdGlvbiA9IGdldFBvc2l0aW9uO1xyXG5cclxudmFyIHNldFBvc2l0aW9uID0gZnVuY3Rpb24gc2V0UG9zaXRpb24ocG9zaXRpb24sIGF4aXMpIHtcclxuICB2YXIgc3R5bGUgPSB7fTtcclxuICBbJ1dlYmtpdFRyYW5zZm9ybScsICdNb3pUcmFuc2Zvcm0nLCAnTXNUcmFuc2Zvcm0nLCAnT1RyYW5zZm9ybScsICd0cmFuc2Zvcm0nLCAnbXNUcmFuc2Zvcm0nXS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBzdHlsZVtwcm9wXSA9ICgwLCBfQ1NTVHJhbnNsYXRlLmRlZmF1bHQpKHBvc2l0aW9uLCAnJScsIGF4aXMpO1xyXG4gIH0pO1xyXG4gIHJldHVybiBzdHlsZTtcclxufTtcclxuXHJcbmV4cG9ydHMuc2V0UG9zaXRpb24gPSBzZXRQb3NpdGlvbjsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xyXG4gIHZhbHVlOiB0cnVlXHJcbn0pO1xyXG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XHJcblxyXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcclxuXHJcbnZhciBfY3NzQ2xhc3NlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2Nzc0NsYXNzZXNcIikpO1xyXG5cclxudmFyIF9kaW1lbnNpb25zID0gcmVxdWlyZShcIi4uL2RpbWVuc2lvbnNcIik7XHJcblxyXG52YXIgX0NTU1RyYW5zbGF0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL0NTU1RyYW5zbGF0ZVwiKSk7XHJcblxyXG52YXIgX3JlYWN0RWFzeVN3aXBlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3QtZWFzeS1zd2lwZVwiKSk7XHJcblxyXG52YXIgX3dpbmRvdyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoaW1zL3dpbmRvd1wiKSk7XHJcblxyXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxyXG5cclxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7IHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgcmV0dXJuIGNhY2hlOyB9OyByZXR1cm4gY2FjaGU7IH1cclxuXHJcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7IHJldHVybiB7IGRlZmF1bHQ6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpOyBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHsgcmV0dXJuIGNhY2hlLmdldChvYmopOyB9IHZhciBuZXdPYmogPSB7fTsgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsOyBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XHJcblxyXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XHJcblxyXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxyXG5cclxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cclxuXHJcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cclxuXHJcbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XHJcblxyXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxyXG5cclxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cclxuXHJcbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XHJcblxyXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XHJcblxyXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cclxuXHJcbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cclxuXHJcbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cclxuXHJcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XHJcblxyXG52YXIgaXNLZXlib2FyZEV2ZW50ID0gZnVuY3Rpb24gaXNLZXlib2FyZEV2ZW50KGUpIHtcclxuICByZXR1cm4gZS5oYXNPd25Qcm9wZXJ0eSgna2V5Jyk7XHJcbn07XHJcblxyXG52YXIgVGh1bWJzID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XHJcbiAgX2luaGVyaXRzKFRodW1icywgX0NvbXBvbmVudCk7XHJcblxyXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoVGh1bWJzKTtcclxuXHJcbiAgZnVuY3Rpb24gVGh1bWJzKF9wcm9wcykge1xyXG4gICAgdmFyIF90aGlzO1xyXG5cclxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUaHVtYnMpO1xyXG5cclxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgX3Byb3BzKTtcclxuXHJcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaXRlbXNXcmFwcGVyUmVmXCIsIHZvaWQgMCk7XHJcblxyXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIml0ZW1zTGlzdFJlZlwiLCB2b2lkIDApO1xyXG5cclxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJ0aHVtYnNSZWZcIiwgdm9pZCAwKTtcclxuXHJcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic2V0SXRlbXNXcmFwcGVyUmVmXCIsIGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgIF90aGlzLml0ZW1zV3JhcHBlclJlZiA9IG5vZGU7XHJcbiAgICB9KTtcclxuXHJcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic2V0SXRlbXNMaXN0UmVmXCIsIGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgIF90aGlzLml0ZW1zTGlzdFJlZiA9IG5vZGU7XHJcbiAgICB9KTtcclxuXHJcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic2V0VGh1bWJzUmVmXCIsIGZ1bmN0aW9uIChub2RlLCBpbmRleCkge1xyXG4gICAgICBpZiAoIV90aGlzLnRodW1ic1JlZikge1xyXG4gICAgICAgIF90aGlzLnRodW1ic1JlZiA9IFtdO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBfdGhpcy50aHVtYnNSZWZbaW5kZXhdID0gbm9kZTtcclxuICAgIH0pO1xyXG5cclxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJ1cGRhdGVTaXplc1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICghX3RoaXMucHJvcHMuY2hpbGRyZW4gfHwgIV90aGlzLml0ZW1zV3JhcHBlclJlZiB8fCAhX3RoaXMudGh1bWJzUmVmKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgdG90YWwgPSBfcmVhY3QuQ2hpbGRyZW4uY291bnQoX3RoaXMucHJvcHMuY2hpbGRyZW4pO1xyXG5cclxuICAgICAgdmFyIHdyYXBwZXJTaXplID0gX3RoaXMuaXRlbXNXcmFwcGVyUmVmLmNsaWVudFdpZHRoO1xyXG4gICAgICB2YXIgaXRlbVNpemUgPSBfdGhpcy5wcm9wcy50aHVtYldpZHRoID8gX3RoaXMucHJvcHMudGh1bWJXaWR0aCA6ICgwLCBfZGltZW5zaW9ucy5vdXRlcldpZHRoKShfdGhpcy50aHVtYnNSZWZbMF0pO1xyXG4gICAgICB2YXIgdmlzaWJsZUl0ZW1zID0gTWF0aC5mbG9vcih3cmFwcGVyU2l6ZSAvIGl0ZW1TaXplKTtcclxuICAgICAgdmFyIHNob3dBcnJvd3MgPSB2aXNpYmxlSXRlbXMgPCB0b3RhbDtcclxuICAgICAgdmFyIGxhc3RQb3NpdGlvbiA9IHNob3dBcnJvd3MgPyB0b3RhbCAtIHZpc2libGVJdGVtcyA6IDA7XHJcblxyXG4gICAgICBfdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAoX3N0YXRlLCBwcm9wcykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBpdGVtU2l6ZTogaXRlbVNpemUsXHJcbiAgICAgICAgICB2aXNpYmxlSXRlbXM6IHZpc2libGVJdGVtcyxcclxuICAgICAgICAgIGZpcnN0SXRlbTogc2hvd0Fycm93cyA/IF90aGlzLmdldEZpcnN0SXRlbShwcm9wcy5zZWxlY3RlZEl0ZW0pIDogMCxcclxuICAgICAgICAgIGxhc3RQb3NpdGlvbjogbGFzdFBvc2l0aW9uLFxyXG4gICAgICAgICAgc2hvd0Fycm93czogc2hvd0Fycm93c1xyXG4gICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImhhbmRsZUNsaWNrSXRlbVwiLCBmdW5jdGlvbiAoaW5kZXgsIGl0ZW0sIGUpIHtcclxuICAgICAgaWYgKCFpc0tleWJvYXJkRXZlbnQoZSkgfHwgZS5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICB2YXIgaGFuZGxlciA9IF90aGlzLnByb3BzLm9uU2VsZWN0SXRlbTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICBoYW5kbGVyKGluZGV4LCBpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvblN3aXBlU3RhcnRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgc3dpcGluZzogdHJ1ZVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvblN3aXBlRW5kXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHN3aXBpbmc6IGZhbHNlXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uU3dpcGVNb3ZlXCIsIGZ1bmN0aW9uIChkZWx0YSkge1xyXG4gICAgICB2YXIgZGVsdGFYID0gZGVsdGEueDtcclxuXHJcbiAgICAgIGlmICghX3RoaXMuc3RhdGUuaXRlbVNpemUgfHwgIV90aGlzLml0ZW1zV3JhcHBlclJlZiB8fCAhX3RoaXMuc3RhdGUudmlzaWJsZUl0ZW1zKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgbGVmdEJvdW5kYXJ5ID0gMDtcclxuXHJcbiAgICAgIHZhciBjaGlsZHJlbkxlbmd0aCA9IF9yZWFjdC5DaGlsZHJlbi5jb3VudChfdGhpcy5wcm9wcy5jaGlsZHJlbik7XHJcblxyXG4gICAgICB2YXIgY3VycmVudFBvc2l0aW9uID0gLShfdGhpcy5zdGF0ZS5maXJzdEl0ZW0gKiAxMDApIC8gX3RoaXMuc3RhdGUudmlzaWJsZUl0ZW1zO1xyXG4gICAgICB2YXIgbGFzdExlZnRJdGVtID0gTWF0aC5tYXgoY2hpbGRyZW5MZW5ndGggLSBfdGhpcy5zdGF0ZS52aXNpYmxlSXRlbXMsIDApO1xyXG4gICAgICB2YXIgbGFzdExlZnRCb3VuZGFyeSA9IC1sYXN0TGVmdEl0ZW0gKiAxMDAgLyBfdGhpcy5zdGF0ZS52aXNpYmxlSXRlbXM7IC8vIHByZXZlbnQgdXNlciBmcm9tIHN3aXBpbmcgbGVmdCBvdXQgb2YgYm91bmRhcmllc1xyXG5cclxuICAgICAgaWYgKGN1cnJlbnRQb3NpdGlvbiA9PT0gbGVmdEJvdW5kYXJ5ICYmIGRlbHRhWCA+IDApIHtcclxuICAgICAgICBkZWx0YVggPSAwO1xyXG4gICAgICB9IC8vIHByZXZlbnQgdXNlciBmcm9tIHN3aXBpbmcgcmlnaHQgb3V0IG9mIGJvdW5kYXJpZXNcclxuXHJcblxyXG4gICAgICBpZiAoY3VycmVudFBvc2l0aW9uID09PSBsYXN0TGVmdEJvdW5kYXJ5ICYmIGRlbHRhWCA8IDApIHtcclxuICAgICAgICBkZWx0YVggPSAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgd3JhcHBlclNpemUgPSBfdGhpcy5pdGVtc1dyYXBwZXJSZWYuY2xpZW50V2lkdGg7XHJcbiAgICAgIHZhciBwb3NpdGlvbiA9IGN1cnJlbnRQb3NpdGlvbiArIDEwMCAvICh3cmFwcGVyU2l6ZSAvIGRlbHRhWCk7IC8vIGlmIDNkIGlzbid0IGF2YWlsYWJsZSB3ZSB3aWxsIHVzZSBsZWZ0IHRvIG1vdmVcclxuXHJcbiAgICAgIGlmIChfdGhpcy5pdGVtc0xpc3RSZWYpIHtcclxuICAgICAgICBbJ1dlYmtpdFRyYW5zZm9ybScsICdNb3pUcmFuc2Zvcm0nLCAnTXNUcmFuc2Zvcm0nLCAnT1RyYW5zZm9ybScsICd0cmFuc2Zvcm0nLCAnbXNUcmFuc2Zvcm0nXS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XHJcbiAgICAgICAgICBfdGhpcy5pdGVtc0xpc3RSZWYuc3R5bGVbcHJvcF0gPSAoMCwgX0NTU1RyYW5zbGF0ZS5kZWZhdWx0KShwb3NpdGlvbiwgJyUnLCBfdGhpcy5wcm9wcy5heGlzKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic2xpZGVSaWdodFwiLCBmdW5jdGlvbiAocG9zaXRpb25zKSB7XHJcbiAgICAgIF90aGlzLm1vdmVUbyhfdGhpcy5zdGF0ZS5maXJzdEl0ZW0gLSAodHlwZW9mIHBvc2l0aW9ucyA9PT0gJ251bWJlcicgPyBwb3NpdGlvbnMgOiAxKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic2xpZGVMZWZ0XCIsIGZ1bmN0aW9uIChwb3NpdGlvbnMpIHtcclxuICAgICAgX3RoaXMubW92ZVRvKF90aGlzLnN0YXRlLmZpcnN0SXRlbSArICh0eXBlb2YgcG9zaXRpb25zID09PSAnbnVtYmVyJyA/IHBvc2l0aW9ucyA6IDEpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJtb3ZlVG9cIiwgZnVuY3Rpb24gKHBvc2l0aW9uKSB7XHJcbiAgICAgIC8vIHBvc2l0aW9uIGNhbid0IGJlIGxvd2VyIHRoYW4gMFxyXG4gICAgICBwb3NpdGlvbiA9IHBvc2l0aW9uIDwgMCA/IDAgOiBwb3NpdGlvbjsgLy8gcG9zaXRpb24gY2FuJ3QgYmUgaGlnaGVyIHRoYW4gbGFzdCBwb3N0aW9uXHJcblxyXG4gICAgICBwb3NpdGlvbiA9IHBvc2l0aW9uID49IF90aGlzLnN0YXRlLmxhc3RQb3NpdGlvbiA/IF90aGlzLnN0YXRlLmxhc3RQb3NpdGlvbiA6IHBvc2l0aW9uO1xyXG5cclxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGZpcnN0SXRlbTogcG9zaXRpb25cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBfdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc2VsZWN0ZWRJdGVtOiBfcHJvcHMuc2VsZWN0ZWRJdGVtLFxyXG4gICAgICBzd2lwaW5nOiBmYWxzZSxcclxuICAgICAgc2hvd0Fycm93czogZmFsc2UsXHJcbiAgICAgIGZpcnN0SXRlbTogMCxcclxuICAgICAgdmlzaWJsZUl0ZW1zOiAwLFxyXG4gICAgICBsYXN0UG9zaXRpb246IDBcclxuICAgIH07XHJcbiAgICByZXR1cm4gX3RoaXM7XHJcbiAgfVxyXG5cclxuICBfY3JlYXRlQ2xhc3MoVGh1bWJzLCBbe1xyXG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXHJcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgIHRoaXMuc2V0dXBUaHVtYnMoKTtcclxuICAgIH1cclxuICB9LCB7XHJcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXHJcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xyXG4gICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZEl0ZW0gIT09IHRoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBzZWxlY3RlZEl0ZW06IHRoaXMucHJvcHMuc2VsZWN0ZWRJdGVtLFxyXG4gICAgICAgICAgZmlyc3RJdGVtOiB0aGlzLmdldEZpcnN0SXRlbSh0aGlzLnByb3BzLnNlbGVjdGVkSXRlbSlcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMucHJvcHMuY2hpbGRyZW4gPT09IHByZXZQcm9wcy5jaGlsZHJlbikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfSAvLyBUaGlzIHdpbGwgY2FwdHVyZSBhbnkgc2l6ZSBjaGFuZ2VzIGZvciBhcnJvdyBhZGp1c3RtZW50cyBldGMuXHJcbiAgICAgIC8vIHVzdWFsbHkgaW4gdGhlIHNhbWUgcmVuZGVyIGN5Y2xlIHNvIHdlIGRvbid0IHNlZSBhbnkgZmxpY2tlcnNcclxuXHJcblxyXG4gICAgICB0aGlzLnVwZGF0ZVNpemVzKCk7XHJcbiAgICB9XHJcbiAgfSwge1xyXG4gICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXHJcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgIHRoaXMuZGVzdHJveVRodW1icygpO1xyXG4gICAgfVxyXG4gIH0sIHtcclxuICAgIGtleTogXCJzZXR1cFRodW1ic1wiLFxyXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldHVwVGh1bWJzKCkge1xyXG4gICAgICAvLyBhcyB0aGUgd2lkdGhzIGFyZSBjYWxjdWxhdGVkLCB3ZSBuZWVkIHRvIHJlc2l6ZVxyXG4gICAgICAvLyB0aGUgY2Fyb3VzZWwgd2hlbiB0aGUgd2luZG93IGlzIHJlc2l6ZWRcclxuICAgICAgKDAsIF93aW5kb3cuZGVmYXVsdCkoKS5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZVNpemVzKTsgLy8gaXNzdWUgIzIgLSBpbWFnZSBsb2FkaW5nIHNtYWxsZXJcclxuXHJcbiAgICAgICgwLCBfd2luZG93LmRlZmF1bHQpKCkuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHRoaXMudXBkYXRlU2l6ZXMpOyAvLyB3aGVuIHRoZSBjb21wb25lbnQgaXMgcmVuZGVyZWQgd2UgbmVlZCB0byBjYWxjdWxhdGVcclxuICAgICAgLy8gdGhlIGNvbnRhaW5lciBzaXplIHRvIGFkanVzdCB0aGUgcmVzcG9uc2l2ZSBiZWhhdmlvdXJcclxuXHJcbiAgICAgIHRoaXMudXBkYXRlU2l6ZXMoKTtcclxuICAgIH1cclxuICB9LCB7XHJcbiAgICBrZXk6IFwiZGVzdHJveVRodW1ic1wiLFxyXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3lUaHVtYnMoKSB7XHJcbiAgICAgIC8vIHJlbW92aW5nIGxpc3RlbmVyc1xyXG4gICAgICAoMCwgX3dpbmRvdy5kZWZhdWx0KSgpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMudXBkYXRlU2l6ZXMpO1xyXG4gICAgICAoMCwgX3dpbmRvdy5kZWZhdWx0KSgpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCB0aGlzLnVwZGF0ZVNpemVzKTtcclxuICAgIH1cclxuICB9LCB7XHJcbiAgICBrZXk6IFwiZ2V0Rmlyc3RJdGVtXCIsXHJcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Rmlyc3RJdGVtKHNlbGVjdGVkSXRlbSkge1xyXG4gICAgICB2YXIgZmlyc3RJdGVtID0gc2VsZWN0ZWRJdGVtO1xyXG5cclxuICAgICAgaWYgKHNlbGVjdGVkSXRlbSA+PSB0aGlzLnN0YXRlLmxhc3RQb3NpdGlvbikge1xyXG4gICAgICAgIGZpcnN0SXRlbSA9IHRoaXMuc3RhdGUubGFzdFBvc2l0aW9uO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoc2VsZWN0ZWRJdGVtIDwgdGhpcy5zdGF0ZS5maXJzdEl0ZW0gKyB0aGlzLnN0YXRlLnZpc2libGVJdGVtcykge1xyXG4gICAgICAgIGZpcnN0SXRlbSA9IHRoaXMuc3RhdGUuZmlyc3RJdGVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoc2VsZWN0ZWRJdGVtIDwgdGhpcy5zdGF0ZS5maXJzdEl0ZW0pIHtcclxuICAgICAgICBmaXJzdEl0ZW0gPSBzZWxlY3RlZEl0ZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBmaXJzdEl0ZW07XHJcbiAgICB9XHJcbiAgfSwge1xyXG4gICAga2V5OiBcInJlbmRlckl0ZW1zXCIsXHJcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVySXRlbXMoKSB7XHJcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uIChpbWcsIGluZGV4KSB7XHJcbiAgICAgICAgdmFyIGl0ZW1DbGFzcyA9IF9jc3NDbGFzc2VzLmRlZmF1bHQuSVRFTShmYWxzZSwgaW5kZXggPT09IF90aGlzMi5zdGF0ZS5zZWxlY3RlZEl0ZW0pO1xyXG5cclxuICAgICAgICB2YXIgdGh1bWJQcm9wcyA9IHtcclxuICAgICAgICAgIGtleTogaW5kZXgsXHJcbiAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpczIuc2V0VGh1bWJzUmVmKGUsIGluZGV4KTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjbGFzc05hbWU6IGl0ZW1DbGFzcyxcclxuICAgICAgICAgIG9uQ2xpY2s6IF90aGlzMi5oYW5kbGVDbGlja0l0ZW0uYmluZChfdGhpczIsIGluZGV4LCBfdGhpczIucHJvcHMuY2hpbGRyZW5baW5kZXhdKSxcclxuICAgICAgICAgIG9uS2V5RG93bjogX3RoaXMyLmhhbmRsZUNsaWNrSXRlbS5iaW5kKF90aGlzMiwgaW5kZXgsIF90aGlzMi5wcm9wcy5jaGlsZHJlbltpbmRleF0pLFxyXG4gICAgICAgICAgJ2FyaWEtbGFiZWwnOiBcIlwiLmNvbmNhdChfdGhpczIucHJvcHMubGFiZWxzLml0ZW0sIFwiIFwiKS5jb25jYXQoaW5kZXggKyAxKSxcclxuICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBfdGhpczIucHJvcHMudGh1bWJXaWR0aFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgX2V4dGVuZHMoe30sIHRodW1iUHJvcHMsIHtcclxuICAgICAgICAgIHJvbGU6IFwiYnV0dG9uXCIsXHJcbiAgICAgICAgICB0YWJJbmRleDogMFxyXG4gICAgICAgIH0pLCBpbWcpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LCB7XHJcbiAgICBrZXk6IFwicmVuZGVyXCIsXHJcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xyXG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcclxuXHJcbiAgICAgIGlmICghdGhpcy5wcm9wcy5jaGlsZHJlbikge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgaXNTd2lwZWFibGUgPSBfcmVhY3QuQ2hpbGRyZW4uY291bnQodGhpcy5wcm9wcy5jaGlsZHJlbikgPiAxOyAvLyBzaG93IGxlZnQgYXJyb3c/XHJcblxyXG4gICAgICB2YXIgaGFzUHJldiA9IHRoaXMuc3RhdGUuc2hvd0Fycm93cyAmJiB0aGlzLnN0YXRlLmZpcnN0SXRlbSA+IDA7IC8vIHNob3cgcmlnaHQgYXJyb3dcclxuXHJcbiAgICAgIHZhciBoYXNOZXh0ID0gdGhpcy5zdGF0ZS5zaG93QXJyb3dzICYmIHRoaXMuc3RhdGUuZmlyc3RJdGVtIDwgdGhpcy5zdGF0ZS5sYXN0UG9zaXRpb247IC8vIG9iaiB0byBob2xkIHRoZSB0cmFuc2Zvcm1hdGlvbnMgYW5kIHN0eWxlc1xyXG5cclxuICAgICAgdmFyIGl0ZW1MaXN0U3R5bGVzID0ge307XHJcbiAgICAgIHZhciBjdXJyZW50UG9zaXRpb24gPSAtdGhpcy5zdGF0ZS5maXJzdEl0ZW0gKiAodGhpcy5zdGF0ZS5pdGVtU2l6ZSB8fCAwKTtcclxuICAgICAgdmFyIHRyYW5zZm9ybVByb3AgPSAoMCwgX0NTU1RyYW5zbGF0ZS5kZWZhdWx0KShjdXJyZW50UG9zaXRpb24sICdweCcsIHRoaXMucHJvcHMuYXhpcyk7XHJcbiAgICAgIHZhciB0cmFuc2l0aW9uVGltZSA9IHRoaXMucHJvcHMudHJhbnNpdGlvblRpbWUgKyAnbXMnO1xyXG4gICAgICBpdGVtTGlzdFN0eWxlcyA9IHtcclxuICAgICAgICBXZWJraXRUcmFuc2Zvcm06IHRyYW5zZm9ybVByb3AsXHJcbiAgICAgICAgTW96VHJhbnNmb3JtOiB0cmFuc2Zvcm1Qcm9wLFxyXG4gICAgICAgIE1zVHJhbnNmb3JtOiB0cmFuc2Zvcm1Qcm9wLFxyXG4gICAgICAgIE9UcmFuc2Zvcm06IHRyYW5zZm9ybVByb3AsXHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm1Qcm9wLFxyXG4gICAgICAgIG1zVHJhbnNmb3JtOiB0cmFuc2Zvcm1Qcm9wLFxyXG4gICAgICAgIFdlYmtpdFRyYW5zaXRpb25EdXJhdGlvbjogdHJhbnNpdGlvblRpbWUsXHJcbiAgICAgICAgTW96VHJhbnNpdGlvbkR1cmF0aW9uOiB0cmFuc2l0aW9uVGltZSxcclxuICAgICAgICBNc1RyYW5zaXRpb25EdXJhdGlvbjogdHJhbnNpdGlvblRpbWUsXHJcbiAgICAgICAgT1RyYW5zaXRpb25EdXJhdGlvbjogdHJhbnNpdGlvblRpbWUsXHJcbiAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiB0cmFuc2l0aW9uVGltZSxcclxuICAgICAgICBtc1RyYW5zaXRpb25EdXJhdGlvbjogdHJhbnNpdGlvblRpbWVcclxuICAgICAgfTtcclxuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcclxuICAgICAgICBjbGFzc05hbWU6IF9jc3NDbGFzc2VzLmRlZmF1bHQuQ0FST1VTRUwoZmFsc2UpXHJcbiAgICAgIH0sIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcclxuICAgICAgICBjbGFzc05hbWU6IF9jc3NDbGFzc2VzLmRlZmF1bHQuV1JBUFBFUihmYWxzZSksXHJcbiAgICAgICAgcmVmOiB0aGlzLnNldEl0ZW1zV3JhcHBlclJlZlxyXG4gICAgICB9LCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XHJcbiAgICAgICAgdHlwZTogXCJidXR0b25cIixcclxuICAgICAgICBjbGFzc05hbWU6IF9jc3NDbGFzc2VzLmRlZmF1bHQuQVJST1dfUFJFVighaGFzUHJldiksXHJcbiAgICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcclxuICAgICAgICAgIHJldHVybiBfdGhpczMuc2xpZGVSaWdodCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJhcmlhLWxhYmVsXCI6IHRoaXMucHJvcHMubGFiZWxzLmxlZnRBcnJvd1xyXG4gICAgICB9KSwgaXNTd2lwZWFibGUgPyAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3RFYXN5U3dpcGUuZGVmYXVsdCwge1xyXG4gICAgICAgIHRhZ05hbWU6IFwidWxcIixcclxuICAgICAgICBjbGFzc05hbWU6IF9jc3NDbGFzc2VzLmRlZmF1bHQuU0xJREVSKGZhbHNlLCB0aGlzLnN0YXRlLnN3aXBpbmcpLFxyXG4gICAgICAgIG9uU3dpcGVMZWZ0OiB0aGlzLnNsaWRlTGVmdCxcclxuICAgICAgICBvblN3aXBlUmlnaHQ6IHRoaXMuc2xpZGVSaWdodCxcclxuICAgICAgICBvblN3aXBlTW92ZTogdGhpcy5vblN3aXBlTW92ZSxcclxuICAgICAgICBvblN3aXBlU3RhcnQ6IHRoaXMub25Td2lwZVN0YXJ0LFxyXG4gICAgICAgIG9uU3dpcGVFbmQ6IHRoaXMub25Td2lwZUVuZCxcclxuICAgICAgICBzdHlsZTogaXRlbUxpc3RTdHlsZXMsXHJcbiAgICAgICAgaW5uZXJSZWY6IHRoaXMuc2V0SXRlbXNMaXN0UmVmLFxyXG4gICAgICAgIGFsbG93TW91c2VFdmVudHM6IHRoaXMucHJvcHMuZW11bGF0ZVRvdWNoXHJcbiAgICAgIH0sIHRoaXMucmVuZGVySXRlbXMoKSkgOiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInVsXCIsIHtcclxuICAgICAgICBjbGFzc05hbWU6IF9jc3NDbGFzc2VzLmRlZmF1bHQuU0xJREVSKGZhbHNlLCB0aGlzLnN0YXRlLnN3aXBpbmcpLFxyXG4gICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKG5vZGUpIHtcclxuICAgICAgICAgIHJldHVybiBfdGhpczMuc2V0SXRlbXNMaXN0UmVmKG5vZGUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3R5bGU6IGl0ZW1MaXN0U3R5bGVzXHJcbiAgICAgIH0sIHRoaXMucmVuZGVySXRlbXMoKSksIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcclxuICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxyXG4gICAgICAgIGNsYXNzTmFtZTogX2Nzc0NsYXNzZXMuZGVmYXVsdC5BUlJPV19ORVhUKCFoYXNOZXh0KSxcclxuICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xyXG4gICAgICAgICAgcmV0dXJuIF90aGlzMy5zbGlkZUxlZnQoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiYXJpYS1sYWJlbFwiOiB0aGlzLnByb3BzLmxhYmVscy5yaWdodEFycm93XHJcbiAgICAgIH0pKSk7XHJcbiAgICB9XHJcbiAgfV0pO1xyXG5cclxuICByZXR1cm4gVGh1bWJzO1xyXG59KF9yZWFjdC5Db21wb25lbnQpO1xyXG5cclxuZXhwb3J0cy5kZWZhdWx0ID0gVGh1bWJzO1xyXG5cclxuX2RlZmluZVByb3BlcnR5KFRodW1icywgXCJkaXNwbGF5TmFtZVwiLCAnVGh1bWJzJyk7XHJcblxyXG5fZGVmaW5lUHJvcGVydHkoVGh1bWJzLCBcImRlZmF1bHRQcm9wc1wiLCB7XHJcbiAgYXhpczogJ2hvcml6b250YWwnLFxyXG4gIGxhYmVsczoge1xyXG4gICAgbGVmdEFycm93OiAncHJldmlvdXMgc2xpZGUgLyBpdGVtJyxcclxuICAgIHJpZ2h0QXJyb3c6ICduZXh0IHNsaWRlIC8gaXRlbScsXHJcbiAgICBpdGVtOiAnc2xpZGUgaXRlbSdcclxuICB9LFxyXG4gIHNlbGVjdGVkSXRlbTogMCxcclxuICB0aHVtYldpZHRoOiA4MCxcclxuICB0cmFuc2l0aW9uVGltZTogMzUwXHJcbn0pOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XHJcbiAgdmFsdWU6IHRydWVcclxufSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcclxuXHJcbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xyXG5cclxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cclxuXHJcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XHJcblxyXG52YXIgX2RlZmF1bHQgPSB7XHJcbiAgUk9PVDogZnVuY3Rpb24gUk9PVChjdXN0b21DbGFzc05hbWUpIHtcclxuICAgIHJldHVybiAoMCwgX2NsYXNzbmFtZXMuZGVmYXVsdCkoX2RlZmluZVByb3BlcnR5KHtcclxuICAgICAgJ2Nhcm91c2VsLXJvb3QnOiB0cnVlXHJcbiAgICB9LCBjdXN0b21DbGFzc05hbWUgfHwgJycsICEhY3VzdG9tQ2xhc3NOYW1lKSk7XHJcbiAgfSxcclxuICBDQVJPVVNFTDogZnVuY3Rpb24gQ0FST1VTRUwoaXNTbGlkZXIpIHtcclxuICAgIHJldHVybiAoMCwgX2NsYXNzbmFtZXMuZGVmYXVsdCkoe1xyXG4gICAgICBjYXJvdXNlbDogdHJ1ZSxcclxuICAgICAgJ2Nhcm91c2VsLXNsaWRlcic6IGlzU2xpZGVyXHJcbiAgICB9KTtcclxuICB9LFxyXG4gIFdSQVBQRVI6IGZ1bmN0aW9uIFdSQVBQRVIoaXNTbGlkZXIsIGF4aXMpIHtcclxuICAgIHJldHVybiAoMCwgX2NsYXNzbmFtZXMuZGVmYXVsdCkoe1xyXG4gICAgICAndGh1bWJzLXdyYXBwZXInOiAhaXNTbGlkZXIsXHJcbiAgICAgICdzbGlkZXItd3JhcHBlcic6IGlzU2xpZGVyLFxyXG4gICAgICAnYXhpcy1ob3Jpem9udGFsJzogYXhpcyA9PT0gJ2hvcml6b250YWwnLFxyXG4gICAgICAnYXhpcy12ZXJ0aWNhbCc6IGF4aXMgIT09ICdob3Jpem9udGFsJ1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBTTElERVI6IGZ1bmN0aW9uIFNMSURFUihpc1NsaWRlciwgaXNTd2lwaW5nKSB7XHJcbiAgICByZXR1cm4gKDAsIF9jbGFzc25hbWVzLmRlZmF1bHQpKHtcclxuICAgICAgdGh1bWJzOiAhaXNTbGlkZXIsXHJcbiAgICAgIHNsaWRlcjogaXNTbGlkZXIsXHJcbiAgICAgIGFuaW1hdGVkOiAhaXNTd2lwaW5nXHJcbiAgICB9KTtcclxuICB9LFxyXG4gIElURU06IGZ1bmN0aW9uIElURU0oaXNTbGlkZXIsIHNlbGVjdGVkLCBwcmV2aW91cykge1xyXG4gICAgcmV0dXJuICgwLCBfY2xhc3NuYW1lcy5kZWZhdWx0KSh7XHJcbiAgICAgIHRodW1iOiAhaXNTbGlkZXIsXHJcbiAgICAgIHNsaWRlOiBpc1NsaWRlcixcclxuICAgICAgc2VsZWN0ZWQ6IHNlbGVjdGVkLFxyXG4gICAgICBwcmV2aW91czogcHJldmlvdXNcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgQVJST1dfUFJFVjogZnVuY3Rpb24gQVJST1dfUFJFVihkaXNhYmxlZCkge1xyXG4gICAgcmV0dXJuICgwLCBfY2xhc3NuYW1lcy5kZWZhdWx0KSh7XHJcbiAgICAgICdjb250cm9sLWFycm93IGNvbnRyb2wtcHJldic6IHRydWUsXHJcbiAgICAgICdjb250cm9sLWRpc2FibGVkJzogZGlzYWJsZWRcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgQVJST1dfTkVYVDogZnVuY3Rpb24gQVJST1dfTkVYVChkaXNhYmxlZCkge1xyXG4gICAgcmV0dXJuICgwLCBfY2xhc3NuYW1lcy5kZWZhdWx0KSh7XHJcbiAgICAgICdjb250cm9sLWFycm93IGNvbnRyb2wtbmV4dCc6IHRydWUsXHJcbiAgICAgICdjb250cm9sLWRpc2FibGVkJzogZGlzYWJsZWRcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgRE9UOiBmdW5jdGlvbiBET1Qoc2VsZWN0ZWQpIHtcclxuICAgIHJldHVybiAoMCwgX2NsYXNzbmFtZXMuZGVmYXVsdCkoe1xyXG4gICAgICBkb3Q6IHRydWUsXHJcbiAgICAgIHNlbGVjdGVkOiBzZWxlY3RlZFxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xyXG4gIHZhbHVlOiB0cnVlXHJcbn0pO1xyXG5leHBvcnRzLm91dGVyV2lkdGggPSB2b2lkIDA7XHJcblxyXG52YXIgb3V0ZXJXaWR0aCA9IGZ1bmN0aW9uIG91dGVyV2lkdGgoZWwpIHtcclxuICB2YXIgd2lkdGggPSBlbC5vZmZzZXRXaWR0aDtcclxuICB2YXIgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsKTtcclxuICB3aWR0aCArPSBwYXJzZUludChzdHlsZS5tYXJnaW5MZWZ0KSArIHBhcnNlSW50KHN0eWxlLm1hcmdpblJpZ2h0KTtcclxuICByZXR1cm4gd2lkdGg7XHJcbn07XHJcblxyXG5leHBvcnRzLm91dGVyV2lkdGggPSBvdXRlcldpZHRoOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XHJcbiAgdmFsdWU6IHRydWVcclxufSk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkNhcm91c2VsXCIsIHtcclxuICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xyXG4gICAgcmV0dXJuIF9DYXJvdXNlbC5kZWZhdWx0O1xyXG4gIH1cclxufSk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkNhcm91c2VsUHJvcHNcIiwge1xyXG4gIGVudW1lcmFibGU6IHRydWUsXHJcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XHJcbiAgICByZXR1cm4gX3R5cGVzLkNhcm91c2VsUHJvcHM7XHJcbiAgfVxyXG59KTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiVGh1bWJzXCIsIHtcclxuICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xyXG4gICAgcmV0dXJuIF9UaHVtYnMuZGVmYXVsdDtcclxuICB9XHJcbn0pO1xyXG5cclxudmFyIF9DYXJvdXNlbCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vY29tcG9uZW50cy9DYXJvdXNlbFwiKSk7XHJcblxyXG52YXIgX3R5cGVzID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9DYXJvdXNlbC90eXBlc1wiKTtcclxuXHJcbnZhciBfVGh1bWJzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9jb21wb25lbnRzL1RodW1ic1wiKSk7XHJcblxyXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfSIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XHJcbiAgdmFsdWU6IHRydWVcclxufSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcclxuXHJcbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIF9kZWZhdWx0KCkge1xyXG4gIHJldHVybiBkb2N1bWVudDtcclxufTtcclxuXHJcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XHJcbiAgdmFsdWU6IHRydWVcclxufSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcclxuXHJcbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIF9kZWZhdWx0KCkge1xyXG4gIHJldHVybiB3aW5kb3c7XHJcbn07XHJcblxyXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4IH0gZnJvbSBcInRoZW1lLXVpXCI7XHJcbmltcG9ydCB7IENvbnRhaW5lcn0gZnJvbSBcInRoZW1lLXVpXCI7XHJcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gXCJjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyXCI7XHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsJztcclxuXHJcbmNvbnN0IHJlc3BvbnNpdmUgPSB7XHJcbiAgZGVza3RvcDoge1xyXG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDMwMDAsIG1pbjogMTAyNCB9LFxyXG4gICAgaXRlbXM6IDMsXHJcbiAgICBzbGlkZXNUb1NsaWRlOiAzIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXHJcbiAgfSxcclxuICB0YWJsZXQ6IHtcclxuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAxMDI0LCBtaW46IDQ2NCB9LFxyXG4gICAgaXRlbXM6IDIsXHJcbiAgICBzbGlkZXNUb1NsaWRlOiAyIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXHJcbiAgfSxcclxuICBtb2JpbGU6IHtcclxuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA0NjQsIG1pbjogMCB9LFxyXG4gICAgaXRlbXM6IDEsXHJcbiAgICBzbGlkZXNUb1NsaWRlOiAxIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXHJcbiAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gRmVhdHVyZSh7ZGF0YX0pIHtcclxuICBjb25zdCBpbWFnZXMgPSBkYXRhLmRhdGE7XHJcbiAgLy8gY29uc29sZS5sb2coXCJwcm9wczpcXG5cIiwgZGF0YSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIHN4PXt7IHZhcmlhbnQ6IFwic2VjdGlvbi5mZWF0dXJlXCIgfX0gaWQ9XCJnYWxsZXJ5XCI+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFNlY3Rpb25IZWFkZXJcclxuICAgICAgICAgIHNsb2dhbj1cIlJlY2VudCB3b3Jrc1wiXHJcbiAgICAgICAgICB0aXRsZT1cIkhlcmUgYXJlIHNvbWUgZXhhbXBsZXMgb2Ygb3VyIHdvcmshXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxDYXJvdXNlbCBcclxuICAgICAgICByZXNwb25zaXZlPXtyZXNwb25zaXZlfVxyXG4gICAgICAgIGludGVydmFsPXszMDAwfVxyXG4gICAgICAgIGF1dG9QbGF5PXt0cnVlfVxyXG4gICAgICAgIGluZmluaXRlTG9vcCA9IHt0cnVlfVxyXG5cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtpbWFnZXMgJiYgaW1hZ2VzLm1hcCgoaW1hZ2UpID0+IChcclxuICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0ID1cIl9ibGFua1wiIGhyZWY9e2ltYWdlLnBlcm1hbGlua30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW1hZ2VzLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD0gXCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZS5tZWRpYV91cmx9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=