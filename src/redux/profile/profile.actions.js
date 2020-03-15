import profileTypes from './profile.types'

export const fetchProfileByUsernameRequest = (username) => ({
	type: profileTypes.FETCH_PROFILE_BY_USERNAME_REQUEST,
	username
});

export const fetchProfileByUsernameDone = (profileData) => ({
	type: profileTypes.FETCH_PROFILE_BY_USERNAME_DONE,
	payload: { profileData }
});

export const fetchProfileByUsernameError = (error) => ({
	type: profileTypes.FETCH_PROFILE_BY_USERNAME_ERROR,
	payload: { error }
});

export const unloadProfile = () => ({
	type: profileTypes.UNLOAD_PROFILE
});
