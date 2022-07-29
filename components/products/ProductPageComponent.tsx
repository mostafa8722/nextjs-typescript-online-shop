import { styled } from "@mui/system";
import HeaderSubCategory from "../../app/headerSubCategory";
import ProductSection1 from "./productSection1";
import ProductSection2 from "./productSection2";
import ProductSection from "../home/content/productsSection";


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
            <ProductSection title=" محصولات مشابه" />  
             
        </BodyPageEl>
        
        </>
    );
}
export default ProductPageComponents;