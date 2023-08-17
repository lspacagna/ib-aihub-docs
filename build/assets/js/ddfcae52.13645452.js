"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[526],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return a?n.createElement(h,s(s({ref:t},u),{},{components:a})):n.createElement(h,s({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8812:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={title:"Model Limitations",sidebar_position:5},s="Model Limitations",o={unversionedId:"Model Limitations/index",id:"Model Limitations/index",title:"Model Limitations",description:"Unlike ordinary software, large language models are massive neural networks. These networks learn from a broad range of data, rather than being programmed explicitly. People use language and images to describe the world and to express their beliefs, assumptions, attitudes, and values. As a result, publicly available text and image data typically used to train large-scale natural language processing models contain societal biases relating to race, gender, religion, age, and other groups of people, as well as other undesirable content. These societal biases are reflected in the distributions of words, phrases, and syntactic structures. Large-scale natural language models trained with such data can potentially behave in ways that are unfair, unreliable, or offensive, in turn causing harm. Some of the risks inherent to large language models are:",source:"@site/docs/Model Limitations/index.md",sourceDirName:"Model Limitations",slug:"/Model Limitations/",permalink:"/ib-aihub-docs/build/Model Limitations/",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Model Limitations",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Prebuilt Apps",permalink:"/ib-aihub-docs/build/Pre Built Apps/"},next:{title:"Pricing Policy",permalink:"/ib-aihub-docs/build/Pricing Policy/"}},l={},c=[],u={toc:c},d="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"model-limitations"},"Model Limitations"),(0,r.kt)("p",null,"Unlike ordinary software, large language models are massive neural networks. These networks learn from a broad range of data, rather than being programmed explicitly. People use language and images to describe the world and to express their beliefs, assumptions, attitudes, and values. As a result, publicly available text and image data typically used to train large-scale natural language processing models contain societal biases relating to race, gender, religion, age, and other groups of people, as well as other undesirable content. These societal biases are reflected in the distributions of words, phrases, and syntactic structures. Large-scale natural language models trained with such data can potentially behave in ways that are unfair, unreliable, or offensive, in turn causing harm. Some of the risks inherent to large language models are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Information reliability"),": Language model responses can fabricate content that may sound reasonable but is nonsensical or inaccurate with respect to external validation sources. Even when drawing responses from trusted source information, responses may misrepresent that content."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Allocation"),": These models can be used in ways that lead to unfair allocation of resources or opportunities. For example, automated resume screening systems can withhold employment opportunities from one gender if the systems are trained on resume data that reflects the existing gender imbalance in a particular industry. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Quality of service"),": The models are trained primarily on English text and images with English text descriptions, and as such, performance is lower on content in other languages. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Stereotyping"),': These models can reinforce stereotypes. For example, when translating "He is a nurse" and "She is a doctor" into a genderless language such as Turkish, and then translating the Turkish back into English, many machine translation systems yield the stereotypical (and incorrect) results of "She is a nurse" and "He is a doctor." ')),(0,r.kt)("p",null,"With this in mind, there are particular issues of fairness and responsibility to consider when using large language models:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Avoid scenarios where use or misuse of the system could result in significant physical or psychological injury to an individual. For example, scenarios that diagnose patients or prescribe medications have the potential to cause significant harm."),(0,r.kt)("li",{parentName:"ul"},"Avoid scenarios where use or misuse of the system could have a consequential impact on life opportunities or legal status. Examples include scenarios where the AI system could affect an individual's legal status, legal rights, or their access to credit, education, employment, healthcare, housing, insurance, social welfare benefits, services, opportunities, or the terms on which such access is provided."),(0,r.kt)("li",{parentName:"ul"},"Carefully consider use cases in high-stakes domains or industries: examples include, but are not limited to, healthcare, medicine, finance, or issues of law.")),(0,r.kt)("p",null,"In all of these scenarios, a level of human review by licensed professionals should be considered or required, depending on the facts and circumstances."))}p.isMDXComponent=!0}}]);