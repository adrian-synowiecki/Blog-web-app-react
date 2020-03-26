import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		color: theme.green
	}
}));

function LoadingSpinner({ center }) {
	const classes = useStyles();
	return (
		<CircularProgress
			style={
				center && {
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)'
				}
			}
			classes={{
				root: classes.root
			}}
		/>
	);
}

export default LoadingSpinner;
