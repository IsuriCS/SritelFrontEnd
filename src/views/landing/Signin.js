import React, {useState, useEffect} from 'react';
import '../../css/signin.css';
import Signinimg from '../../assets/images/login.png';
import Logoimg from '../../assets/images/logo.png';

import Toast from '../../componets/Toast';
import * as ToastMessages from '../../componets/ToastMessages';
import { Axios_user } from '../../api/Axios';
import * as API_ENDPOINTS from '../../api/ApiEndpoints';
import {useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {SetUserAction,SetUserId} from '../../actions/UserActions';
import Typewriter from 'typewriter-effect';
import io from 'socket.io-client';
const socket = io.connect('http://localhost:5001');
export default function Signin() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [IsDisabled, setIsDisabled] = useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const showToast = (data) => {
		console.log('hello');
		if (data.type == 'success') {
			ToastMessages.success(data.message);
			ToastMessages.info('Redirecting to OTP verification');
			localStorage.setItem('otpmail', email);
			setIsDisabled(true);
			// setEmail('');
			// setPassword('');
			// // resetFormData();
			// setIsDisabled(true);
			setTimeout(function () {
				navigate('/otp');
			}, 1000);
		} else if (data.type == 'error') {
			ToastMessages.error(data.message);
		} else if (data.type == 'warning') {
			localStorage.setItem('otpmail', email);
			ToastMessages.warning(data.message);
			ToastMessages.info('Redirecting to OTP verification');
			setTimeout(function () {
				navigate('/otp');
			}, 1000);
		}
	};
	const handleSubmit = (e) => {
		try {
			Axios_user.post(API_ENDPOINTS.SIGNIN_URL, {
				email: email,
				password: password,
			}).then((response) => {
				console.log(response.data);
				if (response.data.type == 'success') {

					if (response.data.user) {
						dispatch(SetUserAction(response.data.user));
						dispatch(SetUserId(response.data.id));
						localStorage.setItem("user_id", response.data.user_id)
						navigate('/home');
					} else {
						showToast(response.data);
					}
				} else {
					showToast(response.data);
				}
			});
		} catch (e) {
			console.log('e.error');
		}
	};
	return (
		<div className='signInOuterContainer bg-blue-600'>
			<div>
				
				<img src={Logoimg} className='absolute top-[4%] left-[2%] h-[120px]'></img>
				<div className='Title '>Sritel</div>
				<div className=' absolute top-[20%] left-[6%] text-3xl text-white pt-5'>Login</div>
			</div>
			
			<div className='loginPhone '>
				<img src={Signinimg} className='h-2/4 mt-32 ml-16'></img>
			</div>
			<div className='signInInnerContainer pt-10'>
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
						<div className='submitButton'>Log In</div>
					) : (
						<div className='submitButton' onClick={handleSubmit}>
							Log In
						</div>
					)}

					<div style={{display: 'flex', flexDirection: 'row'}} className='pt-3'>
						<span className='notregisteredtext'>Not registered?</span>
						<span className='signInText' style={{textDecoration: 'underline', color: 'white'}} onClick={() => navigate('/signup')}>
							Sign up
						</span>
					</div>
				</div>
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
