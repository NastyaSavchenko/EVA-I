import{a as t,j as i,o,S as r,M as d}from"./index-a3cedf8d.js";import{n as s}from"./index.browser-7e542916.js";import{T as p}from"./TryBot-a5e77400.js";const n=t.h4`
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 1.17;
  }
`,x=t.li`
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
`,l=({benefits:e})=>i.jsxs(i.Fragment,{children:[e.plan==="Pro"&&i.jsx(n,{children:"Everything in Starter, plus"}),e.plan==="Premium"&&i.jsx(n,{children:"Everything in Pro, plus"}),e.benefits.map(a=>i.jsxs(x,{children:[i.jsx(m,{children:i.jsx(o,{style:{width:"32px",height:"32px"}})}),a]},s()))]}),c=t.p`
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
`,h=t.ul`
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
`,g=t.li`
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
`,w=t.div`
  padding-bottom: 24px;
  margin-bottom: 24px;
  width: 100%;

  border-bottom: 1px solid transparent;
  border-image: var(--primary-gradient);
  border-image-slice: 1;
`,f=t.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.33;

  margin-bottom: 8px;

  @media (min-width: 768px) {
    line-height: 1.25;
  }
`,u=t.span`
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
`,b=t.ul`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,y=t.div`
  margin-top: auto;
  display: flex;
  justify-content: center;
`,j=[{id:1,plan:"Starter",price:19,benefits:["No-Code builder","Access to templates","Basic analytics","Deploy on Web","Automate up to 30% of your workflow"]},{id:2,plan:"Pro",price:79,benefits:["Integrate with your systems & apps","Collaborate with your team members","Multilingual support","Advanced analytics","Automate up to 60% of your workflow"]},{id:3,plan:"Premium",price:199,benefits:["Advanced out of the box integrations","User Flow analytics","Intent based pop-ups","Proactive messaging campaigns","Automate up to 80% of your workflow"]}],P=()=>i.jsx("section",{children:i.jsxs("div",{className:"container",children:[i.jsx(r,{title:"Pricing & Plans"}),i.jsx(c,{children:"For personal, team, or client use, we've got the perfect package."}),i.jsx(h,{children:j.map(e=>i.jsxs(g,{tabIndex:0,children:[i.jsxs(w,{children:[i.jsx(f,{children:e.plan}),i.jsxs(u,{children:["$",e.price,"/mo"]})]}),i.jsx(b,{children:i.jsx(l,{benefits:e})}),i.jsx(y,{children:i.jsx(d,{title:"Get plan",styles:"pay"})})]},e.id))})]})}),z=()=>i.jsxs("main",{children:[i.jsx(P,{}),i.jsx(p,{})]});export{z as default};
