import { all, put, call, takeLatest, takeEvery } from 'redux-saga/effects';

import { history } from '../../index';
import * as api from './currentUser.api'
import * as userActions from './currentUser.actions'
import userTypes from './currentUser.types'

function* signUpAsync(action) {
	try {
		const response = yield call(api.signUpInAPI, action.userCreationData);
		localStorage.setItem('token', response.data.user.token);
		yield put(userActions.signUpDone(response.data.user));
	} catch (error) {	
		console.log(error.response)
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