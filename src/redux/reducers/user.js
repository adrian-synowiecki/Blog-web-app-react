import userTypes from '../types/user';

const initialState = {
	isLoadingUser: false,
	userDetails: {},
	userError: ''
};

export default function userReducer(state = initialState, action) {
	switch (action.type) {
		case userTypes.SIGN_UP_REQUESTED:
		case userTypes.SIGN_IN_REQUESTED:
		case userTypes.UPDATE_USER_REQUESTED:
			return { ...state, isLoadingUser: true };
		case userTypes.SIGN_UP_DONE:
		case userTypes.SIGN_IN_DONE:
		case userTypes.UPDATE_USER_DONE:
			return { ...state, userDetails: { ...action.payload }, isLoadingUser: false };
		case userTypes.SIGN_UP_ERROR:
		case userTypes.SIGN_IN_ERROR:
		case userTypes.UPDATE_USER_ERROR:
			return { ...state, userError: action.payload.data.errors, isLoadingUser: false };
		default:
			return state;
	}
}
