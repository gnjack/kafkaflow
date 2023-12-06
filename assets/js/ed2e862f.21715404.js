"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4968],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(r),m=n,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return r?a.createElement(g,o(o({ref:t},p),{},{components:r})):a.createElement(g,o({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},15812:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const i={sidebar_position:3},o="Serializer Middleware",l={unversionedId:"guides/middlewares/serializer-middleware",id:"guides/middlewares/serializer-middleware",title:"Serializer Middleware",description:"In this section, we will learn how to use the Serializer Middleware.",source:"@site/docs/guides/middlewares/serializer-middleware.md",sourceDirName:"guides/middlewares",slug:"/guides/middlewares/serializer-middleware",permalink:"/kafkaflow/docs/guides/middlewares/serializer-middleware",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/guides/middlewares/serializer-middleware.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Typed Handler Middleware",permalink:"/kafkaflow/docs/guides/middlewares/typed-handler-middleware"},next:{title:"Compressor Middleware",permalink:"/kafkaflow/docs/guides/middlewares/compressor-middleware"}},s={},d=[{value:"How to use it",id:"how-to-use-it",level:2},{value:"Adding Schema Registry support",id:"adding-schema-registry-support",level:2},{value:"Creating a Message Type Resolver",id:"creating-a-message-type-resolver",level:2}],p={toc:d},u="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"serializer-middleware"},"Serializer Middleware"),(0,n.kt)("p",null,"In this section, we will learn how to use the Serializer Middleware."),(0,n.kt)("p",null,"The Serializer Middleware is used to serialize and deserialize messages."),(0,n.kt)("p",null,"You can use one of the following common serializers or build your own:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.nuget.org/packages/KafkaFlow.Serializer.ProtobufNet/"},"KafkaFlow.Serializer.ProtoBufNet")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.nuget.org/packages/KafkaFlow.Serializer.JsonCore/"},"KafkaFlow.Serializer.JsonCore")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.nuget.org/packages/KafkaFlow.Serializer.NewtonsoftJson/"},"KafkaFlow.Serializer.NewtonsoftJson"))),(0,n.kt)("h2",{id:"how-to-use-it"},"How to use it"),(0,n.kt)("p",null,"On the configuration, add the ",(0,n.kt)("inlineCode",{parentName:"p"},"AddSerializer"),"/",(0,n.kt)("inlineCode",{parentName:"p"},"AddDeserializer")," extension method to your producer/consumer middlewares to use it. "),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"AddSerializer"),"/",(0,n.kt)("inlineCode",{parentName:"p"},"AddDeserializer")," method has two arguments: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The first one must implement the ",(0,n.kt)("inlineCode",{parentName:"li"},"ISerializer"),"/",(0,n.kt)("inlineCode",{parentName:"li"},"IDeserializer")," interface. "),(0,n.kt)("li",{parentName:"ul"},"The second one is optional and must implement the ",(0,n.kt)("inlineCode",{parentName:"li"},"IMessageTypeResolver")," interface. If the parameter is not provided, then the ",(0,n.kt)("inlineCode",{parentName:"li"},"DefaultTypeResolver")," will be used.\nBoth classes can be provided as an argument through a factory method too. ")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"For topics that have just one message type, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"AddSingleTypeSerializer"),"/",(0,n.kt)("inlineCode",{parentName:"p"},"AddSingleTypeDeserializer")," method.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'services.AddKafka(kafka => kafka\n    .AddCluster(cluster => cluster\n        .WithBrokers(new[] { "localhost:9092" })\n        .AddProducer<ProductEventsProducer>(producer => producer\n            ...\n            .AddMiddlewares(middlewares => middleware\n                ...\n                .AddSerializer<JsonMessageSerializer>() // Using the DefaultMessageTypeResolver\n                // or\n                .AddSerializer<JsonMessageSerializer, YourTypeResolver>()\n                // or\n                .AddSerializer(\n                    resolver => new JsonMessageSerializer(...),\n                    resolver => new YourTypeResolver(...))\n                // or\n                .AddSingleTypeSerializer<JsonMessageSerializer, YourMessageType>()\n                // or\n                .AddSingleTypeSerializer<YourMessageType>(resolver => new JsonMessageSerializer(...))\n                ...\n            )\n        )\n    )\n);\n\n')),(0,n.kt)("h2",{id:"adding-schema-registry-support"},"Adding Schema Registry support"),(0,n.kt)("p",null,"Serializer middlewares can be used along with schema registry allowing the evolution of schemas according to the configured compatibility setting."),(0,n.kt)("p",null,"Install the ",(0,n.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/KafkaFlow.SchemaRegistry/"},"KafkaFlow.SchemaRegistry")," package, configure the schema registry broker, and use one of the following packages to use all the schema registry integration features."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.nuget.org/packages/KafkaFlow.Serializer.SchemaRegistry.ConfluentJson/"},"KafkaFlow.Serializer.SchemaRegistry.ConfluentJson")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.nuget.org/packages/KafkaFlow.Serializer.SchemaRegistry.ConfluentAvro/"},"KafkaFlow.Serializer.SchemaRegistry.ConfluentAvro")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.nuget.org/packages/KafkaFlow.Serializer.ConfluentProtobuf/"},"KafkaFlow.Serializer.SchemaRegistry.ConfluentProtobuf"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'public class Startup\n{\n    public void ConfigureServices(IServiceCollection services)\n    {\n        services.AddKafka(\n            kafka => kafka\n                .AddCluster(\n                    cluster => cluster\n                        .WithBrokers(new[] { "localhost:9092" })\n                        .WithSchemaRegistry(config => config.Url = "localhost:8081")\n                        .AddProducer(\n                            ...\n                            .AddMiddlewares(middlewares => \n                                    middlewares.AddSchemaRegistryAvroSerializer(new AvroSerializerConfig{ SubjectNameStrategy = SubjectNameStrategy.TopicRecord })\n                        )\n                       .AddConsumer(\n                            ...\n                            .AddMiddlewares(middlewares => middlewares.AddSchemaRegistryAvroDeserializer()\n                        )\n                    )\n            );\n    }\n}\n')),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/KafkaFlow.Serializer.SchemaRegistry.ConfluentAvro/"},"ConfluentAvro")," and ",(0,n.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/KafkaFlow.Serializer.ConfluentProtobuf/"},"ConfluentProtobuf")," type resolvers can support multiple types per topic however, due to the JSON serialization format used by ",(0,n.kt)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/clients/confluent-kafka-dotnet/_site/api/Confluent.SchemaRegistry.Serdes.JsonSerializer-1.html"},"confluent-kafka-dotnet"),", ",(0,n.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/KafkaFlow.Serializer.SchemaRegistry.ConfluentJson/"},"ConfluentJson")," type resolver can only resolve a single type of message per topic. ")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"To be able to publish multiple type messages per topic, ",(0,n.kt)("inlineCode",{parentName:"p"},"SubjectNameStrategy.Record")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"SubjectNameStrategy.TopicRecord")," must be used.\nYou can see a detailed explanation ",(0,n.kt)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/schema-registry/serdes-develop/index.html#subject-name-strategy"},"here"),".")),(0,n.kt)("h2",{id:"creating-a-message-type-resolver"},"Creating a Message Type Resolver"),(0,n.kt)("p",null,"A type resolver is needed to instruct the middleware where to find the destination message type in the message metadata when consuming and where to store it when producing. "),(0,n.kt)("p",null,"The framework has the ",(0,n.kt)("inlineCode",{parentName:"p"},"DefaultTypeResolver")," that will be used omitting the second type parameter in the ",(0,n.kt)("inlineCode",{parentName:"p"},"AddSerializer"),"/",(0,n.kt)("inlineCode",{parentName:"p"},"AddDeserializer")," method. You can create your own implementation of ",(0,n.kt)("inlineCode",{parentName:"p"},"IMessageTypeResolver")," to allow communication with other frameworks."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'public class SampleMessageTypeResolver : IMessageTypeResolver\n{\n    private const string MessageType = "MessageType";\n\n    public Type OnConsume(IMessageContext context)\n    {\n        var typeName = context.Headers.GetString(MessageType);\n\n        return Type.GetType(typeName);\n    }\n\n    public void OnProduce(IMessageContext context)\n    {\n        context.Headers.SetString(\n            MessageType,\n            $"{context.Message.GetType().FullName}, {context.Message.GetType().Assembly.GetName().Name}");\n    }\n}\n')))}c.isMDXComponent=!0}}]);