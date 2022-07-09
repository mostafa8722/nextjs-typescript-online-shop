import {styled} from "@mui/system"
import CustomImageViewer from "../../../app/customImageViewer"


interface  Props  {
    src :string,
    title:string
}
const BannerEl = styled("div")(()=>`
   display:flex;

   flex-direction:column;
   padding:0rem 0.5rem;
   height:250px;
   border-radius:0.4rem;
   position:relative;
   background:#eeeaaa;


`)

const BannerButton = styled("button")(()=>`
   display:flex;
  
    position:absolute;
    border-radius:0.4rem;
    background:#ff2200;
    bottom:1rem;
    height:35px;
    left:5%;
    right:5%;
    color:#ffffff;
    display:flex;
    justify-content:center;
    align-items :center;

`)
const CustomImageViewerEl  = styled(CustomImageViewer)(()=>`


width:100%!important;

`)

const SideBarBannerByTitle =(props:Props)=>{
    const {src,title } = props;

    return (
        <> 
        <BannerEl>
           <CustomImageViewerEl
            height={200}
           src={src}
           />
           <BannerButton >{title}</BannerButton>
        </BannerEl>
        </>
    )
}
export default SideBarBannerByTitle;