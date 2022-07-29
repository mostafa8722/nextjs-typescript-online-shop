
import ProductCard from "./productCard"
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import {useState} from "react"
import dynamic from 'next/dynamic'
import CustomCarousel from "./customCarousel"
import { styled } from "@mui/system";


interface Arr { 
  id:number,
  title:string,
  discount:number,
  src :string,
  link :string,
  price:string,
}
const lists:Arr[] = [
    {link:"/images/product.jpg",src:"/images/product1.jpg",title:"موبایل نوکیا مدل جدید",id:1,price:"2000000",discount:10,},
    {link:"/images/product.jpg",src:"/images/product2.jpg",title:"موبایل نوکیا مدل جدید",id:1,price:"2000000",discount:10,},
    {link:"/images/product.jpg",src:"/images/product1.jpg",title:"موبایل نوکیا مدل جدید",id:1,price:"2000000",discount:10,},
    {link:"/images/product.jpg",src:"/images/product2.jpg",title:"موبایل نوکیا مدل جدید",id:1,price:"2000000",discount:10,},
    {link:"/images/product.jpg",src:"/images/product1.jpg",title:"موبایل نوکیا مدل جدید",id:1,price:"2000000",discount:10,},
    {link:"/images/product.jpg",src:"/images/product2.jpg",title:"موبایل نوکیا مدل جدید",id:1,price:"2000000",discount:10,},
    {link:"/images/product.jpg",src:"/images/product1.jpg",title:"موبایل نوکیا مدل جدید",id:1,price:"2000000",discount:10,},
    {link:"/images/product.jpg",src:"/images/product2.jpg",title:"موبایل نوکیا مدل جدید",id:1,price:"2000000",discount:10,},
  
  
];
/*const Scroll = dynamic(
    () => import('./owlCarousel'),
    { ssr: false }
  );*/
  type ComponentProps = {
    isPhone?: boolean;
      justifyContent?: string;
  };
  export const Item = styled("div")<ComponentProps>(
    ({ isPhone }) => `
        
              display:flex;
              flex-direction:column;
              align-items:center;
              justify-content:center;
              width:${isPhone ? "80px" : "300px"};
              height:${isPhone ? "110px" : "300px"};
              padding:1%;
              margin:0.5%;
              border-radius:50%;
              cursor:pointer;
                    `
  );
const SlidersProduct =  ()=>{

   
    let items =
    lists &&
    lists.map((list: Arr, i: number) => {
      return (
        <Item
          key={i}
          isPhone={false}
          onClick={() => {
          //  Router.push("/shop/" + x._id);
          }}
        >
            <ProductCard 
            key={i}
            title={list.title}
            discount={list.discount}
             link={list.link}
            src={list.src}
            price={list.price}
            id={list.id}
             />

        </Item>
      );
    });
    return (

        <>
        <CustomCarousel   count={4} arrowSize={60} items={items} />
        
        </>
    )

}
export default SlidersProduct;