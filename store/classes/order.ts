import { orderInfo } from "../interfaces/info";
import { orderState } from "../interfaces/state";

class orderClass implements orderState {

    order: {} | orderInfo;
    constructor(state:orderState){
        this.order =state.order;
    }
    add(order:orderInfo){
        this.order = order;
    }
}

export default orderClass;