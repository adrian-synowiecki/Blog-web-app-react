import axiosInstance from '../../utils/axios'

export const fetchPopularTagsFromAPI = () => {
    return axiosInstance.get('/api/tags');
}