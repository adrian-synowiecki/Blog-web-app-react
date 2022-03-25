import styled, { css } from 'styled-components/macro';
import { NavLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { ReactComponent as Home } from 'assets/home.svg';
import { ReactComponent as NewPost } from 'assets/newPost.svg';
import { ReactComponent as Settings } from 'assets/settings.svg';
import { ReactComponent as User } from 'assets/user.svg';

export const NavbarContainer = styled.nav`
	display: flex;
	align-items: center;
	background-color: var(--white);
	position: sticky;
	top: 0;
	z-index: 999;
	box-shadow: 0 4px 2px -2px rgba(0, 0, 0, .1);
	height: ${({ isOpenHamburgerMenu }) => (isOpenHamburgerMenu ? 'auto' : '5rem')};

`;

export const Brand = motion.custom(styled(Link)`
	color: var(--blue-1);
	text-decoration: none;
	font-weight: 700;
	font-size: 2.7rem;
	margin-left: 2rem;
`);

export const NavLinksWrapper = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	list-style: none;
`;

const iconStyles = css`
	width: 2rem;
	height: 2rem;
	margin-right: 1rem;
	fill: var(--blue-2);
`;

const iconHoverStyles = css`fill: var(--blue-1);`;

export const HomeIcon = styled(Home)`
	${iconStyles}
`;

export const NewPostIcon = styled(NewPost)`
	${iconStyles}
`;

export const SettingsIcon = styled(Settings)`
	${iconStyles}
`;

export const UserIcon = styled(User)`
	${iconStyles}
`;

const activeClassName = 'active';
export const NavLinkItem = styled(NavLink).attrs({
	activeClassName: activeClassName
})`
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom: 3px solid transparent;
	text-decoration: none;
	padding-bottom: 1rem;
	font-size: 1.3rem;
	letter-spacing: 0.1rem;
	margin-top: 1rem;
	color: var(--blue-1);
	&:hover {
		opacity: 0.8;
		border-bottom: 3px solid var(--blue-1);
		${NewPostIcon} {
			${iconHoverStyles}
		}
		${HomeIcon} {
			${iconHoverStyles}
		}
		${SettingsIcon} {
			${iconHoverStyles}
		}
		${UserIcon} {
			${iconHoverStyles}
		}
	}
	&.${activeClassName} {
		text-shadow: 1px 0px 0px black;
		border-bottom: 3px solid var(--blue-1);
	}
`;
