(window.webpackJsonp=window.webpackJsonp||[]).push([[329],{1011:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(0)),n=r(a(2)),m=r(a(4)),d=r(a(1012));function r(e){return e&&e.__esModule?e:{default:e}}var i=m.default.bind(d.default),u={name:n.default.string.isRequired,src:n.default.string,url:n.default.string,version:n.default.string.isRequired},c=function(e){var t=e.src,a=e.name,n=e.url,m=e.version,d=l.default.createElement("a",{className:i("badge"),href:n||"https://www.npmjs.org/package/".concat(a,"/v/").concat(m)},l.default.createElement("span",{className:i("badge-name")},n?"package":"npm"),l.default.createElement("span",{className:i("badge-version")},"v".concat(m))),r=t?l.default.createElement("a",{className:i("badge"),href:t},l.default.createElement("span",{className:i("badge-name")},"github"),l.default.createElement("span",{className:i("badge-version")},"source")):void 0;return l.default.createElement("div",{className:i("badge-container")},d,r)};c.propTypes=u;var b=c;t.default=b},1012:function(e,t,a){e.exports={badge:"Badges-module__badge___3m7y2","badge-container":"Badges-module__badge-container___1YxI5","badge-name":"Badges-module__badge-name___BQ3u4","badge-version":"Badges-module__badge-version___3OgwS"}},1231:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var l=a(0),n=a.n(l),m=a(1011),d=a.n(m),r=function(e){var t=e.url;return n.a.createElement(d.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-paginator",name:"terra-paginator",version:"2.59.0",url:t})}},3257:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return p}));a(0);var l=a(365),n=a(1231);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},m=Object.keys(e);for(l=0;l<m.length;l++)a=m[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(l=0;l<m.length;l++)a=m[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var r={};function i(e){var t=e.components,a=d(e,["components"]);return Object(l.mdx)("wrapper",m({},r,a,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("h1",{id:"changelog"},"Changelog"),Object(l.mdx)("h2",{id:"unreleased"},"Unreleased"),Object(l.mdx)("h2",{id:"2590---august-18-2020"},"2.59.0 - (August 18, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Added",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Added an interaction media query to apply ",Object(l.mdx)("inlineCode",{parentName:"li"},"hover")," styles only on non-touch devices.")))),Object(l.mdx)("h2",{id:"2580---august-6-2020"},"2.58.0 - (August 6, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"2570---august-4-2020"},"2.57.0 - (August 4, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"2560---july-29-2020"},"2.56.0 - (July 29, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Update changelog formatting")))),Object(l.mdx)("h2",{id:"2550---july-7-2020"},"2.55.0 - (July 7, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"2540---june-23-2020"},"2.54.0 - (June 23, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"2530---june-11-2020"},"2.53.0 - (June 11, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"2520---june-9-2020"},"2.52.0 - (June 9, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor file changes to comply with eslint rules"),Object(l.mdx)("li",{parentName:"ul"},"Update wdio test configuration to use root wdio config")))),Object(l.mdx)("h2",{id:"2510---june-2-2020"},"2.51.0 - (June 2, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Apply themes by context and directly include packaged themes."),Object(l.mdx)("li",{parentName:"ul"},"Updated wdio test to support testing against firefox")))),Object(l.mdx)("h2",{id:"2500---may-26-2020"},"2.50.0 - (May 26, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"2490---may-19-2020"},"2.49.0 - (May 19, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"2480---may-12-2020"},"2.48.0 - (May 12, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"2470---may-5-2020"},"2.47.0 - (May 5, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"2460---april-28-2020"},"2.46.0 - (April 28, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},'Removed "View Component Source Code" from docs in favour of source code badge'))),Object(l.mdx)("li",{parentName:"ul"},"Added",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Added clinical-lowlight-theme wdio screenshots")))),Object(l.mdx)("h2",{id:"2450---april-22-2020"},"2.45.0 - (April 22, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"2440---april-22-2020"},"2.44.0 - (April 22, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Updated wdio snapshots due to changes in button."),Object(l.mdx)("li",{parentName:"ul"},"Updated documentation link in README")))),Object(l.mdx)("h2",{id:"2430---march-31-2020"},"2.43.0 - (March 31, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"2420---march-31-2020"},"2.42.0 - (March 31, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"2410---march-10-2020"},"2.41.0 - (March 10, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Updated incorrect Swedish translations")))),Object(l.mdx)("h2",{id:"2400---march-3-2020"},"2.40.0 - (March 3, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Update docs to use mdx syntax.")))),Object(l.mdx)("h2",{id:"2390---february-18-2020"},"2.39.0 - (February 18, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Added",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Added clinical-lowlight-theme theming files")))),Object(l.mdx)("h2",{id:"2380---february-4-2020"},"2.38.0 - (February 4, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Added"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Private PaginatorButton component added to separate button focus and active style management"))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Changed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("inlineCode",{parentName:"li"},"focused")," and ",Object(l.mdx)("inlineCode",{parentName:"li"},"active")," pseudo selectors migrated to data attributes")))),Object(l.mdx)("h2",{id:"2370---january-28-2020"},"2.37.0 - (January 28, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"2360---january-17-2020"},"2.36.0 - (January 17, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Replaced uncontrolled ",Object(l.mdx)("inlineCode",{parentName:"li"},"<ResponsiveElement>")," with controlled ",Object(l.mdx)("inlineCode",{parentName:"li"},"<ResponsiveElement>"),".")))),Object(l.mdx)("h2",{id:"2350---january-7-2020"},"2.35.0 - (January 7, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"2340---december-10-2019"},"2.34.0 - (December 10, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"2330---december-3-2019"},"2.33.0 - (December 3, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Added",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Added orion-fusion-theme and generated the respective reference wdio screenshots.")))),Object(l.mdx)("h2",{id:"2320---october-30-2019"},"2.32.0 - (October 30, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Fixed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Fixed lint warnings for multiple empty lines")))),Object(l.mdx)("h2",{id:"2310---october-15-2019"},"2.31.0 - (October 15, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"2300---october-14-2019"},"2.30.0 - (October 14, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"2290---october-3-2019"},"2.29.0 - (October 3, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"2280---september-26-2019"},"2.28.0 - (September 26, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"2270---september-19-2019"},"2.27.0 - (September 19, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Changed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Removed ",Object(l.mdx)("inlineCode",{parentName:"li"},"details")," tag from doc-site."))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Added"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Added en-CA translations.")))),Object(l.mdx)("h2",{id:"2260---september-6-2019"},"2.26.0 - (September 6, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Added"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Props table markdown file import added to doc site page"))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Removed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Removed ",Object(l.mdx)("inlineCode",{parentName:"li"},"inherit")," fallback for ",Object(l.mdx)("inlineCode",{parentName:"li"},"--terra-paginator-nav-link-selected-color")," CSS custom property")))),Object(l.mdx)("h2",{id:"2250---september-3-2019"},"2.25.0 - (September 3, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Updated the 'keycode-js' version from '^1.0.4' to '^2.0.1'.")))),Object(l.mdx)("h2",{id:"2240---august-21-2019"},"2.24.0 - (August 21, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Import for package version from package.json added to doc page"),Object(l.mdx)("li",{parentName:"ul"},"Cleaned up imports in examples and test files")))),Object(l.mdx)("h2",{id:"2230---august-14-2019"},"2.23.0 - (August 14, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"updated package.json test scripts")))),Object(l.mdx)("h2",{id:"2220---july-30-2019"},"2.22.0 - (July 30, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"2212---july-24-2019"},"2.21.2 - (July 24, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Fix",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Include missing lib directory that was not available in 2.21.1")))),Object(l.mdx)("h2",{id:"2211---july-24-2019"},"2.21.1 - (July 24, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Update changelog")))),Object(l.mdx)("h2",{id:"2210---july-24-2019"},"2.21.0 - (July 24, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Added"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Added new theme variables - see UPGRADEGUIDE.md"))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Fixed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Updated anchors to buttons for accessibility"),Object(l.mdx)("li",{parentName:"ul"},"Added support for i18n and translations"))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Changed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Removed theme variables - see UPGRADEGUIDE.md"),Object(l.mdx)("li",{parentName:"ul"},"Updated to use terra-visually-hidden-text component")))),Object(l.mdx)("h2",{id:"2200---july-17-2019"},"2.20.0 - (July 17, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"2190---july-17-2019"},"2.19.0 - (July 17, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"2180---july-16-2019"},"2.18.0 - (July 16, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Added"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Added documentation on required peerDependencies"),Object(l.mdx)("li",{parentName:"ul"},"Added new theme variables - see UPGRADEGUIDE.md"))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Fixed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Updated anchors to buttons for accessibility"),Object(l.mdx)("li",{parentName:"ul"},"Added support for i18n and translations"))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Changed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Update tests to use ",Object(l.mdx)("inlineCode",{parentName:"li"},"Terra.describeViewports")," for setting viewports and use ",Object(l.mdx)("inlineCode",{parentName:"li"},"Terra.it.validatesElement")),Object(l.mdx)("li",{parentName:"ul"},"Removed theme variables - see UPGRADEGUIDE.md"),Object(l.mdx)("li",{parentName:"ul"},"Updated to use terra-visually-hidden-text component")))),Object(l.mdx)("h2",{id:"2170----july-11-2019"},"2.17.0  - (July 11, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"2160---june-28-2019"},"2.16.0 - (June 28, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Removed all inline styles from Dev-site components and implemented the same styles using external css.")))),Object(l.mdx)("h2",{id:"2150---june-18-2019"},"2.15.0 - (June 18, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Changed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Updated to use the new responsive element breakpoints"))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Fixed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Fixed pageSet logic to support total pages less than max allowed")))),Object(l.mdx)("h2",{id:"2141---june-12-2019"},"2.14.1 - (June 12, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Patch dependency version bump")))),Object(l.mdx)("h2",{id:"2140---june-11-2019"},"2.14.0 - (June 11, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Removed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Removed node_modules from .npmignore"))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Changed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Made required updates to consume terra-toolkit v5 and terra-dev-site v5")))),Object(l.mdx)("h2",{id:"2130---may-1-2019"},"2.13.0 - (May 1, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"2120---april-16-2019"},"2.12.0 - (April 16, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"2110---april-9-2019"},"2.11.0 - (April 9, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"2100---april-2-2019"},"2.10.0 - (April 2, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"290---march-26-2019"},"2.9.0 - (March 26, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Changed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Update react/react-dom peer-dependency to latest stable minor release"))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Removed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Removed peer dependency on terra-base"),Object(l.mdx)("li",{parentName:"ul"},"Removed baseStyles import from terra-base")))),Object(l.mdx)("h2",{id:"280---march-21-2019"},"2.8.0 - (March 21, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Replaced local keyCode values with keycode-js npm package")))),Object(l.mdx)("h2",{id:"270---february-26-2019"},"2.7.0 - (February 26, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"260---february-12-2019"},"2.6.0 - (February 12, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"250---february-5-2019"},"2.5.0 - (February 5, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"240---january-27-2019"},"2.4.0 - (January 27, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"230---january-26-2019"},"2.3.0 - (January 26, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"220---january-22-2019"},"2.2.0 - (January 22, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"210---january-22-2019"},"2.1.0 - (January 22, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"200---january-8-2019"},"2.0.0 - (January 8, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Changed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Updated theme variables"),Object(l.mdx)("li",{parentName:"ul"},"Add previous and next margins for progressive paginator"))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Removed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Unneeded terra-list dependency.")))),Object(l.mdx)("h2",{id:"1270---january-2-2019"},"1.27.0 - (January 2, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"1261---november-20-2018"},"1.26.1 - (November 20, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Patch dependency version bump")))),Object(l.mdx)("h2",{id:"1260---november-19-2018"},"1.26.0 - (November 19, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"1250---november-13-2018"},"1.25.0 - (November 13, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"1240---november-9-2018"},"1.24.0 - (November 9, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"1230---october-30-2018"},"1.23.0 - (October 30, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Update mixin import to be more explicit")))),Object(l.mdx)("h2",{id:"1220---october-24-2018"},"1.22.0 - (October 24, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"1210---october-16-2018"},"1.21.0 - (October 16, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"1200---october-8-2018"},"1.20.0 - (October 8, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"1190---october-2-2018"},"1.19.0 - (October 2, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"1180---september-25-2018"},"1.18.0 - (September 25, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"1171---september-6-2018"},"1.17.1 - (September 6, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Patch dependency version bump")))),Object(l.mdx)("h2",{id:"1170---september-5-2018"},"1.17.0 - (September 5, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2"),Object(l.mdx)("li",{parentName:"ul"},"Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2")))),Object(l.mdx)("h2",{id:"1160---september-4-2018"},"1.16.0 - (September 4, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"1150---august-29-2018"},"1.15.0 - (August 29, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"1140---august-21-2018"},"1.14.0 - (August 21, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"1130---august-8-2018"},"1.13.0 - (August 8, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"1120---august-1-2018"},"1.12.0 - (August 1, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"1110---july-25-2018"},"1.11.0 - (July 25, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"1100---july-19-2018"},"1.10.0 - (July 19, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Add .module extension to SCSS file(s)")))),Object(l.mdx)("h2",{id:"190---july-17-2018"},"1.9.0 - (July 17, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Changed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump"),Object(l.mdx)("li",{parentName:"ul"},"Formatting changes per eslint v4 update"))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Fixed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Removed usage of CSS ",Object(l.mdx)("inlineCode",{parentName:"li"},"initial")," value because Internet Explorer does not support it")))),Object(l.mdx)("h2",{id:"180---july-10-2018"},"1.8.0 - (July 10, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"170---july-3-2018"},"1.7.0 - (July 3, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"160---june-28-2018"},"1.6.0 - (June 28, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Changed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump"))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Fixed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Fixed accessibility issue where where previous and next anchors had no link content on narrow viewports"))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Added"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Added change log to the documentation on terra-dev-site")))),Object(l.mdx)("h2",{id:"150---june-22-2018"},"1.5.0 - (June 22, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Changed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Moved terra-base from dependency to peerDependency"))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Added"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Added controlled versions of paginators"))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Fixed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Fixed icon display")))),Object(l.mdx)("h2",{id:"140---june-13-2018"},"1.4.0 - (June 13, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"130---june-12-2018"},"1.3.0 - (June 12, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},'Updated "test:jest" script to work on windows.')))),Object(l.mdx)("h2",{id:"120---may-30-2018"},"1.2.0 - (May 30, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Updated docs."),Object(l.mdx)("li",{parentName:"ul"},"Updated structure to match terra-dev-site 1.0 and moved doc examples internal.")))),Object(l.mdx)("h2",{id:"110---may-25-2018"},"1.1.0 - (May 25, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"100---may-23-2018"},"1.0.0 - (May 23, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Initial stable release")))}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},m=Object.keys(e);for(l=0;l<m.length;l++)a=m[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(l=0;l<m.length;l++)a=m[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}i.isMDXComponent=!0;var b={};function p(e){var t=e.components,a=c(e,["components"]);return Object(l.mdx)("wrapper",u({},b,a,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)(n.a,{mdxType:"Badge"}),Object(l.mdx)(i,{mdxType:"ChangeLog"}))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=329-ea4d584a33661092f1d6.js.map