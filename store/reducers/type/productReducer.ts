
import { Action } from "../../actionsEntity/product";
import { productActionType } from "../../actionTypes/actions";
import ProductClass from "../../classes/product";
import { productState } from "../../interfaces/state";
import { initialProductState } from "../../initialStates/initial";


const productReducer = (state:productState=initialProductState,action :Action):productState=>{

    const tempProduct = new ProductClass(state);

    switch(action.type) {
        case productActionType.ADD_PRODUCT:
            console.log("tttt",action.payload)
            tempProduct.add(action.payload)
            return tempProduct;
            break;

      
        default:
            return state;
    }
}
export default productReducer;