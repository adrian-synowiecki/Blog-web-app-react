import { all, put, call, takeLatest, takeEvery, fork } from 'redux-saga/effects';

import * as api from '../api/profile'
import * as profileActions from '../actions/profile'
import profileTypes from '../types/profile'


function* fetchProfileByUsernameAsync(action) {
     try {
        const response = yield call(api.fetchUserProfileFromAPI, action.username)
        yield put(profileActions.fetchProfileByUsernameDone(response.data.profile))
    } catch (error) {
        yield put(profileActions.fetchProfileByUsernameError(error)) 
    } 
}


export default function* watchProfileSaga() {
    yield all ([
        takeLatest(profileTypes.FETCH_PROFILE_BY_USERNAME_REQUEST, fetchProfileByUsernameAsync)
    ])
}

