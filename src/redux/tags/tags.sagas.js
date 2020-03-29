import { all, put, call, takeLatest } from 'redux-saga/effects';

import * as api from './tags.api'
import * as tagsActions from './tags.actions'
import tagsTypes from './tags.types'


function* fetchTagsByMostPopularAsync() {
try {
    const response = yield call(api.fetchPopularTagsFromAPI)
        yield put(tagsActions.fetchTagsByMostPopularDone(response.data.tags))
    } catch (error) {
        yield put(tagsActions.fetchTagsByMostPopularError(error))
    }
}

export default function* watchTagsSaga() {
    yield all ([
       yield takeLatest(tagsTypes.FETCH_TAGS_BY_MOST_POPULAR_REQUEST, fetchTagsByMostPopularAsync)
    ])
}