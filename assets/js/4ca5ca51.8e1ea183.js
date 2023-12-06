"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[823],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=u(r),h=n,d=c["".concat(l,".").concat(h)]||c[h]||p[h]||o;return r?a.createElement(d,s(s({ref:t},m),{},{components:r})):a.createElement(d,s({ref:t},m))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:n,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},58703:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const o={sidebar_position:1},s="Consumers",i={unversionedId:"guides/consumers/consumers",id:"guides/consumers/consumers",title:"Consumers",description:"In this section, we will learn all about Consumers on KafkaFlow.",source:"@site/docs/guides/consumers/consumers.md",sourceDirName:"guides/consumers",slug:"/guides/consumers/",permalink:"/kafkaflow/docs/guides/consumers/",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/guides/consumers/consumers.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Consumers",permalink:"/kafkaflow/docs/category/consumers"},next:{title:"Add Consumers",permalink:"/kafkaflow/docs/guides/consumers/add-consumers"}},l={},u=[{value:"Message Flow",id:"message-flow",level:2},{value:"Kafka Consumer",id:"kafka-consumer",level:3},{value:"Consumer Worker Pool",id:"consumer-worker-pool",level:3},{value:"Distribution Strategy",id:"distribution-strategy",level:3},{value:"Workers",id:"workers",level:3},{value:"Middlewares",id:"middlewares",level:3},{value:"Offset Manager",id:"offset-manager",level:3},{value:"Max Poll Intervals",id:"max-poll-intervals",level:3},{value:"How it works",id:"how-it-works",level:2}],m={toc:u},c="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"consumers"},"Consumers"),(0,n.kt)("p",null,"In this section, we will learn all about Consumers on KafkaFlow."),(0,n.kt)("p",null,"Here is where KafkaFlow shines. Using KafkaFlow, you have control over how to consume the messages. Every consumer has its own ",(0,n.kt)("a",{parentName:"p",href:"#workers"},"Workers")," and ",(0,n.kt)("a",{parentName:"p",href:"#middlewares"},"Middlewares")," configuration. You can have multiple consumers consuming the same Topic with different consumer groups or one consumer with multiple Topics."),(0,n.kt)("h2",{id:"message-flow"},"Message Flow"),(0,n.kt)("p",null,"Every KafkaFlow consumer is composed of a group of components: ",(0,n.kt)("a",{parentName:"p",href:"#kafka-consumer"},"Kafka Consumer"),", ",(0,n.kt)("a",{parentName:"p",href:"#consumer-worker-pool"},"Consumer Worker Pool"),", ",(0,n.kt)("a",{parentName:"p",href:"#distribution-strategy"},"Distribution Strategy"),", ",(0,n.kt)("a",{parentName:"p",href:"#workers"},"Workers"),", ",(0,n.kt)("a",{parentName:"p",href:"#middlewares"},"Middlewares"),", and ",(0,n.kt)("a",{parentName:"p",href:"#offset-manager"},"Offset Manager"),"."),(0,n.kt)("p",null,"The following diagram demonstrates the flow of a message through those components."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/233064/98690729-24bd8000-2365-11eb-8bd0-19e6aeeaebda.jpg",alt:"Message Flow"})),(0,n.kt)("h3",{id:"kafka-consumer"},"Kafka Consumer"),(0,n.kt)("p",null,"It\u2019s where the Confluent Client runs. It has a background task that fetches the messages from any topics/partitions assigned for that consumer and delivers them to the ",(0,n.kt)("a",{parentName:"p",href:"#consumer-worker-pool"},"Consumer Worker Pool"),". If the Confluent Consumer stops working for any reason (if a fatal exception occurs), the consumer will be recreated."),(0,n.kt)("h3",{id:"consumer-worker-pool"},"Consumer Worker Pool"),(0,n.kt)("p",null,"It orchestrates the Workers creation and destruction when the application starts, stops, and when partitions are assigned or revoked. It receives the message from ",(0,n.kt)("a",{parentName:"p",href:"#kafka-consumer"},"Kafka Consumer")," and uses the ",(0,n.kt)("a",{parentName:"p",href:"#distribution-strategy"},"Distribution Strategy")," to choose a ",(0,n.kt)("a",{parentName:"p",href:"#workers"},"Worker")," to enqueue the messages."),(0,n.kt)("h3",{id:"distribution-strategy"},"Distribution Strategy"),(0,n.kt)("p",null,"It\u2019s an algorithm to choose a ",(0,n.kt)("a",{parentName:"p",href:"#workers"},"Worker")," to process the message. The Framework has two: ",(0,n.kt)("strong",{parentName:"p"},"BytesSum")," and ",(0,n.kt)("strong",{parentName:"p"},"FreeWorker"),". "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"BytesSum")," maintains the message order with some performance and resource penalties, ",(0,n.kt)("strong",{parentName:"li"},"it is the default strategy"),". "),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"FreeWorker")," is faster, but the message order is lost. A custom strategy can be implemented using the ",(0,n.kt)("inlineCode",{parentName:"li"},"IDistibutionStrategy")," interface. ")),(0,n.kt)("p",null,"You can configure the consumer strategy on the ",(0,n.kt)("a",{parentName:"p",href:"../configuration"},"configuration")," with the method ",(0,n.kt)("inlineCode",{parentName:"p"},"WithWorkDistributionStrategy"),"."),(0,n.kt)("h3",{id:"workers"},"Workers"),(0,n.kt)("p",null,"Workers are responsible for processing messages when consuming. You define how many workers a consumer will have. "),(0,n.kt)("p",null,"The workers process the messages in parallel. By default (using the ByteSum distribution strategy), all messages with the same partition key are processed by the same Worker so that the message order is respected for the same partition key. "),(0,n.kt)("p",null,"Every worker has a buffer to avoid idling when many messages arrive with the same partition key for any other worker. "),(0,n.kt)("p",null,"The buffer size should be dimensioned depending on how many messages arrive with the same partition key, on average. When the bus is requested to stop, every worker receives the stop command, and it only releases the stop call when it ends the current message and stores it in the ",(0,n.kt)("a",{parentName:"p",href:"#offset-manager"},"Offset Manager"),"."),(0,n.kt)("h3",{id:"middlewares"},"Middlewares"),(0,n.kt)("p",null,"It\u2019s a customizable collection of middlewares. This collection is configurable per consumer. Middlewares can be created by implementing the ",(0,n.kt)("inlineCode",{parentName:"p"},"IMessageMiddleware")," interface. Each consumer has its own instances of middlewares, so they are not shared between consumers but shared between ",(0,n.kt)("a",{parentName:"p",href:"#workers"},"Workers")," instead. You can see more information about middlewares ",(0,n.kt)("a",{parentName:"p",href:"../middlewares"},"here"),"."),(0,n.kt)("h3",{id:"offset-manager"},"Offset Manager"),(0,n.kt)("p",null,"It is a component that receives all the offsets from the workers and orchestrates them before storing them in Kafka; this avoids an offset override when many messages are processed concurrently. "),(0,n.kt)("p",null,"Even when you choose to use the manual offset store option, you will store the offset in the OffsetManager and then store the offsets in Kafka when possible. "),(0,n.kt)("admonition",{type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"When the application stops, there is a big chance to have processed messages already stored in OffsetManager but not stored in Kafka. In this scenario, when the application starts again, these messages will be processed again. Your application must be prepared to deal with it.")),(0,n.kt)("h3",{id:"max-poll-intervals"},"Max Poll Intervals"),(0,n.kt)("p",null,"This is the value that Kafka uses to determine the maximum amount of time allowed between calls to the consumers' poll method before the process is considered as failed. By default, this has a value of 300 seconds, but it may be adjusted with the ",(0,n.kt)("inlineCode",{parentName:"p"},"WithMaxPollInterval")," configuration."),(0,n.kt)("p",null,"If the maximum time is exceeded, the consumer will go offline, but the workers will continue to run in the background, leading to an increasing read lag until the application goes down."),(0,n.kt)("p",null,"Further information can be found in the official ",(0,n.kt)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/clients/consumer.html#message-handling"},"documentation"),"."),(0,n.kt)("h2",{id:"how-it-works"},"How it works"),(0,n.kt)("p",null,"The following animation shows a consumer listening to one topic with two ",(0,n.kt)("a",{parentName:"p",href:"#workers"},"Workers")," having a buffer size of 2 using the ",(0,n.kt)("strong",{parentName:"p"},"BytesSum")," distribution strategy."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/233064/98690723-22f3bc80-2365-11eb-8453-04349abb103c.gif",alt:"consumer-animation"})))}p.isMDXComponent=!0}}]);