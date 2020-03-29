import axiosInstance from 'utils/axios'

export const fetchArticleFromAPI = (articleSlug) => {
    return axiosInstance.get(`api/articles/${articleSlug}`);
}

export const createArticleInAPI = (articleCreationData) => {
    return axiosInstance.post('api/articles', JSON.stringify(articleCreationData));
}

export const updateArticleInAPI = (articleSlug, articleToUpdateData) => {
    return  axiosInstance.put(`api/articles/${articleSlug}`, JSON.stringify(articleToUpdateData));
}

export const deleteArticleInAPI = (articleSlug) => {
    return axiosInstance.delete(`api/articles/${articleSlug}`);
}