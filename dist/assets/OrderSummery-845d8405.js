import{a as x,f as h,j as e}from"./index-4043e461.js";import{B as j}from"./Button-4433769c.js";const u=({showCheckout:c=!0})=>{const{cart:i}=x(s=>s.bag),a=h(),t=()=>{const s=i.reduce((o,d)=>o+d.price,0),n=18*s/100,r=100,l=s+n+r;return{subTotal:s,tax:n,shipping:r,total:l}};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:" bg-light p-3 h-25",children:[e.jsx("h5",{children:"Order summary"}),e.jsxs("div",{className:"d-flex justify-content-between",children:[e.jsx("p",{children:"Subtotal"}),e.jsx("p",{children:t().subTotal})]}),e.jsx("hr",{}),e.jsxs("div",{className:"d-flex justify-content-between",children:[e.jsx("p",{children:"Shipping estimate"}),e.jsx("p",{children:t().shipping})]}),e.jsx("hr",{}),e.jsxs("div",{className:"d-flex justify-content-between",children:[e.jsx("p",{children:"Tax estimate"}),e.jsx("p",{children:t().tax})]}),e.jsx("hr",{}),e.jsxs("div",{className:"d-flex justify-content-between",children:[e.jsx("strong",{children:"Total"}),e.jsxs("strong",{children:[" ",t().total]})]}),c&&e.jsx(j,{onClick:s=>a("/checkout"),className:"btn btn-primary m-2",children:"Checkout"})]})})};export{u as O};
