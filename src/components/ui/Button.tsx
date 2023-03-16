import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { purple } from '@mui/material/colors';


const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
	color: theme.palette.getContrastText(purple[500]),
	backgroundColor: '#fff'[500],
	type:'submit',
	'&:hover': {
		backgroundColor: '#fff'[700],
	},
}));

export default function CustomButton({label, ...rest}) {
	return (
		<>
			<ColorButton variant="contained" {...rest}>{label}</ColorButton>
		</>
	);
}
