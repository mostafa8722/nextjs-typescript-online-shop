import Link from "next/link"; 
import {styled} from "@mui/system"




const ContainerEl = styled('div')(()=>`
 display:flex;
 justify-content:space-between;
 flex:1;
`);

const LinkEl = styled('a')<{right?:string,top?:string}>(({right,top})=>`
margin:${top?top:'0.1'}rem ${right?right:'0.1'}rem 0rem 0rem;
color:#005eff;
font-size:0.8rem;
cursor:pointer;
`);
const ContainerTop = ()=>{

    return (
    <>
    <ContainerEl>
        <div className="flex ">
        <Link href="/forgetPassword">   
            <LinkEl right="2" top="1" href="/forgetPassword"> رمز عبور خود را فراموش کرده اید؟</LinkEl>
        </Link>
        <Link href="/forgetPassword">   
            <LinkEl right="2" top="1" href="/forgetPassword"> رمز عبور خود را فراموش کرده اید؟</LinkEl>
        </Link>
        </div>
        <div className="flex ">
         <span>09118448203</span>
        </div>
    </ContainerEl>
      </>
    );
}
export default ContainerTop;