"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5484],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>p});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=r,h=d["".concat(l,".").concat(p)]||d[p]||u[p]||i;return n?o.createElement(h,a(a({ref:t},m),{},{components:n})):o.createElement(h,a({ref:t},m))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54982:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const i={sidebar_position:6},a="Consumer Throttling",s={unversionedId:"guides/middlewares/consumer-throttling-middleware",id:"guides/middlewares/consumer-throttling-middleware",title:"Consumer Throttling",description:"In this section, we will learn how Consumer Throttling works and how to configure it. Consumer Throttling is a feature in KafkaFlow that allows you to dynamically manage the rate at which your application consumes messages from Kafka topics. It provides a mechanism to slow down or pause the consumption of messages based on specified metrics. This can be particularly useful in scenarios where you want to prioritize certain types of messages over others, or when there is a need to control the rate of processing during high-load periods or when dealing with backlogs.",source:"@site/docs/guides/middlewares/consumer-throttling-middleware.md",sourceDirName:"guides/middlewares",slug:"/guides/middlewares/consumer-throttling-middleware",permalink:"/kafkaflow/docs/guides/middlewares/consumer-throttling-middleware",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/guides/middlewares/consumer-throttling-middleware.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Batch Consume Middleware",permalink:"/kafkaflow/docs/guides/middlewares/batch-consume-middleware"},next:{title:"Compression",permalink:"/kafkaflow/docs/guides/compression"}},l={},c=[{value:"Use Case Example",id:"use-case-example",level:2},{value:"How to Configure Consumer Throttling",id:"how-to-configure-consumer-throttling",level:2},{value:"Consumer Throttling Methods",id:"consumer-throttling-methods",level:2}],m={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"consumer-throttling"},"Consumer Throttling"),(0,r.kt)("p",null,"In this section, we will learn how Consumer Throttling works and how to configure it. Consumer Throttling is a feature in KafkaFlow that allows you to dynamically manage the rate at which your application consumes messages from Kafka topics. It provides a mechanism to slow down or pause the consumption of messages based on specified metrics. This can be particularly useful in scenarios where you want to prioritize certain types of messages over others, or when there is a need to control the rate of processing during high-load periods or when dealing with backlogs."),(0,r.kt)("p",null,"This functionality is highly extensible, allowing for the use of custom metrics and actions by implementing the ",(0,r.kt)("inlineCode",{parentName:"p"},"IConsumerThrottlingMetric")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"IConsumerThrottlingAction")," interfaces respectively. Although KafkaFlow comes with built-in implementations like Consumer Lag for metrics and Delay for actions, you can create your own based on your specific needs."),(0,r.kt)("h2",{id:"use-case-example"},"Use Case Example"),(0,r.kt)("p",null,"One example of how Consumer Throttling can be utilized effectively is when you want to segregate single and bulk actions into different consumers and topics. For instance, you may want to prioritize the processing of single actions and slow down the processing of bulk actions. This can be achieved by monitoring the consumer lag of the consumer responsible for single actions and applying throttling to the consumer handling the bulk actions based on this metric."),(0,r.kt)("h2",{id:"how-to-configure-consumer-throttling"},"How to Configure Consumer Throttling"),(0,r.kt)("p",null,"Configuring Consumer Throttling is straightforward with the fluent interface provided by KafkaFlow. Here's a simple example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'.AddConsumer(\n    consumer => consumer\n        .Topic("bulk-topic")\n        .WithName("bulkConsumer")\n        .AddMiddlewares(\n            middlewares => middlewares\n                .ThrottleConsumer(\n                    t => t\n                        .ByOtherConsumersLag("singleConsumer")\n                        .WithInterval(TimeSpan.FromSeconds(5))\n                        .AddAction(a => a.AboveThreshold(10).ApplyDelay(100))\n                        .AddAction(a => a.AboveThreshold(100).ApplyDelay(1_000))\n                        .AddAction(a => a.AboveThreshold(1_000).ApplyDelay(10_000)))\n                .AddDeserializer<JsonCoreDeserializer>()\n        )\n)\n')),(0,r.kt)("h2",{id:"consumer-throttling-methods"},"Consumer Throttling Methods"),(0,r.kt)("p",null,"Here's a brief overview of the methods used to configure Consumer Throttling:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ThrottleConsumer"),": This method enables the Throttling feature for the consumer.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ByOtherConsumersLag"),": This extension method of ",(0,r.kt)("inlineCode",{parentName:"p"},"AddMetric")," sets which consumers' lag should be monitored. The throttling will be applied based on these consumers' lag.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"WithInterval"),": This method specifies the interval at which the metrics will be checked and the throttling actions applied.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"AddAction"),": This method allows you to define actions that will be taken when certain metric thresholds are met. Actions can include applying a delay or pausing the consumer.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"AboveThreshold"),": This method sets the metric threshold at which the action will be applied.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ApplyDelay"),": This extension method of ",(0,r.kt)("inlineCode",{parentName:"p"},"Apply")," sets a delay to the consumer when the specified threshold is met."))),(0,r.kt)("p",null,"These extension methods, ",(0,r.kt)("inlineCode",{parentName:"p"},"ByOtherConsumersLag")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ApplyDelay"),", are convenient ways to set up commonly used metrics and actions. But as stated earlier, KafkaFlow allows you to implement your own custom metrics and actions via the ",(0,r.kt)("inlineCode",{parentName:"p"},"IConsumerThrottlingMetric")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"IConsumerThrottlingAction")," interfaces respectively."),(0,r.kt)("p",null,"In summary, Consumer Throttling is a powerful tool for managing message consumption in KafkaFlow. It brings flexibility and control to your message processing workflows and allows for effective prioritization and rate control. Whether you're using built-in metrics and actions or implementing your own, you can fine-tune your consumers to perform optimally under various conditions."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can find a sample on batch processing ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Farfetch/kafkaflow/tree/master/samples/KafkaFlow.Sample.ConsumerThrottling"},"here"),".")))}u.isMDXComponent=!0}}]);