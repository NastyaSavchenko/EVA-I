import{s as n,W as a,j as i,F as t,M as o}from"./index-d1972e5b.js";import{S as s}from"./SectionTitle-c39f0279.js";const e=n.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-top: 40px;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    margin-top: 40px;
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    margin-top: 40px;
  }

  @media (min-width: 1920px) {
    margin-top: 40px;
  }
`,d=a`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,r=n.div`
  background: var(--special-background);
  background-size: 200% 200%;
  animation: ${d} 5s ease infinite;
`,m=()=>i.jsx(r,{children:i.jsx("section",{id:"specialBackground",children:i.jsxs("div",{className:"container",children:[i.jsx(s,{title:i.jsx(t,{id:"tryBot_main_title"})}),i.jsx(e,{children:i.jsx(o,{title:i.jsx(t,{id:"tryForFree_button"})})})]})})});export{m as T};
