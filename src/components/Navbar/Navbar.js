import React, { useState } from 'react';

import './hamburgers.css';
import * as S from './Navbar.style';

function Navbar({ currentUserData, isAuth, fetchArticlesByMostRecentRequest }) {
	const [ isOpenHamburgerMenu, toggleHamburgerMenu ] = useState(false);
	const { username } = currentUserData;

	const handleFetching = (toggle) => {
		if (toggle) {
			toggleHamburgerMenu(!isOpenHamburgerMenu);
		}
		fetchArticlesByMostRecentRequest();
	};

	return (
		<S.NavbarContainer isOpenHamburgerMenu={isOpenHamburgerMenu}>
			{!isOpenHamburgerMenu && (
				<S.Brand
					onClick={() => handleFetching()}
					to="/"
					whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
					whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
				>
					conduit
				</S.Brand>
			)}
			{isOpenHamburgerMenu && (
				<S.NavLinksWrapper>
					<li>
						<S.NavLinkItem exact to="/" onClick={() => handleFetching('toggle')}>
							<S.HomeIcon /> Home
						</S.NavLinkItem>
					</li>
					{!isAuth && (
						<li>
							<S.NavLinkItem to="/login" onClick={() => toggleHamburgerMenu(!isOpenHamburgerMenu)}>
								Log in
							</S.NavLinkItem>
						</li>
					)}
					{!isAuth && (
						<li>
							<S.NavLinkItem to="/signUp" onClick={() => toggleHamburgerMenu(!isOpenHamburgerMenu)}>
								Sign up
							</S.NavLinkItem>
						</li>
					)}
					{isAuth && (
						<li>
							<S.NavLinkItem
								to="/createNewArticle"
								onClick={() => toggleHamburgerMenu(!isOpenHamburgerMenu)}
							>
								<S.NewPostIcon /> New Post
							</S.NavLinkItem>
						</li>
					)}
					{isAuth && (
						<li>
							<S.NavLinkItem to="/userSettings" onClick={() => toggleHamburgerMenu(!isOpenHamburgerMenu)}>
								<S.SettingsIcon /> Settings
							</S.NavLinkItem>
						</li>
					)}
					{isAuth && (
						<li>
							<S.NavLinkItem
								to={`/profile/${username}`}
								onClick={() => toggleHamburgerMenu(!isOpenHamburgerMenu)}
							>
								<S.UserIcon /> {username}
							</S.NavLinkItem>
						</li>
					)}
				</S.NavLinksWrapper>
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
