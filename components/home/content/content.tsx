import {styled} from "@mui/system"

import { useTheme } from '@mui/material/styles';
import useMediaQuery from "@mui/material/useMediaQuery";
import SpecialProduct from "./specialProduct";


interface Props {

    isMobile?: boolean;
    isTablet?: boolean;
  
  }
  
const ContentEl = styled("div")<Props>(({isTablet,isMobile})=>`
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
        <ContentEl isMobile={isMobile} isTablet={isTablet}>
          <SpecialProduct/>
          <
        </ContentEl>
        </>
    )
}
export default SideBar;