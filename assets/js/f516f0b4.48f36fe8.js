"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[8845],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var i=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,y=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?i.createElement(y,r(r({ref:t},u),{},{components:n})):i.createElement(y,r({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2587:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=n(4778),a=(n(9496),n(9613));const o={slug:"2023-05-24-byconity-announcement-opensources-its-cloudnative-data-warehouse",date:new Date("2023-05-24T00:00:00.000Z"),title:"ByteDance Open Sources Its Cloud Native Data Warehouse ByConity",authors:["vinijaiswal"],tags:["video introduction","docusaurus"],keywords:["ByteDance","datawarehouse","byconity","open source","ByteDance Open Source"]},r="Introduction to ByConity",s={permalink:"/blog/2023-05-24-byconity-announcement-opensources-its-cloudnative-data-warehouse",editUrl:"https://github.com/inos2023/blog/blog/2023-05-24-byconity-announcement-opensources-its-cloudnative-data-warehouse/index.md",source:"@site/blog/2023-05-24-byconity-announcement-opensources-its-cloudnative-data-warehouse/index.md",title:"ByteDance Open Sources Its Cloud Native Data Warehouse ByConity",description:"ByConity is an open-source cloud-native data warehouse developed by ByteDance. It utilizes a computing-storage separation architecture and offers various essential features, including the separation of computing and storage, elastic scalability, tenant resource isolation, and strong consistency in data reading and writing. By leveraging optimizations from popular OLAP engines like column storage, vectorized execution, MPP execution, and query optimization, ByConity delivers exceptional read and write performance.",date:"2023-05-24T00:00:00.000Z",formattedDate:"2023\u5e745\u670824\u65e5",tags:[{label:"video introduction",permalink:"/blog/tags/video-introduction"},{label:"docusaurus",permalink:"/blog/tags/docusaurus"}],readingTime:11.185,hasTruncateMarker:!1,authors:[{name:"Vini Jaiswal",title:"ByConity maintainer",url:"https://github.com/vinijaiswal",imageURL:"https://github.com/vinijaiswal.png",key:"vinijaiswal"}],frontMatter:{slug:"2023-05-24-byconity-announcement-opensources-its-cloudnative-data-warehouse",date:"2023-05-24T00:00:00.000Z",title:"ByteDance Open Sources Its Cloud Native Data Warehouse ByConity",authors:["vinijaiswal"],tags:["video introduction","docusaurus"],keywords:["ByteDance","datawarehouse","byconity","open source","ByteDance Open Source"]},prevItem:{title:"\u5728 k8s \u4e0a\u4f7f\u7528 RoCE \u7f51\u7edc",permalink:"/blog/2023-08-22-RoCE-on-kubernetes"},nextItem:{title:"ByConity -- An Open source Cloud-native Data Warehouse",permalink:"/blog/byconity-an-opensource-cloudnative-data-warehouse-post"}},c={authorsImageUrls:[void 0]},l=[{value:"Expansion and contraction:",id:"expansion-and-contraction",level:2},{value:"Multi-tenancy and shared cluster environment:",id:"multi-tenancy-and-shared-cluster-environment",level:2},{value:"Performance limitations:",id:"performance-limitations",level:2},{value:"Storage-Computing Separation",id:"storage-computing-separation",level:2},{value:"Resource Isolation",id:"resource-isolation",level:2},{value:"Elastic Scaling",id:"elastic-scaling",level:2},{value:"Strong Data Consistency",id:"strong-data-consistency",level:2},{value:"High Performance",id:"high-performance",level:2},{value:"Stage 1: Query Request",id:"stage-1-query-request",level:2},{value:"Stage 2: Plan Scheduling",id:"stage-2-plan-scheduling",level:2},{value:"Stage 3: Query Execution",id:"stage-3-query-execution",level:2},{value:"Main Component Library",id:"main-component-library",level:2},{value:"Metadata Management",id:"metadata-management",level:3},{value:"Query Optimizer",id:"query-optimizer",level:3},{value:"Query Scheduling",id:"query-scheduling",level:3},{value:"Computing Group",id:"computing-group",level:3},{value:"Virtual File System",id:"virtual-file-system",level:3},{value:"Cache Acceleration",id:"cache-acceleration",level:3}],u={toc:l},d="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"ByConity is an open-source cloud-native data warehouse developed by ByteDance. It utilizes a computing-storage separation architecture and offers various essential features, including the separation of computing and storage, elastic scalability, tenant resource isolation, and strong consistency in data reading and writing. By leveraging optimizations from popular OLAP engines like column storage, vectorized execution, MPP execution, and query optimization, ByConity delivers exceptional read and write performance."),(0,a.kt)("h1",{id:"history-of-byconity"},"History of ByConity"),(0,a.kt)("p",null,"The origins of ByConity can be traced back to 2018 when ByteDance initially implemented ClickHouse for internal use. As the business grew, the data volume increased significantly to cater to a large user base. However, ClickHouse's Shared-Nothing architecture, where each node operates independently without sharing storage resources, posed certain challenges during its usage. Here are some of the issues encountered:"),(0,a.kt)("h2",{id:"expansion-and-contraction"},"Expansion and contraction:"),(0,a.kt)("p",null,"Due to the tight coupling of computing and storage resources in ClickHouse, scaling the system incurred higher costs and involved data migration. This prevented real-time on-demand scalability, resulting in inefficient resource utilization."),(0,a.kt)("h2",{id:"multi-tenancy-and-shared-cluster-environment"},"Multi-tenancy and shared cluster environment:"),(0,a.kt)("p",null,"ClickHouse's tightly coupled architecture led to interactions among multiple tenants in a shared cluster environment. Since reading and writing operations were performed on the same node, they often interfered with each other, impacting overall performance."),(0,a.kt)("h2",{id:"performance-limitations"},"Performance limitations:"),(0,a.kt)("p",null,"ClickHouse's support for complex queries, such as multi-table join operations, was not optimal, which hindered the system's ability to handle such queries efficiently."),(0,a.kt)("p",null,"To address these pain points, ByteDance undertook an architectural upgrade of ClickHouse. In 2020, we initiated the ByConity project internally. After releasing the Beta version in January 2023, the project was officially made available to the public at the end of May 2023."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Figure 1 ByteDance ClickHouse usage",src:n(8228).Z,width:"1652",height:"896"})),(0,a.kt)("p",null,"Figure 1: ByteDance ClickHouse Usage"),(0,a.kt)("h1",{id:"features-of-byconity"},"Features of ByConity"),(0,a.kt)("p",null,"ByConity implements a computing and storage separation architecture that transforms the original local management of computing and storage on individual nodes. Instead, it adopts a unified management approach for all data across the entire cluster using distributed storage. This transformation results in stateless computing nodes, enabling dynamic expansion and contraction by leveraging the scalability of distributed storage and the stateless nature of computing nodes. ByConity offers several crucial features that enhance its functionality and performance:"),(0,a.kt)("h2",{id:"storage-computing-separation"},"Storage-Computing Separation"),(0,a.kt)("p",null,"One of the critical advantages of ByConity is its storage-computing separation architecture, which enables read-write separation and elastic scaling. This architecture ensures that read and write operations do not affect each other, and computing resources and storage resources can be independently expanded and contracted on demand, ensuring efficient resource utilization. ByConity also supports multi-tenant resource isolation, making it suitable for multi-tenant environments."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Figure 2: ByConity storage-computing separation to achieve multi-tenant isolation",src:n(4785).Z,width:"1203",height:"561"}),"\nFigure 2: ByConity storage-computing separation to achieve multi-tenant isolation"),(0,a.kt)("h2",{id:"resource-isolation"},"Resource Isolation"),(0,a.kt)("p",null,"ByConity provides resource isolation, ensuring that different tenants have separate and independent resources. This prevents interference or impact between tenants, promoting data privacy and efficient multi-tenancy support."),(0,a.kt)("h2",{id:"elastic-scaling"},"Elastic Scaling"),(0,a.kt)("p",null," ByConity supports elastic expansion and contraction, allowing for real-time and on-demand scaling of computing resources. This flexibility ensures efficient resource utilization and enables the system to adapt to changing workload requirements."),(0,a.kt)("h2",{id:"strong-data-consistency"},"Strong Data Consistency"),(0,a.kt)("p",null,"ByConity ensures strong consistency of data read and write operations. This ensures that data is always up-to-date and eliminates any inconsistencies between read and write operations, guaranteeing data integrity and accuracy."),(0,a.kt)("h2",{id:"high-performance"},"High Performance"),(0,a.kt)("p",null,"ByConity incorporates optimization techniques from mainstream OLAP engines, such as column storage, vectorized execution, MPP execution, and query optimization. These optimizations enhance read and write performance, enabling faster and more efficient data processing and analysis."),(0,a.kt)("h1",{id:"technical-architecture-of-byconity"},"Technical Architecture of ByConity"),(0,a.kt)("p",null,"ByConity follows a three-layer architecture consisting of:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Service access layer: The service access layer, represented by ByConity Server, handles client data and service access. "),(0,a.kt)("li",{parentName:"ol"},"Computing layer: The computing layer comprises multiple computing groups, where each Virtual Warehouse (VW) functions as a computing group.  "),(0,a.kt)("li",{parentName:"ol"},"Data storage layer: The data storage layer utilizes distributed file systems like HDFS and S3.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Figure 3: ByConity&#39;s architecture",src:n(9407).Z,width:"1483",height:"809"}),"\nFigure 3: ByConity's architecture"),(0,a.kt)("h1",{id:"working-principle-of-byconity"},"Working Principle of ByConity"),(0,a.kt)("p",null,"ByConity is a powerful open-source cloud-native data warehouse that adopts a storage-computing separation architecture. In this section, we will examine the working principle of ByConity and the interaction process of each component of ByConity through the complete life cycle of a SQL."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Figure 4: ByConity internal component interaction diagram",src:n(6500).Z,width:"1280",height:"1210"}),"\nFigure 4: ByConity internal component interaction diagram"),(0,a.kt)("p",null,"Figure 4 depicts the interaction diagram of ByConity's components. In the figure, the dotted line represents the inflow of a SQL query, the double-headed arrow indicates component interaction, and the one-way arrow represents data processing and output to the client. Let's explore the interaction process of each component in ByConity throughout the complete lifecycle of a SQL query."),(0,a.kt)("p",null,"ByConity's working principle can be divided into three stages:"),(0,a.kt)("h2",{id:"stage-1-query-request"},"Stage 1: Query Request"),(0,a.kt)("p",null,"The client submits a Query request to the server. The server initially performs ",(0,a.kt)("strong",{parentName:"p"},"parsing")," and subsequently analyzes and optimizes the query through the ",(0,a.kt)("strong",{parentName:"p"},"Query Analyzer and Optimizer")," to generate an efficient executable plan. To access the required ",(0,a.kt)("strong",{parentName:"p"},"metadata"),", which is stored in a distributed key-value (KV) store, ByConity leverages ",(0,a.kt)("strong",{parentName:"p"},"FoundationDB")," and reads the metadata from the ",(0,a.kt)("strong",{parentName:"p"},"Catalog"),"."),(0,a.kt)("h2",{id:"stage-2-plan-scheduling"},"Stage 2: Plan Scheduling"),(0,a.kt)("p",null,"ByConity passes the optimized executable plan to the ",(0,a.kt)("strong",{parentName:"p"},"Plan Scheduler")," component. The scheduler accesses the ",(0,a.kt)("strong",{parentName:"p"},"Resource Manager")," to obtain available computing resources and determines which nodes to schedule the query tasks for execution."),(0,a.kt)("h2",{id:"stage-3-query-execution"},"Stage 3: Query Execution"),(0,a.kt)("p",null,"The Query request is executed on ",(0,a.kt)("strong",{parentName:"p"},"ByConity's Workers"),". The Workers read data from the underlying ",(0,a.kt)("strong",{parentName:"p"},"Cloud Storage")," and perform computations by establishing a Pipeline. The server then aggregates the calculation results from multiple Workers and returns them to the client."),(0,a.kt)("p",null,"Additionally, ByConity includes two main components: ",(0,a.kt)("strong",{parentName:"p"},"Time-stamp Oracle")," and ",(0,a.kt)("strong",{parentName:"p"},"Daemon Manager"),". The time-stamp oracle supports transaction processing, while the daemon manager manages and schedules subsequent tasks."),(0,a.kt)("h2",{id:"main-component-library"},"Main Component Library"),(0,a.kt)("p",null,"To better understand the working principle of ByConity, let's take a look at the main components of ByConity:"),(0,a.kt)("h3",{id:"metadata-management"},"Metadata Management"),(0,a.kt)("p",null,"ByConity offers a highly available and high-performance metadata read and write service called the Catalog Server. It supports complete transaction semantics (ACID). Furthermore, we have designed the Catalog Server with a flexible architecture, allowing for the pluggability of backend storage systems. Currently, we support Apple's open-source FoundationDB, and there is potential for extending support to other backend storage systems in the future."),(0,a.kt)("h3",{id:"query-optimizer"},"Query Optimizer"),(0,a.kt)("p",null,"The query optimizer plays a crucial role in the performance of a database system. A well-designed optimizer can significantly enhance query performance, particularly in complex query scenarios, where it can achieve performance improvements ranging from several times to hundreds of times. ByConity's self-developed optimizer focuses on improving optimization capabilities through two main approaches:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"RBO (Rule-Based Optimization): This capability encompasses various optimizations such as column pruning, partition pruning, expression simplification, subquery dissociation, predicate pushdown, redundant operator elimination, Outer-Join to Inner-Join conversion, operator pushdown storage, distributed operator splitting, and other heuristic optimization techniques."),(0,a.kt)("li",{parentName:"ul"},"CBO (Cost-Based Optimization): ByConity's optimizer also includes cost-based optimization capabilities. This includes support for join reorder, outer-join reorder, join/agg reorder, common table expressions (CTE), materialized views, dynamic filter push-down, magic set optimization, and other cost-based techniques. Additionally, it integrates property enforcement for distributed planning.")),(0,a.kt)("h3",{id:"query-scheduling"},"Query Scheduling"),(0,a.kt)("p",null,"ByConity currently supports two query scheduling strategies: Cache-aware scheduling and Resource-aware scheduling."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("strong",{parentName:"li"},"cache-aware scheduling")," focuses on scenarios where computing and storage are separated. Its objective is to maximize cache utilization and minimize cold reads. This strategy aims to schedule tasks to nodes that have corresponding data caches, enabling computations to leverage the cache and improve read and write performance. Additionally, considering the dynamic expansion and contraction of the system, cache-aware scheduling strives to minimize the impact of cache failure on query performance when the computing group's topology changes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Resource-aware scheduling")," analyzes the resource usage of different nodes within the computing group across the entire cluster. It performs targeted scheduling to optimize resource utilization. Moreover, resource-aware scheduling incorporates flow control mechanisms to ensure rational resource utilization and prevent negative effects caused by overload, such as system downtime.")),(0,a.kt)("h3",{id:"computing-group"},"Computing Group"),(0,a.kt)("p",null,"ByConity enables different tenants to utilize distinct computing resources, as depicted in Figure 5. With ByConity's architecture, implementing features like multi-tenant isolation and read-write separation becomes straightforward. Each tenant can leverage separate computing groups to achieve multi-tenant isolation and support read-write separation. The computing groups can be dynamically expanded and contracted on-demand, ensuring efficient resource utilization. During periods of low resource utilization, resource sharing can be employed, allowing computing groups to be allocated to other tenants to maximize resource utilization and minimize costs."),(0,a.kt)("h3",{id:"virtual-file-system"},"Virtual File System"),(0,a.kt)("p",null,'The virtual file system module serves as an intermediary layer for data reading and writing. ByConity has optimized this module to provide a "storage as a service" capability to other modules. The virtual file system offers a unified file system abstraction, shielding the underlying different back-end implementations. It facilitates easy expansion and supports multiple storage systems, such as HDFS or object storage.'),(0,a.kt)("h3",{id:"cache-acceleration"},"Cache Acceleration"),(0,a.kt)("p",null,"ByConity utilizes caching to accelerate query processing. Under the computing-storage separation architecture, cache acceleration is performed in both the metadata and data dimensions. In the metadata dimension, ByConity caches Table and Partition information in the memory of the server-side (ByConity Server). In the data dimension, cache acceleration occurs on the Worker side within the computing group. This hierarchical caching mechanism utilizes both memory and disk, with Mark collection serving as the cache granularity. These caching strategies effectively enhance query speed and performance."),(0,a.kt)("h1",{id:"how-to-deploy-byconity"},"How to Deploy Byconity"),(0,a.kt)("p",null,"ByConity currently supports four acquisition and deployment modes. Community developers are welcome to use them and submit issues to us:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Stand-alone Docker: ByConity provides a Docker deployment option, which can be accessed at ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/ByConity/byconity-docker"},"https://github.com/ByConity/byconity-docker")),(0,a.kt)("li",{parentName:"ul"},"K8s cluster deployment: ByConity also supports deployment on Kubernetes clusters. The deployment guide for Kubernetes can be found at ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/ByConity/byconity-deploy"},"https://github.com/ByConity/byconity-deploy")),(0,a.kt)("li",{parentName:"ul"},"Physical machine deployment: If you prefer to deploy ByConity on physical machines, you can refer to the repository at ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/ByConity/ByConity/tree/master/packages"},"https://github.com/ByConity/ByConity/tree/master/packages")),(0,a.kt)("li",{parentName:"ul"},"Source code compilation: You can compile the ByConity source code yourself. The source code repository can be accessed at ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/ByConity/ByConity#build-byconity"},"https://github.com/ByConity/ByConity#build-byconity"))),(0,a.kt)("h1",{id:"byconitys-future-open-source-plan"},"ByConity's Future Open-Source Plan"),(0,a.kt)("p",null,"ByConity includes several key milestones in its open-source community roadmap through 2023. These milestones are designed to enhance ByConity's functionality, performance, and ease of use. Among them, the development of new storage engines, support for more data types, and integration with other data management tools are some important areas of focus. We have listed the following directions, and created an issue on Github: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ByConity/ByConity/issues/26"},"https://github.com/ByConity/ByConity/issues/26"),", inviting the community to join us to discuss co-development:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Performance improvement"),": ByConity aims to boost performance through various optimizations. This includes leveraging indexes for acceleration, such as Skip-index optimization, support for new Zorder-index and inverted indexes. ByConity will also focus on the construction and acceleration of external indexes, as well as the automatic recommendation and conversion of indexes. Continuous enhancements to the query optimizer and the implementation of a distributed caching mechanism are also part of the performance improvement efforts."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Stability improvement"),": There are two aspects here.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"One is to support resource isolation in more dimensions. ByConity is committed to improving stability by extending resource isolation capabilities in multiple dimensions, thereby providing better multi-tenant support. "),(0,a.kt)("li",{parentName:"ul"},"The second direction is to enrich metrics and improve observability and problem diagnosis capabilities, ensuring a stable and reliable experience for users."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Enterprise-level feature enhancements"),": ByConity aims to introduce finer-grained authority control, improve data security-related functions such as backup, recovery, and data encryption and continue to explore techniques for deep compression of data to save storage costs."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Ecosystem compatibility improvement"),": ByConity plans to expand its compatibility with various storage systems, including popular object storage solutions like S3 and TOS. It plans to enhance the overall compatibility and integration capabilities, facilitating seamless integration with other tools and frameworks. Moreover, it aims to support data lake federation queries, enabling interaction with technologies like Hudi, Iceberg, and more.")),(0,a.kt)("h1",{id:"working-with-the-community"},"Working with the Community"),(0,a.kt)("p",null,"Since the release of the Beta version, ByConity has received support from numerous enterprise developers, including Huawei, Electronic Cloud, Zhanxinzhanli, Tianyi Cloud, Vipshop, and Transsion Holdings. These organizations have actively contributed by deploying ByConity in their respective environments, undergoing TPC-DS verification, and conducting tests in their business scenarios. The results have been promising, and their feedback has provided valuable insights for improvement, which we greatly appreciate."),(0,a.kt)("p",null,"We are delighted to receive the ideas and willingness of community partners to build together. We have already initiated joint development efforts with Huawei Terminal Cloud. Our collaborative endeavors will focus on various areas, such as Kerberos authentication, ORC support, and integration with S3 storage. "),(0,a.kt)("p",null,"If you are interested in joining our community and participating in the development of ByConity, we invite you to visit our GitHub repository at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ByConity/ByConity"},"https://github.com/ByConity/ByConity"),". You can find more information and details about our ongoing projects, contribute your ideas, and collaborate with us to further enhance ByConity. To get involved, simply scan the QR code provided below to join our ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/V4BvTWGEQJ"},"Discord")," or follow us on ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/ByConity"},"Twitter"),". "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ByConity Discord Group",src:n(3074).Z,width:"400",height:"400"}),"\nByConity Discord Group"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ByConity Twitter",src:n(4259).Z,width:"400",height:"400"}),"\nByConity Twitter"),(0,a.kt)("h1",{id:"summary"},"Summary"),(0,a.kt)("p",null,"In summary, ByConity is an open source cloud-native data warehouse that offers features such as read-write separation, elastic expansion and contraction, tenant resource isolation, and strong data read and write consistency. It utilizes a computing-storage separation architecture and leverages optimizations from mainstream OLAP engines to deliver excellent read and write performance. As ByConity continues to evolve and improve, it aims to become a key tool for cloud-native data warehousing in the future."))}p.isMDXComponent=!0},8228:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/f1-byte-clickhouse-usage-cefbe6a269f39c214219df180aef1560.png"},4785:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/f2-storage-computing-separation-51a4fd7a3073479cf431a48278204cd5.png"},9407:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/f3-three-layer-architecture-403f695f8cd48cb936283a4c7b86553d.png"},6500:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/f4-internal-component-interaction-301b3d1e7d179142c3b1ce535f1ce105.png"},3074:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/f5-ByConity-Discord-QR-Code-3df954930bbe1e0f0f6cb1a197c4de77.jpeg"},4259:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/f5-ByConity-Twitter-QR-code-1ec0e9ecaae58ba7e5d33acbeadfb84c.jpeg"}}]);