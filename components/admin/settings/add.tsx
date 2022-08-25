import { styled } from "@mui/system";
import SideBar from "../sidebar";
import EnhancedTable from "./table"

import { useFormik } from 'formik';
import CustomInput from "../../../app/input/customInput";
import CustomSelectInput from "../../../app/input/customSelectInput";


import { validationSetting } from "../../../logic/validations/adminValidations";
import { adminSettings,addSetting,updateSetting,adminSettingRequest } from "../../../api/admin/setting";


import CircularProgress from '@mui/material/CircularProgress';
import {connect,useDispatch,useStore,useSelector} from "react-redux";
import React, { useEffect, useState } from "react";
import CustomAlert from "../../../app/customAlert"

import {useRouter} from 'next/router';
import CustomImageUploaded from "../../../app/input/customImageUploaded";
import { loadingPage } from "../../../store/actions/general";




const SettingPageEl = styled("section")(()=>`

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
setting:#565656;
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
setting:green;
font-size:0.75rem;
margin-bottom:0.4rem;
font-weight:bold;
margin-left:0.3rem;
`) 
const InputLableNecessary =  styled("span")(()=>`
setting:red;
font-size:0.75rem;
margin-bottom:0.4rem;
font-weight:bold;
`) 

const CircularProgressEl = styled(CircularProgress)(()=>`
setting:#ffffff!important;
width:30px!important;
height:30px!important;

`)

const ButtomDivEl = styled("div")(()=>`
display:flex;
flex-direction:row-reverse;
`)
const ButtonEl = styled("button")(()=>`
font-size : 1rem;
font-weight:bold;
 width: 200px;
 border-radius:5px;
 background-setting:green;
 setting:#ffffff;
 height:40px;
 margin:40px 20px 30px 20px;
 line-height:40px;
 display:flex;
 align-items:center;
 justify-content:center;

`)



const SettingPage = ()=>{

  const dispatch = useDispatch();

  const  isLoading = useSelector((state:any) => state.generalReducer.isLoading);
  const  isLoadingPage = useSelector((state:any) => state.generalReducer.isLoadingPage);
  const  isDataSuccess = useSelector((state:any) => state.generalReducer.isDataSuccess);
  const  setting= useSelector((state:any) => state.settingReducer.setting);
  const  settings= useSelector((state:any) => state.settingReducer.settings);



  const router = useRouter();
  const pathname = useRouter().pathname;
  const path_type = useRouter().pathname=="/hamyar-web/admin/settings/add"?"add":"edit";

  


  const [description,setDescription] = useState("");


  const [id,setId] = useState(0);


 
 

  useEffect(()=>{
  
 
   dispatch(loadingPage(false))
    if(router.query.id)
    adminSettingRequest(dispatch,router.query.id)
      
   
  },[router.isReady])


 
  
  


  const formik:any = useFormik({
    enableReinitialize :true,
    initialValues: {

        title: setting?setting.title:'',
        value: setting?setting.value:'',
       
        
       



    },
    validationSchema: validationSetting,
    onSubmit: (values,{ resetForm }) => {

    

         let data:any = {
          id:router.query?router.query.id:0,
          title:values.title,
          value:values.value,
      
         }; 
         if(!isLoading){
          if(router.query.id)
          updateSetting(dispatch,data);
          else
          addSetting(dispatch,data);
         }
        

      
        
         resetForm();


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




const customStyleTextArea = ()=>{
  return { width: "100%",border:"0.1rem solid #eee",outline:"none",borderRadius:"5px",padding:"5px 10px" };
}

 
    return (
        <SettingPageEl>
              <SideBar />
               {
                isLoadingPage?
                <></>
                :
                <ContentEl>
                <Title>
                  {
                    path_type=="add"?"افزودن رنگ":"ویرایش رنگ"
                  }
                  
                </Title> 


                <form  onSubmit={formik.handleSubmit} >
                <InputEl >
                 <InputLableEl>
                   <InputLable>عنوان</InputLable>
                   <InputLableNecessary>*</InputLableNecessary>
                 </InputLableEl>
                 <CustomInput 
                   name="title"
                   placeholder="عنوان ...  "
                   handleChange={formik.handleChange}
                   customStyle={customInputStyle()} 
                   formik={formik}
                 />
                </InputEl>


                <InputEl >
                 <InputLableEl>
                   <InputLable> کدرنگ  </InputLable>
                   
                   <InputLableNecessary>*</InputLableNecessary>
                 </InputLableEl>
                 <CustomInput 
                   name="value"
                   handleChange={formik.handleChange}
                   placeholder="کدرنگ   ..."
                   customStyle={customInputStyle()} formik={formik}
                 />
                </InputEl>


                <ButtomDivEl>
                  <ButtonEl  >
                   {
                     isLoading?
                     <CircularProgressEl  />
                     : 
                   <>
                      {
                    path_type=="add"?"افزودن رنگ":"ویرایش رنگ"
                  }
                   </>
                   }
                  
                  </ButtonEl>
                </ButtomDivEl>
               
                </form>
            <CustomAlert />
               
            </ContentEl>
               }
        </SettingPageEl>
    );
}
export default connect()(SettingPage);