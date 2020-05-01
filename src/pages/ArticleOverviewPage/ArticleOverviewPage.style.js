import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

import { ReactComponent as TrashCan } from 'assets/trash.svg';
import { ReactComponent as Modify } from 'assets/modify.svg';

import HeaderComponent from 'components/Header/Header';
import CommentFormComponent from 'components/CommentForm/CommentForm';

export const Header = styled(HeaderComponent)`
	background-color: ${({ theme }) => theme.colors.blue2};
	min-height: 16rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	padding: 2rem 2rem;
`;

export const Title = styled.h1`
	color: #edede8;
	letter-spacing: 0.1rem;
	font-weight: 400;
	overflow-wrap: break-word;
	margin-bottom: 2rem;
`;

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
`;

export const DeleteButton = styled.button`
	display: flex;
	align-items: center;
	border: none;
	outline: none;
	border-radius: 8rem;
	cursor: pointer;
	background-color: #d12449;
	color: #e6eced;
	padding: 0.3rem 0.5rem;
	font-size: 1.1rem;
	&:hover {
		opacity: 0.9;
	}
	&:active {
		opacity: 0.8;
	}
`;

export const ModifyButton = styled.button`
	display: flex;
	align-items: center;
	border: none;
	outline: none;
	border-radius: 8rem;
	cursor: pointer;
	background-color: #55abb5;
	color: #e6eced;
	padding: 0.3rem 0.5rem;
	font-size: 1.1rem;
	margin-right: 3rem;
	&:hover {
		opacity: 0.9;
	}
	&:active {
		opacity: 0.8;
	}
`;

// #3cc3e8;

export const IconsWrapper = styled.div`
	display: flex;
	/* margin-left: 10rem; */
`;

export const IconWrapper = styled.div`
	background-color: white;
	padding: ${({ includePadding }) => includePadding && '0.6rem'};
	border-radius: 8rem;
	display: flex;
	align-items: center;
	margin-right: 0.5rem;
`;

export const TrashCanIcon = styled(TrashCan)`
	width: 1.8rem;
	height: 1.8rem;
	background-color: white;
	border-radius: 8rem;
	fill: #ba3f3f;
`;

export const ModifyIcon = styled(Modify)`
	width: 3rem;
	height: 3rem;
	background-color: white;
	border-radius: 8rem;
	fill: #55abb5;

	svg {
		height: 0.5rem;
		width: 0.5rem;
	}
`;

export const MainWrapper = styled.div`margin: 3rem 2rem;`;

export const Text = styled.p`
	margin-bottom: 3rem;
	overflow-wrap: break-word;
`;

export const CommentForm = styled(CommentFormComponent)`
	margin: 3rem 0;
`;

export const AuthInvite = styled.p`
	margin-top: 5rem;
	margin-bottom: 3rem;
	font-size: 1.4rem;
`;

export const AuthInviteSpan = styled(Link)`
	color: ${({ theme }) => theme.colors.blue2};
    font-weight: 500;
    text-decoration: none;
`;
