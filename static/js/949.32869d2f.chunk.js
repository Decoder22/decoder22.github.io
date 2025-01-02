"use strict";(self.webpackChunkbjohncox_website=self.webpackChunkbjohncox_website||[]).push([[949],{9397:(e,t,o)=>{o.r(t),o.d(t,{default:()=>k});var i=o(5043),r=o(1529);const s=o.p+"static/media/logo.ebcd58b72318326de48c.png";var n=o(9473),c=o(579);const a=r.Ay.div`
    height: 5rem;
    width: 100vw;
    max-width: 80rem;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 3;
`,l=r.Ay.img`
    height: 3rem;
    width: 4rem;
    object-fit: cover;
    cursor: pointer;
`,d=r.Ay.div`
    height: 2rem;
    display:flex;
    justify-content: center;
    align-items: center;
`,h=(0,r.Ay)(n.N_)`
  background: none;
  border: none;
  color: ${e=>{let{theme:t}=e;return t.colors.buttonText}};
  font-size: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 50%;
    background-color: ${e=>{let{theme:t}=e;return t.colors.buttonHover}};
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }
    
  &:hover::after {
    width: 100%;
  }
`;function m(){return(0,c.jsxs)(a,{children:[(0,c.jsx)(l,{src:s,alt:"Logo",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}}),(0,c.jsxs)(d,{children:[(0,c.jsx)(h,{activeClass:"active",to:"hero",spy:!0,smooth:!0,offset:-80,duration:500,children:"Home"}),(0,c.jsx)(h,{activeClass:"active",to:"AboutMe",spy:!0,smooth:!0,offset:-80,duration:500,children:"About Me"}),(0,c.jsx)(h,{activeClass:"active",to:"projects",spy:!0,smooth:!0,offset:-80,duration:500,children:"Projects"}),(0,c.jsx)(h,{activeClass:"active",to:"contact",spy:!0,smooth:!0,offset:-80,duration:500,children:"Contact"})]})]})}var u=o(3586);const p=r.Ay.div`
    position: absolute;
    height: 2rem;
    top: calc(2.5rem - 1rem); // Half of 5rem nav height minus half of button height
    left: 1rem;
    cursor: pointer;
    color: ${e=>{let{theme:t}=e;return t.colors.text}};
    
    svg {
        width: 2rem;
        height: 2rem;
    }
`,f=r.Ay.div`
    position: relative;
    height: 100%;
`,x=r.Ay.div`
    display: ${e=>e.isOpen?"flex":"none"};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
    z-index: 99;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,v=(0,r.Ay)(n.N_)`
    padding: 1rem;
    color: ${e=>{let{theme:t}=e;return t.colors.text}};
    font-size: 1.5rem;
    cursor: pointer;
    text-decoration: none;
    
    &:hover {
        color: ${e=>{let{theme:t}=e;return t.colors.primary}};
    }
`;function y(){const[e,t]=(0,i.useState)(!1);return(0,c.jsxs)(f,{children:[(0,c.jsx)(p,{onClick:()=>t(!e),children:(0,c.jsx)(u.A,{})}),(0,c.jsxs)(x,{isOpen:e,children:[(0,c.jsx)(v,{activeClass:"active",to:"hero",spy:!0,smooth:!0,offset:-80,duration:500,onClick:()=>t(!1),children:"Home"}),(0,c.jsx)(v,{activeClass:"active",to:"AboutMe",spy:!0,smooth:!0,offset:-80,duration:500,onClick:()=>t(!1),children:"About Me"}),(0,c.jsx)(v,{activeClass:"active",to:"projects",spy:!0,smooth:!0,offset:-80,duration:500,onClick:()=>t(!1),children:"Projects"}),(0,c.jsx)(v,{activeClass:"active",to:"contact",spy:!0,smooth:!0,offset:-80,duration:500,onClick:()=>t(!1),children:"Contact"})]})]})}const j=r.Ay.nav`
    background: ${e=>{let{theme:t}=e;return t.colors.primary}};
    height: 5rem;
    width: 100vw;
    position: sticky;
    top: 0;
    z-index: 2000;
`,b=r.Ay.div`
    @media screen and (max-width: 720px) {
        display: none;
    }
`,g=r.Ay.div`
    display: none;
    @media screen and (max-width: 720px) {
        display: block;
    }
`;function k(){return(0,c.jsxs)(j,{children:[(0,c.jsx)(b,{children:(0,c.jsx)(m,{})}),(0,c.jsx)(g,{children:(0,c.jsx)(y,{})})]})}}}]);
//# sourceMappingURL=949.32869d2f.chunk.js.map