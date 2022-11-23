"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[474],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50880:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={title:"scr",description:"OpenBB Terminal Function"},l="scr",o={unversionedId:"reference/stocks/options/screen/scr",id:"reference/stocks/options/screen/scr",title:"scr",description:"OpenBB Terminal Function",source:"@site/content/terminal/reference/stocks/options/screen/scr.md",sourceDirName:"reference/stocks/options/screen",slug:"/reference/stocks/options/screen/scr",permalink:"/terminal/reference/stocks/options/screen/scr",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/options/screen/scr.md",tags:[],version:"current",frontMatter:{title:"scr",description:"OpenBB Terminal Function"},sidebar:"tutorialSidebar",previous:{title:"show",permalink:"/terminal/reference/stocks/options/pricing/show"},next:{title:"set",permalink:"/terminal/reference/stocks/options/screen/set"}},s={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"scr"},"scr"),(0,i.kt)("p",null,"Screener filter output from ",(0,i.kt)("a",{parentName:"p",href:"https://ops.syncretism.io/index.html"},"https://ops.syncretism.io/index.html"),". Where: CS: Contract Symbol; S: Symbol, T: Option Type; Str: Strike; Exp v: Expiration; IV: Implied Volatility; LP: Last Price; B: Bid; A: Ask; V: Volume; OI: Open Interest; Y: Yield; MY: Monthly Yield; SMP: Regular Market Price; SMDL: Regular Market Day Low; SMDH: Regular Market Day High; LU: Last Trade Date; LC: Last Crawl; ITM: In The Money; PC: Price Change; PB: Price-to-book."),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"usage: scr\n           [-p {TSLA_Calls_90Days.ini,Highest_OI.ini,template.ini,TSLA_Poots.ini,SPY_ATM_Poots.ini,Long_FAANGM.ini,high_IV.ini,3DTE_Degenerate.ini,SPY_ATM_Calls.ini,Highest_IV.ini,Highest_Volume.ini}]\n           [-l LIMIT]\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Optional"),(0,i.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"preset"),(0,i.kt)("td",{parentName:"tr",align:null},"Filter presets"),(0,i.kt)("td",{parentName:"tr",align:null},"high_IV"),(0,i.kt)("td",{parentName:"tr",align:null},"True"),(0,i.kt)("td",{parentName:"tr",align:null},"TSLA_Calls_90Days.ini, Highest_OI.ini, template.ini, TSLA_Poots.ini, SPY_ATM_Poots.ini, Long_FAANGM.ini, high_IV.ini, 3DTE_Degenerate.ini, SPY_ATM_Calls.ini, Highest_IV.ini, Highest_Volume.ini")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"limit"),(0,i.kt)("td",{parentName:"tr",align:null},"Limit of random entries to display. Default shows all"),(0,i.kt)("td",{parentName:"tr",align:null},"10"),(0,i.kt)("td",{parentName:"tr",align:null},"True"),(0,i.kt)("td",{parentName:"tr",align:null},"None")))),(0,i.kt)("hr",null))}u.isMDXComponent=!0}}]);