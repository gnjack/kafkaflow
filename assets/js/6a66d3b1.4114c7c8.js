"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8547],{3905:(e,r,a)=>{a.d(r,{Zo:()=>s,kt:()=>u});var t=a(67294);function l(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function n(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?n(Object(a),!0).forEach((function(r){l(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function i(e,r){if(null==e)return{};var a,t,l=function(e,r){if(null==e)return{};var a,t,l={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],r.indexOf(a)>=0||(l[a]=e[a]);return l}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=t.createContext({}),c=function(e){var r=t.useContext(d),a=r;return e&&(a="function"==typeof e?e(r):o(o({},r),e)),a},s=function(e){var r=c(e.components);return t.createElement(d.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var a=e.components,l=e.mdxType,n=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(a),u=l,k=p["".concat(d,".").concat(u)]||p[u]||f[u]||n;return a?t.createElement(k,o(o({ref:r},s),{},{components:a})):t.createElement(k,o({ref:r},s))}));function u(e,r){var a=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var n=a.length,o=new Array(n);o[0]=p;var i={};for(var d in r)hasOwnProperty.call(r,d)&&(i[d]=r[d]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var c=2;c<n;c++)o[c]=a[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},16380:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>f,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var t=a(87462),l=(a(67294),a(3905));const n={},o="SerializerProducerMiddleware.Invoke method",i={unversionedId:"reference/KafkaFlow/KafkaFlow.Middlewares.Serializer/SerializerProducerMiddleware/Invoke",id:"reference/KafkaFlow/KafkaFlow.Middlewares.Serializer/SerializerProducerMiddleware/Invoke",title:"SerializerProducerMiddleware.Invoke method",description:"Serializes message based on message type resolver strategy",source:"@site/docs/reference/KafkaFlow/KafkaFlow.Middlewares.Serializer/SerializerProducerMiddleware/Invoke.md",sourceDirName:"reference/KafkaFlow/KafkaFlow.Middlewares.Serializer/SerializerProducerMiddleware",slug:"/reference/KafkaFlow/KafkaFlow.Middlewares.Serializer/SerializerProducerMiddleware/Invoke",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Middlewares.Serializer/SerializerProducerMiddleware/Invoke",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow/KafkaFlow.Middlewares.Serializer/SerializerProducerMiddleware/Invoke.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SerializerProducerMiddleware constructor",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Middlewares.Serializer/SerializerProducerMiddleware/"},next:{title:"IMessageTypeResolver interface",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Middlewares.Serializer.Resolvers/IMessageTypeResolver/"}},d={},c=[{value:"See Also",id:"see-also",level:2}],s={toc:c};function f(e){let{components:r,...a}=e;return(0,l.kt)("wrapper",(0,t.Z)({},s,a,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"serializerproducermiddlewareinvoke-method"},"SerializerProducerMiddleware.Invoke method"),(0,l.kt)("p",null,"Serializes message based on message type resolver strategy"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"public Task Invoke(IMessageContext context, MiddlewareDelegate next)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"context"),(0,l.kt)("td",{parentName:"tr",align:null},"The IMessageContext containing the message and metadata")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"next"),(0,l.kt)("td",{parentName:"tr",align:null},"A delegate to call next middleware")))),(0,l.kt)("h2",{id:"see-also"},"See Also"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"class\xa0",(0,l.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Middlewares.Serializer/SerializerProducerMiddleware/"},"SerializerProducerMiddleware")),(0,l.kt)("li",{parentName:"ul"},"namespace\xa0",(0,l.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/"},"KafkaFlow.Middlewares.Serializer"))))}f.isMDXComponent=!0}}]);