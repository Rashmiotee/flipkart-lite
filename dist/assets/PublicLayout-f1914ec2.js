import{j as e,a as o,i as u,r as g,B as f,L as r,O as v}from"./index-4043e461.js";import{C as a}from"./Container-0abe7692.js";import{R as x}from"./Row-d15c3286.js";import{C as s}from"./Col-b4127909.js";import{B as d}from"./Button-4433769c.js";import{F as m}from"./Form-ce88fc19.js";import{N as l,a as i,D as n}from"./Navbar-74403850.js";import{F as N,a as b,b as y}from"./index-5c96420b.js";import"./ThemeProvider-77305239.js";import"./Button-7db2f9f9.js";import"./index-a1ae3952.js";import"./ElementChildren-c68d5b78.js";import"./TransitionWrapper-d20de747.js";import"./CardHeaderContext-ca8825a6.js";import"./iconBase-0cc71650.js";const k=()=>e.jsx("div",{className:"bg-light py-5 mt-5",children:e.jsx(a,{children:e.jsxs(x,{children:[e.jsx(s,{sm:6,children:e.jsx("h5",{children:"Flipkart - Lite"})}),e.jsxs(s,{sm:3,children:[e.jsx("h6",{children:"Quick Links"}),e.jsxs("ul",{children:[e.jsx("li",{children:"About"}),e.jsx("li",{children:"Privacy Policy"}),e.jsx("li",{children:"Terms and Conditions"}),e.jsx("li",{children:"Return Policy"})]})]}),e.jsx(s,{sm:3,children:e.jsxs("address",{children:[e.jsx("span",{className:"me-1",children:"Fake Street."}),e.jsx("span",{children:"Fake road, fake city."}),e.jsx("div",{children:"USA. 884421"}),e.jsx("div",{children:"+1 2255 4458 66"})]})})]})})});function S(){const{cart:h}=o(t=>t.bag),{customer:c}=o(t=>t.auth),[j,{isSuccess:p}]=u();return g.useEffect(()=>{p&&f.success("logout success")},[]),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"bg-dark",children:e.jsxs("div",{className:"d-flex justify-content-between align-items-center container text-light",children:[e.jsx("div",{children:e.jsxs(m.Select,{className:"form-select-sm ",children:[e.jsx("option",{children:"INR"}),e.jsx("option",{value:"1",children:"USD"}),e.jsx("option",{value:"2",children:"AUD"}),e.jsx("option",{value:"3",children:"CAD"})]})}),e.jsx("div",{children:"Get free delivery on orders over $100 "}),e.jsxs("div",{className:"d-flex",children:[e.jsx(r,{to:"/register",className:"nav-link border-end mx-2 pe-2",children:"Create Account"}),e.jsx(r,{to:"/login",className:"nav-link",children:"Sign In"})]})]})}),e.jsx(l,{expand:"lg",className:"bg-primary navbar-dark",children:e.jsxs(a,{children:[e.jsx(l.Brand,{href:"/",style:{fontStyle:"italic",fontWeight:"bold"},children:"Flipkart - lite"}),e.jsx(l.Toggle,{"aria-controls":"navbarScroll"}),e.jsxs(l.Collapse,{id:"navbarScroll",children:[e.jsxs(i,{className:"me-auto my-2 my-lg-0",style:{maxHeight:"100px"},navbarScroll:!0,children:[e.jsx(i.Link,{href:"#action1",children:"Men"}),e.jsx(i.Link,{href:"#action2",children:"Woman"}),e.jsx(i.Link,{href:"#action2",children:"Kids"}),e.jsx(i.Link,{href:"#action2",children:"Winter"})]}),e.jsxs("div",{className:"input-group me-2 w-25",children:[e.jsx(m.Control,{type:"search",placeholder:"Search","aria-label":"Search"}),e.jsx(d,{variant:"outline-light",children:e.jsx(N,{})})]}),c?e.jsxs(n,{children:[e.jsxs(n.Toggle,{variant:"light",id:"dropdown-basic",children:["welcome",c.name]}),e.jsxs(n.Menu,{children:[e.jsx(n.Item,{children:e.jsx(r,{to:"/user",className:"nav-link",children:"Order history"})}),e.jsx(n.Item,{children:e.jsx(r,{to:"/user/profile",className:"nav-link",children:"Profile"})}),e.jsx("button",{onClick:j,className:"dropdown-item text-danger",children:"logout"})]})]}):e.jsx(d,{variant:"outline-light me-2",children:e.jsx(b,{})}),e.jsxs(r,{to:"/cart",className:"btn btn-outline-light",children:[e.jsx(y,{}),h.length]})]})]})}),e.jsx(a,{children:e.jsxs(x,{className:"g-0",children:[e.jsx(s,{sm:4,children:e.jsxs("div",{className:"d-flex flex-column justify-content-center align-item-center p-5 bg-light",children:[e.jsx("p",{className:"m-0 text-center text-secondary ",children:"Download the app"}),e.jsx("p",{className:"m-0 text-center",children:"Lorem ipsum dolor sit amet."})]})}),e.jsx(s,{sm:4,children:e.jsxs("div",{className:"d-flex flex-column justify-content-center align-item-center p-5 bg-light",children:[e.jsx("p",{className:"m-0 text-center text-secondary ",children:"Download the app"}),e.jsx("p",{className:"m-0 text-center",children:"Lorem ipsum dolor sit amet."})]})}),e.jsx(s,{sm:4,children:e.jsxs("div",{className:"d-flex flex-column justify-content-center align-item-center p-5 bg-light",children:[e.jsx("p",{className:"m-0 text-center text-secondary ",children:"Download the app"}),e.jsx("p",{className:"m-0 text-center",children:"Lorem ipsum dolor sit amet."})]})})]})})]})}const W=()=>e.jsxs(e.Fragment,{children:[e.jsx(S,{}),e.jsx("div",{className:"my-5",children:e.jsx(v,{})}),e.jsx(k,{})]});export{W as default};