(window.webpackJsonp=window.webpackJsonp||[]).push([[408],{1181:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=[{key:"unique-0",toggleText:"Toggle Power Row 0",discloseText:"Power Row 0 - Details",primaryIndex:1,cells:[{key:"unique-0-0",title:"Item 0-0"},{key:"unique-0-1",title:"Item 0-1"},{key:"unique-0-2",title:"Item 0-2"},{key:"unique-0-3",title:"Item 0-3"}]},{key:"unique-1",toggleText:"Toggle Power Row 1",discloseText:"Power Row 1 - Details",primaryIndex:1,cells:[{key:"unique-1-0",title:"Item 1-0"},{key:"unique-1-1",title:"Item 1-1"},{key:"unique-1-2",title:"Item 1-2"},{key:"unique-1-3",title:"Item 1-3"}]},{key:"unique-2",toggleText:"Toggle Power Row 2",discloseText:"Power Row 2 - Details",primaryIndex:1,cells:[{key:"unique-2-0",title:"Item 2-0"},{key:"unique-2-1",title:"Item 2-1"},{key:"unique-2-2",title:"Item 2-2"},{key:"unique-2-3",title:"Item 2-3"}]},{key:"unique-3",toggleText:"Toggle Power Row 3",discloseText:"Power Row 3 - Details",primaryIndex:1,cells:[{key:"unique-3-0",title:"Item 3-0"},{key:"unique-3-1",title:"Item 3-1"},{key:"unique-3-2",title:"Item 3-2"},{key:"unique-3-3",title:"Item 3-3"}]},{key:"unique-4",toggleText:"Toggle Power Row 4",discloseText:"Power Row 4 - Details",primaryIndex:1,cells:[{key:"unique-4-0",title:"Item 4-0"},{key:"unique-4-1",title:"Item 4-1"},{key:"unique-4-2",title:"Item 4-2"},{key:"unique-4-3",title:"Item 4-3"}]}];t.default=l},2686:function(e,t,n){"use strict";function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var r=a?Object.getOwnPropertyDescriptor(e,o):null;r&&(r.get||r.set)?Object.defineProperty(n,o,r):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(0)),o=i(n(1025)),r=i(n(1181));function i(e){return e&&e.__esModule?e:{default:e}}function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],l=!0,a=!1,o=void 0;try{for(var r,i=e[Symbol.iterator]();!(l=(r=i.next()).done)&&(n.push(r.value),!t||n.length!==t);l=!0);}catch(e){a=!0,o=e}finally{try{l||null==i.return||i.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}var d=function(){var e,t=s((0,a.useState)([]),2),n=t[0],l=t[1],i=function(e,t){e.preventDefault(),n!==t.key&&l(t.key)};return a.default.createElement(o.default,{summaryId:"example-single-select",summary:"This table shows an implementation of single row selection.",numberOfColumns:4,cellPaddingStyle:"standard",rowStyle:"toggle",dividerStyle:"horizontal",headerData:{selectAllColumn:{checkLabel:"Single Selection"},cells:[{key:"cell-0",id:"toggle-0",children:"Column 0"},{key:"cell-1",id:"toggle-1",children:"Column 1"},{key:"cell-2",id:"toggle-2",children:"Column 2"},{key:"cell-3",id:"toggle-3",children:"Column 3"}]},bodyData:[{rows:(e=r.default,e.map((function(e){return{key:(t=e).key,cells:(l=t.cells,l.map((function(e){return function(e){return{key:e.key,children:e.title}}(e)}))),toggleAction:{metaData:{key:t.key},onToggle:i,isToggled:n===t.key,toggleLabel:t.toggleText}};var t,l})))}]})};t.default=d},3199:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var l=n(0),a=n.n(l),o=n(365),r=n(2686),i=n.n(r);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u={};function d(e){var t=e.components,n=s(e,["components"]);return Object(o.mdx)("wrapper",c({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",c({parentName:"pre"},{className:"language-jsx"}),"import React, {\n  useState,\n} from 'react';\nimport Table from 'terra-table';\nimport mockData from './mock-data/mock-select';\n\nconst createCell = cell => ({ key: cell.key, children: cell.title });\n\nconst createCellsForRow = cells => cells.map(cell => createCell(cell));\n\nconst SingleSelectTable = () => {\n  const [selectedKey, setSelectedKey] = useState([]);\n\n  const handleRowToggle = (event, metaData) => {\n    event.preventDefault();\n    if (selectedKey !== metaData.key) {\n      setSelectedKey(metaData.key);\n    }\n  };\n\n  const createRow = rowData => (\n    {\n      key: rowData.key,\n      cells: createCellsForRow(rowData.cells),\n      toggleAction: {\n        metaData: { key: rowData.key },\n        onToggle: handleRowToggle,\n        isToggled: selectedKey === rowData.key,\n        toggleLabel: rowData.toggleText,\n      },\n    }\n  );\n\n  const createRows = data => data.map(childItem => createRow(childItem));\n\n  return (\n    <Table\n      summaryId=\"example-single-select\"\n      summary=\"This table shows an implementation of single row selection.\"\n      numberOfColumns={4}\n      cellPaddingStyle=\"standard\"\n      rowStyle=\"toggle\"\n      dividerStyle=\"horizontal\"\n      headerData={{\n        selectAllColumn: {\n          checkLabel: 'Single Selection',\n        },\n        cells: [\n          { key: 'cell-0', id: 'toggle-0', children: 'Column 0' },\n          { key: 'cell-1', id: 'toggle-1', children: 'Column 1' },\n          { key: 'cell-2', id: 'toggle-2', children: 'Column 2' },\n          { key: 'cell-3', id: 'toggle-3', children: 'Column 3' },\n        ],\n      }}\n      bodyData={[\n        {\n          rows: createRows(mockData),\n        },\n      ]}\n    />\n  );\n};\n\nexport default SingleSelectTable;\n\n")))}d.isMDXComponent=!0;var m=n(1010),g=n.n(m),y=function(e){var t=e.title,n=e.description,l=e.isExpanded;return a.a.createElement(g.a,{title:t||"Single Select Table",description:n,example:a.a.createElement(i.a,null),exampleSrc:a.a.createElement(d,null),isExpanded:l})};function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var w={};function h(e){var t=e.components,n=f(e,["components"]);return Object(o.mdx)("wrapper",p({},w,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("h1",{id:"terra-table---implementing-a-single-select-table"},"Terra Table - Implementing a Single Select Table"),Object(o.mdx)("p",null,"The terra-table implementation requires controlled state if selections are required. As a result selections are applied at child row generation from the consuming component's state. The following guide will show you how to implement that state within a single row selection variant of table."),Object(o.mdx)("h2",{id:"state-management"},"State Management"),Object(o.mdx)("p",null,"This guide will show you how to implement row selection state within a single row selection variant of table. To enable row selection, terra-table requires selection state to be managed by the consuming component. As a result selections from the consuming components state are applied at generation of the table rows."),Object(o.mdx)("p",null," First defaulting our state to a null value with the useState hook."),Object(o.mdx)("pre",null,Object(o.mdx)("code",p({parentName:"pre"},{className:"language-diff"}),"+ const [selectedKey, setSelectedKey] = useState([]);\n")),Object(o.mdx)("p",null,'Next creating an event handler callback method to pass to the table row\'s "onToggle" prop. The "onToggle" will return the metaData prop passed it each row.'),Object(o.mdx)("pre",null,Object(o.mdx)("code",p({parentName:"pre"},{className:"language-diff"}),"+  const handleRowToggle = (event, metaData) => {\n\n+  };\n")),Object(o.mdx)("p",null,"As a precaution we can prevent default on the event, in case the table has an ancestor with a listener. This also prevents the browser from auto page scrolling when we are intending to make a selection with the space bar."),Object(o.mdx)("pre",null,Object(o.mdx)("code",p({parentName:"pre"},{className:"language-diff"}),"  const handleRowToggle = (event, metaData) => {\n+   event.preventDefault();\n  };\n")),Object(o.mdx)("p",null,"Compare the new key to the current key in state and if they aren't the same, set the new key in state. Single select tables normally don't allow deselection, so neither will this example. If deselection is desired adjust this method to toggle selection."),Object(o.mdx)("pre",null,Object(o.mdx)("code",p({parentName:"pre"},{className:"language-diff"}),"  const handleRowToggle = (event, metaData) => {\n    event.preventDefault();\n+   if (selectedKey !== metaData.key) {\n+     setSelectedKey(metaData.key);\n+   }\n  };\n")),Object(o.mdx)("p",null,"Setting state will trigger another render. In the render method we need to generate our table rows with the updated isToggle and onToggle props. Each item needs a unique key, not necessarily associated to our own key, but it works as well. The table renders flat, so keys need to be unique even if they are placed within sections.\n",Object(o.mdx)("a",p({parentName:"p"},{href:"https://reactjs.org/docs/lists-and-keys.html"}),"React List & Key Documentation")),Object(o.mdx)("pre",null,Object(o.mdx)("code",p({parentName:"pre"},{className:"language-diff"}),"+  const createRow = rowData => (\n+    {\n+      key: rowData.key,\n+      cells: createCellsForRow(rowData.cells),\n+    }\n+  );\n")),Object(o.mdx)("p",null,'Next we need to set up our metaData object with our key value, and attach the "onToggle" to our handler.'),Object(o.mdx)("pre",null,Object(o.mdx)("code",p({parentName:"pre"},{className:"language-diff"}),"  const createRow = rowData => (\n    {\n      key: rowData.key,\n      cells: createCellsForRow(rowData.cells),\n+     toggleAction: {\n+       metaData: { key: rowData.key },\n+       onToggle: handleRowToggle,\n+     }\n    }\n  );\n")),Object(o.mdx)("p",null,"Next we need to check if the item matches the selectedKey in state."),Object(o.mdx)("pre",null,Object(o.mdx)("code",p({parentName:"pre"},{className:"language-diff"}),"  const createRow = (rowData) => (\n    {\n      key: rowData.key,\n      cells: createCellsForRow(rowData.cells),\n      toggleAction: {\n        metaData: { key: rowData.key },\n        onToggle: handleRowToggle,\n+       isToggled: selectedKeys.indexOf(rowData.key) >= 0,\n+       toggleLabel: rowData.toggleText,\n      }\n    }\n  };\n")),Object(o.mdx)("p",null,"We can then implement the unpack of our data into our row cells."),Object(o.mdx)("pre",null,Object(o.mdx)("code",p({parentName:"pre"},{className:"language-diff"}),"+ const createCell = cell => ({ key: cell.key, children: cell.title });\n\n+ const createCellsForRow = cells => cells.map(cell => createCell(cell));\n")),Object(o.mdx)("p",null,"Finally we can implement a method to loop through our data and create the table with our methods and call it from our render method."),Object(o.mdx)("pre",null,Object(o.mdx)("code",p({parentName:"pre"},{className:"language-diff"}),"+ const createRows = data => data.map(childItem => createRow(childItem));\n\n...\n  return (\n+   <Table\n+     summaryId=\"example-single-select\"\n+     summary=\"This table shows an implementation of single row selection.\"\n+     numberOfColumns={4}\n+     cellPaddingStyle=\"standard\"\n+     rowStyle=\"toggle\"\n+     headerData={{\n+       selectAllColumn: {\n+         checkLabel: 'Single Selection',\n+       },\n+       cells: [\n+         { key: 'cell-0', id: 'toggle-0', children: 'Column 0' },\n+         { key: 'cell-1', id: 'toggle-1', children: 'Column 1' },\n+         { key: 'cell-2', id: 'toggle-2', children: 'Column 2' },\n+         { key: 'cell-3', id: 'toggle-3', children: 'Column 3' },\n+       ],\n+     }}\n+     bodyData={[\n+       {\n+         rows: createRows(mockData),\n+       },\n+     ]}\n+   </Table>\n  );\n")),Object(o.mdx)("p",null,"Using these steps we get the following example:"),Object(o.mdx)(y,{mdxType:"SingleSelectTable"}))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=408-b34af1642d95662ad459.js.map