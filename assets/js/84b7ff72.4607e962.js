"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3469],{3905:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>m});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),u=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},c=function(e){var r=u(e.components);return t.createElement(l.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||f[m]||i;return n?t.createElement(g,o(o({ref:r},c),{},{components:n})):t.createElement(g,o({ref:r},c))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46224:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var t=n(87462),a=(n(67294),n(3905));const i={},o="ConsumerConfigurationBuilderExtensions.AddSchemaRegistryJsonSerializer&lt;TMessage&gt; method",s={unversionedId:"reference/KafkaFlow.Serializer.SchemaRegistry.ConfluentJson/KafkaFlow/ConsumerConfigurationBuilderExtensions/AddSchemaRegistryJsonSerializer",id:"reference/KafkaFlow.Serializer.SchemaRegistry.ConfluentJson/KafkaFlow/ConsumerConfigurationBuilderExtensions/AddSchemaRegistryJsonSerializer",title:"ConsumerConfigurationBuilderExtensions.AddSchemaRegistryJsonSerializer&lt;TMessage&gt; method",description:"Registers a middleware to deserialize json messages using schema registry",source:"@site/docs/reference/KafkaFlow.Serializer.SchemaRegistry.ConfluentJson/KafkaFlow/ConsumerConfigurationBuilderExtensions/AddSchemaRegistryJsonSerializer.md",sourceDirName:"reference/KafkaFlow.Serializer.SchemaRegistry.ConfluentJson/KafkaFlow/ConsumerConfigurationBuilderExtensions",slug:"/reference/KafkaFlow.Serializer.SchemaRegistry.ConfluentJson/KafkaFlow/ConsumerConfigurationBuilderExtensions/AddSchemaRegistryJsonSerializer",permalink:"/kafkaflow/docs/reference/KafkaFlow.Serializer.SchemaRegistry.ConfluentJson/KafkaFlow/ConsumerConfigurationBuilderExtensions/AddSchemaRegistryJsonSerializer",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow.Serializer.SchemaRegistry.ConfluentJson/KafkaFlow/ConsumerConfigurationBuilderExtensions/AddSchemaRegistryJsonSerializer.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ConsumerConfigurationBuilderExtensions class",permalink:"/kafkaflow/docs/reference/KafkaFlow.Serializer.SchemaRegistry.ConfluentJson/KafkaFlow/ConsumerConfigurationBuilderExtensions/"},next:{title:"ProducerConfigurationBuilderExtensions class",permalink:"/kafkaflow/docs/reference/KafkaFlow.Serializer.SchemaRegistry.ConfluentJson/KafkaFlow/ProducerConfigurationBuilderExtensions/"}},l={},u=[{value:"See Also",id:"see-also",level:2}],c={toc:u};function f(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"consumerconfigurationbuilderextensionsaddschemaregistryjsonserializertmessage-method"},"ConsumerConfigurationBuilderExtensions.AddSchemaRegistryJsonSerializer","<","TMessage",">"," method"),(0,a.kt)("p",null,"Registers a middleware to deserialize json messages using schema registry"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public static IConsumerMiddlewareConfigurationBuilder AddSchemaRegistryJsonSerializer<TMessage>(\n    this IConsumerMiddlewareConfigurationBuilder middlewares)\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TMessage"),(0,a.kt)("td",{parentName:"tr",align:null},"The message type")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"middlewares"),(0,a.kt)("td",{parentName:"tr",align:null},"The middleware configuration builder")))),(0,a.kt)("h2",{id:"see-also"},"See Also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"class\xa0",(0,a.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.Serializer.SchemaRegistry.ConfluentJson/KafkaFlow/ConsumerConfigurationBuilderExtensions/"},"ConsumerConfigurationBuilderExtensions")),(0,a.kt)("li",{parentName:"ul"},"namespace\xa0",(0,a.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.Serializer.SchemaRegistry.ConfluentJson/"},"KafkaFlow"))))}f.isMDXComponent=!0}}]);