
import { Action } from "../../actionsEntity/general";
import { actionType } from "../../actionTypes/actions";
import {initialGeneralState } from "../../initialStates/initial"
import GeneralClass from "../../classes/general";

interface generalState {
 
    isLoading: boolean ,
    isLoading2: boolean ,
    isDataSuccess: boolean ,
    isLoadingPage: boolean ,
    showAlert :boolean,
    alertMessage: string,
    alertType:string,
}  

const generalReducer = (state:generalState=initialGeneralState,action :Action):generalState=>{

    const tempCategory = new GeneralClass(state);

    switch(action.type) {
      

            case actionType.LOADING:
              
                tempCategory.loading(action.payload)
                return tempCategory;
                break;
                case actionType.LOADING2:
                tempCategory.loading2(action.payload)
                return tempCategory;
                break;
                case actionType.IS_DATA_SUCCESS:
                tempCategory.sendData(action.payload)
                return tempCategory;
                break;

                case actionType.LOADING_PAGE:
              
                    tempCategory.loadingPage(action.payload)
                    return tempCategory;
                    break;

                    case actionType.ALERT_MESSAGE:
              
                        tempCategory.showMessage(action.payload)
                        return tempCategory;
                        break;

      
        default:
            return state;
    }
}
export default generalReducer;