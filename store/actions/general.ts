import { actionType } from "../actionTypes/actions"

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

interface alertMsg {
    type: actionType.ALERT_MESSAGE;
    payload: payloadAlert;
}

interface payloadAlert {
    showAlert :boolean,
    alertMessage: string,
    alertType:string,

}
export const loading = (payload: boolean): loading=> {
  
    return { type: actionType.LOADING , payload }
  }
  export const loading2 = (payload: boolean): loading2=> {
  
    return { type: actionType.LOADING2 , payload }
  }
  export const isDataSuccess = (payload: boolean): isDataSuccess=> {
  
    return { type: actionType.IS_DATA_SUCCESS , payload }
  }

  export const loadingPage = (payload: boolean): loadingPage=> {
  
    return { type: actionType.LOADING_PAGE , payload }
  }
  
  export const alertMessage = (payload: payloadAlert): alertMsg=> {
  
    return { type: actionType.ALERT_MESSAGE , payload }
  }