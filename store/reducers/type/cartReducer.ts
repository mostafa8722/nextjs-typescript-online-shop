
import { Action } from "../../actionsEntity/cart";
import { cartActionType } from "../../actionTypes/actions";
import CartClass from "../../classes/cart";
import { cartState } from "../../interfaces/state";
import { initialCartState } from "../../initialStates/initial";


const cartReducer = (state:cartState=initialCartState,action :Action):cartState=>{

    const tempCart = new CartClass(state);

    switch(action.type) {
        case cartActionType.ADD_CART:
            console.log("tttt",action.payload)
            tempCart.add(action.payload)
            return tempCart;
            break;

      
        default:
            return state;
    }
}
export default cartReducer;