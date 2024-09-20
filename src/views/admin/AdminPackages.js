import React, {useEffect, useState} from 'react';
import '../../css/admin/admin.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Axios_packages } from '../../api/Axios';
import * as API_ENDPOINTS from '../../api/ApiEndpoints'
export default function AdminPackages() {
	const [details, setDetails] = useState([]);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [dataLimit, setDataLimit] = useState('');
	const [voiceLimit, setVoiceLimit] = useState('');
	const [smsLimit, setSmsLimit] = useState('');
	const [price, setPrice] = useState('');
	const [type, setType] = useState('all');
	const style = {
		position: 'absolute',
		top: '50%',
		left: '45vw',
		transform: 'translate(-50%, -50%)',
		width: 400,
		bgcolor: 'background.paper',
		boxShadow: 24,
	};
	const handleSubmit = () => {

		
        Axios_packages.post(API_ENDPOINTS.ADD_PACKAGE_URL,{
			
                 name:name,
				 description:description,
				 data:dataLimit,
				 voice:voiceLimit,
				 sms:smsLimit,
				 type:type,
				 price:price
			
		})

	};
	const closeModal = () => {
		setIsModalVisible(!setIsModalVisible);

		setName('');
		setPrice('');
		setDataLimit('');
		setDescription('');
		setVoiceLimit('');
		setSmsLimit('');
	};

	useEffect(() => {
		async function getPackageDetails() {
			const res = await Axios_packages.get(API_ENDPOINTS.GET_PACKAGE_URL);
			setDetails(res.data);
		}
		getPackageDetails();
	}, []);

	console.log(details);

	setName('');
	setPrice('');
	setDataLimit('');
	setDescription('');
	setVoiceLimit('');
	setSmsLimit('');

	const setOption = (value) => {
		if (value == 'data') {
			setVoiceLimit('');
			setSmsLimit('');
			setType(value);
		} else if (value == 'voice') {
			setDataLimit('');
			setType(value);
		} else if (value == 'all') {
			setType(value);
		}
	};

	return (
		<div className='adminPackages' style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
			<div
				className='adminPackagesTopRow'
				style={{
					width: '90%',
					height: '12%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'flex-end',
				}}
			>
				<div className='adminPackageAddButton' onClick={() => setIsModalVisible(!isModalVisible)}>
					Add
				</div>
			</div>
			<Modal onClose={closeModal} open={isModalVisible} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
				<Box sx={style}>
					<div
						style={{
							backgroundColor: 'white',
							width: '40vw',
							height: '40vw',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<div className='addNewPackageTitle' style={{display: 'flex', height: '7%', alignItems: 'center', justifyContent: 'center'}}>
							Add new package
						</div>
						<div className='adminPackagerow'>
							<input placeholder='Name*' className='adminPackageInput' type='text' onChange={(event) => setName(event.target.value)} value={name} required></input>
							{/* <label className='adminPackagePlaceholder'>User name*</label> */}
						</div>
						<div className='adminPackagerow'>
							<textarea className='packageDescriptionInput' onChange={(event) => setDescription(event.target.value)} value={description} name='postContent' placeholder='Description*' rows={4} cols={40} />
						</div>
						<div
							className='adminPackagerow'
							style={{
								display: 'flex',
								flexDirection: 'row',
								width: '90%',
								height: '10%',
								marginTop: ' 15%',
								justifyContent: 'space-around',
							}}
						>
							<div className='signUpRadioItem'>
								<input type='radio' autoComplete='off' value='all' name='userRole' checked={type == 'all'} onChange={(event) => setOption(event.target.value)} />
								<label className='signUpRadioOption'>All</label>
							</div>
							<div className='signUpRadioItem'>
								<input type='radio' autoComplete='off' value='data' checked={type == 'data'} name='data' onChange={(event) => setOption(event.target.value)} />
								<label className='signUpRadioOption'>Data</label>
							</div>
							<div className='signUpRadioItem'>
								<input type='radio' autoComplete='off' value='voice' name='userRole' checked={type == 'voice'} onChange={(event) => setOption(event.target.value)} />
								<label className='signUpRadioOption'>Voice</label>
							</div>
						</div>
						<div
							className='adminPackagerow'
							style={{
								display: 'flex',
								flexDirection: 'row',
								width: '90%',
								height: '20%',
								marginBottom: '2%',
							}}
						>
							<div>
								<input
									disabled={type == 'voice'}
									placeholder='Data limit*'
									className='adminPackageInput'
									style={{
										width: '80%',
									}}
									type='text'
									onChange={(event) => setDataLimit(event.target.value)}
									value={dataLimit}
									required
								></input>
								{/* <label className='adminPackagePlaceholder'>Data limit</label> */}
							</div>
							<div>
								<input
									disabled={type == 'data'}
									placeholder='Voice limit'
									style={{
										width: '80%',
									}}
									className='adminPackageInput'
									type='text'
									onChange={(event) => setVoiceLimit(event.target.value)}
									value={voiceLimit}
									required
								></input>
								{/* <label className='adminPackagePlaceholder'>Voice limit</label> */}
							</div>
							<div>
								<input
									disabled={type == 'data'}
									placeholder='SMS limit'
									style={{
										width: '80%',
									}}
									className='adminPackageInput'
									type='text'
									onChange={(event) => setSmsLimit(event.target.value)}
									value={smsLimit}
									required
								></input>
								{/* <label className='adminPackagePlaceholder'>Sms limit</label> */}
							</div>
						</div>
						<div className='adminPackagerow' style={{marginTop: '-8%'}}>
							<input placeholder='Price*' className='adminPackageInput' type='text' onChange={(event) => setPrice(event.target.value)} value={price} required></input>
							{/* <label className='adminPackagePlaceholder'>Price*</label> */}
						</div>
						<div className='adminPackageAddButton' style={{height: '10%', width: '40%', color: 'white'}} onClick={handleSubmit}>
							Add
						</div>
					</div>
				</Box>
			</Modal>
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
						</tr>
					</thead>
					<tbody>
						{details.map((d) => (
							<tr key={d.package_id}>
								<td>{d.name}</td>
								<td>{d.description}</td>
								<td>{d.data_limit === null ? <p>-</p> : <p>{d.data_limit}</p>}</td>
								<td>{d.voice_limit === null ? <p>-</p> : <p>{d.voice_limit}</p>}</td>
								<td>{d.sms_limit === null ? <p>-</p> : <p>{d.sms_limit}</p>}</td>
								<td>{d.price}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
