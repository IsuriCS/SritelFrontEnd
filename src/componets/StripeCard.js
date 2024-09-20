import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';
export default function StripeCard(props) {
	const PUBLIC_KEY = 'pk_test_51O934qEl5EhYFgAyJUXSu89GvvIYuTtn5zvUuBNNzpvh2nxy5lVCL3iXaxddq2Z5PhNG4Mxs7QLYYv13a8AAgIXS00R2MzQCJh';
	const STRIPEPROMISE = loadStripe(PUBLIC_KEY);
	return (
		<Elements stripe={STRIPEPROMISE}>
			<PaymentForm amount={props.amount} id={props.id}/>
		</Elements>
	);
}
