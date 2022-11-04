"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[651],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),b=r,m=u["".concat(s,".").concat(b)]||u[b]||p[b]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7584:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),o=n(1262);const i={id:"tabs",title:"Tabs",description:"Navigate pages of content.",slug:"/tabs"},l=void 0,s={unversionedId:"components/tabs",id:"components/tabs",title:"Tabs",description:"Navigate pages of content.",source:"@site/docs/components/tabs.mdx",sourceDirName:"components",slug:"/tabs",permalink:"/nudge-design/docs/tabs",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/tabs.mdx",tags:[],version:"current",frontMatter:{id:"tabs",title:"Tabs",description:"Navigate pages of content.",slug:"/tabs"},sidebar:"tutorialSidebar",previous:{title:"Header Action",permalink:"/nudge-design/docs/header-action"}},c={},d=[{value:"Overview",id:"overview",level:3},{value:"Props",id:"props",level:3},{value:"tabs",id:"tabs",level:3},{value:"selected",id:"selected",level:3},{value:"tabSelected",id:"tabselected",level:3},{value:"expanded",id:"expanded",level:3},{value:"margin",id:"margin",level:3}];p="Tabs";var p;const u={toc:d};function b(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{fallback:(0,r.kt)("div",null,"Loading..."),mdxType:"BrowserOnly"},(()=>{const e=n(3297).mQ;return(0,r.kt)("div",{style:{marginBottom:"var(--semantic-spacing-medium)"}},(0,r.kt)(e,{tabs:[{id:"0",content:"Tab 1"},{id:"1",content:"Tab 2"},{id:"2",content:"Tab 3"}],selected:"0",mdxType:"Tabs"}))})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Tabs } from "@nudge-coach/ui";\n')),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The tabs component is used to navigate pages of content."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"props"},"Props"),(0,r.kt)("h3",{id:"tabs"},"tabs"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Tab[]")," An array of tabs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"export interface Tab {\n  id: string;\n  content: React.ReactNode;\n}\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"selected"},"selected"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," which indicates which tab is currently selected."),(0,r.kt)(o.Z,{fallback:(0,r.kt)("div",null,"Loading..."),mdxType:"BrowserOnly"},(()=>{const e=n(3297).mQ;return(0,r.kt)("div",{style:{marginBottom:"var(--semantic-spacing-medium)"}},(0,r.kt)(e,{tabs:[{id:"0",content:"Tab 1"},{id:"1",content:"Tab 2"},{id:"2",content:"Tab 3"}],selected:"0",mdxType:"Tabs"}))})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Tabs\n  selected="0"\n  tabs={[\n    { id: "0", content: "Tab 1" },\n    { id: "1", content: "Tab 2" },\n    { id: "2", content: "Tab 3" },\n  ]}\n/>\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"tabselected"},"tabSelected"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"(id) => {}")," A callback when a tab is clicked."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"expanded"},"expanded"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," that expands the tabs to fill the container."),(0,r.kt)(o.Z,{fallback:(0,r.kt)("div",null,"Loading..."),mdxType:"BrowserOnly"},(()=>{const e=n(3297).mQ;return(0,r.kt)("div",{style:{marginBottom:"var(--semantic-spacing-medium)"}},(0,r.kt)(e,{tabs:[{id:"0",content:"Tab 1"},{id:"1",content:"Tab 2"},{id:"2",content:"Tab 3"}],selected:"0",expanded:!0,mdxType:"Tabs"}))})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Tabs\n  expanded\n  selected="0"\n  tabs={[\n    { id: "0", content: "Tab 1" },\n    { id: "1", content: "Tab 2" },\n    { id: "2", content: "Tab 3" },\n  ]}\n/>\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"margin"},"margin"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," that adds standard space around the tabs."),(0,r.kt)(o.Z,{fallback:(0,r.kt)("div",null,"Loading..."),mdxType:"BrowserOnly"},(()=>{const e=n(3297).mQ;return(0,r.kt)("div",{style:{marginBottom:"var(--semantic-spacing-medium)",backgroundColor:"var(--semantic-background-layer-1)",border:"1px solid rgba(0,0,0,0)"}},(0,r.kt)(e,{tabs:[{id:"0",content:"Tab 1"},{id:"1",content:"Tab 2"},{id:"2",content:"Tab 3"}],selected:"0",margin:!0,mdxType:"Tabs"}))})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Tabs\n  margin\n  selected="0"\n  tabs={[\n    { id: "0", content: "Tab 1" },\n    { id: "1", content: "Tab 2" },\n    { id: "2", content: "Tab 3" },\n  ]}\n/>\n')))}b.isMDXComponent=!0}}]);