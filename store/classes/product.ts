import { productInfo } from "../interfaces/info";
import { productState } from "../interfaces/state";



class productClass implements productState{
    product: {} | productInfo;
    products: [] | productInfo[];
    constructor(state:productState){
        this.product = state.product;
        this.products = state.products;
    }

    add (product:productInfo){
      this.product = product;
    }
   
    update (product:productInfo){
      this.product = product;
    }
    delete (product:productInfo){
      this.product = product;
    }
    
    loadAdminData(products: productInfo[]){
       
      this.products =  products;
     }
 
     loadData(products: productInfo[]){
       
         this.products =  products;
        }
      
        loadAdminProduct(product: productInfo){
       
          this.product =  product;
         }
         
        loadProduct(product: productInfo){
       
         this.product =  product;
        }
}
export default productClass;