import styled from 'styled-components/macro';
import { NavLink as NavLinkComponent } from 'react-router-dom';

export const ProfileContainer = styled.div`margin: 3rem 2rem;`;

export const CredentialsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
	min-height: 11rem;
`;

export const UserImage = styled.img`
	border-radius: 8rem;
	width: 11rem;
	height: 11rem;
`;

export const Username = styled.h1`
	margin-top: 0.5rem;
	color: ${({ theme }) => theme.colors.blue2};
`;

export const Bio = styled.p`
	color: ${({ theme }) => theme.colors.blue2};
	font-size: 1.5rem;
`;

export const Wrapper = styled.div`
	position: relative;
	margin-top: 3rem;
	min-height: 22rem;
`;

export const NavLinkUnderline = styled.div`
	height: 0.3rem;
	background-color: ${({ theme }) => theme.colors.blue1};
	transition: 0.4s ease;
	margin-top: 1rem;
`;

export const NavLink = styled(NavLinkComponent)`
	text-decoration: none;
	margin-right: 2rem;
	font-size: 1.4rem;
	letter-spacing: 0.1rem;
	color: ${({ theme }) => theme.colors.blue1};
	&:hover {
		color: ${({ theme }) => theme.colors.blue3};
	}
	&.active {
		text-shadow: .25px 0px .1px,
                    -.25px 0px .1px;
	~ ${NavLinkUnderline} {
			width: ${({ width }) => width && `${width}px`}; 
			margin-left: ${({ marginLeft }) => `${marginLeft}px`};
		}
	}
`;

export const NotFoundMessage = styled.p`
	font-size: 1.3rem;
	margin-top: 2rem;
`;
