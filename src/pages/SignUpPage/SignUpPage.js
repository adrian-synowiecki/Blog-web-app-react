import React from 'react';
import { connect } from 'react-redux';

import AuthForm from '../../components/AuthForm/AuthForm';
import { signUpRequest, clearError } from '../../redux/currentUser/currentUser.actions';

function SignUpPage({ error, signUpRequest, clearError }) {
	return <AuthForm signUpPage error={error} signUpRequest={signUpRequest} clearError={clearError} />;
}

const mapStateToProps = (state) => ({
	error: state.currentUser.error
});

const mapDispatchToProps = (dispatch) => ({
	signUpRequest: (userCreationData) => dispatch(signUpRequest(userCreationData)),
	clearError: () => dispatch(clearError())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
