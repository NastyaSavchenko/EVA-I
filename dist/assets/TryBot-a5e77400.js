import{a as n,W as t,j as i,S as a,M as e}from"./index-a3cedf8d.js";const o=n.div`
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
`,r=t`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,d=n.div`
  background: var(--special-background);
  background-size: 200% 200%;
  animation: ${r} 5s ease infinite;
`,p=()=>i.jsx(d,{children:i.jsx("section",{id:"specialBackground",children:i.jsxs("div",{className:"container",children:[i.jsx(a,{title:"Ready to Experience the Future? Try for free today!"}),i.jsx(o,{children:i.jsx(e,{title:"Try for free"})})]})})});export{p as T};
