"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[8516],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=o(n),g=r,d=m["".concat(s,".").concat(g)]||m[g]||v[g]||l;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=g;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1723:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>v,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var a=n(4778),r=(n(9496),n(9613));const l={title:"IP Address",slug:"ip-address",hidden:!1,createdAt:"2021-07-29T12:06:52.617Z",updatedAt:"2021-09-23T04:04:27.184Z",tags:["Docs"]},i=void 0,p={unversionedId:"sql-syntax/functions/ip-address",id:"sql-syntax/functions/ip-address",title:"IP Address",description:"Notice:",source:"@site/docs/sql-syntax/functions/ip-address.mdx",sourceDirName:"sql-syntax/functions",slug:"/sql-syntax/functions/ip-address",permalink:"/en/docs/sql-syntax/functions/ip-address",draft:!1,editUrl:"https://github.com/inos2023/blog/docs/sql-syntax/functions/ip-address.mdx",tags:[{label:"Docs",permalink:"/en/docs/tags/docs"}],version:"current",frontMatter:{title:"IP Address",slug:"ip-address",hidden:!1,createdAt:"2021-07-29T12:06:52.617Z",updatedAt:"2021-09-23T04:04:27.184Z",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Hash",permalink:"/en/docs/sql-syntax/functions/hash"},next:{title:"JSON",permalink:"/en/docs/sql-syntax/functions/json"}},s={},o=[{value:"IPv4NumToString",id:"ipv4numtostring",level:2},{value:"IPv4NumToStringClassC",id:"ipv4numtostringclassc",level:2},{value:"IPv4StringToNum",id:"ipv4stringtonum",level:2},{value:"IPv4ToIPv6",id:"ipv4toipv6",level:2},{value:"IPv6NumToString",id:"ipv6numtostring",level:2},{value:"IPv6StringToNum",id:"ipv6stringtonum",level:2},{value:"cutIPv6",id:"cutipv6",level:2},{value:"toIPv4",id:"toipv4",level:2},{value:"toIPv6",id:"toipv6",level:2}],u={toc:o},m="wrapper";function v(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Notice:\nSome of the examples below are referenced from ",(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/functions/"},"ClickHouse Documentation")," but have been adapted and modified to work in ByConity.")),(0,r.kt)("h2",{id:"ipv4numtostring"},"IPv4NumToString"),(0,r.kt)("p",null,"Takes a UInt32 number. Interprets it as an IPv4 address in big endian. Returns a string containing the corresponding IPv4 address in the format A.B.C.d (dot-separated numbers in decimal form)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"IPv4NumToString(num)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"num")," \u2013 a UInt32 number.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returned value")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A string in ipv4 representation.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT toIPv4('116.106.34.242') as ipv4, toTypeName(ipv4), IPv4NumToString(ipv4) as ipv4_string, toTypeName(ipv4_string)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500ipv4\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500toTypeName(toIPv4('116.106.34.242'))\u2500\u252c\u2500ipv4_string\u2500\u2500\u2500\u2500\u252c\u2500toTypeName(IPv4NumToString(toIPv4('116.106.34.242')))\u2500\u2510\n\u2502 242.34.106.116 \u2502 IPv4                                 \u2502 116.106.34.242 \u2502 String                                                \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"ipv4numtostringclassc"},"IPv4NumToStringClassC"),(0,r.kt)("p",null,"Similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"IPv4NumToString"),", but using xxx instead of the last octet."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"IPv4NumToStringClassC(num)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"num")," \u2013 a UInt32 number.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returned value")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An string in ipv4 representation, but using xxx instead of the last octet.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT toIPv4('116.106.34.242') as ipv4, toTypeName(ipv4), IPv4NumToStringClassC(ipv4) as ipv4_string, toTypeName(ipv4_string)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500ipv4\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500toTypeName(toIPv4('116.106.34.242'))\u2500\u252c\u2500ipv4_string\u2500\u2500\u2500\u2500\u252c\u2500toTypeName(IPv4NumToStringClassC(toIPv4('116.106.34.242')))\u2500\u2510\n\u2502 242.34.106.116 \u2502 IPv4                                 \u2502 116.106.34.xxx \u2502 String                                                      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"ipv4stringtonum"},"IPv4StringToNum"),(0,r.kt)("p",null,"The reverse function of IPv4NumToString. If the IPv4 address has an invalid format, it returns 0."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"IPv4StringToNum(s)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"s")," \u2013 ipv4 in string representation.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returned value")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"UInt32.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT IPv4StringToNum('116.106.34.242') as ipv4, toTypeName(ipv4), IPv4NumToString(ipv4) as ipv4_string, toTypeName(ipv4_string)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500ipv4\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500toTypeName(IPv4StringToNum('116.106.34.242'))\u2500\u252c\u2500ipv4_string\u2500\u2500\u2500\u2500\u252c\u2500toTypeName(IPv4NumToString(IPv4StringToNum('116.106.34.242')))\u2500\u2510\n\u2502 1953112818 \u2502 UInt32                                        \u2502 116.106.34.242 \u2502 String                                                         \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"ipv4toipv6"},"IPv4ToIPv6"),(0,r.kt)("p",null,"Takes a ",(0,r.kt)("inlineCode",{parentName:"p"},"UInt32")," number. Interprets it as an IPv4 address in ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Endianness"},"big endian")," . Returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"FixedString(16)")," value containing the IPv6 address in binary format."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"IPv4ToIPv6(x)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"x")," \u2013 a ",(0,r.kt)("inlineCode",{parentName:"li"},"UInt32")," number")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returned value")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"IPv6 address in binary format.FixedString(16)")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT IPv4StringToNum('192.168.0.1') as ipv4, IPv6NumToString(IPv4ToIPv6(ipv4)) as ipv6_string\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500ipv4\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500ipv6_string\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 3232235521 \u2502 ::ffff:192.168.0.1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"ipv6numtostring"},"IPv6NumToString"),(0,r.kt)("p",null,"Accepts a FixedString(16) value containing the IPv6 address in binary format. Returns a string containing this address in text format."),(0,r.kt)("p",null,"IPv6-mapped IPv4 addresses are output in the format ::ffff:111.222.33.44."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"IPv6NumToString(x)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"x")," \u2013 FixedString(16) value containing the IPv6 address in binary format")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returned value")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A string in ipv6 representation.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT IPv6NumToString(toFixedString(unhex('2A0206B8000000000000000000000011'), 16)) AS addr;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500addr\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 2a02:6b8::11 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"ipv6stringtonum"},"IPv6StringToNum"),(0,r.kt)("p",null,"The reverse function of ",(0,r.kt)("inlineCode",{parentName:"p"},"IPv6NumToString"),". If the IPv6 address has an invalid format, it returns a string of null bytes.\nIf the input string contains a valid IPv4 address, returns its IPv6 equivalent.\nHEX can be uppercase or lowercase."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"IPv6StringToNum(string)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Argument")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"string")," \u2014 IP address. String.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returned value")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"IPv6 address in binary format. Type: FixedString(16).")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT addr, cutIPv6(IPv6StringToNum(addr), 0, 0) FROM (SELECT ['notaddress', '127.0.0.1', '1111::ffff'] AS addr) ARRAY JOIN addr;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500addr\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500cutIPv6(IPv6StringToNum(addr), 0, 0)\u2500\u2510\n\u2502 notaddress \u2502 ::                                   \u2502\n\u2502 127.0.0.1  \u2502 ::                                   \u2502\n\u2502 1111::ffff \u2502 1111::ffff                           \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"cutipv6"},"cutIPv6"),(0,r.kt)("p",null,"Accepts a FixedString(16) value containing the IPv6 address in binary format. Returns a string containing the address of the specified number of bytes removed in text format."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"cutIPv6(x, bytesToCutForIPv6, bytesToCutForIPv4)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"x")," \u2013 a FixedString(16) value containing the IPv6 address in binary format"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bytesToCutForIPv6")," - number of bytes to cut for ipv6 represenration"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bytesToCutForIPv4")," - number of bytes to cut for ipv4 represenration")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returned value"),"\nA ",(0,r.kt)("inlineCode",{parentName:"p"},"Uint64")," data type hash value."),(0,r.kt)("p",null,"Type: ",(0,r.kt)("inlineCode",{parentName:"p"},"UInt64")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"WITH\n    IPv6StringToNum('2001:0DB8:AC10:FE01:FEED:BABE:CAFE:F00D') AS ipv6,\n    IPv4ToIPv6(IPv4StringToNum('192.168.0.1')) AS ipv4\nSELECT\n    cutIPv6(ipv6, 2, 0),\n    cutIPv6(ipv4, 0, 2)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500cutIPv6(ipv6, 2, 0)\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500cutIPv6(ipv4, 0, 2)\u2500\u2510\n\u2502 2001:db8:ac10:fe01:feed:babe:cafe:0 \u2502 ::ffff:192.168.0.0  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"toipv4"},"toIPv4"),(0,r.kt)("p",null,"An alias to ",(0,r.kt)("inlineCode",{parentName:"p"},"IPv4StringToNum()")," that takes a string form of IPv4 address and returns value of IPv4 type, which is binary equal to value returned by ",(0,r.kt)("inlineCode",{parentName:"p"},"IPv4StringToNum()")," ."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"toIPv4(string)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Argument")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"string")," \u2014 IP address. String.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returned value")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"IPv4 type")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"WITH\n    '171.225.130.45' as IPv4_string\nSELECT\n    toTypeName(IPv4StringToNum(IPv4_string)),\n    toTypeName(toIPv4(IPv4_string))\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500toTypeName(IPv4StringToNum(IPv4_string))\u2500\u252c\u2500toTypeName(toIPv4(IPv4_string))\u2500\u2510\n\u2502 UInt32                                   \u2502 IPv4                            \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"WITH\n    '171.225.130.45' as IPv4_string\nSELECT\n    hex(IPv4StringToNum(IPv4_string)),\n    hex(toIPv4(IPv4_string))\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500hex(IPv4StringToNum(IPv4_string))\u2500\u252c\u2500hex(toIPv4(IPv4_string))\u2500\u2510\n\u2502 ABE1822D                          \u2502 ABE1822D                 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"toipv6"},"toIPv6"),(0,r.kt)("p",null,"Converts a string form of IPv6 address to IPv6 type. If the IPv6 address has an invalid format, returns an empty value.\nSimilar to IPv6StringToNum function, which converts IPv6 address to binary format."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"toIPv6(string)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Argument")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"string")," \u2014 IP address. String")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returned value")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"IP address. Type: IPv6.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"WITH '2001:438:ffff::407d:1bc1' AS IPv6_string\nSELECT\n    hex(IPv6StringToNum(IPv6_string)),\n    hex(toIPv6(IPv6_string));\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500hex(IPv6StringToNum(IPv6_string))\u2500\u252c\u2500hex(toIPv6(IPv6_string))\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 20010438FFFF000000000000407D1BC1  \u2502 20010438FFFF000000000000407D1BC1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}v.isMDXComponent=!0}}]);