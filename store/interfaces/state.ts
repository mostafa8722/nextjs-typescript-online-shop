import {cartInfo,categoryInfo,commentInfo, orderInfo,productInfo,userInfo} from "./info"

//1
export interface cartState {
    cart:  cartInfo | {},
   }

export interface categoryState {
    category:  categoryInfo | {},
    categories :categoryInfo[] | [] ,
    categories2 :categoryInfo[] | [] ,
    categories3 :categoryInfo[] | [] ,
}


export interface commentState {
    comment:  commentInfo | {},}

export interface orderState {
    order:  orderInfo | {},
}

export interface productState {
    product:  productInfo | {},
}

export  interface userState {
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
