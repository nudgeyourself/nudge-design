"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[812],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=p(n),m=l,k=s["".concat(u,".").concat(m)]||s[m]||c[m]||o;return n?r.createElement(k,a(a({ref:t},d),{},{components:n})):r.createElement(k,a({ref:t},d))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1078:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>u,toc:()=>d});var r=n(7462),l=(n(7294),n(3905)),o=n(1262);const a={id:"button",title:"Button",description:"Used for all actions in Nudge Coach.",slug:"/button"},i=void 0,u={unversionedId:"components/button",id:"components/button",title:"Button",description:"Used for all actions in Nudge Coach.",source:"@site/docs/components/button.mdx",sourceDirName:"components",slug:"/button",permalink:"/nudge-design/docs/button",draft:!1,tags:[],version:"current",frontMatter:{id:"button",title:"Button",description:"Used for all actions in Nudge Coach.",slug:"/button"},sidebar:"tutorialSidebar",previous:{title:"Button Group",permalink:"/nudge-design/docs/button-group"},next:{title:"Header Action",permalink:"/nudge-design/docs/header-action"}},p={},d=[{value:"Overview",id:"overview",level:3},{value:"Props",id:"props",level:2},{value:"children",id:"children",level:3},{value:"onClick",id:"onclick",level:3},{value:"primary",id:"primary",level:3},{value:"destructive",id:"destructive",level:3},{value:"small",id:"small",level:3},{value:"expanded",id:"expanded",level:3},{value:"implied",id:"implied",level:3}];c="LibComponent";var c;const s={toc:d};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(o.Z,{fallback:(0,l.kt)("div",null,"Loading..."),mdxType:"BrowserOnly"},(()=>{const e=n(3297).zx;return(0,l.kt)("div",{style:{marginBottom:"var(--semantic-spacing-medium)"}},(0,l.kt)(e,{primary:!0,mdxType:"LibComponent"})," ",(0,l.kt)(e,{mdxType:"LibComponent"}))})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Button } from "@nudge-coach/ui";\n')),(0,l.kt)("h3",{id:"overview"},"Overview"),(0,l.kt)("p",null,"The Button component should be used for all actions in Nudge Coach."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("h3",{id:"children"},"children"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"React.ReactNode")),(0,l.kt)("p",null,"The content displayed inside the button. Either text or icons."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"onclick"},"onClick"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"() => void")),(0,l.kt)("p",null,"Callback when the button is clicked."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"primary"},"primary"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Indicates when a button is the default choice or primary action within a given experience. In general there shouldn't be 2 primary buttons in a single view."),(0,l.kt)(o.Z,{fallback:(0,l.kt)("div",null,"Loading..."),mdxType:"BrowserOnly"},(()=>{const e=n(3297).zx;return(0,l.kt)("div",{style:{marginBottom:"var(--semantic-spacing-medium)"}},(0,l.kt)(e,{primary:!0,mdxType:"LibComponent"}))})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<Button primary>Label</Button>\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"destructive"},"destructive"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Indicates when an action is negative or has a destructive result."),(0,l.kt)(o.Z,{fallback:(0,l.kt)("div",null,"Loading..."),mdxType:"BrowserOnly"},(()=>{const e=n(3297).zx;return(0,l.kt)("div",{style:{marginBottom:"var(--semantic-spacing-medium)"}},(0,l.kt)(e,{destructive:!0,mdxType:"LibComponent"},"Destructive Button"))})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<Button destructive>Label</Button>\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"small"},"small"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Makes the button smaller for more constrained layouts."),(0,l.kt)(o.Z,{fallback:(0,l.kt)("div",null,"Loading..."),mdxType:"BrowserOnly"},(()=>{const e=n(3297).zx;return(0,l.kt)("div",{style:{marginBottom:"var(--semantic-spacing-medium)"}},(0,l.kt)(e,{small:!0,mdxType:"LibComponent"},"Small Button"))})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<Button small>Label</Button>\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"expanded"},"expanded"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Makes the button fill its container."),(0,l.kt)(o.Z,{fallback:(0,l.kt)("div",null,"Loading..."),mdxType:"BrowserOnly"},(()=>{const e=n(3297).zx;return(0,l.kt)("div",{style:{marginBottom:"var(--semantic-spacing-medium)"}},(0,l.kt)(e,{expanded:!0,mdxType:"LibComponent"},"Expanded Button"))})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<Button expanded>Label</Button>\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"implied"},"implied"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"A frameless button used only when a button can be implied."),(0,l.kt)(o.Z,{fallback:(0,l.kt)("div",null,"Loading..."),mdxType:"BrowserOnly"},(()=>{const e=n(3297).zx;return(0,l.kt)("div",{style:{marginBottom:"var(--semantic-spacing-medium)"}},(0,l.kt)(e,{implied:!0,mdxType:"LibComponent"},"Implied Button"))})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<Button implied>Label</Button>\n")))}m.isMDXComponent=!0}}]);