import {patch,put, post,get,delete_} from "../index";

import {add,update,deleteData,loadData,loadAdminData,loadColor} from "../../store/actions/color"
import {loading,loading2,isDataSuccess,loadingPage,alertMessage} from "../../store/actions/general"


export const adminColors:any = (dispatch:any,data:any)=>{

    dispatch(loadingPage(false))

    let res:any = get(`admin/colors`);
    res.then((v:any)=>{
  
      dispatch(loadAdminData(v.data))     

    },(e:any)=>{console.log("errror",e)})
    .finally(() => {
      setTimeout(()=>{
       dispatch(loadingPage(false))
       dispatch(loading(false))
      },500)
    });

}
export const colorsRequest:any = (dispatch:any,data:any)=>{

    dispatch(loadingPage(false))

    let res:any = get(`colors`);
    res.then((v:any)=>{
  
      dispatch(loadData(v.data))     

    },(e:any)=>{console.log("errror",e)})
    .finally(() => {
      setTimeout(()=>{
       dispatch(loadingPage(false))
       dispatch(loading(false))
      },500)
    });

}

export const adminColorRequest:any = (dispatch:any,id:number)=>{

  dispatch(loadingPage(false))

  let res:any = get(`admin/colors/${id}`);
  res.then((v:any)=>{

    dispatch(loadColor(v.data))     

  },(e:any)=>{console.log("errror",e)})
  .finally(() => {
    setTimeout(()=>{
     dispatch(loadingPage(false))
     dispatch(loading(false))
    },500)
  });

}

export const colorRequest:any = (dispatch:any,id:number)=>{

  dispatch(loadingPage(false))

  let res:any = get(`colors/${id}`);
  res.then((v:any)=>{

    dispatch(loadColor(v.data))     

  },(e:any)=>{console.log("errror",e)})
  .finally(() => {
    setTimeout(()=>{
     dispatch(loadingPage(false))
     dispatch(loading(false))
    },500)
  });

}


export const addColor:any = (dispatch:any,data:any)=>{
  dispatch(isDataSuccess(false));
  dispatch(loading(true))

  let formData = new FormData();

  formData.set("title",data.title);
  formData.set("value",data.value);


    let res:any = post("admin/colors",formData);


      
    res.then((v:any)=>{
      let alertmsg = {
        showAlert :true,
        alertMessage: "  کدرنگ  با موفقیت افزوده گردید.",
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

export const updateColor:any = (dispatch:any,data:any)=>{
  dispatch(isDataSuccess(false));
  dispatch(loading(true))
  

  let formData = new FormData();

  formData.set("title",data.title);
  formData.set("value",data.value);

 

    let res:any = post(`admin/colors/${data.id}?_method=PUT`,formData);

 
      
    res.then((v:any)=>{
   
  
      let alertmsg = {
        showAlert :true,
        alertMessage: "کدرنگ با موفقیت به روزرسانی گردید.",
        alertType:"success",
      }
    dispatch(loadColor(  v.data));
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


export const deleteColor:any = (dispatch:any,id:number)=>{
  dispatch(isDataSuccess(false));
  dispatch(loading(true))



    let res:any = delete_(`admin/colors/${id}`);

  
      
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