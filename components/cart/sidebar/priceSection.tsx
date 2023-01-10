import { styled } from "@mui/system"
import { FaAngleDown } from "react-icons/fa"
import Link from "next/link"

const PriceSectionEl = styled("div")(
	() => `
background:#ffffff;
min-height:200px;
border-radius:0.4rem;
padding-bottom:1rem;
box-shadow : 0.1rem 0.2rem 0.1rem 0.1rem rgba(0,0,0,0.1);
display:flex;
flex-direction:column;
position:sticky;
top:1rem;

`
)

const ItemEl = styled("div")(
	() => `
display:flex;
justify-content:space-between;
margin-top:1rem;
padding:0rem 0.5rem;
 
`
)

const TitleItemEl = styled("span")(
	() => `
 color:#787878;
 font-family: 'vazir FaNum'!important;
 margin-right:0.4rem;
 <font-size:0 className="9"></font-size:0>rem;
  
`
)
const NumberItemEl = styled("span")(
	() => `
 color:#565656;
 font-family: 'vazir FaNum'!important;
 margin-right:0.4rem;
 font-size:0.9rem;
 font-weight:bold;
  
`
)

const LinkEl = styled("a")(
	() => `
 color:#ffffff;
 background:#24c966;
 font-family: 'vazir FaNum'!important;
 
 font-size:0.9rem;
 font-weight:bold;
 display:flex;
 justify-content:center;
  align-items:center;
  height:45px;
  border-radius:0.3rem;
  margin:1rem 1rem 0.5rem 1rem;

`
)
const Linedivider = styled("a")(
	() => `
background:#eeeeee;
height:0.09rem;
margin:1rem 0rem 0.5rem 0rem;
 
`
)
const LinkEl2 = styled("a")(
	() => `
 margin-top:0.7rem;
 color:#565656;
 font-size:0.9rem;
 &:hover {

   color:#ff2200;
 }

`
)
const PriceSection = () => {
	return (
		<>
			<PriceSectionEl>
				<ItemEl>
					<TitleItemEl>مبلغ کل:</TitleItemEl>
					<NumberItemEl>28,300,000 تومان</NumberItemEl>
				</ItemEl>

				<ItemEl>
					<TitleItemEl>مبلغ کل:</TitleItemEl>
					<NumberItemEl>28,300,000 تومان</NumberItemEl>
				</ItemEl>
				<ItemEl>
					<TitleItemEl>مبلغ کل:</TitleItemEl>
					<NumberItemEl>28,300,000 تومان</NumberItemEl>
				</ItemEl>
				<Linedivider />
				<ItemEl>
					<TitleItemEl>مبلغ کل:</TitleItemEl>
					<NumberItemEl>28,300,000 تومان</NumberItemEl>
				</ItemEl>
				<Link href="#">
					<LinkEl href="#">ادامه ثبت سفارش</LinkEl>
				</Link>
			</PriceSectionEl>
		</>
	)
}
export default PriceSection
