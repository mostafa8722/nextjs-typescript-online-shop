import { styled } from "@mui/system";
import HeaderSubCategory from "../../app/headerSubCategory";
import ProductSection1 from "./productSection1";


const   BodyPageEl = styled("div")(()=>`
display:flex;
flex-direction:column;
margin:1rem 1rem;
`)


const ProductPageComponents = ()=>{
    return(
        <>
        <BodyPageEl>
            <HeaderSubCategory/>
            <ProductSection1 />
      
             
        </BodyPageEl>
        
        </>
    );
}
export default ProductPageComponents;