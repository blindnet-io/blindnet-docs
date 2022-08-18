"use strict";(self.webpackChunkblindnet_dev=self.webpackChunkblindnet_dev||[]).push([[1583],{6303:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return h}});var n=a(3117),i=a(102),r=a(7294),o=a(3905),s=a(7273);s.Z.initialize({startOnLoad:!0});var l=function(e){var t=e.chart;return(0,r.useEffect)((function(){s.Z.contentLoaded()}),[]),r.createElement("div",{className:"mermaid"},t)},c=["components"],p={title:"High-level Component Architecture",sidebar_position:4,tags:["high-level"]},m=void 0,u={unversionedId:"references/high-level-architecture",id:"references/high-level-architecture",title:"High-level Component Architecture",description:"| Status        | NORMATIVE DRAFT                                                                                                                      |",source:"@site/docs/08-references/04-high-level-architecture.mdx",sourceDirName:"08-references",slug:"/references/high-level-architecture",permalink:"/docs/references/high-level-architecture",draft:!1,editUrl:"https://github.com/blindnet-io/blindnet.dev/edit/main/docs/08-references/04-high-level-architecture.mdx",tags:[{label:"high-level",permalink:"/docs/tags/high-level"}],version:"current",sidebarPosition:4,frontMatter:{title:"High-level Component Architecture",sidebar_position:4,tags:["high-level"]},sidebar:"tutorialSidebar",previous:{title:"High-level Concept Model",permalink:"/docs/references/high-level-conceptualization"},next:{title:"Privacy Request Interchange Vocabulary",permalink:"/docs/references/PRIV"}},d={},h=[{value:"Objective",id:"objective",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Terminology",id:"terminology",level:2},{value:"Overview of the Context",id:"overview-of-the-context",level:3},{value:"Key Functions",id:"key-functions",level:3},{value:"Proposal - Components",id:"proposal---components",level:2},{value:"Capture Component",id:"capture-component",level:3},{value:"Encryption and Access Management Engine",id:"encryption-and-access-management-engine",level:3},{value:"Privacy Computation Engine",id:"privacy-computation-engine",level:3},{value:"Privacy Compiler",id:"privacy-compiler",level:4},{value:"Customization API",id:"customization-api",level:4},{value:"Privacy Request Manager",id:"privacy-request-manager",level:3},{value:"Privacy Request Capture Interface",id:"privacy-request-capture-interface",level:4},{value:"Data Consumer Interface",id:"data-consumer-interface",level:4},{value:"Schemas",id:"schemas",level:3},{value:"Storage Component",id:"storage-component",level:3},{value:"Other Requirements",id:"other-requirements",level:2},{value:"Bridge and Interoperability",id:"bridge-and-interoperability",level:3},{value:"Separation of Form and Function",id:"separation-of-form-and-function",level:3},{value:"Different Privacy Request Response Scenarios",id:"different-privacy-request-response-scenarios",level:3},{value:"Scenario 1 - Nested Responses",id:"scenario-1---nested-responses",level:4},{value:"Scenario 2 - Direct Responses",id:"scenario-2---direct-responses",level:4},{value:"Related Documents",id:"related-documents",level:2},{value:"Normative References",id:"normative-references",level:3},{value:"Informative References",id:"informative-references",level:3}],f={toc:h};function k(e){var t=e.components,a=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Status"),(0,o.kt)("th",{parentName:"tr",align:"left"},"NORMATIVE DRAFT"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"PR #")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/blindnet-io/product-management/pull/596"},"596"),", ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/blindnet-io/product-management/pull/694"},"694"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"Author(s)")),(0,o.kt)("td",{parentName:"tr",align:"left"},"milstan (",(0,o.kt)("a",{parentName:"td",href:"mailto:milstan@blindnet.io"},"milstan@blindnet.io"),")")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"Updated")),(0,o.kt)("td",{parentName:"tr",align:"left"},"2022-06-14")))),(0,o.kt)("h2",{id:"objective"},"Objective"),(0,o.kt)("p",null,"This document is about:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the context in which ",(0,o.kt)("a",{parentName:"li",href:"./lexicon#blindnet-devkit"},"blindnet devkit")," has to operate, and"),(0,o.kt)("li",{parentName:"ul"},"the structure of components of ",(0,o.kt)("a",{parentName:"li",href:"./lexicon#blindnet-devkit"},"blindnet devkit")," (in relation to that context).")),(0,o.kt)("p",null,"This document complements the ",(0,o.kt)("a",{parentName:"p",href:"./high-level-conceptualization/"},"High Level Conceptualization"),".\nIts goal is to propose the optimal component structure of the product."),(0,o.kt)("h2",{id:"motivation"},"Motivation"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"./high-level-conceptualization/"},"High Level Conceptualization")," is insufficient for understanding of the context of use. We need more clarity about the data capture lifecycle and the parties involved."),(0,o.kt)("p",null,"Also, having the right structure of components is very important for several reasons, including for:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"client ",(0,o.kt)("a",{parentName:"li",href:"./lexicon#system"},"Systems")," to be able to use only a part of ",(0,o.kt)("a",{parentName:"li",href:"./lexicon#blindnet-devkit"},"blindnet devkit"),","),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./lexicon#blindnet-devkit"},"blindnet devkit")," to be interoperable with 3rd party solutions (that cover a sub-scope of our scope or that cover requirements adjacent to our scope),"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./lexicon#blindnet-devkit"},"blindnet devkit")," to be able to evolve in certain aspects with as little as possible impact on its functioning in other aspects.")),(0,o.kt)("h2",{id:"terminology"},"Terminology"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in ',(0,o.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc2119"},"RFC 2119")),(0,o.kt)("li",{parentName:"ul"},'The word "CAN" denotes ability of someone or something, and is interpreted as "MUST be able to"'),(0,o.kt)("li",{parentName:"ul"},"All terms defined in ",(0,o.kt)("a",{parentName:"li",href:"./lexicon"},"RFC-Lexicon-2")," are to be interpreted as described there"),(0,o.kt)("li",{parentName:"ul"},"Any additional precision about the terms defined in ",(0,o.kt)("a",{parentName:"li",href:"./lexicon"},"RFC-Lexicon-2"),", as well as additional terms such as Consent and Legal Base, provided in ",(0,o.kt)("a",{parentName:"li",href:"./high-level-conceptualization/"},"High Level Conceptualization")," is to be considered normative")),(0,o.kt)("h3",{id:"overview-of-the-context"},"Overview of the Context"),(0,o.kt)("h3",{id:"key-functions"},"Key Functions"),(0,o.kt)("p",null,"The system supports secure capture of data and management of Data Subjects' rights throughout the data lifecycle."),(0,o.kt)("img",{width:"1400",alt:"HIGH-LEVEL ARCHITECTURE",src:"/img/high-level-architecture/hla.png"}),(0,o.kt)("p",null,"As such it needs to support the following functions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Data Capture"),(0,o.kt)("li",{parentName:"ul"},"Encryption and Access"),(0,o.kt)("li",{parentName:"ul"},"Storage"),(0,o.kt)("li",{parentName:"ul"},"Transfer"),(0,o.kt)("li",{parentName:"ul"},"Data Subject Rights Management")),(0,o.kt)("h2",{id:"proposal---components"},"Proposal - Components"),(0,o.kt)("p",null,"All components are presented in their roles in the following, more detailed image:"),(0,o.kt)("img",{width:"1400",alt:"HIGH-LEVEL ARCHITECTURE DETAIL",src:"/img/high-level-architecture/HLA-detail.png"}),(0,o.kt)("h3",{id:"capture-component"},"Capture Component"),(0,o.kt)("p",null,"The Capture Component is the entry point of the product. It is responsible for putting in motion ",(0,o.kt)("a",{parentName:"p",href:"./high-level-conceptualization#the-main-concept---data-capture"},"Data Captures")," in a way that reinforces privacy by ensuring confidentiality and control."),(0,o.kt)("p",null,"It is responsible for generating Data Capture metadata, including ",(0,o.kt)("a",{parentName:"p",href:"./high-level-conceptualization#data-capture--consent"},"Consent"),". When configured so, it operates alongside ",(0,o.kt)("a",{parentName:"p",href:"#encryption-and-access-management-engine"},"Encryption and Access Management Engine")," tasked with ensuring confidentiality."),(0,o.kt)("p",null,"Data MAY be captured from the ",(0,o.kt)("a",{parentName:"p",href:"./lexicon#data-subject"},"Data Subject")," themself, or from someone else, a ",(0,o.kt)("a",{parentName:"p",href:"./lexicon#submitter"},"Submitter"),".\nThe roles of Data Subject, ",(0,o.kt)("a",{parentName:"p",href:"./lexicon#submitter"},"Submitter"),", ",(0,o.kt)("a",{parentName:"p",href:"./lexicon#data-consumer"},"Data Consumer")," and ",(0,o.kt)("a",{parentName:"p",href:"./lexicon#dpo"},"DPO")," are not exclusive. The same person CAN be in all roles."),(0,o.kt)("h3",{id:"encryption-and-access-management-engine"},"Encryption and Access Management Engine"),(0,o.kt)("p",null,"The Encryption and Access Management is composed of SDKs and APIs allowing to encrypt and decrypt the data in the context of ",(0,o.kt)("a",{parentName:"p",href:"./high-level-conceptualization#the-main-concept---data-capture"},"Data Captures"),"."),(0,o.kt)("p",null,"This component CAN work with external user identity management solutions, as well as external encryption tools.\nThe component is responsible to allow client ",(0,o.kt)("a",{parentName:"p",href:"./lexicon#system"},"Systems")," and user-facing components to define and modify the intended ",(0,o.kt)("a",{parentName:"p",href:"./lexicon#data-consumer"},"Data Consumers")," of a particular Data Capture.\nThis component also provides functions allowing to support Data Consumers in situations of lost access."),(0,o.kt)("p",null,"The component MAY accomplish those responsibilities through coordination with user identity management and encryption tools (external or not)."),(0,o.kt)("h3",{id:"privacy-computation-engine"},"Privacy Computation Engine"),(0,o.kt)("p",null,"Privacy Computation Engine is a component that client ",(0,o.kt)("a",{parentName:"p",href:"./lexicon#system"},"Systems")," CAN run in order to interpret their rights to hold and treat a particular ",(0,o.kt)("a",{parentName:"p",href:"./high-level-conceptualization#the-main-concept---data-capture"},"Data Capture")," at a particular point of time.\nThe engine CAN also calculate a response to ",(0,o.kt)("a",{parentName:"p",href:"./lexicon#data-subject"},"Data Subjects'")," ",(0,o.kt)("a",{parentName:"p",href:"./lexicon#privacy-request"},"Privacy Requests"),"."),(0,o.kt)("p",null,"A Privacy Computation Engine component is composed of three elements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a ",(0,o.kt)("a",{parentName:"li",href:"#privacy-compiler"},"Privacy Compiler")),(0,o.kt)("li",{parentName:"ul"},"a ",(0,o.kt)("a",{parentName:"li",href:"#customization-api"},"Customization API"))),(0,o.kt)("h4",{id:"privacy-compiler"},"Privacy Compiler"),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Privacy Compiler"))," computes one or more actions (and to them association motivations/reasons/explanations) that need to be performed by a ",(0,o.kt)("a",{parentName:"p",href:"./lexicon#system"},"System")," in order to respect ",(0,o.kt)("a",{parentName:"p",href:"./lexicon#data-subject"},"Data Subjects'")," data rights.\nSuch actions include (not limited to): data deletion, acceptance/denial of ",(0,o.kt)("a",{parentName:"p",href:"./lexicon#privacy-request"},"Privacy Requests"),", and transmission of Privacy Requests to another System."),(0,o.kt)("p",null,"To compute the appropriate actions, this component CAN register and take into account:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Data Capture metadata including ",(0,o.kt)("a",{parentName:"li",href:"./high-level-conceptualization#data-capture--consent"},"Consents"),";"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./high-level-conceptualization#form-follows-function"},"Settings")," of a particular system (e.g. storage location, mandatory duration of data keeping, ",(0,o.kt)("a",{parentName:"li",href:"./high-level-conceptualization#data-capture--legal-base"},"Legal Bases")," etc.);"),(0,o.kt)("li",{parentName:"ul"},"History of transmissions to other Systems;"),(0,o.kt)("li",{parentName:"ul"},"Privacy Requests;"),(0,o.kt)("li",{parentName:"ul"},"Human input (validation, user ID confirmation, etc.) in response to Privacy Requests.")),(0,o.kt)("h4",{id:"customization-api"},"Customization API"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Customization API"))," allows client ",(0,o.kt)("a",{parentName:"p",href:"./lexicon#system"},"Systems")," and end-user-facing components to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"set and modify system-specific ",(0,o.kt)("a",{parentName:"li",href:"./high-level-conceptualization#form-follows-function"},"Settings")," related to data rights and compliance (e.g. storage location, mandatory duration of data retention, legal bases of processing etc.)"),(0,o.kt)("li",{parentName:"ul"},"register and keep track of system-to-system transfers of ",(0,o.kt)("a",{parentName:"li",href:"./high-level-conceptualization#the-main-concept---data-capture"},"Data Captures")," and noteworthy operations performed on data")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"NB"),". The system-specific Settings CAN make the output of two different Privacy Computation Engines to the same Privacy Request fundamentally different."),(0,o.kt)("p",{parentName:"blockquote"},"For example, if System A has transmitted a Data Capture to System B, and Systems and A and B have different Legal Bases for keeping data, when the Data Subject makes a DELETE request, the output of one system's Privacy Computation Engine might be to approve the DELETE request and of the other to deny it.")),(0,o.kt)("p",null,"This engine works in a way inspired by ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Digital_rights_management"},"Digital Rights Management"),"."),(0,o.kt)("h3",{id:"privacy-request-manager"},"Privacy Request Manager"),(0,o.kt)("p",null,"Privacy Request Manager is a component allowing different kinds of Users to interact around Privacy Requests. It consists of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a ",(0,o.kt)("a",{parentName:"li",href:"#privacy-request-capture-interface"},"Privacy Request Capture Interface")),(0,o.kt)("li",{parentName:"ul"},"a ",(0,o.kt)("a",{parentName:"li",href:"#data-consumer-interface"},"Data Consumer Interface"))),(0,o.kt)("h4",{id:"privacy-request-capture-interface"},"Privacy Request Capture Interface"),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Privacy Request Capture Interface"))," is a standardized end-user interface that ",(0,o.kt)("a",{parentName:"p",href:"./lexicon#system"},"Systems")," CAN (optionally) run to capture ",(0,o.kt)("a",{parentName:"p",href:"./lexicon#privacy-request"},"Privacy Requests")," from ",(0,o.kt)("a",{parentName:"p",href:"./lexicon#data-subject"},"Data Subjects"),".\nA global Privacy Request Capture Interface CAN be hosted on an easy-to-remember URL to capture Privacy Requests in a standardized format (",(0,o.kt)("a",{parentName:"p",href:"#schemas"},"Schema"),") on behalf of other Systems."),(0,o.kt)("h4",{id:"data-consumer-interface"},"Data Consumer Interface"),(0,o.kt)("p",null,"The Data Consumer Interface component allows ",(0,o.kt)("a",{parentName:"p",href:"./high-level-conceptualization#submitter--data-consumer--dpo"},"Data Consumers (in different roles, including system administrators and DPOs)")," to interact with the components of the system.\nIt allows the following functions (that CAN be used separately and SHOULD correspond to separate subcomponents):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"VIEW_AND_MANAGE"),": Data display for the eyes of authorized, authenticated Data Consumers, ",(0,o.kt)("a",{parentName:"li",href:"./high-level-conceptualization#data-capture---states"},"acceptance/validation of Data Captures"),", and data deletion/modification;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"CONFIGURE"),": Input of parameters related to data rights management, necessary for the operation of the Privacy Computation Engine (e.g. storage location, mandatory duration of data keeping, ",(0,o.kt)("a",{parentName:"li",href:"./high-level-conceptualization#data-capture--legal-base"},"Legal Bases")," etc.);"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"COMPLY"),": Input related to processing (acceptance, denial) of ",(0,o.kt)("a",{parentName:"li",href:"./lexicon#privacy-request"},"Privacy Requests"),", review of past Privacy Requests and obtaining proof of past Privacy Requests responses.")),(0,o.kt)("h3",{id:"schemas"},"Schemas"),(0,o.kt)("p",null,"For the ",(0,o.kt)("a",{parentName:"p",href:"./lexicon#system"},"System")," to support interoperability with other Systems and solutions, schemas SHOULD be made (and data export/import implemented using them) for represent the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./lexicon#privacy-request"},"Privacy Requests")," made by users and allow their transfer from System to System and enforcement of ",(0,o.kt)("a",{parentName:"li",href:"./lexicon#data-subject"},"Data Subjects'")," rights across Systems holding their data."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./high-level-conceptualization#the-main-concept---data-capture"},"Data Captures")," and allow transfer of encrypted captured data across systems while maintaining the integrity of data and its intended usage by intended ",(0,o.kt)("a",{parentName:"li",href:"./lexicon#data-consumer"},"Data Consumers")),(0,o.kt)("li",{parentName:"ul"},"Metadata about Data Captures including ",(0,o.kt)("a",{parentName:"li",href:"./high-level-conceptualization#data-capture--consent"},"Consents"),", Data Subjects, etc.)")),(0,o.kt)("h3",{id:"storage-component"},"Storage Component"),(0,o.kt)("p",null,"The Storage Component allows client ",(0,o.kt)("a",{parentName:"p",href:"./lexicon#system"},"Systems")," to store the ",(0,o.kt)("a",{parentName:"p",href:"./high-level-conceptualization#the-main-concept---data-capture"},"Data Captures"),".\nIt CAN interface with Systems that don't have their own storage but integrate the whole confidential data capturing as a fully external workflow, only integrated at the front-end level with their website or app."),(0,o.kt)("p",null,"The Storage Component CAN be configured to automatically interpret and execute data deletions and modifications according to the output of the ",(0,o.kt)("a",{parentName:"p",href:"#privacy-computation-engine"},"Privacy Computation Engine"),"."),(0,o.kt)("h2",{id:"other-requirements"},"Other Requirements"),(0,o.kt)("h3",{id:"bridge-and-interoperability"},"Bridge and Interoperability"),(0,o.kt)("p",null,"The components of the system SHOULD be made in a way that favors interoperability \u2014 i.e. components CAN easily interoperate with software made in another project for the same purpose."),(0,o.kt)("p",null,"This principle is already explained in the example of ",(0,o.kt)("a",{parentName:"p",href:"./high-level-conceptualization#confidentiality--control-bridge"},"confidentiality and control interoperability"),".\nAppropriate abstractions SHOULD be designed on top of key components for (at least, not limited to) user identity, access management, encryption, Data Rights Management, storage, and Privacy Request capture.\nThese abstractions SHOULD be inspired by the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Bridge_pattern"},"Bridge Pattern"),"."),(0,o.kt)("p",null,"This interoperability SHOULD support the following (extreme) example scenarios:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A System that uses Keycloak for user identity management, CAN use our Data Capture component in combination with 3rd party Encryption library. The System CAN instantiate and use our Privacy Computation Engine, and implement their own Storage able to automatically interpret and enforce actions resulting as output of the DPrivacy Computation Engine (automatic deletion and modification).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A System that is essentially a wordpress website, CAN embed the Capture Component in a wordpress webform, use the Storage Component, the Data Consumer Interface (as separate from the wordpress website), use Privacy Computation Engine and embed the Privacy Request Capture Interface in the wordpress website respecting its look and feel.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A System that has its own user identity management, uses 3rd party e2ee library, has its own storage and interfaces for data view, CAN instantiate the Privacy Computation Engine and use only the parts of the Data Consumer Interface related to Privacy Request parametrization and approval."))),(0,o.kt)("h3",{id:"separation-of-form-and-function"},"Separation of Form and Function"),(0,o.kt)("p",null,"The components of ",(0,o.kt)("a",{parentName:"p",href:"./lexicon#blindnet-devkit"},"blindnet devkit")," MUST be made in such a way that client ",(0,o.kt)("a",{parentName:"p",href:"./lexicon#system"},"Systems")," CAN use only the functional part and implement its own interfaces or otherwise achieve its own desired look and feel and UX."),(0,o.kt)("h3",{id:"different-privacy-request-response-scenarios"},"Different Privacy Request Response Scenarios"),(0,o.kt)("p",null,"Thanks to the ",(0,o.kt)("em",{parentName:"p"},"Privacy Computation Engine")," the system allows to automatically (or semi-automatically) process Privacy Requests, and do so in a distributed context of several Systems sharing and processing Data Subject's data."),(0,o.kt)("p",null,"When ",(0,o.kt)("em",{parentName:"p"},"Privacy Requests")," are transmitted from one System to another, there are several scenarios for responding to the Data Subject."),(0,o.kt)("p",null,"The design of ",(0,o.kt)("a",{parentName:"p",href:"./lexicon#blindnet-devkit"},"blindnet devkit")," MUST at least support the following scenarios:"),(0,o.kt)("h4",{id:"scenario-1---nested-responses"},"Scenario 1 - Nested Responses"),(0,o.kt)("p",null,"In this scenario, one System receives a Privacy Request from the Data Subject, and transmits it to other Systems. Those Systems calculate their own responses to the Privacy Request, and they send their responses to the System from whom they have received the Privacy Request. This System then replies to the Data Subject."),(0,o.kt)(l,{chart:"\n    sequenceDiagram;\n        actor subject as Data Subject;\n        participant systemA as System A;\n        participant systemB as System B;\n        subject->>systemA: Privacy Request;\n        systemA->>systemB: Privacy Request;\n        systemA->>systemA: calculates Privacy Request Response A;\n        compilerB->>systemB: Privacy Request Response 1;\n        systemB->>systemA: Privacy Request Response B;\n        systemA->>subject: Privacy Request Response A, Privacy Request Response B;\n",mdxType:"Mermaid"}),(0,o.kt)("p",null,"This scenario is adapted to Privacy Request Requests that do not involve access to the data, especially when not all Systems have the Data Subject's contact information (and MAY want to remain blind for it). For this scenario to work, Systems must expose functions for receiving the responses from other Systems."),(0,o.kt)("h4",{id:"scenario-2---direct-responses"},"Scenario 2 - Direct Responses"),(0,o.kt)("p",null,"In this scenario, one System receives a Privacy Request from the Data Subject, and transmits it to other Systems. Those Systems calculate their own responses to the Privacy Request, and they send their responses directly to the Data Subject."),(0,o.kt)(l,{chart:"\n    sequenceDiagram;\n        actor subject as Data Subject;\n        participant systemA as System A;\n        participant systemB as System B;\n        subject->>systemA: Privacy Request;\n        systemA->>systemB: Privacy Request;\n        systemA->>subject: Privacy Request Response A;\n        systemB->>subject: Privacy Request Response B;\n",mdxType:"Mermaid"}),(0,o.kt)("p",null,"This scenario is adapted to Privacy Requests where revealing of the response to other Systems (instead of sending it directly to the Data Subject) might further compromise the Data Subject's privacy OR when the system having collected the Privacy Request from the Data Subject is a server-less system (unable to receive responses from other systems). For this scenario to work, it might be necessary, if not already the case, to share Data Subject's contact data among the corresponding Systems."),(0,o.kt)("h2",{id:"related-documents"},"Related Documents"),(0,o.kt)("h3",{id:"normative-references"},"Normative References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./high-level-conceptualization/"},"High Level Conceptualization")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./lexicon"},"RFC-Lexicon-2"))),(0,o.kt)("h3",{id:"informative-references"},"Informative References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Digital_rights_management"},"Digital Rights Management")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Bridge_pattern"},"Bridge Pattern"))))}k.isMDXComponent=!0}}]);