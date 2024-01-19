import{s as t,u as x,j as i,F as n,M as o}from"./index-d1972e5b.js";import{n as l}from"./index.browser-7e542916.js";import{A as m}from"./index.esm-43a27989.js";import{S as h}from"./SectionTitle-c39f0279.js";import{T as c}from"./TryBot-e5d192b8.js";t.h4`
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 1.17;
  }
`;const g=t.li`
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
`,j=t.div`
  width: 32px;
  height: 32px;
  margin-right: 16px;
`,s=t.span`
  font-weight: 900;
  color: var(--main-white);
`,_=({benefits:e})=>{const r=x().locale,d=e.benefits.map((a,p)=>p===0&&e.benefits.length>=6?r==="ukr-UA"?i.jsxs("div",{children:[a," ",i.jsx(s,{children:e.span})]}):i.jsxs("div",{children:["All ",i.jsx(s,{children:e.span})," ",a]}):a);return i.jsx(i.Fragment,{children:d.map(a=>i.jsxs(g,{children:[i.jsx(j,{children:i.jsx(m,{style:{width:"32px",height:"32px"}})}),a]},l()))})},f=t.p`
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
`,w=t.ul`
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
`,u=t.li`
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
`,b=t.div`
  padding-bottom: 24px;
  margin-bottom: 24px;
  width: 100%;

  border-bottom: 1px solid transparent;
  border-image: var(--primary-gradient);
  border-image-slice: 1;
`,y=t.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.33;

  margin-bottom: 8px;

  @media (min-width: 768px) {
    line-height: 1.25;
  }
`,P=t.span`
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
`,v=t.ul`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,B=t.div`
  margin-top: auto;
  display: flex;
  justify-content: center;
`,k=[{id:1,plan:i.jsx(n,{id:"plan_starter"}),price:19,span:"",benefits:[i.jsx(n,{id:"plans_starter_1"}),i.jsx(n,{id:"plans_starter_2"}),i.jsx(n,{id:"plans_starter_3"}),i.jsx(n,{id:"plans_starter_4"}),i.jsx(n,{id:"plans_starter_5"})]},{id:2,plan:i.jsx(n,{id:"plan_pro"}),price:79,span:i.jsx(n,{id:"plan_pro_span"}),benefits:[i.jsx(n,{id:"plans_pro_0"}),i.jsx(n,{id:"plans_pro_1"}),i.jsx(n,{id:"plans_pro_2"}),i.jsx(n,{id:"plans_pro_3"}),i.jsx(n,{id:"plans_pro_4"}),i.jsx(n,{id:"plans_pro_5"})]},{id:3,plan:i.jsx(n,{id:"plan_premium"}),price:199,span:i.jsx(n,{id:"plan_premium_span"}),benefits:[i.jsx(n,{id:"plans_premium_0"}),i.jsx(n,{id:"plans_premium_1"}),i.jsx(n,{id:"plans_premium_2"}),i.jsx(n,{id:"plans_premium_3"}),i.jsx(n,{id:"plans_premium_4"}),i.jsx(n,{id:"plans_premium_5"})]}],z=()=>i.jsx("section",{children:i.jsxs("div",{className:"container",children:[i.jsx(h,{title:i.jsx(n,{id:"pricing_main_title"})}),i.jsx(f,{children:i.jsx(n,{id:"pricing_main_subtitle"})}),i.jsx(w,{children:k.map(e=>i.jsxs(u,{tabIndex:0,children:[i.jsxs(b,{children:[i.jsx(y,{children:e.plan}),i.jsxs(P,{children:["$",e.price,"/",i.jsx(n,{id:"pricing_month"})]})]}),i.jsx(v,{children:i.jsx(_,{benefits:e})}),i.jsx(B,{children:i.jsx(o,{title:i.jsx(n,{id:"pricing_get_button"}),styles:"pay"})})]},e.id))})]})}),T=()=>i.jsxs("main",{children:[i.jsx(z,{}),i.jsx(c,{})]});export{T as default};
