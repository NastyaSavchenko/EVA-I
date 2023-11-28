import{s,r as o,u as z,j as i,i as w,F as e,D as A,C as V}from"./index-3fb2b6ae.js";import{S as y}from"./SectionTitle-ff509550.js";import{F as q,a as C,u as M,b as T,L as c,E as d,A as L}from"./AuthBtn-34c5b58c.js";const b=s.div`
  margin-top: 40px;
  margin-left: 80px;
`,$=s.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 32px;
`,I=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
`,J=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`,P=s.span`
  font-size: 32px;
  font-weight: 600;
  line-height: 1.25;
  background-image: var(--primary-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`,W=s(q)`
  max-width: 624px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`,x=s.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  color: var(--white);
`,m=s.label`
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: var(--semibold-font-weight);
  line-height: 1.5;
  color: var(--white);
`,p=s(C)`
  cursor: pointer;
  background-color: transparent;
  line-height: 1.5;
  padding: 16px 24px;
  border: ${l=>l.error?"1px solid var(--neutral-red)":"1px solid var(--white)"};
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
`,n=s.div`
  display: flex;
  gap: 4px;
  padding-top: 8px;
  color: ${l=>l.type==="error"?"var(--neutral-red)":"var(--primary-pink)"};
  font-size: 14px;
  line-height: 1.7;
`,Z=s.p`
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
`,D=s.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  margin-bottom: 8px;
  padding-top: 148px;
  height: 100vh;
`,R=s.p`
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.2;
  color: var(--white);
  margin-bottom: 32px;
`,U=()=>{const[l,u]=o.useState(!1),[F,g]=o.useState(!1),[v,f]=o.useState(!1),[k,_]=o.useState(!1),[h,S]=o.useState(""),[N,E]=o.useState(!1),B=M(),j=z();return i.jsx("div",{children:N?i.jsxs(i.Fragment,{children:[i.jsx(b,{children:i.jsx(w,{})}),i.jsxs(D,{children:[i.jsx(y,{title:i.jsx(e,{id:"waitList_congrats"})}),i.jsx(R,{children:i.jsx(e,{id:"waitList_success_added"})}),i.jsx(V,{to:"/",children:i.jsx(L,{title:i.jsx(e,{id:"waitList_back_btn"})})})]})]}):i.jsxs(i.Fragment,{children:[i.jsx(b,{children:i.jsx(w,{})}),i.jsxs($,{className:"container",children:[i.jsxs(I,{children:[i.jsx(y,{title:i.jsx(e,{id:"waitList_join_the"})}),i.jsxs(P,{children:[" ",i.jsx(e,{id:"waitList_list"})]})]}),i.jsx("p",{children:i.jsx(e,{id:"waitList_subtext"})}),i.jsx(T,{initialValues:{name:"",email:"",phoneNumber:"",socialLink:""},validate:t=>{const r={};return t.name||(r.name=i.jsx(e,{id:"waitList_name_required"})),t.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t.email)||(r.email=i.jsx(e,{id:"auth_mail_err"})):r.email=i.jsx(e,{id:"auth_mail_required"}),t.phoneNumber?/^[0-9+]*$/i.test(t.phoneNumber)||(r.phoneNumber=i.jsx(e,{id:"waitList_phone_invalid"})):r.phoneNumber=i.jsx(e,{id:"waitList_phone_required"}),t.socialLink||(r.socialLink=i.jsx(e,{id:"waitList_social_link_required"})),r},onSubmit:async(t,{resetForm:r})=>{try{const a=await B(A(t));console.log(a),a.type==="auth/waitlist/add/fulfilled"?(E(!0),r()):a.type==="auth/waitlist/add/rejected"&&S(a.payload)}catch(a){console.error(a.message)}},children:({errors:t,handleSubmit:r})=>i.jsxs(W,{onSubmit:r,children:[i.jsxs(x,{children:[i.jsx(m,{htmlFor:"name",children:i.jsx(e,{id:"waitList_name_surname"})}),i.jsx(p,{type:"text",id:"name",name:"name",placeholder:j.formatMessage({id:"waitList_name_surname"}),onFocus:()=>u(!0),onBlur:()=>u(!1),error:t.name}),l?i.jsx(n,{type:"Verification",children:i.jsxs(i.Fragment,{children:[i.jsx("img",{src:c,alt:"Loader"}),i.jsx(e,{id:"auth_verification"})]})}):t.name?i.jsx(n,{type:"error",children:i.jsxs(i.Fragment,{children:[i.jsx("img",{src:d,alt:"Error"}),t.name]})}):null]}),i.jsxs(x,{children:[i.jsx(m,{htmlFor:"email",children:i.jsx(e,{id:"auth_email"})}),i.jsx(p,{type:"email",id:"email",name:"email",autoComplete:"username",placeholder:j.formatMessage({id:"auth_email"}),onFocus:()=>g(!0),onBlur:()=>g(!1),error:t.email||h}),F?i.jsx(n,{type:"Verification",children:i.jsxs(i.Fragment,{children:[i.jsx("img",{src:c,alt:"Loader"}),i.jsx(e,{id:"auth_verification"})]})}):t.email||h?i.jsx(n,{type:"error",children:i.jsxs(i.Fragment,{children:[i.jsx("img",{src:d,alt:"Error"}),t.email||h]})}):null]}),i.jsxs(x,{children:[i.jsxs(m,{htmlFor:"phoneNumber",children:[i.jsx(e,{id:"waitList_phone_number"}),"(",i.jsx(e,{id:"waitList_optional"}),")"]}),i.jsx(p,{id:"phoneNumber",name:"phoneNumber",placeholder:"+12 3456 7890",onFocus:()=>f(!0),onBlur:()=>f(!1),error:t.phoneNumber}),v?i.jsx(n,{type:"Verification",children:i.jsxs(i.Fragment,{children:[i.jsx("img",{src:c,alt:"Loader"}),i.jsx(e,{id:"auth_verification"})]})}):t.phoneNumber?i.jsx(n,{type:"error",children:i.jsxs(i.Fragment,{children:[i.jsx("img",{src:d,alt:"Error"}),t.phoneNumber]})}):null]}),i.jsxs(x,{children:[i.jsxs(m,{htmlFor:"socialLink",children:[i.jsx(e,{id:"waitList_social_link"}),"(",i.jsx(e,{id:"waitList_optional"}),")"]}),i.jsx(p,{id:"socialLink",name:"socialLink",placeholder:j.formatMessage({id:"waitList_social_link_URL"}),onFocus:()=>_(!0),onBlur:()=>_(!1),error:t.socialLink}),k?i.jsx(n,{type:"Verification",children:i.jsxs(i.Fragment,{children:[i.jsx("img",{src:c,alt:"Loader"}),i.jsx(e,{id:"auth_verification"})]})}):t.socialLink?i.jsx(n,{type:"error",children:i.jsxs(i.Fragment,{children:[i.jsx("img",{src:d,alt:"Error"}),t.socialLink]})}):null]}),i.jsxs(J,{children:[i.jsx(L,{title:i.jsx(e,{id:"waitList_join"}),handleSubmit:r}),i.jsxs(Z,{children:[i.jsxs("span",{children:[i.jsx(e,{id:"register_by_clicking"})," "," "]}),i.jsx("a",{href:"https://reply.io/terms-of-service/",target:"_blank",children:i.jsx(e,{id:"register_terms_of_service"})}),i.jsxs("span",{children:["  ",i.jsx(e,{id:"register_and"}),"  "]}),i.jsx("a",{href:"https://reply.io/privacy-policy/",target:"_blank",children:i.jsx(e,{id:"register_privacy_policy"})})]})]})]})})]})]})})},O=()=>i.jsx("main",{children:i.jsx(U,{})});export{O as default};
