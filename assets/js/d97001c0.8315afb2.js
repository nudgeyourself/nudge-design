"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[304],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,g=d["".concat(i,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(g,u(u({ref:t},l),{},{components:n})):r.createElement(g,u({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,u=new Array(a);u[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,u[1]=p;for(var c=2;c<a;c++)u[c]=n[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6086:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>s,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={id:"button-group",title:"Button Group",description:"Layout a group of buttons.",slug:"/button-group"},u=void 0,p={unversionedId:"components/button-group",id:"components/button-group",title:"Button Group",description:"Layout a group of buttons.",source:"@site/docs/components/button-group.mdx",sourceDirName:"components",slug:"/button-group",permalink:"/nudge-design/docs/button-group",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/button-group.mdx",tags:[],version:"current",frontMatter:{id:"button-group",title:"Button Group",description:"Layout a group of buttons.",slug:"/button-group"},sidebar:"tutorialSidebar",previous:{title:"Badge",permalink:"/nudge-design/docs/badge"},next:{title:"Button",permalink:"/nudge-design/docs/button"}},i={},c=[{value:"Overview",id:"overview",level:3},{value:"Props",id:"props",level:3}],l={toc:c};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Button, ButtonGroup } from "nudge-coach/ui";\n')),(0,o.kt)("h3",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Collects a group of buttons and creates standardized spacing between each."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"props"},"Props"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"children"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"React.ReactNode")," Inject button components to be grouped."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"row?"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")," Display the group of buttons inline."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"margin?"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")," Add standardized spacing around the ButtonGroup."))}s.isMDXComponent=!0}}]);