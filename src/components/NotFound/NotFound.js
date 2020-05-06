import React from 'react';
import { connect } from 'react-redux';
import { goBack } from 'connected-react-router';

import * as S from './NotFound.style';

import Button from 'components/Button/Button';

function NotFound({ children, goBack }) {
	return (
		<S.NotFoundContainer>
			<S.NotFoundMessage>{children}</S.NotFoundMessage>
			<Button onClick={() => goBack()} style={{ marginTop: '1rem' }}>
				Click to go back
			</Button>
		</S.NotFoundContainer>
	);
}

export default connect(null, { goBack })(NotFound);
