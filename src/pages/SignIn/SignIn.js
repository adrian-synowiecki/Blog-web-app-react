import React from 'react';
import { connect } from 'react-redux';

import AuthForm from '../../components/AuthForm/AuthForm';

function SignIn({isLoadingUser, userError}) {
	return <AuthForm isLoading={isLoadingUser} error={userError} />;
}


const mapStateToProps = (state) => ({
	isLoadingUser: state.user.isLoadingUser,
	userError: state.user.userError
})

export default connect(mapStateToProps)(SignIn);
