import{u as c,_}from"./ProjectCard.aaf7eb0e.js";import{n as l,q as u,c as s,F as p,s as m,u as d,o as t,v as i,x as f}from"./entry.aa0f7db4.js";const j={class:"home-all-cards"},C=l({__name:"pfa",async setup(h){let e,r;const{data:n}=([e,r]=u(()=>c("./projects.json",()=>$fetch("./projects.json"),{lazy:!0,server:!1})),e=await e,r(),e);return(x,y)=>{const o=_;return t(),s("div",j,[(t(!0),s(p,null,m(d(n),a=>(t(),s("div",null,[a.categ.includes("PFA")?(t(),i(o,{key:0,project:a},null,8,["project"])):f("",!0)]))),256))])}}});export{C as default};
