import {patch,put, post,get,delete_} from "../index";

import {add,update,deleteData,loadData,loadAdminData,loadRole} from "../../store/actions/role"
import {loading,loading2,isDataSuccess,loadingPage,alertMessage} from "../../store/actions/general"


export const adminRoles:any = (dispatch:any,data:any)=>{

    dispatch(loadingPage(false))

    let res:any = get(`admin/roles`);
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
export const rolesRequest:any = (dispatch:any,data:any)=>{

    dispatch(loadingPage(false))

    let res:any = get(`roles`);
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

export const adminRoleRequest:any = (dispatch:any,id:number)=>{

  dispatch(loadingPage(false))

  let res:any = get(`admin/roles/${id}`);
  res.then((v:any)=>{

    dispatch(loadRole(v.data))     

  },(e:any)=>{console.log("errror",e)})
  .finally(() => {
    setTimeout(()=>{
     dispatch(loadingPage(false))
     dispatch(loading(false))
    },500)
  });

}

export const roleRequest:any = (dispatch:any,id:number)=>{

  dispatch(loadingPage(false))

  let res:any = get(`roles/${id}`);
  res.then((v:any)=>{

    dispatch(loadRole(v.data))     

  },(e:any)=>{console.log("errror",e)})
  .finally(() => {
    setTimeout(()=>{
     dispatch(loadingPage(false))
     dispatch(loading(false))
    },500)
  });

}


export const addRole:any = (dispatch:any,data:any)=>{
  dispatch(isDataSuccess(false));
  dispatch(loading(true))

  let formData = new FormData();

  formData.set("title",data.title);
  formData.set("value",data.value);


    let res:any = post("admin/roles",formData);


      
    res.then((v:any)=>{
      let alertmsg = {
        showAlert :true,
        alertMessage: "  نقش  با موفقیت افزوده گردید.",
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

export const updateRole:any = (dispatch:any,data:any)=>{
  dispatch(isDataSuccess(false));
  dispatch(loading(true))
  

  let formData = new FormData();

  formData.set("title",data.title);
  formData.set("value",data.value);

 

    let res:any = post(`admin/roles/${data.id}?_method=PUT`,formData);

 
      
    res.then((v:any)=>{
   
  
      let alertmsg = {
        showAlert :true,
        alertMessage: "نقش با موفقیت به روزرسانی گردید.",
        alertType:"success",
      }
    dispatch(loadRole(  v.data));
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


export const deleteRole:any = (dispatch:any,id:number)=>{
  dispatch(isDataSuccess(false));
  dispatch(loading(true))



    let res:any = delete_(`admin/roles/${id}`);

  
      
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