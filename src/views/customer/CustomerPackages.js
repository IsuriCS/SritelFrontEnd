import React, {useEffect, useState} from 'react';
import {Modal, Box, Typography} from '@mui/material';
import '../../css/customer/customerpackages.css';
import PackageCard from '../../componets/PackageCard';
import {Axios_packages, Axios_bill} from '../../api/Axios';
import * as API_ENDPOINTS from '../../api/ApiEndpoints';
import StripeCard from '../../componets/StripeCard';
import {useSelector} from 'react-redux';
export default function CustomerPackages() {
	const userid = useSelector((state) => state.UserReducer.userid);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [checked, setChecked] = useState('All');
	const [packages, setPackages] = useState('');
	const [allPackages, setAllPackages] = useState('');
	const [amount, setAmount] = useState();
	const [id, setId] = useState();
	const package_names = [
		{
			name: 'All',
		},
		{
			name: 'Data',
		},
		{
			name: 'Voice',
		},
	];
	useEffect(() => {
		Axios_packages.post(API_ENDPOINTS.GET_ALL_PACKAGES).then((response) => {
			console.log(response.data);
			setPackages(response.data);
			setAllPackages(response.data);
		});
	}, []);
	const activate = () => {
		console.log('Hello');
	};
	const handleSubmit = (name) => {
		if (name == 'All') {
			const newArr = allPackages.filter((item) => item);
			setPackages(newArr);
		} else if (name == 'Data') {
			const newArr = allPackages.filter((item) => item.type == 'data');
			setPackages(newArr);
		} else if (name == 'Voice') {
			const newArr = allPackages.filter((item) => item.type == 'voice');
			setPackages(newArr);
		}
		//console.log(name);
		setChecked(name);
	};
	const openModal = (id, price) => {
		setId(id);
		setAmount(price);
		setIsModalVisible(!isModalVisible);
	};
	const addToBill = (id, price) => {
		Axios_packages.post(API_ENDPOINTS.ACTIVATE_PACKAGE, {
			user: userid,
			id: id,
		}).then((response_2) => {
			Axios_bill.post(API_ENDPOINTS.ADD_TO_BILL, {
				user: userid,
				amount: price,
			}).then((response) => {
				console.log(response);
			});
		});
	};
	const style = {
		position: 'absolute',
		top: '50%',
		left: '45vw',
		transform: 'translate(-50%, -50%)',
		width: 400,
		bgcolor: 'background.paper',
		boxShadow: 24,
	};
	return (
		<div
			style={{
				width: '100%',
				height: '100%',
				backgroundColor: 'white',
			}}
		>
			<div className='radioButtonRow'>
				{package_names.map((item) => (
					<div style={checked == item.name ? {backgroundColor: '#5E239D'} : {backgroundColor: '#8a2be2'}} className='RadioButton' onClick={() => handleSubmit(item.name)}>
						{item.name}
					</div>
				))}
			</div>
			<div className='packageContainer'>
				<div
					className='adminPackagesBottomRow'
					style={{
						width: '90%',
						height: '60%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'flex-start',
						overflow: 'hidden',
						tableLayout: 'fixed',
					}}
				>
					<table class='admin-styled-table'>
						<thead>
							<tr>
								<th>Name</th>
								<th>Description</th>
								<th>Data limit</th>
								<th>Voice limit</th>
								<th>SMS limit</th>
								<th>Price</th>
								<th></th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{packages &&
								packages.map((item) => (
									<tr>
										<td>{item.name}</td>
										<td>{item.description}</td>
										<td>{item.data_limit ? item.data_limit : '-'}</td>
										<td>{item.voice_limit ? item.voice_limit : '-'}</td>
										<td>{item.sms_limit ? item.sms_limit : '-'}</td>
										<td>{item.price}</td>
										<td>
											<div onClick={() => openModal(item.package_id, item.price)} className='packageBuyButton'>
												Activate
											</div>
										</td>
										<td>
											<div onClick={() => addToBill(item.package_id, item.price)} className='packageBuyButton' style={{backgroundColor: 'tomato'}}>
												Add to bill
											</div>
										</td>
									</tr>
								))}
						</tbody>
					</table>
				</div>
				<Modal onClose={() => setIsModalVisible(!isModalVisible)} open={isModalVisible} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
					<Box sx={style}>
						<div
							style={{
								backgroundColor: 'white',
								width: '40vw',
								height: '17vw',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
							}}
						>
							<div className='processingtext'>
								Processing <span className='rstext'>RS.{amount}</span>
							</div>
							<StripeCard amount={amount} id={id} />
						</div>
					</Box>
				</Modal>
				{/* {checked == 'All' ? (
					<>
						<PackageCard type='type8' title='Work and learn' data={work_and_learn_packages} fun={activate} />
						<PackageCard type='type28' title='Unlimited' data={unlimited_packages} fun={activate} />
					</>
				) : checked == 'Work and learn' ? (
					<PackageCard type='type2' title='Work and learn' data={work_and_learn_packages} fun={activate} />
				) : checked == 'Unlimited' ? (
					<PackageCard type='type2' title='Unlimited' data={unlimited_packages} fun={activate} />
				) : (
					<></>
				)} */}
			</div>
		</div>
	);
}
