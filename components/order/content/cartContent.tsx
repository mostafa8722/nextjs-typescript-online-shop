import { styled } from "@mui/system";

import { GrAdd } from 'react-icons/gr';
import Address from "./address"
import DeliveryType from "./deliveryType";
import UserInfo from "./userInfo";





const CartEl= styled("div")(()=>`

`)
const ContentCartEl= styled("div")(()=>`



margin-bottom:1rem;
display:flex;
flex-direction:column;
`)


const TitleTextEl= styled("span")(()=>`
color:#565656;
font-size:0.95rem;
font-weight:bold;
`)

const TextareaEl= styled("textarea")(()=>`
color:#565656;
font-size:0.95rem;
font-weight:bold;
min-height:250px;
width:100%;
outline:none;
box-shadow : 0.1rem 0.2rem 0.1rem 0.1rem rgba(0,0,0,0.1);
margin-top:0.75rem;
padding:0.5rem 1rem;
border-radius:0.4rem;
`)
const BoxDiscount = styled("div")(()=>`

height:150px;
width:100%;
outline:none;
box-shadow : 0.1rem 0.2rem 0.1rem 0.1rem rgba(0,0,0,0.1);
margin-top:0.75rem;
padding:0.5rem 1rem;
border-radius:0.4rem;
display:flex;
flex-direction:column;

background:#fff;

`)

const BoxDiscountChild = styled("div")(()=>`

display:flex;

`)
const TiterDiscount = styled("h4")(()=>`

color:#676767;
font-size:0.86rem;
margin-top:0.5rem;
`)
const InputDiscount= styled("input")(()=>`
color:#565656;
font-size:0.95rem;


width:100%;
outline:none;

margin-top:0.75rem;
padding:0.2rem 0.5rem;
border-radius:0.4rem;
border:0.1rem solid #eeeeee;
`)

const ButtonDiscount= styled("button")(()=>`
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
  width:120px;
`)

const BoxAddAddress = styled("div")(()=>`

height:50px;
width:100%;
outline:none;

margin-top:0.75rem;
padding:0.5rem 1rem;
border-radius:0.3rem;
display:flex;
justify-content:center;
align-items:center;
border:0.1rem dashed #898989;



`)
const TextAddAddress = styled("span")(()=>`

color:#787878l;
font-size:0.9rem;
cursor:pointer;
padding-right:0.5rem;

`)

const IconAddAddress = styled(GrAdd)(()=>`

color:#787878l;
font-size:0.9rem;

cursor:pointer;


`)

const CartContent = ()=>{
  const deliveryType = [
    {id:1,title:"تیپاکس",body:"زمان دریافت به صورت تقریبی بین ۱ تا ۳ روز کاری بوده که با توجه به منطقه جغرافیایی متغیر است. مرسوله شما تا ارزش ۳۰ میلیون تومان به صورت کامل بیمه می‌شود."},
    {id:2,title:"پست پیشتاز",body:"زمان دریافت به صورت تقریبی بین ۲ تا ۴ روز کاری بوده که با توجه به محدوده جغرافیایی متغیر است. (تحویل در بازه زمانی ۱۰ الی ۱۷)"},
    {id:3,title:"باربری",body:"مان فوق به صورت تقریبی بین ۱ تا ۳ روز کاری، با توجه به محدوده جغرافیایی متغیر است. هزینه دریافتی فقط برای تحویل کالا به باربری مبدا می‌باشد. *کالای ارسالی از این طریق تنها تا سقف ۲۰,۰۰۰,۰۰۰ ریال مشمول بیمه بوده و در صورت هرگونه مشکل بالاتر از سقف تعیین شده مسئولیت به عهده مشتری و شرکت باربری می‌باشد."},
  ]
 

    return(<>

    <CartEl>

       
        <ContentCartEl>
            <TitleTextEl> مشخصات گیرنده</TitleTextEl>
            <UserInfo />
            
        </ContentCartEl>

        <ContentCartEl>
            <TitleTextEl>آدرس گیرنده</TitleTextEl>
            <BoxAddAddress>
                <IconAddAddress/>
                <TextAddAddress>افزودن آدرس</TextAddAddress>
            </BoxAddAddress>
            <Address />
        </ContentCartEl>

        <ContentCartEl>
         <TitleTextEl>نحوه ی ارسال </TitleTextEl>
         {deliveryType.map(item=><DeliveryType key={item.id} {...item}  />)}
       
        </ContentCartEl>


        <ContentCartEl>
            <TitleTextEl>کد تخفیف</TitleTextEl>
         
            
            <BoxDiscount>
                <TiterDiscount>در صورتی که کد تخفیف برای این سفارش دارید آنرا ثبت نمائید.</TiterDiscount>
                <BoxDiscountChild>
                    <InputDiscount/>
                    <ButtonDiscount>ثبت</ButtonDiscount>
                </BoxDiscountChild>
                
            </BoxDiscount>


          
        </ContentCartEl>


       
        
        <ContentCartEl>
        <TitleTextEl>توضیحات</TitleTextEl>
          <TextareaEl></TextareaEl>
        </ContentCartEl>
    </CartEl>
    </>)
}
export default CartContent;