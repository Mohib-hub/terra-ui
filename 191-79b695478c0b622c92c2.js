(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{1176:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(e(0)),i=a(e(2)),r=a(e(4)),l=a(e(1177));function a(n){return n&&n.__esModule?n:{default:n}}var c=r.default.bind(l.default),u={text:i.default.string},s=function(n){var t=n.text;return o.default.createElement("div",{className:c("content-cell")},t)};s.propTypes=u;var d=s;t.default=d},1177:function(n,t,e){n.exports={"content-cell":"ContentCellLayout__content-cell___1l9SY"}},1178:function(n,t,e){n.exports={"data-grid-basic":"Datagrid-module__data-grid-basic___2jvhh","data-grid-row-style":"Datagrid-module__data-grid-row-style___1eRFT","data-grid-paging":"Datagrid-module__data-grid-paging___3PtUm","loading-overlay":"Datagrid-module__loading-overlay___aAZco"}},1179:function(n,t,e){"use strict";e.d(t,"a",(function(){return a}));e(0);var o=e(365);function i(){return(i=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n}).apply(this,arguments)}function r(n,t){if(null==n)return{};var e,o,i=function(n,t){if(null==n)return{};var e,o,i={},r=Object.keys(n);for(o=0;o<r.length;o++)e=r[o],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(o=0;o<r.length;o++)e=r[o],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}var l={};function a(n){var t=n.components,e=r(n,["components"]);return Object(o.mdx)("wrapper",i({},l,e,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",i({parentName:"pre"},{className:"language-scss"}),":local {\n  .data-grid-basic {\n    height: 800px;\n  }\n\n  .data-grid-row-style {\n    height: 100%;\n    width: 100%;\n  }\n\n  .data-grid-paging {\n    height: 800px;\n    position: relative;\n  }\n  \n  .loading-overlay {\n    top: 0;\n  }\n}\n\n\n")))}a.isMDXComponent=!0},1813:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(e(0)),i=u(e(57)),r=u(e(1227)),l=u(e(4)),a=u(e(1176)),c=u(e(1178));function u(n){return n&&n.__esModule?n:{default:n}}function s(n){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function d(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function p(n,t,e){return t&&d(n.prototype,t),e&&d(n,e),n}function f(n,t){return(f=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function m(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,o=h(n);if(t){var i=h(this).constructor;e=Reflect.construct(o,arguments,i)}else e=o.apply(this,arguments);return b(this,e)}}function b(n,t){return!t||"object"!==s(t)&&"function"!=typeof t?y(n):t}function y(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function h(n){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var C=l.default.bind(c.default),w=[{id:"Column-0",width:200,text:"Column 0"},{id:"Column-1",width:200,text:"Column 1"},{id:"Column-2",width:200,text:"Column 2"}],x=[{id:"Column-3",width:200,text:"Column 3"},{id:"Column-4",width:200,text:"Column 4"},{id:"Column-5",width:200,text:"Column 5"},{id:"Column-6",width:200,text:"Column 6"},{id:"Column-7",width:200,text:"Column 7"},{id:"Column-8",width:200,text:"Column 8"},{id:"Column-9",width:200,text:"Column 9"}],g=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&f(n,t)}(e,n);var t=m(e);function e(n){var o;return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),(o=t.call(this,n)).buildSection=o.buildSection.bind(y(o)),o.state={collapsedSectionId:void 0},o}return p(e,null,[{key:"buildRows",value:function(n,t){return new Array(t).fill().map((function(t,e){return{id:"".concat(n,"-Row").concat(e),cells:new Array(10).fill(0).map((function(n,t){return"Column-".concat(t)})).map((function(n){return{columnId:n,component:o.default.createElement(a.default,{text:"Row-".concat(e,", Column ").concat(n)})}}))}}))}}]),p(e,[{key:"buildSection",value:function(n,t,r){return{id:n,text:t,endAccessory:"section_1"===n?o.default.createElement("span",null,o.default.createElement(i.default,{text:"Button 1",isCompact:!0,"data-accessible-data-grid-content":!0}),o.default.createElement(i.default,{text:"Button 2",isCompact:!0,"data-accessible-data-grid-content":!0})):null,isCollapsible:"section_0"===n,isCollapsed:this.state.collapsedSectionId===n,rows:e.buildRows(n,r)}}},{key:"render",value:function(){var n=this;return o.default.createElement("div",{className:C("data-grid-basic")},o.default.createElement(r.default,{id:"subsections-example",pinnedColumns:w,overflowColumns:x,sections:[this.buildSection("section_0","Section 0",15),this.buildSection("section_1","Section 1",15),this.buildSection("section_2","Section 2",15)],onRequestSectionCollapse:function(t){n.state.collapsedSectionId===t?n.setState({collapsedSectionId:void 0}):n.setState({collapsedSectionId:t})},fill:!0}))}}]),e}(o.default.Component);t.default=g},3176:function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return w}));var o=e(0),i=e.n(o),r=e(365),l=e(1813),a=e.n(l);function c(){return(c=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n}).apply(this,arguments)}function u(n,t){if(null==n)return{};var e,o,i=function(n,t){if(null==n)return{};var e,o,i={},r=Object.keys(n);for(o=0;o<r.length;o++)e=r[o],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(o=0;o<r.length;o++)e=r[o],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}var s={};function d(n){var t=n.components,e=u(n,["components"]);return Object(r.mdx)("wrapper",c({},s,e,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("pre",null,Object(r.mdx)("code",c({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Button from 'terra-button';\nimport DataGrid from 'terra-clinical-data-grid';\nimport classNames from 'classnames/bind';\nimport ContentCellLayout from './ContentCellLayout';\nimport styles from './Datagrid.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst pinnedColumns = [\n  {\n    id: 'Column-0',\n    width: 200,\n    text: 'Column 0',\n  },\n  {\n    id: 'Column-1',\n    width: 200,\n    text: 'Column 1',\n  },\n  {\n    id: 'Column-2',\n    width: 200,\n    text: 'Column 2',\n  },\n];\n\nconst overflowColumns = [\n  {\n    id: 'Column-3',\n    width: 200,\n    text: 'Column 3',\n  },\n  {\n    id: 'Column-4',\n    width: 200,\n    text: 'Column 4',\n  },\n  {\n    id: 'Column-5',\n    width: 200,\n    text: 'Column 5',\n  },\n  {\n    id: 'Column-6',\n    width: 200,\n    text: 'Column 6',\n  },\n  {\n    id: 'Column-7',\n    width: 200,\n    text: 'Column 7',\n  },\n  {\n    id: 'Column-8',\n    width: 200,\n    text: 'Column 8',\n  },\n  {\n    id: 'Column-9',\n    width: 200,\n    text: 'Column 9',\n  },\n];\n\nclass DatagridWithSubsections extends React.Component {\n  static buildRows(sectionId, num) {\n    const rows = (new Array(num)).fill().map((rowVal, rowIndex) => ({\n      id: `${sectionId}-Row${rowIndex}`,\n      cells: ((new Array(10).fill(0)).map((cellVal, cellIndex) => (`Column-${cellIndex}`))).map(columnKey => ({\n        columnId: columnKey,\n        component: <ContentCellLayout text={`Row-${rowIndex}, Column ${columnKey}`} />,\n      })),\n    }));\n\n    return rows;\n  }\n\n  constructor(props) {\n    super(props);\n\n    this.buildSection = this.buildSection.bind(this);\n\n    this.state = {\n      collapsedSectionId: undefined,\n    };\n  }\n\n  buildSection(sectionId, sectionName, numberOfRows) {\n    return {\n      id: sectionId,\n      text: sectionName,\n      endAccessory: (sectionId === 'section_1') ? (\n        <span>\n          <Button text=\"Button 1\" isCompact data-accessible-data-grid-content />\n          <Button text=\"Button 2\" isCompact data-accessible-data-grid-content />\n        </span>\n      ) : null,\n      isCollapsible: sectionId === 'section_0',\n      isCollapsed: this.state.collapsedSectionId === sectionId,\n      rows: DatagridWithSubsections.buildRows(sectionId, numberOfRows),\n    };\n  }\n\n  render() {\n    return (\n      <div className={cx('data-grid-basic')}>\n        <DataGrid\n          id=\"subsections-example\"\n          pinnedColumns={pinnedColumns}\n          overflowColumns={overflowColumns}\n          sections={[\n            this.buildSection('section_0', 'Section 0', 15),\n            this.buildSection('section_1', 'Section 1', 15),\n            this.buildSection('section_2', 'Section 2', 15),\n          ]}\n          onRequestSectionCollapse={(sectionId) => {\n            if (this.state.collapsedSectionId === sectionId) {\n              this.setState({ collapsedSectionId: undefined });\n            } else {\n              this.setState({ collapsedSectionId: sectionId });\n            }\n          }}\n          fill\n        />\n      </div>\n    );\n  }\n}\n\nexport default DatagridWithSubsections;\n\n")))}d.isMDXComponent=!0;var p=e(1010),f=e.n(p),m=e(1179),b=function(n){var t=n.title,e=n.description,o=n.isExpanded;return i.a.createElement(f.a,{title:t||"Datagrid With Subsections",description:e,example:i.a.createElement(a.a,null),exampleCssSrc:i.a.createElement(m.a,null),exampleSrc:i.a.createElement(d,null),isExpanded:o})};function y(){return(y=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n}).apply(this,arguments)}function h(n,t){if(null==n)return{};var e,o,i=function(n,t){if(null==n)return{};var e,o,i={},r=Object.keys(n);for(o=0;o<r.length;o++)e=r[o],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(o=0;o<r.length;o++)e=r[o],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}var C={};function w(n){var t=n.components,e=h(n,["components"]);return Object(r.mdx)("wrapper",y({},C,e,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)(b,{description:"This example features multiple subsections. Section 0 is collapsible. \nThe header for Section 1 contains keyboard-accessible content in its endAccessory region.",mdxType:"DatagridWithSubsections"}))}w.isMDXComponent=!0}}]);
//# sourceMappingURL=191-79b695478c0b622c92c2.js.map