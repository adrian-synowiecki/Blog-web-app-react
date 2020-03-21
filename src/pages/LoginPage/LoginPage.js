import React from 'react';
import { connect } from 'react-redux';

import AuthForm from '../../components/AuthForm/AuthForm';

import { loginRequest, clearError } from '../../redux/currentUser/currentUser.actions';

function LoginPage({ error, loginRequest, clearError }) {
	return <AuthForm error={error} loginRequest={loginRequest} clearError={clearError} />;
}

const mapStateToProps = (state) => ({
	error: state.currentUser.error
});

const mapDispatchToProps = (dispatch) => ({
	loginRequest: (userLoginData) => dispatch(loginRequest(userLoginData)),
	clearError: () => dispatch(clearError())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
