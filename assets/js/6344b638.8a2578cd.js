"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[41498],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(r),m=n,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return r?a.createElement(f,o(o({ref:t},p),{},{components:r})):a.createElement(f,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},95295:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var a=r(87462),n=(r(67294),r(3905)),l=r(65099),o=r(85162);const i={title:"anchor_data",description:"OpenBB SDK Function"},s="anchor_data",u={unversionedId:"reference/crypto/defi/anchor_data",id:"reference/crypto/defi/anchor_data",title:"anchor_data",description:"OpenBB SDK Function",source:"@site/content/sdk/reference/crypto/defi/anchor_data.md",sourceDirName:"reference/crypto/defi",slug:"/reference/crypto/defi/anchor_data",permalink:"/sdk/reference/crypto/defi/anchor_data",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/crypto/defi/anchor_data.md",tags:[],version:"current",frontMatter:{title:"anchor_data",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"defi",permalink:"/sdk/reference/crypto/defi/"},next:{title:"aterra",permalink:"/sdk/reference/crypto/defi/aterra"}},p={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}],c={toc:d};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"anchor_data"},"anchor_data"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"model",label:"Model",default:!0,mdxType:"TabItem"},(0,n.kt)("p",null,"Returns anchor protocol earnings data of a certain terra address"),(0,n.kt)("p",null,"Source Code: [",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/cryptosaurio_model.py#L17"},"link"),"]"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'openbb.crypto.defi.anchor_data(address: str = "")\n')),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"address"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Terra address. Valid terra addresses start with 'terra'"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"True")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"returns"},"Returns"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Tuple","[pd.DataFrame, pd.DataFrame, str]"),(0,n.kt)("td",{parentName:"tr",align:null},"- pd.DataFrame: Earnings over time in UST",(0,n.kt)("br",null),"- pd.DataFrame: History of transactions",(0,n.kt)("br",null),"- str:              Overall statistics")))),(0,n.kt)("hr",null)),(0,n.kt)(o.Z,{value:"view",label:"Chart",mdxType:"TabItem"},(0,n.kt)("p",null,"Plots anchor protocol earnings data of a certain terra address"),(0,n.kt)("p",null,"Source Code: [",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/cryptosaurio_view.py#L25"},"link"),"]"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'openbb.crypto.defi.anchor_data_chart(address: str = "", export: str = "", show_transactions: bool = False, external_axes: Optional[List[matplotlib.axes._axes.Axes]] = None)\n')),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"asset"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Terra asset {ust,luna,sdt}"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"address"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Terra address. Valid terra addresses start with 'terra'"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"show_transactions"),(0,n.kt)("td",{parentName:"tr",align:null},"bool"),(0,n.kt)("td",{parentName:"tr",align:null},"Flag to show history of transactions in Anchor protocol for address. Default False"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"export"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Export dataframe data to csv,json,xlsx file"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"external_axes"),(0,n.kt)("td",{parentName:"tr",align:null},"Optional[List","[plt.Axes]","]"),(0,n.kt)("td",{parentName:"tr",align:null},"External axes (1 axis is expected in the list), by default None"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"True")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,"This function does not return anything"),(0,n.kt)("hr",null))))}m.isMDXComponent=!0},85162:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(67294),n=r(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,o),hidden:r},t)}},65099:(e,t,r)=>{r.d(t,{Z:()=>b});var a=r(87462),n=r(67294),l=r(10412),o=r(86010),i=r(72389),s=r(67392),u=r(7094),p=r(12466);const d="tabItem_hGfb";var c=r(16550);function m(){const e=function(){const e=l.Z.canUseDOM?navigator.userAgent:"";return e.indexOf("Windows")>-1?"Windows":e.indexOf("Mac")>-1?"Mac":e.indexOf("X11")>-1?"UNIX":e.indexOf("Linux")>-1?"Linux":"Other"}();return"Windows"===e?"windows":"Mac"===e?"mac":"Linux"===e||"UNIX"===e?"python":"windows"}function f(e){var t;const{lazy:r,block:l,defaultValue:i,values:f,groupId:b,className:h}=e,k=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=f??k.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),y=(0,s.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===i?i:i??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==N&&!g.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:x}=(0,u.U)(),{pathname:O,search:w}=(0,c.TH)(),T=function(e,t){const r=e.substring(1).split("&");for(let a=0;a<r.length;a++){let e=r[a].split("=");if(decodeURIComponent(e[0])==t)return decodeURIComponent(e[1])}return null}(w,"tab"),E=m(),[D,_]=(0,n.useState)(O.startsWith("/terminal/quickstart/installation")?T&&["mac","windows","python","docker"].includes(T)?T:E:N),B=[],{blockElementScrollPositionUntilNextRender:j}=(0,p.o5)();if(null!=b){const e=v[b];null!=e&&e!==D&&g.some((t=>t.value===e))&&_(e)}const P=e=>{const t=e.currentTarget,r=B.indexOf(t),a=g[r].value;a!==D&&(j(t),_(a),null!=b&&x(b,String(a)))},C=e=>{var t;let r=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const t=B.indexOf(e.currentTarget)+1;r=B[t]??B[0];break}case"ArrowLeft":{const t=B.indexOf(e.currentTarget)-1;r=B[t]??B[B.length-1];break}}null==(t=r)||t.focus()};return n.createElement("div",null,n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("_group-tab list-none -ml-7 my-6 overflow-auto")},g.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:D===t?0:-1,"aria-selected":D===t,key:t,ref:e=>B.push(e),onKeyDown:C,onClick:P},l,{className:(0,o.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",d,null==l?void 0:l.className,{"border-b-2 pointer-events-none":D===t,"border-b-2 text-[#669dcb] border-[#669dcb]":D===t&&O.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":D===t&&O.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":D!==t&&O.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":D!==t&&O.startsWith("/terminal")})}),r??t)})),n.createElement("li",{className:"w-full border-b border-grey-400 pointer-events-none py-1 mb-[12px]"})),r?(0,n.cloneElement)(k.filter((e=>e.props.value===D))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==D})))))}function b(e){const t=(0,i.Z)();return n.createElement(f,(0,a.Z)({key:String(t)},e))}}}]);