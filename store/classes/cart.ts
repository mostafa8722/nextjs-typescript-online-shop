import {cartState} from "../interfaces/state"
import {cartInfo} from "../interfaces/info"

class cartClass implements cartState {

    cart : cartInfo | {} ;
 
  constructor(state:cartState){
    this.cart = state.cart;
  
  }

  add (cart : cartInfo){
    this.cart = cart;
  }

}
export default cartClass;