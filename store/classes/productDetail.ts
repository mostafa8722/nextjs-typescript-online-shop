import { productDetailInfo } from "../interfaces/info";
import { productDetailState, productState } from "../interfaces/state";



class productDetailClass implements productDetailState{
    detail: {} | productDetailInfo;
    details: [] | productDetailInfo[];
    constructor(state:productDetailState){
        this.detail = state.detail;
        this.details = state.details;
    }

    add (detail:productDetailInfo){
      this.detail = detail;
    }
   
    update (detail:productDetailInfo){
      this.detail = detail;
    }
    delete (detail:productDetailInfo){
      this.detail = detail;
    }
    
    loadAdminData(details: productDetailInfo[]){
       
      this.details =  details;
     }
 
     loadData(details: productDetailInfo[]){
       
         this.details =  details;
        }
      
        loadAdminDetail(detail: productDetailInfo){
       
          this.detail =  detail;
         }
         
        loadDetail(detail: productDetailInfo){
       
         this.detail =  detail;
        }
}
export default productDetailClass;