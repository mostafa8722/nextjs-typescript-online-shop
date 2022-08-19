import {userActionType} from '../../actionTypes/actions'
import {userInfo} from '../info';

export namespace user {

    export interface Login {
        type: userActionType.USER_LOGIN;
        payload: userInfo
    }
    export interface Register {
        type: userActionType.USER_REGISTER;
        payload: userInfo
    }
    export interface GetUserInfo {
        type: userActionType.USER_INFO;
        payload: userInfo
    }


}

export default user;
