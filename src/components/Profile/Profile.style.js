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

export const StyledNavLink = styled(NavLink)`
    color: gray;
    text-decoration: none;
    margin-left: 3rem;
    font-size: 1.2rem;
    padding: 1rem 1.5rem;
`;

export const NotFoundMessage = styled.p`
    margin-top: 3rem;
    font-size: 1.3rem;
    margin-left: 3rem;
`;
