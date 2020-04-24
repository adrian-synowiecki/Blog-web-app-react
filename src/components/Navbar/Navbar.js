import React, { useState } from 'react';

import './hamburgers.css';
import * as S from './Navbar.style';

function Navbar({ currentUserData, isAuth, fetchArticlesByMostRecentRequest, setCurrentPageNumberToFirst }) {
	const [ isOpenHamburgerMenu, toggleHamburgerMenu ] = useState(false);
	const { username } = currentUserData || {};

	const handleClick = (toggle) => {
		if (toggle) {
			toggleHamburgerMenu(!isOpenHamburgerMenu);
		}
		fetchArticlesByMostRecentRequest();
		setCurrentPageNumberToFirst();
	};

	return (
		<S.NavbarContainer isOpenHamburgerMenu={isOpenHamburgerMenu}>
			{!isOpenHamburgerMenu && (
				<S.NavbarBrandExtended onClick={() => handleClick()} to="/">
					conduit
				</S.NavbarBrandExtended>
			)}
			{isOpenHamburgerMenu && (
				<S.NavLinks>
					<S.NavLinkExtended exact to="/" onClick={() => handleClick('toggle')}>
						<S.HomeIcon /> Home
					</S.NavLinkExtended>
					{!isAuth && (
						<S.NavLinkExtended to="/login" onClick={() => toggleHamburgerMenu(!isOpenHamburgerMenu)}>
							Log in
						</S.NavLinkExtended>
					)}
					{!isAuth && (
						<S.NavLinkExtended to="/signUp" onClick={() => toggleHamburgerMenu(!isOpenHamburgerMenu)}>
							Sign up
						</S.NavLinkExtended>
					)}
					{isAuth && (
						<S.NavLinkExtended
							to="/createNewArticle"
							onClick={() => toggleHamburgerMenu(!isOpenHamburgerMenu)}
						>
							<S.NewPostIcon /> New Post
						</S.NavLinkExtended>
					)}
					{isAuth && (
						<S.NavLinkExtended to="/userSettings" onClick={() => toggleHamburgerMenu(!isOpenHamburgerMenu)}>
							<S.SettingsIcon /> Settings
						</S.NavLinkExtended>
					)}
					{isAuth && (
						<S.NavLinkExtended
							to={`/userProfile/${username}`}
							onClick={() => toggleHamburgerMenu(!isOpenHamburgerMenu)}
						>
							<S.UserIcon /> {username}
						</S.NavLinkExtended>
					)}
				</S.NavLinks>
			)}
			<button
				className={`hamburger ${isOpenHamburgerMenu ? 'hamburger--elastic is-active' : ''}`}
				type="button"
				onClick={() => toggleHamburgerMenu(!isOpenHamburgerMenu)}
			>
				<span class="hamburger-box">
					<span class="hamburger-inner" />
				</span>
			</button>
		</S.NavbarContainer>
	);
}

export default Navbar;
