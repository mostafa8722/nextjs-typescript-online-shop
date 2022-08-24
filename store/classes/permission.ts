import { permissionInfo } from "../interfaces/info";
import { permissionState } from "../interfaces/state";

class permissionClass implements  permissionState{

    permission: {} | permissionInfo; 
    permissions: [] | permissionInfo[]; 
   
    constructor(state : permissionState){
        this.permission = state.permission;
        this.permissions = state.permissions ;
     
    }

    add(permission : permissionInfo){
      
     this.permission = permission;
    }

    update(permission : permissionInfo){
      
        this.permission = permission;
       }
   
       delete(permission : permissionInfo){
      
        this.permission = permission;
       }
   

    loadData(permissions: permissionInfo[]){
      
        this.permissions =  permissions;
       }
     
     
       loadpermission(permission: permissionInfo){
      
        this.permission =  permission;
       }
    
    
}

export default permissionClass;