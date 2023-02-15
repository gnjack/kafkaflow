"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4886],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},i=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),f=u(a),h=r,p=f["".concat(l,".").concat(h)]||f[h]||m[h]||o;return a?n.createElement(p,s(s({ref:t},i),{},{components:a})):n.createElement(p,s({ref:t},i))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var u=2;u<o;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},3990:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const o={},s="BatchConsumeExtensions.GetMessagesBatch method",c={unversionedId:"reference/KafkaFlow.BatchConsume/KafkaFlow.BatchConsume/BatchConsumeExtensions/GetMessagesBatch",id:"reference/KafkaFlow.BatchConsume/KafkaFlow.BatchConsume/BatchConsumeExtensions/GetMessagesBatch",title:"BatchConsumeExtensions.GetMessagesBatch method",description:"Gets the accumulated IMessageContext grouped by BatchConsume middleware",source:"@site/docs/reference/KafkaFlow.BatchConsume/KafkaFlow.BatchConsume/BatchConsumeExtensions/GetMessagesBatch.md",sourceDirName:"reference/KafkaFlow.BatchConsume/KafkaFlow.BatchConsume/BatchConsumeExtensions",slug:"/reference/KafkaFlow.BatchConsume/KafkaFlow.BatchConsume/BatchConsumeExtensions/GetMessagesBatch",permalink:"/kafkaflow/docs/reference/KafkaFlow.BatchConsume/KafkaFlow.BatchConsume/BatchConsumeExtensions/GetMessagesBatch",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow.BatchConsume/KafkaFlow.BatchConsume/BatchConsumeExtensions/GetMessagesBatch.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"BatchConsumeExtensions.BatchConsume method",permalink:"/kafkaflow/docs/reference/KafkaFlow.BatchConsume/KafkaFlow.BatchConsume/BatchConsumeExtensions/BatchConsume"},next:{title:"KafkaFlow.BatchConsume assembly",permalink:"/kafkaflow/docs/reference/KafkaFlow.BatchConsume/"}},l={},u=[{value:"Return Value",id:"return-value",level:2},{value:"See Also",id:"see-also",level:2}],i={toc:u};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"batchconsumeextensionsgetmessagesbatch-method"},"BatchConsumeExtensions.GetMessagesBatch method"),(0,r.kt)("p",null,"Gets the accumulated IMessageContext grouped by BatchConsume middleware"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public static IReadOnlyCollection<IMessageContext> GetMessagesBatch(this IMessageContext context)\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"context"),(0,r.kt)("td",{parentName:"tr",align:null},"The message context")))),(0,r.kt)("h2",{id:"return-value"},"Return Value"),(0,r.kt)("p",null,"All the contexts in the batch"),(0,r.kt)("h2",{id:"see-also"},"See Also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"class\xa0",(0,r.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.BatchConsume/KafkaFlow.BatchConsume/BatchConsumeExtensions/"},"BatchConsumeExtensions")),(0,r.kt)("li",{parentName:"ul"},"namespace\xa0",(0,r.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.BatchConsume/"},"KafkaFlow.BatchConsume"))))}m.isMDXComponent=!0}}]);