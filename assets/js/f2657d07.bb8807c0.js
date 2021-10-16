"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5099],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35960:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>c,toc:()=>p,default:()=>m});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),o=["components"],i={id:"writing-tests",title:"Writing Tests",sidebar_label:"Write Tests"},l=void 0,c={unversionedId:"writing-tests",id:"writing-tests",isDocsHomePage:!1,title:"Writing Tests",description:"At the moment, Dark does not provide an out of the box testing framework.",source:"@site/docs/writing-tests.md",sourceDirName:".",slug:"/writing-tests",permalink:"/writing-tests",editUrl:"https://github.com/darklang/docs/edit/main/docs/writing-tests.md",tags:[],version:"current",frontMatter:{id:"writing-tests",title:"Writing Tests",sidebar_label:"Write Tests"},sidebar:"docs",previous:{title:"Use Feature Flags",permalink:"/feature-flags"},next:{title:"Connect to External Infrastructure",permalink:"/external-infra"}},p=[],u={toc:p};function m(e){var t=e.components,i=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"At the moment, Dark does not provide an out of the box testing framework.\nHowever, it's fairly straightforward to write tests using REPLs and Crons."),(0,s.kt)("p",null,"Let's take a simple example: a character creation process where the creator\nenters the name of their character and allocates 15 skill points into three\npossible skills. There are a few constraints:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The name of the character must be more than 2 characters"),(0,s.kt)("li",{parentName:"ul"},"All 15 skill points must be used, no more and no less.")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"writing-tests/function.png",src:n(79363).Z})),(0,s.kt)("p",null,"Let's say we want to write tests to make sure the proper messages are being\nprinted out. All we need to do is create a REPL and call functions that hit all\nof these cases:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"writing-tests/tests.png",src:n(63534).Z})),(0,s.kt)("p",null,"Now, at a glance, we can see that the messages being printed out look the way we\nexpect them to."),(0,s.kt)("p",null,"We can even get fancy, and write logic to check that the printed messages say\nexactly what we want them to without having to read every message. In this\nexample, a portion of the message that gets printed when the name is not long\nenough has been accidentally deleted, so a warning is displayed."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"writing-tests/namecheck.png",src:n(8276).Z})),(0,s.kt)("p",null,"In the examples above, the tests would need to be run by running the REPL\nmanually. However, the same logic can be written in a cron to make sure the\ntests run at whatever interval you'd prefer."),(0,s.kt)("p",null,"If you're worried about missing a failing test, you can always set up alerts to\nlet you know. This is an example of a cron that runs once an hour and posts a\nmessage to Slack if an incorrect message is found:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"writing-tests/slack.png",src:n(93476).Z})))}m.isMDXComponent=!0},79363:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/function-0693187a6d94d20d9074482cede2e5d2.png"},8276:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/namecheck-a8c255053f3b784b5519bc5a66775684.png"},93476:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/slack-bc2f9a4b4c0f974eeff87d3d81e3ceb9.png"},63534:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/tests-a0752a5eb771c6ed29a1997238462fec.png"}}]);