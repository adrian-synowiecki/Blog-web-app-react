import React from 'react';

import * as S from './Button.styles';

function Button({ children, ...props }) {
	return (
		<S.ButtonContainer whileTap={{ scale: 0.95, transition: { duration: 0.2 } }} {...props}>
			{children}
		</S.ButtonContainer>
	);
}

export default Button;
