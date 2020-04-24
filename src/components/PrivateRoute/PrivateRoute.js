import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ isAuth, children, ...rest }) {
	return (
		<Route
			{...rest}
			render={({ location }) =>
				isAuth ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: location }
						}}
					/>
				)}
		/>
	);
}

const mapStateToProps = (state) => ({
	isAuth: state.user.isAuth
});

export default connect(mapStateToProps)(PrivateRoute);

