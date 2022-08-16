import * as React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';

const CustomTextArea = (props:any)=>{
    const {placeholder,style} = props
    return (
        <TextareaAutosize
      aria-label="minimum height"
      minRows={3}
      placeholder={placeholder}
      style={style}
    />
    );
}

export default CustomTextArea;
