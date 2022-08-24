
import { Action } from "../../actionsEntity/banner";
import { bannerActionType } from "../../actionTypes/actions";
import bannerClass from "../../classes/banner";
import { bannerState } from "../../interfaces/state";
import { initialBannerState } from "../../initialStates/initial";


const bannerReducer = (state:bannerState=initialBannerState,action :Action):bannerState=>{

    const tempBanner = new bannerClass(state);

    switch(action.type) {

        case bannerActionType.ADD_BANNER:
            tempBanner.add(action.payload)
            return tempBanner;
            break;

            case bannerActionType.UPDATE_BANNER:
                tempBanner.update(action.payload)
                return tempBanner;
                break;

            case bannerActionType.DELETE_BANNER:
                tempBanner.delete(action.payload)
                return tempBanner;
                break;
                case (bannerActionType.ADMIN_BANNERS || bannerActionType.USER_BANNERS):
                    tempBanner.loadData(action.payload)
                    return tempBanner;
                    break;

            case bannerActionType.BANNER:
            tempBanner.loadBanner(action.payload)
            return tempBanner;
            break;
           

           

      
        default:
            return state;
    }
}
export default bannerReducer;