import styled from 'styled-components/macro';
import { NavLink, Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
/* 	background-color: ${({ theme }) => theme.colors.blue2};  */
	background-color: #fcfafa;
	position: sticky;
  	top: 0;
	width: 100%;
	z-index: 999;
    box-shadow: 0 4px 2px -2px rgba(0,0,0,.1);
`;

export const NavbarBrandExtended = styled(Link)`
	color: ${({ theme }) => theme.colors.blue1};
	text-decoration: none;
	font-weight: 700;
	font-size: 2.3rem;
	margin-left: 2rem;
`;

export const NavLinks = styled.ul`
	position: relative;
	margin-right: 2rem;
`;

export const NavLinkUnderline = styled.div`
	height: 0.3rem;
	background-color: ${({ theme }) => theme.colors.blue1};
	transition: 0.4s ease;
	width: 0;
`;

const activeClassName = 'active';
export const NavLinkExtended = styled(NavLink).attrs({
	activeClassName: activeClassName
})`
	display: inline-block;
	text-decoration: none;
	padding-bottom: 1rem;
	margin-right: 2rem;
	font-size: 1.4rem;
	letter-spacing: 0.1rem;
	color: ${({ theme }) => theme.colors.blue1};
	&:hover {
		color: ${({ theme }) => theme.colors.blue3};
	}
	&.${activeClassName} {
		font-weight: bold;
	~ ${NavLinkUnderline} {
			width: ${({ width }) => width && `${width}px`}; 
			margin-left: ${({ marginLeft }) => `${marginLeft}px`};
		}
	}

`;
