import React, {useState} from 'react';
import '../../css/signup.css';
import Signinimg from '../../assets/images/signup.png';
import Logoimg from '../../assets/images/logo.png';

import Toast from '../../componets/Toast';
import * as ToastMessages from '../../componets/ToastMessages';
import {Axios_user} from '../../api/Axios';
import * as API_ENDPOINTS from '../../api/ApiEndpoints';
import {useNavigate} from 'react-router-dom';
export default function Signin() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmpassword, setConfirmPassword] = useState('');
	const [IsDisabled, setIsDisabled] = useState(false);
	const navigate = useNavigate();
	const showToast = (data) => {
		if (data.type == 'success') {
			ToastMessages.success(data.message);
			ToastMessages.info('Redirecting to OTP verification');
			localStorage.setItem('otpmail', email);
			setIsDisabled(true);
			// resetFormData();
			// setIsDisabled(true);
			setTimeout(function () {
				navigate('/otp');
			}, 6000);
		} else if (data.type == 'error') {
			ToastMessages.error(data.message);
		}
	};
	const handleSubmit = (e) => {
		localStorage.setItem('otpemail', email);
		//e.preventDefault();
		var isClean = true;
		if (email == '') {
			isClean = false;
			ToastMessages.error('Please fill required fields');
		}
		if (email.length > 0) {
			if (password == '' && confirmpassword == '') {
				isClean = false;
				ToastMessages.warning('Please enter password');
			}
			if (password != confirmpassword) {
				isClean = false;
				ToastMessages.warning('Please check password');
			}
			if (!checkMail()) {
				ToastMessages.error('Please enter valid email');
			}
			const passwordStrength = checkPasswordStrength();
			if (!passwordStrength) {
				isClean = false;
			}
		}

		if (isClean) {
			Axios_user.post(API_ENDPOINTS.SIGNUP_URL, {
				email: email,
				password: password,
			}).then((response) => {
				//console.log(response.data.message);
				showToast(response.data);
			});
		}
	};
	const checkPasswordStrength = () => {
		var strength = 0;
		if (password.match(/[a-z]+/)) {
			strength += 1;
		}
		if (password.match(/[A-Z]+/)) {
			strength += 1;
		}
		if (password.match(/[0-9]+/)) {
			strength += 1;
		}
		if (password.match(/[$@#&!]+/)) {
			strength += 1;
		}
		if (password.length < 6 && strength < 4) {
			ToastMessages.error('Password should be atleast 6 characters long');
			ToastMessages.error('Password should contain atleast one lowercase and uppercase letter, a digit , a special character');
			return false;
		} else if (password.length < 6) {
			ToastMessages.error('Password should be atleast 6 characters long');
			return false;
		} else if (strength < 4) {
			ToastMessages.error('Password should contain atleast one lowercase and uppercase letter, a digit , a special character');
			return false;
		} else {
			return true;
		}
	};
	const checkMail = () => {
		var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		if (email.match(mailformat)) {
			return true;
		} else {
			return false;
		}
	};
	return (
		<div className='signInOuterContainer bg-blue-600'>
			<div>
				
				<img src={Logoimg} className='absolute top-[4%] left-[2%] h-[120px]'></img>
				<div className='Title '>Sritel</div>
				<div className=' absolute top-[20%] left-[6%] text-3xl text-white pt-5'>Sign Up</div>
			</div>
			
			<div className='loginPhone '>
				<img src={Signinimg} className='h-2/4 mt-32 ml-16'></img>
			</div>
			<div className='outerContainer'>
				
				<div className='innerContainer mt-[170px] ml-[68px]'>
					<div className='formFields'>
						<div className='signUpRow'>
							<input className='signUpInput' type='text' onChange={(event) => setEmail(event.target.value)} value={email} required></input>
							<label className='placeholder'>User name*</label>
						</div>
						<div className='signUpRow'>
							<input className='signUpInput' type='password' onChange={(event) => setPassword(event.target.value)} value={password} required></input>
							<label className='placeholder'>Password*</label>
						</div>
						<div className='signUpRow'>
							<input className='signUpInput' type='password' onChange={(event) => setConfirmPassword(event.target.value)} value={confirmpassword} required></input>
							<label className='placeholder'>Confirm password*</label>
						</div>
						{IsDisabled ? (
							<div className='submitButton'>Sign up</div>
						) : (
							<div className='submitButton' onClick={handleSubmit}>
								Sign up
							</div>
						)}
						<div style={{ display: 'flex', flexDirection: 'row' }} className='pt-3'>
							<span>Already registered?</span>
							<span className='signInText ' style={{ textDecoration: 'underline', color: 'dodgerblue' }} onClick={() => navigate('/')}>
								Sign in
							</span>
						</div>
					</div>
				</div>
				<Toast duration={3000} />
			</div>
			{/* <div className='aboutus' style={{width: '40%'}}>
				<div className='Title' style={{width: '80%'}}>
					About us
				</div>
				<div className='content'>
					<Typewriter
						onInit={(typewriter) => {
							typewriter.typeString('GeeksForGeeks').pauseFor(1000).deleteAll().typeString('Welcomes You').start();
						}}
					/>
				</div>
			</div> */}

			{/* <div className='signInInnerContainer'>
				<div className='formFields'>
					<div className='signinrow'>
						<input className='signInInput' type='text' onChange={(event) => setEmail(event.target.value)} value={email} required></input>
						<label className='signInPlaceholder'>User name*</label>
					</div>
					<div className='signinrow'>
						<input className='signInInput' type='password' onChange={(event) => setPassword(event.target.value)} value={password} required></input>
						<label className='signInPlaceholder'>Password*</label>
					</div>
					{IsDisabled ? (
						<div className='submitButton'>Sign In</div>
					) : (
						<div className='submitButton' onClick={handleSubmit}>
							Sign In
						</div>
					)}

					<div style={{display: 'flex', flexDirection: 'row'}}>
						<span>Not registered?</span>
						<span className='signInText' style={{textDecoration: 'underline', color: 'dodgerblue'}} onClick={() => navigate('/signup')}>
							Sign up
						</span>
					</div>
				</div>
			</div> */}
			<Toast duration={3000} />
		</div>
		
	);
}
