import React, {useState} from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import {Axios_payments, Axios_packages} from '../api/Axios';
import * as API_ENDPOINTS from '../api/ApiEndpoints';
import {useSelector} from 'react-redux';
const CARD_OPTIONS = {
	iconStyle: 'solid',
	style: {
		base: {
			iconColor: '#c4f0ff',
			color: '#fff',
			fontWeight: 500,
			fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
			fontSize: '16px',
			fontSmoothing: 'antialiased',
			':-webkit-autofill': {color: '#fce883'},
			'::placeholder': {color: '#87bbfd'},
		},
		invalid: {
			iconColor: '#ffc7ee',
			color: '#ffc7ee',
		},
	},
};
export default function PaymentForm(props) {
	const userid = useSelector((state) => state.UserReducer.userid);
	const amount = props.amount * 100;
	const p_id = props.id;
	console.log(userid)
	const [success, setSuccess] = useState('');
	const stripe = useStripe();
	const elements = useElements();
	const handleSubmit = async (e) => {
		e.preventDefault();
		const {error, paymentMethod} = await stripe.createPaymentMethod({
			type: 'card',
			card: elements.getElement(CardElement),
		});
		if (!error) {
			try {
				const {id} = paymentMethod;
				Axios_payments.post(API_ENDPOINTS.PAYMENT, {
					amount: amount,
					id: id,
				}).then((response) => {
					console.log(response);
					if (response.data == 'success') {
						Axios_packages.post(API_ENDPOINTS.ACTIVATE_PACKAGE, {
							user: userid,
							id: p_id,
						}).then((response_2) => {
							console.log(response_2);
						});
						setSuccess(true);
					}
				});
				//console.log(response)
			} catch (error) {
				console.log('Error', error);
			}
		} else {
			console.log(error.message);
		}
	};

	return (
		<>
			{!success ? (
				<form onSubmit={handleSubmit}>
					<fieldset className='FormGroup'>
						<div className='FormRow'>
							<CardElement options={CARD_OPTIONS} />
						</div>
					</fieldset>
					<button
						style={{
							width: '15%',
							height: '40%',
							backgroundColor: 'dodgerblue',
							outline: '3px solid white',
							color: 'white',
						}}
					>
						Pay
					</button>
				</form>
			) : (
				<div>
					<h2>Payment success</h2>
				</div>
			)}
		</>
	);
}
