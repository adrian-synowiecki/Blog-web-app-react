import React from 'react';

import { NavbarContainer, NavbarBrand, NavLinks, StyledLink } from './Navbar.style';

function Navbar({ currentUserData, isAuth, fetchArticlesByMostRecentRequest, setCurrentPageNumberToFirst }) {
	const handleClick = () => {
		fetchArticlesByMostRecentRequest();
		setCurrentPageNumberToFirst();
	};

	return (
		<NavbarContainer>
			<NavbarBrand onClick={handleClick} to="/">
				conduit
			</NavbarBrand>
			<NavLinks>
				<StyledLink to="/">Home</StyledLink>
				{!isAuth && <StyledLink to="/login">Log in</StyledLink>}
				{!isAuth && <StyledLink to="/signUp">Sign up</StyledLink>}
				{isAuth && <StyledLink to="/createNewArticle">New Post</StyledLink>}
				{isAuth && <StyledLink to="/userSettings">Settings</StyledLink>}
				{isAuth && (
					<StyledLink to={`/userProfile/${currentUserData.username}`}>{currentUserData.username}</StyledLink>
				)}
			</NavLinks>
		</NavbarContainer>
	);
}

export default Navbar;
