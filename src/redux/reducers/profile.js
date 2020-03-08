import profileTypes from '../types/profile';

const initialState = {
	inProgress: false,
	profileData: {},
	error: ''
};

export default function profileReducer(state = initialState, action) {
	switch (action.type) {
		case profileTypes.FETCH_ROFILE_BY_USERNAME_REQUESTED:
			return { ...state, inProgress: true };
		case profileTypes.FETCH_PROFILE_BY_USERNAME_DONE:
			return { ...state, profileData: { ...action.payload }, inProgress: false };
		case profileTypes.FETCH_PROFILE_BY_USERNAME_ERROR:
			return {...state, error: action.payload, inProgress: false }
		case profileTypes.UNLOAD_PROFILE:
			return {...state, profileData: {}};
		default:
			return state;
	}
}
