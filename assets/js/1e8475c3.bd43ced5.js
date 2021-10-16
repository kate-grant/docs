"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5365],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(n),k=i,m=c["".concat(s,".").concat(k)]||c[k]||p[k]||r;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},89269:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>s,metadata:()=>d,toc:()=>u,default:()=>c});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),l=["components"],o={id:"datastores",title:"Datastores",sidebar_label:"Datastores"},s=void 0,d={unversionedId:"datastores",id:"datastores",isDocsHomePage:!1,title:"Datastores",description:"Overview",source:"@site/docs/datastores.md",sourceDirName:".",slug:"/datastores",permalink:"/datastores",editUrl:"https://github.com/darklang/docs/edit/main/docs/datastores.md",tags:[],version:"current",frontMatter:{id:"datastores",title:"Datastores",sidebar_label:"Datastores"},sidebar:"docs",previous:{title:"Language Details",permalink:"/languagedetails"},next:{title:"Packages",permalink:"/packages"}},u=[{value:"Overview",id:"overview",children:[{value:"Keys",id:"keys",children:[],level:3},{value:"Values",id:"values",children:[],level:3}],level:2},{value:"DB Functions",id:"db-functions",children:[{value:"Adding a record to a Datastore",id:"adding-a-record-to-a-datastore",children:[],level:3},{value:"Datastore meta-actions",id:"datastore-meta-actions",children:[],level:3},{value:"Querying by key, <code>DB::get</code>",id:"querying-by-key-dbget",children:[],level:3},{value:"Querying by record field, <code>DB::queryExactField</code>",id:"querying-by-record-field-dbqueryexactfield",children:[],level:3},{value:"Querying by criteria, <code>DB::query</code> (experimental SQL Compiler)",id:"querying-by-criteria-dbquery-experimental-sql-compiler",children:[],level:3},{value:"Creating References Between DBs",id:"creating-references-between-dbs",children:[],level:3}],level:2},{value:"Migrations, Locking, and Unlocking",id:"migrations-locking-and-unlocking",children:[],level:2},{value:"Using an External Datastore",id:"using-an-external-datastore",children:[],level:2}],p={toc:u};function c(e){var t=e.components,o=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Datastores in Dark are key-value based (persistent hash-maps). When you create a\nnew datastore, you specify the schema for the record."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Empty Datastore",src:n(29611).Z})),(0,r.kt)("p",null,"The key is the unique identifier for each record, and is always of type\n",(0,r.kt)("inlineCode",{parentName:"p"},"string"),". ",(0,r.kt)("strong",{parentName:"p"},"The key is not visible when looking at the Datastore's schema on the\ncanvas.")," You cannot mark a record field as the key, but you can use the same\nvalue for the field and the key when using ",(0,r.kt)("inlineCode",{parentName:"p"},"Db::set"),". An expected response when\nretrieving a set of records, with keys, is as following:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"[{key: { key1: value1, key2: value2} }, {key: { key1: value3, key2: value4}]")),(0,r.kt)("p",null,"You query datastores in four ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"By key (",(0,r.kt)("inlineCode",{parentName:"li"},"DB::get")," family)"),(0,r.kt)("li",{parentName:"ul"},"By specific field (",(0,r.kt)("inlineCode",{parentName:"li"},"DB::queryExactField")," family)"),(0,r.kt)("li",{parentName:"ul"},"By criteria for a specific field (",(0,r.kt)("inlineCode",{parentName:"li"},"DB::query")," family)"),(0,r.kt)("li",{parentName:"ul"},"By gathering information about the entire datastore")),(0,r.kt)("p",null,"Datastores return one or many results, with or without keys."),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/_LqlHR55GZQ",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,r.kt)("h3",{id:"keys"},"Keys"),(0,r.kt)("p",null,"The schema is the same for all of these key examples:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Datastore Schema",src:n(12516).Z})),(0,r.kt)("p",null,"Some common key choices:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A unique field (like ",(0,r.kt)("inlineCode",{parentName:"li"},"userId"),"). If the field is not already a string use\n",(0,r.kt)("inlineCode",{parentName:"li"},"toString"),". The key is shown in the preview data.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'[{"1": { userId: 1, name: "Ellen", pets: ["Gutenberg"]} }, {"2": { userId: 2, name: "Paul", pets: []}]')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A unique derivative of a field (like name and ",(0,r.kt)("inlineCode",{parentName:"li"},"UserId"),", or a slug).")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'[{"ellen1": { userId: 1, name: "Ellen", pets: ["Gutenberg"]} }, {"paul2": { userId: 2, name: "Paul", pets: []}]')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A unique identifier generated programmatically (",(0,r.kt)("inlineCode",{parentName:"li"},"DB::generateKey"),").")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'[{"dee09c7e-6ede-402d-9ea4-4ee8fe843688": { id: 1, name: "Ellen", pets: ["Gutenberg"]} }, {"ac7d4f1f-a164-4450-96f3-728b087bb9f4": { id: 2, name: "Paul", pets: []}]')),(0,r.kt)("h3",{id:"values"},"Values"),(0,r.kt)("p",null,"The datastore holds records. In the future, datastores will be defined by type,\nbut for now you manually create the schema. Available types are: String, Int,\nBool, Float, Password, Date, UUID, Dict (and lists of those)."),(0,r.kt)("h2",{id:"db-functions"},"DB Functions"),(0,r.kt)("p",null,"Datastore operators are built into the language. All functions are independently\nversioned. In your canvas you will see the latest version, as well as any\nversions you are currently using."),(0,r.kt)("p",null,"A list of all datastore functions is available\n",(0,r.kt)("a",{parentName:"p",href:"https://ops-documentation.builtwithdark.com/?pretty=1"},"in the function reference"),"."),(0,r.kt)("h3",{id:"adding-a-record-to-a-datastore"},"Adding a record to a Datastore"),(0,r.kt)("p",null,"To add items into a datastore, use ",(0,r.kt)("inlineCode",{parentName:"p"},"DB::set"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"DB::set")," takes three parameters\n(the record to be added, its unique key, and the datastore)."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"DBset",src:n(80548).Z})),(0,r.kt)("p",null,"For the earlier example datastore, using this with ",(0,r.kt)("inlineCode",{parentName:"p"},"userID")," as the key would\nlook as follows:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"DBset",src:n(72641).Z})),(0,r.kt)("p",null,"Using the a generated key with ",(0,r.kt)("inlineCode",{parentName:"p"},"DB::generateKey")," would look like this instead:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"DBset",src:n(65252).Z})),(0,r.kt)("h3",{id:"datastore-meta-actions"},"Datastore meta-actions"),(0,r.kt)("p",null,"Some datastore functions provide ability to do something to the entire\ndatastore, and only require the datastore as the parameter."),(0,r.kt)("p",null,"Any datastore function that includes 'with keys' returns both the key and the\nvalue, a list of nested dictionaries\n",(0,r.kt)("inlineCode",{parentName:"p"},'[{"1": { userId: 1, name: "Ellen", pets: ["Gutenberg"]} }, {"2": { userId: 2, name: "Paul", pets: []}]')),(0,r.kt)("p",null,"Functions that do not include 'with keys' return just the values, a list of\ndictionaries\n",(0,r.kt)("inlineCode",{parentName:"p"},'[{ userId: 1, name: "Ellen", pets: ["Gutenberg"]} , {userId: 2, name: "Paul", pets: []}]')),(0,r.kt)("p",null,"These include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DB::count")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DB::deleteAll")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DB::getAll")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DB::getAllwithKeys")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DB::keys")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DB::schemaFields")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DB::schema"))),(0,r.kt)("p",null,"To easily see is in your Datastore, create a REPL and running ",(0,r.kt)("inlineCode",{parentName:"p"},"DB::getAll"),"."),(0,r.kt)("h3",{id:"querying-by-key-dbget"},"Querying by key, ",(0,r.kt)("inlineCode",{parentName:"h3"},"DB::get")),(0,r.kt)("p",null,"The key is a good way to be able to find information in the datastore. DB::get\nfinds records by key (reminder: ",(0,r.kt)("inlineCode",{parentName:"p"},"withKeys")," returns nested dictionaries including\nkeys, so ",(0,r.kt)("inlineCode",{parentName:"p"},"DB::get")," does not return the key). Datastore functions that allow\naction based on key are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DB::delete")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DB::get")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DB::getMany")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DB::getManywithKeys"))),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/qNA8FzGkdWI",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,r.kt)("h3",{id:"querying-by-record-field-dbqueryexactfield"},"Querying by record field, ",(0,r.kt)("inlineCode",{parentName:"h3"},"DB::queryExactField")),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"DB::queryExactField")," checks for a specific field within the record.\n",(0,r.kt)("inlineCode",{parentName:"p"},"DB::queryOnewithExactField")," finds one response, whereas ",(0,r.kt)("inlineCode",{parentName:"p"},"DB::queryExactFields"),"\nwill return as many as exist. (reminder: ",(0,r.kt)("inlineCode",{parentName:"p"},"withKeys")," returns nested dictionaries\nincluding keys)."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DB::queryExactFields")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DB::queryExactFieldswithKey")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DB::queryOnewithExactField")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DB::queryOneWithExactFieldWithKey"))),(0,r.kt)("h3",{id:"querying-by-criteria-dbquery-experimental-sql-compiler"},"Querying by criteria, ",(0,r.kt)("inlineCode",{parentName:"h3"},"DB::query")," (experimental SQL Compiler)"),(0,r.kt)("p",null,"For being able to run more effective datastore queries, we also have a query\ncompiler. More about this feature is in this\n",(0,r.kt)("a",{parentName:"p",href:"https://blog.darklang.com/compiling-dark-to-sql"},"blog post"),"."),(0,r.kt)("p",null,"This allows you to write a function that can be evaluated for the datastore."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"DBset",src:n(77407).Z})),(0,r.kt)("p",null,"DB::query allows taking a datastore and a block filter. Note that this does not\ncheck every value in the table but rather is optimized to find data with\nindexes. Errors at compile-time if Dark's compiler does not yet support the code\nin question (please let us know when you hit this, and which function you wanted\nto use!)"),(0,r.kt)("p",null,"You can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"DB::querywithKey")," to get both the key and record,\n",(0,r.kt)("inlineCode",{parentName:"p"},"DB::queryOne")," to get only one response, and ",(0,r.kt)("inlineCode",{parentName:"p"},"DB::queryOnewithKey")," to get only\none response, with the key and record."),(0,r.kt)("h3",{id:"creating-references-between-dbs"},"Creating References Between DBs"),(0,r.kt)("p",null,"This canvas shows the way to create a reference between two datastores: in this\ncase between Dark employees and their pets:\n",(0,r.kt)("a",{parentName:"p",href:"https://darklang.com/a/sample-database"},"https://darklang.com/a/sample-datastore")),(0,r.kt)("p",null,"Users have a pets field, which is a list of strings. The keys for the pets are\nadded to that list."),(0,r.kt)("h2",{id:"migrations-locking-and-unlocking"},"Migrations, Locking, and Unlocking"),(0,r.kt)("p",null,"You can edit the DB\u2019s schema (col names and types) until it has data in it, at\nwhich point it \u201clocks.\u201d Once a datastore is locked, there are several options\nfor changing the schema."),(0,r.kt)("p",null,"If you are still in development and don\u2019t need the data, creating a REPL and\ndeleting all data in a DB will unlock it (",(0,r.kt)("inlineCode",{parentName:"p"},"DB::deleteAll"),")."),(0,r.kt)("p",null,"To change your schema without deleting the data, you can use a live migration\nprocess. In the future, this will be built into Dark, but for now you can follow\n",(0,r.kt)("a",{parentName:"p",href:"https://www.notion.so/paulshen/Datastore-migration-in-Dark-e8d50f81366b48fc92c980372f68d316"},"Paul Shen's excellent guide"),"\nto the process."),(0,r.kt)("h2",{id:"using-an-external-datastore"},"Using an External Datastore"),(0,r.kt)("p",null,"We strongly recommend using this built-in datastore. If you have an external\ndatabase, you can ",(0,r.kt)("a",{parentName:"p",href:"/tutorials/external-db"},"connect to it via REST"),"."))}c.isMDXComponent=!0},77407:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dbquery-8de003d4e5f9229982eed2abeac1b6a1.png"},72641:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dbset-689082b497d7b03806911b3debbd7164.png"},80548:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dbset_empty-9a3217d832b9b0722724eeffbf556e51.png"},65252:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dbset_genkey-ed8676f42310ef1abb6499847170b2ba.png"},29611:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/empty-5f599f97ce0de12bdb71910d636b435c.png"},12516:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/schema-915308f4dbbb1ab3c833227fb2d6ac0d.png"}}]);