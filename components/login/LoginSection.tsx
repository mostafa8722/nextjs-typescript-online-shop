import React from "react";

import {styled} from "@mui/system"
import CustomInput from "../../app/input/customInput";
import CustomCheckBox from "../../app/input/customCheckBox";

import { useFormik } from 'formik';
import * as yup from 'yup';
import Link from "next/link"; 


const LoginEl = styled('section')`
  display:flex;
  flex-direction:column;
  direction:rtl;

  width:450px;
  margin-top:3rem!important;
  background:#ffffff!important;

  border-radius:0.5rem;
  height:500px;
  margin:  0px auto;
`;

const TitleEl = styled("h1")`
font-size : 1rem;
font-weight:bold;

padding:1.2rem 0rem ;
text-align:center;
color:#565656;
border-bottom : 0.1rem solid #eeeeee;
`
const LabelEl = styled("span")(()=>`
font-size : 1rem;
font-weight:bold;
margin:1.5rem 2rem 0.5rem 1rem;
`);


const LinkEl = styled('a')<{right?:string,top?:string}>(({right,top})=>`
margin:${top?top:'0.1'}rem ${right?right:'0.1'}rem 0rem 0rem;
color:#005eff;
font-size:0.8rem;
cursor:pointer;
`);

const ButtonEl = styled("button")`
font-size : 1rem;
font-weight:bold;
 width:calc(100% - 40px);
 border-radius:5px;
 background-color:green;
 color:#ffffff;
 height:40px;
 margin:40px 20px 5px 20px;
 line-height:40px;

`

const RegisterEl = styled('div')`
margin:1rem 0px;
display:flex;
justify-content:center;

`
const TextEl = styled('p')`
font-size : 0.9rem;
color:#878787;
`



const LoginSection  = ()=>{
const customInputStyle= (width:number)=>{
  return {  width: width,
    
    borderRadius: 5,
    height:50,
    border:"0.1rem solid #eeeeee" ,
    paddingRight:15,
    paddingLeft:15,
    fontSize:15,
    margin :"0px auto",
    
}
};
    const validationSchemaLoginInfo = yup.object({
        name: yup
            .string()
            .min(3, ' تعداد حروف نام کمتر از 3 نمی تواند باشد  ')
            .required('وارد کردن نام الزامی می باشد'),
    });

    const formik = useFormik({
        initialValues :{
            mobile: "",
            name: '',

        },
        validationSchema: {validationSchemaLoginInfo},
        onSubmit: (values:any) => {
           // addLoginName(values,props,router)
        },

    });
   return (
    <LoginEl>
          <TitleEl>ورود به همیارشاپ</TitleEl>
         <LabelEl>ایمیل</LabelEl>
        <CustomInput
        name="mobile"
        customStyle={customInputStyle(400)}
        formik={formik}
        placeholder="ایمیل خود را وارد کنید"
        />

        <LabelEl>رمز عبور </LabelEl>
        <CustomInput
        name="mobile"
        customStyle={customInputStyle(400)}
        formik={formik}
        placeholder="  رمز عبور خود را وارد کنید  "
        />
        <Link href="/forgetPassword">   
            <LinkEl right="2" top="1" href="/forgetPassword"> رمز عبور خود را فراموش کرده اید؟</LinkEl>
        </Link>



        <ButtonEl >ورود</ButtonEl>

        <CustomCheckBox handleChangeProps={(event:any)=>{/*setCheckSeller(event.target.checked)*/}}  style={{color:"#ffff22",fontSize:14}} label="مرا به خاطر بسپار"  />
           
           <RegisterEl>
             <TextEl>
                کاربرجدید هستید؟
             </TextEl>
           <Link href="/register">   
            <LinkEl href="/register"> ثبت نام </LinkEl>
            </Link>
           </RegisterEl>
    </LoginEl>
   );
}
export default LoginSection;