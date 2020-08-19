(window.webpackJsonp=window.webpackJsonp||[]).push([[417],{3255:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));n(0);var a=n(365);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d={};function o(e){var t=e.components,n=r(e,["components"]);return Object(a.mdx)("wrapper",i({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",i({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\n\nconst DisclosureManagerContext = React.createContext();\n\nexport default DisclosureManagerContext;\n\n")))}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}o.isMDXComponent=!0;var c={};function m(e){var t=e.components,n=s(e,["components"]);return Object(a.mdx)("wrapper",l({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("h1",{id:"disclosuremanagercontext"},"DisclosureManagerContext"),Object(a.mdx)("p",null,"The DisclosureManagerContext defines an communication interface between the ModalManager/SlidePanelManager and application content."),Object(a.mdx)("blockquote",null,Object(a.mdx)("p",{parentName:"blockquote"},"Note: A DisclosureManagerContext.Provider is rendered by the ModalManager and SlidePanelManager. Any components rendered within\nthose managers (or disclosed by them) can access a DisclosureManagerContext value without rendering additional providers.")),Object(a.mdx)("h2",{id:"usage"},"Usage"),Object(a.mdx)("pre",null,Object(a.mdx)("code",l({parentName:"pre"},{className:"language-jsx"}),"import { DisclosureManagerContext } from 'terra-application/lib/disclosure-manager';\n")),Object(a.mdx)("h2",{id:"context-value"},"Context Value"),Object(a.mdx)(o,{mdxType:"ContextDefinition"}),Object(a.mdx)("h2",{id:"details"},"Details"),Object(a.mdx)("h3",{id:"disclosuremanagerheaderadapter"},"DisclosureManagerHeaderAdapter"),Object(a.mdx)("p",null,"Implementations of the DisclosureManager must render a header containing controls for the various disclosure management actions\n(close, back, maximize/minimize, etc.). The DisclosureManagerHeaderAdapter can be rendered by the disclosed content to inject\ntheir own component-specific contents into that header."),Object(a.mdx)("p",null,Object(a.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerHeaderAdapter")," Props:"),Object(a.mdx)("table",null,Object(a.mdx)("thead",{parentName:"table"},Object(a.mdx)("tr",{parentName:"thead"},Object(a.mdx)("th",l({parentName:"tr"},{align:null}),"Prop"),Object(a.mdx)("th",l({parentName:"tr"},{align:null}),"Is Required"),Object(a.mdx)("th",l({parentName:"tr"},{align:null}),"Description"))),Object(a.mdx)("tbody",{parentName:"table"},Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",l({parentName:"tr"},{align:null}),Object(a.mdx)("inlineCode",{parentName:"td"},"title")),Object(a.mdx)("td",l({parentName:"tr"},{align:null}),"optional"),Object(a.mdx)("td",l({parentName:"tr"},{align:null}),"A string to render as the header's title.")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",l({parentName:"tr"},{align:null}),Object(a.mdx)("inlineCode",{parentName:"td"},"collapsibleMenuView")),Object(a.mdx)("td",l({parentName:"tr"},{align:null}),"optional"),Object(a.mdx)("td",l({parentName:"tr"},{align:null}),"A CollapsibleMenuView component to render within the header.")))),Object(a.mdx)("pre",null,Object(a.mdx)("code",l({parentName:"pre"},{className:"language-jsx"}),"import { DisclosureManagerContext, DisclosureManagerHeaderAdapter } from 'terra-application/lib/disclosure-manager';\nimport CollapsibleMenuView from 'terra-collapsible-menu-view';\n\nconst MyDisclosureComponent = () => {\n  const disclosureManager = React.useContext(DisclosureManagerContext);\n\n  return (\n    <React.Fragment>\n      <DisclosureManagerHeaderAdapter\n        title=\"My Disclosure Component\"\n        collapsibleMenuView={<CollapsibleMenuView ... />}\n      />\n      <Button\n        text=\"Close Modal\"\n        onClick={() => {\n          disclosureManager.closeDisclosure();\n        }}\n      />\n    </React.Fragment>\n  );\n};\n")),Object(a.mdx)("h3",{id:"children"},"Children"),Object(a.mdx)("p",null,"The DisclosureManagerDelegate provided to the child components contains a ",Object(a.mdx)("inlineCode",{parentName:"p"},"disclose")," function. This ",Object(a.mdx)("inlineCode",{parentName:"p"},"disclose")," function\nvalidates the disclosure type with which it is provided against the set of supported disclosure types given to the DisclosureManager\nas a prop. If the provided type is not supported, and if the DisclosureManager detects another DisclosureManager higher in the\ncomponent hierarchy, the DisclosureManager will call the disclose function provided by that parent DisclosureManager instance."),Object(a.mdx)("p",null,"If the type is supported, the DisclosureManager will check the currently disclosed component's state to ensure it can be replaced.\nIf the disclosure is denied, then ",Object(a.mdx)("inlineCode",{parentName:"p"},"disclose")," returns a rejected Promise. If the disclosure is allowed, then a resolved Promise is returned.\nThis Promise will be resolved with an Object containing functions and Promises that can be used to manipulate the disclosure, if necessary.\nIncluded are ",Object(a.mdx)("inlineCode",{parentName:"p"},"dismissDisclosure"),", a function that will dismiss the disclosed content, and ",Object(a.mdx)("inlineCode",{parentName:"p"},"afterDismiss"),", a deferred Promise that will be\nresolved when the disclosed content is dismissed by any means. Alternatively, if the additional logic isn't needed, the returned Promise\ncan be completely ignored."),Object(a.mdx)("p",null,"Example:"),Object(a.mdx)("pre",null,Object(a.mdx)("code",l({parentName:"pre"},{className:"language-jsx"}),"disclosureManager.disclose({\n  preferredType: 'disclosure-type',\n  size: 'large',\n  content: {\n    key: 'my-disclosed-content',\n    component: <DisclosedContent />,\n  }\n}).then({ dismissDisclosure, afterDismiss } => {\n  this.myContentIsDisclosed = true;\n\n  // This function can be cached and triggered as needed.\n  this.myDismissFunction = dismissDisclosure;\n\n  afterDismiss.then(() => {\n    // The afterDismiss will resolve when the content is dismissed, allowing for\n    // cleanup of local state as needed.\n    this.myContentIsDisclosed = false;\n\n    // If the dismissDisclosure function was cached, make sure it gets cleaned up.\n    this.myDismissFunction = false;\n  })\n}).catch((e) => {\n  // If this function is executed, the disclosure has been denied. You can use this to\n  // clean up any state that may be reliant on the disclosure ocurring.\n})\n")),Object(a.mdx)("p",null,Object(a.mdx)("inlineCode",{parentName:"p"},"disclose")," Argument API:"),Object(a.mdx)("table",null,Object(a.mdx)("thead",{parentName:"table"},Object(a.mdx)("tr",{parentName:"thead"},Object(a.mdx)("th",l({parentName:"tr"},{align:null}),"Key"),Object(a.mdx)("th",l({parentName:"tr"},{align:null}),"Is Required"),Object(a.mdx)("th",l({parentName:"tr"},{align:null}),"Value"))),Object(a.mdx)("tbody",{parentName:"table"},Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",l({parentName:"tr"},{align:null}),Object(a.mdx)("inlineCode",{parentName:"td"},"preferredType")),Object(a.mdx)("td",l({parentName:"tr"},{align:null}),"optional"),Object(a.mdx)("td",l({parentName:"tr"},{align:null}),"The String describing the preferred disclosure type. This will be used to match the disclosure request to an appropriate DisclosureManager. Depending on the structuring of managers in a given component, the ",Object(a.mdx)("inlineCode",{parentName:"td"},"preferredType")," value may not be honored. If the provided ",Object(a.mdx)("inlineCode",{parentName:"td"},"preferredType")," is not supported by any present disclosure managers, the root disclosure manager will perform the disclosure using its own disclosure type, regardless of the ",Object(a.mdx)("inlineCode",{parentName:"td"},"preferredType")," value.")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",l({parentName:"tr"},{align:null}),Object(a.mdx)("inlineCode",{parentName:"td"},"size")),Object(a.mdx)("td",l({parentName:"tr"},{align:null}),"optional"),Object(a.mdx)("td",l({parentName:"tr"},{align:null}),"The String size desired for the disclosure. One of ",Object(a.mdx)("inlineCode",{parentName:"td"},"tiny"),", ",Object(a.mdx)("inlineCode",{parentName:"td"},"small"),", ",Object(a.mdx)("inlineCode",{parentName:"td"},"medium"),", ",Object(a.mdx)("inlineCode",{parentName:"td"},"large"),", ",Object(a.mdx)("inlineCode",{parentName:"td"},"huge"),", or ",Object(a.mdx)("inlineCode",{parentName:"td"},"fullscreen"),". The functional implementation of this size is determined by the rendering component. ",Object(a.mdx)("inlineCode",{parentName:"td"},"size")," should not be provided if ",Object(a.mdx)("inlineCode",{parentName:"td"},"dimensions")," are specified.")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",l({parentName:"tr"},{align:null}),Object(a.mdx)("inlineCode",{parentName:"td"},"dimensions")),Object(a.mdx)("td",l({parentName:"tr"},{align:null}),"optional"),Object(a.mdx)("td",l({parentName:"tr"},{align:null}),"An Object containing explicit ",Object(a.mdx)("inlineCode",{parentName:"td"},"height")," and ",Object(a.mdx)("inlineCode",{parentName:"td"},"width")," values for the disclosure. These values may not be honored due to the disclosure type or the available viewport size. ",Object(a.mdx)("inlineCode",{parentName:"td"},"dimensions")," should not be provided if a ",Object(a.mdx)("inlineCode",{parentName:"td"},"size")," is specified.",Object(a.mdx)("br",null),"Supported ",Object(a.mdx)("inlineCode",{parentName:"td"},"height")," values include: ",Object(a.mdx)("inlineCode",{parentName:"td"},"'240'"),", ",Object(a.mdx)("inlineCode",{parentName:"td"},"'420'"),", ",Object(a.mdx)("inlineCode",{parentName:"td"},"'600'"),", ",Object(a.mdx)("inlineCode",{parentName:"td"},"'690'"),", ",Object(a.mdx)("inlineCode",{parentName:"td"},"'780'"),", ",Object(a.mdx)("inlineCode",{parentName:"td"},"'870'"),", ",Object(a.mdx)("inlineCode",{parentName:"td"},"'960'"),", ",Object(a.mdx)("inlineCode",{parentName:"td"},"'1140'"),".",Object(a.mdx)("br",null),"Supported ",Object(a.mdx)("inlineCode",{parentName:"td"},"width")," values include: ",Object(a.mdx)("inlineCode",{parentName:"td"},"'320'"),", ",Object(a.mdx)("inlineCode",{parentName:"td"},"'480'"),", ",Object(a.mdx)("inlineCode",{parentName:"td"},"'560'"),", ",Object(a.mdx)("inlineCode",{parentName:"td"},"'640'"),", ",Object(a.mdx)("inlineCode",{parentName:"td"},"'800'"),", ",Object(a.mdx)("inlineCode",{parentName:"td"},"'960'"),", ",Object(a.mdx)("inlineCode",{parentName:"td"},"'1120'"),", ",Object(a.mdx)("inlineCode",{parentName:"td"},"'1280'"),", ",Object(a.mdx)("inlineCode",{parentName:"td"},"'1440'"),", ",Object(a.mdx)("inlineCode",{parentName:"td"},"'1600'"),", ",Object(a.mdx)("inlineCode",{parentName:"td"},"'1760'"),", ",Object(a.mdx)("inlineCode",{parentName:"td"},"'1920'"),".")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",l({parentName:"tr"},{align:null}),Object(a.mdx)("inlineCode",{parentName:"td"},"content")),Object(a.mdx)("td",l({parentName:"tr"},{align:null}),Object(a.mdx)("strong",{parentName:"td"},"required")),Object(a.mdx)("td",l({parentName:"tr"},{align:null}),"An Object containing a key and a component describing the component to be disclosed. See the ",Object(a.mdx)("inlineCode",{parentName:"td"},"content")," API below.")))),Object(a.mdx)("p",null,Object(a.mdx)("inlineCode",{parentName:"p"},"content")," Object API:"),Object(a.mdx)("table",null,Object(a.mdx)("thead",{parentName:"table"},Object(a.mdx)("tr",{parentName:"thead"},Object(a.mdx)("th",l({parentName:"tr"},{align:null}),"Key"),Object(a.mdx)("th",l({parentName:"tr"},{align:null}),"Is Required"),Object(a.mdx)("th",l({parentName:"tr"},{align:null}),"Value"))),Object(a.mdx)("tbody",{parentName:"table"},Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",l({parentName:"tr"},{align:null}),Object(a.mdx)("inlineCode",{parentName:"td"},"key")),Object(a.mdx)("td",l({parentName:"tr"},{align:null}),Object(a.mdx)("strong",{parentName:"td"},"required")),Object(a.mdx)("td",l({parentName:"tr"},{align:null}),"A String key identifying the component to the DisclosureManager. This key must be unique amongst the set of all actively disclosed component keys.")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",l({parentName:"tr"},{align:null}),Object(a.mdx)("inlineCode",{parentName:"td"},"component")),Object(a.mdx)("td",l({parentName:"tr"},{align:null}),Object(a.mdx)("strong",{parentName:"td"},"required")),Object(a.mdx)("td",l({parentName:"tr"},{align:null}),"A React element that will be disclosed.")))),Object(a.mdx)("h3",{id:"disclosure-content"},"Disclosure Content"),Object(a.mdx)("p",null,"In addition to a ",Object(a.mdx)("inlineCode",{parentName:"p"},"disclose")," function, a number of other functions are exposed to components rendered in the disclosure mechanism to manage various segments of the disclosure state. The included functions are:"),Object(a.mdx)("table",null,Object(a.mdx)("thead",{parentName:"table"},Object(a.mdx)("tr",{parentName:"thead"},Object(a.mdx)("th",l({parentName:"tr"},{align:null}),"Function"),Object(a.mdx)("th",l({parentName:"tr"},{align:null}),"Description"))),Object(a.mdx)("tbody",{parentName:"table"},Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",l({parentName:"tr"},{align:null}),Object(a.mdx)("inlineCode",{parentName:"td"},"disclose")),Object(a.mdx)("td",l({parentName:"tr"},{align:null}),"Allows a component to disclose another component. See above for argument API. The DisclosureManager implementation will determine how the next object will be disclosed.")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",l({parentName:"tr"},{align:null}),Object(a.mdx)("inlineCode",{parentName:"td"},"dismiss")),Object(a.mdx)("td",l({parentName:"tr"},{align:null}),"Allows a component to remove itself from the disclosure stack. If the component is the only element in the disclosure stack, the disclosure is closed.")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",l({parentName:"tr"},{align:null}),Object(a.mdx)("inlineCode",{parentName:"td"},"closeDisclosure")),Object(a.mdx)("td",l({parentName:"tr"},{align:null}),"Allows a component to close the entire disclosure stack. This is generally integrated into face-up disclosure controls as a Close button or similar.")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",l({parentName:"tr"},{align:null}),Object(a.mdx)("inlineCode",{parentName:"td"},"goBack")),Object(a.mdx)("td",l({parentName:"tr"},{align:null}),"Allows a component to remove itself from the disclosure stack. Functionally similar to ",Object(a.mdx)("inlineCode",{parentName:"td"},"dismiss"),", however ",Object(a.mdx)("inlineCode",{parentName:"td"},"onBack")," is only provided to components in the stack that have a previous sibling. This is generally integrated into face-up disclosure controls as a Back button or similar.")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",l({parentName:"tr"},{align:null}),Object(a.mdx)("inlineCode",{parentName:"td"},"maximize")),Object(a.mdx)("td",l({parentName:"tr"},{align:null}),"Allows a component to maximize its presentation size. This is only provided if the component is not already maximized.")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",l({parentName:"tr"},{align:null}),Object(a.mdx)("inlineCode",{parentName:"td"},"minimize")),Object(a.mdx)("td",l({parentName:"tr"},{align:null}),"Allows a component to minimize its presentation size. This is only provided if the component is currently maximized.")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",l({parentName:"tr"},{align:null}),Object(a.mdx)("inlineCode",{parentName:"td"},"requestFocus")),Object(a.mdx)("td",l({parentName:"tr"},{align:null}),"Allows a component to request focus from the disclosure in the event that the disclosure mechanism in use utilizes a focus trap. This can be integrated with the Popup and similar focus-stealing controls.")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",l({parentName:"tr"},{align:null}),Object(a.mdx)("inlineCode",{parentName:"td"},"releaseFocus")),Object(a.mdx)("td",l({parentName:"tr"},{align:null}),"Allows a component to release focus from itself and return it to the disclosure. This can be integrated with the Popup and similar focus-stealing controls.")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",l({parentName:"tr"},{align:null}),Object(a.mdx)("inlineCode",{parentName:"td"},"registerDismissCheck")),Object(a.mdx)("td",l({parentName:"tr"},{align:null}),"Allows a component to register a function with the DisclosureManager that will be called before the component is dismissed. Calling this function will override the default implementation that checks for the presence of NavigationPrompts.")))),Object(a.mdx)("p",null,"Each of these functions returns a Promise that can be used for chaining, if necessary."),Object(a.mdx)("h4",{id:"a-note-on-registerdismisscheck"},"A Note on ",Object(a.mdx)("inlineCode",{parentName:"h4"},"registerDismissCheck")),Object(a.mdx)("p",null,"By default, the DisclosureManager monitors its disclosed content for the presence of ",Object(a.mdx)("a",l({parentName:"p"},{href:"/terra-ui/application/terra-application/components/navigation-prompt"}),"NavigationPrompts"),".\nThe user will be prompted if they attempt to close the dismiss the disclosure while NavigationPrompts are present."),Object(a.mdx)("p",null,"If the modal content calls ",Object(a.mdx)("inlineCode",{parentName:"p"},"registerDismissCheck")," to add its own pre-dismissal logic, the default NavigationPrompt handling will be ",Object(a.mdx)("strong",{parentName:"p"},"disabled"),".\nAny component that uses ",Object(a.mdx)("inlineCode",{parentName:"p"},"registerDismissCheck")," should check for the presence of NavigationPrompts (using a ",Object(a.mdx)("a",l({parentName:"p"},{href:"/terra-ui/application/terra-application/components/navigation-prompt-checkpoint"}),"NavigationPromptCheckpoint"),")\nin addition to whatever custom logic is required."),Object(a.mdx)("p",null,"Given this complexity, usage of the ",Object(a.mdx)("inlineCode",{parentName:"p"},"registerDismissCheck")," API is ",Object(a.mdx)("strong",{parentName:"p"},"not recommended"),"."),Object(a.mdx)("p",null,"The function provided to ",Object(a.mdx)("inlineCode",{parentName:"p"},"registerDismissCheck")," must return a resolved or rejected Promise.\nIf the Promise is resolved, the component is guaranteed to be dismissed.\nIf cleanup logic needs to execute before the component is dismissed, it is a good idea to execute before returning the resolved Promise.\nIf a rejected Promise is returned, the component will not be dismissed."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=417-ffb498da48d29181102e.js.map