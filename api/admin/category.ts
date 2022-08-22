import {patch, post,get} from "../index";
import { useDispatch, useSelector } from "react-redux";
import {add,loadData, loadData2, loadData3,} from "../../store/actions/category"
import {loading,loading2,isDataSuccess,loadingPage,alertMessage} from "../../store/actions/general"


export const adminCategories:any = (dispatch:any,data:any)=>{



 

    let parent_id = data &&  data.parent_id? data.parent_id:0;
    let child_id =  data && data.child_id? data.child_id:0;


  
    let data_url =child_id>0?`?parent_id=${child_id}` : `?parent_id=${parent_id}`;
    data_url = data? data_url : "";
    let res:any = get(`admin/categories${data_url}`);
    res.then((v:any)=>{
      let res_data = [{id:0,title:"بدون دسته ولد",en_title:'',parent: "",
      body: "",
      image: "",
      level: ""}];
 
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
export const adminAddCategory:any = (dispatch:any,data:any)=>{
  dispatch(isDataSuccess(false));
  dispatch(loading(true))

  let formData = new FormData();

  formData.set("title",data.title);
  formData.set("en_title",data.en_title);
  formData.set("body",data.body);
  formData.set("image",data.image);
  formData.set("parent_id",data.parent_id);

    let res:any = post("admin/categories",formData);

    console.log("tt",data);
      
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