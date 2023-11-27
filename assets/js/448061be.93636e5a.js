"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[636],{3905:(e,r,o)=>{o.d(r,{Zo:()=>d,kt:()=>f});var a=o(67294);function t(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function n(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,a)}return o}function s(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?n(Object(o),!0).forEach((function(r){t(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function l(e,r){if(null==e)return{};var o,a,t=function(e,r){if(null==e)return{};var o,a,t={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],r.indexOf(o)>=0||(t[o]=e[o]);return t}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var c=a.createContext({}),i=function(e){var r=a.useContext(c),o=r;return e&&(o="function"==typeof e?e(r):s(s({},r),e)),o},d=function(e){var r=i(e.components);return a.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var o=e.components,t=e.mdxType,n=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=i(o),f=t,u=m["".concat(c,".").concat(f)]||m[f]||p[f]||n;return o?a.createElement(u,s(s({ref:r},d),{},{components:o})):a.createElement(u,s({ref:r},d))}));function f(e,r){var o=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var n=o.length,s=new Array(n);s[0]=m;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:t,s[1]=l;for(var i=2;i<n;i++)s[i]=o[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},77600:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>i});var a=o(87462),t=(o(67294),o(3905));const n={},s="DecompressorConsumerMiddleware constructor",l={unversionedId:"reference/KafkaFlow/KafkaFlow.Middlewares.Compressor/DecompressorConsumerMiddleware/DecompressorConsumerMiddleware",id:"reference/KafkaFlow/KafkaFlow.Middlewares.Compressor/DecompressorConsumerMiddleware/DecompressorConsumerMiddleware",title:"DecompressorConsumerMiddleware constructor",description:"Initializes a new instance of the DecompressorConsumerMiddleware class.",source:"@site/docs/reference/KafkaFlow/KafkaFlow.Middlewares.Compressor/DecompressorConsumerMiddleware/DecompressorConsumerMiddleware.md",sourceDirName:"reference/KafkaFlow/KafkaFlow.Middlewares.Compressor/DecompressorConsumerMiddleware",slug:"/reference/KafkaFlow/KafkaFlow.Middlewares.Compressor/DecompressorConsumerMiddleware/",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Middlewares.Compressor/DecompressorConsumerMiddleware/",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow/KafkaFlow.Middlewares.Compressor/DecompressorConsumerMiddleware/DecompressorConsumerMiddleware.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CompressorProducerMiddleware.Invoke method",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Middlewares.Compressor/CompressorProducerMiddleware/Invoke"},next:{title:"DecompressorConsumerMiddleware.Invoke method",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Middlewares.Compressor/DecompressorConsumerMiddleware/Invoke"}},c={},i=[{value:"See Also",id:"see-also",level:2}],d={toc:i};function p(e){let{components:r,...o}=e;return(0,t.kt)("wrapper",(0,a.Z)({},d,o,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"decompressorconsumermiddleware-constructor"},"DecompressorConsumerMiddleware constructor"),(0,t.kt)("p",null,"Initializes a new instance of the ",(0,t.kt)("a",{parentName:"p",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Middlewares.Compressor/DecompressorConsumerMiddleware/"},(0,t.kt)("inlineCode",{parentName:"a"},"DecompressorConsumerMiddleware"))," class."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csharp"},"public DecompressorConsumerMiddleware(IDecompressor decompressor)\n")),(0,t.kt)("table",null,(0,t.kt)("thead",{parentName:"table"},(0,t.kt)("tr",{parentName:"thead"},(0,t.kt)("th",{parentName:"tr",align:null},"parameter"),(0,t.kt)("th",{parentName:"tr",align:null},"description"))),(0,t.kt)("tbody",{parentName:"table"},(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},"decompressor"),(0,t.kt)("td",{parentName:"tr",align:null},"Instance of IDecompressor")))),(0,t.kt)("h2",{id:"see-also"},"See Also"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"class\xa0",(0,t.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Middlewares.Compressor/DecompressorConsumerMiddleware/"},"DecompressorConsumerMiddleware")),(0,t.kt)("li",{parentName:"ul"},"namespace\xa0",(0,t.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/"},"KafkaFlow.Middlewares.Compressor"))))}p.isMDXComponent=!0}}]);