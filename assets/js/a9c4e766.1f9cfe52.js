"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1370],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),f=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=f(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=f(r),k=a,d=p["".concat(u,".").concat(k)]||p[k]||c[k]||o;return r?n.createElement(d,l(l({ref:t},s),{},{components:r})):n.createElement(d,l({ref:t},s))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var f=2;f<o;f++)l[f]=r[f];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},21038:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>f});var n=r(87462),a=(r(67294),r(3905));const o={},l="ClusterConfiguration constructor",i={unversionedId:"reference/KafkaFlow/KafkaFlow.Configuration/ClusterConfiguration/ClusterConfiguration",id:"reference/KafkaFlow/KafkaFlow.Configuration/ClusterConfiguration/ClusterConfiguration",title:"ClusterConfiguration constructor",description:"Initializes a new instance of the ClusterConfiguration class.",source:"@site/docs/reference/KafkaFlow/KafkaFlow.Configuration/ClusterConfiguration/ClusterConfiguration.md",sourceDirName:"reference/KafkaFlow/KafkaFlow.Configuration/ClusterConfiguration",slug:"/reference/KafkaFlow/KafkaFlow.Configuration/ClusterConfiguration/",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Configuration/ClusterConfiguration/",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow/KafkaFlow.Configuration/ClusterConfiguration/ClusterConfiguration.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IClusterManager.GetTopicMetadataAsync method",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Clusters/IClusterManager/GetTopicMetadataAsync"},next:{title:"ClusterConfiguration.AddConsumers method",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Configuration/ClusterConfiguration/AddConsumers"}},u={},f=[{value:"See Also",id:"see-also",level:2}],s={toc:f};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"clusterconfiguration-constructor"},"ClusterConfiguration constructor"),(0,a.kt)("p",null,"Initializes a new instance of the ",(0,a.kt)("a",{parentName:"p",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Configuration/ClusterConfiguration/"},(0,a.kt)("inlineCode",{parentName:"a"},"ClusterConfiguration"))," class."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public ClusterConfiguration(KafkaConfiguration kafka, string name, IEnumerable<string> brokers, \n    Func<SecurityInformation> securityInformationHandler, \n    Action<IDependencyResolver> onStartedHandler, Action<IDependencyResolver> onStoppingHandler, \n    IEnumerable<TopicConfiguration> topicsToCreateIfNotExist = null)\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"kafka"),(0,a.kt)("td",{parentName:"tr",align:null},"The kafka configuration")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"name"),(0,a.kt)("td",{parentName:"tr",align:null},"The cluster name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"brokers"),(0,a.kt)("td",{parentName:"tr",align:null},"The list of brokers")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"securityInformationHandler"),(0,a.kt)("td",{parentName:"tr",align:null},"The security information handler")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"onStartedHandler"),(0,a.kt)("td",{parentName:"tr",align:null},"The handler to be executed when the cluster started")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"onStoppingHandler"),(0,a.kt)("td",{parentName:"tr",align:null},"The handler to be executed when the cluster is stopping")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"topicsToCreateIfNotExist"),(0,a.kt)("td",{parentName:"tr",align:null},"Topics to create on startup if not exists")))),(0,a.kt)("h2",{id:"see-also"},"See Also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"class\xa0",(0,a.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Configuration/KafkaConfiguration/"},"KafkaConfiguration")),(0,a.kt)("li",{parentName:"ul"},"class\xa0",(0,a.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Configuration/TopicConfiguration/"},"TopicConfiguration")),(0,a.kt)("li",{parentName:"ul"},"class\xa0",(0,a.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Configuration/ClusterConfiguration/"},"ClusterConfiguration")),(0,a.kt)("li",{parentName:"ul"},"namespace\xa0",(0,a.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/"},"KafkaFlow.Configuration"))))}c.isMDXComponent=!0}}]);