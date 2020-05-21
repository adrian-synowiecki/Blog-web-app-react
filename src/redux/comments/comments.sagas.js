import { all, put, call, takeLatest } from 'redux-saga/effects';

import * as api from './comments.api';
import * as commentsActions from './comments.actions';
import commentsTypes from './comments.types';

function* fetchCommentsFromArticleAsync(action) {
	try {
		const response = yield call(api.fetchCommentsFromArticleFromAPI, action.articleSlug);
		yield put(commentsActions.fetchCommentsFromArticleDone(response.data.comments));
	} catch (error) {
		yield put(commentsActions.fetchCommentsFromArticleError(error));
	}
}

function* addCommentToArticleAsync(action) {
	const { commentCreationData, articleSlug } = action;
	try {
		const response = yield call(api.addCommentToArticleInAPI, commentCreationData, articleSlug);
		yield put(commentsActions.addCommentToArticleDone(response.data.comment));
	} catch (error) {
		yield put(commentsActions.addCommentToArticleError(error));
	}
}

function* removeCommentFromArticleAsync(action) {
	const { articleSlug, commentToDeleteId } = action;
	try {
		yield put(commentsActions.removeCommentFromArticleDone(commentToDeleteId));
		yield call(api.removeCommentFromArticle, articleSlug, commentToDeleteId);
	} catch (error) {
		yield put(commentsActions.removeCommentFromArticleError(error));
	}
}

export default function* watchCommentsSaga() {
	yield all([
		yield takeLatest(commentsTypes.FETCH_COMMENTS_FROM_ARTICLE_REQUEST, fetchCommentsFromArticleAsync),
		yield takeLatest(commentsTypes.ADD_COMMENT_TO_ARTICLE_REQUEST, addCommentToArticleAsync),
		yield takeLatest(commentsTypes.REMOVE_COMMENT_FROM_ARTICLE_REQUEST, removeCommentFromArticleAsync)
	]);
}
