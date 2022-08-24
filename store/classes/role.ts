import { roleInfo } from "../interfaces/info";
import { roleState } from "../interfaces/state";

class roleClass implements  roleState{

    role: {} | roleInfo; 
    roles: [] | roleInfo[]; 
   
    constructor(state : roleState){
        this.role = state.role;
        this.roles = state.roles ;
     
    }

    add(role : roleInfo){
      
     this.role = role;
    }

    update(role : roleInfo){
      
        this.role = role;
       }
   
       delete(role : roleInfo){
      
        this.role = role;
       }
   

    loadData(roles: roleInfo[]){
      
        this.roles =  roles;
       }
     
     
       loadrole(role: roleInfo){
      
        this.role =  role;
       }
    
    
}

export default roleClass;