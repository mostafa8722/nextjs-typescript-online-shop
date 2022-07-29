import { styled } from "@mui/system";
import CustomImageViewer from "../../../app/customImageViewer";
import {MdDelete} from "react-icons/md"
import {formatPrice} from "../../../utils/helper"



const CartEl = styled("div")(()=>`
display:flex;
justify-content:space-between;
padding:0.5rem 1rem;

border-bottom:0.09rem solid #eeeeee;
`)

const CartContentEl = styled("div")(()=>`
display:flex;
align-items:center;

`)
const ContentEl = styled("div")(()=>`
display:flex;
flex-direction:column;
margin:0rem 0.75rem;

`)
const CartPriceEl = styled("div")(()=>`
display:flex;
align-items:end;
`)
const PriceEl = styled("span")(()=>`
font-family: 'vazir FaNum'!important;
color:#ff1654;
font-size:1rem;
`)
const ImageEl = styled(CustomImageViewer)(()=>`
width:100px;
`)

const RemoveEl = styled(MdDelete)(()=>`
color:#ff1654;
font-size:1.5rem;
cursor:pointer;
margin:0rem 0.5rem;
`)


const TitleEl = styled("h2")(()=>`
font-size:1rem;
font-weight:bold;
color:#565656;
margin-top:2rem;
`)
const BodyEl = styled("h2")(()=>`
font-size:0.8rem;
font-weight:bold;
color:#787878;
margin-top:2rem;
`)
const SelectEl = styled("select")(()=>`
 border:0.1rem solid #eeeeee;
 border-radius:0.35rem;
 height:40px;
 font-family: 'vazir FaNum'!important;
 width:100px;
 margin:1rem 0.5rem;
 outline: none

`)

const OptionEl = styled("option")(()=>`

`)

interface ICart {
   id:number,
   title:string,
   src:string,
   price : string,
   body : string,
}
const Cart =  (props:ICart)=>{
   const {id,title,src,price,body} = props;
    return(<>
       <CartEl>
         <CartContentEl>
            <RemoveEl/>
            <ImageEl  src={src}/>
            <ContentEl>
               <TitleEl>{title}</TitleEl>
               <BodyEl>{body}</BodyEl>
               <SelectEl>
                  <OptionEl value="1">1</OptionEl>
                  <OptionEl value="2">1</OptionEl>
                  <OptionEl value="3">1</OptionEl>
               </SelectEl>
         
            </ContentEl>
         </CartContentEl>
         <CartPriceEl>
            <PriceEl>{formatPrice(+price)} تومان</PriceEl>
         </CartPriceEl>
         
          
       </CartEl>
    </>);
}
export default Cart;