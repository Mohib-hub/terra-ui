(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{1010:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var l=a?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(0)),o=d(n(2)),l=d(n(4)),u=n(135),c=d(n(1015)),i=d(n(236)),p=n(21),m=d(n(1016));function d(e){return e&&e.__esModule?e:{default:e}}function s(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var l,u=e[Symbol.iterator]();!(r=(l=u.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var _=l.default.bind(m.default),y={example:o.default.element,exampleSrc:o.default.element,exampleCssSrc:o.default.element,title:o.default.string,description:o.default.node,isExpanded:o.default.bool},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},g=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,o=e.title,l=e.description,m=e.isExpanded,d=f((0,a.useState)(m),2),s=d[0],b=d[1],y=f((0,a.useState)(!1),2),g=y[0],x=y[1],O=a.default.useContext(u.ThemeContext),j=void 0!==r,E=function(){x(!g),s&&b(!s)},T=function(){b(!s),g&&x(!g)},w=function(e,t){e.nativeEvent.keyCode!==p.KEY_SPACE&&e.nativeEvent.keyCode!==p.KEY_RETURN||(e.preventDefault(),t())};return a.default.createElement("div",{className:_("template",O.className)},a.default.createElement("div",{className:_("header")},o&&a.default.createElement("h2",{className:_("title")},o)),a.default.createElement("div",{className:_("content")},l&&a.default.createElement("div",{className:_("description")},l),t),a.default.createElement("div",{className:_("footer")},n?a.default.createElement("div",{className:_("button-container")},j&&a.default.createElement("button",{type:"button",className:_("css-toggle","item",{"is-selected":g}),onClick:E,onKeyDown:function(e){return w(e,E)},onBlur:h,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},a.default.createElement(c.default,{className:_("chevron")}),a.default.createElement("span",null,"CSS"),a.default.createElement(i.default,{className:_("chevron")})),a.default.createElement("button",{type:"button",className:_("code-toggle","item",{"is-selected":s}),onClick:T,onKeyDown:function(e){return w(e,T)},onBlur:h,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},a.default.createElement(c.default,{className:_("chevron")}),a.default.createElement("span",null,"Code"),a.default.createElement(i.default,{className:_("chevron")}))):null,a.default.createElement("div",null,g&&a.default.createElement("div",{className:_("css")},r),s&&a.default.createElement("div",{className:_("code")},n))))};g.propTypes=y,g.defaultProps={isExpanded:!1};var x=g;t.default=x},1011:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(0)),a=u(n(2)),o=u(n(4)),l=u(n(1012));function u(e){return e&&e.__esModule?e:{default:e}}var c=o.default.bind(l.default),i={name:a.default.string.isRequired,src:a.default.string,url:a.default.string,version:a.default.string.isRequired},p=function(e){var t=e.src,n=e.name,a=e.url,o=e.version,l=r.default.createElement("a",{className:c("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(o)},r.default.createElement("span",{className:c("badge-name")},a?"package":"npm"),r.default.createElement("span",{className:c("badge-version")},"v".concat(o))),u=t?r.default.createElement("a",{className:c("badge"),href:t},r.default.createElement("span",{className:c("badge-name")},"github"),r.default.createElement("span",{className:c("badge-version")},"source")):void 0;return r.default.createElement("div",{className:c("badge-container")},l,u)};p.propTypes=i;var m=p;t.default=m},1012:function(e,t,n){e.exports={badge:"Badges-module__badge___3m7y2","badge-container":"Badges-module__badge-container___1YxI5","badge-name":"Badges-module__badge-name___BQ3u4","badge-version":"Badges-module__badge-version___3OgwS"}},1013:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var l=a?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(0)),o=i(n(2)),l=i(n(4)),u=n(135),c=i(n(1014));function i(e){return e&&e.__esModule?e:{default:e}}function p(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}var m=l.default.bind(c.default),d={rows:o.default.arrayOf(o.default.shape({name:o.default.string,type:o.default.func,required:o.default.bool,defaultValue:o.default.string,description:o.default.func}))},s=function(e){var t=e.rows,n=(0,a.useContext)(u.ThemeContext);return a.default.createElement("table",{className:m("table",n.className)},a.default.createElement("thead",null,a.default.createElement("tr",{className:m("tr")},a.default.createElement("th",{className:m("th")},"Prop Name"),a.default.createElement("th",{className:m("th")},"Type"),a.default.createElement("th",{className:m("th")},"Is Required"),a.default.createElement("th",{className:m("th")},"Default Value"),a.default.createElement("th",{className:m("th")},"Description"))),a.default.createElement("tbody",null,t.map((function(e){return a.default.createElement("tr",{className:m("tr","props-tr"),key:e.name},a.default.createElement("td",{className:m(["td","strong","props-td"])},e.name),a.default.createElement("td",{className:m(["td","props-td"])},e.type()),a.default.createElement("td",{className:m(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),a.default.createElement("td",{className:m(["td","props-td"])},e.defaultValue),a.default.createElement("td",{className:m(["td","props-td"])},e.description()))}))))};s.propTypes=d;var f=s;t.default=f},1014:function(e,t,n){e.exports={"orion-fusion-theme":"PropsTable-module__orion-fusion-theme___1kDLT",a:"PropsTable-module__a___6WaJD",blockquote:"PropsTable-module__blockquote___2loIo",code:"PropsTable-module__code___1vedU",dd:"PropsTable-module__dd___3pYcW",dl:"PropsTable-module__dl___397p5",dt:"PropsTable-module__dt___1-GVs",h1:"PropsTable-module__h1___1OAAp",h2:"PropsTable-module__h2___2iZ6i",h3:"PropsTable-module__h3___3N0fw",h4:"PropsTable-module__h4___214vu",h5:"PropsTable-module__h5___1ajw8",h6:"PropsTable-module__h6___19W7i","icon-link":"PropsTable-module__icon-link___HUOC7",anchor:"PropsTable-module__anchor___1UTVD",hr:"PropsTable-module__hr___15B3j",img:"PropsTable-module__img___1rEq-",input:"PropsTable-module__input___1WHRX",kbd:"PropsTable-module__kbd___2DvPC",li:"PropsTable-module__li___1T8DQ",p:"PropsTable-module__p___3ssgC",ol:"PropsTable-module__ol___2tCva",ul:"PropsTable-module__ul___DlvOz",td:"PropsTable-module__td___3svU1",pre:"PropsTable-module__pre___3qXsS",strong:"PropsTable-module__strong___2DSlR",table:"PropsTable-module__table___1sV8g",th:"PropsTable-module__th___RQkAz",tr:"PropsTable-module__tr___1dras",icon:"PropsTable-module__icon___1fv-c",required:"PropsTable-module__required___1b3oJ","props-tr":"PropsTable-module__props-tr___1c88t","props-td":"PropsTable-module__props-td___dEhbY"}},1015:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(0)),a=o(n(20));function o(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=function(e){var t=l({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};u.displayName="IconChevronLeft",u.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var c=u;t.default=c},1016:function(e,t,n){e.exports={"orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___MlAIc",template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",css:"ExampleTemplate-module__css___3yyDQ",code:"ExampleTemplate-module__code____AmLF","css-toggle":"ExampleTemplate-module__css-toggle___2I9Yn","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","is-selected":"ExampleTemplate-module__is-selected___1H6Un",item:"ExampleTemplate-module__item___1N1C-",chevron:"ExampleTemplate-module__chevron___3Xlby",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}},1348:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(0),a=n.n(r),o=n(1011),l=n.n(o),u=function(e){var t=e.url;return a.a.createElement(l.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-image",name:"terra-image",version:"3.31.0",url:t})}},2480:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(0)),a=u(n(240)),o=u(n(2481)),l=u(n(2482));function u(e){return e&&e.__esModule?e:{default:e}}var c=function(){return r.default.createElement("div",null,r.default.createElement("h2",null,"Default"),r.default.createElement(a.default,{src:o.default,alt:"default image"}),r.default.createElement("br",null),r.default.createElement("h2",null,"Circle"),r.default.createElement(a.default,{src:o.default,alt:"circle image",variant:"circle"}),r.default.createElement("br",null),r.default.createElement("h2",null,"Rounded"),r.default.createElement(a.default,{src:o.default,alt:"rounded image",variant:"rounded"}),r.default.createElement("br",null),r.default.createElement("h2",null,"Thumbnail"),r.default.createElement(a.default,{src:o.default,alt:"thumbnail image",variant:"thumbnail"}),r.default.createElement("br",null),r.default.createElement("h2",null,"Fluid"),r.default.createElement(a.default,{src:l.default,alt:"fluid image",isFluid:!0}),r.default.createElement("br",null),r.default.createElement("h2",null,"Placeholder"),r.default.createElement("h3",null,"Invalid src prop (placeholder will show)"),r.default.createElement(a.default,{src:"/mock/failure/route",alt:"invalid src attribute image",placeholder:r.default.createElement(a.default,{src:l.default,alt:"placeholder image"})}),r.default.createElement("h3",null,"Valid src prop (src will show)"),r.default.createElement(a.default,{src:o.default,alt:"src image",placeholder:r.default.createElement(a.default,{src:l.default,alt:"placeholder image"})}))};t.default=c},2481:function(e,t,n){e.exports=n.p+"87ec563ff16c288f58b0747d553762d6.jpg"},2482:function(e,t,n){e.exports=n.p+"2d50003b6b587b1e3ce153b0e06feafa.png"},2483:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=p(n(0)),a=p(n(2)),o=p(n(4)),l=p(n(240)),u=p(n(2484)),c=p(n(2485)),i=p(n(2486));function p(e){return e&&e.__esModule?e:{default:e}}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var d=o.default.bind(c.default),s={fit:a.default.string,variant:a.default.string},f=function(e){var t=m({},e);return r.default.createElement("div",{className:d("image-container")},r.default.createElement(l.default,{alt:"Toggle fit image",className:d("image"),src:i.default,fit:t.fit,variant:t.variant}))};f.propTypes=s;var b=(0,u.default)(f);t.default=b},2484:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=(r=n(0))&&r.__esModule?r:{default:r};function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var a=d(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return p(this,n)}}function p(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?m(e):t}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var s=function(e){return function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(d,t);var n,r,o,p=i(d);function d(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),(t=p.call(this,e)).handleOnSelect=t.handleOnSelect.bind(m(t)),t.state={fitType:"fill",variantType:"default"},t}return n=d,(r=[{key:"handleOnSelect",value:function(e){this.setState(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},e.target.name,e.target.value))}},{key:"render",value:function(){return a.default.createElement("div",null,a.default.createElement(e,l({fit:this.state.fitType,variant:this.state.variantType},this.props)),a.default.createElement("p",null,a.default.createElement("label",{htmlFor:"fitType"},"Select a Fit Type:")),a.default.createElement("select",{id:"fitType",name:"fitType",value:this.state.fitType,onChange:this.handleOnSelect},a.default.createElement("option",{value:"fill"},"fill"),a.default.createElement("option",{value:"cover"},"cover"),a.default.createElement("option",{value:"contain"},"contain"),a.default.createElement("option",{value:"scale-down"},"scale-down"),a.default.createElement("option",{value:"none"},"none")),a.default.createElement("p",null,a.default.createElement("label",{htmlFor:"variantType"},"Select a Variant Type:")),a.default.createElement("select",{id:"variantType",name:"variantType",value:this.state.variantType,onChange:this.handleOnSelect},a.default.createElement("option",{value:"default"},"default"),a.default.createElement("option",{value:"circle"},"circle"),a.default.createElement("option",{value:"rounded"},"rounded"),a.default.createElement("option",{value:"thumbnail"},"thumbnail")))}}])&&u(n.prototype,r),o&&u(n,o),d}(a.default.Component)};t.default=s},2485:function(e,t,n){e.exports={"image-container":"ImageFitTypes__image-container___2sxQ6",image:"ImageFitTypes__image___3P8TK"}},2486:function(e,t,n){e.exports=n.p+"40415849cc161edd3bafb6a6a5c973b2.jpg"},3133:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var r=n(0),a=n.n(r),o=n(365),l=n(1348),u=n(2480),c=n.n(u);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m={};function d(e){var t=e.components,n=p(e,["components"]);return Object(o.mdx)("wrapper",i({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",i({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport Image from \'terra-image\';\nimport placeholderPic150x150 from \'../../assets/150x150.jpg\';\nimport placeholderPic1000x200 from \'../../assets/1000x200.png\';\n\nconst ImageDefault = () => (\n  <div>\n    <h2>Default</h2>\n    <Image src={placeholderPic150x150} alt="default image" />\n    <br />\n    <h2>Circle</h2>\n    <Image src={placeholderPic150x150} alt="circle image" variant="circle" />\n    <br />\n    <h2>Rounded</h2>\n    <Image src={placeholderPic150x150} alt="rounded image" variant="rounded" />\n    <br />\n    <h2>Thumbnail</h2>\n    <Image src={placeholderPic150x150} alt="thumbnail image" variant="thumbnail" />\n    <br />\n    <h2>Fluid</h2>\n    <Image src={placeholderPic1000x200} alt="fluid image" isFluid />\n    <br />\n    <h2>Placeholder</h2>\n    <h3>Invalid src prop (placeholder will show)</h3>\n    {/* eslint-disable-next-line react/jsx-no-duplicate-props */}\n    <Image src="/mock/failure/route" alt="invalid src attribute image" placeholder={<Image src={placeholderPic1000x200} alt="placeholder image" />} />\n    <h3>Valid src prop (src will show)</h3>\n    <Image src={placeholderPic150x150} alt="src image" placeholder={<Image src={placeholderPic1000x200} alt="placeholder image" />} />\n  </div>\n);\n\nexport default ImageDefault;\n\n')))}d.isMDXComponent=!0;var s=n(1010),f=n.n(s),b=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:t||"Image Default",description:n,example:a.a.createElement(c.a,null),exampleSrc:a.a.createElement(d,null),isExpanded:r})},_=n(2483),y=n.n(_);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g={};function x(e){var t=e.components,n=v(e,["components"]);return Object(o.mdx)("wrapper",h({},g,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",h({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport Image from 'terra-image';\nimport FitTypesWrapper from 'terra-image/lib/terra-dev-site/doc/example/common/FitTypesWrapper';\nimport styles from './ImageFitTypes.scss';\nimport exampleImage from '../../assets/170x251.jpg';\n\nconst cx = classNames.bind(styles);\n\nconst propTypes = { fit: PropTypes.string, variant: PropTypes.string };\n\nconst ImageFitTypes = ({\n  ...props\n}) => (\n  <div className={cx('image-container')}>\n    <Image alt=\"Toggle fit image\" className={cx('image')} src={exampleImage} fit={props.fit} variant={props.variant} />\n  </div>\n);\n\nImageFitTypes.propTypes = propTypes;\nexport default FitTypesWrapper(ImageFitTypes);\n\n")))}function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function j(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}x.isMDXComponent=!0;var E={};function T(e){var t=e.components,n=j(e,["components"]);return Object(o.mdx)("wrapper",O({},E,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",O({parentName:"pre"},{className:"language-scss"}),":local {\n  .image-container {\n    height: 150px;\n    width: 150px;\n  }\n  \n  .image {\n    height: 100%;\n    width: 100%;\n  }\n}\n\n")))}T.isMDXComponent=!0;var w=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:t||"Image Fit Types",description:n,example:a.a.createElement(y.a,null),exampleCssSrc:a.a.createElement(T,null),exampleSrc:a.a.createElement(x,null),isExpanded:r})},P=n(1013),N=n.n(P);function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function M(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var C=function(){return Object(o.mdx)(N.a,{rows:[{name:"src",type:function(){var e={};function t(t){var n=t.components,r=M(t,["components"]);return Object(o.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=M(t,["components"]);return Object(o.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The source string for the image which will be loaded and displayed."))}return t.isMDXComponent=!0,t({})}},{name:"variant",type:function(){var e={};function t(t){var n=t.components,r=M(t,["components"]);return Object(o.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"enum"),Object(o.mdx)("pre",null,Object(o.mdx)("code",D({parentName:"pre"},{className:"language-json"}),'[\n "default",\n "rounded",\n "circle",\n "thumbnail"\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"'default'",description:function(){var e={};function t(t){var n=t.components,r=M(t,["components"]);return Object(o.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Sets the style of the image from the following values; ",Object(o.mdx)("inlineCode",{parentName:"p"},"default"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"rounded"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"circle"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"thumbnail"),"."))}return t.isMDXComponent=!0,t({})}},{name:"isFluid",type:function(){var e={};function t(t){var n=t.components,r=M(t,["components"]);return Object(o.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=M(t,["components"]);return Object(o.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Sets the fluid behavior of the image, which is ",Object(o.mdx)("inlineCode",{parentName:"p"},"nonfluid")," by default."))}return t.isMDXComponent=!0,t({})}},{name:"alt",type:function(){var e={};function t(t){var n=t.components,r=M(t,["components"]);return Object(o.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"' '",description:function(){var e={};function t(t){var n=t.components,r=M(t,["components"]);return Object(o.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The text content that specifies an alternative text for an image."))}return t.isMDXComponent=!0,t({})}},{name:"placeholder",type:function(){var e={};function t(t){var n=t.components,r=M(t,["components"]);return Object(o.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"element"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=M(t,["components"]);return Object(o.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"A React element which will be displayed during loading and in case of src load failure."))}return t.isMDXComponent=!0,t({})}},{name:"height",type:function(){var e={};function t(t){var n=t.components,r=M(t,["components"]);return Object(o.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=M(t,["components"]);return Object(o.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Sets the height of the image."))}return t.isMDXComponent=!0,t({})}},{name:"width",type:function(){var e={};function t(t){var n=t.components,r=M(t,["components"]);return Object(o.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=M(t,["components"]);return Object(o.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Sets the width of the image."))}return t.isMDXComponent=!0,t({})}},{name:"onLoad",type:function(){var e={};function t(t){var n=t.components,r=M(t,["components"]);return Object(o.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=M(t,["components"]);return Object(o.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Function to be executed when the image load is successful."))}return t.isMDXComponent=!0,t({})}},{name:"onError",type:function(){var e={};function t(t){var n=t.components,r=M(t,["components"]);return Object(o.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=M(t,["components"]);return Object(o.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Function to be executed when the image load errors."))}return t.isMDXComponent=!0,t({})}},{name:"fit",type:function(){var e={};function t(t){var n=t.components,r=M(t,["components"]);return Object(o.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"enum"),Object(o.mdx)("pre",null,Object(o.mdx)("code",D({parentName:"pre"},{className:"language-json"}),'[\n "cover",\n "scale-down",\n "fill",\n "contain",\n "none"\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"'fill'",description:function(){var e={};function t(t){var n=t.components,r=M(t,["components"]);return Object(o.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Sets the ",Object(o.mdx)("inlineCode",{parentName:"p"},"object-fit")," style of the image from the following values; ",Object(o.mdx)("inlineCode",{parentName:"p"},"cover"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"contain"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"fill"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"scale-down"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"none"),"."))}return t.isMDXComponent=!0,t({})}}]})};function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function X(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var I={};function k(e){var t=e.components,n=X(e,["components"]);return Object(o.mdx)("wrapper",S({},I,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)(l.a,{mdxType:"Badge"}),Object(o.mdx)("h1",{id:"terra-image"},"Terra Image"),Object(o.mdx)("p",null,"The terra-image component provides styling for visual imagery."),Object(o.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Install with ",Object(o.mdx)("a",S({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(o.mdx)("ul",{parentName:"li"},Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"npm install terra-image"))))),Object(o.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(o.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(o.mdx)("table",null,Object(o.mdx)("thead",{parentName:"table"},Object(o.mdx)("tr",{parentName:"thead"},Object(o.mdx)("th",S({parentName:"tr"},{align:null}),"Peer Dependency"),Object(o.mdx)("th",S({parentName:"tr"},{align:null}),"Version"))),Object(o.mdx)("tbody",{parentName:"table"},Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",S({parentName:"tr"},{align:null}),"react"),Object(o.mdx)("td",S({parentName:"tr"},{align:null}),"^16.8.5")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",S({parentName:"tr"},{align:null}),"react-dom"),Object(o.mdx)("td",S({parentName:"tr"},{align:null}),"^16.8.5")))),Object(o.mdx)("h2",{id:"usage"},"Usage"),Object(o.mdx)("pre",null,Object(o.mdx)("code",S({parentName:"pre"},{className:"language-jsx"}),"import Image from 'terra-image';\n")),Object(o.mdx)("h2",{id:"component-features"},"Component Features"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",S({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",S({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#responsive-support"}),"Responsive Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",S({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#mobile-support"}),"Mobile Support"))),Object(o.mdx)("h2",{id:"examples"},"Examples"),Object(o.mdx)(b,{mdxType:"ImageDefault"}),Object(o.mdx)(w,{mdxType:"ImageFit"}),Object(o.mdx)("h2",{id:"image-props"},"Image Props"),Object(o.mdx)(C,{mdxType:"ImagePropsTable"}))}k.isMDXComponent=!0}}]);
//# sourceMappingURL=109-f997fd6ae720395eef26.js.map