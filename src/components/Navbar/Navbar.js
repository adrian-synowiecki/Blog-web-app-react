import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import * as S from './Navbar.style';

function Navbar({ currentUserData, isAuth, fetchArticlesByMostRecentRequest, setCurrentPageNumberToFirst }) {
	const themeContext = useContext(ThemeContext);
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
				<S.NavLinkExtended exact activeStyle={themeContext.activeLinkStyle} to="/">
					Home
				</S.NavLinkExtended>
				{!isAuth && (
					<S.NavLinkExtended activeStyle={themeContext.activeLinkStyle} to="/login">
						Log in
					</S.NavLinkExtended>
				)}
				{!isAuth && (
					<S.NavLinkExtended activeStyle={themeContext.activeLinkStyle} to="/signUp">
						Sign up
					</S.NavLinkExtended>
				)}
				{isAuth && (
					<S.NavLinkExtended activeStyle={themeContext.activeLinkStyle} to="/createNewArticle">
						New Post
					</S.NavLinkExtended>
				)}
				{isAuth && (
					<S.NavLinkExtended
						/* isActive={() => {
							return isActive;
						}} */
						activeStyle={themeContext.activeLinkStyle}
						to="/userSettings"
					>
						Settings
					</S.NavLinkExtended>
				)}
				{isAuth && (
					<S.NavLinkExtended activeStyle={themeContext.activeLinkStyle} to={`/userProfile/${username}`}>
						{username}
					</S.NavLinkExtended>
				)}
			</S.NavLinks>
		</S.NavbarContainer>
	);
}

export default Navbar;
