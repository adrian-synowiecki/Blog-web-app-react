import React from 'react';
import { isEmpty } from 'lodash';

import { NavbarContainer, NavbarBrand, NavLinks, StyledLink } from './Navbar.style';

function Navbar({ currentUserData }) {
	return (
		<NavbarContainer>
			<NavbarBrand to="/">conduit</NavbarBrand>
			<NavLinks>
				<StyledLink to="/">Home</StyledLink>
				{isEmpty(currentUserData) && <StyledLink to="/login">Log in</StyledLink>}
				{isEmpty(currentUserData) && <StyledLink to="/signUp">Sign up</StyledLink>}
				{!isEmpty(currentUserData) && <StyledLink to="/createNewArticle">New Post</StyledLink>}
				{!isEmpty(currentUserData) && <StyledLink to="/userSettings">Settings</StyledLink>}
				{!isEmpty(currentUserData) && (
					<StyledLink to={`/userProfile/${currentUserData.username}`}>{currentUserData.username}</StyledLink>
				)}
			</NavLinks>
		</NavbarContainer>
	);
}

export default Navbar;
