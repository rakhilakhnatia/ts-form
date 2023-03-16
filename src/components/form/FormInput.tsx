import React from 'react';
import TextField from '@mui/material/TextField';

type FormInputprops={
	ref:React.ForwardedRef<unknown>
	children?:string
} & React.ComponentProps<'input'>

const FormInput = React.forwardRef((props,ref)  =>{
	console.log(ref);
	return (
		<>
			<div className="outlined-basic-button">
				<TextField fullWidth   {...props} required defaultValue="" id="outlined-basic" ref={ref} label={props.placeholder} />
			</div>
		</>
	);
})

export default FormInput;