import{b as e,c as y,r as C,_ as $,j as s,s as f}from"./index-d1972e5b.js";import{g as D,a as R,b as x,c as I,e as k,f as L}from"./styled-56f81a7c.js";function W(i){return D("MuiDivider",i)}R("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);const j=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],V=i=>{const{absolute:r,children:t,classes:l,flexItem:c,light:n,orientation:a,textAlign:o,variant:d}=i;return L({root:["root",r&&"absolute",d,n&&"light",a==="vertical"&&"vertical",c&&"flexItem",t&&"withChildren",t&&a==="vertical"&&"withChildrenVertical",o==="right"&&a!=="vertical"&&"textAlignRight",o==="left"&&a!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",a==="vertical"&&"wrapperVertical"]},W,l)},B=x("div",{name:"MuiDivider",slot:"Root",overridesResolver:(i,r)=>{const{ownerState:t}=i;return[r.root,t.absolute&&r.absolute,r[t.variant],t.light&&r.light,t.orientation==="vertical"&&r.vertical,t.flexItem&&r.flexItem,t.children&&r.withChildren,t.children&&t.orientation==="vertical"&&r.withChildrenVertical,t.textAlign==="right"&&t.orientation!=="vertical"&&r.textAlignRight,t.textAlign==="left"&&t.orientation!=="vertical"&&r.textAlignLeft]}})(({theme:i,ownerState:r})=>e({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(i.vars||i).palette.divider,borderBottomWidth:"thin"},r.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},r.light&&{borderColor:i.vars?`rgba(${i.vars.palette.dividerChannel} / 0.08)`:y(i.palette.divider,.08)},r.variant==="inset"&&{marginLeft:72},r.variant==="middle"&&r.orientation==="horizontal"&&{marginLeft:i.spacing(2),marginRight:i.spacing(2)},r.variant==="middle"&&r.orientation==="vertical"&&{marginTop:i.spacing(1),marginBottom:i.spacing(1)},r.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},r.flexItem&&{alignSelf:"stretch",height:"auto"}),({ownerState:i})=>e({},i.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}}),({theme:i,ownerState:r})=>e({},r.children&&r.orientation!=="vertical"&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(i.vars||i).palette.divider}`}}),({theme:i,ownerState:r})=>e({},r.children&&r.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(i.vars||i).palette.divider}`}}),({ownerState:i})=>e({},i.textAlign==="right"&&i.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},i.textAlign==="left"&&i.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),G=x("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(i,r)=>{const{ownerState:t}=i;return[r.wrapper,t.orientation==="vertical"&&r.wrapperVertical]}})(({theme:i,ownerState:r})=>e({display:"inline-block",paddingLeft:`calc(${i.spacing(1)} * 1.2)`,paddingRight:`calc(${i.spacing(1)} * 1.2)`},r.orientation==="vertical"&&{paddingTop:`calc(${i.spacing(1)} * 1.2)`,paddingBottom:`calc(${i.spacing(1)} * 1.2)`})),b=C.forwardRef(function(r,t){const l=I({props:r,name:"MuiDivider"}),{absolute:c=!1,children:n,className:a,component:o=n?"div":"hr",flexItem:d=!1,light:g=!1,orientation:u="horizontal",role:h=o!=="hr"?"separator":void 0,textAlign:m="center",variant:w="fullWidth"}=l,A=$(l,j),p=e({},l,{absolute:c,component:o,flexItem:d,light:g,orientation:u,role:h,textAlign:m,variant:w}),v=V(p);return s.jsx(B,e({as:o,className:k(v.root,a),role:h,ref:t,ownerState:p},A,{children:n?s.jsx(G,{className:v.wrapper,ownerState:p,children:n}):null}))});b.muiSkipListHighlight=!0;const z=b,M=f.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 16px 32px;
  border-radius: 32px;
  text-align: center;
  font-size: 24px;
  line-height: 1;
  border: 1px solid var(--primary-pink) ;
  background-color: transparent;
  color: var(--primary-pink);
  transition: all var(--anim);

  &:hover {
    border-color: var(--primary-purple);
    color: var(--primary-purple);
  }

  &:focus {
    border: 2px solid var(--white);
    color: var(--primary-purple);
  }

  &:active {
    border-color: var(--primary-purple);
    color: var(--primary-purple);
  }

  border-color: ${i=>i.$btntype==="disabled"?"rgba(237, 57, 132, 0.20)":"var(--primary-pink)"};

  color: ${i=>i.$btntype==="disabled"?"rgba(237, 57, 132, 0.20)":"var(--primary-pink)"};
`,_=f.img`
  width: 22px;
  height: 22px;
`,N="/EVA-I/assets/devicon_google-cc76529c.svg",E=({title:i,styles:r})=>s.jsxs(M,{href:"https://aibot-back-end.onrender.com/api/auth/google",$btntype:r,children:[s.jsx(_,{src:N,alt:"Google logo letter"}),i]});export{z as D,E as G};
