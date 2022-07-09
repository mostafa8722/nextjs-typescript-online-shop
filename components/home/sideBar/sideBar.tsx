import {styled} from "@mui/system"
import SideBarBanner from "./sideBarBanner";
import SideBarBannerByTitle from "./sideBarBannerByTitle";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from "@mui/material/useMediaQuery";
import SideBarBannerBoxContent from "./sideBarBoxContent";
import SideBarBannerNoImage from "./sideBarBannerNoImage";

interface Props {

    isMobile?: boolean;
    isTablet?: boolean;
  
  }
  
const SideBarEl = styled("aside")<Props>(({isTablet,isMobile})=>`
   display:grid;
   grid-row-gap : ${(isTablet||isMobile)?"10px":"40px"};
   padding:0rem 0rem 0rem 0.25rem;
 

`)
const SideBar =()=>{
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));
    const isLaptop = useMediaQuery(theme.breakpoints.down('lg'));
    const isDesktop = useMediaQuery(theme.breakpoints.down('xl'));
    const items = [
        {id:1,title:"راهنمای خرید دوربین برای عکاسی",src:"/images/best-landscape-camera-Cover.jpg"},
        {id:2,title:"راهنمای خرید دوربین برای کارهای گرافیکی",src:"/images/monitors-graphic-design-cover.jpg"},
        {id:3,title:"راهنمای خرید دوربین برای کارهای گرافیکی",src:"/images/monitors-graphic-design-cover.jpg"},
        {id:4,title:"راهنمای خرید دوربین برای کارهای گرافیکی",src:"/images/monitors-graphic-design-cover.jpg"},
      
    ]
    return (
        <> 
        <SideBarEl isMobile={isMobile} isTablet={isTablet}>
            <SideBarBanner src="/images/contact.jpg"/>
            <SideBarBannerByTitle title="اسمبل آنلاین" src="/images/assemble.jpg"/>
            <SideBarBannerByTitle title="اسمبل آنلاین" src="/images/assemble.jpg"/>
            <SideBarBannerBoxContent items={items} title = "راهنمای خرید" />
            <SideBarBannerNoImage color="#ff2200" title1="  خرید کالاهای" title2="استوک" />
            <SideBarBannerNoImage color="#ff3" title1="  خرید کالاهای" title2="استوک" />
            <SideBarBannerBoxContent items={items} title = "راهنمای خرید" />

        </SideBarEl>
        </>
    )
}
export default SideBar;