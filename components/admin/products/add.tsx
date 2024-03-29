import { styled } from "@mui/system";
import SideBar from "../sidebar";
import EnhancedTable from "./table"

import { useFormik } from 'formik';
import CustomInput from "../../../app/input/customInput";
import CustomSelectInput from "../../../app/input/customSelectInput";

import CustomTextArea from "../../../app/input/customTextArea";
import CustomFileUpload from "../../../app/input/customFileUpload";
import { validationCategory } from "../../../logic/validations/adminValidations";
import { adminCategories,adminAddCategory,categoryRequest,adminUpdateCategory } from "../../../api/admin/category";


import CircularProgress from '@mui/material/CircularProgress';
import {connect,useDispatch,useStore,useSelector} from "react-redux";
import React, { useEffect, useState } from "react";
import CustomAlert from "../../../app/customAlert"

import {useRouter} from 'next/router';
import CustomImageUploaded from "../../../app/input/customImageUploaded";


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

const CircularProgressEl = styled(CircularProgress)(()=>`
color:#ffffff!important;
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
 background-color:green;
 color:#ffffff;
 height:40px;
 margin:40px 20px 30px 20px;
 line-height:40px;
 display:flex;
 align-items:center;
 justify-content:center;

`)



const CatPage = ()=>{

  const dispatch = useDispatch();

  const  isLoading = useSelector((state:any) => state.generalReducer.isLoading);
  const  isLoadingPage = useSelector((state:any) => state.generalReducer.isLoadingPage);
  const  isDataSuccess = useSelector((state:any) => state.generalReducer.isDataSuccess);
  const  category= useSelector((state:any) => state.categoryReducer.category);
  const  categories= useSelector((state:any) => state.categoryReducer.categories);
  const  childCategories= useSelector((state:any) => state.categoryReducer.categories2);
  const  childCategories2= useSelector((state:any) => state.categoryReducer.categories3);


  const router = useRouter();
  const pathname = useRouter().pathname;
  const path_type = useRouter().pathname=="/hamyar-web/admin/categories/add"?"add":"edit";

  


  const [description,setDescription] = useState("");
  const [image,setImage] = useState("");
  const [src,setSrc] = useState("");

  const [parent_id,setParent_id] = useState(0);
  const [child_id,setChild_id] = useState(0);
  const [child_id2,setChild_id2] = useState(0);
  const [is_initial_load,setIs_initial_load] = useState(false);


 
  
  useEffect(()=>{
  

    if(is_initial_load){
     adminCategories(dispatch,{parent_id:0});
   
      
    }
    setIs_initial_load(true);
  
   
  },[is_initial_load])

  useEffect(()=>{

    if(router.query.id)
    categoryRequest(dispatch,router.query.id)
      
   
  },[router.isReady])


  useEffect(()=>{
   
 
 
      if(category.title ){
        setDescription(category.body)
        setParent_id(category.parent_id);
        setChild_id(category.child_id);
        setChild_id2(category.child_id2);
        setSrc(category.image);

        console.log("ttt",category.image)
       if(category.level==4){
        adminCategories(dispatch,{parent_id:category.parent_id,child_id:0});
        adminCategories(dispatch,{parent_id:category.parent_id,child_id:category.child_id});
       }else if(category.level==3)
       adminCategories(dispatch,{parent_id:category.parent_id,child_id:0});
         
       

      }

       if(isDataSuccess && !router.query.id){
            setSrc("");
            setImage("");
            setParent_id(0);
            setChild_id(0);
            setChild_id2(0);
            setDescription("");
        
       }

  },[isDataSuccess,router.isReady,category,isLoadingPage,id])

  
  

  const handleCatParent = (e:any,level:number)=>{
   

        
      if(level==1){   
           setChild_id(0);
           setParent_id(e.target.value);
           setChild_id2(0);
      }else  if(level==2){
        setChild_id2(0);
        setChild_id(e.target.value)
      }
     
      if(e.target.value>0)
      adminCategories(dispatch,{parent_id:e.target.value,child_id:level==1?0:e.target.value});
 
    
  
 

  }
  const formik:any = useFormik({
    enableReinitialize :true,
    initialValues: {

        title: category?category.title:'',
        en_title: category?category.en_title:'',
       
        
       



    },
    validationSchema: validationCategory,
    onSubmit: (values,{ resetForm }) => {

    

         let data:any = {
          id:router.query?router.query.id:0,
          title:values.title,
          en_title:values.en_title,
          body : description,
          image : image,
           delete_image : (src=="" && category.image && category.image!="")?true:false,
          parent_id: child_id2>0 ? child_id2 :child_id>0? child_id: parent_id
         }; 
         if(!isLoading){
          if(router.query.id)
          adminUpdateCategory(dispatch,data);
          else
          adminAddCategory(dispatch,data);
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
        <CatPageEl>
              <SideBar />
               {
                isLoadingPage?
                <></>
                :
                <ContentEl>
                <Title>
                  {
                    path_type=="add"?"افزودن دسته":"ویرایش دسته"
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
                   <InputLable>عنوان به انگلیسی </InputLable>
                   
                   <InputLableNecessary>*</InputLableNecessary>
                 </InputLableEl>
                 <CustomInput 
                   name="en_title"
                   handleChange={formik.handleChange}
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
                 value={description}
                 onChange ={(e:any)=>setDescription(e.target.value)}
                 />
                </InputEl>



                <InputEl >
                 <InputLableEl>
                   <InputLable>والد</InputLable>
                 
                   <InputLableNecessary></InputLableNecessary>
                 </InputLableEl>
                 <CustomSelectInput
                   name="parent_id"
                   handleChange={(e:any)=>handleCatParent(e,1)}
                   value={parent_id}
                   items={ categories}
                   
               
                   customStyle={customInputStyle()} formik={formik}
                 />
                </InputEl>
                
                {
                 childCategories.length>0 && parent_id!=0 ?
                 <InputEl >
                 <InputLableEl>
                   <InputLable>والد2</InputLable>
                   <InputLableNecessary></InputLableNecessary>
                 </InputLableEl>
                 <CustomSelectInput
                   name="child_id"
                   handleChange={(e:any)=>handleCatParent(e,2)}
                   value={child_id}
                   items={ childCategories}
                   
               
                   customStyle={customInputStyle()} formik={formik}
                 />
                </InputEl>
                 :
                 <></>
                }


{
                 childCategories2.length>0 && child_id!=0 ?
                 <InputEl >
                 <InputLableEl>
                   <InputLable>والد3</InputLable>
                   <InputLableNecessary></InputLableNecessary>
                 </InputLableEl>
                 <CustomSelectInput
                   name="child_id2"
                   handleChange={(e:any)=>setChild_id2(e.target.value)}
                   value={child_id2}
                   items={ childCategories2}
                   
               
                   customStyle={customInputStyle()} formik={formik}
                 />
                </InputEl>
                 :
                 <></>
                }
               
                <InputEl >
                 <InputLableEl>
                   <InputLable>تصویر</InputLable>
                   <InputLableNecessary></InputLableNecessary>
                 </InputLableEl>
                
                {
                  category && category.image!="" && src== category.image ?
                  <CustomImageUploaded src={src}  handleSrc={(e:any)=>setSrc(e)}  />
                  :
                  <CustomFileUploadEl src={src}  handleSrc={(e:any)=>setSrc(e)}  handleEvent={(e:any)=>setImage(e)} />

                  
                }
                </InputEl>
                <ButtomDivEl>
                  <ButtonEl  >
                   {
                     isLoading?
                     <CircularProgressEl  />
                     : 
                     <>
                     {
                   path_type=="add"?"افزودن دسته ":"ویرایش دسته"
                 }
                  </>
                   }
                  
                  </ButtonEl>
                </ButtomDivEl>
               
                </form>
            <CustomAlert />
               
            </ContentEl>
               }
        </CatPageEl>
    );
}
export default connect()(CatPage);