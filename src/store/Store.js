import {MiddlewareArray, configureStore} from '@reduxjs/toolkit';
import {combineReducers} from '@reduxjs/toolkit';
import UserReducer from '../reducers/UserReducer';
const rootReducer = combineReducers({
	UserReducer,
});
const Store = configureStore({
	reducer: rootReducer,
	middleware: new MiddlewareArray(),
});

export default Store;
