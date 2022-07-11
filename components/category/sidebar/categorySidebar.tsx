import { styled } from "@mui/system";

const CategorySideBarEl= styled("div")(()=>`
background:#ffffff;
height:200px;
`)

const CategorySideBar = ()=>{
    return(<>
    <CategorySideBarEl></CategorySideBarEl>
    </>)
}
export default CategorySideBar;