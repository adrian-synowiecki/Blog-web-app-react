import React from 'react';
import { connect } from 'react-redux';

import AuthForm from '../../components/AuthForm/AuthForm';

function SignInPage({isFetching, error}) {
	return <AuthForm isFetching={isFetching} error={error} />;
}


const mapStateToProps = (state) => ({
	isFetching: state.currentUser.isFetching,
	error: state.currentUser.error
})

export default connect(mapStateToProps)(SignInPage);
