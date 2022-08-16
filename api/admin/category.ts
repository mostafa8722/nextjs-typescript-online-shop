import {patch, post,get} from "../index";

export const adminCategories:any = ()=>{

   
    let res:any = get("admin/categories");

    console.log("tt");
    res.then((v:any)=>{
      // props.dispatch(login(data))
   
      console.log("tt",v);

    },(e:any)=>{console.log("errror",e)})

}