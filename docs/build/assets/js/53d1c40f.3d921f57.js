"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[663],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),g=a,b=d["".concat(s,".").concat(g)]||d[g]||u[g]||o;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3813:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={id:"badge",title:"Badge",description:"Highlight notable updates.",slug:"/badge"},i=void 0,l={unversionedId:"tutorial-basics/badge",id:"tutorial-basics/badge",title:"Badge",description:"Highlight notable updates.",source:"@site/docs/tutorial-basics/badge.mdx",sourceDirName:"tutorial-basics",slug:"/badge",permalink:"/nudge-design/docs/badge",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/badge.mdx",tags:[],version:"current",frontMatter:{id:"badge",title:"Badge",description:"Highlight notable updates.",slug:"/badge"},sidebar:"tutorialSidebar",previous:{title:"Components",permalink:"/nudge-design/docs/category/components"},next:{title:"Button Group",permalink:"/nudge-design/docs/button-group"}},s={},c=[{value:"Overview",id:"overview",level:3},{value:"Props",id:"props",level:3}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Badge } from "nudge-coach/ui";\n')),(0,a.kt)("h3",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Highlights notable updates."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"props"},"Props"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"children"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"React.ReactNode")," Inject text or icons to be featured in the Badge."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"warning?"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," Indicates this badge should serve as a warning to the user"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"word?"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," Updates styles to better fit words."))}u.isMDXComponent=!0}}]);