import userTypes from '../types/currentUser';

const initialState = {
	inProgress: false,
	currentUserData: {},
	error: null
};

export default function currentUserReducer(state = initialState, action) {
	switch (action.type) {
		case userTypes.SIGN_UP_REQUEST:
		case userTypes.LOGIN_REQUEST:
		case userTypes.UPDATE_USER_REQUEST:
			return { ...state, inProgress: true };
		case userTypes.SIGN_UP_DONE:
		case userTypes.LOGIN_REQUEST:
		case userTypes.UPDATE_USER_DONE:
			return { ...state, currentUserData: { ...action.payload.currentUserData }, inProgress: false };
		case userTypes.SIGN_UP_ERROR:
		case userTypes.LOGIN_ERROR:
		case userTypes.UPDATE_USER_ERROR:
			return { ...state, error: action.payload.data.error, inProgress: false };
		default:
			return state;
	}
}
