"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5901],{83796:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var t=a(85893),i=a(11151);const s={sidebar_position:1},r="Installation",o={id:"getting-started/installation",title:"Installation",description:"KafkaFlow is a set of nuget packages.",source:"@site/versioned_docs/version-2.x/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/kafkaflow/docs/2.x/getting-started/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/versioned_docs/version-2.x/getting-started/installation.md",tags:[],version:"2.x",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/kafkaflow/docs/2.x/category/getting-started"},next:{title:"Quickstart",permalink:"/kafkaflow/docs/2.x/getting-started/create-your-first-application"}},l={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installing",id:"installing",level:2},{value:"Setup",id:"setup",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.p,{children:"KafkaFlow is a set of nuget packages."}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["One of the following .NET versions","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:".NET Core 2.1 or above."}),"\n",(0,t.jsx)(n.li,{children:".NET Framework 4.6.1 or above."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"installing",children:"Installing"}),"\n",(0,t.jsx)(n.p,{children:"Install KafkaFlow using NuGet package management."}),"\n",(0,t.jsx)(n.p,{children:"Required Packages:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.nuget.org/packages/KafkaFlow/",children:"KafkaFlow"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.nuget.org/packages/KafkaFlow.Microsoft.DependencyInjection/",children:"KafkaFlow.Microsoft.DependencyInjection"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.nuget.org/packages/KafkaFlow.LogHandler.Console/",children:"KafkaFlow.LogHandler.Console"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"You can quickly install them using .NET CLI \ud83d\udc47"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"dotnet add package KafkaFlow\ndotnet add package KafkaFlow.Microsoft.DependencyInjection\ndotnet add package KafkaFlow.LogHandler.Console\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can find a complete list of the available packages ",(0,t.jsx)(n.a,{href:"/kafkaflow/docs/2.x/getting-started/packages",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,t.jsxs)(n.p,{children:["Types are in the ",(0,t.jsx)(n.code,{children:"KafkaFlow"})," namespace."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"using KafkaFlow;\nusing KafkaFlow.Producers;\nusing KafkaFlow.Serializer;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The host is configured using Dependency Injection. This is typically done once at application ",(0,t.jsx)(n.code,{children:"Startup.cs"})," shown bellow, but you can find an example on how to do it with an ",(0,t.jsx)(n.a,{href:"/kafkaflow/docs/2.x/getting-started/create-your-first-application",children:"Hosted Service here"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'public void ConfigureServices(IServiceCollection services)\n{\n    services.AddKafka(kafka => kafka\n        .UseConsoleLog()\n        .AddCluster(cluster => cluster\n            .WithBrokers(new[] { "localhost:9092" })\n            .AddConsumer(consumer => consumer\n                .Topic("sample-topic")\n                .WithGroupId("sample-group")\n                .WithBufferSize(100)\n                .WithWorkersCount(10)\n                .AddMiddlewares(middlewares => middlewares\n                    .AddSerializer<JsonCoreSerializer>()\n                    .AddTypedHandlers(handlers => handlers\n                        .AddHandler<SampleMessageHandler>())\n                )\n            )\n            .AddProducer("producer-name", producer => producer\n                .DefaultTopic("sample-topic")\n                .AddMiddlewares(middlewares => middlewares\n                    .AddSerializer<JsonCoreSerializer>()\n                )\n            )\n        )\n    );\n}\n\npublic void Configure(\n    IApplicationBuilder app,\n    IWebHostEnvironment env,\n    IHostApplicationLifetime lifetime)\n{\n    var kafkaBus = app.ApplicationServices.CreateKafkaBus();\n\n    lifetime.ApplicationStarted.Register(() => kafkaBus.StartAsync(lifetime.ApplicationStopped));\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Now you can create Message Handlers or access Producers and start exchanging events trouh Kafka."})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>o,a:()=>r});var t=a(67294);const i={},s=t.createContext(i);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);