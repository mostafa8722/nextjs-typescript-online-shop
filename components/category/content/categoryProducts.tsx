import { styled } from "@mui/system";

const CategoryProductsEl= styled("div")(()=>`
background:#ff2200;
height:500px;
`)
const CategoryProducts = ()=>{
    return(<>
    <CategoryProductsEl/>
    </>)
}
export default CategoryProducts;