/* import axiosInstance from '../../utils/axios';
const SIGN_UP_REQUESTED = 'SIGN_UP_REQUESTED';
const SIGN_UP_DONE = 'SIGN_UP_DONE';
const SIGN_UP_ERROR = 'SIGN_UP_ERROR';

const SIGN_IN_REQUESTED = 'SIGN_IN_REQUESTED';
const SIGN_IN_DONE = 'SIGN_IN_DONE';
const SIGN_IN_ERROR = 'SIGN_IN_ERROR';

const UPDATE_USER_REQUESTED = 'UPDATE_USER_REQUESTED';
const UPDATE_USER_DONE = 'UPDATE_USER_DONE';
const UPDATE_USER_ERROR = 'UPDATE_USER_ERROR';

const signUpRequested = () => ({
	type: SIGN_UP_REQUESTED
});

const signUpDone = (userObj) => ({
	type: SIGN_UP_DONE,
	payload: userObj
});

const signUpError = (error) => ({
	type: SIGN_UP_ERROR,
	payload: error
});

const signInRequested = () => ({
	type: SIGN_IN_REQUESTED
});

const signInDone = (userObj) => ({
	type: SIGN_IN_DONE,
	payload: userObj
});

const signInError = (error) => ({
	type: SIGN_IN_ERROR,
	payload: error
});

const updateUserRequested = () => ({
	type: UPDATE_USER_REQUESTED
});

const updateUserDone = (updatedUserObj) => ({
	type: UPDATE_USER_DONE,
	payload: updatedUserObj
});

const updateUserError = (error) => ({
	type: UPDATE_USER_ERROR,
	payload: error
});

const initialState = {
	userInfo: null,
	loading: false,
	error: null
};

export default function currentUserReducer(state = initialState, action) {
	switch (action.type) {
		case SIGN_UP_REQUESTED:
		case SIGN_IN_REQUESTED:
		case UPDATE_USER_REQUESTED:
			return { ...state, loading: true };
		case SIGN_UP_DONE:
		case SIGN_IN_DONE:
		case UPDATE_USER_DONE:
			return { ...state, userInfo: { ...action.payload }, loading: false };
		case SIGN_UP_ERROR:
		case SIGN_IN_ERROR:
		case UPDATE_USER_ERROR:
			return { ...state, error: action.payload.data.errors };
		default:
			return state;
	}
}

export const signUp = (userObj) => {
	return async (dispatch) => {
		try {
			dispatch(signUpRequested());
			const response = await axiosInstance.post('api/users', JSON.stringify(userObj));
			localStorage.setItem('token', response.data.user.token);
			dispatch(signUpDone(response.data.user));
		} catch (error) {
			console.log(error.response)
			dispatch(signUpError(error.response));
		}
	};
};

export const signIn = (userObj) => {
	return async (dispatch) => {
		try {
			dispatch(signInRequested());
			const response = await axiosInstance.post('api/users/login', JSON.stringify(userObj));
			localStorage.setItem('token', response.data.user.token);
			dispatch(signInDone(response.data.user));
		} catch (error) {
			dispatch(signInError(error.response));
		}
	};
};
export const updateUser = (updatedUserObj) => {
	return async (dispatch) => {
		try {
			dispatch(updateUserRequested());
			const response = await axiosInstance.put('api/user', JSON.stringify(updatedUserObj));
			localStorage.setItem('token', response.data.user.token);
			dispatch(updateUserDone(response.data.user));
		} catch (error) {
			dispatch(updateUserError(error.response));
		}
	};
};
 */
/* 
		axiosInstance
			.put('api/user', JSON.stringify(updatedUserObj))
			.then((res) => {
				localStorage.setItem('token', res.data.user.token);
				dispatch(updateUserDone(res.data.user));
				
			})
			.catch((error) => {
				console.log(error.response);
			}); */

/* 		axiosInstance
			.post('api/users/login', JSON.stringify(userObj))
			.then((res) => {
				localStorage.setItem('token', res.data.user.token);
				dispatch(signInDone(res.data.user));
			})
			.catch((error) => {
				console.log(error.response);
			}); */

/* export const updateUser = (updatedUserObj, actions) => {
	return (dispatch) => {
		
		axiosInstance
			.put('api/user', JSON.stringify(updatedUserObj))
			.then((res) => {
				localStorage.setItem('token', res.data.user.token);
				dispatch(updateUserDone(res.data.user));
				
			})
			.catch((error) => {
				console.log(error.response);
			});
	};
}; */

/* export const signIn = (userObj) => {
	return (dispatch) => {
		console.log(userObj);
		axiosInstance
			.post('api/users/login', JSON.stringify(userObj))
			.then((res) => {
				localStorage.setItem('token', res.data.user.token);
				dispatch(signInDone(res.data.user));
			})
			.catch((error) => {
				console.log(error.response);
			});
	};
}; */
