(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{1010:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=m();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var l=a?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(0)),o=p(n(2)),l=p(n(4)),c=n(135),u=p(n(1015)),s=p(n(236)),i=n(21),d=p(n(1016));function p(e){return e&&e.__esModule?e:{default:e}}function m(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return m=function(){return e},e}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(r=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var b=l.default.bind(d.default),y={example:o.default.element,exampleSrc:o.default.element,exampleCssSrc:o.default.element,title:o.default.string,description:o.default.node,isExpanded:o.default.bool},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},O=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,o=e.title,l=e.description,d=e.isExpanded,p=f((0,a.useState)(d),2),m=p[0],_=p[1],y=f((0,a.useState)(!1),2),O=y[0],x=y[1],g=a.default.useContext(c.ThemeContext),j=void 0!==r,E=function(){x(!O),m&&_(!m)},P=function(){_(!m),O&&x(!O)},T=function(e,t){e.nativeEvent.keyCode!==i.KEY_SPACE&&e.nativeEvent.keyCode!==i.KEY_RETURN||(e.preventDefault(),t())};return a.default.createElement("div",{className:b("template",g.className)},a.default.createElement("div",{className:b("header")},o&&a.default.createElement("h2",{className:b("title")},o)),a.default.createElement("div",{className:b("content")},l&&a.default.createElement("div",{className:b("description")},l),t),a.default.createElement("div",{className:b("footer")},n?a.default.createElement("div",{className:b("button-container")},j&&a.default.createElement("button",{type:"button",className:b("css-toggle","item",{"is-selected":O}),onClick:E,onKeyDown:function(e){return T(e,E)},onBlur:v,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},a.default.createElement(u.default,{className:b("chevron")}),a.default.createElement("span",null,"CSS"),a.default.createElement(s.default,{className:b("chevron")})),a.default.createElement("button",{type:"button",className:b("code-toggle","item",{"is-selected":m}),onClick:P,onKeyDown:function(e){return T(e,P)},onBlur:v,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},a.default.createElement(u.default,{className:b("chevron")}),a.default.createElement("span",null,"Code"),a.default.createElement(s.default,{className:b("chevron")}))):null,a.default.createElement("div",null,O&&a.default.createElement("div",{className:b("css")},r),m&&a.default.createElement("div",{className:b("code")},n))))};O.propTypes=y,O.defaultProps={isExpanded:!1};var x=O;t.default=x},1011:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),a=c(n(2)),o=c(n(4)),l=c(n(1012));function c(e){return e&&e.__esModule?e:{default:e}}var u=o.default.bind(l.default),s={name:a.default.string.isRequired,src:a.default.string,url:a.default.string,version:a.default.string.isRequired},i=function(e){var t=e.src,n=e.name,a=e.url,o=e.version,l=r.default.createElement("a",{className:u("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(o)},r.default.createElement("span",{className:u("badge-name")},a?"package":"npm"),r.default.createElement("span",{className:u("badge-version")},"v".concat(o))),c=t?r.default.createElement("a",{className:u("badge"),href:t},r.default.createElement("span",{className:u("badge-name")},"github"),r.default.createElement("span",{className:u("badge-version")},"source")):void 0;return r.default.createElement("div",{className:u("badge-container")},l,c)};i.propTypes=s;var d=i;t.default=d},1012:function(e,t,n){e.exports={badge:"Badges-module__badge___3m7y2","badge-container":"Badges-module__badge-container___1YxI5","badge-name":"Badges-module__badge-name___BQ3u4","badge-version":"Badges-module__badge-version___3OgwS"}},1013:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var l=a?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(0)),o=s(n(2)),l=s(n(4)),c=n(135),u=s(n(1014));function s(e){return e&&e.__esModule?e:{default:e}}function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}var d=l.default.bind(u.default),p={rows:o.default.arrayOf(o.default.shape({name:o.default.string,type:o.default.func,required:o.default.bool,defaultValue:o.default.string,description:o.default.func}))},m=function(e){var t=e.rows,n=(0,a.useContext)(c.ThemeContext);return a.default.createElement("table",{className:d("table",n.className)},a.default.createElement("thead",null,a.default.createElement("tr",{className:d("tr")},a.default.createElement("th",{className:d("th")},"Prop Name"),a.default.createElement("th",{className:d("th")},"Type"),a.default.createElement("th",{className:d("th")},"Is Required"),a.default.createElement("th",{className:d("th")},"Default Value"),a.default.createElement("th",{className:d("th")},"Description"))),a.default.createElement("tbody",null,t.map((function(e){return a.default.createElement("tr",{className:d("tr","props-tr"),key:e.name},a.default.createElement("td",{className:d(["td","strong","props-td"])},e.name),a.default.createElement("td",{className:d(["td","props-td"])},e.type()),a.default.createElement("td",{className:d(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),a.default.createElement("td",{className:d(["td","props-td"])},e.defaultValue),a.default.createElement("td",{className:d(["td","props-td"])},e.description()))}))))};m.propTypes=p;var f=m;t.default=f},1014:function(e,t,n){e.exports={"orion-fusion-theme":"PropsTable-module__orion-fusion-theme___1kDLT",a:"PropsTable-module__a___6WaJD",blockquote:"PropsTable-module__blockquote___2loIo",code:"PropsTable-module__code___1vedU",dd:"PropsTable-module__dd___3pYcW",dl:"PropsTable-module__dl___397p5",dt:"PropsTable-module__dt___1-GVs",h1:"PropsTable-module__h1___1OAAp",h2:"PropsTable-module__h2___2iZ6i",h3:"PropsTable-module__h3___3N0fw",h4:"PropsTable-module__h4___214vu",h5:"PropsTable-module__h5___1ajw8",h6:"PropsTable-module__h6___19W7i","icon-link":"PropsTable-module__icon-link___HUOC7",anchor:"PropsTable-module__anchor___1UTVD",hr:"PropsTable-module__hr___15B3j",img:"PropsTable-module__img___1rEq-",input:"PropsTable-module__input___1WHRX",kbd:"PropsTable-module__kbd___2DvPC",li:"PropsTable-module__li___1T8DQ",p:"PropsTable-module__p___3ssgC",ol:"PropsTable-module__ol___2tCva",ul:"PropsTable-module__ul___DlvOz",td:"PropsTable-module__td___3svU1",pre:"PropsTable-module__pre___3qXsS",strong:"PropsTable-module__strong___2DSlR",table:"PropsTable-module__table___1sV8g",th:"PropsTable-module__th___RQkAz",tr:"PropsTable-module__tr___1dras",icon:"PropsTable-module__icon___1fv-c",required:"PropsTable-module__required___1b3oJ","props-tr":"PropsTable-module__props-tr___1c88t","props-td":"PropsTable-module__props-td___dEhbY"}},1015:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(0)),a=o(n(20));function o(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c=function(e){var t=l({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};c.displayName="IconChevronLeft",c.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var u=c;t.default=u},1016:function(e,t,n){e.exports={"orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___MlAIc",template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",css:"ExampleTemplate-module__css___3yyDQ",code:"ExampleTemplate-module__code____AmLF","css-toggle":"ExampleTemplate-module__css-toggle___2I9Yn","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","is-selected":"ExampleTemplate-module__is-selected___1H6Un",item:"ExampleTemplate-module__item___1N1C-",chevron:"ExampleTemplate-module__chevron___3Xlby",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}},1020:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),a=c(n(2)),o=c(n(4)),l=c(n(1023));function c(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.default.bind(l.default),d={variant:a.default.oneOf(["light","dark"]),title:a.default.string},p=function(e){var t=e.variant,n=e.title,a=s(e,["variant","title"]),o=i(["placeholder",a.className]),l=i(["inner","is-".concat(t)]);return r.default.createElement("div",u({},a,{className:o}),r.default.createElement("div",{className:l},r.default.createElement("h2",null,n)))};p.propTypes=d,p.defaultProps={variant:"dark",title:""};var m=p;t.default=m},1023:function(e,t,n){e.exports={placeholder:"Placeholder-module__placeholder___37I0I",inner:"Placeholder-module__inner___2DX7N","is-light":"Placeholder-module__is-light___3__YD","is-dark":"Placeholder-module__is-dark___9wQwQ"}},1024:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),a=n.n(r),o=n(1011),l=n.n(o),c=function(e){var t=e.url;return a.a.createElement(l.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-list",name:"terra-list",version:"4.37.0",url:t})}},1031:function(e,t,n){e.exports={placeholder:"ListDocCommon-module__placeholder___CD263"}},1032:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n(0);var r=n(365);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l={};function c(e){var t=e.components,n=o(e,["components"]);return Object(r.mdx)("wrapper",a({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("pre",null,Object(r.mdx)("code",a({parentName:"pre"},{className:"language-scss"}),":local {\n  .placeholder {\n    height: 50px;\n  }\n}\n\n")))}c.isMDXComponent=!0},2502:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(0)),o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var l=a?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(96)),l=i(n(1020)),c=i(n(4)),u=i(n(1031));function s(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function i(e){return e&&e.__esModule?e:{default:e}}var d=c.default.bind(u.default),p=function(){return a.default.createElement(o.default,null,a.default.createElement(o.Section,{key:"static-section",title:"Static Section"},a.default.createElement(o.Item,{key:"123"},a.default.createElement(l.default,{title:"Item 0-0",className:d("placeholder")})),a.default.createElement(o.Item,{key:"124"},a.default.createElement(l.default,{title:"Item 0-1",className:d("placeholder")})),a.default.createElement(o.Item,{key:"125"},a.default.createElement(l.default,{title:"Item 0-2",className:d("placeholder")}))),a.default.createElement(o.Section,{key:"collapsible-section",isCollapsible:!0,title:"Collapsible Section"},a.default.createElement(o.Item,{key:"223"},a.default.createElement(l.default,{title:"Item 1-0",className:d("placeholder")})),a.default.createElement(o.Item,{key:"224"},a.default.createElement(l.default,{title:"Item 1-1",className:d("placeholder")})),a.default.createElement(o.Item,{key:"225"},a.default.createElement(l.default,{title:"Item 1-2",className:d("placeholder")}))),a.default.createElement(o.Section,{key:"collapsible-section",isCollapsed:!0,isCollapsible:!0,title:"Collapsed Section"},a.default.createElement(o.Item,{key:"323"},a.default.createElement(l.default,{title:"Item 2-0",className:d("placeholder")})),a.default.createElement(o.Item,{key:"324"},a.default.createElement(l.default,{title:"Item 2-1",className:d("placeholder")})),a.default.createElement(o.Item,{key:"325"},a.default.createElement(l.default,{title:"Item 2-2",className:d("placeholder")}))))};t.default=p},3165:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return P}));var r=n(0),a=n.n(r),o=n(365),l=n(1024),c=n(2502),u=n.n(c);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d={};function p(e){var t=e.components,n=i(e,["components"]);return Object(o.mdx)("wrapper",s({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",s({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport List, { Item, Section } from \'terra-list/lib/index\';\nimport Placeholder from \'terra-doc-template/lib/Placeholder\';\nimport classNames from \'classnames/bind\';\nimport styles from \'./ListDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst ListSectionExample = () => (\n  <List>\n    <Section\n      key="static-section"\n      title="Static Section"\n    >\n      <Item key="123">\n        <Placeholder title="Item 0-0" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="124">\n        <Placeholder title="Item 0-1" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="125">\n        <Placeholder title="Item 0-2" className={cx(\'placeholder\')} />\n      </Item>\n    </Section>\n    <Section\n      key="collapsible-section"\n      isCollapsible\n      title="Collapsible Section"\n    >\n      <Item key="223">\n        <Placeholder title="Item 1-0" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="224">\n        <Placeholder title="Item 1-1" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="225">\n        <Placeholder title="Item 1-2" className={cx(\'placeholder\')} />\n      </Item>\n    </Section>\n    <Section\n      key="collapsible-section"\n      isCollapsed\n      isCollapsible\n      title="Collapsed Section"\n    >\n      <Item key="323">\n        <Placeholder title="Item 2-0" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="324">\n        <Placeholder title="Item 2-1" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="325">\n        <Placeholder title="Item 2-2" className={cx(\'placeholder\')} />\n      </Item>\n    </Section>\n  </List>\n);\n\nexport default ListSectionExample;\n\n')))}p.isMDXComponent=!0;var m=n(1010),f=n.n(m),_=n(1032),b=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:t||"List Section",description:n,example:a.a.createElement(u.a,null),exampleCssSrc:a.a.createElement(_.a,null),exampleSrc:a.a.createElement(p,null),isExpanded:r})},y=n(1013),v=n.n(y);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var x=function(){return Object(o.mdx)(v.a,{rows:[{name:"children",type:function(){var e={};function t(t){var n=t.components,r=O(t,["components"]);return Object(o.mdx)("wrapper",h({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"[]",description:function(){var e={};function t(t){var n=t.components,r=O(t,["components"]);return Object(o.mdx)("wrapper",h({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The children list items passed to the component."))}return t.isMDXComponent=!0,t({})}},{name:"isCollapsed",type:function(){var e={};function t(t){var n=t.components,r=O(t,["components"]);return Object(o.mdx)("wrapper",h({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=O(t,["components"]);return Object(o.mdx)("wrapper",h({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether or not the section is collapsed."))}return t.isMDXComponent=!0,t({})}},{name:"isCollapsible",type:function(){var e={};function t(t){var n=t.components,r=O(t,["components"]);return Object(o.mdx)("wrapper",h({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=O(t,["components"]);return Object(o.mdx)("wrapper",h({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether or not the section can be collapsed."))}return t.isMDXComponent=!0,t({})}},{name:"level",type:function(){var e={};function t(t){var n=t.components,r=O(t,["components"]);return Object(o.mdx)("wrapper",h({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"enum"),Object(o.mdx)("pre",null,Object(o.mdx)("code",h({parentName:"pre"},{className:"language-json"}),'[\n "1",\n "2",\n "3",\n "4",\n "5",\n "6"\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"1",description:function(){var e={};function t(t){var n=t.components,r=O(t,["components"]);return Object(o.mdx)("wrapper",h({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Optionally sets the heading level. One of ",Object(o.mdx)("inlineCode",{parentName:"p"},"1"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"2"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"3"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"4"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"5"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"6"),"."))}return t.isMDXComponent=!0,t({})}},{name:"metaData",type:function(){var e={};function t(t){var n=t.components,r=O(t,["components"]);return Object(o.mdx)("wrapper",h({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"object"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=O(t,["components"]);return Object(o.mdx)("wrapper",h({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The associated metaData to be provided in the onSelect callback."))}return t.isMDXComponent=!0,t({})}},{name:"onSelect",type:function(){var e={};function t(t){var n=t.components,r=O(t,["components"]);return Object(o.mdx)("wrapper",h({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=O(t,["components"]);return Object(o.mdx)("wrapper",h({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Function callback for when the appropriate click or key action is performed.\nCallback contains the javascript event and prop metadata, e.g. onSelect(event, metaData)"))}return t.isMDXComponent=!0,t({})}},{name:"refCallback",type:function(){var e={};function t(t){var n=t.components,r=O(t,["components"]);return Object(o.mdx)("wrapper",h({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=O(t,["components"]);return Object(o.mdx)("wrapper",h({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Function callback passthrough for the ref of the section li."))}return t.isMDXComponent=!0,t({})}},{name:"title",type:function(){var e={};function t(t){var n=t.components,r=O(t,["components"]);return Object(o.mdx)("wrapper",h({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=O(t,["components"]);return Object(o.mdx)("wrapper",h({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Title text to be placed within the section header."))}return t.isMDXComponent=!0,t({})}}]})};function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function j(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var E={};function P(e){var t=e.components,n=j(e,["components"]);return Object(o.mdx)("wrapper",g({},E,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)(l.a,{mdxType:"Badge"}),Object(o.mdx)("h1",{id:"list-section"},"List Section"),Object(o.mdx)("p",null,"The list section component creates a section header and layouts it out with the passed child list items. The section provides the ability to display and collapse a section within a logical group. The list section will render as a flat list."),Object(o.mdx)("h2",{id:"usage"},"Usage"),Object(o.mdx)("pre",null,Object(o.mdx)("code",g({parentName:"pre"},{className:"language-jsx"}),"import List, { Item, Section } from 'terra-list/lib/List';\n")),Object(o.mdx)("h2",{id:"examples"},"Examples"),Object(o.mdx)(b,{mdxType:"ListSectionExample"}),Object(o.mdx)("h2",{id:"list-section-props"},"List Section Props"),Object(o.mdx)(x,{mdxType:"ListSectionPropsTable"}))}P.isMDXComponent=!0}}]);
//# sourceMappingURL=116-e97d95f5e0206801b371.js.map