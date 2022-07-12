import { styled } from "@mui/system";
import Switch from '@mui/material/Switch';
import CustomSelectInput from "../../../app/input/customSelectInput";
import { FaAngleDown } from 'react-icons/fa';
import CustomFilterSelectInput from "../../../app/input/customOrderSelectInput";
import { useState } from "react";
import Products from "./products";

const CategoryProductsEl= styled("div")(()=>`

`)
const ContentProductsEl= styled("div")(()=>`
background:#ffffff;
border-radius:0.4rem;
padding-bottom:1rem;
box-shadow : 0.1rem 0.2rem 0.1rem 0.1rem rgba(0,0,0,0.1)
`)
const ContentSectionTopEl = styled("div")(()=>`
display:flex;
justify-content:space-between;
padding:1rem ;


`)
const ContentTitleEl = styled("h2")(()=>`
color:#565656;
font-weight:bold;
font-size : 1.1rem;

`)
const LeftFilterContentSectionEl = styled("div")(()=>`
display:flex;


`)
const SwitchSectionEl = styled("div")(()=>`
  display:flex;
   align-items:center;
   padding-left:1rem;
   border-left:0.01rem solid #eeeeee;
`)
const SwitchEl = styled(Switch)(()=>``)
const SwitchElLabelEl = styled("span")(()=>`
font-size : 0.8rem;
color:#898989;
margin-right:0rem;
`)

const OrderFilterSectionEl = styled("div")(()=>`
  display:flex;
   align-items:center;
   margin-right:1rem;

`)

const OrderLabelEl = styled("span")(()=>`
font-size : 0.8rem;
color:#898989;
margin-right:0rem;
`)
const CustomSelectInputEl = styled("div")(()=>`
  display:flex;
   align-items:center;
   padding:0.3rem 0.5rem;
   border-radius:0.2rem;
   border:0.05rem solid #dddddd;
   cursor:pointer;
   margin-right:0.2rem;
   position:relative;
`)
const TitleSelectInputEl = styled("span")(()=>`
color:#787878;
font-size:0.8rem;
`)
const FaAngleDownEl = styled(FaAngleDown)(()=>`
color:#787878;
font-size:0.8rem;
`)
const CategoryProducts = ()=>{

  const [showSelectFilter,setShowSelectFilter] = useState(false)
    return(<>

    <CategoryProductsEl>
        <ContentProductsEl>
            <ContentSectionTopEl>
            <ContentTitleEl>گوشی موبایل</ContentTitleEl>
                <LeftFilterContentSectionEl>

                   <SwitchSectionEl >
                     <SwitchEl />
                     <SwitchElLabelEl >نمایش کالاهای موجود</SwitchElLabelEl>
                   </SwitchSectionEl>

                   <OrderFilterSectionEl >
                     <OrderLabelEl>مرتب سازی :</OrderLabelEl>
                     <CustomSelectInputEl onClick={()=>setShowSelectFilter(!showSelectFilter)}>
                        <TitleSelectInputEl>گران ترین</TitleSelectInputEl>
                        <FaAngleDownEl/>
                        {showSelectFilter? <CustomFilterSelectInput />:<></>}
                       
                     </CustomSelectInputEl>
                       
                      
                   </OrderFilterSectionEl>

                </LeftFilterContentSectionEl>
            </ContentSectionTopEl>

            <Products />
        </ContentProductsEl>
    </CategoryProductsEl>
    </>)
}
export default CategoryProducts;