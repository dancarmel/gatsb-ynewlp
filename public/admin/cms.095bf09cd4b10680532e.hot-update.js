webpackHotUpdate("cms",{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/BlogNav/style.sass":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--14-oneOf-1-1!./node_modules/postcss-loader/lib??postcss-3!./node_modules/sass-loader/dist/cjs.js??ref--14-oneOf-1-3!./src/components/BlogNav/style.sass ***!
  \***********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".nav-wrapper {\n  font-family: 'Roboto', sans-serif;\n  border-color: transparent !important;\n  background: #230080;\n  background: linear-gradient(135deg, #230080 0%, #a614a3 70%, #e31eb4 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#230080', endColorstr='#e31eb4',GradientType=1 );\n  height: 160px; }\n\n.navbar {\n  padding: 15px; }\n\n.navlinks ul {\n  background-color: #fff;\n  border-radius: 22px;\n  padding: 0px;\n  margin: 0; }\n  .navlinks ul li {\n    display: inline-block; }\n    .navlinks ul li a {\n      padding: 10px 20px;\n      display: block;\n      color: #000;\n      font-weight: 600;\n      text-decoration: none;\n      font-size: 14px; }\n    .navlinks ul li .gohome {\n      background-color: #000;\n      border-radius: 22px;\n      margin-left: 10px;\n      color: #fff !important; }\n\n.blogid h2 {\n  color: #fff;\n  margin: 8px;\n  padding: 0;\n  font-size: 27px;\n  font-weight: 500; }\n\n.blogid img {\n  float: left;\n  margin-right: 35px; }\n\n.page-contant {\n  background-color: #f7f7f7; }\n", "", {"version":3,"sources":["D:/Projects/htdocs/React/gatsby-starter-netlify-cms/osahan/src/components/BlogNav/D:/Projects/htdocs/React/gatsby-starter-netlify-cms/osahan/src/components/BlogNav/D:/Projects/htdocs/React/gatsby-starter-netlify-cms/osahan/src/components/BlogNav/style.sass"],"names":[],"mappings":"AAAA;EACC,kCAAiC;EACjC,qCAAoC;EACpC,oBAAmB;EACnB,2EAA0E;EAC1E,oHAAmH;EACnH,cAAa,EAAG;;AACjB;EACI,cAAa,EAAG;;AACpB;EAEE,uBAAsB;EACtB,oBAAmB;EACnB,aAAY;EACZ,UAAS,EAgBsB;EArBjC;IAOG,sBAAqB,EAcO;IArB/B;MAUI,mBAAkB;MAClB,eAAc;MACd,YAAW;MACX,iBAAgB;MAChB,sBAAqB;MACrB,gBAAe,EAAG;IAftB;MAkBI,uBAAsB;MACtB,oBAAmB;MACnB,kBAAiB;MACjB,uBAAsB,EAAG;;AAE7B;EAEG,YAAW;EACX,YAAW;EACX,WAAU;EACV,gBAAe;EACf,iBAAgB,EAAG;;AANtB;EAQG,YAAW;EACX,mBAAkB,EAAG;;AAExB;EACE,0BAAyB,EAAG","file":"style.sass","sourcesContent":[".nav-wrapper {\n font-family: 'Roboto', sans-serif;\n border-color: transparent !important;\n background: #230080;\n background: linear-gradient(135deg, #230080 0%, #a614a3 70%, #e31eb4 100%);\n filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#230080', endColorstr='#e31eb4',GradientType=1 );\n height: 160px; }\n.navbar {\n    padding: 15px; }\n.navlinks {\n\tul {\n\t\tbackground-color: #fff;\n\t\tborder-radius: 22px;\n\t\tpadding: 0px;\n\t\tmargin: 0;\n\t\tli {\n\t\t\tdisplay: inline-block;\n\n\t\t\ta {\n\t\t\t\tpadding: 10px 20px;\n\t\t\t\tdisplay: block;\n\t\t\t\tcolor: #000;\n\t\t\t\tfont-weight: 600;\n\t\t\t\ttext-decoration: none;\n\t\t\t\tfont-size: 14px; }\n\n\t\t\t.gohome {\n\t\t\t\tbackground-color: #000;\n\t\t\t\tborder-radius: 22px;\n\t\t\t\tmargin-left: 10px;\n\t\t\t\tcolor: #fff !important; } } } }\n\n.blogid {\n  h2 {\n   color: #fff;\n   margin: 8px;\n   padding: 0;\n   font-size: 27px;\n   font-weight: 500; }\n  img {\n   float: left;\n   margin-right: 35px; } }\n\n.page-contant {\n  background-color: #f7f7f7; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./src/components/BlogNav/index.js":
/*!*****************************************!*\
  !*** ./src/components/BlogNav/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PreviewCompatibleImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PreviewCompatibleImage */ "./src/components/PreviewCompatibleImage.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _style_sass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.sass */ "./src/components/BlogNav/style.sass");
/* harmony import */ var _style_sass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_sass__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\src\\components\\BlogNav\\index.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};








var NavBar = function NavBar(_ref) {
  var props = _ref.props;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "navbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "blogid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    className: "navbar-brand",
    to: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "",
    src: "https://askbootstrap.com/preview/osahan-soft-themez-pro/img/fav.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Soft Themez Pro - Blogs"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "navlinks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Link")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Link")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    className: "gohome",
    to: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Back To Home")))))));
};

var _default = NavBar;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(NavBar, "NavBar", "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\src\\components\\BlogNav\\index.js");
  reactHotLoader.register(_default, "default", "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\src\\components\\BlogNav\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/BlogNav/style.sass":
/*!*******************************************!*\
  !*** ./src/components/BlogNav/style.sass ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--14-oneOf-1-1!../../../node_modules/postcss-loader/lib??postcss-3!../../../node_modules/sass-loader/dist/cjs.js??ref--14-oneOf-1-3!./style.sass */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/BlogNav/style.sass");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--14-oneOf-1-1!../../../node_modules/postcss-loader/lib??postcss-3!../../../node_modules/sass-loader/dist/cjs.js??ref--14-oneOf-1-3!./style.sass */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/BlogNav/style.sass", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--14-oneOf-1-1!../../../node_modules/postcss-loader/lib??postcss-3!../../../node_modules/sass-loader/dist/cjs.js??ref--14-oneOf-1-3!./style.sass */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/BlogNav/style.sass");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

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
  }, title, " dasdsasfs"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
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
//# sourceMappingURL=cms.095bf09cd4b10680532e.hot-update.js.map