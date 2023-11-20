import{a as t,j as i,F as e,o as p,S as s,M as d}from"./index-96eabb60.js";import{n as x}from"./index.browser-7e542916.js";import{T as o}from"./TryBot-fc406521.js";const a=t.h4`
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 1.17;
  }
`,l=t.li`
  display: flex;
  align-items: center;
  padding: 8px 0px;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;

  color: var(--neutral-grey);

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 1.17;
  }
`,m=t.div`
  width: 32px;
  height: 32px;
  margin-right: 16px;
`,h=({benefits:n})=>i.jsxs(i.Fragment,{children:[n.plan==="plan_pro"&&i.jsx(a,{children:i.jsx(e,{id:"plans_pro_plus"})}),n.plan==="plan_premium"&&i.jsx(a,{children:i.jsx(e,{id:"plans_premium_plus"})}),n.benefits.map(r=>i.jsxs(l,{children:[i.jsx(m,{children:i.jsx(p,{style:{width:"32px",height:"32px"}})}),i.jsx(e,{id:r})]},x()))]}),c=t.p`
  text-align: center;
  font-size: 28px;
  line-height: 1.42;
  margin-bottom: 40px;
  margin-top: 32px;

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-bottom: 80px;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    margin-bottom: 80px;
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    margin-bottom: 80px;
  }

  @media (min-width: 1920px) {
    margin-bottom: 80px;
  }
`,g=t.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;

  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    flex-direction: row;
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    flex-direction: row;
  }

  @media (min-width: 1920px) {
    flex-direction: row;
  }
`,_=t.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  border: 1px solid transparent;
  border-radius: 12px;
  border-image: var(--primary-gradient);
  border-image-slice: 1;

  @media (min-width: 1024px) {
  width: 100%;
  max-width: 406px;
  }
`,f=t.div`
  padding-bottom: 24px;
  margin-bottom: 24px;
  width: 100%;

  border-bottom: 1px solid transparent;
  border-image: var(--primary-gradient);
  border-image-slice: 1;
`,w=t.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.33;

  margin-bottom: 8px;

  @media (min-width: 768px) {
    line-height: 1.25;
  }
`,j=t.span`
  font-size: 40px;
  font-weight: 600;
  line-height: 1.25;

  background: var(--primary-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 768px) and (max-width: 1024px) {
    line-height: 2;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    line-height: 2;
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    line-height: 2;
  }

  @media (min-width: 1920px) {
    line-height: 2;
  }
`,u=t.ul`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,b=t.div`
  margin-top: auto;
  display: flex;
  justify-content: center;
`,y=[{id:1,plan:"plan_starter",price:19,benefits:["plans_starter_1","plans_starter_2","plans_starter_3","plans_starter_4","plans_starter_5"]},{id:2,plan:"plan_pro",price:79,benefits:["plans_pro_1","plans_pro_2","plans_pro_3","plans_pro_4","plans_pro_5"]},{id:3,plan:"plan_premium",price:199,benefits:["plans_premium_1","plans_premium_2","plans_premium_3","plans_premium_4","plans_premium_5"]}],P=()=>i.jsx("section",{children:i.jsxs("div",{className:"container",children:[i.jsx(s,{title:i.jsx(e,{id:"pricing_main_title"})}),i.jsx(c,{children:i.jsx(e,{id:"pricing_main_subtitle"})}),i.jsx(g,{children:y.map(n=>i.jsxs(_,{tabIndex:0,children:[i.jsxs(f,{children:[i.jsx(w,{children:i.jsx(e,{id:n.plan})}),i.jsxs(j,{children:["$",n.price,"/",i.jsx(e,{id:"pricing_month"})]})]}),i.jsx(u,{children:i.jsx(h,{benefits:n})}),i.jsx(b,{children:i.jsx(d,{title:i.jsx(e,{id:"pricing_get_button"}),styles:"pay"})})]},n.id))})]})}),k=()=>i.jsxs("main",{children:[i.jsx(P,{}),i.jsx(o,{})]});export{k as default};
