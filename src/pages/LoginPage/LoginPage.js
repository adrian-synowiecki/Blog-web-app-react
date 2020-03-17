import React from 'react';
import { connect } from 'react-redux';

import AuthForm from '../../components/AuthForm/AuthForm';

function LoginPage({ inProgress, error }) {
	return <AuthForm inProgress={inProgress} error={error} />;
}

const mapStateToProps = (state) => ({
	inProgress: state.currentUser.inProgress,
	error: state.currentUser.error
});

export default connect(mapStateToProps)(LoginPage);
