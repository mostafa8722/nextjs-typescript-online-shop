import { styled } from "@mui/system";


import { useEffect } from "react";

import {IoMdAddCircle,IoIosRemoveCircle} from "react-icons/io"
import {TbTruckReturn} from "react-icons/tb"


const   BodyEl = styled("div")(()=>`
   display:flex;

   flex-direction:column;
   padding:0.5rem 1rem;
`)

const TitleEl = styled("h2")(()=>`
color:#454545;
font-size:1rem;
font-weight:bold;
margin-top:1rem;
`)
const TitleEnglishEl = styled("h4")(()=>`
color:#787878;
font-size:0.9rem;
margin-top:0.5rem;
`)

const ColorSectionEl = styled("div")(()=>`
display:flex;
align-items:center;
margin-top:1rem;

`)

const TitleColorEl = styled("span")(()=>`
color:#565656;
font-size:0.8rem;
margin-left:0.3rem;
font-weight:bold;
`)

const ColorBoxEl = styled("div")(()=>`
display:flex;
  padding:0.3rem 0.6rem;
  border-radius:0.2rem;
  border:0.04rem solid #eeeeee;
  margin-left:0.3rem;

`)
const ColorBoxShapeEl = styled("div")<{color:string}>(({color})=>`
  width:20px;
  height:20px;
  background:${color};
  border-radius:50%;
  box-shadow :0.1rem 0.1rem 0.5rem 0.1rem rgba(0,0,0,0.05);
`)
const ColorBoxTitleEl = styled("span")(()=>`
color:#676767;
font-size:0.8rem;
margin-right:0.3rem;
`)

const GarantiSectionEl = styled("div")(()=>`
 display:flex;
 flex-direction:column;
 margin-top:1rem;
  
`)

const GarantiTitleEl = styled("span")(()=>`
color:#565656;
font-size:0.8rem;
font-weight:bold;


`)
const GarantiTextEl = styled("span")(()=>`
color:#787878;
font-size:0.8rem;
margin-top:0.4rem;

`)

const CountSectionEl = styled("div")(()=>`
 display:flex;
 margin-top:1rem;
 align-items:center;
  
`)

const  CountTitleEl = styled("span")(()=>`
color:#565656;
font-size:0.8rem;
font-weight:bold;
margin-left:0.5rem;


`)


const CountBoxEl = styled("div")(()=>`
 display:flex;
padding:0.3rem 0.6rem;
border-radius:0.5rem;
background:#aaaaaa;
  align-items:center;
`)

const CountAddBoxEl = styled(IoMdAddCircle)(()=>`
color:#ffffff;
font-size:1.5rem;
margin-left:0.5rem;
cursor:pointer;
`)
const CountNumberBoxEl = styled("span")(()=>`
font-family: 'vazir FaNum'!important;
margin-left:0.5rem;
color:#ffffff;
`)
const CountSubBoxEl = styled(IoIosRemoveCircle)(()=>`
color:#ffffff;
font-size:1.5rem;
cursor:pointer;
`)


const PriceSectionEl = styled("div")(()=>`
 display:flex;
 margin-top:1rem;
 align-items:center;
  
`)

const  PriceTitleEl = styled("span")(()=>`
color:#565656;
font-size:0.8rem;
font-weight:bold;
margin-left:0.5rem;`)

const  PriceTextEl = styled("span")(()=>`
font-family: 'vazir FaNum'!important;
color:#ff2200;
font-size:1.2rem;
margin-left:0.3rem;`)

const  PriceUnitEl = styled("span")(()=>`
color:#565656;
font-size:0.9rem;
`)

const  CartBtnEl = styled("button")(()=>`
color:#ffffff;
font-size:1rem;
margin-top:1rem;
background:#ff2200;
width:200px;
  border-radius:0.5rem;
  padding:0.5rem 1.5rem;
margin-left:0.5rem;`)

const  BottomSectionEl = styled("div")(()=>`
margin-top:1rem;
display:grid;
grid-template-columns : repeat(3,1fr);
border-top:0.05rem solid #eeeeee;
padding-top:0.6rem;
`)

const  BottomItemSectionEl = styled("div")<{border?:string}>(({border})=>`
display:flex;
flex-direction:column;
align-items:center;
height:55px;
justify-content:end;
border-left:${border?border:"unset"};
`)
const  BottomItemTitleEl = styled("div")(()=>`
font-size:0.9rem;
color:#676767;
margin-top:0.5rem;
`)


const ProductInforamtion = ()=>{

    const formatPrice = (price:number)=>  Number(price).toLocaleString()+" ";

    
    return(
        <>
        <BodyEl>
         <TitleEl>گوشی موبایل سامسونگ مدل جدید</TitleEl>
         <TitleEnglishEl>a10-23 510 ram sd</TitleEnglishEl>


         <ColorSectionEl>
           <TitleColorEl>رنگ : </TitleColorEl>
           <ColorBoxEl>
             <ColorBoxShapeEl color="#ffffff"/>
             <ColorBoxTitleEl>سفید</ColorBoxTitleEl>
           </ColorBoxEl>
           <ColorBoxEl>
             <ColorBoxShapeEl color="#ff2200"/>
             <ColorBoxTitleEl>قرمز</ColorBoxTitleEl>
           </ColorBoxEl>

           <ColorBoxEl>
             <ColorBoxShapeEl color="#ff3"/>
             <ColorBoxTitleEl>زرد</ColorBoxTitleEl>
           </ColorBoxEl>

         </ColorSectionEl>

         <GarantiSectionEl>
            <GarantiTitleEl>نوع گارانتی :</GarantiTitleEl>
            <GarantiTextEl>بدون گارانتی</GarantiTextEl>
         </GarantiSectionEl>
      

         <CountSectionEl>
            <CountTitleEl>تعداد :</CountTitleEl>
            <CountBoxEl> 
               <CountAddBoxEl/>
               <CountNumberBoxEl>13</CountNumberBoxEl>
               <CountSubBoxEl/>
            </CountBoxEl>
         </CountSectionEl>

         <PriceSectionEl>
            <PriceTitleEl>قیمت :</PriceTitleEl>
            <PriceTextEl> {formatPrice(23000000)}</PriceTextEl>
            <PriceUnitEl> تومان</PriceUnitEl>
            
         </PriceSectionEl>
         <CartBtnEl> افزودن به سبد خرید</CartBtnEl>

         <BottomSectionEl>
            <BottomItemSectionEl border="0.05rem solid #eeeeee">
            <TbTruckReturn size={35} color="#787878" />
                <BottomItemTitleEl>تضمین اصالت کالا</BottomItemTitleEl>
            </BottomItemSectionEl>
            <BottomItemSectionEl  border="0.05rem solid #eeeeee">
            <TbTruckReturn size={35} color="#787878" />
                <BottomItemTitleEl>7 روز ضمانت بازگشت</BottomItemTitleEl>
            </BottomItemSectionEl>
            <BottomItemSectionEl>
                <TbTruckReturn size={35} color="#787878" />
                <BottomItemTitleEl>ارسال سریع به سراسر کشور</BottomItemTitleEl>
            </BottomItemSectionEl>

         </BottomSectionEl>
             
        </BodyEl>
        
        </>
    );
}
export default ProductInforamtion;