import React, {useEffect, useState} from 'react';
import './App.css';
import Signin from './views/landing/Signin';
import Signup from './views/landing/Signup';
import Otp from './views/landing/Otp';
import {Route, Router, Routes, useNavigate} from 'react-router-dom';
import * as UserRoutes from './routes/Routes';
import Sidebar from './componets/Sidebar';
import ProtectedRoutes from './utils/ProtectedRoutes';
import { useSelector, useDispatch } from 'react-redux';

// import Cd from "./views/customer/CustomerDashboard";

function App() {
	const navigate = useNavigate();
	localStorage.clear('type');
	var user = localStorage.getItem('type');
	console.log(user);
	useEffect(() => {
		if (user) {
			navigate('/home');
		} else {
			navigate('');
		}
	}, [user]);
	console.log(useSelector((state) => state.UserReducer.user));
	return (
		<div className='appContainer'>
			<div className='sidebar'>
				<Sidebar type={user} />
			</div>
			<div className='container' style={{width: '95%'}}>
				<Routes>
					<Route path='/' element={<Signin />}></Route>
					<Route path='/signup' element={<Signup />}></Route>
					<Route path='/otp' element={<Otp />}></Route>
					{/* <Route path='/cd'element={<Cd/>}></Route> */}
					<Route element={<ProtectedRoutes isSignedIn={user} />}>{user == 'Customer' ? UserRoutes.customerRoutes.map((item) => <Route key={item.id} path={item.path} element={item.element}></Route>) : user == 'Admin' ? UserRoutes.adminRoutes.map((item) => <Route key={item.id} path={item.path} element={item.element}></Route>) : user == 'Staff' ? UserRoutes.staffRoutes.map((item) => <Route key={item.id} path={item.path} element={item.element}></Route>) : <Route />}</Route>
				</Routes>
			</div>
		</div>
	);
}

export default App;
