"use strict";(self.webpackChunktest_docusaurus=self.webpackChunktest_docusaurus||[]).push([[758],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5726:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:2},o="List attachments for a specific email",s={unversionedId:"api/files",id:"api/files",title:"List attachments for a specific email",description:"This endpoint is accessible only for paid plans.",source:"@site/docs/api/files.md",sourceDirName:"api",slug:"/api/files",permalink:"/docs/api/files",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"List emails for a specific address",permalink:"/docs/api/list"},next:{title:"Usage in Test Suites",permalink:"/docs/category/usage-in-test-suites"}},l={},p=[{value:"How to use",id:"how-to-use",level:2},{value:"Example",id:"example",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"list-attachments-for-a-specific-email"},"List attachments for a specific email"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This endpoint is accessible only for paid plans.")),(0,i.kt)("h2",{id:"how-to-use"},"How to use"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Method: ",(0,i.kt)("inlineCode",{parentName:"li"},"GET")),(0,i.kt)("li",{parentName:"ul"},"Path: ",(0,i.kt)("inlineCode",{parentName:"li"},"/attachments")),(0,i.kt)("li",{parentName:"ul"},"Query parameters:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key"),": the key (",(0,i.kt)("inlineCode",{parentName:"li"},"email/id"),") to list attachments for"))),(0,i.kt)("li",{parentName:"ul"},"Response:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"200"),": an array of attachments"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"500"),": an error occurred")))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," is the combination of the email address and the email id. It can be found in the main api endpoint result.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Each attachment can be downloaded by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"url")," property. A presigned URL is used to allow the download without authentication for the next 15 minutes.")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'\ncurl "https://api.testsendr.link/attachments?key=foo@testsendr.link/db08khkkv5a8a5fevq90b9tkhhmteqogsm21ea81"\n\n')),(0,i.kt)("p",null,"Response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "contentDisposition": "inline",\n    "contentType": "application/pdf",\n    "filename": "InvoiceSimple-PDF-Template.pdf",\n    "size": 62037,\n    "url": "https://prod-testsendr-main-emailstoragebucket03c5b3b9-1fc5ioga3iimc.s3.us-west-2.amazonaws.com/foo%40testsendr.link/db08khkkv5a8a5fevq90b9tkhhmteqogsm21ea81/0?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIARWJGBVJFX24VC25N%2F20230209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230209T014745Z&X-Amz-Expires=900&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLjSBad72x97DtnzqWPJbdKOqrGKi7vA39JjzfINm5PQIgLj%2Bm1TcqacJjWtQAUW9cKQUuG1VhjiSNUSG4p5br1WQq0AMIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxMTY1ODA3ODg4MTEiDF0aloDmL1iO7TF57SqkA%2FdNl%2BsIIunqICaxz5aDAGvqLewWuKDQncxjKSl0mZdKgyX%2FIBTp0dCvXrEi4TKh0YeISyktCTjhKZ2hB0AVXsmN%2FuybIdK26w1Zyd4bpKbZVYqkTSE%2F3wtYVhwJIYjNLOd8ETJGzuGaDErGIicDfgmAIQsaRpYb0IKoi33%2BTxny0P8wZM8%2FdXAUav3LZ3BGaQLKHAhwSU0Ae1dIzHFPQ2x%2FHuN7ZxuVtu9xRIzAK2Ft8c1bF5mUkWwVhwSzbhwfE9AhQr%2B0b8C247pylYFbyesGMQbeq11mMr%2BBYSzFsSy%2Bu%2FN%2Bw1qWs1KpuM5RGnzux0q1PivzErARW%2FShsA7i769QFo3fYkMIiDyM9qwSnRJ5NO5mMSPGtOIbe3KB%2BZdbXoWWDg5ptcbIPXP1tFn7evtLfY93wEqetGS2AIOxYfvjuXgabfpgFTzZ2nMlFcBsB3cbK%2FZqD4onMJ%2FZGQx7pL3%2BhppanOPZEKO2%2B4Me0ChVfdtTOnAHfGhGChpvGqU9nCbYTuFIgYWK4zV0hQLhVboHJJGQqD%2Bjifo9bgAaRadcbjhQwjC4n5GfBjqeAQR19PUPv339Tpga1PKU8iUXCrmxU1v9E5IoQPF%2BXyDEEYYslORArz9ZYuRRnCUIshcCd49qB7zDgiUBPqsWAuxLOEiQaEkQ%2Fsoh8kzbS%2B0DXsBSz8eexHRt56ibTLlZSmQhWPnTUMPbI6Ht31m67vgC6CAy3b%2B2XSvojIFv0HJ1qDnS6O4M7LxtVVLatn%2FnabeoTBCr4RsBzuzTi%2Ffk&X-Amz-Signature=ee1d9103e9f755090d2e3bc70f19835d80311b0203979e5950367ba2a3eb58ac&X-Amz-SignedHeaders=host&x-id=GetObject"\n  }\n]\n')))}m.isMDXComponent=!0}}]);