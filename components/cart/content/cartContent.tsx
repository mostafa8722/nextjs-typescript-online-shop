import { styled } from "@mui/system";
import Switch from '@mui/material/Switch';
import CustomSelectInput from "../../../app/input/customSelectInput";
import { FaAngleDown } from 'react-icons/fa';

import { useState } from "react";
import Empty from "./empty";
import Cart from "./cart";



const CartEl= styled("div")(()=>`

`)
const ContentCartEl= styled("div")(()=>`
background:#ffffff;
border-radius:0.4rem;
padding-bottom:1rem;
box-shadow : 0.1rem 0.2rem 0.1rem 0.1rem rgba(0,0,0,0.1);
display:flex;
flex-direction:column;
`)


const CartContent = ()=>{

  const lists = [
    {link:"/images/product.jpg",src:"/images/product1.jpg",title:"موبایل نوکیا مدل جدید",body:"موبایل نوکیا مدل جدید",id:1,price:"2000000",discount:10,},
    {link:"/images/product.jpg",src:"/images/product2.jpg",title:"موبایل نوکیا مدل جدید",body:"موبایل نوکیا مدل جدید",id:2,price:"2000000",discount:10,},
    {link:"/images/product.jpg",src:"/images/product1.jpg",title:"موبایل نوکیا مدل جدید",body:"موبایل نوکیا مدل جدید",id:3,price:"2000000",discount:10,},
    {link:"/images/product.jpg",src:"/images/product2.jpg",title:"موبایل نوکیا مدل جدید",body:"موبایل نوکیا مدل جدید",id:1,price:"2000000",discount:10,},
    {link:"/images/product.jpg",src:"/images/product1.jpg",title:"موبایل نوکیا مدل جدید",body:"موبایل نوکیا مدل جدید",id:1,price:"2000000",discount:10,},
    {link:"/images/product.jpg",src:"/images/product2.jpg",title:"موبایل نوکیا مدل جدید",body:"موبایل نوکیا مدل جدید",id:1,price:"2000000",discount:10,},
    {link:"/images/product.jpg",src:"/images/product1.jpg",title:"موبایل نوکیا مدل جدید",body:"موبایل نوکیا مدل جدید",id:1,price:"2000000",discount:10,},
    {link:"/images/product.jpg",src:"/images/product2.jpg",title:"موبایل نوکیا مدل جدید",body:"موبایل نوکیا مدل جدید",id:1,price:"2000000",discount:10,},
  
  
]

    return(<>

    <CartEl>
        <ContentCartEl>
          
             {
              lists.map((item,index:number)=><Cart key={item.id} {...item} />)
              
              }
          
        </ContentCartEl>
    </CartEl>
    </>)
}
export default CartContent;