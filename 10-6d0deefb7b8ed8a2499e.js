(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1010:function(e,t,n){"use strict";function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=o?Object.getOwnPropertyDescriptor(e,r):null;a&&(a.get||a.set)?Object.defineProperty(n,r,a):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n(0)),r=f(n(2)),a=f(n(4)),u=n(135),i=f(n(1015)),s=f(n(236)),d=n(21),c=f(n(1016));function f(e){return e&&e.__esModule?e:{default:e}}function p(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],l=!0,o=!1,r=void 0;try{for(var a,u=e[Symbol.iterator]();!(l=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);l=!0);}catch(e){o=!0,r=e}finally{try{l||null==u.return||u.return()}finally{if(o)throw r}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}var _=a.default.bind(c.default),b={example:r.default.element,exampleSrc:r.default.element,exampleCssSrc:r.default.element,title:r.default.string,description:r.default.node,isExpanded:r.default.bool},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},g=function(e){var t=e.example,n=e.exampleSrc,l=e.exampleCssSrc,r=e.title,a=e.description,c=e.isExpanded,f=m((0,o.useState)(c),2),p=f[0],h=f[1],b=m((0,o.useState)(!1),2),g=b[0],O=b[1],C=o.default.useContext(u.ThemeContext),w=void 0!==l,k=function(){O(!g),p&&h(!p)},E=function(){h(!p),g&&O(!g)},x=function(e,t){e.nativeEvent.keyCode!==d.KEY_SPACE&&e.nativeEvent.keyCode!==d.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:_("template",C.className)},o.default.createElement("div",{className:_("header")},r&&o.default.createElement("h2",{className:_("title")},r)),o.default.createElement("div",{className:_("content")},a&&o.default.createElement("div",{className:_("description")},a),t),o.default.createElement("div",{className:_("footer")},n?o.default.createElement("div",{className:_("button-container")},w&&o.default.createElement("button",{type:"button",className:_("css-toggle","item",{"is-selected":g}),onClick:k,onKeyDown:function(e){return x(e,k)},onBlur:y,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(i.default,{className:_("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(s.default,{className:_("chevron")})),o.default.createElement("button",{type:"button",className:_("code-toggle","item",{"is-selected":p}),onClick:E,onKeyDown:function(e){return x(e,E)},onBlur:y,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(i.default,{className:_("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(s.default,{className:_("chevron")}))):null,o.default.createElement("div",null,g&&o.default.createElement("div",{className:_("css")},l),p&&o.default.createElement("div",{className:_("code")},n))))};g.propTypes=b,g.defaultProps={isExpanded:!1};var O=g;t.default=O},1011:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(n(0)),o=u(n(2)),r=u(n(4)),a=u(n(1012));function u(e){return e&&e.__esModule?e:{default:e}}var i=r.default.bind(a.default),s={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},d=function(e){var t=e.src,n=e.name,o=e.url,r=e.version,a=l.default.createElement("a",{className:i("badge"),href:o||"https://www.npmjs.org/package/".concat(n,"/v/").concat(r)},l.default.createElement("span",{className:i("badge-name")},o?"package":"npm"),l.default.createElement("span",{className:i("badge-version")},"v".concat(r))),u=t?l.default.createElement("a",{className:i("badge"),href:t},l.default.createElement("span",{className:i("badge-name")},"github"),l.default.createElement("span",{className:i("badge-version")},"source")):void 0;return l.default.createElement("div",{className:i("badge-container")},a,u)};d.propTypes=s;var c=d;t.default=c},1012:function(e,t,n){e.exports={badge:"Badges-module__badge___3m7y2","badge-container":"Badges-module__badge-container___1YxI5","badge-name":"Badges-module__badge-name___BQ3u4","badge-version":"Badges-module__badge-version___3OgwS"}},1013:function(e,t,n){"use strict";function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=o?Object.getOwnPropertyDescriptor(e,r):null;a&&(a.get||a.set)?Object.defineProperty(n,r,a):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n(0)),r=s(n(2)),a=s(n(4)),u=n(135),i=s(n(1014));function s(e){return e&&e.__esModule?e:{default:e}}function d(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}var c=a.default.bind(i.default),f={rows:r.default.arrayOf(r.default.shape({name:r.default.string,type:r.default.func,required:r.default.bool,defaultValue:r.default.string,description:r.default.func}))},p=function(e){var t=e.rows,n=(0,o.useContext)(u.ThemeContext);return o.default.createElement("table",{className:c("table",n.className)},o.default.createElement("thead",null,o.default.createElement("tr",{className:c("tr")},o.default.createElement("th",{className:c("th")},"Prop Name"),o.default.createElement("th",{className:c("th")},"Type"),o.default.createElement("th",{className:c("th")},"Is Required"),o.default.createElement("th",{className:c("th")},"Default Value"),o.default.createElement("th",{className:c("th")},"Description"))),o.default.createElement("tbody",null,t.map((function(e){return o.default.createElement("tr",{className:c("tr","props-tr"),key:e.name},o.default.createElement("td",{className:c(["td","strong","props-td"])},e.name),o.default.createElement("td",{className:c(["td","props-td"])},e.type()),o.default.createElement("td",{className:c(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),o.default.createElement("td",{className:c(["td","props-td"])},e.defaultValue),o.default.createElement("td",{className:c(["td","props-td"])},e.description()))}))))};p.propTypes=f;var m=p;t.default=m},1014:function(e,t,n){e.exports={"orion-fusion-theme":"PropsTable-module__orion-fusion-theme___1kDLT",a:"PropsTable-module__a___6WaJD",blockquote:"PropsTable-module__blockquote___2loIo",code:"PropsTable-module__code___1vedU",dd:"PropsTable-module__dd___3pYcW",dl:"PropsTable-module__dl___397p5",dt:"PropsTable-module__dt___1-GVs",h1:"PropsTable-module__h1___1OAAp",h2:"PropsTable-module__h2___2iZ6i",h3:"PropsTable-module__h3___3N0fw",h4:"PropsTable-module__h4___214vu",h5:"PropsTable-module__h5___1ajw8",h6:"PropsTable-module__h6___19W7i","icon-link":"PropsTable-module__icon-link___HUOC7",anchor:"PropsTable-module__anchor___1UTVD",hr:"PropsTable-module__hr___15B3j",img:"PropsTable-module__img___1rEq-",input:"PropsTable-module__input___1WHRX",kbd:"PropsTable-module__kbd___2DvPC",li:"PropsTable-module__li___1T8DQ",p:"PropsTable-module__p___3ssgC",ol:"PropsTable-module__ol___2tCva",ul:"PropsTable-module__ul___DlvOz",td:"PropsTable-module__td___3svU1",pre:"PropsTable-module__pre___3qXsS",strong:"PropsTable-module__strong___2DSlR",table:"PropsTable-module__table___1sV8g",th:"PropsTable-module__th___RQkAz",tr:"PropsTable-module__tr___1dras",icon:"PropsTable-module__icon___1fv-c",required:"PropsTable-module__required___1b3oJ","props-tr":"PropsTable-module__props-tr___1c88t","props-td":"PropsTable-module__props-td___dEhbY"}},1015:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(0)),o=r(n(20));function r(e){return e&&e.__esModule?e:{default:e}}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}var u=function(e){var t=a({},e);return l.default.createElement(o.default,t,l.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};u.displayName="IconChevronLeft",u.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var i=u;t.default=i},1016:function(e,t,n){e.exports={"orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___MlAIc",template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",css:"ExampleTemplate-module__css___3yyDQ",code:"ExampleTemplate-module__code____AmLF","css-toggle":"ExampleTemplate-module__css-toggle___2I9Yn","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","is-selected":"ExampleTemplate-module__is-selected___1H6Un",item:"ExampleTemplate-module__item___1N1C-",chevron:"ExampleTemplate-module__chevron___3Xlby",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}},1028:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=d(n(0)),o=d(n(2)),r=d(n(10)),a=d(n(4)),u=d(n(7)),i=d(n(1208)),s=d(n(1209));function d(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var h=a.default.bind(i.default),_={checked:o.default.bool,defaultChecked:o.default.bool,id:o.default.string,inputAttrs:o.default.object,disabled:o.default.bool,isInline:o.default.bool,isLabelHidden:o.default.bool,labelText:o.default.string.isRequired,labelTextAttrs:o.default.object,name:o.default.string,onBlur:o.default.func,onChange:o.default.func,onFocus:o.default.func,value:o.default.string},b={checked:void 0,defaultChecked:void 0,id:void 0,inputAttrs:{},disabled:!1,isInline:!1,isLabelHidden:!1,labelTextAttrs:{},name:null,onBlur:void 0,onChange:void 0,onFocus:void 0,value:void 0},y=function(e){var t=e.checked,n=e.defaultChecked,o=e.inputAttrs,a=e.id,i=e.disabled,d=e.isInline,_=e.isLabelHidden,b=e.labelText,y=e.labelTextAttrs,v=e.name,g=e.onBlur,O=e.onChange,C=e.onFocus,w=e.value,k=m(e,["checked","defaultChecked","inputAttrs","id","disabled","isInline","isLabelHidden","labelText","labelTextAttrs","name","onBlur","onChange","onFocus","value"]),E=l.default.useContext(u.default),x=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},o);void 0!==t?x.checked=t:x.defaultChecked=n;var P=(0,r.default)(h("checkbox",{"is-inline":d},E.className),k.className),T=h(["label",{"is-disabled":i},{"is-mobile":s.default.isConsideredMobileDevice()},y.className]),j=h(["native-input",o.className]),N=h(["label-text",{"is-hidden":_},{"is-mobile":s.default.isConsideredMobileDevice()}]),S=null;return _?(x["aria-label"]=b,S=l.default.createElement("span",c({},y,{className:N}))):S=l.default.createElement("span",c({},y,{className:N}),b),l.default.createElement("div",c({},k,{className:P}),l.default.createElement("label",{htmlFor:a,className:T},l.default.createElement("input",c({},x,{type:"checkbox",id:a,disabled:i,name:v,value:w,onChange:O,onFocus:C,onBlur:g,className:j})),S))};y.propTypes=_,y.defaultProps=b,y.isCheckbox=!0;var v=y;t.default=v},1183:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=c(n(0)),o=c(n(2)),r=c(n(10)),a=c(n(4)),u=c(n(7)),i=c(n(1244)),s=c(n(1245)),d=c(n(1186));function c(e){return e&&e.__esModule?e:{default:e}}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function h(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=g(e);if(t){var o=g(this).constructor;n=Reflect.construct(l,arguments,o)}else n=l.apply(this,arguments);return y(this,n)}}function y(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?v(e):t}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var O=a.default.bind(d.default),C={children:o.default.node,isBlock:o.default.bool,onChange:o.default.func,selectedKeys:o.default.arrayOf(o.default.string)},w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(u,e);var t,n,o,a=b(u);function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=a.call(this,e)).handleOnChange=t.handleOnChange.bind(v(t)),t}return t=u,(n=[{key:"handleOnChange",value:function(e,t){this.props.onChange&&this.props.onChange(e,t)}},{key:"wrapOnClick",value:function(e){var t=this,n=e.props.onClick;return function(l){t.handleOnChange(l,e.key),n&&n(l)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,o=t.isBlock,a=(t.onChange,t.selectedKeys),u=m(t,["children","isBlock","onChange","selectedKeys"]),i=this.context,s=(0,r.default)(O("button-group",{"is-block":o},i.className),u.className),d=n?[]:void 0;return l.default.Children.forEach(n,(function(t){var n=a.indexOf(t.key)>-1,o=l.default.cloneElement(t,{onClick:e.wrapOnClick(t),className:O([{"is-selected":n&&!t.props.isDisabled},t.props.className]),"aria-pressed":n||null});d.push(o)})),l.default.createElement("div",p({},u,{className:s}),d)}}])&&h(t.prototype,n),o&&h(t,o),u}(l.default.Component);w.propTypes=C,w.defaultProps={children:[],isBlock:!1,selectedKeys:[]},w.Button=i.default,w.Utils=s.default,w.contextType=u.default;var k=w;t.default=k},1186:function(e,t,n){e.exports={"orion-fusion-theme":"ButtonGroup-module__orion-fusion-theme___TJ0Vx","button-group":"ButtonGroup-module__button-group___2JyPs","button-group-button":"ButtonGroup-module__button-group-button___1KiEd","is-disabled":"ButtonGroup-module__is-disabled___2FRg4","is-focused":"ButtonGroup-module__is-focused___3YArm","is-selected":"ButtonGroup-module__is-selected___2fC6r","is-block":"ButtonGroup-module__is-block___1dTp_"}},1208:function(e,t,n){e.exports={"orion-fusion-theme":"Checkbox-module__orion-fusion-theme___1ZDTd",checkbox:"Checkbox-module__checkbox___HI9Vi",label:"Checkbox-module__label___3E8fg","is-mobile":"Checkbox-module__is-mobile___frQvN","native-input":"Checkbox-module__native-input___GvkXw","label-text":"Checkbox-module__label-text___fY5lt","is-hidden":"Checkbox-module__is-hidden___26Rqh","is-disabled":"Checkbox-module__is-disabled___WSQKG","is-inline":"Checkbox-module__is-inline___1jo0Z"}},1209:function(e,t,n){"use strict";var l={isConsideredMobileDevice:function(){return window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)}};e.exports=l},1244:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=f(n(0)),o=f(n(2)),r=f(n(57)),a=f(n(10)),u=f(n(4)),i=f(n(7)),s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==p(e)&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var r=l?Object.getOwnPropertyDescriptor(e,o):null;r&&(r.get||r.set)?Object.defineProperty(n,o,r):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(21)),d=f(n(1186));function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function f(e){return e&&e.__esModule?e:{default:e}}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function _(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=O(e);if(t){var o=O(this).constructor;n=Reflect.construct(l,arguments,o)}else n=l.apply(this,arguments);return v(this,n)}}function v(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var C=u.default.bind(d.default),w={icon:o.default.element,isDisabled:o.default.bool,onBlur:o.default.func,onClick:o.default.func,onFocus:o.default.func,onKeyDown:o.default.func,onKeyUp:o.default.func,text:o.default.string.isRequired},k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(i,e);var t,n,o,u=y(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=u.call(this,e)).state={focused:!1},t.handleKeyDown=t.handleKeyDown.bind(g(t)),t.handleKeyUp=t.handleKeyUp.bind(g(t)),t.handleOnBlur=t.handleOnBlur.bind(g(t)),t.handleFocus=t.handleFocus.bind(g(t)),t.shouldShowFocus=!1,t}return t=i,(n=[{key:"handleOnBlur",value:function(e){document.activeElement===e.currentTarget&&this.state.focused?this.shouldShowFocus=!0:(this.shouldShowFocus=!1,this.setState({focused:!1})),this.props.onBlur&&this.props.onBlur(e)}},{key:"handleKeyDown",value:function(e){e.nativeEvent.keyCode!==s.KEY_SPACE&&e.nativeEvent.keyCode!==s.KEY_RETURN||this.setState({focused:!0}),this.props.onKeyDown&&this.props.onKeyDown(e)}},{key:"handleKeyUp",value:function(e){e.nativeEvent.keyCode===s.KEY_TAB&&(this.setState({focused:!0}),this.shouldShowFocus=!0),this.props.onKeyUp&&this.props.onKeyUp(e)}},{key:"handleFocus",value:function(e){this.shouldShowFocus&&this.setState({focused:!0}),this.props.onFocus&&this.props.onFocus(e)}},{key:"render",value:function(){var e=this.props,t=e.icon,n=e.isDisabled,o=(e.onFocus,h(e,["icon","isDisabled","onFocus"])),u=this.context,i=(0,a.default)(C("button-group-button",{"is-disabled":n},{"is-focused":this.state.focused&&!n},u.className),o.className);return l.default.createElement(r.default,m({},o,{icon:t,isDisabled:n,isIconOnly:null!=t,onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,onBlur:this.handleOnBlur,onFocus:this.handleFocus,variant:r.default.Opts.Variants.NEUTRAL,className:i}))}}])&&_(t.prototype,n),o&&_(t,o),i}(l.default.Component);k.propTypes=w,k.defaultProps={isDisabled:!1},k.contextType=i.default;var E=k;t.default=E},1245:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l={shouldHandleSingleSelection:function(e,t){return t!==e},handleMultiSelectedKeys:function(e,t){if(!t)return e;if(!e)return[t];var n=e.slice(),l=n.indexOf(t);return l>-1?n.splice(l,1):n.push(t),n}};t.default=l},1270:function(e,t,n){e.exports={"orion-fusion-theme":"CollapsibleMenuView-module__orion-fusion-theme___36S3c","collapsible-menu-view":"CollapsibleMenuView-module__collapsible-menu-view___2nx9S","menu-button":"CollapsibleMenuView-module__menu-button___stZoT",hidden:"CollapsibleMenuView-module__hidden___oBOhM","menu-button-icon":"CollapsibleMenuView-module__menu-button-icon___3AEH6","face-up-item":"CollapsibleMenuView-module__face-up-item___1DBow",control:"CollapsibleMenuView-module__control___14DH1","is-disabled":"CollapsibleMenuView-module__is-disabled___3j2OV",divider:"CollapsibleMenuView-module__divider___XkJS5","is-calculating":"CollapsibleMenuView-module__is-calculating___2D9gM"}},1324:function(e,t,n){"use strict";var l=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(n(18)),r=l(n(24)),a=l(n(26)),u=l(n(27)),i=l(n(31)),s=l(n(28)),d=l(n(29)),c=l(n(30)),f=l(n(0)),p=l(n(172)),m=l(n(2)),h=l(n(10)),_=l(n(4)),b=l(n(7)),y=n(8),v=l(n(1950)),g=l(n(1951)),O=l(n(1952)),C=l(n(1953)),w=l(n(1270));function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=(0,c.default)(e);if(t){var o=(0,c.default)(this).constructor;n=Reflect.construct(l,arguments,o)}else n=l.apply(this,arguments);return(0,d.default)(this,n)}}var E=_.default.bind(w.default),x={children:m.default.node.isRequired,menuWidth:m.default.oneOf(["160","240","320","640","960","1280","1760","auto"]),boundingRef:m.default.func},P=function(e){(0,s.default)(n,e);var t=k(n);function n(e){var l;return(0,a.default)(this,n),(l=t.call(this,e)).setContainer=l.setContainer.bind((0,i.default)(l)),l.setMenuButton=l.setMenuButton.bind((0,i.default)(l)),l.resetCache=l.resetCache.bind((0,i.default)(l)),l.handleResize=l.handleResize.bind((0,i.default)(l)),l.resetCache(),l}return(0,u.default)(n,[{key:"componentDidMount",value:function(){var e=this;this.resizeObserver=new p.default((function(t){e.contentWidth=t[0].contentRect.width,e.isCalculating||(e.animationFrameID=window.requestAnimationFrame((function(){e.resetCache(),e.forceUpdate()})))})),this.handleResize(this.contentWidth),this.resizeObserver.observe(this.container)}},{key:"componentDidUpdate",value:function(){this.isCalculating&&(this.isCalculating=!1,this.handleResize(this.contentWidth))}},{key:"componentWillUnmount",value:function(){window.cancelAnimationFrame(this.animationFrameID),this.resizeObserver.disconnect(this.container),this.container=null}},{key:"setContainer",value:function(e){null!==e&&(this.container=e)}},{key:"setMenuButton",value:function(e){null!==e&&(this.menuButton=e)}},{key:"resetCache",value:function(){this.animationFrameID=null,this.hiddenStartIndex=-1,this.isCalculating=!0,this.menuHidden=!1}},{key:"handleResize",value:function(e){for(var t=e-this.menuButton.getBoundingClientRect().width,n=-1,l=0,o=!0,r=0;r<f.default.Children.count(this.props.children);r+=1){if((l+=this.container.children[r].getBoundingClientRect().width)>t){if(r===this.props.children.length-1&&l<=e)break;n=f.default.Children.count(this.props.children)>1&&this.props.children[r].type===C.default?r-1:r,o=!1;break}}this.menuHidden===o&&this.hiddenStartIndex===n||(this.menuHidden=o,this.hiddenStartIndex=n,this.forceUpdate())}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.boundingRef,l=e.menuWidth,a=(0,r.default)(e,["children","boundingRef","menuWidth"]),u=f.default.Children.toArray(t),i=null;this.hiddenStartIndex>=0&&(i=u.splice(this.hiddenStartIndex));var s=this.context,d=(0,h.default)(E("collapsible-menu-view",{"is-calculating":this.isCalculating},s.className),a.className),c=E("menu-button",{hidden:this.menuHidden});return f.default.createElement("div",(0,o.default)({},a,{className:d,ref:this.setContainer}),u,f.default.createElement("div",{className:c,ref:this.setMenuButton},f.default.createElement(y.FormattedMessage,{id:"Terra.collapsibleMenuView.more"},(function(e){return f.default.createElement(v.default,{"data-collapsible-menu-toggle":!0,icon:f.default.createElement("span",{className:E("menu-button-icon")}),subMenuItems:i,boundingRef:n,menuWidth:l,isIconOnly:!0,text:e,variant:"utility"})}))))}}]),n}(f.default.Component);P.Item=v.default,P.ItemGroup=g.default,P.Toggle=O.default,P.Divider=C.default,P.propTypes=x,P.contextType=b.default;var T=P;t.default=T},1483:function(e,t,n){"use strict";var l=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(n(18)),r=l(n(24)),a=l(n(26)),u=l(n(27)),i=l(n(31)),s=l(n(28)),d=l(n(29)),c=l(n(30)),f=l(n(0)),p=l(n(2)),m=l(n(4)),h=l(n(380)),_=l(n(7)),b=l(n(1270));function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=(0,c.default)(e);if(t){var o=(0,c.default)(this).constructor;n=Reflect.construct(l,arguments,o)}else n=l.apply(this,arguments);return(0,d.default)(this,n)}}var v=m.default.bind(b.default),g={children:p.default.node.isRequired,boundingRef:p.default.func,contentWidth:p.default.oneOf(["160","240","320","640","960","1280","1760","auto"]),button:p.default.element.isRequired},O={isCollapsibleMenuItem:p.default.bool},C=function(e){(0,s.default)(n,e);var t=y(n);function n(e){var l;return(0,a.default)(this,n),(l=t.call(this,e)).handleRequestClose=l.handleRequestClose.bind((0,i.default)(l)),l.wrappedOnClick=l.wrappedOnClick.bind((0,i.default)(l)),l.wrapButtonClick=l.wrapButtonClick.bind((0,i.default)(l)),l.wrapChildrenOnClick=l.wrapChildrenOnClick.bind((0,i.default)(l)),l.setButtonNode=l.setButtonNode.bind((0,i.default)(l)),l.getButtonNode=l.getButtonNode.bind((0,i.default)(l)),l.state={isOpen:!1},l}return(0,u.default)(n,[{key:"getChildContext",value:function(){return{isCollapsibleMenuItem:!0}}},{key:"setButtonNode",value:function(e){this.buttonNode=e}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"handleRequestClose",value:function(){this.setState({isOpen:!1})}},{key:"wrappedOnClick",value:function(e){var t=this;return function(n){t.handleRequestClose(),e.props.onClick&&e.props.onClick(n)}}},{key:"wrapButtonClick",value:function(e){var t=this;return function(n){t.setState({isOpen:!0}),e.props.onClick&&e.props.onClick(n)}}},{key:"wrapChildrenOnClick",value:function(e){var t=this,n=e?[]:void 0;return f.default.Children.forEach(e,(function(e){var l=e;if(e.props.shouldCloseOnClick)l=f.default.cloneElement(e,{onClick:t.wrappedOnClick(e)});else if(e.props.children){var o=t.wrapChildrenOnClick(e.props.children);l=f.default.cloneElement(e,{children:o})}else if(e.props.subMenuItems){var r=t.wrapChildrenOnClick(e.props.subMenuItems);l=f.default.cloneElement(e,{subMenuItems:r})}n.push(l)})),n}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.button,l=e.contentWidth,a=(0,r.default)(e,["children","button","contentWidth"]),u=f.default.cloneElement(n,{onClick:this.wrapButtonClick(n)}),i=this.context;return f.default.createElement("div",{className:v("face-up-item",i.className),ref:this.setButtonNode},f.default.createElement(h.default,(0,o.default)({},a,{onRequestClose:this.handleRequestClose,isArrowDisplayed:!0,isOpen:this.state.isOpen,targetRef:this.getButtonNode,contentWidth:l}),this.wrapChildrenOnClick(t)),u)}}]),n}(f.default.Component);C.propTypes=g,C.childContextTypes=O,C.Item=h.default.Item,C.ItemGroup=h.default.ItemGroup,C.Opts={widths:h.default.Opts.widths},C.contextType=_.default;var w=C;t.default=w},1950:function(e,t,n){"use strict";var l=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(n(18)),r=l(n(136)),a=l(n(24)),u=l(n(26)),i=l(n(27)),s=l(n(31)),d=l(n(28)),c=l(n(29)),f=l(n(30)),p=l(n(0)),m=l(n(2)),h=l(n(4)),_=l(n(57)),b=l(n(1183)),y=l(n(1483)),v=l(n(1270));function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=(0,f.default)(e);if(t){var o=(0,f.default)(this).constructor;n=Reflect.construct(l,arguments,o)}else n=l.apply(this,arguments);return(0,c.default)(this,n)}}var C=h.default.bind(v.default),w={text:m.default.string.isRequired,boundingRef:m.default.func,icon:m.default.element,isIconOnly:m.default.bool,isReversed:m.default.bool,isSelected:m.default.bool,isDisabled:m.default.bool,shouldCloseOnClick:m.default.bool,subMenuItems:m.default.arrayOf(m.default.element),onClick:m.default.func,menuWidth:m.default.oneOf(["160","240","320","640","960","1280","1760","auto"])},k={isCollapsibleGroupItem:m.default.bool,isCollapsibleMenuItem:m.default.bool},E=function(e){(0,d.default)(n,e);var t=O(n);function n(e){var l;return(0,u.default)(this,n),(l=t.call(this,e)).setButtonNode=l.setButtonNode.bind((0,s.default)(l)),l.getButtonNode=l.getButtonNode.bind((0,s.default)(l)),l}return(0,i.default)(n,[{key:"setButtonNode",value:function(e){this.buttonNode=e}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"render",value:function(){var e=this.props,t=e.icon,n=e.isIconOnly,l=e.isReversed,u=e.text,i=e.isSelected,s=e.isDisabled,d=e.subMenuItems,c=(e.shouldCloseOnClick,e.boundingRef),f=e.menuWidth,m=(0,a.default)(e,["icon","isIconOnly","isReversed","text","isSelected","isDisabled","subMenuItems","shouldCloseOnClick","boundingRef","menuWidth"]),h=this.context,v=h.isCollapsibleGroupItem,O=h.isCollapsibleMenuItem,w=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},m);return O?p.default.createElement(y.default.Item,(0,o.default)({},w,{text:u,isSelected:i&&v,isDisabled:s,subMenuItems:d})):v?p.default.createElement(b.default.Button,(0,o.default)({},w,{icon:t,text:u,isDisabled:s})):d&&d.length>0?p.default.createElement(y.default,{contentWidth:f,boundingRef:c,button:p.default.createElement(_.default,(0,o.default)({},w,{icon:t,text:u,isReversed:l,isDisabled:s,onClick:this.handleButtonClick,isIconOnly:n}))},d):p.default.createElement("div",{className:C("face-up-item")},p.default.createElement(_.default,(0,o.default)({},w,{icon:t,text:u,isReversed:l,isDisabled:s,isIconOnly:n})))}}]),n}(p.default.Component);E.propTypes=w,E.defaultProps={isSelected:!1,isReversed:!1,shouldCloseOnClick:!0,isIconOnly:!1},E.contextTypes=k,E.Opts={widths:y.default.Opts.widths};var x=E;t.default=x},1951:function(e,t,n){"use strict";var l=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(n(18)),r=l(n(24)),a=l(n(26)),u=l(n(27)),i=l(n(31)),s=l(n(28)),d=l(n(29)),c=l(n(30)),f=l(n(0)),p=l(n(2)),m=l(n(4)),h=l(n(1183)),_=l(n(1483)),b=l(n(1270));function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=(0,c.default)(e);if(t){var o=(0,c.default)(this).constructor;n=Reflect.construct(l,arguments,o)}else n=l.apply(this,arguments);return(0,d.default)(this,n)}}var v=m.default.bind(b.default),g={onChange:p.default.func,children:p.default.node.isRequired,selectedKeys:p.default.arrayOf(p.default.string)},O={isCollapsibleGroupItem:p.default.bool},C={isCollapsibleMenuItem:p.default.bool},w=function(e){(0,s.default)(n,e);var t=y(n);function n(e){var l;return(0,a.default)(this,n),(l=t.call(this,e)).handleOnChange=l.handleOnChange.bind((0,i.default)(l)),l}return(0,u.default)(n,[{key:"getChildContext",value:function(){return{isCollapsibleGroupItem:!0}}},{key:"handleOnChange",value:function(e,t){if(this.props.onChange){var n=t;f.default.Children.forEach(this.props.children,(function(e,l){t===l&&(n=e.key)})),this.props.onChange(e,n)}}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.onChange,l=e.selectedKeys,a=(0,r.default)(e,["children","onChange","selectedKeys"]),u=this.context.isCollapsibleMenuItem;if(u&&l.length)return f.default.createElement("li",{role:"none"},f.default.createElement(_.default.ItemGroup,(0,o.default)({},a,{onChange:this.handleOnChange}),t));if(u)return f.default.createElement("div",a,t);var i=v(["face-up-item",a.className]);return f.default.createElement(h.default,(0,o.default)({},a,{onChange:n,className:i,selectedKeys:l}),t)}}]),n}(f.default.Component);w.propTypes=g,w.defaultProps={selectedKeys:[]},w.childContextTypes=O,w.contextTypes=C;var k=w;t.default=k},1952:function(e,t,n){"use strict";var l=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(n(18)),r=l(n(24)),a=l(n(26)),u=l(n(27)),i=l(n(31)),s=l(n(28)),d=l(n(29)),c=l(n(30)),f=l(n(0)),p=l(n(2)),m=l(n(4)),h=l(n(1028)),_=l(n(1483)),b=l(n(1270));function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=(0,c.default)(e);if(t){var o=(0,c.default)(this).constructor;n=Reflect.construct(l,arguments,o)}else n=l.apply(this,arguments);return(0,d.default)(this,n)}}var v=m.default.bind(b.default),g={text:p.default.string.isRequired,isSelected:p.default.bool,onChange:p.default.func,isSelectable:p.default.bool,isDisabled:p.default.bool,shouldCloseOnClick:p.default.bool},O={isCollapsibleMenuItem:p.default.bool},C=function(e){(0,s.default)(n,e);var t=y(n);function n(e){var l;return(0,a.default)(this,n),(l=t.call(this,e)).wrappedOnChange=l.wrappedOnChange.bind((0,i.default)(l)),l}return(0,u.default)(n,[{key:"wrappedOnChange",value:function(e){this.props.onChange&&this.props.onChange(e,e.target.checked)}},{key:"render",value:function(){var e=this.props,t=e.text,n=e.isSelected,l=e.isSelectable,a=e.isDisabled,u=e.onChange,i=(e.shouldCloseOnClick,(0,r.default)(e,["text","isSelected","isSelectable","isDisabled","onChange","shouldCloseOnClick"])),s=this.context.isCollapsibleMenuItem,d=v(["control",{"is-disabled":a||!l},i.className]);return s?f.default.createElement(_.default.Item,(0,o.default)({},i,{text:t,isSelected:n,isSelectable:l,isDisabled:a,onChange:u})):f.default.createElement("div",{className:v(["face-up-item"])},f.default.createElement(h.default,(0,o.default)({},i,{className:d,labelText:t,defaultChecked:n,onChange:this.wrappedOnChange,disabled:a||!l})))}}]),n}(f.default.Component);C.propTypes=g,C.defaultProps={isSelected:!1,isSelectable:!0,shouldCloseOnClick:!0},C.contextTypes=O;var w=C;t.default=w},1953:function(e,t,n){"use strict";var l=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(n(0)),r=l(n(2)),a=l(n(4)),u=l(n(380)),i=l(n(7)),s=l(n(1270)),d=a.default.bind(s.default),c={isCollapsibleMenuItem:r.default.bool},f=function(e,t){var n=t.isCollapsibleMenuItem,l=o.default.useContext(i.default);return n?o.default.createElement(u.default.Divider,null):o.default.createElement("div",{className:d(["divider","face-up-item",l.className])})};f.contextTypes=c;var p=f;t.default=p}}]);
//# sourceMappingURL=10-6d0deefb7b8ed8a2499e.js.map