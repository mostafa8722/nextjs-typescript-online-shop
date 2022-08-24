
import { Action } from "../../actionsEntity/permission";
import { permissionActionType } from "../../actionTypes/actions";
import permissionClass from "../../classes/permission";
import { permissionState } from "../../interfaces/state";
import { initialPermissionState } from "../../initialStates/initial";


const permissionReducer = (state:permissionState=initialPermissionState,action :Action):permissionState=>{

    const temppermission = new permissionClass(state);

    switch(action.type) {

        case permissionActionType.ADD_PERMISSION:
            temppermission.add(action.payload)
            return temppermission;
            break;

            case permissionActionType.UPDATE_PERMISSION:
                temppermission.update(action.payload)
                return temppermission;
                break;

            case permissionActionType.DELETE_PERMISSION:
                temppermission.delete(action.payload)
                return temppermission;
                break;
                case (permissionActionType.ADMIN_PERMISSIONS || permissionActionType.USER_PERMISSIONS):
                    temppermission.loadData(action.payload)
                    return temppermission;
                    break;

            case permissionActionType.permission:
            temppermission.loadpermission(action.payload)
            return temppermission;
            break;
           

           

      
        default:
            return state;
    }
}
export default permissionReducer;