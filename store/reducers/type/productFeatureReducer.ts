
import { Action } from "../../actionsEntity/productFeature";
import { featureActionType } from "../../actionTypes/actions";
import featurClass from "../../classes/productFeature";
import {productFeatureState } from "../../interfaces/state";
import { initialProductFeatureState } from "../../initialStates/initial";


const FeatureReducer = (state:productFeatureState=initialProductFeatureState,action :Action):productFeatureState=>{

    const tempFeature = new featurClass(state);

    switch(action.type) {

        case featureActionType.ADD_FEATURE:
            tempFeature.add(action.payload)
            return tempFeature;
            break;

            case featureActionType.UPDATE_FEATURE:
                tempFeature.update(action.payload)
                return tempFeature;
                break;

            case featureActionType.DELETE_FEATURE:
                tempFeature.delete(action.payload)
                return tempFeature;
                break;
                case (featureActionType.ADMIN_FEATURES || featureActionType.USER_FEATURES):
                    tempFeature.loadData(action.payload)
                    return tempFeature;
                    break;

            case featureActionType.FEATURE:
            tempFeature.loadFeature(action.payload)
            return tempFeature;
            break;
           

           

      
        default:
            return state;
    }
}
export default FeatureReducer;