"use strict";(self.webpackChunktest_docusaurus=self.webpackChunktest_docusaurus||[]).push([[239],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4181:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},o="Quick Start",l={unversionedId:"quick-start",id:"quick-start",title:"Quick Start",description:"Let's discover TestSendr in less than 2 minutes.",source:"@site/docs/quick-start.md",sourceDirName:".",slug:"/quick-start",permalink:"/docs/quick-start",draft:!1,editUrl:"https://github.com/testsendr/web/tree/main/docs/quick-start.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"API Reference",permalink:"/docs/category/api-reference"}},s={},c=[{value:"Send email",id:"send-email",level:2},{value:"Call the API",id:"call-the-api",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quick-start"},"Quick Start"),(0,r.kt)("p",null,"Let's discover ",(0,r.kt)("strong",{parentName:"p"},"TestSendr in less than 2 minutes"),"."),(0,r.kt)("h2",{id:"send-email"},"Send email"),(0,r.kt)("p",null,"Send an email to any address ending by ",(0,r.kt)("strong",{parentName:"p"},"@testsendr.link")," (for example ",(0,r.kt)("inlineCode",{parentName:"p"},"foo@testsendr.link"),")"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you need to test that an application is correctly sending an email, you can provide such email (in a test account for example) and trigger the action that will send an email (maybe register?).")),(0,r.kt)("h2",{id:"call-the-api"},"Call the API"),(0,r.kt)("p",null,"Then, using your favorite language or automation tool, send a ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," HTTP request to the following url: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://api.testsendr.link/?email=foo@testsendr.link")),(0,r.kt)("p",null,"You will receive a JSON object with the last emails sent to this specific address:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "key": "foo@testsendr.link/db08khkkv5a8a5fevq90b9tkhhmteqogsm21ea81",\n    "date": "2023-01-22T02:50:27.000Z",\n    "from": "sender@example.com",\n    "subject": "Confirm your email",\n    "text": "Hello\\n\\nYou can confirm your email on our portal by providing the following code:\\n\\n123456\\n\\nThanks!\\n\\nPS: get a look at the attached invoice.\ufffc",\n    "html": "<html><head><meta http-equiv=\\"content-type\\" content=\\"text/html; charset=us-ascii\\"></head><body style=\\"overflow-wrap: break-word; -webkit-nbsp-mode: space; line-break: after-white-space;\\"><meta http-equiv=\\"content-type\\" content=\\"text/html; charset=us-ascii\\"><div style=\\"overflow-wrap: break-word; -webkit-nbsp-mode: space; line-break: after-white-space;\\">Hello<div><br></div><div>You can confirm your email on our portal by providing the following code:</div><div><br></div><div><b>123456</b></div><div><b><br></b></div><div>Thanks!</div><div><br></div><div>PS: get a look at the attached invoice.</div></div></body></html><br/>\\n<html><head><meta http-equiv=\\"content-type\\" content=\\"text/html; charset=us-ascii\\"></head><body style=\\"overflow-wrap: break-word; -webkit-nbsp-mode: space; line-break: after-white-space;\\"><div style=\\"overflow-wrap: break-word; -webkit-nbsp-mode: space; line-break: after-white-space;\\"><div></div></div></body></html>",\n    "attachments": [\n      {\n        "contentDisposition": "inline",\n        "contentType": "application/pdf",\n        "filename": "InvoiceSimple-PDF-Template.pdf",\n        "size": 62037\n      }\n    ]\n  }\n]\n')),(0,r.kt)("p",null,"All emails are deleted after 30mn."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"When you call the API via a script, take note that email delivery can take a few seconds. We recommend to wait at least ",(0,r.kt)("strong",{parentName:"p"},"15 seconds")," before calling the API, via a ",(0,r.kt)("inlineCode",{parentName:"p"},"sleep")," command for example.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You must understand that the email sent to any address ending by ",(0,r.kt)("strong",{parentName:"p"},"@testsendr.link")," is basically public content available by a public API. Please do not use this service for sensible content.")))}p.isMDXComponent=!0}}]);