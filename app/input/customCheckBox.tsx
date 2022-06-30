import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';

 const  CustomCheckBox =(props:any)=> {
     const {handleChangeProps} = props
    const [state, setState] = React.useState({
        checkbox: false,

    });

    const handleChange2 = (event:any) => {


        handleChangeProps(event)
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };

    const { checkbox} = state;

    return (
        <Box >
            <FormControl  component="fieldset" variant="standard">

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox  checked={checkbox} onChange={handleChange2} name="checkbox" />
                        }
                        label={props.label}
                    />
                </FormGroup>

            </FormControl>

        </Box>
    );
}
export default CustomCheckBox;