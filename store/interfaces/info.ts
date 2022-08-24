//1
export interface cartInfo  {
    title: string,
    body: string,
    description: string,
    price: string,
    discount: string,
    count: number,
    total_price: string,


}
//2
export interface categoryInfo  {
    id:number,
    title: string,
    en_title: string,
    parent: string,
    parent_id: number,
    child_id: number,
    child_id2: number,
    body: string,
    image: string,
    level: string,
   

}
//3
export interface commentInfo  {
    user_id:number,
    product_id:number,
    body: string,
    rate1: number,
    rate2: number,
    rate3: number,
    rate4:  number,
    total_rate:  number,
    status :string,
   

}

//4
export interface orderInfo  {
    name: string,
    family: string,
    mobile: string,
    phone: string,
    email: string,
    type: string,
    token: string,
    password: string,
    address: string,
    sheba: string,
    bank: string,
    zipcode: string,
    state: string,
    city: string,
    gender: string,
    nationalCode: string,
    idNumber: string,
    commercialCode: string,

}

//6
export interface userInfo  {
    name: string,
    family: string,
    mobile: string,
    phone: string,
    email: string,
    type: string,
    token: string,
    password: string,
    address: string,
    sheba: string,
    bank: string,
    zipcode: string,
    state: string,
    city: string,
    gender: string,
    nationalCode: string,
    idNumber: string,
    commercialCode: string,

}

//6
export interface colorInfo  {
    id: number,
    title: string,
    value: string,
  }

  export interface sizeInfo  {
    id: number,
    title: string,
    value: string,
  }
  export interface roleInfo  {
    id: number,
    title: string,
    label: string,
    description: string,
  }
  export interface permissionInfo  {
    id: number,
    title: string,
    label: string,
    description: string,
  }

  //5
export interface productInfo  {
  title: string,
  abstract: string,
  discription: string,
  category_id: number,
  user_id: number,
  price: string,
  limited_number: number,
  isAvailable: boolean,
  details: Array<productDetailInfo>,
  features: Array<productFeatureInfo>,
  colors: Array<colorInfo>,
  sizes: Array<sizeInfo>,
 
  status: string,


}

  export interface productDetailInfo  {
    id: number,
    title: string,
    label: string,
    description: string,
  }
  
  export interface productFeatureInfo  {
    id: number,
    title: string,
    label: string,
    description: Array<string>,
  }

  export interface bannerInfo  {
    id:number,
    title: string,
    description: string,
    image: string,
    type: string,
    product: productInfo,
    category: categoryInfo,
    
   

}
