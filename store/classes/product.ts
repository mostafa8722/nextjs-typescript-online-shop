import { productInfo } from "../interfaces/info";
import { productState } from "../interfaces/state";



class productClass implements productState{
    product: {} | productInfo;
    constructor(state:productState){
        this.product = state.product;
    }

    add (product:productInfo){
      this.product = product;
    }
}
export default productClass;