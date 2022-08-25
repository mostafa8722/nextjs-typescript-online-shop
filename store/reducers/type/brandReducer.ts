
import { Action } from "../../actionsEntity/brand";
import { brandActionType } from "../../actionTypes/actions";
import brandClass from "../../classes/brand";
import { brandState } from "../../interfaces/state";
import { initialBrandState } from "../../initialStates/initial";


const brandReducer = (state:brandState=initialBrandState,action :Action):brandState=>{

    const tempBanner = new brandClass(state);

    switch(action.type) {

        case brandActionType.ADD_BRAND:
            tempBanner.add(action.payload)
            return tempBanner;
            break;

            case brandActionType.UPDATE_BRAND:
                tempBanner.update(action.payload)
                return tempBanner;
                break;

            case brandActionType.DELETE_BRAND:
                tempBanner.delete(action.payload)
                return tempBanner;
                break;
                case (brandActionType.ADMIN_BRANDS || brandActionType.USER_BRANDS):
                    tempBanner.loadData(action.payload)
                    return tempBanner;
                    break;

            case brandActionType.BRAND:
            tempBanner.loadBrand(action.payload)
            return tempBanner;
            break;
           

           

      
        default:
            return state;
    }
}
export default brandReducer;