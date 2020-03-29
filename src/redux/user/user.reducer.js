import userTypes from './user.types';

const initialState = {
	currentUserData: {},
	error: null,
	isAuth: false
};

export default function currentUserReducer(state = initialState, action) {
	switch (action.type) {
		case userTypes.SIGN_UP_DONE:
		case userTypes.LOGIN_DONE:
		case userTypes.UPDATE_USER_DONE:
			return {
				...state,
				currentUserData: action.payload.currentUserData,
				isAuth: true
			};

		case userTypes.SIGN_UP_ERROR:
		case userTypes.LOGIN_ERROR:
		case userTypes.UPDATE_USER_ERROR:
			return { ...state, error: action.payload.error };

		case userTypes.LOG_OUT:
			return { ...state, currentUser: {}, isAuth: false, error: null };

		case userTypes.CLEAR_USER_ERROR:
			return { ...state, error: null };

		default:
			return state;
	}
}
