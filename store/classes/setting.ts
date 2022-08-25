import { settingInfo } from "../interfaces/info";
import { settingState } from "../interfaces/state";

class settingClass implements  settingState{

    setting: {} | settingInfo; 
    settings: [] | settingInfo[]; 
   
    constructor(state : settingState){
        this.setting = state.setting;
        this.settings = state.settings ;
     
    }

    add(setting : settingInfo){
      
     this.setting = setting;
    }

    update(setting : settingInfo){
      
        this.setting = setting;
       }
   
       delete(setting : settingInfo){
      
        this.setting = setting;
       }
   

    loadData(settings: settingInfo[]){
      
        this.settings =  settings;
       }
     
     
       loadSetting(setting: settingInfo){
      
        this.setting =  setting;
       }
    
    
}

export default settingClass;