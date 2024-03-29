import { styled } from "@mui/system"
import { FaAngleLeft } from "react-icons/fa"
import Link from "next/link"

const CategoryTitleEl = styled("div")(
	() => `
display:flex;
flex-direction:row;
align-items:center;
direction:rtl;
margin-bottom:1rem;
`
)

const CategoryTitleTextEl = styled("span")(
	() => `
color:#676767;
font-size:0.8rem;
`
)
const CategoryTitleIconEl = styled(FaAngleLeft)(
	() => `
color:#676767;
font-size:0.8rem;
margin-left:0.3rem;
margin-right:0.3rem;
`
)
const CategorySectionEl = styled("div")(
	() => `
display:grid;
grid-template-columns:25% 75%;
direction:rtl;
`
)
const LinkEl = styled("a")(
	() => `
 margin-top:0.3rem;
 color:#565656;
 &:hover {

   color:#ff2200;
 }

`
)
const HeaderSubCategory = () => {
	return (
		<>
			<CategoryTitleEl>
				<CategoryTitleTextEl>
					<Link href="#">
						<LinkEl href="#">خانه</LinkEl>
					</Link>
				</CategoryTitleTextEl>
				<CategoryTitleIconEl />
				<CategoryTitleTextEl>
					<Link href="#">
						<LinkEl href="#">دسته 1</LinkEl>
					</Link>
				</CategoryTitleTextEl>
				<CategoryTitleIconEl />
				<CategoryTitleTextEl>
					<Link href="#">
						<LinkEl href="#">دسته دو</LinkEl>
					</Link>
				</CategoryTitleTextEl>
				<CategoryTitleIconEl />
				<CategoryTitleTextEl>دسته سه</CategoryTitleTextEl>
			</CategoryTitleEl>
		</>
	)
}
export default HeaderSubCategory
