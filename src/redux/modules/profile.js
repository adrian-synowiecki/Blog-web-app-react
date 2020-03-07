/* import axiosInstance from '../../utils/axios';

const FETCH_USER_PROFILE_REQUESTED = 'FETCH_USER_PROFILE_REQUESTED';
const FETCH_USER_PROFILE_DONE = 'FETCH_USER_PROFILE_DONE';
const FETCH_USER_PROFILE_ERROR = 'FETCH_USER_PROFILE_ERROR';

const FETCH_USER_PROFILE_UNMOUNTED = 'FETCH_USER_PROFILE';


export const fetchUserProfileRequested = (username) => ({
	type: FETCH_USER_PROFILE_DONE,
	username
})

export const fetchUserProfileDone = (userProfile) => ({
	type: FETCH_USER_PROFILE,
	payload: userProfile
});

export const fetchUserProfileDone = (error) => ({
	type: FETCH_USER_PROFILE,
	payload: {
		error
	}
});



export const fetchUserProfileUnmounted = () => ({
	type: FETCH_USER_PROFILE_UNMOUNTED
});

export default function profileReducer(state = {}, action) {
	switch (action.type) {
		case FETCH_USER_PROFILE:
			return { ...action.payload };
		case FETCH_USER_PROFILE_UNMOUNTED:
			return {};
		default:
			return state;
	}
}

export const fetchUserProfile = (username) => {
	return async (dispatch) => {
		try {
			const response = await axiosInstance.get(`api/profiles/${username}`);
			dispatch(fetchUserProfileDone(response.data.profile));
		} catch (error) {
			console.log(error.response);
		}
	};
};
 */