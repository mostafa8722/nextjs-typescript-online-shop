import {CustomNextPage} from "../logic/general" 
import CustomLayout from "../containers/CustomLayout"

const HomePage:CustomNextPage = ()=>{
    return (
        <>
        <h1 className="flex">
      Hello world!
    </h1>
        </>
    );
}

HomePage.Layout   = CustomLayout; 
export default HomePage;