(window.webpackJsonp=window.webpackJsonp||[]).push([[245],{1011:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(0)),d=r(a(2)),m=r(a(4)),n=r(a(1012));function r(e){return e&&e.__esModule?e:{default:e}}var c=m.default.bind(n.default),i={name:d.default.string.isRequired,src:d.default.string,url:d.default.string,version:d.default.string.isRequired},u=function(e){var t=e.src,a=e.name,d=e.url,m=e.version,n=l.default.createElement("a",{className:c("badge"),href:d||"https://www.npmjs.org/package/".concat(a,"/v/").concat(m)},l.default.createElement("span",{className:c("badge-name")},d?"package":"npm"),l.default.createElement("span",{className:c("badge-version")},"v".concat(m))),r=t?l.default.createElement("a",{className:c("badge"),href:t},l.default.createElement("span",{className:c("badge-name")},"github"),l.default.createElement("span",{className:c("badge-version")},"source")):void 0;return l.default.createElement("div",{className:c("badge-container")},n,r)};u.propTypes=i;var p=u;t.default=p},1012:function(e,t,a){e.exports={badge:"Badges-module__badge___3m7y2","badge-container":"Badges-module__badge-container___1YxI5","badge-name":"Badges-module__badge-name___BQ3u4","badge-version":"Badges-module__badge-version___3OgwS"}},1246:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var l=a(0),d=a.n(l),m=a(1011),n=a.n(m),r=function(e){var t=e.url;return d.a.createElement(n.a,{src:"https://github.com/cerner/terra-clinical/tree/main/packages/terra-clinical-item-collection",name:"terra-clinical-item-collection",version:"4.25.0",url:t})}},3227:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return b}));a(0);var l=a(365);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var a,l,d=function(e,t){if(null==e)return{};var a,l,d={},m=Object.keys(e);for(l=0;l<m.length;l++)a=m[l],t.indexOf(a)>=0||(d[a]=e[a]);return d}(e,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(l=0;l<m.length;l++)a=m[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(d[a]=e[a])}return d}var n={};function r(e){var t=e.components,a=m(e,["components"]);return Object(l.mdx)("wrapper",d({},n,a,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("h1",{id:"changelog"},"Changelog"),Object(l.mdx)("h2",{id:"unreleased"},"Unreleased"),Object(l.mdx)("h2",{id:"4250---august-4-2020"},"4.25.0 - (August 4, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Jest snapshot reverted for ItemDisplay's primary textStyle default prop till dependency is updated."),Object(l.mdx)("li",{parentName:"ul"},"updated ",Object(l.mdx)("inlineCode",{parentName:"li"},"master")," references to ",Object(l.mdx)("inlineCode",{parentName:"li"},"main"),"."),Object(l.mdx)("li",{parentName:"ul"},"Update changelog formatting")))),Object(l.mdx)("h2",{id:"4240---june-23-2020"},"4.24.0 - (June 23, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Jest and wdio snapshot updated for ItemDisplay's primary textStyle default prop.")))),Object(l.mdx)("h2",{id:"4230---june-16-2020"},"4.23.0 - (June 16, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Updated wdio test to support testing against firefox."),Object(l.mdx)("li",{parentName:"ul"},"Disabled wdio axe color-contrast rule on selectable item view example for firefox testing. This will be re-enabled when ",Object(l.mdx)("a",d({parentName:"li"},{href:"https://github.com/cerner/terra-clinical/issues/673"}),"https://github.com/cerner/terra-clinical/issues/673")," is resolved.")))),Object(l.mdx)("h2",{id:"4220---june-9-2020"},"4.22.0 - (June 9, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor file changes to comply with eslint rules"),Object(l.mdx)("li",{parentName:"ul"},"Removed unnecessary disable eslint rules")))),Object(l.mdx)("h2",{id:"4210---april-28-2020"},"4.21.0 - (April 28, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Added"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Added ",Object(l.mdx)("inlineCode",{parentName:"li"},"directory")," as a sub attribute to the ",Object(l.mdx)("inlineCode",{parentName:"li"},"repository")," attribute in package.json"))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Removed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},'Removed "View Component Source Code" from docs in favour of source code badge')))),Object(l.mdx)("h2",{id:"4200---april-23-2020"},"4.20.0 - (April 23, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Fixed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Allow providing an ",Object(l.mdx)("inlineCode",{parentName:"li"},"aria-label")," to support a selectable List with the ",Object(l.mdx)("inlineCode",{parentName:"li"},"listbox")," role.")))),Object(l.mdx)("h2",{id:"4190---april-14-2020"},"4.19.0 - (April 14, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Update wdio test configuration to use root wdio config")))),Object(l.mdx)("h2",{id:"4180---march-31-2020"},"4.18.0 - (March 31, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),Object(l.mdx)("h2",{id:"4170---march-27-2020"},"4.17.0 - (March 27, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),Object(l.mdx)("h2",{id:"4160---march-24-2020"},"4.16.0 - (March 24, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),Object(l.mdx)("h2",{id:"4150---march-17-2020"},"4.15.0 - (March 17, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Update docs to use MDX syntax")))),Object(l.mdx)("h2",{id:"4140---march-10-2020"},"4.14.0 - (March 10, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Upgraded terra-list to the new major version")))),Object(l.mdx)("h2",{id:"4130---february-18-2020"},"4.13.0 - (February 18, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),Object(l.mdx)("h2",{id:"4120---january-28-2020"},"4.12.0 - (January 28, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Update copyright to include 2020")))),Object(l.mdx)("h2",{id:"4110---january-22-2020"},"4.11.0 - (January 22, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),Object(l.mdx)("h2",{id:"4100---january-7-2020"},"4.10.0 - (January 7, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Added"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Add upgrade guides to dev-site docs"))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Removed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Removed yarn reference in docs")))),Object(l.mdx)("h2",{id:"490---september-26-2019"},"4.9.0 - (September 26, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),Object(l.mdx)("h2",{id:"480---september-19-2019"},"4.8.0 - (September 19, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Convert SCSS files to .module.scss")))),Object(l.mdx)("h2",{id:"470---september-6-2019"},"4.7.0 - (September 6, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Replaced Object.assign syntax with Object spread syntax"),Object(l.mdx)("li",{parentName:"ul"},"Cleaned up imports in examples and test files")))),Object(l.mdx)("h2",{id:"460---august-14-2019"},"4.6.0 - (August 14, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Updated package.json test scripts")))),Object(l.mdx)("h2",{id:"450---july-16-2019"},"4.5.0 - (July 16, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Changed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Updated jest snapshots for ItemDisplay's new iconAlignment default prop."))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Added"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Added enumeration for valid breakpoint values"),Object(l.mdx)("li",{parentName:"ul"},"Added enumeration for valid Item layout, emphasis, alignment, and view values")))),Object(l.mdx)("h2",{id:"440---june-11-2019"},"4.4.0 - (June 11, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Changed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Update tests for terra-toolkit v5 and terra-dev-site v5 changes"),Object(l.mdx)("li",{parentName:"ul"},"Update wdio spec to use Terra.describeViewports"))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Removed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Removed node_modules from .npmignore")))),Object(l.mdx)("h2",{id:"430---may-7-2019"},"4.3.0 - (May 7, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Replaced local key code value with keycode-js")))),Object(l.mdx)("h2",{id:"420---march-26-2019"},"4.2.0 - (March 26, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Changed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Update react/react-dom peer-dependency to latest stable minor release"))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Removed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Removed peer dependency on terra-base"),Object(l.mdx)("li",{parentName:"ul"},"Removed baseStyles import from terra-base")))),Object(l.mdx)("h2",{id:"410---february-5-2019"},"4.1.0 - (February 5, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),Object(l.mdx)("h2",{id:"400---january-22-2019"},"4.0.0 - (January 22, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Updated theme variables")))),Object(l.mdx)("h2",{id:"3230---january-22-2019"},"3.23.0 - (January 22, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Updated dependencies to fix major version bump issues")))),Object(l.mdx)("h2",{id:"3220---january-22-2019"},"3.22.0 - (January 22, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Updated dependencies to fix major version bump issues")))),Object(l.mdx)("h2",{id:"3210---january-17-2019"},"3.21.0 - (January 17, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Changed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Removed local wdio timeout from clinical-item-collection test"))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Added"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Changelog dev site doc page")))),Object(l.mdx)("h2",{id:"3200---january-2-2019"},"3.20.0 - (January 2, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Updated readme to have logically nested headers.")))),Object(l.mdx)("h2",{id:"3190---november-21-2018"},"3.19.0 - (November 21, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),Object(l.mdx)("h2",{id:"3180---october-16-2018"},"3.18.0 - (October 16, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Updated prop descriptions in ItemCollections.jsx and Item.jsx.")))),Object(l.mdx)("h2",{id:"3170---october-2-2018"},"3.17.0 - (October 2, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Formatting changes per eslint v5 update")))),Object(l.mdx)("h2",{id:"3160---september-5-2018"},"3.16.0 - (September 5, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2"),Object(l.mdx)("li",{parentName:"ul"},"Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2")))),Object(l.mdx)("h2",{id:"3150---august-30-2018"},"3.15.0 - (August 30, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),Object(l.mdx)("h2",{id:"3140---august-8-2018"},"3.14.0 - (August 8, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Fixed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Fixed list collections not being assigned the ",Object(l.mdx)("inlineCode",{parentName:"li"},"listbox")," role when they have a selectable child")))),Object(l.mdx)("h2",{id:"3130---august-1-2018"},"3.13.0 - (August 1, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor updates")))),Object(l.mdx)("h2",{id:"3120---july-26-2018"},"3.12.0 - (July 26, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Re-enabled ability to set custom props on Item Collection component"),Object(l.mdx)("li",{parentName:"ul"},"Updated to use terra-responsive-element v3")))),Object(l.mdx)("h2",{id:"3111---july-25-2018"},"3.11.1 - (July 25, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Patch release")))),Object(l.mdx)("h2",{id:"3110---july-25-2018"},"3.11.0 - (July 25, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor updates")))),Object(l.mdx)("h2",{id:"3100---july-17-2018"},"3.10.0 - (July 17, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor updates")))),Object(l.mdx)("h2",{id:"390---july-3-2018"},"3.9.0 - (July 3, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Fixed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Lint in doc page")))),Object(l.mdx)("h2",{id:"380---june-28-2018"},"3.8.0 - (June 28, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),Object(l.mdx)("h2",{id:"370---june-12-2018"},"3.7.0 - (June 12, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Conform to eslint updates")))),Object(l.mdx)("h2",{id:"360---may-30-2018"},"3.6.0 - (May 30, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Moved examples to src")))),Object(l.mdx)("h2",{id:"350---may-22-2018"},"3.5.0 - (May 22, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),Object(l.mdx)("h2",{id:"340---may-1-2018"},"3.4.0 - (May 1, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),Object(l.mdx)("h2",{id:"330---april-20-2018"},"3.3.0 - (April 20, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),Object(l.mdx)("h2",{id:"320---march-27-2018"},"3.2.0 - (March 27, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Converted nightwatch tests to wdio")))),Object(l.mdx)("h2",{id:"310---march-6-2018"},"3.1.0 - (March 6, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),Object(l.mdx)("h2",{id:"300---february-19-2018"},"3.0.0 - (February 19, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Update to React 16")))),Object(l.mdx)("h2",{id:"240---february-19-2018"},"2.4.0 - (February 19, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),Object(l.mdx)("h2",{id:"230---january-23-2018"},"2.3.0 - (January 23, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),Object(l.mdx)("h2",{id:"220---december-9-2017"},"2.2.0 - (December 9, 2017)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Added"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"showListItemChevron prop on the ItemCollection.Item component to allow list items to display a chevron."))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Changed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Remove type check to pass all Item Collection generated properties that are passed to the Item Collection children")))),Object(l.mdx)("h2",{id:"210---december-5-2017"},"2.1.0 - (December 5, 2017)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Pass down the Item Collection's view to allow for custom Item Collection components to know when to render as a list item or a table row.")))),Object(l.mdx)("h2",{id:"200---november-29-2017"},"2.0.0 - (November 29, 2017)"),Object(l.mdx)("p",null,"See ",Object(l.mdx)("a",d({parentName:"p"},{href:"https://github.com/cerner/terra-clinical/releases/tag/terra-clinical-item-collection%402.0.0"}),"Release Notes")," for Migration Guide"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Added"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"children prop and Item Component to be used as the children. The children prop replaces the rows prop."),Object(l.mdx)("li",{parentName:"ul"},"onSelect prop to enable the rending of a selectable item collection children"),Object(l.mdx)("li",{parentName:"ul"},"hasStartAccessory, numberOfDisplays, hasComment, and hasEndAccessory props to construct the item collection layout."),Object(l.mdx)("li",{parentName:"ul"},"isListDivided prop, which replace the listStyles prop"),Object(l.mdx)("li",{parentName:"ul"},"isTablePadded and isTableStriped props to replace the tableStyles prop."))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Removed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"rows, onChange, listStyles and tableStyles props"))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Changed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Item Collection layout is no longer rendered via the first row, but the hasStartAccessory, numberOfDisplays, hasComment, and hasEndAccessory props."),Object(l.mdx)("li",{parentName:"ul"},"Item Collection now initially renders as static. Additional props must be included for selectable Item Collections. See Selectable Readme for more information.")))),Object(l.mdx)("h2",{id:"140---september-26-2017"},"1.4.0 - (September 26, 2017)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Fixed visual differences between list and table view"),Object(l.mdx)("li",{parentName:"ul"},"Updated nightwatch tests to use expect syntax"),Object(l.mdx)("li",{parentName:"ul"},"Remove stylelint-disable selector-class-pattern")))),Object(l.mdx)("h2",{id:"130---september-1-2017"},"1.3.0 - (September 1, 2017)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Change dependency on terra-base to v2.0.0"),Object(l.mdx)("li",{parentName:"ul"},"Update nightwatch tests and test scripts.")))),Object(l.mdx)("h2",{id:"120---august-16-2017"},"1.2.0 - (August 16, 2017)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Change data-class to be name spaced")))),Object(l.mdx)("h2",{id:"111---july-27-2017"},"1.1.1 - (July 27, 2017)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Updated spacing around react-docgen comments")))),Object(l.mdx)("h2",{id:"110---july-18-2017"},"1.1.0 - (July 18, 2017)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Changed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Updated nightwatch test scripts"))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Removed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Removed nightwatch.config file"),Object(l.mdx)("li",{parentName:"ul"},"Converted component to use CSS modules")))),Object(l.mdx)("h2",{id:"100---june-28-2017"},"1.0.0 - (June 28, 2017)"),Object(l.mdx)("p",null,"Initial stable release"))}r.isMDXComponent=!0;var c=a(1246);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var a,l,d=function(e,t){if(null==e)return{};var a,l,d={},m=Object.keys(e);for(l=0;l<m.length;l++)a=m[l],t.indexOf(a)>=0||(d[a]=e[a]);return d}(e,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(l=0;l<m.length;l++)a=m[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(d[a]=e[a])}return d}var p={};function b(e){var t=e.components,a=u(e,["components"]);return Object(l.mdx)("wrapper",i({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)(c.a,{mdxType:"Badge"}),Object(l.mdx)(r,{mdxType:"ChangeLog"}))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=245-d716ae77eef928091d3f.js.map