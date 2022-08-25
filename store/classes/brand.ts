import { brandInfo } from "../interfaces/info";
import { brandState } from "../interfaces/state";

class brandClass implements  brandState{

    brand: {} | brandInfo; 
    brands: [] | brandInfo[]; 
   
    constructor(state : brandState){
        this.brand = state.brand;
        this.brands = state.brands ;
     
    }

    add(brand : brandInfo){
      
     this.brand = brand;
    }

    update(brand : brandInfo){
      
        this.brand = brand;
       }
   
       delete(brand : brandInfo){
      
        this.brand = brand;
       }
   

    loadData(brands: brandInfo[]){
      
        this.brands =  brands;
       }
     
     
       loadBrand(brand: brandInfo){
      
        this.brand =  brand;
       }
    
    
}

export default brandClass;