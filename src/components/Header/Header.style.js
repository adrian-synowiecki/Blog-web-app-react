import styled from 'styled-components/macro';

import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
	background: ${({ articleHeader }) => (articleHeader ? 'gray' : '#5cb85c')};
	height: 19rem;
	box-shadow: inset 0 8px 8px -8px rgba(0, 0, 0, .3), inset 0 -8px 8px -8px rgba(0, 0, 0, .3);
	/* box-shadow: ${({ userProfileHeader }) =>
		userProfileHeader
			? 'none'
			: 'inset 0 8px 8px -8px rgba(0, 0, 0, .3), inset 0 -8px 8px -8px rgba(0, 0, 0, .3)'}; */
	text-shadow: 0 0 black;
`;

export const HeaderWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: ${({ articleHeader }) => (articleHeader ? 'flex-start' : 'center')};
	color: white;
	position: relative;
`;

export const HeaderTitle = styled.h1`
	font-size: 5rem;
	text-shadow: 0 1px 3px rgba(0, 0, 0, .3);
	margin-left: ${({ articleHeader }) => articleHeader && '1.7rem'};
`;

export const HeaderText = styled.p`
	font-weight: 300;
	letter-spacing: 0.1rem;
	font-size: 2rem;
	margin-left: ${({ articleHeader }) => articleHeader && '2rem'};
	margin-top: ${({ articleHeader }) => (articleHeader ? '0.1rem' : '-2.5rem')};
`;

export const FollowButton = styled(Link)`
	margin-top: -4rem;
	margin-left: 80%;
	margin-right: 5rem;
	text-decoration: none;
	color: white;
	border: 1px solid white;
	padding: 0 1rem;
	padding-bottom: 0.3rem;
	display: flex;
	flex-wrap: wrap;
	font-size: 1.2rem;
	white-space: nowrap;
	
`;

export const ImageProfile = styled.img`
	border-radius: 8rem;
	margin-top: 2rem;
	width: 11rem;
	height: 11rem;
`;

export const ArticleModify = styled.div`
	display: flex;
	margin-left: 20rem;
`;

export const EditArticle = styled.button`
	background: none;
	border: 1px solid #2a2e2b;
	cursor: pointer;

	&:hover {
		background: white;
	}
`;

export const DeleteArticle = styled.button`
	background: none;
	border: 1px solid #d1245b;
	margin-left: 1rem;
	color:  #d1245b;
	cursor: pointer;

	&:hover {
		background: white;
	}
`;
