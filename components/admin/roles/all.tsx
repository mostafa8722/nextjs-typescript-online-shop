import { styled } from "@mui/system";
import SideBar from "../sidebar";
import EnhancedTable from "./table"

import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { adminRoles, deleteRole } from "../../../api/admin/role";
import CustomDeleteDialog from "../../../app/alertDialog/cutstomDeleteDialog";
import { roleActionType } from "../../../store/actionTypes/actions";
import { roleInfo } from "../../../store/interfaces/info";
import CustomAlert from "../../../app/customAlert";



const RolePageEl = styled("section")(()=>`

  display:grid;
  grid-template-columns : 1fr 3fr;
  grid-column-gap: 1rem;
  direction:rtl;
  padding:0.1rem 1rem;
`)
const ContentEl = styled("section")(()=>`
box-shadow : 0.1rem 0.2rem 0.1rem 0.1rem rgba(0,0,0,0.1);

background:#fff;
width:100%;
outline:none;
margin-top:0.75rem;
border-radius:0.4rem;
display:flex;
flex-direction:column;
overflow:hidden;


`)


const RolePage = ()=>{


  const dispatch = useDispatch();
  const  isDataSuccess = useSelector((state:any) => state.generalReducer.isDataSuccess);


   useEffect(()=>{
    adminRoles(dispatch);
  },[isDataSuccess]);
  

  const [openDailog,setOpenDialog] = useState(false);
  const [role,setRole] = useState<roleInfo>();

  const handleRemoveItem = (e:any)=>{
    setRole(e);
    setOpenDialog(true)
    console.log(e)
  }
  const handleConfirmRemove = (e:any)=>{
    setOpenDialog(false);


   // console.log(e)
    console.log(role)
    
   deleteRole(dispatch,role.id);
     
 
  }

  let alertInfo = {
    text :"آیا از حذف این دسته اطمینان دارید؟"
  }
    return (
        <RolePageEl>
              <SideBar />
             <ContentEl>
                <EnhancedTable  handleRemoveItem={(e:any)=>handleRemoveItem(e)} />
             </ContentEl>
            
             <CustomDeleteDialog alertInfo={alertInfo} handleClose={(e:boolean)=>handleConfirmRemove(e)} open={openDailog} />
              <CustomAlert />
        </RolePageEl>
    );
}
export default RolePage;