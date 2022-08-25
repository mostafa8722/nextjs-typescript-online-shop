
import { Action } from "../../actionsEntity/setting";
import { settingActionType } from "../../actionTypes/actions";
import settingClass from "../../classes/setting";
import { settingState } from "../../interfaces/state";
import { initialSettingState } from "../../initialStates/initial";


const settingReducer = (state:settingState=initialSettingState,action :Action):settingState=>{

    const tempBanner = new settingClass(state);

    switch(action.type) {

        case settingActionType.ADD_SETTING:
            tempBanner.add(action.payload)
            return tempBanner;
            break;

            case settingActionType.UPDATE_SETTING:
                tempBanner.update(action.payload)
                return tempBanner;
                break;

            case settingActionType.DELETE_SETTING:
                tempBanner.delete(action.payload)
                return tempBanner;
                break;
                case (settingActionType.ADMIN_SETTINGS || settingActionType.USER_SETTINGS):
                    tempBanner.loadData(action.payload)
                    return tempBanner;
                    break;

            case settingActionType.SETTING:
            tempBanner.loadSetting(action.payload)
            return tempBanner;
            break;
           

           

      
        default:
            return state;
    }
}
export default settingReducer;