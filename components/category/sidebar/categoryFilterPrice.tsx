import { styled } from "@mui/system"
import { FaAngleDown, FaAngleUp } from "react-icons/fa"

import { useState } from "react"
import Slider from "@mui/material/Slider"

import CustomInput from "../../../app/input/customInput"

import { useFormik } from "formik"
import * as yup from "yup"

const CategoryFilterEl = styled("div")(
	() => `
background:#ffffff;

border-radius:0.4rem;
padding-top:1rem;
padding-bottom:1rem;
margin-top:1rem;
box-shadow : 0.1rem 0.2rem 0.1rem 0.1rem rgba(0,0,0,0.1)

`
)

const TitleEl = styled("span")<{ top: number }>(
	({ top }) => `
   color:#565656;
   font-size:0.9rem;
   font-weight:bold;
   display:flex;
   justify-content:center;
   padding-top:${top}rem;
 `
)
const LineEl = styled("div")(
	() => `

   border-bottom:0.05rem dashed #ababab;
  margin:0.8rem 0.5rem;

`
)

const CategoryTitleEl = styled("div")(
	() => `
   display:flex;
    flex-direction:rtl;
    align-items:center;
    justify-content:space-between;
    margin : 0rem 1rem;
    cursor:pointer;

    
 `
)
const IconEl = styled(FaAngleDown)(
	() => `
 color:#565656;
 font-size:0.8rem;
 margin:0rem 0.8rem 0rem 0.2rem;
 
`
)
const IconUpEl = styled(FaAngleUp)(
	() => `
 color:#565656;
 font-size:0.8rem;
 margin:0rem 0.8rem 0rem 0.2rem;
 
`
)

const ContentEl = styled("div")(
	() => `
   display:flex;
    flex-direction:column;
    margin:0.2rem 1rem; 
    position:relative;

 `
)

const CheapTextEl = styled("span")(
	() => `
  
    position:absolute;
    bottom:-0.7rem;
    right:-0.5rem;
    color:#898989;
    font-size:0.7rem;

 `
)
const ExpensiveTextEl = styled("span")(
	() => `
  
 position:absolute;
 bottom:-0.7rem;
 left:-0.5rem;
 color:#898989;
 font-size:0.7rem;


`
)

const PriceInput = styled(CustomInput)(
	() => `
  font-size:0.5rem;  
  flex:1; 
   
`
)
const SectionInputEl = styled("div")(
	() => `
  display:flex;  
  align-items:center; 
  margin-top:0.5rem
   
`
)
const SectionInputText = styled("span")(
	() => `
  color:#898989;  
  font-size : 0.9rem;
  margin:0rem 0.5rem;
   
`
)

const CategoryFilterPrice = () => {
	const [showContent, setshowContent] = useState(true)
	const [showAllContent, setShowAllContent] = useState(false)

	const [valueSlider, setValueSlider] = useState([0, 100])

	const handleChangeSlider = (event: any, newValue: any) => {
		setValueSlider(newValue)
	}

	const validationSchemaLoginInfo = yup.object({
		name: yup
			.string()
			.min(3, " تعداد حروف نام کمتر از 3 نمی تواند باشد  ")
			.required("وارد کردن نام الزامی می باشد"),
	})

	const formik = useFormik({
		initialValues: {
			mobile: "",
			name: "",
		},
		validationSchema: { validationSchemaLoginInfo },
		onSubmit: (values: any) => {
			// addLoginName(values,props,router)
		},
	})

	const customInputStyle = (width: number | string) => {
		return {
			width: width,

			borderRadius: 5,
			height: 50,
			border: "0.1rem solid #eeeeee",

			fontSize: "0.8rem",
			margin: "0px auto",
			background: "#eeeeee",
		}
	}
	return (
		<>
			<CategoryFilterEl>
				<CategoryTitleEl onClick={() => setshowContent(!showContent)}>
					<TitleEl top={0}> محدوده ی قیمت </TitleEl>
					{showContent ? <IconUpEl /> : <IconEl />}
				</CategoryTitleEl>
				{showContent ? <LineEl /> : <></>}

				{showContent ? (
					<ContentEl>
						<SectionInputEl>
							<SectionInputText>از </SectionInputText>
							<PriceInput
								name="mobile"
								customStyle={customInputStyle("100%")}
								formik={formik}
								value={0}
							/>
							<SectionInputText>تومان</SectionInputText>
						</SectionInputEl>
						<SectionInputEl>
							<SectionInputText>تا </SectionInputText>
							<PriceInput
								name="mobile"
								customStyle={customInputStyle("100%")}
								formik={formik}
								value={0}
							/>
							<SectionInputText>تومان</SectionInputText>
						</SectionInputEl>

						<Slider
							aria-label="Volume"
							value={valueSlider}
							onChange={handleChangeSlider}
						/>
						<CheapTextEl>ارزان ترین</CheapTextEl>
						<ExpensiveTextEl>گران ترین</ExpensiveTextEl>
					</ContentEl>
				) : (
					<></>
				)}
			</CategoryFilterEl>
		</>
	)
}
export default CategoryFilterPrice
