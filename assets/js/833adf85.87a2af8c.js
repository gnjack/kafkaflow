"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5189],{3905:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var f=r.createContext({}),m=function(e){var t=r.useContext(f),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},k=function(e){var t=m(e.components);return r.createElement(f.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},i=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,f=e.parentName,k=s(e,["components","mdxType","originalType","parentName"]),i=m(a),c=n,p=i["".concat(f,".").concat(c)]||i[c]||u[c]||o;return a?r.createElement(p,l(l({ref:t},k),{},{components:a})):r.createElement(p,l({ref:t},k))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=i;var s={};for(var f in t)hasOwnProperty.call(t,f)&&(s[f]=t[f]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var m=2;m<o;m++)l[m]=a[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}i.displayName="MDXCreateElement"},34398:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var r=a(87462),n=(a(67294),a(3905));const o={},l="IConsumer interface",s={unversionedId:"reference/KafkaFlow/KafkaFlow.Consumers/IConsumer/IConsumer",id:"reference/KafkaFlow/KafkaFlow.Consumers/IConsumer/IConsumer",title:"IConsumer interface",description:"Represents a KafkaFlow consumer",source:"@site/docs/reference/KafkaFlow/KafkaFlow.Consumers/IConsumer/IConsumer.md",sourceDirName:"reference/KafkaFlow/KafkaFlow.Consumers/IConsumer",slug:"/reference/KafkaFlow/KafkaFlow.Consumers/IConsumer/",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IConsumer/",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow/KafkaFlow.Consumers/IConsumer/IConsumer.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ConsumerStatus enumeration",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/ConsumerStatus/"},next:{title:"IConsumer.Assignment property",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IConsumer/Assignment"}},f={},m=[{value:"Members",id:"members",level:2},{value:"See Also",id:"see-also",level:2}],k={toc:m};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"iconsumer-interface"},"IConsumer interface"),(0,n.kt)("p",null,"Represents a KafkaFlow consumer"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"public interface IConsumer : IDisposable\n")),(0,n.kt)("h2",{id:"members"},"Members"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"name"),(0,n.kt)("th",{parentName:"tr",align:null},"description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IConsumer/Assignment"},"Assignment"),"\xa0{\xa0get;\xa0}"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IConsumer/ClientInstanceName"},"ClientInstanceName"),"\xa0{\xa0get;\xa0}"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IConsumer/Configuration"},"Configuration"),"\xa0{\xa0get;\xa0}"),(0,n.kt)("td",{parentName:"tr",align:null},"Gets the consumer configuration")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IConsumer/FlowManager"},"FlowManager"),"\xa0{\xa0get;\xa0}"),(0,n.kt)("td",{parentName:"tr",align:null},"Gets the consumer ",(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IConsumerFlowManager/"},(0,n.kt)("inlineCode",{parentName:"a"},"IConsumerFlowManager")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IConsumer/MemberId"},"MemberId"),"\xa0{\xa0get;\xa0}"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IConsumer/Status"},"Status"),"\xa0{\xa0get;\xa0}"),(0,n.kt)("td",{parentName:"tr",align:null},"Gets the current consumer status")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IConsumer/Subscription"},"Subscription"),"\xa0{\xa0get;\xa0}"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IConsumer/Commit"},"Commit"),"(\u2026)"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IConsumer/ConsumeAsync"},"ConsumeAsync"),"(\u2026)"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IConsumer/GetPosition"},"GetPosition"),"(\u2026)"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IConsumer/GetTopicPartitionsLag"},"GetTopicPartitionsLag"),"()"),(0,n.kt)("td",{parentName:"tr",align:null},"Gets the lag of each topic/partitions assigned")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IConsumer/GetWatermarkOffsets"},"GetWatermarkOffsets"),"(\u2026)"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IConsumer/OffsetsForTimes"},"OffsetsForTimes"),"(\u2026)"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IConsumer/OnError"},"OnError"),"(\u2026)"),(0,n.kt)("td",{parentName:"tr",align:null},"Register a handler to be executed when an error occurs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IConsumer/OnPartitionsAssigned"},"OnPartitionsAssigned"),"(\u2026)"),(0,n.kt)("td",{parentName:"tr",align:null},"Register a handler to be executed when the partitions are assigned")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IConsumer/OnPartitionsRevoked"},"OnPartitionsRevoked"),"(\u2026)"),(0,n.kt)("td",{parentName:"tr",align:null},"Register a handler to be executed when the partitions are revoked")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IConsumer/OnStatistics"},"OnStatistics"),"(\u2026)"),(0,n.kt)("td",{parentName:"tr",align:null},"Register a handler to be executed to receive statistics information")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IConsumer/QueryWatermarkOffsets"},"QueryWatermarkOffsets"),"(\u2026)"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h2",{id:"see-also"},"See Also"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"namespace\xa0",(0,n.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/"},"KafkaFlow.Consumers"))))}u.isMDXComponent=!0}}]);