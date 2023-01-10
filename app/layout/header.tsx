

import * as React from "react";
import {styled} from "@mui/system"

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from '@mui/material/styles';
import ContainerTop  from "./header/containerTop";
import ContainerSearch  from "./header/containerSearch";
import ContainerCategory  from "./header/containerCategory";

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
 background-color:#ffffff;
`);


const ContainerTopEl = styled('div')(()=>`
 display:flex;
 flex-direction:row;

 align-items:center;
`);
const ContainerSearchEl = styled('div')(()=>`
 display:flex;
 flex-direction:row;


`);
const ContainerCategoryEl = styled('div')(()=>`
 display:flex;
 flex-direction:row;
 height:50px;
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
              <ContainerSearchEl><ContainerSearch/></ContainerSearchEl>
              <ContainerCategoryEl><ContainerCategory/></ContainerCategoryEl>
           
           </LaptopEl>
}
    </header>
    </>)
}

export default Header;