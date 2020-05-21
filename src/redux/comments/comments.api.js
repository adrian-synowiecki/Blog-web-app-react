import axiosInstance from "../../utils/axios";

export const fetchCommentsFromArticleFromAPI = (articleSlug) => {
    return axiosInstance.get(`api/articles/${articleSlug}/comments`);
}

export const addCommentToArticleInAPI = (commentCreationData, articleSlug) => {
    return axiosInstance.post(`api/articles/${articleSlug}/comments`, JSON.stringify(commentCreationData));
}

export const removeCommentFromArticle = (articleSlug, commentToDeleteId) => {
    return axiosInstance.delete(`api/articles/${articleSlug}/comments/${commentToDeleteId}`);
}