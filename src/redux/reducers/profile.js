import profileTypes from '../types/profile';

const initialState = {
	isFetching: false,
	profileData: {},
	error: ''
};

export default function profileReducer(state = initialState, action) {
	switch (action.type) {
		case profileTypes.FETCH_ROFILE_BY_USERNAME_REQUESTED:
			return { ...state, isFetching: true };
		case profileTypes.FETCH_PROFILE_BY_USERNAME_DONE:
			return { ...state, profileData: { ...action.payload }, isFetching: false };
		case profileTypes.FETCH_PROFILE_BY_USERNAME_ERROR:
			return {...state, error: action.payload, isFetching: false }
		case profileTypes.UNLOAD_PROFILE:
			return {...state, profileData: {}};
		default:
			return state;
	}
}
