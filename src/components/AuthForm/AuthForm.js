import React, { useState, useRef, useEffect } from 'react';
import { Formik, Field } from 'formik';

import { FormContainer, StyledForm, StyledTextField, Title, StyledLink } from './AuthForm.style';

import ErrorList from 'components/ErrorList/ErrorList';
import Button from 'components/Button/Button';

function AuthForm({ error, signUpPage, signUpRequest, loginRequest }) {
	const [ isReadOnly, setReadOnly ] = useState(true);
	const formikRef = useRef(null);
	const handleFocus = () => {
		setReadOnly(false);
	};

	useEffect(
		() => {
			formikRef.current.setSubmitting(false);
		},
		[ error ]
	);

	return (
		<FormContainer>
			<Title>{signUpPage ? 'SIGN UP' : 'LOG IN'}</Title>
			{signUpPage ? (
				<StyledLink to="/login">Have an account?</StyledLink>
			) : (
				<StyledLink to="/signUp">Need an account?</StyledLink>
			)}
			<Formik
				ref={formikRef}
				initialValues={{ username: '', email: '', password: '' }}
				onSubmit={(values) => {
					const userObj = {
						user: {
							username: values.username,
							email: values.email,
							password: values.password
						}
					};

					signUpPage ? signUpRequest(userObj) : loginRequest(userObj);
				}}
			>
				{({ isSubmitting }) => (
					<StyledForm>
						{error && <ErrorList error={error} />}
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
							type="email"
							autocomplete="off"
							component={StyledTextField}
							label="Email"
							margin="normal"
							variant="outlined"
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
						<Button type="submit" disabled={isSubmitting} variant="contained">
							{signUpPage ? 'SIGN UP' : 'LOG IN'}
						</Button>
					</StyledForm>
				)}
			</Formik>
		</FormContainer>
	);
}

export default AuthForm;
