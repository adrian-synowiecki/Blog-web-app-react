import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import { loginRequest, clearUserError } from 'redux/user/user.actions';

import AuthForm from 'components/AuthForm/AuthForm';

function LoginPage({ error, loginRequest, clearUserError }) {
	useEffect(() => {
		return () => {
			clearUserError();
			
		};
	}, []);

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
