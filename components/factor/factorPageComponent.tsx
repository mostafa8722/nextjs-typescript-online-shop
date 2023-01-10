import { styled } from "@mui/material"
import Link from "next/link"
import { formatPrice } from "../../utils/helper"

const ParentEl = styled("div")(
	() => `
direction:rtl;
margin:1.5rem 2rem;
`
)

const SectionEl = styled("div")(
	() => `
display:flex;
flex-direction:column;
`
)

const TitleEl = styled("h4")(
	() => `
color:#676767;
font-weight:bold;
font-size:0.95rem;
margin-top:0.5rem;

`
)
const DetailsEl = styled("div")(
	() => `


width:100%;
outline:none;

margin-top:0.75rem;

border-radius:0.4rem;
display:flex;
flex-direction:column;
overflow:hidden;



`
)

const FactorSectionEl = styled("div")(
	() => `
display:flex;
flex-direction:row;
height:50px;
align-items:center;
background:#fff;
padding-right:0.75rem;
`
)
const FactorTitleEl = styled("span")(
	() => `

color:#787878;
font-size:0.8rem;
font-weight:bold;

`
)
const FactorContentEl = styled("p")(
	() => `

color:#787878;
font-size:0.8rem;

`
)
const FactorEl = styled("div")(
	() => `
display:grid;
grid-template-columns : 4fr 4fr 4fr;
grid-column-gap: 0.1rem;
grid-row-gap: 0.1rem;
margin-bottom:0.1rem;


`
)

const TableHeaderEl = styled("div")(
	() => `

 background:#dddddd;
 height:45px;
 display:grid;
 grid-template-columns : 1fr 10fr 4fr 3fr 1fr 4fr;
 grid-column-gap: 0.1rem;
 margin-bottom:0.1rem;

`
)
const TableContentEl = styled("div")(
	() => `

 
 height:55px;
 display:grid;
 grid-template-columns : 1fr 10fr 4fr 3fr 1fr 4fr;

 margin-bottom:0.1rem;

`
)

const TableRowTotaltEl = styled("div")<{ bg?: boolean }>(
	({ bg }) => `

 
 min-height:55px;
 display:grid;
 grid-template-columns : 11fr 4fr 3fr 1fr 4fr;
background:${bg ? "#ff3" : "#ffffff"};
 margin-bottom:0.1rem;

`
)

const TableHeaderTextEl = styled("span")<{ content?: boolean }>(
	({ content }) => `

 color:#787878;
 font-size:0.9rem;
 padding-right:0.5rem;
 display:flex;
 align-items:center;
 font-weight:bold;
 background:${content ? "#ffffff" : "none"};
 justify-content:center;

`
)

const TableContentTextEl = styled("span")<{
	left?: string
	bg?: string
	bold?: boolean
	color?: string
}>(
	({ left, bg, bold, color }) => `

 color:${color ? color : "#787878"};
 font-size:0.9rem;
 padding-right:0.5rem;
 display:flex;
 align-items:center;
 margin-left:${left ? left : 0}rem;
 background:${bg ? bg : "#ffffff"};
 justify-content:center;
 font-family: 'vazir FaNum'!important;
 padding:1rem 1rem;
 font-weight:${bold ? "bold" : "unset"}

`
)
const ButtonEl = styled("div")(
	() => `
display:flex;
flex-direction:row-reverse;
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

  width:200px;
`
)

const FactorPageComponent = () => {
	const items = [
		{ title: "شماره فاکتور: ", content: "908752" },
		{ title: "تاریخ:", content: "1401/05/07 ساعت 18:01" },
		{ title: "نام و نام خانوادگی: ", content: "مصطفی نظربند" },
		{ title: "کد ملی: ", content: "2710052539" },
		{ title: "شماره تماس:", content: " 607013422412 - 09118448209" },
		{ title: "ایمیل:", content: "mostafa.8722@gmail.com" },
		{ title: "کد پستی: ", content: "4413845599" },
		{ title: "شماره بارنامه:", content: "-" },
		{ title: "وضعیت پرداخت: ", content: "پرداخت نشده" },
	]
	const headerTitles = [
		"ردیف",
		"محصول",
		"قیمت واحد",
		"تخفیف",
		"تعداد",
		"جمع کل",
	]
	const products = [
		{
			id: 1,
			title: "مانیتور ایسوس مدل وی اس 197 دی ای",
			price: 120000,
			totalPrice: 300000,
			count: 1,
			discount: 10000,
		},
		{
			id: 2,
			title: "مانیتور ایسوس مدل وی اس 197 دی ای",
			price: 120000,
			totalPrice: 300000,
			count: 1,
			discount: 10000,
		},
		{
			id: 3,
			title: "مانیتور ایسوس مدل وی اس 197 دی ای",
			price: 120000,
			totalPrice: 300000,
			count: 1,
			discount: 10000,
		},
		{
			id: 4,
			title: "مانیتور ایسوس مدل وی اس 197 دی ای",
			price: 120000,
			totalPrice: 300000,
			count: 1,
			discount: 10000,
		},
		{
			id: 5,
			title: "مانیتور ایسوس مدل وی اس 197 دی ای",
			price: 120000,
			totalPrice: 300000,
			count: 1,
			discount: 10000,
		},
		{
			id: 6,
			title: "مانیتور ایسوس مدل وی اس 197 دی ای",
			price: 120000,
			totalPrice: 300000,
			count: 1,
			discount: 10000,
		},
	]
	return (
		<ParentEl>
			<SectionEl>
				<TitleEl>مشخصات سفارش</TitleEl>
				<DetailsEl>
					<FactorEl>
						{items.map((item, index) => (
							<FactorSectionEl key={index}>
								<FactorTitleEl>{item.title}</FactorTitleEl>
								<FactorContentEl>{item.content}</FactorContentEl>
							</FactorSectionEl>
						))}
					</FactorEl>
					<FactorSectionEl>
						<FactorTitleEl>آدرس:</FactorTitleEl>
						<FactorContentEl>
							{" "}
							استان گیلان، شهر لاهیجان-گیلان، لاهیجان خیابان کاشف شرقی کوچه امام
							نا
						</FactorContentEl>
					</FactorSectionEl>
				</DetailsEl>
			</SectionEl>

			<SectionEl className="mt-10">
				<TitleEl>شرح محصول </TitleEl>
				<DetailsEl>
					<TableHeaderEl>
						{headerTitles.map((item: any, index: number) => (
							<TableHeaderTextEl key={index}>{item}</TableHeaderTextEl>
						))}
					</TableHeaderEl>

					{products.map((item: any, index: number) => (
						<TableContentEl key={item.id}>
							<TableContentTextEl left="0.1" bg="#e9e9e9">
								{item.id}
							</TableContentTextEl>
							<TableContentTextEl>{item.title}</TableContentTextEl>
							<TableContentTextEl>
								{formatPrice(item.price)}تومان
							</TableContentTextEl>
							<TableContentTextEl>
								{formatPrice(item.discount)}تومان
							</TableContentTextEl>

							<TableContentTextEl>{item.count}</TableContentTextEl>
							<TableContentTextEl>
								{formatPrice(item.totalPrice)}تومان
							</TableContentTextEl>
						</TableContentEl>
					))}
					<TableRowTotaltEl>
						<TableContentTextEl bg="#f5fdff">
							هزینه ارسال از طریق پست پیشتاز زمان دریافت به صورت تقریبی بین 2 تا
							4 روز کاری بوده که با توجه به محدوده جغرافیایی متغیر است. (تحویل
							در بازه زمانی 10 الی 17) سفارش به صورت کامل بیمه شده است.
						</TableContentTextEl>
						<TableContentTextEl bg={`#f5fdff`}>
							{formatPrice(2000)}تومان
						</TableContentTextEl>
						<TableContentTextEl bg={`#f5fdff`}>
							{formatPrice(2000000)}تومان
						</TableContentTextEl>

						<TableContentTextEl bg="#f5fdff">{3}</TableContentTextEl>
						<TableContentTextEl bg="#f5fdff">
							{formatPrice(100000)}تومان
						</TableContentTextEl>
					</TableRowTotaltEl>

					<TableRowTotaltEl>
						<TableContentTextEl bold={true}> جمع کل </TableContentTextEl>
						<TableContentTextEl>{formatPrice(2000)}تومان</TableContentTextEl>
						<TableContentTextEl>{formatPrice(2000000)}تومان</TableContentTextEl>

						<TableContentTextEl>{3}</TableContentTextEl>
						<TableContentTextEl>{formatPrice(100000)}تومان</TableContentTextEl>
					</TableRowTotaltEl>

					<TableRowTotaltEl>
						<TableContentTextEl bg="#dfdfdf" bold={true}>
							{" "}
							قیمت کل{" "}
						</TableContentTextEl>
						<TableContentTextEl bg="#dfdfdf"></TableContentTextEl>
						<TableContentTextEl bg="#dfdfdf"></TableContentTextEl>
						<TableContentTextEl bg="#dfdfdf"></TableContentTextEl>

						<TableContentTextEl color="#ff2200" bold={true} bg="#dfdfdf">
							{formatPrice(100000)}تومان
						</TableContentTextEl>
					</TableRowTotaltEl>
				</DetailsEl>
			</SectionEl>

			<ButtonEl>
				<Link href="#">
					<LinkEl href="#">تایید اطلاعات و ثبت سفارش</LinkEl>
				</Link>
			</ButtonEl>
		</ParentEl>
	)
}
export default FactorPageComponent
