import {settingActionType} from '../../actionTypes/actions'
import { settingInfo } from '../info'; 

export namespace setting {

    export interface add {
        type: settingActionType.ADD_SETTING;
        payload: settingInfo;
    }

    export interface update {
        type: settingActionType.UPDATE_SETTING;
        payload: settingInfo;
    }

    export interface loadDataAdmin {
        type: settingActionType.ADMIN_SETTINGS;
        payload: settingInfo[];

    }
    
    export interface loadData {
        type: settingActionType.USER_SETTINGS;
        payload: settingInfo[];

    } export interface deleteData {
        type: settingActionType.DELETE_SETTING;
        payload: settingInfo;

    }
    export interface loadSetting {
        type: settingActionType.SETTING;
        payload: settingInfo;
    }

}

export default setting;
