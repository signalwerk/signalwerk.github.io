(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{40:function(e,t,n){e.exports=n(47)()},41:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=c(n(0)),a=c(n(45)),i=c(n(40));function c(e){return e&&e.__esModule?e:{default:e}}var s=(0,a.default)({}),l=s.Provider,u=s.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,a=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["components"]);return o.default.createElement(u,null,function(t){return o.default.createElement(e,r({components:n||t},a))})}};var f=function(e){var t=e.components,n=e.children;return o.default.createElement(l,{value:t},n)};f.propTypes={components:i.default.object.isRequired,children:i.default.element.isRequired},t.default=f},42:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(43);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return a(r).default}});var o=n(41);function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return a(o).default}})},43:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),i=l(a),c=l(n(44)),s=n(41);function l(e){return e&&e.__esModule?e:{default:e}}var u={inlineCode:"code",wrapper:"div"},f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,o=e.props,a=void 0===o?{}:o,s=e.children,l=e.components,f=void 0===l?{}:l,p=e.Layout,d=e.layoutProps,h=f[n+"."+t]||f[t]||u[t]||t;return p?((0,c.default)(this,p),i.default.createElement(p,r({components:f},d),i.default.createElement(h,a,s))):i.default.createElement(h,a,s)}}]),t}();t.default=(0,s.withMDXComponents)(f)},44:function(e,t,n){"use strict";var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a=Object.defineProperty,i=Object.getOwnPropertyNames,c=Object.getOwnPropertySymbols,s=Object.getOwnPropertyDescriptor,l=Object.getPrototypeOf,u=l&&l(Object);e.exports=function e(t,n,f){if("string"!==typeof n){if(u){var p=l(n);p&&p!==u&&e(t,p,f)}var d=i(n);c&&(d=d.concat(c(n)));for(var h=0;h<d.length;++h){var m=d[h];if(!r[m]&&!o[m]&&(!f||!f[m])){var g=s(n,m);try{a(t,m,g)}catch(v){}}}return t}return t}},45:function(e,t,n){"use strict";t.__esModule=!0;var r=a(n(0)),o=a(n(46));function a(e){return e&&e.__esModule?e:{default:e}}t.default=r.default.createContext||o.default,e.exports=t.default},46:function(e,t,n){"use strict";t.__esModule=!0;var r=n(0),o=(i(r),i(n(40))),a=i(n(49));i(n(50));function i(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=1073741823;t.default=function(e,t){var n,i,f="__create-react-context-"+(0,a.default)()+"__",p=function(e){function n(){var t,r;c(this,n);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return t=r=s(this,e.call.apply(e,[this].concat(a))),r.emitter=function(e){var t=[];return{on:function(e){t.push(e)},off:function(e){t=t.filter(function(t){return t!==e})},get:function(){return e},set:function(n,r){e=n,t.forEach(function(t){return t(e,r)})}}}(r.props.value),s(r,t)}return l(n,e),n.prototype.getChildContext=function(){var e;return(e={})[f]=this.emitter,e},n.prototype.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var n=this.props.value,r=e.value,o=void 0;((a=n)===(i=r)?0!==a||1/a===1/i:a!==a&&i!==i)?o=0:(o="function"===typeof t?t(n,r):u,0!==(o|=0)&&this.emitter.set(e.value,o))}var a,i},n.prototype.render=function(){return this.props.children},n}(r.Component);p.childContextTypes=((n={})[f]=o.default.object.isRequired,n);var d=function(t){function n(){var e,r;c(this,n);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return e=r=s(this,t.call.apply(t,[this].concat(a))),r.state={value:r.getValue()},r.onUpdate=function(e,t){0!==((0|r.observedBits)&t)&&r.setState({value:r.getValue()})},s(r,e)}return l(n,t),n.prototype.componentWillReceiveProps=function(e){var t=e.observedBits;this.observedBits=void 0===t||null===t?u:t},n.prototype.componentDidMount=function(){this.context[f]&&this.context[f].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=void 0===e||null===e?u:e},n.prototype.componentWillUnmount=function(){this.context[f]&&this.context[f].off(this.onUpdate)},n.prototype.getValue=function(){return this.context[f]?this.context[f].get():e},n.prototype.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},n}(r.Component);return d.contextTypes=((i={})[f]=o.default.object,i),{Provider:p,Consumer:d}},e.exports=t.default},47:function(e,t,n){"use strict";var r=n(48);function o(){}e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=o,n.PropTypes=n,n}},48:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},49:function(e,t,n){"use strict";(function(t){var n="__global_unique_id__";e.exports=function(){return t[n]=(t[n]||0)+1}}).call(this,n(9))},50:function(e,t,n){"use strict";var r=n(51);e.exports=r},51:function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},53:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",function(){return r})},57:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(58).parse,a={"*":{renderer:"strong",raw:!1,multiline:!1},_:{renderer:"em",raw:!1,multiline:!1},"~":{renderer:"del",raw:!1,multiline:!1},"`":{renderer:"code",raw:!0,multiline:!1},"```":{renderer:"pre",raw:!0,multiline:!0,alwaysOpen:!0}},i=function e(t,n,a){return r.Children.map(t,function(t){return r.isValidElement(t)?r.cloneElement(t,{},e(t.props.children,n,a)):"string"===typeof t?function e(t,n,o,a){var i=t.type,c=function(r){return t.children.length?t.children.map(function(t,o){return e(t,n,r,o)}):null};return i&&t.closed?o?[i,c(o),i]:r.createElement(n[i].renderer,{key:a},c(n[i].raw)):[t.text+i,c(o)].filter(Boolean)}(o(t,n,a),a,!1,0):t})};t.default=function(e){var t=e.wrap,n=void 0===t?"div":t,o=e.options,c=void 0===o?a:o,s=e.children,l=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["wrap","options","children"]),u=Object.keys(c).sort(function(e,t){return t.length-e.length});return r.Children.count(s)?r.createElement(n,l,i(s,u,c)):null}},58:function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var o=function(e,t){return{type:e,parent:t,closed:!1,text:"",children:[]}},a=function(e,t,n){for(var r=0,o=e[n],a=t[0];r<t.length;a=t[++r])if(o===a[0]&&a===e.substr(n,a.length))return a;return""};t.parse=function(e,t,n){var i=[].concat(r(",.;:?!()[]{}/-\"'"),r(t),r("\n\r\t ")),c=o("",null),s=o("",c);c.children.push(s);var l,u,f=[],p=!1,d=function(e,t,n){return e.alwaysOpen||(!t||"\n\r\t ".includes(t)||p)&&!"\n\r\t ".includes(n)},h=void 0,m=void 0,g=void 0,v=void 0,y="",b=void 0,w=void 0,E="";for(h=0,l=e.length;h<l;){if("\n"===(g=e[h]))f=f.filter(function(e){return n[e].multiline});else if(E=a(e,t,h)){if(m=h+E.length,v=a(e,t,m)||e[m],(!(u=v)||i.includes(u))&&f.includes(E)){for(;f.length;)if(s=s.parent,f.pop()===E){s.closed=!0,w=s.parent,s=o("",w),w.children.push(s);break}h=m,y=E,p=!0;continue}if(d(n[E],y,v)&&!f.includes(E)){f.push(E),w=s.parent,b=o(E,w),w.children.push(b),s=o("",b),b.children.push(s),h=m,y=E,p=!0;continue}}p=!1,s.text+=g,y=g,h++}return c}},59:function(e,t,n){"use strict";var r;t.__esModule=!0,t.default=void 0;var o=((r=n(60))&&r.__esModule?r:{default:r}).default;t.default=o},60:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),o=c(n(40)),a=c(n(61)),i=c(n(62));function c(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l=function(e){var t,n;function o(t){var n;return(n=e.call(this,t)||this).isVisible=function(e,t,r){var o=e.top,a=e.left,i=e.bottom,c=e.right,s=e.width,l=e.height,u=n.props,f=u.offset,p=u.partialVisibility;if(o+c+i+a===0)return!1;var d=0-f,h=0-f,m=t+f,g=r+f;return p?o+l>=d&&a+s>=h&&i-l<=g&&c-s<=m:o>=d&&a>=h&&i<=g&&c<=m},n.isComponentVisible=function(){setTimeout(function(){if(n.nodeRef&&n.nodeRef.getBoundingClientRect){var e=document.documentElement,t=n.props.once,r=n.nodeRef.getBoundingClientRect(),o=window.innerWidth||e.clientWidth,a=window.innerHeight||e.clientHeight,i=n.isVisible(r,o,a);i&&t&&n.removeListener(),n.setState({isVisible:i})}},0)},n.setNodeRef=function(e){return n.nodeRef=e},n.ownProps=Object.keys(o.propTypes),n.state={isVisible:!1},n.throttleCb=(0,a.default)(n.isComponentVisible,n.props.throttleInterval),t.nodeRef&&n.setNodeRef(t.nodeRef),n}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var c=o.prototype;return c.componentDidMount=function(){this.attachListener(),this.isComponentVisible()},c.componentDidUpdate=function(e){(0,i.default)(this.getChildProps(this.props),this.getChildProps(e))||this.isComponentVisible()},c.componentWillUnmount=function(){this.removeListener()},c.attachListener=function(){window.addEventListener("scroll",this.throttleCb),window.addEventListener("resize",this.throttleCb)},c.removeListener=function(){window.removeEventListener("scroll",this.throttleCb),window.removeEventListener("resize",this.throttleCb)},c.getChildProps=function(e){var t=this;void 0===e&&(e=this.props);var n={};return Object.keys(e).forEach(function(r){-1===t.ownProps.indexOf(r)&&(n[r]=e[r])}),n},c.getChildren=function(){var e=this;return"function"===typeof this.props.children?this.props.children(s({},this.getChildProps(),{isVisible:this.state.isVisible})):r.default.Children.map(this.props.children,function(t){return r.default.cloneElement(t,s({},e.getChildProps(),{isVisible:e.state.isVisible}))})},c.render=function(){var e=this.props,t=e.className,n=e.style,o=e.nodeRef,a=e.tag,i=s({},t&&{className:t},n&&{style:n});return r.default.createElement(a,s({ref:!o&&this.setNodeRef},i),this.getChildren())},o}(r.PureComponent);t.default=l,l.propTypes={once:o.default.bool,throttleInterval:function(e,t,n){var r=e[t];return!Number.isInteger(r)||r<0?new Error("The "+t+" prop you provided to "+n+" is not a valid integer >= 0."):null},children:o.default.oneOfType([o.default.func,o.default.element,o.default.arrayOf(o.default.element)]),style:o.default.object,className:o.default.string,offset:o.default.number,partialVisibility:o.default.bool,nodeRef:o.default.object,tag:o.default.string},l.defaultProps={once:!1,throttleInterval:150,offset:0,partialVisibility:!1,tag:"div"}},61:function(e,t,n){(function(t){var n="Expected a function",r=NaN,o="[object Symbol]",a=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,s=/^0o[0-7]+$/i,l=parseInt,u="object"==typeof t&&t&&t.Object===Object&&t,f="object"==typeof self&&self&&self.Object===Object&&self,p=u||f||Function("return this")(),d=Object.prototype.toString,h=Math.max,m=Math.min,g=function(){return p.Date.now()};function v(e,t,r){var o,a,i,c,s,l,u=0,f=!1,p=!1,d=!0;if("function"!=typeof e)throw new TypeError(n);function v(t){var n=o,r=a;return o=a=void 0,u=t,c=e.apply(r,n)}function w(e){var n=e-l;return void 0===l||n>=t||n<0||p&&e-u>=i}function E(){var e=g();if(w(e))return S(e);s=setTimeout(E,function(e){var n=t-(e-l);return p?m(n,i-(e-u)):n}(e))}function S(e){return s=void 0,d&&o?v(e):(o=a=void 0,c)}function T(){var e=g(),n=w(e);if(o=arguments,a=this,l=e,n){if(void 0===s)return function(e){return u=e,s=setTimeout(E,t),f?v(e):c}(l);if(p)return s=setTimeout(E,t),v(l)}return void 0===s&&(s=setTimeout(E,t)),c}return t=b(t)||0,y(r)&&(f=!!r.leading,i=(p="maxWait"in r)?h(b(r.maxWait)||0,t):i,d="trailing"in r?!!r.trailing:d),T.cancel=function(){void 0!==s&&clearTimeout(s),u=0,o=l=a=s=void 0},T.flush=function(){return void 0===s?c:S(g())},T}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&d.call(e)==o}(e))return r;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=c.test(e);return n||s.test(e)?l(e.slice(2),n?2:8):i.test(e)?r:+e}e.exports=function(e,t,r){var o=!0,a=!0;if("function"!=typeof e)throw new TypeError(n);return y(r)&&(o="leading"in r?!!r.leading:o,a="trailing"in r?!!r.trailing:a),v(e,t,{leading:o,maxWait:t,trailing:a})}}).call(this,n(9))},62:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),s=0;s<a.length;s++){var l=a[s];if(!c(l))return!1;var u=e[l],f=t[l];if(!1===(o=n?n.call(r,u,f,l):void 0)||void 0===o&&u!==f)return!1}return!0}},70:function(e,t,n){"use strict";n.r(t);var r=n(53),o=n(0),a=n.n(o),i=n(42),c=n(54),s=n(52),l=n(65);t.default=function(e){var t=e.components;Object(r.a)(e,["components"]);return a.a.createElement(i.MDXTag,{name:"wrapper",components:t},a.a.createElement(i.MDXTag,{name:"h2",components:t},"Personal Details"),a.a.createElement(s.d,{data:"\n* Name                   |     Stefan Huber\n* Mail                   |     sh@signalwerk.ch\n* Mobile                 |     +41\u202f78\u202f744\u202f37\u202f38\n* Current residence      |     Zurich ~\xb7 Switzerland~\n* Year of birth          |     1981\n* Nationality            |     Swiss\n* Religion               |     Atheist ~\xb7 and laughing about it~\n* Marital status         |     Single\n* Erd\xf6s number           |     \u221e\n* Cyborg extensions      |     Glasses\n"}),a.a.createElement("hr",null),a.a.createElement(l.a,null),a.a.createElement(i.MDXTag,{name:"h2",components:t},"Professional Experience"),a.a.createElement(s.d,{data:"\n* 2006\u202f\u2013\u202fnow          | *Developer* ~\xb7 Self Employed \xb7 Zurich\u202f\u2013\u202fSwitzerland~\n* 2007\u202f\u2013\u202f2008         | *Assistant* ~\xb7 Zurich University of the Arts (ZHdK) \xb7 Department of Design \xb7 Zurich\u202f\u2013\u202fSwitzerland~\n* 2003\u202f\u2013\u202f2005         | *Typesetter & Head of Information Technology* ~\xb7 Team hp Schneider \xb7 Winterthur\u202f\u2013\u202fSwitzerland~\n* 2002                | *Typesetter & Graphic Designer* ~\xb7 ropress \xb7 Zurich\u202f\u2013\u202fSwitzerland~\n* 2001\u202f\u2013\u202f2002         | *Typesetter & Graphic Designer* ~\xb7 gdz AG \xb7 Zurich\u202f\u2013\u202fSwitzerland~\n"}),a.a.createElement(i.MDXTag,{name:"h2",components:t},"Degree"),a.a.createElement(s.d,{data:"\n* 2006\u202f\u2013\u202f2008         | *CAS Type Design* ~\xb7 Zurich University of the Arts (ZHdK) \xb7 Department of Design \xb7 Zurich\u202f\u2013\u202fSwitzerland~\n* 2002\u202f\u2013\u202f2004         | *Typographic Designer* ~\xb7 School of Design (SfGZ) \xb7 Zurich\u202f\u2013\u202fSwitzerland~\n* 1997\u202f\u2013\u202f2001         | *Polygraf* ~\xb7 School of Design (SfGZ) \xb7 Zurich\u202f\u2013\u202fSwitzerland~\n"}),a.a.createElement(i.MDXTag,{name:"h2",components:t},"Open Source Contributions"),a.a.createElement(i.MDXTag,{name:"ul",components:t},a.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Code-Contributions in about 50 Projects on GitHub"),a.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"100+ public Repos on GitHub"),a.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Adobe Translation Center (ATC)"),a.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Wikipedia Germany (official editor)")),a.a.createElement(i.MDXTag,{name:"h2",components:t},"Skill Set"),a.a.createElement(i.MDXTag,{name:"h3",components:t},"Programming Languages"),a.a.createElement(c.a,{showHeader:!0,data:"\n* 95       |   JavaScript\n* 45       |   Python\n* 40       |   PHP\n* 40       |   C & C++\n* 35       |   Java\n* 20       |   Ruby\n* 70       |   XSLT\n* 40       |   Shell/Bash Script"}),a.a.createElement(i.MDXTag,{name:"h3",components:t},"Frameworks"),a.a.createElement(c.a,{data:"\n* 90       |   react.js\n* 70       |   vue.js\n* 70       |   express.js\n* 30       |   ember.js\n* 30       |   backbone.js\n* 85       |   jQuery\n* 50       |   processing.org\n* 55       |   Paper.js"}),a.a.createElement(i.MDXTag,{name:"h3",components:t},"Testing"),a.a.createElement(c.a,{data:"\n* 70       |   Jest\n* 60       |   Mocha\n* 60       |   Jasmine"}),a.a.createElement(i.MDXTag,{name:"h3",components:t},"CSS Processors"),a.a.createElement(c.a,{data:"\n* 90       |   PostCSS\n* 85       |   SCSS\n* 70       |   LESS"}),a.a.createElement(i.MDXTag,{name:"h3",components:t},"Packaging"),a.a.createElement(c.a,{data:"\n* 75       |   webpack\n* 60       |   gulp"}),a.a.createElement(i.MDXTag,{name:"h3",components:t},"CI/CD"),a.a.createElement(c.a,{data:"\n* 80       |   Drone CI\n* 70       |   Travis CI\n* 55       |   GitLab CI/CD"}),a.a.createElement(i.MDXTag,{name:"h3",components:t},"Database"),a.a.createElement(c.a,{data:"\n* 80       |   Relational database (SQL)\n* 65       |   Document-oriented database"}),a.a.createElement(i.MDXTag,{name:"h3",components:t},"Good to know"),a.a.createElement(c.a,{data:"\n* 85       |   GIT/gitflow\n* 90       |   RegEx\n* 40       |   Linux/BSD Admin"}),a.a.createElement(i.MDXTag,{name:"h3",components:t},"Working with Designers"),a.a.createElement(c.a,{data:"\n* 65       |   Sketch\n* 35       |   Adobe XD\n* 75       |   Adobe Photoshop\n* 90       |   Adobe InDesign\n* 85       |   Adobe Illustrator"}),a.a.createElement(i.MDXTag,{name:"h2",components:t},"Experience"),a.a.createElement(i.MDXTag,{name:"h3",components:t},"Paradigm & Platform"),a.a.createElement(s.d,{data:"\n* 1998\u202f\u2013\u202fnow         | Procedural programming\n* 2000\u202f\u2013\u202fnow         | Declarative programming\n* 2005\u202f\u2013\u202fnow         | Object-oriented programming (OOP)\n* 2010\u202f\u2013\u202fnow         | Hardware programming (Microcontroller)\n* 2017\u202f\u2013\u202fnow         | Functional programming\n"}),a.a.createElement(i.MDXTag,{name:"h3",components:t},"Frameworks & Datafetching"),a.a.createElement(s.d,{data:"\n* 2019\u202f\u2013\u202fnow           | vue.js\n* 2016\u202f\u2013\u202fnow           | GraphQL\n* 2015\u202f\u2013\u202fnow           | react.js\n* 2011\u202f\u2013\u202f2014          | ember.js\n* 2010\u202f\u2013\u202fnow           | RESTful\n"}),a.a.createElement(i.MDXTag,{name:"h3",components:t},"Database"),a.a.createElement(s.d,{data:"\n* 2012\u202f\u2013\u202fnow         | Document-oriented databases\n* 2006\u202f\u2013\u202f2010        | Relational Databases (SQL)\n"}),a.a.createElement(i.MDXTag,{name:"h3",components:t},"Version Control"),a.a.createElement(s.d,{data:"\n* 2010\u202f\u2013\u202fnow         | GIT\n* 2006\u202f\u2013\u202f2010        | SVN\n"}),a.a.createElement(i.MDXTag,{name:"h2",components:t},"Languages"),a.a.createElement(s.d,{data:"\n* German\t| Native\n* English\t| Fluent ~\xb7 CEFR C2~\n* French\t| Intermediate ~\xb7 CEFR B1~\n* Spanish\t| Basic ~\xb7 CEFR A2~\n"}),a.a.createElement(i.MDXTag,{name:"h2",components:t},"Language Certificates"),a.a.createElement(s.d,{data:"\n* 2008 \t| Cambridge Certificate of Advanced English ~\xb7 CAE~\n* 2006\t| Cambridge First Certificate in English ~\xb7 FCE~\n"}),a.a.createElement(i.MDXTag,{name:"h2",components:t},"Teaching"),a.a.createElement(s.d,{data:"\n* 2017\u202f\u2013\u202fnow          | *Web-Technology for Interaction Designer* ~\xb7 School of Design (SfGZ) \xb7 Zurich\u202f\u2013\u202fSwitzerland~\n* 2014\u202f\u2013\u202f2015         | *Web-Technology for Designer* ~\xb7 School of Design (SfGZ) \xb7 Zurich\u202f\u2013\u202fSwitzerland~\n* 2008                | *Technical Training for Designer* ~\xb7 University of Applied Sciences and Arts \xb7 Lucerne\u202f\u2013\u202fSwitzerland~\n* 2007\u202f\u2013\u202f2008         | *Technical Training for Typesetter* ~\xb7 School of Design (SfGZ) \xb7 Zurich\u202f\u2013\u202fSwitzerland~\n* 2005\u202f\u2013\u202f2006         | *Technical Training for Graphic Designer* ~\xb7 School of Design (SfGZ) \xb7 Zurich\u202f\u2013\u202fSwitzerland~\n"}),a.a.createElement(i.MDXTag,{name:"h2",components:t},"Talks"),a.a.createElement(s.d,{data:"\n* 2019                | *Liberate books*  ~\xb7 Libre Graphics Meeting \xb7 Saarbr\xfccken\u202f\u2013\u202fGermany~\n* 2019                | *State of the Font*  ~\xb7 School of Design (SfGZ) \xb7 Zurich\u202f\u2013\u202fSwitzerland~\n* 2018                | *Git & Github*  ~\xb7 Meetup \xb7 Zurich\u202f\u2013\u202fSwitzerland~\n* 2018                | *React.js*  ~\xb7 Meetup \xb7 Zurich\u202f\u2013\u202fSwitzerland~\n* 2018                | *ramdajs*  ~\xb7 Meetup \xb7 Zurich\u202f\u2013\u202fSwitzerland~\n* 2018                | *paper.js*  ~\xb7 Meetup \xb7 Zurich\u202f\u2013\u202fSwitzerland~\n* 2018                | *Travis CI*  ~\xb7 Meetup \xb7 Zurich\u202f\u2013\u202fSwitzerland~\n* 2018                | *New Fonts! \u2013 New language?*  ~\xb7 Literature Days \xb7 Zofingen\u202f\u2013\u202fSwitzerland~\n* 2018                | *Generative Design shared in an URL*  ~\xb7 Libre Graphics Meeting \xb7 Sevilla\u202f\u2013\u202fSpain~\n* 2017                | *Abstraction in design \u2013 from hand to code*  ~\xb7 ZeTeCo \xb7 Schaffhausen\u202f\u2013\u202fSwitzerland~\n* 2014                | *Responsive design \u2013 who adapts to whom?*  ~\xb7 Meeting Point Publishing \xb7 Zurich\u202f\u2013\u202fSwitzerland~\n* 2011                | *Caminantes Grafico* ~\xb7 Hyperwerk Institute of Postindustrial Design \xb7 Basel\u202f\u2013\u202fSwitzerland~\n* 2010                | *New Fonts! Only why?* ~\xb7 Day of Font \xb7 Zurich\u202f\u2013\u202fSwitzerland~\n"}),a.a.createElement(i.MDXTag,{name:"h2",components:t},"Publications"),a.a.createElement(s.d,{data:"\n* 2019                | *Design Systems for the Web*  ~\xb7 Publisher 4/2019 \xb7 Switzerland~\n* 2019                | *Frontend-Frameworks \u2013 Websites today*  ~\xb7 Publisher 3/2019 \xb7 Switzerland~\n* 2014                | *Format a lifetime*  ~\xb7 M0ire 2 \xb7 2014 \xb7 Chicago/Switzerland~\n* 2013                | *How likely is the chance?*  ~\xb7 M0ire 1 \xb7 2013 \xb7 Chicago/Switzerland~\n"}),a.a.createElement(i.MDXTag,{name:"h2",components:t},"Volunteer"),a.a.createElement(s.d,{data:"\n* 2018\u202f\u2013\u202fnow          | *Teller* elected by city council ~\xb7 Zurich~\n* 2013\u202f\u2013\u202fnow          | *Auditor* \xb7 FabLab ~\xb7 Zurich~\n* 2013\u202f\u2013\u202f2015         | *Board member* \xb7 Verein f\xfcr die Schwarze Kunst e.V. ~\xb7 Dresden\u202f\u2013\u202fGermany~\n* 2008\u202f\u2013\u202f2013         | *Board assistant* \xb7 Grafisches Forum Z\xfcrich ~\xb7 Zurich\u202f\u2013\u202fSwitzerland~\n* 1999\u202f\u2013\u202f2008         | *Board member* \xb7 Youth Commission comedia ~\xb7 Switzerland~\n"}),a.a.createElement(i.MDXTag,{name:"h2",components:t},"Social service ",a.a.createElement("small",null,"\xb7 mandatory in Switzerland")),a.a.createElement(s.d,{data:"\n* 2010 \xb7 2 Month                | *Community worker* ~\xb7 Christuszentrum \xb7 Zurich\u202f\u2013\u202fSwitzerland~\n* 2009 \xb7 3 Month                | *Community worker* ~\xb7 Christuszentrum \xb7 Zurich\u202f\u2013\u202fSwitzerland~\n* 2008 \xb7 3 Month                | *Driver for disabled and elderly people* ~\xb7 TIXI \xb7 Zurich\u202f\u2013\u202fSwitzerland~\n* 2002 \xb7 4 Month                | *Archivist* ~\xb7 Swiss National Museum Zurich, Graphic Collection \xb7 Zurich\u202f\u2013\u202fSwitzerland~\n"}),a.a.createElement(i.MDXTag,{name:"h2",components:t},"Internship"),a.a.createElement(s.d,{data:"\n* 2009 \xb7 6 Month         | *Typesetting with movable types* ~\xb7 Offizin Haag Drugulin \xb7 Leipzig\u202f\u2013\u202fGermany~\n"}),a.a.createElement(i.MDXTag,{name:"h2",components:t},"Stays abroad"),a.a.createElement(s.d,{data:"\n* 2017 \xb7 1 Month     | *Sabbatical* ~\xb7 Ljubljana\u202f\u2013\u202fSlovenia~\n* 2012 \xb7 4 Month     | *Sabbatical* ~\xb7 New York\u202f\u2013\u202fUSA~\n* 2011 \xb7 3 Month     | *Sabbatical* ~\xb7 Various places \u2013 USA~\n* 2008 \xb7 3 Month     | *English School* ~\xb7 Sydney\u202f\u2013\u202fAustralia~\n* 2006 \xb7 3 Month     | *English School* ~\xb7 London\u202f\u2013\u202fUK~\n* 2006 \xb7 2 Month     | *Spanish School* ~\xb7 Valencia\u202f\u2013\u202fSpain~\n"}),a.a.createElement(i.MDXTag,{name:"h2",components:t},"Sport"),a.a.createElement(s.d,{data:"\n* 2010\u202f\u2013\u202fnow\t| 5\u202f\u2013\u202f7\u202fkm swimming per week\n* 1990\u202f\u2013\u202f2000\t| Judo\n"}),a.a.createElement(i.MDXTag,{name:"h2",components:t},"Other Certificates"),a.a.createElement(s.d,{data:"\n* Driving License | Swiss driving licenses ~\xb7 A1, B, D1 (3,5t;106), BE, D1E~\n* Publishing      | PDFX-ready \xb7 Creator Certified Expert ~\xb7 2005~\n"}),a.a.createElement(i.MDXTag,{name:"h2",components:t},"Personal Internet History"),a.a.createElement(s.d,{data:"\n* ~1997        \t| Mail-Address\n* 1999 \t        | ebay Account\n* ~2005 \t      | Podcast Listener\n* 2008 \t        | Editor-Status for de.wikipedia.org\n* 2011          | Twitter Account ~\xb7 User 318\u202f188\u202f188~\n* 2011\t        | github Account ~\xb7 User 992\u202f878~\n* 2012\t        | Spotify Premium \n* 2019          | Adoption of a character of \xabThe Unicode Consortium\xbb ~\xb7 U+2766 \u2766 FLORAL HEART~\n"}))}}}]);
//# sourceMappingURL=3.a9fc396a.chunk.js.map