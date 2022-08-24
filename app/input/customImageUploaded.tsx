import { styled } from "@mui/material";

import {FaTrash} from "react-icons/fa"
import CustomImageViewer from "../customImageViewer";
const FileEl = styled("div")(()=>`
   height:80px;
   width:80px;
   border:0.08rem solid #ddd;
   border-radius:0.2rem;
   margin:10px 20px;
   position:relative;
   overflow:hidden;
   display:flex;
   align-items:center;
   justify-content:center;
   cursor:pointer;
`);


const FaTrashEl = styled(FaTrash)(()=>`
font-size:2rem;
color:red;
z-index:1;
pointer;
`)
const ImageViewEl = styled(CustomImageViewer)(()=>`
position:absolute;
width:100%;
height:100%;
opacity:0.75;
object-fit: cover;

`)

const CustomImageUploaded = (props:any)=>{

    const {handleSrc,src} = props;  


  
    


    return (
        <FileEl >
            
            <ImageViewEl  src={src} /> 
                 
               <FaTrashEl onClick={()=>handleSrc("")} />
            
        </FileEl>
    );

}
export default  CustomImageUploaded;