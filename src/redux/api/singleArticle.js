import axiosInstance from '../../utils/axios'

export const fetchSingleArticleFromAPI = (slug) => {
    return axiosInstance.get(`api/articles/${slug}`);
}

export const createArticleInAPI = (articleDataObj) => {
    return axiosInstance.post('api/articles', JSON.stringify(articleDataObj));
}

export const updateArticleInAPI = (slug, articleDataObj) => {
    return  axiosInstance.put(`api/articles/${slug}`, JSON.stringify(articleDataObj));
}

export const deleteArticleInAPI = (slug) => {
    return axiosInstance.delete(`api/articles/${slug}`);
}