import { categoryInfo } from "../interfaces/info";
import { categoryState } from "../interfaces/state";

class categoryClass implements  categoryState{

    category: {} | categoryInfo; 
   
    categories : [] | categoryInfo[];
    categories2 : [] | categoryInfo[];
    categories3 : [] | categoryInfo[];
    constructor(state : categoryState){
        this.category = state.category;
        this.categories = state.categories ;
        this.categories2 = state.categories2 ;
        this.categories3 = state.categories3 ;
    }

    add(cat : categoryInfo){
      
     this.category = cat;
    }

    loadData(cats: categoryInfo[]){
      
        this.categories =  cats;
       }
       loadData2(cats: categoryInfo[]){
      
        this.categories2 =  cats;
       }
       loadData3(cats: categoryInfo[]){
      
        this.categories3 =  cats;
       }
       loadCategory(cat: categoryInfo){
      
        this.category =  cat;
       }
    
    
}

export default categoryClass;