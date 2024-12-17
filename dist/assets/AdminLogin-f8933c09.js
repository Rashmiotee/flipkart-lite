import{f as x,n as h,r as t,B as m,j as s,l as j}from"./index-4043e461.js";import{u as g,c as w,a as d}from"./index.esm-1726fb08.js";import{S as v}from"./Spinner-a23edf41.js";import{C as S}from"./Container-0abe7692.js";import{R as C}from"./Row-d15c3286.js";import{C as E}from"./Col-b4127909.js";import{C as e}from"./Card-20150986.js";import{B as b}from"./Button-4433769c.js";import"./ThemeProvider-77305239.js";import"./CardHeaderContext-ca8825a6.js";import"./Button-7db2f9f9.js";const H=()=>{const l=x(),[c,{isLoading:p,isError:a,isSuccess:o,error:u}]=h(),r=g({initialValues:{email:"",password:""},validationSchema:w({email:d().required("Enter email"),password:d().required("Enter password")}),onSubmit:(i,{resetForm:f})=>{c(i),f()}}),n=i=>j({"form-control my-2":!0,"is-invalid":r.touched[i]&&r.errors[i],"is-valid":r.touched[i]&&!r.errors[i]});return t.useEffect(()=>{o&&(m.success("admin login success"),l("/admin"))},[o]),t.useEffect(()=>{a&&m.error(u.data.message||"somthing went wrong")},[a]),p?s.jsxs(s.Fragment,{children:["please wait....",s.jsx(v,{})]}):s.jsx(s.Fragment,{children:s.jsx(S,{children:s.jsx(C,{children:s.jsx(E,{sm:{span:6,offset:3},children:s.jsxs(e,{children:[s.jsx(e.Header,{children:"Admin Login"}),s.jsx(e.Body,{children:s.jsxs("form",{onSubmit:r.handleSubmit,children:[s.jsxs("div",{children:[s.jsx("input",{type:"email",...r.getFieldProps("email"),className:n("email")}),s.jsx("span",{className:"invalid-feedback",children:r.errors.email})]}),s.jsxs("div",{children:[s.jsx("input",{type:"password",...r.getFieldProps("password"),className:n("password")}),s.jsx("span",{className:"invalid-feedback",children:r.errors.password})]}),s.jsx(b,{type:"submit",children:"Login"})]})})]})})})})})};export{H as default};
