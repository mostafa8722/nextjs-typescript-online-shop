import actionType from '../../actionTypes/user'
import userInfo from '../user/userInfo';

export namespace category {

    export interface add {
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

export default category;
