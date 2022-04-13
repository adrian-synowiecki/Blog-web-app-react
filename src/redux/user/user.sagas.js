import { all, put, call, takeLatest, } from 'redux-saga/effects';
import { push, replace } from 'connected-react-router';

import * as api from './user.api';
import * as userActions from './user.actions';
import userTypes from './user.types';

// const getUsername = (state) => state.user.currentUserData.username;

function* signUpAsync(action) {
	const { userCreationData } = action;
	try {
		const response = yield call(api.signUpInAPI, userCreationData);
		localStorage.setItem('token', response.data.user.token);
		yield put(userActions.signUpDone(response.data.user));
		yield put(push('/'));
	} catch (error) {
		console.log(error.response);
		yield put(userActions.signUpError(error.response.data.errors));
	}
}

function* loginAsync(action) {
	const { userLoginData, from: { pathname } } = action;
	try {
		const response = yield call(api.loginInApi, userLoginData);
		localStorage.setItem('token', response.data.user.token);
		yield put(userActions.loginDone(response.data.user));
		yield put(replace(pathname));
	} catch (error) {
		yield put(userActions.loginError(error.response.data.errors));
	}
}

function* updateUserAsync(action) {
	// const username = yield select(getUsername);
	const { userUpdateData } = action;
	try {
		const response = yield call(api.updateUserInAPI, userUpdateData);
		localStorage.setItem('token', response.data.user.token);
		yield put(userActions.updateUserDone(response.data.user));
		// yield put(push(`/profile/${username}`));
	} catch (error) {
		yield put(userActions.updateUserError(error.response.data.errors));
	}
}

export default function* watchCurrentUserSaga() {
	yield all([
		takeLatest(userTypes.SIGN_UP_REQUEST, signUpAsync),
		takeLatest(userTypes.LOGIN_REQUEST, loginAsync),
		takeLatest(userTypes.UPDATE_USER_REQUEST, updateUserAsync)
	]);
}
