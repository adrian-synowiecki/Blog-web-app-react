import userTypes from './currentUser.types';

const initialState = {
	currentUserData: {},
	error: null,
	isAuth: false
};

export default function currentUserReducer(state = initialState, action) {
	switch (action.type) {
		case userTypes.SIGN_UP_REQUEST:
		case userTypes.LOGIN_REQUEST:
		case userTypes.UPDATE_USER_REQUEST:
			return { ...state, inProgress: true };

		case userTypes.SIGN_UP_DONE:
		case userTypes.LOGIN_DONE:
		case userTypes.UPDATE_USER_DONE:
			return {
				...state,
				currentUserData: { ...action.payload.currentUserData },
				isAuth: true,	
				error: null
			};

		case userTypes.SIGN_UP_ERROR:
		case userTypes.LOGIN_ERROR:
		case userTypes.UPDATE_USER_ERROR:
			return { ...state, error: action.payload.error, inProgress: false };

		case userTypes.LOG_OUT:
			return { ...state, currentUser: {}, isAuth: false };

		case userTypes.CLEAR_ERROR:
			return { ...state, error: null };

		default:
			return state;
	}
}
