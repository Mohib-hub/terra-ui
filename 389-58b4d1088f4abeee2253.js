(window.webpackJsonp=window.webpackJsonp||[]).push([[389],{1013:function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var l=a?Object.getOwnPropertyDescriptor(e,r):null;l&&(l.get||l.set)?Object.defineProperty(n,r,l):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n(0)),r=i(n(2)),l=i(n(4)),d=n(135),s=i(n(1014));function i(e){return e&&e.__esModule?e:{default:e}}function p(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}var c=l.default.bind(s.default),m={rows:r.default.arrayOf(r.default.shape({name:r.default.string,type:r.default.func,required:r.default.bool,defaultValue:r.default.string,description:r.default.func}))},u=function(e){var t=e.rows,n=(0,a.useContext)(d.ThemeContext);return a.default.createElement("table",{className:c("table",n.className)},a.default.createElement("thead",null,a.default.createElement("tr",{className:c("tr")},a.default.createElement("th",{className:c("th")},"Prop Name"),a.default.createElement("th",{className:c("th")},"Type"),a.default.createElement("th",{className:c("th")},"Is Required"),a.default.createElement("th",{className:c("th")},"Default Value"),a.default.createElement("th",{className:c("th")},"Description"))),a.default.createElement("tbody",null,t.map((function(e){return a.default.createElement("tr",{className:c("tr","props-tr"),key:e.name},a.default.createElement("td",{className:c(["td","strong","props-td"])},e.name),a.default.createElement("td",{className:c(["td","props-td"])},e.type()),a.default.createElement("td",{className:c(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),a.default.createElement("td",{className:c(["td","props-td"])},e.defaultValue),a.default.createElement("td",{className:c(["td","props-td"])},e.description()))}))))};u.propTypes=m;var h=u;t.default=h},1014:function(e,t,n){e.exports={"orion-fusion-theme":"PropsTable-module__orion-fusion-theme___1kDLT",a:"PropsTable-module__a___6WaJD",blockquote:"PropsTable-module__blockquote___2loIo",code:"PropsTable-module__code___1vedU",dd:"PropsTable-module__dd___3pYcW",dl:"PropsTable-module__dl___397p5",dt:"PropsTable-module__dt___1-GVs",h1:"PropsTable-module__h1___1OAAp",h2:"PropsTable-module__h2___2iZ6i",h3:"PropsTable-module__h3___3N0fw",h4:"PropsTable-module__h4___214vu",h5:"PropsTable-module__h5___1ajw8",h6:"PropsTable-module__h6___19W7i","icon-link":"PropsTable-module__icon-link___HUOC7",anchor:"PropsTable-module__anchor___1UTVD",hr:"PropsTable-module__hr___15B3j",img:"PropsTable-module__img___1rEq-",input:"PropsTable-module__input___1WHRX",kbd:"PropsTable-module__kbd___2DvPC",li:"PropsTable-module__li___1T8DQ",p:"PropsTable-module__p___3ssgC",ol:"PropsTable-module__ol___2tCva",ul:"PropsTable-module__ul___DlvOz",td:"PropsTable-module__td___3svU1",pre:"PropsTable-module__pre___3qXsS",strong:"PropsTable-module__strong___2DSlR",table:"PropsTable-module__table___1sV8g",th:"PropsTable-module__th___RQkAz",tr:"PropsTable-module__tr___1dras",icon:"PropsTable-module__icon___1fv-c",required:"PropsTable-module__required___1b3oJ","props-tr":"PropsTable-module__props-tr___1c88t","props-td":"PropsTable-module__props-td___dEhbY"}},3263:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));n(0);var o=n(365),a=n(1013),r=n.n(a);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=function(){return Object(o.mdx)(r.a,{rows:[{name:"children",type:function(){var e={};function t(t){var n=t.components,a=d(t,["components"]);return Object(o.mdx)("wrapper",l({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=d(t,["components"]);return Object(o.mdx)("wrapper",l({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The components to be rendered in the body of the ModalManager. These components will receive the\ndisclosure capabilities through the DisclosureManger's context API."))}return t.isMDXComponent=!0,t({})}},{name:"disclosureAccessory",type:function(){var e={};function t(t){var n=t.components,a=d(t,["components"]);return Object(o.mdx)("wrapper",l({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"element"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=d(t,["components"]);return Object(o.mdx)("wrapper",l({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The component to render within the Modal above the disclosed content."))}return t.isMDXComponent=!0,t({})}},{name:"navigationPromptResolutionOptions",type:function(){var e={};function t(t){var n=t.components,a=d(t,["components"]);return Object(o.mdx)("wrapper",l({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"custom"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=d(t,["components"]);return Object(o.mdx)("wrapper",l({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The Object (or function that returns an Object) that specifies the messages\nused to prompt the user when disclosure dismissal occurs when pending state\nis present. If not provided, the default messaging will be used."))}return t.isMDXComponent=!0,t({})}}]})};function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c={};function m(e){var t=e.components,n=p(e,["components"]);return Object(o.mdx)("wrapper",i({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("h1",{id:"modalmanager"},"ModalManager"),Object(o.mdx)("p",null,"The ModalManager exposes its children to modal presentation APIs through the\n",Object(o.mdx)("a",i({parentName:"p"},{href:"/terra-ui/application/terra-application/contexts/disclosure-manager-context"}),"DisclosureManagerContext"),"."),Object(o.mdx)("h2",{id:"usage"},"Usage"),Object(o.mdx)("pre",null,Object(o.mdx)("code",i({parentName:"pre"},{className:"language-jsx"}),"import ModalManager from 'terra-application/lib/modal-manager';\n")),Object(o.mdx)("h2",{id:"props"},"Props"),Object(o.mdx)(s,{mdxType:"PropsTable"}),Object(o.mdx)("h2",{id:"features"},"Features"),Object(o.mdx)("h3",{id:"exception-handling"},"Exception Handling"),Object(o.mdx)("p",null,"ModalManager renders an ",Object(o.mdx)("a",i({parentName:"p"},{href:"/terra-ui/application/terra-application/components/application-error-boundary"}),"ApplicationErrorBoundary"),"\naround its disclosed components. If the disclosed components throw exceptions during React lifecycle functions, ModalManager will\ncatch the exceptions and render a styled error component in place of the children."),Object(o.mdx)("blockquote",null,Object(o.mdx)("p",{parentName:"blockquote"},"If the disclosed modal contents do not utilize the DisclosureManagerHeaderAdapter and render their own modal header instead,\nit is recommended that those components render an additional ApplicationErrorBoundary below their modal header to keep the\nheader controls for modal dismissal exposed.")),Object(o.mdx)("h3",{id:"loading-overlays"},"Loading Overlays"),Object(o.mdx)("p",null,"ModalManager renders an ",Object(o.mdx)("a",i({parentName:"p"},{href:"/terra-ui/application/terra-application/components/application-loading-overlay-provider"}),"ApplicationLoadingOverlayProvider"),"\naround its disclosed components. Any ",Object(o.mdx)("a",i({parentName:"p"},{href:"/terra-ui/application/terra-application/components/application-loading-overlay"}),"ApplicationLoadingOverlay"),"\ncomponents rendered by children will cause a loading overlay to be rendered over the modal's contents."),Object(o.mdx)("blockquote",null,Object(o.mdx)("p",{parentName:"blockquote"},"If the disclosed modal contents do not utilize the DisclosureManagerHeaderAdapter and render their own modal header instead,\nit is recommended that those components render an additional ApplicationLoadingOverlayProvider below their modal header to keep\nthe header controls for modal dismissal exposed while the overlay is active.")),Object(o.mdx)("h3",{id:"status-views"},"Status Views"),Object(o.mdx)("p",null,"ModalManager renders an ",Object(o.mdx)("a",i({parentName:"p"},{href:"/terra-ui/application/terra-application/components/application-status-overlay-provider"}),"ApplicationStatusOverlayProvider"),"\naround its disclosed components. Any ",Object(o.mdx)("a",i({parentName:"p"},{href:"/terra-ui/application/terra-application/components/application-status-overlay"}),"ApplicationStatusOverlay"),"\ncomponents rendered by children will cause a status view to be rendered over the modal's contents."),Object(o.mdx)("blockquote",null,Object(o.mdx)("p",{parentName:"blockquote"},"If the disclosed modal contents do not utilize the DisclosureManagerHeaderAdapter and render their own modal header instead,\nit is recommended that those components render an additional ApplicationStatusOverlayProvider below their modal header to keep\nthe header controls for modal dismissal exposed while the status view is active.")),Object(o.mdx)("h3",{id:"unsaved-changes"},"Unsaved Changes"),Object(o.mdx)("p",null,"ModalManager monitors its disclosed content for the presence of rendered ",Object(o.mdx)("a",i({parentName:"p"},{href:"/terra-ui/application/terra-application/components/navigation-prompt"}),"NavigationPrompts"),"\nwithin its disclosed content. ModalManager will ensure that the user is prompted prior to dismissing the presented modal if any\n",Object(o.mdx)("a",i({parentName:"p"},{href:"/terra-ui/application/terra-application/components/navigation-prompt"}),"NavigationPrompts")," are rendered at the time of the dismissal request."),Object(o.mdx)("h2",{id:"details"},"Details"),Object(o.mdx)("h3",{id:"implementation-requirements"},"Implementation Requirements"),Object(o.mdx)("p",null,"The ModalManager utilizes the ",Object(o.mdx)("a",i({parentName:"p"},{href:"/terra-ui/application/terra-application/contexts/disclosure-manager-context"}),"DisclosureManagerContext")," to manage disclosure requests."),Object(o.mdx)("p",null,"The ModalManager responds to ",Object(o.mdx)("inlineCode",{parentName:"p"},'"modal"')," disclosure type requests. Components that wish to disclose content using the ModalManager\nshould provide a preferred type of ",Object(o.mdx)("inlineCode",{parentName:"p"},'"modal"'),"."),Object(o.mdx)("h3",{id:"disclosuremanagerheaderadapter-support"},"DisclosureManagerHeaderAdapter Support"),Object(o.mdx)("p",null,"If a component disclosed by the ModalManager renders a ",Object(o.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerHeaderAdapter"),", the ModalManager will render an ActionHeader\nand provide the standard disclosure navigation controls (close, go back, maximize/minimize, etc.) within it. The disclosed component\ncan use the ",Object(o.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerHeaderAdapter")," to inject its own title and CollapsibleButtonView into the ActionHeader."),Object(o.mdx)("p",null,"If the disclosed component does ",Object(o.mdx)("strong",{parentName:"p"},"not")," render a ",Object(o.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerHeaderAdapter"),", the ModalManager will ",Object(o.mdx)("strong",{parentName:"p"},"not")," render an ActionHeader itself.\nIn this case, it is assumed that the disclosed component is rendering its own header. The disclosed component is responsible for rendering\nthe appropriate controls to navigate the disclosure stack."),Object(o.mdx)("blockquote",null,Object(o.mdx)("p",{parentName:"blockquote"},"Note: The DisclosureManagerHeaderAdapter is the preferred way to present a header within the ModalManager.\nIn a future major release, the ModalManager will ",Object(o.mdx)("strong",{parentName:"p"},"always")," render the header and navigation controls, regardless of the presence of a DisclosureManagerHeaderAdapter.")),Object(o.mdx)("h3",{id:"disclosure-accessory"},"Disclosure Accessory"),Object(o.mdx)("p",null,"The ",Object(o.mdx)("inlineCode",{parentName:"p"},"disclosureAccessory")," prop allows consumers of the ModalManager to render a static component above the disclosed modal content.\nThe provided component will be rendered below the standard ActionHeader and above the disclosed content. This can be used to easily\nprovide additional context to every disclosed component. This component is provided once to the ModalManager instance, not on a per-disclosure basis,\nand each component in the disclosure stack will be decorated with the same accessory component."),Object(o.mdx)("h3",{id:"example"},"Example"),Object(o.mdx)("pre",null,Object(o.mdx)("code",i({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Button from 'terra-button';\nimport ModalManager, { disclosureType } from 'terra-application/lib/modal-manager';\nimport { withDisclosureManager, DisclosureManagerContext, DisclosureManagerHeaderAdapter } from 'terra-application/lib/disclosure-manager';\nimport CollapsibleMenuView from 'terra-collapsible-menu-view';\n\nconst ModalComponentB = () => (\n  <React.Fragment>\n    <DisclosureManagerHeaderAdapter\n      title=\"Modal Component B\"\n    />\n    <p>I am ModalComponentB!</p>\n  </React.Fragment>\n);\n\nconst ModalComponentA = () => {\n  const disclosureManager = React.useContext(DisclosureManagerContext);\n\n  return (\n    <div>\n      <DisclosureManagerHeaderAdapter\n        title=\"Modal Component A\"\n        collapsibleMenuView={<CollapsibleMenuView />}\n      />\n      <p>I am ModalComponentA!</p>\n      <Button\n        text=\"Disclose ModalComponentB\"\n        onClick={() => {\n          disclosureManager.disclose({\n            preferredType: 'modal',\n            size: 'large',\n            content: {\n              key: 'modal-component-b-instance',\n              component: <ModalComponentB />\n            }\n          });\n        }}\n      />\n    </div>\n  );\n}\n\nconst MyContentComponent = withDisclosureManager(({ disclosureManager }) => (\n  <div>\n    <p>I am MyContentComponent!</p>\n    <Button\n      text=\"Disclose ModalComponentA\"\n      onClick={() => {\n        disclosureManager.disclose({\n          preferredType: 'modal',\n          size: 'large',\n          content: {\n            key: 'modal-component-a-instance',\n            component: <ModalComponentA />\n          }\n        });\n      }}\n    />\n  </div>\n));\n\nMyContentComponent.propTypes = {\n  disclosureManager: disclosureManagerShape,\n}\n\nconst MyModalManagerComponent = () => (\n  <ModalManager\n    disclosureAccessory={<div>Disclosure Accessory</div>}\n  >\n    <MyContentComponent />\n  </ModalManager>\n);\n")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=389-58b4d1088f4abeee2253.js.map