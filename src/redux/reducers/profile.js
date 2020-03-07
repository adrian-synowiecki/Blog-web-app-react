import profileTypes from '../types/profile';

const initialState = {
	isFetchingProfileDetails: false,
	profileDetails: {},
	profileDetailsError: ''
};

export default function profileReducer(state = initialState, action) {
	switch (action.type) {
		case profileTypes.FETCH_ROFILE_BY_USERNAME_REQUESTED:
			return { ...state, isFetchingProfileDetails: true };
		case profileTypes.FETCH_PROFILE_BY_USERNAME_DONE:
			return { ...state, profileDetails: { ...action.payload }, isFetchingProfileDetails: false };
		case profileTypes.FETCH_PROFILE_BY_USERNAME_ERROR:
			return {...state, error: action.payload, loading: false }
		case profileTypes.UNLOAD_PROFILE:
			return {...state, profileDetails: {}};
		default:
			return state;
	}
}
