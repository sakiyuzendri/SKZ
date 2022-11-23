"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[89284],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=o,h=c["".concat(s,".").concat(u)]||c[u]||d[u]||i;return n?a.createElement(h,r(r({ref:t},m),{},{components:n})):a.createElement(h,r({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),o=n(86010);const i="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,r),hidden:n},t)}},65099:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(87462),o=n(67294),i=n(86010),r=n(72389),l=n(67392),s=n(7094),p=n(12466);const m="tabItem_hGfb";var d=n(16550);function c(e){var t;const{lazy:n,block:r,defaultValue:c,values:u,groupId:h,className:k}=e,g=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=u??g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,l.l)(b,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===c?c:c??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==N&&!b.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,s.U)(),[v,O]=(0,o.useState)(N),T=[],{blockElementScrollPositionUntilNextRender:B}=(0,p.o5)();if(null!=h){const e=y[h];null!=e&&e!==v&&b.some((t=>t.value===e))&&O(e)}const I=e=>{const t=e.currentTarget,n=T.indexOf(t),a=b[n].value;a!==v&&(B(t),O(a),null!=h&&w(h,String(a)))},D=e=>{var t;let n=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()},{pathname:C}=(0,d.TH)();return o.createElement("div",null,o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("_group-tab list-none lg:-ml-7 my-6")},b.map((e=>{let{value:t,label:n,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>T.push(e),onKeyDown:D,onClick:I},r,{className:(0,i.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase text-sm border-b",m,null==r?void 0:r.className,{"border-b-2 pointer-events-none":v===t,"cursor-pointer":v!==t,"border-b-2 text-[#669dcb] border-[#669dcb]":v===t&&C.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":v===t&&C.startsWith("/sdk"),"border-grey-600 text-grey-600 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":v!==t&&C.startsWith("/sdk"),"border-grey-600 text-grey-600 hover:text-[#abd2f1] hover:border-[#abd2f1]":v!==t&&C.startsWith("/terminal")})}),n??t)})),o.createElement("li",{className:"w-full border-b border-grey-600 pointer-events-none py-1 mb-[9.5px]"})),n?(0,o.cloneElement)(g.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function u(e){const t=(0,r.Z)();return o.createElement(c,(0,a.Z)({key:String(t)},e))}},13193:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(87462),o=(n(67294),n(3905)),i=n(65099),r=n(85162);const l={sidebar_position:1,title:"Installation"},s=void 0,p={unversionedId:"quickstart/installation",id:"quickstart/installation",title:"Installation",description:"The OpenBB Terminal can be directly installed on your computer via our installation program. Within this section, you are guided through the installation process and how to launch the program. If you struggle with the installation process, please don\u2019t hesitate to reach us on Discord or visit our contact page.",source:"@site/content/terminal/quickstart/installation.md",sourceDirName:"quickstart",slug:"/quickstart/installation",permalink:"/terminal/quickstart/installation",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/quickstart/installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Installation"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/terminal/"},next:{title:"Structure of Terminal",permalink:"/terminal/quickstart/structure"}},m={},d=[],c={toc:d};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The OpenBB Terminal can be directly installed on your computer via our installation program. Within this section, you are guided through the installation process and how to launch the program. If you struggle with the installation process, please don\u2019t hesitate to reach us on ",(0,o.kt)("a",{parentName:"p",href:"https://openbb.co/discord"},"Discord")," or visit our ",(0,o.kt)("a",{parentName:"p",href:"https://openbb.co/contact"},"contact page"),"."),(0,o.kt)("p",null,"OpenBB Terminal is available in all major platforms. With MacOS/Windows you can easily install with the installer (instructions below). It is also available to install on Linux with Docker or from source."),(0,o.kt)("admonition",{title:"Installation Instructions",type:"info"},(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},"Install on Windows",(0,o.kt)("div",{class:"gdoc-page"}),(0,o.kt)("p",null,"The process starts off by downloading the installer, see below for how to download the most recent release:"),(0,o.kt)("ol",null,(0,o.kt)("li",null,"Go to the ",(0,o.kt)("a",{href:"https://www.openbb.co/products/terminal#get-started",target:"_blank"},"OpenBB website"),"."),(0,o.kt)("li",null,"Click on the ",(0,o.kt)("code",null,"Download")," button in the Windows Installer section.")),(0,o.kt)("p",null,"When the file is downloaded, use the following steps to run the OpenBB Terminal:"),(0,o.kt)("div",{class:"gdoc-columns"},(0,o.kt)("div",{class:"gdoc-columns__content gdoc-markdown--nested"},(0,o.kt)("p",null,(0,o.kt)("strong",null,"Step 1: Double-click the ",(0,o.kt)("code",null,".exe")," file that got downloaded to your ",(0,o.kt)("code",null,"Downloads")," folder")),(0,o.kt)("p",null,"You will most likely receive the error below stating \u201cWindows protected your PC\u201d. This is because the installer is still in beta phase, and the team has not yet requested verification from Windows."),(0,o.kt)("p",{align:"center"},(0,o.kt)("a",{target:"_blank",href:"https://user-images.githubusercontent.com/46355364/169502271-69ad8075-165f-4b1a-8ab8-254d643a5dae.png"},(0,o.kt)("img",{width:"500",alt:"windows_protected_your_pc",src:"https://user-images.githubusercontent.com/46355364/169502271-69ad8075-165f-4b1a-8ab8-254d643a5dae.png"})))),(0,o.kt)("div",{class:"gdoc-columns__content gdoc-markdown--nested"},(0,o.kt)("p",null,(0,o.kt)("strong",null,"Step 2: Click on ",(0,o.kt)("code",null,"More info")," and select ",(0,o.kt)("code",null,"Run anyway")," to start the installation process")),(0,o.kt)("p",null,"Proceed by following the steps. Do note that if you wish to install the application to \u201cProgram Files\u201d that you will have to run the resulting application as Administrator."),(0,o.kt)("p",{align:"center"},(0,o.kt)("a",{target:"_blank",href:"https://user-images.githubusercontent.com/46355364/169502143-ba88de53-7757-48f2-9ec4-748d4917044b.png"},(0,o.kt)("img",{width:"500",alt:"run_anyway",src:"https://user-images.githubusercontent.com/46355364/169502143-ba88de53-7757-48f2-9ec4-748d4917044b.png"})))),(0,o.kt)("div",{class:"gdoc-columns__content gdoc-markdown--nested"},(0,o.kt)("p",null,(0,o.kt)("strong",null,"Step 3: Double-click on the application that appeared on your Desktop, you are now able to run the OpenBB Terminal")),(0,o.kt)("p",null,"The first time this takes a bit longer to load, this can take up to a few minutes."),(0,o.kt)("p",{align:"center"},(0,o.kt)("a",{target:"_blank",href:"https://user-images.githubusercontent.com/46355364/169502187-f4e42333-a947-464b-9320-a8f63c7ce089.png"},(0,o.kt)("img",{width:"500",alt:"run_the_terminal",src:"https://user-images.githubusercontent.com/46355364/169502187-f4e42333-a947-464b-9320-a8f63c7ce089.png"})))))),(0,o.kt)(r.Z,{value:"macOS",label:"MacOS",mdxType:"TabItem"},"Install on macOS \ud83c\udf4e",(0,o.kt)("div",{class:"gdoc-page"}),(0,o.kt)("p",null,"The process starts off by downloading the installer, see below for how to download the most recent release:"),(0,o.kt)("ol",null,(0,o.kt)("li",null,"Go to the ",(0,o.kt)("a",{href:"https://www.openbb.co/products/terminal#get-started",target:"_blank"},"OpenBB website"),"."),(0,o.kt)("li",null,"Click on the ",(0,o.kt)("code",null,"Download")," button in the macOS Installer section.")),(0,o.kt)("p",null,"When the DMG file is downloaded, use the following steps to run the OpenBB Terminal:"),(0,o.kt)("div",{class:"gdoc-columns"},(0,o.kt)("div",{class:"gdoc-columns__content gdoc-markdown--nested"},(0,o.kt)("p",null,(0,o.kt)("strong",null,"Step 1: Open the downloaded ",(0,o.kt)("code",null,"OpenBB Terminal.dmg")," and copy ",(0,o.kt)("code",null,"OpenBB Terminal")," folder into your ",(0,o.kt)("code",null,"Applications"))),(0,o.kt)("p",null,"Open the ",(0,o.kt)("code",null,"OpenBB Terminal.dmg")," file that got saved to your \u201cDownloads\u201d folder and drag the \u201cOpenBB Terminal\u201d folder into \u201cApplications\u201d folder. A link to the ",(0,o.kt)("code",null,"Applications")," folder is presented on the screen. Note that this should take some time as it is extracting the files from the .dmg file."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{width:"100%",alt:"image",src:"https://user-images.githubusercontent.com/11668535/173027899-9b25ae4f-1eef-462c-9dc9-86086e9cf197.png"}))),(0,o.kt)("div",{class:"gdoc-columns__content gdoc-markdown--nested"},(0,o.kt)("p",null,(0,o.kt)("strong",null,"Step 2: Open the ",(0,o.kt)("code",null,"OpenBB Terminal")," app in the folder that you have just copied to your ",(0,o.kt)("code",null,"Applications"),".")),(0,o.kt)("p",null,"During first launch if you get a message saying that the application can\u2019t be launched, do the following: Right-Click the app and select ",(0,o.kt)("code",null,"Open"),". You will see a message saying that macOS was not able to check whether the application contains malicious software. Click ",(0,o.kt)("code",null,"Open")," to proceed."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{width:"100%",alt:"image",src:"https://user-images.githubusercontent.com/11668535/173027798-b4d25a20-d932-4ed9-a8ce-f911c4ee4342.png"}))))),(0,o.kt)(r.Z,{value:"docker",label:"Docker",mdxType:"TabItem"},"Install with Docker Here are the steps to get OpenBBTerminal using the Docker containers that we provide:",(0,o.kt)("p",{parentName:"admonition"},"Installing Docker and Docker Compose Pulling and running OpenBBTerminal Docker\nContainer Configuring your X-server to show plots Each of this steps need to be\nfollowed to have a working version of OpenBBTerminal."),(0,o.kt)("p",{parentName:"admonition"},"We will detail these steps in the rest of this document."),(0,o.kt)("h3",{parentName:"admonition",id:"1-installing-docker-and-docker-compose"},"1. Installing Docker and Docker Compose"),(0,o.kt)("p",{parentName:"admonition"},"INSTALL DOCKER"),(0,o.kt)("p",{parentName:"admonition"},"Installing Docker Desktop is the easiest way for most people:"),(0,o.kt)("p",{parentName:"admonition"},"It has a Graphical User Interface and comes with Docke Compose in it."),(0,o.kt)("p",{parentName:"admonition"},"You can find Docker Desktop installation file for your OS here:"),(0,o.kt)("p",{parentName:"admonition"},"Download Docker Desktop"),(0,o.kt)("p",{parentName:"admonition"},"START DOCKER"),(0,o.kt)("p",{parentName:"admonition"},"Once you have Docker installed and running, you can use the following command to\ncheck the state:"),(0,o.kt)("p",{parentName:"admonition"},"docker info It should output a text like this one:"),(0,o.kt)("p",{parentName:"admonition"},"Client: Context: default Debug Mode: false"),(0,o.kt)("p",{parentName:"admonition"},"Server: Containers: 14 Running: 2 Paused: 1 Stopped: 10 ... If you see a message\nlike the following, it most likely means you need to start Docker."),(0,o.kt)("p",{parentName:"admonition"},"Open the docker desktop app in this case."),(0,o.kt)("p",{parentName:"admonition"},"Server: ERROR: Cannot connect to the Docker daemon at\nunix:///var/run/docker.sock. Is the docker daemon running?"),(0,o.kt)("h3",{parentName:"admonition",id:"2-pulling-and-running-openbbterminal-docker-container"},"2. Pulling and running OpenBBTerminal Docker Container"),(0,o.kt)("p",{parentName:"admonition"},"DOCKER COMPOSE"),(0,o.kt)("p",{parentName:"admonition"},"Here are the commands to use Docker Compose to pull and run the OpenBBTerminal\nDocker Container:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o docker-compose.yaml https://raw.githubusercontent.com/OpenBB-finance/OpenBBTerminal/main/docker/docker-compose.yaml\ndocker compose run poetry\n")),(0,o.kt)("p",{parentName:"admonition"},"The command line with curl is downloading this file : docker-compose.yaml."),(0,o.kt)("p",{parentName:"admonition"},"The docker-compose.yaml file is a configuration file telling Docker Compose:"),(0,o.kt)("p",{parentName:"admonition"},"where to find OpenBBTerminal Docker Container how to run this container. The\nsecond command runs Docker Compose on the service poetry defined in this\ndocker-compose.yaml file."),(0,o.kt)("p",{parentName:"admonition"},"This second command must be run in the same folder in which docker-compose.yaml\nfile is."),(0,o.kt)("p",{parentName:"admonition"},"DOCKER"),(0,o.kt)("p",{parentName:"admonition"},"If you don't have Docker Compose you can also use Docker directly to run the\nOpenBBTerminal Docker Container."),(0,o.kt)("p",{parentName:"admonition"},"Here is the commands to run:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull ghcr.io/openbb-finance/openbbterminal-poetry:X.Y.Z\n\ndocker run -v ~/.openbb_terminal/:/home/python/.openbb_terminal -v ~/OpenBBUserData:/home/python/OpenBBUserData -it --rm ghcr.io/openbb-finance/openbbterminal-poetry:X.Y.Z\n")),(0,o.kt)("p",{parentName:"admonition"},"Be sure to replace X.Y.Z with the version you want to pull and run."),(0,o.kt)("p",{parentName:"admonition"},"Note for windows:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"Ignore this message if you are using Powershell or a more evolved interpreters.\nIf you are using the builtin Windows interpreter.\nReplace `~` by `%USERPROFILE%` in the command above.\n")),(0,o.kt)("h3",{parentName:"admonition",id:"3-configuring-your-x-server-to-show-plots"},"3. Configuring your X-server to show plots"),(0,o.kt)("p",{parentName:"admonition"},"In order to display plots in the docker container, we need to configure the\nXServer on the host machine. Without this configuration the interactive charts\nwill not be displayed."),(0,o.kt)("p",{parentName:"admonition"},"On Windows Download and install : VcXsrv"),(0,o.kt)("p",{parentName:"admonition"},'When running the program is important to check "Disable access control"'),(0,o.kt)("p",{parentName:"admonition"},"Run Docker Compose like this:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o docker-compose.yaml https://raw.githubusercontent.com/OpenBB-finance/OpenBBTerminal/main/docker/docker-compose.yaml\ndocker compose run poetry\n")),(0,o.kt)("p",{parentName:"admonition"},"Or run Docker directly:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -v ~/.openbb_terminal:/home/python/.openbb_terminal -v ~/OpenBBUserData:/home/python/OpenBBUserData -it --rm --env DISPLAY=host.docker.internal:0.0 ghcr.io/openbb-finance/openbbterminal-poetry:X.Y.Z\n")),(0,o.kt)("p",{parentName:"admonition"},"X-Server on macOS Users familiar with Docker and X-Server can set the DISPLAY\nvariable in the file setenv described above. If you use this approach remember\nto add :0 at the end of your inet address. E.g. DISPLAY=192.168.1.155:0."),(0,o.kt)("p",{parentName:"admonition"},"For help setting up the X-Server continue reading:"),(0,o.kt)("p",{parentName:"admonition"},"Setting up X Quartz/X11 On macOS the X11 client of choice is XQuartz. On Windows\nit's Xming. XQuartz will be used as an example further on."),(0,o.kt)("p",{parentName:"admonition"},"Install X Quartz from ",(0,o.kt)("a",{parentName:"p",href:"https://www.xquartz.org/"},"https://www.xquartz.org/")," With X Quartz open: go to\nPreferences -> Security and make sure both options are enabled."),(0,o.kt)("img",{width:"60%",alt:"image",src:"https://user-images.githubusercontent.com/18151143/132548605-235d774b-9aa6-4a45-afcf-58fb775d376a.png"}),"Adding the display for Docker From the command prompt or terminal, run the following to add your local configuration to the list of allowed access control:",(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'IP=$(ifconfig | grep inet | grep -v -e "127.0.0.1" | awk \'$1=="inet" {print $2}\')\nxhost + $IP\n')),(0,o.kt)("p",{parentName:"admonition"},"Now we can run the docker container, adding the display to the environment:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -v ~/.openbb_terminal/:/home/python/.openbb_terminal -v ~/OpenBBUserData:/home/python/OpenBBUserData -it --rm --env-file=path/to/setenv --env DISPLAY=$IP:0 ghcr.io/openbb-finance/openbbterminal-poetry:X.Y.Z\n")),(0,o.kt)("p",{parentName:"admonition"},"This container will be able to display all the same plots as the terminal\ninterface."),(0,o.kt)("p",{parentName:"admonition"},"X-Server on Linux Desktop X-Server is default in Linux distribution. There is no\nneed to install any clients."),(0,o.kt)("p",{parentName:"admonition"},"Local docker container We can use IPC socket to connect Desktop."),(0,o.kt)("p",{parentName:"admonition"},"Add this setting to your .env file."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"OPENBB_BACKEND=Qt5Agg\n")),(0,o.kt)("p",{parentName:"admonition"},"And run the following commands."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"xhost +local:\ndocker run -it --rm --name openbb --env-file=./.env -e DISPLAY=$DISPLAY -v /tmp/.X11-unix:/tmp/.X11-unix ghcr.io/openbb-finance/openbbterminal-poetry:X.Y.Z\nxhost -local:\n")),(0,o.kt)("p",{parentName:"admonition"},"If you're using remote docker host, you can connect with ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh -X <FQDN/IP>"),"."),(0,o.kt)("p",{parentName:"admonition"},"Then run the previous docker command.")),(0,o.kt)(r.Z,{value:"Source",label:"Source",mdxType:"TabItem"},"This installation type supports both Windows and Unix systems (Linux + MacOS).",(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"NOTE for Windows users:")," Some ",(0,o.kt)("em",{parentName:"p"},"not all")," Windows users would prefer to use an environment\nsimilar to what Linux and macOS users use. In this case it is easier to use Windows Subsystem\nfor Linux (WSL). WSL emulates a Linux machine inside your Windows system. If this is the case -\njump to the ",(0,o.kt)("a",{href:"#installing-wsl-only-for-windows-users"},"Installing WSL (Only for Windows users)"),"\nsection before proceeding."),(0,o.kt)("h3",{parentName:"admonition",id:"installing-the-terminal"},"Installing the terminal"),(0,o.kt)("p",{parentName:"admonition"},"These steps are common in all operating systems (Windows with or without WSL, MacOS or Linux)."),(0,o.kt)("p",{parentName:"admonition"},"This project supports Python 3.8 and 3.9. By default, the newly created virtual environment will use Python 3.9.13"),(0,o.kt)("p",{parentName:"admonition"},"Our current recommendation is to use this project with Anaconda's Python distribution - either full\n",(0,o.kt)("a",{parentName:"p",href:"https://www.anaconda.com/products/distribution"},(0,o.kt)("strong",{parentName:"a"},"Anaconda3 Latest"))," or\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.conda.io/en/latest/miniconda.html"},(0,o.kt)("strong",{parentName:"a"},"Miniconda3 Latest")),' (recommended).\nSeveral features in this project utilize Machine Learning. Machine Learning Python dependencies are optional. For MacOS systems, the "Miniconda3 MacOSX 64-bit" version that works on both Intel and M1\nmacs is recommended.'),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"NOTE:")," We recommend using ",(0,o.kt)("inlineCode",{parentName:"p"},"conda")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"poetry")," because it just works. You can use other python\ndistributions and use raw ",(0,o.kt)("inlineCode",{parentName:"p"},"pip")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"poetry")," but you will very likely bump into installation\nissues."),(0,o.kt)("h4",{parentName:"admonition",id:"1-install-miniconda"},"1. ",(0,o.kt)("a",{parentName:"h4",href:"https://docs.conda.io/en/latest/miniconda.html"},"Install Miniconda")),(0,o.kt)("p",{parentName:"admonition"},"Miniconda is a python environment and package manager. It is required if you want to\nhave the dependencies working straight away."),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Follow the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.conda.io/en/latest/miniconda.html#latest-miniconda-installer-links"},"link to the page with the latest installers for all platforms")," or click direct links to installer packages based on your operating system:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you are using macOS click ",(0,o.kt)("a",{parentName:"p",href:"https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-x86_64.sh"},"Miniconda for MacOS"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you are using WSL or Linux click ",(0,o.kt)("a",{parentName:"p",href:"https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh"},"Miniconda for Linux"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you are using a Raspberry PI click ",(0,o.kt)("a",{parentName:"p",href:"https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh"},"Miniconda for Raspberry PI"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you are using Windows click ",(0,o.kt)("a",{parentName:"p",href:"https://repo.anaconda.com/miniconda/Miniconda3-latest-Windows-x86_64.exe"},"Miniconda for Windows"),"."),(0,o.kt)("p",{parentName:"li"},"   ",(0,o.kt)("strong",{parentName:"p"},"ONLY REQUIRED ON WINDOWS IF NOT USING WSL"),", Install/update Microsoft C++ Build Tools from here: ",(0,o.kt)("a",{parentName:"p",href:"https://visualstudio.microsoft.com/visual-cpp-build-tools/"},"https://visualstudio.microsoft.com/visual-cpp-build-tools/")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"NOTE for macOS users:")," The link above gets you the Intel version of miniconda meaning if you're on an\nApple Silicon powered machine you will be using the terminal through Apple's rosetta2 layer. We recommend\nsticking to this distribution for better compatibility until the dependency developers fully catch up with\nApple's transition to Apple Silicon.")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"After following the steps, confirm that you have it by opening a terminal and running: ",(0,o.kt)("inlineCode",{parentName:"p"},"conda -V"),". The output should be something along the lines of: ",(0,o.kt)("inlineCode",{parentName:"p"},"conda 22.9.0")))),(0,o.kt)("h4",{parentName:"admonition",id:"2-install-cmake"},"2. Install CMake"),(0,o.kt)("p",{parentName:"admonition"},"CMake is required by several python modules."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"On Linux or Raspberry Pi:")),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt install -y gcc cmake\n")),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"On macOS:")),(0,o.kt)("p",{parentName:"admonition"},"Check if you have homebrew installed by running ",(0,o.kt)("inlineCode",{parentName:"p"},"brew --version")),(0,o.kt)("p",{parentName:"admonition"},"If you don't have homebrew installed run:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\nbrew install cmake\n')),(0,o.kt)("p",{parentName:"admonition"},"If you have homebrew installed run:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"brew install cmake\n")),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"On Windows:")),(0,o.kt)("p",{parentName:"admonition"},"If you have followed the instructions in step 1 of this guide CMake was installed as a\npart of you Microsoft C++ Build Tools"),(0,o.kt)("h4",{parentName:"admonition",id:"3-install-git"},"3. Install git"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"conda install -c anaconda git\n")),(0,o.kt)("h4",{parentName:"admonition",id:"4-clone-the-project"},"4. Clone the Project"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Via HTTPS: ",(0,o.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/OpenBB-finance/OpenBBTerminal.git")),(0,o.kt)("li",{parentName:"ul"},"via SSH: ",(0,o.kt)("inlineCode",{parentName:"li"},"git clone git@github.com:OpenBB-finance/OpenBBTerminal.git"))),(0,o.kt)("h4",{parentName:"admonition",id:"5-navigate-into-the-projects-folder"},"5. Navigate into the project's folder"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd OpenBBTerminal/\n")),(0,o.kt)("h4",{parentName:"admonition",id:"6-create-environment"},"6. Create Environment"),(0,o.kt)("p",{parentName:"admonition"},"You can name the environment whatever you want. Although you could use names such as:\n",(0,o.kt)("inlineCode",{parentName:"p"},"welikethestock"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"thisistheway")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"diamondhands"),", we recommend something simple and\nintuitive like ",(0,o.kt)("inlineCode",{parentName:"p"},"obb"),". This is because this name will be used from now onwards."),(0,o.kt)("p",{parentName:"admonition"},"Please note, the following setup has been confirmed to work for all OS (including M1)\nwith the standard miniconda distribution. If you are using a different distribution,\nyou will need to install it manually before proceeding."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"conda env create -n obb --file build/conda/conda-3-9-env.yaml\n")),(0,o.kt)("p",{parentName:"admonition"},"Or, to include machine learning type:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"conda env create -n obb --file build/conda/conda-3-9-env-full.yaml\n")),(0,o.kt)("p",{parentName:"admonition"},"Note: Using python 3.10+ can lead to undesirable functionality for certain commands."),(0,o.kt)("h4",{parentName:"admonition",id:"7-activate-the-virtual-environment"},"7. Activate the virtual environment"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"conda activate obb\n")),(0,o.kt)("p",{parentName:"admonition"},"Note: At the end, you can deactivate it with: ",(0,o.kt)("inlineCode",{parentName:"p"},"conda deactivate"),"."),(0,o.kt)("h4",{parentName:"admonition",id:"8-install-dependencies-with-poetry"},"8. Install dependencies with poetry"),(0,o.kt)("p",{parentName:"admonition"},"Install the main dependencies with"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"poetry install\n")),(0,o.kt)("p",{parentName:"admonition"},"You are good to go with the core of the OpenBB Terminal. To install additional toolkits\nproceed with the following commands:"),(0,o.kt)("p",{parentName:"admonition"},"To install the Portfolio Optimization Toolkit run:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"poetry install -E optimization\n")),(0,o.kt)("p",{parentName:"admonition"},"To install the Machine Learning Toolkit run:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"poetry install -E prediction\n")),(0,o.kt)("p",{parentName:"admonition"},"To install both the Portfolio Optimization and the Machine Learning Toolkit run:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"poetry install -E all\n")),(0,o.kt)("h4",{parentName:"admonition",id:"9-youre-ready-to-use-the-terminal"},"9. You're ready to use the terminal!"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"openbb\n")),(0,o.kt)("p",{parentName:"admonition"},"Or if you are old-fashioned run:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python terminal.py\n")),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"NOTE:")," When you close the terminal and re-open it, the only command you need to re-call\nis ",(0,o.kt)("inlineCode",{parentName:"p"},"conda activate obb")," before you call ",(0,o.kt)("inlineCode",{parentName:"p"},"openbb")," again."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"TROUBLESHOOT:")," If you are having troubles to install, check out the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/blob/master/TROUBLESHOOT.md"},"troubleshoot page"),"."),(0,o.kt)("p",{parentName:"admonition"},"You can also reach for help on our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/Up2QGbMKHY"},"discord"),"."),(0,o.kt)("h2",{parentName:"admonition",id:"advanced-user-install---custom-installation-procedures"},"Advanced User Install - Custom installation procedures"),(0,o.kt)("p",{parentName:"admonition"},"By default we advice using ",(0,o.kt)("inlineCode",{parentName:"p"},"conda")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"poetry")," for environment setup and dependency management.\nConda ships binaries for packages like ",(0,o.kt)("inlineCode",{parentName:"p"},"numpy")," so these dependencies are not built from source locally by ",(0,o.kt)("inlineCode",{parentName:"p"},"pip"),".\nPoetry solves the dependency tree in a way that the dependencies of dependencies of dependencies\nuse versions that are compatible with each other."),(0,o.kt)("p",{parentName:"admonition"},"If you are using a conda environment the ",(0,o.kt)("inlineCode",{parentName:"p"},"build/conda")," folder contains multiple ",(0,o.kt)("inlineCode",{parentName:"p"},".yaml")," configuration\nfiles that you can choose from."),(0,o.kt)("p",{parentName:"admonition"},"If you are using other python distributions we highly recommend that you use some virtual\nenvironment like ",(0,o.kt)("inlineCode",{parentName:"p"},"virtualenv")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"pyenv")," for installing the terminal dependency libraries."),(0,o.kt)("p",{parentName:"admonition"},"Requirements files that you can find in the project root:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"requirements.txt")," list all the dependencies without Machine Learning libraries"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"requirements-full.txt")," list all the dependencies without Machine Learning libraries")),(0,o.kt)("p",{parentName:"admonition"},"You can install them with with pip"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install -r requirements.txt\n")),(0,o.kt)("p",{parentName:"admonition"},"The dependency tree is solved by poetry."),(0,o.kt)("p",{parentName:"admonition"},"Note: The libraries specified in the requirements files have been tested and work for\nthe purpose of this project, however, these may be older versions. Hence, it is recommended\nfor the user to set up a virtual python environment prior to installing these. This allows\nto keep dependencies required by different projects in separate places."),(0,o.kt)("h3",{parentName:"admonition",id:"installing-wsl-only-for-windows-users"},"Installing WSL (Only for Windows users)"),(0,o.kt)("p",{parentName:"admonition"},"If you are using Windows you first you need to install WSL. The process is simple and a tutorial can be found ",(0,o.kt)("a",{parentName:"p",href:"https://www.sitepoint.com/wsl2/"},"here"),".\nOnce you reach the section ",(0,o.kt)("strong",{parentName:"p"},"Update Linux")," on that tutorial, you should have a linux machine installed and can proceed\nto the next steps."),(0,o.kt)("p",{parentName:"admonition"},"Since WSL installation is headless by default (i.e., you have only access to a terminal running a linux distribution)\nyou need some extra steps to be able to visualize the charts produced by the terminal (more detailed tutorial ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/@shaoyenyu/make-matplotlib-works-correctly-with-x-server-in-wsl2-9d9928b4e36a"},"here"),"):"),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Dynamically export the DISPLAY environment variable in WSL2:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# add to the end of ~/.bashrc file\nexport DISPLAY=$(cat /etc/resolv.conf | grep nameserver | awk '{print $2}'):0\n# source the file\nsource ~/.bashrc\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download and install ",(0,o.kt)("a",{parentName:"p",href:"https://sourceforge.net/projects/vcxsrv/"},"VcXsrv"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'When running the program is important to check "Disable access control"'))),(0,o.kt)("p",{parentName:"admonition"},"After this, ",(0,o.kt)("inlineCode",{parentName:"p"},"VcXsrv")," should be running successfully and we can proceed to terminal installation."),(0,o.kt)("h2",{parentName:"admonition",id:"update-terminal"},"Update Terminal"),(0,o.kt)("p",{parentName:"admonition"},"The terminal is constantly being updated with new features and bug fixes, hence, for your terminal to be update,\nyou can run:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git pull\n")),(0,o.kt)("p",{parentName:"admonition"},"to get the latest changes."),(0,o.kt)("p",{parentName:"admonition"},"If this fails due to the fact that you had modified some python files, and there's a conflict with the updates, you can use:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git stash\n")),(0,o.kt)("p",{parentName:"admonition"},"Then, re-run ",(0,o.kt)("inlineCode",{parentName:"p"},"poetry install")," to get any new dependencies."),(0,o.kt)("p",{parentName:"admonition"},"Once installation is finished, you're ready to openbb."),(0,o.kt)("p",{parentName:"admonition"},"If you ",(0,o.kt)("inlineCode",{parentName:"p"},"stashed")," your changes previously, you can un-stash them with:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git stash pop\n")),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"NOTE:")," When you close the terminal and re-open it, the only command you need to re-call is ",(0,o.kt)("inlineCode",{parentName:"p"},"conda activate gst"),"\nbefore you call ",(0,o.kt)("inlineCode",{parentName:"p"},"openbb")," again.")))))}u.isMDXComponent=!0}}]);