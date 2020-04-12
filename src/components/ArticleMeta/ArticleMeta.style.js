import styled from 'styled-components/macro';

export const ArticleMetaContainer = styled.div`
	display: flex;
	margin-top: 3rem;
	position: absolute;
	margin-left: 1rem;
`;

export const ImageProfile = styled.img`
	width: 2.5rem;
	height: 2.5rem;
	margin-top: -0.4rem;
	border-radius: 8rem;
`;

export const FlexWrapperCol = styled.div`
	display: flex;
	width: 35rem;
	flex-wrap: wrap;
	flex-direction: column;
	margin-left: 0.5rem;
	margin-top: -0.3rem;
`;

export const AuthorName = styled.p`
	margin-top: -0.7rem;
	color: ${({ theme, articleOverviewPage }) => (articleOverviewPage ? '#e6e6e1' : theme.colors.blue2)};
`;

export const DateCreated = styled.p`
	margin-top: -1.7rem;
	color: gray;
	opacity: 0.8;
	font-size: 1rem;
	color: ${({ theme, articleOverviewPage }) => (articleOverviewPage ? '#e8e7e3' : theme.colors.blue3)};
`;
