import{s as i,f as v,r as a,u as b,j as e,i as F,F as t,z as _}from"./index-d1972e5b.js";import{S as c}from"./SectionTitle-c39f0279.js";import{F as w,a as y,u as S,b as P,L,E as k,A as E}from"./AuthBtn-fc23ee52.js";const z=i.div`
  margin-top: 40px;
  margin-left: 80px;
`,d=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8px;
  padding-top: 148px;
`,A=i.p`
  margin-bottom: 32px;
  color: var(--neutral-white, #FFF);
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
`,I=i.p`
  margin: 32px 0;
  color: var(--neutral-white, #FFF);
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
`,T=i(w)`
  max-width: 624px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`,N=i.label`
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: var(--semibold-font-weight);
  line-height: 1.5;
  color: var(--white);
`,V=i.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  color: var(--white);
`,R=i(y)`
  cursor: pointer;
  background-color: transparent;
  line-height: 1.5;
  padding: 16px 24px;
  border: ${o=>o.error?"1px solid var(--neutral-red)":"1px solid var(--white)"};
  border-radius: 32px;
  color: var(--white);
  transition: border-color 0.3s;

  &::placeholder {
    color: var(--light-grey);
  }

  &:focus,
  &:hover {
    border-color: var(--primary-pink);
  }
`,x=i.div`
  display: flex;
  gap: 4px;
  padding-top: 8px;
  color: ${o=>o.type==="error"?"var(--neutral-red)":"var(--primary-pink)"};
  font-size: 14px;
  line-height: 1.7;
`,Z=i.p`
  margin-top: 16px;
  text-align: center;
  font-size: 16px;
  line-height: 1.25;
  color: var(--white);
`,$=i.p`
  margin-bottom: 32px;
  text-align: center;
  font-size: 16px;
  line-height: 1.25;
  color: var(--white);
`,n=i(v)`
  font-weight: var(--semibold-font-weight);
  color: var(--primary-pink);
  transition: all var(--anim);

  &:hover {
    color: var(--primary-purple);
  }
`,B=()=>{const[o,l]=a.useState(!1),[m,p]=a.useState(!1),[h,g]=a.useState(""),u=S(),f=b();return e.jsxs("div",{children:[e.jsx(z,{children:e.jsx(F,{})}),m?e.jsxs(d,{className:"container",children:[e.jsx(c,{title:e.jsx(t,{id:"forgotPass_reset"})}),e.jsxs(I,{children:[e.jsx(t,{id:"forgotPass_reset_subtitle"})," ",h]}),e.jsxs($,{children:[e.jsx(t,{id:"forgotPass_reset_subtext"})," ",e.jsx(n,{to:"/reset-password",children:e.jsx(t,{id:"forgotPass_resend"})})]}),e.jsx(n,{to:"/login",children:e.jsx(t,{id:"forgotPass_remember"})})]}):e.jsxs(d,{className:"container",children:[e.jsx(c,{title:e.jsx(t,{id:"forgotPass_forgot_password"})}),e.jsx(A,{children:e.jsx(t,{id:"forgotPass_subtext"})}),e.jsx(P,{initialValues:{email:""},validate:r=>{const s={};return r.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(r.email)||(s.email=e.jsx(t,{id:"auth_mail_err"})):s.email=e.jsx(t,{id:"auth_mail_required"}),s},onSubmit:(r,{setSubmitting:s,resetForm:j})=>{g(r),p(!0),console.log(r),u(_(r)),j(),s(!1)},children:({errors:r,handleSubmit:s})=>e.jsxs(T,{onSubmit:s,children:[e.jsxs(V,{children:[e.jsx(N,{htmlFor:"email",children:e.jsx(t,{id:"auth_email"})}),e.jsx(R,{type:"email",id:"email",name:"email",autoComplete:"username",placeholder:f.formatMessage({id:"auth_email"}),onFocus:()=>l(!0),onBlur:()=>l(!1),error:r.email}),o?e.jsx(x,{type:"Verification",children:e.jsxs(e.Fragment,{children:[e.jsx("img",{src:L,alt:"Loader"}),e.jsx(t,{id:"auth_verification"})]})}):r.email?e.jsx(x,{type:"error",children:e.jsxs(e.Fragment,{children:[e.jsx("img",{src:k,alt:"Error"}),r.email]})}):null]}),e.jsx(E,{title:"Send",handleSubmit:s})]})}),e.jsxs(Z,{children:[e.jsx(t,{id:"signIn_main_subtitle1"})," ",e.jsx(n,{to:"/registration",children:e.jsx(t,{id:"signIn_main_subtitle2"})})]})]})]})},D=()=>e.jsx("main",{children:e.jsx(B,{})});export{D as default};
