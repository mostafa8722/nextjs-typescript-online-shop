import React from "react";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useDispatch, useSelector } from "react-redux";
import { alertMessage } from "../store/actions/general";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  
const CustomAlert = ()=>{
  
    const  showAlert = useSelector((state:any) => state.generalReducer.showAlert);
    const  message = useSelector((state:any) => state.generalReducer.alertMessage);
    const  type = useSelector((state:any) => state.generalReducer.type);
    const dispatch = useDispatch();
    const vertical:any = "top";
    const horizontal:any= "left";
    const handleAlert = ()=>{
        let alertmsg = {
            showAlert :false,
            alertMessage: "",
            alertType:"success",
          }
          dispatch(alertMessage(alertmsg))
    }
    return (
        <>
         <Snackbar 
                 
                 anchorOrigin={{ vertical, horizontal }}
                 open={showAlert} autoHideDuration={6000} onClose={handleAlert}>
        <Alert onClose={handleAlert} severity={type} sx={{ minWidth: '300px',display:"flex" }}>
          {message}
        </Alert>
      </Snackbar>
        </>
    );
}
export default CustomAlert;