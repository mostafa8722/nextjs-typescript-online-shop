import { styled } from "@mui/system";
import Cart from "./content/cartContent";
import CartSideBar from "./sidebar/cartSidebar";


const   CartPageEl = styled("div")(()=>`
diplay:flex;
flex-direction:column;
margin:1rem 1rem;
`)


const   CartSectionEl = styled("div")(()=>`
display:grid;
grid-template-columns:9fr 3fr;
grid-column-gap: 20px;
direction:rtl;
position:relative;
`)


const CategoryPageComponent = ()=>{
    return(<>
    <CartPageEl>
      
      <CartSectionEl>
       
         <Cart/>
         <CartSideBar/>
      </CartSectionEl>
    </CartPageEl>
    </>)
}
export default CategoryPageComponent;