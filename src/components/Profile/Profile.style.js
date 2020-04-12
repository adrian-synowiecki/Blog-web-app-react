import styled from 'styled-components/macro';

import { NavLink } from 'react-router-dom';

export const ProfileContainer = styled.div``;

export const UserInfo = styled.div`
	height: 19rem;
	margin-top: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
export const ImageProfile = styled.img`
	border-radius: 8rem;
	margin-top: 2rem;
	width: 11rem;
	height: 11rem;
`;

export const Username = styled.h2`color: black;`;

export const Bio = styled.p`
	margin-top: -2rem;
	color: black;
`;

export const ArticlesChoice = styled.div`margin-bottom: 1.1rem;`;

export const NavLinks = styled.div``;

export const ArticlesWrapper = styled.div`
	min-height: 19rem;
	position: relative;
	margin-top: 2rem;
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
	font-size: 1.4rem;
	letter-spacing: 0.1rem;
	color: ${({ theme }) => theme.colors.blue1};
	&:hover {
	/* 	opacity: 0.6; */
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
	margin-top: 3rem;
	font-size: 1.3rem;
	margin-left: 3rem;
`;
