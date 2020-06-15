webpackHotUpdate("cms",{

/***/ "./src/components/Blog/BlogRoll.js":
/*!*****************************************!*\
  !*** ./src/components/Blog/BlogRoll.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _PreviewCompatibleImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../PreviewCompatibleImage */ "./src/components/PreviewCompatibleImage.js");
/* harmony import */ var _style_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.sass */ "./src/components/Blog/style.sass");
/* harmony import */ var _style_sass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_sass__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\src\\components\\Blog\\BlogRoll.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};








var BlogRoll =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BlogRoll, _React$Component);

  function BlogRoll() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = BlogRoll.prototype;

  _proto.render = function render() {
    var data = this.props.data;
    var posts = data.allMarkdownRemark.edges;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      className: "blog-block",
      id: "blog",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "section-title text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "badge badge-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, "BLOGS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, "Blogs We Wrote For You"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "section-title-line",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, posts && posts.map(function (_ref) {
      var _React$createElement;

      var post = _ref.node;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], (_React$createElement = {
        xs: 12
      }, _React$createElement["xs"] = 4, _React$createElement.key = post.id, _React$createElement.__source = {
        fileName: _jsxFileName,
        lineNumber: 24
      }, _React$createElement.__self = this, _React$createElement), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
        className: "card theme-card blog-card " + (post.frontmatter.featuredpost ? 'is-featured' : ''),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, post.frontmatter.featuredimage ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "featured-thumbnail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PreviewCompatibleImage__WEBPACK_IMPORTED_MODULE_5__["default"], {
        imageInfo: {
          image: post.frontmatter.featuredimage,
          alt: "featured image thumbnail for post " + post.frontmatter.title
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      })) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "badge badge-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "ANALYTICS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        className: "title has-text-primary is-size-4",
        to: post.fields.slug,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, post.frontmatter.title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Text, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, post.frontmatter.date), post.excerpt), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "blog-author",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        className: "rounded-circle",
        src: "https://askbootstrap.com/preview/osahan-soft-themez-pro/img/stories/2.png",
        alt: "Card image cap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "Black Smith"), " On October 03, 2019")))));
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: "/blog",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, " All Posts")))));
  };

  // @ts-ignore
  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return BlogRoll;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

BlogRoll.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    allMarkdownRemark: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
      edges: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array
    })
  })
};

var _default = function _default() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["StaticQuery"], {
    query: "2235979697",
    render: function render(data, count) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BlogRoll, {
        data: data,
        count: count,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(BlogRoll, "BlogRoll", "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\src\\components\\Blog\\BlogRoll.js");
  reactHotLoader.register(_default, "default", "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\src\\components\\Blog\\BlogRoll.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.55b430665d2c302f9f5a.hot-update.js.map