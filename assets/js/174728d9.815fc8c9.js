"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8945],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),f=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=f(e.components);return a.createElement(c.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=f(r),m=n,k=p["".concat(c,".").concat(m)]||p[m]||i[m]||o;return r?a.createElement(k,s(s({ref:t},u),{},{components:r})):a.createElement(k,s({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var f=2;f<o;f++)s[f]=r[f];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},20361:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>i,frontMatter:()=>o,metadata:()=>l,toc:()=>f});var a=r(87462),n=(r(67294),r(3905));const o={},s="IClusterManager.GetConsumerGroupOffsetsAsync method",l={unversionedId:"reference/KafkaFlow/KafkaFlow.Clusters/IClusterManager/GetConsumerGroupOffsetsAsync",id:"reference/KafkaFlow/KafkaFlow.Clusters/IClusterManager/GetConsumerGroupOffsetsAsync",title:"IClusterManager.GetConsumerGroupOffsetsAsync method",description:"Retrieves the offsets for a specified consumer group and a collection of topics. The offsets indicate where the consumer group is in its consumption of the topics.",source:"@site/docs/reference/KafkaFlow/KafkaFlow.Clusters/IClusterManager/GetConsumerGroupOffsetsAsync.md",sourceDirName:"reference/KafkaFlow/KafkaFlow.Clusters/IClusterManager",slug:"/reference/KafkaFlow/KafkaFlow.Clusters/IClusterManager/GetConsumerGroupOffsetsAsync",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Clusters/IClusterManager/GetConsumerGroupOffsetsAsync",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow/KafkaFlow.Clusters/IClusterManager/GetConsumerGroupOffsetsAsync.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IClusterManager.CreateIfNotExistsAsync method",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Clusters/IClusterManager/CreateIfNotExistsAsync"},next:{title:"IClusterManager.GetTopicMetadataAsync method",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Clusters/IClusterManager/GetTopicMetadataAsync"}},c={},f=[{value:"Return Value",id:"return-value",level:2},{value:"See Also",id:"see-also",level:2}],u={toc:f};function i(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"iclustermanagergetconsumergroupoffsetsasync-method"},"IClusterManager.GetConsumerGroupOffsetsAsync method"),(0,n.kt)("p",null,"Retrieves the offsets for a specified consumer group and a collection of topics. The offsets indicate where the consumer group is in its consumption of the topics."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"public Task<IEnumerable<TopicPartitionOffset>> GetConsumerGroupOffsetsAsync(string consumerGroup, \n    IEnumerable<string> topicsName)\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"consumerGroup"),(0,n.kt)("td",{parentName:"tr",align:null},"The name of the consumer group for which to retrieve offsets.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"topicsName"),(0,n.kt)("td",{parentName:"tr",align:null},"A collection of topic names for which to retrieve offsets.")))),(0,n.kt)("h2",{id:"return-value"},"Return Value"),(0,n.kt)("p",null,"An enumerable collection of TopicPartitionOffset objects, each of which contains offset information for a specific topic partition in the consumer group."),(0,n.kt)("h2",{id:"see-also"},"See Also"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"interface\xa0",(0,n.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Clusters/IClusterManager/"},"IClusterManager")),(0,n.kt)("li",{parentName:"ul"},"namespace\xa0",(0,n.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/"},"KafkaFlow.Clusters"))))}i.isMDXComponent=!0}}]);