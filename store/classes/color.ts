import { colorInfo } from "../interfaces/info";
import { colorState } from "../interfaces/state";

class colorClass implements  colorState{

    color: {} | colorInfo; 
    colors: [] | colorInfo[]; 
   
    constructor(state : colorState){
        this.color = state.color;
        this.colors = state.colors ;
     
    }

    add(color : colorInfo){
      
     this.color = color;
    }

    update(color : colorInfo){
      
        this.color = color;
       }
   
       delete(color : colorInfo){
      
        this.color = color;
       }
   

    loadData(colors: colorInfo[]){
      
        this.colors =  colors;
       }
     
     
       loadColor(color: colorInfo){
      
        this.color =  color;
       }
    
    
}

export default colorClass;