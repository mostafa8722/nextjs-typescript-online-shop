import { commentInfo } from "../interfaces/info";
import { commentState } from "../interfaces/state";


class commentClass implements commentState{
    comment: {} | commentInfo; 
    constructor(state : commentState){
        this.comment = state.comment;

    }

    add (comment:commentInfo){
     this.comment = comment;
    }
}

export default  commentClass;