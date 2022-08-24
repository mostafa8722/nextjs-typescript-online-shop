import { sizeInfo } from "../interfaces/info";
import { sizeState } from "../interfaces/state";

class sizeClass implements  sizeState{

    size: {} | sizeInfo; 
    sizes: [] | sizeInfo[]; 
   
    constructor(state : sizeState){
        this.size = state.size;
        this.sizes = state.sizes ;
     
    }

    add(size : sizeInfo){
      
     this.size = size;
    }

    update(size : sizeInfo){
      
        this.size = size;
       }
   
       delete(size : sizeInfo){
      
        this.size = size;
       }
   

    loadData(sizes: sizeInfo[]){
      
        this.sizes =  sizes;
       }
     
     
       loadsize(size: sizeInfo){
      
        this.size =  size;
       }
    
    
}

export default sizeClass;