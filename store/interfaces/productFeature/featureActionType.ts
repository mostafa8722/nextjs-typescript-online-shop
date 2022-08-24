import {featureActionType} from '../../actionTypes/actions'
import { productFeatureInfo } from '../info'; 

export namespace color {

    export interface add {
        type: featureActionType.ADD_FEATURE;
        payload: productFeatureInfo;
    }

    export interface update {
        type: featureActionType.UPDATE_FEATURE;
        payload: productFeatureInfo;
    }

    export interface loadDataAdmin {
        type: featureActionType.ADMIN_FEATURES;
        payload: productFeatureInfo[];

    }
    
    export interface loadData {
        type: featureActionType.USER_FEATURES;
        payload: productFeatureInfo[];

    } export interface deleteData {
        type: featureActionType.DELETE_FEATURE;
        payload: productFeatureInfo;

    }




    export interface loadFeature {
        type: featureActionType.FEATURE;
        payload: productFeatureInfo;
    }

}

export default color;
