import {CustomNextPage} from "../logic/general" 
import CustomLayout from "../containers/CustomLayout"
import HomeContainer from "../components/home/homeContainer";
const HomePage:CustomNextPage = ()=>{
    return (
        <>
          <HomeContainer/>
        </>
    );
}

HomePage.Layout   = CustomLayout; 
export default HomePage;