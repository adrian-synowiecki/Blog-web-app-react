import React from 'react';
import { connect } from 'react-redux';


import AuthForm from '../../components/AuthForm/AuthForm';

function SignUpPage({userError, isLoadingUser}) {

	return <AuthForm signupform isLoading={isLoadingUser} error={userError} />;
}

const mapStateToProps = (state) => ({
	/* isLoadingUser: state.user.isLoadingUser,
	userError: state.user.userError */
});

export default connect(mapStateToProps)(SignUpPage);
