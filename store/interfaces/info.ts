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
//5
export interface productInfo  {
    title: string,
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

