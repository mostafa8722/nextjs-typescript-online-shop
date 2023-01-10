import { styled } from "@mui/system"
import { FaAngleDown, FaAngleUp } from "react-icons/fa"

import Link from "next/link"
const BenefitEl = styled("div")<{ count: number }>(
	({ count }) => `
display:grid;
grid-template-columns : repeat(${count} ,1fr);
border-radius:0.4rem;
border:0.09rem solid #dddddd;
background:#ffffff;
`
)
const BoxItemEl = styled("div")(
	() => `
display:flex;
flex-direction:column;
align-items:center;
padding:1rem 0rem;


`
)
const LinkEl = styled("a")(() => ``)
const TitleEl = styled("span")(
	() => `
   color:#959595;
   font-size:0.8rem;
   margin-top:1rem;
`
)
const BenefitSection = () => {
	const items = [
		{ id: 1, title: "امکان تحویل اکسپرس", Icon: FaAngleDown, link: "/page/1" },
		{ id: 2, title: "امکان پرداخت در محل", Icon: FaAngleDown, link: "/page/2" },
		{
			id: 3,
			title: "7 روز هفته ،24 ساعته",
			Icon: FaAngleDown,
			link: "/page/3",
		},
		{
			id: 4,
			title: "هفت روز ضمانت بازگشت",
			Icon: FaAngleDown,
			link: "/page/4",
		},
		{ id: 5, title: "ضمانت اصل بودن", Icon: FaAngleDown, link: "/page/1" },
		{ id: 6, title: "راهنمای خرید", Icon: FaAngleDown, link: "/page/1" },
	]
	return (
		<>
			<BenefitEl count={items.length}>
				{items.map((item) => (
					<Link href={item.link} key={item.id}>
						<LinkEl href={item.link}>
							<BoxItemEl key={item.id}>
								<FaAngleDown />
								<TitleEl>{item.title}</TitleEl>
							</BoxItemEl>
						</LinkEl>
					</Link>
				))}
			</BenefitEl>
		</>
	)
}
export default BenefitSection
