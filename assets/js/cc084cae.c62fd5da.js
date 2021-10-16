"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1137],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(r),f=o,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||a;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},24422:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>c,toc:()=>d,default:()=>u});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={id:"first-worker",title:"Your first Worker"},l=void 0,c={unversionedId:"first-worker",id:"first-worker",isDocsHomePage:!1,title:"Your first Worker",description:"Workers process jobs in the background, ideal for daily reports. They're also",source:"@site/docs/first-worker.md",sourceDirName:".",slug:"/first-worker",permalink:"/first-worker",editUrl:"https://github.com/darklang/docs/edit/main/docs/first-worker.md",tags:[],version:"current",frontMatter:{id:"first-worker",title:"Your first Worker"}},d=[],p={toc:d};function u(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Workers process jobs in the background, ideal for daily reports. They're also\ncommonly used for sending notifications and other asynchronous tasks that we\ndon't want to handle in HTTP requests."),(0,a.kt)("p",null,"If we were doing this for real, we might send the data to a 3rd party API over\nHTTP. But for the sake of simplicity, let's just store the data into the\n",(0,a.kt)("inlineCode",{parentName:"p"},"DailyReport")," datastore."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"From the 404 section of the sidebar, hit the plus (+) button to create the\n",(0,a.kt)("inlineCode",{parentName:"li"},"StoreReport")," Worker. The Worker will already be named, and hovering over the\nwhite dot will show you the event triggered by your cron.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"gettingstarted/newworker.png",src:r(14256).Z})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"For the report, we're going to store our data by human readable dates (like\n",(0,a.kt)("inlineCode",{parentName:"li"},"02-27-2020"),"). First, we'll get the current date, and then get the pieces and\nre-aggregate them.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"gettingstarted/humandate.png",src:r(31043).Z})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"event")," we received is not the exact shape we want. Let's process it\nusing ",(0,a.kt)("inlineCode",{parentName:"li"},"List::map")," to keep just the ",(0,a.kt)("inlineCode",{parentName:"li"},"data")," field.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"gettingstarted/dataonly.png",src:r(61761).Z})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Make a second datastore with three fields: the nicely-formatted date, the\nlist of requests, and the count of requests for that day.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"gettingstarted/seconddatastore.png",src:r(99267).Z})),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"To get the count, use ",(0,a.kt)("inlineCode",{parentName:"li"},"List::length"),". Then we store it in the DB, using\n",(0,a.kt)("inlineCode",{parentName:"li"},"humanDate")," as the key.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"gettingstarted/dbsetworker.png",src:r(42555).Z})),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"Now, our first datastore stores each incoming request, and every 24 hours our\nCron runs, sending the right reports to our worker, which stores a report in\nour second datastore.")))}u.isMDXComponent=!0},61761:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/dataonly-cf9468b7dcb644b5f8463065bd444c25.png"},42555:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/dbsetworker-87ae94b8eafb89024b21104a5edc4d8c.png"},31043:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/humandate-b90eac35de5f33095fef224079320736.png"},14256:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/newworker-6e81cfaf0a8a8bb1690de821fdc770ef.png"},99267:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/seconddatastore-da5b46c5a73aa078c1fc4a03089bd48f.png"}}]);