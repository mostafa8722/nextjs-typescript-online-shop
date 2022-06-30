import userInfo from './userInfo';

interface userState {
    user:  userInfo | {},

    isLoggedIn: boolean | false,
    userId: string | '',
    token: string | '',
    refreshToken: string | '',
    expiresOn: string | '',
    data: string | '',
    apiToken: string | '',
    mobile:string | '',
    email:string | '',
    password:string | '',
    bank:string | '',
    sheba:string | '',

}
export default userState;