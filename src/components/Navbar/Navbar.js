import React, { useRef, useEffect, useState } from 'react';

import * as S from './Navbar.style';

function Navbar({ currentUserData, isAuth, fetchArticlesByMostRecentRequest, setCurrentPageNumberToFirst }) {
	const [ widths, setWidths ] = useState([]);
	const [ leftMargins, setLeftMargins ] = useState([]);
	let linkRefs = useRef([]);
	const { username } = currentUserData || {};

	const handleClick = () => {
		fetchArticlesByMostRecentRequest();
		setCurrentPageNumberToFirst();
	};

	useEffect(
		() => {
			setWidths(linkRefs.current.map((ref) => ref.offsetWidth));
			setLeftMargins(linkRefs.current.map((ref) => ref.offsetLeft - 40));
		},
		[ isAuth ]
	);

	linkRefs.current = [];
	const addToLinkRefs = (el) => {
		if (el && !linkRefs.current.includes(el)) {
			linkRefs.current.push(el);
		}
	};

	return (
		<S.NavbarContainer>
			<S.NavbarBrandExtended onClick={handleClick} to="/">
				conduit
			</S.NavbarBrandExtended>
			<S.NavLinks>
				<S.NavLinkExtended exact to="/" ref={addToLinkRefs} width={widths[0]} marginLeft={leftMargins[0]}>
					Home
				</S.NavLinkExtended>

				{!isAuth && (
					<S.NavLinkExtended to="/login" width={widths[1]} marginLeft={leftMargins[1]} ref={addToLinkRefs}>
						Log in
					</S.NavLinkExtended>
				)}
				{!isAuth && (
					<S.NavLinkExtended to="/signUp" ref={addToLinkRefs} width={widths[2]} marginLeft={leftMargins[2]}>
						Sign up
					</S.NavLinkExtended>
				)}
				{isAuth && (
					<S.NavLinkExtended
						to="/createNewArticle"
						width={widths[1]}
						marginLeft={leftMargins[1]}
						ref={addToLinkRefs}
					>
						New Post
					</S.NavLinkExtended>
				)}
				{isAuth && (
					<S.NavLinkExtended
						to="/userSettings"
						width={widths[2]}
						marginLeft={leftMargins[2]}
						ref={addToLinkRefs}
					>
						Settings
					</S.NavLinkExtended>
				)}
				{isAuth && (
					<S.NavLinkExtended
						to={`/userProfile/${username}`}
						width={widths[3]}
						marginLeft={leftMargins[3]}
						ref={addToLinkRefs}
					>
						{username}
					</S.NavLinkExtended>
				)}
				<S.NavLinkUnderline />
			</S.NavLinks>
		</S.NavbarContainer>
	);
}

export default Navbar;
