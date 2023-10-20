"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[590],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,h=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4271:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:1},a="How to contribute",l={unversionedId:"contributors/how-to-contribute",id:"contributors/how-to-contribute",title:"How to contribute",description:"We deeply appreciate your interest in contributing to the Canvas Editor project. Your valuable contributions play a pivotal role in enhancing this project. Before you begin, please take a moment to review the following guidelines.",source:"@site/docs/contributors/how-to-contribute.md",sourceDirName:"contributors",slug:"/contributors/how-to-contribute",permalink:"/canvas-editor/docs/contributors/how-to-contribute",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Contributors",permalink:"/canvas-editor/docs/contributors/"},next:{title:"Code of conduct",permalink:"/canvas-editor/docs/contributors/code-of-conduce"}},s={},u=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Selecting an Issue or Feature",id:"selecting-an-issue-or-feature",level:2},{value:"Making Changes",id:"making-changes",level:2},{value:"Submitting a Pull Request",id:"submitting-a-pull-request",level:2},{value:"Code of Conduct",id:"code-of-conduct",level:2},{value:"Licensing",id:"licensing",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-contribute"},"How to contribute"),(0,o.kt)("p",null,"We deeply appreciate your interest in contributing to the Canvas Editor project. Your valuable contributions play a pivotal role in enhancing this project. Before you begin, please take a moment to review the following guidelines."),(0,o.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#getting-started"},"Getting Started")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#selecting-an-issue-or-feature"},"Selecting an Issue or Feature")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#making-changes"},"Making Changes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#submitting-a-pull-request"},"Submitting a Pull Request")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#code-of-conduct"},"Code of Conduct")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#licensing"},"Licensing"))),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Initiate the process by downloading the installer for the Long-Term Support (LTS) version of Node.js. This step also facilitates npm installation."),(0,o.kt)("li",{parentName:"ol"},"Proceed by forking the react-canvas-editor repository."),(0,o.kt)("li",{parentName:"ol"},"Execute npm install to install the required dependencies for this package."),(0,o.kt)("li",{parentName:"ol"},"Gain insights into the document editor's functionality by running npm run storybook.")),(0,o.kt)("h2",{id:"selecting-an-issue-or-feature"},"Selecting an Issue or Feature"),(0,o.kt)("p",null,"Review the project's issue tracker and GitHub repository to identify open issues or features that align with your interests. If you can't pinpoint a specific task, do not hesitate to reach out to the project maintainers for guidance."),(0,o.kt)("h2",{id:"making-changes"},"Making Changes"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Establish a new branch within your forked repository, providing it with a descriptive name."),(0,o.kt)("li",{parentName:"ol"},"Implement the desired feature or rectify the identified issue within your branch."),(0,o.kt)("li",{parentName:"ol"},"Adhere to the project's coding style and conventions to ensure consistency."),(0,o.kt)("li",{parentName:"ol"},"If applicable, create tests to comprehensively cover the functionality you're introducing or modifying.")),(0,o.kt)("h2",{id:"submitting-a-pull-request"},"Submitting a Pull Request"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Initiate a pull request (PR) on the primary project repository."),(0,o.kt)("li",{parentName:"ol"},"Furnish a clear and concise description of the changes within the PR."),(0,o.kt)("li",{parentName:"ol"},"Elaborate on the issue you are addressing and outline the proposed solution."),(0,o.kt)("li",{parentName:"ol"},"Be prepared to receive constructive feedback and engage in productive discussions."),(0,o.kt)("li",{parentName:"ol"},"Adjust your code as necessary based on the feedback received.")),(0,o.kt)("h2",{id:"code-of-conduct"},"Code of Conduct"),(0,o.kt)("p",null,"Kindly be aware that we uphold a Code of Conduct to sustain a positive and inclusive community. We urge you to thoroughly read and adhere to these guidelines during your participation in the project."),(0,o.kt)("h2",{id:"licensing"},"Licensing"),(0,o.kt)("p",null,"By contributing to this project, you consent to the licensing terms chosen by the project. Ensure you review the project's licensing file for detailed information."),(0,o.kt)("p",null,"We extend our gratitude for your contributions and eagerly anticipate your active involvement in the Canvas Editor project!"))}d.isMDXComponent=!0}}]);