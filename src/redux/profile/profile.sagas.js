import { all, put, call, takeLatest } from 'redux-saga/effects';

import * as api from './profile.api';
import * as profileActions from './profile.actions';
import profileTypes from './profile.types';

function* fetchProfileByUsernameAsync(action) {
	console.log('YES');
	console.log(action.username)
	try {
		console.log('YES');
		const response = yield call(api.fetchUserProfileFromAPI, action.username);
		yield put(profileActions.fetchProfileByUsernameDone(response.data.profile));
	} catch (error) {
		yield put(profileActions.fetchProfileByUsernameError(error));
	}
}

export default function* watchProfileSaga() {
	yield all([ takeLatest(profileTypes.FETCH_PROFILE_BY_USERNAME_REQUEST, fetchProfileByUsernameAsync) ]);
}
