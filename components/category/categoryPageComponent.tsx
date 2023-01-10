import { styled } from "@mui/system"
import CategoryProducts from "./content/categoryProducts"
import CategorySideBar from "./sidebar/categorySidebar"
import { FaAngleLeft } from "react-icons/fa"
import Link from "next/link"
import HeaderSubCategory from "../../app/headerSubCategory"

const CategoryPageEl = styled("div")(
	() => `
diplay:flex;
flex-direction:column;
margin:1rem 1rem;
`
)

const CategorySectionEl = styled("div")(
	() => `
display:grid;
grid-template-columns:25% 75%;
direction:rtl;
`
)

const CategoryPageComponent = () => {
	return (
		<>
			<CategoryPageEl>
				<HeaderSubCategory />
				<CategorySectionEl>
					<CategorySideBar />
					<CategoryProducts />
				</CategorySectionEl>
			</CategoryPageEl>
		</>
	)
}
export default CategoryPageComponent
