import userTypes from '../types/user'

export const signUpRequested = (user) => ({
    type: userTypes.SIGN_UP_REQUESTED,
    user
});

export const signUpDone = (user) => ({
	type: userTypes.SIGN_UP_DONE,
	payload: user
});

export const signUpError = (error) => ({
	type: userTypes.SIGN_UP_ERROR,
	payload: error
});


export const signInRequested = (user) => ({
    type: userTypes.SIGN_IN_REQUESTED,
    user
});

export const signInDone = (user) => ({
	type: userTypes.SIGN_IN_DONE,
	payload: user
});

export const signInError = (error) => ({
	type: userTypes.SIGN_IN_ERROR,
	payload: error
});


export const updateUserRequested = (updatedUser) => ({
    type: userTypes.UPDATE_USER_REQUESTED,
    updatedUser
});

export const updateUserDone = (updatedUser) => ({
	type: userTypes.UPDATE_USER_DONE,
	payload: updatedUser
});

export const updateUserError = (error) => ({
	type: userTypes.UPDATE_USER_ERROR,
	payload: error
});