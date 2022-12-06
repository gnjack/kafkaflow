"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5299],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),c=i(n),f=a,d=c["".concat(s,".").concat(f)]||c[f]||p[f]||o;return n?r.createElement(d,l(l({ref:t},m),{},{components:n})):r.createElement(d,l({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8602:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const o={},l="ConsumerStatus enumeration",u={unversionedId:"reference/KafkaFlow/KafkaFlow.Consumers/ConsumerStatus/ConsumerStatus",id:"reference/KafkaFlow/KafkaFlow.Consumers/ConsumerStatus/ConsumerStatus",title:"ConsumerStatus enumeration",description:"An enum with all consumer status",source:"@site/docs/reference/KafkaFlow/KafkaFlow.Consumers/ConsumerStatus/ConsumerStatus.md",sourceDirName:"reference/KafkaFlow/KafkaFlow.Consumers/ConsumerStatus",slug:"/reference/KafkaFlow/KafkaFlow.Consumers/ConsumerStatus/",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/ConsumerStatus/",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow/KafkaFlow.Consumers/ConsumerStatus/ConsumerStatus.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TopicConfiguration.Replicas property",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Configuration/TopicConfiguration/Replicas"},next:{title:"IConsumer interface",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IConsumer/"}},s={},i=[{value:"Values",id:"values",level:2},{value:"See Also",id:"see-also",level:2}],m={toc:i};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"consumerstatus-enumeration"},"ConsumerStatus enumeration"),(0,a.kt)("p",null,"An enum with all consumer status"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public enum ConsumerStatus\n")),(0,a.kt)("h2",{id:"values"},"Values"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"name"),(0,a.kt)("th",{parentName:"tr",align:null},"value"),(0,a.kt)("th",{parentName:"tr",align:null},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Stopped"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"0")),(0,a.kt)("td",{parentName:"tr",align:null},"When the consumer is stopped")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Running"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"1")),(0,a.kt)("td",{parentName:"tr",align:null},"When all consumer partitions are running")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"PartiallyRunning"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"2")),(0,a.kt)("td",{parentName:"tr",align:null},"When the consumer has paused and running partitions at the same time")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Paused"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"3")),(0,a.kt)("td",{parentName:"tr",align:null},"When all consumer partitions are paused")))),(0,a.kt)("h2",{id:"see-also"},"See Also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"namespace\xa0",(0,a.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/"},"KafkaFlow.Consumers"))))}p.isMDXComponent=!0}}]);