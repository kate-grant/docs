"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3447],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=r,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},55242:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>c,toc:()=>d,default:()=>p});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"feature-flags",title:"Use Feature Flags",sidebar_label:"Use Feature Flags"},s=void 0,c={unversionedId:"feature-flags",id:"feature-flags",isDocsHomePage:!1,title:"Use Feature Flags",description:"In Dark, all changes are made in production, on your real infrastructure. If",source:"@site/docs/feature-flags.md",sourceDirName:".",slug:"/feature-flags",permalink:"/feature-flags",editUrl:"https://github.com/darklang/docs/edit/main/docs/feature-flags.md",tags:[],version:"current",frontMatter:{id:"feature-flags",title:"Use Feature Flags",sidebar_label:"Use Feature Flags"},sidebar:"docs",previous:{title:"Work with your team",permalink:"/teamwork"},next:{title:"Write Tests",permalink:"/writing-tests"}},d=[{value:"Build a first version",id:"build-a-first-version",children:[],level:2},{value:"Add a Feature Flag",id:"add-a-feature-flag",children:[],level:2},{value:"Choose a &quot;When&quot; Condition",id:"choose-a-when-condition",children:[],level:2},{value:"Write New Code",id:"write-new-code",children:[],level:2},{value:"Edit Condition &amp; Code",id:"edit-condition--code",children:[],level:2},{value:"Commit or Discard",id:"commit-or-discard",children:[],level:2},{value:"Limitations",id:"limitations",children:[],level:2}],u={toc:d};function p(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In Dark, all changes are made in production, on your real infrastructure. If\nyou'd like to develop for testing, without things immediately going to users,\nmake the changes within a feature flag."),(0,o.kt)("h2",{id:"build-a-first-version"},"Build a first version"),(0,o.kt)("p",null,"Before you have users, you can just write code within handlers."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Feature Flag",src:n(57959).Z})),(0,o.kt)("h2",{id:"add-a-feature-flag"},"Add a Feature Flag"),(0,o.kt)("p",null,"Open the command palette while selecting the code you want to modify (",(0,o.kt)("inlineCode",{parentName:"p"},"ctrl-\\"),"\nor ",(0,o.kt)("inlineCode",{parentName:"p"},"alt-x"),'). In this case, "hello world."'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Feature Flag",src:n(57049).Z})),(0,o.kt)("h2",{id:"choose-a-when-condition"},'Choose a "When" Condition'),(0,o.kt)("p",null,'By default, the code you write within the flag will not be run. All traffic will\nstill see the result of "Hello World." To have your new code run, specify a\ncondition.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Feature Flag",src:n(50945).Z})),(0,o.kt)("p",null,"In this case, the new code will run if the traffic specifies a ",(0,o.kt)("inlineCode",{parentName:"p"},"queryParam"),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"name=Ellen"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Feature Flag",src:n(7188).Z})),(0,o.kt)("p",null,"Since the new execution code has not been written, if you run the code with\n",(0,o.kt)("inlineCode",{parentName:"p"},"name=Ellen")," an error results."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Feature Flag",src:n(81855).Z})),(0,o.kt)("h2",{id:"write-new-code"},"Write New Code"),(0,o.kt)("p",null,"Write new code for the section you're looking to change, and try it out."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Feature Flag",src:n(41919).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Feature Flag",src:n(40085).Z})),(0,o.kt)("p",null,"For any case other than the specific condition, the old code will continue to\nrun."),(0,o.kt)("p",null,"For instance, if another name is chosen in the query param:\n",(0,o.kt)("img",{alt:"Feature Flag",src:n(97422).Z})),(0,o.kt)("p",null,"Or if there is not a name: ",(0,o.kt)("img",{alt:"Feature Flag",src:n(7822).Z})),(0,o.kt)("h2",{id:"edit-condition--code"},"Edit Condition & Code"),(0,o.kt)("p",null,"Adjust the condition to test any additional cases, or write more code."),(0,o.kt)("p",null,"Running the new code for any name: ",(0,o.kt)("img",{alt:"Feature Flag",src:n(80506).Z})),(0,o.kt)("p",null,"Making the new code take into account if a name exists or not:\n",(0,o.kt)("img",{alt:"Feature Flag",src:n(74442).Z})),(0,o.kt)("p",null,"Live values and traces work for analysis within feature flags, but still appear\nto the left of the original code."),(0,o.kt)("h2",{id:"commit-or-discard"},"Commit or Discard"),(0,o.kt)("p",null,"Once you're done, re-open the command palette (",(0,o.kt)("inlineCode",{parentName:"p"},"ctrl-\\")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"alt-x")," and commit or\ndiscard the code)."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Feature Flag",src:n(90571).Z})),(0,o.kt)("p",null,"When you commit, the feature flag code now runs for all cases. When you discard,\nyou return to the previous version of the code."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Feature Flag",src:n(11505).Z})),(0,o.kt)("h2",{id:"limitations"},"Limitations"),(0,o.kt)("p",null,"Currently, you can only have one feature flag per component. There is not yet a\nway to see the past history of flags (instead they are just part of the undo\nstack, ",(0,o.kt)("inlineCode",{parentName:"p"},"cmd-z")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"ctrl-z"),".)"))}p.isMDXComponent=!0},57049:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/add-2ba735a1711528ee5a5304429488627a.png"},74442:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/additionallogic-207f7a0b23587032918df5ddc8672da8.png"},90571:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/commit-55fbc67ad8ba44bd04cab189593f4732.png"},11505:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/committed-4cc17968e4e59b0b31626a26b6a4b511.png"},81855:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/error-90ce14cc7a0445457a2c24da4f92ae0f.png"},41919:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/newcode-d9dec31cc3ea389e42128c269601ab90.png"},40085:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/newexecution-27519d180eb454b929b369d974fef048.png"},80506:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/notnull-5b5f65b1fdb0b79409cbfb4179ed6038.png"},50945:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/when-556de172592329564583aca0559d0421.png"},7822:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/whenblank-5d671c92c32077798de79627acc32fa9.png"},7188:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/whenellen-ee2620f9f422e101c9863adabe670b0e.png"},97422:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/whensam-017138ad00c435ee27a1e57a82eba1b2.png"},57959:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/write-85d1fb28d62fb39bf21420a6d2f702b0.png"}}]);