(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{1290:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(0)),l=u(n(20));function u(e){return e&&e.__esModule?e:{default:e}}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o=function(e){var t=r({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"M24 0A14.94 14.94 0 009.1 14.9a15.52 15.52 0 001.5 6.5 14.69 14.69 0 004.1 5.1 12.06 12.06 0 014.3 6.7 2.19 2.19 0 00-1.1 1.8v7.8a2.11 2.11 0 002.1 2.1h1a3 3 0 106 0h.9a2.11 2.11 0 002.1-2.1V35a2.06 2.06 0 00-1.1-1.8 12.4 12.4 0 014.1-6.6 16.23 16.23 0 004.4-5.3 14.43 14.43 0 001.5-6.5A14.92 14.92 0 0024 0zm7 24.4a15.76 15.76 0 00-3.9 5 11.75 11.75 0 00-1.2 3.6h-.2V20h2a1.54 1.54 0 001.5-1.5 1.56 1.56 0 00-1.6-1.5h-7a1.5 1.5 0 000 3h2v13h-.5a13.86 13.86 0 00-1.2-3.6 14.67 14.67 0 00-4.5-5.4h.1a12 12 0 01-4.3-9.1A11.78 11.78 0 0124 3a11.93 11.93 0 0111.9 11.9 12 12 0 01-4.9 9.5z"}))};o.displayName="IconLightbulb",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var i=o;t.default=i},1438:function(e,t,n){"use strict";var a=n(5);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l.default}});var l=a(n(390))},1439:function(e,t,n){"use strict";var a=n(11),l=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=l(n(76)),r=a(n(0)),o=l(n(2)),i=l(n(4)),d=n(247),c=l(n(99)),f=n(243),s=n(135),m=l(n(1545)),p=l(n(1546)),v=l(n(1675)),h=l(n(1676)),E=l(n(1677)),g=i.default.bind(E.default),b=function(e){var t=e.pageName,n=(0,r.useState)(!1),a=(0,u.default)(n,2),l=a[0],o=a[1],i=(0,r.useContext)(d.ActiveBreakpointContext),E=(0,r.useContext)(f.ApplicationIntlContext),b=r.default.useContext(s.ThemeContext),_=(0,r.useState)(!1),y=(0,u.default)(_,2),w=y[0],P=y[1];if((0,r.useEffect)((function(){if(!l){var e=setTimeout((function(){o(!0)}),window.TEST_APP_TIMEOUT);return function(){clearTimeout(e)}}}),[l]),!l)return r.default.createElement(c.default,{isOpen:!0,backgroundStyle:"clear"});if(w)throw new Error("".concat(t," threw an error to test the application's error handling"));return r.default.createElement("div",{className:g("page-content",b.className)},r.default.createElement("h1",null,t),r.default.createElement("h3",null,"Configuration Properties"),r.default.createElement("p",null,"Active Breakpoint:"," ",r.default.createElement("span",null,i)),r.default.createElement("p",null,"Intl Locale:"," ",r.default.createElement("span",null,E.locale)),r.default.createElement("h3",null,"Error Handling"),r.default.createElement("p",null,"Press the button below to throw an exception that will be caught and handled by the framework"),r.default.createElement("button",{type:"button",onClick:function(){P(!0)}},"Throw Error"),r.default.createElement(v.default,null),r.default.createElement(h.default,null),r.default.createElement(m.default,null),r.default.createElement(p.default,null),r.default.createElement("h3",null,"Themeing"),r.default.createElement("p",null,"The div below uses the theme context to apply styling for theme: ".concat(b.name,".")),r.default.createElement("div",{className:g("themed-block")}))};b.propTypes={pageName:o.default.string};var _=b;t.default=_},1545:function(e,t,n){"use strict";var a=n(11),l=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.ModalContent=t.default=void 0;var u=l(n(76)),r=a(n(0)),o=l(n(2)),i=l(n(4)),d=l(n(175)),c=n(247),f=l(n(99)),s=l(n(140)),m=n(243),p=n(100),v=l(n(1546)),h=l(n(1673)),E=i.default.bind(h.default),g=function(e){var t=e.name,n=e.onSubmit,a=(0,r.useContext)(c.ActiveBreakpointContext),l=(0,r.useContext)(m.ApplicationIntlContext),o=(0,r.useContext)(p.DisclosureManagerContext),i=(0,r.useState)(!1),h=(0,u.default)(i,2),g=h[0],b=h[1],_=(0,r.useState)(!1),y=(0,u.default)(_,2),w=y[0],P=y[1],x=(0,r.useState)(!1),C=(0,u.default)(x,2),T=C[0],k=C[1],M=(0,r.useRef)();if((0,r.useEffect)((function(){if(!w){var e=setTimeout((function(){P(!0)}),2e3);return clearTimeout(M.current),function(){clearTimeout(e)}}}),[w]),!w)return r.default.createElement(r.default.Fragment,null,r.default.createElement(p.DisclosureManagerHeaderAdapter,{title:t}),r.default.createElement(f.default,{isOpen:!0,backgroundStyle:"clear"}));if(g)throw new Error("Modal Page failed to render");return r.default.createElement(r.default.Fragment,null,r.default.createElement(p.DisclosureManagerHeaderAdapter,{title:t}),r.default.createElement(d.default,null,r.default.createElement("div",{className:E("modal-content")},r.default.createElement("h2",null,t),r.default.createElement("h3",null,"Modal Dismissal"),r.default.createElement("p",null,"This modal will close when the Esc key is pressed, the Close button is pressed, or if the disclosee dismisses it when the Done button is pressed."),r.default.createElement("button",{type:"button",onClick:function(){o.registerDismissCheck((function(){return Promise.resolve()})),n()}},"Done"),r.default.createElement("h3",null,"Configuration Properties"),r.default.createElement("p",null,"Active Breakpoint:"," ",r.default.createElement("span",null,a)),r.default.createElement("p",null,"Intl Locale:"," ",r.default.createElement("span",null,l.locale)),r.default.createElement("h3",null,"Error Handling"),r.default.createElement("p",null,"Press the button below to throw an exception that will be caught and handled by the framework."),r.default.createElement("button",{type:"button",onClick:function(){b(!0)}},"Throw Error"),r.default.createElement("h3",null,"Status View"),r.default.createElement("p",null,"This component uses the ApplicationStatusOverlay to present a status view over itself and within the modal. The status view in this demo is shown for 2 seconds."),r.default.createElement("p",null,r.default.createElement("button",{disabled:T,type:"button",onClick:function(){k(!0),M.current=setTimeout((function(){k(!1)}),2e3)}},"Show Status View")),T&&r.default.createElement(s.default,{message:"This is a demo status view",variant:"no-data"}),r.default.createElement(v.default,null))))};t.ModalContent=g,g.propTypes={name:o.default.string,onSubmit:o.default.func};var b=function(){var e=(0,r.useContext)(p.DisclosureManagerContext),t=(0,r.useRef)();return r.default.createElement("div",null,r.default.createElement("h3",null,"Modal Presenter"),r.default.createElement("p",null,"This component uses the DisclosureManagerContext to present a modal."),r.default.createElement("button",{type:"button",onClick:function(){e.disclose({preferredType:"modal",size:"large",content:{key:"modal_component_demo",component:r.default.createElement(g,{name:"Modal Component Demo",onSubmit:function(){t.current&&(t.current(),t.current=void 0)}})}}).then((function(e){var n=e.dismissDisclosure;t.current=n}))}},"Show Modal"))};t.default=b},1546:function(e,t,n){"use strict";var a=n(11),l=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=l(n(76)),r=a(n(0)),o=l(n(4)),i=l(n(101)),d=l(n(1672)),c=o.default.bind(d.default),f=function(){var e=(0,r.useState)(!1),t=(0,u.default)(e,2),n=t[0],a=t[1],l=(0,r.useState)(!1),o=(0,u.default)(l,2),d=o[0],f=o[1];return r.default.createElement("div",null,r.default.createElement("h3",null,"Unsaved Changes"),r.default.createElement("p",null,"This component uses a NavigationPrompt to register unsaved state with framework. Multiple NavigationPrompts can be rendered at the same time."),r.default.createElement("p",{className:n?c("red-text"):null},"Pending Action 1:"," ",r.default.createElement("button",{type:"button",onClick:function(){a(!n)}},n?"Disable":"Activate")),r.default.createElement("p",{className:d?c("red-text"):null},"Pending Action 2:"," ",r.default.createElement("button",{type:"button",onClick:function(){f(!d)}},d?"Disable":"Activate")),n?r.default.createElement(i.default,{description:"Pending Action 1"}):void 0,d?r.default.createElement(i.default,{description:"Pending Action 2"}):void 0)};t.default=f},1670:function(e,t,n){"use strict";var a=n(5),l=n(11);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=l(n(0)),r=a(n(1438)),o=n(243),i=a(n(413)),d=n(135),c=a(n(1671));window.TEST_APP_TIMEOUT=1e3;var f=function(){var e=(0,u.useContext)(o.ApplicationIntlContext),t=u.default.useContext(d.ThemeContext);return u.default.createElement(r.default,{locale:e.locale,themeName:t.className},u.default.createElement(i.default,null,u.default.createElement(c.default,null)))};t.default=f},1671:function(e,t,n){"use strict";var a=n(11),l=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=l(n(76)),r=l(n(11)),o=a(n(0)),i=l(n(1290)),d=l(n(393)),c=n(100),f=n(1545),s=o.default.lazy((function(){return Promise.resolve().then((function(){return(0,r.default)(n(1674))}))})),m=o.default.lazy((function(){return Promise.resolve().then((function(){return(0,r.default)(n(1678))}))})),p=o.default.lazy((function(){return Promise.resolve().then((function(){return(0,r.default)(n(1679))}))})),v={name:"Demo User",initials:"DU"},h=function(){var e,t=(0,o.useContext)(c.DisclosureManagerContext),n=(0,o.useState)("page_1"),a=(0,u.default)(n,2),l=a[0],r=a[1],h=(0,o.useState)(!1),E=(0,u.default)(h,2),g=E[0],b=E[1],_=(0,o.useRef)(),y=(0,o.useRef)([{key:"page_1",text:"Page 1"},{key:"page_2",text:"Page 2"},{key:"page_3",text:"Page 3"}]);if(g)return o.default.createElement("div",null,o.default.createElement("p",null,"Logged Out"),o.default.createElement("button",{type:"button",onClick:function(){b(!1)}},"Reset"));switch(l){case"page_1":e=o.default.createElement(s,null);break;case"page_2":e=o.default.createElement(m,null);break;case"page_3":e=o.default.createElement(p,null);break;default:e=null}return o.default.createElement(d.default,{titleConfig:{title:"Terra Application Demo"},userConfig:v,navigationItems:y.current,activeNavigationItemKey:l,onSelectNavigationItem:function(e){r(e)},extensionItems:[{key:"extension_1",icon:o.default.createElement(i.default,null),text:"Extension 1"}],onSelectExtensionItem:function(e){"extension_1"===e&&t.disclose({preferredType:"modal",size:"large",content:{key:"extension_1_modal",component:o.default.createElement(f.ModalContent,{name:"Extension Modal",onSubmit:function(){_.current&&(_.current(),_.current=void 0)}})}}).then((function(e){var t=e.dismissDisclosure;_.current=t}))},utilityItems:[{key:"utility_1",text:"Utility Item 1"}],onSelectUtilityItem:function(e){"utility_1"===e&&t.disclose({preferredType:"modal",size:"large",content:{key:"utility_1_modal",component:o.default.createElement(f.ModalContent,{name:"Utility Modal",onSubmit:function(){_.current&&(_.current(),_.current=void 0)}})}}).then((function(e){var t=e.dismissDisclosure;_.current=t}))},onSelectLogout:function(){b(!0)}},e)};t.default=h},1672:function(e,t,n){e.exports={"red-text":"PendingActionToggle-module__red-text___9tT9C"}},1673:function(e,t,n){e.exports={"modal-content":"ModalPresenter-module__modal-content___1k1wb"}},1674:function(e,t,n){"use strict";var a=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(0)),u=a(n(1439)),r=function(){return l.default.createElement(u.default,{pageName:"Page 1",pageKey:"page_1"})};t.default=r},1675:function(e,t,n){"use strict";var a=n(11),l=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=l(n(76)),r=a(n(0)),o=l(n(99)),i=function(){var e=(0,r.useState)(!1),t=(0,u.default)(e,2),n=t[0],a=t[1],l=(0,r.useRef)();return(0,r.useEffect)((function(){return function(){window.clearTimeout(l.current)}}),[]),r.default.createElement("div",null,r.default.createElement("h3",null,"Loading Overlay Presenter"),r.default.createElement("p",null,"This component uses the ApplicationLoadingOverlay to present a loading overlay over itself. The overlay in this demo is shown for 2 seconds."),r.default.createElement("p",null,r.default.createElement("button",{disabled:n,type:"button",onClick:function(){a(!0),l.current=setTimeout((function(){a(!1)}),2e3)}},"Show Loading Overlay")),r.default.createElement(o.default,{isOpen:n,backgroundStyle:"light"}))};t.default=i},1676:function(e,t,n){"use strict";var a=n(11),l=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=l(n(76)),r=a(n(0)),o=l(n(140)),i=function(){var e=(0,r.useState)(!1),t=(0,u.default)(e,2),n=t[0],a=t[1],l=(0,r.useRef)();return(0,r.useEffect)((function(){window.clearTimeout(l.current)}),[]),r.default.createElement("div",null,r.default.createElement("h3",null,"Status View Presenter"),r.default.createElement("p",null,"This component uses the ApplicationStatusOverlay to present a status view over itself. The status view in this demo is shown for 2 seconds."),r.default.createElement("p",null,r.default.createElement("button",{disabled:n,type:"button",onClick:function(){a(!0),l.current=setTimeout((function(){a(!1)}),2e3)}},"Show Status View")),n&&r.default.createElement(o.default,{message:"This is a demo status view",variant:"no-data"}))};t.default=i},1677:function(e,t,n){e.exports={"orion-fusion-theme":"AppPage-module__orion-fusion-theme___1Wdv7","page-content":"AppPage-module__page-content___2pVJ2","themed-block":"AppPage-module__themed-block___1KboM"}},1678:function(e,t,n){"use strict";var a=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(0)),u=a(n(1439)),r=function(){return l.default.createElement(u.default,{pageName:"Page 2",pageKey:"page_2"})};t.default=r},1679:function(e,t,n){"use strict";var a=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(0)),u=a(n(1439)),r=function(){return l.default.createElement(u.default,{pageName:"Page 3",pageKey:"page_3"})};t.default=r},2940:function(e,t,n){"use strict";var a=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(1670)).default;t.default=l}}]);
//# sourceMappingURL=120-21878bfe436d8a365e2a.js.map