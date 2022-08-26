import {patch,put, post,get,delete_} from "../index";

import {add,loadBanner,loadData} from "../../store/actions/banner"
import {loading,loading2,isDataSuccess,loadingPage,alertMessage} from "../../store/actions/general"


export const adminCategories:any = (dispatch:any,data:any)=>{



 

    let parent_id = data &&  data.parent_id? data.parent_id:0;
    let child_id =  data && data.child_id? data.child_id:0;

    dispatch(loadingPage(false))
  
    let data_url =child_id>0?`?parent_id=${child_id}` : `?parent_id=${parent_id}`;
    data_url = data? data_url : "";
    let res:any = get(`admin/categories${data_url}`);
    res.then((v:any)=>{
      let res_data = [{id:0,title:"بدون دسته ولد",en_title:'',parent: "",
      parent_id:0,
      child_id2:0,
      child_id:0,
     
      body: "",
      image: "",
      level: ""}];
 
      if(!data)
      res_data = [];
      v.data.map((item:any)=>{
        res_data.push(item)
      })


   
      if(child_id>0 )
      dispatch(loadData3(res_data))
      else  if(parent_id>0 )
      dispatch(loadData2(res_data))
      else 
      dispatch(loadData(res_data))


     
   
     

    },(e:any)=>{console.log("errror",e)})
    .finally(() => {
      setTimeout(()=>{
       dispatch(loadingPage(false))
       dispatch(loading(false))
      },500)
    });

}

export const bannerRequest:any = (dispatch:any,id:number)=>{









  let res:any = get(`admin/categories/${id}`);
  res.then((v:any)=>{
    let res_data = [{id:0,title:"بدون دسته ولد",en_title:'',parent: "",
    body: "",
    image: "",
    level: ""}];



    dispatch(loadBanner(  v.data))

   


   
 
   

  },(e:any)=>{console.log("errror",e)})
  .finally(() => {
    setTimeout(()=>{
     dispatch(loadingPage(false))
     dispatch(loading(false))
    },500)
  });

}
export const adminAddBanner:any = (dispatch:any,data:any)=>{
  dispatch(isDataSuccess(false));
  dispatch(loading(true))

  let formData = new FormData();

  formData.set("title",data.title);
  formData.set("en_title",data.en_title);
  formData.set("body",data.body);
  formData.set("image",data.image);
  formData.set("parent_id",data.parent_id);

    let res:any = post("admin/categories",formData);


      
    res.then((v:any)=>{
      let alertmsg = {
        showAlert :true,
        alertMessage: "دسته بندی با موفقیت افزوده گردید.",
        alertType:"success",
      }
      dispatch(alertMessage(alertmsg))

      dispatch(isDataSuccess(true));
     
   
     

    },(e:any)=>{console.log("errror",e)})
    .finally(() => {
      setTimeout(()=>{
        dispatch(loading(false))
      },500)
      setTimeout(()=>{
        let alertmsg = {
          showAlert :false,
          alertMessage: "",
          alertType:"success",
        }
        dispatch(alertMessage(alertmsg))
      },2000)
    });

}

export const adminUpdateBanner:any = (dispatch:any,data:any)=>{
  dispatch(isDataSuccess(false));
  dispatch(loading(true))
  

  let formData = new FormData();

  formData.set("title",data.title);
  formData.set("en_title",data.en_title);
  formData.set("body",data.body);
  formData.set("image",data.image);
  formData.set("delete_image",data.delete_image);
  formData.set("parent_id",data.parent_id);

 

    let res:any = post(`admin/categories/${data.id}?_method=PUT`,formData);

 
      
    res.then((v:any)=>{
   
    
      let alertmsg = {
        showAlert :true,
        alertMessage: "دسته بندی با موفقیت به روزرسانی گردید.",
        alertType:"success",
      }
    dispatch(loadBanner(  v.data));
      dispatch(alertMessage(alertmsg))

      dispatch(isDataSuccess(true));
     
   
     

    },(e:any)=>{console.log("errror",e)})
    .finally(() => {
      setTimeout(()=>{
        dispatch(loading(false))
      },500)
      setTimeout(()=>{
        let alertmsg = {
          showAlert :false,
          alertMessage: "",
          alertType:"success",
        }
        dispatch(alertMessage(alertmsg))
      },2000)
    });

}


export const adminDeleteBanner:any = (dispatch:any,id:number)=>{
  dispatch(isDataSuccess(false));
  dispatch(loading(true))



    let res:any = delete_(`admin/categories/${id}`);

  
      
    res.then((v:any)=>{

    
      let alertmsg = {
        showAlert :true,
        alertMessage: "حذف با موفقیت انجام شد",
        alertType:"success",
      }
      dispatch(alertMessage(alertmsg))

      dispatch(isDataSuccess(true));
     
   
     

    },(e:any)=>{console.log("errror",e)})
    .finally(() => {
      setTimeout(()=>{
        dispatch(loading(false))
      },500)
      setTimeout(()=>{
        let alertmsg = {
          showAlert :false,
          alertMessage: "",
          alertType:"success",
        }
        dispatch(alertMessage(alertmsg))
      },2000)
    });

}