import Axios from 'axios';
export const Axios_user =  Axios.create({
	baseURL: 'http://localhost:5001',
});
export const Axios_packages = Axios.create({
	baseURL: 'http://localhost:5002',
});
export const Axios_bill = Axios.create({
	baseURL: 'http://localhost:5003',
});
export const Axios_payments = Axios.create({
	baseURL: 'http://localhost:5004',
});
export const Axios_notifications = Axios.create({
	baseURL: 'http://localhost:5005',
});
