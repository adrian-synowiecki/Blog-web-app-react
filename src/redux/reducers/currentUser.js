import userTypes from '../types/user';

const initialState = {
	isFetching: false,
	currentUserData: {},
	error: ''
};

export default function currentUserReducer(state = initialState, action) {
	switch (action.type) {
		case userTypes.SIGN_UP_REQUESTED:
		case userTypes.SIGN_IN_REQUESTED:
		case userTypes.UPDATE_USER_REQUESTED:
			return { ...state, isFetching: true };
		case userTypes.SIGN_UP_DONE:
		case userTypes.SIGN_IN_DONE:
		case userTypes.UPDATE_USER_DONE:
			return { ...state, currentUserData: { ...action.payload }, isFetching: false };
		case userTypes.SIGN_UP_ERROR:
		case userTypes.SIGN_IN_ERROR:
		case userTypes.UPDATE_USER_ERROR:
			return { ...state, error: action.payload.data.errors, isFetching: false };
		default:
			return state;
	}
}
