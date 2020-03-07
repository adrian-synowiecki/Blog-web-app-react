import { all, put, call, takeLatest, takeEvery } from 'redux-saga/effects';

import articlesTypes from '../types/articles';
import * as articlesActions from '../actions/articles';
import * as api from '../api/articles';

function* fetchArticlesByMostRecent(action) {

	try {
		const response = yield call(api.fetchArticlesFromAPI, action.offSet);

		yield put(articlesActions.fetchArticlesByMostRecentDone(response.data.articles)); 
	} catch (error) {
		yield put(articlesActions.fetchArticlesByMostRecentFailure(error.response)); 
		console.log(error.response);
	}
}

function* fetchArticlesByAuthor(action) {

	try {
		const response = yield call(api.fetchArticlesByAuthorFromAPI, action.articleAuthorUsername);
		console.log(response.data.articles)
		yield put(articlesActions.fetchArticlesByAuthorDone(response.data.articles));
	} catch (error) {
	/* 	yield put(articlesActions.fetchArticlesByAuthorFailure(error.response)); */
		console.log(error);
	}
}

function* fetchFavoriteArticles(action) {

	try {
		const response = yield call(api.fetchFavoriteArticlesFromAPI, action.username);
		console.log(response)
		yield put(articlesActions.fetchFavoriteArticlesDone(response.data.articles));
	} catch (error) {
		yield put(articlesActions.fetchFavoriteArticlesFailure(error.response));
		console.log(error.response);
	}
}

function* fetchArticlesByTag(action) {

	try {
		const response = yield call(api.fetchArticlesByTagFromAPI, action.tag);
		yield put(articlesActions.fetchArticlesByTagDone(response.data.articles));
	} catch (error) {
		console.log(error.response);
	}
}

function* articleFavorited(action) {

	try {
		const response = yield call(api.articleFavoritedInAPI, action.slug);
	 	yield put(articlesActions.articleFavoritedDone(response.data)); 
	} catch (error) {
		yield put(articlesActions.articleFavoritedFailure);
		console.log(error.response);
	}
}

function* articleUnfavorited(action) {

	try {
		const response = yield call(api.articleUnfavoritedInAPI, action.slug);
		console.log(response.data)
		yield put(articlesActions.articleUnfavoritedDone(response.data)); 
	} catch (error) {
		yield put(articlesActions.articleUnfavoritedFailure);
		console.log(error.response);
	}
}

export default function* watchArticlesSaga() {
	yield all([
		yield takeLatest(articlesTypes.FETCH_ARTICLES_BY_MOST_RECENT_REQUESTED, fetchArticlesByMostRecent),
		yield takeLatest(articlesTypes.FETCH_ARTICLES_BY_AUTHOR_REQUESTED, fetchArticlesByAuthor),
		yield takeLatest(articlesTypes.FETCH_FAVORITE_ARTICLES_REQUESTED, fetchFavoriteArticles),
		yield takeLatest(articlesTypes.FETCH_ARTICLES_BY_TAG_REQUESTED, fetchArticlesByTag),
		yield takeLatest(articlesTypes.ARTICLE_FAVORITED_REQUESTED, articleFavorited),
		yield takeLatest(articlesTypes.ARTICLE_UNFAVORITED_REQUESTED, articleUnfavorited) 
	]);
}

/* import * as articlesActions from '../actions/articles'

export const fetchArticles = (offSet) => {
	return async (dispatch) => {
		dispatch(fetchArticlesRequested());
		try {
			const response = await axiosInstance.get(`api/articles?offset=${offSet ? offSet : 0}`);
			dispatch(fetchArticlesDone(response.data.articles));
		} catch (error) {
			dispatch(fetchArticlesFailure(error.message));
		}
	};
};

export const fetchArticlesByAuthor = (username) => {
	return async (dispatch) => {
		try {
			const response = await axiosInstance.get(`api/articles?author=${username}`);
			dispatch(fetchArticlesByAuthorDone(response.data));
		} catch (error) {
			console.log(error.response);
		}
	};
};

export const fetchFavoriteArticles = (username) => {
	return async (dispatch) => {
		try {
			const response = await axiosInstance.get(`api/articles?favorited=${username}`);
			dispatch(fetchFavoriteArticlesDone(response.data.articles));
		} catch (error) {
			console.log(error);
		}
	};
};

export const fetchArticlesByTag = (tag) => {
	return async dispatch => {
		try {
			const response = await axiosInstance.get(`api/articles?tag=${tag}`)
			dispatch(fetchArticlesByTagDone(response.data))
			
		} catch (error) {
			console.log(error)
		}
	}
}

export const articleFavorited = (slug) => {
	return async (dispatch) => {
		try {
			const response = await axiosInstance.post(`api/articles/${slug}/favorite`);
			console.log(response.data);
			const article = response.data;
			dispatch(articleFavoritedDone(article));
		} catch (error) {
			console.log(error);
		}
	};
};

export const articleUnfavorited = (slug) => {
	return async (dispatch) => {
		try {
			const response = await axiosInstance.delete(`api/articles/${slug}/favorite`);
			console.log(response.data);
			const article = response.data;
			dispatch(articleUnfavoritedDone(article));
		} catch (error) {
			console.log(error);
		}
	};
};
 */
