(window.webpackJsonp=window.webpackJsonp||[]).push([[405],{1181:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var l=[{key:"unique-0",toggleText:"Toggle Power Row 0",discloseText:"Power Row 0 - Details",primaryIndex:1,cells:[{key:"unique-0-0",title:"Item 0-0"},{key:"unique-0-1",title:"Item 0-1"},{key:"unique-0-2",title:"Item 0-2"},{key:"unique-0-3",title:"Item 0-3"}]},{key:"unique-1",toggleText:"Toggle Power Row 1",discloseText:"Power Row 1 - Details",primaryIndex:1,cells:[{key:"unique-1-0",title:"Item 1-0"},{key:"unique-1-1",title:"Item 1-1"},{key:"unique-1-2",title:"Item 1-2"},{key:"unique-1-3",title:"Item 1-3"}]},{key:"unique-2",toggleText:"Toggle Power Row 2",discloseText:"Power Row 2 - Details",primaryIndex:1,cells:[{key:"unique-2-0",title:"Item 2-0"},{key:"unique-2-1",title:"Item 2-1"},{key:"unique-2-2",title:"Item 2-2"},{key:"unique-2-3",title:"Item 2-3"}]},{key:"unique-3",toggleText:"Toggle Power Row 3",discloseText:"Power Row 3 - Details",primaryIndex:1,cells:[{key:"unique-3-0",title:"Item 3-0"},{key:"unique-3-1",title:"Item 3-1"},{key:"unique-3-2",title:"Item 3-2"},{key:"unique-3-3",title:"Item 3-3"}]},{key:"unique-4",toggleText:"Toggle Power Row 4",discloseText:"Power Row 4 - Details",primaryIndex:1,cells:[{key:"unique-4-0",title:"Item 4-0"},{key:"unique-4-1",title:"Item 4-1"},{key:"unique-4-2",title:"Item 4-2"},{key:"unique-4-3",title:"Item 4-3"}]}];n.default=l},2694:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var l=c(t(0)),a=c(t(1025)),r=c(t(1181));function c(e){return e&&e.__esModule?e:{default:e}}var i=function(){return l.default.createElement(a.default,{summaryId:"example-percentage-table",summary:"This table shows an implementation of percentage width table columns.",numberOfColumns:4,cellPaddingStyle:"standard",columnWidths:[{percentage:20},{percentage:40},{percentage:10},{percentage:30}],dividerStyle:"horizontal",headerData:{cells:[{key:"cell-0",id:"unique-cell-0",children:"20%"},{key:"cell-1",id:"unique-cell-1",children:"40%"},{key:"cell-2",id:"unique-cell-2",children:"10%"},{key:"cell-3",id:"unique-cell-3",children:"30%"}]},bodyData:[{rows:(e=r.default,e.map((function(e){return{key:(n=e).key,cells:(t=n.cells,t.map((function(e){return function(e){return{key:e.key,children:e.title}}(e)})))};var n,t})))}]});var e};n.default=i},3177:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return h}));var l=t(0),a=t.n(l),r=t(365),c=t(2694),i=t.n(c);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}function u(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d={};function s(e){var n=e.components,t=u(e,["components"]);return Object(r.mdx)("wrapper",o({},d,t,{components:n,mdxType:"MDXLayout"}),Object(r.mdx)("pre",null,Object(r.mdx)("code",o({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Table from 'terra-table';\nimport mockData from './mock-data/mock-select';\n\nconst createCell = cell => ({ key: cell.key, children: cell.title });\n\nconst createCellsForRow = cells => cells.map(cell => createCell(cell));\n\nconst createRow = rowData => (\n  {\n    key: rowData.key,\n    cells: createCellsForRow(rowData.cells),\n  }\n);\n\nconst createRows = data => data.map(childItem => createRow(childItem));\n\nconst PercentageWidthTable = () => (\n  <Table\n    summaryId=\"example-percentage-table\"\n    summary=\"This table shows an implementation of percentage width table columns.\"\n    numberOfColumns={4}\n    cellPaddingStyle=\"standard\"\n    columnWidths={[\n      { percentage: 20 },\n      { percentage: 40 },\n      { percentage: 10 },\n      { percentage: 30 },\n    ]}\n    dividerStyle=\"horizontal\"\n    headerData={{\n      cells: [\n        { key: 'cell-0', id: 'unique-cell-0', children: '20%' },\n        { key: 'cell-1', id: 'unique-cell-1', children: '40%' },\n        { key: 'cell-2', id: 'unique-cell-2', children: '10%' },\n        { key: 'cell-3', id: 'unique-cell-3', children: '30%' },\n      ],\n    }}\n    bodyData={[{\n      rows: createRows(mockData),\n    }]}\n  />\n);\n\nexport default PercentageWidthTable;\n\n")))}s.isMDXComponent=!0;var m=t(1010),p=t.n(m),y=function(e){var n=e.title,t=e.description,l=e.isExpanded;return a.a.createElement(p.a,{title:n||"Percentage Width Table",description:t,example:a.a.createElement(i.a,null),exampleSrc:a.a.createElement(s,null),isExpanded:l})};function b(){return(b=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}function g(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var w={};function h(e){var n=e.components,t=g(e,["components"]);return Object(r.mdx)("wrapper",b({},w,t,{components:n,mdxType:"MDXLayout"}),Object(r.mdx)("h1",{id:"terra-table---percentage-width-columns"},"Terra Table - Percentage Width Columns"),Object(r.mdx)("h2",{id:"create-row-and-cell-generation-functions"},"Create Row and Cell Generation Functions"),Object(r.mdx)("p",null,"First we declare our method of creating our rows."),Object(r.mdx)("pre",null,Object(r.mdx)("code",b({parentName:"pre"},{className:"language-diff"}),"+ const createRow = rowData => (\n+   {\n+     key: rowData.key,\n+     cells: createCellsForRow(rowData.cells),\n+   }\n+ );\n\n+ const createRows = data => data.map(childItem => createRow(childItem));\n")),Object(r.mdx)("p",null,"Followed by unpacking our cell data into those rows."),Object(r.mdx)("pre",null,Object(r.mdx)("code",b({parentName:"pre"},{className:"language-diff"}),"+ const createCell = cell => ({ key: cell.key, children: cell.title });\n\n+ const createCellsForRow = cells => cells.map(cell => createCell(cell));\n")),Object(r.mdx)("p",null,"And then we define the functional component returning our table."),Object(r.mdx)("pre",null,Object(r.mdx)("code",b({parentName:"pre"},{className:"language-diff"}),"+ const ScalarWidthTable = () => (\n+   <Table\n+     summaryId=\"example-percentage-table\"\n+     summary=\"This table shows an implementation of percentage width table columns.\"\n+     numberOfColumns={4}\n+     cellPaddingStyle=\"standard\"\n+     headerData={{\n+       cells: [\n+         { key: 'cell-0', id: `unique-cell-0`, children: '20%' },\n+         { key: 'cell-1', id: `unique-cell-1`, children: '40%' },\n+         { key: 'cell-2', id: `unique-cell-2`, children: '10%' },\n+         { key: 'cell-3', id: `unique-cell-3`, children: '30%' },\n+       ],\n+     }}\n+     bodyData={[{\n+       rows: createRows(mockData),\n+     }]}\n+   />\n+ );\n")),Object(r.mdx)("p",null,"Then in order to adjust our columns, we set the ",Object(r.mdx)("inlineCode",{parentName:"p"},"columnWidths")," prop with your appropriate index based width values."),Object(r.mdx)("pre",null,Object(r.mdx)("code",b({parentName:"pre"},{className:"language-diff"}),"const ScalarWidthTable = () => (\n  <Table\n    summaryId=\"example-percentage-table\"\n    summary=\"This table shows an implementation of percentage width table columns.\"\n    numberOfColumns={4}\n    cellPaddingStyle=\"standard\"\n+   columnWidths={[\n+     { percentage: 20 },\n+     { percentage: 40 },\n+     { percentage: 10 },\n+     { percentage: 30 },\n+   ]}\n    headerData={{\n      cells: [\n        { key: 'cell-0', id: `unique-cell-0`, children: '20%' },\n        { key: 'cell-1', id: `unique-cell-1`, children: '40%' },\n        { key: 'cell-2', id: `unique-cell-2`, children: '10%' },\n        { key: 'cell-3', id: `unique-cell-3`, children: '30%' },\n      ],\n    }}\n    bodyData={[{\n      rows: createRows(mockData),\n    }]}\n  />\n);\n")),Object(r.mdx)("p",null,"Using these steps we get the following example:"),Object(r.mdx)(y,{mdxType:"PercentageWidthTable"}))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=405-cacb00ffa1bdab7edc48.js.map