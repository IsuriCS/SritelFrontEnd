import React, {useEffect, useState} from 'react';
import '../../css/staff/staff.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Axios_packages, Axios_user} from '../../api/Axios';
import * as API_ENDPOINTS from '../../api/ApiEndpoints';
export default function AdminPackages() {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [name, setName] = useState('');
	const [contact, setContact] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [users, setUsers] = useState('');

	let index = 0;

	useEffect(() => {
		Axios_user.get(API_ENDPOINTS.GET_CUSTOMERS_URL).then((response) => {
			setUsers(response.data);
			console.log(users)
		});
  	},[users]);

	const handleSubmit = () => {
        Axios_user.post(API_ENDPOINTS.ADD_CUSTOMER_URL, {
            name: name,
            email: email,
            password: password,
            contact_no: contact,
        }).then((response) => {
			console.log(response);
			closeModal();
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
	const closeModal = () => {
		setIsModalVisible(!setIsModalVisible);
		setName('');
		setContact("");
		setEmail("");
		setPassword("");
	};
	return (
        <div
            className="adminPackages"
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
            }}
        >
            <div
                className="adminPackagesTopRow"
                style={{
                    width: "90%",
                    height: "12%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                }}
            >
                <div
                    className="adminPackageAddButton"
                    onClick={() => setIsModalVisible(!isModalVisible)}
                >
                    Add
                </div>
            </div>
            <Modal
                onClose={closeModal}
                open={isModalVisible}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div
                        style={{
                            backgroundColor: "white",
                            width: "40vw",
                            height: "40vw",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            paddingTop: "50px",
                        }}
                    >
                        <div
                            className="addNewPackageTitle"
                            style={{
                                display: "flex",
                                height: "7%",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "20px",
                                paddingBottom: "25px",
                            }}
                        >
                            Customer registration form
                        </div>
                        <div
                            className="adminPackagerow"
                            style={{
                                marginTop: "-20px",
                            }}
                        >
                            <input
                                placeholder="Name*"
                                className="adminPackageInput"
                                type="text"
                                onChange={(event) =>
                                    setName(event.target.value)
                                }
                                value={name}
                                required
                            ></input>
                            {/* <label className='adminPackagePlaceholder'>User name*</label> */}
                        </div>

                        <div className="adminPackagerow">
                            <input
                                placeholder="Email*"
                                className="adminPackageInput"
                                type="email"
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                                value={email}
                                required
                            ></input>
                            {/* <label className='adminPackagePlaceholder'>Price*</label> */}
                        </div>

                        <div className="adminPackagerow">
                            <input
                                placeholder="Contact Number*"
                                className="adminPackageInput"
                                type="text"
                                onChange={(event) =>
                                    setContact(event.target.value)
                                }
                                value={contact}
                                required
                            ></input>
                            {/* <label className='adminPackagePlaceholder'>Price*</label> */}
                        </div>

                        <div className="adminPackagerow">
                            <input
                                placeholder="Password*"
                                className="adminPackageInput"
                                type="password"
                                onChange={(event) =>
                                    setPassword(event.target.value)
                                }
                                value={password}
                                required
                            ></input>
                            {/* <label className='adminPackagePlaceholder'>Price*</label> */}
                        </div>

                        <div
                            className="adminPackageAddButton"
                            style={{
                                height: "10%",
                                width: "40%",
                                color: "white",
                                marginTop: "40px",
                            }}
                            onClick={handleSubmit}
                        >
                            Add
                        </div>
                    </div>
                </Box>
            </Modal>

            {/* ====================================================================== */}
            {/* ====================================================================== */}
            <div
                className="adminPackagesBottomRow"
                style={{
                    width: "90%",
                    height: "60%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    overflow: "hidden",
                    tableLayout: "fixed",
                }}
            >
                <table class="admin-styled-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Contact</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users &&
                            users.map((element) => (
                                <tr class="active-row">
                                    <td>{element.name}</td>
                                    <td>
                                        {element.contact_no
                                            ? element.contact_no
                                            : "----------"}
                                    </td>
                                    <td>{element.email}</td>
                                    <td>
                                        {element.state === "verified"
                                            ? "verified"
                                            : "unverified"}
                                    </td>
                                    <td>
                                        <center>
                                            <button
                                                style={{
                                                    height: "30px",
                                                    width: "120px",
                                                    background: "yellow",
                                                    border: "none",
                                                    borderRadius: "7px",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                View
                                            </button>
                                        </center>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
