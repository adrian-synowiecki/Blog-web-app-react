import { all, put, call, takeLatest } from 'redux-saga/effects';


import { history } from '../../index';
import * as articleActions from './article.actions'
import * as api from './article.api'
import articleTypes from './article.types'



 
function* fetchArticleAsync(action) {
     try {
        const response = yield call(api.fetchArticleFromAPI, action.articleSlug)
        yield put(articleActions.fetchArticleDone(response.data.article))     
    } catch (error) {
        yield put(articleActions.fetchArticleError(error))
    } 
}

function* createArticleAsync(action) {
    try {
        yield call(api.createArticleInAPI, action.articleCreationData)
        yield put(articleActions.createArticleDone()) 
        yield history.push('/');
    } catch (error) {
        yield put(articleActions.createArticleError(error))
        
    }
}

function* updateArticleAsync(action) {
    const {articleSlug, articleCreationData} = action
    try {
        yield call(api.updateArticleInAPI, articleSlug, articleCreationData)
        yield put(articleActions.updateArticleDone())
        yield history.push('/');
    } catch (error) {
        yield put(articleActions.updateArticleError(error))
    }
}

function* deleteArticleAsync(action) {
    try {
        yield call(api.deleteArticleInAPI, action.articleSlug)
        yield put(articleActions.deleteArticleDone())
    } catch (error) {
        yield put(articleActions.deleteArticleError(error))
    }
}

export default function* watchArticleSaga() {
    yield all ([
       yield takeLatest(articleTypes.FETCH_ARTICLE_REQUEST, fetchArticleAsync),
       yield takeLatest(articleTypes.CREATE_ARTICLE_REQUEST, createArticleAsync),
       yield takeLatest(articleTypes.UPDATE_ARTICLE_REQUEST, updateArticleAsync),
       yield takeLatest(articleTypes.DELETE_ARTICLE_REQUEST, deleteArticleAsync) 
    ])
}
