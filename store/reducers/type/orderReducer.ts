
import { Action } from "../../actionsEntity/order";
import { orderActionType } from "../../actionTypes/actions";
import OrderClass from "../../classes/order";
import { orderState } from "../../interfaces/state";
import { initialOrderState } from "../../initialStates/initial";


const orderReducer = (state:orderState=initialOrderState,action :Action):orderState=>{

    const tempOrder = new OrderClass(state);

    switch(action.type) {
        case orderActionType.ADD_ORDER:
            console.log("tttt",action.payload)
            tempOrder.add(action.payload)
            return tempOrder;
            break;

      
        default:
            return state;
    }
}
export default orderReducer;