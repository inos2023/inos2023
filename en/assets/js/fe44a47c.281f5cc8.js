"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[4401],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),g=l,m=c["".concat(s,".").concat(g)]||c[g]||d[g]||o;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:l,r[1]=i;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8209:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(4778),l=(n(9496),n(9613));const o={title:"Geo",slug:"geo",hidden:!1,createdAt:"2021-07-29T12:05:09.208Z",updatedAt:"2021-09-23T04:01:15.690Z",tags:["Docs"]},r=void 0,i={unversionedId:"sql-syntax/functions/geo",id:"sql-syntax/functions/geo",title:"Geo",description:"Notice:",source:"@site/docs/sql-syntax/functions/geo.mdx",sourceDirName:"sql-syntax/functions",slug:"/sql-syntax/functions/geo",permalink:"/en/docs/sql-syntax/functions/geo",draft:!1,editUrl:"https://github.com/inos2023/blog/docs/sql-syntax/functions/geo.mdx",tags:[{label:"Docs",permalink:"/en/docs/tags/docs"}],version:"current",frontMatter:{title:"Geo",slug:"geo",hidden:!1,createdAt:"2021-07-29T12:05:09.208Z",updatedAt:"2021-09-23T04:01:15.690Z",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Encryption",permalink:"/en/docs/sql-syntax/functions/encryption"},next:{title:"Hash",permalink:"/en/docs/sql-syntax/functions/hash"}},s={},p=[{value:"geohashDecode",id:"geohashdecode",level:2},{value:"geohashEncode",id:"geohashencode",level:2},{value:"greatCircleDistance",id:"greatcircledistance",level:2},{value:"pointInEllipses",id:"pointinellipses",level:2},{value:"pointInPolygon",id:"pointinpolygon",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Notice:\nSome of the examples below are referenced from ",(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/functions/"},"ClickHouse Documentation")," but have been adapted and modified to work in ByConity.")),(0,l.kt)("h2",{id:"geohashdecode"},"geohashDecode"),(0,l.kt)("p",null,"Decodes any geohash-encoded string into longitude and latitude."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"geohashDecode(encoded_string)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"encoded_string")," - geohash-encoded string.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned values")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"longitude and latitude.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT geohashDecode('ezs42d000000') as res;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500res\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 (-5.603027176111937, 42.59399422444403) \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"geohashencode"},"geohashEncode"),(0,l.kt)("p",null,"Encodes latitude and longitude as a geohash-string."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"geohashEncode(longitude, latitude, [precision])\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"longitude - longitude part of the coordinate you want to encode. Floating in range ",(0,l.kt)("inlineCode",{parentName:"li"},"[-180\xb0, 180\xb0]")),(0,l.kt)("li",{parentName:"ul"},"latitude - latitude part of the coordinate you want to encode. Floating in range ",(0,l.kt)("inlineCode",{parentName:"li"},"[-90\xb0, 90\xb0]")),(0,l.kt)("li",{parentName:"ul"},"precision - Optional, length of the resulting encoded string, defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"12")," . Integer in range ",(0,l.kt)("inlineCode",{parentName:"li"},"[1, 12]")," . Any value less than ",(0,l.kt)("inlineCode",{parentName:"li"},"1")," or greater than ",(0,l.kt)("inlineCode",{parentName:"li"},"12")," is silently converted to ",(0,l.kt)("inlineCode",{parentName:"li"},"12")," .")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned values")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"alphanumeric ",(0,l.kt)("inlineCode",{parentName:"li"},"String")," of encoded coordinate (modified version of the base32-encoding alphabet is used).")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT geohashEncode(-5.60302734375, 42.593994140625, 0) AS res;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500res\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 ezs42d000000 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"greatcircledistance"},"greatCircleDistance"),(0,l.kt)("p",null,"Calculates the distance between two points on the Earth\u2019s surface using ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Great-circle_distance"},"the great-circle formula")," ."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"greatCircleDistance(lon1Deg, lat1Deg, lon2Deg, lat2Deg)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"lon1Deg")," \u2014 Longitude of the first point in degrees. Range: ",(0,l.kt)("inlineCode",{parentName:"li"},"[-180\xb0, 180\xb0]")," ."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"lat1Deg")," \u2014 Latitude of the first point in degrees. Range: ",(0,l.kt)("inlineCode",{parentName:"li"},"[-90\xb0, 90\xb0]")," ."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"lon2Deg")," \u2014 Longitude of the second point in degrees. Range: ",(0,l.kt)("inlineCode",{parentName:"li"},"[-180\xb0, 180\xb0]")," ."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"lat2Deg")," \u2014 Latitude of the second point in degrees. Range: ",(0,l.kt)("inlineCode",{parentName:"li"},"[-90\xb0, 90\xb0]")," .\nPositive values correspond to North latitude and East longitude, and negative values correspond to South latitude and West longitude.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The distance between two points on the Earth\u2019s surface, in meters. Generates an exception when the input parameter values fall outside of the range.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT greatCircleDistance(55.755831, 37.617673, -55.755831, -37.617673);\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500greatCircleDistance(55.755831, 37.617673, -55.755831, -37.617673)\u2500\u2510\n\u2502 1.4132374194975413e+07                                            \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"pointinellipses"},"pointInEllipses"),(0,l.kt)("p",null,"Checks whether the point belongs to at least one of the ellipses.\nCoordinates are geometric in the Cartesian coordinate system."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"pointInEllipses(x, y, x\u2080, y\u2080, a\u2080, b\u2080,...,x\u2099, y\u2099, a\u2099, b\u2099)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"x, y")," \u2014 Coordinates of a point on the plane."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"x\u1d62, y\u1d62")," \u2014 Coordinates of the center of the ",(0,l.kt)("inlineCode",{parentName:"li"},"i")," -th ellipsis."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"a\u1d62, b\u1d62")," \u2014 Axes of the ",(0,l.kt)("inlineCode",{parentName:"li"},"i")," -th ellipsis in units of x, y coordinates.\nThe input parameters must be ",(0,l.kt)("inlineCode",{parentName:"li"},"2+4\u22c5n")," , where ",(0,l.kt)("inlineCode",{parentName:"li"},"n")," is the number of ellipses.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned values")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1")," if the point is inside at least one of the ellipses; ",(0,l.kt)("inlineCode",{parentName:"li"},"0")," if it is not.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT pointInEllipses(10., 10., 10., 9.1, 1., 0.9999)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500pointInEllipses(10., 10., 10., 9.1, 1., 0.9999)\u2500\u2510\n\u2502 1                                               \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"pointinpolygon"},"pointInPolygon"),(0,l.kt)("p",null,"Checks whether the point belongs to the polygon on the plane."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"pointInPolygon((x, y), [(a, b), (c, d) ...], ...)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"(x, y)")," \u2014 Coordinates of a point on the plane. Data type \u2014 Tuple \u2014 A tuple of two numbers."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[(a, b), (c, d) ...]")," \u2014 Polygon vertices. Data type \u2014 Array. Each vertex is represented by a pair of coordinates ",(0,l.kt)("inlineCode",{parentName:"li"},"(a, b)")," . Vertices should be specified in a clockwise or counterclockwise order. The minimum number of vertices is 3. The polygon must be constant."),(0,l.kt)("li",{parentName:"ul"},"The function also supports polygons with holes (cut out sections). In this case, add polygons that define the cut out sections using additional arguments of the function. The function does not support non-simply-connected polygons.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned values")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1")," if the point is inside the polygon, ",(0,l.kt)("inlineCode",{parentName:"li"},"0")," if it is not. If the point is on the polygon boundary, the function may return either 0 or 1.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT pointInPolygon((3., 3.), [(6, 0), (8, 4), (5, 8), (0, 2)]) AS res\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500res\u2500\u2510\n\u2502 1   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")))}d.isMDXComponent=!0}}]);