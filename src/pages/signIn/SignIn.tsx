import { Link } from "react-router-dom";
import React, { createRef, useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import FormInput from '../../components/form/FormInput'
import CustomButton from '../../components/ui/Button';
import { AuthContext } from '../../features/authentication/Authentication'
import { Alert } from "@mui/material";

const SignIn = () => {
	let emailRef = createRef();
	let passwordRef = createRef();
	const [error, setError] = useState('');
	const [Loading, setLoading] = useState(false);
	const [message, setMessage] = useState('');
	const { login, currentUser } = useContext(AuthContext);
	const navigate = useNavigate();

	// useEffect(() => {

	// 	if (currentUser !== undefined) {
	// 		navigate('/dashboard')
	// 	}
	// }, [])
	// class customError {
	// 	constructor(public error: string) {
	// 		this.error = error;
	// 		this.showError()
	// 	}
	// 	showError() {
	// 		console.log(error, this.error);
	// 		if (this.error == "Firebase: Error (auth/invalid-email).") {
	// 			setError('Please add valid email')
	// 		}
	// 	}
	// }
	const handleSubmit = async (e:React.MouseEvent<HTMLButtonElement>) => {

		setError('')
		e.preventDefault();
		if (emailRef.current.value == undefined || passwordRef.current.value == undefined) {
			return setError("All feilds are required ");
		}
		try {
			setError('')
			setLoading(true)
			await login(emailRef.current.value, passwordRef.current.value)
			
			// sessionStorage.setItem(emailValue,"emailRef.current.value")
			setMessage("Login successfully")
			setTimeout(() => {
				navigate('/dashboard')
			}, 2000);
		} catch (error) {
			setError(error.message)
			// throw new customError(error.message)
		}
		setLoading(false);
	}

	return (
		<>
			<div className='main_container_form'>
				<div className='inner_container_form'>
					{error && (<Alert severity="error">{error}</Alert>)}
					{message ? (<Alert severity="success">{message}</Alert>) : ""}
					<h1 className='form_heading'> SignIn </h1>
					<form method='POST'>
						<FormInput placeholder="Email" ref={emailRef} onChange={(e: React.ChangeEvent<HTMLInputElement>) => emailRef.current.value = e.target.value
						} />
						<FormInput placeholder="Password" ref={passwordRef} onChange={(e: React.ChangeEvent<HTMLInputElement>) => passwordRef.current.value = e.target.value
						} />
						<CustomButton label='SignIn' onClick={handleSubmit} />
					</form>
					<div className='link'>
						<Link to="/signup" color="#fff">
							or SignUp
						</Link>
					</div>
				</div>
			</div>

		</>
	);
};

export default SignIn;