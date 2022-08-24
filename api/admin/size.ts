import {patch,put, post,get,delete_} from "../index";

import {add,update,deleteData,loadData,loadAdminData,loadSize} from "../../store/actions/size"
import {loading,loading2,isDataSuccess,loadingPage,alertMessage} from "../../store/actions/general"


export const adminSizes:any = (dispatch:any,data:any)=>{

    dispatch(loadingPage(false))

    let res:any = get(`admin/sizes`);
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
export const sizesRequest:any = (dispatch:any,data:any)=>{

    dispatch(loadingPage(false))

    let res:any = get(`sizes`);
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

export const adminSizeRequest:any = (dispatch:any,id:number)=>{

  dispatch(loadingPage(false))

  let res:any = get(`admin/sizes/${id}`);
  res.then((v:any)=>{

    dispatch(loadSize(v.data))     

  },(e:any)=>{console.log("errror",e)})
  .finally(() => {
    setTimeout(()=>{
     dispatch(loadingPage(false))
     dispatch(loading(false))
    },500)
  });

}

export const sizeRequest:any = (dispatch:any,id:number)=>{

  dispatch(loadingPage(false))

  let res:any = get(`sizes/${id}`);
  res.then((v:any)=>{

    dispatch(loadSize(v.data))     

  },(e:any)=>{console.log("errror",e)})
  .finally(() => {
    setTimeout(()=>{
     dispatch(loadingPage(false))
     dispatch(loading(false))
    },500)
  });

}


export const addSize:any = (dispatch:any,data:any)=>{
  dispatch(isDataSuccess(false));
  dispatch(loading(true))

  let formData = new FormData();

  formData.set("title",data.title);
  formData.set("value",data.value);


    let res:any = post("admin/sizes",formData);


      
    res.then((v:any)=>{
      let alertmsg = {
        showAlert :true,
        alertMessage: "  اندازه  با موفقیت افزوده گردید.",
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

export const updateSize:any = (dispatch:any,data:any)=>{
  dispatch(isDataSuccess(false));
  dispatch(loading(true))
  

  let formData = new FormData();

  formData.set("title",data.title);
  formData.set("value",data.value);

 

    let res:any = post(`admin/sizes/${data.id}?_method=PUT`,formData);

 
      
    res.then((v:any)=>{
   
  
      let alertmsg = {
        showAlert :true,
        alertMessage: "سایز با موفقیت به روزرسانی گردید.",
        alertType:"success",
      }
    dispatch(loadSize(  v.data));
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


export const deleteSize:any = (dispatch:any,id:number)=>{
  dispatch(isDataSuccess(false));
  dispatch(loading(true))



    let res:any = delete_(`admin/sizes/${id}`);

  
      
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