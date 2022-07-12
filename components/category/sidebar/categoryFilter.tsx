import { styled } from "@mui/system";
import { FaAngleDown } from 'react-icons/fa';
import Link from "next/link";
const CategoryFilterEl = styled("div")(() => `
background:#ffffff;
min-height:200px;
border-radius:0.4rem;
padding-bottom:1rem;
box-shadow : 0.1rem 0.2rem 0.1rem 0.1rem rgba(0,0,0,0.1)

`)

const TitleEl = styled("span")<{top:number}>(({top}) => `
   color:#565656;
   font-size:0.9rem;
   font-weight:bold;
   display:flex;
   justify-content:center;
   padding-top:${top}rem;
 `)
const LineEl = styled("div")(() => `

   border-bottom:0.05rem dashed #ababab;
  margin:0.8rem 0.5rem;

`)

const CategoryTitleEl = styled("div")(() => `
   display:flex;
    flex-direction:rtl;
    align-items:center;
    
 `)
const IconEl = styled(FaAngleDown)(() => `
 color:#565656;
 font-size:0.8rem;
 margin:0rem 0.8rem 0rem 0.2rem;
 
`)
const CategoryItemsEl = styled("ul")(() => `
   display:flex;
   flex-direction:column;
    flex-direction:rtl;
   
    margin-right:2rem;
    
 `)
 const CategoryItemEl = styled("li")(() => `
   display:flex;
    flex-direction:rtl;
    align-items:center;
    
    
 `)
 const CategoryNumberItemEl = styled("span")(() => `
 color:#47B5FF;
 font-family: 'vazir FaNum'!important;
 margin-right:0.4rem;
 font-size:0.8rem;
  
`)
 const LinkEl =styled("a")(()=>`
 margin-top:0.7rem;
 color:#565656;
 font-size:0.9rem;
 &:hover {

   color:#ff2200;
 }

`)
const CategoryFilter = () => {
    return (<>
        <CategoryFilterEl>
            <TitleEl top={0.8}>دسته بندی نتایج</TitleEl>
            <LineEl></LineEl>

            <CategoryTitleEl>
                <IconEl />
                <TitleEl top={0}> لپ تاپ </TitleEl>
            </CategoryTitleEl>
 

            <CategoryItemsEl>
                <CategoryItemEl>
                    <Link href="#">
                        <LinkEl href="#">
                            قطعات لپ تاپ
                            <CategoryNumberItemEl>(1234)</CategoryNumberItemEl>
                        </LinkEl>
                    </Link>
                </CategoryItemEl>
                <CategoryItemEl>
                    <Link href="#">
                        <LinkEl href="#">
                            قطعات لپ تاپ
                            <CategoryNumberItemEl>(1234)</CategoryNumberItemEl>
                        </LinkEl>
                    </Link>
                </CategoryItemEl>
                <CategoryItemEl>
                    <Link href="#">
                        <LinkEl href="#">
                            قطعات لپ تاپ
                            <CategoryNumberItemEl>(1234)</CategoryNumberItemEl>
                        </LinkEl>
                    </Link>
                </CategoryItemEl>
                <CategoryItemEl>
                    <Link href="#">
                        <LinkEl href="#">
                            قطعات لپ تاپ
                            <CategoryNumberItemEl>(1234)</CategoryNumberItemEl>
                        </LinkEl>
                    </Link>
                </CategoryItemEl>
            </CategoryItemsEl>

        </CategoryFilterEl>

    </>)
}
export default CategoryFilter;