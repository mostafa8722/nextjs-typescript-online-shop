
import { Action } from "../../actionsEntity/product";
import { productActionType } from "../../actionTypes/actions";
import productClass from "../../classes/product";
import { productState } from "../../interfaces/state";
import { initialProductState } from "../../initialStates/initial";


const productReducer = (state:productState=initialProductState,action :Action):productState=>{

    const tempproduct = new productClass(state);

    switch(action.type) {

        case productActionType.ADD_PRODUCT:
            tempproduct.add(action.payload)
            return tempproduct;
            break;

            case productActionType.UPDATE_PRODUCT:
                tempproduct.update(action.payload)
                return tempproduct;
                break;

            case productActionType.DELETE_PRODUCT:
                tempproduct.delete(action.payload)
                return tempproduct;
                break;
                case ( productActionType.USER_PRODUCTS || productActionType.ADMIN_PRODUCTS):
                    tempproduct.loadData(action.payload)
                    return tempproduct;
                    break;

            case productActionType.USER_PRODUCT:
            tempproduct.loadProduct(action.payload)
            return tempproduct;
            break;
           

           

      
        default:
            return state;
    }
}
export default productReducer;