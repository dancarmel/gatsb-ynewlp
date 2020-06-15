webpackHotUpdate("cms",{

/***/ "./node_modules/core-js/modules/es6.array.find-index.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find-index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $find = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")(KEY);


/***/ }),

/***/ "./node_modules/gatsby-image/index.js":
/*!********************************************!*\
  !*** ./node_modules/gatsby-image/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

__webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");

__webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");

__webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");

__webpack_require__(/*! core-js/modules/es6.string.iterator */ "./node_modules/core-js/modules/es6.string.iterator.js");

__webpack_require__(/*! core-js/modules/es6.weak-map */ "./node_modules/core-js/modules/es6.weak-map.js");

__webpack_require__(/*! core-js/modules/es6.array.find-index */ "./node_modules/core-js/modules/es6.array.find-index.js");

__webpack_require__(/*! core-js/modules/es6.string.fixed */ "./node_modules/core-js/modules/es6.string.fixed.js");

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var logDeprecationNotice = function logDeprecationNotice(prop, replacement) {
  if (false) {}

  console.log("\n    The \"" + prop + "\" prop is now deprecated and will be removed in the next major version\n    of \"gatsby-image\".\n    ");

  if (replacement) {
    console.log("Please use " + replacement + " instead of \"" + prop + "\".");
  }
}; // Handle legacy props during their deprecation phase


var convertProps = function convertProps(props) {
  var convertedProps = (0, _extends2.default)({}, props);
  var resolutions = convertedProps.resolutions,
      sizes = convertedProps.sizes,
      critical = convertedProps.critical;

  if (resolutions) {
    convertedProps.fixed = resolutions;
    delete convertedProps.resolutions;
  }

  if (sizes) {
    convertedProps.fluid = sizes;
    delete convertedProps.sizes;
  }

  if (critical) {
    logDeprecationNotice("critical", "the native \"loading\" attribute");
    convertedProps.loading = "eager";
  } // convert fluid & fixed to arrays so we only have to work with arrays


  if (convertedProps.fluid) {
    convertedProps.fluid = groupByMedia([].concat(convertedProps.fluid));
  }

  if (convertedProps.fixed) {
    convertedProps.fixed = groupByMedia([].concat(convertedProps.fixed));
  }

  return convertedProps;
};
/**
 * Checks if fluid or fixed are art-direction arrays.
 *
 * @param currentData  {{media?: string}[]}   The props to check for images.
 * @return {boolean}
 */


var hasArtDirectionSupport = function hasArtDirectionSupport(currentData) {
  return !!currentData && Array.isArray(currentData) && currentData.some(function (image) {
    return typeof image.media !== "undefined";
  });
};
/**
 * Tries to detect if a media query matches the current viewport.
 * @property media   {{media?: string}}  A media query string.
 * @return {boolean}
 */


var matchesMedia = function matchesMedia(_ref) {
  var media = _ref.media;
  return media ? isBrowser && !!window.matchMedia(media).matches : false;
};
/**
 * Find the source of an image to use as a key in the image cache.
 * Use `the first image in either `fixed` or `fluid`
 * @param {{fluid: {src: string, media?: string}[], fixed: {src: string, media?: string}[]}} args
 * @return {string}
 */


var getImageSrcKey = function getImageSrcKey(_ref2) {
  var fluid = _ref2.fluid,
      fixed = _ref2.fixed;
  var data = fluid ? getCurrentSrcData(fluid) : getCurrentSrcData(fixed);
  return data.src;
};
/**
 * Returns the current src - Preferably with art-direction support.
 * @param currentData  {{media?: string}[], maxWidth?: Number, maxHeight?: Number}   The fluid or fixed image array.
 * @return {{src: string, media?: string, maxWidth?: Number, maxHeight?: Number}}
 */


var getCurrentSrcData = function getCurrentSrcData(currentData) {
  if (isBrowser && hasArtDirectionSupport(currentData)) {
    // Do we have an image for the current Viewport?
    var foundMedia = currentData.findIndex(matchesMedia);

    if (foundMedia !== -1) {
      return currentData[foundMedia];
    } // No media matches, select first element without a media condition


    var noMedia = currentData.findIndex(function (image) {
      return typeof image.media === "undefined";
    });

    if (noMedia !== -1) {
      return currentData[noMedia];
    }
  } // Else return the first image.


  return currentData[0];
}; // Cache if we've seen an image before so we don't bother with
// lazy-loading & fading in on subsequent mounts.


var imageCache = Object.create({});

var inImageCache = function inImageCache(props) {
  var convertedProps = convertProps(props); // Find src

  var src = getImageSrcKey(convertedProps);
  return imageCache[src] || false;
};

var activateCacheForImage = function activateCacheForImage(props) {
  var convertedProps = convertProps(props); // Find src

  var src = getImageSrcKey(convertedProps);
  imageCache[src] = true;
}; // Native lazy-loading support: https://addyosmani.com/blog/lazy-loading/


var hasNativeLazyLoadSupport = typeof HTMLImageElement !== "undefined" && "loading" in HTMLImageElement.prototype;
var isBrowser = typeof window !== "undefined";
var hasIOSupport = isBrowser && window.IntersectionObserver;
var io;
var listeners = new WeakMap();

function getIO() {
  if (typeof io === "undefined" && typeof window !== "undefined" && window.IntersectionObserver) {
    io = new window.IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (listeners.has(entry.target)) {
          var cb = listeners.get(entry.target); // Edge doesn't currently support isIntersecting, so also test for an intersectionRatio > 0

          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            io.unobserve(entry.target);
            listeners.delete(entry.target);
            cb();
          }
        }
      });
    }, {
      rootMargin: "200px"
    });
  }

  return io;
}

function generateImageSources(imageVariants) {
  return imageVariants.map(function (_ref3) {
    var src = _ref3.src,
        srcSet = _ref3.srcSet,
        srcSetWebp = _ref3.srcSetWebp,
        media = _ref3.media,
        sizes = _ref3.sizes;
    return (
      /*#__PURE__*/
      _react.default.createElement(_react.default.Fragment, {
        key: src
      }, srcSetWebp &&
      /*#__PURE__*/
      _react.default.createElement("source", {
        type: "image/webp",
        media: media,
        srcSet: srcSetWebp,
        sizes: sizes
      }),
      /*#__PURE__*/
      _react.default.createElement("source", {
        media: media,
        srcSet: srcSet,
        sizes: sizes
      }))
    );
  });
} // Return an array ordered by elements having a media prop, does not use
// native sort, as a stable sort is not guaranteed by all browsers/versions


function groupByMedia(imageVariants) {
  var withMedia = [];
  var without = [];
  imageVariants.forEach(function (variant) {
    return (variant.media ? withMedia : without).push(variant);
  });

  if (without.length > 1 && "development" !== "production") {
    console.warn("We've found " + without.length + " sources without a media property. They might be ignored by the browser, see: https://www.gatsbyjs.org/packages/gatsby-image/#art-directing-multiple-images");
  }

  return [].concat(withMedia, without);
}

function generateTracedSVGSources(imageVariants) {
  return imageVariants.map(function (_ref4) {
    var src = _ref4.src,
        media = _ref4.media,
        tracedSVG = _ref4.tracedSVG;
    return (
      /*#__PURE__*/
      _react.default.createElement("source", {
        key: src,
        media: media,
        srcSet: tracedSVG
      })
    );
  });
}

function generateBase64Sources(imageVariants) {
  return imageVariants.map(function (_ref5) {
    var src = _ref5.src,
        media = _ref5.media,
        base64 = _ref5.base64;
    return (
      /*#__PURE__*/
      _react.default.createElement("source", {
        key: src,
        media: media,
        srcSet: base64
      })
    );
  });
}

function generateNoscriptSource(_ref6, isWebp) {
  var srcSet = _ref6.srcSet,
      srcSetWebp = _ref6.srcSetWebp,
      media = _ref6.media,
      sizes = _ref6.sizes;
  var src = isWebp ? srcSetWebp : srcSet;
  var mediaAttr = media ? "media=\"" + media + "\" " : "";
  var typeAttr = isWebp ? "type='image/webp' " : "";
  var sizesAttr = sizes ? "sizes=\"" + sizes + "\" " : "";
  return "<source " + typeAttr + mediaAttr + "srcset=\"" + src + "\" " + sizesAttr + "/>";
}

function generateNoscriptSources(imageVariants) {
  return imageVariants.map(function (variant) {
    return (variant.srcSetWebp ? generateNoscriptSource(variant, true) : "") + generateNoscriptSource(variant);
  }).join("");
}

var listenToIntersections = function listenToIntersections(el, cb) {
  var observer = getIO();

  if (observer) {
    observer.observe(el);
    listeners.set(el, cb);
  }

  return function () {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

var noscriptImg = function noscriptImg(props) {
  // Check if prop exists before adding each attribute to the string output below to prevent
  // HTML validation issues caused by empty values like width="" and height=""
  var src = props.src ? "src=\"" + props.src + "\" " : "src=\"\" "; // required attribute

  var sizes = props.sizes ? "sizes=\"" + props.sizes + "\" " : "";
  var srcSet = props.srcSet ? "srcset=\"" + props.srcSet + "\" " : "";
  var title = props.title ? "title=\"" + props.title + "\" " : "";
  var alt = props.alt ? "alt=\"" + props.alt + "\" " : "alt=\"\" "; // required attribute

  var width = props.width ? "width=\"" + props.width + "\" " : "";
  var height = props.height ? "height=\"" + props.height + "\" " : "";
  var crossOrigin = props.crossOrigin ? "crossorigin=\"" + props.crossOrigin + "\" " : "";
  var loading = props.loading ? "loading=\"" + props.loading + "\" " : "";
  var draggable = props.draggable ? "draggable=\"" + props.draggable + "\" " : "";
  var sources = generateNoscriptSources(props.imageVariants);
  return "<picture>" + sources + "<img " + loading + width + height + sizes + srcSet + src + alt + title + crossOrigin + draggable + "style=\"position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center\"/></picture>";
}; // Earlier versions of gatsby-image during the 2.x cycle did not wrap
// the `Img` component in a `picture` element. This maintains compatibility
// until a breaking change can be introduced in the next major release


var Placeholder = _react.default.forwardRef(function (props, ref) {
  var src = props.src,
      imageVariants = props.imageVariants,
      generateSources = props.generateSources,
      spreadProps = props.spreadProps,
      ariaHidden = props.ariaHidden;

  var baseImage =
  /*#__PURE__*/
  _react.default.createElement(Img, (0, _extends2.default)({
    ref: ref,
    src: src
  }, spreadProps, {
    ariaHidden: ariaHidden
  }));

  return imageVariants.length > 1 ?
  /*#__PURE__*/
  _react.default.createElement("picture", null, generateSources(imageVariants), baseImage) : baseImage;
});

var Img = _react.default.forwardRef(function (props, ref) {
  var sizes = props.sizes,
      srcSet = props.srcSet,
      src = props.src,
      style = props.style,
      onLoad = props.onLoad,
      onError = props.onError,
      loading = props.loading,
      draggable = props.draggable,
      ariaHidden = props.ariaHidden,
      otherProps = (0, _objectWithoutPropertiesLoose2.default)(props, ["sizes", "srcSet", "src", "style", "onLoad", "onError", "loading", "draggable", "ariaHidden"]);
  return (
    /*#__PURE__*/
    _react.default.createElement("img", (0, _extends2.default)({
      "aria-hidden": ariaHidden,
      sizes: sizes,
      srcSet: srcSet,
      src: src
    }, otherProps, {
      onLoad: onLoad,
      onError: onError,
      ref: ref,
      loading: loading,
      draggable: draggable,
      style: (0, _extends2.default)({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center"
      }, style)
    }))
  );
});

Img.propTypes = {
  style: _propTypes.default.object,
  onError: _propTypes.default.func,
  onLoad: _propTypes.default.func
};

var Image =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Image, _React$Component);

  function Image(props) {
    var _this;

    _this = _React$Component.call(this, props) || this; // If this image has already been loaded before then we can assume it's
    // already in the browser cache so it's cheap to just show directly.

    _this.seenBefore = isBrowser && inImageCache(props);
    _this.isCritical = props.loading === "eager" || props.critical;
    _this.addNoScript = !(_this.isCritical && !props.fadeIn);
    _this.useIOSupport = !hasNativeLazyLoadSupport && hasIOSupport && !_this.isCritical && !_this.seenBefore;
    var isVisible = _this.isCritical || isBrowser && (hasNativeLazyLoadSupport || !_this.useIOSupport);
    _this.state = {
      isVisible: isVisible,
      imgLoaded: false,
      imgCached: false,
      fadeIn: !_this.seenBefore && props.fadeIn
    };
    _this.imageRef = _react.default.createRef();
    _this.placeholderRef = props.placeholderRef || _react.default.createRef();
    _this.handleImageLoaded = _this.handleImageLoaded.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleRef = _this.handleRef.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  var _proto = Image.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.state.isVisible && typeof this.props.onStartLoad === "function") {
      this.props.onStartLoad({
        wasCached: inImageCache(this.props)
      });
    }

    if (this.isCritical) {
      var img = this.imageRef.current;

      if (img && img.complete) {
        this.handleImageLoaded();
      }
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.cleanUpListeners) {
      this.cleanUpListeners();
    }
  } // Specific to IntersectionObserver based lazy-load support
  ;

  _proto.handleRef = function handleRef(ref) {
    var _this2 = this;

    if (this.useIOSupport && ref) {
      this.cleanUpListeners = listenToIntersections(ref, function () {
        var imageInCache = inImageCache(_this2.props);

        if (!_this2.state.isVisible && typeof _this2.props.onStartLoad === "function") {
          _this2.props.onStartLoad({
            wasCached: imageInCache
          });
        } // imgCached and imgLoaded must update after isVisible,
        // Once isVisible is true, imageRef becomes accessible, which imgCached needs access to.
        // imgLoaded and imgCached are in a 2nd setState call to be changed together,
        // avoiding initiating unnecessary animation frames from style changes.


        _this2.setState({
          isVisible: true
        }, function () {
          _this2.setState({
            imgLoaded: imageInCache,
            // `currentSrc` should be a string, but can be `undefined` in IE,
            // !! operator validates the value is not undefined/null/""
            // for lazyloaded components this might be null
            // TODO fix imgCached behaviour as it's now false when it's lazyloaded
            imgCached: !!(_this2.imageRef.current && _this2.imageRef.current.currentSrc)
          });
        });
      });
    }
  };

  _proto.handleImageLoaded = function handleImageLoaded() {
    activateCacheForImage(this.props);
    this.setState({
      imgLoaded: true
    });

    if (this.props.onLoad) {
      this.props.onLoad();
    }
  };

  _proto.render = function render() {
    var _convertProps = convertProps(this.props),
        title = _convertProps.title,
        alt = _convertProps.alt,
        className = _convertProps.className,
        _convertProps$style = _convertProps.style,
        style = _convertProps$style === void 0 ? {} : _convertProps$style,
        _convertProps$imgStyl = _convertProps.imgStyle,
        imgStyle = _convertProps$imgStyl === void 0 ? {} : _convertProps$imgStyl,
        _convertProps$placeho = _convertProps.placeholderStyle,
        placeholderStyle = _convertProps$placeho === void 0 ? {} : _convertProps$placeho,
        placeholderClassName = _convertProps.placeholderClassName,
        fluid = _convertProps.fluid,
        fixed = _convertProps.fixed,
        backgroundColor = _convertProps.backgroundColor,
        durationFadeIn = _convertProps.durationFadeIn,
        Tag = _convertProps.Tag,
        itemProp = _convertProps.itemProp,
        loading = _convertProps.loading,
        draggable = _convertProps.draggable;

    var shouldReveal = this.state.fadeIn === false || this.state.imgLoaded;
    var shouldFadeIn = this.state.fadeIn === true && !this.state.imgCached;
    var imageStyle = (0, _extends2.default)({
      opacity: shouldReveal ? 1 : 0,
      transition: shouldFadeIn ? "opacity " + durationFadeIn + "ms" : "none"
    }, imgStyle);
    var bgColor = typeof backgroundColor === "boolean" ? "lightgray" : backgroundColor;
    var delayHideStyle = {
      transitionDelay: durationFadeIn + "ms"
    };
    var imagePlaceholderStyle = (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({
      opacity: this.state.imgLoaded ? 0 : 1
    }, shouldFadeIn && delayHideStyle), imgStyle), placeholderStyle);
    var placeholderImageProps = {
      title: title,
      alt: !this.state.isVisible ? alt : "",
      style: imagePlaceholderStyle,
      className: placeholderClassName,
      itemProp: itemProp
    };

    if (fluid) {
      var imageVariants = fluid;
      var image = getCurrentSrcData(fluid);
      return (
        /*#__PURE__*/
        _react.default.createElement(Tag, {
          className: (className ? className : "") + " gatsby-image-wrapper",
          style: (0, _extends2.default)({
            position: "relative",
            overflow: "hidden",
            maxWidth: image.maxWidth ? image.maxWidth + "px" : null,
            maxHeight: image.maxHeight ? image.maxHeight + "px" : null
          }, style),
          ref: this.handleRef,
          key: "fluid-" + JSON.stringify(image.srcSet)
        },
        /*#__PURE__*/
        _react.default.createElement(Tag, {
          "aria-hidden": true,
          style: {
            width: "100%",
            paddingBottom: 100 / image.aspectRatio + "%"
          }
        }), bgColor &&
        /*#__PURE__*/
        _react.default.createElement(Tag, {
          "aria-hidden": true,
          title: title,
          style: (0, _extends2.default)({
            backgroundColor: bgColor,
            position: "absolute",
            top: 0,
            bottom: 0,
            opacity: !this.state.imgLoaded ? 1 : 0,
            right: 0,
            left: 0
          }, shouldFadeIn && delayHideStyle)
        }), image.base64 &&
        /*#__PURE__*/
        _react.default.createElement(Placeholder, {
          ariaHidden: true,
          ref: this.placeholderRef,
          src: image.base64,
          spreadProps: placeholderImageProps,
          imageVariants: imageVariants,
          generateSources: generateBase64Sources
        }), image.tracedSVG &&
        /*#__PURE__*/
        _react.default.createElement(Placeholder, {
          ariaHidden: true,
          ref: this.placeholderRef,
          src: image.tracedSVG,
          spreadProps: placeholderImageProps,
          imageVariants: imageVariants,
          generateSources: generateTracedSVGSources
        }), this.state.isVisible &&
        /*#__PURE__*/
        _react.default.createElement("picture", null, generateImageSources(imageVariants),
        /*#__PURE__*/
        _react.default.createElement(Img, {
          alt: alt,
          title: title,
          sizes: image.sizes,
          src: image.src,
          crossOrigin: this.props.crossOrigin,
          srcSet: image.srcSet,
          style: imageStyle,
          ref: this.imageRef,
          onLoad: this.handleImageLoaded,
          onError: this.props.onError,
          itemProp: itemProp,
          loading: loading,
          draggable: draggable
        })), this.addNoScript &&
        /*#__PURE__*/
        _react.default.createElement("noscript", {
          dangerouslySetInnerHTML: {
            __html: noscriptImg((0, _extends2.default)((0, _extends2.default)({
              alt: alt,
              title: title,
              loading: loading
            }, image), {}, {
              imageVariants: imageVariants
            }))
          }
        }))
      );
    }

    if (fixed) {
      var _imageVariants = fixed;

      var _image = getCurrentSrcData(fixed);

      var divStyle = (0, _extends2.default)({
        position: "relative",
        overflow: "hidden",
        display: "inline-block",
        width: _image.width,
        height: _image.height
      }, style);

      if (style.display === "inherit") {
        delete divStyle.display;
      }

      return (
        /*#__PURE__*/
        _react.default.createElement(Tag, {
          className: (className ? className : "") + " gatsby-image-wrapper",
          style: divStyle,
          ref: this.handleRef,
          key: "fixed-" + JSON.stringify(_image.srcSet)
        }, bgColor &&
        /*#__PURE__*/
        _react.default.createElement(Tag, {
          "aria-hidden": true,
          title: title,
          style: (0, _extends2.default)({
            backgroundColor: bgColor,
            width: _image.width,
            opacity: !this.state.imgLoaded ? 1 : 0,
            height: _image.height
          }, shouldFadeIn && delayHideStyle)
        }), _image.base64 &&
        /*#__PURE__*/
        _react.default.createElement(Placeholder, {
          ariaHidden: true,
          ref: this.placeholderRef,
          src: _image.base64,
          spreadProps: placeholderImageProps,
          imageVariants: _imageVariants,
          generateSources: generateBase64Sources
        }), _image.tracedSVG &&
        /*#__PURE__*/
        _react.default.createElement(Placeholder, {
          ariaHidden: true,
          ref: this.placeholderRef,
          src: _image.tracedSVG,
          spreadProps: placeholderImageProps,
          imageVariants: _imageVariants,
          generateSources: generateTracedSVGSources
        }), this.state.isVisible &&
        /*#__PURE__*/
        _react.default.createElement("picture", null, generateImageSources(_imageVariants),
        /*#__PURE__*/
        _react.default.createElement(Img, {
          alt: alt,
          title: title,
          width: _image.width,
          height: _image.height,
          sizes: _image.sizes,
          src: _image.src,
          crossOrigin: this.props.crossOrigin,
          srcSet: _image.srcSet,
          style: imageStyle,
          ref: this.imageRef,
          onLoad: this.handleImageLoaded,
          onError: this.props.onError,
          itemProp: itemProp,
          loading: loading,
          draggable: draggable
        })), this.addNoScript &&
        /*#__PURE__*/
        _react.default.createElement("noscript", {
          dangerouslySetInnerHTML: {
            __html: noscriptImg((0, _extends2.default)((0, _extends2.default)({
              alt: alt,
              title: title,
              loading: loading
            }, _image), {}, {
              imageVariants: _imageVariants
            }))
          }
        }))
      );
    }

    return null;
  };

  return Image;
}(_react.default.Component);

Image.defaultProps = {
  fadeIn: true,
  durationFadeIn: 500,
  alt: "",
  Tag: "div",
  // We set it to `lazy` by default because it's best to default to a performant
  // setting and let the user "opt out" to `eager`
  loading: "lazy"
};

var fixedObject = _propTypes.default.shape({
  width: _propTypes.default.number.isRequired,
  height: _propTypes.default.number.isRequired,
  src: _propTypes.default.string.isRequired,
  srcSet: _propTypes.default.string.isRequired,
  base64: _propTypes.default.string,
  tracedSVG: _propTypes.default.string,
  srcWebp: _propTypes.default.string,
  srcSetWebp: _propTypes.default.string,
  media: _propTypes.default.string
});

var fluidObject = _propTypes.default.shape({
  aspectRatio: _propTypes.default.number.isRequired,
  src: _propTypes.default.string.isRequired,
  srcSet: _propTypes.default.string.isRequired,
  sizes: _propTypes.default.string.isRequired,
  base64: _propTypes.default.string,
  tracedSVG: _propTypes.default.string,
  srcWebp: _propTypes.default.string,
  srcSetWebp: _propTypes.default.string,
  media: _propTypes.default.string,
  maxWidth: _propTypes.default.number,
  maxHeight: _propTypes.default.number
}); // If you modify these propTypes, please don't forget to update following files as well:
// https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-image/index.d.ts
// https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-image/README.md#gatsby-image-props
// https://github.com/gatsbyjs/gatsby/blob/master/docs/docs/gatsby-image.md#gatsby-image-props


Image.propTypes = {
  resolutions: fixedObject,
  sizes: fluidObject,
  fixed: _propTypes.default.oneOfType([fixedObject, _propTypes.default.arrayOf(fixedObject)]),
  fluid: _propTypes.default.oneOfType([fluidObject, _propTypes.default.arrayOf(fluidObject)]),
  fadeIn: _propTypes.default.bool,
  durationFadeIn: _propTypes.default.number,
  title: _propTypes.default.string,
  alt: _propTypes.default.string,
  className: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  // Support Glamor's css prop.
  critical: _propTypes.default.bool,
  crossOrigin: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool]),
  style: _propTypes.default.object,
  imgStyle: _propTypes.default.object,
  placeholderStyle: _propTypes.default.object,
  placeholderClassName: _propTypes.default.string,
  backgroundColor: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool]),
  onLoad: _propTypes.default.func,
  onError: _propTypes.default.func,
  onStartLoad: _propTypes.default.func,
  Tag: _propTypes.default.string,
  itemProp: _propTypes.default.string,
  loading: _propTypes.default.oneOf(["auto", "lazy", "eager"]),
  draggable: _propTypes.default.bool
};
var _default = Image;
exports.default = _default;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_assertThisInitialized2, "_assertThisInitialized2", "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\node_modules\\gatsby-image\\index.js");
  reactHotLoader.register(_inheritsLoose2, "_inheritsLoose2", "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\node_modules\\gatsby-image\\index.js");
  reactHotLoader.register(_objectWithoutPropertiesLoose2, "_objectWithoutPropertiesLoose2", "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\node_modules\\gatsby-image\\index.js");
  reactHotLoader.register(_extends2, "_extends2", "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\node_modules\\gatsby-image\\index.js");
  reactHotLoader.register(_react, "_react", "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\node_modules\\gatsby-image\\index.js");
  reactHotLoader.register(_propTypes, "_propTypes", "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\node_modules\\gatsby-image\\index.js");
  reactHotLoader.register(logDeprecationNotice, "logDeprecationNotice", "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\node_modules\\gatsby-image\\index.js");
  reactHotLoader.register(convertProps, "convertProps", "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\node_modules\\gatsby-image\\index.js");
  reactHotLoader.register(hasArtDirectionSupport, "hasArtDirectionSupport", "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\node_modules\\gatsby-image\\index.js");
  reactHotLoader.register(matchesMedia, "matchesMedia", "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\node_modules\\gatsby-image\\index.js");
  reactHotLoader.register(getImageSrcKey, "getImageSrcKey", "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\node_modules\\gatsby-image\\index.js");
  reactHotLoader.register(getCurrentSrcData, "getCurrentSrcData", "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\node_modules\\gatsby-image\\index.js");
  reactHotLoader.register(imageCache, "imageCache", "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\node_modules\\gatsby-image\\index.js");
  reactHotLoader.register(inImageCache, "inImageCache", "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\node_modules\\gatsby-image\\index.js");
  reactHotLoader.register(activateCacheForImage, "activateCacheForImage", "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\node_modules\\gatsby-image\\index.js");
  reactHotLoader.register(hasNativeLazyLoadSupport, "hasNativeLazyLoadSupport", "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\node_modules\\gatsby-image\\index.js");
  reactHotLoader.register(isBrowser, "isBrowser", "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\node_modules\\gatsby-image\\index.js");
  reactHotLoader.register(hasIOSupport, "hasIOSupport", "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\node_modules\\gatsby-image\\index.js");
  reactHotLoader.register(io, "io", "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\node_modules\\gatsby-image\\index.js");
  reactHotLoader.register(listeners, "listeners", "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\node_modules\\gatsby-image\\index.js");
  reactHotLoader.register(getIO, "getIO", "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\node_modules\\gatsby-image\\index.js");
  reactHotLoader.register(generateImageSources, "generateImageSources", "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\node_modules\\gatsby-image\\index.js");
  reactHotLoader.register(groupByMedia, "groupByMedia", "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\node_modules\\gatsby-image\\index.js");
  reactHotLoader.register(generateTracedSVGSources, "generateTracedSVGSources", "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\node_modules\\gatsby-image\\index.js");
  reactHotLoader.register(generateBase64Sources, "generateBase64Sources", "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\node_modules\\gatsby-image\\index.js");
  reactHotLoader.register(generateNoscriptSource, "generateNoscriptSource", "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\node_modules\\gatsby-image\\index.js");
  reactHotLoader.register(generateNoscriptSources, "generateNoscriptSources", "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\node_modules\\gatsby-image\\index.js");
  reactHotLoader.register(listenToIntersections, "listenToIntersections", "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\node_modules\\gatsby-image\\index.js");
  reactHotLoader.register(noscriptImg, "noscriptImg", "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\node_modules\\gatsby-image\\index.js");
  reactHotLoader.register(Placeholder, "Placeholder", "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\node_modules\\gatsby-image\\index.js");
  reactHotLoader.register(Img, "Img", "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\node_modules\\gatsby-image\\index.js");
  reactHotLoader.register(Image, "Image", "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\node_modules\\gatsby-image\\index.js");
  reactHotLoader.register(fixedObject, "fixedObject", "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\node_modules\\gatsby-image\\index.js");
  reactHotLoader.register(fluidObject, "fluidObject", "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\node_modules\\gatsby-image\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\node_modules\\gatsby-image\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/gatsby-link/index.js":
/*!*******************************************!*\
  !*** ./node_modules/gatsby-link/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.withPrefix = withPrefix;
exports.withAssetPrefix = withAssetPrefix;
exports.navigateTo = exports.replace = exports.push = exports.navigate = exports.default = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! @reach/router */ "./node_modules/@reach/router/es/index.js");

var _parsePath = __webpack_require__(/*! ./parse-path */ "./node_modules/gatsby-link/parse-path.js");

exports.parsePath = _parsePath.parsePath;

function withPrefix(path) {
  return normalizePath([ true ? "" : undefined, path].join("/"));
}

function withAssetPrefix(path) {
  return [""].concat([path.replace(/^\//, "")]).join("/");
}

function normalizePath(path) {
  return path.replace(/\/+/g, "/");
}

var NavLinkPropTypes = {
  activeClassName: _propTypes.default.string,
  activeStyle: _propTypes.default.object,
  partiallyActive: _propTypes.default.bool
}; // Set up IntersectionObserver

var createIntersectionObserver = function createIntersectionObserver(el, cb) {
  var io = new window.IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (el === entry.target) {
        // Check if element is within viewport, remove listener, destroy observer, and run link callback.
        // MSEdge doesn't currently support isIntersecting, so also test for  an intersectionRatio > 0
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          io.unobserve(el);
          io.disconnect();
          cb();
        }
      }
    });
  }); // Add element to the observer

  io.observe(el);
  return {
    instance: io,
    el: el
  };
};

var GatsbyLink = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2.default)(GatsbyLink, _React$Component);

  function GatsbyLink(props) {
    var _this;

    _this = _React$Component.call(this, props) || this; // Default to no support for IntersectionObserver

    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "defaultGetProps", function (_ref) {
      var isPartiallyCurrent = _ref.isPartiallyCurrent,
          isCurrent = _ref.isCurrent;

      if (_this.props.partiallyActive ? isPartiallyCurrent : isCurrent) {
        return {
          className: [_this.props.className, _this.props.activeClassName].filter(Boolean).join(" "),
          style: (0, _extends2.default)((0, _extends2.default)({}, _this.props.style), _this.props.activeStyle)
        };
      }

      return null;
    });
    var IOSupported = false;

    if (typeof window !== "undefined" && window.IntersectionObserver) {
      IOSupported = true;
    }

    _this.state = {
      IOSupported: IOSupported
    };
    _this.handleRef = _this.handleRef.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  var _proto = GatsbyLink.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    // Preserve non IO functionality if no support
    if (this.props.to !== prevProps.to && !this.state.IOSupported) {
      ___loader.enqueue((0, _parsePath.parsePath)(this.props.to).pathname);
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    // Preserve non IO functionality if no support
    if (!this.state.IOSupported) {
      ___loader.enqueue((0, _parsePath.parsePath)(this.props.to).pathname);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (!this.io) {
      return;
    }

    var _this$io = this.io,
        instance = _this$io.instance,
        el = _this$io.el;
    instance.unobserve(el);
    instance.disconnect();
  };

  _proto.handleRef = function handleRef(ref) {
    var _this2 = this;

    if (this.props.innerRef && this.props.innerRef.hasOwnProperty("current")) {
      this.props.innerRef.current = ref;
    } else if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    if (this.state.IOSupported && ref) {
      // If IO supported and element reference found, setup Observer functionality
      this.io = createIntersectionObserver(ref, function () {
        ___loader.enqueue((0, _parsePath.parsePath)(_this2.props.to).pathname);
      });
    }
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props = this.props,
        to = _this$props.to,
        _this$props$getProps = _this$props.getProps,
        getProps = _this$props$getProps === void 0 ? this.defaultGetProps : _this$props$getProps,
        _onClick = _this$props.onClick,
        _onMouseEnter = _this$props.onMouseEnter,
        $activeClassName = _this$props.activeClassName,
        $activeStyle = _this$props.activeStyle,
        $innerRef = _this$props.innerRef,
        partiallyActive = _this$props.partiallyActive,
        state = _this$props.state,
        replace = _this$props.replace,
        rest = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["to", "getProps", "onClick", "onMouseEnter", "activeClassName", "activeStyle", "innerRef", "partiallyActive", "state", "replace"]);
    var LOCAL_URL = /^\/(?!\/)/;

    if ( true && !LOCAL_URL.test(to)) {
      console.warn("External link " + to + " was detected in a Link component. Use the Link component only for internal links. See: https://gatsby.dev/internal-links");
    }

    var prefixedTo = withPrefix(to);
    return /*#__PURE__*/_react.default.createElement(_router.Link, (0, _extends2.default)({
      to: prefixedTo,
      state: state,
      getProps: getProps,
      innerRef: this.handleRef,
      onMouseEnter: function onMouseEnter(e) {
        if (_onMouseEnter) {
          _onMouseEnter(e);
        }

        ___loader.hovering((0, _parsePath.parsePath)(to).pathname);
      },
      onClick: function onClick(e) {
        if (_onClick) {
          _onClick(e);
        }

        if (e.button === 0 && // ignore right clicks
        !_this3.props.target && // let browser handle "target=_blank"
        !e.defaultPrevented && // onClick prevented default
        !e.metaKey && // ignore clicks with modifier keys...
        !e.altKey && !e.ctrlKey && !e.shiftKey) {
          e.preventDefault();
          var shouldReplace = replace;
          var isCurrent = encodeURI(to) === window.location.pathname;

          if (typeof replace !== "boolean" && isCurrent) {
            shouldReplace = true;
          } // Make sure the necessary scripts and data are
          // loaded before continuing.


          navigate(to, {
            state: state,
            replace: shouldReplace
          });
        }

        return true;
      }
    }, rest));
  };

  return GatsbyLink;
}(_react.default.Component);

GatsbyLink.propTypes = (0, _extends2.default)((0, _extends2.default)({}, NavLinkPropTypes), {}, {
  onClick: _propTypes.default.func,
  to: _propTypes.default.string.isRequired,
  replace: _propTypes.default.bool,
  state: _propTypes.default.object
});

var showDeprecationWarning = function showDeprecationWarning(functionName, altFunctionName, version) {
  return console.warn("The \"" + functionName + "\" method is now deprecated and will be removed in Gatsby v" + version + ". Please use \"" + altFunctionName + "\" instead.");
};

var _default = _react.default.forwardRef(function (props, ref) {
  return /*#__PURE__*/_react.default.createElement(GatsbyLink, (0, _extends2.default)({
    innerRef: ref
  }, props));
});

exports.default = _default;

var navigate = function navigate(to, options) {
  window.___navigate(withPrefix(to), options);
};

exports.navigate = navigate;

var push = function push(to) {
  showDeprecationWarning("push", "navigate", 3);

  window.___push(withPrefix(to));
};

exports.push = push;

var replace = function replace(to) {
  showDeprecationWarning("replace", "navigate", 3);

  window.___replace(withPrefix(to));
}; // TODO: Remove navigateTo for Gatsby v3


exports.replace = replace;

var navigateTo = function navigateTo(to) {
  showDeprecationWarning("navigateTo", "navigate", 3);
  return push(to);
};

exports.navigateTo = navigateTo;

/***/ })

})
//# sourceMappingURL=cms.d725d4f824cf4fd58e02.hot-update.js.map