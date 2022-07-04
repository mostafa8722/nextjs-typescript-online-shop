import Link from "next/link"; 
import {styled} from "@mui/system"
import { FiUser } from 'react-icons/fi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import {LinkEl } from "../../../logic/customElement";

import CustomInput from "../../../app/input/customInput";
import CustomImageViewer from "../../../app/customImageViewer";


import { useFormik } from 'formik';
import * as yup from 'yup';

const ContainerEl = styled('div')(()=>`
 display:flex;
  padding:1rem;
 flex:1;
 padding-bottom:0.5rem;
 border-bottom:0.05rem solid #eeeeee;
`);


const BasketBoxEl = styled("div")(()=>`
     display:flex;
     border:0.13rem solid #eeeeee;
     border-radius:0.5rem;
     padding:0.5rem 1rem;
     margin-right:1.5rem;
     position:relative;
`)
const BasketTitleEl = styled("span")(()=>`
     color:#777777;
     font-size:1rem;
     margin-right:0.1rem;
`)
const BasketIconEl = styled(AiOutlineShoppingCart)(()=>`
     color:#777777;
     font-size:1.5rem;
     
`)

const BasketCountEl = styled("span")(()=>`
     color:#ffffff;
     position:absolute;
     font-size:0.7rem;
    background:#ff2200;
    border-radius:50%;
    top:0.9rem;
    right:0.2rem;
    height:20px;
    width:20px;
    text-align:center;
    line-height:20px;
     
`)

const AccountEl =styled("div")(()=>`
    display:flex;
    margin-right:1.5rem;
    padding:0.5rem;
`);

const SearchBoxtEl =styled("div")(()=>`
    display:grid;
    flex:1;
    grid-auto-columns : auto;
    margin-right:1.5rem;
   
`);

const SearchInput =styled(CustomInput)(()=>`
  font-size:0.5rem;   
   
`);


const AccountIconEl =styled(FiUser)(()=>`
color:#777777;
font-size:1.5rem;
`);

const IconEl =styled("div")(()=>`
    display:flex;
    margin-right:1.5rem;
    padding:0.5rem;
    height:50px;
`);
const IconImage =styled(CustomImageViewer)(()=>`
    
`);


const ContainerSearch = ()=>{

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



    const customInputStyle= (width:number|string)=>{
        return {  width: width,
          
          borderRadius: 5,
          height:50,
          border:"0.1rem solid #eeeeee" ,
          paddingRight:15,
          paddingLeft:15,
          fontSize:"0.8rem",
          margin :"0px auto",
          background:"#eeeeee",
         
      }
      };
      
    return (
    <>
    <ContainerEl>
        <BasketBoxEl>
            <BasketIconEl/>
            <BasketTitleEl >سبد خرید </BasketTitleEl>
            <BasketCountEl>0</BasketCountEl>
        </BasketBoxEl>

        <AccountEl>
            <AccountIconEl/>
                <Link href="/forgetPassword">   
                    <LinkEl right="0.5" top="0" font={1}  href="/forgetPassword"> ورود</LinkEl>
                </Link>
                /
                <Link href="/forgetPassword">   
                    <LinkEl right="0.5" font={1} top="0" href="/forgetPassword"> ثبت نام </LinkEl>
                </Link>

        </AccountEl>

        <SearchBoxtEl>
            <SearchInput
            name="mobile"
            customStyle={customInputStyle("100%")}
            formik={formik}
            placeholder="محصول خود را جستجو کنید..."
            />
        </SearchBoxtEl>
       
        <IconEl>
            <IconImage width={60} height={50} src="/images/logo.svg"/>
        </IconEl>
    </ContainerEl>
      </>
    );
}
export default ContainerSearch;