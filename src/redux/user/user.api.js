import axiosInstance from 'utils/axios'

export const signUpInAPI = (userCreationData) => {
    return  axiosInstance.post('api/users', JSON.stringify(userCreationData));
}

export const loginInApi = (userLoginData) => {
    return axiosInstance.post('api/users/login', JSON.stringify(userLoginData));
}

export const updateUserInAPI = (userUpdateData) => {
    return  axiosInstance.put('api/user', JSON.stringify(userUpdateData));
}