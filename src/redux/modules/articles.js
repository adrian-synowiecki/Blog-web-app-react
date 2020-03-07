/* import axiosInstance from '../../utils/axios';
import { favoriteArticlesListUpdateUtil } from './utils/favoriteArticles.utils';

const FETCH_ARTICLES_REQUESTED = 'FETCH_ARTICLES_REQUESTED';
const FETCH_ARTICLES_DONE = 'FETCH_ARTICLES_DONE';
const FETCH_ARTICLES_FAILURE = 'FETCH_ARTICLES_FAILTURE';

const FETCH_FAVORITE_ARTICLES_DONE = 'FETCH_FAVORITE_ARTICLE_DONE ';

const FETCH_ARTICLES_BY_AUTHOR_DONE = 'FETCH_ARTICLES_BY_AUTHOR_DONE ';

const FETCH_ARTICLES_BY_TAG_DONE = 'FETCH_ARTICLES_BY_TAG_DONE'
const FETCH_ARTICLES_BY_TAG_UNMOUNTED = 'FETCH_ARTICLES_BY_TAG_UNMOUNTED'

const ARTICLE_FAVORITED_DONE = 'ARTICLE_FAVORITED_DONE';
const ARTICLE_UNFAVORITED_DONE = 'ARTICLE_UNFAVORITED_DONE';



 const fetchArticlesRequested = () => {
	return {
		type: FETCH_ARTICLES_REQUESTED
	};
};
const fetchArticlesDone = (articlesData) => {
	return {
		type: FETCH_ARTICLES_DONE,
		payload: articlesData
	};
};
const fetchArticlesFailure = (error) => {
	return {
		type: FETCH_ARTICLES_FAILURE,
		payload: error
	};
}; 

 const fetchFavoriteArticlesDone = (articles) => ({
	type: FETCH_FAVORITE_ARTICLES_DONE,
	payload: articles
}); 

const fetchArticlesByAuthorDone = (articlesData) => ({
	type: FETCH_ARTICLES_BY_AUTHOR_DONE,
	payload: articlesData
});

const fetchArticlesByTagDone = (articles) => ({
	type: FETCH_ARTICLES_BY_TAG_DONE,
	payload: articles
})

const articleFavoritedDone = (article) => ({
	type: ARTICLE_FAVORITED_DONE,
	payload: article
});

const articleUnfavoritedDone = (article) => ({
	type: ARTICLE_UNFAVORITED_DONE,
	payload: article
});

export const fetchArticlesByTagUnmounted = () => ({
	type: FETCH_ARTICLES_BY_TAG_UNMOUNTED
})


 export default function articlesDataReducer(state = {}, action) {
	switch (action.type) {
		case FETCH_ARTICLES_REQUESTED:
			return { ...state, loading: true };
		case FETCH_ARTICLES_DONE:
			return { ...state, loading: false, articlesData: [ ...action.payload ] };
		case FETCH_ARTICLES_FAILURE:
			return { ...state, loading: false, error: action.payload };
		case FETCH_ARTICLES_BY_AUTHOR_DONE:
			return { ...state, userArticles: action.payload.articles, userArticlesCount: action.payload.articlesCount };
		case FETCH_FAVORITE_ARTICLES_DONE:
			return { ...state, favoriteArticlesList: [ ...action.payload ] };
		case FETCH_ARTICLES_BY_TAG_DONE:
			return {...state, articlesByTag: [...action.payload.articles]}
		case FETCH_ARTICLES_BY_TAG_UNMOUNTED:
			return {}
		case ARTICLE_FAVORITED_DONE:
		case ARTICLE_UNFAVORITED_DONE:
			return {
				...state,
				articlesData: favoriteArticlesListUpdateUtil(state.articlesData, action.payload.article),
				favoriteArticlesList: favoriteArticlesListUpdateUtil(state.favoriteArticlesList, action.payload.article)
			};
		default:
			return state;
	}
} 

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