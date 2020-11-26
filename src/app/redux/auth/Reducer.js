import { AUTHENTICATE, LOGOUT, SET_DID_TRY_AL } from './ActionTypes';

const initialState = {
	token: null,
	userId: null,
	didTryAutoLogin: false
};

const AuthReducer = (state = initialState, action) => {
	switch (action.type) {
		case AUTHENTICATE:
			return {
				token: action.payload.token,
				userId: action.payload.userId,
				didTryAutoLogin: true
			};
		case SET_DID_TRY_AL:
			return {
				...state,
				didTryAutoLogin: true
			};
		case LOGOUT:
			return {
				...initialState,
				didTryAutoLogin: true
			};
		default:
			return state;
	}
};

export default AuthReducer;
