import{a as t,W as a,j as i,S as o,F as n,M as e}from"./index-96eabb60.js";const s=t.div`
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
`,r=t.div`
  background: var(--special-background);
  background-size: 200% 200%;
  animation: ${d} 5s ease infinite;
`,p=()=>i.jsx(r,{children:i.jsx("section",{id:"specialBackground",children:i.jsxs("div",{className:"container",children:[i.jsx(o,{title:i.jsx(n,{id:"tryBot_main_title"})}),i.jsx(s,{children:i.jsx(e,{title:i.jsx(n,{id:"tryForFree_button"})})})]})})});export{p as T};
