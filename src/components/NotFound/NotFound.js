import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import * as S from './NotFound.style';

import Button from 'components/Button/Button';

function NotFound({ push }) {
	return (
		<S.NotFoundContainer>
			<S.NotFoundMessage>404 Page Not Found</S.NotFoundMessage>
			<Button onClick={() => push('/')}>Click to go back</Button>
		</S.NotFoundContainer>
	);
}

export default connect(null, { push })(NotFound);
