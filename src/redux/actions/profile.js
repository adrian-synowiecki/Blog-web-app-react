import profileTypes from '../types/profile'

export const fetchProfileByUsernameRequested = (username) => ({
	type: profileTypes.FETCH_PROFILE_BY_USERNAME_REQUESTED,
	username
})

export const fetchProfileByUsernameDone = (userProfile) => ({
	type: profileTypes.FETCH_PROFILE_BY_USERNAME_DONE,
	payload: userProfile
});

export const fetchProfileByUsernameError = (error) => ({
	type: profileTypes.FETCH_PROFILE_BY_USERNAME_ERROR,
	payload: error
});

export const fetchProfileByUsernameUnmounted = () => ({
	type: profileTypes.FETCH_PROFILE_BY_USERNAME_UNMOUNTED
});

export const unloadProfile = () => ({
	type: profileTypes.UNLOAD_PROFILE
})