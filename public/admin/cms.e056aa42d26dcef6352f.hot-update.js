webpackHotUpdate("cms",{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Testimonials/style.sass":
false,

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Testimonials/testimonials.sass":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--14-oneOf-1-1!./node_modules/postcss-loader/lib??postcss-3!./node_modules/sass-loader/dist/cjs.js??ref--14-oneOf-1-3!./src/components/Testimonials/testimonials.sass ***!
  \***********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".testimonials-item {\n  padding: 37px; }\n  .testimonials-item img {\n    background: #fff none repeat scroll 0 0;\n    border-radius: 90px;\n    box-shadow: 0 0 24px rgba(11, 123, 255, 0.12);\n    height: 107px; }\n\n.custom-card {\n  background-color: #ffffff;\n  overflow: hidden;\n  border: medium none;\n  border-radius: 6px;\n  box-shadow: -1px 92px 99px -62px rgba(0, 0, 0, 0.12), 0 25px 65px 0 rgba(0, 0, 0, 0.08); }\n", "", {"version":3,"sources":["D:/Projects/htdocs/React/gatsby-starter-netlify-cms/osahan/src/components/Testimonials/D:/Projects/htdocs/React/gatsby-starter-netlify-cms/osahan/src/components/Testimonials/D:/Projects/htdocs/React/gatsby-starter-netlify-cms/osahan/src/components/Testimonials/testimonials.sass"],"names":[],"mappings":"AAAA;EACI,cAAa,EAKS;EAN1B;IAGQ,wCAAuC;IACvC,oBAAmB;IACnB,8CAA6C;IAC7C,cAAa,EAAG;;AAExB;EACI,0BAAyB;EACzB,iBAAgB;EAChB,oBAAmB;EACnB,mBAAkB;EAClB,wFAAuF,EAAG","file":"testimonials.sass","sourcesContent":[".testimonials-item {\n    padding: 37px;\n    img {\n        background: #fff none repeat scroll 0 0;\n        border-radius: 90px;\n        box-shadow: 0 0 24px rgba(11, 123, 255, 0.12);\n        height: 107px; } }\n\n.custom-card {\n    background-color: #ffffff;\n    overflow: hidden;\n    border: medium none;\n    border-radius: 6px;\n    box-shadow: -1px 92px 99px -62px rgba(0, 0, 0, 0.12), 0 25px 65px 0 rgba(0, 0, 0, 0.08); }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./src/components/Testimonials/style.sass":
false,

/***/ "./src/components/Testimonials/testimonials.js":
/*!*****************************************************!*\
  !*** ./src/components/Testimonials/testimonials.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _testimonials_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./testimonials.sass */ "./src/components/Testimonials/testimonials.sass");
/* harmony import */ var _testimonials_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_testimonials_sass__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\src\\components\\Testimonials\\testimonials.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};





var Testimonials = function Testimonials(_ref) {
  var heading = _ref.heading,
      subheading = _ref.subheading,
      gridItems = _ref.gridItems;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "testimonials-block",
    id: "testimonials",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section-title text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge badge-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, heading), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, subheading), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "section-title-line",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, gridItems.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      key: item.text,
      xs: 12,
      md: 4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "custom-card testimonials-item text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "img-fluid mb-4",
      src: item.image.childImageSharp.fluid.src,
      alt: item.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "mb-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, item.text), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
      className: "mb-0 text-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, "- ", item.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, item.title)));
  }))));
};

var _default = Testimonials;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Testimonials, "Testimonials", "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\src\\components\\Testimonials\\testimonials.js");
  reactHotLoader.register(_default, "default", "D:\\Projects\\htdocs\\React\\gatsby-starter-netlify-cms\\osahan\\src\\components\\Testimonials\\testimonials.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Testimonials/testimonials.sass":
/*!*******************************************************!*\
  !*** ./src/components/Testimonials/testimonials.sass ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--14-oneOf-1-1!../../../node_modules/postcss-loader/lib??postcss-3!../../../node_modules/sass-loader/dist/cjs.js??ref--14-oneOf-1-3!./testimonials.sass */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Testimonials/testimonials.sass");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--14-oneOf-1-1!../../../node_modules/postcss-loader/lib??postcss-3!../../../node_modules/sass-loader/dist/cjs.js??ref--14-oneOf-1-3!./testimonials.sass */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Testimonials/testimonials.sass", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--14-oneOf-1-1!../../../node_modules/postcss-loader/lib??postcss-3!../../../node_modules/sass-loader/dist/cjs.js??ref--14-oneOf-1-3!./testimonials.sass */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Testimonials/testimonials.sass");

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

/***/ })

})
//# sourceMappingURL=cms.e056aa42d26dcef6352f.hot-update.js.map