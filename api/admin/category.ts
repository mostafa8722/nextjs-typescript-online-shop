import {patch, post,get} from "../index";
import { useDispatch, useSelector } from "react-redux";


export const adminCategories:any = ()=>{

    const dispatch = useDispatch();

    let res:any = get("admin/categories");

    console.log("tt");
    res.then((v:any)=>{
      // props.dispatch(login(data))
   
      console.log("tt",v);

    },(e:any)=>{console.log("errror",e)})

}