import { productFeatureInfo } from "../interfaces/info";
import { productFeatureState } from "../interfaces/state";



class productFeatureClass implements productFeatureState{
    feature: {} | productFeatureInfo;
    features: [] | productFeatureInfo[];
    constructor(state:productFeatureState){
        this.feature = state.feature;
        this.features = state.features;
    }

    add (feature:productFeatureInfo){
      this.feature = feature;
    }
   
    update (feature:productFeatureInfo){
      this.feature = feature;
    }
    delete (feature:productFeatureInfo){
      this.feature = feature;
    }
    
    loadAdminData(features: productFeatureInfo[]){
       
      this.features =  features;
     }
 
     loadData(features: productFeatureInfo[]){
       
         this.features =  features;
        }
      
        loadAdminFeature(feature: productFeatureInfo){
       
          this.feature =  feature;
         }
         
        loadFeature(feature: productFeatureInfo){
       
         this.feature =  feature;
        }
}
export default productFeatureClass;