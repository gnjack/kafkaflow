"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[128],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),d=n,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||o;return a?r.createElement(m,l(l({ref:t},u),{},{components:a})):r.createElement(m,l({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},14900:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={},l="IClusterManager.GetTopicMetadataAsync method",i={unversionedId:"reference/KafkaFlow/KafkaFlow.Clusters/IClusterManager/GetTopicMetadataAsync",id:"reference/KafkaFlow/KafkaFlow.Clusters/IClusterManager/GetTopicMetadataAsync",title:"IClusterManager.GetTopicMetadataAsync method",description:"Retrieves the metadata for a specified topic. This includes information about the topic as well as its partitions.",source:"@site/docs/reference/KafkaFlow/KafkaFlow.Clusters/IClusterManager/GetTopicMetadataAsync.md",sourceDirName:"reference/KafkaFlow/KafkaFlow.Clusters/IClusterManager",slug:"/reference/KafkaFlow/KafkaFlow.Clusters/IClusterManager/GetTopicMetadataAsync",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Clusters/IClusterManager/GetTopicMetadataAsync",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow/KafkaFlow.Clusters/IClusterManager/GetTopicMetadataAsync.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IClusterManager.GetConsumerGroupOffsetsAsync method",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Clusters/IClusterManager/GetConsumerGroupOffsetsAsync"},next:{title:"ClusterConfiguration constructor",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Configuration/ClusterConfiguration/"}},s={},c=[{value:"Return Value",id:"return-value",level:2},{value:"See Also",id:"see-also",level:2}],u={toc:c};function f(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"iclustermanagergettopicmetadataasync-method"},"IClusterManager.GetTopicMetadataAsync method"),(0,n.kt)("p",null,"Retrieves the metadata for a specified topic. This includes information about the topic as well as its partitions."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"public ValueTask<TopicMetadata> GetTopicMetadataAsync(string topicName)\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"topicName"),(0,n.kt)("td",{parentName:"tr",align:null},"The name of the topic for which to retrieve metadata.")))),(0,n.kt)("h2",{id:"return-value"},"Return Value"),(0,n.kt)("p",null,"A TopicMetadata object that contains information about the topic and its partitions."),(0,n.kt)("h2",{id:"see-also"},"See Also"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"record\xa0",(0,n.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/TopicMetadata/"},"TopicMetadata")),(0,n.kt)("li",{parentName:"ul"},"interface\xa0",(0,n.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Clusters/IClusterManager/"},"IClusterManager")),(0,n.kt)("li",{parentName:"ul"},"namespace\xa0",(0,n.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/"},"KafkaFlow.Clusters"))))}f.isMDXComponent=!0}}]);