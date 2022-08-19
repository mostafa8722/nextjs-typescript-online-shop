import { styled } from "@mui/system";
import SideBar from "../sidebar";
import EnhancedTable from "./table"

import { useFormik } from 'formik';
import CustomInput from "../../../app/input/customInput";
import CustomSelectInput from "../../../app/input/customSelectInput";

import CustomTextArea from "../../../app/input/customTextArea";
import CustomFileUpload from "../../../app/input/customFileUpload";
import { validationCategory } from "../../../logic/validations/adminValidations";
import { adminCategories } from "../../../api/admin/category";


import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

interface inputProps {
  size?:string,
  bg?:string,
  shadow?:string,
  raduis?:string,
  height?:string,
  minHeight?:string,
  color?:string,
  border?:string,
  width?:string,
  padding?:string,
}


const CatPageEl = styled("section")(()=>`

  display:grid;
  grid-template-columns : 1fr 3fr;
  grid-column-gap: 1rem;
  direction:rtl;
  padding:0.1rem 1rem;
`)
const ContentEl = styled("section")(()=>`
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
const Title = styled("h4")<{}>(()=>`
font-size:0.9rem;
color:#565656;
font-weight:bold;
margin : 1.2em 1rem;
`);

const InputEl =  styled("div")(()=>`
display:flex;
flex-direction:column;
margin:1rem 1.5rem 0rem 1rem;
position:relative;
`) 
const InputLableEl =  styled("div")(()=>`
display:flex;
`) 
const InputLable =  styled("label")(()=>`
color:green;
font-size:0.75rem;
margin-bottom:0.4rem;
font-weight:bold;
margin-left:0.3rem;
`) 
const InputLableNecessary =  styled("span")(()=>`
color:red;
font-size:0.75rem;
margin-bottom:0.4rem;
font-weight:bold;
`) 
const CustomFileUploadEl = styled(CustomFileUpload)(()=>`
margin:10px 20px;
`);
const CatPage = ()=>{

  const formik:any = useFormik({
    initialValues: {

        title: '',
        en_title: '',
        parent_id : 0,
       



    },
    validationSchema: validationCategory,
    onSubmit: (values) => {
         console.log("tttt",values);
         adminCategories();


    }


});
const customInputStyle= (width?:number)=>{
  return {  width: width?width:"100%",
    
    borderRadius: 5,
    height:45,
    border:"0.1rem solid #eeeeee" ,
    paddingRight:15,
    paddingLeft:15,
    fontSize:15,
    margin :"0px auto",
    
}
};

const ButtomDivEl = styled("div")`
display:flex;
flex-direction:row-reverse;
`
const ButtonEl = styled("button")`
font-size : 1rem;
font-weight:bold;
 width: 200px;
 border-radius:5px;
 background-color:green;
 color:#ffffff;
 height:40px;
 margin:40px 20px 30px 20px;
 line-height:40px;

`


const customStyleTextArea = ()=>{
  return { width: "100%",border:"0.1rem solid #eee",outline:"none",borderRadius:"5px",padding:"5px 10px" };
}
const parents = ()=>{
  return [
    {title:"دسته یک",id:1},
    {title:"دسته دو",id:2},
    {title:"دسته سه",id:3},
  ];
}

    return (
        <CatPageEl>
              <SideBar />
             <ContentEl>
                 <Title>افزودن دسته </Title> 


                 <form  onSubmit={formik.handleSubmit} >
                 <InputEl >
                  <InputLableEl>
                    <InputLable>عنوان</InputLable>
                    <InputLableNecessary>*</InputLableNecessary>
                  </InputLableEl>
                  <CustomInput 
                    name="title"
                    placeholder="عنوان ...  "
                    customStyle={customInputStyle()} 
                    formik={formik}
                  />
                 </InputEl>


                 <InputEl >
                  <InputLableEl>
                    <InputLable>عنوان به انگلیسی </InputLable>
                    <InputLableNecessary>*</InputLableNecessary>
                  </InputLableEl>
                  <CustomInput 
                    name="en_title"
                    placeholder="عنوان به انگلیسی ..."
                    customStyle={customInputStyle()} formik={formik}
                  />
                 </InputEl>


                 
                

                 <InputEl >
                  <InputLableEl>
                    <InputLable>توضیحات</InputLable>
                    <InputLableNecessary></InputLableNecessary>
                  </InputLableEl>
                  <CustomTextArea 
                  placeholder = "توضیحات ..."
                  style={customStyleTextArea()}
                  />
                 </InputEl>


                 <InputEl >
                  <InputLableEl>
                    <InputLable>والد</InputLable>
                    <InputLableNecessary>*</InputLableNecessary>
                  </InputLableEl>
                  <CustomSelectInput
                    name="parent_id"
                    items={ [
                      {title:"دسته یک",id:1},
                      {title:"دسته دو",id:2},
                      {title:"دسته سه",id:3},
                    ]}
                    
                
                    customStyle={customInputStyle()} formik={formik}
                  />
                 </InputEl>

                 <InputEl >
                  <InputLableEl>
                    <InputLable>تصویر</InputLable>
                    <InputLableNecessary></InputLableNecessary>
                  </InputLableEl>
                  <CustomFileUploadEl  />
                 </InputEl>
                 <ButtomDivEl>
                   <ButtonEl  >
                    <CircularProgress color="#ffffff" />
                   </ButtonEl>
                 </ButtomDivEl>
                
                 </form>

             </ContentEl>
        </CatPageEl>
    );
}
export default CatPage;