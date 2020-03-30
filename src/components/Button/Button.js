import React from 'react';

import * as S from './Button.styles'

function Button({ children, ...props }) {
	return <S.ButtonContainer {...props}>{children}</S.ButtonContainer>;
}

export default Button;
