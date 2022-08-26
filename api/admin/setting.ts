import {patch,put, post,get,delete_} from "../index";

import {add,update,deleteData,loadData,loadAdminData,loadSetting} from "../../store/actions/setting"
import {loading,loading2,isDataSuccess,loadingPage,alertMessage} from "../../store/actions/general"


export const adminSettings:any = (dispatch:any,data:any)=>{

    dispatch(loadingPage(false))

    let res:any = get(`admin/settings`);
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
export const settingsRequest:any = (dispatch:any,data:any)=>{

    dispatch(loadingPage(false))

    let res:any = get(`settings`);
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

export const adminSettingRequest:any = (dispatch:any,id:number)=>{

  dispatch(loadingPage(false))

  let res:any = get(`admin/settings/${id}`);
  res.then((v:any)=>{

    dispatch(loadSetting(v.data))     

  },(e:any)=>{console.log("errror",e)})
  .finally(() => {
    setTimeout(()=>{
     dispatch(loadingPage(false))
     dispatch(loading(false))
    },500)
  });

}

export const settingRequest:any = (dispatch:any,id:number)=>{

  dispatch(loadingPage(false))

  let res:any = get(`settings/${id}`);
  res.then((v:any)=>{

    dispatch(loadSetting(v.data))     

  },(e:any)=>{console.log("errror",e)})
  .finally(() => {
    setTimeout(()=>{
     dispatch(loadingPage(false))
     dispatch(loading(false))
    },500)
  });

}


export const addSetting:any = (dispatch:any,data:any)=>{
  dispatch(isDataSuccess(false));
  dispatch(loading(true))

  let formData = new FormData();

  formData.set("title",data.title);
  formData.set("value",data.value);


    let res:any = post("admin/settings",formData);


      
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

export const updateSetting:any = (dispatch:any,data:any)=>{
  dispatch(isDataSuccess(false));
  dispatch(loading(true))
  

  let formData = new FormData();

  formData.set("title",data.title);
  formData.set("value",data.value);

 

    let res:any = post(`admin/settings/${data.id}?_method=PUT`,formData);

 
      
    res.then((v:any)=>{
   
  
      let alertmsg = {
        showAlert :true,
        alertMessage: "کدرنگ با موفقیت به روزرسانی گردید.",
        alertType:"success",
      }
    dispatch(loadSetting(  v.data));
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


export const deleteSetting:any = (dispatch:any,id:number)=>{
  dispatch(isDataSuccess(false));
  dispatch(loading(true))



    let res:any = delete_(`admin/settings/${id}`);

  
      
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