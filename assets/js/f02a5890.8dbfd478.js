"use strict";(self.webpackChunktest_docusaurus=self.webpackChunktest_docusaurus||[]).push([[611],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=p(n),y=s,m=u["".concat(c,".").concat(y)]||u[y]||d[y]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,i=new Array(a);i[0]=y;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:s,i[1]=o;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},1889:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(7462),s=(n(7294),n(3905));const a={sidebar_position:2},i="Usage in Cypress",o={unversionedId:"usage-in-cypress",id:"usage-in-cypress",title:"Usage in Cypress",description:"TestSendr can be easily used in your Cypress tests. Here is a example script:",source:"@site/docs/usage-in-cypress.md",sourceDirName:".",slug:"/usage-in-cypress",permalink:"/docs/usage-in-cypress",draft:!1,editUrl:"https://github.com/testsendr/web/tree/main/docs/usage-in-cypress.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Quick Start",permalink:"/docs/quick-start"}},c={},p=[],l={toc:p};function u(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"usage-in-cypress"},"Usage in Cypress"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"TestSendr")," can be easily used in your Cypress tests. Here is a example script:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"describe('TestSendr', () => {\n  it('should send an email', () => {\n\n    // do the registration step on your app, it is supposed to send an email with a link to confirm the email address\n\n    // wait 30s\n    cy.wait(30000)\n\n    const parser = new DOMParser()\n    let linkToConfirm = ''\n    cy.request(\n      `https://api.testsendr.link/?email=${email}`\n    ).then(({ body }) => {\n      cy.wrap(\n        parser.parseFromString(JSON.parse(body)[0].html, 'text/html').getElementsByTagName('a')[0]\n          .href\n      ).as('link')\n    })\n    cy.get('@link').then(link => {\n      linkToConfirm = link\n    })\n\n    cy.visit(linkToConfirm)\n\n    cy.get('div)\n      .first()\n      .should('have.text', 'Account confirmed')\n  })\n})\n")))}u.isMDXComponent=!0}}]);