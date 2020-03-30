import styled, { css } from 'styled-components/macro';
import { NavLink, Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 1rem;
`;

export const NavbarBrandExtended = styled(Link)`
	color: ${({ theme }) => theme.colors.blue1};
	text-decoration: none;
	font-weight: 700;
	font-size: 2.3rem;
	margin-left: 2rem;
`;

export const NavLinks = styled.ul`margin-right: 2rem;`;

/* export const NavLinkExtended = styled(NavLink)`
	text-decoration: none;
	padding-bottom: 1rem;
	margin-right: 2rem;
	font-size: 1.4rem;
	letter-spacing: 0.1rem;
	color: ${({ theme }) => theme.colors.blue1};

	&:hover {
		opacity: 0.5;
		border-bottom: ${({ theme }) => theme.activeLinkStyle.borderBottom};
		color: 	${({ isActive }) => isActive && 'red'}	
	}

`; */

const activeClassName = 'active';
export const NavLinkExtended = styled(NavLink).attrs({
	activeClassName: activeClassName
})`
	text-decoration: none;
	padding-bottom: 1rem;
	margin-right: 2rem;
	font-size: 1.4rem;
	letter-spacing: 0.1rem;
	color: ${({ theme }) => theme.colors.blue1};

	&:hover {
		opacity: 0.5;
		border-bottom: ${({ theme }) => theme.activeLinkStyle.borderBottom};
	}
  &.${activeClassName} {
	&:hover {
		 opacity: 0.8
	};
  }
`;
