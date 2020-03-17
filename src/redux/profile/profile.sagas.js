import { all, put, call, takeLatest, takeEvery, fork } from 'redux-saga/effects';

import * as api from './profile.api'
import * as profileActions from './profile.actions'
import profileTypes from './profile.types'


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
       yield takeLatest(profileTypes.FETCH_PROFILE_BY_USERNAME_REQUEST, fetchProfileByUsernameAsync)
    ])
}

