import React from 'react';

import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

import { Formik, Field } from 'formik';

import { signUpRequested, signInRequested } from '../../redux/actions/user';

import Button from '../Button/Button';

import { FormContainer, StyledForm, StyledTextField, Title, StyledLink } from './AuthForm.style';
function AuthForm({ loading, signupform, signUpRequested, signInRequested, Requested }) {
	return (
		<FormContainer>
			<Title>{signupform ? 'SIGN UP' : 'SIGN IN'}</Title>
			{signupform ? (
				<StyledLink to="/signIn">Have an account?</StyledLink>
			) : (
				<StyledLink to="/signUp">Need an account?</StyledLink>
			)}
			<Formik
				initialValues={{ username: '', email: '', password: '' }}
				onSubmit={(values, actions) => {
					const userObj = {
						user: {
							username: values.username,
							email: values.email,
							password: values.password
						}
					};

					signupform ? signUpRequested(userObj) : signInRequested(userObj);
					actions.resetForm();
				}}
			>
				{({ values, errors, touched }) => (
					<StyledForm>
						{signupform && (
							<Field
								name="username"
								type="text"
								component={StyledTextField}
								label="Username"
								margin="normal"
								variant="outlined"
							/>
						)}
						<Field
							name="email"
							type="email"
							component={StyledTextField}
							label="Email"
							margin="normal"
							variant="outlined"
						/>
						<Field
							name="password"
							component={StyledTextField}
							inputProps={{
								form: {
									type: 'password',
									autoComplete: 'off'
								}
							}}
							label="Password"
							margin="normal"
							variant="outlined"
						/>

						<Button type="submit" variant="contained">
							{signupform ? 'SIGN UP' : 'SIGN IN'}
						</Button>
					</StyledForm>
				)}
			</Formik>
		</FormContainer>
	);
}

const mapDispatchToProps = (dispatch) => {
	return {
		signUpRequested: (user) => dispatch(signUpRequested(user)),
		signInRequested: (user) => dispatch(signInRequested(user))
	};
};

export default withRouter(connect(null, mapDispatchToProps)(AuthForm));
