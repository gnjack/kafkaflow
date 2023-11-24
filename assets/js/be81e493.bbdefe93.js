"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8500],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>d});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function f(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),s=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=s(e.components);return t.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=f(e,["components","mdxType","originalType","parentName"]),p=s(r),d=o,g=p["".concat(l,".").concat(d)]||p[d]||c[d]||a;return r?t.createElement(g,i(i({ref:n},u),{},{components:r})):t.createElement(g,i({ref:n},u))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var f={};for(var l in n)hasOwnProperty.call(n,l)&&(f[l]=n[l]);f.originalType=e,f.mdxType="string"==typeof e?e:o,i[1]=f;for(var s=2;s<a;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},85695:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>f,toc:()=>s});var t=r(87462),o=(r(67294),r(3905));const a={},i="IConsumerConfiguration.PendingOffsetsHandlers property",f={unversionedId:"reference/KafkaFlow/KafkaFlow.Configuration/IConsumerConfiguration/PendingOffsetsHandlers",id:"reference/KafkaFlow/KafkaFlow.Configuration/IConsumerConfiguration/PendingOffsetsHandlers",title:"IConsumerConfiguration.PendingOffsetsHandlers property",description:"Gets the handlers that will be called when there are pending offsets",source:"@site/docs/reference/KafkaFlow/KafkaFlow.Configuration/IConsumerConfiguration/PendingOffsetsHandlers.md",sourceDirName:"reference/KafkaFlow/KafkaFlow.Configuration/IConsumerConfiguration",slug:"/reference/KafkaFlow/KafkaFlow.Configuration/IConsumerConfiguration/PendingOffsetsHandlers",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Configuration/IConsumerConfiguration/PendingOffsetsHandlers",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow/KafkaFlow.Configuration/IConsumerConfiguration/PendingOffsetsHandlers.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IConsumerConfiguration.PartitionsRevokedHandlers property",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Configuration/IConsumerConfiguration/PartitionsRevokedHandlers"},next:{title:"IConsumerConfiguration.StatisticsHandlers property",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Configuration/IConsumerConfiguration/StatisticsHandlers"}},l={},s=[{value:"See Also",id:"see-also",level:2}],u={toc:s};function c(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"iconsumerconfigurationpendingoffsetshandlers-property"},"IConsumerConfiguration.PendingOffsetsHandlers property"),(0,o.kt)("p",null,"Gets the handlers that will be called when there are pending offsets"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"public IReadOnlyList<(Action<IDependencyResolver, IEnumerable<TopicPartitionOffset>> handler, TimeSpan interval)> \n    PendingOffsetsHandlers { get; }\n")),(0,o.kt)("h2",{id:"see-also"},"See Also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"interface\xa0",(0,o.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Configuration/IConsumerConfiguration/"},"IConsumerConfiguration")),(0,o.kt)("li",{parentName:"ul"},"namespace\xa0",(0,o.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/"},"KafkaFlow.Configuration"))))}c.isMDXComponent=!0}}]);