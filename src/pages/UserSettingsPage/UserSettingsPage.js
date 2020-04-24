import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { Formik, Field } from 'formik';

import * as S from './UserSettingsPage.style';
import { updateUserRequest, clearUserError, logOut } from 'redux/user/user.actions';

import Button from 'components/Button/Button';
import ErrorList from 'components/ErrorList/ErrorList';

function UserSettingsPage({ currentUserData, error, updateUserRequest, clearUserError, logOut, push }) {
	const formikRef = useRef(null);
	useEffect(
		() => {
			formikRef.current.setSubmitting(false);
		},
		[ error ]
	);
	useEffect(() => {
		return () => {
			clearUserError();
		};
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	window.onload = () => {
		clearUserError();
	};

	const handleLogout = () => {
		logOut();
		push('/')
	};

	return (
		<S.UserSettingsContainer>
			<S.Title>Profile Settings</S.Title>
			<Formik
				ref={formikRef}
				initialValues={{
					profilePictureUrl: currentUserData.image ? `${currentUserData.image}` : '',
					username: `${currentUserData.username}`,
					bio: currentUserData.bio ? `${currentUserData.bio}` : '',
					email: `${currentUserData.email}`,
					password: ''
				}}
				onSubmit={(values) => {
					const userUpdateData = {
						user: {
							username: values.username,
							image: values.image,
							bio: values.bio
						}
					};
					updateUserRequest(userUpdateData);
				}}
			>
				{({ isSubmitting }) => (
					<S.FormExtended>
						{error && <ErrorList error={error} />}
						<Field
							name="image"
							type="text"
							component={S.TextFieldExtended}
							margin="normal"
							variant="outlined"
							label="URL of profile picture"
						/>

						<Field
							name="username"
							type="text"
							component={S.TextFieldExtended}
							label="Username"
							margin="normal"
							variant="outlined"
						/>

						<Field
							name="bio"
							type="text"
							component={S.TextFieldExtended}
							height
							margin="normal"
							variant="outlined"
							label="Short bio about you"
						/>
						<Field
							name="email"
							type="email"
							component={S.TextFieldExtended}
							autoComplete="current-email"
							label="Email"
							margin="normal"
							variant="outlined"
						/>

						<Field
							name="password"
							component={S.TextFieldExtended}
							type="password"
							label="New Password"
							margin="normal"
							variant="outlined"
						/>
						<S.ButtonsWrapper>
							<S.LogoutButton disabled={isSubmitting} type="submit" onClick={handleLogout}>
								Click here to logout
							</S.LogoutButton>
							<Button disabled={isSubmitting} type="submit">
								Update Settings
							</Button>
						</S.ButtonsWrapper>
					</S.FormExtended>
				)}
			</Formik>
		</S.UserSettingsContainer>
	);
}

const mapStateToProps = (state) => {
	return {
		currentUserData: state.user.currentUserData,
		error: state.user.error
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateUserRequest: (userUpdateData) => dispatch(updateUserRequest(userUpdateData)),
		clearUserError: () => dispatch(clearUserError()),
		logOut: () => dispatch(logOut()),
		push: (path) => dispatch(push(path))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSettingsPage);
