
import HeaderBanner from "./headerBanner";
import Sliders from "./sliders/sliders"
import {styled} from "@mui/system"
import SideBar from "./sideBar/sideBar";

const HomeContainerEl = styled('div')(()=>`
 display:flex;
 flex-direction:column;
 margin:0.1rem 1rem;
`)
const CustomGutterEl = styled("div")(()=>`
 display:grid;
 grid-template-columns:25% 75%;
 direction:rtl;
 
`)
const ContentEl = styled("div")(()=>`
 height:400px;
 background:#ababab;

`)
const SideBarEl = styled("div")(()=>`


`)
const HomeContainer = ()=>{

    return (
        <>
          <HomeContainerEl>
            <HeaderBanner src="/images/banner.jpg" />
            <Sliders/> 
              <CustomGutterEl>
                 <SideBarEl>
                    <SideBar/>
                 </SideBarEl>
                 <ContentEl/>
              </CustomGutterEl>

          </HomeContainerEl>
        </>
    )
}
export default HomeContainer;