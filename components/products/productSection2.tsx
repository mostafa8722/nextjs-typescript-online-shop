import { styled } from "@mui/system";


import { useEffect, useState } from "react";

import AnalysisComponent from "./tabs/analysisComponent";
import CommentsComponent from "./tabs/commentsComponent";
import NewsComponents from "./tabs/newsComponent";
import ProductDetailComponent from "./tabs/productDetailComponent";


const   BodyPageEl = styled("div")(()=>`
display:flex;
flex-direction:column;
background:#fff;
border-radius:0.2rem;
box-shadow:0.1rem 0.2rem 0.1rem 0rem rgba(0,0,0,0.1);

direction:rtl;
position:relative;
margin-bottom:1rem;
overflow:hidden;
`)

const   TabSectionsEl = styled("div")(()=>
`
display:flex;
align-items:center;
border-bottom:0.05rem solid #eeeeee;


`
)
const   TabItemEl = styled("div")<{isActive:boolean}>(({isActive})=>
`
display:flex;
padding:1.5rem 1rem;
cursor:pointer;

border-bottom:${isActive?'0.15rem solid #ff2200':'0rem solid #ff2200'};
`
)

const   TabTitleEl = styled("span")<{isActive:boolean}>(({isActive})=>
`
color:#565656;
color:${isActive?' #ff2200':' #565656'};
font-size:0.9rem;

`
)
const ContentTabSectionEl = styled("div")(()=>`


`)

const ProductSection2 = ()=>{
    const [selectedTab,setSelectedTab] = useState(0);
    const items = [
        "نقد و بررسی","مشخصات کامل محصول","نظرات کاربران","اخبار و مقالات مرتبط"
    ];
 
    
    return(
        <>
        <BodyPageEl>
           <TabSectionsEl>
               {
                items.map((item,index)=>
                <TabItemEl key={index} onClick={()=>setSelectedTab(index)} isActive={index==selectedTab}>
                 <TabTitleEl isActive={index==selectedTab} > {item } </TabTitleEl>
                </TabItemEl>
                )
               }
           </TabSectionsEl>
           <ContentTabSectionEl>

           
             {
                selectedTab == 0 ? <AnalysisComponent /> : (
                    selectedTab == 1 ? <ProductDetailComponent /> : (
                        selectedTab == 2 ? <CommentsComponent />: <NewsComponents />
                    )
                )
    

             }
           </ContentTabSectionEl>

      
             
        </BodyPageEl>
        
        </>
    );
}
export default ProductSection2;