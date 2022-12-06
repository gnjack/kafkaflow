"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9247],{3905:(t,a,e)=>{e.d(a,{Zo:()=>p,kt:()=>w});var r=e(7294);function n(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,r)}return e}function o(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){n(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function i(t,a){if(null==t)return{};var e,r,n=function(t,a){if(null==t)return{};var e,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)e=l[r],a.indexOf(e)>=0||(n[e]=t[e]);return n}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)e=l[r],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(n[e]=t[e])}return n}var s=r.createContext({}),g=function(t){var a=r.useContext(s),e=a;return t&&(e="function"==typeof t?t(a):o(o({},a),t)),e},p=function(t){var a=g(t.components);return r.createElement(s.Provider,{value:a},t.children)},k={inlineCode:"code",wrapper:function(t){var a=t.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(t,a){var e=t.components,n=t.mdxType,l=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),m=g(e),w=n,d=m["".concat(s,".").concat(w)]||m[w]||k[w]||l;return e?r.createElement(d,o(o({ref:a},p),{},{components:e})):r.createElement(d,o({ref:a},p))}));function w(t,a){var e=arguments,n=a&&a.mdxType;if("string"==typeof t||n){var l=e.length,o=new Array(l);o[0]=m;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=t,i.mdxType="string"==typeof t?t:n,o[1]=i;for(var g=2;g<l;g++)o[g]=e[g];return r.createElement.apply(null,o)}return r.createElement.apply(null,e)}m.displayName="MDXCreateElement"},8025:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>g});var r=e(7462),n=(e(7294),e(3905));const l={sidebar_position:4},o="Packages",i={unversionedId:"getting-started/packages",id:"getting-started/packages",title:"Packages",description:"Core",source:"@site/docs/getting-started/packages.md",sourceDirName:"getting-started",slug:"/getting-started/packages",permalink:"/kafkaflow/docs/getting-started/packages",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/getting-started/packages.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Quickstart",permalink:"/kafkaflow/docs/getting-started/create-your-first-application"},next:{title:"Guides",permalink:"/kafkaflow/docs/category/guides"}},s={},g=[{value:"Core",id:"core",level:2},{value:"Serialization",id:"serialization",level:2},{value:"Compression",id:"compression",level:2},{value:"Middlewares",id:"middlewares",level:2},{value:"Dependency Injection",id:"dependency-injection",level:2},{value:"Administration",id:"administration",level:2}],p={toc:g};function k(t){let{components:a,...e}=t;return(0,n.kt)("wrapper",(0,r.Z)({},p,e,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"packages"},"Packages"),(0,n.kt)("h2",{id:"core"},"Core"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Package"),(0,n.kt)("th",{parentName:"tr",align:null},"NuGet Stable"),(0,n.kt)("th",{parentName:"tr",align:null},"Downloads"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow/"},"KafkaFlow")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/v/KafkaFlow.svg",alt:"KafkaFlow"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/dt/KafkaFlow.svg",alt:"KafkaFlow"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.Abstractions/"},"KafkaFlow.Abstractions")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.Abstractions/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/v/KafkaFlow.Abstractions.svg",alt:"KafkaFlow.Abstractions"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.Abstractions/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/dt/KafkaFlow.Abstractions.svg",alt:"KafkaFlow"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.Extensions.Hosting/"},"KafkaFlow.Extensions.Hosting")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.Extensions.Hosting/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/v/KafkaFlow.Extensions.Hosting.svg",alt:"KafkaFlow.Extensions.Hosting"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.Extensions.Hosting/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/dt/KafkaFlow.Extensions.Hosting.svg",alt:"KafkaFlow"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.LogHandler.Console/"},"KafkaFlow.LogHandler.Console")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.LogHandler.Console/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/v/KafkaFlow.LogHandler.Console.svg",alt:"KafkaFlow.LogHandler.Console"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.LogHandler.Console/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/dt/KafkaFlow.LogHandler.Console.svg",alt:"KafkaFlow.LogHandler.Console"})))))),(0,n.kt)("h2",{id:"serialization"},"Serialization"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Package"),(0,n.kt)("th",{parentName:"tr",align:null},"NuGet Stable"),(0,n.kt)("th",{parentName:"tr",align:null},"Downloads"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.Serializer/"},"KafkaFlow.Serializer")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.Serializer/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/v/KafkaFlow.Serializer.svg",alt:"KafkaFlow.Serializer"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.Serializer/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/dt/KafkaFlow.Serializer.svg",alt:"KafkaFlow.Serializer"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.SchemaRegistry/"},"KafkaFlow.SchemaRegistry")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.SchemaRegistry/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/v/KafkaFlow.SchemaRegistry.svg",alt:"KafkaFlow.SchemaRegistry"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.SchemaRegistry/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/dt/KafkaFlow.SchemaRegistry.svg",alt:"KafkaFlow.SchemaRegistry"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.Serializer.ProtobufNet/"},"KafkaFlow.Serializer.ProtobufNet")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.Serializer.ProtobufNet/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/v/KafkaFlow.Serializer.ProtobufNet.svg",alt:"KafkaFlow.Serializer.ProtobufNet"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.Serializer.ProtobufNet/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/dt/KafkaFlow.Serializer.ProtobufNet.svg",alt:"KafkaFlow.Serializer.ProtobufNet"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.Serializer.JsonCore/"},"KafkaFlow.Serializer.JsonCore")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.Serializer.JsonCore/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/v/KafkaFlow.Serializer.JsonCore.svg",alt:"KafkaFlow.Serializer.JsonCore"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.Serializer.JsonCore/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/dt/KafkaFlow.Serializer.JsonCore.svg",alt:"KafkaFlow.Serializer.JsonCore"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.Serializer.NewtonsoftJson/"},"KafkaFlow.Serializer.NewtonsoftJson")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.Serializer.NewtonsoftJson/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/v/KafkaFlow.Serializer.NewtonsoftJson.svg",alt:"KafkaFlow.Serializer.NewtonsoftJson"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.Serializer.NewtonsoftJson/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/dt/KafkaFlow.Serializer.NewtonsoftJson.svg",alt:"KafkaFlow.Serializer.NewtonsoftJson"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.Serializer.SchemaRegistry.ConfluentJson/"},"KafkaFlow.Serializer.SchemaRegistry.ConfluentJson")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.Serializer.SchemaRegistry.ConfluentJson/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/v/KafkaFlow.Serializer.SchemaRegistry.ConfluentJson.svg",alt:"KafkaFlow.Serializer.SchemaRegistry.ConfluentJson"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.Serializer.SchemaRegistry.ConfluentJson/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/dt/KafkaFlow.Serializer.SchemaRegistry.ConfluentJson.svg",alt:"KafkaFlow.Serializer.SchemaRegistry.ConfluentJson"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.Serializer.SchemaRegistry.ConfluentAvro/"},"KafkaFlow.Serializer.SchemaRegistry.ConfluentAvro")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.Serializer.SchemaRegistry.ConfluentAvro/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/v/KafkaFlow.Serializer.SchemaRegistry.ConfluentAvro.svg",alt:"KafkaFlow.Serializer.SchemaRegistry.ConfluentAvro"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.Serializer.SchemaRegistry.ConfluentAvro/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/dt/KafkaFlow.Serializer.SchemaRegistry.ConfluentAvro.svg",alt:"KafkaFlow.Serializer.SchemaRegistry.ConfluentAvro"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.Serializer.SchemaRegistry.ConfluentProtobuf/"},"KafkaFlow.Serializer.SchemaRegistry.ConfluentProtobuf")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.Serializer.SchemaRegistry.ConfluentProtobuf/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/v/KafkaFlow.Serializer.SchemaRegistry.ConfluentProtobuf.svg",alt:"KafkaFlow.Serializer.SchemaRegistry.ConfluentProtobuf"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.Serializer.SchemaRegistry.ConfluentProtobuf/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/dt/KafkaFlow.Serializer.SchemaRegistry.ConfluentProtobuf.svg",alt:"KafkaFlow.Serializer.SchemaRegistry.ConfluentProtobuf"})))))),(0,n.kt)("h2",{id:"compression"},"Compression"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Package"),(0,n.kt)("th",{parentName:"tr",align:null},"NuGet Stable"),(0,n.kt)("th",{parentName:"tr",align:null},"Downloads"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.Compressor/"},"KafkaFlow.Compressor")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.Compressor/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/v/KafkaFlow.Compressor.svg",alt:"KafkaFlow.Compressor"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.Compressor/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/dt/KafkaFlow.Compressor.svg",alt:"KafkaFlow.Compressor"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.Compressor.Gzip/"},"KafkaFlow.Compressor.Gzip")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.Compressor.Gzip/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/v/KafkaFlow.Compressor.Gzip.svg",alt:"KafkaFlow.Compressor.Gzip"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.Compressor.Gzip/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/dt/KafkaFlow.Compressor.Gzip.svg",alt:"KafkaFlow.Compressor.Gzip"})))))),(0,n.kt)("h2",{id:"middlewares"},"Middlewares"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Package"),(0,n.kt)("th",{parentName:"tr",align:null},"NuGet Stable"),(0,n.kt)("th",{parentName:"tr",align:null},"Downloads"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.TypedHandler/"},"KafkaFlow.TypedHandler")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.TypedHandler/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/v/KafkaFlow.TypedHandler.svg",alt:"KafkaFlow.TypedHandler"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.TypedHandler/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/dt/KafkaFlow.TypedHandler.svg",alt:"KafkaFlow.TypedHandler"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.BatchConsume/"},"KafkaFlow.BatchConsume")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.BatchConsume/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/v/KafkaFlow.BatchConsume.svg",alt:"KafkaFlow.BatchConsume"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.BatchConsume/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/dt/KafkaFlow.BatchConsume.svg",alt:"KafkaFlow.BatchConsume"})))))),(0,n.kt)("h2",{id:"dependency-injection"},"Dependency Injection"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Package"),(0,n.kt)("th",{parentName:"tr",align:null},"NuGet Stable"),(0,n.kt)("th",{parentName:"tr",align:null},"Downloads"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.Microsoft.DependencyInjection/"},"KafkaFlow.Microsoft.DependencyInjection")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.Microsoft.DependencyInjection/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/v/KafkaFlow.Microsoft.DependencyInjection.svg",alt:"KafkaFlow.Microsoft.DependencyInjection"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.Microsoft.DependencyInjection/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/dt/KafkaFlow.Microsoft.DependencyInjection.svg",alt:"KafkaFlow.Microsoft.DependencyInjection"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.Unity/"},"KafkaFlow.Unity")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.Unity/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/v/KafkaFlow.Unity.svg",alt:"KafkaFlow.Unity"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.Unity/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/dt/KafkaFlow.Unity.svg",alt:"KafkaFlow.Unity"})))))),(0,n.kt)("h2",{id:"administration"},"Administration"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Package"),(0,n.kt)("th",{parentName:"tr",align:null},"NuGet Stable"),(0,n.kt)("th",{parentName:"tr",align:null},"Downloads"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.Admin/"},"KafkaFlow.Admin")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.Admin/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/v/KafkaFlow.Admin.svg",alt:"KafkaFlow.Admin"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.Admin/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/dt/KafkaFlow.Admin.svg",alt:"KafkaFlow.Admin"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.Admin.WebApi/"},"KafkaFlow.Admin.WebApi")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.Admin.WebApi/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/v/KafkaFlow.Admin.WebApi.svg",alt:"KafkaFlow.Admin.WebApi"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.Admin.WebApi/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/dt/KafkaFlow.Admin.WebApi.svg",alt:"KafkaFlow.Admin.WebApi"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.Admin.Dashboard/"},"KafkaFlow.Admin.Dashboard")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.Admin.Dashboard/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/v/KafkaFlow.Admin.Dashboard.svg",alt:"KafkaFlow.Admin.Dashboard"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/KafkaFlow.Admin.Dashboard/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/dt/KafkaFlow.Admin.Dashboard.svg",alt:"KafkaFlow.Admin.Dashboard"})))))))}k.isMDXComponent=!0}}]);