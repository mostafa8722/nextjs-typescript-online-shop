import { Checkbox } from "@mui/material";
import { styled } from "@mui/system";

const AddressEl = styled("div")(()=>`
height:100px;
width:100%;
outline:none;
box-shadow : 0.1rem 0.2rem 0.1rem 0.1rem rgba(0,0,0,0.1);
margin-top:0.75rem;
padding:0.5rem 1rem;
border-radius:0.4rem;
display:flex;


background:#fff;
justify-content:space-between;
align-items:center;

`)

const TextAddressEl = styled("p") (()=>`
color:#787878;
font-size : 0.8rem;
`)

const RightEl = styled("div")(()=>`
display:flex;
align-items:center;

`)
const LeftEl = styled("div")(()=>`
display:flex;

`)

const ButtonEdit = styled("button")(()=>`
background:#0a0afe;
font-size:0.76rem;
margin-left:0.5rem;
color:#fff;
padding:0.5rem 1rem;
border-radius:0.4rem;

`)
const ButtonRemove = styled("button")(()=>`
background:#ff2200;
font-size:0.76rem;
color:#fff;
padding:0.5rem 1rem;
border-radius:0.4rem;

`)

const CheckboxEl = styled(Checkbox)(()=>`
maring:0rem 0.5rem;
`)

const Address =()=>{
    return (
    <AddressEl> 
        
        <RightEl>
        <CheckboxEl />
           <TextAddressEl>نسخه چاپی ارسال نشود</TextAddressEl>
        </RightEl>
        <LeftEl>
            <ButtonEdit>ویرایش</ButtonEdit>
            <ButtonRemove>حذف</ButtonRemove>
        </LeftEl>
     
    </AddressEl>
   
    )
}
export default Address;