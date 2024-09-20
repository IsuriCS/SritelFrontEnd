import React, {useEffect,useState} from 'react';
import '../../css/admin/admin.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Axios_packages} from '../../api/Axios';
import {Axios_user} from '../../api/Axios';
import * as API_ENDPOINTS from '../../api/ApiEndpoints';
export default function AdminStaff() {
	const [details,setDetails]=useState([]);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [contactNo, setContactno] = useState('');
	
	// const [voiceLimit, setVoiceLimit] = useState('');
	// const [smsLimit, setSmsLimit] = useState('');
	// const [price, setPrice] = useState('');
	const [type, setType] = useState('Staff');
	
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
		Axios_user.post(API_ENDPOINTS.ADD_STAFF_URL, {
		
				name:name,
				email:email,
				contactNo:contactNo,
				type:type
				
			
		});
	};
	const closeModal = () => {
		setIsModalVisible(!setIsModalVisible);
		setName('');
		setContactno('');
	};
	
    useEffect(()=>{
        async function getStaffDetails(){
		    const res = await Axios_user.get(API_ENDPOINTS.GET_STAFF_URL);
			setDetails(res.data);
		};
		getStaffDetails();
	},[])

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
							Staff Register Form
						</div>
						<div className='adminPackagerow'>
							<input placeholder='Name*' className='adminPackageInput' type='text' onChange={(event) => setName(event.target.value)} value={name} required></input>
							{/* <label className='adminPackagePlaceholder'>User name*</label> */}
						</div>
						<div className='adminPackagerow'>
							<input placeholder='Email*' className='adminPackageInput' type='text' onChange={(event) => setEmail(event.target.value)} value={email} required></input>
						</div>
						<div className='adminPackagerow'>
							<input placeholder='Contact no*' className='adminPackageInput' type='text' onChange={(event) => setContactno(event.target.value)} value={contactNo} required></input>
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
							<th>Email</th>
							<th>Contact no</th>
						</tr>
					</thead>
					<tbody>
					    {details.map((d) => (
							<tr key={d.package_id}  >
								<td>{d.name}</td>
								<td>{d.email}</td>
								<td>{d.contact_no}</td>
							</tr>
						))}
						
					</tbody>
				</table>
			</div>
		</div>
	);
}
