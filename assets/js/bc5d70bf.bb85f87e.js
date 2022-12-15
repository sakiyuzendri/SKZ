"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[490],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),c=a,b=m["".concat(u,".").concat(c)]||m[c]||d[c]||l;return n?r.createElement(b,o(o({ref:t},s),{},{components:n})):r.createElement(b,o({ref:t},s))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88146:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var r=n(87462),a=(n(67294),n(3905)),l=n(65099),o=n(85162);const i={title:"gdp",description:"OpenBB SDK Function"},u="gdp",p={unversionedId:"reference/economy/gdp",id:"reference/economy/gdp",title:"gdp",description:"OpenBB SDK Function",source:"@site/content/sdk/reference/economy/gdp.md",sourceDirName:"reference/economy",slug:"/reference/economy/gdp",permalink:"/sdk/reference/economy/gdp",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/economy/gdp.md",tags:[],version:"current",frontMatter:{title:"gdp",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"futures",permalink:"/sdk/reference/economy/futures"},next:{title:"gdpc",permalink:"/sdk/reference/economy/gdpc"}},s={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}],m={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"gdp"},"gdp"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"model",label:"Model",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"Get annual or quarterly Real GDP for US"),(0,a.kt)("p",null,"Source Code: [",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/alphavantage_model.py#L44"},"link"),"]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'openbb.economy.gdp(interval: str = "q", start_year: int = 2010)\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"interval"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},'Interval for GDP, by default "a" for annual, by default "q"'),(0,a.kt)("td",{parentName:"tr",align:null},"q"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"start_year"),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"Start year for plot, by default 2010"),(0,a.kt)("td",{parentName:"tr",align:null},"2010"),(0,a.kt)("td",{parentName:"tr",align:null},"True")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,a.kt)("td",{parentName:"tr",align:null},"Dataframe of GDP")))),(0,a.kt)("hr",null)),(0,a.kt)(o.Z,{value:"view",label:"Chart",mdxType:"TabItem"},(0,a.kt)("p",null,"Display US GDP from AlphaVantage"),(0,a.kt)("p",null,"Source Code: [",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/alphavantage_view.py#L88"},"link"),"]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'openbb.economy.gdp_chart(interval: str = "q", start_year: int = 2010, raw: bool = False, export: str = "", external_axes: Optional[List[matplotlib.axes._axes.Axes]] = None)\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"interval"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},'Interval for GDP.  Either "a" or "q", by default "q"'),(0,a.kt)("td",{parentName:"tr",align:null},"q"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"start_year"),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"Start year for plot, by default 2010"),(0,a.kt)("td",{parentName:"tr",align:null},"2010"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"raw"),(0,a.kt)("td",{parentName:"tr",align:null},"bool"),(0,a.kt)("td",{parentName:"tr",align:null},"Flag to show raw data, by default False"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"export"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},'Format to export data, by default ""'),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"external_axes"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional[List","[plt.Axes]","]"),(0,a.kt)("td",{parentName:"tr",align:null},"External axes (1 axis is expected in the list), by default None"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"True")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,"This function does not return anything"),(0,a.kt)("hr",null))))}c.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},65099:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(87462),a=n(67294),l=n(10412),o=n(86010),i=n(72389),u=n(67392),p=n(7094),s=n(12466);const d="tabItem_hGfb";var m=n(16550);function c(){const e=function(){const e=l.Z.canUseDOM?navigator.userAgent:"";return e.indexOf("Windows")>-1?"Windows":e.indexOf("Mac")>-1?"Mac":e.indexOf("X11")>-1?"UNIX":e.indexOf("Linux")>-1?"Linux":"Other"}();return"Windows"===e?"windows":"Mac"===e?"mac":"Linux"===e||"UNIX"===e?"python":"windows"}function b(e){var t;const{lazy:n,block:l,defaultValue:i,values:b,groupId:f,className:k}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=b??g.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),h=(0,u.l)(y,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===i?i:i??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==N&&!y.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:x}=(0,p.U)(),{pathname:O,search:w}=(0,m.TH)(),T=function(e,t){const n=e.substring(1).split("&");for(let r=0;r<n.length;r++){let e=n[r].split("=");if(decodeURIComponent(e[0])==t)return decodeURIComponent(e[1])}return null}(w,"tab"),D=c(),[E,P]=(0,a.useState)(O.startsWith("/terminal/quickstart/installation")?T&&["mac","windows","python","docker"].includes(T)?T:D:N),B=[],{blockElementScrollPositionUntilNextRender:j}=(0,s.o5)();if(null!=f){const e=v[f];null!=e&&e!==E&&y.some((t=>t.value===e))&&P(e)}const C=e=>{const t=e.currentTarget,n=B.indexOf(t),r=y[n].value;r!==E&&(j(t),P(r),null!=f&&x(f,String(r)))},S=e=>{var t;let n=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const t=B.indexOf(e.currentTarget)+1;n=B[t]??B[0];break}case"ArrowLeft":{const t=B.indexOf(e.currentTarget)-1;n=B[t]??B[B.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",null,a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("_group-tab list-none -ml-7 my-6 overflow-auto")},y.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>B.push(e),onKeyDown:S,onClick:C},l,{className:(0,o.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",d,null==l?void 0:l.className,{"border-b-2 pointer-events-none":E===t,"border-b-2 text-[#669dcb] border-[#669dcb]":E===t&&O.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":E===t&&O.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":E!==t&&O.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":E!==t&&O.startsWith("/terminal")})}),n??t)})),a.createElement("li",{className:"w-full border-b border-grey-400 pointer-events-none py-1 mb-[12px]"})),n?(0,a.cloneElement)(g.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function f(e){const t=(0,i.Z)();return a.createElement(b,(0,r.Z)({key:String(t)},e))}}}]);