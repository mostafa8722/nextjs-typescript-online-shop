import { styled } from "@mui/system";
import CustomImageViewer from "../../../app/customImageViewer";
import { AiFillStar } from 'react-icons/ai';
interface Props {
    id:number,
    title:string,
    image:string,
    price:number,
    discount:number
}
const ProductEl = styled("div")(()=>`
 display:flex;
 flex-direction:column;
 align-items:center;
 border-left:0.1rem solid #eeeeee;
 border-top:0.1rem solid #eeeeee;


 
 &:hover {
    box-shadow: 0 10px 22px 0 rgb(0 0 0 / 19%);
    border-left:0rem solid #eeeeee;
    border-top:0rem solid #eeeeee;
   
};

`) 
const CustomImageViewerEl = styled(CustomImageViewer)(()=>`
height:150px;
width:100%;
`)

const TitleEl = styled("h3")(()=>`
font-size:0.85rem;
font-weight:bold;
padding:0rem 0.5rem;
height:50px;

`) 
const RatingEl = styled("div")(()=>`
display:flex;
flex-direction:row-reverse;
padding:0rem 1rem;
width:100%;
`) 
const RateNumberEl = styled("span")(()=>`
font-size:0.9rem;
  color:#343434;
  margin-left:0.2rem;
  font-family: 'vazir FaNum'!important;

`) 

const RateIconEl = styled(AiFillStar)(()=>`
font-size:1rem;
  color:#f9bc00;

`) 

const PriceSectionEl = styled("div")(()=>`
display:flex;
justify-content:space-between;
margin:1rem 1rem;
padding:0rem 1rem;
width:100%;
`) 
const DiscountEl = styled("span")(()=>`
display:flex;
justify-content:center;
align-items:center;
background:#d3351d;
color:#ffffff;
padding:0.2rem 0.5rem;
border-radius:0.9rem;
font-size:0.8rem;
font-family: 'vazir FaNum'!important;

`) 
const PriceEl = styled("span")(()=>`
color:#343434;
font-size:1rem;
font-family: 'vazir FaNum'!important;
`) 
const PriceLineTroughEl = styled("span")(()=>`
color:#787878;
font-size:0.8rem;
font-family: 'vazir FaNum'!important;
display:flex;
flex-direction:row-reverse;
width:100%;
padding-left:1rem ;
text-decoration: line-through;
margin-bottom:1rem;
`) 

const Product = (props:Props)=>{
    const {id,title,image,price,discount} = props;
    const formatPrice = (proce:number)=>  Number(price).toLocaleString()+" "+"تومان";

    return (

        <>
        <ProductEl >
            <CustomImageViewerEl src={image} />
            <TitleEl>{title}</TitleEl>
            <RatingEl>
               <RateIconEl/>
               <RateNumberEl >3</RateNumberEl>
            </RatingEl>
            <PriceSectionEl>
              <DiscountEl>{discount}%</DiscountEl>
              <PriceEl>{formatPrice(price)}</PriceEl>
            </PriceSectionEl>
            <PriceLineTroughEl>{formatPrice(price)}</PriceLineTroughEl>
        </ProductEl>
        </>
    )
}

export default Product;