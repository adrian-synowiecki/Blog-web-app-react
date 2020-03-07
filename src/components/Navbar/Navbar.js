import React from 'react';
import { isEmpty } from 'lodash';

import { NavbarContainer, NavbarBrand, NavLinks, StyledLink } from './Navbar.style';

function Navbar({ userDetails }) {
	return (
		<NavbarContainer>
			<NavbarBrand to="/">conduit</NavbarBrand>
			<NavLinks>
				<StyledLink to="/">Home</StyledLink>
				{isEmpty(userDetails) && <StyledLink to="/signIn">Sign in</StyledLink>}
				{isEmpty(userDetails) && <StyledLink to="/signUp">Sign Up</StyledLink>}
				{!isEmpty(userDetails) && <StyledLink to="/createNewArticle">New Post</StyledLink>}
				{!isEmpty(userDetails) && <StyledLink to="/userSettings">Settings</StyledLink>}
				{!isEmpty(userDetails) && (
					<StyledLink to={`/userProfile/${userDetails.username}`}>{userDetails.username}</StyledLink>
				)}
			</NavLinks>
		</NavbarContainer>
	);
}

export default Navbar;
