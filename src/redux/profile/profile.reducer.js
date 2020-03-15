import profileTypes from './profile.types'

const initialState = {
	inProgress: false,
	profileData: {},
	error: null
};

export default function profileReducer(state = initialState, action) {
	switch (action.type) {
		case profileTypes.FETCH_PROFILE_BY_USERNAME_REQUEST:
			return { ...state, inProgress: true };
		case profileTypes.FETCH_PROFILE_BY_USERNAME_DONE:
			return { ...state, profileData: { ...action.payload.profileData }, inProgress: false };
		case profileTypes.FETCH_PROFILE_BY_USERNAME_ERROR:
			return {...state, error: action.payload.error, inProgress: false }
		case profileTypes.UNLOAD_PROFILE:
			return {...state, profileData: {}};
		default:
			return state;
	}
}
