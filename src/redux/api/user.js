import axiosInstance from '../../utils/axios'

export const signUpInAPI = (user) => {
    return  axiosInstance.post('api/users', JSON.stringify(user));
}

export const signIninAPI = (user) => {
    return axiosInstance.post('api/users/login', JSON.stringify(user));
}

export const updateUserInAPI = (updatedUser) => {
    return  axiosInstance.put('api/user', JSON.stringify(updatedUser));
}