"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1634],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var f=r.createContext({}),m=function(e){var t=r.useContext(f),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},i=function(e){var t=m(e.components);return r.createElement(f.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,f=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=m(a),c=n,d=u["".concat(f,".").concat(c)]||u[c]||k[c]||s;return a?r.createElement(d,o(o({ref:t},i),{},{components:a})):r.createElement(d,o({ref:t},i))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=c;var l={};for(var f in t)hasOwnProperty.call(t,f)&&(l[f]=t[f]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var m=2;m<s;m++)o[m]=a[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8584:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>o,default:()=>k,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var r=a(87462),n=(a(67294),a(3905));const s={},o="IMessageConsumer interface",l={unversionedId:"reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/IMessageConsumer",id:"reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/IMessageConsumer",title:"IMessageConsumer interface",description:"Provides access to the kafka message consumer",source:"@site/docs/reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/IMessageConsumer.md",sourceDirName:"reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer",slug:"/reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/IMessageConsumer.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IConsumerMiddlewareContext.Worker property",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IConsumerMiddlewareContext/Worker"},next:{title:"IMessageConsumer.Assignment property",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/Assignment"}},f={},m=[{value:"Members",id:"members",level:2},{value:"See Also",id:"see-also",level:2}],i={toc:m},u="wrapper";function k(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"imessageconsumer-interface"},"IMessageConsumer interface"),(0,n.kt)("p",null,"Provides access to the kafka message consumer"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"public interface IMessageConsumer\n")),(0,n.kt)("h2",{id:"members"},"Members"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"name"),(0,n.kt)("th",{parentName:"tr",align:null},"description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/Assignment"},"Assignment"),"\xa0{\xa0get;\xa0}"),(0,n.kt)("td",{parentName:"tr",align:null},"Gets the current partition assignment")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/ClientInstanceName"},"ClientInstanceName"),"\xa0{\xa0get;\xa0}"),(0,n.kt)("td",{parentName:"tr",align:null},"Gets the name of this client instance. Contains (but is not equal to) the client.id configuration parameter.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/ClusterName"},"ClusterName"),"\xa0{\xa0get;\xa0}"),(0,n.kt)("td",{parentName:"tr",align:null},"Gets the unique cluster\xb4s name defined in the configuration")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/ConsumerName"},"ConsumerName"),"\xa0{\xa0get;\xa0}"),(0,n.kt)("td",{parentName:"tr",align:null},"Gets the unique consumer\xb4s name defined in the configuration")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/GroupId"},"GroupId"),"\xa0{\xa0get;\xa0}"),(0,n.kt)("td",{parentName:"tr",align:null},"Gets the group id define in the configuration")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/ManagementDisabled"},"ManagementDisabled"),"\xa0{\xa0get;\xa0}"),(0,n.kt)("td",{parentName:"tr",align:null},"Gets a value indicating whether the consumer is able to be manageable or not")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/MemberId"},"MemberId"),"\xa0{\xa0get;\xa0}"),(0,n.kt)("td",{parentName:"tr",align:null},"Gets the (dynamic) group member id of this consumer (as set by the broker).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/PausedPartitions"},"PausedPartitions"),"\xa0{\xa0get;\xa0}"),(0,n.kt)("td",{parentName:"tr",align:null},"Gets the consumer's paused partitions")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/RunningPartitions"},"RunningPartitions"),"\xa0{\xa0get;\xa0}"),(0,n.kt)("td",{parentName:"tr",align:null},"Gets the consumer's running partitions")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/Status"},"Status"),"\xa0{\xa0get;\xa0}"),(0,n.kt)("td",{parentName:"tr",align:null},"Gets the current consumer status")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/Subscription"},"Subscription"),"\xa0{\xa0get;\xa0}"),(0,n.kt)("td",{parentName:"tr",align:null},"Gets the current topic subscription")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/Topics"},"Topics"),"\xa0{\xa0get;\xa0}"),(0,n.kt)("td",{parentName:"tr",align:null},"Gets the consumer configured topics")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/WorkersCount"},"WorkersCount"),"\xa0{\xa0get;\xa0}"),(0,n.kt)("td",{parentName:"tr",align:null},"Gets the current number of workers allocated of the consumer")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/ChangeWorkersCountAndRestartAsync"},"ChangeWorkersCountAndRestartAsync"),"(\u2026)"),(0,n.kt)("td",{parentName:"tr",align:null},"Restart the current consumer with the new worker count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/GetOffsets"},"GetOffsets"),"(\u2026)"),(0,n.kt)("td",{parentName:"tr",align:null},"Look up the offsets for the given partitions by timestamp. The returned offset for each partition is the earliest offset whose timestamp is greater than or equal to the given timestamp in the corresponding partition.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/GetPosition"},"GetPosition"),"(\u2026)"),(0,n.kt)("td",{parentName:"tr",align:null},"Gets the current position (offset) for the specified topic / partition. The offset field of each requested partition will be set to the offset of the last consumed message + 1, or Offset.Unset in case there was no previous message consumed by this consumer.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/GetTopicPartitionsLag"},"GetTopicPartitionsLag"),"()"),(0,n.kt)("td",{parentName:"tr",align:null},"Gets the lag of each topic/partitions assigned")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/GetWatermarkOffsets"},"GetWatermarkOffsets"),"(\u2026)"),(0,n.kt)("td",{parentName:"tr",align:null},"Get the last cached low (oldest available / beginning) and high (newest/end) offsets for a topic/partition. Does not block.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/OverrideOffsetsAndRestartAsync"},"OverrideOffsetsAndRestartAsync"),"(\u2026)"),(0,n.kt)("td",{parentName:"tr",align:null},"Overrides the offsets of the given partitions and restart the consumer")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/Pause"},"Pause"),"(\u2026)"),(0,n.kt)("td",{parentName:"tr",align:null},"Pause consumption for the provided list of partitions.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/QueryWatermarkOffsets"},"QueryWatermarkOffsets"),"(\u2026)"),(0,n.kt)("td",{parentName:"tr",align:null},"Query the Kafka cluster for low (oldest available/beginning) and high (newest/end) offsets for the specified topic/partition. This is a blocking call - always contacts the cluster for the required information.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/RestartAsync"},"RestartAsync"),"()"),(0,n.kt)("td",{parentName:"tr",align:null},"Restart KafkaFlow consumer and recreate the internal Confluent Consumer")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/Resume"},"Resume"),"(\u2026)"),(0,n.kt)("td",{parentName:"tr",align:null},"Resume consumption for the provided list of partitions.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/StartAsync"},"StartAsync"),"()"),(0,n.kt)("td",{parentName:"tr",align:null},"Starts KafkaFlow consumer creating a new Confluent Consumer")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/StopAsync"},"StopAsync"),"()"),(0,n.kt)("td",{parentName:"tr",align:null},"Stops KafkaFlow consumer destroying the Confluent Consumer")))),(0,n.kt)("h2",{id:"see-also"},"See Also"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"namespace\xa0",(0,n.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/"},"KafkaFlow.Consumers"))))}k.isMDXComponent=!0}}]);