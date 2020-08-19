(window.webpackJsonp=window.webpackJsonp||[]).push([[289],{1011:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var a=i(t(0)),n=i(t(2)),d=i(t(4)),o=i(t(1012));function i(e){return e&&e.__esModule?e:{default:e}}var l=d.default.bind(o.default),m={name:n.default.string.isRequired,src:n.default.string,url:n.default.string,version:n.default.string.isRequired},c=function(e){var r=e.src,t=e.name,n=e.url,d=e.version,o=a.default.createElement("a",{className:l("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(d)},a.default.createElement("span",{className:l("badge-name")},n?"package":"npm"),a.default.createElement("span",{className:l("badge-version")},"v".concat(d))),i=r?a.default.createElement("a",{className:l("badge"),href:r},a.default.createElement("span",{className:l("badge-name")},"github"),a.default.createElement("span",{className:l("badge-version")},"source")):void 0;return a.default.createElement("div",{className:l("badge-container")},o,i)};c.propTypes=m;var s=c;r.default=s},1012:function(e,r,t){e.exports={badge:"Badges-module__badge___3m7y2","badge-container":"Badges-module__badge-container___1YxI5","badge-name":"Badges-module__badge-name___BQ3u4","badge-version":"Badges-module__badge-version___3OgwS"}},1254:function(e,r,t){"use strict";t.d(r,"a",(function(){return i}));var a=t(0),n=t.n(a),d=t(1011),o=t.n(d),i=function(e){var r=e.url;return n.a.createElement(o.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-radio",name:"terra-form-radio",version:"4.14.0",url:r})}},2980:function(e,r,t){"use strict";t.r(r),t.d(r,"default",(function(){return l}));t(0);var a=t(365),n=t(1254);function d(){return(d=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},d=Object.keys(e);for(a=0;a<d.length;a++)t=d[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(a=0;a<d.length;a++)t=d[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i={};function l(e){var r=e.components,t=o(e,["components"]);return Object(a.mdx)("wrapper",d({},i,t,{components:r,mdxType:"MDXLayout"}),Object(a.mdx)(n.a,{mdxType:"Badge"}),Object(a.mdx)("h1",{id:"terra-form-radio-upgrade-guide"},"Terra Form Radio Upgrade Guide"),Object(a.mdx)("h2",{id:"changes-from-version-3-to-version-4"},"Changes from version 3 to version 4"),Object(a.mdx)("h3",{id:"props"},"Props"),Object(a.mdx)("h4",{id:"updated"},"Updated"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Form Fields allowed the ",Object(a.mdx)("inlineCode",{parentName:"li"},"label")," to be a node, which potentially breaks the display when injecting other non-inline-only text elements (terra-text) or has the potential to completely break accessibility if something non-text based would be passed in."),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"labelText")," prop's type changed from node to string."),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"legend")," prop's type changed from node to string.")),Object(a.mdx)("h5",{id:"steps-to-upgrade"},"Steps to Upgrade"),Object(a.mdx)("p",null,"To upgrade from 3.0 to 4.0 each existing Radio must be reviewed and updated to ensure only a string is being passed to the ",Object(a.mdx)("inlineCode",{parentName:"p"},"labelText")," and ",Object(a.mdx)("inlineCode",{parentName:"p"},"legend ")," props. Solutions passing node data types need to be reworked to provide only a string."),Object(a.mdx)("h2",{id:"changes-from-version-2-to-version-3"},"Changes from version 2 to version 3"),Object(a.mdx)("h3",{id:"changes-to-css-custom-properties"},"Changes to CSS Custom Properties"),Object(a.mdx)("h4",{id:"renamed"},"Renamed"),Object(a.mdx)("table",null,Object(a.mdx)("thead",{parentName:"table"},Object(a.mdx)("tr",{parentName:"thead"},Object(a.mdx)("th",d({parentName:"tr"},{align:null}),"Previous"),Object(a.mdx)("th",d({parentName:"tr"},{align:null}),"New"))),Object(a.mdx)("tbody",{parentName:"table"},Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-radio-outer-ring-checked-hover-border-color"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-radio-hover-checked-outer-ring-border-color")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-radio-outer-ring-checked-hover-border-width"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-radio-hover-checked-outer-ring-border-width")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-radio-focus-ring-background-color"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-radio-focus-before-ring-background-color")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-radio-focus-ring-height"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-radio-focus-before-ring-height")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-radio-focus-ring-left"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-radio-focus-before-ring-left")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-radio-focus-ring-top"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-radio-focus-before-ring-top")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-radio-focus-ring-width"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-radio-focus-before-ring-width")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-radio-field-error-icon"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-radio-field-error-background")))),Object(a.mdx)("h4",{id:"added"},"Added"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"--terra-form-radio-field-label-error-icon-margin-right")),Object(a.mdx)("h4",{id:"removed"},"Removed"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"--terra-form-radio-field-label-error-icon-padding-right")))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=289-4a936dc3b9c144d74ec6.js.map