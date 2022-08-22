import * as React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';

const CustomTextArea = (props:any)=>{
    const {placeholder,style,onChange,value} = props
    return (
        <textarea
      aria-label="minimum height"
     
      onChange={onChange}
      placeholder={placeholder}
      style={style}
      value={value}
    />
    );
}

export default CustomTextArea;
