import userTypes from './currentUser.types'

export const signUpRequest = (userCreationData) => ({
	type: userTypes.SIGN_UP_REQUEST,
	userCreationData
});

export const signUpDone = (currentUserData) => ({
	type: userTypes.SIGN_UP_DONE,
	payload: { currentUserData }
});

export const signUpError = (error) => ({
	type: userTypes.SIGN_UP_ERROR,
	payload: { error }
});

export const loginRequest = (userLoginData) => ({
	type: userTypes.LOGIN_REQUEST,
	userLoginData
});

export const loginDone = (currentUserData) => ({
	type: userTypes.LOGIN_DONE,
	payload: { currentUserData }
});

export const loginError = (error) => ({
	type: userTypes.LOGIN_ERROR,
	payload: { error }
});

export const updateUserRequest = (userUpdateData) => ({
	type: userTypes.UPDATE_USER_REQUEST,
	userUpdateData
});

export const updateUserDone = (currentUserData) => ({
	type: userTypes.UPDATE_USER_DONE,
	payload: { currentUserData }
});

export const updateUserError = (error) => ({
	type: userTypes.UPDATE_USER_ERROR,
	payload: { error }
});
