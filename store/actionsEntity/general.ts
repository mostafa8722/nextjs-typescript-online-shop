import { actionType } from '../actionTypes/actions';


interface loading {
    type: actionType.LOADING;
    payload: boolean;
}

interface loading2 {
    type: actionType.LOADING2;
    payload: boolean;
}
interface isDataSuccess {
    type: actionType.IS_DATA_SUCCESS;
    payload: boolean;
}
interface loadingPage {
    type: actionType.LOADING_PAGE;
    payload: boolean;
}
interface payloadAlert {
    showAlert :boolean,
    alertMessage: string,
    alertType:string,

}

interface alert {
    type: actionType.ALERT_MESSAGE;
    payload: payloadAlert;
}
export type Action =  loading | loading2 | loadingPage | alert  | isDataSuccess  ;