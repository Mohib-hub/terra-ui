(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{1011:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(0)),d=r(a(2)),n=r(a(4)),m=r(a(1012));function r(e){return e&&e.__esModule?e:{default:e}}var c=n.default.bind(m.default),i={name:d.default.string.isRequired,src:d.default.string,url:d.default.string,version:d.default.string.isRequired},u=function(e){var t=e.src,a=e.name,d=e.url,n=e.version,m=l.default.createElement("a",{className:c("badge"),href:d||"https://www.npmjs.org/package/".concat(a,"/v/").concat(n)},l.default.createElement("span",{className:c("badge-name")},d?"package":"npm"),l.default.createElement("span",{className:c("badge-version")},"v".concat(n))),r=t?l.default.createElement("a",{className:c("badge"),href:t},l.default.createElement("span",{className:c("badge-name")},"github"),l.default.createElement("span",{className:c("badge-version")},"source")):void 0;return l.default.createElement("div",{className:c("badge-container")},m,r)};u.propTypes=i;var p=u;t.default=p},1012:function(e,t,a){e.exports={badge:"Badges-module__badge___3m7y2","badge-container":"Badges-module__badge-container___1YxI5","badge-name":"Badges-module__badge-name___BQ3u4","badge-version":"Badges-module__badge-version___3OgwS"}},1303:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var l=a(0),d=a.n(l),n=a(1011),m=a.n(n),r=function(e){var t=e.url;return d.a.createElement(m.a,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-brand-footer",name:"terra-brand-footer",version:"3.2.0",url:t})}},3285:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return b}));a(0);var l=a(365),d=a(1303);function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var a,l,d=function(e,t){if(null==e)return{};var a,l,d={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(d[a]=e[a]);return d}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(d[a]=e[a])}return d}var r={};function c(e){var t=e.components,a=m(e,["components"]);return Object(l.mdx)("wrapper",n({},r,a,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("h1",{id:"changelog"},"Changelog"),Object(l.mdx)("h2",{id:"unreleased"},"Unreleased"),Object(l.mdx)("h2",{id:"320---august-18-2020"},"3.2.0 - (August 18, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Added"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Added an interaction media query to apply ",Object(l.mdx)("inlineCode",{parentName:"li"},"hover")," styles only on non-touch devices."))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Changed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Updated Changelog format")))),Object(l.mdx)("h2",{id:"310---august-4-2020"},"3.1.0 - (August 4, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Updated Changelog format")))),Object(l.mdx)("h2",{id:"300---july-14-2020"},"3.0.0 - (July 14, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Breaking Change"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("inlineCode",{parentName:"li"},"links")," prop has been deprecated, will resolve to ",Object(l.mdx)("inlineCode",{parentName:"li"},"sections"),"."),Object(l.mdx)("li",{parentName:"ul"},"Updated UpgradeGuide."))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Changed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"updated ",Object(l.mdx)("inlineCode",{parentName:"li"},"master")," references to ",Object(l.mdx)("inlineCode",{parentName:"li"},"main"),".")))),Object(l.mdx)("h2",{id:"2240---may-26-2020"},"2.24.0 - (May 26, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Apply themes by context and directly include packaged themes.")))),Object(l.mdx)("h2",{id:"2230---april-28-2020"},"2.23.0 - (April 28, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Added"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Added ",Object(l.mdx)("inlineCode",{parentName:"li"},"directory")," as a sub attribute to the ",Object(l.mdx)("inlineCode",{parentName:"li"},"repository")," attribute in package.json"))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Changed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Update wdio test configuration to use root wdio config"))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Removed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},'Removed "View Component Source Code" from docs in favour of source code badge')))),Object(l.mdx)("h2",{id:"2220---march-31-2020"},"2.22.0 - (March 31, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Added",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Added clinical-lowlight-theme wdio screenshots")))),Object(l.mdx)("h2",{id:"2210---february-18-2020"},"2.21.0 - (February 18, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Added"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Added generated-themes to .npmignore"))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Changed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Update docs to use MDX syntax")))),Object(l.mdx)("h2",{id:"2200---january-28-2020"},"2.20.0 - (January 28, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Update copyright to include 2020")))),Object(l.mdx)("h2",{id:"2190---december-10-2019"},"2.19.0 - (December 10, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Added",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Added orion-fusion-theme and generated the respective reference wdio screenshots.")))),Object(l.mdx)("h2",{id:"2180---november-7-2019"},"2.18.0 - (November 7, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),Object(l.mdx)("h2",{id:"2170---october-16-2019"},"2.17.0 - (October 16, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),Object(l.mdx)("h2",{id:"2160---october-3-2019"},"2.16.0 - (October 3, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),Object(l.mdx)("h2",{id:"2150---september-26-2019"},"2.15.0 - (September 26, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),Object(l.mdx)("h2",{id:"2140---september-19-2019"},"2.14.0 - (September 19, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Removed ",Object(l.mdx)("inlineCode",{parentName:"li"},"details")," tag from doc-site."),Object(l.mdx)("li",{parentName:"ul"},"Doc site example module import syntax modified to use package.json name resolution")))),Object(l.mdx)("h2",{id:"2130---september-6-2019"},"2.13.0 - (September 6, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Cleaned up imports in examples and test files")))),Object(l.mdx)("h2",{id:"2120---august-14-2019"},"2.12.0 - (August 14, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"updated package.json test scripts")))),Object(l.mdx)("h2",{id:"2110---july-30-2019"},"2.11.0 - (July 30, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Removed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Removed DEPENDENCIES.md file")))),Object(l.mdx)("h2",{id:"2100---july-16-2019"},"2.10.0 - (July 16, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Added",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Added documentation on required peerDependencies")))),Object(l.mdx)("h2",{id:"290---july-10-2019"},"2.9.0 - (July 10, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"280---july-2-2019"},"2.8.0 - (July 2, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Renamed test and example SCSS files to end with ",Object(l.mdx)("inlineCode",{parentName:"li"},".module.scss")," extension")))),Object(l.mdx)("h2",{id:"270---june-19-2019"},"2.7.0 - (June 19, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"260---june-12-2019"},"2.6.0 - (June 12, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Removed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Removed node_modules from .npmignore"))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Changed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Removed all inline styles from Dev-site components and implemented the same styles using external css."),Object(l.mdx)("li",{parentName:"ul"},"Update tests for terra-toolkit v5 and terra-dev-site v5 changes"),Object(l.mdx)("li",{parentName:"ul"},"Update wdio spec to use Terra.describeViewports")))),Object(l.mdx)("h2",{id:"250---april-24-2019"},"2.5.0 - (April 24, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Moved packages we use solely in doc examples and tests to devDependencies")))),Object(l.mdx)("h2",{id:"240---march-26-2019"},"2.4.0 - (March 26, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Changed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Update react/react-dom peer-dependency to latest stable minor release"))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Removed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Removed peer dependency on terra-base"),Object(l.mdx)("li",{parentName:"ul"},"Removed baseStyles import from terra-base")))),Object(l.mdx)("h2",{id:"230---march-20-2019"},"2.3.0 - (March 20, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Updated brand footer examples to use styled text to correct Section 508 warning")))),Object(l.mdx)("h2",{id:"220---february-13-2019"},"2.2.0 - (February 13, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Added discernible text to footer Terra UI link")))),Object(l.mdx)("h2",{id:"210---february-5-2019"},"2.1.0 - (February 5, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency update")))),Object(l.mdx)("h2",{id:"200---january-25-2019"},"2.0.0 - (January 25, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Breaking Change",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Updated variable names to match new naming standard"),Object(l.mdx)("li",{parentName:"ul"},"Updated terra-core dependencies")))),Object(l.mdx)("h2",{id:"1160---january-5-2019"},"1.16.0 - (January 5, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency update")))),Object(l.mdx)("h2",{id:"1150---january-2-2019"},"1.15.0 - (January 2, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency update")))),Object(l.mdx)("h2",{id:"1140---december-5-2018"},"1.14.0 - (December 5, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency update")))),Object(l.mdx)("h2",{id:"1130---december-3-2018"},"1.13.0 - (December 3, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency bump")))),Object(l.mdx)("h2",{id:"1120---november-15-2018"},"1.12.0 - (November 15, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency update"),Object(l.mdx)("li",{parentName:"ul"},"Updated component readme feature links"),Object(l.mdx)("li",{parentName:"ul"},"Moved link separator out of CSS to hide from screen readers")))),Object(l.mdx)("h2",{id:"1110---september-25-2018"},"1.11.0 - (September 25, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Improved brand footer accessibility.")))),Object(l.mdx)("h2",{id:"1100---september-5-2018"},"1.10.0 - (September 5, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2"),Object(l.mdx)("li",{parentName:"ul"},"Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2")))),Object(l.mdx)("h2",{id:"190---august-30-2018"},"1.9.0 - (August 30, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Formatting changes per eslint v5 update")))),Object(l.mdx)("h2",{id:"180---august-14-2018"},"1.8.0 - (August 14, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Changed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Formatting changes per eslint v4 update"))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Fixed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Lint errors regarding file path resolution")))),Object(l.mdx)("h2",{id:"170---july-25-2018"},"1.7.0 - (July 25, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Added"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Section headers can be put in the nav bar"),Object(l.mdx)("li",{parentName:"ul"},"The navigation bar can be displayed vertically"))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Changed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Add .module extension to SCSS file(s)")))),Object(l.mdx)("h2",{id:"160---july-10-2018"},"1.6.0 - (July 10, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Clean up dependencies")))),Object(l.mdx)("h2",{id:"150---july-3-2018"},"1.5.0 - (July 3, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Added",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Change logs to documentation on terra-dev-site")))),Object(l.mdx)("h2",{id:"140---june-29-2018"},"1.4.0 - (June 29, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),Object(l.mdx)("h2",{id:"130---june-12-2018"},"1.3.0 - (June 12, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),Object(l.mdx)("h2",{id:"120---may-30-2018"},"1.2.0 - (May 30, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Moved examples to src")))),Object(l.mdx)("h2",{id:"110---may-22-2018"},"1.1.0 - (May 22, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),Object(l.mdx)("h2",{id:"100---may-8-2018"},"1.0.0 - (May 8, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Initial stable release")))}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var a,l,d=function(e,t){if(null==e)return{};var a,l,d={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(d[a]=e[a]);return d}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(d[a]=e[a])}return d}c.isMDXComponent=!0;var p={};function b(e){var t=e.components,a=u(e,["components"]);return Object(l.mdx)("wrapper",i({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)(d.a,{mdxType:"Badge"}),Object(l.mdx)(c,{mdxType:"ChangeLog"}))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=227-74772736c1e0b36c74ac.js.map