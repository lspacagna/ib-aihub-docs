"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[64],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,k=c["".concat(u,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8368:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={title:"My Hub",sidebar_position:3},i="My Hub",l={unversionedId:"My Hub/index",id:"My Hub/index",title:"My Hub",description:"\u200b",source:"@site/docs/My Hub/index.md",sourceDirName:"My Hub",slug:"/My Hub/",permalink:"/ib-aihub-docs/build/My Hub/",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"My Hub",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Build",permalink:"/ib-aihub-docs/build/Build/"},next:{title:"Prebuilt Apps",permalink:"/ib-aihub-docs/build/Pre Built Apps/"}},u={},s=[{value:"Custom apps",id:"custom-apps",level:2},{value:"Usage and billing",id:"usage-and-billing",level:2},{value:"Connect external storage",id:"connect-external-storage",level:2},{value:"Connecting an AWS S3 bucket",id:"connecting-an-aws-s3-bucket",level:3},{value:"Prerequisites",id:"prerequisites",level:4},{value:"Connect AWS S3 bucket",id:"connect-aws-s3-bucket",level:4},{value:"Connecting a Google Drive",id:"connecting-a-google-drive",level:3}],p={toc:s},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"my-hub"},"My Hub"),(0,r.kt)("p",null,"\u200b\nThe ",(0,r.kt)("strong",{parentName:"p"},"My Hub")," tab is where you can find your custom apps, track and purchase AI Hub consumption units, and connect and manage external storage, including AWS S3 buckets or Google Drive.\n\u200b"),(0,r.kt)("h2",{id:"custom-apps"},"Custom apps"),(0,r.kt)("p",null,"\u200b\nThe apps you've created with Build are listed in your ",(0,r.kt)("strong",{parentName:"p"},"My Hub")," tab. When you open any of your custom apps, you can upload and process files. You can also:\n\u200b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"View app details to see what document types the app processes, and what fields it extracts from each type or class."),(0,r.kt)("li",{parentName:"ul"},"Edit the app, adding or modifying any of the classes and fields in your app."),(0,r.kt)("li",{parentName:"ul"},"Delete the app. Deleting the app deletes the app and any files you have processed, but it does not delete the project you used to create the app. You can delete the project from Build.")),(0,r.kt)("h2",{id:"usage-and-billing"},"Usage and billing"),(0,r.kt)("p",null,"\u200b\nThe ",(0,r.kt)("strong",{parentName:"p"},"My Usage")," panel shows your current consumption unit balance, as well as how many total units you have used. You can also purchase more units by clicking ",(0,r.kt)("strong",{parentName:"p"},"Buy units"),".\n\u200b"),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"/Pricing%20Policy/"},"pricing page")," for complete details about consumption units and pricing.\n\u200b"),(0,r.kt)("h2",{id:"connect-external-storage"},"Connect external storage"),(0,r.kt)("p",null,"\u200b\nYou can connect an AWS S3 bucket or Google Drive to AI Hub, so that you can store and upload files from your own external storage.\n\u200b"),(0,r.kt)("h3",{id:"connecting-an-aws-s3-bucket"},"Connecting an AWS S3 bucket"),(0,r.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"\u200b\nTo connect an AWS S3 bucket, you'll need:\n\u200b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An access key with following permissions:\n\u200b",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"s3:DeleteObject")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"s3:DeleteObjectVersion")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"s3:GetObject")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"s3:GetObjectAcl")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"s3:GetObjectVersion")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"s3:PutObject")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"s3:PutObjectAcl")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"s3:PutObjectVersion")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"s3:ListBucket")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"s3:ListBucketMultipartUploads")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"s3:ListMultipartUploadParts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"s3:AbortMultipartUpload"),"\n\u200b"))),(0,r.kt)("li",{parentName:"ul"},"The following information about the S3 bucket. All information is required unless marked as optional. You can find this information in your S3 bucket settings:\n\u200b",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Access key ID"),(0,r.kt)("li",{parentName:"ul"},"Secret access key"),(0,r.kt)("li",{parentName:"ul"},"Bucket name"),(0,r.kt)("li",{parentName:"ul"},"AWS region"),(0,r.kt)("li",{parentName:"ul"},"Optional. Path to connect. To connect the bucket's root, leave path empty."),(0,r.kt)("li",{parentName:"ul"},"Optional. Server-side encryption eype.\n\u200b")))),(0,r.kt)("h4",{id:"connect-aws-s3-bucket"},"Connect AWS S3 bucket"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"+ Connect external storage"),"."),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"AWS S3 Bucket"),"."),(0,r.kt)("li",{parentName:"ol"},"Grant permissions: Ensure that you have granted the required permissions for the access key you are going to use. Click ",(0,r.kt)("strong",{parentName:"li"},"Next"),"."),(0,r.kt)("li",{parentName:"ol"},"Enter the information for the AWS S3 bucket you want to connect."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Connect"),".\n\u200b")),(0,r.kt)("p",null,"After connecting the S3 bucket, when you upload files to AI Hub, you have the option to browse your external storage. You can modify or delete your connected storage from the ",(0,r.kt)("strong",{parentName:"p"},"My Hub")," tab."),(0,r.kt)("h3",{id:"connecting-a-google-drive"},"Connecting a Google Drive"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"+ Connect external storage"),"."),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"Google Drive"),"."),(0,r.kt)("li",{parentName:"ol"},"Enter a name for your drive."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Connect"),"."),(0,r.kt)("li",{parentName:"ol"},"Select and sign in to the Google account you want to use."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Allow")," to grant Instabase the necessary permissions. To allow AI Hub to read from and export to your Drive, Google requires us to request the following permissions: See, edit, create, and delete.\n\u200b")),(0,r.kt)("p",null,"After connecting Google Drive, when you upload files to AI Hub, you have the option to browse your external storage. You can modify or delete your connected storage from the ",(0,r.kt)("strong",{parentName:"p"},"My Hub")," tab."))}m.isMDXComponent=!0}}]);