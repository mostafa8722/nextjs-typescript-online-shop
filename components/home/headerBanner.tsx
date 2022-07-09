
import {styled} from "@mui/system"
import CustomImageViewer from "../../app/customImageViewer"
import Link from "next/link"
const BannerEl = styled("div")(()=>`

    height:90px;
    overflow:hidden;
    box-shadow : 1px 2px 1px 0px rgba(0,0,0,0.2);
    border-radius:0.3rem;
    margin-top:0.5rem;
`)

const CustomImageViewerEl  = styled(CustomImageViewer)(()=>`


width:100%!important;

`)

const LinkEl = styled("a")(()=>`
  display:grid;
`)
const HeaderBanner = (props:{src : string})=>{
  const {src } = props;
  
    return (
    <>
        
        <BannerEl> 
        <Link  href="/">
                <LinkEl   >
                            {src? 
                            
                            
                            
                            <CustomImageViewerEl
                            src={src}
                           
                            
                           
                            onClick={() => { }}
                        />: <></>}    
          
                               
                </LinkEl>

          </Link>

        </BannerEl>  
    </>
    );
}

export default HeaderBanner;