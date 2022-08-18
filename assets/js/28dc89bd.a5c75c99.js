"use strict";(self.webpackChunkblindnet_dev=self.webpackChunkblindnet_dev||[]).push([[7072],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return y}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),y=r,b=u["".concat(s,".").concat(y)]||u[y]||d[y]||o;return n?i.createElement(b,a(a({ref:t},c),{},{components:n})):i.createElement(b,a({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},80:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var i=n(3117),r=n(102),o=(n(7294),n(3905)),a=["components"],l={sidebar_position:2,tags:["how-it-works"]},s="Introduction",p={unversionedId:"encryption/how_it_works/introduction",id:"encryption/how_it_works/introduction",title:"Introduction",description:"Blindnet components.",source:"@site/docs/07-encryption/04-how_it_works/01-introduction.mdx",sourceDirName:"07-encryption/04-how_it_works",slug:"/encryption/how_it_works/introduction",permalink:"/docs/encryption/how_it_works/introduction",draft:!1,editUrl:"https://github.com/blindnet-io/blindnet.dev/edit/main/docs/07-encryption/04-how_it_works/01-introduction.mdx",tags:[{label:"how-it-works",permalink:"/docs/tags/how-it-works"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,tags:["how-it-works"]},sidebar:"tutorialSidebar",previous:{title:"How It Works",permalink:"/docs/encryption/how_it_works/"},next:{title:"Security",permalink:"/docs/encryption/how_it_works/security"}},c={},d=[{value:"Blindnet in web applications",id:"blindnet-in-web-applications",level:2},{value:"Blindnet in mobile/desktop only applications",id:"blindnet-in-mobiledesktop-only-applications",level:2}],u={toc:d};function y(e){var t=e.components,l=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Blindnet components.",src:n(3856).Z,width:"727",height:"404"})),(0,o.kt)("p",{align:"center"},"components of blindnet devkit"),(0,o.kt)("h2",{id:"blindnet-in-web-applications"},"Blindnet in web applications"),(0,o.kt)("p",null,"To protect user data in your web application, blindnet provides an SDK for data encryption and decryption, and for managing encryption keys. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Blindnet in web and mixed applications.",src:n(5160).Z,width:"987",height:"383"})),(0,o.kt)("p",null,"Let\u2019s call our receiver Alice and our sender Bob. With blindnet, if Bob wants to send data (e.g., a text message or a file) to Alice, the process is as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Bob inputs the data (e.g. a file) into the web application's interface"),(0,o.kt)("li",{parentName:"ul"},"The web application will use blindnet devkit to encrypt the data"),(0,o.kt)("li",{parentName:"ul"},"Encrypted data should then be transferred and stored on your app's server"),(0,o.kt)("li",{parentName:"ul"},"When Alice requests the data (or immediately after the data was stored), your app delivers the encrypted data to her"),(0,o.kt)("li",{parentName:"ul"},"The web application on Alice's device will use blindnet devkit to decrypt the data"),(0,o.kt)("li",{parentName:"ul"},"Alice views the original data that Bob sent to her")),(0,o.kt)("p",null,"This workflow ensures that only Alice and Bob have access to the data. To be more precise, only Alice and Bob possess the encryption key used to encrypt the file.\nWhile stored and in transfer, the file is encrypted and neither blindnet nor the app\u2019s server are able to access it."),(0,o.kt)("p",null,"After the data is decrypted in Alice's web application, it can simply be saved on her device. The data stays encrypted on the app's server and Step 4 can be carried out multiple times."),(0,o.kt)("p",null,"In step 2. (The web application will use blindnet api to encrypt the message), blindnet api performs the following steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Generates an ephemeral encryption key and encrypts the data"),(0,o.kt)("li",{parentName:"ul"},"Obtains Alice's public key and verifies it belongs to her"),(0,o.kt)("li",{parentName:"ul"},"Encrypts the ephemeral encryption key and saves it to the blinenet server"),(0,o.kt)("li",{parentName:"ul"},"Returns the encrypted data")),(0,o.kt)("p",null,"In Step 4. (The web application on Alices's device will use blindnet api to decrypt the data), blindnet devkit performs the following steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Obtains the encrypted ephemeral key from blindnet\u2019s server"),(0,o.kt)("li",{parentName:"ul"},"Uses Alice's private key to decrypt they key"),(0,o.kt)("li",{parentName:"ul"},"Uses the decrypted key to decrypt the encrypted data"),(0,o.kt)("li",{parentName:"ul"},"Returns the original data")),(0,o.kt)("p",null,"Blindnet supports use cases in which data senders can be both registered or unregistered users of your application. Data exhange between two registered users works in a way similar to the one described above, with a difference that teh symmetric key for encrypting the data from Bob to Alice is always the same, and it is securely stored on blindnet servers after it has been previously encrypted with Bob's and Alice's public keys."),(0,o.kt)("h2",{id:"blindnet-in-mobiledesktop-only-applications"},"Blindnet in mobile/desktop only applications"),(0,o.kt)("p",null,"Coming soon..."))}y.isMDXComponent=!0},3856:function(e,t,n){t.Z=n.p+"assets/images/components-dfa0a9fe16381ff4ae858531cfba195f.svg"},5160:function(e,t,n){t.Z=n.p+"assets/images/web_enc_detail-8d861d02b9d0409eb12411ab23ca2b35.svg"}}]);