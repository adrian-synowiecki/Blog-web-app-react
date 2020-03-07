import { all, put, call, takeLatest, takeEvery } from 'redux-saga/effects';

import * as api from '../api/tags'
import * as tagsActions from '../actions/tags'
import tagsTypes from '../types/tags'


function* fetchTagsByMostPopular(action) {
    try {
        const response = yield call(api.fetchPopularTagsFromAPI)
        yield put(tagsActions.fetchTagsByMostPopularDone(response.data.tags))
    } catch (error) {
        console.log(error)
        yield put(tagsActions.fetchTagsByMostPopularError())
    }
}

export default function* tagsWatcher() {
    yield all ([
        takeLatest(tagsTypes.FETCH_TAGS_BY_MOST_POPULAR_REQUESTED, fetchTagsByMostPopular)
    ])
}

/* export const fetchPopularTags = () => {
	return async (dispatch) => {
		try {
			const response = await axiosInstance.get('/api/tags');
			dispatch(fetchPopularTagsDone(response.data.tags));
		} catch (error) {
			console.log(error.response);
		}
	};
};
 */