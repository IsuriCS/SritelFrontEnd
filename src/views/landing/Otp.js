import React, {useEffect, useState} from 'react';
import '../../css/otp.css';
import Toast from '../../componets/Toast';
import * as ToastMessages from '../../componets/ToastMessages';
import {Axios_user} from '../../api/Axios';
import * as API_ENDPOINTS from '../../api/ApiEndpoints';
import {useNavigate} from 'react-router-dom';
import OtpInput from 'react-otp-input';
export default function Otp() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [otp, setOtp] = useState('');
	const navigate = useNavigate();
	useEffect(() => {
		var otpmail = localStorage.getItem('otpmail');
		if (!otpmail) {
			navigate('/');
		}
	});
	const handleSubmit = (e) => {
		try {
			Axios_user.post(API_ENDPOINTS.VERIFY_USER_URL, {
				email: localStorage.getItem('otpmail'),
				otp: otp,
			}).then((response) => {
				if (response.data.message == 'Account verified successfully') {
					setOtp('');
					ToastMessages.success('Account verified successfully');
					ToastMessages.info('Redirecting to homepage');
					setTimeout(function () {
						localStorage.removeItem('otpmail');
						navigate('/');
					}, 3000);
				} else if (response.data.message == 'Invalid OTP') {
					ToastMessages.error('Invalid OTP');
					setOtp('');
				}
			});
		} catch (e) {
			console.log('e.error');
		}

		//e.preventDefault();
		//console.log(e.target[0].value);
	};
	return (
		<div className='otpContainer'>
			<div className='innerContainer'>
				<div className='titleText'>
					<span className='otptextBefore'>Enter the OTP sent to</span>
					<span className='otpemail'>{localStorage.getItem('otpmail')}</span>
				</div>
				<div className='signinrow' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
					<OtpInput value={otp} onChange={setOtp} numInputs={6} renderSeparator={<span style={{marginRight: '3%'}}></span>} renderInput={(props) => <input {...props} />} inputStyle={{width: '10.5%', height: '48px', outline: '2px solid #7EB693', borderRadius: '5px', border: '0', fontSize: '20px', fontFamily: 'poppins-regular'}} />
				</div>
				<div className='submitButton' onClick={handleSubmit}>
					Verify
				</div>
			</div>
			<Toast duration={3000} />
		</div>
	);
}
