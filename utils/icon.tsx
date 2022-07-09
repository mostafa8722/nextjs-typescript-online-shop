
import { FaAngleDown ,FaAngleUp,FaAngleLeft,FaAngleRight} from 'react-icons/fa';

export const icon =(type:string,style?:object)=>{
    if(type=='arrowLeft')
       return   <FaAngleLeft color='#ffffff'/>
       else if(type=='arrowRight')
       return   <FaAngleRight color='#ffffff' />
       else
           return <></>;
}