import { all, put, call, takeLatest, takeEvery, fork } from 'redux-saga/effects';

import * as api from '../api/profile'
import * as profileActions from '../actions/profile'
import profileTypes from '../types/profile'


function* fetchProfileByUsername(action) {
    console.log('hhghghhghghhghghhgh')
     try {
        const response = yield call(api.fetchUserProfileFromAPI, action.username)
        yield put(profileActions.fetchProfileByUsernameDone(response.data.profile))
    } catch (error) {
      /*   yield put(profileActions.fetchProfileByUsernameError(error.response)) */
        console.log(error)
    } 
}


export default function* profileWatcher() {
    yield all ([
        takeLatest(profileTypes.FETCH_PROFILE_BY_USERNAME_REQUESTED, fetchProfileByUsername)
    ])
}

/* export const fetchUserProfile = (username) => {
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