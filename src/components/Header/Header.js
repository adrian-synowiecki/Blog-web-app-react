import React from 'react';

import * as S from './Header.style';

function Header({ children, ...props }) {
	return <S.HeaderContainer {...props}>{children}</S.HeaderContainer>;
}

export default Header;