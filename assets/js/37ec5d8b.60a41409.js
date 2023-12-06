"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6377],{3905:(e,a,n)=>{n.d(a,{Zo:()=>u,kt:()=>h});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),c=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},u=function(e){var a=c(e.components);return t.createElement(l.Provider,{value:a},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return n?t.createElement(h,o(o({ref:a},u),{},{components:n})):t.createElement(h,o({ref:a},u))}));function h(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},27444:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var t=n(87462),r=(n(67294),n(3905));const i={sidebar_position:1},o="Consumer Lag-Based Worker Balancer",s={unversionedId:"guides/consumers/built-in-workers-algorithms/consumer-lag-based-worker-balancer",id:"guides/consumers/built-in-workers-algorithms/consumer-lag-based-worker-balancer",title:"Consumer Lag-Based Worker Balancer",description:"The WithConsumerLagWorkerBalancer method in KafkaFlow is a powerful feature that allows you to dynamically calculate the number of workers for each application instance based on the consumer's lag. This feature is designed to optimize message processing, especially in scenarios where some application instances have more partitions and naturally need to deal with higher message throughput. By adjusting the number of workers based on message lag, this feature helps ensure efficient message processing and load balancing across all application instances.",source:"@site/docs/guides/consumers/built-in-workers-algorithms/consumer-lag-based-worker-balancer.md",sourceDirName:"guides/consumers/built-in-workers-algorithms",slug:"/guides/consumers/built-in-workers-algorithms/consumer-lag-based-worker-balancer",permalink:"/kafkaflow/docs/guides/consumers/built-in-workers-algorithms/consumer-lag-based-worker-balancer",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/guides/consumers/built-in-workers-algorithms/consumer-lag-based-worker-balancer.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Built-in Dynamic Workers Algorithms",permalink:"/kafkaflow/docs/category/built-in-dynamic-workers-algorithms"},next:{title:"Middlewares",permalink:"/kafkaflow/docs/category/middlewares"}},l={},c=[{value:"Use Case Example",id:"use-case-example",level:2},{value:"Balancing Message Lag Across Application Instances",id:"balancing-message-lag-across-application-instances",level:3},{value:"Benefits in Elastic Infrastructure",id:"benefits-in-elastic-infrastructure",level:3},{value:"How to Configure",id:"how-to-configure",level:2}],u={toc:c},p="wrapper";function m(e){let{components:a,...n}=e;return(0,r.kt)(p,(0,t.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"consumer-lag-based-worker-balancer"},"Consumer Lag-Based Worker Balancer"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"WithConsumerLagWorkerBalancer")," method in KafkaFlow is a powerful feature that allows you to dynamically calculate the number of workers for each application instance based on the consumer's lag. This feature is designed to optimize message processing, especially in scenarios where some application instances have more partitions and naturally need to deal with higher message throughput. By adjusting the number of workers based on message lag, this feature helps ensure efficient message processing and load balancing across all application instances."),(0,r.kt)("p",null,"In this documentation, you'll find an overview of how this feature works, a use case example, and step-by-step instructions on how to configure it."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This method replaces the call of ",(0,r.kt)("inlineCode",{parentName:"p"},"WithWorkersCount")," in the consumer's setup.")),(0,r.kt)("h2",{id:"use-case-example"},"Use Case Example"),(0,r.kt)("h3",{id:"balancing-message-lag-across-application-instances"},"Balancing Message Lag Across Application Instances"),(0,r.kt)("p",null,"Consider a scenario where you have a Kafka consumer application deployed in a distributed environment. In this environment, some application instances may have more partitions assigned to them, resulting in a higher message throughput potential. However, variations in message lag across partitions can lead to uneven workloads."),(0,r.kt)("p",null,"Here's how the ",(0,r.kt)("inlineCode",{parentName:"p"},"WithConsumerLagWorkerBalancer")," feature can help:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Total Workers"),": You specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"totalWorkers"),", which represents the total number of workers to be distributed across all application instances.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Minimum and Maximum Instance Workers"),": You set the ",(0,r.kt)("inlineCode",{parentName:"p"},"minInstanceWorkers")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"maxInstanceWorkers")," parameters, defining the minimum and maximum number of workers allowed for each application instance.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Evaluation Interval"),": You define an ",(0,r.kt)("inlineCode",{parentName:"p"},"evaluationInterval")," that determines how often the number of workers should be recalculated based on the consumer's lag."))),(0,r.kt)("p",null,"With this configuration, the ",(0,r.kt)("inlineCode",{parentName:"p"},"WithConsumerLagWorkerBalancer")," feature dynamically adjusts the number of worker threads for each application instance based on the lag in the Kafka topic. Application instances with partitions experiencing higher lag will have more workers allocated to help balance the message lag across all instances."),(0,r.kt)("h3",{id:"benefits-in-elastic-infrastructure"},"Benefits in Elastic Infrastructure"),(0,r.kt)("p",null,"This feature is particularly valuable in elastic infrastructure environments like Kubernetes, where you need to manage the total number of workers across all application instances to prevent overloading dependencies. By dynamically adjusting worker counts, the feature ensures that each instance scales its resources efficiently, improving overall application performance and resource utilization."),(0,r.kt)("h2",{id:"how-to-configure"},"How to Configure"),(0,r.kt)("p",null,"Configuring Consumer Lag-Based Worker Balancer is straightforward with the fluent interface provided by KafkaFlow. Here's a simple example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},".AddConsumer(\n    consumer => consumer\n        ...\n        .WithConsumerLagWorkerBalancer(\n            50, // The total number of workers to be distributed across all application instances.\n            3,  // The minimum number of workers for each application instance.\n            20) // The maximum number of workers for each application instance.\n        ...\n        )\n)\n")),(0,r.kt)("p",null,"With this configuration, KafkaFlow will dynamically adjust the number of worker threads for each application instance, ensuring efficient message processing while considering the lag in the Kafka topic. This feature provides a powerful way to optimize resource allocation in your Kafka-based applications, making them more adaptive to varying message loads and distribution across partitions."))}m.isMDXComponent=!0}}]);