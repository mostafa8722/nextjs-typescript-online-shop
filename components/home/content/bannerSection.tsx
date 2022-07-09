
import {styled} from "@mui/system"
import { FaAngleDown ,FaAngleUp} from 'react-icons/fa';

import Link from "next/link"; 
import CustomImageViewer from "../../../app/customImageViewer";
const BannerEl = styled("div")<{count:number}>(({count})=>`
display:grid;
grid-template-columns : repeat(${count} ,1fr);


`)
const BoxItemEl =styled("div")(()=>`
display:flex;
flex-direction:column;
align-items:center;
padding:1rem 0rem;
height:250px;


`)
const CustomImageViewerEl  = styled(CustomImageViewer)(()=>`


     height:100px;
     flex:1;
     border-radius:1rem;

`)
const LinkEl =styled("a")(()=>``)

const BannerSection = ()=>{

    const items = [
        {id:1,title:"امکان تحویل اکسپرس",src:"/images/banner1.jpg",link:"/images/banner1.jpg"},
        {id:1,title:"امکان تحویل اکسپرس",src:"/images/banner1.jpg",link:"/images/banner1.jpg"},
     
    ]
    return(<>
            <BannerEl count={items.length}>
              {
                items.map((item,index)=>
                <Link key={item.id} href={item.link}>
                 <LinkEl href={item.link}>
                 <BoxItemEl className={`${index==0?'pl-1':'pr-1'}`} key={item.id}>
                  <CustomImageViewerEl  src={item.src} />
                </BoxItemEl>

                 </LinkEl>
                </Link>
               
                )
              }
            </BannerEl>
    </>)
}
export default BannerSection;