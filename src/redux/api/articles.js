import axiosInstance from '../../utils/axios'

export const fetchArticlesFromAPI = (offSet) => {
    return axiosInstance.get(`api/articles?offset=${offSet ? offSet : 0}`);
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

export const articleFavoritedInAPI = (slug) => {
    return axiosInstance.post(`api/articles/${slug}/favorite`);
}

export const articleUnfavoritedInAPI = (slug) => {
    return axiosInstance.delete(`api/articles/${slug}/favorite`);
}