(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"3Z9Z":function(e,t,a){"use strict";var r=a("wx14"),n=a("zLVn"),i=a("TSYQ"),s=a.n(i),o=a("q1tI"),d=a.n(o),l=a("vUet"),c=d.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.noGutters,o=e.as,c=void 0===o?"div":o,f=e.className,u=Object(n.a)(e,["bsPrefix","noGutters","as","className"]),p=Object(l.a)(a,"row");return d.a.createElement(c,Object(r.a)({ref:t},u,{className:s()(f,p,i&&"no-gutters")}))}));c.defaultProps={noGutters:!1},t.a=c},"7vrA":function(e,t,a){"use strict";var r=a("wx14"),n=a("zLVn"),i=a("TSYQ"),s=a.n(i),o=a("q1tI"),d=a.n(o),l=a("vUet"),c=d.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.fluid,o=e.as,c=void 0===o?"div":o,f=e.className,u=Object(n.a)(e,["bsPrefix","fluid","as","className"]),p=Object(l.a)(a,"container");return d.a.createElement(c,Object(r.a)({ref:t},u,{className:s()(f,i?p+"-fluid":p)}))}));c.displayName="Container",c.defaultProps={fluid:!1},t.a=c},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var n,i=r(a("PJYZ")),s=r(a("VbXa")),o=r(a("8OQS")),d=r(a("pVnL")),l=r(a("q1tI")),c=r(a("17x9")),f=function(e){var t=(0,d.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=A([].concat(t.fluid))),t.fixed&&(t.fixed=A([].concat(t.fixed))),t},u=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},p=Object.create({}),m=function(e){var t=f(e),a=u(t);return p[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,h=b&&window.IntersectionObserver,v=new WeakMap;function y(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),l.default.createElement("source",{media:n,srcSet:a,sizes:i}))}))}function A(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function S(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function E(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var x=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},N=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?E(e,!0):"")+E(e)})).join("")+"<img "+l+s+o+a+r+t+i+n+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},O=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,i=l.default.createElement(I,(0,d.default)({src:t},n));return a.length>1?l.default.createElement("picture",null,r(a),i):i},I=l.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,s=e.onLoad,c=e.onError,f=e.loading,u=e.draggable,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return l.default.createElement("img",(0,d.default)({sizes:a,srcSet:r,src:n},p,{onLoad:s,onError:c,ref:t,loading:f,draggable:u,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));I.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var R=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&m(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!g&&h&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||b&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=x(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=f(e),a=u(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=f(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,u=void 0===c?{}:c,p=e.placeholderClassName,m=e.fluid,g=e.fixed,b=e.backgroundColor,h=e.durationFadeIn,v=e.Tag,A=e.itemProp,E=e.loading,x=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,j=(0,d.default)({opacity:R?1:0,transition:C?"opacity "+h+"ms":"none"},o),z="boolean"==typeof b?"lightgray":b,P={transitionDelay:h+"ms"},k=(0,d.default)({opacity:this.state.imgLoaded?0:1},C&&P,{},o,{},u),L={title:t,alt:this.state.isVisible?"":a,style:k,className:p,itemProp:A};if(m){var V=m,T=V[0];return l.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},l.default.createElement(v,{style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),z&&l.default.createElement(v,{title:t,style:(0,d.default)({backgroundColor:z,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&P)}),T.base64&&l.default.createElement(O,{src:T.base64,spreadProps:L,imageVariants:V,generateSources:S}),T.tracedSVG&&l.default.createElement(O,{src:T.tracedSVG,spreadProps:L,imageVariants:V,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,y(V),l.default.createElement(I,{alt:a,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:A,loading:E,draggable:x})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,d.default)({alt:a,title:t,loading:E},T,{imageVariants:V}))}}))}if(g){var G=g,B=G[0],q=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:B.width,height:B.height},i);return"inherit"===i.display&&delete q.display,l.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(B.srcSet)},z&&l.default.createElement(v,{title:t,style:(0,d.default)({backgroundColor:z,width:B.width,opacity:this.state.imgLoaded?0:1,height:B.height},C&&P)}),B.base64&&l.default.createElement(O,{src:B.base64,spreadProps:L,imageVariants:G,generateSources:S}),B.tracedSVG&&l.default.createElement(O,{src:B.tracedSVG,spreadProps:L,imageVariants:G,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,y(G),l.default.createElement(I,{alt:a,title:t,width:B.width,height:B.height,sizes:B.sizes,src:B.src,crossOrigin:this.props.crossOrigin,srcSet:B.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:A,loading:E,draggable:x})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,d.default)({alt:a,title:t,loading:E},B,{imageVariants:G}))}}))}return null},t}(l.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),j=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});R.propTypes={resolutions:C,sizes:j,fixed:c.default.oneOfType([C,c.default.arrayOf(C)]),fluid:c.default.oneOfType([j,c.default.arrayOf(j)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var z=R;t.default=z},I22s:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),i=a("9eSz"),s=a.n(i);t.a=function(e){var t=e.imageInfo,a={borderRadius:"5px"},r=t.alt,i=void 0===r?"":r,o=t.childImageSharp,d=t.image;return d&&d.childImageSharp?n.a.createElement(s.a,{style:a,fluid:d.childImageSharp.fluid,alt:i}):o?n.a.createElement(s.a,{style:a,fluid:o.fluid,alt:i}):d&&"string"==typeof d?n.a.createElement("img",{style:a,src:d,alt:i}):null}},JI6e:function(e,t,a){"use strict";a("8+KV");var r=a("wx14"),n=a("zLVn"),i=a("TSYQ"),s=a.n(i),o=a("q1tI"),d=a.n(o),l=a("vUet"),c=["xl","lg","md","sm","xs"],f=d.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,o=e.as,f=void 0===o?"div":o,u=Object(n.a)(e,["bsPrefix","className","as"]),p=Object(l.a)(a,"col"),m=[],g=[];return c.forEach((function(e){var t,a,r,n=u[e];if(delete u[e],null!=n&&"object"==typeof n){var i=n.span;t=void 0===i||i,a=n.offset,r=n.order}else t=n;var s="xs"!==e?"-"+e:"";null!=t&&m.push(!0===t?""+p+s:""+p+s+"-"+t),null!=r&&g.push("order"+s+"-"+r),null!=a&&g.push("offset"+s+"-"+a)})),m.length||m.push(p),d.a.createElement(f,Object(r.a)({},u,{ref:t,className:s.a.apply(void 0,[i].concat(m,g))}))}));f.displayName="Col",t.a=f},Lbbq:function(e,t,a){"use strict";var r=a("VuFD"),n=a("q1tI"),i=a.n(n),s=a("Wbzz"),o=a("7vrA"),d=a("3Z9Z"),l=a("JI6e"),c=a("wx14"),f=a("zLVn"),u=a("TSYQ"),p=a.n(u),m=a("vUet"),g=a("YdCC"),b=function(e){return i.a.forwardRef((function(t,a){return i.a.createElement("div",Object(c.a)({},t,{ref:a,className:p()(t.className,e)}))}))},h=a("Wzyw"),v=i.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,n=e.variant,s=e.as,o=void 0===s?"img":s,d=Object(f.a)(e,["bsPrefix","className","variant","as"]),l=Object(m.a)(a,"card-img");return i.a.createElement(o,Object(c.a)({ref:t,className:p()(n?l+"-"+n:l,r)},d))}));v.displayName="CardImg",v.defaultProps={variant:null};var y=v,A=b("h5"),w=b("h6"),S=Object(g.a)("card-body"),E=i.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,s=e.bg,o=e.text,d=e.border,l=e.body,u=e.children,g=e.as,b=void 0===g?"div":g,v=Object(f.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),y=Object(m.a)(a,"card"),A=Object(n.useMemo)((function(){return{cardHeaderBsPrefix:y+"-header"}}),[y]);return i.a.createElement(h.a.Provider,{value:A},i.a.createElement(b,Object(c.a)({ref:t},v,{className:p()(r,y,s&&"bg-"+s,o&&"text-"+o,d&&"border-"+d)}),l?i.a.createElement(S,null,u):u))}));E.displayName="Card",E.defaultProps={body:!1},E.Img=y,E.Title=Object(g.a)("card-title",{Component:A}),E.Subtitle=Object(g.a)("card-subtitle",{Component:w}),E.Body=S,E.Link=Object(g.a)("card-link",{Component:"a"}),E.Text=Object(g.a)("card-text",{Component:"p"}),E.Header=Object(g.a)("card-header"),E.Footer=Object(g.a)("card-footer"),E.ImgOverlay=Object(g.a)("card-img-overlay");var x=E,N=a("I22s");a("/gNm");var O=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges;return i.a.createElement("section",{className:"blog-block",id:"blog"},i.a.createElement(o.a,null,i.a.createElement("div",{className:"section-title text-center"},i.a.createElement("span",{className:"badge badge-primary"},"BLOGS"),i.a.createElement("h2",null,"Blogs We Wrote For You"),i.a.createElement("span",{className:"section-title-line"})),i.a.createElement(d.a,null,e&&e.map((function(e){var t,a=e.node;return i.a.createElement(l.a,((t={xs:12}).xs=4,t.key=a.id,t),i.a.createElement(x,{className:"card theme-card blog-card "+(a.frontmatter.featuredpost?"is-featured":"")},a.frontmatter.featuredimage?i.a.createElement("div",{className:"featured-thumbnail"},i.a.createElement(N.a,{imageInfo:{image:a.frontmatter.featuredimage,alt:"featured image thumbnail for post "+a.frontmatter.title}})):null,i.a.createElement(x.Body,null,i.a.createElement("span",{className:"badge badge-primary"},"ANALYTICS"),i.a.createElement("h6",null,i.a.createElement(s.a,{className:"title has-text-primary is-size-4",to:a.fields.slug},a.frontmatter.title)),i.a.createElement(x.Text,null,i.a.createElement("span",null,a.frontmatter.date),a.excerpt),i.a.createElement("div",{className:"blog-author"},i.a.createElement("p",null,i.a.createElement("img",{className:"rounded-circle",src:"https://askbootstrap.com/preview/osahan-soft-themez-pro/img/stories/2.png",alt:"Card image cap"})," ",i.a.createElement("strong",null,"Black Smith")," On October 03, 2019")))))})))))},r}(i.a.Component);t.a=function(){return i.a.createElement(s.b,{query:"2235979697",render:function(e,t){return i.a.createElement(O,{data:e,count:t})},data:r})}},QA0p:function(e,t,a){"use strict";a("91GP"),a("f3/d"),t.__esModule=!0,t.default=function(e,t){var a=void 0===t?{}:t,r=a.propTypes,i=a.defaultProps,s=a.allowFallback,o=void 0!==s&&s,d=a.displayName,l=void 0===d?e.name||e.displayName:d,c=function(t,a){return e(t,a)};return Object.assign(n.default.forwardRef||!o?n.default.forwardRef(c):function(e){return c(e,null)},{displayName:l,propTypes:r,defaultProps:i})};var r,n=(r=a("q1tI"))&&r.__esModule?r:{default:r}},TSYQ:function(e,t,a){var r;a("LK8F"),function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var s=n.apply(null,r);s&&e.push(s)}else if("object"===i)for(var o in r)a.call(r,o)&&r[o]&&e.push(o)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},VuFD:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"excerpt":"This week we’ll take a look at all the steps required to make astonishing coffee with a Chemex at home. The Chemex Coffeemaker is a manual, pour-over style glass-container coffeemaker that Peter…","id":"f30faa3b-b547-5ac9-87b4-112f3c963405","fields":{"slug":"/blog/2017-01-04-a-beginners-guide-to-brewing-with-chemex/"},"frontmatter":{"title":"Operating System Updates","templateKey":"blog-post","date":"November 05, 2020","featuredpost":false,"featuredimage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsSAAALEgHS3X78AAADEElEQVQozy2QWUwTURSG580HNcYH4/KgMZq4xX1XgiKbxqAixA1ECwoiraWVUrYWm1JKFxWEURA0RmOIDxoTIwGhtnRsC22nzEzpFDT6CKJWus7cO8TlNpqcp5N8//efgwFGB/0GGGiFQVwIdgrBLoG9DycfxpieaePNqY7qXxOdgGxDGxi4B/13AGPgx7Q8qU64azDINAt+sxBo+w+zuMA++c3PRMw9PmwdvTQ1dPFYPGONYFULEx2QNiEYUDoEc55aDDB6iGC2DbIdMPjgVxCfIbsGPa+/1LcQ8zZTyw/7l2+eXb0APCwCnzoAZQSMMQl7GzmPEpn1gv920szigMXnWDxKNpVJtu5IWancvtGyN+P9slXu+YumTRfnPt/jfXpAG3iflvM2cG4lMjcnzeOtkG1HcsDc/RMwyRuytm9a0ivPJXH587xd0m0LtdUrv3ukkNRxPnSwBnVOjFRhkNJCpuWfXBhvg7QZjDV97Be/kaY5ak9aFTkvJDn7dq44Xr7Y/jJVcGsSbjXvUSVGq+MjMgxQGkA3Q8aA3oYqoFaA1MQIuaUu21ZfQNTlDYozxelrFdUHpoZKY05FYhQ5axKuqphLhvG+RkDrkBwyRsiYAKXn3OqYo9KqyWbwRtut8ju5G4JPToQspRGbNELIER93KWKum1GnFOO99QDxVBOk9ZBu5ryauEsJRmX9qvT2vL2K1I3aU+snnh2d7isK2yVhe2X0gyzqQIOCKjDOo+C9tYBUJSNI9Rylijll7OPTr6WHugtTegoOdJ7eOiBPszakBJ/mRQhx2F4RISQRe0XYXoYlRio5tyI56AdOeaAnn2hMG5Dut6tOsndF48ZChyqH1J3zNp1/e/3gsC49bL/203bt53BZyFaCRT+UR52SMHE9PiImWjJfiXbblJm22izafHmyvfwjLp7sklHmksB96Zi5uDt/S+BZ7qxV9G3o0vd3hdis7erscGnYeuXHkKi3dNeA7Kil6sioNp82FTOGy2xr2SR+Y0xfSNTnOjRnHp3bYzEdCQ0VfO27MNN/9i+Ei/v7VMYL3wAAAABJRU5ErkJggg==","aspectRatio":1.5009380863039399,"src":"/static/654192b5f5f599e872f61f9e1103e64d/c0382/2.png","srcSet":"/static/654192b5f5f599e872f61f9e1103e64d/5dcac/2.png 30w,\\n/static/654192b5f5f599e872f61f9e1103e64d/6919b/2.png 60w,\\n/static/654192b5f5f599e872f61f9e1103e64d/c0382/2.png 120w,\\n/static/654192b5f5f599e872f61f9e1103e64d/8fd0d/2.png 180w,\\n/static/654192b5f5f599e872f61f9e1103e64d/cca1d/2.png 240w,\\n/static/654192b5f5f599e872f61f9e1103e64d/ea5de/2.png 800w","sizes":"(max-width: 120px) 100vw, 120px"}}}}}},{"node":{"excerpt":"January 04, 2017This week we’ll take a look at all the steps required to make astonishing coffee with a Chemex at home. The Chemex Coffeemaker is a manual","id":"efb1814e-d65d-535e-8dac-607272037f4e","fields":{"slug":"/blog/2020-01-13-system-security-testing/"},"frontmatter":{"title":"System Security Testing","templateKey":"blog-post","date":"January 13, 2020","featuredpost":true,"featuredimage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsSAAALEgHS3X78AAAB60lEQVQoz02SR2/bQBSE9f//QA5Os02rmlShWERKNJskqpckSIN1COycbJ8SJ3Cg2cwjZUPA4GFJ7LfzWkm1h2imuRKelTkWdTNlT+HO0VvAmcHKwGt6iGofVR+VHiou6n5JtZ5hHswx7KlyZqo3h7/AYCXyl+CnNUE7RX1wgMsuI+FU0bOZqs6IpFgNlgg3iLaiqw36S3gL2BO0YjRymKRm48J5gRPVGUuGvBesVbpVk88q3Ozt2d6aSGmXISoeNIeMxHMLmlUSz2YiKXUJ03m2H376+eVbNFxfu9H9dPXDin/T8E1LnRh4beBtG6ddnJo46x7DGQtjn/6td5u7X062+JAlD6uv14H3veP9eaerVzWc6AK/N49gI0ErhZlJYc5UhdvH3e1iPb/xkruPu5uyf6t1nzRLnbNON0/bxplFPdfMVtNZxnMo+ymY763s7yB97PDpkeoMJTv9CrW+dJu8Zhdpp2iPZE4Fz8FQbB7HZk1l4MyIHWknuCScj+rCKbqdz7mV85wWebaN4mK8SMghjCi39WRUhKteSbbKiKFHYOVF8cUT5ijXGEXCzQiN4LAehWrcMCNSdSYTgLE4NELosSwjX2zGMPIzPcv0PIJlPXmDQIWrM5BYHPinlkfuBg1ZJzHNPYb39f5/rAV4NUoliycAAAAASUVORK5CYII=","aspectRatio":1.5009380863039399,"src":"/static/df94e2ccd177d862dbfdfd88cfcab00d/c0382/oldheart.png","srcSet":"/static/df94e2ccd177d862dbfdfd88cfcab00d/5dcac/oldheart.png 30w,\\n/static/df94e2ccd177d862dbfdfd88cfcab00d/6919b/oldheart.png 60w,\\n/static/df94e2ccd177d862dbfdfd88cfcab00d/c0382/oldheart.png 120w,\\n/static/df94e2ccd177d862dbfdfd88cfcab00d/8fd0d/oldheart.png 180w,\\n/static/df94e2ccd177d862dbfdfd88cfcab00d/cca1d/oldheart.png 240w,\\n/static/df94e2ccd177d862dbfdfd88cfcab00d/ea5de/oldheart.png 800w","sizes":"(max-width: 120px) 100vw, 120px"}}}}}},{"node":{"excerpt":"We expect the shipment of a limited quantity of green beans next Monday. We’ll be offering the roasted beans from Tuesday, but quantities are limited, so be quick. Blue Mountain Peak is the highest…","id":"6562d246-2414-5224-bb8b-0331669c0e13","fields":{"slug":"/blog/2017-01-04-just-in-small-batch-of-jamaican-blue-mountain-in-store-next-week/"},"frontmatter":{"title":"System Security Testing","templateKey":"blog-post","date":"January 07, 2020","featuredpost":true,"featuredimage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsSAAALEgHS3X78AAAB2UlEQVQoz1WRu2/TQBjA76/qwoI6I8GGxMwCdAAxMCGoGBgZuoBK6YBgaFDTR5yXk9ZxiUtTTFI7tuNH3NIRNb77jnTnu7tcZaSfTnen+933Inx6yqcDNv3J8iG/8BA4H0EuLnk2gPSYJX2WfIfE1vQgRg5hYhElCz8/hdwV6BtIHNRYcqQdSzjxIZsgB7gSni+e/kd2wspmbGmhRISyTE9zgkAmUuWZQ5M+pEd/UxufQoR05ao2XQi7BNIfWNiCRFeY9q+CrvPxtbX24s/IAAwbtAEJOxITQjyahKWOFPoySZEni3vX58fjxkb12d33D5Yz89N11iv8BguaLGhpxJ6UNSwPzXlmXw721t88/fry4bvH9z+/fc6jVuHX6Vj5igYeidT0GOQMsMKZ3/br6x9erdy7tfTozu0L+wuEzcI3KDpBEzU6rlO/QUAE7Akm1qKNYWceH/x2ttydtc3Vlc3VJ1fDXfH6BvzFqzHPIBDbKppCttHEenjUnicmDww+rjEl+AYTDrLPznbZ2R4pDxCijjKZzG3m1aiHQW6cGgpSQ6p0VCU4az03ZbalrKoyRBCF0JAdOtoWDL8VboVAZOnpdbTZEi3x64sMSzEpysNt+qtSuFszt/IPGYJ/AOXq3QoAAAAASUVORK5CYII=","aspectRatio":1.5009380863039399,"src":"/static/00fcd82b8486b48682a36de43f53a88d/c0382/3.png","srcSet":"/static/00fcd82b8486b48682a36de43f53a88d/5dcac/3.png 30w,\\n/static/00fcd82b8486b48682a36de43f53a88d/6919b/3.png 60w,\\n/static/00fcd82b8486b48682a36de43f53a88d/c0382/3.png 120w,\\n/static/00fcd82b8486b48682a36de43f53a88d/8fd0d/3.png 180w,\\n/static/00fcd82b8486b48682a36de43f53a88d/cca1d/3.png 240w,\\n/static/00fcd82b8486b48682a36de43f53a88d/ea5de/3.png 800w","sizes":"(max-width: 120px) 100vw, 120px"}}}}}}]}}}')},Wzyw:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r);t.a=n.a.createContext(null)},YZWa:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return o}));var r=a("q1tI"),n=a.n(r),i=a("7oih"),s=a("Lbbq");var o=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){return n.a.createElement(i.a,null,n.a.createElement("div",{className:"full-width-image-container margin-top-0",style:{backgroundImage:"url('/img/blog-index.jpg')"}},n.a.createElement("h1",{className:"has-text-weight-bold is-size-1",style:{boxShadow:"0.5rem 0 0 #f40, -0.5rem 0 0 #f40",backgroundColor:"#f40",color:"white",padding:"1rem"}},"Latest Stories")),n.a.createElement("section",{className:"section"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"content"},n.a.createElement(s.a,null)))))},r}(n.a.Component)},YdCC:function(e,t,a){"use strict";var r=a("wx14"),n=a("zLVn"),i=a("TSYQ"),s=a.n(i),o=(a("pIFo"),/-(.)/g);var d=a("q1tI"),l=a.n(d),c=a("vUet");a.d(t,"a",(function(){return u}));var f=function(e){return e[0].toUpperCase()+(t=e,t.replace(o,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function u(e,t){var a=void 0===t?{}:t,i=a.displayName,o=void 0===i?f(e):i,d=a.Component,u=void 0===d?"div":d,p=a.defaultProps,m=l.a.forwardRef((function(t,a){var i=t.className,o=t.bsPrefix,d=t.as,f=void 0===d?u:d,p=Object(n.a)(t,["className","bsPrefix","as"]),m=Object(c.a)(o,e);return l.a.createElement(f,Object(r.a)({ref:a,className:s()(i,m)},p))}));return m.defaultProps=p,m.displayName=o,m}},vUet:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));a("f3/d"),a("wx14"),a("QA0p");var r=a("q1tI"),n=a.n(r),i=n.a.createContext({});i.Consumer,i.Provider;function s(e,t){var a=Object(r.useContext)(i);return e||a[t]||t}},wx14:function(e,t,a){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return r}))},zLVn:function(e,t,a){"use strict";function r(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}a.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=component---src-pages-blog-index-js-65b4043861b569bd44b4.js.map