"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[91906],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),h=r,d=m["".concat(l,".").concat(h)]||m[h]||u[h]||a;return n?i.createElement(d,o(o({ref:t},p),{},{components:n})):i.createElement(d,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38326:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=n(87462),r=(n(67294),n(3905));const a={title:"Scripts & Routines",keywords:["scripts","openbb","routines","script","routine",".openbb","automation"],excerpt:"The Scripts & Routines explain how to use .openbb scripts in detail for every part of the terminal"},o=void 0,s={unversionedId:"guides/intros/scripts",id:"guides/intros/scripts",title:"Scripts & Routines",description:"The .openbb scripts offer the ability to automatically run a set of commands",source:"@site/content/terminal/guides/intros/scripts.md",sourceDirName:"guides/intros",slug:"/guides/intros/scripts",permalink:"/terminal/guides/intros/scripts",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/guides/intros/scripts.md",tags:[],version:"current",frontMatter:{title:"Scripts & Routines",keywords:["scripts","openbb","routines","script","routine",".openbb","automation"],excerpt:"The Scripts & Routines explain how to use .openbb scripts in detail for every part of the terminal"},sidebar:"tutorialSidebar",previous:{title:"Introduction to Reports",permalink:"/terminal/guides/intros/reports"},next:{title:"Stocks",permalink:"/terminal/guides/intros/stocks/"}},l={},c=[{value:"Explanation of scripts",id:"explanation-of-scripts",level:2},{value:"Executing a script",id:"executing-a-script",level:2},{value:"Custom arguments",id:"custom-arguments",level:3},{value:"Create your own script",id:"create-your-own-script",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".openbb")," scripts offer the ability to automatically run a set of commands\nin the form of a ",(0,r.kt)("strong",{parentName:"p"},"routine"),". Furthermore, the scripts can be adapted, and\ndocumented, at any moment giving the user full control over the type of analysis\nyou wish to do (and repeat). This can fundamental research, understanding market\nmovements, finding hidden gems and even doing advanced statistical/econometric\nresearch."),(0,r.kt)("p",null,"{{< toc >}}"),(0,r.kt)("h2",{id:"explanation-of-scripts"},"Explanation of scripts"),(0,r.kt)("p",null,"The script file below is titled ",(0,r.kt)("em",{parentName:"p"},"stocks_demo.openbb"),". This file follows the\nfollowing logic:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("b",null,"Comments"),": any text after a `#` is referred to as a comment. This is used to explain what is happening within the script and is not taking into account when running terminal commands."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("b",null,"Commands"),": any text **without** a `#` is being ran inside the OpenBB Terminal. E.g. on the second line it says `stocks` thus within the OpenBB Terminal the script will enter `stocks` and run this for you.")),(0,r.kt)("p",null,"These scripts have a 1-to-1 relationship with how you would normally use the\nterminal. To get a better understanding of how the terminal is used, please see"),(0,r.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/#structure-of-the-openbb-terminal",target:"_blank"},"Structure of the OpenBB Terminal"),".",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Go into the stocks context\nstocks\n\n# Load a company ticker, e.g. Amazon\nload AMZN\n\n# Show a simple plot of the ticker, adding in any basic indicator.\ncandle --ma 20,30\n\n# Switch over to the due diligence menu\ndd\n\n# Show the price targets of Amazon, both the graph as well as the table\npt\npt --raw\n\n# Show estimates of annual and quarterly earnings as well as quarterly revenue estimates\nest\n\n# Open the comparison analysis menu (ca)\n../ca\n\n# Pick stocks that are competitors to Amazon\nadd ebay,wmt,tgt,baba,jd\n\n# Determine the valuations of each company\nvaluation\n\n# Show correlations between each company\nhcorr\n\n# Figure out the sentiment perceived of each company\nsentiment\n\n# Return to home\n/\n")),(0,r.kt)("h2",{id:"executing-a-script"},"Executing a script"),(0,r.kt)("p",null,"By going to the main menu as depicted below (accessible with ",(0,r.kt)("inlineCode",{parentName:"p"},"home"),"), the"),(0,r.kt)("a",{href:"exe",target:"_blank"},"exe")," command can be used. With this command you can run any `.openbb` script. These scripts are located where the application is located inside the routines folder.",(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/174588513-5c52ea20-548a-4c2b-a4c1-6054e2d71786.png",alt:"Routine Exe OpenBB Terminal"})),(0,r.kt)("p",null,"Thus, using the earlier mentioned script, we can enter ",(0,r.kt)("inlineCode",{parentName:"p"},"exe stocks_demo.openbb"),"\nwhich automatically runs all commands within the script file. Thus, it will\nreturn a candle chart with moving averages, price targets from Analysts,\nvaluations of related companies, the correlation between these companies and the\nmarket sentiment. This results in the following:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/176903147-720eb2af-7e5d-40df-8ec6-7363cbc08430.png",alt:"Script Stocks Demo OpenBB"})),(0,r.kt)("h3",{id:"custom-arguments"},"Custom arguments"),(0,r.kt)("p",null,"Next to that, it is also possible to add in custom arguments to your script\nmaking the script more interactive and allow you to do the same analysis for\nmultiple companies. This is done in the following script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# This script requires you to use arguments. This can be done with the following:\n# exe example_with_inputs.openbb -i TSLA,AAPL,MSFT\n\n# Go to the stocks menu\nstocks\n\n# Load a ticker, given the argument used. E.g. -i TSLA\nload $ARGV[0]\n\n# Enter the Technical Analysis (ta) menu\nta\n\n# Show the fibonacci retracement levels\nfib\n\n# Enter the comparison analysis (ca) menu\n../ca\n\n# Set two extra tickers based on the arguments used. E.g. -i TSLA,AAPL,MSFT\nset $ARGV[1],$ARGV[2]\n\n# Plot the historical prices\nhistorical\n\n# Return to home\n/\n")),(0,r.kt)("p",null,"This script includes ",(0,r.kt)("inlineCode",{parentName:"p"},"$ARGV[0]"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"$ARGV[1]")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"$ARGV[2]"),". This means that the\nscript requires you to submit three arguments. In this case, they refer to"),(0,r.kt)("a",{href:"https://www.investopedia.com/ask/answers/12/what-is-a-stock-ticker.asp",target:"_blank"},"stock tickers"),". Therefore, like the script also says, you can include these arguments with `-i` followed by three tickers (e.g. `exe example_with_inputs.openbb -i TSLA,AAPL,MSFT`). This results in the following:",(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/176903205-3cb55bf5-8710-4ad6-8eef-f9a99294ea3b.png",alt:"Example with Inputs OpenBB Script"})),(0,r.kt)("p",null,"It is an incredibly simple script, but it gives an understanding what the\npossibilities are."),(0,r.kt)("h2",{id:"create-your-own-script"},"Create your own script"),(0,r.kt)("p",null,"Scripts and routines reside in the ",(0,r.kt)("inlineCode",{parentName:"p"},"routines")," folder and are automatically shown\nwhen you type ",(0,r.kt)("inlineCode",{parentName:"p"},"exe")," from the home screen (",(0,r.kt)("inlineCode",{parentName:"p"},"home"),"). To create your own, you can\nuse the ",(0,r.kt)("inlineCode",{parentName:"p"},"template.openbb")," file as a basis but you are free to duplicate one of\nthe demo files."),(0,r.kt)("p",null,"Within this template, some examples are given, and you are free to change the\ncontents and rename the file. As long as the file remains in the same folder,\nyou will be able to find your file automatically as shown below:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/176903253-00a5b0f9-a6e7-49c7-a1d8-49ae819e28e3.png",alt:"Show Copy of Template OpenBB Script"})))}u.isMDXComponent=!0}}]);