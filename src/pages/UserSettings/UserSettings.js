import React from 'react';
import { Formik, Field } from 'formik';

import Button from '../../components/Button/Button';

import { UserSettingsContainer, Title, StyledTextField, StyledForm } from './UserSettings.style';

import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

import { updateUserRequested } from '../../redux/actions/user'

function UserSettings({ userDetails, updateUserRequested, history }) {
	console.log(userDetails);
	return (
		<UserSettingsContainer>
			<Title>Your Settings</Title>
			<Formik
				initialValues={{
					profilePictureUrl: userDetails.image ? `${userDetails.image}` : '',
					username: `${userDetails.username}`,
					bio: userDetails.bio ? `${userDetails.bio}` : '',
					email: `${userDetails.email}`,
					password: ''
				}}
				onSubmit={(values, actions) => {
					const userObj = {
						user: {
							username: values.username,
							image: values.image,
							bio: values.bio
						}
					};
					console.log(values.password);
					updateUserRequested(userObj);
			/* 		history.push('/') */
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

						<Button type="submit">
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
		userDetails: state.user.userDetails
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateUserRequested: (updatedUserObj) => dispatch(updateUserRequested(updatedUserObj))
	};
};

/* export default connect(mapStateToProps, mapDispatchToProps)(UserSettings) */

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserSettings));
