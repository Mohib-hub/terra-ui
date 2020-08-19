(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1180:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TextareaSize=t.default=void 0;var a=s(r(0)),n=s(r(2)),o=s(r(10)),i=s(r(4)),l=s(r(7)),u=s(r(1340));function s(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function b(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=O(e);if(t){var n=O(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return y(this,r)}}function y(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var x=i.default.bind(u.default);t.TextareaSize={SMALL:"small",MEDIUM:"medium",LARGE:"large",FULL:"full"};var w={small:2,medium:5,large:10},_={ariaLabel:n.default.string,defaultValue:n.default.string,disabled:n.default.bool,isAutoResizable:n.default.bool,isIncomplete:n.default.bool,isInvalid:n.default.bool,name:n.default.string,onChange:n.default.func,onFocus:n.default.func,required:n.default.bool,rows:n.default.number,size:n.default.oneOf(["small","medium","large","full"]),value:n.default.string,refCallback:n.default.func,disableResize:n.default.bool},j={defaultValue:void 0,disabled:!1,name:null,isAutoResizable:!1,isIncomplete:!1,isInvalid:!1,onChange:void 0,required:!1,rows:null,size:"small",value:void 0,refCallback:void 0,disableResize:!1},I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(l,e);var t,r,n,i=v(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=i.call(this,e)).isMobileDevice=window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0),t.onChange=t.onChange.bind(g(t)),t.onFocus=t.onFocus.bind(g(t)),t}return t=l,(r=[{key:"componentDidMount",value:function(){var e=Math.ceil(parseInt(window.getComputedStyle(this.textarea).lineHeight,0));this.textarea.currentLineHeight=e,this.setBaseHeights(),this.props.isAutoResizable&&!this.isMobileDevice&&this.resizeTextarea()}},{key:"componentDidUpdate",value:function(e){this.props.size===e.size&&this.props.rows===e.rows||this.setBaseHeights()}},{key:"onFocus",value:function(e){if(this.props.isAutoResizable&&!this.isMobileDevice){var t=Math.ceil(parseInt(window.getComputedStyle(this.textarea).lineHeight,0));this.textarea.currentLineHeight!==t&&(this.textarea.currentLineHeight=t,this.setBaseHeights())}this.props.onFocus&&this.props.onFocus(e)}},{key:"onChange",value:function(e){this.props.isAutoResizable&&!this.isMobileDevice&&this.resizeTextarea(),this.props.onChange&&this.props.onChange(e)}},{key:"setBaseHeights",value:function(){var e=this.textarea.value;this.textarea.value="",this.textarea.baseScrollHeight=this.textarea.scrollHeight,this.textarea.style.minHeight="0px",this.textarea.style.minHeight="".concat(this.textarea.scrollHeight,"px"),this.textarea.value=e}},{key:"resizeTextarea",value:function(){var e=this.props.rows||w[this.props.size];this.textarea.rows=e;var t=Math.ceil((this.textarea.scrollHeight-this.textarea.baseScrollHeight)/this.textarea.currentLineHeight);this.textarea.rows=e+t}},{key:"render",value:function(){var e,t=this,r=this.props,n=r.name,i=r.required,l=(r.onChange,r.onFocus,r.isAutoResizable),u=r.isIncomplete,s=r.isInvalid,c=r.value,b=r.defaultValue,m=r.rows,v=r.size,y=r.ariaLabel,g=r.refCallback,O=r.disableResize,_=h(r,["name","required","onChange","onFocus","isAutoResizable","isIncomplete","isInvalid","value","defaultValue","rows","size","ariaLabel","refCallback","disableResize"]),j=this.context,I=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},_),z=(0,o.default)(x("textarea",{"form-error":s},{"form-incomplete":u&&i&&!s},{"full-size":"full"===v},{resizable:l&&!this.isMobileDevice},{"no-resize":O},j.className),I.className);I&&Object.prototype.hasOwnProperty.call(I,"aria-label")?e=y||I["aria-label"]:y&&(e=y),I["aria-label"]=e,i&&(I["aria-required"]="true");var P=m||w[v];return void 0!==c?I.value=c:I.defaultValue=b,I.placeholder&&(I.placeholder=null),a.default.createElement("textarea",f({},I,{ref:function(e){t.textarea=e,g&&g(e)},name:n,onFocus:this.onFocus,onChange:this.onChange,required:i,rows:P,className:z}))}}])&&b(t.prototype,r),n&&b(t,n),l}(a.default.Component);I.propTypes=_,I.defaultProps=j,I.isTextarea=!0,I.contextType=l.default;var z=I;t.default=z},1194:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(r(0)),n=u(r(2)),o=u(r(369)),i=u(r(366)),l=u(r(1180));function u(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var f={inputId:n.default.string.isRequired,label:n.default.string.isRequired,defaultValue:n.default.oneOfType([n.default.string,n.default.number]),disabled:n.default.bool,error:n.default.node,errorIcon:n.default.element,help:n.default.node,hideRequired:n.default.bool,inputAttrs:n.default.object,isIncomplete:n.default.bool,isInline:n.default.bool,isInvalid:n.default.bool,isLabelHidden:n.default.bool,labelAttrs:n.default.object,maxWidth:n.default.string,onChange:n.default.func,required:n.default.bool,showOptional:n.default.bool,value:n.default.oneOfType([n.default.string,n.default.number])},d={defaultValue:void 0,disabled:!1,error:null,errorIcon:a.default.createElement(o.default,null),help:null,hideRequired:!1,inputAttrs:{},isIncomplete:!1,isInline:!1,isInvalid:!1,isLabelHidden:!1,labelAttrs:{},maxWidth:void 0,onChange:void 0,required:!1,showOptional:!1,value:void 0},p=function(e){var t,r=e.defaultValue,n=e.disabled,o=e.error,u=e.errorIcon,f=e.help,d=e.hideRequired,p=e.inputAttrs,h=e.inputId,b=e.isIncomplete,m=e.isInline,v=e.isInvalid,y=e.isLabelHidden,g=e.label,O=e.labelAttrs,x=e.maxWidth,w=e.required,_=e.showOptional,j=e.onChange,I=e.value,z=c(e,["defaultValue","disabled","error","errorIcon","help","hideRequired","inputAttrs","inputId","isIncomplete","isInline","isInvalid","isLabelHidden","label","labelAttrs","maxWidth","required","showOptional","onChange","value"]);return f&&o&&v?t="".concat(h,"-error ").concat(h,"-help"):(f&&(t="".concat(h,"-help")),o&&v&&(t="".concat(h,"-error"))),z.placeholder&&(z.placeholder=null),a.default.createElement(i.default,s({},z,{label:g,labelAttrs:O,error:o,errorIcon:u,help:f,hideRequired:d,required:w,showOptional:_,isInvalid:v,isInline:m,isLabelHidden:y,htmlFor:h,maxWidth:x}),a.default.createElement(l.default,s({},p,{disabled:p.disabled||n,id:h,isIncomplete:b,onChange:j,value:I,defaultValue:r,"aria-describedby":t})))};p.propTypes=f,p.defaultProps=d;var h=p;t.default=h},1340:function(e,t,r){e.exports={"orion-fusion-theme":"Textarea-module__orion-fusion-theme___ms0uc",textarea:"Textarea-module__textarea___1cA7J","full-size":"Textarea-module__full-size___39LhZ","no-resize":"Textarea-module__no-resize___3JpeK",resizable:"Textarea-module__resizable___1CQUn","form-error":"Textarea-module__form-error___1KRBv","form-incomplete":"Textarea-module__form-incomplete___791M-"}}}]);
//# sourceMappingURL=16-66a51e4ca6f850df8938.js.map