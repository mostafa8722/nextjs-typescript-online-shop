import userInterface from '../interfaces/userState'
import userInfo from "../interfaces/userInfo";

class ClassUser implements userInterface {

    user:  userInfo | {} ;
    isLoggedIn: boolean | false ;
    userId: string | '';
    token: string | '';
    refreshToken: string | '';
    expiresOn: string | '';
    data: string | '';
    apiToken: string | '';
    mobile:string | '';
    email:string | '';
    password:string | '';
    bank:string | '';
    sheba:string | '';

  // constructor(cart: cartItem[] | [] , toatalPrice: number, deliveryPrice: number) {
    constructor(state: userInterface) {

        this.user = state.user;
        this.isLoggedIn = state.isLoggedIn ;
        this.userId = state.userId;
        this.token = state.token;
        this.refreshToken = state.refreshToken;
        this.expiresOn = state.expiresOn;
        this.data = state.data;
        this.apiToken = state.apiToken;
        this.mobile = state.mobile ;
        this.email = state.email ;
        this.password = state.password ;
        this.bank = state.bank ;
        this.sheba = state.sheba ;
   }

   login(user:userInfo){

    console.log("tttttt",user)
        this.mobile = user.mobile
        this.apiToken = user.token
   }

    register(user:userInfo){
        this.email = user.email;
        this.password = user.password;
        this.bank = user.bank ;
        this.sheba = user.sheba ;
    }

    setUserInfo(user:userInfo){
        this.user = user
    }




}

export default ClassUser;