import * as React from "react";
import TextField from "@mui/material/TextField";
;
import MenuItem from "@mui/material/MenuItem";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { styled } from "@mui/system";


const SelectBoxEl = styled("div")(()=>`

height:250px;
width:200px;
border-radius:0.2rem;
top:35px;
left:0px;
position:absolute;
background:#ffffff;
display:flex;
flex-direction:column;
box-shadow : 0.1rem 0.2rem 0.2rem 0.1rem rgba(0,0,0,0.1);
`)
const TitleEl = styled("span")(()=>`
 display:flex;
 justify-content:center;
 border-bottom:0.05rem dashed #eeeeee;
 padding:1rem;
 font-size:0.8rem;
`)
const FormControlLabelEl = styled(FormControlLabel)(()=>``)
const LabelEl = styled("span")(()=>`
font-size:0.8rem;
`)

//const RadioEl = styled(Radio)(()=>``)
const CustomFilterSelectInput = (props:any)=> {

    const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event:any) => {
    setSelectedValue(event.target.value);
  };

    const controlProps = (item:any) => ({
        checked: selectedValue === item,
        onChange: handleChange,
        value: item,
        name: 'color-radio-button-demo',
        inputProps: { 'aria-label': item },
      });

      const RadioEl = (name:string)=>
      <Radio 
           
           {...controlProps(name)}
           sx={{
              
               '& .MuiSvgIcon-root': {
                   fontSize: 20,
                 },
             '&.Mui-checked': {
               color: "blue",
             },
           }}
           
           />;

    return (
      <>
      <SelectBoxEl >
        <TitleEl>مرتب سازی بر اساس:</TitleEl>
        <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabelEl value="female" control={RadioEl("a") } label={<LabelEl>گران ترین</LabelEl>} />
        <FormControlLabelEl value="female1" control={RadioEl("b") } label={<LabelEl>ارزان ترین</LabelEl>} />
        <FormControlLabelEl value="female2" control={RadioEl("c") } label={<LabelEl>جدید ترین</LabelEl>} />
        <FormControlLabelEl value="female3" control={RadioEl("d") } label={<LabelEl>قدیمی ترین</LabelEl>} />
        
      </RadioGroup>
    </FormControl>
      </SelectBoxEl>
      </>
    );
}





export  default  CustomFilterSelectInput;

