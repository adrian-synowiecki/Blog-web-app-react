import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import { loginRequest, clearUserError } from 'redux/user/user.actions';

import AuthForm from 'components/AuthForm/AuthForm';

function LoginPage({ error, loginRequest, clearUserError }) {
	useEffect(() => {
		throw new Error("An error has occured in Buggy component!");
		return () => {
			clearUserError();
			
		};
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	window.onload = () => {
		clearUserError();
	};

	return <AuthForm error={error} loginRequest={loginRequest} />;
}

const mapStateToProps = (state) => ({
	error: state.user.error
});

const mapDispatchToProps = (dispatch) => ({
	loginRequest: (userLoginData, from) => dispatch(loginRequest(userLoginData, from)),
	clearUserError: () => dispatch(clearUserError())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
