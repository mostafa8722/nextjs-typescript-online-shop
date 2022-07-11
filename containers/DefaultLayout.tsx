import { styled } from "@mui/system";
import React from "react";
import Footer from "../app/layout/footer"
import Header from "../app/layout/header"


const BodyEl = styled("div")(()=>`
 min-height:400px;
`)

const DefaultLayout = (props:any)=>{
    return (
        <>
         <Header /> 
         <BodyEl>
         {props.children}
        </BodyEl>  
       

        <Footer />  
        </>
    );
}
export default DefaultLayout;