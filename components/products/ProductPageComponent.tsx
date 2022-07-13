import { styled } from "@mui/system";
import HeaderSubCategory from "../../app/headerSubCategory";
import ProductSection1 from "./productSection1";
import ProductSection2 from "./productSection2";


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
            <ProductSection2 />
      
             
        </BodyPageEl>
        
        </>
    );
}
export default ProductPageComponents;