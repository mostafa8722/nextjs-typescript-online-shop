
import React from "react";

import { styled } from "@mui/system";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from "@mui/material/useMediaQuery";

interface DeviceProps {

    isMobile?: boolean;
    isTablet?: boolean;
  
  }
const ProductDetailComponentEl = styled("div")(()=>
`
display:flex; 
flex-direction:column;
margin:1.5rem 1rem;
`
)

const DetailComponentEl = styled("div")(()=>
`
display:flex; 
flex-direction:column;
margin-top:0.75rem ;
`
)
const DetailTitleEl = styled("h4")(()=>
`
font-size:0.89rem;
color:#565656;
font-weight:bold;
margin-bottom:0.5rem;
`
)
const ItemComponentEl = styled("div")<DeviceProps>(({isMobile ,isTablet})=>
`
display:grid; 
grid-template-columns : ${isMobile?"12fr":"3fr 9fr"};
min-height:45px;
margin-bottom:0.35rem;
`
)
const ItemTitleComponentEl = styled("div")<DeviceProps>(({isMobile ,isTablet})=>
`
background:#f7f7f7;
margin-left:${isMobile?"0rem":"0.3rem"};
display:flex;

padding-top:0.7rem;
padding-bottom:${isMobile?"0.7rem":"0rem"};
padding-right:0.5rem;

`
)
const ItemTitleEl = styled("span")(()=>
`color:#676767;font-size:0.8rem;

`
)
const ItemValueComponentEl = styled("div")(()=>
`
background:#fbfbfb;
display:flex;
align-items:center;
padding-right:0.5rem;
padding-top:0.7rem;
padding-bottom:0.7rem;

`
)

const ItemValueSectionEl = styled("ul")(()=>
`
display:flex;
flex-direction:column;
`
)
const ItemValueEl = styled("li")(()=>
`
font-size:0.8rem;
margin-bottom:0.5rem;
color:#676767;


`
)
const ProductDetailComponent = ()=>{

    const products = [
        {title:"مشخصات اصلی",items:[
            {title:'تاریخ معرفی ',value:['2017'],type:"text"},
            {title:' قابلیت نصب کارت حافظه ',value:[false],type:"boolean"},
            {title:'  NFC   ',value:[true],type:"boolean"},
        ]},
        {title:" ارتباطات",items:[
            {title:'تاریخ معرفی ',value:['2017'],type:"text"},
            {title:' سایر قابلیت‌های دوربین سلفی ',value:['دارای دریچه‌ی دیافراگم f/2.2','قابلیت عکاسی پانوراما (Panorama)','قابلیت تشخیص چهره (Face Detection)'],type:"text"},
            {title:' قابلیت نصب کارت حافظه ',value:[false],type:"boolean"},
            {title:'  NFC   ',value:[true],type:"boolean"},
        ]},
        {title:"مشخصات اصلی",items:[
            {title:'تاریخ معرفی ',value:['2017'],type:"text"},
            {title:' قابلیت نصب کارت حافظه ',value:[false],type:"boolean"},
            {title:'  NFC   ',value:[true],type:"boolean"},
        ]},
        {title:" ارتباطات",items:[
            {title:'تاریخ معرفی ',value:['2017'],type:"text"},
            {title:' سایر قابلیت‌های دوربین سلفی ',value:['دارای دریچه‌ی دیافراگم f/2.2','قابلیت عکاسی پانوراما (Panorama)','قابلیت تشخیص چهره (Face Detection)'],type:"text"},
            {title:' قابلیت نصب کارت حافظه ',value:[false],type:"boolean"},
            {title:'  NFC   ',value:[true],type:"boolean"},
        ]},
        {title:"مشخصات اصلی",items:[
            {title:'تاریخ معرفی ',value:['2017'],type:"text"},
            {title:' قابلیت نصب کارت حافظه ',value:[false],type:"boolean"},
            {title:'  NFC   ',value:[true],type:"boolean"},
        ]},
        {title:" ارتباطات",items:[
            {title:'تاریخ معرفی ',value:['2017'],type:"text"},
            {title:' سایر قابلیت‌های دوربین سلفی ',value:['دارای دریچه‌ی دیافراگم f/2.2','قابلیت عکاسی پانوراما (Panorama)','قابلیت تشخیص چهره (Face Detection)'],type:"text"},
            {title:' قابلیت نصب کارت حافظه ',value:[false],type:"boolean"},
            {title:'  NFC   ',value:[true],type:"boolean"},
        ]},


    ];
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));
    const isLaptop = useMediaQuery(theme.breakpoints.down('lg'));
    const isDesktop = useMediaQuery(theme.breakpoints.down('xl'));
    return  (<>
    <ProductDetailComponentEl>
       {
        products.map((item:any,index:number) =>
         <DetailComponentEl key={index} >
            <DetailTitleEl>{item.title}</DetailTitleEl>
            {
                item.items.map((item_section:any,index2:number) =>
                
                <ItemComponentEl  key={index2} isMobile={isMobile}>
                    <ItemTitleComponentEl>
                        <ItemTitleEl>{item_section.title}</ItemTitleEl>
                    </ItemTitleComponentEl>
                    <ItemValueComponentEl>
                        <ItemValueSectionEl>
                            {
                                item_section.value.map((val:any,index3:number) =>
                                <ItemValueEl  key={index3}>
                                    {
                                        item_section.type=="text"?
                                        val :
                                        item_section.type=="boolean" ? val?"بله" : "خیر"  
                                        :""

                                    }
                                </ItemValueEl>
                                
                                )
                            }
                        </ItemValueSectionEl>

                    </ItemValueComponentEl>
                </ItemComponentEl>
                )
            }
            
              
         </DetailComponentEl>
          )
       }
    </ProductDetailComponentEl>
    </>)
}
export default ProductDetailComponent;