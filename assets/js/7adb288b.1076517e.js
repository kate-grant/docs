"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7117],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),c=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),u=c(n),m=r,_=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(_,l(l({ref:e},p),{},{components:n})):a.createElement(_,l({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=u;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s.mdxType="string"==typeof t?t:r,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1948:(t,e,n)=>{n.r(e),n.d(e,{frontMatter:()=>s,contentTitle:()=>i,metadata:()=>c,toc:()=>p,default:()=>u});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=["components"],s={id:"ifttt-alerts",title:"Alerting with IFTTT",sidebar_label:"Alerting with IFTTT"},i=void 0,c={unversionedId:"tutorials/ifttt-alerts",id:"tutorials/ifttt-alerts",isDocsHomePage:!1,title:"Alerting with IFTTT",description:"In this tutorial, we will create a tool that allows you to approve or deny users",source:"@site/docs/tutorials/ifttt-alerts.md",sourceDirName:"tutorials",slug:"/tutorials/ifttt-alerts",permalink:"/tutorials/ifttt-alerts",editUrl:"https://github.com/darklang/docs/edit/main/docs/tutorials/ifttt-alerts.md",tags:[],version:"current",frontMatter:{id:"ifttt-alerts",title:"Alerting with IFTTT",sidebar_label:"Alerting with IFTTT"},sidebar:"Tutorials",previous:{title:"Clean Error Messages with the Error Rail",permalink:"/tutorials/error-rail-http-tutorial"},next:{title:"Using an External DB",permalink:"/tutorials/external-db"}},p=[{value:"Waitlist Functionality",id:"waitlist-functionality",children:[],level:2},{value:"Creating Alerts",id:"creating-alerts",children:[],level:2}],d={toc:p};function u(t){var e=t.components,s=(0,r.Z)(t,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,s,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this tutorial, we will create a tool that allows you to approve or deny users\nwho have joined a waitlist, and receive alerts about the waitlist via IFTTT. For\nthe purposes of this tutorial, we will host everything locally instead of\nuploading via static assets."),(0,o.kt)("h2",{id:"waitlist-functionality"},"Waitlist Functionality"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Start by making a simple web form to allow users to join your waitlist. All\nof the work for this tutorial can be done locally, but if you're interested\nyou can learn more about ",(0,o.kt)("a",{parentName:"li",href:"../static-assets"},"uploading static assets here."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"iftttalerts/Screen_Shot_2020-05-19_at_9.19.01_AM.png",src:n(683).Z})),(0,o.kt)("p",null,"We've used the code below - note that you will need to replace the URL that is\nposted to with your own username and canvas."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-HTML"},'<html>\n<form method="post" action="https://username-canvasname.builtwithdark.com/submit">\n  <label for="name">Name:</label><br>\n  <input type="text" id="name" name="name"><br>\n  <label for="email">Email:</label><br>\n  <input type="text" id="email" name="email"><br>\n  <label for="twitter">Number of Twitter Followers:</label><br>\n  <input type="text" id="twitter" name="twitter"><br>\n  <input type="submit" value="Submit">\n</form>\n</html>\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},'Enter some information on the form and click "submit". You will get a 404\nerror.')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"iftttalerts/Screen_Shot_2020-05-19_at_9.19.18_AM.png",src:n(90253).Z})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Go to your canvas and check your 404s in the sidebar - a new one should be\navailable. Click to add it to your canvas.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"iftttalerts/Screen_Shot_2020-05-19_at_9.19.31_AM.png",src:n(33959).Z})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Once your handler has been added, you can mouse over the trace (white dot on\nthe left) to see the data you passed through via the form.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"iftttalerts/Screen_Shot_2020-05-19_at_9.19.50_AM.png",src:n(28906).Z})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"We're going to want to add this information to a datastore - create a new one\nvia the sidebar and add the following fields.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"iftttalerts/Screen_Shot_2020-05-19_at_9.20.55_AM.png",src:n(44954).Z})),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Grab the email, name and number of twitter followers from the request.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"iftttalerts/Screen_Shot_2020-05-19_at_9.21.33_AM.png",src:n(51151).Z})),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Use a ",(0,o.kt)("inlineCode",{parentName:"li"},"DB::set")," to add the information to your datastore. Note that we've\nalso set the ",(0,o.kt)("inlineCode",{parentName:"li"},"reviewed")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"reviewResult")," fields. We will be using these to\nkeep track of where waitlist entries are in the process.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"iftttalerts/Screen_Shot_2020-05-19_at_9.22.37_AM.png",src:n(77686).Z})),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},"Resubmit your form, or use the play button to run your handler. Your\ndatastore should update and lock.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"iftttalerts/Screen_Shot_2020-05-19_at_9.22.52_AM.png",src:n(56693).Z})),(0,o.kt)("ol",{start:9},(0,o.kt)("li",{parentName:"ol"},"We now need to create a few more files to see our waitlist queue. Note that\nyou will need to replace the URLs in ",(0,o.kt)("inlineCode",{parentName:"li"},"script.js")," with your username and\ncanvas name.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"queue.html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n\n    <title>Unreviewed</title>\n\n    <link\n      href="https://fonts.googleapis.com/css?family=Dosis:400,700"\n      rel="stylesheet"\n    />\n    <link href="style.css" rel="stylesheet" />\n  </head>\n\n  <body>\n    <div id="root"></div>\n    <script src="scripts.js"><\/script>\n  </body>\n</html>\n'))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"script.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const app = document.getElementById("root");\n\nconst container = document.createElement("div");\ncontainer.setAttribute("class", "container");\n\napp.appendChild(container);\n\nvar request = new XMLHttpRequest();\nrequest.open(\n  "GET",\n  "https://username-canvasname.builtwithdark.com/get-unreviewed",\n  true,\n);\nrequest.onload = function () {\n  // Begin accessing JSON data here\n  var data = JSON.parse(this.response);\n  if (request.status >= 200 && request.status < 400) {\n    data.forEach(entry => {\n      const card = document.createElement("div");\n      card.setAttribute("class", "card");\n\n      const h1 = document.createElement("h1");\n      h1.textContent = entry.name;\n\n      const lineBreak = document.createElement("br");\n\n      const fn = document.createElement("fn");\n      entry.email = entry.email;\n      fn.textContent = `${entry.email} `;\n\n      const lineBreak2 = document.createElement("br");\n\n      const ln = document.createElement("ln");\n      entry.twitter = entry.twitter;\n      ln.textContent = `${entry.twitter}`;\n\n      var btn = document.createElement("Button");\n      btn.innerHTML = "Approve";\n      btn.onclick = function markApproved() {\n        var request2 = new XMLHttpRequest();\n        request2.open(\n          "POST",\n          "https://username-canvasname.builtwithdark.com/reviewed",\n          true,\n        );\n        request2.setRequestHeader(\n          "Content-type",\n          "application/x-www-form-urlencoded",\n        );\n        request2.send(\n          "name=" +\n            entry.name +\n            "&email=" +\n            entry.email +\n            "&twitter=" +\n            entry.twitter +\n            "&result=approved",\n        );\n        location.reload();\n        return false;\n      };\n\n      var btn2 = document.createElement("Button");\n      btn2.innerHTML = "Reject";\n      btn2.onclick = function markRejected() {\n        var request2 = new XMLHttpRequest();\n        request2.open(\n          "POST",\n          "https://username-canvasname.builtwithdark.com/reviewed",\n          true,\n        );\n        request2.setRequestHeader(\n          "Content-type",\n          "application/x-www-form-urlencoded",\n        );\n        request2.send(\n          "name=" +\n            entry.name +\n            "&email=" +\n            entry.email +\n            "&twitter=" +\n            entry.twitter +\n            "&result=rejected",\n        );\n        location.reload();\n        return false;\n      };\n\n      container.appendChild(card);\n      card.appendChild(h1);\n      card.appendChild(fn);\n      card.appendChild(lineBreak);\n      card.appendChild(ln);\n      card.appendChild(lineBreak2);\n      card.appendChild(btn);\n      card.appendChild(btn2);\n    });\n  } else {\n    const errorMessage = document.createElement("marquee");\n    errorMessage.textContent = `Gah, it\'s not working!`;\n    app.appendChild(errorMessage);\n  }\n};\n\nrequest.send();\n'))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"style.css"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"#root {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.container {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.card {\n  margin: 1rem;\n  border: 1px solid gray;\n}\n\n@media screen and (min-width: 600px) {\n  .card {\n    flex: 1 1 calc(50% - 2rem);\n  }\n}\n\n@media screen and (min-width: 900px) {\n  .card {\n    flex: 1 1 calc(33% - 2rem);\n  }\n}\n"))),(0,o.kt)("ol",{start:10},(0,o.kt)("li",{parentName:"ol"},"Once you've created the page, visit it to generate another 404. Add your new\n404 to your canvas.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"iftttalerts/Screen_Shot_2020-05-19_at_9.24.45_AM.png",src:n(97751).Z})),(0,o.kt)("ol",{start:11},(0,o.kt)("li",{parentName:"ol"},"Write a ",(0,o.kt)("inlineCode",{parentName:"li"},"DB::query")," to grab all of the entries in ",(0,o.kt)("inlineCode",{parentName:"li"},"Signups")," where reviewed\nis ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"iftttalerts/Screen_Shot_2020-05-19_at_9.25.20_AM.png",src:n(90285).Z})),(0,o.kt)("ol",{start:12},(0,o.kt)("li",{parentName:"ol"},"Refresh your page - the form entry from before will now be visible.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"iftttalerts/Screen_Shot_2020-05-19_at_9.25.30_AM.png",src:n(73276).Z})),(0,o.kt)("ol",{start:13},(0,o.kt)("li",{parentName:"ol"},"Click either the Approve or Reject buttons on your page to get another 404.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"iftttalerts/Screen_Shot_2020-05-19_at_9.26.29_AM.png",src:n(16453).Z})),(0,o.kt)("ol",{start:14},(0,o.kt)("li",{parentName:"ol"},"Check your trace - you should see information from your entry passed\nthrough.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"iftttalerts/Screen_Shot_2020-05-19_at_9.31.50_AM.png",src:n(21105).Z})),(0,o.kt)("ol",{start:15},(0,o.kt)("li",{parentName:"ol"},"Just like before, grab the information from the request.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"iftttalerts/Screen_Shot_2020-05-19_at_9.31.59_AM.png",src:n(57343).Z})),(0,o.kt)("ol",{start:16},(0,o.kt)("li",{parentName:"ol"},"Do a ",(0,o.kt)("inlineCode",{parentName:"li"},"DB::set")," to update your datastore.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"iftttalerts/Screen_Shot_2020-05-19_at_9.33.32_AM.png",src:n(6534).Z})),(0,o.kt)("ol",{start:17},(0,o.kt)("li",{parentName:"ol"},"Let's make one more page, to take a look at our approvals. Once you've\ncreated it, visit it to get a 404.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"approved.html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n\n    <title>Approved</title>\n\n    <link href="https://fonts.googleapis.com/css?family=Dosis:400,700" rel="stylesheet" />\n    <link href="style.css" rel="stylesheet" />\n\n  </head>\n\n  <body>\n    <div id="root"></div>\n    <script src="approvedscripts.js"><\/script>\n  </body>\n</html>\n'))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"approvedscripts.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"const app = document.getElementById('root')\n\nconst container = document.createElement('div')\ncontainer.setAttribute('class', 'container')\n\napp.appendChild(container)\n\nvar request = new XMLHttpRequest()\nrequest.open('GET', 'https://victoria-waitlistalerts.builtwithdark.com/get-approved', true)\nrequest.onload = function() {\n  // Begin accessing JSON data here\n  var data = JSON.parse(this.response)\n  if (request.status >= 200 && request.status < 400) {\n    data.forEach(entry => {\n      const card = document.createElement('div')\n      card.setAttribute('class', 'card')\n\n      const h1 = document.createElement('h1')\n      h1.textContent = entry.name\n\n      const lineBreak = document.createElement('br');\n\n      const h2 = document.createElement('fn')\n      entry.email = entry.email\n      h2.textContent = `${entry.email}` + `\\n`\n\n      const lineBreak2 = document.createElement('br');\n\n      const ln = document.createElement('ln')\n      entry.twitter = entry.twitter\n      ln.textContent = `${entry.twitter}`\n\n      container.appendChild(card)\n      card.appendChild(h1)\n      card.appendChild(lineBreak2)\n      card.appendChild(h2)\n      card.appendChild(lineBreak)\n      card.appendChild(ln)\n\n\n\n    })\n  } else {\n    const errorMessage = document.createElement('marquee')\n    errorMessage.textContent = `Gah, it's not working!`\n    app.appendChild(errorMessage)\n  }\n}\n\nrequest.send()\n"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"iftttalerts/Screen_Shot_2020-05-19_at_9.34.21_AM.png",src:n(94310).Z})),(0,o.kt)("ol",{start:18},(0,o.kt)("li",{parentName:"ol"},"Do another ",(0,o.kt)("inlineCode",{parentName:"li"},"DB::query"),", but this time, check that ",(0,o.kt)("inlineCode",{parentName:"li"},"reviewResult")," is\napproved.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"iftttalerts/Screen_Shot_2020-05-21_at_1.27.08_PM.png",src:n(95454).Z})),(0,o.kt)("ol",{start:19},(0,o.kt)("li",{parentName:"ol"},"Visit the page again to see your approvals.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"iftttalerts/Screen_Shot_2020-05-19_at_9.35.57_AM.png",src:n(69618).Z})),(0,o.kt)("h2",{id:"creating-alerts"},"Creating Alerts"),(0,o.kt)("p",null,"We're going to create two alerts - one that will let you know if you have a\nbacklog of waitlist entries waiting to be approved, and another that will let\nyou know if you've gotten a waitlist entry with lots of Twitter followers."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to IFTTT and chose ",(0,o.kt)("strong",{parentName:"li"},"Create"),". Start by selecting Webhooks or the Maker\nservice.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"iftttalerts/Screen_Shot_2020-05-19_at_9.59.30_AM.png",src:n(62066).Z})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Name your event and create the trigger.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"iftttalerts/Screen_Shot_2020-05-19_at_9.59.47_AM.png",src:n(40188).Z})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},'Choose "Send me an email" as the result of the trigger.')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"iftttalerts/Screen_Shot_2020-05-19_at_9.59.59_AM.png",src:n(27270).Z})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Format the email you will receive. In our case, we want to modify the subject\nline and pass through the value of how many unreviewed entries we have.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"iftttalerts/Screen_Shot_2020-05-19_at_10.01.07_AM.png",src:n(74631).Z})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Return to your canvas and create a function that keeps track of how many\nunreviewed entries you have.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"iftttalerts/Screen_Shot_2020-05-19_at_10.04.20_AM.png",src:n(91158).Z})),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Next, create an hourly Cron that checks if your unreviewed count is too high\n(in this case, we're going to set it to 3) and sends you an email if it is.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"iftttalerts/Screen_Shot_2020-05-19_at_10.07.49_AM.png",src:n(57083).Z})),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Add more entries to your waitlist and then click the play button to run your\ncron. You should see an email in your inbox.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"iftttalerts/Screen_Shot_2020-05-19_at_10.08.04_AM.png",src:n(54777).Z})),(0,o.kt)("p",null,"Let's make another kind of alert - one that fires as soon as something happens.\nIn this case, when someone with a lot of Twitter followers joins your waitlist."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create another event in IFTTT and give it a different name.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"iftttalerts/Screen_Shot_2020-05-19_at_10.09.18_AM.png",src:n(84925).Z})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Format your email.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"iftttalerts/Screen_Shot_2020-05-19_at_10.10.19_AM.png",src:n(39880).Z})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"In your ",(0,o.kt)("inlineCode",{parentName:"li"},"/submit")," handler, add some logic to check if someone's follower\ncount is over 5000 and fire an alert if it is.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"iftttalerts/Screen_Shot_2020-05-19_at_10.13.52_AM.png",src:n(96018).Z})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Submit an entry to your waitlist with over 5000 followers.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"iftttalerts/Screen_Shot_2020-05-19_at_10.14.10_AM.png",src:n(1838).Z})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Check your email - you should have an alert.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"iftttalerts/Screen_Shot_2020-05-19_at_10.15.56_AM.png",src:n(85468).Z})),(0,o.kt)("p",null,"Congratulations, you now have a waitlist you can review, and multiple alerts to\nlet you know when something important happens."),(0,o.kt)("p",null,"Some code for this tutorial was written with the help of\n",(0,o.kt)("a",{parentName:"p",href:"https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/"},"Tania Rascia's How to Connect to an API with Javascript")," -\nthank you!"))}u.isMDXComponent=!0},74631:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Screen_Shot_2020-05-19_at_10.01.07_AM-4425b96feb9c494683e220508c3b59f2.png"},91158:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Screen_Shot_2020-05-19_at_10.04.20_AM-53eff614c61ca4913843f597d2e047d6.png"},57083:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Screen_Shot_2020-05-19_at_10.07.49_AM-1c561353c28b5115c4ccdf9a0ae34488.png"},54777:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Screen_Shot_2020-05-19_at_10.08.04_AM-2e4a1df695b97b1a8fb93dc1f0f33804.png"},84925:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Screen_Shot_2020-05-19_at_10.09.18_AM-4ff7d493dc305bdff29ef9089f6bc35a.png"},39880:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Screen_Shot_2020-05-19_at_10.10.19_AM-4559b79d877512cb2aaed0e31d7dfe84.png"},96018:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Screen_Shot_2020-05-19_at_10.13.52_AM-3b1c0f41e8aa2e96553a604ce4639c6f.png"},1838:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Screen_Shot_2020-05-19_at_10.14.10_AM-ea77e12bd0d6c376e83cf9e894edefc9.png"},85468:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Screen_Shot_2020-05-19_at_10.15.56_AM-f1dab3ac4a97b624161c0f7cf05e22c5.png"},683:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Screen_Shot_2020-05-19_at_9.19.01_AM-45c0b0b76080cfeba2fa31f079e3bf1e.png"},90253:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Screen_Shot_2020-05-19_at_9.19.18_AM-25f76cfd32e81dca7020f73a0f60befe.png"},33959:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Screen_Shot_2020-05-19_at_9.19.31_AM-b406c5ba92207ab5be4dfd6e859ef28a.png"},28906:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Screen_Shot_2020-05-19_at_9.19.50_AM-521c91751dedcca6560c4b38fa65225e.png"},44954:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Screen_Shot_2020-05-19_at_9.20.55_AM-aac088d5409a0bf45358be3367b76873.png"},51151:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Screen_Shot_2020-05-19_at_9.21.33_AM-f2448bcfec0909a8ce494259a88c2ef6.png"},77686:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Screen_Shot_2020-05-19_at_9.22.37_AM-4067d78af7eae57c0fb17cae98c1a5c7.png"},56693:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Screen_Shot_2020-05-19_at_9.22.52_AM-73fb6122651905ac4b36d55e6113f5a9.png"},97751:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Screen_Shot_2020-05-19_at_9.24.45_AM-901c5d5ad4f237bc94e4c29dcf110c20.png"},90285:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Screen_Shot_2020-05-19_at_9.25.20_AM-9eb4163328abe300a2835e04c38d5460.png"},73276:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Screen_Shot_2020-05-19_at_9.25.30_AM-2360be8885660768b113999a562c0990.png"},16453:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Screen_Shot_2020-05-19_at_9.26.29_AM-28426b5ba704dd3d89a15ded49260589.png"},21105:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Screen_Shot_2020-05-19_at_9.31.50_AM-1bf0a9ddd50a3b0ddfadd16244649a70.png"},57343:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Screen_Shot_2020-05-19_at_9.31.59_AM-8023aee688c6a304e1b673eabde47fde.png"},6534:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Screen_Shot_2020-05-19_at_9.33.32_AM-eb89363542ce2638a0f1b16ef764b43a.png"},94310:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Screen_Shot_2020-05-19_at_9.34.21_AM-94be8572c02452e96a4407fb4b190e9d.png"},69618:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Screen_Shot_2020-05-19_at_9.35.57_AM-16213e26292f443f1b2992e736798585.png"},62066:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Screen_Shot_2020-05-19_at_9.59.30_AM-6c53ef68e45ed5ad5efb99ade0f69b90.png"},40188:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Screen_Shot_2020-05-19_at_9.59.47_AM-227df960ed9662cadb27a6383c85b007.png"},27270:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Screen_Shot_2020-05-19_at_9.59.59_AM-374f4fe05f14f4f327a0825b7f7ec103.png"},95454:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Screen_Shot_2020-05-21_at_1.27.08_PM-30ce119a0649c7ba14deb02b856b709d.png"}}]);