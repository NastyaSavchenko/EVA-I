import{s as i,f as _,r as l,u as $,j as r,F as o,L as V,l as P,g as p,h as A,i as M}from"./index-d1972e5b.js";import{F as T,a as F,u as N,b as B,L as v,E as b,A as D}from"./AuthBtn-fc23ee52.js";import{a as C}from"./index.esm-43a27989.js";import{M as z}from"./index.esm-ff59643c.js";import{D as Z,G}from"./GoogleBtn-203cbed8.js";import{S as q}from"./SectionTitle-c39f0279.js";import"./styled-56f81a7c.js";const O=i.p`
  margin-top: 32px;
  /* margin-bottom: 40px; */
  text-align: center;
  font-size: 16px;
  line-height: 1.25;
  color: var(--white);
`,R=i(_)`
  font-weight: var(--semibold-font-weight);
  color: var(--primary-pink);
  transition: all var(--anim);

  &:hover {
    color: var(--primary-purple);
  }
`,U=i(T)`
  max-width: 624px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`,W=i.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  color: var(--white);
`,y=i.label`
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: var(--semibold-font-weight);
  line-height: 1.5;
  color: var(--white);
`,H=i(F)`
  cursor: pointer;
  background-color: transparent;
  line-height: 1.5;
  padding: 16px 24px;
  border: ${e=>e.error?"1px solid var(--neutral-red)":"1px solid var(--white)"};
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
`,J=i.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  color: var(--white);
`,K=i.div`
  display: flex;
`,g=i(F)`
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
`,Q=i.button`
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

  ${g}:focus + &,
  ${g}:hover + & {
    border-color: var(--primary-pink);
    color: var(--primary-pink);
  }
`,h=i.div`
  display: flex;
  gap: 4px;
  padding-top: 8px;
  color: ${e=>e.type==="error"?"var(--neutral-red)":"var(--primary-pink)"};
  font-size: 14px;
  line-height: 1.7;
`,X=i(_)`
  display: flex;
  font-weight: var(--regular-font-weight);
  justify-content: flex-start;
  line-height: 1.25;
  margin-bottom: 40px;
  color: var(--primary-pink);
  transition: all var(--anim);

  &:hover {
    color: var(--primary-purple);
  }
`,Y=()=>{const[e,n]=l.useState(!1),[d,x]=l.useState(!1),[u,f]=l.useState(!1),[k,w]=l.useState(!1),[m,E]=l.useState(""),[c,L]=l.useState(""),j=$(),I=N(),S=()=>{x(s=>!s)};return r.jsxs("div",{children:[r.jsx(q,{title:r.jsx(o,{id:"signIn_main_title"})}),e?r.jsx(V,{}):r.jsx(B,{initialValues:{email:"",password:""},validate:s=>{const t={};return s.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(s.email)||(t.email=r.jsx(o,{id:"auth_mail_err"})):t.email=r.jsx(o,{id:"auth_mail_required"}),s.password?s.password.length<8?t.password=r.jsx(o,{id:"auth_pass_width"}):/[A-Z]/.test(s.password)?/\d/.test(s.password)?/[!@#$%^&*()_+{}\[\]:;<>,.?~\\//-]/.test(s.password)||(t.password=r.jsx(o,{id:"auth_pass_length"})):t.password=r.jsx(o,{id:"auth_pass_containNumb"}):t.password=r.jsx(o,{id:"auth_pass_upperCase"}):t.password=r.jsx(o,{id:"auth_pass_required"}),t},onSubmit:async(s,{resetForm:t})=>{n(!0);try{const a=await I(P(s));a.type==="auth/login/rejected"&&(a.payload==="Wrong password"?L(a.payload):E(a.payload))}catch(a){console.log(a)}finally{n(!1),t()}},children:({errors:s,touched:t,handleSubmit:a,isSubmitting:ar})=>r.jsxs(U,{onSubmit:a,children:[r.jsxs(W,{children:[r.jsx(y,{htmlFor:"email",children:r.jsx(o,{id:"auth_email"})}),r.jsx(H,{type:"email",id:"email",name:"email",autoComplete:"username",placeholder:j.formatMessage({id:"auth_email"}),onFocus:()=>f(!0),onBlur:()=>f(!1),error:s.email||m}),u?r.jsx(h,{type:"Verification",children:r.jsxs(r.Fragment,{children:[r.jsx("img",{src:v,alt:"Loader"}),r.jsx(o,{id:"auth_verification"})]})}):s.email||m?r.jsx(h,{type:"error",children:r.jsxs(r.Fragment,{children:[r.jsx("img",{src:b,alt:"Error"}),s.email||m]})}):null]}),r.jsxs(J,{children:[r.jsx(y,{htmlFor:"password",children:r.jsx(o,{id:"auth_password"})}),r.jsxs(K,{children:[r.jsx(g,{type:d?"text":"password",id:"password",name:"password",autoComplete:"current-password",placeholder:j.formatMessage({id:"auth_password"}),onFocus:()=>w(!0),onBlur:()=>w(!1),error:s.password||c}),r.jsx(Q,{type:"button",onClick:S,hasError:s.password||c?"true":"false",children:d?r.jsx(z,{style:{width:"32px",height:"32px"}}):r.jsx(C,{style:{width:"32px",height:"32px"}})})]}),k?r.jsx(h,{type:"Verification",children:r.jsxs(r.Fragment,{children:[r.jsx("img",{src:v,alt:"Loader"}),r.jsx(o,{id:"auth_verification"})]})}):s.password||c?r.jsx(h,{type:"error",children:r.jsxs(r.Fragment,{children:[r.jsx("img",{src:b,alt:"Error"}),s.password||c]})}):null]}),r.jsx(X,{to:"/forgot-password",children:r.jsx(o,{id:"forgotPass_forgot_password"})}),r.jsx(D,{title:r.jsx(o,{id:"auth_log_in"}),handleSubmit:a}),r.jsx(Z,{sx:{marginBottom:"50px",marginTop:"50px",color:"var(--light-grey)","&.MuiDivider-root":{fontSize:"16px",lineHeight:"1.25"},"&.MuiDivider-root::after":{borderTop:"thin solid var(--light-grey)"},"&.MuiDivider-root::before":{borderTop:"thin solid var(--light-grey)"}},children:r.jsx(o,{id:"auth_or"})}),r.jsx(G,{title:r.jsx(o,{id:"signIn_Google"})}),r.jsxs(O,{children:[r.jsx(o,{id:"signIn_main_subtitle1"})," ",r.jsxs(R,{to:"/registration",children:[" ",r.jsx(o,{id:"signIn_main_subtitle2"})]})]})]})})]})},rr=e=>e.auth.isLoggedIn,er=e=>e.auth.isVerify,sr=e=>e.auth.user,or=e=>e.auth.user.name,ir=e=>e.auth.refreshToken,tr=()=>{const e=p(rr),n=p(er),d=p(sr),x=p(or),u=p(ir);return{isLoggedIn:e,user:d,userName:x,isVerify:n,refreshToken:u}},ur=()=>{const{isLoggedIn:e,isVerify:n}=tr(),d=A();return l.useEffect(()=>{e&&n&&d("/wait-list")},[e,n]),r.jsx("main",{children:r.jsxs("div",{className:"authContainer",children:[r.jsx(M,{}),r.jsx(Y,{})]})})};export{ur as default};
