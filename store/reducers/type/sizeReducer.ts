
import { Action } from "../../actionsEntity/size";
import { sizeActionType } from "../../actionTypes/actions";
import sizeClass from "../../classes/size";
import { sizeState } from "../../interfaces/state";
import { initialSizeState } from "../../initialStates/initial";


const sizeReducer = (state:sizeState=initialSizeState,action :Action):sizeState=>{

    const tempsize = new sizeClass(state);

    switch(action.type) {

        case sizeActionType.ADD_SIZE:
            tempsize.add(action.payload)
            return tempsize;
            break;

            case sizeActionType.UPDATE_SIZE:
                tempsize.update(action.payload)
                return tempsize;
                break;

            case sizeActionType.DELETE_SIZE:
                tempsize.delete(action.payload)
                return tempsize;
                break;
                case (sizeActionType.ADMIN_SIZES || sizeActionType.USER_SIZES):
                    tempsize.loadData(action.payload)
                    return tempsize;
                    break;

            case sizeActionType.size:
            tempsize.loadsize(action.payload)
            return tempsize;
            break;
           

           

      
        default:
            return state;
    }
}
export default sizeReducer;