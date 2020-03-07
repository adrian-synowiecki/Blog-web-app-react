/* import axiosInstance from '../../utils/axios';


 FETCH_SINGLE_ARTICLE_REQUESTED = 'FETCH_SINGLE_ARTICLE_REQUESTED';
FETCH_SINGLE_ARTICLE_DONE = 'FETCH_SINGLE_ARTICLE_DONE';
 FETCH_SINGLE_ARTICLE_ERROR = 'FETCH_SINGLE_ARTICLE_ERROR';

 CREATE_ARTICLE_REQUESTED = 'CREATE_ARTICLE_REQUESTED';
 CREATE_ARTICLE_DONE = 'CREATE_ARTICLE_DONE';
CREATE_ARTICLE_ERROR = 'CREATE_ARTICLE_ERROR';

 FETCH_SINGLE_ARTICLE_UNMOUNTED = 'FETCH_SINGLE_ARTICLE_UNMOUNTED';



const fetchSingleArticleDone = (singleArticle) => ({
	type: FETCH_SINGLE_ARTICLE_DONE,
	payload: singleArticle
});

export const fetchSingleArticleUnmounted = () => ({
	type: FETCH_SINGLE_ARTICLE_UNMOUNTED
});

export default function singleArticle(state = {}, action) {
	switch (action.type) {
		case FETCH_SINGLE_ARTICLE_DONE:
			return { ...state, article: { ...action.payload } };
		case FETCH_SINGLE_ARTICLE_UNMOUNTED:
			return {}
		default:
			return state;
	}
}

export const fetchSingleArticle = (slug) => {
	return async (dispatch) => {
		try {
			const response = await axiosInstance.get(`api/articles/${slug}`);
			dispatch(fetchSingleArticleDone(response.data.article));
		} catch (error) {
			console.log(error.response);
		}
	};
};

export const createArticle = (articleDataObj) => {
	return async (dispatch) => {
		console.log(articleDataObj);
		try {
			await axiosInstance.post('api/articles', JSON.stringify(articleDataObj));
		} catch (error) {
			console.log(error.response);
		}
	};
};

export const updateArticle = (slug, articleDataObj) => {
	return async (dispatch) => {
		try {
			await axiosInstance.put(`api/articles/${slug}`, JSON.stringify(articleDataObj));
		} catch (error) {
			console.log(error.response);
		}
	};
};

export const deleteArticle = (slug) => {
	return async (dispatch) => {
		try {
			console.log('dispatched');
			await axiosInstance.delete(`api/articles/${slug}`);
		} catch (error) {
			console.log(error.response);
		}
	};
};
 */