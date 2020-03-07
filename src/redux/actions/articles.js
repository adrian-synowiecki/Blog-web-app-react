import articlesTypes from '../types/articles'


export const fetchArticlesByMostRecentRequested = (offSet) => {
	return {
        type: articlesTypes.FETCH_ARTICLES_BY_MOST_RECENT_REQUESTED,
        offSet
	};
};
export const fetchArticlesByMostRecentDone = (articlesByMostRecent) => {
	return {
		type: articlesTypes.FETCH_ARTICLES_BY_MOST_RECENT_DONE,
		payload: articlesByMostRecent
	};
};
export const fetchArticlesByMostRecentFailure = (error) => {
	return {
		type: articlesTypes.FETCH_ARTICLES_BY_MOST_RECENT_FAILURE,
		payload: error
	};
};



export const fetchFavoriteArticlesRequested = (username) => ({
	type: articlesTypes.FETCH_FAVORITE_ARTICLES_REQUESTED,
	username
});

export const fetchFavoriteArticlesDone = (articles) => ({
	type: articlesTypes.FETCH_FAVORITE_ARTICLES_DONE,
	payload: articles
});

export const fetchFavoriteArticlesFailure = (error) => ({
	type: articlesTypes.FETCH_FAVORITE_ARTICLES_FAILURE,
	payload:error
    
});



export const fetchArticlesByAuthorRequested = (articleAuthorUsername) => ({
	type: articlesTypes.FETCH_ARTICLES_BY_AUTHOR_REQUESTED,
	articleAuthorUsername
});

export const fetchArticlesByAuthorDone = (articlesData) => ({
	type: articlesTypes.FETCH_ARTICLES_BY_AUTHOR_DONE,
	payload: articlesData
});

export const fetchArticlesByAuthorFailure = (error) => ({
	type: articlesTypes.FETCH_ARTICLES_BY_AUTHOR_FAILURE,
	payload:error
});



export const fetchArticlesByTagRequested = (tag) => ({
	type: articlesTypes.FETCH_ARTICLES_BY_TAG_REQUESTED,
	tag
})

export const fetchArticlesByTagDone = (articles) => ({
	type: articlesTypes.FETCH_ARTICLES_BY_TAG_DONE,
	payload: articles
})

export const fetchArticlesByTagFailure = (error) => ({
	type: articlesTypes.FETCH_ARTICLES_BY_TAG_FAILURE,
	payload: error
})




export const articleFavoritedRequested = (slug) => ({
	type: articlesTypes.ARTICLE_FAVORITED_REQUESTED,
	slug
});

export const articleFavoritedDone = (article) => ({
	type: articlesTypes.ARTICLE_FAVORITED_DONE,
	payload: article
});

export const articleFavoritedFailure = (error) => ({
	type: articlesTypes.ARTICLE_FAVORITED_FAILURE,
	payload:error
});



export const articleUnfavoritedRequested = (slug) => ({
	type: articlesTypes.ARTICLE_UNFAVORITED_REQUESTED,
	slug
});

export const articleUnfavoritedDone = (article) => ({
	type: articlesTypes.ARTICLE_UNFAVORITED_DONE,
	payload: article
});

export const articleUnfavoritedFailure = (error) => ({
	type: articlesTypes.ARTICLE_UNFAVORITED_FAILURE,
	payload: error
});

export const unloadArticles = () => ({
	type: articlesTypes.UNLOAD_ARTICLES
	
})