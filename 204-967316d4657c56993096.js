(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{1583:function(e,t,n){"use strict";var r=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(177)),i=r(n(26)),u=r(n(27)),l=function(){function e(){(0,i.default)(this,e)}return(0,u.default)(e,null,[{key:"isUnderMaxLength",value:function(e,t){return!(!("string"==typeof e||e instanceof String)||"number"!=typeof t||!isFinite(t)||t<0||!Number.isInteger(t))&&e.length<=t}},{key:"isOverMinLength",value:function(e,t){return!(!("string"==typeof e||e instanceof String)||"number"!=typeof t||!isFinite(t)||t<0||!Number.isInteger(t))&&e.length>=t}},{key:"hasNoWhitespace",value:function(e){return("string"==typeof e||e instanceof String)&&!/\s/.test(e)}},{key:"containsCharacters",value:function(e,t){if(!("string"==typeof e||e instanceof String)||!t||"object"!==(0,a.default)(t)||t.constructor!==Array)return!1;for(var n=0;n<t.length;n+=1)if(e.includes(t[n]))return!0;return!1}},{key:"isOverMinValue",value:function(e,t){return!(!("string"==typeof e||e instanceof String)||"number"!=typeof t||!isFinite(t))&&e>=t}},{key:"isUnderMaxValue",value:function(e,t){return!(!("string"==typeof e||e instanceof String)||"number"!=typeof t||!isFinite(t))&&e<=t}},{key:"isPrecise",value:function(e,t){if(!("string"==typeof e||e instanceof String)||"number"!=typeof t||!isFinite(t)||t<0||!Number.isInteger(t))return!1;var n=e.split(".");return!(2===n.length&&n[1].length>t)}},{key:"isNonnegative",value:function(e){return("string"==typeof e||e instanceof String)&&parseFloat(e)>=0}}]),e}();t.default=l},2211:function(e,t,n){"use strict";var r=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(26)),i=r(n(27)),u=r(n(31)),l=r(n(28)),o=r(n(29)),s=r(n(30)),m=r(n(1341)),c=r(n(1342)),d=r(n(0)),p=n(1033),f=r(n(1029)),b=r(n(57)),v=r(n(367));function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,s.default)(e);if(t){var a=(0,s.default)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,o.default)(this,n)}}var g=function(){var e=(0,c.default)(m.default.mark((function e(t){var n;return m.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Promise((function(e){return e(t?"TerraUser"!==t?"":"Name is Unavailable":"Required")})),e.next=3,n;case 3:return e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(e){(0,l.default)(n,e);var t=h(n);function n(e){var r;return(0,a.default)(this,n),(r=t.call(this,e)).state={},r.submitForm=r.submitForm.bind((0,u.default)(r)),r}return(0,i.default)(n,[{key:"submitForm",value:function(e){this.setState({submittedValues:e})}},{key:"renderForm",value:function(e){var t=e.handleSubmit;return d.default.createElement("form",{noValidate:!0,onSubmit:t},d.default.createElement(p.Field,{name:"user_name",validate:g},(function(e){var t=e.input,n=e.meta;return d.default.createElement(f.default,{inputId:"user-name-async",label:"User Name",error:n.error,help:"TerraUser is unavailable. Use this name to test async",isInvalid:n.submitFailed&&void 0!==n.error,onChange:function(e){t.onChange(e.target.value)},inputAttrs:t,value:t.value,required:!0})})),d.default.createElement(b.default,{text:"Submit",type:b.default.Opts.Types.SUBMIT}))}},{key:"render",value:function(){return d.default.createElement(v.default,{marginBottom:"small"},d.default.createElement(p.Form,{onSubmit:this.submitForm,render:this.renderForm,validateOnBlur:!0}),this.state.submittedValues&&d.default.createElement("div",null,d.default.createElement("p",null,"Form Submitted Successfully With"),d.default.createElement("pre",null,JSON.stringify(this.state.submittedValues,0,2))))}}]),n}(d.default.Component);t.default=x},2212:function(e,t,n){"use strict";var r=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(26)),i=r(n(27)),u=r(n(31)),l=r(n(28)),o=r(n(29)),s=r(n(30)),m=r(n(0)),c=n(1033),d=r(n(1029)),p=r(n(57)),f=r(n(367));function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,s.default)(e);if(t){var a=(0,s.default)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,o.default)(this,n)}}var v=function(e){return e?e.replace(/[^\d]/g,""):e},h=function(e){if(!e)return e;var t=e.replace(/[^\d]/g,"");return t.length<=3?t:t.length<=7?"(".concat(t.slice(0,3),") ").concat(t.slice(3)):"(".concat(t.slice(0,3),") ").concat(t.slice(3,6),"-").concat(t.slice(6,10))},g=function(e){return e?void 0:"Required"},x=function(e){(0,l.default)(n,e);var t=b(n);function n(e){var r;return(0,a.default)(this,n),(r=t.call(this,e)).state={},r.submitForm=r.submitForm.bind((0,u.default)(r)),r}return(0,i.default)(n,[{key:"submitForm",value:function(e){this.setState({submittedValues:e})}},{key:"renderForm",value:function(e){var t=e.handleSubmit,n=e.pristine,r=e.invalid;return m.default.createElement("form",{noValidate:!0,onSubmit:t},m.default.createElement(c.Field,{name:"vacation_days",validate:g,parse:v},(function(e){var t=e.input,n=e.meta;return m.default.createElement(d.default,{inputId:"vacation-days",label:"Vacation Days Remaining",error:n.error,isInvalid:n.submitFailed&&!n.valid,inputAttrs:t,onChange:function(e){t.onChange(e.target.value)},value:t.value,required:!0})})),m.default.createElement(c.Field,{name:"phone_number",validate:g,parse:h},(function(e){var t=e.input,n=e.meta;return m.default.createElement(d.default,{inputId:"phone-number",label:"Phone Number",error:n.error,isInvalid:n.submitFailed&&!n.valid,inputAttrs:t,onChange:function(e){t.onChange(e.target.value)},value:t.value,required:!0})})),m.default.createElement(p.default,{text:"Submit",isDisabled:r||n,type:p.default.Opts.Types.SUBMIT}))}},{key:"render",value:function(){return m.default.createElement(f.default,{marginBottom:"small"},m.default.createElement(c.Form,{onSubmit:this.submitForm,render:this.renderForm}),this.state.submittedValues&&m.default.createElement("div",null,m.default.createElement("p",null,"Form Submitted Successfully With"),m.default.createElement("pre",null,JSON.stringify(this.state.submittedValues,0,2))))}}]),n}(m.default.Component);t.default=x},2213:function(e,t,n){"use strict";var r=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(136)),i=r(n(26)),u=r(n(27)),l=r(n(31)),o=r(n(28)),s=r(n(29)),m=r(n(30)),c=r(n(0)),d=n(1033),p=r(n(1029)),f=r(n(57)),b=r(n(367)),v=r(n(1583));function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,a.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,m.default)(e);if(t){var a=(0,m.default)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,s.default)(this,n)}}var y=function(e){return v.default.isOverMinValue(e,10)?v.default.isUnderMaxValue(e,100)?v.default.isPrecise(e,3)?void 0:"Value has more than 3 decimal points":"Value should not be over 100.":"Value should not be less than 10."},O=function(e){(0,o.default)(n,e);var t=x(n);function n(e){var r;return(0,i.default)(this,n),(r=t.call(this,e)).state={},r.submitForm=r.submitForm.bind((0,l.default)(r)),r}return(0,u.default)(n,[{key:"submitForm",value:function(e){this.setState({submittedValues:e})}},{key:"renderForm",value:function(e){var t=e.handleSubmit;return c.default.createElement("form",{noValidate:!0,onSubmit:t},c.default.createElement(d.Field,{name:"numExample",validate:y},(function(e){var t=e.input,n=e.meta;return c.default.createElement(p.default,{inputId:"numExample",label:"Numeric Example",error:n.error,isInvalid:void 0!==n.error,inputAttrs:g({type:"number"},t),onChange:function(e){t.onChange(e.target.value)},value:t.value,required:!0})})),c.default.createElement(f.default,{text:"Submit",type:f.default.Opts.Types.SUBMIT}))}},{key:"render",value:function(){return c.default.createElement(b.default,{marginBottom:"small"},c.default.createElement(d.Form,{onSubmit:this.submitForm,render:this.renderForm,initialValues:{numExample:""},validate:function(e){var t={};return e.numExample||(t.numExample="Required"),t}}),this.state.submittedValues&&c.default.createElement("div",null,c.default.createElement("p",null,"Form Submitted Successfully With"),c.default.createElement("pre",null,JSON.stringify(this.state.submittedValues,0,2))))}}]),n}(c.default.Component);t.default=O},2214:function(e,t,n){"use strict";var r=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(26)),i=r(n(27)),u=r(n(31)),l=r(n(28)),o=r(n(29)),s=r(n(30)),m=r(n(0)),c=n(1033),d=r(n(1029)),p=r(n(57)),f=r(n(367)),b=r(n(1583));function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,s.default)(e);if(t){var a=(0,s.default)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,o.default)(this,n)}}var h=function(e){if(!b.default.isUnderMaxLength(e,8))return"Name needs to be less than 9 characters long"},g=function(e){(0,l.default)(n,e);var t=v(n);function n(e){var r;return(0,a.default)(this,n),(r=t.call(this,e)).state={},r.submitForm=r.submitForm.bind((0,u.default)(r)),r}return(0,i.default)(n,[{key:"submitForm",value:function(e){this.setState({submittedValues:e})}},{key:"renderForm",value:function(e){var t=e.handleSubmit;return m.default.createElement("form",{noValidate:!0,onSubmit:t},m.default.createElement(c.Field,{name:"example",validate:h},(function(e){var t=e.input,n=e.meta;return m.default.createElement(d.default,{inputId:"example",label:"Example",error:n.error,isInvalid:void 0!==n.error,inputAttrs:t,onChange:function(e){t.onChange(e.target.value)},value:t.value,required:!0})})),m.default.createElement(p.default,{text:"Submit",type:p.default.Opts.Types.SUBMIT}))}},{key:"render",value:function(){return m.default.createElement(f.default,{marginBottom:"small"},m.default.createElement(c.Form,{onSubmit:this.submitForm,render:this.renderForm,initialValues:{example:""},validate:function(e){var t={};return e.example||(t.example="Required"),t}}),this.state.submittedValues&&m.default.createElement("div",null,m.default.createElement("p",null,"Form Submitted Successfully With"),m.default.createElement("pre",null,JSON.stringify(this.state.submittedValues,0,2))))}}]),n}(m.default.Component);t.default=g},3113:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return L}));var r=n(0),a=n.n(r),i=n(365),u=n(1273),l=n(2211),o=n.n(l);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c={};function d(e){var t=e.components,n=m(e,["components"]);return Object(i.mdx)("wrapper",s({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",s({parentName:"pre"},{className:"language-jsx"}),"/* eslint-disable class-methods-use-this */\n\nimport React from 'react';\nimport { Form, Field } from 'react-final-form';\nimport InputField from 'terra-form-input/lib/InputField';\nimport Button from 'terra-button';\nimport Spacer from 'terra-spacer';\n\nconst validateUniqueUser = async (name) => {\n  const response = new Promise((resolve) => {\n    if (!name) {\n      return resolve('Required');\n    }\n    if (name !== 'TerraUser') {\n      return resolve('');\n    }\n\n    return resolve('Name is Unavailable');\n  });\n\n  await response;\n  return response;\n};\n\nexport default class MainEntry extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {};\n    this.submitForm = this.submitForm.bind(this);\n  }\n\n  submitForm(values) {\n    this.setState({\n      submittedValues: values,\n    });\n  }\n\n  renderForm({ handleSubmit }) {\n    return (\n      <form\n        noValidate\n        onSubmit={handleSubmit}\n      >\n        <Field\n          name=\"user_name\"\n          validate={validateUniqueUser}\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId=\"user-name-async\"\n              label=\"User Name\"\n              error={meta.error}\n              help=\"TerraUser is unavailable. Use this name to test async\"\n              isInvalid={meta.submitFailed && meta.error !== undefined}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              inputAttrs={input}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <Button text=\"Submit\" type={Button.Opts.Types.SUBMIT} />\n      </form>\n    );\n  }\n\n  render() {\n    return (\n      <Spacer marginBottom=\"small\">\n        <Form\n          onSubmit={this.submitForm}\n          render={this.renderForm}\n          validateOnBlur\n        />\n        {this.state.submittedValues\n          && (\n          <div>\n            <p>Form Submitted Successfully With</p>\n            <pre>{JSON.stringify(this.state.submittedValues, 0, 2)}</pre>\n          </div>\n          )}\n      </Spacer>\n    );\n  }\n}\n\n")))}d.isMDXComponent=!0;var p=n(1010),f=n.n(p),b=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:t||"Validation Asynchronous",description:n,example:a.a.createElement(o.a,null),exampleSrc:a.a.createElement(d,null),isExpanded:r})},v=n(2212),h=n.n(v);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var y={};function O(e){var t=e.components,n=x(e,["components"]);return Object(i.mdx)("wrapper",g({},y,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",g({parentName:"pre"},{className:"language-jsx"}),"/* eslint-disable class-methods-use-this */\n\nimport React from 'react';\nimport { Form, Field } from 'react-final-form';\nimport InputField from 'terra-form-input/lib/InputField';\nimport Button from 'terra-button';\nimport Spacer from 'terra-spacer';\n\nconst numericOnly = (value) => {\n  if (!value) return value;\n  const onlyNums = value.replace(/[^\\d]/g, '');\n  return onlyNums;\n};\n\nconst enforcePhoneNumber = (value) => {\n  if (!value) return value;\n  const onlyNums = value.replace(/[^\\d]/g, '');\n  if (onlyNums.length <= 3) return onlyNums;\n  if (onlyNums.length <= 7) return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3)}`;\n\n  return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3, 6)}-${onlyNums.slice(\n    6,\n    10,\n  )}`;\n};\n\nconst required = value => (value ? undefined : 'Required');\n\nexport default class MainEntry extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {};\n    this.submitForm = this.submitForm.bind(this);\n  }\n\n  submitForm(values) {\n    this.setState({\n      submittedValues: values,\n    });\n  }\n\n  renderForm({ handleSubmit, pristine, invalid }) {\n    return (\n      <form\n        noValidate\n        onSubmit={handleSubmit}\n      >\n        <Field\n          name=\"vacation_days\"\n          validate={required}\n          parse={numericOnly}\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId=\"vacation-days\"\n              label=\"Vacation Days Remaining\"\n              error={meta.error}\n              isInvalid={meta.submitFailed && !meta.valid}\n              inputAttrs={input}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <Field\n          name=\"phone_number\"\n          validate={required}\n          parse={enforcePhoneNumber}\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId=\"phone-number\"\n              label=\"Phone Number\"\n              error={meta.error}\n              isInvalid={meta.submitFailed && !meta.valid}\n              inputAttrs={input}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <Button text=\"Submit\" isDisabled={invalid || pristine} type={Button.Opts.Types.SUBMIT} />\n      </form>\n    );\n  }\n\n  render() {\n    return (\n      <Spacer marginBottom=\"small\">\n        <Form\n          onSubmit={this.submitForm}\n          render={this.renderForm}\n        />\n        {this.state.submittedValues\n          && (\n          <div>\n            <p>Form Submitted Successfully With</p>\n            <pre>{JSON.stringify(this.state.submittedValues, 0, 2)}</pre>\n          </div>\n          )}\n      </Spacer>\n    );\n  }\n}\n\n")))}O.isMDXComponent=!0;var j=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:t||"Validation Parsing",description:n,example:a.a.createElement(h.a,null),exampleSrc:a.a.createElement(O,null),isExpanded:r})},F=n(2213),S=n.n(F);function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function E(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var V={};function w(e){var t=e.components,n=E(e,["components"]);return Object(i.mdx)("wrapper",N({},V,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",N({parentName:"pre"},{className:"language-jsx"}),"/* eslint-disable class-methods-use-this */\n\nimport React from 'react';\nimport { Form, Field } from 'react-final-form';\nimport InputField from 'terra-form-input/lib/InputField';\nimport Button from 'terra-button';\nimport Spacer from 'terra-spacer';\nimport FormValidationUtil from '../../../FormValidationUtil';\n\nconst validateNumber = (value) => {\n  if (!FormValidationUtil.isOverMinValue(value, 10)) {\n    return 'Value should not be less than 10.';\n  }\n  if (!FormValidationUtil.isUnderMaxValue(value, 100)) {\n    return 'Value should not be over 100.';\n  }\n  if (!FormValidationUtil.isPrecise(value, 3)) {\n    return 'Value has more than 3 decimal points';\n  }\n\n  return undefined;\n};\n\nexport default class Example extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {};\n    this.submitForm = this.submitForm.bind(this);\n  }\n\n  submitForm(values) {\n    this.setState({\n      submittedValues: values,\n    });\n  }\n\n  renderForm({ handleSubmit }) {\n    return (\n      <form\n        noValidate\n        onSubmit={handleSubmit}\n      >\n        <Field\n          name=\"numExample\"\n          validate={validateNumber}\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId=\"numExample\"\n              label=\"Numeric Example\"\n              error={meta.error}\n              isInvalid={meta.error !== undefined}\n              inputAttrs={{\n                type: 'number',\n                ...input,\n              }}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <Button text=\"Submit\" type={Button.Opts.Types.SUBMIT} />\n      </form>\n    );\n  }\n\n  render() {\n    return (\n      <Spacer marginBottom=\"small\">\n        <Form\n          onSubmit={this.submitForm}\n          render={this.renderForm}\n          initialValues={{ numExample: '' }}\n          validate={(values) => {\n            const errors = {};\n\n            if (!values.numExample) {\n              errors.numExample = 'Required';\n            }\n\n            return errors;\n          }}\n        />\n        {this.state.submittedValues\n          && (\n          <div>\n            <p>Form Submitted Successfully With</p>\n            <pre>{JSON.stringify(this.state.submittedValues, 0, 2)}</pre>\n          </div>\n          )}\n      </Spacer>\n    );\n  }\n}\n\n")))}w.isMDXComponent=!0;var C=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:t||"Numeric Validation",description:n,example:a.a.createElement(S.a,null),exampleSrc:a.a.createElement(w,null),isExpanded:r})},I=n(2214),U=n.n(I);function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function P(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var k={};function R(e){var t=e.components,n=P(e,["components"]);return Object(i.mdx)("wrapper",M({},k,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",M({parentName:"pre"},{className:"language-jsx"}),"/* eslint-disable class-methods-use-this */\n\nimport React from 'react';\nimport { Form, Field } from 'react-final-form';\nimport InputField from 'terra-form-input/lib/InputField';\nimport Button from 'terra-button';\nimport Spacer from 'terra-spacer';\nimport FormValidationUtil from '../../../FormValidationUtil';\n\nconst validateLength = (name) => {\n  if (!FormValidationUtil.isUnderMaxLength(name, 8)) {\n    return 'Name needs to be less than 9 characters long';\n  }\n\n  return undefined;\n};\n\nexport default class Example extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {};\n    this.submitForm = this.submitForm.bind(this);\n  }\n\n  submitForm(values) {\n    this.setState({\n      submittedValues: values,\n    });\n  }\n\n  renderForm({ handleSubmit }) {\n    return (\n      <form\n        noValidate\n        onSubmit={handleSubmit}\n      >\n        <Field\n          name=\"example\"\n          validate={validateLength}\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId=\"example\"\n              label=\"Example\"\n              error={meta.error}\n              isInvalid={meta.error !== undefined}\n              inputAttrs={input}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <Button text=\"Submit\" type={Button.Opts.Types.SUBMIT} />\n      </form>\n    );\n  }\n\n  render() {\n    return (\n      <Spacer marginBottom=\"small\">\n        <Form\n          onSubmit={this.submitForm}\n          render={this.renderForm}\n          initialValues={{ example: '' }}\n          validate={(values) => {\n            const errors = {};\n\n            if (!values.example) {\n              errors.example = 'Required';\n            }\n\n            return errors;\n          }}\n        />\n        {this.state.submittedValues\n          && (\n          <div>\n            <p>Form Submitted Successfully With</p>\n            <pre>{JSON.stringify(this.state.submittedValues, 0, 2)}</pre>\n          </div>\n          )}\n      </Spacer>\n    );\n  }\n}\n\n")))}R.isMDXComponent=!0;var T=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:t||"Max Length Input",description:n,example:a.a.createElement(U.a,null),exampleSrc:a.a.createElement(R,null),isExpanded:r})};function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function q(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var D={};function L(e){var t=e.components,n=q(e,["components"]);return Object(i.mdx)("wrapper",B({},D,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)(u.a,{mdxType:"Badge"}),Object(i.mdx)("h1",{id:"validation-functions"},"Validation Functions"),Object(i.mdx)("p",null,Object(i.mdx)("em",{parentName:"p"},"react-final-form")," gives you the ability to create your own validation functions. For custom validations, the idea is that a message will be returned if the function finds an error with the form input value, or returns undefined if no errors are detected for the given input value."),Object(i.mdx)("h2",{id:"asynchronous-validations"},"Asynchronous Validations"),Object(i.mdx)("p",null,"There maybe times you need to do remote validations such as Unique Username checks. To best handle this scenario with wide browser support, an OnBlurValidation can be added to a component, where the function takes in two parameters: the value of the input, and a callback setError that sets the error status of the input."),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"Note")),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"If you need to run this in IE11, the ",Object(i.mdx)("a",B({parentName:"li"},{href:"https://www.npmjs.com/package/babel-plugin-transform-async-to-generator"}),"transform-async-to-generator")," plugin needs to be added to your .babelrc file."),Object(i.mdx)("li",{parentName:"ul"},"The promise can be any kind of promise, including calls with axios and other libraries.")),Object(i.mdx)("h1",{id:"parsing"},"Parsing"),Object(i.mdx)("p",null,"Form inputs can be parsed to ensure input values follow specific formats. This could be useful when you want to restrict numeric inputs to only allow users to enter in digits, and force formating of phone numbers."),Object(i.mdx)("p",null,"Consult ",Object(i.mdx)("a",B({parentName:"p"},{href:"https://github.com/final-form/react-final-form"}),"react-final-form")," for further functionality that can be used."),Object(i.mdx)("h2",{id:"formvalidationutil-class"},"FormValidationUtil Class"),Object(i.mdx)("p",null,"In order to make creating form validation functions easier, we have a FormValidationUtil class in the ",Object(i.mdx)("inlineCode",{parentName:"p"},"terra-form-validation")," package. It contains the following functions."),Object(i.mdx)("h4",{id:"isundermaxlength"},"isUnderMaxLength"),Object(i.mdx)("pre",null,Object(i.mdx)("code",B({parentName:"pre"},{className:"language-javascript"}),"FormValidationUtil.isUnderMaxValue(value, maximum)\n")),Object(i.mdx)("p",null,"Checks given value's length against maximum. Returns true if value's length is less than the maximum."),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"value")," is the value string"),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"maximum")," is a nonnegative whole number.")),Object(i.mdx)("h4",{id:"isoverminlength"},"isOverMinLength"),Object(i.mdx)("pre",null,Object(i.mdx)("code",B({parentName:"pre"},{className:"language-javascript"}),"FormValidationUtil.isOverMinLength(value, minimum)\n")),Object(i.mdx)("p",null,"Checks given value's length against minimum. Returns true if value's length is greater than the minimum."),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"value")," is the value string"),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"minimum")," is a nonnegative whole number.")),Object(i.mdx)("h4",{id:"hasnowhitespace"},"hasNoWhitespace"),Object(i.mdx)("pre",null,Object(i.mdx)("code",B({parentName:"pre"},{className:"language-javascript"}),"FormValidationUtil.hasNoWhitespace(value)\n")),Object(i.mdx)("p",null,"Checks given value for extraneous whitespace. return true if there is no whitespace."),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"value")," is the value string")),Object(i.mdx)("h4",{id:"containscharacters"},"containsCharacters"),Object(i.mdx)("pre",null,Object(i.mdx)("code",B({parentName:"pre"},{className:"language-javascript"}),"FormValidationUtil.containsCharacters(value, chars)\n")),Object(i.mdx)("p",null,"Checks given value for any string in given array. return true if value does not contain any of them."),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"value")," is the value string"),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"chars")," is an array of strings")),Object(i.mdx)("h4",{id:"isoverminvalue"},"isOverMinValue"),Object(i.mdx)("pre",null,Object(i.mdx)("code",B({parentName:"pre"},{className:"language-javascript"}),"FormValidationUtil.isOverMinValue(value, minimum)\n")),Object(i.mdx)("p",null,"Checks given value against a minimum value. Returns true if value is greater then or equal to the minimum"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"value")," is the value string"),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"minimum")," is the minimum numeric value")),Object(i.mdx)("h4",{id:"isundermaxvalue"},"isUnderMaxValue"),Object(i.mdx)("pre",null,Object(i.mdx)("code",B({parentName:"pre"},{className:"language-javascript"}),"FormValidationUtil.isUnderMaxValue(value, maximum)\n")),Object(i.mdx)("p",null,"Checks given value against a maximum value. Returns true if value is less then or equal to the maximum"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"value")," is the value string"),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"maximum")," is the maximum numeric value")),Object(i.mdx)("h4",{id:"isprecise"},"isPrecise"),Object(i.mdx)("pre",null,Object(i.mdx)("code",B({parentName:"pre"},{className:"language-javascript"}),"FormValidationUtil.isPrecise(value, precision)\n")),Object(i.mdx)("p",null,"Checks given value for a specific level of precision. Returns true if value has less than or an equal amount of precision"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"value")," is the value string"),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"precision")," is a nonnegative whole number")),Object(i.mdx)("h4",{id:"isnonnegative"},"isNonnegative"),Object(i.mdx)("pre",null,Object(i.mdx)("code",B({parentName:"pre"},{className:"language-javascript"}),"FormValidationUtil.isNonnegative(value)\n")),Object(i.mdx)("p",null,"Checks given value for if it is a negative value. Returns true if it is nonnegative."),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"value")," is the value string")),Object(i.mdx)("h2",{id:"examples"},"Examples"),Object(i.mdx)(b,{title:"Asynchronous Function",mdxType:"ValidationAsynchronous"}),Object(i.mdx)(j,{title:"Parsing Function",mdxType:"ValidationParsing"}),Object(i.mdx)(C,{title:"Numeric Validations",description:"Making a Numeric Input With Minimum, Maximum, and Precision Validations",mdxType:"NumericValidation"}),Object(i.mdx)(T,{title:"Max Length Input",description:"Making an Input With a Maximum Length",mdxType:"TestFormValidation"}))}L.isMDXComponent=!0}}]);
//# sourceMappingURL=204-967316d4657c56993096.js.map