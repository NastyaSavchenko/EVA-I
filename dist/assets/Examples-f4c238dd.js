import{a as e,j as t,S as n}from"./index-370e4b7e.js";import{T as a}from"./TryBot-4bc3d390.js";const s=e.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 32px;
  margin-top: 40px;
  margin-bottom: 40px;

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-top: 80px;
    margin-bottom: 60px;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    margin-top: 80px;
    margin-bottom: 60px;
    flex-direction: row;
    align-items: flex-start;
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    margin-top: 80px;
    margin-bottom: 60px;
    flex-direction: row;
    align-items: flex-start;
  }

  @media (min-width: 1920px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    margin-top: 80px;
    margin-bottom: 60px;
    align-items: flex-start;
  }
`,o=e.li`
  max-width: 515px;
  width: 100%;
  margin: 0 auto;

  &:not(:last-child) {
    margin-bottom: 24px;
  }

  @media (min-width: 1024px) {
    flex-basis: calc((100% - 2 * 32px) / 2);
  }
`,r=e.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 352px;
  padding: 10px;
  margin-bottom: 24px;

  border-radius: 12px;
  background-color: var(--light-grey);
`,d=e.div`
  display: flex;
  flex-direction: column;
`,x=e.div`
  display: flex;
  gap: 24px;
  margin-bottom: 16px;
`,p=e.div`
  width: 56px;
  height: 56px;
  padding: 10px;
  background-image: url(${i=>i.bg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 80px;
    height: 80px;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    width: 80px;
    height: 80px;
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    width: 80px;
    height: 80px;
  }

  @media (min-width: 1920px) {
    width: 80px;
    height: 80px;
  }
`,m=e.p`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 24px;
    line-height: 1.66;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    font-size: 24px;
    line-height: 1.66;
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    font-size: 24px;
    line-height: 1.66;
  }

  @media (min-width: 1920px) {
    font-size: 24px;
    line-height: 1.66;
  }
`,l=e.p`
  font-size: 16px;
  line-height: 1.5;
`,c="/EVA-I/assets/layers-52c5bff9.svg",h="/EVA-I/assets/layout-491ba207.svg",g="/EVA-I/assets/users-60162eca.svg",w="/EVA-I/assets/message-circle-edd728d0.svg",f=[{id:"Step 1",img:"/",alt:"PHOTO/VIDEO 1",icon:`${c}`,title:"Empower with relevant knowledge",text:"Simply upload files or import content via URLs to equip your chatbot with the information it needs to excel in its role."},{id:"Step 2",img:"/",alt:"PHOTO/VIDEO 2",icon:`${h}`,title:"Craft unique versions",text:"Customize chatbots for diverse roles, settings, and user experiences."},{id:"Step 3",img:"/",alt:"PHOTO/VIDEO 3",icon:`${g}`,title:"Spread across teams and customers",text:"Effortlessly integrate your chatbot with shareable links, inline embeds, or popup windows, granting smooth access to employees and customers alike."},{id:"Step 4",img:"/",alt:"PHOTO/VIDEO 4",icon:`${w}`,title:"Test EVA-I by yourself",text:"Interact with your chatbot by simply asking questions on the chat screen to instantly receive accurate and relevant answers."}],u=()=>t.jsx("section",{children:t.jsxs("div",{className:"container",children:[t.jsx(n,{title:"Check out how it works"}),t.jsx(s,{children:f.map(i=>t.jsxs(o,{children:[t.jsx(r,{children:t.jsx("img",{src:i.img,alt:i.alt})}),t.jsxs(d,{children:[t.jsxs(x,{children:[t.jsx(p,{bg:i.icon}),t.jsx(m,{children:i.title})]}),t.jsx(l,{children:i.text})]})]},i.id))})]})}),j=()=>t.jsxs("main",{children:[t.jsx(u,{}),t.jsx(a,{})]});export{j as default};
