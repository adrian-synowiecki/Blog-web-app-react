import React from 'react';

import * as S from './Navbar.style';

function Navbar({ currentUserData, isAuth, fetchArticlesByMostRecentRequest, setCurrentPageNumberToFirst }) {
	const { username } = currentUserData || {};
	const handleClick = () => {
		fetchArticlesByMostRecentRequest();
		setCurrentPageNumberToFirst();
	};

	return (
		<S.NavbarContainer>
			<S.NavbarBrandExtended onClick={handleClick} to="/">
				conduit
			</S.NavbarBrandExtended>
			<S.NavLinks>
				<S.LinkExtended to="/">Home</S.LinkExtended>
				{!isAuth && <S.LinkExtended to="/login">Log in</S.LinkExtended>}
				{!isAuth && <S.LinkExtended to="/signUp">Sign up</S.LinkExtended>}
				{isAuth && <S.LinkExtended to="/createNewArticle">New Post</S.LinkExtended>}
				{isAuth && <S.LinkExtended to="/userSettings">Settings</S.LinkExtended>}
				{isAuth && <S.LinkExtended to={`/userProfile/${username}`}>{username}</S.LinkExtended>}
			</S.NavLinks>
		</S.NavbarContainer>
	);
}

export default Navbar;
