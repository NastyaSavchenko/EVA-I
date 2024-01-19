import{A as i,s as e,j as n}from"./index-d1972e5b.js";const a=i`
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 36px;
    line-height: 1.55;
  }
`,s=i`
  @media (min-width: 1024px) and (max-width: 1440px) {
    font-size: 36px;
    line-height: 1.55;
  }
`,p=i`
  @media (min-width: 1440px) and (max-width: 1920px) {
    font-size: 40px;
    line-height: 2;
  }
`,r=i`
  @media (min-width: 1920px) {
    font-size: 40px;
    line-height: 2;
  }
`,o=e.h2`
  text-align: center;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.25;
  ${a}
  ${s}
  ${p}
  ${r}

  background-image: ${t=>t.$type==="Pricing & Plans"&&"var(--primary-gradient, linear-gradient(90deg, #ED3984 0%, #ED3984 1.56%, #7452C8 100%))"};
  -webkit-background-clip: ${t=>t.$type==="Pricing & Plans"&&"text"};
  background-clip: ${t=>t.$type==="Pricing & Plans"&&"text"};
  color: ${t=>t.$type==="Pricing & Plans"&&"transparent"};
`,x=({title:t})=>n.jsx(o,{$type:t,children:t});export{x as S};
