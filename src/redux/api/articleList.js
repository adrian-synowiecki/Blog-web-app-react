import axiosInstance from '../../utils/axios'

export const fetchArticlesFromAPI = (offset) => {
    return axiosInstance.get(`api/articles?offset=${offset ? offset : 0}`);
}

export const fetchArticlesByAuthorFromAPI = (username) => {
    return axiosInstance.get(`api/articles?author=${username}`);
}

export const fetchFavoriteArticlesFromAPI = (username) => {
    return axiosInstance.get(`api/articles?favorited=${username}`);
}

export const fetchArticlesByTagFromAPI = (tag) => {
    return axiosInstance.get(`api/articles?tag=${tag}`)
}

export const addArticleToFavoritesInApi = (articleSlug) => {
    return axiosInstance.post(`api/articles/${articleSlug}/favorite`);
}

export const removeArticleFromFavoritesFromApi = (articleSlug) => {
    return axiosInstance.delete(`api/articles/${articleSlug}/favorite`);
}
