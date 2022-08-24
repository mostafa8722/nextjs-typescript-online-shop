
import { Action } from "../../actionsEntity/productDetail";
import { detailActionType } from "../../actionTypes/actions";
import detailClass from "../../classes/productDetail";
import { productDetailState } from "../../interfaces/state";
import { initialProductDetailState } from "../../initialStates/initial";


const detailReducer = (state:productDetailState=initialProductDetailState,action :Action):productDetailState=>{

    const tempDetail = new detailClass(state);

    switch(action.type) {

        case detailActionType.ADD_DETAIL:
            tempDetail.add(action.payload)
            return tempDetail;
            break;

            case detailActionType.UPDATE_DETAIL:
                tempDetail.update(action.payload)
                return tempDetail;
                break;

            case detailActionType.DELETE_DETAIL:
                tempDetail.delete(action.payload)
                return tempDetail;
                break;
                case (detailActionType.ADMIN_DETAILS || detailActionType.USER_DETAILS):
                    tempDetail.loadData(action.payload)
                    return tempDetail;
                    break;

            case detailActionType.DETAIL:
            tempDetail.loadDetail(action.payload)
            return tempDetail;
            break;
           

           

      
        default:
            return state;
    }
}
export default detailReducer;