import React from 'react';
import { connect } from 'react-redux';
import { goBack } from 'connected-react-router';

import * as S from './NotFound.style';

import Button from 'components/Button/Button';

function NotFound({ children, goBack, clearError, hasError }) {
	const handleOnClick = () => {
		goBack();
		if (hasError) {
			clearError();
		}
	};

	return (
		<S.NotFoundContainer>
			<S.NotFoundMessage>{children}</S.NotFoundMessage>
			<Button onClick={handleOnClick} style={{ marginTop: '1rem' }}>
				Click to go back
			</Button>
		</S.NotFoundContainer>
	);
}

export default connect(null, { goBack })(NotFound);
