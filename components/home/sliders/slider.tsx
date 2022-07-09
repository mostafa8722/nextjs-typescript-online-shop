import React from "react";
import CustomImageViewer from "../../../app/customImageViewer";
import Link from "next/link";
import {styled} from "@mui/system"
interface Props {
    title:string,
    src :string;
    id : number
}

const SliderEl = styled("div")(()=>`

overflow:hidden;

`)

const LinkEl  = styled("a")(()=>`
 
  display:grid;
  grid-auto-columns: auto;
  overflow:hidden;
  height:500px; 
`) 

const CustomImageViewerEl  = styled(CustomImageViewer)(()=>`
height:500px!important;
position:absolute!important;
width:100%!important;
padding:0.5rem;



`)
const Slider = (props:Props)=>{
    const {id,title,src} = props;
 return (
    <>
    <SliderEl>
    <Link  href="/">
                <LinkEl   >
                            {src? 
                            
                            
                            
                            <CustomImageViewerEl
                            src={src}
                           
                            width="700px"
                            height="300px"
                            objectFit="cover"
                            onClick={() => {
                              
                            }}
                        />: <></>}    
          
                               
                </LinkEl>

          </Link>
    </SliderEl>
      
    </>
 );
}
export default Slider;