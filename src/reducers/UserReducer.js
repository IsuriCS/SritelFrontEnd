import {SET_USER, SET_USER_ID} from '../constants/ActionTypes';
const initialState = {
	user: '',
	userid: '',
};
const UserReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER:
			localStorage.setItem('type', action.data);
			return {
				//counter:getFromDatabase(),
				...state,
				user: action.data,
			};
		case SET_USER_ID:
			return {
				//counter:getFromDatabase(),
				...state,
				userid: action.data,
			};
		default:
			return state;
	}
};
export default UserReducer;
