import{u as c,_}from"./ProjectCard.aaf7eb0e.js";import{n as i,q as l,c as a,F as u,s as m,u as p,o as t,v as d,x as f}from"./entry.aa0f7db4.js";const j={class:"home-all-cards"},k=i({__name:"ideationcreativite",async setup(v){let e,r;const{data:n}=([e,r]=l(()=>c("./projects.json",()=>$fetch("./projects.json"),{lazy:!0,server:!1})),e=await e,r(),e);return(h,x)=>{const o=_;return t(),a("div",j,[(t(!0),a(u,null,m(p(n),s=>(t(),a("div",null,[s.categ.includes("Ideation Creativite")?(t(),d(o,{key:0,project:s},null,8,["project"])):f("",!0)]))),256))])}}});export{k as default};