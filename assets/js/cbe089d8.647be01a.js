"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[91526],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78633:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={sidebar_position:5,title:"Scripts / Routines"},o=void 0,s={unversionedId:"quickstart/scripts",id:"quickstart/scripts",title:"Scripts / Routines",description:"Explanation of Scripts",source:"@site/content/terminal/quickstart/scripts.md",sourceDirName:"quickstart",slug:"/quickstart/scripts",permalink:"/terminal/quickstart/scripts",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/quickstart/scripts.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Scripts / Routines"},sidebar:"tutorialSidebar",previous:{title:"Commands",permalink:"/terminal/quickstart/commands"},next:{title:"Importing and Exporting Data",permalink:"/terminal/quickstart/data"}},l={},p=[{value:"Explanation of Scripts",id:"explanation-of-scripts",level:3},{value:"Importing and Exporting Data in the OpenBB Terminal",id:"importing-and-exporting-data-in-the-openbb-terminal",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"explanation-of-scripts"},"Explanation of Scripts"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},".openbb")," scripts offer the ability to automatically run a set of commands in the form of a ",(0,i.kt)("strong",{parentName:"p"},"routine"),". Furthermore,\nthe scripts can be adapted, and documented, at any moment giving the user full control over the type of analysis you wish\nto do (and repeat). This can fundamental research, understanding market movements, finding hidden gems and even\ndoing advanced statistical/econometric research."),(0,i.kt)("b",null,(0,i.kt)("span",{style:{color:"white"}},"For a thorough guide on how to setup these files, please see the ",(0,i.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/scripts/",target:"_blank"},"Scripts & Routines guide"),".")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"importing-and-exporting-data-in-the-openbb-terminal"},"Importing and Exporting Data in the OpenBB Terminal"),(0,i.kt)("img",{width:"1231",alt:"Screen Shot 2022-10-13 at 6 45 01 PM",src:"https://user-images.githubusercontent.com/85772166/195742985-19f0e420-d8f7-4fea-a145-a0243b8f2ddc.png"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"OpenBBUserData")," folder's default location is the home of the system user account. The location of this folder can be set by the user from the ",(0,i.kt)("inlineCode",{parentName:"p"},"/settings")," menu. This folder is where exported files are saved, it is also where files being imported to the Terminal functions are kept. These include all things user-created:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Screener presets"),(0,i.kt)("li",{parentName:"ul"},"Portfolio files"),(0,i.kt)("li",{parentName:"ul"},"Exported files"),(0,i.kt)("li",{parentName:"ul"},"Files to be imported by various functions"),(0,i.kt)("li",{parentName:"ul"},"Styles and themes"),(0,i.kt)("li",{parentName:"ul"},"Preferred data sources"),(0,i.kt)("li",{parentName:"ul"},"Anonymized usage logs")),(0,i.kt)("img",{width:"1117",alt:"The settings menu",src:"https://user-images.githubusercontent.com/85772166/195736718-a1b821da-5977-437a-bd18-b44add2a29a2.png"}))}u.isMDXComponent=!0}}]);