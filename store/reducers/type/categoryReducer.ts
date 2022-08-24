
import { Action } from "../../actionsEntity/category";
import { categoryActionType } from "../../actionTypes/actions";
import CategoryClass from "../../classes/category";
import { categoryState } from "../../interfaces/state";
import { initialCategoryState } from "../../initialStates/initial";


const categoryReducer = (state:categoryState=initialCategoryState,action :Action):categoryState=>{

    const tempCategory = new CategoryClass(state);

    switch(action.type) {
        case categoryActionType.ADD_CATEGORY:
          
            tempCategory.add(action.payload)
            return tempCategory;
            break;
            case categoryActionType.ADMIN_CATEGORIES:
            tempCategory.loadData(action.payload)
            return tempCategory;
            break;
             case categoryActionType.ADMIN_CATEGORIES2:
             tempCategory.loadData2(action.payload)
              return tempCategory;
              break;

              case categoryActionType.ADMIN_CATEGORIES3:
              tempCategory.loadData3(action.payload)
               return tempCategory;
               break;

               case categoryActionType.CATEGORY:
                tempCategory.loadCategory(action.payload)
                 return tempCategory;
                 break;

           

      
        default:
            return state;
    }
}
export default categoryReducer;