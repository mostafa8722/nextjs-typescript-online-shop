

import * as React from "react";
import {styled} from "@mui/system"
import Link from "next/link"; 
import { useTheme } from '@mui/material/styles';
import useMediaQuery from "@mui/material/useMediaQuery";
import CustomImageViewer from "../customImageViewer";

interface DeviceProps {

    isMobile?: boolean;
    isTablet?: boolean;
  
  }
const FooterEl = styled("footer")(()=>`
    
    background:#ababab;
    margin-top:5rem;
`)

const FooterSection = styled("div")<DeviceProps>(({isMobile ,isTablet})=>`

display: grid;
grid-template-columns: repeat(${(isMobile||isTablet)?1:4},1fr);
direction:rtl;

`)

const SectionItemsEl = styled("div")`
 display:flex;
 flex-direction:column;
 jusitify-content:center;
 align-items:center;
 margin-bottom:0.7rem;
`
const SectionItemTitleEl = styled("h5")`
color:#454545;
font-size:1rem;
margin-top:1rem;
margin-bottom:0.5rem;
font-weight:bold;
`
const LinkEl =styled("a")(()=>`
 margin-top:0.3rem;
 color:#565656;
 &:hover {

   color:#ff2200;
 }

`)

const LinkSoicalEl =styled("a")(()=>`
 margin-top:0.3rem;
  width:35px;
  height:35px;
  margin-left:0.3rem;

`)

const SectionSocailItemsEl = styled("div")`
 display:flex;
 flex-direction:row;
`
const CustomImageMedia = styled(CustomImageViewer)``
const CopyRightSection =styled("div")(()=>`
 height:45px;
 display:flex;
 justify-content:center;
 background:#ffffff;
 align-items:center;
 direction:rtl

`)
const CopyRightText = styled("span")(()=>`
color:#565656;
font-size:0.9rem;

`)

const CopyRightRedText = styled("span")(()=>`
color:#ff2200;
font-size:0.9rem;
margin:0rem 0.2rem;

`)
const Footer = ()=>{ 
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));
    const isLaptop = useMediaQuery(theme.breakpoints.down('lg'));
    const isDesktop = useMediaQuery(theme.breakpoints.down('xl'));
    const footer_items = [
        {
            title : "همیارشاپ",
            links:[
                {title:"تماس با ما",url:"#"},
                {title:"درباره ی ما ",url:"#"},
                {title:"پرسش های متداول ",url:"#"},
                {title:"مقالات",url:"#"},
            ]
        },
        {
            title : "راهنما",
            links:[
                {title:"راهنمای خرید",url:"#"},
                {title:"راهنمای ثبت نام ",url:"#"},
                {title:"راهنمای بازگشت کالا",url:"#"},
                {title:"ثبت نام",url:"#"},
                {title:" ورود",url:"#"},
               
            ]
        }
        ,    {
            title : "مطالب مفید",
            links:[
                {title:"آموزش نحوه ی آنباکس کردن",url:"#"},
                {title:"عنوان یک",url:"#"},
                {title:"عنوان دو ",url:"#"},
                {title:"عنوان سه",url:"#"},
            ]
        }
    ]
    const social_medias  = [
        {title:"",url:"",icon:"/icons/youtube.svg"},
        {title:"",url:"",icon:"/icons/twitter.svg"},
        {title:"",url:"",icon:"/icons/whatsapp.svg"},
        {title:"",url:"",icon:"/icons/git.svg"},
        {title:"",url:"",icon:"/icons/instagram.svg"},
    ]
    return (<>
    <FooterEl>  
     <FooterSection isMobile={isMobile}  isTablet={isTablet}>
         {
            footer_items.map((item:any,index:number) =>
            
            <SectionItemsEl key={index}>
                <SectionItemTitleEl>{item.title}</SectionItemTitleEl>
                   {item.links.map((child_item:any,index:number) => 
                        <Link href={child_item.url}>
                            <LinkEl href={child_item.url} >{child_item.title}</LinkEl>
                        </Link>
                   )}
            </SectionItemsEl>
            )
         }
         <SectionItemsEl>
            <SectionItemTitleEl>شبکه های اجتماعی</SectionItemTitleEl>
            <SectionSocailItemsEl>
            {
                social_medias.map((item:any,index:number)=>
                <Link href="#" key={index}>
                <LinkSoicalEl href="#">
                  <CustomImageMedia src={item.icon} />

                </LinkSoicalEl>
                  </Link>
                
                )
             }
          </SectionSocailItemsEl>
            
         </SectionItemsEl>
          

     </FooterSection>

        
        <CopyRightSection>
            <CopyRightText>کلیه حقوق این سایت متعلق به توسعه دهنده </CopyRightText>
            <CopyRightRedText> مصطفی نظربند </CopyRightRedText>
            <CopyRightText>می باشد.</CopyRightText>
            <CopyRightRedText>@{new Date().getFullYear()}</CopyRightRedText>
        </CopyRightSection>
       
    </FooterEl>
    </>)
}

export default Footer;