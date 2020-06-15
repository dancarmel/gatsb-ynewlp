webpackHotUpdate("cms",{

/***/ "./src/templates/blog-post.js":
/*!************************************!*\
  !*** ./src/templates/blog-post.js ***!
  \************************************/
/*! exports provided: BlogPostTemplate, default, pageQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPostTemplate", function() { return BlogPostTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Content */ "./src/components/Content.js");
/* harmony import */ var _components_BlogNav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/BlogNav */ "./src/components/BlogNav/index.js");
var _jsxFileName = "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\src\\templates\\blog-post.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};









var BlogPostTemplate = function BlogPostTemplate(_ref) {
  var content = _ref.content,
      contentComponent = _ref.contentComponent,
      description = _ref.description,
      tags = _ref.tags,
      title = _ref.title,
      helmet = _ref.helmet;
  var PostContent = contentComponent || _components_Content__WEBPACK_IMPORTED_MODULE_6__["default"];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BlogNav__WEBPACK_IMPORTED_MODULE_7__["default"], {
    blogtitle: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, helmet || '', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column is-10 is-offset-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "title is-size-2 has-text-weight-bold is-bold-light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PostContent, {
    content: content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), tags && tags.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      marginTop: "4rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Tags"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "taglist",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, tags.map(function (tag) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: tag + "tag",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: "/tags/" + Object(lodash__WEBPACK_IMPORTED_MODULE_2__["kebabCase"])(tag) + "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, tag));
  }))) : null)))));
};
BlogPostTemplate.propTypes = {
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
  contentComponent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  helmet: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var BlogPost = function BlogPost(_ref2) {
  var data = _ref2.data;
  var post = data.markdownRemark;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BlogPostTemplate, {
    content: post.html,
    contentComponent: _components_Content__WEBPACK_IMPORTED_MODULE_6__["HTMLContent"],
    description: post.frontmatter.description,
    helmet: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3___default.a, {
      titleTemplate: "%s | Blog",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, "" + post.frontmatter.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
      name: "description",
      content: "" + post.frontmatter.description,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    })),
    tags: post.frontmatter.tags,
    title: post.frontmatter.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }));
};

BlogPost.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    markdownRemark: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
  })
};
var _default = BlogPost;
/* harmony default export */ __webpack_exports__["default"] = (_default);
var pageQuery = "1562462377";
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(BlogPostTemplate, "BlogPostTemplate", "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\src\\templates\\blog-post.js");
  reactHotLoader.register(BlogPost, "BlogPost", "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\src\\templates\\blog-post.js");
  reactHotLoader.register(pageQuery, "pageQuery", "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\src\\templates\\blog-post.js");
  reactHotLoader.register(_default, "default", "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\src\\templates\\blog-post.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.489a1b7e1b6c1a4bd27c.hot-update.js.map