import { styled } from "@mui/system";
import CustomImageViewer from "../../../app/customImageViewer";


const ImageEl = styled(CustomImageViewer)(()=>`
width:200px;
`)
const EmptyEl = styled("div")(()=>`
height:400px;
display:flex;
justify-content:center;
align-items:center;

flex-direction:column;

`)

const TextEl = styled("h4")(()=>`
font-size:1rem;
font-weight:bold;
color:#565656;
margin-top:2rem;
`)
const Empty =  ()=>{
    return(<>
       <EmptyEl>
          <ImageEl src="/images/cart-empty.png" />
          <TextEl>سبد خرید شما خالی می باشد</TextEl>
       </EmptyEl>
    </>);
}
export default Empty;