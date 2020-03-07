import axiosInstance from '../../utils/axios'

export const fetchUserProfileFromAPI = (username) => {
    return axiosInstance.get(`api/profiles/${username}`);
}