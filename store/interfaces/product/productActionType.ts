import actionType from '../../actionTypes/'
import userInfo from './userInfo';

export namespace user {

    export interface Login {
        type: actionType.USER_LOGIN;
        payload: userInfo
    }
    export interface Register {
        type: actionType.USER_REGISTER;
        payload: userInfo
    }
    export interface GetUserInfo {
        type: actionType.USER_INFO;
        payload: userInfo
    }


}

export default user;
