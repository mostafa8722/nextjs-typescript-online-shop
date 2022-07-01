import React from "react";
import Footer from "../app/layout/footer"
import Header from "../app/layout/header"


const DefaultLayout = (props:any)=>{
    return (
        <>
         { <Header />  } 
        {props.children}

       { <Footer />  } 
        </>
    );
}
export default DefaultLayout;