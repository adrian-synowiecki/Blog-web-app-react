import { all, put, call, takeLatest, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import * as articleActions from './article.actions';
import * as commonActions from 'redux/common/common.actions';
import * as api from './article.api';
import articleTypes from './article.types';

const getUsername = (state) => state.user.currentUserData.username;

function* fetchArticleAsync(action) {
	const { articleSlug } = action;
	try {
		const response = yield call(api.fetchArticleFromAPI, articleSlug);
		yield put(articleActions.fetchArticleDone(response.data.article));
	} catch (error) {
		yield put(articleActions.fetchArticleError(error));
	}
}

function* createArticleAsync(action) {
	const username = yield select(getUsername);
	const { articleCreationData } = action;
	try {
		yield call(api.createArticleInAPI, articleCreationData);
		yield put(push(`/profile/${username}`));
	} catch (error) {
		yield put(articleActions.createArticleError(error.response.data.errors));
	}
}

function* updateArticleAsync(action) {
	const username = yield select(getUsername);
	const { articleSlug, articleToUpdateData } = action;
	try {
		yield call(api.updateArticleInAPI, articleSlug, articleToUpdateData);
		yield put(push(`/profile/${username}`));
	} catch (error) {
		yield put(articleActions.updateArticleError(error.response.data.errors));
	}
}

function* deleteArticleAsync(action) {
	const username = yield select(getUsername);
	const { articleSlug } = action;
	try {
		yield put(commonActions.toggleArticleSnackbar(true));
		yield put(push(`/profile/${username}`));
		yield put(articleActions.deleteArticleDone());
		yield call(api.deleteArticleInAPI, articleSlug);
	} catch (error) {
		yield put(articleActions.deleteArticleError(error));
	}
}

export default function* watchArticleSaga() {
	yield all([
		yield takeLatest(articleTypes.FETCH_ARTICLE_REQUEST, fetchArticleAsync),
		yield takeLatest(articleTypes.CREATE_ARTICLE_REQUEST, createArticleAsync),
		yield takeLatest(articleTypes.UPDATE_ARTICLE_REQUEST, updateArticleAsync),
		yield takeLatest(articleTypes.DELETE_ARTICLE_REQUEST, deleteArticleAsync)
	]);
}
