import { styled } from "@mui/system";
import { FaAngleDown,FaAngleUp, } from 'react-icons/fa';
import { IoMdAddCircle,IoIosRemoveCircle } from 'react-icons/io';
import Link from "next/link";
import Checkbox from '@mui/material/Checkbox';
import { useState } from "react";
const CategoryFilterEl = styled("div")(() => `
background:#ffffff;

border-radius:0.4rem;
padding-top:1rem;
padding-bottom:1rem;
margin-top:1rem;
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
    justify-content:space-between;
    margin : 0rem 1rem;
    cursor:pointer;

    
 `)
const IconEl = styled(FaAngleDown)(() => `
 color:#565656;
 font-size:0.8rem;
 margin:0rem 0.8rem 0rem 0.2rem;
 
`)
const IconUpEl = styled(FaAngleUp)(() => `
 color:#565656;
 font-size:0.8rem;
 margin:0rem 0.8rem 0rem 0.2rem;
 
`)
const CategoryItemsEl = styled("ul")(() => `
   display:flex;
   flex-direction:column;
    flex-direction:rtl;
   
    margin-right:1rem;
    margin-left:1rem;
    
 `)
 const CategoryItemEl = styled("li")(() => `
   display:flex;
    flex-direction:rtl;
    align-items:center;
    justify-content:space-between;
    
    
 `)

 const RightItemsEl = styled("div")(()=>`
   display:flex;
   align-items:center
 `)
 const RightTitleEl = styled("span")(() => `
 color:#565656;
 font-size:0.9rem;
  
`)
const LeftTitleEl = styled("span")(() => `
color:#898989;
font-size:0.8rem;
 
`)

const BottomBtnEl = styled("div")(()=>`
display:flex;
align-items:center;
  margin:1rem 1rem 0rem 1rem;
  padding-top:0.5rem;
justify-content:center;
border-top:0.05rem dashed #ababab;
cursor:pointer;
`)
const BottomBtn = styled("span")(()=>`
display:flex;
color:#676767;
font-size:0.9rem;
margin-right:0.3rem;

`)
const IoMdAddCircleEl = styled(IoMdAddCircle)(()=>`
display:flex;
color:#676767;
font-size:0.9rem;

`)
const IoRemoveCircleEl = styled(IoIosRemoveCircle)(()=>`
display:flex;
color:#676767;
font-size:0.9rem;

`)

const CategoryFilterByCheckbox = () => {
    const [showContent,setshowContent] = useState(false);
    const [showAllContent,setShowAllContent] = useState(false);

    const handleShowContent = ()=>{

    }
    return (<>
        <CategoryFilterEl>
           
          

            <CategoryTitleEl onClick={()=>setshowContent(!showContent)} >
             
                <TitleEl top={0}> لپ تاپ </TitleEl>
                {showContent ?  <IconUpEl/>:<IconEl />}
            </CategoryTitleEl>
            {showContent ?  <LineEl/> :<></>}
          
 

            {
                showContent ?
                <CategoryItemsEl>
                <CategoryItemEl>
                    <RightItemsEl>
                    <Checkbox   color="success" />
                    <RightTitleEl>سامسونگ</RightTitleEl>
                    </RightItemsEl>
                    <LeftTitleEl>samsung</LeftTitleEl>
                 
                </CategoryItemEl>
              
               {
                showAllContent?
                <CategoryItemEl>
                <RightItemsEl>
                <Checkbox   color="success" />
                <RightTitleEl>سامسونگ</RightTitleEl>
                </RightItemsEl>
                <LeftTitleEl>samsung</LeftTitleEl>
             
            </CategoryItemEl>
            :<></>
               }

               

               

                
            </CategoryItemsEl>
            :<></>
            }

            {
                showContent?
                <BottomBtnEl onClick={()=>setShowAllContent(!showAllContent)}>
          {showAllContent?<IoRemoveCircleEl/>:<IoMdAddCircleEl/>}  
            <BottomBtn>رنگ های بیشتر</BottomBtn>

          </BottomBtnEl>
                :<></>
            }
          
        </CategoryFilterEl>

    </>)
}
export default CategoryFilterByCheckbox;