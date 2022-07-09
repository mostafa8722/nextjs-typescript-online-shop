import {styled} from "@mui/system"
import CustomImageViewer from "../../../app/customImageViewer"


interface  Props  {
    src :string
}
const BannerEl = styled("div")(()=>`
   display:flex;
   margin-top:0.5rem;
   flex-direction:column;
   padding:0rem 0.5rem;
   height:100px;
   border-radius:0.4rem;


`)
const CustomImageViewerEl  = styled(CustomImageViewer)(()=>`


width:100%!important;

`)

const SideBarBanner =(props:Props)=>{
    const {src } = props;

    return (
        <> 
        <BannerEl>
           <CustomImageViewerEl
           
           src={src}
           />
        </BannerEl>
        </>
    )
}
export default SideBarBanner;