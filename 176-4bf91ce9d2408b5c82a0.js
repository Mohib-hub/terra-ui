(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{1010:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var l=r?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(0)),o=d(n(2)),l=d(n(4)),i=n(135),u=d(n(1015)),c=d(n(236)),m=n(21),s=d(n(1016));function d(e){return e&&e.__esModule?e:{default:e}}function p(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(a=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var v=l.default.bind(s.default),_={example:o.default.element,exampleSrc:o.default.element,exampleCssSrc:o.default.element,title:o.default.string,description:o.default.node,isExpanded:o.default.bool},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},g=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,o=e.title,l=e.description,s=e.isExpanded,d=f((0,r.useState)(s),2),p=d[0],b=d[1],_=f((0,r.useState)(!1),2),g=_[0],w=_[1],x=r.default.useContext(i.ThemeContext),E=void 0!==a,O=function(){w(!g),p&&b(!p)},F=function(){b(!p),g&&w(!g)},S=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return r.default.createElement("div",{className:v("template",x.className)},r.default.createElement("div",{className:v("header")},o&&r.default.createElement("h2",{className:v("title")},o)),r.default.createElement("div",{className:v("content")},l&&r.default.createElement("div",{className:v("description")},l),t),r.default.createElement("div",{className:v("footer")},n?r.default.createElement("div",{className:v("button-container")},E&&r.default.createElement("button",{type:"button",className:v("css-toggle","item",{"is-selected":g}),onClick:O,onKeyDown:function(e){return S(e,O)},onBlur:y,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(u.default,{className:v("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(c.default,{className:v("chevron")})),r.default.createElement("button",{type:"button",className:v("code-toggle","item",{"is-selected":p}),onClick:F,onKeyDown:function(e){return S(e,F)},onBlur:y,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(u.default,{className:v("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(c.default,{className:v("chevron")}))):null,r.default.createElement("div",null,g&&r.default.createElement("div",{className:v("css")},a),p&&r.default.createElement("div",{className:v("code")},n))))};g.propTypes=_,g.defaultProps={isExpanded:!1};var w=g;t.default=w},1011:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(0)),r=i(n(2)),o=i(n(4)),l=i(n(1012));function i(e){return e&&e.__esModule?e:{default:e}}var u=o.default.bind(l.default),c={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},m=function(e){var t=e.src,n=e.name,r=e.url,o=e.version,l=a.default.createElement("a",{className:u("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(o)},a.default.createElement("span",{className:u("badge-name")},r?"package":"npm"),a.default.createElement("span",{className:u("badge-version")},"v".concat(o))),i=t?a.default.createElement("a",{className:u("badge"),href:t},a.default.createElement("span",{className:u("badge-name")},"github"),a.default.createElement("span",{className:u("badge-version")},"source")):void 0;return a.default.createElement("div",{className:u("badge-container")},l,i)};m.propTypes=c;var s=m;t.default=s},1012:function(e,t,n){e.exports={badge:"Badges-module__badge___3m7y2","badge-container":"Badges-module__badge-container___1YxI5","badge-name":"Badges-module__badge-name___BQ3u4","badge-version":"Badges-module__badge-version___3OgwS"}},1015:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),r=o(n(20));function o(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i=function(e){var t=l({},e);return a.default.createElement(r.default,t,a.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var u=i;t.default=u},1016:function(e,t,n){e.exports={"orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___MlAIc",template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",css:"ExampleTemplate-module__css___3yyDQ",code:"ExampleTemplate-module__code____AmLF","css-toggle":"ExampleTemplate-module__css-toggle___2I9Yn","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","is-selected":"ExampleTemplate-module__is-selected___1H6Un",item:"ExampleTemplate-module__item___1N1C-",chevron:"ExampleTemplate-module__chevron___3Xlby",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}},1215:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0),r=n.n(a),o=n(1011),l=n.n(o),i=function(e){var t=e.url;return r.a.createElement(l.a,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-navigation-prompt",name:"terra-navigation-prompt",version:"1.39.0",url:t})}},2530:function(e,t,n){"use strict";var a=n(11),r=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(76)),l=a(n(0)),i=r(n(2)),u=function(e){var t=e.title,n=e.ariaLabel,a=(0,l.useState)(""),r=(0,o.default)(a,2),i=r[0],u=r[1];return l.default.createElement("div",null,l.default.createElement("p",null,t),l.default.createElement("input",{"aria-label":n,type:"text",onChange:function(e){u(e.target.value)},value:i}),l.default.createElement("button",{type:"button",onClick:function(){u("")}},"Submit"))};u.propTypes={title:i.default.string,ariaLabel:i.default.string};var c=function(){var e=(0,l.useState)("Form 1"),t=(0,o.default)(e,2),n=t[0],a=t[1];function r(e){a(e)}return l.default.createElement("div",null,l.default.createElement("h2",null,"Form Switcher"),l.default.createElement("p",null,"The NavigationPrompt is not implemented, so no prompting occurs."),l.default.createElement("button",{type:"button",disabled:"Form 1"===n,onClick:r.bind(null,"Form 1")},"Switch to Form 1"),l.default.createElement("button",{type:"button",disabled:"Form 2"===n,onClick:r.bind(null,"Form 2")},"Switch to Form 2"),l.default.createElement(u,{title:n,key:n,ariaLabel:n}))};t.default=c},3188:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var a=n(0),r=n.n(a),o=n(365),l=n(1215),i=n(2530),u=n.n(i);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s={};function d(e){var t=e.components,n=m(e,["components"]);return Object(o.mdx)("wrapper",c({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",c({parentName:"pre"},{className:"language-jsx"}),"import React, { useState } from 'react';\nimport PropTypes from 'prop-types';\n\nconst Form = ({ title, ariaLabel }) => {\n  const [inputValue, setInputValue] = useState('');\n\n  return (\n    <div>\n      <p>{title}</p>\n      <input\n        aria-label={ariaLabel}\n        type=\"text\"\n        onChange={(event) => {\n          setInputValue(event.target.value);\n        }}\n        value={inputValue}\n      />\n      <button\n        type=\"button\"\n        onClick={() => {\n          setInputValue('');\n        }}\n      >\n        Submit\n      </button>\n    </div>\n  );\n};\n\nForm.propTypes = {\n  title: PropTypes.string,\n  ariaLabel: PropTypes.string,\n};\n\nconst FormSwitcher = () => {\n  const [activeForm, setActiveForm] = useState('Form 1');\n\n  function onSwitchForm(formKey) {\n    setActiveForm(formKey);\n  }\n\n  return (\n    <div>\n      <h2>Form Switcher</h2>\n      <p>The NavigationPrompt is not implemented, so no prompting occurs.</p>\n      <button\n        type=\"button\"\n        disabled={activeForm === 'Form 1'}\n        onClick={onSwitchForm.bind(null, 'Form 1')}\n\n      >\n        Switch to Form 1\n      </button>\n      <button\n        type=\"button\"\n        disabled={activeForm === 'Form 2'}\n        onClick={onSwitchForm.bind(null, 'Form 2')}\n      >\n        Switch to Form 2\n      </button>\n      <Form title={activeForm} key={activeForm} ariaLabel={activeForm} />\n    </div>\n  );\n};\n\nexport default FormSwitcher;\n\n")))}d.isMDXComponent=!0;var p=n(1010),f=n.n(p),b=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.a.createElement(f.a,{title:t||"Implementation Guide Part 0",description:n,example:r.a.createElement(u.a,null),exampleSrc:r.a.createElement(d,null),isExpanded:a})};function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var y={};function h(e){var t=e.components,n=_(e,["components"]);return Object(o.mdx)("wrapper",v({},y,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)(l.a,{mdxType:"Badge"}),Object(o.mdx)("h1",{id:"terra-navigation-prompt---implementation-guide"},"Terra Navigation Prompt - Implementation Guide"),Object(o.mdx)("p",null,"Assume we have built a simple component, the FormSwitcher, that toggles between showing two different stateful components, Form 1 and Form 2. Users of the FormSwitcher have recently complained that they can switch between forms before submitting their in progress form, losing their data in the process. We want to implement the NavigationPrompt and NavigationPromptCheckpoint to give our users more control over the FormSwitcher's navigation."),Object(o.mdx)("blockquote",null,Object(o.mdx)("p",{parentName:"blockquote"},"Note: This implementation guide features examples and use cases for the various APIs provided by the NavigationPrompt and NavigationPromptCheckpoint.\n!! Please review your individual requirements to see which APIs are necessary for your specific needs.")),Object(o.mdx)("h2",{id:"part-0---reviewing-the-initial-formswitcher-implementation"},"Part 0 - Reviewing the Initial FormSwitcher Implementation"),Object(o.mdx)("p",null,"The FormSwitcher renders two buttons that allow users to toggle between showing Form 1 and Form 2. Form 1 and Form 2 are unique instances of the Form component."),Object(o.mdx)("p",null,"The Form component renders a text input element and keeps the input's value in state. When the Submit button is pressed, the value is reset to simulate a mock submission."),Object(o.mdx)("p",null,"If we enter text into Form 1's input, switch to Form 2, and then switch back to Form 1, we will notice our previously entered value is gone. This is not good, because that data in Form 1 could be ",Object(o.mdx)("em",{parentName:"p"},"very")," important to our users."),Object(o.mdx)("h2",{id:"example"},"Example"),Object(o.mdx)(b,{title:"Part 0 - Reviewing the Initial FormSwitcher Implementation",mdxType:"ImplementationGuidePart0"}))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=176-4bf91ce9d2408b5c82a0.js.map