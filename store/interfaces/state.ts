import {bannerInfo, cartInfo,categoryInfo,colorInfo,commentInfo, orderInfo,permissionInfo,productDetailInfo,productFeatureInfo,productInfo,roleInfo,sizeInfo,userInfo} from "./info"

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
    orders :orderInfo[] | [],
}


export interface colorState {
    color:  colorInfo | {},
    colors:colorInfo[]| []
}
export interface sizeState {
    size:  sizeInfo | {},
    sizes:sizeInfo[]| []
}

export interface roleState {
    role:  roleInfo | {},
    roles:roleInfo[]| []
}
export interface bannerState {
    banner:  bannerInfo | {},
    banners:bannerInfo[]| []
}
export interface permissionState {
    permission:  permissionInfo | {},
    permissions:permissionInfo[]| []
}

export interface productState {
    product:  productInfo | {},
    products:  productInfo[] | [],
}

export interface productDetailState {
    detail:  productDetailInfo | {},
    details:  productDetailInfo[] | [],
}
export interface productFeatureState {
    feature:  productFeatureInfo | {},
    features:  productFeatureInfo[] | [],
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
