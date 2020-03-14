import { all, put, call, takeLatest, takeEvery } from 'redux-saga/effects';

import { history } from '../../index';
import * as api from '../api/currentUser';
import * as userActions from '../actions/currentUser';
import userTypes from '../types/currentUser';

function* signUpAsync(action) {
	try {
		const response = yield call(api.signUpInAPI, action.userCreationData);
		localStorage.setItem('token', response.data.user.token);
		yield put(userActions.signUpDone(response.data.user));
	} catch (error) {
		yield put(userActions.signUpError(error));
	}
}

function* loginAsync(action) {
	try {
		const response = yield call(api.loginInApi, action.userLoginData);
		localStorage.setItem('token', response.data.user.token);
		yield put(userActions.loginDone(response.data.user));
	} catch (error) {
		yield put(userActions.loginError(error));
	}
}

function* updateUserAsync(action) {
	try {
		const response = yield call(api.updateUserInAPI, action.userUpdateData);
		localStorage.setItem('token', response.data.user.token);
		yield put(userActions.updateUserDone(response.data.user));
		yield history.push('/');
	} catch (error) {
		yield put(userActions.updateUserError(error));
	}
}

export default function* watchCurrentUserSaga() {
	yield all([
		takeLatest(userTypes.SIGN_UP_REQUEST, signUpAsync),
		takeLatest(userTypes.LOGIN_REQUEST, loginAsync),
		takeLatest(userTypes.UPDATE_USER_REQUEST, updateUserAsync)
	]);
}

/* export const signUp = (userObj) => {
	return async (dispatch) => {
		try {
			dispatch(signUpREQUEST());
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
			dispatch(signInREQUEST());
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
			dispatch(updateUserREQUEST());
			const response = await axiosInstance.put('api/user', JSON.stringify(updatedUserObj));
			localStorage.setItem('token', response.data.user.token);
			dispatch(updateUserDone(response.data.user));
		} catch (error) {
			dispatch(updateUserError(error.response));
		}
	};
};
 */
