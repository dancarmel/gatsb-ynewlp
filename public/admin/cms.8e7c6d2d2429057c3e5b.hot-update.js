webpackHotUpdate("cms",{

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/react-scrollspy/lib/scrollspy.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-scrollspy/lib/scrollspy.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _throttle = _interopRequireDefault(__webpack_require__(/*! ./throttle */ "./node_modules/react-scrollspy/lib/throttle.js"));

function isEqualArray(a, b) {
  return a.length === b.length && a.every(function (item, index) {
    return item === b[index];
  });
}

var Scrollspy =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Scrollspy, _React$Component);
  (0, _createClass2.default)(Scrollspy, null, [{
    key: "propTypes",
    get: function get() {
      return {
        items: _propTypes.default.arrayOf(_propTypes.default.string).isRequired,
        currentClassName: _propTypes.default.string.isRequired,
        scrolledPastClassName: _propTypes.default.string,
        style: _propTypes.default.object,
        componentTag: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
        offset: _propTypes.default.number,
        rootEl: _propTypes.default.string,
        onUpdate: _propTypes.default.func
      };
    }
  }, {
    key: "defaultProps",
    get: function get() {
      return {
        items: [],
        currentClassName: '',
        style: {},
        componentTag: 'ul',
        offset: 0,
        onUpdate: function onUpdate() {}
      };
    }
  }]);

  function Scrollspy(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Scrollspy);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Scrollspy).call(this, props));
    _this.state = {
      targetItems: [],
      inViewState: [],
      isScrolledPast: [] // manually bind as ES6 does not apply this
      // auto binding as React.createClass does

    };
    _this._handleSpy = _this._handleSpy.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(Scrollspy, [{
    key: "_initSpyTarget",
    value: function _initSpyTarget(items) {
      var targetItems = items.map(function (item) {
        return document.getElementById(item);
      });
      return targetItems;
    } // https://github.com/makotot/react-scrollspy/pull/45

  }, {
    key: "_fillArray",
    value: function _fillArray(array, val) {
      var newArray = [];

      for (var i = 0, max = array.length; i < max; i++) {
        newArray[i] = val;
      }

      return newArray;
    }
  }, {
    key: "_isScrolled",
    value: function _isScrolled() {
      return this._getScrollDimension().scrollTop > 0;
    }
  }, {
    key: "_getScrollDimension",
    value: function _getScrollDimension() {
      var doc = document;
      var rootEl = this.props.rootEl;
      var scrollTop = rootEl ? doc.querySelector(rootEl).scrollTop : doc.documentElement.scrollTop || doc.body.parentNode.scrollTop || doc.body.scrollTop;
      var scrollHeight = rootEl ? doc.querySelector(rootEl).scrollHeight : doc.documentElement.scrollHeight || doc.body.parentNode.scrollHeight || doc.body.scrollHeight;
      return {
        scrollTop: scrollTop,
        scrollHeight: scrollHeight
      };
    }
  }, {
    key: "_getElemsViewState",
    value: function _getElemsViewState(targets) {
      var elemsInView = [];
      var elemsOutView = [];
      var viewStatusList = [];
      var targetItems = targets ? targets : this.state.targetItems;
      var hasInViewAlready = false;

      for (var i = 0, max = targetItems.length; i < max; i++) {
        var currentContent = targetItems[i];
        var isInView = hasInViewAlready ? false : this._isInView(currentContent);

        if (isInView) {
          hasInViewAlready = true;
          elemsInView.push(currentContent);
        } else {
          elemsOutView.push(currentContent);
        }

        var isLastItem = i === max - 1;

        var isScrolled = this._isScrolled(); // https://github.com/makotot/react-scrollspy/pull/26#issue-167413769


        var isLastShortItemAtBottom = this._isAtBottom() && this._isInView(currentContent) && !isInView && isLastItem && isScrolled;

        if (isLastShortItemAtBottom) {
          elemsOutView.pop();
          elemsOutView.push.apply(elemsOutView, (0, _toConsumableArray2.default)(elemsInView));
          elemsInView = [currentContent];
          viewStatusList = this._fillArray(viewStatusList, false);
          isInView = true;
        }

        viewStatusList.push(isInView);
      }

      return {
        inView: elemsInView,
        outView: elemsOutView,
        viewStatusList: viewStatusList,
        scrolledPast: this.props.scrolledPastClassName && this._getScrolledPast(viewStatusList)
      };
    }
  }, {
    key: "_isInView",
    value: function _isInView(el) {
      if (!el) {
        return false;
      }

      var _this$props = this.props,
          rootEl = _this$props.rootEl,
          offset = _this$props.offset;
      var rootRect;

      if (rootEl) {
        rootRect = document.querySelector(rootEl).getBoundingClientRect();
      }

      var rect = el.getBoundingClientRect();
      var winH = rootEl ? rootRect.height : window.innerHeight;

      var _this$_getScrollDimen = this._getScrollDimension(),
          scrollTop = _this$_getScrollDimen.scrollTop;

      var scrollBottom = scrollTop + winH;
      var elTop = rootEl ? rect.top + scrollTop - rootRect.top + offset : rect.top + scrollTop + offset;
      var elBottom = elTop + el.offsetHeight;
      return elTop < scrollBottom && elBottom > scrollTop;
    }
  }, {
    key: "_isAtBottom",
    value: function _isAtBottom() {
      var rootEl = this.props.rootEl;

      var _this$_getScrollDimen2 = this._getScrollDimension(),
          scrollTop = _this$_getScrollDimen2.scrollTop,
          scrollHeight = _this$_getScrollDimen2.scrollHeight;

      var winH = rootEl ? document.querySelector(rootEl).getBoundingClientRect().height : window.innerHeight;
      var scrolledToBottom = scrollTop + winH >= scrollHeight;
      return scrolledToBottom;
    }
  }, {
    key: "_getScrolledPast",
    value: function _getScrolledPast(viewStatusList) {
      if (!viewStatusList.some(function (item) {
        return item;
      })) {
        return viewStatusList;
      }

      var hasFoundInView = false;
      var scrolledPastItems = viewStatusList.map(function (item) {
        if (item && !hasFoundInView) {
          hasFoundInView = true;
          return false;
        }

        return !hasFoundInView;
      });
      return scrolledPastItems;
    }
  }, {
    key: "_spy",
    value: function _spy(targets) {
      var _this2 = this;

      var elemensViewState = this._getElemsViewState(targets);

      var currentStatuses = this.state.inViewState;
      this.setState({
        inViewState: elemensViewState.viewStatusList,
        isScrolledPast: elemensViewState.scrolledPast
      }, function () {
        _this2._update(currentStatuses);
      });
    }
  }, {
    key: "_update",
    value: function _update(prevStatuses) {
      if (isEqualArray(this.state.inViewState, prevStatuses)) {
        return;
      }

      this.props.onUpdate(this.state.targetItems[this.state.inViewState.indexOf(true)]);
    }
  }, {
    key: "_handleSpy",
    value: function _handleSpy() {
      (0, _throttle.default)(this._spy(), 100);
    }
  }, {
    key: "_initFromProps",
    value: function _initFromProps() {
      var targetItems = this._initSpyTarget(this.props.items);

      this.setState({
        targetItems: targetItems
      });

      this._spy(targetItems);
    }
  }, {
    key: "offEvent",
    value: function offEvent() {
      var el = this.props.rootEl ? document.querySelector(this.props.rootEl) : window;
      el.removeEventListener('scroll', this._handleSpy);
    }
  }, {
    key: "onEvent",
    value: function onEvent() {
      var el = this.props.rootEl ? document.querySelector(this.props.rootEl) : window;
      el.addEventListener('scroll', this._handleSpy);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this._initFromProps();

      this.onEvent();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.offEvent();
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps() {
      this._initFromProps();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var Tag = this.props.componentTag;
      var _this$props2 = this.props,
          children = _this$props2.children,
          className = _this$props2.className,
          scrolledPastClassName = _this$props2.scrolledPastClassName,
          style = _this$props2.style;
      var counter = 0;

      var items = _react.default.Children.map(children, function (child, idx) {
        var _classNames;

        if (!child) {
          return null;
        }

        var ChildTag = child.type;
        var isScrolledPast = scrolledPastClassName && _this3.state.isScrolledPast[idx];
        var childClass = (0, _classnames.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(child.props.className), child.props.className), (0, _defineProperty2.default)(_classNames, "".concat(_this3.props.currentClassName), _this3.state.inViewState[idx]), (0, _defineProperty2.default)(_classNames, "".concat(_this3.props.scrolledPastClassName), isScrolledPast), _classNames));
        return _react.default.createElement(ChildTag, (0, _extends2.default)({}, child.props, {
          className: childClass,
          key: counter++
        }), child.props.children);
      });

      var itemClass = (0, _classnames.default)((0, _defineProperty2.default)({}, "".concat(className), className));
      return _react.default.createElement(Tag, {
        className: itemClass,
        style: style
      }, items);
    }
  }]);
  return Scrollspy;
}(_react.default.Component);

exports.default = Scrollspy;

/***/ }),

/***/ "./node_modules/react-scrollspy/lib/throttle.js":
/*!******************************************************!*\
  !*** ./node_modules/react-scrollspy/lib/throttle.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var throttle = function throttle(fn) {
  var threshold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var last;
  var timer;
  return function () {
    var now = +new Date();
    var timePassed = !!last && now < last + threshold;

    if (timePassed) {
      clearTimeout(timer);
      timer = setTimeout(function () {
        last = now;
        fn();
      }, threshold);
    } else {
      last = now;
      fn();
    }
  };
};

var _default = throttle;
exports.default = _default;

/***/ }),

/***/ "./src/templates/index-page.js":
/*!*************************************!*\
  !*** ./src/templates/index-page.js ***!
  \*************************************/
/*! exports provided: IndexPageTemplate, default, pageQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPageTemplate", function() { return IndexPageTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.string.link */ "./node_modules/core-js/modules/es6.string.link.js");
/* harmony import */ var core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _components_Features_Features__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Features/Features */ "./src/components/Features/Features.js");
/* harmony import */ var _components_Blog_BlogRoll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Blog/BlogRoll */ "./src/components/Blog/BlogRoll.js");
/* harmony import */ var _components_Subscribe_subscribe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Subscribe/subscribe */ "./src/components/Subscribe/subscribe.js");
/* harmony import */ var _components_Specialties_specialties__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Specialties/specialties */ "./src/components/Specialties/specialties.js");
/* harmony import */ var _components_Whyus_whyus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Whyus/whyus */ "./src/components/Whyus/whyus.js");
/* harmony import */ var _components_Video_video__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Video/video */ "./src/components/Video/video.js");
/* harmony import */ var _components_Features_mid_features__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Features-mid/features */ "./src/components/Features-mid/features.js");
/* harmony import */ var _components_Features_mid_sec_features__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Features-mid-sec/features */ "./src/components/Features-mid-sec/features.js");
/* harmony import */ var _components_Testimonials_testimonials__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Testimonials/testimonials */ "./src/components/Testimonials/testimonials.js");
/* harmony import */ var _components_Pricing_pricing__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Pricing/pricing */ "./src/components/Pricing/pricing.js");
/* harmony import */ var _components_Team_team__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Team/team */ "./src/components/Team/team.js");
/* harmony import */ var _components_Download_download__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Download/download */ "./src/components/Download/download.js");
/* harmony import */ var _components_Start_start__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/Start/start */ "./src/components/Start/start.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/Navbar */ "./src/components/Navbar.js");
/* harmony import */ var _components_Particle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/Particle */ "./src/components/Particle/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-loadable */ "./node_modules/react-loadable/lib/index.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react_scrollspy__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-scrollspy */ "./node_modules/react-scrollspy/lib/scrollspy.js");
/* harmony import */ var react_scrollspy__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react_scrollspy__WEBPACK_IMPORTED_MODULE_22__);

var _jsxFileName = "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\src\\templates\\index-page.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
























var loader = function loader() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Loading...");
};

var Previews = react_loadable__WEBPACK_IMPORTED_MODULE_21___default()({
  loader: function loader() {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ../components/Previews/previews */ "./src/components/Previews/previews.js"));
  },
  loading: loader
});
var IndexPageTemplate = function IndexPageTemplate(_ref) {
  var image = _ref.image,
      title = _ref.title,
      heading = _ref.heading,
      subheading = _ref.subheading,
      leftlink = _ref.leftlink,
      leftcaption = _ref.leftcaption,
      rightlink = _ref.rightlink,
      rightcaption = _ref.rightcaption,
      intro = _ref.intro,
      specialtiesintro = _ref.specialtiesintro,
      whyusintro = _ref.whyusintro,
      videointro = _ref.videointro,
      featuresoneintro = _ref.featuresoneintro,
      featurestwointro = _ref.featurestwointro,
      testimonialintro = _ref.testimonialintro,
      teamintro = _ref.teamintro,
      downloadintro = _ref.downloadintro,
      pricing = _ref.pricing,
      previewsintro = _ref.previewsintro;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    className: "bg-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Particle__WEBPACK_IMPORTED_MODULE_19__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_18__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "banner-block pb-0",
    id: "banner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "text-center ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    style: {
      color: 'white'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "lead",
    style: {
      color: 'white'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, subheading), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ButtonToolbar"], {
    className: "button-toolbar pr-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: leftlink,
    className: "btn btn-light btn-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, leftcaption), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: rightlink,
    className: "btn btn-outline-light btn-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, rightcaption)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_20___default.a, {
    fluid: image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "effectiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "svg",
    src: "img/bg.svg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Features_Features__WEBPACK_IMPORTED_MODULE_5__["default"], {
    heading: intro.heading,
    subheading: intro.subheading,
    gridItems: intro.blurbs,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Subscribe_subscribe__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Specialties_specialties__WEBPACK_IMPORTED_MODULE_8__["default"], {
    heading: specialtiesintro.heading,
    discription: specialtiesintro.description,
    image: specialtiesintro.image.childImageSharp.fluid.src,
    gridItems: specialtiesintro.specialtiesblurbs,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Whyus_whyus__WEBPACK_IMPORTED_MODULE_9__["default"], {
    heading: whyusintro.heading,
    subheading: whyusintro.subheading,
    gridItems: whyusintro.whyusblurbs,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Video_video__WEBPACK_IMPORTED_MODULE_10__["default"], {
    heading: videointro.heading,
    subheading: videointro.subheading,
    video: videointro.videoid,
    image: videointro.image.childImageSharp.fluid.src,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Features_mid_features__WEBPACK_IMPORTED_MODULE_11__["default"], {
    heading: featuresoneintro.heading,
    description: featuresoneintro.description,
    caption: featuresoneintro.caption,
    link: featuresoneintro.link,
    image: featuresoneintro.image.childImageSharp.fluid.src,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Features_mid_sec_features__WEBPACK_IMPORTED_MODULE_12__["default"], {
    heading: featurestwointro.heading,
    description: featurestwointro.description,
    caption: featurestwointro.caption,
    link: featurestwointro.link,
    image: featurestwointro.image.childImageSharp.fluid.src,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Previews, {
    heading: previewsintro.heading,
    subheading: previewsintro.subheading,
    gridItems: previewsintro.previewblurbs,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Testimonials_testimonials__WEBPACK_IMPORTED_MODULE_13__["default"], {
    heading: testimonialintro.heading,
    subheading: testimonialintro.subheading,
    gridItems: testimonialintro.testimonialblurbs,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Pricing_pricing__WEBPACK_IMPORTED_MODULE_14__["default"], {
    data: pricing.plans,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Team_team__WEBPACK_IMPORTED_MODULE_15__["default"], {
    heading: teamintro.heading,
    subheading: teamintro.subheading,
    gridItems: teamintro.teamblurbs,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Blog_BlogRoll__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Download_download__WEBPACK_IMPORTED_MODULE_16__["default"], {
    heading: downloadintro.heading,
    subheading: downloadintro.subheading,
    text: downloadintro.text,
    caption: downloadintro.caption,
    link: downloadintro.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Start_start__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }));
};
IndexPageTemplate.propTypes = {
  image: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  heading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  subheading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  specialheading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  leftlink: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  leftcaption: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  rightlink: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  rightcaption: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  intro: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    blurbs: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array
  }),
  specialtiesintro: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    specialtiesblurbs: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array
  }),
  whyusintro: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    whyusblurbs: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array
  }),
  videointro: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  featuresoneintro: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  featurestwointro: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  testimonialintro: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    testimonialblurbs: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array
  }),
  teamintro: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    teamblurbs: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array
  }),
  downloadintro: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  pricing: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    heading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    plans: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array
  })
};

var IndexPage = function IndexPage(_ref2) {
  var data = _ref2.data;
  var frontmatter = data.markdownRemark.frontmatter;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IndexPageTemplate, {
    image: frontmatter.image.childImageSharp.fluid,
    title: frontmatter.title,
    subheading: frontmatter.subheading,
    leftlink: frontmatter.leftlink,
    leftcaption: frontmatter.leftcaption,
    rightlink: frontmatter.rightlink,
    rightcaption: frontmatter.rightcaption,
    intro: frontmatter.intro,
    specialtiesintro: frontmatter.specialtiesintro,
    whyusintro: frontmatter.whyusintro,
    videointro: frontmatter.videointro,
    featuresoneintro: frontmatter.featuresoneintro,
    featurestwointro: frontmatter.featurestwointro,
    testimonialintro: frontmatter.testimonialintro,
    teamintro: frontmatter.teamintro,
    downloadintro: frontmatter.downloadintro,
    pricing: frontmatter.pricing,
    previewsintro: frontmatter.previewsintro,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }));
};

IndexPage.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    markdownRemark: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
      frontmatter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
    })
  })
};
var _default = IndexPage;
/* harmony default export */ __webpack_exports__["default"] = (_default);
var pageQuery = "3693324020";
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(loader, "loader", "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\src\\templates\\index-page.js");
  reactHotLoader.register(Previews, "Previews", "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\src\\templates\\index-page.js");
  reactHotLoader.register(IndexPageTemplate, "IndexPageTemplate", "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\src\\templates\\index-page.js");
  reactHotLoader.register(IndexPage, "IndexPage", "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\src\\templates\\index-page.js");
  reactHotLoader.register(pageQuery, "pageQuery", "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\src\\templates\\index-page.js");
  reactHotLoader.register(_default, "default", "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\src\\templates\\index-page.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.8e7c6d2d2429057c3e5b.hot-update.js.map