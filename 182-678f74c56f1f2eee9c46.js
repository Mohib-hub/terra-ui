(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{1011:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=c(t(0)),r=c(t(2)),l=c(t(4)),a=c(t(1012));function c(e){return e&&e.__esModule?e:{default:e}}var i=l.default.bind(a.default),d={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},s=function(e){var n=e.src,t=e.name,r=e.url,l=e.version,a=o.default.createElement("a",{className:i("badge"),href:r||"https://www.npmjs.org/package/".concat(t,"/v/").concat(l)},o.default.createElement("span",{className:i("badge-name")},r?"package":"npm"),o.default.createElement("span",{className:i("badge-version")},"v".concat(l))),c=n?o.default.createElement("a",{className:i("badge"),href:n},o.default.createElement("span",{className:i("badge-name")},"github"),o.default.createElement("span",{className:i("badge-version")},"source")):void 0;return o.default.createElement("div",{className:i("badge-container")},a,c)};s.propTypes=d;var u=s;n.default=u},1012:function(e,n,t){e.exports={badge:"Badges-module__badge___3m7y2","badge-container":"Badges-module__badge-container___1YxI5","badge-name":"Badges-module__badge-name___BQ3u4","badge-version":"Badges-module__badge-version___3OgwS"}},1013:function(e,n,t){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var n=s();if(n&&n.has(e))return n.get(e);var t={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){var a=r?Object.getOwnPropertyDescriptor(e,l):null;a&&(a.get||a.set)?Object.defineProperty(t,l,a):t[l]=e[l]}t.default=e,n&&n.set(e,t);return t}(t(0)),l=d(t(2)),a=d(t(4)),c=t(135),i=d(t(1014));function d(e){return e&&e.__esModule?e:{default:e}}function s(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}var u=a.default.bind(i.default),p={rows:l.default.arrayOf(l.default.shape({name:l.default.string,type:l.default.func,required:l.default.bool,defaultValue:l.default.string,description:l.default.func}))},m=function(e){var n=e.rows,t=(0,r.useContext)(c.ThemeContext);return r.default.createElement("table",{className:u("table",t.className)},r.default.createElement("thead",null,r.default.createElement("tr",{className:u("tr")},r.default.createElement("th",{className:u("th")},"Prop Name"),r.default.createElement("th",{className:u("th")},"Type"),r.default.createElement("th",{className:u("th")},"Is Required"),r.default.createElement("th",{className:u("th")},"Default Value"),r.default.createElement("th",{className:u("th")},"Description"))),r.default.createElement("tbody",null,n.map((function(e){return r.default.createElement("tr",{className:u("tr","props-tr"),key:e.name},r.default.createElement("td",{className:u(["td","strong","props-td"])},e.name),r.default.createElement("td",{className:u(["td","props-td"])},e.type()),r.default.createElement("td",{className:u(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),r.default.createElement("td",{className:u(["td","props-td"])},e.defaultValue),r.default.createElement("td",{className:u(["td","props-td"])},e.description()))}))))};m.propTypes=p;var b=m;n.default=b},1014:function(e,n,t){e.exports={"orion-fusion-theme":"PropsTable-module__orion-fusion-theme___1kDLT",a:"PropsTable-module__a___6WaJD",blockquote:"PropsTable-module__blockquote___2loIo",code:"PropsTable-module__code___1vedU",dd:"PropsTable-module__dd___3pYcW",dl:"PropsTable-module__dl___397p5",dt:"PropsTable-module__dt___1-GVs",h1:"PropsTable-module__h1___1OAAp",h2:"PropsTable-module__h2___2iZ6i",h3:"PropsTable-module__h3___3N0fw",h4:"PropsTable-module__h4___214vu",h5:"PropsTable-module__h5___1ajw8",h6:"PropsTable-module__h6___19W7i","icon-link":"PropsTable-module__icon-link___HUOC7",anchor:"PropsTable-module__anchor___1UTVD",hr:"PropsTable-module__hr___15B3j",img:"PropsTable-module__img___1rEq-",input:"PropsTable-module__input___1WHRX",kbd:"PropsTable-module__kbd___2DvPC",li:"PropsTable-module__li___1T8DQ",p:"PropsTable-module__p___3ssgC",ol:"PropsTable-module__ol___2tCva",ul:"PropsTable-module__ul___DlvOz",td:"PropsTable-module__td___3svU1",pre:"PropsTable-module__pre___3qXsS",strong:"PropsTable-module__strong___2DSlR",table:"PropsTable-module__table___1sV8g",th:"PropsTable-module__th___RQkAz",tr:"PropsTable-module__tr___1dras",icon:"PropsTable-module__icon___1fv-c",required:"PropsTable-module__required___1b3oJ","props-tr":"PropsTable-module__props-tr___1c88t","props-td":"PropsTable-module__props-td___dEhbY"}},1218:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var o=t(0),r=t.n(o),l=t(1011),a=t.n(l),c=function(e){var n=e.url;return r.a.createElement(a.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-table",name:"terra-table",version:"4.15.0",url:n})}},2685:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=l(t(0)),r=l(t(1025));function l(e){return e&&e.__esModule?e:{default:e}}var a=function(){return o.default.createElement(o.default.Fragment,null,o.default.createElement(r.default,{summaryId:"default-row-table",summary:"This table displays default rows.",numberOfColumns:1,cellPaddingStyle:"standard",bodyData:[{rows:[{key:'default_row"',cells:[{key:"cell-0",children:"Default Row"}]},{key:"striped_row",isStriped:!0,cells:[{key:"cell-0",children:"Striped Row"}]}]}]}),o.default.createElement("br",null),o.default.createElement(r.default,{summaryId:"chevron-row-table",summary:"This table displays chevron rows.",numberOfColumns:1,cellPaddingStyle:"standard",rowStyle:"disclose",hasChevrons:!0,bodyData:[{rows:[{key:"chevron_row",discloseAction:{discloseLabel:"test title",discloseCellIndex:0},cells:[{key:"cell-0",children:"Chevron Row"}]}]}]}),o.default.createElement("br",null),o.default.createElement(r.default,{summaryId:"toggle-row-table",summary:"This table displays toggle rows.",numberOfColumns:1,cellPaddingStyle:"standard",rowStyle:"toggle",bodyData:[{rows:[{key:"toggle_row-0",cells:[{key:"cell-0",children:"Toggle Row"}],toggleAction:{toggleLabel:"toggle text"}},{key:"toggled_row-1",cells:[{key:"cell-0",children:"Toggled Row"}],toggleAction:{toggleLabel:"toggle text",isToggled:!0}}]}]}),o.default.createElement("br",null),o.default.createElement(r.default,{summaryId:"check-row-table",summary:"This table displays check rows.",numberOfColumns:1,cellPaddingStyle:"standard",rowStyle:"toggle",checkStyle:"icon",bodyData:[{rows:[{key:"check_row-0",cells:[{key:"cell-0",children:"Check Row"}],toggleAction:{toggleLabel:"toggle text"}},{key:"checked_row-1",cells:[{key:"cell-0",children:"Toggled Check Row"}],toggleAction:{toggleLabel:"toggle text",isToggled:!0}}]}]}),o.default.createElement("br",null),o.default.createElement(r.default,{summaryId:"checkmark-row-table",summary:"This table displays checkmark rows.",numberOfColumns:1,cellPaddingStyle:"standard",checkStyle:"toggle",bodyData:[{rows:[{key:"selection_checkmark",cells:[{key:"cell-0",children:"Toggle Style Checkmark"}],toggleAction:{toggleLabel:"toggle text"}},{key:"selection_chevron",cells:[{key:"cell-0",children:"Toggled Style Checkmark"}],toggleAction:{toggleLabel:"toggle text",isToggled:!0}}]}]}),o.default.createElement("br",null),o.default.createElement(r.default,{summaryId:"vertical-row-table",summary:"This table displays vertical divider rows.",numberOfColumns:1,cellPaddingStyle:"standard",dividerStyle:"vertical",bodyData:[{rows:[{key:"divider_vertical-0",cells:[{key:"cell-0",children:"Vertical Divider Row"},{key:"cell-1",children:"Vertical Divider Row"},{key:"cell-2",children:"Vertical Divider Row"}]},{key:"divider_vertical-1",cells:[{key:"cell-0",children:"Vertical Divider Row"},{key:"cell-1",children:"Vertical Divider Row"},{key:"cell-2",children:"Vertical Divider Row"}]}]}]}),o.default.createElement("br",null),o.default.createElement(r.default,{summaryId:"horizontal-row-table",summary:"This table displays horizontal divider rows.",numberOfColumns:1,cellPaddingStyle:"standard",dividerStyle:"horizontal",bodyData:[{rows:[{key:"divider_horizontal-0",cells:[{key:"cell-0",children:"Horizontal Divider Row"},{key:"cell-1",children:"Horizontal Divider Row"},{key:"cell-2",children:"Horizontal Divider Row"}]},{key:"divider_horizontal-1",cells:[{key:"cell-0",children:"Horizontal Divider Row"},{key:"cell-1",children:"Horizontal Divider Row"},{key:"cell-2",children:"Horizontal Divider Row"}]}]}]}),o.default.createElement("br",null),o.default.createElement(r.default,{summaryId:"both-row-table",summary:"This table displays both divider rows.",numberOfColumns:1,cellPaddingStyle:"standard",dividerStyle:"both",bodyData:[{rows:[{key:"divider_both-0",cells:[{key:"cell-0",children:"Both Divider Row"},{key:"cell-1",children:"Both Divider Row"},{key:"cell-2",children:"Both Divider Row"}]},{key:"divider_both-1",cells:[{key:"cell-0",children:"Both Divider Row"},{key:"cell-1",children:"Both Divider Row"},{key:"cell-2",children:"Both Divider Row"}]}]}]}),o.default.createElement("br",null),o.default.createElement(r.default,{summaryId:"disabled-row-table",summary:"This table displays a disabled row.",numberOfColumns:1,cellPaddingStyle:"standard",checkStyle:"toggle",rowStyle:"toggle",bodyData:[{rows:[{key:"disabled_row-0",cells:[{key:"cell-0",children:"Disabled Row"}],toggleAction:{toggleLabel:"toggle text"},isDisabled:!0},{key:"enabled_row-1",cells:[{key:"cell-0",children:"Toggle Row"}],toggleAction:{toggleLabel:"toggle text"}}]}]}))};n.default=a},3136:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return R}));var o=t(0),r=t.n(o),l=t(365),a=t(1218),c=t(2685),i=t.n(c);function d(){return(d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u={};function p(e){var n=e.components,t=s(e,["components"]);return Object(l.mdx)("wrapper",d({},u,t,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",d({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Table from 'terra-table';\n\nconst RowExample = () => (\n  <React.Fragment>\n    <Table\n      summaryId=\"default-row-table\"\n      summary=\"This table displays default rows.\"\n      numberOfColumns={1}\n      cellPaddingStyle=\"standard\"\n      bodyData={[\n        {\n          rows: [\n            {\n              key: 'default_row\"',\n              cells: [\n                {\n                  key: 'cell-0',\n                  children: 'Default Row',\n                },\n              ],\n            },\n            {\n              key: 'striped_row',\n              isStriped: true,\n              cells: [\n                {\n                  key: 'cell-0',\n                  children: 'Striped Row',\n                },\n              ],\n            },\n          ],\n        },\n      ]}\n    />\n    <br />\n    <Table\n      summaryId=\"chevron-row-table\"\n      summary=\"This table displays chevron rows.\"\n      numberOfColumns={1}\n      cellPaddingStyle=\"standard\"\n      rowStyle=\"disclose\"\n      hasChevrons\n      bodyData={[\n        {\n          rows: [\n            {\n              key: 'chevron_row',\n              discloseAction: {\n                discloseLabel: 'test title',\n                discloseCellIndex: 0,\n              },\n              cells: [\n                {\n                  key: 'cell-0',\n                  children: 'Chevron Row',\n                },\n              ],\n            },\n          ],\n        },\n      ]}\n    />\n    <br />\n    <Table\n      summaryId=\"toggle-row-table\"\n      summary=\"This table displays toggle rows.\"\n      numberOfColumns={1}\n      cellPaddingStyle=\"standard\"\n      rowStyle=\"toggle\"\n      bodyData={[\n        {\n          rows: [{\n            key: 'toggle_row-0',\n            cells: [{\n              key: 'cell-0',\n              children: 'Toggle Row',\n            }],\n            toggleAction: {\n              toggleLabel: 'toggle text',\n            },\n          },\n          {\n            key: 'toggled_row-1',\n            cells: [\n              {\n                key: 'cell-0',\n                children: 'Toggled Row',\n              },\n            ],\n            toggleAction: {\n              toggleLabel: 'toggle text',\n              isToggled: true,\n            },\n          }],\n        },\n      ]}\n    />\n    <br />\n    <Table\n      summaryId=\"check-row-table\"\n      summary=\"This table displays check rows.\"\n      numberOfColumns={1}\n      cellPaddingStyle=\"standard\"\n      rowStyle=\"toggle\"\n      checkStyle=\"icon\"\n      bodyData={[\n        {\n          rows: [{\n            key: 'check_row-0',\n            cells: [{\n              key: 'cell-0',\n              children: 'Check Row',\n            }],\n            toggleAction: {\n              toggleLabel: 'toggle text',\n            },\n          },\n          {\n            key: 'checked_row-1',\n            cells: [\n              {\n                key: 'cell-0',\n                children: 'Toggled Check Row',\n              },\n            ],\n            toggleAction: {\n              toggleLabel: 'toggle text',\n              isToggled: true,\n            },\n          }],\n        },\n      ]}\n    />\n    <br />\n    <Table\n      summaryId=\"checkmark-row-table\"\n      summary=\"This table displays checkmark rows.\"\n      numberOfColumns={1}\n      cellPaddingStyle=\"standard\"\n      checkStyle=\"toggle\"\n      bodyData={[\n        {\n          rows: [\n            {\n              key: 'selection_checkmark',\n              cells: [\n                {\n                  key: 'cell-0',\n                  children: 'Toggle Style Checkmark',\n                },\n              ],\n              toggleAction: {\n                toggleLabel: 'toggle text',\n              },\n            },\n            {\n              key: 'selection_chevron',\n              cells: [\n                {\n                  key: 'cell-0',\n                  children: 'Toggled Style Checkmark',\n                },\n              ],\n              toggleAction: {\n                toggleLabel: 'toggle text',\n                isToggled: true,\n              },\n            },\n          ],\n        },\n      ]}\n    />\n    <br />\n    <Table\n      summaryId=\"vertical-row-table\"\n      summary=\"This table displays vertical divider rows.\"\n      numberOfColumns={1}\n      cellPaddingStyle=\"standard\"\n      dividerStyle=\"vertical\"\n      bodyData={[\n        {\n          rows: [\n            {\n              key: 'divider_vertical-0',\n              cells: [\n                {\n                  key: 'cell-0',\n                  children: 'Vertical Divider Row',\n                },\n                {\n                  key: 'cell-1',\n                  children: 'Vertical Divider Row',\n                },\n                {\n                  key: 'cell-2',\n                  children: 'Vertical Divider Row',\n                },\n              ],\n            },\n            {\n              key: 'divider_vertical-1',\n              cells: [\n                {\n                  key: 'cell-0',\n                  children: 'Vertical Divider Row',\n                },\n                {\n                  key: 'cell-1',\n                  children: 'Vertical Divider Row',\n                },\n                {\n                  key: 'cell-2',\n                  children: 'Vertical Divider Row',\n                },\n              ],\n            },\n          ],\n        },\n      ]}\n    />\n    <br />\n    <Table\n      summaryId=\"horizontal-row-table\"\n      summary=\"This table displays horizontal divider rows.\"\n      numberOfColumns={1}\n      cellPaddingStyle=\"standard\"\n      dividerStyle=\"horizontal\"\n      bodyData={[\n        {\n          rows: [\n            {\n              key: 'divider_horizontal-0',\n              cells: [\n                {\n                  key: 'cell-0',\n                  children: 'Horizontal Divider Row',\n                },\n                {\n                  key: 'cell-1',\n                  children: 'Horizontal Divider Row',\n                },\n                {\n                  key: 'cell-2',\n                  children: 'Horizontal Divider Row',\n                },\n              ],\n            },\n            {\n              key: 'divider_horizontal-1',\n              cells: [\n                {\n                  key: 'cell-0',\n                  children: 'Horizontal Divider Row',\n                },\n                {\n                  key: 'cell-1',\n                  children: 'Horizontal Divider Row',\n                },\n                {\n                  key: 'cell-2',\n                  children: 'Horizontal Divider Row',\n                },\n              ],\n            },\n          ],\n        },\n      ]}\n    />\n    <br />\n    <Table\n      summaryId=\"both-row-table\"\n      summary=\"This table displays both divider rows.\"\n      numberOfColumns={1}\n      cellPaddingStyle=\"standard\"\n      dividerStyle=\"both\"\n      bodyData={[\n        {\n          rows: [\n            {\n              key: 'divider_both-0',\n              cells: [\n                {\n                  key: 'cell-0',\n                  children: 'Both Divider Row',\n                },\n                {\n                  key: 'cell-1',\n                  children: 'Both Divider Row',\n                },\n                {\n                  key: 'cell-2',\n                  children: 'Both Divider Row',\n                },\n              ],\n            },\n            {\n              key: 'divider_both-1',\n              cells: [\n                {\n                  key: 'cell-0',\n                  children: 'Both Divider Row',\n                },\n                {\n                  key: 'cell-1',\n                  children: 'Both Divider Row',\n                },\n                {\n                  key: 'cell-2',\n                  children: 'Both Divider Row',\n                },\n              ],\n            },\n          ],\n        },\n      ]}\n    />\n    <br />\n    <Table\n      summaryId=\"disabled-row-table\"\n      summary=\"This table displays a disabled row.\"\n      numberOfColumns={1}\n      cellPaddingStyle=\"standard\"\n      checkStyle=\"toggle\"\n      rowStyle=\"toggle\"\n      bodyData={[\n        {\n          rows: [{\n            key: 'disabled_row-0',\n            cells: [{\n              key: 'cell-0',\n              children: 'Disabled Row',\n            }],\n            toggleAction: {\n              toggleLabel: 'toggle text',\n            },\n            isDisabled: true,\n          },\n          {\n            key: 'enabled_row-1',\n            cells: [\n              {\n                key: 'cell-0',\n                children: 'Toggle Row',\n              },\n            ],\n            toggleAction: {\n              toggleLabel: 'toggle text',\n            },\n          }],\n        },\n      ]}\n    />\n  </React.Fragment>\n);\n\nexport default RowExample;\n\n")))}p.isMDXComponent=!0;var m=t(1010),b=t.n(m),y=function(e){var n=e.title,t=e.description,o=e.isExpanded;return r.a.createElement(b.a,{title:n||"Row Example",description:t,example:r.a.createElement(i.a,null),exampleSrc:r.a.createElement(p,null),isExpanded:o})},f=t(1013),h=t.n(f);function g(){return(g=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function v(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var w=function(){return Object(l.mdx)(h.a,{rows:[{name:"attrs",type:function(){var e={};function n(n){var t=n.components,o=v(n,["components"]);return Object(l.mdx)("wrapper",g({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"object"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=v(n,["components"]);return Object(l.mdx)("wrapper",g({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Additional attributes to be passed to the row."))}return n.isMDXComponent=!0,n({})}},{name:"cells",type:function(){var e={};function n(n){var t=n.components,o=v(n,["components"]);return Object(l.mdx)("wrapper",g({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"arrayOf"),Object(l.mdx)("pre",null,Object(l.mdx)("code",g({parentName:"pre"},{className:"language-json"}),'{\n "name": "custom",\n "raw": "cellShape"\n}\n')))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=v(n,["components"]);return Object(l.mdx)("wrapper",g({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"The children to be passed as row content."))}return n.isMDXComponent=!0,n({})}},{name:"checkAlignment",type:function(){var e={};function n(n){var t=n.components,o=v(n,["components"]);return Object(l.mdx)("wrapper",g({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"string"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=v(n,["components"]);return Object(l.mdx)("wrapper",g({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"The check mark is by default vertically centered. The alignment prop sets the top spacing of the check, standard units are valid."))}return n.isMDXComponent=!0,n({})}},{name:"discloseAction",type:function(){var e={};function n(n){var t=n.components,o=v(n,["components"]);return Object(l.mdx)("wrapper",g({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"custom"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=v(n,["components"]);return Object(l.mdx)("wrapper",g({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Data relating to the ",Object(l.mdx)("inlineCode",{parentName:"p"},"'disclose'")," for either rowStyle actions."))}return n.isMDXComponent=!0,n({})}},{name:"index",type:function(){var e={};function n(n){var t=n.components,o=v(n,["components"]);return Object(l.mdx)("wrapper",g({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"number"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=v(n,["components"]);return Object(l.mdx)("wrapper",g({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"The aria-rowindex for the row is derived by default, but in the case of paging and virtualization a different index may be needed as an override."))}return n.isMDXComponent=!0,n({})}},{name:"isDisabled",type:function(){var e={};function n(n){var t=n.components,o=v(n,["components"]);return Object(l.mdx)("wrapper",g({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=v(n,["components"]);return Object(l.mdx)("wrapper",g({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Whether or not the rows interaction is disabled."))}return n.isMDXComponent=!0,n({})}},{name:"isStriped",type:function(){var e={};function n(n){var t=n.components,o=v(n,["components"]);return Object(l.mdx)("wrapper",g({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=v(n,["components"]);return Object(l.mdx)("wrapper",g({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Whether or not row should display as a striped row."))}return n.isMDXComponent=!0,n({})}},{name:"key",type:function(){var e={};function n(n){var t=n.components,o=v(n,["components"]);return Object(l.mdx)("wrapper",g({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"string"))}return n.isMDXComponent=!0,n({})},required:!0,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=v(n,["components"]);return Object(l.mdx)("wrapper",g({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"The react key to apply to the row."))}return n.isMDXComponent=!0,n({})}},{name:"refCallback",type:function(){var e={};function n(n){var t=n.components,o=v(n,["components"]);return Object(l.mdx)("wrapper",g({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"func"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=v(n,["components"]);return Object(l.mdx)("wrapper",g({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Function callback returning the html node for the row."))}return n.isMDXComponent=!0,n({})}},{name:"toggleAction",type:function(){var e={};function n(n){var t=n.components,o=v(n,["components"]);return Object(l.mdx)("wrapper",g({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"custom"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=v(n,["components"]);return Object(l.mdx)("wrapper",g({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Data relating to the ",Object(l.mdx)("inlineCode",{parentName:"p"},"'toggle'")," for either rowStyle or checkStyle row actions."))}return n.isMDXComponent=!0,n({})}}]})};function x(){return(x=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function _(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var O=function(){return Object(l.mdx)(h.a,{rows:[{name:"discloseCellIndex",type:function(){var e={};function n(n){var t=n.components,o=_(n,["components"]);return Object(l.mdx)("wrapper",x({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"number"))}return n.isMDXComponent=!0,n({})},required:!0,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=_(n,["components"]);return Object(l.mdx)("wrapper",x({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"The index of the cell that provides the accessible link entry point for disclosure style rows."))}return n.isMDXComponent=!0,n({})}},{name:"discloseLabel",type:function(){var e={};function n(n){var t=n.components,o=_(n,["components"]);return Object(l.mdx)("wrapper",x({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"string"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=_(n,["components"]);return Object(l.mdx)("wrapper",x({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"The label associated to the row action. Should be set if ",Object(l.mdx)("inlineCode",{parentName:"p"},"'rowStyle'")," is set to ",Object(l.mdx)("inlineCode",{parentName:"p"},"'disclose'")," or ",Object(l.mdx)("inlineCode",{parentName:"p"},"'toggle'"),"."))}return n.isMDXComponent=!0,n({})}},{name:"isDisclosed",type:function(){var e={};function n(n){var t=n.components,o=_(n,["components"]);return Object(l.mdx)("wrapper",x({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=_(n,["components"]);return Object(l.mdx)("wrapper",x({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Whether or not the row is the currently selected disclosure.\nThis aria state relates to the primary link cell."))}return n.isMDXComponent=!0,n({})}},{name:"metaData",type:function(){var e={};function n(n){var t=n.components,o=_(n,["components"]);return Object(l.mdx)("wrapper",x({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"object"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=_(n,["components"]);return Object(l.mdx)("wrapper",x({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"The associated metaData to be return within row disclose callbacks."))}return n.isMDXComponent=!0,n({})}},{name:"onDisclose",type:function(){var e={};function n(n){var t=n.components,o=_(n,["components"]);return Object(l.mdx)("wrapper",x({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"func"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=_(n,["components"]);return Object(l.mdx)("wrapper",x({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Function callback for when the appropriate click or key action is performed.\nCallback contains the javascript event and prop metadata, e.g. onRowAction(event, metaData)"))}return n.isMDXComponent=!0,n({})}}]})};function D(){return(D=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function j(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var k=function(){return Object(l.mdx)(h.a,{rows:[{name:"toggleLabel",type:function(){var e={};function n(n){var t=n.components,o=j(n,["components"]);return Object(l.mdx)("wrapper",D({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"string"))}return n.isMDXComponent=!0,n({})},required:!0,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=j(n,["components"]);return Object(l.mdx)("wrapper",D({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"The label associated to the toggle action for the row."))}return n.isMDXComponent=!0,n({})}},{name:"isToggled",type:function(){var e={};function n(n){var t=n.components,o=j(n,["components"]);return Object(l.mdx)("wrapper",D({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=j(n,["components"]);return Object(l.mdx)("wrapper",D({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Whether or not the row is in a togged state, this covers both ",Object(l.mdx)("inlineCode",{parentName:"p"},"'checkStyle'")," and ",Object(l.mdx)("inlineCode",{parentName:"p"},"'rowStyle'")," toggle states."))}return n.isMDXComponent=!0,n({})}},{name:"metaData",type:function(){var e={};function n(n){var t=n.components,o=j(n,["components"]);return Object(l.mdx)("wrapper",D({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"object"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=j(n,["components"]);return Object(l.mdx)("wrapper",D({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"The associated metaData to be return within row toggle callbacks."))}return n.isMDXComponent=!0,n({})}},{name:"onToggle",type:function(){var e={};function n(n){var t=n.components,o=j(n,["components"]);return Object(l.mdx)("wrapper",D({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"func"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=j(n,["components"]);return Object(l.mdx)("wrapper",D({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Function callback for when the appropriate click or key action is performed.\nCallback contains the javascript event and prop metadata, e.g. onCheckAction(event, metaData)"))}return n.isMDXComponent=!0,n({})}}]})};function T(){return(T=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function M(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var C=function(){return Object(l.mdx)(h.a,{rows:[{name:"key",type:function(){var e={};function n(n){var t=n.components,o=M(n,["components"]);return Object(l.mdx)("wrapper",T({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"string"))}return n.isMDXComponent=!0,n({})},required:!0,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=M(n,["components"]);return Object(l.mdx)("wrapper",T({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"The react key to apply to the cell."))}return n.isMDXComponent=!0,n({})}},{name:"children",type:function(){var e={};function n(n){var t=n.components,o=M(n,["components"]);return Object(l.mdx)("wrapper",T({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"node"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=M(n,["components"]);return Object(l.mdx)("wrapper",T({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Child content to be displayed for the row cell."))}return n.isMDXComponent=!0,n({})}},{name:"refCallback",type:function(){var e={};function n(n){var t=n.components,o=M(n,["components"]);return Object(l.mdx)("wrapper",T({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"func"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=M(n,["components"]);return Object(l.mdx)("wrapper",T({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Function callback returning the html node for the cell."))}return n.isMDXComponent=!0,n({})}},{name:"removeInner",type:function(){var e={};function n(n){var t=n.components,o=M(n,["components"]);return Object(l.mdx)("wrapper",T({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=M(n,["components"]);return Object(l.mdx)("wrapper",T({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Whether or not the cell's inner containing element responsible for handling table's default padding is removed.\nThis is useful to optimize the DOM for either a table without padding or to optimize a cell whose custom content is providing its own padding."))}return n.isMDXComponent=!0,n({})}},{name:"attrs",type:function(){var e={};function n(n){var t=n.components,o=M(n,["components"]);return Object(l.mdx)("wrapper",T({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"object"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=M(n,["components"]);return Object(l.mdx)("wrapper",T({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Additional attributes to be passed to the cell."))}return n.isMDXComponent=!0,n({})}}]})};function X(){return(X=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function P(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var S={};function R(e){var n=e.components,t=P(e,["components"]);return Object(l.mdx)("wrapper",X({},S,t,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)(a.a,{mdxType:"Badge"}),Object(l.mdx)("h1",{id:"terra-table---row"},"Terra Table - Row"),Object(l.mdx)("p",null,"The Row is a sub component that groups table cells passed through children. Each row handles it's own selection state through props. The onSelect function that can be passed to the row will return the metaData associated to the row. The metaData allows for greater control of state with the ability to associate any indicator or function with the row."),Object(l.mdx)("h1",{id:"examples"},"Examples"),Object(l.mdx)(y,{mdxType:"RowExample"}),Object(l.mdx)("h2",{id:"table-row-props"},"Table Row Props"),Object(l.mdx)(w,{mdxType:"RowProps"}),Object(l.mdx)("h2",{id:"table-row-toggle-action-props"},"Table Row Toggle Action Props"),Object(l.mdx)(k,{mdxType:"ToggleActionProps"}),Object(l.mdx)("h2",{id:"table-row-disclose-action-props"},"Table Row Disclose Action Props"),Object(l.mdx)(O,{mdxType:"DiscloseActionProps"}),Object(l.mdx)("h2",{id:"table-cell-props"},"Table Cell Props"),Object(l.mdx)(C,{mdxType:"CellProps"}))}R.isMDXComponent=!0}}]);
//# sourceMappingURL=182-678f74c56f1f2eee9c46.js.map