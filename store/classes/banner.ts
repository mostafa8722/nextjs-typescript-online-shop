import { bannerInfo } from "../interfaces/info";
import { bannerState } from "../interfaces/state";

class bannerClass implements  bannerState{

    banner: {} | bannerInfo; 
    banners: [] | bannerInfo[]; 
   
    constructor(state : bannerState){
        this.banner = state.banner;
        this.banners = state.banners ;
     
    }

    add(banner : bannerInfo){
      
     this.banner = banner;
    }

    update(banner : bannerInfo){
      
        this.banner = banner;
       }
   
       delete(banner : bannerInfo){
      
        this.banner = banner;
       }
   

    loadData(banners: bannerInfo[]){
      
        this.banners =  banners;
       }
     
     
       loadBanner(banner: bannerInfo){
      
        this.banner =  banner;
       }
    
    
}

export default bannerClass;