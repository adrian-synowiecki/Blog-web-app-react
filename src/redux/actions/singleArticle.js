import singleArticleTypes from '../types/singleArticle'


export const fetchArticleRequested = (slug) => ({
    type: singleArticleTypes.FETCH_ARTICLE_REQUESTED,
    slug
})

export const fetchArticleDone = (singleArticle) => ({
	type: singleArticleTypes.FETCH_ARTICLE_DONE,
	payload: singleArticle
});

export const fetchArticleError = (error) => ({
	type: singleArticleTypes.FETCH_ARTICLE_ERROR,
	payload: error
    
});



export const createArticleRequested = (articleDataObj) => ({
    type: singleArticleTypes.CREATE_ARTICLE_REQUESTED,
    payload: articleDataObj

})

export const createArticleDone = () => ({
    type: singleArticleTypes.CREATE_ARTICLE_DONE,
  
})

export const createArticleError = (error) => ({
    type: singleArticleTypes.CREATE_ARTICLE_ERROR,
    payload: error
    
})


export const updateArticleRequested = (slug, articleDataObj) => ({
    type: singleArticleTypes.UPDATE_ARTICLE_REQUESTED,
    slug,
    articleDataObj
})

export const updateArticleDone = () => ({
    type: singleArticleTypes.UPDATE_ARTICLE_DONE
})

export const updateArticleError = (error) => ({
    type: singleArticleTypes.UPDATE_ARTICLE_ERROR,
    payload: error
    
})


export const deleteArticleRequested = (slug) => ({
    type: singleArticleTypes.DELETE_ARTICLE_REQUESTED,
    slug
})
   

export const deleteArticleDone = () => ({
    type: singleArticleTypes.DELETE_ARTICLE_DONE
})

export const deleteArticleError = (error) => ({
    type: singleArticleTypes.DELETE_ARTICLE_ERROR,
    payload: error
})

export const unloadArticle = () => ({
	type: singleArticleTypes.UNLOAD_ARTICLE	
})


/* export default {
	FETCH_SINGLE_ARTICLE_REQUESTED: 'FETCH_SINGLE_ARTICLE_REQUESTED',
	FETCH_SINGLE_ARTICLE_DONE: 'FETCH_SINGLE_ARTICLE_DONE',
	FETCH_SINGLE_ARTICLE_ERROR: 'FETCH_SINGLE_ARTICLE_ERROR',
    FETCH_SINGLE_ARTICLE_UNMOUNTED: 'FETCH_SINGLE_ARTICLE_UNMOUNTED',

	CREATE_ARTICLE_REQUESTED: 'CREATE_ARTICLE_REQUESTED',
	CREATE_ARTICLE_DONE: 'CREATE_ARTICLE_DONE',
	CREATE_ARTICLE_ERROR: 'CREATE_ARTICLE_ERROR',

    UPDATE_ARTICLE_REQUESTED: 'UPDATE_ARTICLE_REQUESTED',
    UPDATE_ARTICLE_DONE: 'UPDATE_ARTICLE_DONE',
    UPDATE_ARTICLE_ERROR: 'UPDATE_ARTICLE_ERROR',

    DELETE_ARTICLE_REQUESTED: 'DELETE_ARTICLE_REQUESTED',
    DELETE_ARTICLE_DONE: 'DELETE_ARTICLE_DONE',
    DELETE_ARTICLE_ERROR: 'DELETE_ARTICLE_ERROR'
};

 */