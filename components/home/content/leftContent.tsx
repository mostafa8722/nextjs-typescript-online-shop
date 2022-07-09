import {styled} from "@mui/system"

import { useTheme } from '@mui/material/styles';
import useMediaQuery from "@mui/material/useMediaQuery";
import SpecialProduct from "./specialProduct";
import BenefitSection from "./benefitSection";
import ProductSection from "./productsSection";
import SlidersProduct from "./sliders";
import BannerSection from "./bannerSection";
import Sliders from "../sliders/sliders";


interface Props {

    isMobile?: boolean;
    isTablet?: boolean;
  
  }
  
const ContentEl = styled("div")<Props>(({isTablet,isMobile})=>`
   display:grid;
   grid-row-gap : ${(isTablet||isMobile)?"10px":"40px"};
   padding:0rem 0rem 0rem 0.25rem;
 

`)
const LeftContent =()=>{
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));
    const isLaptop = useMediaQuery(theme.breakpoints.down('lg'));
    const isDesktop = useMediaQuery(theme.breakpoints.down('xl'));
   
    return (
        <> 
        <ContentEl isMobile={isMobile} isTablet={isTablet}>
          <SpecialProduct/>
          <BenefitSection/>
          <ProductSection title="پربازدیدترین محصولات" />  

          <BannerSection />
          <Sliders key={11} />
          <ProductSection title="پربازدیدترین محصولات" /> 
        </ContentEl>
        </>
    )
}
export default LeftContent;