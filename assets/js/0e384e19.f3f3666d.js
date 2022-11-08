"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,g=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(g,s(s({ref:t},u),{},{components:n})):r.createElement(g,s({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={title:"Intro",sidebar_position:0},s="Nudge Design System",a={unversionedId:"intro",id:"intro",title:"Intro",description:"Nudge's design system to help us design with continuity and build with efficiency.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/nudge-design/docs/intro",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Intro",sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"Tokens",permalink:"/nudge-design/docs/tokens"}},c={},l=[{value:"UI",id:"ui",level:3},{value:"Tokens",id:"tokens",level:3},{value:"Icons",id:"icons",level:3},{value:"Docs",id:"docs",level:3}],u={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nudge-design-system"},"Nudge Design System"),(0,o.kt)("p",null,"Nudge's design system to help us design with continuity and build with efficiency."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"ui"},"UI"),(0,o.kt)("p",null,"nudge-design/ui is a public node package of all the components of the Nudge design system for web."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn install @nudge-coach/ui\n")),(0,o.kt)("h3",{id:"tokens"},"Tokens"),(0,o.kt)("p",null,"nudge-design/tokens is a node package which contains all the tokens. It creates a single source of truth and record of all design decisions while utilitizing ",(0,o.kt)("a",{parentName:"p",href:"https://amzn.github.io/style-dictionary/#/"},"Style Dictionary")," to export references to these tokens in formats for various platforms."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn install @nudge-coach/nudge-tokens\n")),(0,o.kt)("h3",{id:"icons"},"Icons"),(0,o.kt)("p",null,"nudge-design/icons is a node package containing all of our icons which uses svgr to convert the svgs into React components."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn install @nudge-coach/icons\n")),(0,o.kt)("h3",{id:"docs"},"Docs"),(0,o.kt)("p",null,"Documention for this system is written in markdown files and converted into a static website by ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io"},"docusaurus"),". The ",(0,o.kt)("a",{parentName:"p",href:"https://nudgeyourself.github.io/nudge-design/"},"documentation site")," which is currently hosted on Github Pages is automatically updated any time a commit to master is pushed that contains an update to the markdown files."))}d.isMDXComponent=!0}}]);