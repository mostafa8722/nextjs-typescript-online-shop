import { styled } from "@mui/system"
import Product from "./product"

const ProductsEl = styled("div")(
	() => `
display:grid;
grid-template-columns : repeat(3,1fr)
`
)
const Products = () => {
	const items = [
		{
			id: 1,
			title: "میکروفن  کامیکا مدل CVM-VS09TC",
			image: "/images/image1.jpg",
			price: 20000,
			discount: 10,
		},
		{
			id: 2,
			title:
				"کاور ونزو مدل Hunter مناسب برای گوشی موبایل شیائومی Poco X3 Pro / Poco X3 / Poco X3 NFC",
			image: "/images/image2.jpg",
			price: 20000,
			discount: 10,
		},
		{
			id: 3,
			title: "میکروفن  کامیکا مدل CVM-VS09TC",
			image: "/images/image1.jpg",
			price: 20000,
			discount: 10,
		},
		{
			id: 4,
			title:
				"کاور ونزو مدل Hunter مناسب برای گوشی موبایل شیائومی Poco X3 Pro / Poco X3 / Poco X3 NFC",
			image: "/images/image2.jpg",
			price: 20000,
			discount: 10,
		},
		{
			id: 5,
			title: "میکروفن  کامیکا مدل CVM-VS09TC",
			image: "/images/image1.jpg",
			price: 20000,
			discount: 10,
		},
		{
			id: 6,
			title:
				"کاور ونزو مدل Hunter مناسب برای گوشی موبایل شیائومی Poco X3 Pro / Poco X3 / Poco X3 NFC",
			image: "/images/image2.jpg",
			price: 20000,
			discount: 10,
		},
		{
			id: 7,
			title: "میکروفن  کامیکا مدل CVM-VS09TC",
			image: "/images/image1.jpg",
			price: 20000,
			discount: 10,
		},
		{
			id: 8,
			title:
				"کاور ونزو مدل Hunter مناسب برای گوشی موبایل شیائومی Poco X3 Pro / Poco X3 / Poco X3 NFC",
			image: "/images/image2.jpg",
			price: 20000,
			discount: 10,
		},
		{
			id: 9,
			title: "میکروفن  کامیکا مدل CVM-VS09TC",
			image: "/images/image1.jpg",
			price: 20000,
			discount: 10,
		},
		{
			id: 10,
			title:
				"کاور ونزو مدل Hunter مناسب برای گوشی موبایل شیائومی Poco X3 Pro / Poco X3 / Poco X3 NFC",
			image: "/images/image2.jpg",
			price: 20000,
			discount: 10,
		},
		{
			id: 11,
			title: "میکروفن  کامیکا مدل CVM-VS09TC",
			image: "/images/image1.jpg",
			price: 20000,
			discount: 10,
		},
	]
	return (
		<>
			<ProductsEl>
				{items.map((item: any, index: number) => {
					return <Product key={item.id} {...item} />
				})}
			</ProductsEl>
		</>
	)
}

export default Products
