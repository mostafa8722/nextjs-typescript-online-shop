
import { Action } from "../../actionsEntity/comment";
import { commentActionType } from "../../actionTypes/actions";
import CommentClass from "../../classes/comment";
import { commentState } from "../../interfaces/state";
import { initialCommentState } from "../../initialStates/initial";


const commentReducer = (state:commentState=initialCommentState,action :Action):commentState=>{

    const tempComment = new CommentClass(state);

    switch(action.type) {
        case commentActionType.ADD_COMMENT:
            console.log("tttt",action.payload)
            tempComment.add(action.payload)
            return tempComment;
            break;

      
        default:
            return state;
    }
}
export default commentReducer;