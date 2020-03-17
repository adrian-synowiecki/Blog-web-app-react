import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Formik, Field } from 'formik';

import { signUpRequest, loginRequest } from '../../redux/currentUser/currentUser.actions';

import { FormContainer, StyledForm, StyledTextField, Title, StyledLink } from './AuthForm.style';

import Button from '../Button/Button';

/* import styled, { css } from 'styled-components'; */
/* 
const ButtonAuth = styled.button`
	border-radius: 0.5rem;
	border: none;
	text-decoration: none;
	display: flex;
	align-self: flex-end;
	background: red;
	color: white;
	padding: 1rem 2rem;
	font-size: 1.6rem;
	margin-top: 1rem;
	text-align: center;
	cursor: pointer;
 	${({ disabled }) =>
		disabled &&
		css`
			background-color: red;
			opacity: .5;
			cursor: not-allowed;
		`};
`;
 */
function AuthForm({ signUpPage, signUpRequest, loginRequest, inProgress }) {
	const [ isReadOnly, setReadOnly ] = useState(true);
	const handleFocus = () => {
		setReadOnly(false);
	};
	return (
		<FormContainer>
			<Title>{signUpPage ? 'SIGN UP' : 'LOG IN'}</Title>
			{signUpPage ? (
				<StyledLink to="/login">Have an account?</StyledLink>
			) : (
				<StyledLink to="/signUp">Need an account?</StyledLink>
			)}
			<Formik
				initialValues={{ username: '', email: '', password: '' }}
				onSubmit={(values, actions) => {
					/* 	actions.setSubmitting(true); */
					const userObj = {
						user: {
							username: values.username,
							email: values.email,
							password: values.password
						}
					};

					signUpPage ? signUpRequest(userObj) : loginRequest(userObj);
					actions.resetForm();
					actions.setSubmitting(false);
				}}
			>
				{({ isSubmitting, handleSubmit }) => (
					<StyledForm onSubmit={handleSubmit}>
						{signUpPage && (
							<Field
								name="username"
								type="text"
								autocomplete="off"
								component={StyledTextField}
								label="Username"
								margin="normal"
								variant="outlined"
							/>
						)}
						<Field
							name="email"
							/* 	type="email"
						 */
							autocomplete="off"
							component={StyledTextField}
							label="Email"
							margin="normal"
							variant="outlined"
							type="text"
						/>

						<Field
							name="password"
							component={StyledTextField}
							type="password"
							inputProps={{
								readOnly: isReadOnly,
								autoComplete: 'off'
							}}
							onFocus={handleFocus}
							label="Password"
							margin="normal"
							variant="outlined"
						/>

						<Button type="submit" /* onClick={handleSubmit} */ disabled={isSubmitting} variant="contained">
							{signUpPage ? 'SIGN UP' : 'LOG IN'}
						</Button>
					</StyledForm>
				)}
			</Formik>
		</FormContainer>
	);
}

const mapDispatchToProps = (dispatch) => {
	return {
		signUpRequest: (userCreationData) => dispatch(signUpRequest(userCreationData)),
		loginRequest: (userLoginData) => dispatch(loginRequest(userLoginData))
	};
};

export default withRouter(connect(null, mapDispatchToProps)(AuthForm));
