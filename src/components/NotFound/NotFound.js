import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import * as S from './NotFound.style';

import Button from 'components/Button/Button';

function NotFound({ children, push }) {
	return (
		<S.NotFoundContainer>
			<S.NotFound>{children}</S.NotFound>
			<Button onClick={() => push('/')}>Click to go back</Button>
		</S.NotFoundContainer>
	);
}

const mapDispatchToProps = (dispatch) => ({
	push: (path) => dispatch(push(path))
});

export default connect(null, mapDispatchToProps)(NotFound);
