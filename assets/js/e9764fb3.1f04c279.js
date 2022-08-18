"use strict";(self.webpackChunkblindnet_dev=self.webpackChunkblindnet_dev||[]).push([[6740],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,i=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=u(r),d=c,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||i;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function d(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var i=r.length,o=new Array(i);o[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:c,o[1]=a;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2991:function(e,t,r){r.d(t,{Z:function(){return b}});var n=r(7294),c=r(6010),i=r(3438),o=r(9960),a=r(3919),l=r(5999),u="cardContainer_fWXF",s="cardTitle_rnsV",f="cardDescription_PWke";function p(e){var t=e.href,r=e.children;return n.createElement(o.Z,{href:t,className:(0,c.Z)("card padding--lg",u)},r)}function d(e){var t=e.href,r=e.icon,i=e.title,o=e.description;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,c.Z)("text--truncate",s),title:i},r," ",i),o&&n.createElement("p",{className:(0,c.Z)("text--truncate",f),title:o},o))}function m(e){var t=e.item,r=(0,i.Wl)(t);return r?n.createElement(d,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){var t,r=e.item,c=(0,a.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,i.xz)(null!=(t=r.docId)?t:void 0);return n.createElement(d,{href:r.href,icon:c,title:r.label,description:null==o?void 0:o.description})}function v(e){var t=e.item;switch(t.type){case"link":return n.createElement(y,{item:t});case"category":return n.createElement(m,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function b(e){var t=e.items,r=e.className;return n.createElement("section",{className:(0,c.Z)("row",r)},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,i.Wl)(e)}))}(t).map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(v,{key:t,item:e}))})))}},4014:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return u},metadata:function(){return f},toc:function(){return d}});var n=r(3117),c=r(102),i=(r(7294),r(3905)),o=r(2991),a=r(3438),l=["components"],u={},s="References",f={unversionedId:"references/index",id:"references/index",title:"References",description:"",source:"@site/docs/08-references/index.mdx",sourceDirName:"08-references",slug:"/references/",permalink:"/docs/references/",draft:!1,editUrl:"https://github.com/blindnet-io/blindnet.dev/edit/main/docs/08-references/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Glossary",permalink:"/docs/encryption/glossary"},next:{title:"Notions of Privacy",permalink:"/docs/references/notions-of-privacy"}},p={},d=[],m={toc:d};function y(e){var t=e.components,r=(0,c.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"references"},"References"),(0,i.kt)(o.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);