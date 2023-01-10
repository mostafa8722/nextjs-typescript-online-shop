import { styled } from "@mui/system"
import CategoryFilter from "./categoryFilter"
import CategoryFilterByCheckbox from "./categoryFilterByCheckbox"
import CategoryFilterPrice from "./categoryFilterPrice"

const CategorySideBarEl = styled("div")(
	() => `

padding-left:1rem;
`
)

const CategorySideBar = () => {
	return (
		<>
			<CategorySideBarEl>
				<CategoryFilter />
				<CategoryFilterByCheckbox />
				<CategoryFilterByCheckbox />
				<CategoryFilterPrice />
			</CategorySideBarEl>
		</>
	)
}
export default CategorySideBar
