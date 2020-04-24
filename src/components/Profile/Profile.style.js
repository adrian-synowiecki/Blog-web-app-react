import styled from 'styled-components/macro';

import { NavLink } from 'react-router-dom';

export const ProfileContainer = styled.div`margin-top: 2rem;`;

export const UserInfo = styled.div`
	/* margin-top: 5rem; */
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-left: 2rem;
	padding-right: 2rem;
	/* margin-bottom: 5rem; */
/* 	min-height: 20rem; */
 	min-height: 15rem; 
`;
export const ImageProfile = styled.img`
	border-radius: 8rem;
	/* 	margin-top: 2rem; */
	width: 11rem;
	height: 11rem;
`;

export const Username = styled.h1`
	/* margin-bottom: 3rem; */
	color: ${({ theme }) => theme.colors.blue2};
`;

export const Bio = styled.p`
	color: black;
	margin-top: -1rem;
	color: ${({ theme }) => theme.colors.blue2};
	font-size: 1.5rem;
`;

export const NavLinks = styled.div`
	position: absolute;
	margin-top: -3.3rem;
`;

export const ArticlesWrapper = styled.div`
	min-height: 18rem;
	margin-top: 5rem;
	position: relative;
`;

export const NavLinkUnderline = styled.div`
	height: 0.3rem;
	background-color: ${({ theme }) => theme.colors.blue1};
	transition: 0.4s ease;
	width: 0;
	margin-top: 1rem;
`;

const activeClassName = 'active';
export const NavLinkExtended = styled(NavLink).attrs({
	activeClassName: activeClassName
})`
	text-decoration: none;
	margin-left: 2rem;
	margin-right: 1rem;
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

export const NotFoundMessage = styled.p`
	font-size: 1.3rem;
	margin-left: 2rem;
	padding-top: 2rem;
`;
