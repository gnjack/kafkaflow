"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6519],{3905:(e,r,a)=>{a.d(r,{Zo:()=>u,kt:()=>f});var t=a(7294);function i(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function l(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function n(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?l(Object(a),!0).forEach((function(r){i(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function o(e,r){if(null==e)return{};var a,t,i=function(e,r){if(null==e)return{};var a,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],r.indexOf(a)>=0||(i[a]=e[a]);return i}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=t.createContext({}),s=function(e){var r=t.useContext(d),a=r;return e&&(a="function"==typeof e?e(r):n(n({},r),e)),a},u=function(e){var r=s(e.components);return t.createElement(d.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var a=e.components,i=e.mdxType,l=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(a),f=i,k=p["".concat(d,".").concat(f)]||p[f]||m[f]||l;return a?t.createElement(k,n(n({ref:r},u),{},{components:a})):t.createElement(k,n({ref:r},u))}));function f(e,r){var a=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var l=a.length,n=new Array(l);n[0]=p;var o={};for(var d in r)hasOwnProperty.call(r,d)&&(o[d]=r[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,n[1]=o;for(var s=2;s<l;s++)n[s]=a[s];return t.createElement.apply(null,n)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},1714:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>d,contentTitle:()=>n,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var t=a(7462),i=(a(7294),a(3905));const l={},n="ConsumerMiddlewareConfigurationBuilderExtensions.AddSingleTypeSerializer&lt;TSerializer&gt; method (1 of 4)",o={unversionedId:"reference/KafkaFlow.Serializer/KafkaFlow/ConsumerMiddlewareConfigurationBuilderExtensions/AddSingleTypeSerializer",id:"reference/KafkaFlow.Serializer/KafkaFlow/ConsumerMiddlewareConfigurationBuilderExtensions/AddSingleTypeSerializer",title:"ConsumerMiddlewareConfigurationBuilderExtensions.AddSingleTypeSerializer&lt;TSerializer&gt; method (1 of 4)",description:"Register a middleware to deserialize the message to a fixed type",source:"@site/docs/reference/KafkaFlow.Serializer/KafkaFlow/ConsumerMiddlewareConfigurationBuilderExtensions/AddSingleTypeSerializer.md",sourceDirName:"reference/KafkaFlow.Serializer/KafkaFlow/ConsumerMiddlewareConfigurationBuilderExtensions",slug:"/reference/KafkaFlow.Serializer/KafkaFlow/ConsumerMiddlewareConfigurationBuilderExtensions/AddSingleTypeSerializer",permalink:"/kafkaflow/docs/reference/KafkaFlow.Serializer/KafkaFlow/ConsumerMiddlewareConfigurationBuilderExtensions/AddSingleTypeSerializer",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow.Serializer/KafkaFlow/ConsumerMiddlewareConfigurationBuilderExtensions/AddSingleTypeSerializer.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ConsumerMiddlewareConfigurationBuilderExtensions.AddSerializer&lt;TSerializer&gt; method (1 of 4)",permalink:"/kafkaflow/docs/reference/KafkaFlow.Serializer/KafkaFlow/ConsumerMiddlewareConfigurationBuilderExtensions/AddSerializer"},next:{title:"IMessageTypeResolver interface",permalink:"/kafkaflow/docs/reference/KafkaFlow.Serializer/KafkaFlow/IMessageTypeResolver/"}},d={},s=[{value:"See Also",id:"see-also",level:2},{value:"See Also",id:"see-also-1",level:2},{value:"See Also",id:"see-also-2",level:2},{value:"See Also",id:"see-also-3",level:2}],u={toc:s};function m(e){let{components:r,...a}=e;return(0,i.kt)("wrapper",(0,t.Z)({},u,a,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"consumermiddlewareconfigurationbuilderextensionsaddsingletypeserializertserializer-method-1-of-4"},"ConsumerMiddlewareConfigurationBuilderExtensions.AddSingleTypeSerializer","<","TSerializer",">"," method (1 of 4)"),(0,i.kt)("p",null,"Register a middleware to deserialize the message to a fixed type"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"public static IConsumerMiddlewareConfigurationBuilder AddSingleTypeSerializer<TSerializer>(\n    this IConsumerMiddlewareConfigurationBuilder middlewares, Type messageType)\n    where TSerializer : class, ISerializer\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TSerializer"),(0,i.kt)("td",{parentName:"tr",align:null},"A class that implements ISerializer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"middlewares"),(0,i.kt)("td",{parentName:"tr",align:null},"The middleware configuration builder")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"messageType"),(0,i.kt)("td",{parentName:"tr",align:null},"The message type")))),(0,i.kt)("h2",{id:"see-also"},"See Also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"class\xa0",(0,i.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.Serializer/KafkaFlow/ConsumerMiddlewareConfigurationBuilderExtensions/"},"ConsumerMiddlewareConfigurationBuilderExtensions")),(0,i.kt)("li",{parentName:"ul"},"namespace\xa0",(0,i.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.Serializer/"},"KafkaFlow"))),(0,i.kt)("hr",null),(0,i.kt)("h1",{id:"consumermiddlewareconfigurationbuilderextensionsaddsingletypeserializertserializer-method-2-of-4"},"ConsumerMiddlewareConfigurationBuilderExtensions.AddSingleTypeSerializer","<","TSerializer",">"," method (2 of 4)"),(0,i.kt)("p",null,"Register a middleware to deserialize the message to a fixed type"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"public static IConsumerMiddlewareConfigurationBuilder AddSingleTypeSerializer<TSerializer>(\n    this IConsumerMiddlewareConfigurationBuilder middlewares, \n    Factory<TSerializer> serializerFactory, Type messageType)\n    where TSerializer : class, ISerializer\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TSerializer"),(0,i.kt)("td",{parentName:"tr",align:null},"A class that implements ISerializer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"middlewares"),(0,i.kt)("td",{parentName:"tr",align:null},"The middleware configuration builder")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"serializerFactory"),(0,i.kt)("td",{parentName:"tr",align:null},"A factory to create a ISerializer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"messageType"),(0,i.kt)("td",{parentName:"tr",align:null},"The message type")))),(0,i.kt)("h2",{id:"see-also-1"},"See Also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"class\xa0",(0,i.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.Serializer/KafkaFlow/ConsumerMiddlewareConfigurationBuilderExtensions/"},"ConsumerMiddlewareConfigurationBuilderExtensions")),(0,i.kt)("li",{parentName:"ul"},"namespace\xa0",(0,i.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.Serializer/"},"KafkaFlow"))),(0,i.kt)("hr",null),(0,i.kt)("h1",{id:"consumermiddlewareconfigurationbuilderextensionsaddsingletypeserializertmessagetserializer-method-3-of-4"},"ConsumerMiddlewareConfigurationBuilderExtensions.AddSingleTypeSerializer","<","TMessage,TSerializer",">"," method (3 of 4)"),(0,i.kt)("p",null,"Register a middleware to deserialize the message to a fixed type"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"public static IConsumerMiddlewareConfigurationBuilder \n    AddSingleTypeSerializer<TMessage, TSerializer>(\n    this IConsumerMiddlewareConfigurationBuilder middlewares)\n    where TSerializer : class, ISerializer\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TMessage"),(0,i.kt)("td",{parentName:"tr",align:null},"The message type")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TSerializer"),(0,i.kt)("td",{parentName:"tr",align:null},"A class that implements ISerializer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"middlewares"),(0,i.kt)("td",{parentName:"tr",align:null},"The middleware configuration builder")))),(0,i.kt)("h2",{id:"see-also-2"},"See Also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"class\xa0",(0,i.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.Serializer/KafkaFlow/ConsumerMiddlewareConfigurationBuilderExtensions/"},"ConsumerMiddlewareConfigurationBuilderExtensions")),(0,i.kt)("li",{parentName:"ul"},"namespace\xa0",(0,i.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.Serializer/"},"KafkaFlow"))),(0,i.kt)("hr",null),(0,i.kt)("h1",{id:"consumermiddlewareconfigurationbuilderextensionsaddsingletypeserializertmessagetserializer-method-4-of-4"},"ConsumerMiddlewareConfigurationBuilderExtensions.AddSingleTypeSerializer","<","TMessage,TSerializer",">"," method (4 of 4)"),(0,i.kt)("p",null,"Register a middleware to deserialize the message to a fixed type"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"public static IConsumerMiddlewareConfigurationBuilder \n    AddSingleTypeSerializer<TMessage, TSerializer>(\n    this IConsumerMiddlewareConfigurationBuilder middlewares, \n    Factory<TSerializer> serializerFactory)\n    where TSerializer : class, ISerializer\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TMessage"),(0,i.kt)("td",{parentName:"tr",align:null},"The message type")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TSerializer"),(0,i.kt)("td",{parentName:"tr",align:null},"A class that implements ISerializer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"middlewares"),(0,i.kt)("td",{parentName:"tr",align:null},"The middleware configuration builder")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"serializerFactory"),(0,i.kt)("td",{parentName:"tr",align:null},"A factory to create a ISerializer")))),(0,i.kt)("h2",{id:"see-also-3"},"See Also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"class\xa0",(0,i.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.Serializer/KafkaFlow/ConsumerMiddlewareConfigurationBuilderExtensions/"},"ConsumerMiddlewareConfigurationBuilderExtensions")),(0,i.kt)("li",{parentName:"ul"},"namespace\xa0",(0,i.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.Serializer/"},"KafkaFlow"))))}m.isMDXComponent=!0}}]);