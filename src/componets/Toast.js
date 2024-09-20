import React from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Toast(props) {
	return (
		<>
			<ToastContainer position='bottom-right' autoClose={props.duration} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover={false} theme='dark' />
		</>
	);
}
