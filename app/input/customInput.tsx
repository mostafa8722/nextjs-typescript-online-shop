import * as React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";

const CustomInput = (props:any)=> {
    const {name,type,placeholder,
        formik,customStyle,inputStyle,
        rightIcon,CustomIconButton,
        handleChange,
        maxLength,
        inputRef,
        handleClickShowPassword,showPassword} =props
    return (
        <TextField
            name={name}
            inputRef={inputRef}
            type={type?type:"text"}
            placeholder={placeholder}
            InputLabelProps={{shrink: false}}
            variant="standard"
            InputProps={{
                style: customStyle,
                disableUnderline: true,
                startAdornment: (
                    <InputAdornment position="end">
                        {rightIcon?<Image alt=""   width={25} height={25}  src={rightIcon}     />:null}
                    </InputAdornment>
                ),
                endAdornment: (
                    <InputAdornment position="end">
                        {CustomIconButton  ?
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}

                            edge="end"
                        >
                       <CustomIconButton />
                       
                        </IconButton>
                            : null }
                    </InputAdornment>
                ),
            }}
            inputProps={{
                maxLength:maxLength?maxLength:null,
                style: inputStyle?inputStyle:{  paddingLeft:10,paddingRight:10 ,margin:"0px auto",width:"100%",flexGrow:1}
            }}
            value={formik.values[name]}
            onChange={handleChange}
            error={formik.touched[name] && Boolean(formik.errors[name])}
            helperText={formik.touched[name] && formik.errors[name]}
        />
    );
}





export  default  CustomInput;