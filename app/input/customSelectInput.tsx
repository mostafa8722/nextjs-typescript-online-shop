import * as React from "react";
import TextField from "@mui/material/TextField";
;
import MenuItem from "@mui/material/MenuItem";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const CustomSelectInput = (props:any)=> {
    const {name,formik,customStyle,items,id,handleChange,value,label} =props



    return (
        <TextField
            SelectProps={{
                classes: { },
               
                    }}
            variant="standard"
            InputProps={{
                style: customStyle,
                disableUnderline: true,
            }}
            InputLabelProps={{shrink: false}}
             select
            id={id}
            name={name}
            value={value}
            onChange={handleChange}
            error={formik?(formik.touched[name] && Boolean(props.formik.errors[name])):null}
            helperText={formik?(props.formik.touched[name] && props.formik.errors[name]):null}

        >
         
    {
        items.map((item:any)=> <MenuItem key={item.id} value={item.id}><span style={{width:'100%',textAlign:"right"}}>{item.title}</span></MenuItem>)
    }


    
        </TextField>

    );
}





export  default  CustomSelectInput;

