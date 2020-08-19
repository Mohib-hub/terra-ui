(window.webpackJsonp=window.webpackJsonp||[]).push([[371],{1011:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(r(0)),n=d(r(2)),i=d(r(4)),m=d(r(1012));function d(e){return e&&e.__esModule?e:{default:e}}var l=i.default.bind(m.default),o={name:n.default.string.isRequired,src:n.default.string,url:n.default.string,version:n.default.string.isRequired},u=function(e){var t=e.src,r=e.name,n=e.url,i=e.version,m=a.default.createElement("a",{className:l("badge"),href:n||"https://www.npmjs.org/package/".concat(r,"/v/").concat(i)},a.default.createElement("span",{className:l("badge-name")},n?"package":"npm"),a.default.createElement("span",{className:l("badge-version")},"v".concat(i))),d=t?a.default.createElement("a",{className:l("badge"),href:t},a.default.createElement("span",{className:l("badge-name")},"github"),a.default.createElement("span",{className:l("badge-version")},"source")):void 0;return a.default.createElement("div",{className:l("badge-container")},m,d)};u.propTypes=o;var p=u;t.default=p},1012:function(e,t,r){e.exports={badge:"Badges-module__badge___3m7y2","badge-container":"Badges-module__badge-container___1YxI5","badge-name":"Badges-module__badge-name___BQ3u4","badge-version":"Badges-module__badge-version___3OgwS"}},1375:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var a=r(0),n=r.n(a),i=r(1011),m=r.n(i),d=function(e){var t=e.url;return n.a.createElement(m.a,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-time-input",name:"terra-time-input",version:"4.31.0",url:t})}},3019:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return l}));r(0);var a=r(365),n=r(1375);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d={};function l(e){var t=e.components,r=m(e,["components"]);return Object(a.mdx)("wrapper",i({},d,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)(n.a,{mdxType:"Badge"}),Object(a.mdx)("h1",{id:"terra-time-input-upgrade-guide"},"Terra Time Input Upgrade Guide"),Object(a.mdx)("h2",{id:"changes-from-version-3-to-version-4"},"Changes from version 3 to version 4"),Object(a.mdx)("h3",{id:"new-props"},"New props"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Added ",Object(a.mdx)("inlineCode",{parentName:"li"},"onFocus")),Object(a.mdx)("li",{parentName:"ul"},"Added ",Object(a.mdx)("inlineCode",{parentName:"li"},"refCallback"))),Object(a.mdx)("h3",{id:"changes-to-onblur-and-onfocus"},"Changes to onBlur and onFocus"),Object(a.mdx)("p",null,"The ",Object(a.mdx)("inlineCode",{parentName:"p"},"onFocus")," prop previously could be passed down as a custom prop. This prop now becomes a first-class prop. The ",Object(a.mdx)("inlineCode",{parentName:"p"},"onFocus")," prop used to be triggered when focus is moved from the hour input to the minute input or any other elements in the same time-input component. The ",Object(a.mdx)("inlineCode",{parentName:"p"},"onFocus")," prop will still be triggered if the time-input component did not have focus and now just gained focus. However, if the focus is then moved from one time-input element to another time-input element, the ",Object(a.mdx)("inlineCode",{parentName:"p"},"onFocus")," callback now would not be triggered because the focus is still within the time-input container. The ",Object(a.mdx)("inlineCode",{parentName:"p"},"onBlur")," callback now behaves similar to the ",Object(a.mdx)("inlineCode",{parentName:"p"},"onFocus")," callback where ",Object(a.mdx)("inlineCode",{parentName:"p"},"onBlur")," would not be triggered when focus is transfered from one time-input element to another time-input element of the same time-input component. The ",Object(a.mdx)("inlineCode",{parentName:"p"},"onBlur")," callback would be triggered only when focus is lost from the entire time-input component."),Object(a.mdx)("h2",{id:"changes-from-version-2-to-version-3"},"Changes from version 2 to version 3"),Object(a.mdx)("h3",{id:"changes-to-css-custom-properties"},"Changes to CSS Custom Properties"),Object(a.mdx)("h4",{id:"renamed"},"Renamed"),Object(a.mdx)("table",null,Object(a.mdx)("thead",{parentName:"table"},Object(a.mdx)("tr",{parentName:"thead"},Object(a.mdx)("th",i({parentName:"tr"},{align:null}),"Previous"),Object(a.mdx)("th",i({parentName:"tr"},{align:null}),"New"))),Object(a.mdx)("tbody",{parentName:"table"},Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-time-input-focus-keyboard-border-color"),Object(a.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-time-input-focus-border-color")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-time-input-focus-keyboard-border-style"),Object(a.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-time-input-focus-border-style")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-time-input-focus-keyboard-border-width"),Object(a.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-time-input-focus-border-width")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-time-input-focus-keyboard-opacity"),Object(a.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-time-input-focus-opacity")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-time-input-background"),Object(a.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-time-input-background-color")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-time-input-animation-background"),Object(a.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-time-input-background-image")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-time-input-background-start"),Object(a.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-time-input-background-size")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-time-input-focus-keyboard-animation-size"),Object(a.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-time-input-focus-background-size")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-time-input-focus-keyboard-box-shadow-ltr"),Object(a.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-time-input-focus-ltr-box-shadow")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-time-input-focus-keyboard-box-shadow-rtl"),Object(a.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-time-input-focus-rtl-box-shadow")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-time-input-width-input"),Object(a.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-time-input-mobile-min-width")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-time-input-input-padding-bottom"),Object(a.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-time-input-mobile-padding-bottom")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-time-input-input-padding-left"),Object(a.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-time-input-mobile-padding-left")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-time-input-input-padding-right"),Object(a.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-time-input-mobile-padding-right")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-time-input-input-padding-top"),Object(a.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-time-input-mobile-padding-top")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-time-input-desktop-focused-input-background"),Object(a.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-time-input-desktop-focused-input-background-color")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-time-input-time-spacer-input-margin-top"),Object(a.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-time-input-time-spacer-margin-top")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-time-input-mobile-label-size"),Object(a.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-time-input-mobile-label-font-size")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-time-input-border-radius"),Object(a.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-time-input-desktop-input-border-radius")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-time-input-meridiem-display-left-margin"),Object(a.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-time-input-meridiem-display-margin-left")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-time-input-line-height"),Object(a.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-time-input-mobile-line-height")))),Object(a.mdx)("h4",{id:"added"},"Added"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"--terra-time-input-line-height"),Object(a.mdx)("li",{parentName:"ul"},"--terra-time-input-hover-background-color"),Object(a.mdx)("li",{parentName:"ul"},"--terra-time-input-hover-border"),Object(a.mdx)("li",{parentName:"ul"},"--terra-time-input-hover-color"),Object(a.mdx)("li",{parentName:"ul"},"--terra-time-input-focus-background-color"),Object(a.mdx)("li",{parentName:"ul"},"--terra-time-input-focus-color"),Object(a.mdx)("li",{parentName:"ul"},"--terra-time-input-time-input-group-hour-margin-right"),Object(a.mdx)("li",{parentName:"ul"},"--terra-time-input-time-input-group-minute-margin-left"),Object(a.mdx)("li",{parentName:"ul"},"--terra-time-input-caret-color"),Object(a.mdx)("li",{parentName:"ul"},"--terra-time-input-time-mobile-spacer-margin-top"),Object(a.mdx)("li",{parentName:"ul"},"--terra-time-input-meridiem-button-group-margin-left"),Object(a.mdx)("li",{parentName:"ul"},"--terra-time-input-desktop-background-color"),Object(a.mdx)("li",{parentName:"ul"},"--terra-time-input-color"),Object(a.mdx)("li",{parentName:"ul"},"--terra-time-input-meridiem-button-selected-hover-background-color"),Object(a.mdx)("li",{parentName:"ul"},"--terra-time-input-meridiem-button-selected-hover-border-color"),Object(a.mdx)("li",{parentName:"ul"},"--terra-time-input-meridiem-button-selected-hover-color"),Object(a.mdx)("li",{parentName:"ul"},"--terra-time-input-meridiem-button-font-size")),Object(a.mdx)("h4",{id:"removed"},"Removed"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"--terra-time-input-time-input-group-margin-left"),Object(a.mdx)("li",{parentName:"ul"},"--terra-time-input-time-input-group-margin-right"),Object(a.mdx)("li",{parentName:"ul"},"--terra-time-input-keyboard-border-style"),Object(a.mdx)("li",{parentName:"ul"},"--terra-time-input-keyboard-border-width")))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=371-df06537b74d7811a2680.js.map