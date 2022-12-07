"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1387],{3905:(e,r,a)=>{a.d(r,{Zo:()=>f,kt:()=>p});var t=a(7294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function l(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?l(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function o(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=t.createContext({}),c=function(e){var r=t.useContext(s),a=r;return e&&(a="function"==typeof e?e(r):i(i({},r),e)),a},f=function(e){var r=c(e.components);return t.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,f=o(e,["components","mdxType","originalType","parentName"]),u=c(a),p=n,m=u["".concat(s,".").concat(p)]||u[p]||d[p]||l;return a?t.createElement(m,i(i({ref:r},f),{},{components:a})):t.createElement(m,i({ref:r},f))}));function p(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1848:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var t=a(7462),n=(a(7294),a(3905));const l={},i="SerializerConsumerMiddleware constructor",o={unversionedId:"reference/KafkaFlow.Serializer/KafkaFlow/SerializerConsumerMiddleware/SerializerConsumerMiddleware",id:"reference/KafkaFlow.Serializer/KafkaFlow/SerializerConsumerMiddleware/SerializerConsumerMiddleware",title:"SerializerConsumerMiddleware constructor",description:"Initializes a new instance of the SerializerConsumerMiddleware class.",source:"@site/docs/reference/KafkaFlow.Serializer/KafkaFlow/SerializerConsumerMiddleware/SerializerConsumerMiddleware.md",sourceDirName:"reference/KafkaFlow.Serializer/KafkaFlow/SerializerConsumerMiddleware",slug:"/reference/KafkaFlow.Serializer/KafkaFlow/SerializerConsumerMiddleware/",permalink:"/kafkaflow/docs/reference/KafkaFlow.Serializer/KafkaFlow/SerializerConsumerMiddleware/",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow.Serializer/KafkaFlow/SerializerConsumerMiddleware/SerializerConsumerMiddleware.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ProducerMiddlewareConfigurationBuilder.AddSingleTypeSerializer&lt;TSerializer&gt; method (1 of 4)",permalink:"/kafkaflow/docs/reference/KafkaFlow.Serializer/KafkaFlow/ProducerMiddlewareConfigurationBuilder/AddSingleTypeSerializer"},next:{title:"SerializerConsumerMiddleware.Invoke method",permalink:"/kafkaflow/docs/reference/KafkaFlow.Serializer/KafkaFlow/SerializerConsumerMiddleware/Invoke"}},s={},c=[{value:"See Also",id:"see-also",level:2}],f={toc:c};function d(e){let{components:r,...a}=e;return(0,n.kt)("wrapper",(0,t.Z)({},f,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"serializerconsumermiddleware-constructor"},"SerializerConsumerMiddleware constructor"),(0,n.kt)("p",null,"Initializes a new instance of the ",(0,n.kt)("a",{parentName:"p",href:"/kafkaflow/docs/reference/KafkaFlow.Serializer/KafkaFlow/SerializerConsumerMiddleware/"},(0,n.kt)("inlineCode",{parentName:"a"},"SerializerConsumerMiddleware"))," class."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"public SerializerConsumerMiddleware(ISerializer serializer, IMessageTypeResolver typeResolver)\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"serializer"),(0,n.kt)("td",{parentName:"tr",align:null},"Instance of ISerializer")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"typeResolver"),(0,n.kt)("td",{parentName:"tr",align:null},"Instance of ",(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow.Serializer/KafkaFlow/IMessageTypeResolver/"},(0,n.kt)("inlineCode",{parentName:"a"},"IMessageTypeResolver")))))),(0,n.kt)("h2",{id:"see-also"},"See Also"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"interface\xa0",(0,n.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.Serializer/KafkaFlow/IMessageTypeResolver/"},"IMessageTypeResolver")),(0,n.kt)("li",{parentName:"ul"},"class\xa0",(0,n.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.Serializer/KafkaFlow/SerializerConsumerMiddleware/"},"SerializerConsumerMiddleware")),(0,n.kt)("li",{parentName:"ul"},"namespace\xa0",(0,n.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.Serializer/"},"KafkaFlow"))))}d.isMDXComponent=!0}}]);