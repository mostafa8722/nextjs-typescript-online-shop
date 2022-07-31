import { Radio, styled } from "@mui/material";
import Link from "next/link";
import CustomImageViewer from "../../app/customImageViewer";
import { formatPrice } from "../../utils/helper";


const ParentEl = styled("div")(()=>`
direction:rtl;
margin:1.5rem 2rem;
`)

const SectionEl = styled("div")(()=>`
display:flex;
flex-direction:column;
`)

const TitleEl = styled("h4")(()=>`
color:#676767;
font-weight:bold;
font-size:0.95rem;
margin-top:0.5rem;

`)
const DescriptionEl = styled("h4")(()=>`
color:#787878;

font-size:0.90rem;
margin-top:0.5rem;

`)
const DetailsEl = styled("div")(()=>`

box-shadow : 0.1rem 0.2rem 0.1rem 0.1rem rgba(0,0,0,0.1);

background:#fff;
width:100%;
outline:none;
margin-top:0.75rem;
border-radius:0.4rem;
display:flex;
flex-direction:column;
overflow:hidden;



`)

const PayEl = styled("div")(()=>`
display:flex;
padding:1rem;
border-bottom:0.09rem solid #eeeeee;
`)
const PayTextEl = styled("div")(()=>`
display:flex;
flex-direction:column;
margin-right:1rem;
`)

const RadioEl = styled(Radio)(()=>`

margin:0rem 0.5rem;
`)

const ImageEl = styled(CustomImageViewer)(()=>`
width:70px;
border-left:0.1rem solid #eeeeee;
padding-left:0.5rem;
`)




const ButtonEl =styled("div")(()=>`
display:flex;
flex-direction:row-reverse;
`)

const LinkEl = styled("a")(() => `
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
`)

const PayPageComponent = ()=>{
  const   pays = [
        {id:1,title:"پرداخت اینترنتی ملت",desc:"پرداخت اینترنتی از طریق کلیه کارتهای عضو شتاب",img:"/images/mellat.png"},
        {id:2,title:"پرداخت الکترونیک سامان",desc:"پرداخت اینترنتی از طریق کلیه کارتهای عضو شتاب",img:"/images/saman.png"},
    ];
    const   pays2 = [
        {id:1,title:"  ",desc:"پرداخت در محل قابل انجام می باشد ",img:"/images/delivery.png"},
       
    ];
    
    
    return (
        <ParentEl>
            <SectionEl>
              <TitleEl>پرداخت آنلاین </TitleEl>
              <DescriptionEl>پرداخت از طریق کلیه کارت های عضو شتاب</DescriptionEl>
              <DetailsEl>
                {
                    pays.map((item,index)=><PayEl key={item.id}> 
                       <RadioEl />
                        <ImageEl src={item.img} />
                        <PayTextEl>
                        <TitleEl >{item.title}</TitleEl>
                        <DescriptionEl>{item.desc}</DescriptionEl>
                        </PayTextEl>

                    </PayEl> )
                }
                  
                
              
              </DetailsEl>

            </SectionEl>

            <SectionEl className="mt-10 mb-10">
              <TitleEl>پرداخت در محل </TitleEl>
              <DescriptionEl>پرداخت از طریق کلیه کارت های عضو شتاب</DescriptionEl>
              <DetailsEl>
                {
                    pays2.map((item,index)=><PayEl key={item.id}> 
                       <RadioEl />
                        <ImageEl src={item.img} />
                        <PayTextEl>
                        <TitleEl >{item.title}</TitleEl>
                        <DescriptionEl>{item.desc}</DescriptionEl>
                        </PayTextEl>

                    </PayEl> )
                }
                  
                
              
              </DetailsEl>

            </SectionEl>

            <ButtonEl>
            <Link href="#">
                  <LinkEl href="#"> ادامه و تکمیل خرید</LinkEl>
              </Link>
            </ButtonEl>
             
        </ParentEl>
    )
}
export default PayPageComponent;