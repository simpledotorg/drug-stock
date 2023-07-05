import{d as F,o as l,c,a as s,t as g,r as x,F as m,_ as N,n as v,b as z,e as k,f as E,w as _,v as w,g as f,h as S,i as L,j as V,k as D,l as $}from"./index-c59e337b.js";async function j(){const t=await(await fetch("https://script.google.com/macros/s/AKfycbzhZvb85DvQf37xZopLurDFjzwlIdWMxkcPJN9yFUu2E7lga3c-7s-bu3EYHGsgJ4n7/exec")).json(),{"Facility name":r,Drug:i,formFields:o}=t.data,d=M(o);return{facilities:r,drugs:d,rawFormFields:o}}function M(u){const t=[];u.forEach(o=>{t.push(o.replace("b1","").replace("b2","").replace("b3","").replace("stock","").replace("expiry","").trim())});const r=t.filter(o=>o.includes("mg")),i=[...new Set(r)];return console.log(i),i}async function O(u){const t="https://script.google.com/macros/s/AKfycbzhZvb85DvQf37xZopLurDFjzwlIdWMxkcPJN9yFUu2E7lga3c-7s-bu3EYHGsgJ4n7/exec";try{console.log("sending data"),console.log(JSON.stringify(u));const r=await fetch(t,{method:"POST",body:JSON.stringify(u)});if(r.ok){const i=await r.json();console.log("Data sent successfully:",i)}else console.error("Error sending data:",r.status,r.statusText)}catch(r){console.error("Error sending data:",r)}}const U={class:"text-lg mt-3"},T={class:"flex gap-6"},A={class:"w-1/2"},J=s("label",{class:"block text-sm text-neutral-500",for:""},"Stock on hand",-1),P={class:"w-1/2"},I=s("label",{class:"block text-sm text-neutral-500",for:""},"Expiry date",-1),Z=F({__name:"batch",props:{batchNumber:{}},setup(u){return(t,r)=>(l(),c(m,null,[s("p",U,"Batch "+g(t.batchNumber),1),s("div",T,[s("div",A,[x(t.$slots,"stock"),J]),s("div",P,[x(t.$slots,"expiry"),I])])],64))}}),Y={name:"loading",props:{color:{type:String,default:"#fff"},text:{type:Boolean,default:!1},size:{type:Number,default:18},padding:{type:Number,default:2}},computed:{bubbleSize(){if(this.size!==18){const u=`height: ${this.size}px;`,t=`width: ${this.size}px;`;return u+t}return""},bubblePadding(){return this.padding!==2?`margin: ${this.padding}px;`:""},bubbleColor(){return this.color!=="#fff"?`background-color: ${this.color};`:""},bubbleCSS(){return this.bubbleColor+this.bubbleSize+this.bubblePadding}}};const G={class:"spinner"},H={key:0,class:"text"};function K(u,t,r,i,o,d){return l(),c("div",null,[s("div",G,[s("div",{class:"bounce1",style:v(d.bubbleCSS)},null,4),s("div",{class:"bounce2",style:v(d.bubbleCSS)},null,4),s("div",{class:"bounce3",style:v(d.bubbleCSS)},null,4)]),r.text?(l(),c("p",H,"Loading")):z("",!0)])}const Q=N(Y,[["render",K],["__scopeId","data-v-a6b4b02d"]]),W={class:"w-full max-w-lg m-auto bg-white p-8 md:shadow-md md:rounded-md"},q=s("h1",{class:"text-3xl mb-6 font-extrabold"},"Drug stock form",-1),R={key:0},X=s("label",{class:"block text-xl font-medium mb-2",for:""},"Facility name",-1),ee=s("option",{value:"",disabled:"",selected:""},"Select facility",-1),te=["value"],se=s("label",{class:"block text-xl font-medium mb-2",for:""},"For end of month",-1),oe=["value"],ae={class:"border-t border-slate-100 py-6"},ne={class:"text-xl font-bold"},le=["onUpdate:modelValue"],re=["onUpdate:modelValue"],ce=["onClick"],ie={key:1},ue=s("p",{class:"uppercase text-sm font-medium mt-3 py-2 text-neutral-600"}," max three batches per medicine",-1),de=s("p",{class:"text-sm text-neutral-500 mt-2"},"If you have more than 3 batches then add any additional batch stocks to batch 3 using the same date",-1),be=[ue,de],he={key:1,class:"py-10"},pe=s("p",{class:"text-center uppercase text-sm text-slate-400 font-bold mt-5"},"loading",-1),_e=F({__name:"form",setup(u){const t=k({facilities:[],drugs:[],drugBatches:{}});E(async()=>{const a=await j();t.value.facilities=a.facilities,t.value.drugs=a.drugs,r(),console.log(a),o.value=d(a.rawFormFields),o.value.monthyear=y()[0]});function r(){const a={};t.value.drugs.forEach(n=>{a[n]=1}),t.value.drugBatches=a}function i(a,n,e){return`${a} b${n+1} ${e}`}const o=k({});function d(a){return a.reduce(function(n,e){return n[e]="",n},{})}function y(){for(var a=[],n=new Date,e=0;e<12;e++){var b=n.toLocaleString("default",{month:"short"}).toLowerCase(),h=n.getFullYear(),p=b+"-"+h;a.push(p),n.setMonth(n.getMonth()-1)}return a}function B(){if(console.log(new Date),console.log(o.value.facility),o.value.facility===""){console.log("no facility selected");return}const a={rowData:C(o.value)};console.log(a),O(a)}function C(a){return Object.values(a)}return(a,n)=>(l(),c("div",W,[q,t.value.facilities.length>0?(l(),c("form",R,[X,_(s("select",{name:"",id:"",class:"uppercase","onUpdate:modelValue":n[0]||(n[0]=e=>o.value.facility=e)},[ee,(l(!0),c(m,null,f(t.value.facilities,e=>(l(),c("option",{value:e},g(e),9,te))),256))],512),[[w,o.value.facility]]),se,_(s("select",{name:"",id:"",class:"uppercase","onUpdate:modelValue":n[1]||(n[1]=e=>o.value.monthyear=e)},[(l(!0),c(m,null,f(y(),(e,b)=>(l(),c("option",{key:b,value:e},g(e),9,oe))),128))],512),[[w,o.value.monthyear]]),(l(!0),c(m,null,f(t.value.drugs,e=>(l(),c("div",ae,[s("h2",ne,g(e),1),(l(!0),c(m,null,f(t.value.drugBatches[e],(b,h)=>(l(),V(Z,{batchNumber:b},{stock:D(()=>[_(s("input",{type:"number",class:"mt-2 mb-1","onUpdate:modelValue":p=>o.value[i(e,h,"stock")]=p},null,8,le),[[$,o.value[i(e,h,"stock")]]])]),expiry:D(()=>[_(s("input",{type:"date",class:"mt-2 mb-1","onUpdate:modelValue":p=>o.value[i(e,h,"expiry")]=p},null,8,re),[[$,o.value[i(e,h,"expiry")]]])]),_:2},1032,["batchNumber"]))),256)),t.value.drugBatches[e]<3?(l(),c("button",{key:0,onClick:S(b=>t.value.drugBatches[e]<3?t.value.drugBatches[e]+=1:void 0,["prevent"]),class:"uppercase text-sm font-medium mt-3 py-2 rounded-md text-[#0075EB]"}," + add batch ",8,ce)):(l(),c("div",ie,be))]))),256)),s("button",{class:"w-full p-3 shadow-lg border-b-2 border-blue-800 bg-blue-500 rounded-md text-lg uppercase text-white tracking-wider",onClick:n[2]||(n[2]=S(e=>B(),["prevent"]))}," submit drug stock ")])):(l(),c("div",he,[L(Q),pe]))]))}});export{_e as default};
