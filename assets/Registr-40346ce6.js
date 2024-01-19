import{s,f as b,r as n,u as L,j as r,F as i,k as V,v as z,i as P}from"./index-d1972e5b.js";import{F as B,a as _,u as M,b as A,L as j,E as f,A as C}from"./AuthBtn-fc23ee52.js";import{S as D}from"./SectionTitle-c39f0279.js";import{D as T,G as R}from"./GoogleBtn-203cbed8.js";import{a as I}from"./index.esm-43a27989.js";import{M as N}from"./index.esm-ff59643c.js";import"./styled-56f81a7c.js";const Z=s.p`
  margin-top: 8px;
  margin-bottom: 40px;
  text-align: center;
  font-size: 16px;
  line-height: 1.25;
  color: var(--white);
`,G=s(b)`
  font-weight: var(--semibold-font-weight);
  color: var(--primary-pink);
  transition: all var(--anim);

  &:hover {
    color: var(--primary-purple);
  }
`,q=s(B)`
  max-width: 624px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`,O=s.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  color: var(--white);
`,H=s.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`,U=s.div`
  display: flex;
`,v=s.label`
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: var(--semibold-font-weight);
  line-height: 1.5;
  color: var(--white);
`,W=s(_)`
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
`,h=s(_)`
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
`,J=s.button`
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

  ${h}:focus + &,
  ${h}:hover + & {
    border-color: var(--primary-pink);
    color: var(--primary-pink);
  }
`,d=s.div`
  display: flex;
  gap: 4px;
  padding-top: 8px;
  color: ${e=>e.type==="error"?"var(--neutral-red)":"var(--primary-pink)"};
  font-size: 14px;
  line-height: 1.7;
`,K=s.p`
  text-align: center;
  font-size: 16px;
  line-height: 1.5;
  margin-top: 16px;
  margin-bottom: 40px;
  color: var(--white);

  > a {
    cursor: pointer;
    text-decoration-line: underline;
    color: var(--primary-pink);
    transition: all var(--anim);

    &:hover {
      color: var(--primary-purple);
    }
  }
`,Q=({setUserEmail:e,setRegistrationStatus:p})=>{const[l,c]=n.useState(!1),[k,m]=n.useState(!1),[E,u]=n.useState(!1),[x,F]=n.useState(""),S=M(),$=()=>{c(t=>!t)},g=L();return r.jsxs("div",{children:[r.jsx(D,{title:r.jsx(i,{id:"register_main_title"})}),r.jsxs(Z,{children:[r.jsx(i,{id:"register_already_have"}),r.jsxs(G,{to:"/login",children:[" ",r.jsx(i,{id:"signIn_main_title"})]})]}),r.jsx(A,{initialValues:{email:"",password:""},validate:t=>{const o={};return t.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t.email)||(o.email=r.jsx(i,{id:"auth_mail_err"})):o.email=r.jsx(i,{id:"auth_mail_required"}),t.password?t.password.length<8?o.password=r.jsx(i,{id:"auth_pass_width"}):/[A-Z]/.test(t.password)?/\d/.test(t.password)?/[!@#$%^&*()_+{}\[\]:;<>,.?~\\//-]/.test(t.password)||(o.password=r.jsx(i,{id:"auth_pass_length"})):o.password=r.jsx(i,{id:"auth_pass_containNumb"}):o.password=r.jsx(i,{id:"auth_pass_upperCase"}):o.password=r.jsx(i,{id:"auth_pass_required"}),o},onSubmit:async(t,{resetForm:o})=>{try{const a=await S(V(t));a.type==="auth/register/fulfilled"?(p(201),e(t.email),o()):a.type==="auth/register/rejected"&&F(a.payload)}catch(a){console.log(a)}},children:({errors:t,touched:o,handleSubmit:a})=>r.jsxs(q,{onSubmit:a,children:[r.jsxs(O,{children:[r.jsx(v,{htmlFor:"email",children:r.jsx(i,{id:"auth_email"})}),r.jsx(W,{type:"email",id:"email",name:"email",autoComplete:"username",placeholder:g.formatMessage({id:"auth_email"}),onFocus:()=>m(!0),onBlur:()=>m(!1),error:t.email||x}),k?r.jsx(d,{type:"Verification",children:r.jsxs(r.Fragment,{children:[r.jsx("img",{src:j,alt:"Loader"}),r.jsx(i,{id:"auth_verification"})]})}):t.email||x?r.jsx(d,{type:"error",children:r.jsxs(r.Fragment,{children:[r.jsx("img",{src:f,alt:"Error"}),t.email||x]})}):null]}),r.jsxs(H,{children:[r.jsx(v,{htmlFor:"password",children:r.jsx(i,{id:"auth_password"})}),r.jsxs(U,{children:[r.jsx(h,{type:l?"text":"password",id:"password",name:"password",autoComplete:"current-password",placeholder:g.formatMessage({id:"auth_password"}),onFocus:()=>u(!0),onBlur:()=>u(!1),error:t.password}),r.jsx(J,{type:"button",onClick:$,hasError:t.password?"true":"false",children:l?r.jsx(N,{style:{width:"32px",height:"32px"}}):r.jsx(I,{style:{width:"32px",height:"32px"}})})]}),E?r.jsx(d,{type:"Verification",children:r.jsxs(r.Fragment,{children:[r.jsx("img",{src:j,alt:"Loader"}),r.jsx(i,{id:"auth_verification"})]})}):t.password?r.jsx(d,{type:"error",children:r.jsxs(r.Fragment,{children:[r.jsx("img",{src:f,alt:"Error"}),t.password]})}):null]}),r.jsx(C,{title:r.jsx(i,{id:"auth_continue"}),handleSubmit:a}),r.jsxs(K,{children:[r.jsxs("span",{children:[r.jsx(i,{id:"register_by_clicking"})," "]}),r.jsx("a",{href:"https://reply.io/terms-of-service/",target:"_blank",children:r.jsx(i,{id:"register_terms_of_service"})}),r.jsxs("span",{children:[" ",r.jsx(i,{id:"register_and"})," "]}),r.jsx("a",{href:"https://reply.io/privacy-policy/",target:"_blank",children:r.jsx(i,{id:"register_privacy_policy"})})]}),r.jsx(T,{sx:{marginBottom:"50px",color:"var(--light-grey)","&.MuiDivider-root":{fontSize:"16px",lineHeight:"1.25"},"&.MuiDivider-root::after":{borderTop:"thin solid var(--light-grey)"},"&.MuiDivider-root::before":{borderTop:"thin solid var(--light-grey)"}},children:r.jsx(i,{id:"auth_or"})}),r.jsx(R,{title:r.jsx(i,{id:"register_continue_Google"})})]})})]})},X=s.div`
  padding-top: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
`,Y=s.h2`
  text-align: center;

  font-size: 40px;
  font-weight: 600;
  line-height: 2;
`,rr=s.div`
  font-size: 20px;
  line-height: 1.2;

  > span {
    font-weight: 700;
  }
`,w=s.div`
  display: flex;
  gap: 4px;

  > p {
    font-size: 16px;
    line-height: 1.5;
  }
`,y=s(b)`
  color: var(--primary-pink);
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;

  transition: color var(--anim);

  &:hover,
  &:focus {
    color: var(--primary-purple);
  }
`,ir=({userEmail:e})=>(z(),r.jsx("main",{children:r.jsxs(X,{children:[r.jsx(Y,{children:r.jsx(i,{id:"emailVarification_verify"})}),r.jsxs(rr,{children:[r.jsxs("p",{children:[r.jsx(i,{id:"emailVarification_subtitle"})," "]}),r.jsx("span",{children:e})]}),r.jsxs(w,{children:[r.jsx("p",{children:r.jsx(i,{id:"emailVarification_cant_find_letter"})}),r.jsx(y,{to:"/reset-password",children:r.jsx(i,{id:"forgotPass_resend"})})]}),r.jsxs(w,{children:[r.jsx("p",{children:r.jsx(i,{id:"register_already_have"})}),r.jsx(y,{to:"/login",children:r.jsx(i,{id:"auth_log_in"})})]})]})})),dr=()=>{const[e,p]=n.useState(null),[l,c]=n.useState(null);return r.jsx("main",{children:r.jsxs("div",{className:"authContainer",children:[r.jsx(P,{}),e!==201?r.jsx(Q,{setRegistrationStatus:p,setUserEmail:c}):r.jsx(ir,{userEmail:l})]})})};export{dr as default};
