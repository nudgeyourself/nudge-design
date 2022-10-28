"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[596],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),b=a,m=d["".concat(c,".").concat(b)]||d[b]||u[b]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9779:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={id:"tabs",title:"Tabs",description:"Navigate pages of content.",slug:"/tabs"},i=void 0,s={unversionedId:"tutorial-basics/tabs",id:"tutorial-basics/tabs",title:"Tabs",description:"Navigate pages of content.",source:"@site/docs/tutorial-basics/tabs.mdx",sourceDirName:"tutorial-basics",slug:"/tabs",permalink:"/docs/tabs",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/tabs.mdx",tags:[],version:"current",frontMatter:{id:"tabs",title:"Tabs",description:"Navigate pages of content.",slug:"/tabs"},sidebar:"tutorialSidebar",previous:{title:"Button",permalink:"/docs/button"}},c={},l=[{value:"Overview",id:"overview",level:3},{value:"Props",id:"props",level:3}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:'language-jsx"'},'import { Tabs } from "nudge-coach/ui";\n')),(0,a.kt)("h3",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The tabs component is used to navigate pages of content."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"props"},"Props"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"tabs")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"Tab[]")," An array of tabs."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"export interface Tab {\n  id: string;\n  content: React.ReactNode;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"selected"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," Which tab is currently selected."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"tabSelected"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"(id) => {}")," Callback when a tab is clicked."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"expanded?"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," Expand the tabs to fill the container."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"margin?"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," Adds standard space around the tabs."))}u.isMDXComponent=!0}}]);