(window.webpackJsonp=window.webpackJsonp||[]).push([[410],{1181:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=[{key:"unique-0",toggleText:"Toggle Power Row 0",discloseText:"Power Row 0 - Details",primaryIndex:1,cells:[{key:"unique-0-0",title:"Item 0-0"},{key:"unique-0-1",title:"Item 0-1"},{key:"unique-0-2",title:"Item 0-2"},{key:"unique-0-3",title:"Item 0-3"}]},{key:"unique-1",toggleText:"Toggle Power Row 1",discloseText:"Power Row 1 - Details",primaryIndex:1,cells:[{key:"unique-1-0",title:"Item 1-0"},{key:"unique-1-1",title:"Item 1-1"},{key:"unique-1-2",title:"Item 1-2"},{key:"unique-1-3",title:"Item 1-3"}]},{key:"unique-2",toggleText:"Toggle Power Row 2",discloseText:"Power Row 2 - Details",primaryIndex:1,cells:[{key:"unique-2-0",title:"Item 2-0"},{key:"unique-2-1",title:"Item 2-1"},{key:"unique-2-2",title:"Item 2-2"},{key:"unique-2-3",title:"Item 2-3"}]},{key:"unique-3",toggleText:"Toggle Power Row 3",discloseText:"Power Row 3 - Details",primaryIndex:1,cells:[{key:"unique-3-0",title:"Item 3-0"},{key:"unique-3-1",title:"Item 3-1"},{key:"unique-3-2",title:"Item 3-2"},{key:"unique-3-3",title:"Item 3-3"}]},{key:"unique-4",toggleText:"Toggle Power Row 4",discloseText:"Power Row 4 - Details",primaryIndex:1,cells:[{key:"unique-4-0",title:"Item 4-0"},{key:"unique-4-1",title:"Item 4-1"},{key:"unique-4-2",title:"Item 4-2"},{key:"unique-4-3",title:"Item 4-3"}]}];t.default=l},2693:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(0)),a=r(n(1025)),i=r(n(1181));function r(e){return e&&e.__esModule?e:{default:e}}var c=function(){return l.default.createElement(a.default,{summaryId:"example-static-table",summary:"This table shows an implementation of static width table columns.",numberOfColumns:4,cellPaddingStyle:"standard",columnWidths:[{static:{value:60,unit:"px"}},{static:{value:45,unit:"px"}},{static:{value:5,unit:"rem"}},{static:{value:120,unit:"px"}}],dividerStyle:"both",headerData:{cells:[{key:"cell-0",id:"unique-cell-0",children:"60px"},{key:"cell-1",id:"unique-cell-1",children:"45px"},{key:"cell-2",id:"unique-cell-2",children:"5rem"},{key:"cell-3",id:"unique-cell-3",children:"120px"}]},bodyData:[{rows:(e=i.default,e.map((function(e){return{key:(t=e).key,cells:(n=t.cells,n.map((function(e){return function(e){return{key:e.key,children:e.title}}(e)})))};var t,n})))}]});var e};t.default=c},3178:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return x}));var l=n(0),a=n.n(l),i=n(365),r=n(2693),c=n.n(r);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s={};function d(e){var t=e.components,n=u(e,["components"]);return Object(i.mdx)("wrapper",o({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",o({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Table from 'terra-table';\nimport mockData from './mock-data/mock-select';\n\nconst createCell = cell => ({ key: cell.key, children: cell.title });\n\nconst createCellsForRow = cells => cells.map(cell => createCell(cell));\n\nconst createRow = rowData => (\n  {\n    key: rowData.key,\n    cells: createCellsForRow(rowData.cells),\n  }\n);\n\nconst createRows = data => data.map(childItem => createRow(childItem));\n\nconst StaticWidthTable = () => (\n  <Table\n    summaryId=\"example-static-table\"\n    summary=\"This table shows an implementation of static width table columns.\"\n    numberOfColumns={4}\n    cellPaddingStyle=\"standard\"\n    columnWidths={[\n      { static: { value: 60, unit: 'px' } },\n      { static: { value: 45, unit: 'px' } },\n      { static: { value: 5, unit: 'rem' } },\n      { static: { value: 120, unit: 'px' } },\n    ]}\n    dividerStyle=\"both\"\n    headerData={{\n      cells: [\n        { key: 'cell-0', id: 'unique-cell-0', children: '60px' },\n        { key: 'cell-1', id: 'unique-cell-1', children: '45px' },\n        { key: 'cell-2', id: 'unique-cell-2', children: '5rem' },\n        { key: 'cell-3', id: 'unique-cell-3', children: '120px' },\n      ],\n    }}\n    bodyData={[{\n      rows: createRows(mockData),\n    }]}\n  />\n);\n\nexport default StaticWidthTable;\n\n")))}d.isMDXComponent=!0;var m=n(1010),p=n.n(m),y=function(e){var t=e.title,n=e.description,l=e.isExpanded;return a.a.createElement(p.a,{title:t||"Static Width Table",description:n,example:a.a.createElement(c.a,null),exampleSrc:a.a.createElement(d,null),isExpanded:l})};function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var h={};function x(e){var t=e.components,n=w(e,["components"]);return Object(i.mdx)("wrapper",b({},h,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("h1",{id:"terra-table---static-width-columns"},"Terra Table - Static Width Columns"),Object(i.mdx)("h2",{id:"create-row-and-cell-generation-functions"},"Create Row and Cell Generation Functions"),Object(i.mdx)("p",null,"First we declare our method of creating our rows."),Object(i.mdx)("pre",null,Object(i.mdx)("code",b({parentName:"pre"},{className:"language-diff"}),"+ const createRow = rowData => (\n+   {\n+     key: rowData.key,\n+     cells: createCellsForRow(rowData.cells),\n+   }\n+ );\n\n+ const createRows = data => data.map(childItem => createRow(childItem));\n")),Object(i.mdx)("p",null,"Followed by unpacking our cell data into those rows."),Object(i.mdx)("pre",null,Object(i.mdx)("code",b({parentName:"pre"},{className:"language-diff"}),"+ const createCell = cell => ({ key: cell.key, children: cell.title });\n\n+ const createCellsForRow = cells => cells.map(cell => createCell(cell));\n")),Object(i.mdx)("p",null,"And then we define the functional component returning our table."),Object(i.mdx)("pre",null,Object(i.mdx)("code",b({parentName:"pre"},{className:"language-diff"}),"+ const StaticWidthTable = () => (\n+   <Table\n+     summaryId=\"example-static-table\"\n+     summary=\"This table shows an implementation of static width table columns.\"\n+     numberOfColumns={4}\n+     cellPaddingStyle=\"standard\"\n+     headerData={{\n+       cells: [\n+         { key: 'cell-0', id: `unique-cell-0`, children: '60px' },\n+         { key: 'cell-1', id: `unique-cell-1`, children: '45px' },\n+         { key: 'cell-2', id: `unique-cell-2`, children: '5rem' },\n+         { key: 'cell-3', id: `unique-cell-3`, children: '120px' },\n+       ],\n+     }}\n+     bodyData={[{\n+       rows: createRows(mockData),\n+     }]}\n+   />\n+ );\n")),Object(i.mdx)("p",null,"Then in order to adjust our columns, we set the ",Object(i.mdx)("inlineCode",{parentName:"p"},"columnWidths")," prop with your appropriate index based width values."),Object(i.mdx)("pre",null,Object(i.mdx)("code",b({parentName:"pre"},{className:"language-diff"}),"const StaticWidthTable = () => (\n  <Table\n    summaryId=\"example-static-table\"\n    summary=\"This table shows an implementation of static width table columns.\"\n    numberOfColumns={4}\n    cellPaddingStyle=\"standard\"\n+   columnWidths={[\n+     { static: { value: 80, unit: 'px' } },\n+     { static: { value: 55, unit: 'px' } },\n+     { static: { value: 5, unit: 'rem' } },\n+     { static: { value: 120, unit: 'px' } },\n+   ]}\n    headerData={{\n      cells: [\n        { key: 'cell-0', id: `unique-cell-0`, children: '60px' },\n        { key: 'cell-1', id: `unique-cell-1`, children: '45px' },\n        { key: 'cell-2', id: `unique-cell-2`, children: '5rem' },\n        { key: 'cell-3', id: `unique-cell-3`, children: '120px' },\n      ],\n    }}\n    bodyData={[{\n      rows: createRows(mockData),\n    }]}\n  />\n);\n")),Object(i.mdx)("p",null,"Using these steps we get the following example:"),Object(i.mdx)(y,{mdxType:"StaticWidthTable"}))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=410-b9a30fabd6c667193d20.js.map