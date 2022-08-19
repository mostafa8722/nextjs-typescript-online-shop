import {userActionType} from "../../actionTypes/actions";
import {Action}  from '../../actionsEntity/user';
import {userState} from "../../interfaces/state";
import {initialUserState} from "../../initialStates/initial";
import ClassUser from "../../classes/user";



const userReducer = (state: userState = initialUserState, action: Action):userState => {
    const tempUser = new ClassUser(state);

    switch(action.type) {
        case userActionType.USER_LOGIN:
            console.log("tttt",action.payload)
            tempUser.login(action.payload)
            return tempUser;
            break;

        case userActionType.USER_REGISTER:
            tempUser.register(action.payload)
            return tempUser;
            break;
        case userActionType.USER_INFO:
            tempUser.setUserInfo(action.payload)
            return tempUser;
            break;
        default:
            return state;
    }
}

export default userReducer;