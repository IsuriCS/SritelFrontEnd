import {SET_USER,SET_USER_ID} from '../constants/ActionTypes';
export const SetUserAction = (payload) => {
	return {
		type: SET_USER,
		data: payload,
	};
};
export const SetUserId = (payload) => {
	return {
		type: SET_USER_ID,
		data: payload,
	};
};
