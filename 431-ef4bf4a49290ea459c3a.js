(window.webpackJsonp=window.webpackJsonp||[]).push([[431],{3026:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));n(0);var r=n(365);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={};function c(e){var t=e.components,n=o(e,["components"]);return Object(r.mdx)("wrapper",a({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("h1",{id:"webpack-config"},"Webpack Config"),Object(r.mdx)("p",null,Object(r.mdx)("a",a({parentName:"p"},{href:"https://github.com/cerner/terra-dev-site/blob/main/config/webpack/terra-dev-site.webpack.config.js"}),"This webpack config")," is the entry point for spinning up terra-dev-site. By either extending or using directly terra-dev-site's webpack config, the site will render with either the custom or default site config."),Object(r.mdx)("p",null,"Because terra-dev-site's webpack config is a function, we recommend the usage of webpack-merge to extend the config."),Object(r.mdx)("p",null,"Here is an example where we extend the default config to alias moment:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",a({parentName:"pre"},{className:"language-javascript"}),"const path = require('path');\nconst merge = require('webpack-merge');\nconst defaultWebpackConfig = require('terra-dev-site/config/webpack/webpack.config');\n\nconst config = () => {\n  const momentAlias = path.resolve(process.cwd(), 'node_modules', 'moment');\n\n  return {\n    resolve: {\n      alias: {\n        moment: momentAlias,\n      },\n    },\n  };\n};\n\nconst mergedConfig = (env, argv) => (\n  merge(defaultWebpackConfig(env, argv), config())\n);\n\nmodule.exports = mergedConfig;\n")),Object(r.mdx)("h2",{id:"points-of-interest"},"Points of interest"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},"Extends ",Object(r.mdx)("a",a({parentName:"p"},{href:"https://github.com/cerner/terra-toolkit-boneyard/blob/main/config/webpack/webpack.config.js"}),"terra-toolkit webpack config"),".")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},"Entrypoint is defaulted to the index page in terra-dev-site.")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},"HtmlWebpackPlugin will run to configure the default index.html in terra-dev-site")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},"A resolve entry will be added to find the generated config.")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},"If you're a mono-repo your package repos will automatically be aliased."))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=431-ef4bf4a49290ea459c3a.js.map