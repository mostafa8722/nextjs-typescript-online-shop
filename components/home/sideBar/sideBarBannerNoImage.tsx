import {styled} from "@mui/system"
import CustomImageViewer from "../../../app/customImageViewer"
import Link from "next/link"; 

interface  Props  {
    title1 :string,
    title2:string,
    color:string,
}
const BannerEl = styled("a")<{color:string}>(({color})=>`
   display:flex;

   flex-direction:row;
   padding:0rem 0.5rem;
   height:80px;
   border-radius:0.4rem;
   position:relative;
   background:${color};
   justify-content:center;
   align-items :center;


`)
const TitleEl1 = styled("span")(()=>`
     color:#ffffff;
     font-size : 1rem;
     font-weight:bold;
`)

const TitleEl2 = styled("span")(()=>`
     background:#ffffff;
     font-size : 1rem;
     padding:0.3rem 0.5rem;
     font-weight:bold;
     display:flex;
     border-radius:0.1rem;
     margin-right:0.3rem;
`)





const SideBarBannerNoImage =(props:Props)=>{
    const {title2,title1,color } = props;

    return (
        <> 
        <Link href="/test">
        <BannerEl color={color}>
            <TitleEl1>{title1}</TitleEl1>
            <TitleEl2>{title2}</TitleEl2>
        </BannerEl>
        </Link>
        
        </>
    )
}
export default SideBarBannerNoImage;