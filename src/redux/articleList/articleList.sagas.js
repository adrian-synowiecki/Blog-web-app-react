import { all, put, call, takeLatest } from 'redux-saga/effects';

import articlesTypes from './articleList.types';
import * as articlesActions from './articleList.actions';
import * as api from './articleList.api';

function* fetchArticlesByMostRecentAsync(action) {
	try {
		const response = yield call(api.fetchArticlesFromAPI, action.offSet);
		yield put(articlesActions.fetchArticlesByMostRecentDone(response.data.articles, response.data.articlesCount));
	} catch (error) {
		yield put(articlesActions.fetchArticlesByMostRecentError(error));
	}
}

function* fetchArticlesByAuthorAsync(action) {
	try {
		const response = yield call(api.fetchArticlesByAuthorFromAPI, action.username);
		yield put(articlesActions.fetchArticlesByAuthorDone(response.data.articles));
	} catch (error) {
		yield put(articlesActions.fetchArticlesByAuthorError(error));
	}
}

function* fetchFavoriteArticlesAsync(action) {
	try {
		const response = yield call(api.fetchFavoriteArticlesFromAPI, action.username);
		yield put(articlesActions.fetchFavoriteArticlesDone(response.data.articles));
	} catch (error) {
		yield put(articlesActions.fetchFavoriteArticlesError(error));
	}
}

function* fetchArticlesByTagAsync(action) {
	const { tag, offSet } = action;
	try {
		const response = yield call(api.fetchArticlesByTagFromAPI, tag, offSet);
		console.log(response);
		yield put(articlesActions.fetchArticlesByTagDone(response.data.articles, response.data.articlesCount));
	} catch (error) {
		yield put(articlesActions.fetchArticlesByTagError(error));
	}
}

function* addArticleToFavoritesAsync(action) {
	try {
		const response = yield call(api.addArticleToFavoritesInApi, action.articleSlug);
		yield put(articlesActions.addArticleToFavoritesDone(response.data.article));
	} catch (error) {
		yield put(articlesActions.addArticleToFavoritesError(error));
	}
}

function* removeArticleFromFavoritesAsync(action) {
	try {
		const response = yield call(api.removeArticleFromFavoritesFromApi, action.articleSlug);
		yield put(articlesActions.removeArticleFromFavoritesDone(response.data.article));
	} catch (error) {
		yield put(articlesActions.removeArticleFromFavoritesError(error));
	}
}

export default function* watchArticlesSaga() {
	yield all([
		yield takeLatest(articlesTypes.FETCH_ARTICLES_BY_MOST_RECENT_REQUEST, fetchArticlesByMostRecentAsync),
		yield takeLatest(articlesTypes.FETCH_ARTICLES_BY_AUTHOR_REQUEST, fetchArticlesByAuthorAsync),
		yield takeLatest(articlesTypes.FETCH_FAVORITE_ARTICLES_REQUEST, fetchFavoriteArticlesAsync),
		yield takeLatest(articlesTypes.FETCH_ARTICLES_BY_TAG_REQUEST, fetchArticlesByTagAsync),
		yield takeLatest(articlesTypes.ADD_ARTICLE_TO_FAVORITES_REQUEST, addArticleToFavoritesAsync),
		yield takeLatest(articlesTypes.REMOVE_ARTICLE_FROM_FAVORITES_REQUEST, removeArticleFromFavoritesAsync)
	]);
}
