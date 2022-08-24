import {patch,put, post,get,delete_} from "../index";

import {add,update,deleteData,loadData,loadAdminData,loadPermission} from "../../store/actions/permission"
import {loading,loading2,isDataSuccess,loadingPage,alertMessage} from "../../store/actions/general"


export const adminPermissions:any = (dispatch:any,data:any)=>{

    dispatch(loadingPage(false))

    let res:any = get(`admin/permissions`);
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
export const permissionsRequest:any = (dispatch:any,data:any)=>{

    dispatch(loadingPage(false))

    let res:any = get(`permissions`);
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

export const adminPermissionRequest:any = (dispatch:any,id:number)=>{

  dispatch(loadingPage(false))

  let res:any = get(`admin/permissions/${id}`);
  res.then((v:any)=>{

    dispatch(loadPermission(v.data))     

  },(e:any)=>{console.log("errror",e)})
  .finally(() => {
    setTimeout(()=>{
     dispatch(loadingPage(false))
     dispatch(loading(false))
    },500)
  });

}

export const permissionRequest:any = (dispatch:any,id:number)=>{

  dispatch(loadingPage(false))

  let res:any = get(`permissions/${id}`);
  res.then((v:any)=>{

    dispatch(loadPermission(v.data))     

  },(e:any)=>{console.log("errror",e)})
  .finally(() => {
    setTimeout(()=>{
     dispatch(loadingPage(false))
     dispatch(loading(false))
    },500)
  });

}


export const addPermission:any = (dispatch:any,data:any)=>{
  dispatch(isDataSuccess(false));
  dispatch(loading(true))

  let formData = new FormData();

  formData.set("title",data.title);
  formData.set("value",data.value);


    let res:any = post("admin/permissions",formData);


      
    res.then((v:any)=>{
      let alertmsg = {
        showAlert :true,
        alertMessage: "  دسترسی  با موفقیت افزوده گردید.",
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

export const updatePermission:any = (dispatch:any,data:any)=>{
  dispatch(isDataSuccess(false));
  dispatch(loading(true))
  

  let formData = new FormData();

  formData.set("title",data.title);
  formData.set("value",data.value);

 

    let res:any = post(`admin/permissions/${data.id}?_method=PUT`,formData);

 
      
    res.then((v:any)=>{
   
  
      let alertmsg = {
        showAlert :true,
        alertMessage: "دسترسی با موفقیت به روزرسانی گردید.",
        alertType:"success",
      }
    dispatch(loadPermission(  v.data));
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


export const deletePermission:any = (dispatch:any,id:number)=>{
  dispatch(isDataSuccess(false));
  dispatch(loading(true))



    let res:any = delete_(`admin/permissions/${id}`);

  
      
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