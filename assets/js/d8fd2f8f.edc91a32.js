"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[282],{7326:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>k,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var a=n(7462),i=(n(7294),n(3905)),l=n(1262);const o={id:"header-action",title:"Header Action",description:"A tab or clickable action for headers.",slug:"/header-action"},s=void 0,c={unversionedId:"components/header-action",id:"components/header-action",title:"Header Action",description:"A tab or clickable action for headers.",source:"@site/docs/components/header-action.mdx",sourceDirName:"components",slug:"/header-action",permalink:"/nudge-design/docs/header-action",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/header-action.mdx",tags:[],version:"current",frontMatter:{id:"header-action",title:"Header Action",description:"A tab or clickable action for headers.",slug:"/header-action"},sidebar:"tutorialSidebar",previous:{title:"Button",permalink:"/nudge-design/docs/button"},next:{title:"Tabs",permalink:"/nudge-design/docs/tabs"}},r={},d=[{value:"Overview",id:"overview",level:3},{value:"Props",id:"props",level:2},{value:"children",id:"children",level:3},{value:"onClick",id:"onclick",level:3},{value:"selectable",id:"selectable",level:3},{value:"selected",id:"selected",level:3},{value:"circleIcon",id:"circleicon",level:3},{value:"badgeCount",id:"badgecount",level:3},{value:"warning",id:"warning",level:3},{value:"success",id:"success",level:3}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},u=(p("HeaderAction"),p("X"),p("Users"),p("Unlock"),p("Message"),{toc:d});function k(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(l.Z,{fallback:(0,i.kt)("div",null,"Loading..."),mdxType:"BrowserOnly"},(()=>{const e=n(3297).yo,t=n(4041).Q,a=n(4041).Sl,l=n(4041).X;return(0,i.kt)("div",{className:"sizing-fix",style:{marginBottom:"var(--semantic-spacing-medium)"}},(0,i.kt)(e,{mdxType:"HeaderAction"},(0,i.kt)(l,{mdxType:"X"})),(0,i.kt)(e,{circleIcon:!0,selectable:!0,selected:!0,mdxType:"HeaderAction"},(0,i.kt)(t,{mdxType:"Users"})),(0,i.kt)(e,{circleIcon:!0,success:!0,mdxType:"HeaderAction"},(0,i.kt)(a,{mdxType:"Unlock"})))})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Button } from "@nudge-coach/ui";\n')),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The HeaderAction component is used to represent both actions and tabs in headers."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"props"},"Props"),(0,i.kt)("h3",{id:"children"},"children"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string[]")),(0,i.kt)("p",null,"The content displayed inside the button. Currently only icons imported from ",(0,i.kt)("inlineCode",{parentName:"p"},"@nudge-coach/icons")," are supported."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"onclick"},"onClick"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"() => void")),(0,i.kt)("p",null,"Callback when the button is clicked."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"selectable"},"selectable"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," that makes the Header Action function as a tab. Selectable HeaderActions have a different default icon color. A HeaderAction must be selectable for the corresponding selected boolean to work."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"selected"},"selected"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," that shows the HeaderAction as a selected tab."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Don't forget the selectable boolean or this won't work.")),(0,i.kt)(l.Z,{fallback:(0,i.kt)("div",null,"Loading..."),mdxType:"BrowserOnly"},(()=>{const e=n(3297).yo,t=n(4041).v0;return(0,i.kt)("div",{className:"sizing-fix",style:{marginBottom:"var(--semantic-spacing-medium)"}},(0,i.kt)(e,{selectable:!0,selected:!0,mdxType:"HeaderAction"},(0,i.kt)(t,{mdxType:"Message"})))})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<HeaderAction selectable selected>\n  <Users />\n</HeaderAction>\n")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"circleicon"},"circleIcon"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," that displays the icon in a circle. This style is used for the primary navigation."),(0,i.kt)(l.Z,{fallback:(0,i.kt)("div",null,"Loading..."),mdxType:"BrowserOnly"},(()=>{const e=n(3297).yo,t=n(4041).v0;return(0,i.kt)("div",{className:"sizing-fix",style:{marginBottom:"var(--semantic-spacing-medium)"}},(0,i.kt)(e,{circleIcon:!0,selectable:!0,mdxType:"HeaderAction"},(0,i.kt)(t,{mdxType:"Message"})))})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<HeaderAction circleIcon selectable selected>\n  <Users />\n</HeaderAction>\n")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"badgecount"},"badgeCount"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," that displays a badge on the action. This should be used to notify the user of items that deserve their attention. Examples include unread messages."),(0,i.kt)(l.Z,{fallback:(0,i.kt)("div",null,"Loading..."),mdxType:"BrowserOnly"},(()=>{const e=n(3297).yo,t=n(4041).v0;return(0,i.kt)("div",{className:"sizing-fix",style:{marginBottom:"var(--semantic-spacing-medium)"}},(0,i.kt)(e,{circleIcon:!0,selectable:!0,badgeCount:3,mdxType:"HeaderAction"},(0,i.kt)(t,{mdxType:"Message"})))})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<HeaderAction circleIcon selectable badgeCount={3}>\n  <Users />\n</HeaderAction>\n")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"warning"},"warning"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," that places a warning badge on the HeaderAction indicating there is something that needs the user's immediate attention."),(0,i.kt)(l.Z,{fallback:(0,i.kt)("div",null,"Loading..."),mdxType:"BrowserOnly"},(()=>{const e=n(3297).yo,t=n(4041).Sl;return(0,i.kt)("div",{className:"sizing-fix",style:{marginBottom:"var(--semantic-spacing-medium)"}},(0,i.kt)(e,{warning:!0,mdxType:"HeaderAction"},(0,i.kt)(t,{mdxType:"Unlock"})))})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<HeaderAction warning><Unlock /></HeaderAction>\n")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"success"},"success"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," that places a success badge on the HeaderAction indicating that an action was successful."),(0,i.kt)(l.Z,{fallback:(0,i.kt)("div",null,"Loading..."),mdxType:"BrowserOnly"},(()=>{const e=n(3297).yo,t=n(4041).Sl;return(0,i.kt)("div",{className:"sizing-fix",style:{marginBottom:"var(--semantic-spacing-medium)"}},(0,i.kt)(e,{success:!0,mdxType:"HeaderAction"},(0,i.kt)(t,{mdxType:"Unlock"})))})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<HeaderAction success><Unlock /></HeaderAction>\n")),(0,i.kt)("p",null,"disabled?: boolean;\npadding?: boolean;\nhoverLabel?: string;"))}k.isMDXComponent=!0}}]);