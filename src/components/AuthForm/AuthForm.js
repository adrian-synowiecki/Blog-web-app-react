import React, { useState, useRef, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { useLocation } from 'react-router-dom';

import * as S from './AuthForm.style';

import ErrorList from 'components/ErrorList/ErrorList';
import Input from 'components/Input/Input';

function AuthForm({ error, signUpPage, signUpRequest, loginRequest }) {
	const [ isReadOnly, setReadOnly ] = useState(true);
	const formikRef = useRef(null);
	let location = useLocation();
	let { from } = location.state || { from: { pathname: '/' } };
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
		<S.AuthFormContainer>
			<S.Title>{signUpPage ? 'SIGN UP' : 'LOG IN'}</S.Title>
			{signUpPage ? (
				<S.LinkToAuth to="/login">Have an account?</S.LinkToAuth>
			) : (
				<S.LinkToAuth to="/signUp">Need an account?</S.LinkToAuth>
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
					signUpPage ? signUpRequest(userObj) : loginRequest(userObj, from);
				}}
			>
				{({ isSubmitting }) => (
					<Form style={{ width: '100%' }}>
						{error && <ErrorList error={error} />}
						{signUpPage && <Input name="username" type="text" autocomplete="off" label="Username" />}
						<Input name="email" type="email" autocomplete="off" label="Email" />
						<Input
							name="password"
							type="password"
							inputProps={{
								readOnly: isReadOnly,
								autoComplete: 'off'
							}}
							handleFocus={handleFocus}
							label="Password"
						/>
						<S.SignUpAndLogInButton
							type="submit"
							disabled={isSubmitting}
							variant="contained"
							whileTap={{ scale: 1 }}
						>
							{signUpPage ? 'SIGN UP' : 'LOG IN'}
						</S.SignUpAndLogInButton>
					</Form>
				)}
			</Formik>
		</S.AuthFormContainer>
	);
}

export default AuthForm;
