import{u as c,_}from"./ProjectCard.aaf7eb0e.js";import{n as l,q as u,c as s,F as m,s as p,u as i,o as t,v as d,x as f}from"./entry.aa0f7db4.js";const j={class:"home-all-cards"},v=l({__name:"webdesign",async setup(h){let e,n;const{data:o}=([e,n]=u(()=>c("./projects.json",()=>$fetch("./projects.json"),{lazy:!0,server:!1})),e=await e,n(),e);return(x,y)=>{const a=_;return t(),s("div",j,[(t(!0),s(m,null,p(i(o),r=>(t(),s("div",null,[r.categ.includes("Web Design")?(t(),d(a,{key:0,project:r},null,8,["project"])):f("",!0)]))),256))])}}});export{v as default};
