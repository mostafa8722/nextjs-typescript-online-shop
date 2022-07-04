import Link from "next/link"; 
import {styled} from "@mui/system"
import { BiSupport } from 'react-icons/bi';
import {LinkEl } from "../../../logic/customElement"




const ContainerEl = styled('div')(()=>`
 display:flex;
 justify-content:space-between;
 flex:1;
 padding-bottom:0.5rem;
 border-bottom:0.05rem solid #eeeeee;
`);


const LeftEl =  styled("div")(()=>`
display:flex;
margin-left:1.2rem;
margin-top:1rem;
`)

const BiSupportEl = styled(BiSupport)(()=>`
margin-right:0.5rem;
color:#999999;
font-size:1.6rem;
`)

const PhoneEl = styled("span")(()=>`
font-size:0.9rem;
color:#999999;
margin-top:0.3rem;
font-family: 'vazir FaNum'!important;

`)
const ContainerTop = ()=>{

    return (
    <>
    <ContainerEl>
        <div className="flex ">
        <Link href="/forgetPassword">   
            <LinkEl right="1" top="1" href="/forgetPassword"> مجله فروشگاه  </LinkEl>
        </Link>
        <Link href="/forgetPassword">   
            <LinkEl right="1" top="1" href="/forgetPassword"> درباه ی ما </LinkEl>
        </Link>
        <Link href="/forgetPassword">   
            <LinkEl right="1" top="1" href="/forgetPassword"> تماس با ما </LinkEl>
        </Link>
        
        </div>
        <LeftEl >
         <PhoneEl>09118448204</PhoneEl>
         <BiSupportEl />
        </LeftEl>
    </ContainerEl>
      </>
    );
}
export default ContainerTop;