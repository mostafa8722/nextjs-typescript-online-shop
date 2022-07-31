
import { styled } from "@mui/system";
import { formatPrice } from "../../../utils/helper";
import Checkbox from '@mui/material/Checkbox';
import CustomImageViewer from "../../../app/customImageViewer";

const DeliveryTypeEl = styled("div")(()=>`
\
width:100%;
outline:none;
box-shadow : 0.1rem 0.2rem 0.1rem 0.1rem rgba(0,0,0,0.1);
margin-top:0.75rem;
padding: 1rem;
border-radius:0.4rem;
display:flex;


background:#fff;
justify-content:space-between;
align-items:center;

`)

const TextTiterEl = styled("h4") (()=>`
color:#787878;
font-size : 0.8rem;
font-weight:bold;
`)

const TextBodyEl = styled("p") (()=>`
color:#787878;
font-size : 0.8rem;
margin-top:0.5rem;
`)
const TextEl = styled("div")(()=>`
display:flex;
flex-direction:column;
max-width:550px;

`)
const RightEl = styled("div")(()=>`
display:flex;


`)
const LeftEl = styled("div")(()=>`
display:flex;

`)

const TextPriceEl = styled("span") (()=>`
color:#ff2200;
font-size : 0.8rem;
font-family: 'vazir FaNum'!important;

`)

const CheckboxEl = styled(Checkbox)(()=>`
maring:0rem 0.5rem;
`)

const ImageEl = styled(CustomImageViewer)(()=>`
width:70px;
margin:0rem 0.5rem;
`)

interface IType {
    title:string,
    body:string
}
const DeliveryType =(props:IType)=>{
    const {title,body} = props;
    return (
    <DeliveryTypeEl> 
      
        <RightEl>
        <CheckboxEl/>
        <ImageEl src="/images/delivery.png" />
        <TextEl>
          <TextTiterEl> {title}</TextTiterEl>
          <TextBodyEl>  {body} </TextBodyEl>
        
        </TextEl>
            
        </RightEl>
        <LeftEl>
            <TextPriceEl>{formatPrice(2000000)} تومان</TextPriceEl>
        </LeftEl>
     
    </DeliveryTypeEl>
   
    )
}
export default DeliveryType;