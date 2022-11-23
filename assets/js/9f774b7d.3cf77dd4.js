"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[80675],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41446:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:2},o="Structure of Terminal",l={unversionedId:"quickstart/structure",id:"quickstart/structure",title:"Structure of Terminal",description:"The OpenBB Terminal is based off the Command Line Interface (CLI)",source:"@site/content/terminal/quickstart/structure.md",sourceDirName:"quickstart",slug:"/quickstart/structure",permalink:"/terminal/quickstart/structure",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/quickstart/structure.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/terminal/quickstart/installation"},next:{title:"FAQ",permalink:"/terminal/quickstart/faq"}},s={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"structure-of-terminal"},"Structure of Terminal"),(0,a.kt)("p",null,"The OpenBB Terminal is based off the ",(0,a.kt)("a",{href:"https://en.wikipedia.org/wiki/Command-line_interface",target:"_blank"},"Command Line Interface (CLI)"),'\nwhich is installed by default on every computer. By opening the application you have installed via "Accessing the OpenBB Terminal",\nyou are greeted with the following interface:'),(0,a.kt)("img",{src:"https://user-images.githubusercontent.com/85772166/194683764-ae1c6c0a-8d50-4533-b930-ec4b601017b8.png",width:"800"}),(0,a.kt)("p",null,"The OpenBB Terminal is centered around keyboard input. To navigate and perform analysis you will have to type in the name of the command followed by an ",(0,a.kt)("inlineCode",{parentName:"p"},"ENTER")," (\u23ce). If you wish to see information about the OpenBB Terminal you can do so by typing ",(0,a.kt)("inlineCode",{parentName:"p"},"about")," and then press ",(0,a.kt)("inlineCode",{parentName:"p"},"ENTER")," (\u23ce). As you are typing, you will notice that you receive suggestions, by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"DOWN")," (\u2304) arrow and pressing ",(0,a.kt)("inlineCode",{parentName:"p"},"ENTER")," (\u23ce) you can select the command and execute it."),(0,a.kt)("p",null,"Throughout the entire terminal, the same set of colors are used which all share the same representation. This is structured as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("b",null,(0,a.kt)("span",{style:{color:"#00AAFF"}},"Light Blue")),": represents commands."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("b",null,(0,a.kt)("span",{style:{color:"#005CA9"}},"Dark Blue")),": represents menus, also recognizable by the `>` in front."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("b",null,(0,a.kt)("span",{style:{color:"#EF7D00"}},"Orange")),": represents titles and headers."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("b",null,(0,a.kt)("span",{style:{color:"#FCED00"}},"Yellow")),": represents descriptions of a parameter or variable."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("b",null,"White"),": represents text, usually in combination with a description that is in Yellow.")))}p.isMDXComponent=!0}}]);