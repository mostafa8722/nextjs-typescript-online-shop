import { categoryInfo } from "../interfaces/info";
import { categoryState } from "../interfaces/state";

class categoryClass implements  categoryState{

    category: {} | categoryInfo; 
    constructor(state : categoryState){
        this.category = state.category;
    }

    add(cat : categoryInfo){
     this.category = cat;
    }
}

export default categoryClass;