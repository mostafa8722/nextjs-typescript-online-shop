
import HeaderBanner from "./headerBanner";
import Sliders from "./sliders/sliders"
import {styled} from "@mui/system"
import SideBar from "./sideBar/sideBar";
import LeftContent from "./content/leftContent";

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
  padding-right:1rem;

`)
const SideBarEl = styled("div")(()=>`


`)
const HomeContainer = ()=>{

    return (
        <>
          <HomeContainerEl>
            <HeaderBanner src="/images/banner.jpg" />
            <Sliders key={12}/> 
              <CustomGutterEl>
                 <SideBarEl>
                    <SideBar/>
                 </SideBarEl>
                 <ContentEl>
                    <LeftContent/>
                 </ContentEl>
              </CustomGutterEl>

          </HomeContainerEl>
        </>
    )
}
export default HomeContainer;