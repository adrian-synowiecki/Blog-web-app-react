import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

import HeaderComponent from 'components/Header/Header';
import CommentFormComponent from 'components/CommentForm/CommentForm';

export const OverviewWrapper = styled.div`margin: 3rem 2rem;`;

export const OverviewHeaderWrapper = styled(HeaderComponent)`
	background-color: ${({ theme }) => theme.colors.blue2};
	height: 16rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	padding: 0 2rem;
`;

export const ArticleTitle = styled.h1`
	color: #edede8;
	letter-spacing: 0.1rem;
	font-weight: 400;
	overflow-wrap: break-word;
`;

export const ArticleText = styled.p`
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
