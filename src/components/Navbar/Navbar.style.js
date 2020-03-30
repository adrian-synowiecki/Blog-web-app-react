import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
	display: flex;
	align-items: center;
	background: white;
	justify-content: space-between;
`;

export const NavbarBrandExtended = styled(Link)`
	color: #2E4272;
	text-decoration: none;
	font-weight: 700;
	font-size: 2.3rem;
	margin-left: 2rem;
	margin-bottom: 0.5rem;


`;

export const NavLinks = styled.ul`
	margin-bottom: 2rem;
	display: flex;
	margin-right: 2rem;
`;

export const LinkExtended = styled(Link)`
	text-decoration: none;
	padding-right: 2rem;
	font-size: 1.4rem;
	color: #2E4272;
	/* color: green; */
/* 	color: white; */
`;
