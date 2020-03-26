import React from 'react';
import { connect } from 'react-redux';
import { Formik, Field } from 'formik';

import { updateUserRequest } from '../../redux/currentUser/currentUser.actions';

import { UserSettingsContainer, Title, StyledTextField, StyledForm } from './UserSettingsPage.style';

import Button from '../../components/Button/Button';

function UserSettingsPage({ currentUserData, updateUserRequest }) {
	console.log(currentUserData);
	return (
		<UserSettingsContainer>
			<Title>Your Settings</Title>
			<Formik
				initialValues={{
					profilePictureUrl: currentUserData.image ? `${currentUserData.image}` : '',
					username: `${currentUserData.username}`,
					bio: currentUserData.bio ? `${currentUserData.bio}` : '',
					email: `${currentUserData.email}`,
					password: ''
				}}
				onSubmit={(values, actions) => {
					const userUpdateData = {
						user: {
							username: values.username,
							image: values.image,
							bio: values.bio
						}
					};
					console.log(values.password);
					updateUserRequest(userUpdateData);
				}}
			>
				{({ errors, touched, values }) => (
					<StyledForm>
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
							/* 	inputProps={{
								form: {
									autoComplete: 'off'
								}
							}} */
							name="password"
							label="New Password"
							margin="normal"
							variant="outlined"
						/>

						<Button type="submit">Update Settings</Button>
					</StyledForm>
				)}
			</Formik>
		</UserSettingsContainer>
	);
}

const mapStateToProps = (state) => {
	return {
		currentUserData: state.currentUser.currentUserData
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateUserRequest: (userUpdateData) => dispatch(updateUserRequest(userUpdateData))
	};
};

/* export default connect(mapStateToProps, mapDispatchToProps)(UserSettings) */

export default connect(mapStateToProps, mapDispatchToProps)(UserSettingsPage);
