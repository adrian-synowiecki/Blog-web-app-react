import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Formik, Field } from 'formik';

import { updateUserRequest, clearUserError } from 'redux/user/user.actions';

import { UserSettingsContainer, Title, StyledTextField, StyledForm } from './UserSettingsPage.style';

import Button from 'components/Button/Button';
import ErrorList from 'components/ErrorList/ErrorList';

function UserSettingsPage({ currentUserData, error, updateUserRequest, clearUserError }) {
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

	return (
		<UserSettingsContainer>
			<Title>Your Settings</Title>
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
					<StyledForm>
						{error && <ErrorList error={error} />}
						<Field
							name="image"
							type="text"
							component={StyledTextField}
							margin="dense"
							variant="outlined"
							label="URL of profile picture"
						/>

						<Field
							name="username"
							type="text"
							component={StyledTextField}
							label="Username"
							margin="normal"
							variant="outlined"
						/>

						<Field
							name="bio"
							type="text"
							component={StyledTextField}
							height
							margin="normal"
							variant="outlined"
							label="Short bio about you"
						/>
						<Field
							name="email"
							type="email"
							component={StyledTextField}
							autoComplete="current-email"
							label="Email"
							margin="normal"
							variant="outlined"
						/>

						<Field
							name="password"
							component={StyledTextField}
							type="password"
							label="New Password"
							margin="normal"
							variant="outlined"
						/>

						<Button disabled={isSubmitting} type="submit">
							Update Settings
						</Button>
					</StyledForm>
				)}
			</Formik>
		</UserSettingsContainer>
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
		clearUserError: () => dispatch(clearUserError())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSettingsPage);
