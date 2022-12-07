"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[273],{3905:(e,r,t)=>{t.d(r,{Zo:()=>i,kt:()=>u});var a=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,o=function(e,r){if(null==e)return{};var t,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),c=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},i=function(e){var r=c(e.components);return a.createElement(p.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=c(t),u=o,d=m["".concat(p,".").concat(u)]||m[u]||f[u]||n;return t?a.createElement(d,s(s({ref:r},i),{},{components:t})):a.createElement(d,s({ref:r},i))}));function u(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var n=t.length,s=new Array(n);s[0]=m;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var c=2;c<n;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8610:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var a=t(7462),o=(t(7294),t(3905));const n={},s="KafkaFlow.Compressor assembly",l={unversionedId:"reference/KafkaFlow.Compressor/KafkaFlow.Compressor",id:"reference/KafkaFlow.Compressor/KafkaFlow.Compressor",title:"KafkaFlow.Compressor assembly",description:"KafkaFlow.Compressor namespace",source:"@site/docs/reference/KafkaFlow.Compressor/KafkaFlow.Compressor.md",sourceDirName:"reference/KafkaFlow.Compressor",slug:"/reference/KafkaFlow.Compressor/",permalink:"/kafkaflow/docs/reference/KafkaFlow.Compressor/",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow.Compressor/KafkaFlow.Compressor.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"BatchConsumeExtensions.GetMessagesBatch method",permalink:"/kafkaflow/docs/reference/KafkaFlow.BatchConsume/KafkaFlow.BatchConsume/BatchConsumeExtensions/GetMessagesBatch"},next:{title:"CompressorConsumerMiddleware constructor",permalink:"/kafkaflow/docs/reference/KafkaFlow.Compressor/KafkaFlow.Compressor/CompressorConsumerMiddleware/"}},p={},c=[{value:"KafkaFlow.Compressor namespace",id:"kafkaflowcompressor-namespace",level:2}],i={toc:c};function f(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},i,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kafkaflowcompressor-assembly"},"KafkaFlow.Compressor assembly"),(0,o.kt)("h2",{id:"kafkaflowcompressor-namespace"},"KafkaFlow.Compressor namespace"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"public type"),(0,o.kt)("th",{parentName:"tr",align:null},"description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"class\xa0",(0,o.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow.Compressor/KafkaFlow.Compressor/CompressorConsumerMiddleware/"},"CompressorConsumerMiddleware")),(0,o.kt)("td",{parentName:"tr",align:null},"Middleware to decompress the messages when consuming")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"class\xa0",(0,o.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow.Compressor/KafkaFlow.Compressor/CompressorProducerMiddleware/"},"CompressorProducerMiddleware")),(0,o.kt)("td",{parentName:"tr",align:null},"Middleware to compress the messages when producing")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"static\xa0class\xa0",(0,o.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow.Compressor/KafkaFlow.Compressor/ConfigurationBuilderExtensions/"},"ConfigurationBuilderExtensions")),(0,o.kt)("td",{parentName:"tr",align:null},"Extension methods for IConsumerMiddlewareConfigurationBuilder and IProducerMiddlewareConfigurationBuilder.")))))}f.isMDXComponent=!0}}]);