import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { signUpRequest, clearUserError } from 'redux/user/user.actions';

import AuthForm from 'components/AuthForm/AuthForm';

function SignUpPage({ error, signUpRequest, clearUserError }) {
	useEffect(() => {
		return () => {
			clearUserError();
		};
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	window.onload = () => {
		clearUserError();
	};

	return <AuthForm signUpPage error={error} signUpRequest={signUpRequest} />;
}

const mapStateToProps = (state) => ({
	error: state.user.error
});

const mapDispatchToProps = (dispatch) => ({
	signUpRequest: (userCreationData) => dispatch(signUpRequest(userCreationData)),
	clearUserError: () => dispatch(clearUserError())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
