"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8451],{3905:(e,a,n)=>{n.d(a,{Zo:()=>p,kt:()=>m});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),c=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},p=function(e){var a=c(e.components);return t.createElement(l.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?t.createElement(k,i(i({ref:a},p),{},{components:n})):t.createElement(k,i({ref:a},p))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},55109:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var t=n(87462),r=(n(67294),n(3905));const o={sidebar_position:1},i="From v2 to v3",s={unversionedId:"guides/migration/from-v2-to-v3",id:"guides/migration/from-v2-to-v3",title:"From v2 to v3",description:"KafkaFlow version 3 brings several significant changes and improvements. This guide will help you navigate through the migration process from version 2 to version 3.",source:"@site/docs/guides/migration/from-v2-to-v3.md",sourceDirName:"guides/migration",slug:"/guides/migration/from-v2-to-v3",permalink:"/kafkaflow/docs/guides/migration/from-v2-to-v3",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/guides/migration/from-v2-to-v3.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Migration",permalink:"/kafkaflow/docs/category/migration"},next:{title:"Dependency Injection",permalink:"/kafkaflow/docs/guides/dependency-injection"}},l={},c=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Update package references",id:"update-package-references",level:2},{value:"Breaking Changes",id:"breaking-changes",level:2},{value:"1. Update to .NET 6 with Admin Packages",id:"1-update-to-net-6-with-admin-packages",level:3},{value:"2. UI Dashboard URL Change",id:"2-ui-dashboard-url-change",level:3},{value:"3. Removed Packages and Core Changes",id:"3-removed-packages-and-core-changes",level:3},{value:"3.1 Removed Packages",id:"31-removed-packages",level:4},{value:"3.2 Serializer and Compressor Interface Segregation",id:"32-serializer-and-compressor-interface-segregation",level:4},{value:"3.3 Consumer Batching Configuration",id:"33-consumer-batching-configuration",level:4},{value:"3.4. Async Support for Message Type Resolvers and Schema Registry Resolvers",id:"34-async-support-for-message-type-resolvers-and-schema-registry-resolvers",level:4},{value:"New Features",id:"new-features",level:2},{value:"1. Dynamic Workers Calculation",id:"1-dynamic-workers-calculation",level:3},{value:"1.1 Dynamic Worker Pool Scaling Configuration",id:"11-dynamic-worker-pool-scaling-configuration",level:3},{value:"1.2 Improved Mechanism for Signalling Message Processing Completion",id:"12-improved-mechanism-for-signalling-message-processing-completion",level:3},{value:"1.3 Expose Worker Events to Client Applications",id:"13-expose-worker-events-to-client-applications",level:3},{value:"1.4 Improve Dependency Injection Scope Management",id:"14-improve-dependency-injection-scope-management",level:3},{value:"2. Improved Worker Distribution Strategy",id:"2-improved-worker-distribution-strategy",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:c};function d(e){let{components:a,...n}=e;return(0,r.kt)("wrapper",(0,t.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"from-v2-to-v3"},"From v2 to v3"),(0,r.kt)("p",null,"KafkaFlow version 3 brings several significant changes and improvements. This guide will help you navigate through the migration process from version 2 to version 3."),(0,r.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#prerequisites"},"Prerequisites")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#update-package-references"},"Update package references")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#breaking-changes"},"Breaking Changes"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#1-update-to-net-6-with-admin-packages"},"1. Update to .NET 6 with Admin Packages")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#2-ui-dashboard-url-change"},"2. UI Dashboard URL Change")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#3-removed-packages-and-core-changes"},"3. Removed Packages and Core Changes"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#31-removed-packages"},"3.1 Removed Packages")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#32-serializer-and-compressor-interface-segregation"},"3.2 Serializer and Compressor Interface Segregation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#33-consumer-batching-configuration"},"3.3 Consumer Batching Configuration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#34-async-support-for-message-type-resolvers-and-schema-registry-resolvers"},"3.4. Async Support for Message Type Resolvers and Schema Registry Resolvers")))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#new-features"},"New Features"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#1-dynamic-workers-calculation"},"1. Dynamic Workers Calculation"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#11-dynamic-worker-pool-scaling-configuration"},"1.1 Dynamic Worker Pool Scaling Configuration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#12-improved-mechanism-for-signalling-message-processing-completion"},"1.2 Improved Mechanism for Signalling Message Processing Completion")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#13-expose-worker-events-to-client-applications"},"1.3 Expose Worker Events to Client Applications")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#14-improve-dependency-injection-scope-management"},"1.4 Improve Dependency Injection Scope Management")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#2-improved-worker-distribution-strategy"},"2. Improved Worker Distribution Strategy")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#conclusion"},"Conclusion"))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"As .NET Core 3.1 has reached the end of support in its lifecycle, we have updated references to Core Packages (",(0,r.kt)("inlineCode",{parentName:"p"},"Microsoft.*")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"System.*"),") to version 6."),(0,r.kt)("p",null,"While the KafkaFlow core and most of the extension packages are still targeting ",(0,r.kt)("inlineCode",{parentName:"p"},"netstandard2.0")," which supports a range of runtimes, we recommend with this v3 update to target at least .NET 6 in applications using KafkaFlow."),(0,r.kt)("h2",{id:"update-package-references"},"Update package references"),(0,r.kt)("p",null,"To update to KafkaFlow v3, change the ",(0,r.kt)("inlineCode",{parentName:"p"},"Version")," related to KafkaFlow packages to the latest v3 available in each project referencing KafkaFlow packages. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<ItemGroup>\n-   <PackageReference Include="KafkaFlow" Version="2.5.0" />\n-   <PackageReference Include="KafkaFlow.Abstractions" Version="2.5.0" />\n-   <PackageReference Include="KafkaFlow.Admin" Version="2.5.0" />\n-   <PackageReference Include="KafkaFlow.Admin.Dashboard" Version="2.5.0" />\n-   <PackageReference Include="KafkaFlow.Admin.WebApi" Version="2.5.0" />\n-   <PackageReference Include="KafkaFlow.BatchConsume" Version="2.5.0" />\n-   <PackageReference Include="KafkaFlow.Compressor" Version="2.5.0" />\n-   <PackageReference Include="KafkaFlow.Compressor.Gzip" Version="2.5.0" />\n-   <PackageReference Include="KafkaFlow.Extensions.Hosting" Version="2.5.0" />\n-   <PackageReference Include="KafkaFlow.LogHandler.Console" Version="2.5.0" />\n-   <PackageReference Include="KafkaFlow.LogHandler.Microsoft" Version="2.5.0" />\n-   <PackageReference Include="KafkaFlow.Microsoft.DependencyInjection" Version="2.5.0" />\n-   <PackageReference Include="KafkaFlow.OpenTelemetry" Version="2.5.0" />\n-   <PackageReference Include="KafkaFlow.SchemaRegistry" Version="2.5.0" />\n-   <PackageReference Include="KafkaFlow.Serializer" Version="2.5.0" />\n-   <PackageReference Include="KafkaFlow.Serializer.JsonCore" Version="2.5.0" />\n-   <PackageReference Include="KafkaFlow.Serializer.NewtonsoftJson" Version="2.5.0" />\n-   <PackageReference Include="KafkaFlow.Serializer.ProtobufNet" Version="2.5.0" />\n-   <PackageReference Include="KafkaFlow.Serializer.SchemaRegistry.ConfluentAvro" Version="2.5.0" />\n-   <PackageReference Include="KafkaFlow.Serializer.SchemaRegistry.ConfluentJson" Version="2.5.0" />\n-   <PackageReference Include="KafkaFlow.Serializer.SchemaRegistry.ConfluentProtobuf" Version="2.5.0" />\n-   <PackageReference Include="KafkaFlow.TypedHandler" Version="2.5.0" />\n-   <PackageReference Include="KafkaFlow.Unity" Version="2.5.0" />\n\n+   <PackageReference Include="KafkaFlow" Version="3.0.0" />\n+   <PackageReference Include="KafkaFlow.Abstractions" Version="3.0.0" />\n+   <PackageReference Include="KafkaFlow.Admin" Version="3.0.0" />\n+   <PackageReference Include="KafkaFlow.Admin.Dashboard" Version="3.0.0" />\n+   <PackageReference Include="KafkaFlow.Admin.WebApi" Version="3.0.0" />\n+   <PackageReference Include="KafkaFlow.Compressor.Gzip" Version="3.0.0" />\n+   <PackageReference Include="KafkaFlow.Extensions.Hosting" Version="3.0.0" />\n+   <PackageReference Include="KafkaFlow.LogHandler.Console" Version="3.0.0" />\n+   <PackageReference Include="KafkaFlow.LogHandler.Microsoft" Version="3.0.0" />\n+   <PackageReference Include="KafkaFlow.Microsoft.DependencyInjection" Version="3.0.0" />\n+   <PackageReference Include="KafkaFlow.OpenTelemetry" Version="3.0.0" />\n+   <PackageReference Include="KafkaFlow.SchemaRegistry" Version="3.0.0" />\n+   <PackageReference Include="KafkaFlow.Serializer.JsonCore" Version="3.0.0" />\n+   <PackageReference Include="KafkaFlow.Serializer.NewtonsoftJson" Version="3.0.0" />\n+   <PackageReference Include="KafkaFlow.Serializer.ProtobufNet" Version="3.0.0" />\n+   <PackageReference Include="KafkaFlow.Serializer.SchemaRegistry.ConfluentAvro" Version="3.0.0" />\n+   <PackageReference Include="KafkaFlow.Serializer.SchemaRegistry.ConfluentJson" Version="3.0.0" />\n+   <PackageReference Include="KafkaFlow.Serializer.SchemaRegistry.ConfluentProtobuf" Version="3.0.0" />\n+   <PackageReference Include="KafkaFlow.Unity" Version="3.0.0" />\n</ItemGroup>\n')),(0,r.kt)("h2",{id:"breaking-changes"},"Breaking Changes"),(0,r.kt)("p",null,"The update to v3 introduces some breaking changes. Please consider them when updating KafkaFlow."),(0,r.kt)("h3",{id:"1-update-to-net-6-with-admin-packages"},"1. Update to .NET 6 with Admin Packages"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Related Issues: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Farfetch/kafkaflow/issues/298"},"#298")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Farfetch/kafkaflow/issues/322"},"#322"))),(0,r.kt)("p",null,"The target frameworks for ASP.NET Admin projects were updated from ",(0,r.kt)("inlineCode",{parentName:"p"},"netcoreapp3.1")," to ",(0,r.kt)("inlineCode",{parentName:"p"},".net6.0"),"."),(0,r.kt)("p",null,"If you are using the Admin packages (",(0,r.kt)("inlineCode",{parentName:"p"},"KafkaFlow.Admin.Dashboard")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"KafkaFlow.Admin.WebApi "),") you will need to target the .NET 6 runtime."),(0,r.kt)("h3",{id:"2-ui-dashboard-url-change"},"2. UI Dashboard URL Change"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Related Issues: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Farfetch/kafkaflow/issues/303"},"#303"))),(0,r.kt)("p",null,"To be in conformity with KafkaFlow naming conventions, the UI Dashboard URL has changed from ",(0,r.kt)("inlineCode",{parentName:"p"},"/kafka-flow")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"/kafkaflow"),". Update any bookmarks or references accordingly."),(0,r.kt)("h3",{id:"3-removed-packages-and-core-changes"},"3. Removed Packages and Core Changes"),(0,r.kt)("h4",{id:"31-removed-packages"},"3.1 Removed Packages"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Related Issues: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Farfetch/kafkaflow/issues/301"},"#301"))),(0,r.kt)("p",null,"Because some KafkaFlow extension packages contained elements that belong to the core of KafkaFlow, these packages were removed and moved to the core library.\nMost of these packages contained only interfaces or core functionalities that were moved to the core library while the concrete implementations continue to exist as separate packages to keep KafkaFlow's modular design."),(0,r.kt)("p",null,"Here is the list of KafkaFlow packages that no longer exist in v3. In case you are referencing any of these packages, please remove those references since their references were moved to the core KafkaFlow package:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"KafkaFlow.TypedHandler "),(0,r.kt)("li",{parentName:"ul"},"KafkaFlow.Compressor "),(0,r.kt)("li",{parentName:"ul"},"KafkaFlow.Serializer "),(0,r.kt)("li",{parentName:"ul"},"KafkaFlow.BatchConsume")),(0,r.kt)("h4",{id:"32-serializer-and-compressor-interface-segregation"},"3.2 Serializer and Compressor Interface Segregation"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Related Issues: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Farfetch/kafkaflow/issues/432"},"#432"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Farfetch/kafkaflow/issues/433"},"#433"))),(0,r.kt)("p",null,"Before KafkaFlow v3, references were used on the consumer side, for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"AddSerializer()")," or ",(0,r.kt)("inlineCode",{parentName:"p"},".AddCompressor()"),". While this convention was used for simplicity's sake to keep the same nomenclature as in the producer counterpart, the nomenclature can be error-prone since on the consumer side the behavior when using  ",(0,r.kt)("inlineCode",{parentName:"p"},"AddSerializer()")," is adding a middleware for deserializing the message."),(0,r.kt)("p",null,"To fix this, on KafkaFlow v3, the ",(0,r.kt)("inlineCode",{parentName:"p"},"IDeserializer")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"IDecompressor")," were created to segregate from the ",(0,r.kt)("inlineCode",{parentName:"p"},"ISerializer")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ICompressor")," interfaces."),(0,r.kt)("p",null,"In case you are configuring the consumer to deserialize and/or decompress a message similar to this configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'.AddConsumer(\n    consumerBuilder => consumerBuilder\n        .Topic("test-topic")\n        .WithGroupId("group1")\n        .AddMiddlewares(\n            middlewares => middlewares\n                .AddCompressor<GzipMessageCompressor>()\n                .AddSerializer<JsonCoreSerializer>()                \n        )\n)\n')),(0,r.kt)("p",null,"The following changes need to be made when updating to KafkaFlow v3."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'.AddConsumer(\n    consumerBuilder => consumerBuilder\n        .Topic("test-topic")\n        .WithGroupId("group1")\n        .AddMiddlewares(\n            middlewares => middlewares\n                .AddDecompressor<GzipMessageDecompressor>()\n                .AddDeserializer<JsonCoreDeserializer>()                \n        )\n)\n')),(0,r.kt)("p",null,"Not only the ",(0,r.kt)("inlineCode",{parentName:"p"},".AddSerializer()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},".AddCompressor()")," were renamed to ",(0,r.kt)("inlineCode",{parentName:"p"},".AddDeserializer()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},".AddDecompressor()"),", but also the concrete implementations like ",(0,r.kt)("inlineCode",{parentName:"p"},"JsonCoreSerializer")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"GzipMessageCompressor")," were renamed to ",(0,r.kt)("inlineCode",{parentName:"p"},"JsonCoreDeserializer")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"GzipMessageDecompressor"),". Please be aware that this change is only on the ",(0,r.kt)("strong",{parentName:"p"},"consumer side"),"."),(0,r.kt)("p",null,"Having this segregation contributes to a more consistent name scheme together with the middleware behavior. Nevertheless, other changes related to this topic were made, here is a complete list of changes related to the segregation of ",(0,r.kt)("inlineCode",{parentName:"p"},"ISerializer")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ICompressor")," interfaces (",(0,r.kt)("strong",{parentName:"p"},"consumer configuration")," only):"),(0,r.kt)("p",null,"Related to Deserialization:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IDeserializer")," interface created."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".AddSerializer()")," renamed to ",(0,r.kt)("inlineCode",{parentName:"li"},".AddDeserializer()"),". "),(0,r.kt)("li",{parentName:"ul"},"Created ",(0,r.kt)("inlineCode",{parentName:"li"},"JsonCoreDeserializer "),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ProtobufNetDeserializer"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ConfluentProtobufDeserializer"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"NewtonsoftJsonDeserializer"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ConfluentJsonDeserializer")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"ConfluentAvroDeserializer")," that implements the ",(0,r.kt)("inlineCode",{parentName:"li"},".DeserializeAsync()")," method."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".AddSingleTypeDeserializer()")," renamed to ",(0,r.kt)("inlineCode",{parentName:"li"},".AddSingleTypeDeserializer()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".AddSingleTypeSerializer()")," renamed to ",(0,r.kt)("inlineCode",{parentName:"li"},".AddSchemaRegistryAvroDeserializer()"))),(0,r.kt)("p",null,"Related to Decompression:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IDecompressor")," interface created. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".AddCompressor()")," renamed to ",(0,r.kt)("inlineCode",{parentName:"li"},".AddDecompressor()"),". "),(0,r.kt)("li",{parentName:"ul"},"Created ",(0,r.kt)("inlineCode",{parentName:"li"},"GzipMessageDecompressor")," that implements the ",(0,r.kt)("inlineCode",{parentName:"li"},".Decompress()")," method.")),(0,r.kt)("h4",{id:"33-consumer-batching-configuration"},"3.3 Consumer Batching Configuration"),(0,r.kt)("p",null,"Consumer batching configuration renamed from ",(0,r.kt)("inlineCode",{parentName:"p"},".BatchConsume()")," to ",(0,r.kt)("inlineCode",{parentName:"p"},".AddBatching()"),". Update your configuration accordingly."),(0,r.kt)("h4",{id:"34-async-support-for-message-type-resolvers-and-schema-registry-resolvers"},"3.4. Async Support for Message Type Resolvers and Schema Registry Resolvers"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Related Issues: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Farfetch/kafkaflow/issues/302"},"#302"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Farfetch/kafkaflow/issues/305"},"#305"))),(0,r.kt)("p",null,"In both ",(0,r.kt)("inlineCode",{parentName:"p"},"IMessageTypeResolvers")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ISchemaRegistryTypeNameResolver")," the interface methods only supported sync calls before KafkaFlow v3.\nTo accommodate some use cases where calls to these methods can be parallelized, the methods defined in this interface were refactored to support the Async pattern."),(0,r.kt)("p",null,"If your application has a concrete implementation of these interfaces, please make sure to update your code accordingly by using the async/await pattern. Here is the list of changes related to this subject:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Resolve()")," renamed to ",(0,r.kt)("inlineCode",{parentName:"li"},"ResolveAsync()")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"ISchemaRegistryTypeNameResolver")," and now returns a ",(0,r.kt)("inlineCode",{parentName:"li"},"Task<string>"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"OnConsume()")," renamed to ",(0,r.kt)("inlineCode",{parentName:"li"},"OnConsumeAsync()")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"IMessageTypeResolver")," and returns a ",(0,r.kt)("inlineCode",{parentName:"li"},"ValueTask<Type>"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"OnProduce()")," renamed to ",(0,r.kt)("inlineCode",{parentName:"li"},"OnProduceAsync()")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"IMessageTypeResolver")," and returns a ",(0,r.kt)("inlineCode",{parentName:"li"},"ValueTask"),".")),(0,r.kt)("h2",{id:"new-features"},"New Features"),(0,r.kt)("p",null,"Additionally, with the update to v3, some quality-of-life features were added to KafkaFlow core, mainly related to how workers are configured."),(0,r.kt)("h3",{id:"1-dynamic-workers-calculation"},"1. Dynamic Workers Calculation"),(0,r.kt)("p",null,"One important feature added to KafkaFlow v3 was the ability to calculate how many workers are handling the message consumption dynamically. Please check the feature documentation ",(0,r.kt)("a",{parentName:"p",href:"https://farfetch.github.io/kafkaflow/docs/guides/consumers/dynamic-workers-configuration"},"here"),"."),(0,r.kt)("p",null,"In load scenarios where the consumer needs to ramp up message consumption to reduce the consumer lag, increasing the number of workers can be a valid strategy in this scenario."),(0,r.kt)("p",null,"Before, the number of workers was determined statically by configuration at the time of application startup. With KafkaFlow v3, a new method was introduced that supports calculating the number of available workers periodically. This allows the application to adapt constantly and also being able to scale the number of workers during the application's lifetime."),(0,r.kt)("p",null,"To accommodate this requirement multiple changes were made to the core of KafkaFlow, next we will go through some of these changes."),(0,r.kt)("h3",{id:"11-dynamic-worker-pool-scaling-configuration"},"1.1 Dynamic Worker Pool Scaling Configuration"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Related Issues: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Farfetch/kafkaflow/issues/429"},"#429"))),(0,r.kt)("p",null,"Two new overrides were added to the consumer configuration. Nevertheless, the previous method of statically determining the worker count is still available."),(0,r.kt)("p",null,"The new overrides added were:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"WithWorkersCount(Func<WorkersCountContext, IDependencyResolver, Task<int>> calculator)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"WithWorkersCount(Func<WorkersCountContext, IDependencyResolver, Task<int>> calculator, TimeSpan evaluationInterval)"))),(0,r.kt)("p",null,"The difference between both overrides is that the first works with a predefined frequency of 5 minutes between calls to the delegate that returns the number of workers. While in the second override that frequency can be user-defined."),(0,r.kt)("p",null,"Additionally, the delegate receives a ",(0,r.kt)("inlineCode",{parentName:"p"},"WorkersCountContext")," that sends some consumer-related context to the callback like the Consumer Name, the Consumer Group Key and the Consumer Partitions Assignment. Also, the ",(0,r.kt)("inlineCode",{parentName:"p"},"IDependencyResolver")," is made available in case some dependencies need to be resolved to determine the worker count."),(0,r.kt)("p",null,"This means that a consumer worker count can be configured like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'.AddConsumer(\n    consumerBuilder => consumerBuilder\n        .Topic("test-topic")\n        .WithGroupId("group1")\n        .WithWorkersCount((context, resolver) => {\n          // Use whatever logic to determine the worker count\n          return GetWorkerCount(context, resolver);\n        }, TimeSpan.FromMinutes(15))\n)\n')),(0,r.kt)("h3",{id:"12-improved-mechanism-for-signalling-message-processing-completion"},"1.2 Improved Mechanism for Signalling Message Processing Completion"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Related Issues: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Farfetch/kafkaflow/issues/426"},"#426"))),(0,r.kt)("p",null,"For the KafkaFlow engine to adapt to the dynamic change of workers, the way the messages are signaled as completed also needed to be updated because the workers can only be scaled after all the messages in the worker's buffers are signaled as completed."),(0,r.kt)("p",null,"To achieve this, a new method in the message context was provided to signal the message completion ",(0,r.kt)("inlineCode",{parentName:"p"},".Complete()"),". Additionally, a new property called ",(0,r.kt)("inlineCode",{parentName:"p"},"AutoMessageCompletion")," was added to signal if KafkaFlow should signal the message as completed automatically which is the default behavior. This property is useful for scenarios where we don't want to complete the message right away, for example in Batch Consume scenarios."),(0,r.kt)("h3",{id:"13-expose-worker-events-to-client-applications"},"1.3 Expose Worker Events to Client Applications"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Related Issues: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Farfetch/kafkaflow/issues/427"},"#427"))),(0,r.kt)("p",null,"KafkaFlow now exposes some events related to its internal functionality. The events that are being published are the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MessageProduceStarted"),(0,r.kt)("li",{parentName:"ul"},"MessageProduceCompleted"),(0,r.kt)("li",{parentName:"ul"},"MessageProduceError"),(0,r.kt)("li",{parentName:"ul"},"MessageConsumeStarted"),(0,r.kt)("li",{parentName:"ul"},"MessageConsumeCompleted"),(0,r.kt)("li",{parentName:"ul"},"MessageConsumeError"),(0,r.kt)("li",{parentName:"ul"},"WorkerStopping"),(0,r.kt)("li",{parentName:"ul"},"WorkerStopped"),(0,r.kt)("li",{parentName:"ul"},"WorkerProcessingEnded")),(0,r.kt)("p",null,"While worker-related events are available through the ",(0,r.kt)("inlineCode",{parentName:"p"},"IWorker")," reference, the message-related events can be subscribed using the ",(0,r.kt)("inlineCode",{parentName:"p"},".SubscribeGlobalEvents()")," configuration method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'services.AddKafka(\n    kafka => kafka\n        .UseConsoleLog()\n        .SubscribeGlobalEvents(hub =>\n        {\n            hub.MessageConsumeStarted.Subscribe(eventContext => Console.WriteLine("Message Consume Started"));\n\n            hub.MessageConsumeError.Subscribe(eventContext => Console.WriteLine("Message Consume Error"));\n\n            hub.MessageConsumeCompleted.Subscribe(eventContext => Console.WriteLine("Message Consume Completed"));\n\n            hub.MessageProduceStarted.Subscribe(eventContext => Console.WriteLine("Message Produce Started"));\n\n            hub.MessageProduceError.Subscribe(eventContext => Console.WriteLine("Message Produce Error"));\n\n            hub.MessageProduceCompleted.Subscribe(eventContext => Console.WriteLine("Message Produce Completed"));\n        })\n);\n')),(0,r.kt)("h3",{id:"14-improve-dependency-injection-scope-management"},"1.4 Improve Dependency Injection Scope Management"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Related Issues: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Farfetch/kafkaflow/issues/428"},"#428"))),(0,r.kt)("p",null,"Some improvements were made to the way the dependency scopes are managed to provide more fine-grained control over dependency lifecycles. Here are some changes that were made in this context:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IMessageContext")," now exposes a property ",(0,r.kt)("inlineCode",{parentName:"li"},"DependencyResolver")," which is intrinsically tied to the scope of a single processed message."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IConsumerContext")," introduces two properties: ",(0,r.kt)("inlineCode",{parentName:"li"},"ConsumerDependencyResolver")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"WorkerDependencyResolver"),". The former will resolve dependencies tied to the lifecycle of a single consumer, whereas the latter caters to a single worker's lifecycle.")),(0,r.kt)("h2",{id:"2-improved-worker-distribution-strategy"},"2. Improved Worker Distribution Strategy"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Related Issues: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Farfetch/kafkaflow/issues/440"},"#440"))),(0,r.kt)("p",null,"KafkaFlow v2 already provided a method to define the worker to handle a message when consuming using the ",(0,r.kt)("inlineCode",{parentName:"p"},"IDistributionStrategy")," interface. However, the only context provided by this method was the partition key of the message, which sometimes can be insufficient to determine how to distribute messages across workers in more complex scenarios."),(0,r.kt)("p",null,"With KafkaFlow v3 this interface got renamed to ",(0,r.kt)("inlineCode",{parentName:"p"},"IWorkerDistributionStrategy")," and now the method ",(0,r.kt)("inlineCode",{parentName:"p"},".GetWorkerAsync()")," receives a ",(0,r.kt)("inlineCode",{parentName:"p"},"WorkerDistributionContext")," structure. Properties like message topic and partition are now part of the context which provides more flexibility when choosing the worker to handle a message."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Please ensure you review and adapt your codebase according to these changes. If you encounter any issues or need assistance, feel free to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Farfetch/kafkaflow#get-in-touch"},"reach out")," to the KafkaFlow community. Thank you for using KafkaFlow!"))}d.isMDXComponent=!0}}]);