import { Link } from "react-router-dom";
import { createRef, useContext, useEffect, useState } from 'react';
import Alert from '@mui/material/Alert';
import { useNavigate } from "react-router-dom";
import FormInput from '../../components/form/FormInput'
import CustomButton from '../../components/ui/Button';
import { AuthContext } from '../../features/authentication/Authentication'

const SignUp = () => {
	let emailRef = createRef();
	let passwordRef = createRef();
	let confirmpasswordRef = createRef();
	const [error, setError] = useState('');
	const [message, setMessage] = useState('');
	const [Loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const { signup, currentUser } = useContext(AuthContext);
		 
		//  useEffect(()=>{
		// 	if(currentUser !== null || currentUser !== undefined){
		// 	navigate('/dashboard')
		// 	}
		// },[])

	class customError {
		constructor(public error: string) {
			this.error = error;
			this.showError()
		}
		showError() {
			console.log(error, this.error);
			if (this.error == "Firebase: Error (auth/invalid-email).") {
				setError('Please add valid email')
			}
		}
	}
	const handleSubmit = async (e:React.MouseEvent<HTMLButtonElement>) => {

		setError('')
		e.preventDefault();
		if (emailRef.current.value == undefined || passwordRef.current.value == undefined || confirmpasswordRef.current.value == undefined) {
			return setError("All feilds are required ");
		}
		else if (passwordRef.current.value !== confirmpasswordRef.current.value) {
			return setError("password don't match ")
		}
		try {
			setError('')
			setLoading(true)
			await signup(emailRef.current.value, passwordRef.current.value)
			sessionStorage.setItem(emailValue,emailRef.current.value);
			setMessage('SignUp SuccessFully')
			setTimeout(() => {
				navigate('/dashboard')
			}, 2000);
		} catch (error) {
			// console.log(error.message);
			setError(error.message)
			// throw new customError(error.message)
		}
		console.log("error",error.length ==0 , message);
		setLoading(false)
	}
	

	return (
		<>
			<div className='main_container_form'>
				<div className='inner_container_form'>
					{error && (<Alert severity="error">{error}</Alert>)}
					{message ? (<Alert severity="success">{message}</Alert>):""}
					<h1 className='form_heading'>SignUp  </h1>
					<FormInput placeholder="Email" ref={emailRef} onChange={(e: React.ChangeEvent<HTMLInputElement>) => emailRef.current.value = e.target.value
					} />
					<FormInput placeholder="Password" ref={passwordRef} onChange={(e: React.ChangeEvent<HTMLInputElement>) => passwordRef.current.value = e.target.value
					} />
					<FormInput placeholder="Confirm Password" ref={confirmpasswordRef} onChange={(e: React.ChangeEvent<HTMLInputElement>) => confirmpasswordRef.current.value = e.target.value
					} />
					<div style={{ textAlign: "center" }}>
						<CustomButton disabled={Loading} label='SignUp' onClick={handleSubmit} />
					</div>
					<div className='link'>
						<Link to="/" color="#fff">
							or SigIn
						</Link>
					</div>
				</div>
			</div>

		</>
	);
};

export default SignUp;