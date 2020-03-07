import axiosInstance from "../../utils/axios";

export const fetchCommentsFromArticleFromAPI = (slug) => {
    return axiosInstance.get(`api/articles/${slug}/comments`);
}

export const addCommentToArticleInAPI = (userObj, slug) => {
    return axiosInstance.post(`api/articles/${slug}/comments`, JSON.stringify(userObj));
}

export const removeCommentFromArticle = (slug, commentId) => {
    return axiosInstance.delete(`api/articles/${slug}/comments/${commentId}`);
}