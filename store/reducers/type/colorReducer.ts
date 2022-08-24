
import { Action } from "../../actionsEntity/color";
import { colorActionType } from "../../actionTypes/actions";
import colorClass from "../../classes/color";
import { colorState } from "../../interfaces/state";
import { initialColorState } from "../../initialStates/initial";


const colorReducer = (state:colorState=initialColorState,action :Action):colorState=>{

    const tempcolor = new colorClass(state);

    switch(action.type) {

        case colorActionType.ADD_COLOR:
            tempcolor.add(action.payload)
            return tempcolor;
            break;

            case colorActionType.UPDATE_COLOR:
                tempcolor.update(action.payload)
                return tempcolor;
                break;

            case colorActionType.DELETE_COLOR:
                tempcolor.delete(action.payload)
                return tempcolor;
                break;
                case (colorActionType.ADMIN_COLORS || colorActionType.USER_COLORS):
                    tempcolor.loadData(action.payload)
                    return tempcolor;
                    break;

            case colorActionType.COLOR:
            tempcolor.loadColor(action.payload)
            return tempcolor;
            break;
           

           

      
        default:
            return state;
    }
}
export default colorReducer;