"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[9777],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(n),d=l,k=c["".concat(p,".").concat(d)]||c[d]||m[d]||r;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3432:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=n(4778),l=(n(9496),n(9613));const r={title:"Logical",slug:"logical",hidden:!1,createdAt:"2021-07-29T12:13:37.269Z",updatedAt:"2021-09-23T06:31:50.019Z",tags:["Docs"]},o="logical",i={unversionedId:"sql-syntax/logical",id:"sql-syntax/logical",title:"Logical",description:"Notice:",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/sql-syntax/logical.mdx",sourceDirName:"sql-syntax",slug:"/sql-syntax/logical",permalink:"/docs/sql-syntax/logical",draft:!1,editUrl:"https://github.com/inos2023/blog/i18n/zh-cn/docusaurus-plugin-content-docs/current/sql-syntax/logical.mdx",tags:[{label:"Docs",permalink:"/docs/tags/docs"}],version:"current",frontMatter:{title:"Logical",slug:"logical",hidden:!1,createdAt:"2021-07-29T12:13:37.269Z",updatedAt:"2021-09-23T06:31:50.019Z",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Hash",permalink:"/docs/sql-syntax/hash"},next:{title:"Mathematical",permalink:"/docs/sql-syntax/mathematical"}},p={},u=[{value:"and",id:"and",level:2},{value:"or",id:"or",level:2},{value:"xor",id:"xor",level:2}],s={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(c,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"logical"},"logical"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Notice:\nSome of the examples below are referenced from ",(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/functions/"},"ClickHouse Documentation")," but have been adapted and modified to work in ByConity.")),(0,l.kt)("h2",{id:"and"},"and"),(0,l.kt)("p",null,"Calculates the result of the logical conjunction between two or more values. Corresponds to Logical AND Operator."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"and(val1, val2...)\n\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"val1, val2, ...")," \u2014 List of at least two values. Int, UInt, Float or Nullable.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0")," , if there is at least one zero value argument."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"NULL")," , if there are no zero values arguments and there is at least one ",(0,l.kt)("inlineCode",{parentName:"li"},"NULL")," argument."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1")," , otherwise.\nType: UInt8 or Nullable(UInt8).")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"SELECT and(0, 1, -2);\n\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u250c\u2500and(0, 1, -2)\u2500\u2510\n\u2502 0             \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n")),(0,l.kt)("p",null,"With ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"SELECT and(NULL, 1, 10, -2);\n\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u250c\u2500and(NULL, 1, 10, -2)\u2500\u2510\n\u2502 \u1d3a\u1d41\u1d38\u1d38                 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n")),(0,l.kt)("h2",{id:"or"},"or"),(0,l.kt)("p",null,"Calculates the result of the logical disjunction between two or more values. Corresponds to Logical OR Operator."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"or(val1, val2...)\n\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"val1, val2, ...")," \u2014 List of at least two values. Int, UInt, Float or Nullable.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1")," , if there is at least one non-zero value."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0")," , if there are only zero values."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"NULL")," , if there are only zero values and ",(0,l.kt)("inlineCode",{parentName:"li"},"NULL")," .\nType: UInt8 or Nullable(UInt8).")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"SELECT or(1, 0, 0, 2, NULL);\n\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u250c\u2500or(1, 0, 0, 2, NULL)\u2500\u2510\n\u2502 1                    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n")),(0,l.kt)("h2",{id:"xor"},"xor"),(0,l.kt)("p",null,"Calculates the result of the logical exclusive disjunction between two or more values. For more than two values the function works as if it calculates ",(0,l.kt)("inlineCode",{parentName:"p"},"XOR")," of the first two values and then uses the result with the next value to calculate ",(0,l.kt)("inlineCode",{parentName:"p"},"XOR")," and so on."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"xor(val1, val2...)\n\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"val1, val2, ...")," \u2014 List of at least two values. Int, UInt, Float or Nullable.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1")," , for two values: if one of the values is zero and other is not."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0")," , for two values: if both values are zero or non-zero at the same time."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"NULL")," , if there is at least one ",(0,l.kt)("inlineCode",{parentName:"li"},"NULL")," value.\nType: UInt8 or Nullable(UInt8).")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"SELECT xor(0, 1, 1);\n\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u250c\u2500xor(0, 1, 1)\u2500\u2510\n\u2502 0            \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n")),(0,l.kt)("p",null,"With ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"SELECT xor(NULL, 0);\n\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u250c\u2500xor(NULL, 0)\u2500\u2510\n\u2502 \u1d3a\u1d41\u1d38\u1d38         \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n")))}m.isMDXComponent=!0}}]);