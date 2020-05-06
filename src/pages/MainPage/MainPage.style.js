import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

import PaginationComponent from 'components/Pagination/Pagination';
import HeaderComponent from 'components/Header/Header';

export const Header = styled(HeaderComponent)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
`;

export const Heading = styled.h1`
	color: #edf5ef;
	font-size: 5rem;
	text-shadow: 0 1px 3px rgba(0, 0, 0, .9);
	letter-spacing: 0.1rem;
	margin: 0;
`;

export const SubHeading = styled.h2`
	color: #edf5ef;
	font-size: 2rem;
	font-weight: 400;
	letter-spacing: 0.1rem;
	text-shadow: 0 1px 3px rgba(0, 0, 0, .9);
	margin: 0;
	margin-top: -3rem;
`;

export const Wrapper = styled.main`
	min-height: 19rem;
	margin: 3rem 2rem;
`;

export const NavLinkItem = styled(NavLink)`
	color: ${({ theme }) => theme.colors.blue1};
	text-decoration: none;
	margin-left: ${({ tag }) => tag && '2rem'};  
	padding: 1.5rem; 
	display: inline-block;
  	&.active {
		border-bottom: ${({ theme }) => `3px solid ${theme.colors.blue1}`};
		font-weight: bold;
	}
`;

export const Pagination = styled(PaginationComponent)`
	margin-top: 3rem;
	margin-bottom: 3rem;
`;

export const PopularTags = styled.h2`
	font-size: 1.4rem;
	margin-bottom: 1rem;
	color: ${({ theme }) => theme.colors.blue1};
	letter-spacing: 0.1rem;
	font-weight: 500;
	text-align: center;
`;