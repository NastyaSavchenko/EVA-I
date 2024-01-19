import{s as i,r as n,u as L,j as s,i as m,F as t,B as M,C as V}from"./index-d1972e5b.js";import{F as B,a as z,u as A,b as I,L as u,E as j,A as f}from"./AuthBtn-fc23ee52.js";import{a as g}from"./index.esm-43a27989.js";import{M as b}from"./index.esm-ff59643c.js";import{S as y}from"./SectionTitle-c39f0279.js";const P=i.div`
  margin-top: 40px;
  margin-left: 80px;
`,v=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8px;
  padding-top: 148px;
  height: 100vh;
`,R=i.p`
  text-align: center;
  margin-top: 32px;
  margin-bottom: 8px;
  text-align: center;
  font-size: 14px;
  line-height: 1.71;
  color: var(--white);
`,q=i.p`
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.2;
  color: var(--white);
  margin-bottom: 32px;
`,O=i(B)`
  max-width: 624px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`,_=i.label`
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: var(--semibold-font-weight);
  line-height: 1.5;
  color: var(--white);
`,F=i.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  color: var(--white);

  &:last-of-type {
    margin-bottom: 32px;
  }
`,E=i.div`
  display: flex;
`,p=i(z)`
  cursor: pointer;
  width: 100%;

  border-left: ${e=>e.error?"1px solid var(--neutral-red)":"1px solid var(--white)"};
  border-right: none;
  border-top: ${e=>e.error?"1px solid var(--neutral-red)":"1px solid var(--white)"};
  border-bottom: ${e=>e.error?"1px solid var(--neutral-red)":"1px solid var(--white)"};
  border-top-left-radius: 32px;
  border-bottom-left-radius: 32px;

  line-height: 1.5;
  padding: 16px 24px;
  background-color: var(--dark);

  color: var(--white);
  transition: border-color 0.3s;

  &:focus,
  &:hover {
    border-color: var(--primary-pink);
  }

  &::placeholder {
    color: var(--light-grey);
  }
`,N=i.button`
  cursor: pointer;
  padding: 0 24px;
  background-color: inherit;
  border: none;
  color: ${e=>e.hasError==="true"?"var(--neutral-red)":"var(--light-grey)"};

  border-right: ${e=>e.hasError==="true"?"1px solid var(--neutral-red)":"1px solid var(--white)"};
  border-left: none;
  border-top: ${e=>e.hasError==="true"?"1px solid var(--neutral-red)":"1px solid var(--white)"};
  border-bottom: ${e=>e.hasError==="true"?"1px solid var(--neutral-red)":"1px solid var(--white)"};
  border-top-right-radius: 32px;
  border-bottom-right-radius: 32px;

  transition: all 0.3s;

  ${p}:focus + &,
  ${p}:hover + & {
    border-color: var(--primary-pink);
    color: var(--primary-pink);
  }
`,l=i.div`
  display: flex;
  gap: 4px;
  padding-top: 8px;
  color: ${e=>e.type==="error"?"var(--neutral-red)":"var(--primary-pink)"};
  font-size: 14px;
  line-height: 1.7;
`,T=()=>{const[e,k]=n.useState(!1),[c,a]=n.useState(!1),[S,$]=n.useState(!1),[D,x]=n.useState(""),C=A(),h=()=>{k(r=>!r)},w=L();return s.jsx("div",{children:S?s.jsxs(s.Fragment,{children:[s.jsx(P,{children:s.jsx(m,{})}),s.jsxs(v,{children:[s.jsx(y,{title:s.jsx(t,{id:"createNewPass_horay"})}),s.jsx(q,{children:s.jsx(t,{id:"createNewPass_success"})}),s.jsx(V,{to:"/login",children:s.jsx(f,{title:s.jsx(t,{id:"auth_log_in"})})})]})]}):s.jsxs(s.Fragment,{children:[s.jsx(P,{children:s.jsx(m,{})}),s.jsxs(v,{className:"container",children:[s.jsx(y,{title:s.jsx(t,{id:"createNewPass"})}),s.jsx(R,{children:s.jsx(t,{id:"createNewPass_subtext"})}),s.jsx(I,{initialValues:{password:"",confirmPassword:""},validate:r=>{const o={};return r.password?r.password.length<8?o.password=s.jsx(t,{id:"auth_pass_width"}):/[A-Z]/.test(r.password)?/\d/.test(r.password)?/[!@#$%^&*()_+{}\[\]:;<>,.?~\\//-]/.test(r.password)||(o.password=s.jsx(t,{id:"auth_pass_length"})):o.password=s.jsx(t,{id:"auth_pass_containNumb"}):o.password=s.jsx(t,{id:"auth_pass_upperCase"}):o.password=s.jsx(t,{id:"auth_pass_required"}),r.confirmPassword?r.password!==r.confirmPassword&&(o.password=s.jsx(t,{id:"createNewPass_pass_notMatch"})):o.password=s.jsx(t,{id:"createNewPass_confirm_required"}),o},onSubmit:(r,{setSubmitting:o,resetForm:d})=>{r.password!==r.confirmPassword?x(s.jsx(t,{id:"createNewPass_pass_notMatch"})):(x(""),C(M({password:r.password})),$(!0),d(),o(!1))},children:({errors:r,touched:o,handleSubmit:d,isSubmitting:W})=>s.jsxs(O,{onSubmit:d,children:[s.jsxs(F,{children:[s.jsx(_,{htmlFor:"password",children:s.jsx(t,{id:"createNewPass_enterNewPass"})}),s.jsxs(E,{children:[s.jsx(p,{type:e?"text":"password",id:"password",name:"password",autoComplete:"current-password",placeholder:w.formatMessage({id:"auth_password"}),onFocus:()=>a(!0),onBlur:()=>a(!1),error:r.password}),s.jsx(N,{type:"button",onClick:h,hasError:r.password?"true":"false",children:e?s.jsx(b,{style:{width:"32px",height:"32px"}}):s.jsx(g,{style:{width:"32px",height:"32px"}})})]}),c?s.jsx(l,{type:"Verification",children:s.jsxs(s.Fragment,{children:[s.jsx("img",{src:u,alt:"Loader"}),s.jsx(t,{id:"auth_verification"})]})}):r.password?s.jsx(l,{type:"error",children:s.jsxs(s.Fragment,{children:[s.jsx("img",{src:j,alt:"Error"}),r.password]})}):null]}),s.jsxs(F,{children:[s.jsx(_,{htmlFor:"confirmPassword",children:s.jsx(t,{id:"createNewPass_confirmNewPass"})}),s.jsxs(E,{children:[s.jsx(p,{type:e?"text":"password",id:"confirmPassword",name:"confirmPassword",autoComplete:"current-password",placeholder:w.formatMessage({id:"auth_password"}),onFocus:()=>a(!0),onBlur:()=>a(!1),error:r.password}),s.jsx(N,{type:"button",onClick:h,hasError:r.password?"true":"false",children:e?s.jsx(b,{style:{width:"32px",height:"32px"}}):s.jsx(g,{style:{width:"32px",height:"32px"}})})]}),c?s.jsx(l,{type:"Verification",children:s.jsxs(s.Fragment,{children:[s.jsx("img",{src:u,alt:"Loader"}),s.jsx(t,{id:"auth_verification"})]})}):r.password?s.jsx(l,{type:"error",children:s.jsxs(s.Fragment,{children:[s.jsx("img",{src:j,alt:"Error"}),r.password]})}):null]}),s.jsx(f,{title:s.jsx(t,{id:"createNewPass_reset"}),handleSubmit:d})]})})]})]})})},Q=()=>s.jsx("main",{children:s.jsx(T,{})});export{Q as default};
