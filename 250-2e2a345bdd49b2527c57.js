(window.webpackJsonp=window.webpackJsonp||[]).push([[250],{1011:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(0)),d=r(a(2)),m=r(a(4)),n=r(a(1012));function r(e){return e&&e.__esModule?e:{default:e}}var c=m.default.bind(n.default),i={name:d.default.string.isRequired,src:d.default.string,url:d.default.string,version:d.default.string.isRequired},u=function(e){var t=e.src,a=e.name,d=e.url,m=e.version,n=l.default.createElement("a",{className:c("badge"),href:d||"https://www.npmjs.org/package/".concat(a,"/v/").concat(m)},l.default.createElement("span",{className:c("badge-name")},d?"package":"npm"),l.default.createElement("span",{className:c("badge-version")},"v".concat(m))),r=t?l.default.createElement("a",{className:c("badge"),href:t},l.default.createElement("span",{className:c("badge-name")},"github"),l.default.createElement("span",{className:c("badge-version")},"source")):void 0;return l.default.createElement("div",{className:c("badge-container")},n,r)};u.propTypes=i;var p=u;t.default=p},1012:function(e,t,a){e.exports={badge:"Badges-module__badge___3m7y2","badge-container":"Badges-module__badge-container___1YxI5","badge-name":"Badges-module__badge-name___BQ3u4","badge-version":"Badges-module__badge-version___3OgwS"}},1315:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var l=a(0),d=a.n(l),m=a(1011),n=a.n(m),r=function(e){var t=e.url;return d.a.createElement(n.a,{src:"https://github.com/cerner/terra-clinical/tree/main/packages/terra-clinical-item-view",name:"terra-clinical-item-view",version:"4.1.0",url:t})}},3209:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return b}));a(0);var l=a(365),d=a(1315);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}function n(e,t){if(null==e)return{};var a,l,d=function(e,t){if(null==e)return{};var a,l,d={},m=Object.keys(e);for(l=0;l<m.length;l++)a=m[l],t.indexOf(a)>=0||(d[a]=e[a]);return d}(e,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(l=0;l<m.length;l++)a=m[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(d[a]=e[a])}return d}var r={};function c(e){var t=e.components,a=n(e,["components"]);return Object(l.mdx)("wrapper",m({},r,a,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("h1",{id:"changelog"},"Changelog"),Object(l.mdx)("h2",{id:"unreleased"},"Unreleased"),Object(l.mdx)("h2",{id:"410---august-4-2020"},"4.1.0 - (August 4, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Update changelog formatting")))),Object(l.mdx)("h2",{id:"400---june-23-2020"},"4.0.0 - (June 23, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Breaking",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"This is a breaking change to pull in an MVB of terra-clinical-item-display. Since item view exports item display, this also needs to be an MVB")))),Object(l.mdx)("h2",{id:"3201---june-23-2020"},"3.20.1 - (June 23, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Revert MVB of terra-clinical-item-display")))),Object(l.mdx)("h2",{id:"3200---june-23-2020"},"3.20.0 - (June 23, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Updated source file for changes in clinical-item-display"),Object(l.mdx)("li",{parentName:"ul"},"Update secondary colors to new rgba values.")))),Object(l.mdx)("h2",{id:"3190---june-9-2020"},"3.19.0 - (June 9, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Apply themes by context and directly include packaged themes.")))),Object(l.mdx)("h2",{id:"3180---april-28-2020"},"3.18.0 - (April 28, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Added"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Added ",Object(l.mdx)("inlineCode",{parentName:"li"},"directory")," as a sub attribute to the ",Object(l.mdx)("inlineCode",{parentName:"li"},"repository")," attribute in package.json"))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Removed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},'Removed "View Component Source Code" from docs in favour of source code badge')))),Object(l.mdx)("h2",{id:"3170---april-23-2020"},"3.17.0 - (April 23, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),Object(l.mdx)("h2",{id:"3160---april-14-2020"},"3.16.0 - (April 14, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Update wdio test configuration to use root wdio config")))),Object(l.mdx)("h2",{id:"3150---march-31-2020"},"3.15.0 - (March 31, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Added",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Added wdio screenshots for clinical-lowlight-theme")))),Object(l.mdx)("h2",{id:"3140---march-27-2020"},"3.14.0 - (March 27, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Update docs to use mdx syntax.")))),Object(l.mdx)("h2",{id:"3130---march-24-2020"},"3.13.0 - (March 24, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),Object(l.mdx)("h2",{id:"3120---february-18-2020"},"3.12.0 - (February 18, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Added",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Added clinical-lowlight-theme theming files")))),Object(l.mdx)("h2",{id:"3110---january-28-2020"},"3.11.0 - (January 28, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Update copyright to include 2020")))),Object(l.mdx)("h2",{id:"3100---january-22-2020"},"3.10.0 - (January 22, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Added",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Added orion-fusion-theme and generated the respective reference wdio screenshots.")))),Object(l.mdx)("h2",{id:"390---september-26-2019"},"3.9.0 - (September 26, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),Object(l.mdx)("h2",{id:"380---september-19-2019"},"3.8.0 - (September 19, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Convert SCSS files to .module.scss")))),Object(l.mdx)("h2",{id:"370---september-6-2019"},"3.7.0 - (September 6, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Removed inline styles from dev site components."),Object(l.mdx)("li",{parentName:"ul"},"Add comments for ESlint 6"),Object(l.mdx)("li",{parentName:"ul"},"Cleaned up imports in examples and test files")))),Object(l.mdx)("h2",{id:"360---august-14-2019"},"3.6.0 - (August 14, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Jest snapshot updated for ItemDisplay's primary textStyle default prop."),Object(l.mdx)("li",{parentName:"ul"},"Updated package.json test scripts")))),Object(l.mdx)("h2",{id:"350---july-16-2019"},"3.5.0 - (July 16, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Fixed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Right-aligned text and icons using new prop in clinical-item-display"))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Added"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Added enumeration for valid layout, emphasis, and alignment values")))),Object(l.mdx)("h2",{id:"340---june-11-2019"},"3.4.0 - (June 11, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Changed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Update tests for terra-toolkit v5 and terra-dev-site v5 changes"),Object(l.mdx)("li",{parentName:"ul"},"Update wdio spec to use Terra.describeViewports"))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Removed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Removed node_modules from .npmignore"))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Updated"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Updated displays documentation")))),Object(l.mdx)("h2",{id:"330---march-26-2019"},"3.3.0 - (March 26, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Changed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Update react/react-dom peer-dependency to latest stable minor release"))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Removed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Removed peer dependency on terra-base"),Object(l.mdx)("li",{parentName:"ul"},"Removed baseStyles import from terra-base")))),Object(l.mdx)("h2",{id:"320---february-5-2019"},"3.2.0 - (February 5, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),Object(l.mdx)("h2",{id:"310---january-22-2019"},"3.1.0 - (January 22, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Change",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Dependency updates")))),Object(l.mdx)("h2",{id:"300---january-17-2019"},"3.0.0 - (January 17, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Breaking Change"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Renamed css theming variables to match linter standards."))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Added"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Changelog dev site doc page")))),Object(l.mdx)("h2",{id:"2160---november-21-2018"},"2.16.0 - (November 21, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),Object(l.mdx)("h2",{id:"2150---october-2-2018"},"2.15.0 - (October 2, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Formatting changes per eslint v5 update")))),Object(l.mdx)("h2",{id:"2140---september-5-2018"},"2.14.0 - (September 5, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2"),Object(l.mdx)("li",{parentName:"ul"},"Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2")))),Object(l.mdx)("h2",{id:"2130---august-30-2018"},"2.13.0 - (August 30, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),Object(l.mdx)("h2",{id:"2120---august-1-2018"},"2.12.0 - (August 1, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor updates")))),Object(l.mdx)("h2",{id:"2111---july-25-2018"},"2.11.1 - (July 25, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Patch release")))),Object(l.mdx)("h2",{id:"2110---july-25-2018"},"2.11.0 - (July 25, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor updates")))),Object(l.mdx)("h2",{id:"2100---july-17-2018"},"2.10.0 - (July 17, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor updates")))),Object(l.mdx)("h2",{id:"290---july-3-2018"},"2.9.0 - (July 3, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Fixed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Accessibility in Accessory Item View example"),Object(l.mdx)("li",{parentName:"ul"},"Lint in doc page")))),Object(l.mdx)("h2",{id:"280---june-28-2018"},"2.8.0 - (June 28, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Added",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Added theming variables in Item View"),Object(l.mdx)("li",{parentName:"ul"},"Updated Inline-icon to use em instead of px")))),Object(l.mdx)("h2",{id:"270---june-12-2018"},"2.7.0 - (June 12, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Conform to eslint updates")))),Object(l.mdx)("h2",{id:"260---may-30-2018"},"2.6.0 - (May 30, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Moved examples to src")))),Object(l.mdx)("h2",{id:"250---may-22-2018"},"2.5.0 - (May 22, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),Object(l.mdx)("h2",{id:"240---may-1-2018"},"2.4.0 - (May 1, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),Object(l.mdx)("h2",{id:"230---april-20-2018"},"2.3.0 - (April 20, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),Object(l.mdx)("h2",{id:"220---march-27-2018"},"2.2.0 - (March 27, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Converted nightwatch tests to wdio")))),Object(l.mdx)("h2",{id:"210---march-6-2018"},"2.1.0 - (March 6, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),Object(l.mdx)("h2",{id:"200---february-19-2018"},"2.0.0 - (February 19, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Update to React 16")))),Object(l.mdx)("h2",{id:"170---february-19-2018"},"1.7.0 - (February 19, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),Object(l.mdx)("h2",{id:"160---january-23-2018"},"1.6.0 - (January 23, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Coverted ItemView to be a functional component, removing static methods.")))),Object(l.mdx)("h2",{id:"150---november-28-2017"},"1.5.0 - (November 28, 2017)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Added"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Added reserveStartAccessorySpace to allow for proper spacing when a start accessory is not provided."))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Changed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Updated the start accessory's max-width to be 2.8571rem (40px) and removed max-height."),Object(l.mdx)("li",{parentName:"ul"},"Updated the end accessory's max-width to be 20% and removed max-height."),Object(l.mdx)("li",{parentName:"ul"},"startAccessory, comment and endAccessory props now accept node proptypes.")))),Object(l.mdx)("h2",{id:"140---september-26-2017"},"1.4.0 - (September 26, 2017)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Remove stylelint-disable selector-class-pattern"),Object(l.mdx)("li",{parentName:"ul"},"Update class names to follow selector-class-pattern")))),Object(l.mdx)("h2",{id:"130---september-1-2017"},"1.3.0 - (September 1, 2017)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Change dependency on terra-base to v2.0.0"),Object(l.mdx)("li",{parentName:"ul"},"Update nightwatch tests and test scripts.")))),Object(l.mdx)("h2",{id:"120---july-27-2017"},"1.2.0 - (July 27, 2017)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Fixed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Fixed accessory styling to scale with font size."),Object(l.mdx)("li",{parentName:"ul"},"Fixed truncation styling to correctly apply an ellipse."))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Changed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Updated Accessory nightwatch examples to include an icon.")))),Object(l.mdx)("h2",{id:"110---july-18-2017"},"1.1.0 - (July 18, 2017)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Changed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Converted component to use CSS modules"),Object(l.mdx)("li",{parentName:"ul"},"Updated nightwatch test scripts"))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Removed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Removed nightwatch.config file")))),Object(l.mdx)("h2",{id:"100---june-28-2017"},"1.0.0 - (June 28, 2017)"),Object(l.mdx)("p",null,"Initial stable release"))}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var a,l,d=function(e,t){if(null==e)return{};var a,l,d={},m=Object.keys(e);for(l=0;l<m.length;l++)a=m[l],t.indexOf(a)>=0||(d[a]=e[a]);return d}(e,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(l=0;l<m.length;l++)a=m[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(d[a]=e[a])}return d}c.isMDXComponent=!0;var p={};function b(e){var t=e.components,a=u(e,["components"]);return Object(l.mdx)("wrapper",i({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)(d.a,{mdxType:"Badge"}),Object(l.mdx)(c,{mdxType:"ChangeLog"}))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=250-2e2a345bdd49b2527c57.js.map