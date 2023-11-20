"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[9182],{9613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,y=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(y,l(l({ref:t},p),{},{components:r})):n.createElement(y,l({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3280:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(4778),a=(r(9496),r(9613));const o={title:"\u5217\u5b58\u8bbe\u8ba1\u539f\u7406",tags:["Docs"]},l="\u5217\u5b58\u8bbe\u8ba1\u539f\u7406",i={unversionedId:"advanced-guide/column-based-storage",id:"advanced-guide/column-based-storage",title:"\u5217\u5b58\u8bbe\u8ba1\u539f\u7406",description:"\u901a\u5e38\u4e8b\u52a1\u578b\u6570\u636e\u5e93\u91c7\u7528\u884c\u5b58\u4fbf\u4e8e\u652f\u6301\u4e8b\u52a1\u548c\u9ad8\u5e76\u53d1\u8bfb\u5199\uff0c\u5206\u6790\u578b\u6570\u636e\u5e93\u91c7\u7528\u5217\u5b58\u51cf\u5c11 IO \u548c\u4fbf\u4e8e\u538b\u7f29\u3002ByConity \u91c7\u7528\u5217\u5b58\u7684\u65b9\u5f0f\uff0c\u4fdd\u8bc1\u8bfb\u5199\u6027\u80fd\u3001\u652f\u6301\u4e8b\u52a1\u4e00\u81f4\u6027\uff0c\u53c8\u9002\u7528\u5927\u89c4\u6a21\u7684\u6570\u636e\u8ba1\u7b97\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/advanced-guide/column-based-storage.mdx",sourceDirName:"advanced-guide",slug:"/advanced-guide/column-based-storage",permalink:"/docs/advanced-guide/column-based-storage",draft:!1,editUrl:"https://github.com/inos2023/blog/i18n/zh-cn/docusaurus-plugin-content-docs/current/advanced-guide/column-based-storage.mdx",tags:[{label:"Docs",permalink:"/docs/tags/docs"}],version:"current",frontMatter:{title:"\u5217\u5b58\u8bbe\u8ba1\u539f\u7406",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Bucket table \u6700\u4f73\u5b9e\u8df5\u624b\u518c",permalink:"/docs/advanced-guide/bucket-table-best-practice"},next:{title:"\u590d\u6742\u67e5\u8be2\u6a21\u578b\u548c\u6267\u884c\u8c03\u4f18",permalink:"/docs/advanced-guide/complex-query-model-and-optimisation"}},c={},u=[{value:"Data Layout",id:"data-layout",level:3},{value:"Part Delta",id:"part-delta",level:3},{value:"Part \u6587\u4ef6\u5185\u5bb9",id:"part-\u6587\u4ef6\u5185\u5bb9",level:3},{value:"Compaction",id:"compaction",level:3}],p={toc:u},d="wrapper";function s(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5217\u5b58\u8bbe\u8ba1\u539f\u7406"},"\u5217\u5b58\u8bbe\u8ba1\u539f\u7406"),(0,a.kt)("p",null,"\u901a\u5e38\u4e8b\u52a1\u578b\u6570\u636e\u5e93\u91c7\u7528\u884c\u5b58\u4fbf\u4e8e\u652f\u6301\u4e8b\u52a1\u548c\u9ad8\u5e76\u53d1\u8bfb\u5199\uff0c\u5206\u6790\u578b\u6570\u636e\u5e93\u91c7\u7528\u5217\u5b58\u51cf\u5c11 IO \u548c\u4fbf\u4e8e\u538b\u7f29\u3002ByConity \u91c7\u7528\u5217\u5b58\u7684\u65b9\u5f0f\uff0c\u4fdd\u8bc1\u8bfb\u5199\u6027\u80fd\u3001\u652f\u6301\u4e8b\u52a1\u4e00\u81f4\u6027\uff0c\u53c8\u9002\u7528\u5927\u89c4\u6a21\u7684\u6570\u636e\u8ba1\u7b97\u3002"),(0,a.kt)("h3",{id:"data-layout"},"Data Layout"),(0,a.kt)("p",null,"\u8868\u6570\u636e\u7269\u7406\u4e0a\u6309 Partition Key \u5207\u5206\u4e3a\u591a\u4e2a Parts \u5b58\u50a8\u5728\u7edf\u4e00\u7684\u5206\u5e03\u5f0f\u6587\u4ef6\u7cfb\u7edf\u548c\u4e91\u5b58\u50a8\u7684\u903b\u8f91\u5b58\u50a8\u8def\u5f84\u4e0b\uff0c\u6bcf\u4e2a Part \u7684\u5927\u5c0f\u6709\u6570\u636e\u91cf\u548c\u884c\u6570\u9650\u5236\uff0c\u8ba1\u7b97\u7ec4\u6839\u636e\u670d\u52a1\u8282\u70b9\u5206\u914d\u7684\u7b56\u7565\uff08\u9884\u5148\u5206\u914d\u548c\u5b9e\u65f6\u5206\u914d\uff09\u83b7\u5f97\u5176\u5bf9\u5e94\u7684\u90e8\u5206 parts\u3002"),(0,a.kt)("h3",{id:"part-delta"},"Part Delta"),(0,a.kt)("p",null,"Part \u6570\u636e\u6700\u521d\u6784\u5efa\u4e4b\u540e\u662f\u4e00\u4e2a\u884c\u5217\u6df7\u5408\u5b58\u50a8\u7684 Part \u6570\u636e\u6587\u4ef6\uff0c\u968f\u7740 DML/\u6570\u636e\u5b57\u5178/Bitmap index \u7b49\u6784\u5efa\u5de5\u4f5c\u7684\u8fdb\u884c Part \u5b58\u5728\u589e\u91cf\u6570\u636e\uff0c\u8fd9\u90e8\u5206\u6570\u636e\u53ef\u4ee5\u6709\u4ee5\u4e0b\u4e24\u79cd\u5b58\u50a8\u65b9\u5f0f\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6bcf\u6b21\u6784\u5efa\u90fd\u4f1a Rewrite Part \u6570\u636e"),(0,a.kt)("li",{parentName:"ol"},"\u751f\u6210\u589e\u91cf\u6570\u636e\uff0c\u540e\u53f0\u5f02\u6b65\u5408\u5e76\u6210\u4e00\u4e2a\u5927\u7684 Part \u6587\u4ef6")),(0,a.kt)("p",null,"\u65b9\u6848\u4e00\u5bf9\u6574\u4e2a\u96c6\u7fa4\u7684\u53ef\u7528\u6027\u53ef\u80fd\u4f1a\u6709\u4e00\u5b9a\u7684\u5f71\u54cd\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6bcf\u6b21 DML/\u6570\u636e\u5b57\u5178\u7b49\u6784\u5efa\u90fd\u53ef\u80fd\u6d89\u53ca\u5230\u6574\u4e2a\u8868 Parts \u7684\u5168\u91cf IO \u64cd\u4f5c\uff0c\u8fd9\u4e2a\u4ee3\u4ef7\u6bd4\u8f83\u5927\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u6784\u5efa\u65f6\u95f4\u6bd4\u8f83\u957f DML \u7b49\u64cd\u4f5c\u4f1a\u6bd4\u8f83\u957f\u7684\u65f6\u95f4\u624d\u80fd\u505a\u5b8c\uff0c\u5bf9\u7528\u6237\u4e0d\u53cb\u597d\uff0c\u6211\u4eec\u91c7\u7528\u65b9\u6848\u4e8c\u3002")),(0,a.kt)("h3",{id:"part-\u6587\u4ef6\u5185\u5bb9"},"Part \u6587\u4ef6\u5185\u5bb9"),(0,a.kt)("p",null,"part \u6570\u636e\u5206\u4e3a\u4e24\u4e2a\u90e8\u5206\uff1a"),(0,a.kt)("p",null,"\u4e00\u662f\u6574\u4e2a Part \u5305\u62ec rows/schema/column data \u5728\u6570\u636e\u6587\u4ef6\u4e2d\u7684 Offset \u7b49\u5143\u4fe1\u606f\uff0c\u8fd9\u90e8\u5206\u4fe1\u606f\u6301\u4e45\u5316\u5b58\u50a8\u5e76\u88ab\u8ba1\u7b97\u8282\u70b9\u7f13\u5b58"),(0,a.kt)("p",null,"\u4e8c\u662f\u5b9e\u9645\u7684\u6570\u636e\u4fe1\u606f\uff0c\u8fd9\u90e8\u5206\u4fe1\u606f\u5305\u542b\u5b9e\u9645\u7684 column bin \u6570\u636e/column mrk \u6570\u636e/Map key bin/Map key index/\u6570\u636e\u5b57\u5178\u6570\u636e/bitmap index \u6570\u636e\u7b49\uff0c\u6570\u636e\u6309\u5143\u4fe1\u606f\u4e2d\u7684 Offset \u4fe1\u606f\u5728 Part \u7684\u6570\u636e\u6587\u4ef6\u4f9d\u6b21\u5b58\u50a8\u3002"),(0,a.kt)("h3",{id:"compaction"},"Compaction"),(0,a.kt)("p",null,"ByConity \u652f\u6301\u5c06\u4e00\u4e2a part \u6587\u4ef6\u62c6\u5206\u4e3a\u591a\u4e2a\u5c0f\u6587\u4ef6\uff0c\u901a\u8fc7\u914d\u7f6e Part \u7684\u6700\u5927 Size \u548c\u6700\u5927\u884c\u6570\uff0cCompact \u4e4b\u540e\u7684 Part \u9700\u8981\u6ee1\u8db3\u8fd9\u4e2a\u9650\u5236\u3002"),(0,a.kt)("p",null,"ByConity \u4e2d\u7684 Compaction \u662f\u5728\u5168\u5c40\u505a\u7684\uff0c\u4e0e\u524d\u9762\u63d0\u9ad8\u7684\u5168\u5c40\u7684 block ID \u4fdd\u6301\u4e00\u81f4\u3002"))}s.isMDXComponent=!0}}]);