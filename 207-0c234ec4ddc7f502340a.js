(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{1513:function(e,t,n){e.exports={"paginator-wrapper":"ControlledPaginatorCommon-module__paginator-wrapper___1vq6i"}},1514:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n(0);var r=n(365);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={};function l(e){var t=e.components,n=o(e,["components"]);return Object(r.mdx)("wrapper",a({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("pre",null,Object(r.mdx)("code",a({parentName:"pre"},{className:"language-scss"}),":local {\n  .paginator-wrapper {\n    height: 500px;\n  }\n}\n\n")))}l.isMDXComponent=!0},2553:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n(0)),a=s(n(1353)),o=s(n(57)),i=s(n(2554)),l=s(n(4)),u=s(n(1513));function s(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var a=b(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=l.default.bind(u.default),v=function(){return function(e,t){for(var n=[],a=0;a<t;a+=1)n.push(r.default.createElement("p",{key:Math.floor(Math.random()*Math.floor(1e5))},e));return n}("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor ullamcorper nisi, vel tincidunt dui pharetra vel. Morbi eu rutrum nibh, sit amet placerat libero. Integer vel dapibus nibh. Donec tempor mi vitae lorem congue, ut ultrices metus feugiat. Sed non commodo felis. Aliquam eget maximus dui, ut rhoncus augue.",10)},y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(s,e);var t,n,l,u=f(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=u.call(this,e)).state={content:v(),currentPage:1},t.changePages=t.changePages.bind(g(t)),t}return t=s,(n=[{key:"changePages",value:function(e){this.setState({currentPage:e})}},{key:"render",value:function(){var e=this;return r.default.createElement("div",{className:h("paginator-wrapper")},r.default.createElement(a.default,{header:r.default.createElement("h1",null,"Page",this.state.currentPage),footer:r.default.createElement(i.default,{onPageChange:this.changePages,selectedPage:this.state.currentPage,totalCount:450,itemCountPerPage:10})},r.default.createElement("div",null,r.default.createElement(o.default,{text:"Set Page to 9",onClick:function(){e.setState({currentPage:9})}}),r.default.createElement(o.default,{text:"Set Page to 15",onClick:function(){e.setState({currentPage:15})}}),r.default.createElement(o.default,{text:"Set Page to 45",onClick:function(){e.setState({currentPage:45})}})),this.state.content))}}])&&p(t.prototype,n),l&&p(t,l),s}(r.default.Component);t.default=y},2554:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=g(n(0)),a=g(n(2)),o=g(n(4)),i=g(n(7)),l=n(8),u=g(n(1037)),s=g(n(171)),c=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==b(e)&&"function"!=typeof e)return{default:e};var t=m();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(21)),p=g(n(1354)),d=n(1413),f=g(n(1414));function m(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return m=function(){return e},e}function g(e){return e&&e.__esModule?e:{default:e}}function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=x(e);if(t){var a=x(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return P(this,n)}}function P(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?O(e):t}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var j=o.default.bind(p.default),C={onPageChange:a.default.func.isRequired,selectedPage:a.default.number.isRequired,totalCount:a.default.number.isRequired,itemCountPerPage:a.default.number.isRequired,intl:l.intlShape.isRequired},w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(i,e);var t,n,a,o=y(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,e)).handlePageChange=t.handlePageChange.bind(O(t)),t.defaultProgressivePaginator=t.defaultProgressivePaginator.bind(O(t)),t.reducedProgressivePaginator=t.reducedProgressivePaginator.bind(O(t)),t.setPaginator=t.setPaginator.bind(O(t)),t.state={showReducedPaginator:!1},t}return t=i,(n=[{key:"setPaginator",value:function(e){var t="tiny"===e;this.state.showReducedPaginator!==t&&this.setState({showReducedPaginator:t})}},{key:"handlePageChange",value:function(e){var t=this;return function(n){n.nativeEvent.keyCode!==c.KEY_RETURN&&n.nativeEvent.keyCode!==c.KEY_SPACE||n.preventDefault(),t.props.onPageChange(e)}}},{key:"defaultProgressivePaginator",value:function(){var e=this.context,t=(0,d.calculatePages)(this.props.totalCount,this.props.itemCountPerPage),n=this.props,a=n.selectedPage,o=n.intl,i=1===a?1:a-1,l=a===t?t:a+1;return r.default.createElement("div",{className:j("paginator","progressive",e.className),role:"navigation","aria-label":"pagination"},r.default.createElement("div",null,o.formatMessage({id:"Terra.paginator.pageCount"},{pageNumber:a,pageNumberTotal:t})),r.default.createElement("div",null,r.default.createElement(f.default,{ariaDisabled:1===a,ariaLabel:o.formatMessage({id:"Terra.paginator.first"}),className:j(["nav-link",1===a?"is-disabled":null]),disabled:1===a,onClick:this.handlePageChange(1),onKeyDown:this.handlePageChange(1)},o.formatMessage({id:"Terra.paginator.first"})),r.default.createElement(f.default,{ariaDisabled:1===a,ariaLabel:o.formatMessage({id:"Terra.paginator.previous"}),className:j(["nav-link","previous",1===a?"is-disabled":null]),disabled:1===a,onClick:this.handlePageChange(i),onKeyDown:this.handlePageChange(i)},r.default.createElement("span",{className:j("icon")}),o.formatMessage({id:"Terra.paginator.previous"})),r.default.createElement(f.default,{ariaDisabled:a===t,ariaLabel:o.formatMessage({id:"Terra.paginator.next"}),className:j(["nav-link","next",a===t?"is-disabled":null]),disabled:a===t,onClick:this.handlePageChange(l),onKeyDown:this.handlePageChange(l)},o.formatMessage({id:"Terra.paginator.next"}),r.default.createElement("span",{className:j("icon")})),r.default.createElement(f.default,{ariaDisabled:a===t,ariaLabel:o.formatMessage({id:"Terra.paginator.last"}),className:j(["nav-link",a===t?"is-disabled":null]),disabled:a===t,onClick:this.handlePageChange(t),onKeyDown:this.handlePageChange(t)},o.formatMessage({id:"Terra.paginator.last"}))))}},{key:"reducedProgressivePaginator",value:function(){var e=this.context,t=(0,d.calculatePages)(this.props.totalCount,this.props.itemCountPerPage),n=this.props,a=n.selectedPage,o=n.intl,i=1===a?1:a-1,l=a===t?t:a+1;return r.default.createElement("div",{className:j("paginator",e.className),role:"navigation","aria-label":"pagination"},r.default.createElement("div",null,r.default.createElement(f.default,{ariaDisabled:1===a,ariaLabel:o.formatMessage({id:"Terra.paginator.first"}),className:j(["nav-link",1===a?"is-disabled":null]),disabled:1===a,onClick:this.handlePageChange(1),onKeyDown:this.handlePageChange(1)},o.formatMessage({id:"Terra.paginator.first"})),r.default.createElement(f.default,{ariaDisabled:1===a,ariaLabel:o.formatMessage({id:"Terra.paginator.previous"}),className:j(["nav-link","previous","icon-only",1===a?"is-disabled":null]),disabled:1===a,onClick:this.handlePageChange(i),onKeyDown:this.handlePageChange(i)},r.default.createElement(s.default,{text:o.formatMessage({id:"Terra.paginator.previous"})}),r.default.createElement("span",{className:j("icon")}))),r.default.createElement("div",null,o.formatMessage({id:"Terra.paginator.pageCount"},{pageNumber:a,pageNumberTotal:t})),r.default.createElement("div",null,r.default.createElement(f.default,{ariaDisabled:a===t,ariaLabel:o.formatMessage({id:"Terra.paginator.next"}),className:j(["nav-link","next","icon-only",a===t?"is-disabled":null]),disabled:a===t,onClick:this.handlePageChange(l),onKeyDown:this.handlePageChange(l)},r.default.createElement(s.default,{text:o.formatMessage({id:"Terra.paginator.next"})}),r.default.createElement("span",{className:j("icon")})),r.default.createElement(f.default,{ariaDisabled:a===t,ariaLabel:o.formatMessage({id:"Terra.paginator.last"}),className:j(["nav-link",a===t?"is-disabled":null]),disabled:a===t,onClick:this.handlePageChange(t),onKeyDown:this.handlePageChange(t)},o.formatMessage({id:"Terra.paginator.last"}))))}},{key:"render",value:function(){return r.default.createElement(u.default,{onChange:this.setPaginator},this.state.showReducedPaginator?this.reducedProgressivePaginator():this.defaultProgressivePaginator())}}])&&h(t.prototype,n),a&&h(t,a),i}(r.default.Component);w.propTypes=C,w.contextType=i.default;var E=(0,l.injectIntl)(w);t.default=E},3174:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var r=n(0),a=n.n(r),o=n(365),i=n(1231),l=n(2553),u=n.n(l);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p={};function d(e){var t=e.components,n=c(e,["components"]);return Object(o.mdx)("wrapper",s({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",s({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Dialog from 'terra-dialog';\nimport Button from 'terra-button';\nimport ControlledProgressivePaginator from 'terra-paginator/lib/ControlledProgressivePaginator';\nimport classNames from 'classnames/bind';\nimport styles from './ControlledPaginatorCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst totalCount = 450;\n\nconst fillArray = (value, len) => {\n  const arr = [];\n  for (let i = 0; i < len; i += 1) {\n    arr.push(<p key={Math.floor(Math.random() * Math.floor(100000))}>{value}</p>);\n  }\n  return arr;\n};\n\nconst buildPage = () => {\n  let fullContent = [];\n  const content = ('Lorem ipsum dolor sit amet, consectetur adipiscing elit. '\n    + 'Fusce porttitor ullamcorper nisi, vel tincidunt dui pharetra vel. '\n    + 'Morbi eu rutrum nibh, sit amet placerat libero. Integer vel dapibus nibh. '\n    + 'Donec tempor mi vitae lorem congue, ut ultrices metus feugiat. Sed non commodo felis. '\n    + 'Aliquam eget maximus dui, ut rhoncus augue.');\n\n  fullContent = fillArray(content, 10);\n\n  return (\n    fullContent\n  );\n};\n\nclass ProgressivePaginatorExample extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      content: buildPage(),\n      currentPage: 1,\n    };\n\n    this.changePages = this.changePages.bind(this);\n  }\n\n  changePages(index) {\n    this.setState({ currentPage: index });\n  }\n\n  render() {\n    return (\n      <div className={cx('paginator-wrapper')}>\n        <Dialog\n          header={(\n            <h1>\n              Page\n              {this.state.currentPage}\n            </h1>\n)}\n          footer={<ControlledProgressivePaginator onPageChange={this.changePages} selectedPage={this.state.currentPage} totalCount={totalCount} itemCountPerPage={10} />}\n        >\n          <div>\n            <Button text=\"Set Page to 9\" onClick={() => { this.setState({ currentPage: 9 }); }} />\n            <Button text=\"Set Page to 15\" onClick={() => { this.setState({ currentPage: 15 }); }} />\n            <Button text=\"Set Page to 45\" onClick={() => { this.setState({ currentPage: 45 }); }} />\n          </div>\n          {this.state.content}\n        </Dialog>\n      </div>\n    );\n  }\n}\n\nexport default ProgressivePaginatorExample;\n\n")))}d.isMDXComponent=!0;var f=n(1010),m=n.n(f),g=n(1514),b=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(m.a,{title:t||"Controlled Progressive Paginator Example",description:n,example:a.a.createElement(u.a,null),exampleCssSrc:a.a.createElement(g.a,null),exampleSrc:a.a.createElement(d,null),isExpanded:r})},h=n(1013),v=n.n(h);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function P(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var O=function(){return Object(o.mdx)(v.a,{rows:[{name:"onPageChange",type:function(){var e={};function t(t){var n=t.components,r=P(t,["components"]);return Object(o.mdx)("wrapper",y({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=P(t,["components"]);return Object(o.mdx)("wrapper",y({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Function to be executed when a navigation element is selected."))}return t.isMDXComponent=!0,t({})}},{name:"selectedPage",type:function(){var e={};function t(t){var n=t.components,r=P(t,["components"]);return Object(o.mdx)("wrapper",y({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"number"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=P(t,["components"]);return Object(o.mdx)("wrapper",y({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The active/selected page."))}return t.isMDXComponent=!0,t({})}},{name:"totalCount",type:function(){var e={};function t(t){var n=t.components,r=P(t,["components"]);return Object(o.mdx)("wrapper",y({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"number"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=P(t,["components"]);return Object(o.mdx)("wrapper",y({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Total number of all items being paginated."))}return t.isMDXComponent=!0,t({})}},{name:"itemCountPerPage",type:function(){var e={};function t(t){var n=t.components,r=P(t,["components"]);return Object(o.mdx)("wrapper",y({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"number"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=P(t,["components"]);return Object(o.mdx)("wrapper",y({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Total number of items per page."))}return t.isMDXComponent=!0,t({})}}]})};function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function j(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var C={};function w(e){var t=e.components,n=j(e,["components"]);return Object(o.mdx)("wrapper",x({},C,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)(i.a,{mdxType:"Badge"}),Object(o.mdx)("h1",{id:"terra-controlled-progressive-paginator"},"Terra Controlled Progressive Paginator"),Object(o.mdx)("p",null,"Controlled version of the ",Object(o.mdx)("a",x({parentName:"p"},{href:"https://engineering.cerner.com/terra-core/components/terra-paginator/paginator/progressive-paginator"}),"Progressive Paginator")," for when the pagination state needs to be managed by a parent component. To use this component, the selectedPage must be managed through the state of a parent component, and passed into this paginator through props."),Object(o.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Install with ",Object(o.mdx)("a",x({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(o.mdx)("ul",{parentName:"li"},Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"npm install terra-paginator"))))),Object(o.mdx)("h2",{id:"usage"},"Usage"),Object(o.mdx)("pre",null,Object(o.mdx)("code",x({parentName:"pre"},{className:"language-jsx"}),"import ControlledProgressivePaginator from 'terra-paginator/lib/ControlledProgressivePaginator';\n")),Object(o.mdx)("h2",{id:"component-features"},"Component Features"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",x({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",x({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#responsive-support"}),"Responsive Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",x({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#mobile-support"}),"Mobile Support"))),Object(o.mdx)("h2",{id:"examples"},"Examples"),Object(o.mdx)(b,{mdxType:"ControlledProgressivePaginatorExample"}),Object(o.mdx)("h2",{id:"controlled-progressive-paginator-props"},"Controlled Progressive Paginator Props"),Object(o.mdx)(O,{mdxType:"ControlledProgressivePaginatorPropsTable"}))}w.isMDXComponent=!0}}]);
//# sourceMappingURL=207-0c234ec4ddc7f502340a.js.map