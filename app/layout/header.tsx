

import * as React from "react";
import {styled} from "@mui/system"

import useMediaQuery from "@mui/material/useMediaQuery";
import {Devices} from "../../logic/Theme"
import { useTheme } from '@mui/material/styles';
import ContainerTop  from "./header/containerTop";

const HeaderEl = styled("div")(()=>`
 display :grid;
 background:#fff300;
  grid-template-columns:auto auto auto auto;
 
  column-gap: 10px;
  row-gap: 10px;
`)

const ItemEl = styled("div")(()=>`

`)

const LaptopEl = styled('div')(()=>`
 display:flex;
 flex-direction:column;
 direction:rtl;
`);


const ContainerTopEl = styled('div')(()=>`
 display:flex;
 flex-direction:row;
 height:35px;
 align-items:center;
`);
const ContainerSearchEl = styled('div')(()=>`
 display:flex;
 flex-direction:row;
 height:80px;
`);
const ContainerCategoryEl = styled('div')(()=>`
 display:flex;
 flex-direction:row;
 height:
`);


const Header = ()=>{ 
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));
    const isLaptop = useMediaQuery(theme.breakpoints.down('lg'));
    const isDesktop = useMediaQuery(theme.breakpoints.down('xl'));
  


   
    
   
   
  
    return (<>
     <header>
        {(isMobile || isTablet)?
         <h1>mobile menu</h1>
        :
           <LaptopEl>
              <ContainerTopEl><ContainerTop/></ContainerTopEl>
              <ContainerSearchEl/>
              <ContainerCategoryEl/>
           
           </LaptopEl>
}
    </header>
    </>)
}

export default Header;