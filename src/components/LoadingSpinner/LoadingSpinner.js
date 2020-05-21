import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

function LoadingSpinner({ center, className }) {
	return (
		<CircularProgress
			className={className}
			style={
				center && {
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)'
				}
			}
		/>
	);
}

export default LoadingSpinner;
