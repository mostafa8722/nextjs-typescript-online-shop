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
    const {name,formik,style,items,id,handleChange,value,label} =props



    return (
        <TextField
            SelectProps={{
                classes: { },
               
                    }}
            variant="standard"
            InputProps={{
                style: style,
                disableUnderline: true,
            }}
            InputLabelProps={{shrink: false}}
             select
            id={id}
            name={name}
            value={value}
        
        >
             <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
  >
  
  
  </RadioGroup>
            <MenuItem disabled value="0">{label}</MenuItem>
            <MenuItem value={10}>
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            </MenuItem>
    <MenuItem value={20}>
    <FormControlLabel value="female2" control={<Radio />} label="Female2" />
    </MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
        </TextField>

    );
}





export  default  CustomSelectInput;

