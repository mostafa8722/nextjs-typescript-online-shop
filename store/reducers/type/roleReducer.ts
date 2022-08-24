
import { Action } from "../../actionsEntity/role";
import { roleActionType } from "../../actionTypes/actions";
import roleClass from "../../classes/role";
import { roleState } from "../../interfaces/state";
import { initialRoleState } from "../../initialStates/initial";


const roleReducer = (state:roleState=initialRoleState,action :Action):roleState=>{

    const temprole = new roleClass(state);

    switch(action.type) {

        case roleActionType.ADD_ROLE:
            temprole.add(action.payload)
            return temprole;
            break;

            case roleActionType.UPDATE_ROLE:
                temprole.update(action.payload)
                return temprole;
                break;

            case roleActionType.DELETE_ROLE:
                temprole.delete(action.payload)
                return temprole;
                break;
                case (roleActionType.ADMIN_ROLES || roleActionType.USER_ROLES):
                    temprole.loadData(action.payload)
                    return temprole;
                    break;

            case roleActionType.role:
            temprole.loadrole(action.payload)
            return temprole;
            break;
           

           

      
        default:
            return state;
    }
}
export default roleReducer;