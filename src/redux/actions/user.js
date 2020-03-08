import userTypes from '../types/user';

export const signUpRequested = (userRegisterData) => ({
	type: userTypes.SIGN_UP_REQUESTED,
	userRegisterData
});

export const signUpDone = (currentUserData) => ({
	type: userTypes.SIGN_UP_DONE,
	payload: { currentUserData }
});

export const signUpError = (error) => ({
	type: userTypes.SIGN_UP_ERROR,
	payload: error
});

export const signInRequested = (userLoginData) => ({
	type: userTypes.SIGN_IN_REQUESTED,
	userLoginData
});

export const signInDone = (currentUserData) => ({
	type: userTypes.SIGN_IN_DONE,
	payload: { currentUserData }
});

export const signInError = (error) => ({
	type: userTypes.SIGN_IN_ERROR,
	payload: { error }
});

export const updateUserRequested = (currentUserUpdateData) => ({
	type: userTypes.UPDATE_USER_REQUESTED,
	currentUserUpdateData
});

export const updateUserDone = (currentUserData) => ({
	type: userTypes.UPDATE_USER_DONE,
	payload: { currentUserData }
});

export const updateUserError = (error) => ({
	type: userTypes.UPDATE_USER_ERROR,
	payload: { error }
});
