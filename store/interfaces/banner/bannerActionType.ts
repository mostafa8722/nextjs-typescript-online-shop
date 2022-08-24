import {bannerActionType} from '../../actionTypes/actions'
import { bannerInfo } from '../info'; 

export namespace banner {

    export interface add {
        type: bannerActionType.ADD_BANNER;
        payload: bannerInfo;
    }

    export interface update {
        type: bannerActionType.UPDATE_BANNER;
        payload: bannerInfo;
    }

    export interface loadDataAdmin {
        type: bannerActionType.ADMIN_BANNERS;
        payload: bannerInfo[];

    }
    
    export interface loadData {
        type: bannerActionType.USER_BANNERS;
        payload: bannerInfo[];

    } export interface deleteData {
        type: bannerActionType.DELETE_BANNER;
        payload: bannerInfo;

    }

    export interface loadBanner {
        type: bannerActionType.BANNER;
        payload: bannerInfo;
    }

}

export default banner;
