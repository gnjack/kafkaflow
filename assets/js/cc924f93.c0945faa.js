"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3624],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,p=d["".concat(s,".").concat(m)]||d[m]||f[m]||i;return t?n.createElement(p,o(o({ref:r},c),{},{components:t})):n.createElement(p,o({ref:r},c))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},54389:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=t(87462),a=(t(67294),t(3905));const i={},o="ConsumerConfigurationBuilderExtensions.AddSchemaRegistryAvroSerializer method",l={unversionedId:"reference/KafkaFlow.Serializer.SchemaRegistry.ConfluentAvro/KafkaFlow/ConsumerConfigurationBuilderExtensions/AddSchemaRegistryAvroSerializer",id:"reference/KafkaFlow.Serializer.SchemaRegistry.ConfluentAvro/KafkaFlow/ConsumerConfigurationBuilderExtensions/AddSchemaRegistryAvroSerializer",title:"ConsumerConfigurationBuilderExtensions.AddSchemaRegistryAvroSerializer method",description:"Registers a middleware to deserialize avro messages using schema registry",source:"@site/docs/reference/KafkaFlow.Serializer.SchemaRegistry.ConfluentAvro/KafkaFlow/ConsumerConfigurationBuilderExtensions/AddSchemaRegistryAvroSerializer.md",sourceDirName:"reference/KafkaFlow.Serializer.SchemaRegistry.ConfluentAvro/KafkaFlow/ConsumerConfigurationBuilderExtensions",slug:"/reference/KafkaFlow.Serializer.SchemaRegistry.ConfluentAvro/KafkaFlow/ConsumerConfigurationBuilderExtensions/AddSchemaRegistryAvroSerializer",permalink:"/kafkaflow/docs/reference/KafkaFlow.Serializer.SchemaRegistry.ConfluentAvro/KafkaFlow/ConsumerConfigurationBuilderExtensions/AddSchemaRegistryAvroSerializer",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow.Serializer.SchemaRegistry.ConfluentAvro/KafkaFlow/ConsumerConfigurationBuilderExtensions/AddSchemaRegistryAvroSerializer.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ConsumerConfigurationBuilderExtensions class",permalink:"/kafkaflow/docs/reference/KafkaFlow.Serializer.SchemaRegistry.ConfluentAvro/KafkaFlow/ConsumerConfigurationBuilderExtensions/"},next:{title:"ProducerConfigurationBuilderExtensions class",permalink:"/kafkaflow/docs/reference/KafkaFlow.Serializer.SchemaRegistry.ConfluentAvro/KafkaFlow/ProducerConfigurationBuilderExtensions/"}},s={},u=[{value:"See Also",id:"see-also",level:2}],c={toc:u};function f(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"consumerconfigurationbuilderextensionsaddschemaregistryavroserializer-method"},"ConsumerConfigurationBuilderExtensions.AddSchemaRegistryAvroSerializer method"),(0,a.kt)("p",null,"Registers a middleware to deserialize avro messages using schema registry"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public static IConsumerMiddlewareConfigurationBuilder AddSchemaRegistryAvroSerializer(\n    this IConsumerMiddlewareConfigurationBuilder middlewares)\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"middlewares"),(0,a.kt)("td",{parentName:"tr",align:null},"The middleware configuration builder")))),(0,a.kt)("h2",{id:"see-also"},"See Also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"class\xa0",(0,a.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.Serializer.SchemaRegistry.ConfluentAvro/KafkaFlow/ConsumerConfigurationBuilderExtensions/"},"ConsumerConfigurationBuilderExtensions")),(0,a.kt)("li",{parentName:"ul"},"namespace\xa0",(0,a.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.Serializer.SchemaRegistry.ConfluentAvro/"},"KafkaFlow"))))}f.isMDXComponent=!0}}]);