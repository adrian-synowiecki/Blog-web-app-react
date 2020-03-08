import { all, put, call, takeLatest, takeEvery } from 'redux-saga/effects';

import { history } from '../../index';
import * as api from '../api/user';
import * as userActions from '../actions/user';
import userTypes from '../types/user';

function* signUp(action) {
	console.log(action.user);
	try {
		const response = yield call(api.signUpInAPI, action.user);
		localStorage.setItem('token', response.data.user.token);
		yield put(userActions.signUpDone(response.data.user));
	} catch (error) {
		yield put(userActions.signUpError(error.response));
		console.log(error);
	}
}

function* signIn(action) {
	try {
		const response = yield call(api.signIninAPI, action.user);
		localStorage.setItem('token', response.data.user.token);
		yield put(userActions.signInDone(response.data.user));
	} catch (error) {
		yield put(userActions.signInError(error.response));
		console.log(error);
	}
}

function* updateUser(action) {
	try {
		const response = yield call(api.updateUserInAPI, action.updatedUser);
		localStorage.setItem('token', response.data.user.token);
		yield put(userActions.updateUserDone(response.data.user));
		yield history.push('/');
	} catch (error) {
		yield put(userActions.updateUserError(error.response));
		console.log(error);
	}
}

export default function* currentUserWatcher() {
	yield all([
		takeLatest(userTypes.SIGN_UP_REQUESTED, signUp),
		takeLatest(userTypes.SIGN_IN_REQUESTED, signIn),
		takeLatest(userTypes.UPDATE_USER_REQUESTED, updateUser)
	]);
}

/* export const signUp = (userObj) => {
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
