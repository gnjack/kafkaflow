"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3018],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),f=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=f(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=f(n),p=a,m=c["".concat(s,".").concat(p)]||c[p]||u[p]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var f=2;f<i;f++)o[f]=n[f];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},231:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>f});var r=n(7462),a=(n(7294),n(3905));const i={},o="ConfigurationBuilderExtensions.WithPendingOffsetsStatisticsHandler method",l={unversionedId:"reference/KafkaFlow/KafkaFlow/ConfigurationBuilderExtensions/WithPendingOffsetsStatisticsHandler",id:"reference/KafkaFlow/KafkaFlow/ConfigurationBuilderExtensions/WithPendingOffsetsStatisticsHandler",title:"ConfigurationBuilderExtensions.WithPendingOffsetsStatisticsHandler method",description:"Adds a handler to be executed when KafkaFlow has pending offsets to be committed",source:"@site/docs/reference/KafkaFlow/KafkaFlow/ConfigurationBuilderExtensions/WithPendingOffsetsStatisticsHandler.md",sourceDirName:"reference/KafkaFlow/KafkaFlow/ConfigurationBuilderExtensions",slug:"/reference/KafkaFlow/KafkaFlow/ConfigurationBuilderExtensions/WithPendingOffsetsStatisticsHandler",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/ConfigurationBuilderExtensions/WithPendingOffsetsStatisticsHandler",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow/KafkaFlow/ConfigurationBuilderExtensions/WithPendingOffsetsStatisticsHandler.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ConfigurationBuilderExtensions.WithPartitionsRevokedHandler method",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/ConfigurationBuilderExtensions/WithPartitionsRevokedHandler"},next:{title:"ConfigurationBuilderExtensions.WithProducerConfig method",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/ConfigurationBuilderExtensions/WithProducerConfig"}},s={},f=[{value:"See Also",id:"see-also",level:2}],d={toc:f};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configurationbuilderextensionswithpendingoffsetsstatisticshandler-method"},"ConfigurationBuilderExtensions.WithPendingOffsetsStatisticsHandler method"),(0,a.kt)("p",null,"Adds a handler to be executed when KafkaFlow has pending offsets to be committed"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public static IConsumerConfigurationBuilder WithPendingOffsetsStatisticsHandler(\n    this IConsumerConfigurationBuilder builder, \n    Action<IDependencyResolver, IEnumerable<TopicPartitionOffset>> pendingOffsetsHandler, \n    TimeSpan interval)\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"builder"),(0,a.kt)("td",{parentName:"tr",align:null},"The configuration builder")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pendingOffsetsHandler"),(0,a.kt)("td",{parentName:"tr",align:null},"A handler for the consumer pending offsets state")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"interval"),(0,a.kt)("td",{parentName:"tr",align:null},"The time interval between handler executions")))),(0,a.kt)("h2",{id:"see-also"},"See Also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"class\xa0",(0,a.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/ConfigurationBuilderExtensions/"},"ConfigurationBuilderExtensions")),(0,a.kt)("li",{parentName:"ul"},"namespace\xa0",(0,a.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/"},"KafkaFlow"))))}u.isMDXComponent=!0}}]);