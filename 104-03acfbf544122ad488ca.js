(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{1010:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=l?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n(0)),r=m(n(2)),o=m(n(4)),i=n(135),c=m(n(1015)),u=m(n(236)),s=n(21),d=m(n(1016));function m(e){return e&&e.__esModule?e:{default:e}}function p(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,l=!1,r=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){l=!0,r=e}finally{try{a||null==i.return||i.return()}finally{if(l)throw r}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var v=o.default.bind(d.default),g={example:r.default.element,exampleSrc:r.default.element,exampleCssSrc:r.default.element,title:r.default.string,description:r.default.node,isExpanded:r.default.bool},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},x=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,r=e.title,o=e.description,d=e.isExpanded,m=f((0,l.useState)(d),2),p=m[0],y=m[1],g=f((0,l.useState)(!1),2),x=g[0],h=g[1],E=l.default.useContext(i.ThemeContext),P=void 0!==a,O=function(){h(!x),p&&y(!p)},I=function(){y(!p),x&&h(!x)},w=function(e,t){e.nativeEvent.keyCode!==s.KEY_SPACE&&e.nativeEvent.keyCode!==s.KEY_RETURN||(e.preventDefault(),t())};return l.default.createElement("div",{className:v("template",E.className)},l.default.createElement("div",{className:v("header")},r&&l.default.createElement("h2",{className:v("title")},r)),l.default.createElement("div",{className:v("content")},o&&l.default.createElement("div",{className:v("description")},o),t),l.default.createElement("div",{className:v("footer")},n?l.default.createElement("div",{className:v("button-container")},P&&l.default.createElement("button",{type:"button",className:v("css-toggle","item",{"is-selected":x}),onClick:O,onKeyDown:function(e){return w(e,O)},onBlur:_,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(c.default,{className:v("chevron")}),l.default.createElement("span",null,"CSS"),l.default.createElement(u.default,{className:v("chevron")})),l.default.createElement("button",{type:"button",className:v("code-toggle","item",{"is-selected":p}),onClick:I,onKeyDown:function(e){return w(e,I)},onBlur:_,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(c.default,{className:v("chevron")}),l.default.createElement("span",null,"Code"),l.default.createElement(u.default,{className:v("chevron")}))):null,l.default.createElement("div",null,x&&l.default.createElement("div",{className:v("css")},a),p&&l.default.createElement("div",{className:v("code")},n))))};x.propTypes=g,x.defaultProps={isExpanded:!1};var h=x;t.default=h},1011:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(0)),l=i(n(2)),r=i(n(4)),o=i(n(1012));function i(e){return e&&e.__esModule?e:{default:e}}var c=r.default.bind(o.default),u={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},s=function(e){var t=e.src,n=e.name,l=e.url,r=e.version,o=a.default.createElement("a",{className:c("badge"),href:l||"https://www.npmjs.org/package/".concat(n,"/v/").concat(r)},a.default.createElement("span",{className:c("badge-name")},l?"package":"npm"),a.default.createElement("span",{className:c("badge-version")},"v".concat(r))),i=t?a.default.createElement("a",{className:c("badge"),href:t},a.default.createElement("span",{className:c("badge-name")},"github"),a.default.createElement("span",{className:c("badge-version")},"source")):void 0;return a.default.createElement("div",{className:c("badge-container")},o,i)};s.propTypes=u;var d=s;t.default=d},1012:function(e,t,n){e.exports={badge:"Badges-module__badge___3m7y2","badge-container":"Badges-module__badge-container___1YxI5","badge-name":"Badges-module__badge-name___BQ3u4","badge-version":"Badges-module__badge-version___3OgwS"}},1015:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),l=r(n(20));function r(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i=function(e){var t=o({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var c=i;t.default=c},1016:function(e,t,n){e.exports={"orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___MlAIc",template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",css:"ExampleTemplate-module__css___3yyDQ",code:"ExampleTemplate-module__code____AmLF","css-toggle":"ExampleTemplate-module__css-toggle___2I9Yn","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","is-selected":"ExampleTemplate-module__is-selected___1H6Un",item:"ExampleTemplate-module__item___1N1C-",chevron:"ExampleTemplate-module__chevron___3Xlby",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}},1020:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(0)),l=i(n(2)),r=i(n(4)),o=i(n(1023));function i(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.default.bind(o.default),d={variant:l.default.oneOf(["light","dark"]),title:l.default.string},m=function(e){var t=e.variant,n=e.title,l=u(e,["variant","title"]),r=s(["placeholder",l.className]),o=s(["inner","is-".concat(t)]);return a.default.createElement("div",c({},l,{className:r}),a.default.createElement("div",{className:o},a.default.createElement("h2",null,n)))};m.propTypes=d,m.defaultProps={variant:"dark",title:""};var p=m;t.default=p},1023:function(e,t,n){e.exports={placeholder:"Placeholder-module__placeholder___37I0I",inner:"Placeholder-module__inner___2DX7N","is-light":"Placeholder-module__is-light___3__YD","is-dark":"Placeholder-module__is-dark___9wQwQ"}},1240:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0),l=n.n(a),r=n(1011),o=n.n(r),i=function(e){var t=e.url;return l.a.createElement(o.a,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-application-navigation",name:"terra-application-navigation",version:"1.35.0",url:t})}},1290:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),l=r(n(20));function r(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i=function(e){var t=o({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"M24 0A14.94 14.94 0 009.1 14.9a15.52 15.52 0 001.5 6.5 14.69 14.69 0 004.1 5.1 12.06 12.06 0 014.3 6.7 2.19 2.19 0 00-1.1 1.8v7.8a2.11 2.11 0 002.1 2.1h1a3 3 0 106 0h.9a2.11 2.11 0 002.1-2.1V35a2.06 2.06 0 00-1.1-1.8 12.4 12.4 0 014.1-6.6 16.23 16.23 0 004.4-5.3 14.43 14.43 0 001.5-6.5A14.92 14.92 0 0024 0zm7 24.4a15.76 15.76 0 00-3.9 5 11.75 11.75 0 00-1.2 3.6h-.2V20h2a1.54 1.54 0 001.5-1.5 1.56 1.56 0 00-1.6-1.5h-7a1.5 1.5 0 000 3h2v13h-.5a13.86 13.86 0 00-1.2-3.6 14.67 14.67 0 00-4.5-5.4h.1a12 12 0 01-4.3-9.1A11.78 11.78 0 0124 3a11.93 11.93 0 0111.9 11.9 12 12 0 01-4.9 9.5z"}))};i.displayName="IconLightbulb",i.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var c=i;t.default=c},1298:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),l=r(n(20));function r(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i=function(e){var t=o({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"M48 8v16h-6v-5.7L25.31 35l-4.56-4.56L9.18 42H48v6H0V0h6v36.7l14.75-14.76 4.56 4.56L37.82 14H32V8z"}))};i.displayName="IconVisualization",i.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var c=i;t.default=c},1438:function(e,t,n){"use strict";var a=n(5);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l.default}});var l=a(n(390))},1449:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),l=r(n(20));function r(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i=function(e){var t=o({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"M44.7 3.2C42.6 1.1 39.8 0 37 0s-5.7 1.1-7.8 3.3l-26 26c-4.3 4.3-4.2 11.3.1 15.6 2.1 2 4.9 3.1 7.7 3.1s5.7-1.1 7.8-3.3l26-26c4.3-4.3 4.3-11.3-.1-15.5zm-2 13.4l-13 13-11.4-11.2 13-13C32.8 3.8 34.8 3 37 3c2.1 0 4.1.8 5.6 2.3S45 8.8 45 11c0 2.1-.8 4.1-2.3 5.6z"}))};i.displayName="IconPill",i.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",isBidi:!0};var c=i;t.default=c},1725:function(e,t,n){"use strict";var a=n(11),l=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(76)),o=a(n(0)),i=l(n(1438)),c=l(n(242)),u=l(n(1449)),s=l(n(1298)),d=l(n(1290)),m=l(n(1020)),p=l(n(1726)),f=l(n(403)),y={title:"Test Title"},v={name:"Test Name",initials:"TN"},g=[{icon:o.default.createElement(c.default,null),key:"item-a",text:"Item A",metaData:{test:"a"}},{icon:o.default.createElement(u.default,null),key:"item-b",text:"Item B",metaData:{test:"b"}},{icon:o.default.createElement(s.default,null),key:"item-c",text:"Item C",metaData:{test:"c"}},{icon:o.default.createElement(d.default,null),key:"item-d",text:"Item D",metaData:{test:"d"}}],_=[{key:"/page_1",text:"Page 1",metaData:{display:"Page 1"}},{key:"/page_2",text:"Page 2",metaData:{display:"Page 2"}},{key:"/page_3",text:"Page 3",metaData:{display:"Page 3"}},{key:"/page_4",text:"Page 4",metaData:{display:"Page 4"}},{key:"/page_5",text:"Page 5",metaData:{display:"Page 5"}},{key:"/page_6",text:"Page 6",metaData:{display:"Page 6"}},{key:"/page_7",text:"Page 7",metaData:{display:"Page 7"}},{key:"/page_8",text:"Page 8",metaData:{display:"Page 8"}}],b=[{icon:o.default.createElement(c.default,null),key:"item-a",text:"Item A",metaData:{test:"a"}},{icon:o.default.createElement(u.default,null),key:"item-b",text:"Item B",metaData:{test:"b"}},{icon:o.default.createElement(s.default,null),key:"item-c",text:"Item C",metaData:{test:"c"}},{icon:o.default.createElement(d.default,null),key:"item-d",text:"Item D",metaData:{test:"d"}}],x=function(e){var t=e.onAction,n=(0,o.useState)(_[0].key),a=(0,r.default)(n,2),l=a[0],c=a[1];return o.default.createElement(i.default,{locale:"en-US"},o.default.createElement(f.default,{titleConfig:y,userConfig:v,extensionItems:g,onSelectExtensionItem:t,navigationItems:_,activeNavigationItemKey:l,onSelectNavigationItem:function(e){return c(e)},utilityItems:b,onSelectUtilityItem:t,onSelectSettings:function(){return t("settings")},onSelectHelp:function(){return t("help")},onSelectLogout:function(){return t("logout")}},o.default.createElement(m.default,{title:l})))},h=function(){return o.default.createElement(p.default,null,o.default.createElement(x,null))};t.default=h},1726:function(e,t,n){"use strict";var a=n(11),l=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(76)),o=a(n(0)),i=l(n(4)),c=l(n(1727)),u=i.default.bind(c.default),s=function(e){var t=e.children,n=(0,o.useState)(null),a=(0,r.default)(n,2),l=a[0],i=a[1];function c(e){i("Current Action: ".concat(e))}return o.default.createElement("div",null,l,o.default.createElement("div",{className:u("wrapper")},o.default.Children.map(t,(function(e){return o.default.cloneElement(e,{onAction:c})}))))};t.default=s},1727:function(e,t,n){e.exports={wrapper:"ExampleWrapper-module__wrapper___9NvYr"}},3198:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var a=n(0),l=n.n(a),r=n(365),o=n(1240),i=n(1725),c=n.n(i);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d={};function m(e){var t=e.components,n=s(e,["components"]);return Object(r.mdx)("wrapper",u({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("pre",null,Object(r.mdx)("code",u({parentName:"pre"},{className:"language-jsx"}),"/* eslint-disable react/prop-types */\nimport React, { useState } from 'react';\nimport ApplicationBase from 'terra-application/lib/application-base';\nimport IconSearch from 'terra-icon/lib/icon/IconSearch';\nimport IconPill from 'terra-icon/lib/icon/IconPill';\nimport IconVisualization from 'terra-icon/lib/icon/IconVisualization';\nimport IconLightbulb from 'terra-icon/lib/icon/IconLightbulb';\nimport Placeholder from 'terra-doc-template/lib/Placeholder';\nimport ExampleWrapper from './ExampleWrapper';\nimport ApplicationNavigation from '../../../ApplicationNavigation';\n\nconst titleConfig = {\n  title: 'Test Title',\n};\n\nconst userConfig = {\n  name: 'Test Name',\n  initials: 'TN',\n};\n\nconst extensionItems = [\n  {\n    icon: <IconSearch />,\n    key: 'item-a',\n    text: 'Item A',\n    metaData: {\n      test: 'a',\n    },\n  }, {\n    icon: <IconPill />,\n    key: 'item-b',\n    text: 'Item B',\n    metaData: {\n      test: 'b',\n    },\n  }, {\n    icon: <IconVisualization />,\n    key: 'item-c',\n    text: 'Item C',\n    metaData: {\n      test: 'c',\n    },\n  }, {\n    icon: <IconLightbulb />,\n    key: 'item-d',\n    text: 'Item D',\n    metaData: {\n      test: 'd',\n    },\n  },\n];\n\nconst navigationItems = [\n  {\n    key: '/page_1',\n    text: 'Page 1',\n    metaData: {\n      display: 'Page 1',\n    },\n  }, {\n    key: '/page_2',\n    text: 'Page 2',\n    metaData: {\n      display: 'Page 2',\n    },\n  }, {\n    key: '/page_3',\n    text: 'Page 3',\n    metaData: {\n      display: 'Page 3',\n    },\n  }, {\n    key: '/page_4',\n    text: 'Page 4',\n    metaData: {\n      display: 'Page 4',\n    },\n  }, {\n    key: '/page_5',\n    text: 'Page 5',\n    metaData: {\n      display: 'Page 5',\n    },\n  }, {\n    key: '/page_6',\n    text: 'Page 6',\n    metaData: {\n      display: 'Page 6',\n    },\n  }, {\n    key: '/page_7',\n    text: 'Page 7',\n    metaData: {\n      display: 'Page 7',\n    },\n  }, {\n    key: '/page_8',\n    text: 'Page 8',\n    metaData: {\n      display: 'Page 8',\n    },\n  },\n];\n\nconst utilityItems = [\n  {\n    icon: <IconSearch />,\n    key: 'item-a',\n    text: 'Item A',\n    metaData: {\n      test: 'a',\n    },\n  }, {\n    icon: <IconPill />,\n    key: 'item-b',\n    text: 'Item B',\n    metaData: {\n      test: 'b',\n    },\n  }, {\n    icon: <IconVisualization />,\n    key: 'item-c',\n    text: 'Item C',\n    metaData: {\n      test: 'c',\n    },\n  }, {\n    icon: <IconLightbulb />,\n    key: 'item-d',\n    text: 'Item D',\n    metaData: {\n      test: 'd',\n    },\n  },\n];\n\nconst ExampleApplication = ({ onAction }) => {\n  const [activeKey, setActiveKey] = useState(navigationItems[0].key);\n\n  return (\n    <ApplicationBase locale=\"en-US\">\n      <ApplicationNavigation\n        titleConfig={titleConfig}\n        userConfig={userConfig}\n        extensionItems={extensionItems}\n        onSelectExtensionItem={onAction}\n        navigationItems={navigationItems}\n        activeNavigationItemKey={activeKey}\n        onSelectNavigationItem={key => setActiveKey(key)}\n        utilityItems={utilityItems}\n        onSelectUtilityItem={onAction}\n        onSelectSettings={() => onAction('settings')}\n        onSelectHelp={() => onAction('help')}\n        onSelectLogout={() => onAction('logout')}\n      >\n        <Placeholder title={activeKey} />\n      </ApplicationNavigation>\n    </ApplicationBase>\n  );\n};\n\nconst ExampleNavigation = () => (\n  <ExampleWrapper>\n    <ExampleApplication />\n  </ExampleWrapper>\n);\n\nexport default ExampleNavigation;\n\n")))}m.isMDXComponent=!0;var p=n(1010),f=n.n(p),y=function(e){var t=e.title,n=e.description,a=e.isExpanded;return l.a.createElement(f.a,{title:t||"Example Application",description:n,example:l.a.createElement(c.a,null),exampleSrc:l.a.createElement(m,null),isExpanded:a})};function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var _={};function b(e){var t=e.components,n=g(e,["components"]);return Object(r.mdx)("wrapper",v({},_,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)(o.a,{mdxType:"Badge"}),Object(r.mdx)("h1",{id:"terra-application-navigation"},"Terra Application Navigation"),Object(r.mdx)("h2",{id:"examples"},"Examples"),Object(r.mdx)(y,{mdxType:"ExampleApplication"}))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=104-03acfbf544122ad488ca.js.map