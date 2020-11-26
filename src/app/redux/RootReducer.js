import { combineReducers } from 'redux';
import AuthReducer from './auth/Reducer';

const RootReducer = combineReducers({
	auth: AuthReducer
});

export default RootReducer;
