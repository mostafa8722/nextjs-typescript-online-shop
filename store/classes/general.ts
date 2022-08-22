

interface generalState {
 
    isLoading: boolean ,
    isLoading2: boolean ,
    isDataSuccess: boolean ,
    isLoadingPage: boolean ,
    showAlert :boolean,
    alertMessage: string,
    alertType:string,
}  
class generalClass implements  generalState{

  
    isLoading : boolean | false ;
    isLoading2 : boolean | false ;
    isDataSuccess : boolean | false ;
    isLoadingPage : boolean | false ;
    showAlert : boolean | false ;
    alertMessage : string | "" ;
    alertType : string | "success" ;

    constructor(state : generalState){
        
        this.isLoading = state.isLoading ;
        this.isLoading2 = state.isLoading2 ;
        this.isDataSuccess = state.isDataSuccess ;
        this.isLoadingPage = state.isLoadingPage ;
        this.showAlert=  state.showAlert;
        this.alertMessage=  state.alertMessage;
        this.alertType=  state.alertType;
    }

   
    loading(loading : boolean){
        this.isLoading = loading;
  
    }
    loading2(loading : boolean){
        this.isLoading2 = loading;
  
    }

    loadingPage(loading : boolean){
        this.isLoadingPage = loading;
  
    }
    sendData(loading : boolean){
        this.isDataSuccess = loading;
  
    }
    showMessage(data : {showAlert:boolean,alertMessage:string,alertType:string}){
        this.showAlert = data.showAlert;
        this.alertMessage = data.alertMessage;
        this.alertType = data.alertType;
  
    }
}

export default generalClass;