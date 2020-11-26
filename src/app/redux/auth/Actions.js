import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AUTHENTICATE, SET_DID_TRY_AL, LOGOUT } from './ActionTypes';

const saveDataToStorage = (token, userId) => {
	AsyncStorage.setItem(
		'userData',
		JSON.stringify({
			token,
			userId
		})
	);
};

export const setDidTryAL = () => {
	return { type: SET_DID_TRY_AL };
};

export const handleSignOut = () => {
	AsyncStorage.removeItem('userData');
	return { type: LOGOUT };
};

export const authenticate = (userId, token) => {
	return { type: AUTHENTICATE, payload: { userId, token } };
};

export const handleSignUp = (username, password) => {
	const signUpData = {
		email: username,
		password,
		returnSecureToken: true
	};
	return dispatch => {
		return axios
			.post(
				'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDL60poi9oWtRqEQuTVb4nHHmubiCkWqVA',
				signUpData
			)
			.then(response => {
				// response.data is the users
				dispatch(authenticate(response.data.localId, response.data.idToken));
				saveDataToStorage(response.data.localId, response.data.idToken);
			})
			.catch(error => {
				// error.message is the error message
				console.log('error', error);
			});
	};
};
