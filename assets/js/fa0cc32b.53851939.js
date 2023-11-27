"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1922],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(a),f=o,u=h["".concat(i,".").concat(f)]||h[f]||m[f]||n;return a?r.createElement(u,s(s({ref:t},c),{},{components:a})):r.createElement(u,s({ref:t},c))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,s=new Array(n);s[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var p=2;p<n;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},95358:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var r=a(87462),o=(a(67294),a(3905));const n={sidebar_position:5},s="Samples",l={unversionedId:"getting-started/samples",id:"getting-started/samples",title:"Samples",description:"We know that working code is a valuable learning tool for many, so here you can find a list of samples built to demonstrate KafkaFlow capabilities.",source:"@site/docs/getting-started/samples.md",sourceDirName:"getting-started",slug:"/getting-started/samples",permalink:"/kafkaflow/docs/getting-started/samples",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/getting-started/samples.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Packages",permalink:"/kafkaflow/docs/getting-started/packages"},next:{title:"Guides",permalink:"/kafkaflow/docs/category/guides"}},i={},p=[{value:"Basic",id:"basic",level:2},{value:"Batching",id:"batching",level:2},{value:"Schema Registry",id:"schema-registry",level:2},{value:"Web API",id:"web-api",level:2},{value:"Dashboard",id:"dashboard",level:2},{value:"Flow of Control",id:"flow-of-control",level:2},{value:"Pause Consumer on Error",id:"pause-consumer-on-error",level:2},{value:"Consumer Throttling",id:"consumer-throttling",level:2},{value:"Wildcard Consumers",id:"wildcard-consumers",level:2}],c={toc:p};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"samples"},"Samples"),(0,o.kt)("p",null,"We know that working code is a valuable learning tool for many, so here you can find a list of samples built to demonstrate KafkaFlow capabilities."),(0,o.kt)("h2",{id:"basic"},"Basic"),(0,o.kt)("p",null,"This is a simple sample that shows how to produce and consume messages."),(0,o.kt)("p",null,"You can find the code here: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Farfetch/kafkaflow/tree/master/samples/KafkaFlow.Sample"},"/samples/KafkaFlow.Sample")),(0,o.kt)("h2",{id:"batching"},"Batching"),(0,o.kt)("p",null,"This is a sample that shows batch processing using KafkaFlow."),(0,o.kt)("p",null,"You can find the code here: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Farfetch/kafkaflow/tree/master/samples/KafkaFlow.Sample.BatchOperations"},"/samples/KafkaFlow.Sample.BatchOperations")),(0,o.kt)("h2",{id:"schema-registry"},"Schema Registry"),(0,o.kt)("p",null,"This is a sample that shows how to use Schema Registry with KafkaFlow."),(0,o.kt)("p",null,"You can find the code here: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Farfetch/kafkaflow/tree/master/samples/KafkaFlow.Sample.SchemaRegistry"},"/samples/KafkaFlow.Sample")),(0,o.kt)("h2",{id:"web-api"},"Web API"),(0,o.kt)("p",null,"This sample shows how to host an administration Web API for administrative operations."),(0,o.kt)("p",null,"You can find the code here: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Farfetch/kafkaflow/tree/master/samples/KafkaFlow.Sample.WebApi"},"/samples/KafkaFlow.Sample")),(0,o.kt)("h2",{id:"dashboard"},"Dashboard"),(0,o.kt)("p",null,"This sample shows how to use KafkaFlow to expose an administration Dashboard."),(0,o.kt)("p",null,"You can find the code here: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Farfetch/kafkaflow/tree/master/samples/KafkaFlow.Sample.Dashboard"},"/samples/KafkaFlow.Sample")),(0,o.kt)("h2",{id:"flow-of-control"},"Flow of Control"),(0,o.kt)("p",null,"This is a sample that shows how to control the state of a consumer (Starting, Pausing, Stopping, etc.) programmatically."),(0,o.kt)("p",null,"You can find the code here: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Farfetch/kafkaflow/tree/master/samples/KafkaFlow.Sample.FlowControl"},"/samples/KafkaFlow.Sample.FlowControl")),(0,o.kt)("h2",{id:"pause-consumer-on-error"},"Pause Consumer on Error"),(0,o.kt)("p",null,"This is a sample that shows how to stop the consumer when an exception is raised."),(0,o.kt)("p",null,"You can find the code here: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Farfetch/kafkaflow/tree/master/samples/KafkaFlow.Sample.PauseConsumerOnError"},"/samples/KafkaFlow.Sample.PauseConsumerOnError")),(0,o.kt)("h2",{id:"consumer-throttling"},"Consumer Throttling"),(0,o.kt)("p",null,"This is a sample that shows how to throttle a consumer based on others consumers lag"),(0,o.kt)("p",null,"You can find the code here: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Farfetch/kafkaflow/tree/master/samples/KafkaFlow.Sample.ConsumerThrottling"},"/samples/KafkaFlow.Sample.ConsumerThrottling")),(0,o.kt)("h2",{id:"wildcard-consumers"},"Wildcard Consumers"),(0,o.kt)("p",null,"This sample shows how to use a consumer to handle all the topics according to a naming convention. This is not a feature of KafkaFlow, but a demonstration of how to use the pattern conventions exposed by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/confluentinc/librdkafka/tree/95a542c87c61d2c45b445f91c73dd5442eb04f3c"},"librdkafka")," (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/confluentinc/librdkafka/blob/95a542c87c61d2c45b445f91c73dd5442eb04f3c/src-cpp/rdkafkacpp.h#L2681"},"here"),")."),(0,o.kt)("p",null,"You can find the code here: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Farfetch/kafkaflow/tree/master/samples/KafkaFlow.Sample.WildcardConsumer"},"/samples/KafkaFlow.Sample.WildcardConsumer")))}m.isMDXComponent=!0}}]);