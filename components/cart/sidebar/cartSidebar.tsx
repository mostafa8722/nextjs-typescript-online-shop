import { styled } from "@mui/system"
import PriceSection from "./priceSection"

const CartSideBarEl = styled("div")(
	() => `

padding-left:1rem;

`
)

const CartSideBar = () => {
	return (
		<>
			<CartSideBarEl>
				<PriceSection />
			</CartSideBarEl>
		</>
	)
}
export default CartSideBar
