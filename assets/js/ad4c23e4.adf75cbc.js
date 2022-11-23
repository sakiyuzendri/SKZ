"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[71209],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,_=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(_,l(l({ref:t},c),{},{components:r})):n.createElement(_,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7495:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"ownership",description:"OpenBB Terminal Function"},l="ownership",s={unversionedId:"reference/stocks/screener/ownership",id:"reference/stocks/screener/ownership",title:"ownership",description:"OpenBB Terminal Function",source:"@site/content/terminal/reference/stocks/screener/ownership.md",sourceDirName:"reference/stocks/screener",slug:"/reference/stocks/screener/ownership",permalink:"/terminal/reference/stocks/screener/ownership",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/screener/ownership.md",tags:[],version:"current",frontMatter:{title:"ownership",description:"OpenBB Terminal Function"},sidebar:"tutorialSidebar",previous:{title:"overview",permalink:"/terminal/reference/stocks/screener/overview"},next:{title:"performance",permalink:"/terminal/reference/stocks/screener/performance"}},i={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ownership"},"ownership"),(0,a.kt)("p",null,"Prints ownership data of the companies that meet the pre-set filtering."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"usage: ownership [-p Desired preset.] [-l LIMIT] [-r] [-s SORT]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"preset"),(0,a.kt)("td",{parentName:"tr",align:null},"Filter presets"),(0,a.kt)("td",{parentName:"tr",align:null},"top_gainers"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"cheap_dividend, top_performers_all, top_performers_healthcare, potential_reversals, simplistic_momentum_scanner_under_7dol, stocks_strong_support_levels, weak_support_and_top_performers, unusual_volume, bull_runs_over_10pct, modified_dreman, template, cheap_bottom_dividend, break_out_stocks, heavy_inst_ins, golden_cross, growth_stocks, value_stocks, sexy_year, 5pct_above_low, buffett_like, death_cross, golden_cross_penny, oversold_under_3dol, short_squeeze_scan, cheap_oversold, continued_momentum_scan, top_performers_tech, analyst_strong_buy, oversold_under_5dol, modified_neff, oversold, rosenwald_gtfo, news_scanner, recent_growth_and_support, rosenwald, undervalue, high_vol_and_low_debt, under_15dol_stocks, channel_up_and_low_debt_and_sma_50and200, top_gainers, top_losers, new_high, new_low, most_volatile, most_active, overbought, downgrades, upgrades, earnings_before, earnings_after, recent_insider_buying, recent_insider_selling, major_news, horizontal_sr, tl_resistance, tl_support, wedge_up, wedge_down, wedge, triangle_ascending, triangle_descending, channel_up, channel_down, channel, double_top, double_bottom, multiple_top, multiple_bottom, head_shoulders, head_shoulders_inverse")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"limit"),(0,a.kt)("td",{parentName:"tr",align:null},"Limit of stocks to print"),(0,a.kt)("td",{parentName:"tr",align:null},"10"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"reverse"),(0,a.kt)("td",{parentName:"tr",align:null},"Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed."),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sort"),(0,a.kt)("td",{parentName:"tr",align:null},"Sort elements of the table."),(0,a.kt)("td",{parentName:"tr",align:null},"Ticker"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"ticker, marketcap, outstanding, float, insiderown, insidertrans, instown, insttrans, floatshort, shortratio, avgvolume, price, change, volume")))),(0,a.kt)("hr",null))}u.isMDXComponent=!0}}]);